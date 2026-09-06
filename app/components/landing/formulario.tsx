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

// Input editorial: solo línea inferior, sin caja ni pill — para que el
// formulario no se sienta como el kit de tarjetas genérico de shadcn.
function LineField({
  id,
  name,
  label,
  placeholder,
  invalid,
}: {
  id: string
  name: string
  label: string
  placeholder: string
  invalid: boolean
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        required
        aria-invalid={invalid}
        className={cn(
          "border-b-2 border-border bg-transparent py-2 font-heading text-2xl outline-none",
          "placeholder:text-muted-foreground/50 focus:border-primary",
          "aria-invalid:border-destructive"
        )}
      />
    </div>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full">
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
    <form action={formAction} className="flex flex-col gap-5">
      {referredBy ? (
        <input type="hidden" name="ref" value={referredBy} />
      ) : null}
      <LineField
        id="name"
        name="name"
        label="Nombre o alias"
        placeholder="Camila"
        invalid={!!state.fieldErrors?.name}
      />
      <FieldError
        errors={state.fieldErrors?.name?.map((message) => ({ message }))}
      />
      <LineField
        id="contact"
        name="contact"
        label="Celular o correo"
        placeholder="999 999 999"
        invalid={!!state.fieldErrors?.contact}
      />
      <FieldError
        errors={state.fieldErrors?.contact?.map((message) => ({ message }))}
      />
      {state.status === "error" && !state.fieldErrors ? (
        <p role="alert" className="text-sm text-destructive">
          {state.message}
        </p>
      ) : null}
      <SubmitButton />
    </form>
  )
}
