import { ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"

// Marcador explícito de dónde va fotografía de producto real más adelante
// (mockups/capturas — nunca fotos de stock de personas, ver decisión de
// dirección visual del 05 Set.). Nunca se muestra como contenido terminado.
export function ImagePlaceholder({
  label,
  className,
}: {
  label: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-secondary/30 text-muted-foreground",
        className
      )}
    >
      <ImageIcon className="size-6" />
      <p className="text-sm">{label}</p>
    </div>
  )
}
