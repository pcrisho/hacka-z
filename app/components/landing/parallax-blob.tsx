"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

// Fondo decorativo que se mueve a otra velocidad que el contenido al hacer
// scroll — nunca se aplica sobre texto/contenido real, solo sobre estas
// formas de fondo (así el motion se siente elaborado sin volverse ruidoso).
export function ParallaxBlob({
  color,
  className,
  speed = 60,
}: {
  color: string
  className?: string
  speed?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed])

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        aria-hidden="true"
        style={{ y, backgroundColor: color }}
        className={cn("absolute rounded-full opacity-20 blur-3xl", className)}
      />
    </div>
  )
}
