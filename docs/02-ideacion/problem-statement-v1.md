# Problem Statement v1 + brief para la mentoría (04 Set., 9-11am)

> **Superado por [`problem-statement-v2.md`](./problem-statement-v2.md) (05 Set. 2026).** Este documento cumplió su función como brief pre-mentoría — la mentoría del 04 Set. ya ocurrió y sus preguntas ya fueron respondidas (`02-ideacion/hallazgos-mentoria-04-set.md`), y era la única programada en el sprint. Se conserva sin editar por trazabilidad (qué se sabía antes vs. después de la mentoría), pero no es la fuente de verdad para one-pager, pitch o construcción — usar v2.
>
> Consolida en un solo documento lo que hasta ahora vivía repartido entre `territorios-solucion.md`, `historias-usuario-y-validacion.md` y `05-entregables/guion-pitch-v1.md`. Formato de problem statement tomado de `1-07-2026/INICIALIZATION.md` §9. **Sigue siendo v1**: no hay data primaria propia todavía (encuesta/entrevistas sin desplegar) — este documento se apoya en research secundario + insumo oficial del kick-off, y debe decirse así de frente a los mentores, no disfrazarse de hallazgo de campo.

## Problem Statement

**Los jóvenes peruanos en su primer empleo o en trabajo independiente necesitan protegerse frente a imprevistos de salud, bienestar y herramientas de trabajo, porque la informalidad laboral (~70%) hace que el seguro nunca les llegue "por defecto" y ellos mismos deben ganárselo con una decisión activa — pero hoy no lo logran porque los productos existentes (prima fija mensual, letra chica, sin el subsidio del empleador que sí tiene quien está en planilla) no encajan con ingresos variables ni con la desconfianza que ya arrastra la categoría.**

*Precisión (verificado 04 Set. 2026, `01-research/pacifico-friccion-usuario-eps.md` §3):* la barrera de acceso a un seguro de salud **no es el historial crediticio** — la suscripción médica se evalúa por declaración jurada de salud, no por scoring bancario. La barrera real es la informalidad laboral (falta de planilla/RUC). El historial crediticio sí es relevante, pero para un problema distinto y complementario: el acceso a beneficios cruzados dentro del ecosistema Credicorp (ver `04-gtm/modelo-negocio-y-viabilidad.md` §1, capa 3).

## Segmento

Arquetipo cruzado (decisión cerrada, `PLAN-TRABAJO.md` §6): **Guardián** (piensa en la semana, quiere sentir control) + **Estudiante/Primer Empleo con Ansiedad Financiera**. Alternativa de respaldo si el campo/mentoría lo exige: Sobreviviente + Freelancer/Creador Digital.

## Solución (resumen, detalle en `05-entregables/guion-pitch-v1.md`)

**FIBO** (nombre de marca cerrado 04 Set. — espiral de Fibonacci, simboliza el crecimiento compuesto de los hábitos). Cobertura de salud/bienestar que se gana con hábitos semanales, no con planilla formal, sin costo en su capa base. Al alcanzar cierto nivel de constancia, el usuario recibe una recompensa no monetaria y, como consecuencia de eso, se le ofrece un microseguro personalizado pay-as-you-go, pausable sin penalidad (la recompensa gana el derecho a la oferta, no son dos mecanismos paralelos — decisión de la mentoría, `hallazgos-mentoria-04-set.md` §3.2; detalle en `03-mvp/alcance-producto.md` §3). Es una **app independiente**, no vive dentro de Yape — Yape se integra como pasarela de pago para las microprimas y como canal de descubrimiento (`hallazgos-mentoria-04-set.md` §3.1). No reemplaza lo que Pacífico ya construyó (Quererte Sano, Seguro Salud Yape) — lo completa con el mecanismo que a ambos les falta: progresión por comportamiento.

## Qué ya está validado con evidencia (secundaria, con fuente) vs. qué es supuesto de diseño

**Con evidencia:**
- Informalidad ~70% general, **84.9% específico en jóvenes de 14-24 años** (cifra más aguda y más precisa para nuestro segmento, agregada 05 Set.) como driver estructural (`industria-seguros-comparativa.md`, `01-research/insight-salud-mental-y-habito-gen-z.md` §2).
- Pacífico lidera EPS (42.3%, confirmado contra Memoria 2025) pero no el mercado general (22.6%, jun. 2025).
- Seguro Salud Yape y Quererte Sano ya existen y no cubren el mecanismo "hábito → cobertura" (`pacifico-microseguros-yape-red-sanna.md`).
- Betterfly valida la mecánica hábito→cobertura, **no** la adquisición B2C (es B2B2E desde 2020).

**Todavía supuesto de diseño, no validado con usuarios reales:**
- Que el framing "cobertura que crece con hábitos" genere más confianza que un descuento.
- Que la sesión real de bienestar (recompensa de nivel alto) funcione igual de bien en frío, sin empleador de por medio, que en el modelo B2B2E de Betterfly — el nivel medio (suscripción digital) mitiga parte de este riesgo, pero no lo elimina.
- Que el boca a boca (B2C puro) pueda escalar apoyado en el canal Yape/Credicorp, sin canal corporativo.

## Preguntas concretas para los mentores de Pacífico (hoy, 9-11am)

No se llega con data de campo propia todavía — se llega con research secundario sólido y estas preguntas puntuales, que es justo lo que la dinámica de mentoría pide (`00-bases/LANZAMIENTO.md` §6: "trae preguntas concretas").

1. **Canal/distribución:** ¿Qué tan realista es, desde dentro de Pacífico, conseguir un espacio de banner dentro de Yape que dirija a una app independiente (FIBO)? ¿Qué tasa de conversión ven hoy en el banner de Seguro Salud Yape (para calibrar qué tan realista es esperar que alguien pase de "ve el banner" a "instala la app")?
2. **Recompensa:** ¿Un crédito de suscripción digital (nivel medio, tipo mindfulness/productividad) resuena más que una sesión real de bienestar (nivel alto), o al revés, para alguien que todavía no tiene un empleador de por medio subsidiando el beneficio?
3. **Respaldo actuarial:** si el mecanismo de "hábito → cobertura" se implementara de verdad (no en el MVP), ¿qué tan lejos está esto de algo que Pacífico podría respaldar internamente, vs. necesitar un partner tipo Chubb?
4. **Validación de campo:** dado que la encuesta/entrevistas propias siguen en curso, ¿qué señal mínima de campo consideraría el jurado suficiente para la preselección del 08 Set.?

## Qué se congela para poder avanzar a ideación del prototipo hoy (decisiones cerradas, 04 Set. madrugada)

- Nombre de marca: **FIBO** — cerrado, no reabrir.
- Framing: **bienestar puro** — cerrado, "billetera con propósito" descartada explícitamente, no se pregunta a mentores.
- Recompensa: **por niveles** (contenido/insignia → suscripción digital → sesión real de bienestar) — cerrado como estructura; el nivel alto sigue abierto a ajuste según pregunta 2 de arriba.
- Agente conversacional: **llamada real a un LLM vía API, no bloqueante, con fallback a interacción simulada** si la llamada falla o tarda — acotado a onboarding + primer filtro del "momento de verdad", con escalamiento humano explícito.
