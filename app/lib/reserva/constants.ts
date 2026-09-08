import type { Habito, NivelRecompensa } from "@/lib/reserva/types"

// Contenido tomado literal de docs/03-mvp/alcance-producto.md §2 y §3 — no
// inventar copy nuevo aquí, solo referenciar el ya validado por el equipo.
export const HABITOS_INICIALES: Habito[] = [
  {
    id: "ahorro",
    nombre: "Ahorro chico",
    detalle: "Aparta un monto simbólico (S/5-10) y regístralo.",
    hechoEstaSemana: false,
  },
  {
    id: "actividad-fisica",
    nombre: "Actividad física",
    detalle: "Registra 15-20 min de actividad, sin necesidad de wearable.",
    hechoEstaSemana: false,
  },
  {
    id: "bienestar-mental",
    nombre: "Bienestar mental",
    detalle: "Confirma una práctica breve o agenda un chequeo preventivo.",
    hechoEstaSemana: false,
  },
]

export const NIVELES_RECOMPENSA: NivelRecompensa[] = [
  {
    id: "bajo",
    umbralPuntos: 1,
    titulo: "Contenido + insignia",
    detalle: "Tu primer paso ya suma — contenido corto y reconocimiento social.",
  },
  {
    id: "medio",
    umbralPuntos: 3,
    titulo: "1 mes gratis de un beneficio digital",
    detalle: "Constancia de 2-3 semanas desbloquea una suscripción tipo mindfulness/productividad.",
  },
  {
    id: "alto",
    umbralPuntos: 6,
    titulo: "Sesión real de bienestar emocional",
    detalle: "Tu Reserva maduró — accede a una sesión real de psicología digital.",
  },
]

export const RESERVA_STORAGE_KEY = "fibo:reserva"
