import { SpiralIcon } from "@/components/landing/brand-mark"

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-2xl flex-col items-center gap-3 px-6 py-12 text-center">
      <SpiralIcon className="size-6 opacity-70" />
      <p className="text-xs text-muted-foreground">
        FIBO es una iniciativa desarrollada para la Hackathon UCSUR – Pacífico
        Seguros × AWS. Diseñada para transformar hábitos diarios en bienestar y protección médica real.
      </p>
      <p className="text-xs text-muted-foreground">
        Tu información se utiliza únicamente para gestionar tu acceso y experiencia en la plataforma.
      </p>
    </footer>
  )
}
