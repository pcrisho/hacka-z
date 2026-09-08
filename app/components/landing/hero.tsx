import { buttonVariants } from "@/components/ui/button"
import { BlurFade } from "@/components/ui/blur-fade"
import { ReserveRing } from "@/components/landing/reserve-ring"
import { cn } from "@/lib/utils"

export function Hero({ referredBy }: { referredBy?: string } = {}) {
  return (
    <header
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:py-20">
        <div className="flex flex-col items-start gap-5 text-left">
          {referredBy ? (
            <BlurFade duration={0.4}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary">
                <span>✨</span>
                <span>Llegaste con invitación • Acceso prioritario</span>
              </div>
            </BlurFade>
          ) : (
            <BlurFade duration={0.4}>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                <span>Salud y protección que ganas con tus hábitos</span>
              </div>
            </BlurFade>
          )}

          <BlurFade delay={0.05} duration={0.5}>
            <h1 className="font-heading text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl">
              <span className="font-light text-foreground/80">Pequeños hábitos,</span>{" "}
              <br className="hidden sm:inline" />
              <span className="font-extrabold text-foreground">
                gran <span className="text-primary">Reserva</span>
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.1} duration={0.5}>
            <p className="max-w-md text-lg text-muted-foreground text-balance sm:text-xl">
              Cada hábito suma al siguiente. Una cobertura real de salud que
              crece en espiral y no te cuesta un sol para empezar.
            </p>
          </BlurFade>

          <BlurFade delay={0.15} duration={0.5}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#registro"
                className={cn(buttonVariants({ size: "lg" }), "h-12 px-8 text-base")}
              >
                Únete a la lista de espera
              </a>
              <a
                href="#mecanismo"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "h-12 text-sm text-muted-foreground hover:text-foreground"
                )}
              >
                ¿Cómo funciona? ↓
              </a>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.2} duration={0.6} className="flex flex-col items-center justify-center">
          <div className="relative">
            <ReserveRing />
            <div className="mt-3 flex items-center justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-card-foreground shadow-xs">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Nivel 1 • Cobertura activa
              </span>
            </div>
          </div>
        </BlurFade>
      </div>
    </header>
  )
}
