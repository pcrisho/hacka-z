"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import confetti from "canvas-confetti"
import {
  Activity,
  ArrowRight,
  Bike,
  Brain,
  Check,
  CheckCircle2,
  Copy,
  Flame,
  Footprints,
  HeartHandshake,
  MessageCircle,
  Mountain,
  Plus,
  Share2,
  Shield,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  UtensilsCrossed,
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect } from "@/components/ui/native-select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useReserva } from "@/hooks/use-reserva"
import {
  AMBITOS_TRIBU_OPCIONES,
  METAS_COLECTIVAS_OPCIONES,
  RETOS_COMUNIDAD,
  type RetoComunidadItem,
} from "@/lib/reserva/constants"
import type { Tribu } from "@/lib/reserva/types"

interface ActividadSalida {
  id: string
  nombre: string
  duracion: string
  costoPersona: number
  descripcion: string
  cobertura: string
  icono: React.ElementType
}

const ACTIVIDADES_SALIDAS: ActividadSalida[] = [
  {
    id: "pichanga",
    nombre: "Pichanga de Fútbol",
    duracion: "24 horas",
    costoPersona: 3.5,
    descripcion: "Para partidos de pasto sintético, futsal o canchas de barrio con integrantes de tu grupo.",
    cobertura: "Urgencias por fracturas, esguinces de tobillo, desgarros y traslados en ambulancia hasta S/ 15,000.",
    icono: Zap,
  },
  {
    id: "ciclismo",
    nombre: "Ruta de Ciclismo Urbano",
    duracion: "24 horas",
    costoPersona: 3.0,
    descripcion: "Salidas nocturnas, ciclovías o recorridos hacia Miraflores, Barranco o el Morro Solar.",
    cobertura: "Atención inmediata por caídas en pista, traumatismos y curaciones de emergencia en clínicas afiliadas.",
    icono: Bike,
  },
  {
    id: "running",
    nombre: "Running Grupal / 10K",
    duracion: "24 horas",
    costoPersona: 3.0,
    descripcion: "Tiradas largas de fin de semana, trotes de fondo o entrenamientos colectivos.",
    cobertura: "Atención de desgarros, distensiones musculares y descompensaciones térmicas en centros médicos Pacífico.",
    icono: Footprints,
  },
  {
    id: "trekking",
    nombre: "Trekking & Escapada",
    duracion: "48 horas",
    costoPersona: 5.0,
    descripcion: "Caminatas en Lomas de Lachay, Lunahuaná, Cieneguilla o campamentos de fin de semana.",
    cobertura: "Protección extendida 48h con asistencia en carretera, rescate médico y urgencias hospitalarias.",
    icono: Mountain,
  },
  {
    id: "padel",
    nombre: "Torneo de Pádel / Vóley",
    duracion: "24 horas",
    costoPersona: 3.5,
    descripcion: "Partidos rápidos entre amigos o compañeros de tribu después de clases o trabajo.",
    cobertura: "Lesiones articulares, traumatismos de muñeca, hombro o rodilla sin deducible para menores de 28.",
    icono: Activity,
  },
]

const FEED_ACTIVIDAD = [
  { usuario: "Camila R.", accion: "completó su check del Reto Cero Delivery", tiempo: "Hace 4 min" },
  { usuario: "Mateo V.", accion: "apartó S/ 10 a su Reserva médica", tiempo: "Hace 15 min" },
  { usuario: "Tribu Runners Lima Sur", accion: "alcanzó el 88% del desafío semanal colectivo", tiempo: "Hace 38 min" },
  { usuario: "Diego S. y 11 amigos", accion: "activaron protección médica para su pichanga de sábado", tiempo: "Hace 1 hora" },
  { usuario: "Valeria M.", accion: "fundó la tribu 'Creativos de Barranco'", tiempo: "Hace 2 horas" },
]

