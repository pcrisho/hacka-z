import { SiteHeader } from "@/components/landing/site-header"
import { Hero } from "@/components/landing/hero"
import { Problema } from "@/components/landing/problema"
import { Mecanismo } from "@/components/landing/mecanismo"
import { PruebaSocial } from "@/components/landing/prueba-social"
import { CtaFinal } from "@/components/landing/cta-final"
import { WaitlistForm } from "@/components/landing/formulario"
import { Footer } from "@/components/landing/footer"
import { getRecentRefCodes, getWaitlistCount } from "@/lib/waitlist"

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
      <Hero />
      <Problema />
      <Mecanismo />
      <PruebaSocial count={count} recentRefCodes={recentRefCodes} />
      <CtaFinal>
        <WaitlistForm referredBy={referredBy} />
      </CtaFinal>
      <Footer />
    </div>
  )
}
