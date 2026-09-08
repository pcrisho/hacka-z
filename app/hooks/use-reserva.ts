"use client"

import { useContext } from "react"

import { ReservaContext } from "@/lib/reserva/context"

export function useReserva() {
  const ctx = useContext(ReservaContext)
  if (!ctx) {
    throw new Error("useReserva debe usarse dentro de <ReservaProvider>")
  }
  return ctx
}
