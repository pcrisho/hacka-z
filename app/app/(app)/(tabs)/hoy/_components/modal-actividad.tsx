"use client"

import { useEffect, useState } from "react"
import confetti from "canvas-confetti"
import {
  Activity,
  Flame,
  Footprints,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Timer,
  Trophy,
  Zap,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ModalActividadProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCompletar: (actividad: string) => void
  // Props opcionales de sincronización externa con la card de /hoy
  segundosRestantes?: number
  timerCorriendo?: boolean
  onToggleTimer?: () => void
  onReiniciarTimer?: () => void
  onCompletarTimer?: () => void
}

const OPCIONES_ACTIVIDAD = [
  {
    id: "caminata",
    titulo: "Caminata urbana",
    subtitulo: "15-20 min hacia campus o trabajo",
    icono: Footprints,
    calorias: "~85 kcal",
  },
  {
    id: "gym-running",
    titulo: "Trote o Gimnasio",
    subtitulo: "Entrenamiento de fuerza o cardio",
    icono: Activity,
    calorias: "~140 kcal",
  },
  {
    id: "escaleras",
    titulo: "Escaleras & Movimiento",
    subtitulo: "Evitar ascensores y desplazarse activo",
    icono: Zap,
    calorias: "~60 kcal",
  },
  {
    id: "movilidad",
    titulo: "Estiramiento o Yoga",
    subtitulo: "Pausa activa postural en casa",
    icono: Flame,
    calorias: "~50 kcal",
  },
]

