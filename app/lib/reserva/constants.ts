import type { Habito, NivelRecompensa } from "@/lib/reserva/types"

// Contenido tomado literal de docs/03-mvp/alcance-producto.md §2 y §3 — no
// inventar copy nuevo aquí, solo referenciar el ya validado por el equipo.
export const HABITOS_INICIALES: Habito[] = [
  {
    id: "ahorro",
    nombre: "Ahorro chico",
    detalle: "Aparta un monto simbólico (S/ 5-10) y regístralo.",
    hechoEstaSemana: false,
  },
  {
    id: "actividad-fisica",
    nombre: "Actividad física",
    detalle: "15-20 min de movimiento: caminata, trote o escaleras.",
    hechoEstaSemana: false,
  },
  {
    id: "bienestar-mental",
    nombre: "Bienestar mental",
    detalle: "Pausa guiada de 30s: respira y regula tu ritmo.",
    hechoEstaSemana: false,
  },
]

export const NIVELES_RECOMPENSA: NivelRecompensa[] = [
  {
    id: "bajo",
    umbralPuntos: 1,
    titulo: "Insignia + Contenido preventivo",
    detalle: "Reconocimiento inicial y acceso a guías de bienestar.",
  },
  {
    id: "medio",
    umbralPuntos: 3,
    titulo: "1 mes gratis de app de bienestar",
    detalle: "Suscripción a app de mindfulness y productividad.",
  },
  {
    id: "alto",
    umbralPuntos: 6,
    titulo: "Sesión de psicología digital 1 a 1",
    detalle: "Consulta personalizada con profesional de salud mental.",
  },
]

export const RESERVA_STORAGE_KEY = "fibo:reserva"

export interface RetoComunidadItem {
  id: string
  titulo: string
  categoria: string
  categoriaBadge: string
  descripcion: string
  participantes: number
  progresoComunidad: number
  recompensa: string
  diasRestantes: number
  metaDias: number
  puntosCheck: number
  emoji: string
  pilar: "Bolsillo" | "Cuerpo" | "Mente"
}

export const RETOS_COMUNIDAD: RetoComunidadItem[] = [
  {
    id: "cero-delivery",
    titulo: "Cocinar en Casa (Cero Delivery)",
    categoria: "Bolsillo & Finanzas",
    categoriaBadge: "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-400",
    descripcion: "Cocina 4 días esta semana y reduce gastos hormiga.",
    participantes: 482,
    progresoComunidad: 68,
    recompensa: "+30 pts Reserva • Cupón S/ 15",
    diasRestantes: 3,
    metaDias: 4,
    puntosCheck: 10,
    emoji: "🍱",
    pilar: "Bolsillo",
  },
  {
    id: "pasos-lima",
    titulo: "10,000 Pasos por 5 Días",
    categoria: "Cuerpo & Vitalidad",
    categoriaBadge: "bg-primary/10 text-primary border-primary/20",
    descripcion: "Camina a diario hacia tus clases, trabajo o actividades.",
    participantes: 315,
    progresoComunidad: 54,
    recompensa: "+25 pts Reserva • Insignia Runner",
    diasRestantes: 5,
    metaDias: 5,
    puntosCheck: 10,
    emoji: "🏃",
    pilar: "Cuerpo",
  },
  {
    id: "anti-burnout",
    titulo: "Semana Anti-Burnout Mental",
    categoria: "Salud Mental",
    categoriaBadge: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-400",
    descripcion: "3 pausas de calma y bienestar mental en la semana.",
    participantes: 240,
    progresoComunidad: 82,
    recompensa: "+20 pts Reserva • Nivel 2",
    diasRestantes: 2,
    metaDias: 3,
    puntosCheck: 10,
    emoji: "🧠",
    pilar: "Mente",
  },
]

export const AMBITOS_TRIBU_OPCIONES = [
  "Amigos & Deporte",
  "Trabajo Remoto & Freelance",
  "Comunidad de Barrio & Salidas",
  "Estudio & Jóvenes Universitarios",
  "Primer Empleo & Emprendimiento",
]

export const METAS_COLECTIVAS_OPCIONES = [
  "4 días de hábitos cumplidos por miembro",
  "5 días cocinando en casa (Cero Delivery)",
  "60,000 pasos grupales en la semana",
  "Pausas de respiración y desconexión nocturna",
  "Ahorro colectivo para fondo de emergencias",
]

export const TRIBUS_INICIALES = [
  {
    id: "ucsur-active",
    nombre: "Runners & Active Lima Sur",
    universidad: "Amigos & Deporte",
    miembros: 128,
    metaSemanal: "5,000 km colectivos",
    rachaSemanas: 4,
    cumplimiento: 88,
    esMiembro: true,
    esAdmin: false,
  },
  {
    id: "freelancers-peru",
    nombre: "Freelancers & Creadores Perú",
    universidad: "Trabajo Remoto & Freelance",
    miembros: 95,
    metaSemanal: "Ahorro de emergencia quincenal",
    rachaSemanas: 2,
    cumplimiento: 76,
    esMiembro: false,
    esAdmin: false,
  },
  {
    id: "primer-empleo",
    nombre: "Gen Z Primer Empleo & Finanzas",
    universidad: "Primer Empleo & Emprendimiento",
    miembros: 210,
    metaSemanal: "Cero compras compulsivas",
    rachaSemanas: 3,
    cumplimiento: 82,
    esMiembro: false,
    esAdmin: false,
  },
]
