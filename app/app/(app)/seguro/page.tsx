import type { Metadata } from "next"

import { SeguroView } from "./seguro-view"

export const metadata: Metadata = {
  title: "Microseguro On-Demand",
  description:
    "Activa o pausa tu microseguro pay-as-you-go vía Yape sin penalidades, conservando tu Reserva de Bienestar y racha de hábitos. Respaldado por Pacífico Seguros.",
  alternates: {
    canonical: "/seguro",
  },
  openGraph: {
    title: "Microseguro On-Demand FIBO | Pacífico Seguros",
    description:
      "Protección flexible que pagas solo cuando la necesitas, sin permanencia obligatoria ni letra chica.",
    url: "/seguro",
  },
  twitter: {
    title: "Microseguro On-Demand en FIBO",
    description: "Activa o pausa tu cobertura flexible vía Yape sin letra chica.",
  },
}

export default function SeguroPage() {
  return <SeguroView />
}
