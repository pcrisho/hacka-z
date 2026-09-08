import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    id: "gratis",
    pregunta: "¿FIBO realmente no me cuesta nada para empezar?",
    respuesta:
      "Totalmente. El registro, el seguimiento de hábitos diarios (mente, cuerpo, ahorro) y tu Reserva de Bienestar son 100% gratuitos. Al acumular constancia ganas el derecho a activar microseguros médicos de Pacífico vía Yape desde S/ 9.90/mes, sin contratos forzosos ni pagos por adelantado.",
  },
  {
    id: "tarjeta",
    pregunta: "¿Tengo que ingresar alguna tarjeta o cuenta de banco?",
    respuesta:
      "Para nada. Para registrarte y comenzar a cuidar tus hábitos solo necesitas tu número de celular o correo. Cero datos bancarios y cero cobros sorpresa.",
  },
  {
    id: "tribus",
    pregunta: "¿Puedo usar FIBO con mis amigos o en mi universidad?",
    respuesta:
      "¡Sí! Puedes crear o unirte a una Tribu con compañeros de tu universidad, instituto o grupo de amigos. Juntos asumen retos semanales y pueden activar Salidas Protegidas: seguros colectivos de accidentes para pichangas o eventos desde S/ 3.50 por persona vía Yape.",
  },
  {
    id: "pausa",
    pregunta: "¿Qué pasa si una semana se complica y no registro mis hábitos?",
    respuesta:
      "Cero culpa y cero penalidades. Tu respaldo entra automáticamente en modo 'Pausado'. No hay recargos ni intereses; cuando puedas retomar tu ritmo, tu protección acumulada te estará esperando intacta.",
  },
  {
    id: "respaldo",
    pregunta: "¿Quién respalda FIBO?",
    respuesta:
      "FIBO nace en el marco de la Hackathon UCSUR – Pacífico Seguros × AWS. Diseñada por y para la Generación Z, une la solidez aseguradora líder de Pacífico con una experiencia ágil, preventiva y humana.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-16 sm:py-20 md:py-24 scroll-mt-16">
      <div className="mb-12 flex flex-col gap-3 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Dudas frecuentes
        </h2>
        <p className="mx-auto max-w-md text-base text-muted-foreground text-balance sm:text-lg">
          Cero letra chica. Todo lo que necesitas saber antes de empezar.
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
