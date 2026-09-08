"use client"

import { useEffect, useState } from "react"
import confetti from "canvas-confetti"
import {
  Brain,
  Check,
  HeartPulse,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  Stethoscope,
  Wind,
  Zap,
} from "lucide-react"

import { SpiralIcon } from "@/components/landing/brand-mark"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ModalRespiracionProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCompletar: (detalle: string) => void
}

type FaseRespiracion = "inhala" | "sosten" | "exhala"

export function ModalRespiracion({
  open,
  onOpenChange,
  onCompletar,
}: ModalRespiracionProps) {
  // Estado de la respiración guiada
  const [activo, setActivo] = useState(false)
  const [fase, setFase] = useState<FaseRespiracion>("inhala")
  const [segundoFase, setSegundoFase] = useState(4)
  const [cicloActual, setCicloActual] = useState(1)
  const totalCiclos = 3

  // Estado del Check-in emocional
  const [bateria, setBateria] = useState<"alta" | "media" | "baja">("media")
  const [guardando, setGuardando] = useState(false)

  // Control del ciclo de respiración 4-4-4
  useEffect(() => {
    if (!activo || !open) return

    const timer = setInterval(() => {
      setSegundoFase((prev) => {
        if (prev > 1) return prev - 1

        // Cambio de fase cuando llega a 1
        if (fase === "inhala") {
          setFase("sosten")
          return 4
        } else if (fase === "sosten") {
          setFase("exhala")
          return 4
        } else {
          // Completó un ciclo exhala
          if (cicloActual >= totalCiclos) {
            setActivo(false)
            finalizarConExito("Pausa de 3 respiraciones conscientes")
            return 4
          } else {
            setCicloActual((c) => c + 1)
            setFase("inhala")
            return 4
          }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [activo, fase, cicloActual, open])

  // Reset al cerrar
  useEffect(() => {
    if (!open) {
      setActivo(false)
      setFase("inhala")
      setSegundoFase(4)
      setCicloActual(1)
    }
  }, [open])

  function finalizarConExito(detalle: string) {
    setGuardando(true)
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.65 },
      colors: ["#01A355", "#0099CC", "#D4A24C"],
    })

    setTimeout(() => {
      setGuardando(false)
      onCompletar(detalle)
      onOpenChange(false)
    }, 600)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xs sm:max-w-sm">
        <DialogHeader className="text-left">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="border-emerald-500/30 bg-emerald-500/10 text-[11px] font-medium text-emerald-700 dark:text-emerald-400"
            >
              <Brain className="mr-1 size-3 text-emerald-600" /> Pilar Mente
            </Badge>
          </div>
          <DialogTitle className="font-heading text-lg font-bold">
            Pausa de Bienestar Mental 🧘
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            30 segundos para regular tu sistema nervioso y recargar tu energía.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="respiracion" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="respiracion" className="text-xs cursor-pointer">
              🌬️ Respiración (30s)
            </TabsTrigger>
            <TabsTrigger value="checkin" className="text-xs cursor-pointer">
              ⚡ Check-in de energía
            </TabsTrigger>
          </TabsList>

          {/* ============================================================ */}
          {/* TAB 1: RESPIRACIÓN GUIADA */}
          {/* ============================================================ */}
          <TabsContent
            value="respiracion"
            className="mt-3 flex flex-col items-center gap-4 py-2"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                Ciclo {cicloActual} de {totalCiclos}
              </span>
              <span>•</span>
              <span className="capitalize text-emerald-600 dark:text-emerald-400 font-medium">
                {fase === "inhala"
                  ? "Inhala profundamente"
                  : fase === "sosten"
                  ? "Sostén el aire"
                  : "Exhala con calma"}
              </span>
            </div>

            {/* Círculo animado pulsante */}
            <div className="relative flex size-36 items-center justify-center">
              {/* Anillo de fondo pulsante */}
              <div
                className={cn(
                  "absolute inset-0 m-auto rounded-full bg-emerald-500/15 transition-all duration-1000 ease-in-out",
                  fase === "inhala" && "scale-110 bg-emerald-500/25",
                  fase === "sosten" && "scale-105 bg-emerald-500/20",
                  fase === "exhala" && "scale-90 bg-emerald-500/10"
                )}
              />

              {/* Centro con espiral y contador */}
              <div className="relative z-10 flex size-24 flex-col items-center justify-center rounded-full bg-card shadow-sm border border-emerald-500/30">
                <SpiralIcon className="size-6 text-emerald-600 dark:text-emerald-400 mb-0.5" />
                <span className="font-heading text-xl font-bold text-foreground">
                  {segundoFase}s
                </span>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
                  {fase}
                </span>
              </div>
            </div>

            {/* Controles */}
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant={activo ? "secondary" : "default"}
                className={cn(
                  "h-9 px-5 rounded-full text-xs font-semibold gap-1.5 cursor-pointer",
                  !activo && "bg-emerald-600 hover:bg-emerald-700 text-white"
                )}
                onClick={() => setActivo((a) => !a)}
              >
                {activo ? (
                  <>
                    <Pause className="size-3.5" />
                    <span>Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="size-3.5 fill-current" />
                    <span>Iniciar respiración</span>
                  </>
                )}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => finalizarConExito("Respiración consciente completada")}
              className="text-[11px] font-medium text-emerald-600 hover:underline underline-offset-2 cursor-pointer pt-0.5 dark:text-emerald-400"
            >
              Completar directamente sin el temporizador
            </button>
          </TabsContent>

          {/* ============================================================ */}
          {/* TAB 2: CHECK-IN DE ENERGÍA */}
          {/* ============================================================ */}
          <TabsContent value="checkin" className="mt-3 flex flex-col gap-3">
            <span className="text-xs font-semibold text-foreground">
              ¿Cómo sientes tu nivel de energía y estrés en este momento?
            </span>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setBateria("alta")}
                className={cn(
                  "flex flex-col items-center justify-center rounded-xl border p-2.5 transition-all cursor-pointer",
                  bateria === "alta"
                    ? "border-emerald-500 bg-emerald-500/15 ring-1 ring-emerald-500/40 text-emerald-900 dark:text-emerald-200"
                    : "border-border/80 bg-card hover:bg-muted/50"
                )}
              >
                <span className="text-lg">⚡</span>
                <span className="text-xs font-semibold mt-1">Con energía</span>
                <span className="text-[9px] text-muted-foreground">Motivado/a</span>
              </button>

              <button
                type="button"
                onClick={() => setBateria("media")}
                className={cn(
                  "flex flex-col items-center justify-center rounded-xl border p-2.5 transition-all cursor-pointer",
                  bateria === "media"
                    ? "border-primary bg-primary/15 ring-1 ring-primary/40 text-primary-900 dark:text-primary-200"
                    : "border-border/80 bg-card hover:bg-muted/50"
                )}
              >
                <span className="text-lg">😌</span>
                <span className="text-xs font-semibold mt-1">En calma</span>
                <span className="text-[9px] text-muted-foreground">Tranquilo/a</span>
              </button>

              <button
                type="button"
                onClick={() => setBateria("baja")}
                className={cn(
                  "flex flex-col items-center justify-center rounded-xl border p-2.5 transition-all cursor-pointer",
                  bateria === "baja"
                    ? "border-amber-500 bg-amber-500/15 ring-1 ring-amber-500/40 text-amber-900 dark:text-amber-200"
                    : "border-border/80 bg-card hover:bg-muted/50"
                )}
              >
                <span className="text-lg">🤯</span>
                <span className="text-xs font-semibold mt-1">Sobrecarga</span>
                <span className="text-[9px] text-muted-foreground">Estrés o fatiga</span>
              </button>
            </div>

            {/* Consejo contextual si está sobrecargado */}
            {bateria === "baja" && (
              <div className="flex items-start gap-2.5 rounded-xl border border-primary/30 bg-primary/5 p-3 animate-in fade-in-50">
                <Stethoscope className="size-4 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-bold text-foreground">
                    Tienes apoyo profesional gratuito
                  </span>
                  <span className="text-[10px] text-muted-foreground leading-tight">
                    Tu membresía FIBO te conecta con <strong>Dr. Online</strong>,
                    el servicio de teleconsulta de Pacífico (todos los días, 7am-11:30pm).
                  </span>
                </div>
              </div>
            )}

            <Button
              size="sm"
              disabled={guardando}
              className="mt-1 w-full gap-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer"
              onClick={() =>
                finalizarConExito(
                  `Check-in emocional: ${
                    bateria === "alta"
                      ? "Con energía"
                      : bateria === "media"
                      ? "En balance"
                      : "Pausa por sobrecarga"
                  }`
                )
              }
            >
              <Sparkles className="size-3.5" />
              <span>{guardando ? "Registrando…" : "Guardar check-in mental"}</span>
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
