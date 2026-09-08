"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import confetti from "canvas-confetti"
import {
  Activity,
  ArrowRight,
  Brain,
  Calendar,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Coins,
  ExternalLink,
  Flame,
  PartyPopper,
  Pause,
  PiggyBank,
  Play,
  Plus,
  RotateCcw,
  Shield,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react"

import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { SpiralIcon } from "@/components/landing/brand-mark"
import { useReserva } from "@/hooks/use-reserva"
import { nivelParaPuntos } from "@/lib/reserva/context"
import { NIVELES_RECOMPENSA, RETOS_COMUNIDAD } from "@/lib/reserva/constants"
import type { NivelId } from "@/lib/reserva/types"
import { cn } from "@/lib/utils"

import { ModalActividad } from "./_components/modal-actividad"
import { ModalAlcancia } from "./_components/modal-alcancia"
import { ModalRespiracion } from "./_components/modal-respiracion"

const STORAGE_KEY_NIVELES_CELEBRADOS = "fibo_niveles_celebrados_v1"

interface DiaCalendario {
  letra: string
  fecha: string
  nombreCompleto: string
  completado: boolean
  protegido?: boolean
  esHoy?: boolean
}

const SEMANAS = [
  {
    offset: -1,
    etiqueta: "Semana anterior • 25 - 31 Ago",
    dias: [
      { letra: "L", fecha: "25", nombreCompleto: "Lunes 25 de Agosto", completado: true },
      { letra: "M", fecha: "26", nombreCompleto: "Martes 26 de Agosto", completado: true },
      { letra: "M", fecha: "27", nombreCompleto: "Miércoles 27 de Agosto", completado: true },
      { letra: "J", fecha: "28", nombreCompleto: "Jueves 28 de Agosto", completado: true },
      { letra: "V", fecha: "29", nombreCompleto: "Viernes 29 de Agosto", completado: true },
      { letra: "S", fecha: "30", nombreCompleto: "Sábado 30 de Agosto", completado: true },
      { letra: "D", fecha: "31", nombreCompleto: "Domingo 31 de Agosto", completado: true },
    ] as DiaCalendario[],
  },
  {
    offset: 0,
    etiqueta: "Semana actual • 1 - 7 Set",
    dias: [
      { letra: "L", fecha: "1", nombreCompleto: "Lunes 1 de Setiembre", completado: true },
      { letra: "M", fecha: "2", nombreCompleto: "Martes 2 de Setiembre", completado: true },
      { letra: "M", fecha: "3", nombreCompleto: "Miércoles 3 de Setiembre", completado: true },
      { letra: "J", fecha: "4", nombreCompleto: "Jueves 4 de Setiembre", completado: true },
      { letra: "V", fecha: "5", nombreCompleto: "Viernes 5 de Setiembre", completado: true },
      { letra: "S", fecha: "6", nombreCompleto: "Sábado 6 de Setiembre", completado: false, protegido: true },
      { letra: "D", fecha: "7", nombreCompleto: "Domingo 7 de Setiembre", completado: false, esHoy: true },
    ] as DiaCalendario[],
  },
]

const HABITOS_SUGERIDOS = [
  {
    id: "ahorro-hormiga",
    pilar: "Bolsillo",
    nombre: "Ahorro hormiga (S/ 5)",
    detalle: "Aparta S/ 5 al día a tu Reserva de emergencias.",
    icon: PiggyBank,
    colorClass: "text-amber-600 bg-amber-500/10 border-amber-500/20",
    puntos: 5,
  },
  {
    id: "cero-delivery",
    pilar: "Bolsillo",
    nombre: "Cocinar en casa",
    detalle: "Evita pedir delivery de comida hoy y ahorra un extra.",
    icon: PiggyBank,
    colorClass: "text-amber-600 bg-amber-500/10 border-amber-500/20",
    puntos: 5,
  },
  {
    id: "caminata-activa",
    pilar: "Cuerpo",
    nombre: "Caminata de 2,500 pasos",
    detalle: "15 min de movimiento consciente al aire libre.",
    icon: Activity,
    colorClass: "text-primary bg-primary/10 border-primary/20",
    puntos: 5,
  },
  {
    id: "pausa-desconexion",
    pilar: "Mente",
    nombre: "Desconexión nocturna",
    detalle: "30 minutos sin pantallas antes de irte a dormir.",
    icon: Brain,
    colorClass: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20",
    puntos: 5,
  },
]

export function HoyView() {
  const router = useRouter()
  const { state, dispatch } = useReserva()

  // Estados de navegación temporal
  const [semanaIndex, setSemanaIndex] = useState(1) // 1 = semana actual (offset 0)
  const [diaSeleccionado, setDiaSeleccionado] = useState("7")

  // Modales de rituales por pilar
  const [modalAlcancia, setModalAlcancia] = useState(false)
  const [modalActividad, setModalActividad] = useState(false)
  const [modalRespiracion, setModalRespiracion] = useState(false)

  // Live Timer sincronizado de Actividad Física
  const [timerActividadIniciado, setTimerActividadIniciado] = useState(false)
  const [timerActividadCorriendo, setTimerActividadCorriendo] = useState(false)
  const [timerActividadSegundos, setTimerActividadSegundos] = useState(15 * 60)

  // Diálogos informativos
  const [celebrando, setCelebrando] = useState<NivelId | null>(null)
  const [mostrarInfoRacha, setMostrarInfoRacha] = useState(false)
  const [drawerNuevoHabito, setDrawerNuevoHabito] = useState(false)

  const vistoRef = useRef<Set<NivelId>>(new Set())

  // Cuenta regresiva del Live Timer
  useEffect(() => {
    let intervalo: NodeJS.Timeout | null = null
    if (timerActividadCorriendo && timerActividadSegundos > 0) {
      intervalo = setInterval(() => {
        setTimerActividadSegundos((prev) => prev - 1)
      }, 1000)
    } else if (timerActividadSegundos === 0 && timerActividadCorriendo) {
      setTimerActividadCorriendo(false)
      setTimerActividadIniciado(false)
      completarHabitoDesdeRitual("actividad-fisica")
    }
    return () => {
      if (intervalo) clearInterval(intervalo)
    }
  }, [timerActividadCorriendo, timerActividadSegundos])

  const semanaActiva = SEMANAS[semanaIndex]
  const diaActivoObj = semanaActiva.dias.find((d) => d.fecha === diaSeleccionado)
  const esDiaHoy = semanaActiva.offset === 0 && diaSeleccionado === "7"

  // Cálculos del día de hoy
  const habitosCompletadosHoy = state.habitos.filter((h) => h.hechoEstaSemana).length
  const totalHabitos = state.habitos.length

  // Desacople: Anillo de /hoy 100% calibrado al progreso de HOY
  const porcentajeDiario = Math.min(
    100,
    Math.round((habitosCompletadosHoy / totalHabitos) * 100)
  )

  // Recompensas basadas en puntos acumulados globales con persistencia anti-molestia
  const nivelPendiente = nivelParaPuntos(state.reservaPuntos)
  const hayRecompensaPorReclamar =
    nivelPendiente !== null &&
    !state.recompensasDesbloqueadas.includes(nivelPendiente)

  useEffect(() => {
    if (nivelPendiente) {
      try {
        const yaCelebrados = JSON.parse(
          localStorage.getItem(STORAGE_KEY_NIVELES_CELEBRADOS) || "[]"
        ) as string[]
        if (!yaCelebrados.includes(nivelPendiente) && !vistoRef.current.has(nivelPendiente)) {
          vistoRef.current.add(nivelPendiente)
          setCelebrando(nivelPendiente)
        }
      } catch {
        if (!vistoRef.current.has(nivelPendiente)) {
          vistoRef.current.add(nivelPendiente)
          setCelebrando(nivelPendiente)
        }
      }
    }
  }, [nivelPendiente])

  function cerrarCelebracion() {
    if (celebrando) {
      try {
        const yaCelebrados = JSON.parse(
          localStorage.getItem(STORAGE_KEY_NIVELES_CELEBRADOS) || "[]"
        ) as string[]
        if (!yaCelebrados.includes(celebrando)) {
          localStorage.setItem(
            STORAGE_KEY_NIVELES_CELEBRADOS,
            JSON.stringify([...yaCelebrados, celebrando])
          )
        }
      } catch {
        // Silenciar error en storage
      }
    }
    setCelebrando(null)
  }

  function dispararConfetti() {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.65 },
      colors: ["#0099CC", "#D4A24C", "#01A355"],
    })
  }

  function toggleHabitoRapido(habitoId: string, estaHecho: boolean) {
    if (estaHecho) {
      dispatch({ type: "desmarcar-habito", habitoId })
    } else {
      dispatch({ type: "completar-habito", habitoId })
      dispararConfetti()
    }
  }

  function abrirRitualHabito(habitoId: string) {
    if (habitoId.includes("ahorro")) {
      setModalAlcancia(true)
    } else if (habitoId.includes("actividad")) {
      setModalActividad(true)
    } else if (habitoId.includes("mental")) {
      setModalRespiracion(true)
    }
  }

  function completarHabitoDesdeRitual(habitoId: string) {
    dispatch({ type: "completar-habito", habitoId })
  }

  function navegarSemana(direccion: -1 | 1) {
    const nuevoIndex = semanaIndex + direccion
    if (nuevoIndex >= 0 && nuevoIndex < SEMANAS.length) {
      setSemanaIndex(nuevoIndex)
      // Seleccionar el primer día de esa semana o el día correspondiente
      setDiaSeleccionado(SEMANAS[nuevoIndex].dias[0].fecha)
    }
  }

  function volverAHoy() {
    setSemanaIndex(1)
    setDiaSeleccionado("7")
  }

  function handleCheckReto(retoId: string) {
    dispatch({ type: "check-reto", retoId })
    dispararConfetti()
  }

  const retosActivosItems = RETOS_COMUNIDAD.filter((r) =>
    state.retosActivos.includes(r.id)
  )

  const aliasUsuario = state.sesion?.perfil?.alias || "Camila"
  const nivelCelebrado = NIVELES_RECOMPENSA.find((n) => n.id === celebrando)

  return (
    <div className="flex flex-1 flex-col gap-5 p-4 pb-14">
      {/* ============================================================ */}
      {/* HEADER SUPERIOR: SALUDO Y BADGE DE RACHA */}
      {/* ============================================================ */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Domingo, 7 de setiembre
          </p>
          <h1 className="font-heading text-xl font-bold tracking-tight">
            ¡Hola, {aliasUsuario}! ✨
          </h1>
        </div>

        {/* Badge de Racha interactiva con modal explicativo */}
        <button
          type="button"
          onClick={() => setMostrarInfoRacha(true)}
          className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-600 transition-all hover:bg-amber-500/20 active:scale-95 dark:text-amber-400 cursor-pointer"
          title="Ver estado de tu racha protegida"
        >
          <Flame className="size-4 fill-amber-500 text-amber-500 animate-pulse" />
          <span>5 días racha</span>
        </button>
      </div>

      {/* ============================================================ */}
      {/* WEEKLY CALENDAR STRIP CON MANEJADORES DE NAVEGACIÓN */}
      {/* ============================================================ */}
      <div className="flex flex-col gap-2.5 rounded-2xl border border-border/80 bg-card p-3 shadow-xs">
        {/* Cabecera con controles de semana */}
        <div className="flex items-center justify-between px-1 text-xs">
          <div className="flex items-center gap-1">
            <Button
              size="xs"
              variant="ghost"
              disabled={semanaIndex === 0}
              onClick={() => navegarSemana(-1)}
              className="size-6 p-0 text-muted-foreground hover:text-foreground cursor-pointer"
              aria-label="Semana anterior"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <span className="font-semibold text-foreground">
              {semanaActiva.etiqueta}
            </span>
            <Button
              size="xs"
              variant="ghost"
              disabled={semanaIndex === SEMANAS.length - 1}
              onClick={() => navegarSemana(1)}
              className="size-6 p-0 text-muted-foreground hover:text-foreground cursor-pointer"
              aria-label="Semana siguiente"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>

          <span className="flex items-center gap-1 text-[11px] font-medium text-primary">
            <Zap className="size-3" /> 5 de 7 activos
          </span>
        </div>

        {/* Grid de 7 días */}
        <div className="grid grid-cols-7 gap-1.5">
          {semanaActiva.dias.map((d) => {
            const seleccionado = diaSeleccionado === d.fecha
            return (
              <button
                key={d.fecha}
                type="button"
                onClick={() => setDiaSeleccionado(d.fecha)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-xs transition-all cursor-pointer relative",
                  d.esHoy
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs ring-2 ring-primary/40 ring-offset-1 ring-offset-background"
                    : seleccionado
                    ? "border border-primary/40 bg-accent text-accent-foreground font-semibold shadow-2xs"
                    : "hover:bg-muted/60 text-muted-foreground"
                )}
              >
                <span className="text-[11px] opacity-80">{d.letra}</span>
                <span className="text-sm font-semibold leading-none">{d.fecha}</span>

                {/* Indicador de estado del día */}
                {d.completado ? (
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                ) : d.protegido ? (
                  <span className="size-1.5 rounded-full bg-amber-500" title="Escudo de Racha activado" />
                ) : d.esHoy ? (
                  <span className="size-1.5 rounded-full bg-primary-foreground animate-pulse" />
                ) : (
                  <span className="size-1.5 rounded-full bg-transparent" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* VISTA REACTIVA SEGÚN EL DÍA SELECCIONADO */}
      {/* ============================================================ */}
      {esDiaHoy ? (
        <>
          {/* ANILLO CENTRAL DE LA RESERVA DE HOY */}
          <div className="flex flex-col items-center gap-3 pt-1">
            <div className="relative">
              <AnimatedCircularProgressBar
                value={porcentajeDiario}
                gaugePrimaryColor="var(--primary)"
                gaugeSecondaryColor="var(--border)"
                className="size-38 [&_span]:hidden"
              />
              <div className="absolute inset-0 m-auto flex size-22 flex-col items-center justify-center gap-0.5 rounded-full bg-card/85 shadow-inner backdrop-blur-xs">
                <SpiralIcon className="size-6 text-primary" />
                <span className="font-heading text-sm font-bold text-foreground">
                  {porcentajeDiario}%
                </span>
                <span className="text-[9px] font-semibold text-muted-foreground">
                  {habitosCompletadosHoy}/3 HOY
                </span>
              </div>
            </div>

            <div className="flex max-w-[300px] flex-col items-center text-center">
              <p className="font-heading text-sm font-semibold">
                {habitosCompletadosHoy === totalHabitos
                  ? "¡Meta diaria cumplida! 🎉"
                  : habitosCompletadosHoy === 0
                  ? "Tu Reserva de Bienestar"
                  : habitosCompletadosHoy === 1
                  ? "Buen arranque matutino 🏃"
                  : "¡A un paso de proteger tu día! 🔥"}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {habitosCompletadosHoy === totalHabitos
                  ? "Tus 3 hábitos completados aseguran tu cobertura médica de hoy."
                  : habitosCompletadosHoy === 0
                  ? "Completa tus 3 hábitos conscientes para sumar a tu Reserva."
                  : `Faltan ${totalHabitos - habitosCompletadosHoy} hábitos para cerrar el día con éxito.`}
              </p>
            </div>
          </div>

          {/* BANNER TRIUNFAL SI COMPLETÓ EL DÍA */}
          {habitosCompletadosHoy === totalHabitos && (
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-emerald-500/30 bg-linear-to-r from-emerald-500/15 via-emerald-500/5 to-transparent p-3.5 animate-in fade-in-50">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-foreground">
                    Cobertura del día asegurada 🛡️
                  </span>
                  <span className="text-[11px] text-muted-foreground leading-tight">
                    +15 pts acumulados a tu respaldo médico.
                  </span>
                </div>
              </div>
              <Button
                size="xs"
                variant="outline"
                className="h-7 text-[11px] border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-300 shrink-0 cursor-pointer"
                onClick={() => router.push("/progreso")}
              >
                Ver saldo
              </Button>
            </div>
          )}

          {/* ALERTA DE RECOMPENSA DESBLOQUEADA */}
          {hayRecompensaPorReclamar && (
            <Card className="border-primary/40 bg-primary/5 transition-all animate-in fade-in-50">
              <CardContent className="flex items-center justify-between gap-3 p-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    🎁
                  </span>
                  <div className="flex flex-col">
                    <p className="text-xs font-bold text-primary">¡Nivel Desbloqueado!</p>
                    <p className="text-[11px] text-muted-foreground">
                      Tienes una recompensa lista para canjear.
                    </p>
                  </div>
                </div>
                <Button size="sm" className="h-8 text-xs cursor-pointer" onClick={() => router.push("/recompensa")}>
                  Ver
                </Button>
              </CardContent>
            </Card>
          )}

          {/* LISTA DE HÁBITOS DE HOY CON DUAL-PATH */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-0.5">
              <div className="flex items-center gap-2">
                <p className="font-heading text-sm font-semibold">Tus hábitos de hoy</p>
                <Badge variant="secondary" className="text-[11px] font-normal">
                  {habitosCompletadosHoy}/{totalHabitos}
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1 text-xs text-primary hover:text-primary cursor-pointer"
                onClick={() => setDrawerNuevoHabito(true)}
              >
                <Plus className="size-3.5" />
                <span>Nuevo</span>
              </Button>
            </div>

            <div className="flex flex-col gap-3">
              {state.habitos.map((habito) => {
                const hecho = habito.hechoEstaSemana

                let pilarLabel = "Hábito"
                let pilarBadgeClass = "bg-muted text-muted-foreground"
                let IconComponent = Sparkles
                let botonRitualLabel = "Ritual 🧘"

                if (habito.id.includes("ahorro")) {
                  pilarLabel = "Bolsillo 💰"
                  pilarBadgeClass = "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-400"
                  IconComponent = PiggyBank
                  botonRitualLabel = "Alcancía 🪙"
                } else if (habito.id.includes("actividad")) {
                  pilarLabel = "Cuerpo 🏃"
                  pilarBadgeClass = "bg-primary/10 text-primary border-primary/20"
                  IconComponent = Activity
                  botonRitualLabel = "Actividad 🏃"
                } else if (habito.id.includes("mental")) {
                  pilarLabel = "Mente 🧠"
                  pilarBadgeClass = "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-400"
                  IconComponent = Brain
                  botonRitualLabel = "Pausa 30s 🧘"
                }

                const esActividad = habito.id.includes("actividad")
                const mostrarLiveTimer = esActividad && timerActividadIniciado && !hecho
                const minutosTimer = Math.floor(timerActividadSegundos / 60)
                const segundosTimer = timerActividadSegundos % 60
                const tiempoTimerFormateado = `${String(minutosTimer).padStart(2, "0")}:${String(
                  segundosTimer
                ).padStart(2, "0")}`

                return (
                  <Card
                    key={habito.id}
                    className={cn(
                      "overflow-hidden transition-all",
                      hecho
                        ? "border-emerald-500/30 bg-emerald-500/5 shadow-xs"
                        : mostrarLiveTimer
                        ? "border-primary/50 bg-primary/5 shadow-xs ring-1 ring-primary/20"
                        : "hover:border-primary/40 border-border/80"
                    )}
                  >
                    <CardContent className="flex flex-col gap-2.5 p-3.5">
                      {/* Fila superior: Pilar y Puntos */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Badge
                            variant="outline"
                            className={cn("text-[11px] font-medium", pilarBadgeClass)}
                          >
                            {pilarLabel}
                          </Badge>
                          {mostrarLiveTimer && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold text-primary animate-pulse">
                              <span className="size-1.5 rounded-full bg-primary" />
                              {timerActividadCorriendo ? "En curso" : "Pausado"}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-semibold text-muted-foreground">
                          +5 pts Reserva
                        </span>
                      </div>

                      {/* Fila central: Icono, Título y Detalle */}
                      <div
                        className={cn(
                          "flex items-start gap-3 select-none",
                          !hecho && "cursor-pointer"
                        )}
                        onClick={() => !hecho && abrirRitualHabito(habito.id)}
                      >
                        <div
                          className={cn(
                            "flex size-10 shrink-0 items-center justify-center rounded-2xl transition-colors",
                            hecho
                              ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                              : mostrarLiveTimer
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          <IconComponent className="size-5" />
                        </div>

                        <div className="flex flex-1 flex-col gap-0.5">
                          <p
                            className={cn(
                              "text-sm font-semibold leading-snug",
                              hecho && "text-muted-foreground line-through opacity-80"
                            )}
                          >
                            {habito.nombre}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {habito.detalle}
                          </p>
                        </div>
                      </div>

                      {/* Tracker dinámico si el timer de actividad está iniciado */}
                      {mostrarLiveTimer && (
                        <div className="flex flex-col gap-1.5 rounded-xl bg-background/80 p-2.5 border border-primary/20 shadow-2xs">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-heading text-sm font-extrabold text-foreground flex items-center gap-1.5">
                              ⏳ {tiempoTimerFormateado}
                            </span>
                            <span className="text-[10px] text-muted-foreground font-medium">
                              Meta: 15:00 min ({Math.round(((15 * 60 - timerActividadSegundos) / (15 * 60)) * 100)}%)
                            </span>
                          </div>
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-input/60">
                            <div
                              className="h-full rounded-full bg-primary transition-all duration-300"
                              style={{
                                width: `${Math.max(
                                  4,
                                  Math.round(((15 * 60 - timerActividadSegundos) / (15 * 60)) * 100)
                                )}%`,
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Fila inferior: Acciones según estado */}
                      <div className="flex items-center justify-between pt-1 border-t border-border/40">
                        {hecho ? (
                          <div className="flex w-full items-center justify-between">
                            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                              <CheckCircle2 className="size-3.5" />
                              Completado
                            </span>

                            <Button
                              size="xs"
                              variant="ghost"
                              className="h-7 text-[10px] text-muted-foreground hover:text-destructive cursor-pointer"
                              onClick={() => {
                                if (esActividad) {
                                  setTimerActividadIniciado(false)
                                  setTimerActividadCorriendo(false)
                                  setTimerActividadSegundos(15 * 60)
                                }
                                toggleHabitoRapido(habito.id, true)
                              }}
                              title="Desmarcar si fue un error"
                            >
                              Deshacer
                            </Button>
                          </div>
                        ) : mostrarLiveTimer ? (
                          <div className="flex w-full items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <Button
                                size="xs"
                                variant="outline"
                                className="h-7 text-[11px] font-medium gap-1 cursor-pointer"
                                onClick={() => setTimerActividadCorriendo((c) => !c)}
                              >
                                {timerActividadCorriendo ? (
                                  <>
                                    <Pause className="size-3 text-muted-foreground" />
                                    <span>Pausar</span>
                                  </>
                                ) : (
                                  <>
                                    <Play className="size-3 fill-current text-primary" />
                                    <span>Reanudar</span>
                                  </>
                                )}
                              </Button>

                              <button
                                type="button"
                                onClick={() => setModalActividad(true)}
                                className="text-[11px] font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer transition-colors"
                              >
                                <span>Ver</span>
                                <ExternalLink className="size-3" />
                              </button>
                            </div>

                            <Button
                              size="xs"
                              className="h-7 text-[11px] font-semibold gap-1 bg-primary text-primary-foreground cursor-pointer"
                              onClick={() => {
                                setTimerActividadIniciado(false)
                                setTimerActividadCorriendo(false)
                                completarHabitoDesdeRitual("actividad-fisica")
                              }}
                            >
                              <Check className="size-3 stroke-[2.5]" />
                              <span>Terminar</span>
                            </Button>
                          </div>
                        ) : (
                          <>
                            {/* Botón 1: Abrir el Ritual interactivo con intencionalidad */}
                            <button
                              type="button"
                              onClick={() => abrirRitualHabito(habito.id)}
                              className="text-[11px] font-semibold text-primary hover:underline underline-offset-2 flex items-center gap-1 cursor-pointer"
                            >
                              <span>{botonRitualLabel}</span>
                              <ArrowRight className="size-3" />
                            </button>

                            {/* Botón 2: Marcar rápido si ya lo completó fuera */}
                            <Button
                              size="xs"
                              variant="secondary"
                              className="h-7 text-[11px] font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                              onClick={() => toggleHabitoRapido(habito.id, false)}
                            >
                              Marcar rápido ✓
                            </Button>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* ============================================================ */}
          {/* RETOS DE COMUNIDAD ACTIVOS EN /HOY */}
          {/* ============================================================ */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-0.5">
              <div className="flex items-center gap-2">
                <p className="font-heading text-sm font-semibold">
                  Retos de comunidad
                </p>
                <Badge variant="secondary" className="text-[11px] font-normal">
                  {retosActivosItems.length} activos
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1 text-xs text-primary hover:text-primary cursor-pointer"
                onClick={() => router.push("/comunidad")}
              >
                <span>Ver todos</span>
                <ArrowRight className="size-3" />
              </Button>
            </div>

            {retosActivosItems.length > 0 ? (
              <div className="flex flex-col gap-3">
                {retosActivosItems.map((reto) => {
                  const progreso = state.retosProgreso[reto.id] || {
                    completadoHoy: false,
                    diasCompletados: 0,
                  }
                  const porcentajeAvance = Math.min(
                    100,
                    Math.round((progreso.diasCompletados / reto.metaDias) * 100)
                  )

                  return (
                    <Card
                      key={reto.id}
                      className={cn(
                        "overflow-hidden transition-all border-border/80",
                        progreso.completadoHoy
                          ? "border-emerald-500/30 bg-emerald-500/5 shadow-xs"
                          : "hover:border-primary/40 bg-card"
                      )}
                    >
                      <CardContent className="flex flex-col gap-2.5 p-3.5">
                        {/* Categoría y Días */}
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className={reto.categoriaBadge}>
                            {reto.categoria}
                          </Badge>
                          <span className="text-[11px] font-medium text-muted-foreground">
                            {progreso.diasCompletados} de {reto.metaDias} días logrados
                          </span>
                        </div>

                        {/* Título y descripción breve */}
                        <div className="flex flex-col gap-0.5">
                          <h4 className="font-heading text-xs font-bold leading-tight">
                            {reto.titulo}
                          </h4>
                          <p className="text-[11px] text-muted-foreground leading-snug">
                            {reto.descripcion}
                          </p>
                        </div>

                        {/* Barra de progreso personal */}
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-input/60">
                          <div
                            className="h-full rounded-full bg-primary transition-all duration-500"
                            style={{ width: `${porcentajeAvance}%` }}
                          />
                        </div>

                        {/* Fila de acción diaria */}
                        <div className="flex items-center justify-between pt-1 border-t border-border/40">
                          <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <Trophy className="size-3" />
                            <span>+10 pts Reserva</span>
                          </span>

                          {progreso.completadoHoy ? (
                            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                              <CheckCircle2 className="size-3.5" />
                              <span>¡Cumplido hoy!</span>
                            </span>
                          ) : (
                            <Button
                              size="xs"
                              className="h-7 text-[11px] font-semibold gap-1 bg-primary text-primary-foreground cursor-pointer"
                              onClick={() => handleCheckReto(reto.id)}
                            >
                              <Check className="size-3 stroke-[2.5]" />
                              <span>Marcar check ✓</span>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            ) : (
              <Card className="border-dashed border-border/80 bg-muted/20">
                <CardContent className="flex items-center justify-between gap-3 p-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-sm">
                      👥
                    </span>
                    <div className="flex flex-col">
                      <p className="text-xs font-semibold text-foreground">
                        Únete a un reto grupal
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        Suma puntos extra para tu Reserva de Salud con la comunidad.
                      </p>
                    </div>
                  </div>
                  <Button
                    size="xs"
                    variant="outline"
                    className="h-7 text-[11px] shrink-0 cursor-pointer"
                    onClick={() => router.push("/comunidad")}
                  >
                    Explorar
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </>
      ) : (
        /* ============================================================ */
        /* VISTA DE DÍA HISTÓRICO O PROTEGIDO */
        /* ============================================================ */
        <div className="flex flex-col gap-4 animate-in fade-in-50 duration-200">
          {/* Banner de contexto temporal */}
          <div className="flex flex-col gap-2 rounded-2xl border border-border/80 bg-card p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                <Calendar className="size-3.5 text-primary" />
                {diaActivoObj?.nombreCompleto || "Día seleccionado"}
              </span>

              <Button
                size="xs"
                variant="outline"
                onClick={volverAHoy}
                className="h-6 text-[11px] gap-1 cursor-pointer"
              >
                <span>Volver a Hoy</span>
                <RotateCcw className="size-3" />
              </Button>
            </div>

            {diaActivoObj?.completado ? (
              <div className="flex flex-col gap-1 pt-1">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-base font-bold text-foreground">
                    Día completado 🏆
                  </span>
                  <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 text-[10px]">
                    3/3 hábitos
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Completaste 3/3 hábitos y sumaste +15 pts a tu Reserva.
                </p>
              </div>
            ) : diaActivoObj?.protegido ? (
              <div className="flex flex-col gap-1 pt-1">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-base font-bold text-foreground">
                    Escudo activado 🛡️
                  </span>
                  <Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-amber-600 text-[10px]">
                    Sin penalización
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Tu racha de 5 días sigue intacta gracias a tu constancia semanal.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-1 pt-1">
                <span className="font-heading text-base font-bold text-foreground">
                  Día bloqueado 🔒
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Este día aún no ha comenzado. Concéntrate en tus hábitos de hoy para
                  mantener tu bienestar activo.
                </p>
              </div>
            )}
          </div>

          {/* Tarjetas históricas en modo solo lectura */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-semibold text-muted-foreground px-0.5">
              Registro del día
            </span>

            {state.habitos.map((habito) => {
              let pilarLabel = "Hábito"
              let pilarBadgeClass = "bg-muted text-muted-foreground"
              let IconComponent = Sparkles

              if (habito.id.includes("ahorro")) {
                pilarLabel = "Bolsillo 💰"
                pilarBadgeClass = "bg-amber-500/10 text-amber-700 border-amber-500/20"
                IconComponent = PiggyBank
              } else if (habito.id.includes("actividad")) {
                pilarLabel = "Cuerpo 🏃"
                pilarBadgeClass = "bg-primary/10 text-primary border-primary/20"
                IconComponent = Activity
              } else if (habito.id.includes("mental")) {
                pilarLabel = "Mente 🧠"
                pilarBadgeClass = "bg-emerald-500/10 text-emerald-700 border-emerald-500/20"
                IconComponent = Brain
              }

              return (
                <Card key={habito.id} className="opacity-90 border-border/70">
                  <CardContent className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-8 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                        <IconComponent className="size-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold">{habito.nombre}</span>
                        <Badge variant="outline" className={cn("w-fit text-[9px]", pilarBadgeClass)}>
                          {pilarLabel}
                        </Badge>
                      </div>
                    </div>

                    {diaActivoObj?.completado ? (
                      <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <Check className="size-3.5 stroke-[2.5]" />
                        +5 pts
                      </span>
                    ) : diaActivoObj?.protegido ? (
                      <span className="text-[11px] font-medium text-amber-600 dark:text-amber-400">
                        🛡️ Protegido
                      </span>
                    ) : (
                      <span className="text-[11px] text-muted-foreground">—</span>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODALES DE RITUALES POR PILAR */}
      {/* ============================================================ */}
      <ModalAlcancia
        open={modalAlcancia}
        onOpenChange={setModalAlcancia}
        onCompletar={(_monto) => completarHabitoDesdeRitual("ahorro-chico")}
        ahorroAcumulado={45}
      />

      <ModalActividad
        open={modalActividad}
        onOpenChange={setModalActividad}
        onCompletar={(_actividad) => {
          setTimerActividadIniciado(false)
          setTimerActividadCorriendo(false)
          completarHabitoDesdeRitual("actividad-fisica")
        }}
        segundosRestantes={timerActividadSegundos}
        timerCorriendo={timerActividadCorriendo}
        onToggleTimer={() => {
          setTimerActividadIniciado(true)
          setTimerActividadCorriendo((c) => !c)
        }}
        onReiniciarTimer={() => {
          setTimerActividadCorriendo(false)
          setTimerActividadSegundos(15 * 60)
        }}
        onCompletarTimer={() => {
          setTimerActividadIniciado(false)
          setTimerActividadCorriendo(false)
          completarHabitoDesdeRitual("actividad-fisica")
        }}
      />

      <ModalRespiracion
        open={modalRespiracion}
        onOpenChange={setModalRespiracion}
        onCompletar={(_detalle) => completarHabitoDesdeRitual("bienestar-mental")}
      />

      {/* ============================================================ */}
      {/* MODAL EXPLICATIVO DEL ESCUDO DE RACHA */}
      {/* ============================================================ */}
      <Dialog open={mostrarInfoRacha} onOpenChange={setMostrarInfoRacha}>
        <DialogContent className="max-w-xs sm:max-w-sm">
          <DialogHeader className="text-left">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-amber-500/20 text-amber-600">
                🔥
              </span>
              <DialogTitle className="font-heading text-base font-bold">
                Racha de 5 días activa
              </DialogTitle>
            </div>
            <DialogDescription className="text-xs text-muted-foreground pt-1">
              FIBO premia tu constancia sin generar culpa.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3 py-1 text-xs">
            <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3">
              <Shield className="size-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-foreground">
                  Escudo de Racha (Streak Shield)
                </span>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Si tienes un día pesado o te enfermas, tu racha se congela automáticamente sin perder tu avance.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 rounded-xl bg-muted/50 p-3 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  Escudos disponibles este mes:
                </span>
                <strong className="text-foreground">1 de 2</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  Bonus por racha de 7 días:
                </span>
                <strong className="text-emerald-600 dark:text-emerald-400">
                  +10 pts Reserva
                </strong>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              className="w-full text-xs font-semibold cursor-pointer"
              onClick={() => setMostrarInfoRacha(false)}
            >
              Entendido
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ============================================================ */}
      {/* DRAWER: AÑADIR NUEVO HÁBITO (PLANTILLAS 1-TAP) */}
      {/* ============================================================ */}
      <Drawer open={drawerNuevoHabito} onOpenChange={setDrawerNuevoHabito}>
        <DrawerContent className="max-w-md mx-auto">
          <DrawerHeader className="text-left">
            <DrawerTitle className="font-heading text-base font-bold">
              Añadir nuevo micro-hábito 🎯
            </DrawerTitle>
            <DrawerDescription className="text-xs text-muted-foreground">
              Elige una plantilla validada de 1 tap para sumar a tu rutina de bienestar.
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex flex-col gap-2.5 p-4 pt-1 max-h-[60vh] overflow-y-auto">
            {HABITOS_SUGERIDOS.map((sugerido) => {
              const Icon = sugerido.icon
              return (
                <div
                  key={sugerido.id}
                  className="flex items-center justify-between rounded-xl border border-border p-3 transition-colors hover:border-primary/40 bg-card"
                >
                  <div className="flex items-start gap-2.5">
                    <div className={cn("flex size-8 shrink-0 items-center justify-center rounded-lg", sugerido.colorClass)}>
                      <Icon className="size-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-foreground">
                        {sugerido.nombre}
                      </span>
                      <span className="text-[11px] text-muted-foreground leading-tight">
                        {sugerido.detalle}
                      </span>
                    </div>
                  </div>

                  <Button
                    size="xs"
                    className="h-7 text-[10px] shrink-0 cursor-pointer"
                    onClick={() => {
                      dispararConfetti()
                      setDrawerNuevoHabito(false)
                    }}
                  >
                    Añadir
                  </Button>
                </div>
              )
            })}
          </div>

          <DrawerFooter className="pt-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs cursor-pointer"
              onClick={() => setDrawerNuevoHabito(false)}
            >
              Cerrar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* ============================================================ */}
      {/* DIÁLOGO DE CELEBRACIÓN DE NIVEL DESBLOQUEADO */}
      {/* ============================================================ */}
      <Dialog
        open={celebrando !== null}
        onOpenChange={(open) => !open && cerrarCelebracion()}
      >
        <DialogContent>
          <DialogHeader className="items-center text-center">
            <PartyPopper className="size-10 text-primary animate-bounce" />
            <DialogTitle className="font-heading text-lg">
              {nivelCelebrado?.titulo}
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              {nivelCelebrado?.detalle}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              className="w-full text-xs cursor-pointer"
              onClick={() => {
                cerrarCelebracion()
                router.push("/recompensa")
              }}
            >
              Ver mi recompensa
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
