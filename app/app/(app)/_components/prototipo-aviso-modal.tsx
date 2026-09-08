"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, Laptop, Lock, ShieldCheck, Sparkles } from "lucide-react"

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

interface PrototipoAvisoModalProps {
  /** Clave en localStorage para no volver a interrumpir tras aceptar */
  storageKey?: string
  /** Si debe abrirse forzosamente (e.g. si el usuario hace clic en un botón informativo) */
  forzarApertura?: boolean
  /** Callback al cerrar el aviso */
  onClose?: () => void
}

export function PrototipoAvisoModal({
  storageKey = "fibo_aviso_prototipo_visto_v1",
  forzarApertura = false,
  onClose,
}: PrototipoAvisoModalProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (forzarApertura) {
      setOpen(true)
      return
    }

    try {
      const yaVisto = window.localStorage.getItem(storageKey)
      if (!yaVisto) {
        // Pequeño delay de 300ms para entrada suave tras montar la vista
        const timer = setTimeout(() => setOpen(true), 300)
        return () => clearTimeout(timer)
      }
    } catch {
      // Si localStorage está bloqueado o restringido, no interrumpir
    }
  }, [storageKey, forzarApertura])

  function handleEntendido() {
    try {
      window.localStorage.setItem(storageKey, "true")
    } catch {
      // Ignorar errores en modo incógnito estricto
    }
    setOpen(false)
    onClose?.()
  }

  return (
    <Dialog open={open} onOpenChange={(val) => {
      setOpen(val)
      if (!val) handleEntendido()
    }}>
      <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-md p-6 rounded-3xl border-border/80 shadow-2xl bg-card">
        <DialogHeader className="flex flex-col items-center text-center gap-3">
          {/* Badge superior oficial */}
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20 text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5"
          >
            Hackathon UCSUR × Pacífico × AWS
          </Badge>

          {/* Icono central de seguridad */}
          <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center ring-4 ring-primary/5 shadow-inner">
            <ShieldCheck className="size-8" />
          </div>

          <div className="space-y-1">
            <DialogTitle className="font-heading text-lg sm:text-xl font-bold text-foreground">
              Estás explorando un prototipo interactivo
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground max-w-xs mx-auto">
              FIBO es una prueba de concepto técnica y de diseño. Tu privacidad está completamente protegida.
            </DialogDescription>
          </div>
        </DialogHeader>

        {/* Bloques informativos de privacidad y datos */}
        <div className="flex flex-col gap-3 py-1">
          <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/40 p-3 text-left">
            <div className="size-8 rounded-xl bg-background flex items-center justify-center shrink-0 text-primary shadow-xs">
              <Lock className="size-4" />
            </div>
            <div className="text-xs space-y-0.5">
              <p className="font-semibold text-foreground">
                Cero recolección de datos personales
              </p>
              <p className="text-muted-foreground leading-relaxed text-[11.5px]">
                No enviamos ni almacenamos tu número de celular, nombres ni correos en servidores externos ni bases de datos de terceros.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/40 p-3 text-left">
            <div className="size-8 rounded-xl bg-background flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400 shadow-xs">
              <Laptop className="size-4" />
            </div>
            <div className="text-xs space-y-0.5">
              <p className="font-semibold text-foreground">
                Almacenamiento 100% local
              </p>
              <p className="text-muted-foreground leading-relaxed text-[11.5px]">
                Toda la experiencia (hábitos declarados, racha y Reserva de Bienestar) vive únicamente en la memoria local de este navegador (<code className="font-mono text-[10px] bg-background px-1 py-0.5 rounded">localStorage</code>).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/40 p-3 text-left">
            <div className="size-8 rounded-xl bg-background flex items-center justify-center shrink-0 text-amber-600 dark:text-amber-400 shadow-xs">
              <Sparkles className="size-4" />
            </div>
            <div className="text-xs space-y-0.5">
              <p className="font-semibold text-foreground">
                Libertad para probar con datos ficticios
              </p>
              <p className="text-muted-foreground leading-relaxed text-[11.5px]">
                Puedes ingresar cualquier número (ej. <span className="font-semibold text-foreground">999 999 999</span>, código SMS <span className="font-semibold text-foreground">1234</span>) sin riesgo de spam ni cobros.
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-col gap-2 pt-2">
          <Button
            type="button"
            size="lg"
            className="w-full h-11 text-sm font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm cursor-pointer"
            onClick={handleEntendido}
          >
            <CheckCircle2 className="size-4 mr-2" />
            Entendido, explorar prototipo
          </Button>
          <p className="text-center text-[10.5px] text-muted-foreground">
            🔒 Entorno sandbox de demostración técnica segura
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
