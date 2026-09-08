"use client"

import { useState } from "react"
import confetti from "canvas-confetti"
import {
  Activity,
  ArrowRight,
  Brain,
  Check,
  CheckCircle2,
  Copy,
  Flame,
  MessageCircle,
  PiggyBank,
  Plus,
  Share2,
  Shield,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const RETOS_INICIALES = [
  {
    id: "cero-delivery",
    titulo: "Reto Cero Delivery: Cocinar en Casa 🍱",
    categoria: "Bolsillo & Finanzas",
    categoriaBadge: "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-400",
    descripcion: "Cocina en casa al menos 4 días esta semana. Reduce gastos hormiga y cuida tu alimentación.",
    participantes: 482,
    progresoComunidad: 68,
    recompensa: "+30 pts Reserva + Cupón S/ 15 Quererte Sano",
    diasRestantes: 3,
    unido: false,
  },
  {
    id: "pasos-lima",
    titulo: "10,000 Pasos por 5 Días 🏃",
    categoria: "Cuerpo & Vitalidad",
    categoriaBadge: "bg-primary/10 text-primary border-primary/20",
    descripcion: "Mantén el ritmo diario caminando hacia la universidad o tu lugar de trabajo sin wearable.",
    participantes: 315,
    progresoComunidad: 54,
    recompensa: "+25 pts Reserva + Insignia 'Runner Urbano'",
    diasRestantes: 5,
    unido: false,
  },
  {
    id: "anti-burnout",
    titulo: "Semana Anti-Burnout Mental 🧠",
    categoria: "Salud Mental",
    categoriaBadge: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-400",
    descripcion: "3 pausas de respiración profunda y chequeo preventivo con Dr. Online de Pacífico.",
    participantes: 240,
    progresoComunidad: 82,
    recompensa: "+20 pts Reserva + Desbloqueo de Nivel 2",
    diasRestantes: 2,
    unido: true,
  },
]

const TRIBUS = [
  {
    id: "ucsur-active",
    nombre: "UCSUR Runners & Active 🏃",
    universidad: "Universidad Científica del Sur",
    miembros: 128,
    metaSemanal: "5,000 km colectivos",
    rachaSemanas: 4,
    cumplimiento: 88,
    esMiembro: true,
  },
  {
    id: "freelancers-peru",
    nombre: "Freelancers & Creadores Perú 💻",
    universidad: "Comunidad Independiente Lima",
    miembros: 95,
    metaSemanal: "Ahorro de emergencia quincenal",
    rachaSemanas: 2,
    cumplimiento: 76,
    esMiembro: false,
  },
  {
    id: "primer-empleo",
    nombre: "Gen Z Primer Empleo & Finanzas 🪙",
    universidad: "Interuniversitario Lima",
    miembros: 210,
    metaSemanal: "Cero compras compulsivas",
    rachaSemanas: 3,
    cumplimiento: 82,
    esMiembro: false,
  },
]

const FEED_ACTIVIDAD = [
  { usuario: "Camila R. (UCSUR)", accion: "completó su racha de 5 días 🔥", tiempo: "Hace 5 min" },
  { usuario: "Mateo V.", accion: "apartó S/ 10 para su Reserva de Salud 🪙", tiempo: "Hace 18 min" },
  { usuario: "Tribu UCSUR Runners", accion: "alcanzó el 88% de su meta semanal colectiva 🏃", tiempo: "Hace 42 min" },
  { usuario: "Diego S.", accion: "activó seguro de pichanga para 8 amigos ⚽", tiempo: "Hace 1 hora" },
]

export function ComunidadView() {
  const [retos, setRetos] = useState(RETOS_INICIALES)
  const [modalPichanga, setModalPichanga] = useState(false)
  const [jugadoresPichanga, setJugadoresPichanga] = useState(10)
  const [linkCopiado, setLinkCopiado] = useState(false)
  const [tribuSeleccionada, setTribuSeleccionada] = useState<(typeof TRIBUS)[0] | null>(null)

  function dispararConfetti() {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.65 },
      colors: ["#0099CC", "#D4A24C", "#01A355"],
    })
  }

  function toggleUnirseReto(retoId: string) {
    setRetos((prev) =>
      prev.map((r) => {
        if (r.id === retoId) {
          const proximo = !r.unido
          if (proximo) dispararConfetti()
          return {
            ...r,
            unido: proximo,
            participantes: proximo ? r.participantes + 1 : r.participantes - 1,
          }
        }
        return r
      })
    )
  }

  function copiarLinkPichanga() {
    setLinkCopiado(true)
    setTimeout(() => setLinkCopiado(false), 2000)
  }

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pb-12">
      {/* Header */}
      <div className="flex flex-col gap-1 pt-1">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Comunidad FIBO × Pacífico
          </p>
          <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
            <Users className="size-3" /> 480+ en Lima
          </span>
        </div>
        <h1 className="font-heading text-xl font-bold tracking-tight">
          El bienestar se comparte 👥
        </h1>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Unirte a retos y tribus multiplica hasta 95% tu constancia y desbloquea protección colectiva.
        </p>
      </div>

      {/* Tabs de Navegación */}
      <Tabs defaultValue="retos" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="retos" className="text-xs cursor-pointer">
            🏆 Retos
          </TabsTrigger>
          <TabsTrigger value="tribus" className="text-xs cursor-pointer">
            👥 Tribus
          </TabsTrigger>
          <TabsTrigger value="pichanga" className="text-xs cursor-pointer">
            ⚡ Pichanga
          </TabsTrigger>
        </TabsList>

        {/* ============================================================ */}
        {/* PESTAÑA 1: RETOS DEL MES */}
        {/* ============================================================ */}
        <TabsContent value="retos" className="mt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between px-0.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Retos Activos de la Semana
            </p>
            <span className="text-[11px] font-medium text-primary">
              Gana bonificación a tu Reserva
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {retos.map((reto) => (
              <Card key={reto.id} className="overflow-hidden">
                <CardContent className="flex flex-col gap-3 p-4">
                  {/* Categoría y Tiempo */}
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={reto.categoriaBadge}>
                      {reto.categoria}
                    </Badge>
                    <span className="text-[11px] font-medium text-muted-foreground">
                      Quedan {reto.diasRestantes} días
                    </span>
                  </div>

                  {/* Título y descripción */}
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading text-sm font-bold leading-snug">
                      {reto.titulo}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {reto.descripcion}
                    </p>
                  </div>

                  {/* Progreso de la comunidad */}
                  <div className="flex flex-col gap-1.5 rounded-xl bg-muted/40 p-2.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-medium text-muted-foreground">
                        👥 {reto.participantes} participantes
                      </span>
                      <span className="font-bold text-foreground">
                        {reto.progresoComunidad}% logrado
                      </span>
                    </div>
                    {/* Barra de progreso */}
                    <div className="h-2 w-full overflow-hidden rounded-full bg-input/60">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-500"
                        style={{ width: `${reto.progresoComunidad}%` }}
                      />
                    </div>
                  </div>

                  {/* Recompensa comunitaria y botón */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <Trophy className="size-3.5" />
                      <span className="text-[11px]">{reto.recompensa}</span>
                    </div>

                    <Button
                      size="sm"
                      variant={reto.unido ? "outline" : "default"}
                      className="h-8 gap-1 text-xs cursor-pointer"
                      onClick={() => toggleUnirseReto(reto.id)}
                    >
                      {reto.unido ? (
                        <>
                          <Check className="size-3.5 text-emerald-600" />
                          <span>Unido</span>
                        </>
                      ) : (
                        "Unirme al reto"
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ============================================================ */}
        {/* PESTAÑA 2: MIS TRIBUS */}
        {/* ============================================================ */}
        <TabsContent value="tribus" className="mt-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1 rounded-2xl border border-primary/20 bg-primary/5 p-3.5">
            <div className="flex items-center gap-1.5 font-heading text-xs font-bold text-primary">
              <Shield className="size-4" />
              <span>Regla del Escudo de Tribu</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Si el 80% de los miembros de tu tribu completa sus hábitos de la semana, todos reciben un Escudo de Racha colectivo. Sin juzgar ni exponer saldos.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {TRIBUS.map((tribu) => (
              <Card key={tribu.id}>
                <CardContent className="flex flex-col gap-3 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading text-sm font-bold">
                          {tribu.nombre}
                        </h3>
                        {tribu.esMiembro && (
                          <Badge variant="secondary" className="text-[10px]">
                            Miembro
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {tribu.universidad}
                      </p>
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-600 dark:text-amber-400">
                      <Flame className="size-3 fill-amber-500" /> Sem {tribu.rachaSemanas}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-muted/40 px-3 py-2 text-xs">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground">Meta de la semana</span>
                      <span className="font-semibold text-foreground">{tribu.metaSemanal}</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] text-muted-foreground">Cumplimiento</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        {tribu.cumplimiento}%
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-muted-foreground">
                      👥 {tribu.miembros} miembros
                    </span>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 gap-1 text-xs cursor-pointer"
                      onClick={() => setTribuSeleccionada(tribu)}
                    >
                      <MessageCircle className="size-3.5" />
                      <span>Ver tribu</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ============================================================ */}
        {/* PESTAÑA 3: MICROSEGURO GRUPAL / PICHANGA */}
        {/* ============================================================ */}
        <TabsContent value="pichanga" className="mt-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-4 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-primary/20 text-primary">
                ⚡
              </span>
              <h3 className="font-heading text-sm font-bold">
                Pacífico On-Demand para Grupos
              </h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed pt-1">
              ¿Vas a jugar fútbol, hacer trekking o viajar el fin de semana? Activa una póliza express de accidentes válida por 24 o 48 horas para tu grupo dividiendo el pago por Yape.
            </p>
          </div>

          {/* Card 1: Pichanga */}
          <Card className="border-primary/40 bg-linear-to-br from-card via-card to-primary/5">
            <CardContent className="flex flex-col gap-3 p-4">
              <div className="flex items-center justify-between">
                <Badge className="bg-primary text-primary-foreground text-[10px]">
                  Innovación Pacífico
                </Badge>
                <span className="text-xs font-bold text-primary">
                  S/ 3.50 por persona
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-base font-bold">
                  ⚽ Seguro Pichanga de Fin de Semana
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Cobertura médica de emergencia ante esguinces, fracturas o golpes durante el partido. Válido por 24 horas en clínicas afiliadas de Pacífico.
                </p>
              </div>

              <div className="flex flex-col gap-1 rounded-xl bg-muted/40 p-2.5 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-600 font-semibold dark:text-emerald-400">
                  <CheckCircle2 className="size-3.5" />
                  <span>Sin papeleos ni contratos anuales</span>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  Uno del grupo arma la pichanga, comparte el link a sus amigos y cada uno aprueba con su Yape en 1 clic.
                </p>
              </div>

              <Button
                className="w-full h-9 gap-1.5 text-xs font-semibold cursor-pointer"
                onClick={() => setModalPichanga(true)}
              >
                <Zap className="size-4" />
                <span>Armar grupo para pichanga</span>
              </Button>
            </CardContent>
          </Card>

          {/* Card 2: Escapada o Viaje Corto */}
          <Card>
            <CardContent className="flex flex-col gap-3 p-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-[10px]">
                  Trekking & Salidas
                </Badge>
                <span className="text-xs font-bold text-foreground">
                  S/ 5.00 por persona
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-sm font-bold">
                  🎒 Seguro Escapada (48 horas)
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Protección médica para viajes a Lunahuaná, Cieneguilla o caminatas a Huaraz. Cobertura de rescate y atención express.
                </p>
              </div>

              <Button
                variant="secondary"
                className="w-full h-9 text-xs cursor-pointer"
                onClick={() => setModalPichanga(true)}
              >
                Crear grupo de viaje
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Ticker / Feed Social en Vivo */}
      <div className="flex flex-col gap-2 rounded-2xl border border-border/70 bg-card p-3.5">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5 font-semibold text-foreground">
            <Sparkles className="size-3.5 text-amber-500" /> En vivo en la comunidad
          </span>
          <span className="text-[10px]">Actualizado ahora</span>
        </div>

        <div className="flex flex-col gap-2 pt-1">
          {FEED_ACTIVIDAD.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between gap-2 border-b border-border/40 pb-1.5 last:border-0 last:pb-0 text-xs"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-foreground text-[11px]">
                  {item.usuario}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {item.accion}
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground shrink-0">
                {item.tiempo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Simulador de Pichanga Grupal */}
      <Dialog open={modalPichanga} onOpenChange={setModalPichanga}>
        <DialogContent className="max-w-xs sm:max-w-sm">
          <DialogHeader className="text-left">
            <DialogTitle className="font-heading text-base">
              ⚽ Armar Seguro de Pichanga
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Define cuántos juegan y comparte el link para que cada amigo pague su parte por Yape.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3 py-2 text-xs">
            {/* Selector de jugadores */}
            <div className="flex items-center justify-between rounded-xl bg-muted/50 p-3">
              <span className="font-medium">Número de jugadores</span>
              <div className="flex items-center gap-2">
                <Button
                  size="xs"
                  variant="outline"
                  className="size-7 p-0 cursor-pointer"
                  onClick={() => setJugadoresPichanga((j) => Math.max(2, j - 1))}
                >
                  -
                </Button>
                <span className="w-6 text-center font-bold text-sm">
                  {jugadoresPichanga}
                </span>
                <Button
                  size="xs"
                  variant="outline"
                  className="size-7 p-0 cursor-pointer"
                  onClick={() => setJugadoresPichanga((j) => Math.min(22, j + 1))}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Resumen de costos */}
            <div className="flex flex-col gap-1 rounded-xl border border-border p-3">
              <div className="flex justify-between text-muted-foreground text-[11px]">
                <span>Costo individual (24h)</span>
                <span>S/ 3.50</span>
              </div>
              <div className="flex justify-between text-muted-foreground text-[11px]">
                <span>Póliza colectiva Pacífico</span>
                <span>S/ {(jugadoresPichanga * 3.5).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-foreground pt-1 border-t border-border mt-1">
                <span>Tu aporte hoy</span>
                <span className="text-primary font-heading">S/ 3.50</span>
              </div>
            </div>

            {/* Link de invitación */}
            <div className="flex items-center gap-2 rounded-xl bg-muted/40 p-2 text-[11px]">
              <span className="truncate text-muted-foreground">
                fibo.pe/pichanga?g=lima-7281
              </span>
              <Button
                size="xs"
                variant="secondary"
                className="h-7 shrink-0 gap-1 text-[11px] cursor-pointer"
                onClick={copiarLinkPichanga}
              >
                {linkCopiado ? <Check className="size-3 text-emerald-600" /> : <Copy className="size-3" />}
                <span>{linkCopiado ? "¡Copiado!" : "Copiar"}</span>
              </Button>
            </div>
          </div>

          <DialogFooter className="flex flex-col gap-2">
            <Button
              className="w-full gap-1.5 text-xs font-semibold cursor-pointer"
              onClick={() => {
                dispararConfetti()
                setModalPichanga(false)
              }}
            >
              <Share2 className="size-3.5" />
              <span>Compartir por WhatsApp</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-xs cursor-pointer"
              onClick={() => setModalPichanga(false)}
            >
              Cancelar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal: Detalle de Tribu */}
      <Dialog
        open={tribuSeleccionada !== null}
        onOpenChange={(open) => !open && setTribuSeleccionada(null)}
      >
        <DialogContent className="max-w-xs sm:max-w-sm">
          <DialogHeader className="text-left">
            <DialogTitle className="font-heading text-base">
              {tribuSeleccionada?.nombre}
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              {tribuSeleccionada?.universidad} • {tribuSeleccionada?.miembros} miembros
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-2.5 py-2 text-xs">
            <div className="flex items-center justify-between rounded-xl bg-muted/50 p-3">
              <span className="text-muted-foreground">Racha colectiva</span>
              <span className="font-bold text-amber-600 dark:text-amber-400">
                {tribuSeleccionada?.rachaSemanas} semanas activas 🔥
              </span>
            </div>

            <div className="flex flex-col gap-1 rounded-xl border border-border p-3 text-[11px] text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">Objetivo en curso:</p>
              <p>{tribuSeleccionada?.metaSemanal}</p>
              <p className="pt-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                ✓ 88% de los miembros ya sumaron hoy
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              className="w-full text-xs font-semibold cursor-pointer"
              onClick={() => {
                dispararConfetti()
                setTribuSeleccionada(null)
              }}
            >
              ¡Alentar a la Tribu! 🙌
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
