import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

// Contenedor plano para la landing: borde de 1px, sin box-shadow. La
// elevación viene del contraste de superficie (Paper/Fog), no de sombras
// — disciplina tomada de la referencia estructural validada con el equipo.
export function Panel({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 bg-card p-5 sm:p-6 text-card-foreground shadow-sm",
        className
      )}
    >
      {children}
    </div>
  )
}
