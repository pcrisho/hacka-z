import { neon, type NeonQueryFunction } from "@neondatabase/serverless"

export class DbUnavailableError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "DbUnavailableError"
  }
}

const rawUrl = process.env.DATABASE_URL?.trim()
const hasValidUrl = Boolean(
  rawUrl && (rawUrl.startsWith("postgres://") || rawUrl.startsWith("postgresql://"))
)

// Cliente raw de NeonDB únicamente si existe DATABASE_URL válida
const rawClient: NeonQueryFunction<false, false> | null = hasValidUrl
  ? neon(rawUrl!)
  : null

// Estado del circuit breaker en memoria (fail-fast ante fallos de conexión)
let circuitBreakerUntil = 0
let lastErrorNotice = ""

// 1.5s de timeout máximo por consulta para prevenir que SSR o Server Actions se cuelguen si no hay internet
const QUERY_TIMEOUT_MS = 1500

export function isDbConfigured(): boolean {
  return hasValidUrl
}

export function isDbAvailable(): boolean {
  if (!hasValidUrl) return false
  if (Date.now() < circuitBreakerUntil) return false
  return true
}

export function getDbCooldownRemainingMs(): number {
  if (!hasValidUrl) return 0
  return Math.max(0, circuitBreakerUntil - Date.now())
}

/**
 * Tagged template literal para consultas SQL a NeonDB con protección contra cuelgues:
 * 1. Timeout estricto de 1.5s en cada consulta.
 * 2. Circuit breaker que ante el primer fallo/timeout silencia intentos por 30s (fail-fast 0ms).
 * 3. Si DATABASE_URL no está definida, lanza DbUnavailableError de inmediato sin romper el arranque de la app.
 */
export async function sql(
  strings: TemplateStringsArray,
  ...values: unknown[]
): Promise<unknown> {
  if (!hasValidUrl || !rawClient) {
    throw new DbUnavailableError(
      "DATABASE_URL no está configurado. Operando con fallback local."
    )
  }

  if (Date.now() < circuitBreakerUntil) {
    throw new DbUnavailableError(
      `Base de datos en enfriamiento (${lastErrorNotice}). Operando con fallback local.`
    )
  }

  let timer: ReturnType<typeof setTimeout> | undefined
  const timeoutPromise = new Promise<never>((_, reject) => {
    timer = setTimeout(() => {
      reject(
        new DbUnavailableError(
          `Timeout al conectar con la base de datos (> ${QUERY_TIMEOUT_MS}ms)`
        )
      )
    }, QUERY_TIMEOUT_MS)
  })

  try {
    const queryPromise = rawClient(strings, ...values)
    const result = await Promise.race([queryPromise, timeoutPromise])
    // Éxito: restablecemos el circuit breaker
    circuitBreakerUntil = 0
    return result
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error)
    lastErrorNotice = msg
    // Desactivar intentos de red durante 30s para que no haya latencia acumulada
    circuitBreakerUntil = Date.now() + 30_000
    console.warn(
      `[FIBO DB] Aviso: Base de datos no accesible (${msg}). Fallback activado por 30s.`
    )
    throw new DbUnavailableError(msg)
  } finally {
    if (timer) clearTimeout(timer)
  }
}

