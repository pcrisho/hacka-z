"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import confetti from "canvas-confetti"
import {
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Gift,
  Lock,
  PartyPopper,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Ticket,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react"

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
import { SpiralIcon } from "@/components/landing/brand-mark"
import { useReserva } from "@/hooks/use-reserva"
import { nivelParaPuntos } from "@/lib/reserva/context"
import { NIVELES_RECOMPENSA } from "@/lib/reserva/constants"
import { cn } from "@/lib/utils"

export function RecompensaView() {
  const router = useRouter()
  const { state, dispatch } = useReserva()

  const [linkCopiado, setLinkCopiado] = useState(false)
  const [modalCanjeado, setModalCanjeado] = useState(false)
  const [beneficioCanjeado, setBeneficioCanjeado] = useState(false)

  const nivelId = nivelParaPuntos(state.reservaPuntos) || "medio" // fallback empático a medio para demo fluida
  const nivel = NIVELES_RECOMPENSA.find((n) => n.id === nivelId)
  const yaDesbloqueada = state.recompensasDesbloqueadas.includes(nivelId)

  useEffect(() => {
    if (nivelId && !yaDesbloqueada) {
      dispatch({ type: "desbloquear-recompensa", nivel: nivelId })
    }
  }, [nivelId, yaDesbloqueada, dispatch])

  function dispararConfetti() {
    confetti({
      particleCount: 70,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#0099CC", "#D4A24C", "#01A355"],
    })
  }

  function copiarCodigo(codigo: string) {
    navigator.clipboard?.writeText(codigo)
    setLinkCopiado(true)
    dispararConfetti()
    setTimeout(() => setLinkCopiado(false), 2200)
  }

  function handleCanjear() {
    dispararConfetti()
    setBeneficioCanjeado(true)
    setModalCanjeado(true)
  }

  const aliasUsuario = state.sesion?.perfil?.alias || "Camila"
  const codigoCanje =
    nivelId === "bajo"
      ? "FIBO-PRIMER-PASO"
      : nivelId === "alto"
      ? "FIBO-MENTE-PLENA"
      : "FIBO-CALM-2026"

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pb-14 max-w-md mx-auto w-full">
      {/* ============================================================ */}
      {/* HERO DE CELEBRACIÓN DE RECOMPENSA */}
      {/* ============================================================ */}
      <div className="flex flex-col items-center text-center gap-2 pt-2">
        <div className="relative flex size-16 items-center justify-center rounded-3xl bg-linear-to-br from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/30 shadow-xs">
          <Trophy className="size-8 text-amber-600 dark:text-amber-400 animate-bounce" />
          <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px] font-bold shadow-2xs">
            ✓
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-center gap-1.5">
            <Badge
              variant="outline"
              className="border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[11px] font-semibold"
            >
              <Sparkles className="mr-1 size-3 text-amber-500" />
              Recompensa Desbloqueada
            </Badge>
          </div>

          <h1 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
            ¡Felicidades, {aliasUsuario}! 🎁
          </h1>

          <p className="text-xs text-muted-foreground max-w-xs mx-auto leading-relaxed">
            Tu constancia semanal ha dado frutos. Reclama tu beneficio digital
            y activa el acceso a tu microseguro respaldado por Pacífico.
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* TICKET DIGITAL DE BENEFICIO (VOUCHER PERFORADO) */}
      {/* ============================================================ */}
      <div className="relative flex flex-col rounded-2xl border border-primary/30 bg-linear-to-b from-card via-card to-primary/5 p-4 shadow-sm overflow-hidden">
        {/* Adornos visuales de perforación tipo ticket */}
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 size-5 rounded-full bg-background border-r border-primary/30" />
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 size-5 rounded-full bg-background border-l border-primary/30" />

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-bold text-primary">
              <Ticket className="size-4" />
              Voucher de Beneficio Exclusivo
            </span>
            <Badge variant="secondary" className="text-[10px] font-semibold">
              100% Bonificado
            </Badge>
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="font-heading text-base font-bold text-foreground">
              {nivel?.titulo || "1 mes de beneficio digital"}
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {nivel?.detalle ||
                "Constancia de hábitos desbloquea una suscripción tipo mindfulness o cupón de salud."}
            </p>
          </div>

          {/* Caja con el Código de Canje */}
          <div className="flex items-center justify-between gap-2 rounded-xl bg-muted/60 p-2.5 border border-dashed border-border/80">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">
                Código de activación
              </span>
              <span className="font-mono text-sm font-bold text-foreground tracking-wide">
                {codigoCanje}
              </span>
            </div>

            <Button
              size="xs"
              variant="outline"
              onClick={() => copiarCodigo(codigoCanje)}
              className="h-8 gap-1.5 text-xs font-medium cursor-pointer"
            >
              {linkCopiado ? (
                <>
                  <Check className="size-3.5 text-emerald-600" />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="size-3.5 text-muted-foreground" />
                  <span>Copiar</span>
                </>
              )}
            </Button>
          </div>

          {/* Botón de Canje */}
          <Button
            size="sm"
            disabled={beneficioCanjeado}
            onClick={handleCanjear}
            className={cn(
              "w-full h-9 gap-1.5 text-xs font-semibold cursor-pointer",
              beneficioCanjeado
                ? "bg-emerald-600 text-white hover:bg-emerald-600"
                : "bg-primary text-primary-foreground"
            )}
          >
            {beneficioCanjeado ? (
              <>
                <CheckCircle2 className="size-4" />
                <span>Beneficio activado con éxito</span>
              </>
            ) : (
              <>
                <Gift className="size-4" />
                <span>Activar mi beneficio ahora</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* CONVERSIÓN AL MICROSEGURO COMO "DERECHO GANADO" */}
      {/* ============================================================ */}
      <Card className="border-primary/40 bg-linear-to-br from-card via-card to-primary/10 shadow-xs">
        <CardContent className="flex flex-col gap-3.5 p-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-bold text-foreground">
              <ShieldCheck className="size-4 text-primary" />
              Tu Derecho Ganado con Pacífico Seguros
            </span>
            <Badge
              variant="outline"
              className="border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-semibold"
            >
              Acceso Exclusivo
            </Badge>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-heading text-sm font-bold text-foreground">
              Microseguro Médico Pay-as-you-go 🛡️
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Gracias a tu constancia de hábitos, has ganado el derecho a
              activar tu póliza de emergencias médicas sin contratos forzosos.
            </p>
          </div>

          {/* 3 Beneficios Clave del Seguro */}
          <div className="grid grid-cols-1 gap-2 text-xs pt-0.5">
            <div className="flex items-center gap-2.5 rounded-xl bg-background/60 p-2.5 border border-border/70">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Shield className="size-3.5" />
              </div>
              <span className="text-[11px] font-medium text-foreground">
                Hasta <strong>S/ 500</strong> de indemnización por hospitalización
              </span>
            </div>

            <div className="flex items-center gap-2.5 rounded-xl bg-background/60 p-2.5 border border-border/70">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                <Zap className="size-3.5" />
              </div>
              <span className="text-[11px] font-medium text-foreground">
                Tarifa joven: <strong>S/ 9.90 / mes</strong> vía Yape (pausable sin penalidad)
              </span>
            </div>

            <div className="flex items-center gap-2.5 rounded-xl bg-background/60 p-2.5 border border-border/70">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                <Stethoscope className="size-3.5" />
              </div>
              <span className="text-[11px] font-medium text-foreground">
                Teleconsultas ilimitadas con <strong>Tsana</strong>, sin costo adicional
              </span>
            </div>
          </div>

          <Button
            size="sm"
            className="w-full h-9 gap-1.5 text-xs font-semibold bg-foreground text-background hover:bg-foreground/90 cursor-pointer mt-1"
            onClick={() => {
              dispatch({ type: "ofrecer-seguro" })
              router.push("/seguro")
            }}
          >
            <span>Configurar mi microseguro en Yape</span>
            <ExternalLink className="size-3.5" />
          </Button>
        </CardContent>
      </Card>

      {/* ============================================================ */}
      {/* CAMINO ESCALONADO DE PROGRESIÓN (3 NIVELES) */}
      {/* ============================================================ */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between px-0.5">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Tu Camino de Niveles FIBO
          </span>
          <span className="text-[11px] font-medium text-primary">
            Suma hábitos cada semana
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {NIVELES_RECOMPENSA.map((item) => {
            const alcanzado = item.id === nivelId || item.id === "bajo"
            const esActual = item.id === nivelId

            return (
              <div
                key={item.id}
                className={cn(
                  "flex items-center justify-between p-3 rounded-xl border transition-all",
                  esActual
                    ? "border-primary/40 bg-primary/5 shadow-2xs"
                    : alcanzado
                    ? "border-emerald-500/20 bg-card"
                    : "border-border/60 bg-muted/30 opacity-75"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={cn(
                      "flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                      esActual
                        ? "bg-primary text-primary-foreground"
                        : alcanzado
                        ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {alcanzado ? "✓" : <Lock className="size-3.5" />}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-foreground">
                      {item.titulo}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {item.umbralPuntos} pts Reserva requeridos
                    </span>
                  </div>
                </div>

                <Badge
                  variant="outline"
                  className={cn(
                    "text-[10px] font-medium",
                    esActual
                      ? "border-primary/30 bg-primary/10 text-primary"
                      : alcanzado
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600"
                      : "text-muted-foreground"
                  )}
                >
                  {esActual ? "Actual 🎁" : alcanzado ? "Completado" : "Próximo"}
                </Badge>
              </div>
            )
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* DIÁLOGO DE BENEFICIO CANJEADO */}
      {/* ============================================================ */}
      <Dialog open={modalCanjeado} onOpenChange={setModalCanjeado}>
        <DialogContent className="max-w-xs sm:max-w-sm">
          <DialogHeader className="items-center text-center">
            <PartyPopper className="size-10 text-primary animate-bounce" />
            <DialogTitle className="font-heading text-lg font-bold">
              ¡Beneficio Activado! 🎟️
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Hemos enviado las instrucciones y tu código <strong>{codigoCanje}</strong> a tu
              correo institucional. ¡Disfruta tu mes de bienestar!
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              className="w-full text-xs font-semibold cursor-pointer"
              onClick={() => setModalCanjeado(false)}
            >
              Volver a Recompensas
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
