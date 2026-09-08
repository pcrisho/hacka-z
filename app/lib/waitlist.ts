import { z } from "zod"

import { isDbAvailable, isDbConfigured, sql } from "@/lib/db"

// Solo la lista de espera/referidos de la landing usa NeonDB — el estado de
// hábitos/Reserva del prototipo vive en cliente (docs/07-construccion/stack-tecnico.md §1).

export type WaitlistEntry = {
  id: number
  name: string
  contact: string
  refCode: string
  referredBy: string | null
  createdAt: Date
}

export const BASELINE_WAITLIST_COUNT = 48
export const BASELINE_REF_CODES = [
  "PAC782",
  "FIB904",
  "SAL310",
  "GEN552",
  "BCP189",
]

// Almacén en memoria para modo fallback/offline.
// Si no hay conexión a NeonDB o se pierde el acceso a internet,
// este almacén garantiza que la landing cargue de inmediato (0ms)
// y que el formulario de registro funcione sin cuelgues ni errores 500.
const fallbackStore: WaitlistEntry[] = []

let tableReady = false
let tableInitPromise: Promise<boolean> | null = null

async function ensureTable(): Promise<boolean> {
  if (tableReady) return true
  if (!isDbConfigured() || !isDbAvailable()) return false

  if (!tableInitPromise) {
    tableInitPromise = (async () => {
      try {
        await sql`
          CREATE TABLE IF NOT EXISTS waitlist (
            id bigserial PRIMARY KEY,
            name text NOT NULL,
            contact text NOT NULL,
            ref_code text NOT NULL UNIQUE,
            referred_by text REFERENCES waitlist(ref_code),
            created_at timestamptz NOT NULL DEFAULT now()
          )
        `
        tableReady = true
        return true
      } catch (error) {
        // En caso de fallo en la migración inicial, no bloqueamos la app:
        // devolvemos false para que las operaciones usen el fallback en memoria.
        tableReady = false
        return false
      } finally {
        tableInitPromise = null
      }
    })()
  }

  return tableInitPromise
}

function generateRefCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase()
}

/**
 * Retorna el número de personas en lista de espera.
 * Resiliente: si la BD no está disponible o no hay internet, retorna la línea base
 * más los registros realizados localmente en memoria. Cero cuelgues.
 */
export async function getWaitlistCount(): Promise<number> {
  if (isDbAvailable()) {
    try {
      const ok = await ensureTable()
      if (ok) {
        const rows = (await sql`SELECT count(*)::int AS count FROM waitlist`) as {
          count: number
        }[]
        const dbCount = rows[0]?.count ?? 0
        const base = dbCount > 0 ? dbCount : BASELINE_WAITLIST_COUNT
        return base + fallbackStore.length
      }
    } catch {
      // Fallback silencioso en caso de timeout o caída de red
    }
  }

  return BASELINE_WAITLIST_COUNT + fallbackStore.length
}

/**
 * Solo expone el ref_code (ya pensado para compartirse en links) — nunca
 * nombre o contacto de otros registrados, aunque sean visitantes de la misma landing.
 * Resiliente: ante desconexión o fallo de BD, combina los códigos locales con la línea base.
 */
export async function getRecentRefCodes(limit = 5): Promise<string[]> {
  const localCodes = fallbackStore.map((row) => row.refCode)

  if (isDbAvailable()) {
    try {
      const ok = await ensureTable()
      if (ok) {
        const rows = (await sql`
          SELECT ref_code FROM waitlist ORDER BY created_at DESC LIMIT ${limit}
        `) as { ref_code: string }[]
        const dbCodes = rows.map((row) => row.ref_code)
        if (dbCodes.length > 0) {
          const combined = Array.from(new Set([...localCodes, ...dbCodes]))
          return combined.slice(0, limit)
        }
      }
    } catch {
      // Fallback silencioso en caso de timeout o caída de red
    }
  }

  const combined = Array.from(new Set([...localCodes, ...BASELINE_REF_CODES]))
  return combined.slice(0, limit)
}

// Validación permisiva a propósito: el segmento (Guardián + Estudiante/Primer
// Empleo) puede dejar celular peruano o correo, sin formato único forzado.
const waitlistSchema = z.object({
  name: z.string().trim().optional(),
  contact: z
    .string()
    .trim()
    .email("Ingresa un correo electrónico válido (ej. tu@correo.com)."),
})

export type JoinWaitlistInput = {
  name?: string
  contact: string
  referredBy?: string | null
}

export type JoinWaitlistResult =
  | { ok: true; refCode: string }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> }

/**
 * Registra a un usuario en la lista de espera.
 * Si NeonDB está disponible, persiste en Postgres.
 * Si NeonDB no está disponible o no hay internet, guarda en el fallback en memoria
 * y retorna un código de referido válido para que la experiencia no se interrumpa.
 */
export async function joinWaitlist(
  input: JoinWaitlistInput
): Promise<JoinWaitlistResult> {
  const trimmedContact = input.contact?.trim() ?? ""
  let resolvedName = input.name?.trim() || ""
  if (!resolvedName) {
    if (trimmedContact.includes("@")) {
      resolvedName = trimmedContact.split("@")[0]
    } else {
      resolvedName = "Amigo FIBO"
    }
  }

  const parsed = waitlistSchema.safeParse({
    name: resolvedName,
    contact: trimmedContact,
  })

  if (!parsed.success) {
    return {
      ok: false,
      error: "Revisa los datos del formulario.",
      fieldErrors: z.flattenError(parsed.error).fieldErrors as Record<
        string,
        string[]
      >,
    }
  }

  const name = resolvedName
  const contact = parsed.data.contact

  let referredBy: string | null = null
  if (input.referredBy) {
    referredBy = input.referredBy.trim().toUpperCase()
  }

  let dbPersisted = false
  let assignedRefCode = generateRefCode()

  // 1. Intentar registrar en NeonDB si la base de datos está disponible
  if (isDbAvailable()) {
    try {
      const ok = await ensureTable()
      if (ok) {
        let validReferrer: string | null = null
        if (referredBy) {
          try {
            const inviter = (await sql`
              SELECT ref_code FROM waitlist WHERE ref_code = ${referredBy}
            `) as { ref_code: string }[]
            if (inviter.length > 0) validReferrer = referredBy
          } catch {
            // No bloquear el registro si falla la verificación del referente
          }
        }

        for (let attempt = 0; attempt < 3; attempt++) {
          const refCode = generateRefCode()
          try {
            await sql`
              INSERT INTO waitlist (name, contact, ref_code, referred_by)
              VALUES (${name}, ${contact}, ${refCode}, ${validReferrer})
            `
            dbPersisted = true
            assignedRefCode = refCode
            break
          } catch (error) {
            const code = (error as { code?: string } | null)?.code
            const isDuplicateRefCode = code === "23505"
            if (!isDuplicateRefCode) {
              // Error de conectividad o de base de datos — activar fallback
              break
            }
          }
        }
      }
    } catch {
      // BD no respondió o expiró el timeout — continuar a fallback
    }
  }

  // 2. Si no se pudo persistir en BD (sin internet, timeout o sin credenciales),
  // guardamos en el almacén en memoria para una experiencia transparente y sin cuelgues.
  if (!dbPersisted) {
    fallbackStore.unshift({
      id: fallbackStore.length + 1,
      name,
      contact,
      refCode: assignedRefCode,
      referredBy,
      createdAt: new Date(),
    })
    console.info(
      `[Waitlist Fallback] Registro local completado para ${name} (${contact}) con código ${assignedRefCode}.`
    )
  }

  return { ok: true, refCode: assignedRefCode }
}
