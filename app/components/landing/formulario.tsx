"use client"

import { useActionState, useEffect, useRef, useState } from "react"
import { useFormStatus } from "react-dom"
import { PartyPopper } from "lucide-react"

import { joinWaitlistAction, initialWaitlistState } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Confetti, type ConfettiRef } from "@/components/ui/confetti"
import { FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      size="default"
      disabled={pending}
      className="h-10 w-full rounded-xl text-sm font-semibold shadow-xs"
    >
      {pending ? "Uniéndote..." : "Unirme a la lista de espera"}
    </Button>
  )
}

function CopyLinkButton({ link }: { link: string }) {
  const [copied, setCopied] = useState(false)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard no disponible (ej. contexto no seguro) — el link ya
      // queda visible en el input para copiarlo a mano.
    }
  }

  return (
    <Button type="button" variant="secondary" onClick={copyLink}>
      {copied ? "¡Copiado!" : "Copiar link"}
    </Button>
  )
}

function SuccessShare({ refCode }: { refCode: string }) {
  const confettiRef = useRef<ConfettiRef>(null)
  // Lazy initializer: solo corre en el cliente y solo una vez — esta
  // sección nunca se renderiza en el servidor (aparece tras un submit).
  const [origin] = useState(() =>
    typeof window !== "undefined" ? window.location.origin : ""
  )

  useEffect(() => {
    confettiRef.current?.fire({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    })
  }, [])

  const link = `${origin}/?ref=${refCode}`
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
    `Me uní a la lista de espera de FIBO, la app que hace crecer tu Reserva de Bienestar con hábitos simples. Únete tú también: ${link}`
  )}`

  return (
    <div className="relative flex flex-col gap-3 overflow-hidden">
      <Confetti
        ref={confettiRef}
        manualstart
        className="pointer-events-none absolute inset-0 size-full"
      />
      <p className="flex items-center gap-2 font-heading text-lg font-semibold">
        <PartyPopper className="size-5 text-primary" />
        Listo, ya estás en la lista
      </p>
      <p className="text-sm text-muted-foreground">
        Comparte tu link único — cada persona que se una con él suma a tu
        cadena de referidos.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          readOnly
          value={link}
          onFocus={(e) => e.currentTarget.select()}
        />
        <CopyLinkButton link={link} />
      </div>
      <Button
        render={<a href={whatsappHref} target="_blank" rel="noreferrer" />}
        className="w-fit"
      >
        Compartir por WhatsApp
      </Button>
    </div>
  )
}

export function WaitlistForm({ referredBy }: { referredBy?: string }) {
  const [state, formAction] = useActionState(
    joinWaitlistAction,
    initialWaitlistState
  )

  if (state.status === "success" && state.refCode) {
    return <SuccessShare refCode={state.refCode} />
  }

  return (
    <form action={formAction} className="flex flex-col gap-3 text-left">
      {referredBy ? (
        <input type="hidden" name="ref" value={referredBy} />
      ) : null}

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact"
          className="text-xs font-medium text-foreground"
        >
          Correo electrónico <span className="text-primary">*</span>
        </label>
        <Input
          id="contact"
          name="contact"
          type="email"
          autoComplete="email"
          placeholder="tu@correo.com"
          required
          aria-invalid={!!state.fieldErrors?.contact}
          className="h-10 rounded-xl border-border/80 bg-background px-3 text-sm placeholder:text-muted-foreground/50"
        />
        <FieldError
          errors={state.fieldErrors?.contact?.map((message) => ({ message }))}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="name"
            className="text-xs font-medium text-foreground"
          >
            Nombre o alias
          </label>
          <span className="text-[11px] text-muted-foreground/70">Opcional</span>
        </div>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="ej. Camila"
          aria-invalid={!!state.fieldErrors?.name}
          className="h-10 rounded-xl border-border/80 bg-background px-3 text-sm placeholder:text-muted-foreground/50"
        />
        <FieldError
          errors={state.fieldErrors?.name?.map((message) => ({ message }))}
        />
      </div>

      {state.status === "error" && !state.fieldErrors ? (
        <p role="alert" className="text-xs text-destructive">
          {state.message}
        </p>
      ) : null}

      <div className="pt-1">
        <SubmitButton />
      </div>
    </form>
  )
}
