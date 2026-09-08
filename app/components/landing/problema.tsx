import { Check, X } from "lucide-react"

export function Problema() {
  return (
    <section id="problema" className="bg-secondary/40 py-16 sm:py-20 md:py-24 scroll-mt-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6">
        <div className="flex max-w-2xl flex-col gap-3 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Tu bienestar merece otra lógica
          </h2>
          <p className="text-base text-muted-foreground text-balance sm:text-lg">
            Si tu estilo de vida es flexible, tu protección también debería serlo. Sin ataduras, sin trámites infinitos y sin pagar por adelantado por algo que no sabes cuándo vas a usar.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {/* Tarjeta Tradicional */}
          <div className="flex flex-col gap-5 rounded-2xl border border-border/80 bg-card p-6 shadow-xs sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  <X className="size-4" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Los seguros de siempre
                </h3>
              </div>
              <span className="text-[11px] font-medium text-destructive bg-destructive/10 px-2 py-0.5 rounded-full">
                84.9% excluidos sin EPS
              </span>
            </div>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <X className="mt-0.5 size-4 shrink-0 text-destructive/80" />
                <span>
                  <strong className="text-foreground">Primas fijas obligatorias</strong> que castigan meses con ingresos bajos o variables.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="mt-0.5 size-4 shrink-0 text-destructive/80" />
                <span>
                  <strong className="text-foreground">Condiciones y letra chica</strong> justo cuando necesitas atención médica inmediata.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="mt-0.5 size-4 shrink-0 text-destructive/80" />
                <span>
                  <strong className="text-foreground">Atado a planilla corporativa</strong>: si freelanceas o estudias, quedas desprotegido.
                </span>
              </li>
            </ul>
          </div>

          {/* Tarjeta FIBO */}
          <div className="flex flex-col gap-5 rounded-2xl border-2 border-primary/30 bg-primary/[0.03] p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-4" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  La experiencia FIBO
                </h3>
              </div>
              <span className="text-[11px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                Microseguros On-Demand
              </span>
            </div>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <strong className="text-foreground">Ganas respaldo con tu día a día</strong>: pequeños hábitos de mente, cuerpo y ahorro.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <strong className="text-foreground">Microseguro médico pausable</strong>: desde S/ 9.90/mes por Yape, se pausa sin cobros sorpresa.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <strong className="text-foreground">Tribus y Salidas Protegidas</strong>: seguro colectivo para deportes y eventos desde S/ 3.50 por persona.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
