import { Activity, Brain, PiggyBank } from "lucide-react"

import { Iphone } from "@/components/ui/iphone"
import { ReserveRing } from "@/components/landing/reserve-ring"

const habitos = [
  { icon: PiggyBank, label: "Ahorro chico" },
  { icon: Activity, label: "Actividad física" },
  { icon: Brain, label: "Bienestar mental" },
]

function PauseTrack() {
  return (
    <span className="relative h-1 flex-1 rounded-full bg-border">
      <span className="absolute top-1/2 right-0 size-3 -translate-y-1/2 rounded-full bg-primary" />
    </span>
  )
}

// Los 3 pasos son un ciclo semanal real (registrar → crecer → cobertura
// ganada), no una colección de features — por eso se leen en secuencia con
// divisores entre columnas, en vez de repartirlos en tarjetas idénticas.
export function Mecanismo() {
  return (
    <section id="mecanismo" className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-28 scroll-mt-16">
      <div className="mb-14 flex flex-col gap-3 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Así funciona FIBO
        </h2>
        <p className="mx-auto max-w-md text-base text-muted-foreground text-balance sm:text-lg">
          Un hábito, una Reserva que crece, una cobertura que ya ganaste.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
        {/* Paso 1: registrar */}
        <div className="flex flex-col gap-4 md:pr-8">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Paso 1</span>
            <h3 className="font-heading text-lg font-semibold">
              Registra un hábito
            </h3>
            <p className="text-sm text-muted-foreground">
              Hábitos simples y autodeclarados cada semana. Sin relojes caros ni complicaciones.
            </p>
          </div>
          <ul className="flex flex-col gap-3 pt-2">
            {habitos.map((habito) => (
              <li key={habito.label} className="flex items-center gap-3 rounded-lg border border-border/50 bg-card p-3 shadow-2xs">
                <span className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <habito.icon className="size-4" />
                </span>
                <span className="text-sm font-medium">{habito.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Paso 2: la Reserva crece — centro real de la mecánica */}
        <div className="flex flex-col items-center gap-4 border-y border-border py-10 text-center md:border-x md:border-y-0 md:px-8 md:py-0">
          <div className="w-40 sm:w-44">
            <Iphone
              screenContent={
                <div className="flex size-full flex-col items-center justify-between bg-background p-3 pt-6">
                  <div className="flex w-full items-center justify-between text-[10px] text-muted-foreground">
                    <span className="font-semibold text-foreground">Hola, Camila</span>
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 font-medium text-primary">Semana 3</span>
                  </div>
                  <div className="my-auto flex flex-col items-center">
                    <ReserveRing compact />
                  </div>
                  <div className="w-full rounded-xl border border-border/70 bg-card p-2 text-center">
                    <span className="block text-xs font-bold text-foreground">S/ 150 en Reserva</span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">● Cobertura médica activa</span>
                  </div>
                </div>
              }
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Paso 2</span>
            <h3 className="font-heading text-lg font-semibold">
              Tu Reserva crece en espiral
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Cada hábito suma al siguiente. 100% gratuita desde el día uno.
            </p>
          </div>
        </div>

        {/* Paso 3: cobertura ganada */}
        <div className="flex flex-col justify-between gap-6 md:pl-8">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Paso 3</span>
            <h3 className="font-heading text-lg font-semibold">
              Cobertura ganada
            </h3>
            <p className="text-sm text-muted-foreground">
              No pagada desde el inicio. Ya ganaste tu respaldo médico básico.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-xl border border-border/80 bg-card p-4 shadow-xs">
            <div className="flex items-center gap-3 text-xs">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Activo</span>
              <PauseTrack />
              <span className="font-medium text-muted-foreground">Pausado</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>¿Semana complicada?</strong> Tu cobertura no se cancela:
              se pausa sin penalidad ni cobros sorpresa y te espera hasta que retomes tu ritmo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
