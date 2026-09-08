import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    id: "gratis",
    pregunta: "¿FIBO realmente es gratis?",
    respuesta:
      "Sí, 100%. Tu Reserva de Bienestar y la cobertura básica se activan y crecen registrando hábitos semanales autodeclarados (ahorro chico, actividad física o bienestar mental). No pagas ninguna prima mensual para empezar ni te pediremos dinero para activarla.",
  },
  {
    id: "tarjeta",
    pregunta: "¿Tengo que registrar tarjeta de crédito o cuenta de banco?",
    respuesta:
      "No. Para unirte a la lista de espera y acceder al producto solo necesitas tu correo electrónico (y tu nombre si deseas). Cero datos bancarios y cero cobros sorpresa.",
  },
  {
    id: "pausa",
    pregunta: "¿Qué pasa si una semana se complica y no registro mi hábito?",
    respuesta:
      "Tu cobertura no se cancela ni se pierde: entra en modo 'Pausado' sin penalidad. No te cobramos recargos ni intereses; cuando puedas retomar tu ritmo, tu Reserva acumulada te estará esperando intacta.",
  },
  {
    id: "respaldo",
    pregunta: "¿Quién respalda FIBO?",
    respuesta:
      "FIBO es una iniciativa desarrollada en el marco de la Hackathon UCSUR – Pacífico Seguros × AWS. Está diseñada por y para la Generación Z, con la convicción de que la salud y la protección deben ser accesibles para quienes estudian, practican o trabajan de forma independiente.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-16 sm:py-20 md:py-24 scroll-mt-16">
      <div className="mb-12 flex flex-col gap-3 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <p className="mx-auto max-w-md text-base text-muted-foreground text-balance sm:text-lg">
          Cero letra chica. Todo lo que necesitas saber antes de sumarte a la lista.
        </p>
      </div>

      <Accordion className="rounded-2xl border border-border/80 bg-card shadow-xs">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="px-2">
            <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground py-5 px-4 hover:no-underline hover:text-primary">
              {faq.pregunta}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-5 text-sm leading-relaxed text-muted-foreground">
              {faq.respuesta}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
