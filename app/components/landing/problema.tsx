import { Check, X } from "lucide-react"

export function Problema() {
  return (
    <section id="problema" className="bg-secondary/40 py-16 sm:py-20 md:py-24 scroll-mt-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6">
        <div className="flex max-w-2xl flex-col gap-3 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            El seguro tradicional no fue pensado para ti
          </h2>
          <p className="text-base text-muted-foreground text-balance sm:text-lg">
            Prima fija que ahoga. Letra chica inentendible. Y la barrera de no
            estar en planilla corporativa. En FIBO dimos vuelta a esa lógica:
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {/* Tarjeta Tradicional */}
          <div className="flex flex-col gap-5 rounded-2xl border border-border/80 bg-card p-6 shadow-xs sm:p-8">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <X className="size-4" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                El modelo de siempre
              </h3>
            </div>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <X className="mt-0.5 size-4 shrink-0 text-destructive/80" />
                <span>
                  <strong className="text-foreground">Prima mensual obligatoria</strong>,
                  uses o no el seguro.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="mt-0.5 size-4 shrink-0 text-destructive/80" />
                <span>
                  <strong className="text-foreground">Meses de carencia y letra chica</strong>
                  justo cuando necesitas atención.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="mt-0.5 size-4 shrink-0 text-destructive/80" />
                <span>
                  <strong className="text-foreground">Depende de un empleador</strong>:
                  si eres freelance, estudiante o practicante, quedas fuera.
                </span>
              </li>
            </ul>
          </div>

          {/* Tarjeta FIBO */}
          <div className="flex flex-col gap-5 rounded-2xl border-2 border-primary/30 bg-primary/[0.03] p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="size-4" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Con FIBO
              </h3>
            </div>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <strong className="text-foreground">Cero costo de entrada</strong>:
                  tu cobertura base se gana con hábitos semanales.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <strong className="text-foreground">Pausa sin penalidad</strong>:
                  si una semana no puedes ahorrar o registrar, te espera sin cobrarte.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <strong className="text-foreground">Independiente de tu trabajo</strong>:
                  tu Reserva te pertenece a ti, sin importar tu contrato laboral.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
