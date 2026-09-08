"use client"

import { useState } from "react"
import confetti from "canvas-confetti"
import { Check, Coins, PiggyBank, Sparkles, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface ModalAlcanciaProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCompletar: (monto: number) => void
  ahorroAcumulado?: number
}

const MONTOS_SUGERIDOS = [
  { valor: 2, label: "S/ 2", detalle: "Café o pasaje optimizado" },
  { valor: 5, label: "S/ 5", detalle: "Gasto hormiga diario" },
  { valor: 10, label: "S/ 10", detalle: "Ahorro consciente extra" },
]

export function ModalAlcancia({
  open,
  onOpenChange,
  onCompletar,
  ahorroAcumulado = 45,
}: ModalAlcanciaProps) {
  const [montoSeleccionado, setMontoSeleccionado] = useState<number>(5)
  const [montoPersonalizado, setMontoPersonalizado] = useState<string>("")
  const [esPersonalizado, setEsPersonalizado] = useState(false)
  const [depositando, setDepositando] = useState(false)

  const montoFinal = esPersonalizado
    ? parseFloat(montoPersonalizado) || 0
    : montoSeleccionado

  function handleConfirmar() {
    if (montoFinal <= 0) return
    setDepositando(true)

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.65 },
      colors: ["#D4A24C", "#0099CC", "#01A355"],
    })

    setTimeout(() => {
      setDepositando(false)
      onCompletar(montoFinal)
      onOpenChange(false)
    }, 600)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xs sm:max-w-sm">
        <DialogHeader className="text-left">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="border-amber-500/30 bg-amber-500/10 text-[11px] font-medium text-amber-700 dark:text-amber-400"
            >
              <Coins className="mr-1 size-3 text-amber-600" /> Pilar Bolsillo
            </Badge>
          </div>
          <DialogTitle className="font-heading text-lg font-bold">
            Alcancía de Respaldo 🪙
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Ahorra un monto chico hoy y fortalece tu fondo de emergencias.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-1">
          {/* Card con acumulado del mes */}
          <div className="flex items-center justify-between rounded-2xl border border-amber-500/20 bg-linear-to-br from-amber-500/10 via-amber-500/5 to-transparent p-3.5">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400">
                <PiggyBank className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-muted-foreground">
                  Acumulado este mes
                </span>
                <span className="font-heading text-base font-extrabold text-foreground">
                  S/ {(ahorroAcumulado + (depositando ? montoFinal : 0)).toFixed(2)}
                </span>
              </div>
            </div>

            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="size-3.5" /> +{montoFinal > 0 ? `S/ ${montoFinal}` : "0"}
            </span>
          </div>

          {/* Selector de montos sugeridos */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-foreground">
              ¿Cuánto deseas apartar hoy?
            </span>
            <div className="grid grid-cols-3 gap-2">
              {MONTOS_SUGERIDOS.map((item) => {
                const activo = !esPersonalizado && montoSeleccionado === item.valor
                return (
                  <button
                    key={item.valor}
                    type="button"
                    onClick={() => {
                      setEsPersonalizado(false)
                      setMontoSeleccionado(item.valor)
                    }}
                    className={cn(
                      "flex flex-col items-center justify-center rounded-xl border p-2.5 transition-all cursor-pointer",
                      activo
                        ? "border-amber-500 bg-amber-500/15 shadow-xs ring-1 ring-amber-500/40 text-amber-900 dark:text-amber-200"
                        : "border-border/80 bg-card hover:bg-muted/50 text-foreground"
                    )}
                  >
                    <span className="font-heading text-sm font-bold">
                      {item.label}
                    </span>
                    <span className="text-[9px] text-muted-foreground text-center line-clamp-1">
                      {item.detalle}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Opción de monto libre */}
            <div className="mt-1 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setEsPersonalizado(true)}
                className={cn(
                  "text-[11px] font-medium underline-offset-2 transition-colors cursor-pointer",
                  esPersonalizado
                    ? "text-amber-600 font-semibold underline dark:text-amber-400"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Otro monto
              </button>
              {esPersonalizado && (
                <div className="relative flex-1">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-semibold">
                    S/
                  </span>
                  <Input
                    type="number"
                    min="1"
                    step="1"
                    placeholder="Ej. 15"
                    value={montoPersonalizado}
                    onChange={(e) => setMontoPersonalizado(e.target.value)}
                    className="h-8 pl-7 text-xs"
                    autoFocus
                  />
                </div>
              )}
            </div>
          </div>

          {/* Nota de honor system empática */}
          <p className="text-[10px] text-muted-foreground leading-tight bg-muted/40 rounded-xl p-2.5">
            💡 <strong>Compromiso de honor:</strong> FIBO registra tu ahorro para
            bonificar tu Reserva médica. Puedes transferirlo a tu chanchito de Yape
            o guardarlo en efectivo.
          </p>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            variant="outline"
            size="sm"
            className="text-xs cursor-pointer"
            onClick={() => onOpenChange(false)}
          >
            Cancelar
          </Button>
          <Button
            size="sm"
            disabled={depositando || montoFinal <= 0}
            className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold gap-1.5 cursor-pointer"
            onClick={handleConfirmar}
          >
            <Sparkles className="size-3.5" />
            <span>
              {depositando ? "Guardando…" : `Apartar S/ ${montoFinal.toFixed(2)}`}
            </span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
