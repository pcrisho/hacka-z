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
        "rounded-xl border border-border bg-card p-6 text-card-foreground",
        className
      )}
    >
      {children}
    </div>
  )
}
