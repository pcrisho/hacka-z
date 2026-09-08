import { Suspense } from "react"
import type { Metadata } from "next"

import { IngresarView } from "./ingresar-view"

export const metadata: Metadata = {
  title: "Ingresar",
  description:
    "Accede a tu cuenta de FIBO con tu número de celular y código de verificación para continuar cuidando tus hábitos y tu Reserva de Bienestar.",
  alternates: {
    canonical: "/ingresar",
  },
  openGraph: {
    title: "Ingresar a FIBO | Tu bienestar respaldado",
    description:
      "Acceso seguro sin contraseñas para continuar tu racha de hábitos y gestionar tu Reserva de Bienestar.",
    url: "/ingresar",
  },
  twitter: {
    title: "Ingresar a FIBO",
    description: "Accede a tu cuenta de FIBO de forma rápida y segura.",
  },
}

export default function IngresarPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-1 items-center justify-center p-6">
          <div className="size-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      }
    >
      <IngresarView />
    </Suspense>
  )
}
