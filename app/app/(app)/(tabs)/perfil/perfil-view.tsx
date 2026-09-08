"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import confetti from "canvas-confetti"
import {
  ArrowRight,
  Award,
  Bell,
  Camera,
  Check,
  ChevronRight,
  Copy,
  Edit3,
  Flame,
  Globe,
  HeartPulse,
  Lock,
  LogOut,
  Share2,
  Shield,
  Sparkles,
  Stethoscope,
  Trophy,
  UserCheck,
  UserPlus,
  Users,
  Zap,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Switch } from "@/components/ui/switch"
import { useReserva } from "@/hooks/use-reserva"
import { cn } from "@/lib/utils"

const INSIGNIAS = [
  {
    id: "ahorro",
    titulo: "Ahorrador Hormiga 🪙",
    descripcion: "Apartaste un acumulado de más de S/ 50 a tu Reserva de emergencias.",
    fecha: "Obtenida el 3 Set.",
    colorClass: "bg-amber-500/10 text-amber-700 border-amber-500/30 dark:text-amber-400",
  },
  {
    id: "runner",
    titulo: "Runner Urbano 🏃",
    descripcion: "5 días consecutivos registrando caminata activa o deporte.",
    fecha: "Obtenida el 4 Set.",
    colorClass: "bg-primary/10 text-primary border-primary/30",
  },
  {
    id: "mente",
    titulo: "Mente Serena 🧘",
    descripcion: "8 pausas de respiración y chequeo preventivo con Dr. Online.",
    fecha: "Obtenida el 5 Set.",
    colorClass: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30 dark:text-emerald-400",
  },
  {
    id: "pichanga",
    titulo: "Capitán Pichanga ⚽",
    descripcion: "Activaste una póliza on-demand para un partido con amigos.",
    fecha: "Obtenida el 6 Set.",
    colorClass: "bg-cyan-500/10 text-cyan-700 border-cyan-500/30 dark:text-cyan-400",
  },
]

const AMIGOS_CONECTADOS = [
  { nombre: "Diego S.", iniciales: "DS", racha: "4d" },
  { nombre: "Mateo V.", iniciales: "MV", racha: "7d" },
  { nombre: "Valeria M.", iniciales: "VM", racha: "5d" },
  { nombre: "Sofía T.", iniciales: "ST", racha: "3d" },
]

