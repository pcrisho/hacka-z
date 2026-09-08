import type { Metadata } from "next"

import { PerfilView } from "./perfil-view"

export const metadata: Metadata = {
  title: "Mi Perfil",
  description:
    "Gestiona tu cuenta, insignias ganadas, estado de pólizas vinculadas y preferencias de bienestar en FIBO.",
  alternates: {
    canonical: "/perfil",
  },
  openGraph: {
    title: "Mi Perfil en FIBO | Configuración y Logros",
    description:
      "Tu identidad en FIBO, historial de insignias y estado de protección con Pacífico Seguros.",
    url: "/perfil",
  },
  twitter: {
    title: "Mi Perfil en FIBO",
    description: "Configura tus metas, insignias y coberturas activas.",
  },
}

export default function PerfilPage() {
  return <PerfilView />
}
