import { cn } from "@/lib/utils"

// Ícono cerrado en docs/07-construccion/design-system.md §6: espiral áurea de
// 2 arcos, dorado + cyan de marca — el mismo trazo que ya usa brandboard.html.
export function SpiralIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <g transform="translate(0, 2.5)">
        <path
          d="M12 2C7 2 4 5 4 9c0 3 2 5 5 5"
          stroke="var(--chart-3)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M12 2c5 0 8 3 8 7 0 5-4 8-9 8-3.5 0-6-2-6-5"
          stroke="var(--primary)"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity=".55"
        />
      </g>
    </svg>
  )
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <SpiralIcon className="size-7" />
      <span className="font-heading text-lg font-extrabold tracking-tight text-primary">
        FIBO
      </span>
    </div>
  )
}