export function PerfilView() {
  const router = useRouter()
  const { state, dispatch } = useReserva()

  const [perfilPublico, setPerfilPublico] = useState(true)
  const [modalInsignia, setModalInsignia] = useState<(typeof INSIGNIAS)[0] | null>(null)
  const [modalEditar, setModalEditar] = useState(false)
  const [modalInvitar, setModalInvitar] = useState(false)
  const [linkCopiado, setLinkCopiado] = useState(false)

  const nombreGuardado = state.sesion?.perfil
    ? `${state.sesion.perfil.nombres} ${state.sesion.perfil.apellidos}`
    : "Camila Rodríguez"
  const [nombre, setNombre] = useState(nombreGuardado)
  const [bio, setBio] = useState("UCSUR • Medicina & Runner. Cuidando mi salud mental y ahorrando para mi internado 🏃✨")

  function copiarLink() {
    setLinkCopiado(true)
    setTimeout(() => setLinkCopiado(false), 2000)
  }

  function dispararConfetti() {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.65 },
      colors: ["#0099CC", "#D4A24C", "#01A355"],
    })
  }

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pb-14">
      {/* Header Social con Portada y Avatar */}
      <div className="relative flex flex-col items-center">
        {/* Banner de portada con gradiente orgánico */}
        <div className="h-28 w-full rounded-2xl bg-linear-to-r from-primary/25 via-emerald-500/20 to-amber-500/20 border border-border/80 shadow-inner" />

        {/* Avatar superpuesto */}
        <div className="relative -mt-12 flex flex-col items-center">
          <div className="relative">
            <Avatar className="size-24 border-4 border-background shadow-md">
              <AvatarImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
                alt={nombre}
              />
              <AvatarFallback className="bg-primary/20 text-primary font-bold text-lg">
                {nombre.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span
              className="absolute bottom-1 right-1 flex size-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs border-2 border-background"
              title="Cuenta activa y verificada con Pacífico"
            >
              <Check className="size-3 stroke-[3]" />
            </span>
          </div>

          {/* Nombre y datos */}
          <div className="mt-2 flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5">
              <h1 className="font-heading text-lg font-bold">{nombre}</h1>
              <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary text-[10px] font-semibold">
                Nivel 2: Guardián 🛡️
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              @{state.sesion?.perfil?.alias ? state.sesion.perfil.alias.toLowerCase() : "camila.r"} • {state.sesion?.telefono || "987 123 987"}
            </p>
            <p className="mt-1.5 max-w-xs text-xs text-foreground/80 leading-relaxed">
              {bio}
            </p>
          </div>
        </div>

        {/* Acciones de perfil: Privacidad y Editar */}
        <div className="mt-3.5 flex w-full items-center justify-between rounded-xl bg-card border border-border/70 px-3.5 py-2 text-xs">
          <div className="flex items-center gap-2">
            <Switch
              checked={perfilPublico}
              onCheckedChange={setPerfilPublico}
              id="perfil-publico"
              size="sm"
            />
            <label htmlFor="perfil-publico" className="text-xs font-medium cursor-pointer">
              {perfilPublico ? "Perfil Público 🌐" : "Perfil Privado 🔒"}
            </label>
          </div>

          <Button
            size="xs"
            variant="ghost"
            className="h-7 gap-1 text-xs cursor-pointer text-primary"
            onClick={() => setModalEditar(true)}
          >
            <Edit3 className="size-3" />
            <span>Editar bio</span>
          </Button>
        </div>
      </div>

      {/* Tira de Estadísticas Sociales */}
      <div className="grid grid-cols-4 gap-2 rounded-2xl border border-border bg-card p-3 shadow-xs text-center">
        <div className="flex flex-col items-center">
          <span className="flex items-center gap-0.5 font-heading text-sm font-bold text-amber-600 dark:text-amber-400">
            <Flame className="size-3.5 fill-amber-500 text-amber-500" /> 5d
          </span>
          <span className="text-[10px] text-muted-foreground">Racha activa</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="flex items-center gap-0.5 font-heading text-sm font-bold text-primary">
            <Shield className="size-3.5" /> Nivel 2
          </span>
          <span className="text-[10px] text-muted-foreground">Reserva</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="flex items-center gap-0.5 font-heading text-sm font-bold text-foreground">
            <Users className="size-3.5" /> 2
          </span>
          <span className="text-[10px] text-muted-foreground">Tribus</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="flex items-center gap-0.5 font-heading text-sm font-bold text-foreground">
            <UserCheck className="size-3.5" /> 18
          </span>
          <span className="text-[10px] text-muted-foreground">Amigos</span>
        </div>
      </div>

      {/* Vitrina de Insignias de Bienestar (Trophy Case) */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between px-0.5">
          <div className="flex items-center gap-1.5">
            <Trophy className="size-4 text-amber-500" />
            <h2 className="font-heading text-sm font-semibold">Insignias Ganadas</h2>
            <Badge variant="secondary" className="text-[10px]">
              4 de 8
            </Badge>
          </div>
          <span className="text-[11px] text-muted-foreground">Toca para ver</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {INSIGNIAS.map((insignia) => (
            <button
              key={insignia.id}
              type="button"
              onClick={() => setModalInsignia(insignia)}
              className={cn(
                "flex flex-col items-start gap-1 rounded-2xl border p-3 text-left transition-all hover:scale-[1.02] active:scale-95 cursor-pointer",
                insignia.colorClass
              )}
            >
              <span className="text-xs font-bold leading-tight">{insignia.titulo}</span>
              <span className="text-[10px] opacity-80 leading-relaxed line-clamp-2">
                {insignia.descripcion}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mis Comunidades & Amistades */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between px-0.5">
          <h2 className="font-heading text-sm font-semibold">Comunidades & Amigos</h2>
          <Button
            size="xs"
            variant="ghost"
            className="h-7 gap-1 text-[11px] text-primary cursor-pointer"
            onClick={() => setModalInvitar(true)}
          >
            <UserPlus className="size-3" />
            <span>Invitar</span>
          </Button>
        </div>

        <Card>
          <CardContent className="flex flex-col gap-3 p-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-lg bg-primary/15 text-primary text-xs">
                  🏃
                </span>
                <div className="flex flex-col">
                  <p className="text-xs font-semibold">UCSUR Runners & Active</p>
                  <p className="text-[10px] text-muted-foreground">128 miembros • Tribu activa</p>
                </div>
              </div>
              <Button
                size="xs"
                variant="outline"
                className="h-7 text-[10px] cursor-pointer"
                onClick={() => router.push("/comunidad")}
              >
                Ver
              </Button>
            </div>

            <div className="border-t border-border/50 pt-2.5 flex items-center justify-between text-xs">
              <span className="text-[11px] text-muted-foreground">Amigos que entrenan contigo:</span>
              <div className="flex items-center -space-x-2">
                {AMIGOS_CONECTADOS.map((amigo, i) => (
                  <div
                    key={i}
                    className="flex size-6 items-center justify-center rounded-full border-2 border-background bg-muted font-bold text-[9px] text-foreground"
                    title={amigo.nombre}
                  >
                    {amigo.iniciales}
                  </div>
                ))}
                <div className="flex size-6 items-center justify-center rounded-full border-2 border-background bg-primary/10 text-[9px] font-bold text-primary">
                  +14
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Herramientas que me Cuidan (Pacífico Seguros) */}
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col px-0.5">
          <h2 className="font-heading text-sm font-semibold">Herramientas que me protegen 🛡️</h2>
          <p className="text-[11px] text-muted-foreground">
            Beneficios activos incluidos en tu membresía FIBO con Pacífico Seguros.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          {/* Dr. Online */}
          <Card className="border-border hover:border-primary/40 transition-colors">
            <CardContent className="flex items-center justify-between gap-3 p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Stethoscope className="size-5" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold">Dr. Online (Telemedicina 24/7)</p>
                  <p className="text-[11px] text-muted-foreground">
                    Consultas ilimitadas de medicina general, nutrición y psicología.
                  </p>
                </div>
              </div>
              <Button
                size="xs"
                className="h-7 shrink-0 text-[11px] cursor-pointer"
                onClick={() => dispararConfetti()}
              >
                Consultar
              </Button>
            </CardContent>
          </Card>

          {/* Quererte Sano */}
          <Card className="border-border hover:border-primary/40 transition-colors">
            <CardContent className="flex items-center justify-between gap-3 p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <HeartPulse className="size-5" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold">Quererte Sano</p>
                  <p className="text-[11px] text-muted-foreground">
                    Descuentos exclusivos en farmacias, gimnasios y ópticas.
                  </p>
                </div>
              </div>
              <Button
                size="xs"
                variant="secondary"
                className="h-7 shrink-0 text-[11px] cursor-pointer"
                onClick={() => dispararConfetti()}
              >
                Beneficios
              </Button>
            </CardContent>
          </Card>

          {/* Microseguro Activo */}
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="flex items-center justify-between gap-3 p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <Zap className="size-5" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-primary">Microseguro Pay-as-you-go</p>
                  <p className="text-[11px] text-muted-foreground">
                    S/ 9.90/mes • Pausable sin penalidad cuando lo desees.
                  </p>
                </div>
              </div>
              <Button
                size="xs"
                variant="outline"
                className="h-7 shrink-0 text-[11px] cursor-pointer"
                onClick={() => router.push("/seguro")}
              >
                Gestionar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Menú de Opciones y Cuenta */}
      <div className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-2 shadow-xs text-xs">
        <button
          type="button"
          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-muted/50 transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <Bell className="size-4 text-foreground" />
            <span className="font-medium text-foreground">Recordatorios de hábitos</span>
          </div>
          <ChevronRight className="size-4 text-muted-foreground" />
        </button>

        <button
          type="button"
          onClick={() => router.push("/seguro")}
          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-muted/50 transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <Shield className="size-4 text-foreground" />
            <span className="font-medium text-foreground">Declaración de Salud y Póliza</span>
          </div>
          <ChevronRight className="size-4 text-muted-foreground" />
        </button>

        <button
          type="button"
          onClick={() => router.push("/momento-de-verdad")}
          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-muted/50 transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <Sparkles className="size-4 text-primary" />
            <span className="font-medium text-primary font-semibold">Reportar siniestro o reclamo (Agente)</span>
          </div>
          <ChevronRight className="size-4 text-primary" />
        </button>
      </div>

      {/* Botón de Cerrar Sesión */}
      <Button
        variant="secondary"
        className="w-full gap-2 text-xs font-medium text-destructive hover:bg-destructive/10 cursor-pointer"
        onClick={() => {
          dispatch({ type: "cerrar-sesion" })
          router.replace("/ingresar")
        }}
      >
        <LogOut className="size-4" />
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
              <Trophy className="size-8" />
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
              ¡Compartir insignia! 🚀
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal: Editar Bio */}
      <Dialog open={modalEditar} onOpenChange={setModalEditar}>
        <DialogContent className="max-w-xs sm:max-w-sm">
          <DialogHeader className="text-left">
            <DialogTitle className="font-heading text-base">
              Editar Perfil ✨
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Personaliza tu presentación ante la comunidad de FIBO.
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
              <label className="font-medium text-muted-foreground">Tu bio o lema</label>
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
              Invita a tus Amigos 🤝
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Tus amigos reciben 1 mes de beneficio y tú sumas +20 pts a tu Reserva.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3 py-2 text-xs">
            <div className="flex items-center justify-between rounded-xl bg-muted/50 p-2.5 text-[11px]">
              <span className="truncate text-muted-foreground">
                fibo.pe/invitar?u=camila-ucsur
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
