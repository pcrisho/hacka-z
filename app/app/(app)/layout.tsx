import type { ReactNode } from "react"

import { ReservaProvider } from "@/lib/reserva/context"
import { AppHeader } from "./_components/app-header"
import { SessionGuard } from "./_components/session-guard"

export default function AppPrototipoLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <ReservaProvider>
      <div className="mx-auto flex min-h-svh max-w-md flex-col">
        <AppHeader />
        <main className="flex flex-1 flex-col">
          <SessionGuard>{children}</SessionGuard>
        </main>
      </div>
    </ReservaProvider>
  )
}
