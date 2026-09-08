import type { ReactNode } from "react"

import { BottomNav } from "./_components/bottom-nav"

export default function TabsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1">{children}</div>
      <BottomNav />
    </div>
  )
}
