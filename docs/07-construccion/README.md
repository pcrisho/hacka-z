# 07-construcción — de la decisión al artifact concreto

> Carpeta nueva (04 Set. 2026). Todo lo anterior (`02-ideacion`, `03-mvp`, `04-gtm`) definió **qué** construir y **por qué**. Esta carpeta traduce eso en **qué construir literalmente esta semana**: PRDs, sistema de diseño y esquemas de pantalla, para que empezar a codear (landing + prototipo) no dependa de decisiones sueltas repartidas en 5 documentos distintos.

## Por qué existen dos artifacts (landing + prototipo) y no uno solo

Son cosas distintas con objetivos distintos — no confundirlas:

| | Landing page | Prototipo MVP |
|---|---|---|
| **Objetivo** | Validar el supuesto más frágil del modelo: que FIBO puede crecer B2C (boca a boca) sin canal corporativo — supuesto ya identificado como el más frágil en `02-ideacion/historias-usuario-y-validacion.md` §4, última fila | Demostrar la propuesta de valor en el video pitch (3 min) y ante el jurado — es uno de los 3 entregables obligatorios de las bases (`PLAN-TRABAJO.md` §1) |
| **Obligatoriedad** | **No es un entregable de las bases.** Es una herramienta de validación de campo que el equipo ya se había propuesto (`historias-usuario-y-validacion.md` §4: "lanzar una landing page/lista de espera... y contar registros orgánicos + referidos") | **Sí es obligatorio** — sin MVP demostrable, la propuesta no se evalúa (`BASES-CONCURSO.md` §3) |
| **Esfuerzo relativo** | Bajo — una sola página, formulario de espera, tracking de referidos simple | Alto — es el corazón del sprint, el flujo crítico completo |
| **Cuándo construirla** | Puede ir primero: es más simple y genera señal de campo real mientras se construye el prototipo | Después o en paralelo, con prioridad si hay que elegir |

**Secuencia sugerida:** landing primero (o en paralelo desde ya) porque es rápida y empieza a generar la señal de boca a boca que necesitamos antes del 08 Set.; el prototipo es el bloque grande de la semana.

## Documentos de esta carpeta

1. **[`PRD-landing.md`](./PRD-landing.md)** — qué problema resuelve la landing, alcance, qué mide, qué queda fuera.
2. **[`PRD-mvp.md`](./PRD-mvp.md)** — PRD del prototipo codeado v3 (actualizado al alcance real: 4 tabs, rituales mindful, tribus, salida protegida y microseguro pay-as-you-go).
3. **[`design-system.md`](./design-system.md)** — identidad visual de FIBO: paleta, tipografía, tono, componentes clave.
4. **[`esquema-landing.md`](./esquema-landing.md)** — wireframe en texto de la landing, sección por sección.
5. **[`esquema-mvp.md`](./esquema-mvp.md)** — arquitectura completa de rutas y flujos del prototipo v3 (tabs + flujos dedicados), mapeado real-vs-simulado.
6. **[`decisiones-app-web.md`](./decisiones-app-web.md)** — decisiones técnicas del prototipo (navegación por tabs, estado en cliente con localStorage, integración Bedrock con fallback).
7. **[`customer-journey.md`](./customer-journey.md)** — customer journey de punta a punta (onboarding, loop de hábitos, comunidad/tribus, salida protegida, recompensa y momento de verdad).
8. **[`brandboard.html`](./brandboard.html)** — versión visual/interactiva de `design-system.md` (paleta con anotaciones de contraste, tipografía en vivo, tono, componentes, dirección de logo).
9. **[`stack-tecnico.md`](./stack-tecnico.md)** — Next.js 16 (App Router) + Vercel + shadcn/ui (Base UI) + NeonDB (waitlist).

> **Relación con `docs/10-features/`:** Las especificaciones de diseño granular y requerimientos por pantalla de cada una de las funcionalidades construidas viven en [`docs/10-features/`](../10-features/) (desde `01-dashboard-hoy-v2.md` hasta `10-comunidad-tribus-y-seguro-grupal.md`). Esta carpeta `07-construccion/` actúa como el marco maestro y gobernanza general.

## Qué no se resuelve aquí

- Copy final de marketing (vive en `05-entregables/` cuando se cierre).
- Decisiones de negocio o de producto ya cerradas — esas están en `docs/memoria/CONTEXTO-ACTUAL.md`, aquí solo se ejecutan.
