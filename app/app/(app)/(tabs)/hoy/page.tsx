import type { Metadata } from "next"

import { HoyView } from "./hoy-view"

export const metadata: Metadata = {
  title: "Hoy",
  description:
    "Registra tus micro-hábitos diarios de Bolsillo, Cuerpo y Mente, cuida tu racha protegida y acumula puntos para tu Reserva de Bienestar con Pacífico Seguros.",
  alternates: {
    canonical: "/hoy",
  },
  openGraph: {
    title: "Hoy en FIBO | Tus micro-hábitos diarios",
    description:
      "Registra tus micro-hábitos del día, protege tu racha y haz crecer tu Reserva de Bienestar.",
    url: "/hoy",
  },
  twitter: {
    title: "Hoy en FIBO",
    description: "Completa tus hábitos diarios y protege tu racha en FIBO.",
  },
}

export default function HoyPage() {
  return <HoyView />
}
