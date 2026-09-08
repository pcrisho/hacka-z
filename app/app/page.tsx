import type { Metadata } from "next"

import { SiteHeader } from "@/components/landing/site-header"
import { Hero } from "@/components/landing/hero"
import { Problema } from "@/components/landing/problema"
import { Mecanismo } from "@/components/landing/mecanismo"
import { PruebaSocial } from "@/components/landing/prueba-social"
import { Faq } from "@/components/landing/faq"
import { CtaFinal } from "@/components/landing/cta-final"
import { WaitlistForm } from "@/components/landing/formulario"
import { Footer } from "@/components/landing/footer"
import { getRecentRefCodes, getWaitlistCount } from "@/lib/waitlist"

export const metadata: Metadata = {
  title: "FIBO — Micro-hábitos que construyen tu respaldo",
  description:
    "La app de bienestar para la Generación Z. Convierte tus hábitos diarios de Bolsillo, Cuerpo y Mente en una Reserva de Bienestar y microseguros on-demand con Pacífico Seguros.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FIBO — Micro-hábitos que construyen tu respaldo",
    description:
      "Construye tu Reserva de Bienestar y accede a microseguros on-demand sin permanencia ni letra chica. Respaldado por Pacífico Seguros.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FIBO — Micro-hábitos que construyen tu respaldo",
    description:
      "Construye tu Reserva de Bienestar y accede a microseguros on-demand sin permanencia. Pacífico Seguros × UCSUR.",
  },
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const rawRef = params.ref
  const referredBy = typeof rawRef === "string" ? rawRef : undefined
  const [count, recentRefCodes] = await Promise.all([
    getWaitlistCount(),
    getRecentRefCodes(5),
  ])

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <Hero referredBy={referredBy} />
      <Problema />
      <Mecanismo />
      <PruebaSocial count={count} recentRefCodes={recentRefCodes} />
      <Faq />
      <CtaFinal>
        <WaitlistForm referredBy={referredBy} />
      </CtaFinal>
      <Footer />
    </div>
  )
}
