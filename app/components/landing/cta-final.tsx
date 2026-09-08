import type { ReactNode } from "react"
import Link from "next/link"

import { Panel } from "@/components/landing/panel"

export function CtaFinal({ children }: { children: ReactNode }) {
  return (
    <section id="registro" className="bg-primary px-6 py-16 sm:py-20 md:py-28 text-primary-foreground scroll-mt-16">
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 text-center">
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            El futuro de tu salud empieza hoy
          </h2>
          <p className="text-primary-foreground/90 text-balance">
            Únete a la comunidad de FIBO y sé de los primeros en transformar tus hábitos en respaldo médico.
          </p>
        </div>

        <Panel className="w-full bg-card text-card-foreground">
          {children}
        </Panel>

        <div className="flex items-center gap-3 pt-2 text-xs text-primary-foreground/80">
          <span>¿Ya tienes una cuenta?</span>
          <Link
            href="/ingresar?modo=iniciar"
            className="font-semibold underline underline-offset-4 hover:text-primary-foreground transition-colors"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </section>
  )
}