export function ModalActividad({
  open,
  onOpenChange,
  onCompletar,
  segundosRestantes: segundosExt,
  timerCorriendo: timerCorriendoExt,
  onToggleTimer: onToggleExt,
  onReiniciarTimer: onReiniciarExt,
  onCompletarTimer: onCompletarExt,
}: ModalActividadProps) {
  const [actividadSeleccionada, setActividadSeleccionada] = useState("caminata")
  const [segundosLocal, setSegundosLocal] = useState(15 * 60)
  const [timerCorriendoLocal, setTimerCorriendoLocal] = useState(false)
  const [guardando, setGuardando] = useState(false)

  const usaTimerExterno = segundosExt !== undefined
  const segundosRestantes = usaTimerExterno ? segundosExt : segundosLocal
  const timerCorriendo = usaTimerExterno ? Boolean(timerCorriendoExt) : timerCorriendoLocal

  // Manejo de timer local si no hay timer externo
  useEffect(() => {
    if (usaTimerExterno) return

    let intervalo: NodeJS.Timeout | null = null
    if (timerCorriendoLocal && segundosLocal > 0) {
      intervalo = setInterval(() => {
        setSegundosLocal((prev) => prev - 1)
      }, 1000)
    } else if (segundosLocal === 0 && timerCorriendoLocal) {
      setTimerCorriendoLocal(false)
      handleConfirmar("Caminata 15 min completada")
    }
    return () => {
      if (intervalo) clearInterval(intervalo)
    }
  }, [usaTimerExterno, timerCorriendoLocal, segundosLocal])

  const minutos = Math.floor(segundosRestantes / 60)
  const segundos = segundosRestantes % 60
  const tiempoFormateado = `${String(minutos).padStart(2, "0")}:${String(
    segundos
  ).padStart(2, "0")}`

  const progresoTimer = Math.round(((15 * 60 - segundosRestantes) / (15 * 60)) * 100)

  function handleConfirmar(nombreActividad?: string) {
    setGuardando(true)
    const act =
      nombreActividad ||
      OPCIONES_ACTIVIDAD.find((o) => o.id === actividadSeleccionada)?.titulo ||
      "Actividad física"

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.65 },
      colors: ["#0099CC", "#01A355", "#D4A24C"],
    })

    setTimeout(() => {
      setGuardando(false)
      onCompletar(act)
      onOpenChange(false)
    }, 600)
  }

  function reiniciarTimer() {
    if (onReiniciarExt) {
      onReiniciarExt()
    } else {
      setTimerCorriendoLocal(false)
      setSegundosLocal(15 * 60)
    }
  }

  function toggleTimer() {
    if (onToggleExt) {
      onToggleExt()
    } else {
      setTimerCorriendoLocal((c) => !c)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xs sm:max-w-sm">
        <DialogHeader className="text-left">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/10 text-[11px] font-medium text-primary"
            >
              <Activity className="mr-1 size-3" /> Pilar Cuerpo
            </Badge>
          </div>
          <DialogTitle className="font-heading text-lg font-bold">
            Movimiento y Energía 🏃
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            No necesitas un smartwatch. Cualquier movimiento consciente cuenta para
            activar tu respaldo de salud.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="actividades" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="actividades" className="text-xs cursor-pointer">
              Registrar actividad
            </TabsTrigger>
            <TabsTrigger value="timer" className="text-xs cursor-pointer">
              Mini-Timer 15m
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: Selector de actividades de 1 tap */}
          <TabsContent value="actividades" className="mt-3 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              {OPCIONES_ACTIVIDAD.map((opcion) => {
                const activa = actividadSeleccionada === opcion.id
                const Icon = opcion.icono
                return (
                  <button
                    key={opcion.id}
                    type="button"
                    onClick={() => setActividadSeleccionada(opcion.id)}
                    className={cn(
                      "flex items-center justify-between rounded-xl border p-2.5 text-left transition-all cursor-pointer",
                      activa
                        ? "border-primary bg-primary/10 shadow-xs ring-1 ring-primary/40"
                        : "border-border/80 bg-card hover:bg-muted/50"
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                          activa
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        <Icon className="size-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-foreground leading-tight">
                          {opcion.titulo}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {opcion.subtitulo}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                      {opcion.calorias}
                    </span>
                  </button>
                )
              })}
            </div>

            <Button
              size="sm"
              disabled={guardando}
              className="mt-1 w-full gap-1.5 text-xs font-semibold cursor-pointer"
              onClick={() => handleConfirmar()}
            >
              <Sparkles className="size-3.5" />
              <span>{guardando ? "Guardando…" : "Confirmar movimiento"}</span>
            </Button>
          </TabsContent>

          {/* Tab 2: Mini-Timer interactivo */}
          <TabsContent value="timer" className="mt-3 flex flex-col items-center gap-4 py-2">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="relative flex size-28 items-center justify-center rounded-full border-4 border-primary/20 bg-primary/5">
                <span className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
                  {tiempoFormateado}
                </span>
              </div>
              <span className="text-[11px] text-muted-foreground">
                {timerCorriendo
                  ? "¡Vas excelente! Camina a tu propio ritmo 🚶"
                  : "Presiona play para arrancar tu caminata de 15 min"}
              </span>
            </div>

            {/* Controles del Timer */}
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant="outline"
                className="size-9 p-0 rounded-full cursor-pointer"
                onClick={reiniciarTimer}
                title="Reiniciar a 15:00"
              >
                <RotateCcw className="size-4 text-muted-foreground" />
              </Button>

              <Button
                size="sm"
                className="h-9 px-4 rounded-full gap-1.5 text-xs font-semibold cursor-pointer"
                onClick={toggleTimer}
              >
                {timerCorriendo ? (
                  <>
                    <Pause className="size-3.5" />
                    <span>Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="size-3.5 fill-current" />
                    <span>Iniciar</span>
                  </>
                )}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => {
                if (onCompletarExt) {
                  onCompletarExt()
                  onOpenChange(false)
                } else {
                  handleConfirmar("Caminata activa completada")
                }
              }}
              className="text-[11px] font-medium text-primary hover:underline underline-offset-2 cursor-pointer pt-1"
            >
              Completar directamente sin esperar el timer
            </button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
