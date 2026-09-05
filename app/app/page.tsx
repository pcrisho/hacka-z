import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="font-light">Cada hábito suma,</span>{" "}
            <span className="text-primary">tu Reserva crece</span>
          </h1>
          <p className="text-muted-foreground">
            Theming de FIBO aplicado — paleta, tipografía (Bricolage
            Grotesque + Geist) y radios ya salen de{" "}
            <code className="font-mono text-xs">app/globals.css</code>.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button>Registrar hábito</Button>
          <Button variant="secondary">Ver Reserva</Button>
          <Button variant="outline">Pausar top-up</Button>
          <Button variant="ghost">Cancelar</Button>
          <Button variant="destructive">Eliminar cuenta</Button>
          <Button variant="link">¿Por qué FIBO?</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Presiona <kbd>d</kbd> para alternar modo oscuro)
        </div>
      </div>
    </div>
  )
}
