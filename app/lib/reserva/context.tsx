"use client"

import {
  createContext,
  useEffect,
  useReducer,
  useState,
  type ReactNode,
} from "react"

import {
  HABITOS_INICIALES,
  NIVELES_RECOMPENSA,
  RESERVA_STORAGE_KEY,
} from "@/lib/reserva/constants"
import type { NivelId, ReservaAction, ReservaState } from "@/lib/reserva/types"

const ESTADO_INICIAL: ReservaState = {
  sesion: null,
  onboardingDone: false,
  contexto: { independiente: null, foco: null },
  habitos: HABITOS_INICIALES,
  reservaPuntos: 0,
  historial: [],
  recompensasDesbloqueadas: [],
  seguro: { ofrecido: false, activo: false, pausado: false },
}

export function nivelParaPuntos(puntos: number): NivelId | null {
  const alcanzados = NIVELES_RECOMPENSA.filter((n) => puntos >= n.umbralPuntos)
  return alcanzados.length > 0 ? alcanzados[alcanzados.length - 1].id : null
}

function reservaReducer(
  state: ReservaState,
  action: ReservaAction
): ReservaState {
  switch (action.type) {
    case "hidratar":
      // Merge, no reemplazo — localStorage puede traer un estado guardado
      // con una sesión de desarrollo anterior a que existieran estos campos
      // (ej. antes de agregar sesion/historial), y un reemplazo directo
      // dejaría esos campos undefined en vez de con su default.
      return { ...ESTADO_INICIAL, ...action.state }
    case "iniciar-sesion":
      return { ...state, sesion: { telefono: action.telefono } }
    case "guardar-perfil":
      return {
        ...state,
        sesion: state.sesion
          ? { ...state.sesion, perfil: action.perfil }
          : { telefono: "987 123 987", perfil: action.perfil },
        onboardingDone: true,
      }
    case "cerrar-sesion":
      // Solo cierra la puerta de entrada — no borra hábitos/Reserva, es la
      // misma persona volviendo a entrar a su propio navegador.
      return { ...state, sesion: null }
    case "completar-onboarding":
      return { ...state, onboardingDone: true, contexto: action.contexto }
    case "completar-habito": {
      const habito = state.habitos.find((h) => h.id === action.habitoId)
      if (!habito || habito.hechoEstaSemana) return state
      const reservaPuntos = state.reservaPuntos + 1
      return {
        ...state,
        habitos: state.habitos.map((h) =>
          h.id === action.habitoId ? { ...h, hechoEstaSemana: true } : h
        ),
        reservaPuntos,
        historial: [...state.historial, { ts: Date.now(), puntos: reservaPuntos }],
      }
    }
    case "desmarcar-habito": {
      const habito = state.habitos.find((h) => h.id === action.habitoId)
      if (!habito || !habito.hechoEstaSemana) return state
      const reservaPuntos = Math.max(0, state.reservaPuntos - 1)
      return {
        ...state,
        habitos: state.habitos.map((h) =>
          h.id === action.habitoId ? { ...h, hechoEstaSemana: false } : h
        ),
        reservaPuntos,
      }
    }
    case "desbloquear-recompensa":
      if (state.recompensasDesbloqueadas.includes(action.nivel)) return state
      return {
        ...state,
        recompensasDesbloqueadas: [
          ...state.recompensasDesbloqueadas,
          action.nivel,
        ],
      }
    case "ofrecer-seguro":
      return { ...state, seguro: { ...state.seguro, ofrecido: true } }
    case "activar-seguro":
      return {
        ...state,
        seguro: { ...state.seguro, activo: true, pausado: false },
      }
    case "pausar-seguro":
      return { ...state, seguro: { ...state.seguro, pausado: true } }
    case "reanudar-seguro":
      return { ...state, seguro: { ...state.seguro, pausado: false } }
    default:
      return state
  }
}

export const ReservaContext = createContext<{
  state: ReservaState
  dispatch: React.Dispatch<ReservaAction>
  listo: boolean
} | null>(null)

// El estado siempre arranca igual en servidor y cliente (ESTADO_INICIAL) y
// se hidrata desde localStorage recién en el primer efecto — evita el
// mismatch de hidratación de Next.js sin necesitar un loading state.
//
// `listo` pasa a true recién cuando ese efecto corrió. Es necesario porque
// los efectos de los hijos (ej. SessionGuard) se ejecutan antes que los del
// padre — sin este flag, un guard que lee `state.sesion` en su propio
// useEffect vería siempre `null` (el default) y redirigiría a /ingresar
// incluso con una sesión real ya guardada en localStorage.
export function ReservaProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reservaReducer, ESTADO_INICIAL)
  const [listo, setListo] = useState(false)

  useEffect(() => {
    try {
      const guardado = localStorage.getItem(RESERVA_STORAGE_KEY)
      if (guardado) dispatch({ type: "hidratar", state: JSON.parse(guardado) })
    } catch {
      // localStorage no disponible o dato corrupto — se sigue con el estado
      // inicial, la demo no depende de persistencia real.
    } finally {
      setListo(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!listo) return
    try {
      localStorage.setItem(RESERVA_STORAGE_KEY, JSON.stringify(state))
    } catch {
      // ignorar — mismo caso que arriba
    }
  }, [state, listo])

  return (
    <ReservaContext.Provider value={{ state, dispatch, listo }}>
      {children}
    </ReservaContext.Provider>
  )
}
