"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

import { BrandMark } from "@/components/landing/brand-mark"
import { Button } from "@/components/ui/button"

// Pantallas de flujo (llegadas siempre navegando hacia adelante) muestran un
// back tipo iOS con su propio título; las pantallas raíz (tabs + entrada)
// muestran la marca, sin back — no hay "atrás" honesto desde ahí.
const TITULOS_CON_BACK: Record<string, string> = {
  "/recompensa": "Recompensa",
  "/seguro": "Tu microseguro",
  "/momento-de-verdad": "Momento de verdad",
}

// Rutas pertenecientes a la experiencia interna del app PWA (tabs principales).
// En estas rutas, hacer clic en el logo redirige al dashboard de hábitos (/hoy).
// En cualquier otra ruta (como /ingresar o /onboarding), hacer clic en el header
// redirige al usuario a la landing page (/), permitiendo salir del flujo fácilmente.
const RUTAS_APP = new Set(["/hoy", "/comunidad", "/progreso", "/perfil"])

export function AppHeader() {
  const pathname = usePathname()
  const router = useRouter()

  // En pantallas de flujo dedicado de pantalla completa (onboarding y login),
  // la propia vista gestiona su cabecera unificada sin duplicar el header superior.
  if (pathname === "/onboarding" || pathname === "/ingresar") {
    return null
  }

  const titulo = TITULOS_CON_BACK[pathname]

  if (!titulo) {
    const esRutaApp = RUTAS_APP.has(pathname)
    const destino = esRutaApp ? "/hoy" : "/"

    return (
      <header className="flex h-14 shrink-0 items-center border-b border-border px-4">
        <Link
          href={destino}
          className="flex items-center transition-opacity hover:opacity-85"
          aria-label={
            esRutaApp
              ? "FIBO - Ir a Hoy"
              : "FIBO - Ir a la página de inicio"
          }
        >
          <BrandMark />
        </Link>
      </header>
    )
  }

  return (
    <header className="relative flex h-14 shrink-0 items-center justify-center border-b border-border px-2">
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 cursor-pointer"
        aria-label="Atrás"
        onClick={() => router.back()}
      >
        <ChevronLeft />
      </Button>
      <p className="font-heading text-base font-semibold">{titulo}</p>
    </header>
  )
}
