"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import confetti from "canvas-confetti"
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Brain,
  Briefcase,
  Calendar,
  Check,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Lock,
  PiggyBank,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  User,
  Users,
  Zap,
} from "lucide-react"

import { BrandMark, SpiralIcon } from "@/components/landing/brand-mark"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useReserva } from "@/hooks/use-reserva"
import type { UsuarioPerfil } from "@/lib/reserva/types"
import { cn } from "@/lib/utils"

export function OnboardingView() {
  const router = useRouter()
  const { dispatch } = useReserva()

  const [paso, setPaso] = useState<1 | 2 | 3 | 4 | 5>(1)
  const [completando, setCompletando] = useState(false)

  // Paso 1: Datos Personales & Alias (vacíos para registro real)
  const [nombres, setNombres] = useState("")
  const [apellidos, setApellidos] = useState("")
  const [alias, setAlias] = useState("")
  const [email, setEmail] = useState("")

  // Paso 2: Diagnóstico & Arquetipo
  const [ocupacion, setOcupacion] = useState<UsuarioPerfil["ocupacion"]>("estudiante")
  const [desafioPrincipal, setDesafioPrincipal] =
    useState<UsuarioPerfil["desafioPrincipal"]>("dinero")
  const [pilarPrioritario, setPilarPrioritario] =
    useState<UsuarioPerfil["pilarPrioritario"]>("bolsillo")

  // Paso 3: Declaración de Transparencia de Datos
  const [consentimientoDatos, setConsentimientoDatos] = useState(true)

  // Paso 5: Vista seleccionada en el Tour
  const [tourTab, setTourTab] = useState<"hoy" | "comunidad" | "progreso" | "perfil">("hoy")

  function dispararCelebracion() {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#0099CC", "#D4A24C", "#01A355"],
    })
  }

  async function finalizarOnboarding() {
    setCompletando(true)
    dispararCelebracion()

    const perfil: UsuarioPerfil = {
      nombres: nombres.trim() || "Camila",
      apellidos: apellidos.trim() || "Rodríguez",
      alias: alias.trim() || (nombres.trim().split(" ")[0] || "Cami"),
      email: email.trim() || "camila.rodriguez@ucsur.edu.pe",
      ocupacion,
      desafioPrincipal,
      pilarPrioritario,
      consentimientoDatos,
    }

    dispatch({ type: "guardar-perfil", perfil })
    dispatch({
      type: "completar-onboarding",
      contexto: {
        independiente: ocupacion === "independiente",
        foco: pilarPrioritario === "bolsillo" ? "plata" : "salud",
      },
    })

    await new Promise((resolve) => setTimeout(resolve, 600))
    router.replace("/hoy")
  }

  const esPaso1Valido =
    nombres.trim().length > 0 &&
    apellidos.trim().length > 0 &&
    email.trim().includes("@")

  return (
    <div className="flex flex-1 flex-col justify-between p-4 max-w-md mx-auto w-full h-full min-h-0">
      {/* Header con BrandMark y Barra de Progreso */}
      <div className="w-full flex flex-col gap-2.5 pt-1 shrink-0">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="transition-opacity hover:opacity-85"
            aria-label="FIBO - Ir al inicio"
          >
            <BrandMark />
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground">
              Paso {paso} de 5
            </span>
            <Badge
              variant="outline"
              className="text-[10px] font-bold text-primary border-primary/30 bg-primary/5"
            >
              Primer ingreso
            </Badge>
          </div>
        </div>

        {/* Barra de progreso interactiva */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${(paso / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Contenido Principal por Pasos */}
      <div className="w-full flex-1 flex flex-col justify-center py-2 min-h-0">
        {/* ================= PASO 1 ================= */}
        {paso === 1 && (
          <div className="flex flex-col gap-3.5 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <Badge
                variant="secondary"
                className="w-fit self-center sm:self-start text-[11px] font-medium"
              >
                <User className="mr-1 size-3" /> Identidad y Bienvenida
              </Badge>
              <h1 className="font-heading text-xl font-bold tracking-tight">
                ¿Cómo te llamas? ✨
              </h1>
              <p className="text-xs text-muted-foreground">
                Tu nombre nos permite personalizar tu experiencia y emitir tus constancias en FIBO.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <Field>
                  <FieldLabel htmlFor="nombres" className="text-xs font-medium">
                    Nombres
                  </FieldLabel>
                  <Input
                    id="nombres"
                    placeholder="Ej. Camila"
                    value={nombres}
                    onChange={(e) => setNombres(e.target.value)}
                    className="h-10 text-sm"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="apellidos" className="text-xs font-medium">
                    Apellidos
                  </FieldLabel>
                  <Input
                    id="apellidos"
                    placeholder="Ej. Rodríguez"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                    className="h-10 text-sm"
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="alias" className="text-xs font-medium">
                  ¿Cómo te gusta que te llamen? (Alias)
                </FieldLabel>
                <Input
                  id="alias"
                  placeholder="Ej. Cami, Nico, Dani"
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                  className="h-10 text-sm"
                />
                <p className="text-[10px] text-muted-foreground">
                  Este es el nombre que verás en tus saludos diarios y en las tribus.
                </p>
              </Field>

              <Field>
                <FieldLabel htmlFor="email" className="text-xs font-medium">
                  Correo electrónico
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="ejemplo@ucsur.edu.pe"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10 text-sm"
                />
                <p className="text-[10px] text-muted-foreground">
                  Aquí te enviaremos tus constancias de cobertura y reportes de Reserva.
                </p>
              </Field>
            </div>
          </div>
        )}

        {/* ================= PASO 2 ================= */}
        {paso === 2 && (
          <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex flex-col gap-1.5 text-center sm:text-left">
              <Badge
                variant="secondary"
                className="w-fit self-center sm:self-start text-[11px] font-medium"
              >
                <Sparkles className="mr-1 size-3" /> Diagnóstico Gen Z
              </Badge>
              <h1 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
                Conociendo tu ritmo 🎯
              </h1>
              <p className="text-xs text-muted-foreground">
                Personalizamos tus hábitos sugeridos para que encajen en tu rutina real.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Pregunta 1: Ocupación */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-foreground">
                  1. ¿Cuál es tu ocupación principal hoy?
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setOcupacion("estudiante")}
                    className={cn(
                      "flex flex-col items-start gap-1.5 rounded-xl border p-3 text-left transition-all cursor-pointer",
                      ocupacion === "estudiante"
                        ? "border-primary bg-primary/10 shadow-xs ring-1 ring-primary/40"
                        : "border-border/80 bg-card hover:bg-muted/50"
                    )}
                  >
                    <GraduationCap className="size-4 text-primary" />
                    <span className="text-xs font-semibold">Estudiante</span>
                    <span className="text-[10px] text-muted-foreground leading-tight">
                      UCSUR / Univ. o instituto
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOcupacion("empleo")}
                    className={cn(
                      "flex flex-col items-start gap-1.5 rounded-xl border p-3 text-left transition-all cursor-pointer",
                      ocupacion === "empleo"
                        ? "border-primary bg-primary/10 shadow-xs ring-1 ring-primary/40"
                        : "border-border/80 bg-card hover:bg-muted/50"
                    )}
                  >
                    <Briefcase className="size-4 text-primary" />
                    <span className="text-xs font-semibold">Primer Empleo</span>
                    <span className="text-[10px] text-muted-foreground leading-tight">
                      En planilla o prácticas
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOcupacion("independiente")}
                    className={cn(
                      "flex flex-col items-start gap-1.5 rounded-xl border p-3 text-left transition-all cursor-pointer",
                      ocupacion === "independiente"
                        ? "border-primary bg-primary/10 shadow-xs ring-1 ring-primary/40"
                        : "border-border/80 bg-card hover:bg-muted/50"
                    )}
                  >
                    <Laptop className="size-4 text-primary" />
                    <span className="text-xs font-semibold">Freelancer</span>
                    <span className="text-[10px] text-muted-foreground leading-tight">
                      Independiente / creador
                    </span>
                  </button>
                </div>
              </div>

              {/* Pregunta 2: Mayor Desafío */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-foreground">
                  2. ¿Cuál es tu mayor desafío de bienestar?
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setDesafioPrincipal("dinero")}
                    className={cn(
                      "flex flex-col items-start gap-1.5 rounded-xl border p-3 text-left transition-all cursor-pointer",
                      desafioPrincipal === "dinero"
                        ? "border-amber-500 bg-amber-500/10 shadow-xs ring-1 ring-amber-500/40"
                        : "border-border/80 bg-card hover:bg-muted/50"
                    )}
                  >
                    <PiggyBank className="size-4 text-amber-500" />
                    <span className="text-xs font-semibold">Desorganización financiera</span>
                    <span className="text-[10px] text-muted-foreground leading-tight">
                      Control de gastos y ahorro
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDesafioPrincipal("cuerpo")}
                    className={cn(
                      "flex flex-col items-start gap-1.5 rounded-xl border p-3 text-left transition-all cursor-pointer",
                      desafioPrincipal === "cuerpo"
                        ? "border-primary bg-primary/10 shadow-xs ring-1 ring-primary/40"
                        : "border-border/80 bg-card hover:bg-muted/50"
                    )}
                  >
                    <Activity className="size-4 text-primary" />
                    <span className="text-xs font-semibold">Sedentarismo</span>
                    <span className="text-[10px] text-muted-foreground leading-tight">
                      Falta de energía y pasos
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDesafioPrincipal("mente")}
                    className={cn(
                      "flex flex-col items-start gap-1.5 rounded-xl border p-3 text-left transition-all cursor-pointer",
                      desafioPrincipal === "mente"
                        ? "border-emerald-500 bg-emerald-500/10 shadow-xs ring-1 ring-emerald-500/40"
                        : "border-border/80 bg-card hover:bg-muted/50"
                    )}
                  >
                    <Brain className="size-4 text-emerald-500" />
                    <span className="text-xs font-semibold">Sobrecarga mental</span>
                    <span className="text-[10px] text-muted-foreground leading-tight">
                      Estrés y desconexión
                    </span>
                  </button>
                </div>
              </div>

              {/* Pregunta 3: Pilar Prioritario */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-foreground">
                  3. ¿Qué pilar quieres priorizar primero?
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPilarPrioritario("bolsillo")}
                    className={cn(
                      "flex flex-col items-start gap-1 rounded-xl border p-2.5 text-left transition-all cursor-pointer",
                      pilarPrioritario === "bolsillo"
                        ? "border-amber-500 bg-amber-500/10 shadow-xs ring-1 ring-amber-500/40"
                        : "border-border/80 bg-card hover:bg-muted/50"
                    )}
                  >
                    <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                      💰 Salud Financiera
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      Hábito de ahorro diario
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPilarPrioritario("cuerpo")}
                    className={cn(
                      "flex flex-col items-start gap-1 rounded-xl border p-2.5 text-left transition-all cursor-pointer",
                      pilarPrioritario === "cuerpo"
                        ? "border-primary bg-primary/10 shadow-xs ring-1 ring-primary/40"
                        : "border-border/80 bg-card hover:bg-muted/50"
                    )}
                  >
                    <span className="text-xs font-semibold text-primary">
                      🏃 Cuerpo
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      Moverme 15 min diarios
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPilarPrioritario("mente")}
                    className={cn(
                      "flex flex-col items-start gap-1 rounded-xl border p-2.5 text-left transition-all cursor-pointer",
                      pilarPrioritario === "mente"
                        ? "border-emerald-500 bg-emerald-500/10 shadow-xs ring-1 ring-emerald-500/40"
                        : "border-border/80 bg-card hover:bg-muted/50"
                    )}
                  >
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      🧘 Mente
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      Pausas y Dr. Online
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PASO 3 ================= */}
        {paso === 3 && (
          <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex flex-col gap-1.5 text-center sm:text-left">
              <Badge
                variant="outline"
                className="w-fit self-center sm:self-start text-[11px] font-medium border-emerald-500/40 text-emerald-600 bg-emerald-500/10"
              >
                <ShieldCheck className="mr-1 size-3.5 text-emerald-600" /> Transparencia y Protección de Datos
              </Badge>
              <h1 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
                Tus datos trabajan para ti 🛡️
              </h1>
              <p className="text-xs text-muted-foreground">
                En FIBO, tus datos de bienestar se gestionan con estricta confidencialidad
                para calcular tu Reserva de Protección y activar tus beneficios de salud preventiva.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              {/* Card 1 */}
              <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-3">
                <div className="mt-0.5 rounded-lg bg-primary/10 p-1.5 text-primary">
                  <TrendingUp className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-foreground">
                    Tu constancia amplía tu cobertura
                  </span>
                  <span className="text-[11px] text-muted-foreground leading-relaxed">
                    Cada hábito cumplido suma puntos a tu Reserva de Bienestar y
                    activa consultas médicas con Dr. Online sin copagos ni costos adicionales.
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3">
                <div className="mt-0.5 rounded-lg bg-emerald-500/10 p-1.5 text-emerald-600">
                  <Lock className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-foreground">
                    Cero venta de información a terceros
                  </span>
                  <span className="text-[11px] text-muted-foreground leading-relaxed">
                    Tus datos personales y de bienestar no se venderán jamás a marcas,
                    agencias ni empleadores.
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3">
                <div className="mt-0.5 rounded-lg bg-amber-500/10 p-1.5 text-amber-600">
                  <HeartHandshake className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-foreground">
                    Sin castigos ni penalizaciones
                  </span>
                  <span className="text-[11px] text-muted-foreground leading-relaxed">
                    Si tienes una semana difícil o te enfermas, tu Escudo de Racha
                    protege tus logros. Cuidarte no debe generar culpa.
                  </span>
                </div>
              </div>
            </div>

            {/* Checkbox de Consentimiento */}
            <div className="flex items-start gap-2.5 rounded-xl border border-border/80 bg-card p-3 shadow-2xs">
              <Checkbox
                id="consentimiento"
                checked={consentimientoDatos}
                onCheckedChange={(checked) => setConsentimientoDatos(Boolean(checked))}
                className="mt-0.5"
              />
              <label
                htmlFor="consentimiento"
                className="text-xs text-muted-foreground leading-tight cursor-pointer"
              >
                Acepto el tratamiento transparente de mis datos de bienestar para
                activar mi Reserva y beneficios con FIBO.
              </label>
            </div>
          </div>
        )}

        {/* ================= PASO 4 ================= */}
        {paso === 4 && (
          <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex flex-col gap-1.5 text-center sm:text-left">
              <Badge
                variant="secondary"
                className="w-fit self-center sm:self-start text-[11px] font-medium"
              >
                <Zap className="mr-1 size-3 text-amber-500" /> El Poder de tu Reserva
              </Badge>
              <h1 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
                ¿Cómo funciona FIBO? 🌀
              </h1>
              <p className="text-xs text-muted-foreground">
                Inspirado en la espiral de Fibonacci: pequeños pasos diarios generan un
                crecimiento exponencial en tu seguridad.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <Card className="border-border/80 shadow-2xs">
                <CardContent className="flex items-start gap-3 p-3.5">
                  <div className="rounded-xl bg-primary/10 p-2 text-primary shrink-0">
                    <SpiralIcon className="size-5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-foreground">
                      1. Hábitos diarios conscientes
                    </span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Acciones simples de un minuto: apartar un ahorro, caminar 15 min o hacer una pausa consciente. Cada check diario alimenta tu Reserva.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/80 shadow-2xs">
                <CardContent className="flex items-start gap-3 p-3.5">
                  <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-600 shrink-0">
                    <Shield className="size-5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-foreground">
                      2. Respaldo y Telemedicina Preventiva
                    </span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Tus puntos desbloquean hasta S/ 15,000 en cobertura médica y de
                      accidentes, además de telemedicina ilimitada 24/7 sin copagos.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/80 shadow-2xs">
                <CardContent className="flex items-start gap-3 p-3.5">
                  <div className="rounded-xl bg-amber-500/10 p-2 text-amber-600 shrink-0">
                    <Users className="size-5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-foreground">
                      3. Coberturas On-Demand Opcionales
                    </span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Protección flexible por día cuando la necesites (deporte o viajes cortos) desde S/ 3.50 con Yape, sin contratos forzosos.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* ================= PASO 5 ================= */}
        {paso === 5 && (
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <Badge
                variant="secondary"
                className="w-fit self-center sm:self-start text-[11px] font-medium"
              >
                <Sparkles className="mr-1 size-3 text-primary" /> Tour del App
              </Badge>
              <h1 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
                Tu centro de control diario 🚀
              </h1>
              <p className="text-xs text-muted-foreground">
                Toca cada pestaña para ver lo que tendrás disponible en FIBO:
              </p>
            </div>

            {/* Selector de pestañas para el tour interactivo */}
            <div className="grid grid-cols-4 gap-1 rounded-xl border border-border/80 bg-muted/60 p-1 text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => setTourTab("hoy")}
                className={cn(
                  "py-1.5 rounded-lg transition-all cursor-pointer text-center",
                  tourTab === "hoy"
                    ? "bg-card text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Hoy
              </button>
              <button
                type="button"
                onClick={() => setTourTab("comunidad")}
                className={cn(
                  "py-1.5 rounded-lg transition-all cursor-pointer text-center",
                  tourTab === "comunidad"
                    ? "bg-card text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Comunidad
              </button>
              <button
                type="button"
                onClick={() => setTourTab("progreso")}
                className={cn(
                  "py-1.5 rounded-lg transition-all cursor-pointer text-center",
                  tourTab === "progreso"
                    ? "bg-card text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Progreso
              </button>
              <button
                type="button"
                onClick={() => setTourTab("perfil")}
                className={cn(
                  "py-1.5 rounded-lg transition-all cursor-pointer text-center",
                  tourTab === "perfil"
                    ? "bg-card text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Perfil
              </button>
            </div>

            {/* Tarjeta de demostración según tourTab */}
            <div className="rounded-2xl border border-border/80 bg-card p-4 shadow-sm min-h-[160px] flex flex-col justify-between">
              {tourTab === "hoy" && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <Calendar className="size-4" /> Vista Hoy
                    </span>
                    <Badge variant="outline" className="text-[10px]">
                      Día a día
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    El corazón de tu rutina. Visualiza tu selector de 7 días, tu racha
                    activa con escudo y tus 3 micro-hábitos divididos en Bolsillo, Cuerpo
                    y Mente.
                  </p>
                  <div className="mt-1 flex items-center gap-2 rounded-lg bg-muted/60 px-3 py-2 text-[11px] font-medium text-foreground">
                    <CheckCircle2 className="size-4 text-emerald-500" />
                    <span>Marca un hábito en un tap para ganar puntos y festejar con confetti.</span>
                  </div>
                </div>
              )}

              {tourTab === "comunidad" && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <Users className="size-4" /> Vista Comunidad
                    </span>
                    <Badge variant="outline" className="text-[10px]">
                      Social & Retos
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    No estás solo en esto. Participa en los retos mensuales de la
                    comunidad, únete a tu tribu universitaria y activa seguros colectivos
                    para tus pichangas de fin de semana.
                  </p>
                  <div className="mt-1 flex items-center gap-2 rounded-lg bg-muted/60 px-3 py-2 text-[11px] font-medium text-foreground">
                    <Zap className="size-4 text-amber-500" />
                    <span>Pólizas on-demand por S/ 3.50 por persona directo con Yape.</span>
                  </div>
                </div>
              )}

              {tourTab === "progreso" && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <TrendingUp className="size-4" /> Vista Progreso
                    </span>
                    <Badge variant="outline" className="text-[10px]">
                      Analítica
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Mira cómo tu constancia se convierte en dinero real de cobertura:
                    hasta S/ 15,000 proyectados, curva de crecimiento y desglose por
                    categoría.
                  </p>
                  <div className="mt-1 flex items-center gap-2 rounded-lg bg-muted/60 px-3 py-2 text-[11px] font-medium text-foreground">
                    <ShieldCheck className="size-4 text-primary" />
                    <span>Cada nivel alcanzado desbloquea recompensas reales de Pacífico.</span>
                  </div>
                </div>
              )}

              {tourTab === "perfil" && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <User className="size-4" /> Vista Perfil
                    </span>
                    <Badge variant="outline" className="text-[10px]">
                      Tu Identidad
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Tu vitrina personal con foto, portada personalizada, conmutador de
                    privacidad pública/privada, vitrina de insignias y acceso directo a Dr.
                    Online.
                  </p>
                  <div className="mt-1 flex items-center gap-2 rounded-lg bg-muted/60 px-3 py-2 text-[11px] font-medium text-foreground">
                    <Sparkles className="size-4 text-amber-500" />
                    <span>Colecciona insignias como Ahorrador Hormiga o Runner Urbano.</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-3.5 py-2.5">
              <Check className="size-4 text-primary shrink-0" />
              <p className="text-xs text-foreground font-medium">
                Todo listo, {alias || nombres || "amigo"}. Tu perfil y tu Reserva están preparados.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer con Botones de Navegación */}
      <div className="w-full flex items-center justify-between gap-3 pt-4 border-t border-border/60">
        {paso > 1 ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setPaso((p) => Math.max(1, p - 1) as typeof paso)}
            className="text-xs h-10 px-4 cursor-pointer"
          >
            <ArrowLeft className="mr-1 size-3.5" /> Atrás
          </Button>
        ) : (
          <div />
        )}

        {paso < 5 ? (
          <Button
            type="button"
            size="sm"
            disabled={
              (paso === 1 && !esPaso1Valido) ||
              (paso === 3 && !consentimientoDatos)
            }
            onClick={() => setPaso((p) => Math.min(5, p + 1) as typeof paso)}
            className="text-xs h-10 px-5 font-semibold cursor-pointer ml-auto"
          >
            Continuar <ArrowRight className="ml-1 size-3.5" />
          </Button>
        ) : (
          <Button
            type="button"
            size="lg"
            disabled={completando}
            onClick={finalizarOnboarding}
            className="text-xs sm:text-sm h-11 px-6 font-bold cursor-pointer ml-auto bg-primary text-primary-foreground shadow-sm hover:opacity-90"
          >
            {completando ? (
              <span>Activando Reserva…</span>
            ) : (
              <>
                ¡Activar mi Reserva y Empezar! <Sparkles className="ml-1.5 size-4" />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  )
}

// Export para compatibilidad retroactiva con cualquier import existente
export const OnboardingChat = OnboardingView

