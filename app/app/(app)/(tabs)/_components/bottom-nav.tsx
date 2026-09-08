"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, LineChart, User } from "lucide-react"

import { cn } from "@/lib/utils"

const ITEMS = [
  { href: "/hoy", label: "Hoy", icon: Home },
  { href: "/comunidad", label: "Comunidad", icon: Users },
  { href: "/progreso", label: "Progreso", icon: LineChart },
  { href: "/perfil", label: "Perfil", icon: User },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="sticky bottom-0 flex shrink-0 border-t border-border bg-background">
      {ITEMS.map((item) => {
        const activo = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium transition-colors",
              activo ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <item.icon className={cn("size-5", activo && "stroke-[2.5]")} />
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
