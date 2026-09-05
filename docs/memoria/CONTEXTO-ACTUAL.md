# Contexto actual del proyecto

> **Léeme primero si eres un agente nuevo entrando a este repo.** Este archivo se **reescribe** cada sesión de trabajo para reflejar el estado más reciente — es una fotografía del presente, no un historial. Para ver cómo llegamos aquí y por qué cambiaron las decisiones, ver `bitacora/` (esa sí es append-only, nunca se reescribe).
>
> Última actualización: 05 Set. 2026 (día 5 de 8 del sprint). Sesión anterior cerró con las 2 mentorías del 04 Set. y su propagación al repo; esta sesión corrigió los 10 hallazgos de una auditoría de consistencia externa (`memoria/auditoria-consistencia-2026-09-05.md`). No queda ninguna corrección conocida pendiente — el repo está en su estado más consistente hasta ahora.

## Qué es esto

Equipo de 3 personas (Roberto Crisóstomo — líder, Franco Chávez, Israel Manrique) participando en la Hackathon UCSUR – Pacífico Seguros × AWS: "El futuro de los seguros para la Generación Z" (Ciclo 2026-2). Repo de documentación estratégica — el MVP se construirá como prototipo codeado (HTML/React) dentro de este mismo repo, con Claude Code como colaborador directo de construcción (decisión del 04 Set.). Fuente de verdad completa en `AGENTS.md` (leer después de este archivo).

## Dónde estamos en el sprint

Día 5 de 8 (preselección el 08 Set.). **Ya se tuvieron las 2 sesiones de mentoría (Luiggi, Cami)** — primera evidencia externa real del proyecto, síntesis completa en `02-ideacion/hallazgos-mentoria-04-set.md`. A partir de ahí se corrigieron 2 decisiones (arquitectura de distribución, encuadre de la recompensa), se añadió un territorio de producto nuevo (comunidades + seguro grupal, fuera de alcance del MVP), y se relanzó el instrumento de campo (`01-research/instrumento-campo.md` v2). Después se corrió una **auditoría de consistencia externa** (agente sin contexto previo, solo lectura) que encontró 10 hallazgos de propagación incompleta y cifras sin fuente sólida — todos corregidos el mismo día (detalle en `bitacora/2026-09-05.md`).

**El instrumento de campo v2 sigue sin desplegarse** — es la tarea más urgente y bloqueante para la próxima sesión, no un tema de documentación.

## Decisiones ya cerradas — no reabrir salvo que la mentoría o el campo las contradigan

| Decisión | Resumen | Detalle |
|---|---|---|
| Arquetipo | Guardián + Estudiante/Primer Empleo con Ansiedad Financiera | `PLAN-TRABAJO.md` §6 |
| MVP | Web app / prototipo clicable, un solo flujo crítico | `PLAN-TRABAJO.md` §5.1, alcance en `03-mvp/alcance-producto.md` |
| Cómo se construye el MVP | Prototipo **codeado** (HTML/React), no Figma — Claude Code construye junto a Roberto | `PLAN-TRABAJO.md` §7, decisión 04 Set. |
| Modelo de negocio | 3 capas: gratuita (adquisición) + microprima pay-as-you-go (ingreso directo) + conversión a productos tradicionales de Pacífico (motor real de rentabilidad, jugada de portafolio/marca) | `04-gtm/modelo-negocio-y-viabilidad.md` |
| Fuente de verdad para rúbrica/plazos | `BASES-CONCURSO.md` únicamente — video ≤3 min. `00-bases/LANZAMIENTO.md` es solo contexto narrativo, no puntaje | `AGENTS.md`, `PLAN-TRABAJO.md` §2, decisión 04 Set. |
| Agente conversacional | Llamada real a un LLM vía API, **no bloqueante**, con fallback a interacción simulada si falla/tarda; acotado a onboarding + primer filtro del momento de verdad, con escalamiento humano obligatorio | `02-ideacion/historias-usuario-y-validacion.md` §6, cerrado 04 Set. |
| Nombre de marca | **FIBO** (espiral de Fibonacci — crecimiento compuesto de hábitos; doble uso como nombre del producto y del agente conversacional) | `02-ideacion/historias-usuario-y-validacion.md` §0, cerrado 04 Set. |
| Framing de identidad | **Bienestar puro** — "billetera con propósito" descartada explícitamente, no se retoma | `02-ideacion/identidad-billetera-con-proposito.md` (marcado descartado), cerrado 04 Set. |
| Recompensa | Por niveles: contenido/insignia (bajo) → suscripción digital tipo mindfulness/productividad (medio, respaldado por `insight-sabias-que.md` §5) → sesión real de bienestar (alto). **Actualizado tras mentoría:** la recompensa ya no es un mecanismo paralelo al microseguro — es el paso previo gratuito que gana el derecho a que se le ofrezca | `03-mvp/alcance-producto.md` §3, cerrado 04 Set., actualizado 04 Set. tras mentoría (`02-ideacion/hallazgos-mentoria-04-set.md` §3.2) |
| Arquitectura de distribución | **FIBO es una app independiente, no vive dentro de Yape.** Yape se integra solo como pasarela de pago y canal de descubrimiento (banner/referido) | `02-ideacion/hallazgos-mentoria-04-set.md` §3.1, corregido 04 Set. tras mentoría |
| Honor system del MVP | El tracking de hábitos es autodeclarado — se acepta explícitamente como limitación conocida, no se resuelve con wearables/evidencia en el hackathon | `07-construccion/PRD-mvp.md` §4.1, `hallazgos-mentoria-04-set.md` §3.5 |
| Transparencia de datos | El onboarding anuncia desde el inicio que se ofrecerán microseguros según la constancia del usuario — sin sorpresas, con consentimiento | `02-ideacion/historias-usuario-y-validacion.md` §2 (Historia de Camila, paso 2), `hallazgos-mentoria-04-set.md` §3.6 |

