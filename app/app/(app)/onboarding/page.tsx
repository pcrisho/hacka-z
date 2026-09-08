import type { Metadata } from "next"

import { OnboardingChat } from "./onboarding-view"

export const metadata: Metadata = {
  title: "Onboarding",
  description:
    "Conversa con Fibo, personaliza tus 3 micro-hábitos semanales y activa tu Reserva de Bienestar inicial con el respaldo de Pacífico Seguros.",
  alternates: {
    canonical: "/onboarding",
  },
  openGraph: {
    title: "Onboarding en FIBO | Descubre tu Reserva",
    description:
      "Elige tus hábitos clave de Bolsillo, Cuerpo y Mente y activa tu cobertura inicial.",
    url: "/onboarding",
  },
  twitter: {
    title: "Onboarding en FIBO",
    description: "Configura tus micro-hábitos y activa tu Reserva de Bienestar.",
  },
}

export default function OnboardingPage() {
  return <OnboardingChat />
}
