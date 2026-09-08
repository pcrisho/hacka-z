"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Activity,
  ArrowRight,
  Brain,
  CheckCircle2,
  Lock,
  PiggyBank,
  Shield,
  Sparkles,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react"

import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SpiralIcon } from "@/components/landing/brand-mark"
import { NIVELES_RECOMPENSA } from "@/lib/reserva/constants"
import { nivelParaPuntos } from "@/lib/reserva/context"
import { useReserva } from "@/hooks/use-reserva"
import { cn } from "@/lib/utils"

const chartConfig = {
  puntos: { label: "Puntos Reserva", color: "var(--primary)" },
} satisfies ChartConfig

const PUNTOS_MAXIMOS = 6

export function ProgresoView() {
  const router = useRouter()
  const { state } = useReserva()
  const [rango, setRango] = useState<"semana" | "mes" | "total">("mes")

  const nivelActual = nivelParaPuntos(state.reservaPuntos)
  const puntosActuales = state.reservaPuntos
  const porcentajeTotal = Math.min(100, Math.round((puntosActuales / PUNTOS_MAXIMOS) * 100))

  // Cobertura proyectada en soles (1 pt = S/ 2,500 de respaldo médico)
  const coberturaSoles = Math.max(5000, puntosActuales * 2500 + 5000)

  // Datos de tendencia para el gráfico de área
  const datosGrafico =
    state.historial.length > 2
      ? state.historial.map((p, i) => ({
          tiempo: `Sem ${i + 1}`,
          puntos: p.puntos * 15 + 20,
        }))
      : [
          { tiempo: "Sem 1", puntos: 15 },
          { tiempo: "Sem 2", puntos: 35 },
          { tiempo: "Sem 3", puntos: 55 },
          { tiempo: "Sem 4", puntos: 80 },
          { tiempo: "Hoy", puntos: Math.max(90, puntosActuales * 20 + 90) },
        ]

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Analíticas de Bienestar
          </p>
          <h1 className="font-heading text-xl font-bold tracking-tight">
            Tu Progreso Acumulado 📈
          </h1>
        </div>
        <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary font-semibold text-xs">
          Nivel {nivelActual ? (nivelActual === "bajo" ? "1" : nivelActual === "medio" ? "2" : "3") : "Iniciando"}
        </Badge>
      </div>

      {/* Card Hero: Saldo de Cobertura y Reserva */}
      <Card className="border-primary/30 bg-linear-to-br from-card via-card to-primary/5 shadow-xs">
        <CardContent className="flex flex-col gap-3.5 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
              <Shield className="size-3.5 text-primary" />
              Respaldo Médico Proyectado
            </span>
            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <TrendingUp className="size-3" /> +24% este mes
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
              S/ {coberturaSoles.toLocaleString()}
            </span>
            <span className="text-xs text-muted-foreground">en emergencias</span>
          </div>

          <div className="flex flex-col gap-1.5 pt-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">
                Puntos de Reserva: <strong className="text-foreground">{puntosActuales * 15 + 45} pts</strong>
              </span>
              <span className="font-semibold text-primary">{porcentajeTotal}% de meta</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-input/60">
              <div
                className="h-full rounded-full bg-primary transition-all duration-700"
                style={{ width: `${Math.max(10, porcentajeTotal)}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Camino de Niveles & Recompensas (Stepped Milestones) */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between px-0.5">
          <p className="font-heading text-sm font-semibold">Camino de Recompensas Pacífico</p>
          <span className="text-[11px] text-muted-foreground">Ganas por constancia</span>
        </div>

        <div className="flex flex-col gap-2.5">
          {NIVELES_RECOMPENSA.map((nivel, index) => {
            const alcanzado = puntosActuales >= nivel.umbralPuntos
            const esActual =
              alcanzado &&
              (index === NIVELES_RECOMPENSA.length - 1 ||
                puntosActuales < NIVELES_RECOMPENSA[index + 1].umbralPuntos)

            return (
              <div
                key={nivel.id}
                className={cn(
                  "flex items-start gap-3 rounded-2xl border p-3.5 transition-all",
                  alcanzado
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : esActual
                      ? "border-primary/40 bg-primary/5"
                      : "border-border/60 bg-muted/20 opacity-70"
                )}
              >
                <div
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                    alcanzado
                      ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {alcanzado ? (
                    <CheckCircle2 className="size-4" />
                  ) : (
                    <Lock className="size-3.5" />
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold leading-none">
                      Nivel {index + 1}: {nivel.titulo}
                    </p>
                    {alcanzado && (
                      <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                        Desbloqueado ✓
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed pt-1">
                    {nivel.detalle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Gráfico de Evolución Compuesta */}
      <div className="flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-4 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="font-heading text-sm font-semibold">
              Evolución de tu Reserva
            </h3>
            <p className="text-[11px] text-muted-foreground">
              Crecimiento constante semana tras semana
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-muted p-0.5 text-[11px]">
            <span className="rounded-full bg-background px-2.5 py-0.5 font-semibold text-foreground shadow-xs">
              Mes
            </span>
          </div>
        </div>

        <ChartContainer config={chartConfig} className="aspect-[16/9] w-full pt-2">
          <AreaChart data={datosGrafico} margin={{ left: -10, right: 10, top: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="fillPuntos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="tiempo" tickLine={false} axisLine={false} tickMargin={8} fontSize={11} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              dataKey="puntos"
              type="monotone"
              fill="url(#fillPuntos)"
              stroke="var(--primary)"
              strokeWidth={2.5}
            />
          </AreaChart>
        </ChartContainer>
      </div>

      {/* Desglose de Hábitos por Pilares */}
      <div className="flex flex-col gap-2.5">
        <p className="font-heading text-sm font-semibold px-0.5">
          Distribución de Hábitos por Pilar
        </p>

        <div className="grid grid-cols-3 gap-2.5">
          {/* Bolsillo */}
          <div className="flex flex-col gap-1 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-3 text-center">
            <div className="mx-auto flex size-8 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
              <PiggyBank className="size-4" />
            </div>
            <span className="font-heading text-sm font-bold text-foreground pt-1">
              S/ 45
            </span>
            <span className="text-[10px] text-muted-foreground">Ahorro chico</span>
          </div>

          {/* Cuerpo */}
          <div className="flex flex-col gap-1 rounded-2xl border border-primary/20 bg-primary/5 p-3 text-center">
            <div className="mx-auto flex size-8 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Activity className="size-4" />
            </div>
            <span className="font-heading text-sm font-bold text-foreground pt-1">
              6.5 hrs
            </span>
            <span className="text-[10px] text-muted-foreground">Actividad física</span>
          </div>

          {/* Mente */}
          <div className="flex flex-col gap-1 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-center">
            <div className="mx-auto flex size-8 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <Brain className="size-4" />
            </div>
            <span className="font-heading text-sm font-bold text-foreground pt-1">
              8 pausas
            </span>
            <span className="text-[10px] text-muted-foreground">Salud mental</span>
          </div>
        </div>
      </div>

      {/* Tarjeta de Bonificación en Microseguro */}
      <Card className="border-border/80 bg-muted/40">
        <CardContent className="flex items-center justify-between gap-3 p-4">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
              <Zap className="size-3.5" />
              <span>Descuento en Microseguro</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Mantener 4 semanas de hábitos reduce tu prima de S/ 9.90 a S/ 6.90/mes.
            </p>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="h-8 shrink-0 text-xs cursor-pointer"
            onClick={() => router.push("/recompensa")}
          >
            Detalles
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
