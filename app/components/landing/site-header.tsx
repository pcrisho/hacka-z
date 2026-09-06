import { buttonVariants } from "@/components/ui/button"
import { BrandMark } from "@/components/landing/brand-mark"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center">
          <BrandMark />
        </a>
        <a href="#registro" className={cn(buttonVariants({ size: "sm" }))}>
          Únete a la lista de espera
        </a>
      </div>
    </div>
  )
}
