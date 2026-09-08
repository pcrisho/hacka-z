import { Suspense } from "react"
import type { Metadata } from "next"

import { SalidaView } from "./salida-view"

export const metadata: Metadata = {
  title: "Salida Protegida | FIBO × Pacífico",
  description:
    "Configura y activa la cobertura médica express de Pacífico Seguros para los miembros de tu tribu que asisten a la salida deportiva o recreativa.",
  alternates: {
    canonical: "/salida",
  },
}

export default function SalidaPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-1 items-center justify-center p-8 text-xs text-muted-foreground">
          Cargando detalles de la salida...
        </div>
      }
    >
      <SalidaView />
    </Suspense>
  )
}
