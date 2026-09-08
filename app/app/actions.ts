"use server"

import { joinWaitlist } from "@/lib/waitlist"

export type WaitlistFormState = {
  status: "idle" | "success" | "error"
  message?: string
  refCode?: string
  fieldErrors?: Record<string, string[]>
}

export const initialWaitlistState: WaitlistFormState = { status: "idle" }

export async function joinWaitlistAction(
  _prevState: WaitlistFormState,
  formData: FormData
): Promise<WaitlistFormState> {
  const name = String(formData.get("name") ?? "")
  const contact = String(formData.get("contact") ?? "")
  const refInput = formData.get("ref")
  const referredBy = refInput ? String(refInput) : null

  try {
    const result = await joinWaitlist({ name, contact, referredBy })

    if (!result.ok) {
      return {
        status: "error",
        message: result.error,
        fieldErrors: result.fieldErrors,
      }
    }

    return { status: "success", refCode: result.refCode }
  } catch (error) {
    console.error("[Waitlist Action Error]", error)
    return {
      status: "error",
      message: "No se pudo registrar tu lugar. Intenta de nuevo.",
    }
  }
}
