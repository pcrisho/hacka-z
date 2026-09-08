"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import confetti from "canvas-confetti"
import {
  Activity,
  ArrowRight,
  Bell,
  Brain,
  Check,
  ChevronRight,
  Copy,
  Edit3,
  ExternalLink,
  Flame,
  HeartPulse,
  Lock,
  LogOut,
  PiggyBank,
  Share2,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Trophy,
  User,
  Users,
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
import { useReserva } from "@/hooks/use-reserva"
import { nivelParaPuntos } from "@/lib/reserva/context"
import { cn } from "@/lib/utils"

interface InsigniaItem {
  id: string
  titulo: string
  descripcion: string
  fecha: string
  categoria: "bolsillo" | "cuerpo" | "mente" | "comunidad"
  icon: typeof PiggyBank
  colorClass: string
  iconoColor: string
}

const INSIGNIAS: InsigniaItem[] = [
  {
    id: "ahorro",
    titulo: "Ahorro Hormiga",
    descripcion: "Más de S/ 40 acumulados en tu fondo de salud.",
    fecha: "Obtenida el 3 Set.",
    categoria: "bolsillo",
    icon: PiggyBank,
    colorClass: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    iconoColor: "text-amber-600 dark:text-amber-400",
  },
  {
    id: "runner",
    titulo: "Movimiento",
    descripcion: "5 días consecutivos registrando sesiones activas o deporte.",
    fecha: "Obtenida el 4 Set.",
    categoria: "cuerpo",
    icon: Activity,
    colorClass: "border-primary/30 bg-primary/10 text-primary",
    iconoColor: "text-primary",
  },
  {
    id: "mente",
    titulo: "Mente Serena",
    descripcion: "Pausas mindful y chequeos preventivos al día.",
    fecha: "Obtenida el 5 Set.",
    categoria: "mente",
    icon: Brain,
    colorClass: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    iconoColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "tribu",
    titulo: "Capitán Tribu",
    descripcion: "Participaste y aseguraste una salida deportiva grupal.",
    fecha: "Obtenida el 6 Set.",
    categoria: "comunidad",
    icon: Users,
    colorClass: "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    iconoColor: "text-cyan-600 dark:text-cyan-400",
  },
]

export function PerfilView() {
  const router = useRouter()
  const { state, dispatch } = useReserva()

  const [modalInsignia, setModalInsignia] = useState<InsigniaItem | null>(null)
  const [modalEditar, setModalEditar] = useState(false)
  const [modalInvitar, setModalInvitar] = useState(false)
  const [linkCopiado, setLinkCopiado] = useState(false)

  const nombreGuardado = state.sesion?.perfil
    ? `${state.sesion.perfil.nombres} ${state.sesion.perfil.apellidos}`
    : "Camila Rodríguez"
  const [nombre, setNombre] = useState(nombreGuardado)
  const [bio, setBio] = useState("Estudiante & deportista activa. Hábitos constantes y salidas protegidas.")

  const nivelActual = nivelParaPuntos(state.reservaPuntos)
  const puntosActuales = state.reservaPuntos

  // Tope real de indemnización por hospitalización de Seguro Salud Yape (Pacífico): S/ 500.
  const coberturaSoles = useMemo(() => {
    if (state.seguro.activo) return 500
    if (nivelActual === "alto") return 500
    if (nivelActual === "medio") return 350
    if (nivelActual === "bajo") return 250
    return Math.max(150, puntosActuales * 80 + 150)
  }, [state.seguro.activo, nivelActual, puntosActuales])

  const tribuActiva = useMemo(() => {
    return state.tribus.find((t) => t.esMiembro) || state.tribus[0]
  }, [state.tribus])

  function copiarLink() {
    setLinkCopiado(true)
    setTimeout(() => setLinkCopiado(false), 2000)
  }

  function dispararConfetti() {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.65 },
      colors: ["#0099CC", "#D4A24C", "#01A355"],
    })
  }

  return (
    <div className="flex flex-1 flex-col gap-5 p-4 pb-14">
      {/* Header de Identidad Minimalista (Sin foto mock) */}
      <div className="flex flex-col items-center text-center pt-1 pb-1">
        {/* Avatar Vectorial con Aro de Nivel */}
        <div className="relative mb-2.5">
          <div className="flex size-18 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/30 shadow-xs">
            <User className="size-8 text-primary stroke-[1.8]" />
          </div>
          <span
            className="absolute -bottom-0.5 -right-0.5 flex size-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs border-2 border-background"
            title="Cuenta activa con FIBO"
          >
            <Check className="size-2.5 stroke-[3]" />
          </span>
        </div>

        {/* Nombre, Alias y Nivel en línea sobria */}
        <div className="flex flex-col items-center gap-0.5">
          <h1 className="font-heading text-lg font-bold tracking-tight text-foreground">
            {nombre}
          </h1>

          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
            <span>@{state.sesion?.perfil?.alias ? state.sesion.perfil.alias.toLowerCase() : "camila.r"}</span>
            <span className="opacity-40">•</span>
            <span className="font-semibold text-primary">
              {nivelActual
                ? nivelActual === "bajo"
                  ? "Nivel 1"
                  : nivelActual === "medio"
                    ? "Nivel 2"
                    : "Nivel 3"
                : "Nivel 1"}
            </span>
          </p>

          <p className="max-w-xs text-xs text-muted-foreground leading-relaxed pt-0.5">
            {bio}
          </p>
        </div>

        {/* Botón sutil de editar bio */}
        <button
          type="button"
          onClick={() => setModalEditar(true)}
          className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:underline cursor-pointer"
        >
          <Edit3 className="size-3" />
          <span>Editar presentación</span>
        </button>
      </div>

      {/* Tira de Métricas Clave (Estilo Fitness / Running) */}
      <div className="grid grid-cols-4 gap-2 rounded-2xl border border-border/80 bg-card p-3 shadow-xs text-center">
        <div className="flex flex-col items-center">
          <span className="flex items-center gap-0.5 font-heading text-sm font-bold text-amber-600 dark:text-amber-400">
            <Flame className="size-3.5 fill-amber-500 text-amber-500" /> 5d
          </span>
          <span className="text-[10px] text-muted-foreground">Racha</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="flex items-center gap-0.5 font-heading text-sm font-bold text-primary">
            <Shield className="size-3.5" /> {puntosActuales * 15 + 45}
          </span>
          <span className="text-[10px] text-muted-foreground">Reserva</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="flex items-center gap-0.5 font-heading text-sm font-bold text-foreground">
            <Activity className="size-3.5 text-emerald-500" /> 4.5h
          </span>
          <span className="text-[10px] text-muted-foreground">Movimiento</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="flex items-center gap-0.5 font-heading text-sm font-bold text-foreground">
            <ShieldCheck className="size-3.5 text-primary" /> S/ 15k
          </span>
          <span className="text-[10px] text-muted-foreground">Respaldo</span>
        </div>
      </div>

      {/* Vitrina de Insignias (Medallero Apple Style) */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <Trophy className="size-3.5 text-amber-500" />
            <h2 className="font-heading text-sm font-bold text-foreground">Insignias ganadas</h2>
          </div>
          <span className="text-xs text-muted-foreground">4 de 8</span>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x py-1 px-1 scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden">
          {INSIGNIAS.map((insignia) => {
            const IconComponent = insignia.icon
            return (
              <button
                key={insignia.id}
                type="button"
                onClick={() => setModalInsignia(insignia)}
                className="flex flex-col items-center gap-1.5 shrink-0 snap-start cursor-pointer group focus:outline-none"
              >
                <div
                  className={cn(
                    "flex size-14 items-center justify-center rounded-2xl border transition-all group-active:scale-95 group-hover:scale-105 shadow-2xs",
                    insignia.colorClass
                  )}
                >
                  <IconComponent className="size-6" />
                </div>
                <span className="text-[11px] font-semibold text-foreground text-center max-w-[76px] leading-tight line-clamp-1">
                  {insignia.titulo}
                </span>
              </button>
            )
          })}
          <div className="w-1 shrink-0" />
        </div>
      </div>

      {/* Carrusel Deslizable 2: Beneficios & Cobertura Pacífico (Sin scrollbar visible) */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <Shield className="size-3.5 text-primary" />
            <h2 className="font-heading text-sm font-bold text-foreground">Beneficios activos</h2>
          </div>
          <span className="text-xs text-muted-foreground">Pacífico Seguros</span>
        </div>

        <div className="flex gap-3 overflow-x-auto snap-x pb-1 pt-0.5 scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden">
          {/* Card Dr. Online */}
          <div className="flex min-w-[205px] max-w-[215px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-border bg-card p-3 shadow-xs">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Stethoscope className="size-3.5" />
                </div>
                <span className="text-[10px] font-semibold text-primary">
                  7am-11:30pm
                </span>
              </div>
              <div>
                <p className="text-xs font-bold leading-tight">Dr. Online</p>
                <p className="text-[11px] text-muted-foreground leading-snug pt-0.5 line-clamp-2">
                  Teleconsulta médica de baja complejidad, todos los días.
                </p>
              </div>
            </div>
            <Button
              size="xs"
              variant="outline"
              className="mt-2.5 w-full h-7 text-[11px] cursor-pointer"
              onClick={() => dispararConfetti()}
            >
              Consultar
            </Button>
          </div>

          {/* Card Quererte Sano */}
          <div className="flex min-w-[205px] max-w-[215px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-border bg-card p-3 shadow-xs">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <HeartPulse className="size-3.5" />
                </div>
                <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  Gratis
                </span>
              </div>
              <div>
                <p className="text-xs font-bold leading-tight">Quererte Sano</p>
                <p className="text-[11px] text-muted-foreground leading-snug pt-0.5 line-clamp-2">
                  Portal de contenido y bienestar: artículos, calculadoras y guías de salud.
                </p>
              </div>
            </div>
            <Button
              size="xs"
              variant="outline"
              className="mt-2.5 w-full h-7 text-[11px] cursor-pointer"
              onClick={() => dispararConfetti()}
            >
              Ver aliados
            </Button>
          </div>

          {/* Card Microseguro Pacífico */}
          <div className="flex min-w-[205px] max-w-[215px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-primary/30 bg-primary/5 p-3 shadow-xs">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <div className="flex size-7 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <Zap className="size-3.5" />
                </div>
                <span className="text-[10px] font-semibold text-primary">
                  {state.seguro.activo ? "Póliza Activa" : "S/ 9.90/mes"}
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground leading-tight">Microseguro</p>
                <p className="text-[11px] text-muted-foreground leading-snug pt-0.5 line-clamp-2">
                  Hasta S/ 500 de indemnización por hospitalización.
                </p>
              </div>
            </div>
            <Button
              size="xs"
              className="mt-2.5 w-full h-7 text-[11px] cursor-pointer"
              onClick={() => router.push("/recompensa")}
            >
              {state.seguro.activo ? "Ver póliza" : "Activar"}
            </Button>
          </div>
          <div className="w-1 shrink-0" />
        </div>
      </div>

      {/* Tarjeta Compacta: Tribu & Vínculo Comunitario */}
      {tribuActiva && (
        <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-3.5 shadow-xs">
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Users className="size-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-foreground">
                {tribuActiva.nombre}
              </span>
              <span className="text-[10px] text-muted-foreground">
                {tribuActiva.miembros} miembros • {tribuActiva.cumplimiento}% meta colectiva
              </span>
            </div>
          </div>
          <Button
            size="xs"
            variant="outline"
            className="h-7 text-[11px] cursor-pointer gap-1"
            onClick={() => setModalInvitar(true)}
          >
            <Share2 className="size-3" />
            <span>Invitar</span>
          </Button>
        </div>
      )}

      {/* Menú de Gestión de Cuenta y Coberturas (Estilo iOS) */}
      <div className="flex flex-col divide-y divide-border/60 rounded-2xl border border-border bg-card shadow-xs text-xs">
        <button
          type="button"
          onClick={() => dispararConfetti()}
          className="flex items-center justify-between p-3 hover:bg-muted/40 transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <Bell className="size-4 text-foreground" />
            <span className="font-medium text-foreground">Recordatorios y avisos diarios</span>
          </div>
          <ChevronRight className="size-4 text-muted-foreground" />
        </button>

        <button
          type="button"
          onClick={() => router.push("/seguro")}
          className="flex items-center justify-between p-3 hover:bg-muted/40 transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <ShieldCheck className="size-4 text-foreground" />
            <span className="font-medium text-foreground">Póliza y Cobertura de Salud</span>
          </div>
          <ChevronRight className="size-4 text-muted-foreground" />
        </button>

        <button
          type="button"
          onClick={() => router.push("/momento-de-verdad")}
          className="flex items-center justify-between p-3 hover:bg-muted/40 transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <Sparkles className="size-4 text-primary" />
            <span className="font-semibold text-primary">Asistencia médica y urgencias (FIBO SOS)</span>
          </div>
          <ChevronRight className="size-4 text-primary" />
        </button>
      </div>

      {/* Botón de Cerrar Sesión Discreto */}
      <Button
        variant="ghost"
        className="w-full gap-2 text-xs font-medium text-destructive hover:bg-destructive/10 hover:text-destructive cursor-pointer"
        onClick={() => {
          dispatch({ type: "cerrar-sesion" })
          router.replace("/ingresar")
        }}
      >
        <LogOut className="size-3.5" />
        <span>Cerrar sesión</span>
      </Button>

      {/* Modal: Detalle de Insignia */}
      <Dialog
        open={modalInsignia !== null}
        onOpenChange={(open) => !open && setModalInsignia(null)}
      >
        <DialogContent className="max-w-xs sm:max-w-sm">
          <DialogHeader className="items-center text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-amber-500/15 text-amber-500 mb-1">
              <Trophy className="size-7" />
            </div>
            <DialogTitle className="font-heading text-base">
              {modalInsignia?.titulo}
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              {modalInsignia?.fecha}
            </DialogDescription>
          </DialogHeader>

          <p className="text-xs text-center text-foreground/80 leading-relaxed py-2">
            {modalInsignia?.descripcion}
          </p>

          <DialogFooter>
            <Button
              className="w-full text-xs font-semibold cursor-pointer"
              onClick={() => {
                dispararConfetti()
                setModalInsignia(null)
              }}
            >
              Compartir logro con mi Tribu
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal: Editar Bio */}
      <Dialog open={modalEditar} onOpenChange={setModalEditar}>
        <DialogContent className="max-w-xs sm:max-w-sm">
          <DialogHeader className="text-left">
            <DialogTitle className="font-heading text-base">
              Editar Perfil
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Personaliza tu presentación ante tu Tribu y la comunidad.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3 py-2 text-xs">
            <div className="flex flex-col gap-1">
              <label className="font-medium text-muted-foreground">Nombre visible</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="h-9 w-full rounded-xl border border-border bg-input/40 px-3 text-xs outline-none focus:border-primary"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium text-muted-foreground">Tu lema o bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                className="w-full rounded-xl border border-border bg-input/40 p-2.5 text-xs outline-none focus:border-primary resize-none"
              />
            </div>
          </div>

          <DialogFooter className="flex flex-col gap-2">
            <Button
              className="w-full text-xs font-semibold cursor-pointer"
              onClick={() => setModalEditar(false)}
            >
              Guardar cambios
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal: Invitar Amigos */}
      <Dialog open={modalInvitar} onOpenChange={setModalInvitar}>
        <DialogContent className="max-w-xs sm:max-w-sm">
          <DialogHeader className="text-left">
            <DialogTitle className="font-heading text-base">
              Invita a tu Tribu
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Comparte tu enlace para sumar amigos y proteger las próximas salidas colectivas.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3 py-2 text-xs">
            <div className="flex items-center justify-between rounded-xl bg-muted/50 p-2.5 text-[11px]">
              <span className="truncate text-muted-foreground">
                fibo.pe/invitar?u=camila-runners
              </span>
              <Button
                size="xs"
                variant="secondary"
                className="h-7 shrink-0 gap-1 text-[11px] cursor-pointer"
                onClick={copiarLink}
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
                setModalInvitar(false)
              }}
            >
              <Share2 className="size-3.5" />
              <span>Enviar por WhatsApp</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

