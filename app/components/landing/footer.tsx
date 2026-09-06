import { SpiralIcon } from "@/components/landing/brand-mark"

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-2xl flex-col items-center gap-3 px-6 py-12 text-center">
      <SpiralIcon className="size-6 opacity-70" />
      <p className="text-xs text-muted-foreground">
        FIBO es una propuesta en desarrollo para la Hackathon UCSUR–Pacífico
        Seguros × AWS. Todavía no procesa pagos ni datos sensibles reales.
      </p>
      <p className="text-xs text-muted-foreground">
        Tu nombre y contacto se usan únicamente para la lista de espera —
        nada más.
      </p>
    </footer>
  )
}
