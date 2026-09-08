import type { Metadata } from "next"

import { MomentoDeVerdadView } from "./momento-de-verdad-view"

export const metadata: Metadata = {
  title: "Asistencia Inmediata",
  description:
    "Soporte guiado por Fibo y derivación prioritaria con asesores humanos de Pacífico Seguros ante emergencias o siniestros imprevistos.",
  alternates: {
    canonical: "/momento-de-verdad",
  },
  openGraph: {
    title: "Asistencia FIBO | Soporte y Activación de Cobertura",
    description:
      "Acompañamiento empático y activación rápida de tu Reserva de Bienestar sin trámites innecesarios.",
    url: "/momento-de-verdad",
  },
  twitter: {
    title: "Asistencia Inmediata en FIBO",
    description: "Soporte guiado por IA y respaldo humano ante imprevistos.",
  },
}

export default function MomentoDeVerdadPage() {
  return <MomentoDeVerdadView />
}
