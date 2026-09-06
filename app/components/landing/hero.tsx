import { buttonVariants } from "@/components/ui/button"
import { BlurFade } from "@/components/ui/blur-fade"
import { Spotlight } from "@/components/ui/spotlight"
import { ParallaxBlob } from "@/components/landing/parallax-blob"
import { ReserveRing } from "@/components/landing/reserve-ring"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
    >
      <Spotlight fill="var(--primary)" className="-top-20 left-0" />
      <ParallaxBlob
        color="var(--primary)"
        className="-top-40 left-1/2 size-[36rem] -translate-x-2/3"
        speed={50}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div className="flex flex-col items-start gap-6 text-left">
          <BlurFade duration={0.5}>
            <h1 className="font-heading text-5xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl">
              <span className="text-foreground/50">Pequeños hábitos,</span>{" "}
              <span className="text-primary">gran Reserva</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.1} duration={0.5}>
            <p className="max-w-md text-xl text-muted-foreground text-balance">
              Cada hábito suma al siguiente. Tu Reserva crece en espiral.
            </p>
          </BlurFade>

          <BlurFade delay={0.2} duration={0.5}>
            <a
              href="#registro"
              className={cn(buttonVariants({ size: "lg" }), "h-12 px-8 text-base")}
            >
              Únete a la lista de espera
            </a>
          </BlurFade>
        </div>

        <BlurFade delay={0.2} duration={0.6} className="flex justify-center">
          <ReserveRing />
        </BlurFade>
      </div>
    </header>
  )
}
