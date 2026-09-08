"use client"

import { useEffect, type ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"

import { useReserva } from "@/hooks/use-reserva"

const RUTA_INGRESO = "/ingresar"

// Puerta de entrada mock: sin sesión, cualquier ruta del prototipo redirige
// a /ingresar — ver docs/07-construccion/decisiones-app-web.md §1.
export function SessionGuard({ children }: { children: ReactNode }) {
  const { state, listo } = useReserva()
  const pathname = usePathname()
  const router = useRouter()
  const autenticado = state.sesion !== null

  useEffect(() => {
    if (listo && !autenticado && pathname !== RUTA_INGRESO) {
      router.replace(RUTA_INGRESO)
    }
  }, [listo, autenticado, pathname, router])

  // Antes de que `listo` sea true no sabemos aún si hay sesión guardada —
  // no renderizar nada evita un parpadeo del contenido protegido.
  if (!listo) return null
  if (!autenticado && pathname !== RUTA_INGRESO) return null
  return <>{children}</>
}
