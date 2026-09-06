import { z } from "zod"

import { sql } from "@/lib/db"

// Solo la lista de espera/referidos de la landing usa NeonDB — el estado de
// hábitos/Reserva del prototipo vive en cliente (docs/07-construccion/stack-tecnico.md §1).

let tableReady: Promise<unknown> | null = null

function ensureTable() {
  if (!tableReady) {
    tableReady = sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id bigserial PRIMARY KEY,
        name text NOT NULL,
        contact text NOT NULL,
        ref_code text NOT NULL UNIQUE,
        referred_by text REFERENCES waitlist(ref_code),
        created_at timestamptz NOT NULL DEFAULT now()
      )
    `
  }
  return tableReady
}

function generateRefCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase()
}

export async function getWaitlistCount(): Promise<number> {
  await ensureTable()
  const rows = (await sql`SELECT count(*)::int AS count FROM waitlist`) as {
    count: number
  }[]
  return rows[0]?.count ?? 0
}

// Solo expone el ref_code (ya pensado para compartirse en links) — nunca
// nombre o contacto de otros registrados, aunque sean visitantes de la misma landing.
export async function getRecentRefCodes(limit = 5): Promise<string[]> {
  await ensureTable()
  const rows = (await sql`
    SELECT ref_code FROM waitlist ORDER BY created_at DESC LIMIT ${limit}
  `) as { ref_code: string }[]
  return rows.map((row) => row.ref_code)
}

// Validación permisiva a propósito: el segmento (Guardián + Estudiante/Primer
// Empleo) puede dejar celular peruano o correo, sin formato único forzado.
const waitlistSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Cuéntanos cómo te llamamos (mínimo 2 caracteres)."),
  contact: z
    .string()
    .trim()
    .min(6, "Déjanos un celular o correo válido.")
    .refine(
      (value) =>
        value.includes("@")
          ? z.email().safeParse(value).success
          : /^\+?\d{6,15}$/.test(value.replace(/[\s-]/g, "")),
      "Escribe un correo válido o un celular (solo números)."
    ),
})

export type JoinWaitlistInput = {
  name: string
  contact: string
  referredBy?: string | null
}

export type JoinWaitlistResult =
  | { ok: true; refCode: string }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> }

export async function joinWaitlist(
  input: JoinWaitlistInput
): Promise<JoinWaitlistResult> {
  await ensureTable()

  const parsed = waitlistSchema.safeParse({
    name: input.name,
    contact: input.contact,
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

  const { name, contact } = parsed.data

  // Solo se atribuye el referido si el código realmente existe — evitar
  // que un `?ref=` inventado o manipulado en la URL ensucie la cadena.
  let referredBy: string | null = null
  if (input.referredBy) {
    const code = input.referredBy.trim().toUpperCase()
    const inviter = (await sql`
      SELECT ref_code FROM waitlist WHERE ref_code = ${code}
    `) as { ref_code: string }[]
    if (inviter.length > 0) referredBy = code
  }

  for (let attempt = 0; attempt < 5; attempt++) {
    const refCode = generateRefCode()
    try {
      await sql`
        INSERT INTO waitlist (name, contact, ref_code, referred_by)
        VALUES (${name}, ${contact}, ${refCode}, ${referredBy})
      `
      return { ok: true, refCode }
    } catch (error) {
      const code = (error as { code?: string } | null)?.code
      const isDuplicateRefCode = code === "23505"
      if (!isDuplicateRefCode || attempt === 4) {
        return {
          ok: false,
          error: "No se pudo registrar tu lugar. Intenta de nuevo.",
        }
      }
    }
  }

  return { ok: false, error: "No se pudo registrar tu lugar. Intenta de nuevo." }
}