**Territorio de producto nuevo, fuera de alcance del MVP:** comunidades + seguro grupal contextual (ej. seguro de pichanga entre amigos) y ayudar a dejar malos hábitos, no solo construir buenos — validados en mentoría, documentados como visión a mediano plazo en `historias-usuario-y-validacion.md` §8, no se construyen en el hackathon.

**Lo que queda pendiente de validar con mentores/campo:** el nivel alto de la recompensa, la conversión real banner-de-Yape→instalación (ya no "alcance resuelto de fábrica", ver `04-gtm/modelo-negocio-y-viabilidad.md` §3.2), y las preguntas nuevas de `01-research/instrumento-campo.md` v2 (comunidad, transparencia de datos, valor real del hábito de bienestar mental) — ver `problem-statement-v1.md` y `hallazgos-mentoria-04-set.md` §5 para el detalle.

## El territorio de solución (resumen)

Producto de bienestar financiero + salud/salud mental: micro-hábitos semanales (3, acotados: ahorro chico, actividad física, práctica breve de bienestar mental) que hacen crecer una "Reserva de Bienestar" — cobertura base gratuita, sin descuentos. Al alcanzar un nivel, una recompensa gana el derecho a que se le ofrezca al usuario un microseguro pay-as-you-go pausable sin penalidad (recompensa y microseguro son una sola progresión, no dos mecanismos paralelos — corrección 04 Set. tras mentoría). **FIBO es una app independiente, no vive embebida en Yape** — Yape se integra solo como pasarela de pago y canal de descubrimiento. Detalle completo, historias de usuario (Camila, Diego) y guion de pitch v1 en `02-ideacion/` y `05-entregables/guion-pitch-v1.md`.

## Hallazgos de research que más pesan

1. Pacífico es 1° en salud/EPS (**42.3%, confirmado contra Memoria Integrada 2025**), 2° en mercado general (**22.6%, jun. 2025 — actualizado, ya no usar el rango "24-25%"**).
2. Informalidad laboral (~70% general, 84.9% en jóvenes 14-24) es el driver estructural de la brecha de penetración (Perú 2.05%, 2T 2025 — corregido 05 Set., ya no usar "2.5%" — vs. OECD 6.2%).
3. Pacífico ya compite en el mismo territorio: Quererte Sano (contenido sin earning) y Seguro Salud Yape (S/9.90/mes, prima fija) — el diferencial real es "se gana con hábitos y se pausa sin penalidad".
4. El abismo de transición laboral (60 días de ventana, 3 meses de carencia) es un momento de vulnerabilidad real y bien documentado.
5. Yape, BCP y Pacífico son subsidiarias de Credicorp — la **visibilidad** del canal (banner) está resuelta de fábrica; la **instalación** de FIBO (app independiente) y la conversión posterior no lo están.
6. Betterfly valida la mecánica hábito→cobertura, **no** la adquisición B2C (es B2B2E desde 2020) — Nubank es la analogía de mecanismo de crecimiento B2C, no un producto idéntico.
7. 40% de peruanos de 18-24 años tiene dificultades clínicas de salud mental (Sapien Labs 2026); 84.9% de jóvenes de 14-24 años trabaja informalmente (más agudo que el 70% general); accountability social aumenta 65-95% el cumplimiento de metas — respaldo directo al hábito ancla de bienestar mental y al territorio de comunidades (`01-research/insight-salud-mental-y-habito-gen-z.md`).

Fuentes completas en `01-research/`.

## Correcciones importantes hechas hasta ahora (para no repetir errores)

