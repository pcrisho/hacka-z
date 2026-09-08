import { createAmazonBedrock } from "@ai-sdk/amazon-bedrock"
import { generateText } from "ai"
import { NextResponse } from "next/server"
import { z } from "zod"

import {
  SYSTEM_PROMPTS,
  continuacionFallback,
  primerMensajeFallback,
  type ModoAgente,
} from "@/lib/agente/prompts"

const TIMEOUT_MS = 5000

const requestSchema = z.object({
  modo: z.enum(["onboarding", "momento-de-verdad"]),
  mensajes: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string(),
      })
    )
    .default([]),
})

function credencialesBedrockDisponibles() {
  return Boolean(
    process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
  )
}

function respuestaFallback(modo: ModoAgente, huboMensajes: boolean) {
  return NextResponse.json({
    real: false,
    mensaje: huboMensajes
      ? continuacionFallback()
      : primerMensajeFallback(modo),
  })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = requestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 })
  }

  const { modo, mensajes } = parsed.data

  // Sin credenciales de AWS todavía (pendiente de aprobación de acceso a
  // modelos en Bedrock) — no lo intentamos, respondemos directo con el
  // guion equivalente para que el flujo nunca se sienta bloqueado.
  if (!credencialesBedrockDisponibles()) {
    return respuestaFallback(modo, mensajes.length > 0)
  }

  const bedrock = createAmazonBedrock({
    region: process.env.AWS_REGION ?? "us-east-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  })

  try {
    const llamada = generateText({
      model: bedrock(process.env.BEDROCK_MODEL_ID ?? "amazon.nova-micro-v1:0"),
      system: SYSTEM_PROMPTS[modo],
      messages: mensajes.length > 0 ? mensajes : [{ role: "user", content: "Hola" }],
    })

    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), TIMEOUT_MS)
    )

    const { text } = await Promise.race([llamada, timeout])
    return NextResponse.json({ real: true, mensaje: text })
  } catch {
    // Llamada real falló o tardó de más — cae al guion, sin que el usuario
    // perciba un error (PRD-mvp.md §5: "no bloqueante").
    return respuestaFallback(modo, mensajes.length > 0)
  }
}
