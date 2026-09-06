import type { ReactNode } from "react"

import { Panel } from "@/components/landing/panel"

export function CtaFinal({ children }: { children: ReactNode }) {
  return (
    <section id="registro" className="bg-primary px-6 py-28 text-primary-foreground">
      <div className="mx-auto flex max-w-md flex-col items-center gap-2 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Únete a la lista de espera
        </h2>
        <p className="mb-6 text-primary-foreground/85">
          Sin costo. Sin compromiso. Solo para saber cuándo abrimos.
        </p>
        <Panel className="w-full bg-card text-card-foreground">
          {children}
        </Panel>
      </div>
    </section>
  )
}