- No hay "incubación" como premio — solo efectivo (S/2,000 / S/1,500).
- Betterfly no valida adquisición B2C (ver hallazgo #6).
- "Uso de APIs = 20% del Demoday" no es cifra oficial.
- Un bloque de texto pegado en sesión (04 Set.) simulaba una transcripción completa con ediciones de archivo que nunca ocurrieron realmente en el repo — verificado contra `git status`/`git diff` y descartado como fuente de verdad; el contenido sustantivo (guion de pitch, preguntas de negocio) sí se rescató y se usó, por indicación explícita del usuario.
- `BASES-CONCURSO.md` vs. `00-bases/LANZAMIENTO.md`: rúbricas y duración de video distintas — resuelto a favor de `BASES-CONCURSO.md` (único, video 3 min).
- "El seguro de salud depende del historial crediticio" — **incorrecto**, corregido en todo el repo (04 Set., reforzado 05 Set. tras auditoría al detectar 2 residuos en `PLAN-TRABAJO.md` mismo). La suscripción médica se evalúa por declaración jurada de salud, no por scoring bancario; la barrera real es la informalidad laboral/falta de planilla. El historial crediticio sí importa, pero para beneficios cruzados dentro de Credicorp (BCP↔Pacífico), no para el seguro de salud en sí. Detalle en `01-research/pacifico-friccion-usuario-eps.md` §3.
- Penetración de seguros en Perú citada como "2.5% del PBI" sin fuente verificable — **corregido 05 Set.**: el dato real, confirmado contra el informe trimestral primario de APESEG (2T 2025), es **2.05%**. Propagado a `pacifico-seguros-research.md`, `industria-seguros-comparativa.md`, `territorios-solucion.md`, `guion-pitch-v1.md`.
- Cifra de Nubank "CAC $0" (usada como precedente de adquisición B2C) no tenía fuente y era un framing de RR.PP. — **corregido 05 Set.**: el F-1 de Nu Holdings ante la SEC (2021) reporta ~US$5/cliente, 80-90% de adquisición orgánica. Detalle en `territorios-solucion.md` §3.

## Preguntas abiertas / próximos pasos

Ver `PLAN-TRABAJO.md` §8. Las que bloquean avance real, en orden de prioridad:
1. **Desplegar `01-research/instrumento-campo.md` v2** — sigue sin hacerse, es la tarea #1. Ya incorpora las preguntas de la mentoría (comunidad, transparencia de datos, valor real del hábito mental, ubicación, rubro).
2. Restructurar `05-entregables/guion-pitch-v1.md` según las notas de cierre ya dejadas (abrir con el usuario, no con la cifra; Betterfly sin protagonismo; respuesta lista a "¿por qué no Quererte Sano?").
3. Construir landing + prototipo siguiendo `07-construccion/` (PRDs, design system, esquemas de pantalla y customer journey ya definidos, todos actualizados y auditados) — sin bloqueadores de decisión pendientes para arrancar. Landing primero (genera señal B2C real), prototipo en paralelo/después con prioridad.

**Nota para la próxima sesión:** no hay correcciones de consistencia pendientes conocidas — la auditoría del 05 Set. (`memoria/auditoria-consistencia-2026-09-05.md`) ya se resolvió por completo. Si se hace una auditoría de seguimiento más adelante, conviene esperar a que haya más contenido nuevo (campo desplegado, prototipo construido) para que valga la pena repetirla.

## Mapa de documentos

```
docs/
├── memoria/              ← estás aquí (CONTEXTO-ACTUAL.md + bitacora/ + auditoria-consistencia-2026-09-05.md)
├── 00-bases/              BASES-CONCURSO.md (única fuente de rúbrica/plazos) + LANZAMIENTO.md/plantillas (contexto, no puntaje) + equipo
├── 01-research/           insumo oficial + research propio + instrumento de campo v2 (a desplegar 05 Set.) + insight-salud-mental-y-habito-gen-z.md
├── 02-ideacion/           territorio de solución, historias de usuario, identidad, problem-statement-v1.md, hallazgos-mentoria-04-set.md
├── 03-mvp/                alcance del producto + referencias UI/UX de Pacífico (Ref 1: Corporativo, Ref 2: Quererte Sano) con sus DESIGN.md
├── 04-gtm/                modelo de negocio y viabilidad
├── 05-entregables/        guion-pitch-v1.md (borrador, con notas de reestructuración pendientes) — one-pager y video final van aquí
├── 06-ideas/              notas crudas sin validar del equipo
├── 07-construccion/       PRDs (landing + MVP), design system, esquemas de pantalla, customer-journey.md — puente a construcción
└── PLAN-TRABAJO.md         plan de sprint + registro de decisiones (tabla de trazabilidad)
```

## Cómo trabajar en este repo

Todo en español, citar fuentes siempre, nunca inventar datos de campo (marcar "hipótesis a validar"), MVP = validar no construir completo. Ver convenciones completas en `AGENTS.md`.
