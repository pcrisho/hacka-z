import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FIBO — Hábitos que respaldan tu bienestar",
    short_name: "FIBO",
    description:
      "Convierte tus micro-hábitos financieros, físicos y de mente en una Reserva de Bienestar y microseguros on-demand respaldados por Pacífico Seguros.",
    start_url: "/hoy",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#04262F",
    theme_color: "#0099CC",
    categories: ["health", "fitness", "finance", "lifestyle"],
    lang: "es-PE",
    dir: "ltr",
    prefer_related_applications: false,
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Hoy - Mis Hábitos",
        short_name: "Hoy",
        description: "Registra tus micro-hábitos del día y mantén tu racha activa",
        url: "/hoy",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Comunidad y Tribus",
        short_name: "Comunidad",
        description: "Explora retos colectivos y microseguros para amigos",
        url: "/comunidad",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Mi Progreso",
        short_name: "Progreso",
        description: "Revisa tu Reserva de Bienestar y nivel alcanzado",
        url: "/progreso",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Microseguro On-Demand",
        short_name: "Seguro",
        description: "Activa o pausa tu microseguro pay-as-you-go vía Yape",
        url: "/seguro",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
    ],
  }
}
