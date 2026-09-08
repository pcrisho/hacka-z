"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { nivelParaPuntos } from "@/lib/reserva/context"
import { NIVELES_RECOMPENSA } from "@/lib/reserva/constants"
import { useReserva } from "@/hooks/use-reserva"

export function RecompensaView() {
  const router = useRouter()
  const { state, dispatch } = useReserva()

  const nivelId = nivelParaPuntos(state.reservaPuntos)
  const nivel = NIVELES_RECOMPENSA.find((n) => n.id === nivelId)
  const yaDesbloqueada = nivelId
    ? state.recompensasDesbloqueadas.includes(nivelId)
    : false

  useEffect(() => {
    if (nivelId && !yaDesbloqueada) {
      dispatch({ type: "desbloquear-recompensa", nivel: nivelId })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nivelId])

  if (!nivel) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 p-4 text-center">
        <p className="text-muted-foreground">
          Todavía no tienes una recompensa por reclamar — sigue con tus
          hábitos en <span className="font-medium">Hoy</span>.
        </p>
        <Button variant="secondary" onClick={() => router.push("/hoy")}>
          Volver a Hoy
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col gap-6 p-4">
      <Card>
        <CardHeader>
          <CardTitle>{nivel.titulo}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{nivel.detalle}</p>
        </CardContent>
      </Card>

      {/* La oferta aparece en el mismo espacio, nunca como pop-up sobre el
          flujo de hábitos — customer-journey.md §4. */}
      <Card className="border-primary/40 bg-primary/5">
        <CardHeader>
          <CardTitle>Esto también te ganaste</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-muted-foreground">
            Con tu constancia, FIBO tiene un microseguro pensado para ti — sin
            costo hasta que decidas activarlo, y lo puedes pausar cuando
            quieras, sin penalidad.
          </p>
          <Button
            onClick={() => {
              dispatch({ type: "ofrecer-seguro" })
              router.push("/seguro")
            }}
          >
            Ver mi microseguro
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