export function ComunidadView() {
  const router = useRouter()
  const { state, dispatch } = useReserva()

  // Modales
  const [modalCrearTribu, setModalCrearTribu] = useState(false)
  const [tribuDetalle, setTribuDetalle] = useState<Tribu | null>(null)
  const [actividadSeleccionada, setActividadSeleccionada] = useState<ActividadSalida>(ACTIVIDADES_SALIDAS[0])
  const [tribuSalidaSeleccionadaId, setTribuSalidaSeleccionadaId] = useState<string>(
    state.tribus[0]?.id || "ucsur-active"
  )

  // Formulario nueva tribu
  const [nuevoNombreTribu, setNuevoNombreTribu] = useState("")
  const [nuevoAmbito, setNuevoAmbito] = useState(AMBITOS_TRIBU_OPCIONES[0])
  const [nuevaMetaSemanal, setNuevaMetaSemanal] = useState(METAS_COLECTIVAS_OPCIONES[0])

  function dispararConfetti() {
    confetti({
      particleCount: 50,
      spread: 65,
      origin: { y: 0.65 },
      colors: ["#0099CC", "#D4A24C", "#01A355"],
    })
  }

  function handleToggleReto(retoId: string, estaInscrito: boolean) {
    if (estaInscrito) {
      dispatch({ type: "abandonar-reto", retoId })
    } else {
      dispatch({ type: "unirse-reto", retoId })
      dispararConfetti()
    }
  }

  function handleCrearTribu(e: React.FormEvent) {
    e.preventDefault()
    if (!nuevoNombreTribu.trim()) return

    dispatch({
      type: "crear-tribu",
      tribu: {
        nombre: nuevoNombreTribu.trim(),
        universidad: nuevoAmbito,
        metaSemanal: nuevaMetaSemanal,
      },
    })

    dispararConfetti()
    setModalCrearTribu(false)
    setNuevoNombreTribu("")
  }

  function handleToggleMembresiaTribu(tribu: Tribu) {
    if (tribu.esMiembro) {
      dispatch({ type: "salir-tribu", tribuId: tribu.id })
    } else {
      dispatch({ type: "unirse-tribu", tribuId: tribu.id })
      dispararConfetti()
    }
    if (tribuDetalle && tribuDetalle.id === tribu.id) {
      setTribuDetalle({ ...tribuDetalle, esMiembro: !tribu.esMiembro })
    }
  }

  function compartirTribuWhatsApp(tribu: Tribu) {
    const mensaje = encodeURIComponent(
      `¡Hola! Me uní a la tribu "${tribu.nombre}" en FIBO × Pacífico. Estamos sumando hábitos colectivos y activando el Escudo de Protección semanal. ¡Súmate gratis aquí: https://fibo.pe/tribu/${tribu.id}!`
    )
    window.open(`https://wa.me/?text=${mensaje}`, "_blank")
  }

  const tribuSalidaActual =
    state.tribus.find((t) => t.id === tribuSalidaSeleccionadaId) || state.tribus[0]

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pb-16">
      {/* Header General */}
      <div className="flex flex-col gap-1 pt-1">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Comunidad FIBO
          </p>
          <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
            <Users className="size-3 text-primary" />
            <span>520+ en Lima</span>
          </span>
        </div>
        <h1 className="font-heading text-xl font-bold tracking-tight">
          El bienestar se comparte
        </h1>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Cumple metas en grupo y activa protección colectiva con Pacífico.
        </p>
      </div>

      {/* Tabs Principales */}
      <Tabs defaultValue="retos" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="retos" className="text-xs gap-1.5 cursor-pointer">
            <Trophy className="size-3.5" />
            <span>Retos</span>
          </TabsTrigger>
          <TabsTrigger value="tribus" className="text-xs gap-1.5 cursor-pointer">
            <Users className="size-3.5" />
            <span>Tribus</span>
          </TabsTrigger>
          <TabsTrigger value="salidas" className="text-xs gap-1.5 cursor-pointer">
            <ShieldCheck className="size-3.5" />
            <span>Salidas</span>
          </TabsTrigger>
        </TabsList>

        {/* ============================================================ */}
        {/* PESTAÑA 1: RETOS COMUNITARIOS (Sincronizados con /hoy) */}
        {/* ============================================================ */}
        <TabsContent value="retos" className="mt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <p className="font-heading text-sm font-bold text-foreground">
              Retos de la semana
            </p>
            <span className="text-xs font-semibold text-primary">
              +10 pts por día
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {RETOS_COMUNIDAD.map((reto: RetoComunidadItem) => {
              const estaInscrito = state.retosActivos.includes(reto.id)
              const progreso = state.retosProgreso[reto.id] || { completadoHoy: false, diasCompletados: 0 }

              let CategoriaIcon = UtensilsCrossed
              if (reto.pilar === "Cuerpo") CategoriaIcon = Activity
              if (reto.pilar === "Mente") CategoriaIcon = Brain

              return (
                <Card
                  key={reto.id}
                  className={`overflow-hidden transition-all ${
                    estaInscrito
                      ? "border-emerald-500/40 bg-card shadow-xs"
                      : "border-border/80 hover:border-primary/40 bg-card"
                  }`}
                >
                  <CardContent className="flex flex-col gap-3 p-4">
                    {/* Categoría y Estado / Tiempo */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 font-semibold text-muted-foreground">
                        <CategoriaIcon className="size-3.5 text-primary" />
                        <span>{reto.categoria}</span>
                      </span>

                      {estaInscrito ? (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                          <Check className="size-3 stroke-[2.5]" />
                          <span>Inscrito</span>
                        </span>
                      ) : (
                        <span className="text-[11px] font-medium text-muted-foreground">
                          {reto.diasRestantes} días restantes
                        </span>
                      )}
                    </div>

                    {/* Título y descripción limpia */}
                    <div className="flex flex-col gap-0.5">
                      <h3 className="font-heading text-sm font-bold leading-snug">
                        {reto.titulo}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {reto.descripcion}
                      </p>
                    </div>

                    {/* Progreso integrado (sin caja gris anidada) */}
                    <div className="flex flex-col gap-1.5 py-0.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-medium text-muted-foreground flex items-center gap-1">
                          <Users className="size-3 text-muted-foreground" />
                          <span>{reto.participantes + (estaInscrito ? 1 : 0)} personas</span>
                        </span>
                        <span className="font-semibold text-foreground">
                          {estaInscrito ? (
                            <span className="text-emerald-600 dark:text-emerald-400">
                              Tu avance: {progreso.diasCompletados}/{reto.metaDias} días
                            </span>
                          ) : (
                            <span>{reto.progresoComunidad}% grupal</span>
                          )}
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            estaInscrito ? "bg-emerald-500" : "bg-primary"
                          }`}
                          style={{
                            width: `${
                              estaInscrito
                                ? Math.min(100, Math.round((progreso.diasCompletados / reto.metaDias) * 100))
                                : reto.progresoComunidad
                            }%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Recompensa y Acciones */}
                    <div className="flex items-center justify-between gap-2 pt-1 border-t border-border/40">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <Trophy className="size-3.5 shrink-0" />
                        <span className="text-[11px] font-medium">{reto.recompensa}</span>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {estaInscrito ? (
                          <>
                            <Button
                              size="xs"
                              variant="outline"
                              className="h-7 text-[11px] gap-1 text-primary border-primary/30 hover:bg-primary/10 cursor-pointer"
                              onClick={() => router.push("/hoy")}
                            >
                              <span>Ver en Hoy</span>
                              <ArrowRight className="size-3" />
                            </Button>
                            <Button
                              size="xs"
                              variant="ghost"
                              className="h-7 text-[10px] text-muted-foreground hover:text-destructive cursor-pointer"
                              onClick={() => handleToggleReto(reto.id, true)}
                            >
                              Salir
                            </Button>
                          </>
                        ) : (
                          <Button
                            size="xs"
                            className="h-7 px-3 text-xs font-semibold cursor-pointer"
                            onClick={() => handleToggleReto(reto.id, false)}
                          >
                            <span>Unirme</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        {/* ============================================================ */}
        {/* PESTAÑA 2: TRIBUS (Creación guiada con selects y desafíos) */}
        {/* ============================================================ */}
        <TabsContent value="tribus" className="mt-4 flex flex-col gap-4">
          {/* Banner Regla del Escudo de Tribu */}
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-3.5 shadow-xs">
            <div className="flex flex-col gap-0.5">
              <span className="font-heading text-xs font-bold text-primary flex items-center gap-1.5">
                <Shield className="size-3.5" /> Escudo Colectivo 80/20
              </span>
              <p className="text-xs text-muted-foreground leading-snug">
                Si el 80% de tu tribu cumple sus metas, todos ganan un escudo.
              </p>
            </div>
            <Button
              size="xs"
              className="h-7 gap-1 text-xs font-semibold shrink-0 cursor-pointer"
              onClick={() => setModalCrearTribu(true)}
            >
              <Plus className="size-3.5" />
              <span>Crear</span>
            </Button>
          </div>

          {/* Listado de Tribus */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <p className="font-heading text-sm font-bold text-foreground">
                Tribus en tu red ({state.tribus.length})
              </p>
              <span className="text-xs text-muted-foreground">
                {state.tribus.filter((t) => t.esMiembro).length} unidas
              </span>
            </div>

            {state.tribus.map((tribu) => (
              <Card
                key={tribu.id}
                className={`transition-all ${
                  tribu.esMiembro
                    ? "border-primary/40 bg-card shadow-xs"
                    : "border-border/80 hover:border-primary/30 bg-card"
                }`}
              >
                <CardContent className="flex flex-col gap-3 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-heading text-sm font-bold">
                          {tribu.nombre}
                        </h3>
                        {tribu.esAdmin && (
                          <Badge className="bg-amber-500 text-white text-[10px]">
                            Capitán
                          </Badge>
                        )}
                        {tribu.esMiembro && !tribu.esAdmin && (
                          <Badge variant="secondary" className="text-[10px]">
                            Miembro
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {tribu.universidad}
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 shrink-0">
                      <Flame className="size-3.5 fill-amber-500" /> Sem {tribu.rachaSemanas}
                    </span>
                  </div>

                  {/* Desafío y Cumplimiento Colectivo (integrado sin caja gris) */}
                  <div className="flex flex-col gap-1.5 py-0.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-muted-foreground">
                        {tribu.metaSemanal}
                      </span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        {tribu.cumplimiento}% logrado
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                        style={{ width: `${tribu.cumplimiento}%` }}
                      />
                    </div>
                  </div>

                  {/* Acciones */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-muted-foreground">
                      {tribu.miembros} miembros
                    </span>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 gap-1 text-xs cursor-pointer"
                        onClick={() => setTribuDetalle(tribu)}
                      >
                        <MessageCircle className="size-3.5" />
                        <span>Ver Desafío</span>
                      </Button>

                      {!tribu.esMiembro && (
                        <Button
                          size="sm"
                          className="h-8 text-xs cursor-pointer"
                          onClick={() => handleToggleMembresiaTribu(tribu)}
                        >
                          Unirme
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ============================================================ */}
        {/* PESTAÑA 3: SALIDAS PROTEGIDAS (Cobertura por Tribu) */}
        {/* ============================================================ */}
        <TabsContent value="salidas" className="mt-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5 rounded-2xl border border-primary/20 bg-linear-to-br from-primary/10 via-card to-card p-4 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-primary/20 text-primary">
                <ShieldCheck className="size-4" />
              </span>
              <div>
                <h3 className="font-heading text-sm font-bold">
                  Salidas Protegidas
                </h3>
                <p className="text-[11px] text-muted-foreground">
                  El seguro cubre solo a los que asisten, sin importar el tamaño del grupo.
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed pt-0.5">
              Elige la salida deportiva de tu grupo y asegura a los participantes por 24h o 48h vía Yape.
            </p>
          </div>

          {/* Selector de Tribu Anfitriona */}
          <div className="flex flex-col gap-1.5 rounded-xl border border-border bg-card p-3 shadow-xs">
            <Label className="text-xs font-semibold text-foreground">
              Tribu anfitriona de la salida:
            </Label>
            <NativeSelect
              className="w-full"
              value={tribuSalidaSeleccionadaId}
              onChange={(e) => setTribuSalidaSeleccionadaId(e.target.value)}
            >
              {state.tribus.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.nombre} ({t.miembros} miembros • {t.universidad})
                </option>
              ))}
            </NativeSelect>
          </div>

          {/* Selector de Actividad */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-0.5">
              Tipo de salida o evento deportivo
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {ACTIVIDADES_SALIDAS.map((act) => {
                const esActiva = actividadSeleccionada.id === act.id
                const IconoComp = act.icono
                return (
                  <button
                    key={act.id}
                    type="button"
                    onClick={() => setActividadSeleccionada(act)}
                    className={`flex flex-col items-start gap-1 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      esActiva
                        ? "border-primary bg-primary/10 ring-1 ring-primary shadow-xs"
                        : "border-border/80 bg-card hover:border-primary/40"
                    }`}
                  >
                    <IconoComp className={`size-5 ${esActiva ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="font-heading text-xs font-bold leading-tight line-clamp-1">
                      {act.nombre}
                    </span>
                    <span className="text-[11px] font-semibold text-primary">
                      S/ {act.costoPersona.toFixed(2)} • {act.duracion}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Card Destacada de la Actividad Seleccionada */}
          <Card className="border-primary/40 bg-linear-to-br from-card via-card to-primary/5">
            <CardContent className="flex flex-col gap-3.5 p-4">
              <div className="flex items-center justify-between">
                <Badge className="bg-primary text-primary-foreground text-[10px]">
                  {actividadSeleccionada.duracion} de Cobertura
                </Badge>
                <span className="text-sm font-bold text-primary">
                  S/ {actividadSeleccionada.costoPersona.toFixed(2)} por persona
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-base font-bold">
                  {actividadSeleccionada.nombre}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Organizado por <strong className="text-foreground">{tribuSalidaActual?.nombre}</strong>. {actividadSeleccionada.descripcion}
                </p>
              </div>

              <div className="flex flex-col gap-1.5 rounded-xl bg-muted/40 p-3 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-600 font-semibold dark:text-emerald-400">
                  <CheckCircle2 className="size-4 shrink-0" />
                  <span>Cobertura grupal FIBO hasta S/ 15,000</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {actividadSeleccionada.cobertura}
                </p>
              </div>

              <Button
                className="w-full h-9 gap-1.5 text-xs font-semibold cursor-pointer"
                onClick={() =>
                  router.push(
                    `/salida?act=${actividadSeleccionada.id}&t=${tribuSalidaSeleccionadaId}`
                  )
                }
              >
                <ShieldCheck className="size-4" />
                <span>Configurar salida ({actividadSeleccionada.nombre})</span>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Feed Social en Vivo */}
      <div className="flex flex-col gap-2 rounded-2xl border border-border/70 bg-card p-4 shadow-xs">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5 font-semibold text-foreground">
            <Sparkles className="size-3.5 text-amber-500" />
            <span>En vivo en la comunidad</span>
          </span>
          <span className="text-[10px]">Actualizado ahora</span>
        </div>

        <div className="flex flex-col gap-2 pt-1">
          {FEED_ACTIVIDAD.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between gap-2 border-b border-border/40 pb-2 last:border-0 last:pb-0 text-xs"
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

      {/* ============================================================ */}
      {/* MODAL: DETALLE DE TRIBU Y REGLA DE ESCUDO */}
      {/* ============================================================ */}
      <Dialog
        open={tribuDetalle !== null}
        onOpenChange={(open) => !open && setTribuDetalle(null)}
      >
        <DialogContent className="max-w-xs sm:max-w-sm">
          <DialogHeader className="text-left">
            <DialogTitle className="font-heading text-base flex items-center gap-2">
              <span>{tribuDetalle?.nombre}</span>
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              {tribuDetalle?.universidad} • {tribuDetalle?.miembros} miembros activos
            </DialogDescription>
          </DialogHeader>

          {tribuDetalle && (
            <div className="flex flex-col gap-3 py-2 text-xs">
              <div className="flex items-center justify-between rounded-xl bg-amber-500/10 p-3 text-amber-700 dark:text-amber-300">
                <div className="flex items-center gap-2">
                  <Flame className="size-4 fill-amber-500 text-amber-500" />
                  <span className="font-semibold">Racha de la Tribu</span>
                </div>
                <span className="font-bold text-sm">
                  {tribuDetalle.rachaSemanas} semanas activas
                </span>
              </div>

              {/* Barra de progreso colectivo */}
              <div className="flex flex-col gap-1.5 rounded-xl border border-border p-3">
                <div className="flex justify-between text-[11px]">
                  <span className="font-medium text-muted-foreground">Meta de la semana</span>
                  <span className="font-bold text-foreground">{tribuDetalle.cumplimiento}% logrado</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-input/60">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                    style={{ width: `${tribuDetalle.cumplimiento}%` }}
                  />
                </div>
                <p className="text-[11px] text-muted-foreground pt-0.5">
                  Objetivo: <strong>{tribuDetalle.metaSemanal}</strong>
                </p>
              </div>

              {/* Explicación del Escudo */}
              <div className="flex items-start gap-2 rounded-xl bg-muted/40 p-2.5 text-[11px] text-muted-foreground leading-relaxed">
                <Shield className="size-4 text-primary shrink-0 mt-0.5" />
                <p>
                  Si la tribu alcanza el 80% al domingo, todos los integrantes ganan 1 <strong>Escudo de Racha colectivo</strong> para cubrir días libres.
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <Button
                  className="w-full gap-1.5 text-xs font-semibold cursor-pointer"
                  onClick={() => compartirTribuWhatsApp(tribuDetalle)}
                >
                  <Share2 className="size-3.5" />
                  <span>Invitar amigos por WhatsApp</span>
                </Button>

                <Button
                  variant={tribuDetalle.esMiembro ? "outline" : "secondary"}
                  className="w-full text-xs cursor-pointer"
                  onClick={() => handleToggleMembresiaTribu(tribuDetalle)}
                >
                  <HeartHandshake className="size-3.5" />
                  <span>{tribuDetalle.esMiembro ? "Abandonar Tribu" : "Unirme a esta Tribu"}</span>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* ============================================================ */}
      {/* MODAL 3: CREAR NUEVA TRIBU (Con Selects) */}
      {/* ============================================================ */}
      <Dialog open={modalCrearTribu} onOpenChange={setModalCrearTribu}>
        <DialogContent className="max-w-xs sm:max-w-sm">
          <DialogHeader className="text-left">
            <DialogTitle className="font-heading text-base">
              Fundar una Nueva Tribu
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Crea un espacio para ti y tus compañeros de deporte, trabajo o salidas. Serás el Capitán de la tribu.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleCrearTribu} className="flex flex-col gap-3 py-2 text-xs">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="tribu-nombre" className="text-xs">
                Nombre de la Tribu
              </Label>
              <Input
                id="tribu-nombre"
                placeholder="Ej. Pedaleros de Barranco"
                value={nuevoNombreTribu}
                onChange={(e) => setNuevoNombreTribu(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="tribu-ambito" className="text-xs">
                Ámbito o Tipo de Grupo
              </Label>
              <NativeSelect
                id="tribu-ambito"
                className="w-full"
                value={nuevoAmbito}
                onChange={(e) => setNuevoAmbito(e.target.value)}
              >
                {AMBITOS_TRIBU_OPCIONES.map((opcion) => (
                  <option key={opcion} value={opcion}>
                    {opcion}
                  </option>
                ))}
              </NativeSelect>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="tribu-meta" className="text-xs">
                Meta Colectiva Semanal
              </Label>
              <NativeSelect
                id="tribu-meta"
                className="w-full"
                value={nuevaMetaSemanal}
                onChange={(e) => setNuevaMetaSemanal(e.target.value)}
              >
                {METAS_COLECTIVAS_OPCIONES.map((meta) => (
                  <option key={meta} value={meta}>
                    {meta}
                  </option>
                ))}
              </NativeSelect>
            </div>

            <DialogFooter className="flex flex-col gap-2 pt-2">
              <Button type="submit" className="w-full text-xs font-semibold cursor-pointer">
                Fundar Tribu y Activar Escudo
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-full text-xs cursor-pointer"
                onClick={() => setModalCrearTribu(false)}
              >
                Cancelar
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
