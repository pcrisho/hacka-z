# Problem Statement v2 — versión definitiva post-mentoría (05 Set. 2026)

> Supersede a [`problem-statement-v1.md`](./problem-statement-v1.md), que era un brief preparado para la mentoría del 04 Set. (9-11am) y ya cumplió su función — esa mentoría fue la única programada en el sprint (`PLAN-TRABAJO.md` §3), así que no queda una "próxima mentoría" para la que preparar preguntas. Este documento es la fuente de verdad que alimenta el one-pager, el guion de pitch y las decisiones de construcción del MVP de aquí al 08 Set. **Sigue sin haber data primaria propia** (encuesta/entrevistas de `01-research/instrumento-campo.md` v2 aún sin desplegar, bloqueador #1 del proyecto) — este documento se apoya en research secundario con fuente + el insumo oficial del kick-off + la primera evidencia externa real (mentoría de Luiggi y Cami). Eso debe decirse así de frente al jurado, no disfrazarse de hallazgo de campo propio.

## Problem Statement

**Los jóvenes peruanos en su primer empleo o en trabajo independiente necesitan protegerse frente a imprevistos de salud, bienestar y herramientas de trabajo, porque la informalidad laboral (84.9% en jóvenes de 14-24 años) hace que el seguro nunca les llegue "por defecto" y ellos mismos deben ganárselo con una decisión activa — pero hoy no lo logran porque los productos existentes (prima fija mensual, letra chica, sin el subsidio del empleador que sí tiene quien está en planilla) no encajan con ingresos variables ni con la desconfianza que ya arrastra la categoría.**

*Precisión (verificado 04 Set., `01-research/pacifico-friccion-usuario-eps.md` §3):* la barrera de acceso a un seguro de salud **no es el historial crediticio** — la suscripción médica se evalúa por declaración jurada de salud, no por scoring bancario. La barrera real es la informalidad laboral (falta de planilla/RUC). El historial crediticio sí es relevante, pero para un problema distinto y complementario: el acceso a beneficios cruzados dentro del ecosistema Credicorp (ver `04-gtm/modelo-negocio-y-viabilidad.md` §1, capa 3).

## Segmento

Arquetipo cruzado — **confirmado sin cambios el 05 Set. tras evaluar explícitamente alternativas** (deportista/runner, ahorro grupal tipo "junta"), sin encontrar evidencia de mentoría que las respalde (`PLAN-TRABAJO.md` §7, fila 05 Set.): **Guardián** (piensa en la semana, quiere sentir control) + **Estudiante/Primer Empleo con Ansiedad Financiera**. Alternativa de respaldo si el campo lo exige más adelante: Sobreviviente + Freelancer/Creador Digital.

## Solución (resumen, detalle en `05-entregables/guion-pitch-v1.md`)

**FIBO** — espiral de Fibonacci, crecimiento compuesto de hábitos; nombre de marca y del agente conversacional ("Fibo, tu copiloto de bienestar"). Tagline: *"Cada hábito suma al siguiente. Tu Reserva crece en espiral."* (`07-construccion/design-system.md` §8).

Cobertura de salud/bienestar que se gana con hábitos semanales, no con planilla formal, sin costo en su capa base. Al alcanzar cierto nivel de constancia, el usuario recibe una recompensa no monetaria y, como consecuencia de eso, se le ofrece un microseguro personalizado pay-as-you-go, pausable sin penalidad — la recompensa gana el derecho a la oferta, no son dos mecanismos paralelos (corrección de la mentoría, `hallazgos-mentoria-04-set.md` §3.2). El onboarding anuncia esto desde el inicio, sin sorpresas (`historias-usuario-y-validacion.md` §2).

**FIBO es una app independiente, no vive dentro de Yape** — Yape se integra solo como pasarela de pago de las microprimas y canal de descubrimiento vía banner/referido (corrección de la mentoría, propuesta por Luiggi: *"Fibo no necesita ser cliente de Pacífico para pertenecer"*). No reemplaza lo que Pacífico ya construyó (Quererte Sano, Seguro Salud Yape) — lo completa con el mecanismo que a ambos les falta: progresión por comportamiento.

**Alcance confirmado, sin ampliar en esta iteración:** el agente conversacional se mantiene acotado a onboarding + primer filtro del "momento de verdad", con escalamiento humano obligatorio — no se extiende a soporte general de consultas (beneficios, seguros), decisión confirmada el 05 Set. por falta de señal de demanda y para no diluir el foco del pitch (`PLAN-TRABAJO.md` §7).

## Qué ya está validado con evidencia vs. qué sigue siendo supuesto de diseño

**Con evidencia (secundaria, con fuente):**
- Informalidad ~70% general, **84.9% en jóvenes de 14-24 años** — driver estructural (`01-research/insight-salud-mental-y-habito-gen-z.md` §2).
- Penetración de seguros en Perú: **2.05%** (APESEG, 2T 2025, cifra primaria — corrige el "2.5%" sin fuente que circulaba antes) vs. 6.2% OECD.
- Pacífico lidera EPS (**42.3%**, Memoria Integrada 2025) pero no el mercado general (**22.6%**, Moody's Local jun. 2025, 2° lugar).
- Seguro Salud Yape y Quererte Sano ya existen y no cubren el mecanismo "hábito → cobertura" (`pacifico-microseguros-yape-red-sanna.md`).
- Betterfly valida la mecánica hábito→cobertura, **no** la adquisición B2C (B2B2E desde 2020, +5,000 empresas cliente).
- Nubank como precedente de *mecanismo* de crecimiento B2C (no de producto idéntico): ~US$5/cliente de CAC, 80-90% adquisición orgánica (F-1 SEC 2021) — no "CAC $0" como se citaba antes sin fuente.
- 40% de peruanos de 18-24 años tiene dificultades clínicas de salud mental y el accountability social aumenta 65-95% el cumplimiento de metas (Sapien Labs 2026) — respalda el hábito ancla de bienestar mental.

**Primera evidencia externa real, no secundaria (mentoría de Luiggi y Cami, 04 Set., `hallazgos-mentoria-04-set.md`):**
- La separación FIBO/Yape es más defendible que el embedding que asumía el research temprano.
- El honor system del tracking (autodeclarado) es una limitación conocida y aceptada para el MVP, no algo que el hackathon deba resolver con wearables/evidencia fotográfica.
- Comunidades + seguro grupal contextual (ej. seguro de pichanga) y ayudar a dejar malos hábitos resonaron fuerte con ambos mentores, pero quedan documentados como visión de producto fuera de alcance del MVP (`historias-usuario-y-validacion.md` §8) — no se construyen en el hackathon.

**Todavía supuesto de diseño, sin validar con usuarios reales (lo que el instrumento de campo v2 debe cerrar):**
- Que el framing "cobertura que crece con hábitos" genere más confianza que un descuento.
- Que la sesión real de bienestar (recompensa de nivel alto) funcione igual de bien en frío, sin empleador de por medio, que en el modelo B2B2E de Betterfly — el nivel medio (suscripción digital) mitiga parte de este riesgo, pero no lo elimina.
- Que el boca a boca (B2C puro) pueda escalar apoyado en el canal Yape/Credicorp, sin canal corporativo — la *visibilidad* del banner está resuelta de fábrica (subsidiarias Credicorp), la *instalación* y conversión posterior no.
- Las preguntas nuevas de `01-research/instrumento-campo.md` v2: comunidad, transparencia de datos, valor real percibido del hábito de bienestar mental, ubicación, rubro.

## Decisiones de marca y alcance cerradas post-mentoría (05 Set., no reabrir salvo evidencia nueva)

| Área | Cierre |
|---|---|
| Tipografía | `Bricolage Grotesque` (display) + `Geist` (cuerpo/UI) + `Geist Mono` (utilitaria) |
| Logo/lockup | Fuera de alcance de producción; dirección concreta cerrada (wordmark + ícono de espiral áurea, lockup horizontal único) — Roberto lo explora en Behance con el criterio de `FIBO Logo Brief` |
| Paleta | Hereda tokens reales de Quererte Sano (cyan + verdes de vitalidad), validada WCAG 2.1 para los 5 componentes prioritarios |
| Tono de voz | Validado contra el copy ya escrito, sin hallazgos |
| Stack técnico | Next.js + Vercel + shadcn/ui tematizado + NeonDB (solo waitlist/referidos de landing); `app/` ya scaffolded y themeado |

Detalle completo en `07-construccion/design-system.md` y `07-construccion/stack-tecnico.md`.

## Qué se congela para construir (base para MVP, one-pager y pitch)

- Nombre de marca: **FIBO** — cerrado.
- Framing: **bienestar puro** — cerrado, "billetera con propósito" descartada explícitamente.
- Recompensa: **por niveles**, gana el derecho a la oferta de microseguro (no paralela) — cerrado como estructura; el nivel alto (sesión real de bienestar) es el único punto de la mecánica que el campo aún podría ajustar.
- Arquitectura de distribución: **app independiente**, Yape solo como pasarela/canal — cerrado.
- Agente conversacional: **llamada real a un LLM vía API, no bloqueante, con fallback simulado**, acotado a onboarding + momento de verdad, sin ampliar a soporte general — cerrado.
- Arquetipo y los 3 hábitos (ahorro individual, actividad física, bienestar mental): **confirmados sin cambios** — cerrado.

## Qué sigue bloqueando avance real

Ver `PLAN-TRABAJO.md` §8. En orden de prioridad: **(1)** desplegar `01-research/instrumento-campo.md` v2 — meta n=15-20 respuestas + 2-3 entrevistas antes del 08 Set., sigue siendo el criterio de mayor peso en ambas rúbricas; el resto de preguntas abiertas del proyecto son de construcción (landing + prototipo sobre `app/`), no de definición de producto.
