import type { Metadata } from "next"

import { ComunidadView } from "./comunidad-view"

export const metadata: Metadata = {
  title: "Comunidad y Tribus",
  description:
    "Únete a retos grupales de bienestar, comparte tu racha con tu tribu y activa microseguros colectivos on-demand para pichangas y salidas con amigos.",
  alternates: {
    canonical: "/comunidad",
  },
  openGraph: {
    title: "Comunidad y Tribus en FIBO | Retos y Microseguros Colectivos",
    description:
      "Bienestar en equipo: retos colectivos y microseguros on-demand con Yape y Pacífico Seguros.",
    url: "/comunidad",
  },
  twitter: {
    title: "Comunidad y Tribus en FIBO",
    description: "Retos grupales y microseguros colectivos on-demand para la Gen Z.",
  },
}

export default function ComunidadPage() {
  return <ComunidadView />
}
