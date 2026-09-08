"use client"

import { useLayoutEffect, useRef, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

import { BrandMark } from "@/components/landing/brand-mark"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Spinner } from "@/components/ui/spinner"
import { useReserva } from "@/hooks/use-reserva"
import { cn } from "@/lib/utils"

function formatTelefono(value: string): string {
  let clean = value.replace(/\D/g, "")
  if (clean.length === 11 && clean.startsWith("51")) {
    clean = clean.slice(2)
  }
  clean = clean.slice(0, 9)

  if (clean.length <= 3) return clean
  if (clean.length <= 6) return `${clean.slice(0, 3)} ${clean.slice(3)}`
  return `${clean.slice(0, 3)} ${clean.slice(3, 6)} ${clean.slice(6, 9)}`
}

function getCursorPositionAfterFormat(
  formatted: string,
  digitsBeforeCursor: number
): number {
  if (digitsBeforeCursor <= 0) return 0
  let digitCount = 0
  for (let i = 0; i < formatted.length; i++) {
    if (/\d/.test(formatted[i])) {
      digitCount++
      if (digitCount === digitsBeforeCursor) {
        return i + 1
      }
    }
  }
  return formatted.length
}

// Login mock: UI real de teléfono + código, verificación simulada — mismo
// patrón "real el flujo, simulado el backend" que el resto del prototipo
// (ver decisiones-app-web.md §1). No se envía ningún SMS real.
export function IngresarView() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const modoInicial =
    searchParams.get("modo") === "iniciar" ? "iniciar" : "registro"

  const { state, dispatch } = useReserva()
  const [modo, setModo] = useState<"iniciar" | "registro">(modoInicial)
  const [paso, setPaso] = useState<"telefono" | "codigo">("telefono")
  const [telefono, setTelefono] = useState("")
  const [codigo, setCodigo] = useState("")
  const [enviando, setEnviando] = useState(false)
  const [confirmando, setConfirmando] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const cursorRef = useRef<number | null>(null)

  useLayoutEffect(() => {
    if (cursorRef.current !== null && inputRef.current) {
      inputRef.current.setSelectionRange(cursorRef.current, cursorRef.current)
      cursorRef.current = null
    }
  }, [telefono])

  function cambiarModo(nuevoModo: "iniciar" | "registro") {
    setModo(nuevoModo)
    setPaso("telefono")
    setCodigo("")
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const input = e.currentTarget
    const { selectionStart, selectionEnd } = input

    // No permitir espacios manuales (se agregan automáticamente)
    if (e.key === " ") {
      e.preventDefault()
      return
    }

    // Permitir atajos y teclas de navegación
    if (e.ctrlKey || e.metaKey || e.altKey || e.key.length > 1) {
      if (e.key === "Backspace") {
        // Si el cursor está inmediatamente después de un espacio, borrar el dígito anterior y el espacio
        if (
          selectionStart !== null &&
          selectionStart === selectionEnd &&
          selectionStart > 0 &&
          input.value[selectionStart - 1] === " "
        ) {
          e.preventDefault()
          const before = input.value.slice(0, selectionStart - 2)
          const after = input.value.slice(selectionStart)
          const nextVal = formatTelefono(before + after)
          const digitsBefore = before.replace(/\D/g, "").length
          const newPos = getCursorPositionAfterFormat(nextVal, digitsBefore)

          cursorRef.current = newPos
          setTelefono(nextVal)
        }
      } else if (e.key === "Delete") {
        // Si el cursor está antes de un espacio, borrar el espacio y el siguiente dígito
        if (
          selectionStart !== null &&
          selectionStart === selectionEnd &&
          selectionStart < input.value.length &&
          input.value[selectionStart] === " "
        ) {
          e.preventDefault()
          const before = input.value.slice(0, selectionStart)
          const after = input.value.slice(selectionStart + 2)
          const nextVal = formatTelefono(before + after)
          const digitsBefore = before.replace(/\D/g, "").length
          const newPos = getCursorPositionAfterFormat(nextVal, digitsBefore)

          cursorRef.current = newPos
          setTelefono(nextVal)
        }
      }
      return
    }

    // Bloquear caracteres no numéricos
    if (!/\d/.test(e.key)) {
      e.preventDefault()
      return
    }

    // Limitar a 9 dígitos
    const digitosActuales = input.value.replace(/\D/g, "")
    if (
      digitosActuales.length >= 9 &&
      selectionStart !== null &&
      selectionStart === selectionEnd
    ) {
      e.preventDefault()
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const rawVal = e.target.value
    const rawCursor = e.target.selectionStart ?? rawVal.length

    const digitsBeforeCursor = rawVal.slice(0, rawCursor).replace(/\D/g, "").length
    const nextVal = formatTelefono(rawVal)
    const newPos = getCursorPositionAfterFormat(nextVal, digitsBeforeCursor)

    cursorRef.current = newPos
    setTelefono(nextVal)
  }

  async function enviarCodigo() {
    setEnviando(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setEnviando(false)
    setPaso("codigo")
  }

  async function confirmar(codigoValido?: string) {
    const cod = codigoValido ?? codigo
    if (cod.length < 4 || confirmando) return
    setConfirmando(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    dispatch({ type: "iniciar-sesion", telefono })

    if (modo === "registro") {
      router.replace("/onboarding")
    } else {
      router.replace(state.onboardingDone ? "/hoy" : "/onboarding")
    }
  }

  const digitos = telefono.replace(/\D/g, "")
  const esTelefonoValido = digitos.length === 9

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-6 max-w-sm mx-auto w-full">
      <Link
        href="/"
        className="transition-opacity hover:opacity-85"
        aria-label="FIBO - Ir al inicio"
      >
        <BrandMark />
      </Link>

      {/* Selector de modo: Iniciar sesión vs. Crear cuenta */}
      <div className="grid w-full grid-cols-2 rounded-xl border border-border/80 bg-muted/60 p-1 text-xs font-semibold shadow-2xs">
        <button
          type="button"
          onClick={() => cambiarModo("iniciar")}
          className={cn(
            "flex items-center justify-center rounded-lg py-2 transition-all cursor-pointer",
            modo === "iniciar"
              ? "bg-card text-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Iniciar sesión
        </button>
        <button
          type="button"
          onClick={() => cambiarModo("registro")}
          className={cn(
            "flex items-center justify-center rounded-lg py-2 transition-all cursor-pointer",
            modo === "registro"
              ? "bg-card text-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Crear cuenta
        </button>
      </div>

      {paso === "telefono" ? (
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-1 text-center">
            <h1 className="font-heading text-lg font-bold tracking-tight">
              {modo === "registro"
                ? "Crea tu cuenta en FIBO"
                : "Bienvenido de vuelta"}
            </h1>
            <p className="text-xs text-muted-foreground">
              {modo === "registro"
                ? "Ingresa tu celular para verificar tu número y comenzar a construir tu Reserva."
                : "Ingresa con tu celular registrado para acceder a tus hábitos y coberturas."}
            </p>
          </div>
          <Field>
            <FieldLabel htmlFor="telefono" className="text-xs font-medium">
              Número de Celular (Perú)
            </FieldLabel>
            <Input
              ref={inputRef}
              id="telefono"
              type="tel"
              inputMode="numeric"
              maxLength={11}
              placeholder="999 999 999"
              value={telefono}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="h-11 text-base tracking-wide"
            />
          </Field>
          <Button
            size="lg"
            className="w-full h-11 text-sm font-semibold"
            disabled={!esTelefonoValido || enviando}
            onClick={enviarCodigo}
          >
            {enviando ? (
              <>
                <Spinner />
                <span>Enviando código SMS…</span>
              </>
            ) : modo === "registro" ? (
              "Continuar con mi registro"
            ) : (
              "Ingresar a FIBO"
            )}
          </Button>

          {/* Toggle rápido en el pie */}
          <div className="pt-2 text-center text-xs text-muted-foreground">
            {modo === "registro" ? (
              <p>
                ¿Ya tienes una cuenta registrada?{" "}
                <button
                  type="button"
                  onClick={() => cambiarModo("iniciar")}
                  className="font-semibold text-primary underline underline-offset-4 hover:opacity-85 cursor-pointer"
                >
                  Inicia sesión aquí
                </button>
              </p>
            ) : (
              <p>
                ¿Primera vez en FIBO?{" "}
                <button
                  type="button"
                  onClick={() => cambiarModo("registro")}
                  className="font-semibold text-primary underline underline-offset-4 hover:opacity-85 cursor-pointer"
                >
                  Crear cuenta gratis
                </button>
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-1 text-center">
            <h1 className="font-heading text-lg font-bold tracking-tight">
              Confirma el código
            </h1>
            <p className="text-xs text-muted-foreground">
              Enviamos un código de 4 dígitos por SMS a{" "}
              <span className="font-medium text-foreground">{telefono}</span>.
            </p>
          </div>
          <Field className="items-center">
            <FieldLabel htmlFor="codigo" className="sr-only">
              Código de confirmación
            </FieldLabel>
            <div className="flex justify-center py-2">
              <InputOTP
                id="codigo"
                maxLength={4}
                value={codigo}
                onChange={(val) => setCodigo(val)}
                onComplete={(val) => void confirmar(val)}
                containerClassName="justify-center"
                autoFocus
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="size-12 text-lg font-semibold" />
                  <InputOTPSlot index={1} className="size-12 text-lg font-semibold" />
                  <InputOTPSlot index={2} className="size-12 text-lg font-semibold" />
                  <InputOTPSlot index={3} className="size-12 text-lg font-semibold" />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </Field>
          <Button
            size="lg"
            className="w-full h-11 text-sm font-semibold"
            disabled={codigo.length < 4 || confirmando}
            onClick={() => void confirmar()}
          >
            {confirmando ? (
              <>
                <Spinner />
                <span>Confirmando…</span>
              </>
            ) : (
              "Confirmar código"
            )}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-xs cursor-pointer"
            onClick={() => setPaso("telefono")}
          >
            Cambiar número de celular
          </Button>
        </div>
      )}
    </div>
  )
}
