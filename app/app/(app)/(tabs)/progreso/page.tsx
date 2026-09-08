import type { Metadata } from "next"

import { ProgresoView } from "./progreso-view"

export const metadata: Metadata = {
  title: "Mi Progreso",
  description:
    "Visualiza la evolución de tu Reserva de Bienestar, nivel de constancia e impacto en coberturas médicas acumuladas con Pacífico Seguros.",
  alternates: {
    canonical: "/progreso",
  },
  openGraph: {
    title: "Mi Progreso en FIBO | Reserva de Bienestar",
    description:
      "Tu constancia en números: puntos de Reserva, niveles y respaldo proyectado.",
    url: "/progreso",
  },
  twitter: {
    title: "Mi Progreso en FIBO",
    description: "Revisa el crecimiento acumulado de tu Reserva de Bienestar.",
  },
}

export default function ProgresoPage() {
  return <ProgresoView />
}
