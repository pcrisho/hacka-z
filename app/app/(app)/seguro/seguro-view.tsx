"use client"

import { useRouter } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { useReserva } from "@/hooks/use-reserva"

export function SeguroView() {
  const router = useRouter()
  const { state, dispatch } = useReserva()
  const { seguro } = state

  if (!seguro.ofrecido) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 p-4 text-center">
        <p className="text-muted-foreground">
          Todavía no tienes un microseguro ofrecido — llega como consecuencia
          de una recompensa desbloqueada.
        </p>
        <Button variant="secondary" onClick={() => router.push("/hoy")}>
          Volver a Hoy
        </Button>
      </div>
    )
  }

  const encendido = seguro.activo && !seguro.pausado

  return (
    <div className="flex flex-1 flex-col gap-6 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Tu microseguro pay-as-you-go</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-muted-foreground">
            Se paga vía Yape solo las semanas que lo activas. Pausarlo no
            tiene penalidad — tu Reserva y tu historial siguen intactos.
          </p>

          <div className="flex items-center justify-between rounded-2xl border border-border p-4">
            <div className="flex flex-col gap-1">
              <p className="font-medium">
                {encendido ? "Activo esta semana" : "Pausado"}
              </p>
              {!encendido && seguro.activo && (
                <Badge variant="secondary" className="w-fit">
                  Pausado, no cancelado
                </Badge>
              )}
            </div>
            <Switch
              checked={encendido}
              onCheckedChange={(checked: boolean) =>
                dispatch({
                  type: checked ? "activar-seguro" : "pausar-seguro",
                })
              }
            />
          </div>
        </CardContent>
      </Card>

      <Button variant="secondary" onClick={() => router.push("/momento-de-verdad")}>
        Simular el momento de verdad
      </Button>
    </div>
  )
}
