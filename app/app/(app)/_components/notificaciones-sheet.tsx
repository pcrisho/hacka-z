"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Bell,
  Check,
  CheckCircle2,
  ExternalLink,
  Flame,
  Gift,
  HeartPulse,
  Shield,
  Sparkles,
  Stethoscope,
  Users,
  Zap,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useReserva } from "@/hooks/use-reserva"
import { nivelParaPuntos } from "@/lib/reserva/context"
import { NIVELES_RECOMPENSA } from "@/lib/reserva/constants"
import { cn } from "@/lib/utils"

export function NotificacionesSheet() {
  const router = useRouter()
  const { state } = useReserva()
  const [open, setOpen] = useState(false)
  const [leidas, setLeidas] = useState(false)

  const nivelPendiente = nivelParaPuntos(state.reservaPuntos)
  const nivel = NIVELES_RECOMPENSA.find((n) => n.id === nivelPendiente)
  const hayRecompensa =
    nivelPendiente !== null &&
    !state.recompensasDesbloqueadas.includes(nivelPendiente)

  const notificacionesNoLeidas = hayRecompensa && !leidas ? 1 : 0

  function navegarA(ruta: string) {
    setOpen(false)
    router.push(ruta)
  }

  return (
    <Sheet open={open} onOpenChange={(v) => {
      setOpen(v)
      if (v) setLeidas(true)
    }}>
      <SheetTrigger
        aria-label="Notificaciones y Novedades"
        className="relative flex size-9 items-center justify-center rounded-xl border border-border/80 bg-muted/40 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:scale-95 cursor-pointer"
      >
        <Bell className="size-4" />
        {notificacionesNoLeidas > 0 && (
          <span className="absolute right-1.5 top-1.5 flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
        )}
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col justify-between p-5 max-w-xs sm:max-w-sm">
        <div className="flex flex-col gap-4">
          <SheetHeader className="text-left p-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SheetTitle className="font-heading text-base font-bold">
                  Novedades & Avisos 🔔
                </SheetTitle>
              </div>
              <Badge variant="outline" className="text-[10px] text-muted-foreground font-normal">
                FIBO × Pacífico
              </Badge>
            </div>
            <SheetDescription className="text-xs text-muted-foreground">
              Recompensas desbloqueadas, estado de racha y retos grupales activos.
            </SheetDescription>
          </SheetHeader>

          {/* Lista de Notificaciones Interactivas */}
          <div className="flex flex-col gap-3 pt-2 overflow-y-auto max-h-[75vh]">
            {/* 1. Recompensa de Nivel */}
            {nivel && (
              <Card className="border-primary/40 bg-linear-to-br from-primary/10 via-card to-card shadow-2xs">
                <CardContent className="flex flex-col gap-2 p-3.5">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-primary text-primary-foreground text-[10px] font-semibold">
                      🎁 Recompensa Lista
                    </Badge>
                    <span className="text-[10px] text-muted-foreground">Hoy</span>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-bold text-foreground">
                      {nivel.titulo}
                    </p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      {nivel.detalle}
                    </p>
                  </div>

                  <Button
                    size="xs"
                    className="mt-1 w-full gap-1 text-[11px] font-semibold cursor-pointer"
                    onClick={() => navegarA("/recompensa")}
                  >
                    <span>Reclamar beneficio</span>
                    <ExternalLink className="size-3" />
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* 2. Escudo de Racha */}
            <Card className="border-border/80 bg-card shadow-2xs">
              <CardContent className="flex items-start gap-3 p-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                  <Flame className="size-4" />
                </div>
                <div className="flex flex-1 flex-col gap-0.5">
                  <span className="text-xs font-bold text-foreground">
                    Racha protegida: 5 días
                  </span>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Tienes 1 Escudo de Racha activo este mes. Descansar cuando lo
                    necesites no cancelará tu constancia.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 3. Reto Grupal */}
            <Card className="border-border/80 bg-card shadow-2xs">
              <CardContent className="flex flex-col gap-2 p-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[10px]">
                    👥 Reto Semanal
                  </Badge>
                  <span className="text-[10px] text-muted-foreground">Comunidad</span>
                </div>

                <div className="flex flex-col gap-0.5">
                  <p className="text-xs font-bold text-foreground">
                    Cero Delivery en Lima 🍱
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    480+ participantes cocinando en casa. Gana +30 pts Reserva.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => navegarA("/comunidad")}
                  className="text-[11px] font-semibold text-primary hover:underline underline-offset-2 flex items-center gap-1 cursor-pointer pt-0.5"
                >
                  <span>Ver en Comunidad</span>
                  <ExternalLink className="size-3" />
                </button>
              </CardContent>
            </Card>

            {/* 4. Telemedicina Tsana */}
            <Card className="border-border/80 bg-card shadow-2xs">
              <CardContent className="flex items-start gap-3 p-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <Stethoscope className="size-4" />
                </div>
                <div className="flex flex-1 flex-col gap-0.5">
                  <span className="text-xs font-bold text-foreground">
                    Tsana Activo
                  </span>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Teleconsultas ilimitadas de medicina general y pediatría, incluidas
                    en tu microseguro con Pacífico Seguros.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="pt-3 border-t border-border/60">
          <Button
            variant="outline"
            size="sm"
            className="w-full text-xs cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Cerrar avisos
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
