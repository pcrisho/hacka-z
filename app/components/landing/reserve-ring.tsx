"use client"

import { useEffect, useState } from "react"

import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar"
import { SpiralIcon } from "@/components/landing/brand-mark"
import { cn } from "@/lib/utils"

// Es el componente más importante del design system (§5): la Reserva que
// crece por nivel. Aquí es puramente ilustrativo (marketing, no un dato de
// usuario real) — anima una sola vez al entrar en pantalla.
export function ReserveRing({ compact = false }: { compact?: boolean }) {
  const [value, setValue] = useState(8)

  useEffect(() => {
    const timeout = setTimeout(() => setValue(86), 400)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="relative flex flex-col items-center gap-3">
      <div className="relative">
        {!compact && (
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 scale-125 rounded-full bg-[radial-gradient(circle,var(--chart-3)_0%,transparent_70%)] opacity-25 blur-2xl"
          />
        )}
        <AnimatedCircularProgressBar
          value={value}
          gaugePrimaryColor="var(--primary)"
          gaugeSecondaryColor="var(--border)"
          className={cn(
            "[&_span]:hidden",
            compact ? "size-28" : "size-44 sm:size-52"
          )}
        />
        <SpiralIcon
          className={cn(
            "absolute inset-0 m-auto",
            compact ? "size-9" : "size-14 sm:size-16"
          )}
        />
      </div>
      {!compact && (
        <p className="max-w-52 text-center text-xs text-muted-foreground">
          Así crece tu Reserva, semana a semana.
        </p>
      )}
    </div>
  )
}
