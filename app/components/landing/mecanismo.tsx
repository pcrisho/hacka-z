import { Activity, Brain, PiggyBank } from "lucide-react"

import { Iphone } from "@/components/ui/iphone"
import { ReserveRing } from "@/components/landing/reserve-ring"
import { ImagePlaceholder } from "@/components/landing/image-placeholder"

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

export function Mecanismo() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-10 flex flex-col gap-3 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Así funciona FIBO
        </h2>
        <p className="mx-auto max-w-md text-lg text-muted-foreground text-balance">
          Un hábito, una Reserva que crece, una cobertura que ya ganaste.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        {/* La Reserva: celda ancla, 2×2 */}
        <div className="flex flex-col justify-between gap-6 rounded-xl border border-border bg-card p-8 md:col-span-2 md:row-span-2">
          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-2xl font-semibold">
              Tu Reserva crece en espiral.
            </h3>
            <p className="max-w-sm text-muted-foreground">
              Cada hábito suma al siguiente. Gratuita desde el día uno.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-44 sm:w-52">
              <Iphone
                screenContent={
                  <div className="flex size-full items-center justify-center bg-background">
                    <ReserveRing compact />
                  </div>
                }
              />
            </div>
          </div>
        </div>

        {/* Hábitos */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-heading text-lg font-semibold">
            Registra un hábito
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">Cada semana.</p>
          <ul className="mt-5 flex flex-col gap-4">
            {habitos.map((habito) => (
              <li key={habito.label} className="flex items-center gap-3">
                <habito.icon className="size-4 text-primary" />
                <span className="text-sm font-medium">{habito.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cobertura */}
        <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-6">
          <div>
            <h3 className="font-heading text-lg font-semibold">
              Cobertura ganada
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              No pagada desde el día uno.
            </p>
          </div>
          <div className="mt-5 flex items-center gap-3 text-xs">
            <span className="font-medium text-muted-foreground">Activo</span>
            <PauseTrack />
            <span className="font-medium text-primary">Pausado</span>
          </div>
        </div>

        {/* Placeholder de fotografía real de producto */}
        <ImagePlaceholder
          label="Captura real de la app (próximamente)"
          className="h-40 md:col-span-3"
        />
      </div>
    </section>
  )
}
