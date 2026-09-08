import { Activity, Brain, PiggyBank } from "lucide-react"

import { Iphone } from "@/components/ui/iphone"
import { ReserveRing } from "@/components/landing/reserve-ring"

const habitos = [
  { icon: PiggyBank, label: "Bolsillo • Ahorro chico" },
  { icon: Activity, label: "Cuerpo • Movimiento diario" },
  { icon: Brain, label: "Mente • Pausa consciente" },
]

function PauseTrack() {
  return (
    <span className="relative h-1 flex-1 rounded-full bg-border">
      <span className="absolute top-1/2 right-0 size-3 -translate-y-1/2 rounded-full bg-primary" />
    </span>
  )
}

// Los 3 pasos representan el ciclo de bienestar de FIBO: hábitos cotidianos,
// acumulación de respaldo y acceso a protección real sin fricción.
export function Mecanismo() {
  return (
    <section id="mecanismo" className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-28 scroll-mt-16">
      <div className="mb-14 flex flex-col gap-3 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Tan simple como vivir bien
        </h2>
        <p className="mx-auto max-w-md text-base text-muted-foreground text-balance sm:text-lg">
          Tres pasos semanales para transformar tu estilo de vida en tranquilidad médica.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
        {/* Paso 1: registrar */}
        <div className="flex flex-col gap-4 md:pr-8">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Paso 1</span>
            <h3 className="font-heading text-lg font-semibold">
              Elige tus hábitos
            </h3>
            <p className="text-sm text-muted-foreground">
              Acciones simples a tu propio ritmo. Sin relojes inteligentes ni pruebas complejas: tú decides qué hábito sumar.
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
                    <span className="block text-xs font-bold text-foreground">150 pts en Reserva</span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">● Nivel 1 • Cobertura activa</span>
                  </div>
                </div>
              }
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Paso 2</span>
            <h3 className="font-heading text-lg font-semibold">
              Haz crecer tu Reserva
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Cada hábito suma puntos a tu espiral de constancia. Al alcanzar un nivel, desbloqueas el derecho a estar protegido.
            </p>
          </div>
        </div>

        {/* Paso 3: cobertura ganada */}
        <div className="flex flex-col justify-between gap-6 md:pl-8">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Paso 3</span>
            <h3 className="font-heading text-lg font-semibold">
              Protección cuando la necesitas
            </h3>
            <p className="text-sm text-muted-foreground">
              Desbloquea telemedicina 24/7 y microseguros médicos desde S/ 9.90/mes vía Yape, respaldados por Pacífico Seguros.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-xl border border-border/80 bg-card p-4 shadow-xs">
            <div className="flex items-center gap-3 text-xs">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Activo</span>
              <PauseTrack />
              <span className="font-medium text-muted-foreground">Pausado</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Modo pausa anti-ansiedad:</strong> La vida no es lineal. Si una semana no llegas,
              tu cobertura se pausa intacta y te espera sin cobrarte ni un sol.
            </p>
          </div>
        </div>
      </div>

      {/* Bloque Comunitario: Tribus & Salida Protegida */}
      <div className="mt-12 rounded-2xl border border-primary/25 bg-primary/[0.03] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <span>👥 Ecosistema Comunitario</span>
            <span className="size-1 rounded-full bg-primary" />
            <span>Tribus & Salida Protegida</span>
          </div>
          <h3 className="font-heading text-xl font-bold text-foreground">
            Cumplir metas es más fácil cuando no vas solo
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Crea tu Tribu con compañeros de universidad o amigos, sumen retos grupales y activen <strong className="text-foreground">Salidas Protegidas</strong>: un seguro colectivo on-demand de Pacífico para pichangas o eventos desde <strong className="text-foreground">S/ 3.50 por persona</strong>, cobrado por Yape y compartido al instante por WhatsApp.
          </p>
        </div>
        <div className="shrink-0">
          <a
            href="/ingresar?modo=registro"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 transition-colors"
          >
            Crear mi Tribu →
          </a>
        </div>
      </div>
    </section>
  )
}
