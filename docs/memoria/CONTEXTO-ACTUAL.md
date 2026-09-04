# Contexto actual del proyecto

> **Léeme primero si eres un agente nuevo entrando a este repo.** Este archivo se **reescribe** cada sesión de trabajo para reflejar el estado más reciente — es una fotografía del presente, no un historial. Para ver cómo llegamos aquí y por qué cambiaron las decisiones, ver `bitacora/` (esa sí es append-only, nunca se reescribe).
>
> Última actualización: 04 Set. 2026, ~1am (día 4 de 8 del sprint, horas antes de la mentoría 9-11am).

## Qué es esto

Equipo de 3 personas (Roberto Crisóstomo — líder, Franco Chávez, Israel Manrique) participando en la Hackathon UCSUR – Pacífico Seguros × AWS: "El futuro de los seguros para la Generación Z" (Ciclo 2026-2). Repo de documentación estratégica — el MVP se construirá como prototipo codeado (HTML/React) dentro de este mismo repo, con Claude Code como colaborador directo de construcción (decisión del 04 Set.). Fuente de verdad completa en `AGENTS.md` (leer después de este archivo).

## Dónde estamos en el sprint

Día 4 de 8. **Hoy es el día de la mentoría (9-11am, oficinas Pacífico)** — se llega sin datos de campo propios (la encuesta/entrevistas de `01-research/instrumento-campo.md` sigue sin desplegarse), decisión consciente de usar la mentoría misma como mecanismo de validación en su lugar. Preguntas concretas preparadas en `02-ideacion/problem-statement-v1.md`.

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
| Recompensa | Por niveles: contenido/insignia (bajo) → suscripción digital tipo mindfulness/productividad (medio, respaldado por `insight-sabias-que.md` §5) → sesión real de bienestar (alto) | `03-mvp/alcance-producto.md` §3, cerrado 04 Set. |

**Nada de esto queda pendiente de validar con mentores salvo el nivel alto de la recompensa** (pregunta 2 de `problem-statement-v1.md`) y la conversión real del canal Yape (pregunta 1) — ver ese documento para el detalle.

## El territorio de solución (resumen)

Producto de bienestar financiero + salud/salud mental: micro-hábitos semanales (3, acotados: ahorro chico, actividad física, práctica breve de bienestar mental) que hacen crecer una "Reserva de Bienestar" — cobertura base gratuita, sin descuentos. Top-ups pay-as-you-go pausables para riesgos puntuales. Vive embebido en Yape. Detalle completo, historias de usuario (Camila, Diego) y guion de pitch v1 en `02-ideacion/` y `05-entregables/guion-pitch-v1.md`.

## Hallazgos de research que más pesan

1. Pacífico es 1° en salud/EPS (**42.3%, confirmado contra Memoria Integrada 2025**), 2° en mercado general (**22.6%, jun. 2025 — actualizado, ya no usar el rango "24-25%"**).
2. Informalidad laboral (~70%) es el driver estructural de la brecha de penetración (Perú 2.5% vs. OECD 6.2%).
3. Pacífico ya compite en el mismo territorio: Quererte Sano (contenido sin earning) y Seguro Salud Yape (S/9.90/mes, prima fija) — el diferencial real es "se gana con hábitos y se pausa sin penalidad".
4. El abismo de transición laboral (60 días de ventana, 3 meses de carencia) es un momento de vulnerabilidad real y bien documentado.
5. Yape, BCP y Pacífico son subsidiarias de Credicorp — el alcance del canal ya está resuelto de fábrica; lo que no está resuelto es la conversión dentro de él.
6. Betterfly valida la mecánica hábito→cobertura, **no** la adquisición B2C (es B2B2E desde 2020) — Nubank es la analogía de mecanismo de crecimiento B2C, no un producto idéntico.

Fuentes completas en `01-research/`.

## Correcciones importantes hechas hasta ahora (para no repetir errores)

- No hay "incubación" como premio — solo efectivo (S/2,000 / S/1,500).
- Betterfly no valida adquisición B2C (ver hallazgo #6).
- "Uso de APIs = 20% del Demoday" no es cifra oficial.
- Un bloque de texto pegado en sesión (04 Set.) simulaba una transcripción completa con ediciones de archivo que nunca ocurrieron realmente en el repo — verificado contra `git status`/`git diff` y descartado como fuente de verdad; el contenido sustantivo (guion de pitch, preguntas de negocio) sí se rescató y se usó, por indicación explícita del usuario.
- `BASES-CONCURSO.md` vs. `00-bases/LANZAMIENTO.md`: rúbricas y duración de video distintas — resuelto a favor de `BASES-CONCURSO.md` (único, video 3 min).
- "El seguro de salud depende del historial crediticio" — **incorrecto**, corregido en todo el repo (04 Set.). La suscripción médica se evalúa por declaración jurada de salud, no por scoring bancario; la barrera real es la informalidad laboral/falta de planilla. El historial crediticio sí importa, pero para beneficios cruzados dentro de Credicorp (BCP↔Pacífico), no para el seguro de salud en sí. Detalle en `01-research/pacifico-friccion-usuario-eps.md` §3.

## Preguntas abiertas / próximos pasos

Ver `PLAN-TRABAJO.md` §8. Las que bloquean avance real:
1. Desplegar `01-research/instrumento-campo.md` (encuesta + entrevistas) — sigue sin hacerse, retomar apenas termine la mentoría.
2. Incorporar el feedback de la mentoría de hoy a `02-ideacion/problem-statement-v1.md` y a los 3 defaults de trabajo (framing, recompensa) — puede mover el arquetipo o el territorio si el feedback es fuerte.
3. Construir landing + prototipo siguiendo `07-construccion/` (PRDs, design system, esquemas de pantalla ya definidos) — sin bloqueadores de decisión pendientes para arrancar. Landing primero (genera señal B2C real), prototipo en paralelo/después con prioridad.

## Mapa de documentos

```
docs/
├── memoria/              ← estás aquí (CONTEXTO-ACTUAL.md + bitacora/)
├── 00-bases/              BASES-CONCURSO.md (única fuente de rúbrica/plazos) + LANZAMIENTO.md/plantillas (contexto, no puntaje) + equipo
├── 01-research/           insumo oficial + research propio + instrumento de campo (sin desplegar aún)
├── 02-ideacion/           territorio de solución, historias de usuario, identidad, problem-statement-v1.md
├── 03-mvp/                alcance del producto (qué es real vs. simulado)
├── 04-gtm/                modelo de negocio y viabilidad
├── 05-entregables/        guion-pitch-v1.md (borrador) — one-pager y video final van aquí
├── 06-ideas/              notas crudas sin validar del equipo
├── 07-construccion/       PRDs (landing + MVP), design system inicial, esquemas de pantalla — puente a construcción
└── PLAN-TRABAJO.md         plan de sprint + registro de decisiones (tabla de trazabilidad)
```

## Cómo trabajar en este repo

Todo en español, citar fuentes siempre, nunca inventar datos de campo (marcar "hipótesis a validar"), MVP = validar no construir completo. Ver convenciones completas en `AGENTS.md`.
