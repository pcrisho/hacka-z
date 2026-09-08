import type { Metadata } from "next"

import { RecompensaView } from "./recompensa-view"

export const metadata: Metadata = {
  title: "Recompensas",
  description:
    "Canjea beneficios exclusivos y desbloquea el acceso a microseguros pay-as-you-go ganados por tu constancia semanal en FIBO.",
  alternates: {
    canonical: "/recompensa",
  },
  openGraph: {
    title: "Recompensas de Bienestar | FIBO",
    description:
      "Tus hábitos dan frutos: suscripciones, sesiones de bienestar y coberturas accesibles.",
    url: "/recompensa",
  },
  twitter: {
    title: "Recompensas de Bienestar en FIBO",
    description: "Desbloquea recompensas y microseguros gracias a tu constancia.",
  },
}

export default function RecompensaPage() {
  return <RecompensaView />
}
