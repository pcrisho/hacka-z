"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import confetti from "canvas-confetti"
import {
  Activity,
  ArrowLeft,
  Bike,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Footprints,
  HeartHandshake,
  Mountain,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { NativeSelect } from "@/components/ui/native-select"
import { useReserva } from "@/hooks/use-reserva"

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

export function SalidaView() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { state } = useReserva()

  const actParam = searchParams.get("act") || "pichanga"
  const tParam = searchParams.get("t") || state.tribus[0]?.id || "ucsur-active"
  const pParam = parseInt(searchParams.get("p") || "12", 10)

  const [actividadId, setActividadId] = useState(actParam)
  const [tribuId, setTribuId] = useState(tParam)
  const [participantes, setParticipantes] = useState(Number.isNaN(pParam) ? 12 : pParam)
  const [linkCopiado, setLinkCopiado] = useState(false)
  const [emitidoExito, setEmitidoExito] = useState(false)
  const [codigoPoliza] = useState(() => `PAC-TRIBU-${Math.floor(1000 + Math.random() * 9000)}`)

  const actividadActual =
    ACTIVIDADES_SALIDAS.find((a) => a.id === actividadId) || ACTIVIDADES_SALIDAS[0]
  const tribuActual =
    state.tribus.find((t) => t.id === tribuId) || state.tribus[0] || {
      id: "tribu-default",
      nombre: "Tribu Amigos FIBO",
      miembros: 50,
      universidad: "Amigos & Deporte",
    }

  const costoTotal = (participantes * actividadActual.costoPersona).toFixed(2)

  function dispararConfetti() {
    confetti({
      particleCount: 70,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#0099CC", "#D4A24C", "#01A355"],
    })
  }

  function copiarTexto(texto: string) {
    navigator.clipboard.writeText(texto)
    setLinkCopiado(true)
    setTimeout(() => setLinkCopiado(false), 2000)
  }

  function emitirPoliza() {
    dispararConfetti()
    setEmitidoExito(true)
  }

  const mensajeWhatsApp = `¡Gente de ${tribuActual.nombre}! Activé la cobertura grupal de FIBO (con respaldo de Pacífico Seguros) para los ${participantes} que vamos a ${actividadActual.nombre}. Cada uno yapea sus S/ ${actividadActual.costoPersona.toFixed(
    2
  )} aquí: https://fibo.pe/salida?t=${tribuActual.id}&act=${actividadActual.id}`

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pb-20 max-w-lg mx-auto w-full animate-in fade-in-50 duration-200">
      {/* Header Superior con Back Button */}
      <div className="flex items-center justify-between pt-1">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 gap-1.5 px-2 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
          onClick={() => router.push("/comunidad")}
        >
          <ArrowLeft className="size-4" />
          <span>Comunidad</span>
        </Button>

        <Badge variant="outline" className="text-[10px] text-primary border-primary/30 gap-1">
          <ShieldCheck className="size-3" />
          <span>FIBO × Pacífico Seguros</span>
        </Badge>
      </div>

      {/* Título de la Vista */}
      <div className="flex flex-col gap-1">
        <h1 className="font-heading text-xl font-bold tracking-tight">
          Configurar Salida Protegida
        </h1>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Protección médica express para los miembros de tu tribu que asisten a la salida. Sin deducible ni trámites presenciales.
        </p>
      </div>

      {emitidoExito ? (
        /* ============================================================ */
        /* ESTADO DE ÉXITO: VOUCHER DE PÓLIZA GRUPAL */
        /* ============================================================ */
        <div className="flex flex-col gap-4 animate-in zoom-in-95 duration-200">
          <Card className="border-emerald-500/40 bg-linear-to-b from-card via-card to-emerald-500/5 shadow-md overflow-hidden">
            <CardContent className="flex flex-col gap-4 p-5">
              <div className="flex items-center justify-between border-b border-border/50 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-sm font-bold text-foreground">
                      Póliza Colectiva Activada
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      Código de cobertura FIBO: <strong className="text-foreground">{codigoPoliza}</strong>
                    </span>
                  </div>
                </div>
                <Badge className="bg-emerald-600 text-white text-[10px]">
                  Vigente
                </Badge>
              </div>

              {/* Detalle de la Cobertura */}
              <div className="flex flex-col gap-2 rounded-2xl bg-muted/40 p-3.5 text-xs">
                <div className="flex justify-between text-muted-foreground">
                  <span>Tribu Anfitriona:</span>
                  <span className="font-semibold text-foreground">{tribuActual.nombre}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Actividad Asegurada:</span>
                  <span className="font-semibold text-foreground">{actividadActual.nombre}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Nómina Asegurada:</span>
                  <span className="font-semibold text-foreground">{participantes} integrantes</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Vigencia Médica:</span>
                  <span className="font-semibold text-foreground">Próximas {actividadActual.duracion}</span>
                </div>
                <div className="flex justify-between text-muted-foreground pt-1.5 border-t border-border/40 font-bold">
                  <span className="text-foreground">Respaldo Médico:</span>
                  <span className="text-emerald-600 dark:text-emerald-400">Hasta S/ 15,000 por persona</span>
                </div>
              </div>

              {/* Mensaje de WhatsApp para el grupo */}
              <div className="flex flex-col gap-2 pt-1">
                <Label className="text-xs font-semibold text-foreground">
                  Comparte el comprobante con la tribu:
                </Label>
                <Button
                  className="w-full gap-2 text-xs font-semibold cursor-pointer"
                  onClick={() => {
                    const texto = encodeURIComponent(
                      `¡Confirmado! Cobertura grupal FIBO activada (${codigoPoliza}) para los ${participantes} que vamos a ${actividadActual.nombre}, con respaldo de Pacífico Seguros. Cobertura hasta S/ 15,000 durante las próximas ${actividadActual.duracion}. ¡A disfrutar con tranquilidad!`
                    )
                    window.open(`https://wa.me/?text=${texto}`, "_blank")
                  }}
                >
                  <Share2 className="size-4" />
                  <span>Enviar Comprobante al Chat de WhatsApp</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-xs cursor-pointer"
                  onClick={() => router.push("/comunidad")}
                >
                  Volver a Comunidad
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        /* ============================================================ */
        /* FLUJO DE CONFIGURACIÓN Y CHECKOUT */
        /* ============================================================ */
        <div className="flex flex-col gap-5">
          {/* Bloque 1: Tribu Anfitriona */}
          <div className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4 shadow-xs">
            <div className="flex items-center gap-2">
              <Users className="size-4 text-primary" />
              <Label htmlFor="tribu-select" className="font-heading text-xs font-bold text-foreground">
                1. Tribu Anfitriona
              </Label>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Selecciona a qué tribu pertenece la salida. Como Capitán u organizador, tú convocas a los miembros que asisten.
            </p>
            <NativeSelect
              id="tribu-select"
              className="w-full mt-1"
              value={tribuId}
              onChange={(e) => {
                setTribuId(e.target.value)
                const seleccionada = state.tribus.find((t) => t.id === e.target.value)
                if (seleccionada && participantes > seleccionada.miembros) {
                  setParticipantes(seleccionada.miembros)
                }
              }}
            >
              {state.tribus.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.nombre} ({t.miembros} miembros • {t.universidad})
                </option>
              ))}
            </NativeSelect>
          </div>

          {/* Bloque 2: Actividad Deportiva */}
          <div className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4 shadow-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" />
              <Label className="font-heading text-xs font-bold text-foreground">
                2. Tipo de Salida o Evento
              </Label>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
              {ACTIVIDADES_SALIDAS.map((act) => {
                const esActiva = actividadId === act.id
                const IconoComp = act.icono
                return (
                  <button
                    key={act.id}
                    type="button"
                    onClick={() => setActividadId(act.id)}
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

            {/* Detalle de Cobertura de la Actividad Seleccionada */}
            <div className="flex flex-col gap-1 rounded-xl bg-muted/40 p-3 mt-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">{actividadActual.nombre}</span>
                <span className="text-[10px] text-primary font-bold">Vigencia: {actividadActual.duracion}</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed pt-0.5">
                {actividadActual.cobertura}
              </p>
            </div>
          </div>

          {/* Bloque 3: Convocatoria de Asistentes */}
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="size-4 text-primary" />
                <Label className="font-heading text-xs font-bold text-foreground">
                  3. Miembros que Asisten
                </Label>
              </div>
              <Badge variant="secondary" className="text-[10px]">
                {participantes} de {tribuActual.miembros} en la tribu
              </Badge>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              La regla de proporcionalidad de FIBO: la tribu puede tener 100 personas, pero el seguro cubre con nombre y apellido únicamente a los {participantes} que van a la actividad.
            </p>

            {/* Stepper Ergonómico */}
            <div className="flex items-center justify-between rounded-xl bg-muted/50 p-3">
              <span className="font-medium text-xs text-foreground">Cantidad de asistentes:</span>
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="size-8 p-0 text-base font-bold cursor-pointer"
                  onClick={() => setParticipantes((p) => Math.max(2, p - 1))}
                >
                  -
                </Button>
                <span className="w-8 text-center font-bold font-heading text-lg text-foreground">
                  {participantes}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  className="size-8 p-0 text-base font-bold cursor-pointer"
                  onClick={() => setParticipantes((p) => Math.min(tribuActual.miembros, p + 1))}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Nómina Nominal de Asistentes */}
            <div className="flex flex-col gap-1.5 rounded-xl bg-muted/30 p-3 text-xs">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                Nómina de Cobertura Express ({participantes} personas):
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="inline-flex items-center rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                  Tú (Capitán)
                </span>
                <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-foreground">
                  Camila R.
                </span>
                <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-foreground">
                  Mateo V.
                </span>
                <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-foreground">
                  Diego S.
                </span>
                <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-foreground">
                  Valeria M.
                </span>
                <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-foreground">
                  Franco C.
                </span>
                {participantes > 6 && (
                  <span className="inline-flex items-center rounded-full bg-muted/60 px-2.5 py-0.5 text-[10px] text-muted-foreground font-medium">
                    +{participantes - 6} compañeros de la tribu
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Bloque 4: Desglose Financiero & Cobro por Yape */}
          <div className="flex flex-col gap-3 rounded-2xl border border-primary/30 bg-linear-to-br from-card via-card to-primary/5 p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="font-heading text-xs font-bold text-foreground">
                4. Aporte y Respaldo Colectivo
              </span>
              <Badge className="bg-primary text-primary-foreground text-[10px]">
                Sin Deducible
              </Badge>
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-border/80 bg-background/60 p-3 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Costo individual ({actividadActual.duracion})</span>
                <span className="font-semibold text-foreground">S/ {actividadActual.costoPersona.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Póliza colectiva ({participantes} personas)</span>
                <span className="font-semibold text-foreground">S/ {costoTotal}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Tu aporte de hoy</span>
                <span className="font-semibold text-primary">S/ {actividadActual.costoPersona.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-foreground pt-1.5 border-t border-border mt-0.5">
                <span>Total a recaudar del grupo</span>
                <span className="font-heading text-sm text-primary">S/ {costoTotal}</span>
              </div>
            </div>

            {/* Caja de Enlace Copiable para WhatsApp */}
            <div className="flex flex-col gap-1.5 pt-1">
              <Label className="text-[11px] text-muted-foreground">
                Link de cobro para el chat de WhatsApp de la tribu:
              </Label>
              <div className="flex items-center gap-2 rounded-xl bg-muted/50 p-2 text-xs">
                <span className="truncate text-muted-foreground text-[11px]">
                  fibo.pe/salida?t={tribuActual.id}&act={actividadActual.id}&p={participantes}
                </span>
                <Button
                  size="xs"
                  variant="secondary"
                  className="h-7 shrink-0 gap-1 text-[11px] cursor-pointer"
                  onClick={() => copiarTexto(mensajeWhatsApp)}
                >
                  {linkCopiado ? <Check className="size-3 text-emerald-600" /> : <Copy className="size-3" />}
                  <span>{linkCopiado ? "Copiado" : "Copiar"}</span>
                </Button>
              </div>
            </div>

            {/* Botón Principal de Acción */}
            <Button
              className="w-full h-10 gap-2 text-xs font-semibold mt-2 cursor-pointer shadow-sm"
              onClick={emitirPoliza}
            >
              <ShieldCheck className="size-4" />
              <span>Activar Cobertura para los {participantes} (S/ {costoTotal})</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
