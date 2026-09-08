"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import confetti from "canvas-confetti"
import {
  Activity,
  Brain,
  Check,
  CheckCircle2,
  Flame,
  PartyPopper,
  PiggyBank,
  Plus,
  Shield,
  Sparkles,
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
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { SpiralIcon } from "@/components/landing/brand-mark"
import { useReserva } from "@/hooks/use-reserva"
import { nivelParaPuntos } from "@/lib/reserva/context"
import { NIVELES_RECOMPENSA } from "@/lib/reserva/constants"
import type { NivelId } from "@/lib/reserva/types"
import { cn } from "@/lib/utils"

const PUNTOS_NIVEL_ALTO = 6

const DIAS_SEMANA = [
  { letra: "L", fecha: "1", completado: true },
  { letra: "M", fecha: "2", completado: true },
  { letra: "M", fecha: "3", completado: true },
  { letra: "J", fecha: "4", completado: true },
  { letra: "V", fecha: "5", completado: true },
  { letra: "S", fecha: "6", completado: false },
  { letra: "D", fecha: "7", esHoy: true },
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
  const [celebrando, setCelebrando] = useState<NivelId | null>(null)
  const [mostrarInfoRacha, setMostrarInfoRacha] = useState(false)
  const [drawerNuevoHabito, setDrawerNuevoHabito] = useState(false)
  const [diaSeleccionado, setDiaSeleccionado] = useState("7")
  const vistoRef = useRef<Set<NivelId>>(new Set())

  const habitosCompletadosHoy = state.habitos.filter((h) => h.hechoEstaSemana).length
  const totalHabitos = state.habitos.length

  const porcentaje = Math.min(
    100,
    Math.round((state.reservaPuntos / PUNTOS_NIVEL_ALTO) * 100)
  )
  const nivelPendiente = nivelParaPuntos(state.reservaPuntos)
  const hayRecompensaPorReclamar =
    nivelPendiente !== null &&
    !state.recompensasDesbloqueadas.includes(nivelPendiente)

  useEffect(() => {
    if (nivelPendiente && !vistoRef.current.has(nivelPendiente)) {
      vistoRef.current.add(nivelPendiente)
      setCelebrando(nivelPendiente)
    }
  }, [nivelPendiente])

  function dispararConfetti() {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.65 },
      colors: ["#0099CC", "#D4A24C", "#01A355"],
    })
  }

  function toggleHabito(habitoId: string, estaHecho: boolean) {
    if (estaHecho) {
      dispatch({ type: "desmarcar-habito", habitoId })
    } else {
      dispatch({ type: "completar-habito", habitoId })
      dispararConfetti()
    }
  }

  function agregarHabitoSugerido(sugerido: (typeof HABITOS_SUGERIDOS)[0]) {
    dispararConfetti()
    setDrawerNuevoHabito(false)
  }

  const aliasUsuario = state.sesion?.perfil?.alias || "Camila"
  const nivelCelebrado = NIVELES_RECOMPENSA.find((n) => n.id === celebrando)

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pb-12">
      {/* Header con saludo y racha */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Domingo, 6 de setiembre
          </p>
          <h1 className="font-heading text-xl font-bold tracking-tight">
            ¡Hola, {aliasUsuario}! ✨
          </h1>
        </div>

        {/* Badge de Racha interactiva */}
        <button
          type="button"
          onClick={() => setMostrarInfoRacha(true)}
          className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-600 transition-all hover:bg-amber-500/20 active:scale-95 dark:text-amber-400 cursor-pointer"
        >
          <Flame className="size-4 fill-amber-500 text-amber-500 animate-pulse" />
          <span>5 días racha</span>
        </button>
      </div>

      {/* Weekly Calendar Strip */}
      <div className="flex flex-col gap-2 rounded-2xl border border-border/80 bg-card p-3 shadow-xs">
        <div className="flex items-center justify-between px-1 text-xs text-muted-foreground">
          <span className="font-medium">Semana 1</span>
          <span className="flex items-center gap-1 text-primary">
            <Zap className="size-3.5" /> 5 de 7 días activos
          </span>
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {DIAS_SEMANA.map((d) => {
            const seleccionado = diaSeleccionado === d.fecha
            return (
              <button
                key={d.fecha}
                type="button"
                onClick={() => setDiaSeleccionado(d.fecha)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-xs transition-all cursor-pointer",
                  d.esHoy
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                    : seleccionado
                      ? "border border-primary/40 bg-accent text-accent-foreground"
                      : "hover:bg-muted/60 text-muted-foreground"
                )}
              >
                <span className="text-[11px] opacity-80">{d.letra}</span>
                <span className="text-sm font-semibold leading-none">{d.fecha}</span>
                {d.completado ? (
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                ) : (
                  <span className="size-1.5 rounded-full bg-transparent" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Anillo de la Reserva de Bienestar */}
      <div className="flex flex-col items-center gap-3 pt-2">
        <div className="relative">
          <AnimatedCircularProgressBar
            value={porcentaje}
            gaugePrimaryColor="var(--primary)"
            gaugeSecondaryColor="var(--border)"
            className="size-40 [&_span]:hidden"
          />
          <div className="absolute inset-0 m-auto flex size-24 flex-col items-center justify-center gap-1 rounded-full bg-card/80 shadow-inner backdrop-blur-xs">
            <SpiralIcon className="size-7" />
            <span className="text-xs font-bold text-foreground">
              {porcentaje}%
            </span>
          </div>
        </div>

        <div className="flex max-w-[280px] flex-col items-center text-center">
          <p className="font-heading text-sm font-semibold">
            {habitosCompletadosHoy === totalHabitos
              ? "¡Meta diaria cumplida! 🎉"
              : habitosCompletadosHoy === 0
                ? "Tu Reserva de Bienestar"
                : "¡Vas a excelente ritmo!"}
          </p>
          <p className="text-xs text-muted-foreground">
            {habitosCompletadosHoy === totalHabitos
              ? "Sumaste +15 pts hoy a tu protección de Pacífico."
              : "Completa tus 3 hábitos de hoy para sumar a tu Reserva."}
          </p>
        </div>
      </div>

      {/* Alerta de recompensa disponible */}
      {hayRecompensaPorReclamar && (
        <Card className="border-primary/40 bg-primary/5 transition-all animate-in fade-in-50">
          <CardContent className="flex items-center justify-between gap-3 p-4">
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                🎁
              </span>
              <div className="flex flex-col">
                <p className="text-xs font-bold text-primary">¡Nivel Desbloqueado!</p>
                <p className="text-xs text-muted-foreground">
                  Tienes una recompensa lista para canjear.
                </p>
              </div>
            </div>
            <Button size="sm" onClick={() => router.push("/recompensa")}>
              Ver
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Sección de hábitos diarios */}
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

            if (habito.id.includes("ahorro")) {
              pilarLabel = "Bolsillo 💰"
              pilarBadgeClass = "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-400"
              IconComponent = PiggyBank
            } else if (habito.id.includes("actividad")) {
              pilarLabel = "Cuerpo 🏃"
              pilarBadgeClass = "bg-primary/10 text-primary border-primary/20"
              IconComponent = Activity
            } else if (habito.id.includes("mental")) {
              pilarLabel = "Mente 🧠"
              pilarBadgeClass = "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-400"
              IconComponent = Brain
            }

            return (
              <Card
                key={habito.id}
                className={cn(
                  "overflow-hidden transition-all",
                  hecho
                    ? "border-emerald-500/30 bg-emerald-500/5 shadow-xs"
                    : "hover:border-border/80"
                )}
              >
                <CardContent className="flex flex-col gap-2.5 p-4">
                  {/* Fila superior: Pilar y Puntos */}
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className={cn("text-[11px] font-medium", pilarBadgeClass)}
                    >
                      {pilarLabel}
                    </Badge>
                    <span className="text-[11px] font-semibold text-muted-foreground">
                      +5 pts Reserva
                    </span>
                  </div>

                  {/* Fila central: Icono, Título y Detalle */}
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-2xl transition-colors",
                        hecho
                          ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
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

                  {/* Fila inferior: Acción interactiva */}
                  <div className="flex items-center justify-end gap-2 pt-1">
                    {hecho ? (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-semibold text-emerald-700 hover:bg-emerald-500/20 dark:text-emerald-300 cursor-pointer"
                        onClick={() => toggleHabito(habito.id, true)}
                        title="Clic para desmarcar si te equivocaste"
                      >
                        <Check className="size-3.5 stroke-[2.5]" />
                        <span>Completado</span>
                      </Button>
                    ) : habito.id.includes("ahorro") ? (
                      <div className="flex items-center gap-1.5">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-8 text-xs font-medium cursor-pointer"
                          onClick={() => toggleHabito(habito.id, false)}
                        >
                          S/ 5
                        </Button>
                        <Button
                          size="sm"
                          className="h-8 text-xs font-medium cursor-pointer"
                          onClick={() => toggleHabito(habito.id, false)}
                        >
                          S/ 10
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                        onClick={() => toggleHabito(habito.id, false)}
                      >
                        Marcar
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Diálogo de Celebración de Nivel */}
      <Dialog
        open={celebrando !== null}
        onOpenChange={(open) => !open && setCelebrando(null)}
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
              className="w-full"
              onClick={() => {
                setCelebrando(null)
                router.push("/recompensa")
              }}
            >
              Ver mi recompensa
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Diálogo Informativo de la Racha (Streak Shield) */}
      <Dialog open={mostrarInfoRacha} onOpenChange={setMostrarInfoRacha}>
        <DialogContent className="max-w-xs sm:max-w-sm">
          <DialogHeader className="items-center text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
              <Flame className="size-7 fill-amber-500" />
            </div>
            <DialogTitle className="font-heading text-base">
              Tu Racha de Bienestar 🔥
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Llevas 5 días consecutivos cuidando tus hábitos y protegiendo tu futuro.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-2 rounded-2xl bg-muted/50 p-3 text-xs">
            <div className="flex items-center gap-2 font-semibold text-foreground">
              <Shield className="size-4 text-primary" />
              <span>Escudo de Racha Activo</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              En FIBO no creemos en el castigo. Si un día olvidas marcar tus hábitos, tu escudo protege tu racha automáticamente (1 freeze disponible por semana).
            </p>
          </div>

          <DialogFooter>
            <Button
              className="w-full"
              size="sm"
              onClick={() => setMostrarInfoRacha(false)}
            >
              ¡Entendido!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Drawer para Agregar Nuevo Hábito */}
      <Drawer open={drawerNuevoHabito} onOpenChange={setDrawerNuevoHabito}>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle className="font-heading text-base">
              Nuevo Hábito de Bienestar ✨
            </DrawerTitle>
            <DrawerDescription className="text-xs text-muted-foreground">
              Elige una sugerencia o explora cómo sumar más valor a tu Reserva de Pacífico.
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex flex-col gap-2.5 p-4 pt-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Plantillas Populares 1-Tap
            </p>
            <div className="flex flex-col gap-2">
              {HABITOS_SUGERIDOS.map((sug) => (
                <div
                  key={sug.id}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-border/70 p-3 transition-colors hover:border-primary/40 hover:bg-accent/30"
                >
                  <div className="flex items-center gap-3">
                    <div className={cn("flex size-9 items-center justify-center rounded-xl", sug.colorClass)}>
                      <sug.icon className="size-4" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xs font-semibold">{sug.nombre}</p>
                      <p className="text-[11px] text-muted-foreground">{sug.detalle}</p>
                    </div>
                  </div>
                  <Button
                    size="xs"
                    variant="secondary"
                    className="h-7 text-xs cursor-pointer"
                    onClick={() => agregarHabitoSugerido(sug)}
                  >
                    + Agregar
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <DrawerFooter className="pt-2">
            <Button
              variant="outline"
              className="w-full cursor-pointer"
              onClick={() => setDrawerNuevoHabito(false)}
            >
              Cerrar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
