export type Habito = {
  id: string
  nombre: string
  detalle: string
  hechoEstaSemana: boolean
}

export type NivelId = "bajo" | "medio" | "alto"

export type NivelRecompensa = {
  id: NivelId
  umbralPuntos: number
  titulo: string
  detalle: string
}

export type Foco = "salud" | "plata" | "herramientas"

export type ContextoOnboarding = {
  independiente: boolean | null
  foco: Foco | null
}

export type SeguroEstado = {
  ofrecido: boolean
  activo: boolean
  pausado: boolean
}

export type UsuarioPerfil = {
  nombres: string
  apellidos: string
  alias: string
  email: string
  ocupacion: "estudiante" | "empleo" | "independiente"
  desafioPrincipal: "dinero" | "cuerpo" | "mente"
  pilarPrioritario: "bolsillo" | "cuerpo" | "mente"
  consentimientoDatos: boolean
}

export type SesionEstado = {
  telefono: string
  perfil?: UsuarioPerfil
}

export type PuntoHistorial = {
  ts: number
  puntos: number
}

export type Tribu = {
  id: string
  nombre: string
  universidad: string
  miembros: number
  metaSemanal: string
  rachaSemanas: number
  cumplimiento: number
  esMiembro: boolean
  esAdmin?: boolean
}

export type RetoProgreso = {
  completadoHoy: boolean
  diasCompletados: number
}

export type ReservaState = {
  sesion: SesionEstado | null
  onboardingDone: boolean
  contexto: ContextoOnboarding
  habitos: Habito[]
  reservaPuntos: number
  historial: PuntoHistorial[]
  recompensasDesbloqueadas: NivelId[]
  seguro: SeguroEstado
  retosActivos: string[]
  retosProgreso: Record<string, RetoProgreso>
  tribus: Tribu[]
}

export type ReservaAction =
  | { type: "iniciar-sesion"; telefono: string }
  | { type: "guardar-perfil"; perfil: UsuarioPerfil }
  | { type: "cerrar-sesion" }
  | { type: "completar-onboarding"; contexto: ContextoOnboarding }
  | { type: "completar-habito"; habitoId: string }
  | { type: "desmarcar-habito"; habitoId: string }
  | { type: "desbloquear-recompensa"; nivel: NivelId }
  | { type: "ofrecer-seguro" }
  | { type: "activar-seguro" }
  | { type: "pausar-seguro" }
  | { type: "reanudar-seguro" }
  | { type: "unirse-reto"; retoId: string }
  | { type: "abandonar-reto"; retoId: string }
  | { type: "check-reto"; retoId: string }
  | { type: "unirse-tribu"; tribuId: string }
  | { type: "salir-tribu"; tribuId: string }
  | {
      type: "crear-tribu"
      tribu: {
        nombre: string
        universidad: string
        metaSemanal: string
      }
    }
  | { type: "hidratar"; state: ReservaState }
