"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Card, CardContent } from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/ui/message"
import { SpiralIcon } from "@/components/landing/brand-mark"

export function MomentoDeVerdadView() {
  const [descripcion, setDescripcion] = useState("")
  const [foto, setFoto] = useState<File | null>(null)
  const [estado, setEstado] = useState<"idle" | "cargando" | "listo">("idle")
  const [respuesta, setRespuesta] = useState("")

  async function enviar() {
    setEstado("cargando")
    try {
      const res = await fetch("/api/agente", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          modo: "momento-de-verdad",
          mensajes: [
            {
              role: "user",
              content: `${descripcion || "No di más detalle."}${
                foto ? " (adjunté una foto)" : ""
              }`,
            },
          ],
        }),
      })
      const data = await res.json()
      setRespuesta(data.mensaje)
    } catch {
      setRespuesta(
        "Esto lo revisa un asesor de verdad, te contactamos en breve."
      )
    } finally {
      setEstado("listo")
    }
  }

  if (estado === "listo") {
    return (
      <div className="flex flex-1 flex-col gap-4 p-4">
        <Message>
          <MessageAvatar>
            <SpiralIcon className="size-5" />
          </MessageAvatar>
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>{respuesta}</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
        {/* La escalación a humano se muestra siempre, explícita — nunca se
            oculta, aunque la resolución real esté simulada (esquema-mvp.md
            pantalla 6). */}
        <Card className="border-border">
          <CardContent className="text-sm text-muted-foreground">
            Un asesor humano revisa cada caso con peso económico o emocional
            real — esto no lo resuelve el agente solo.
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <p className="text-muted-foreground">
        Cuéntale a Fibo qué pasó — puedes adjuntar una foto.
      </p>
      <Field>
        <FieldLabel htmlFor="descripcion">¿Qué pasó?</FieldLabel>
        <Input
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Se me malogró la laptop del trabajo"
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="foto">Foto (opcional)</FieldLabel>
        <input
          id="foto"
          type="file"
          accept="image/*"
          capture="environment"
          onChange={(e) => setFoto(e.target.files?.[0] ?? null)}
          className="text-sm"
        />
      </Field>
      <Button
        size="lg"
        disabled={estado === "cargando" || !descripcion}
        onClick={enviar}
      >
        {estado === "cargando" ? "Enviando…" : "Enviar a Fibo"}
      </Button>
    </div>
  )
}
