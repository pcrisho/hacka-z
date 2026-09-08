"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Activity,
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  Flame,
  Lock,
  PiggyBank,
  Shield,
  ShieldCheck,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { NIVELES_RECOMPENSA, RETOS_COMUNIDAD } from "@/lib/reserva/constants"
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

  // Cobertura proyectada en soles, con tope anclado al monto real de Seguro Salud Yape
  // (Pacífico): S/ 500 de indemnización por hospitalización. Los niveles intermedios
  // son la progresión propia de FIBO, no una escala oficial de Pacífico.
  const coberturaSoles = useMemo(() => {
    if (state.seguro.activo) return 500
    if (nivelActual === "alto") return 500
    if (nivelActual === "medio") return 350
    if (nivelActual === "bajo") return 250
    return Math.max(150, puntosActuales * 80 + 150)
  }, [state.seguro.activo, nivelActual, puntosActuales])

  // Datos dinámicos para el gráfico según el rango temporal seleccionado
  const datosGrafico = useMemo(() => {
    const basePuntos = Math.max(15, puntosActuales * 15 + 25)
    if (rango === "semana") {
      return [
        { tiempo: "Lun", puntos: Math.max(5, basePuntos - 20) },
        { tiempo: "Mar", puntos: Math.max(8, basePuntos - 15) },
        { tiempo: "Mié", puntos: Math.max(12, basePuntos - 10) },
        { tiempo: "Jue", puntos: Math.max(15, basePuntos - 8) },
        { tiempo: "Vie", puntos: Math.max(18, basePuntos - 4) },
        { tiempo: "Sáb", puntos: Math.max(20, basePuntos - 2) },
        { tiempo: "Hoy", puntos: basePuntos },
      ]
    }
    if (rango === "mes") {
      return [
        { tiempo: "Sem 1", puntos: 15 },
        { tiempo: "Sem 2", puntos: 35 },
        { tiempo: "Sem 3", puntos: 60 },
        { tiempo: "Sem 4", puntos: 85 },
        { tiempo: "Hoy", puntos: Math.max(95, basePuntos + 35) },
      ]
    }
    // "total" / histórico
    return [
      { tiempo: "Jul", puntos: 25 },
      { tiempo: "Ago", puntos: 70 },
      { tiempo: "Set", puntos: Math.max(115, basePuntos + 65) },
    ]
  }, [rango, puntosActuales])

  // Retos activos enlazados desde /comunidad y /hoy
  const retosEnCurso = useMemo(() => {
    return (state.retosActivos || [])
      .map((id) => {
        const def = RETOS_COMUNIDAD.find((r) => r.id === id)
        const prog = state.retosProgreso[id] || { completadoHoy: false, diasCompletados: 0 }
        if (!def) return null
        const meta = def.metaDias || 7
        const porcentaje = Math.min(100, Math.round((prog.diasCompletados / meta) * 100))
        return { ...def, progreso: prog, porcentaje, meta }
      })
      .filter((r): r is NonNullable<typeof r> => r !== null)
  }, [state.retosActivos, state.retosProgreso])

  // Tribu activa del usuario
  const tribuActiva = useMemo(() => {
    return state.tribus.find((t) => t.esMiembro) || state.tribus[0]
  }, [state.tribus])

  // Métricas reactivas de hábitos completados
  const habitoAhorro = state.habitos.find((h) => h.id === "ahorro")?.hechoEstaSemana
  const habitoCuerpo = state.habitos.find((h) => h.id === "actividad-fisica")?.hechoEstaSemana
  const habitoMente = state.habitos.find((h) => h.id === "bienestar-mental")?.hechoEstaSemana

  return (
    <div className="flex flex-1 flex-col gap-5 p-4 pb-12">
      {/* Header Limpio */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex flex-col">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Analíticas de Bienestar
          </p>
          <h1 className="font-heading text-xl font-bold tracking-tight text-foreground">
            Tu evolución y respaldo
          </h1>
        </div>
        <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary font-semibold text-xs">
          {nivelActual
            ? nivelActual === "bajo"
              ? "Nivel 1 • Iniciando"
              : nivelActual === "medio"
                ? "Nivel 2 • Constante"
                : "Nivel 3 • Guardián"
            : "Iniciando"}
        </Badge>
      </div>

      {/* Card Hero: Saldo de Cobertura y Reserva */}
      <Card className="border-primary/30 bg-linear-to-br from-card via-card to-primary/5 shadow-xs">
        <CardContent className="flex flex-col gap-3.5 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
              <Shield className="size-3.5 text-primary" />
              Respaldo Médico Garantizado
            </span>
            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <TrendingUp className="size-3" /> +24% este mes
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
              S/ {coberturaSoles.toLocaleString()}
            </span>
            <span className="text-xs text-muted-foreground">cobertura médica en emergencias</span>
          </div>

          <div className="flex flex-col gap-1.5 pt-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">
                Reserva Acumulada: <strong className="text-foreground">{puntosActuales * 15 + 45} pts</strong>
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

          <div className="flex items-center justify-between pt-1 text-[11px] text-muted-foreground border-t border-border/40">
            <span className="flex items-center gap-1">
              <Flame className="size-3 text-amber-500" />
              Racha de 5 días
            </span>
            <span className="font-medium text-foreground">
              {state.seguro.activo ? "Póliza activa Pacífico" : "Respaldo Pacífico garantizado"}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Gráfico de Evolución Compuesta con Selector Reactivo */}
      <div className="flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-4 shadow-xs">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-sm font-semibold">
            Evolución de tu Reserva
          </h3>

          {/* Segmented control reactivo */}
          <div className="flex items-center rounded-xl bg-muted/60 p-0.5 text-[11px]">
            {(["semana", "mes", "total"] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRango(r)}
                className={cn(
                  "rounded-lg px-2 py-0.5 font-medium transition-all cursor-pointer",
                  rango === r
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {r === "semana" ? "Semana" : r === "mes" ? "Mes" : "Histórico"}
              </button>
            ))}
          </div>
        </div>

        <ChartContainer config={chartConfig} className="aspect-[16/9] w-full pt-2">
          <AreaChart data={datosGrafico} margin={{ left: -10, right: 10, top: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="fillPuntos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.35} />
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.25} />
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

      {/* Desglose de Hábitos por Pilares (Conectado a /hoy) */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between px-0.5">
          <p className="font-heading text-sm font-semibold">Distribución por Pilar</p>
          <span className="text-[11px] font-medium text-muted-foreground">Esta semana</span>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {/* Bolsillo */}
          <div className="flex flex-col gap-1 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-3 text-center">
            <div className="mx-auto flex size-8 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
              <PiggyBank className="size-4" />
            </div>
            <span className="font-heading text-sm font-bold text-foreground pt-1">
              S/ {habitoAhorro ? "45" : "35"}
            </span>
            <span className="text-[10px] text-muted-foreground">Alcancía de salud</span>
          </div>

          {/* Cuerpo */}
          <div className="flex flex-col gap-1 rounded-2xl border border-primary/20 bg-primary/5 p-3 text-center">
            <div className="mx-auto flex size-8 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Activity className="size-4" />
            </div>
            <span className="font-heading text-sm font-bold text-foreground pt-1">
              {habitoCuerpo ? "4.5 hrs" : "3.2 hrs"}
            </span>
            <span className="text-[10px] text-muted-foreground">Movimiento activo</span>
          </div>

          {/* Mente */}
          <div className="flex flex-col gap-1 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-center">
            <div className="mx-auto flex size-8 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <Brain className="size-4" />
            </div>
            <span className="font-heading text-sm font-bold text-foreground pt-1">
              {habitoMente ? "8 pausas" : "5 pausas"}
            </span>
            <span className="text-[10px] text-muted-foreground">Mindful & relax</span>
          </div>
        </div>
      </div>

      {/* Sección Conexión Comunidad & Retos */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between px-0.5">
          <p className="font-heading text-sm font-semibold">Impacto en Comunidad</p>
          <button
            type="button"
            onClick={() => router.push("/comunidad")}
            className="text-[11px] font-medium text-primary hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            Ver tribus
            <ChevronRight className="size-3" />
          </button>
        </div>

        {/* Retos activos del usuario */}
        {retosEnCurso.length > 0 ? (
          <div className="flex flex-col gap-2">
            {retosEnCurso.map((reto) => (
              <div
                key={reto.id}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-3.5 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-bold">
                      <Trophy className="size-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold leading-tight">{reto.titulo}</p>
                      <p className="text-[10px] text-muted-foreground">{reto.categoria}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-[10px] font-medium border-border">
                    {reto.progreso.diasCompletados} de {reto.meta} días
                  </Badge>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${Math.max(8, reto.porcentaje)}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                    <span>{reto.porcentaje}% completado</span>
                    <span className="text-primary font-medium">{reto.recompensa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border p-3.5 text-center flex flex-col items-center gap-1.5 bg-muted/20">
            <Users className="size-4 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">
              Aún no estás inscrito en ningún reto comunitario.
            </p>
            <Button
              size="sm"
              variant="outline"
              className="h-7 text-xs cursor-pointer"
              onClick={() => router.push("/comunidad")}
            >
              Explorar Retos
            </Button>
          </div>
        )}

        {/* Tribu activa */}
        {tribuActiva && (
          <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-muted/25 p-3">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users className="size-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-foreground">
                  {tribuActiva.nombre}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  Meta colectiva: {tribuActiva.metaSemanal}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                {tribuActiva.cumplimiento}%
              </span>
              <span className="text-[10px] text-muted-foreground">del objetivo</span>
            </div>
          </div>
        )}
      </div>

      {/* Camino de Niveles & Recompensas (Stepped Milestones) */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between px-0.5">
          <p className="font-heading text-sm font-semibold">Recompensas por Constancia</p>
          <span className="text-[11px] font-medium text-primary">3 niveles</span>
        </div>

        <div className="flex flex-col gap-2">
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
                    "flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold mt-0.5",
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
                    <p className="text-xs font-bold leading-tight">
                      Nivel {index + 1}: {nivel.titulo}
                    </p>
                    {alcanzado && (
                      <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                        Desbloqueado ✓
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed pt-0.5">
                    {nivel.detalle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Tarjeta de Microseguro Pacífico (Alineada al modelo de negocio: Derecho Ganado, sin descuentos falsos) */}
      <Card className={cn(
        "border transition-all shadow-xs",
        state.seguro.activo
          ? "border-emerald-500/30 bg-emerald-500/5"
          : "border-primary/30 bg-primary/5"
      )}>
        <CardContent className="flex flex-col gap-3 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
              {state.seguro.activo ? (
                <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Shield className="size-4 text-primary" />
              )}
              <span>
                {state.seguro.activo ? "Microseguro Activo" : "Microseguro Pacífico Desbloqueado"}
              </span>
            </div>
            <Badge
              variant="outline"
              className={cn(
                "text-[10px] font-semibold",
                state.seguro.activo
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "border-primary/30 bg-primary/10 text-primary"
              )}
            >
              {state.seguro.activo ? "Póliza Vigente" : "S/ 9.90 / mes"}
            </Badge>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">
            {state.seguro.activo
              ? "Respaldo médico activo con hasta S/ 500 ante emergencias y consultas de salud preventiva con Tsana."
              : "Hasta S/ 500 de respaldo económico ante hospitalización. Pausable en cualquier momento vía Yape."}
          </p>

          <Button
            size="sm"
            className="w-full text-xs font-semibold cursor-pointer flex items-center justify-center gap-1.5 mt-0.5"
            onClick={() => router.push("/recompensa")}
          >
            <span>{state.seguro.activo ? "Ver mi póliza" : "Activar por S/ 9.90 con Yape"}</span>
            <ArrowRight className="size-3.5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

