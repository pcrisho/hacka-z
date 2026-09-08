"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { BrandMark } from "@/components/landing/brand-mark"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: "#mecanismo", label: "Cómo funciona" },
    { href: "#problema", label: "Por qué FIBO" },
    { href: "#faq", label: "Dudas frecuentes" },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center" aria-label="FIBO - Inicio">
          <BrandMark />
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="h-4 w-px bg-border/60" />
          <a
            href="/ingresar?modo=iniciar"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Iniciar sesión
          </a>
          <a href="/ingresar?modo=registro" className={cn(buttonVariants({ size: "sm" }))}>
            Comenzar gratis
          </a>
        </nav>

        {/* Navegación Mobile (Menú Hamburguesa) */}
        <div className="flex items-center md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Abrir menú de navegación"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon-sm" }),
                "text-foreground"
              )}
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col justify-between p-6">
              <div className="flex flex-col gap-6">
                <SheetHeader className="p-0 text-left">
                  <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                  <SheetDescription className="sr-only">
                    Navegación principal de FIBO
                  </SheetDescription>
                  <a
                    href="#top"
                    onClick={() => setOpen(false)}
                    className="flex items-center"
                    aria-label="Ir al inicio"
                  >
                    <BrandMark />
                  </a>
                </SheetHeader>

                <nav className="flex flex-col gap-1 pt-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="my-2 border-t border-border/60" />
                  <a
                    href="/ingresar?modo=iniciar"
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    Iniciar sesión
                  </a>
                </nav>
              </div>

              <div className="pt-4 border-t border-border/60">
                <a
                  href="/ingresar?modo=registro"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "w-full justify-center text-sm font-semibold"
                  )}
                >
                  Comenzar gratis
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
