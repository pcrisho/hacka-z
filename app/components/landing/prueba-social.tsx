import { Badge } from "@/components/ui/badge"
import { AvatarCircles } from "@/components/ui/avatar-circles"

export function PruebaSocial({
  count,
  recentRefCodes,
}: {
  count: number
  recentRefCodes: string[]
}) {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-3 px-6 py-20 text-center">
      {count > 0 ? (
        <div className="flex flex-col items-center gap-3">
          {/* Avatares generados a partir del ref_code real de cada registro
              (nunca nombre/contacto) — nunca son fotos de stock ni datos
              inventados, ver PRD-landing.md §7. */}
          <AvatarCircles
            avatarUrls={recentRefCodes.map((code) => ({
              imageUrl: `https://api.dicebear.com/9.x/shapes/svg?seed=${code}`,
              profileUrl: "#registro",
            }))}
            numPeople={Math.max(0, count - recentRefCodes.length)}
          />
          <Badge className="text-sm">
            {count} {count === 1 ? "persona lista" : "personas listas"} para cambiar las reglas
          </Badge>
        </div>
      ) : (
        <Badge variant="secondary" className="text-sm">
          Sé de las primeras personas en sumarte
        </Badge>
      )}
      <p className="text-sm text-muted-foreground">
        Una comunidad de jóvenes construyendo un nuevo estándar de salud y respaldo en Perú. Recomendado de persona a persona.
      </p>
    </section>
  )
}
