# AGENTS.md

Contexto para cualquier agente de IA (Claude Code, u otro) que colabore en este repositorio.

## Qué es este repo

Base de conocimiento y bitácora de trabajo de un equipo de 3 personas (Roberto Crisóstomo — líder, Franco Chávez, Israel Manrique) participando en la **Hackathon UCSUR – Pacífico Seguros × AWS: "El futuro de los seguros para la Generación Z"** (Ciclo 2026-2). No es un repositorio de código de producción — por ahora es documentación estratégica (research, ideación, plan de trabajo). El MVP técnico, cuando se decida el stack, probablemente viva en un subdirectorio o repo separado — no asumir stack sin confirmarlo.

## Fuentes de verdad — en este orden

0. **`docs/memoria/CONTEXTO-ACTUAL.md`** — fotografía del estado más reciente del proyecto (decisiones cerradas, hallazgos que más pesan, correcciones ya hechas, preguntas abiertas). Se reescribe cada sesión — léelo primero, siempre. `docs/memoria/bitacora/` es el historial de cómo evolucionó el pensamiento del equipo, fechado y **append-only** (nunca se edita una entrada ya escrita, solo se agregan entradas nuevas) — consultarlo cuando quieras entender el "por qué" detrás de una decisión, no solo el resultado.
1. **`docs/00-bases/BASES-CONCURSO.md`** — reglas oficiales del concurso, documento legal/contractual (fechas, criterios de evaluación, entregables obligatorios, descalificaciones, declaración jurada). **Es la única fuente de verdad para pesos de rúbrica, plazos y duraciones — decisión confirmada por el equipo (04 Set. 2026).** Ante cualquier conflicto con otro documento del repo, esto manda, sin excepción.
   - **`docs/00-bases/LANZAMIENTO.md`** — contenido de la presentación de kick-off (mismo comité, formato de slides). Se usa como contexto narrativo e inspiración (framing del reto, dinámica de mentorías, tarjetas de ideación) — **no como fuente de pesos de evaluación ni de plazos**, esos ya quedaron zanjados por `BASES-CONCURSO.md`. Ej.: el video de sustentación es de **hasta 3 minutos** (`BASES-CONCURSO.md` §6.2), no 5 minutos como sugería `MODELO-ONE-PAGER.md` — confirmado, no reabrir.
   - **`docs/00-bases/MODELO-ONE-PAGER.md`** y **`docs/00-bases/RECOMENDACIONES-PITCH.md`** — plantillas de estructura (secciones a cubrir en el one-pager y el pitch) útiles como esqueleto, siempre y cuando no contradigan una regla explícita de `BASES-CONCURSO.md`.
2. **`docs/01-research/insight-*.md`** — insumo cualitativo oficial que Pacífico Seguros entregó en el kick-off (01 Set. 2026, investigación Pacífico × La Chakra 2026). Incluye **dos lentes de arquetipo, ambas oficiales**, entregadas el mismo día: (a) arquetipos **psicológicos/de relación con el dinero** — Copiloto, Guardián, Sobreviviente, Arquitecto, Proveedor (`insight-arquetipos-oficiales.md`); (b) arquetipos **situacionales/de estilo de vida** — Freelancer/Creador Digital, Pet Parent, Estudiante/Primer Empleo, Viajero/Nómada Urbano (`insight-arquetipos-situacionales.md`). Tratar ambas como el ancla real del problema — no son alternativas en competencia sino dos cortes distintos del mismo público que el equipo debe combinar o priorizar explícitamente, no descartar.
3. **`docs/PLAN-TRABAJO.md`** — plan de sprint vigente, reparto de puntos por criterio, y el registro de decisiones (tabla de trazabilidad). Actualizar esta tabla cada vez que el equipo valide o descarte una idea — es el mecanismo de trazabilidad que el equipo pidió explícitamente.
4. **`1-07-2026/` y futuras carpetas con fecha** — notas diarias tipo bitácora (bóveda Obsidian). No reescribir el historial de estas notas; son el registro crudo del proceso.

## Convenciones

- **Idioma:** todo el contenido del repo (docs, commits, nombres de sección) va en español — el equipo y el jurado son de Perú.
- **Todo research nuevo debe citar fuente** (organización + año, o URL). No presentar cifras o afirmaciones de mercado sin atribución — el criterio de evaluación pondera explícitamente "evidencia e insights sólidos".
- **No inventar datos de campo.** Si no hay encuesta/entrevista real todavía, marcar explícitamente como "hipótesis a validar", nunca como hallazgo.
- **MVP = validar, no construir un producto completo.** Ver principio de alcance en `docs/PLAN-TRABAJO.md` §4 antes de sugerir arquitecturas complejas.
- **Estructura de `docs/`:** `memoria` (contexto vigente + bitácora) → `00-bases` (reglas/equipo) → `01-research` (insumo oficial + research propio) → `02-ideacion` (problem statements, territorios de solución) → `03-mvp` → `04-gtm` → `05-entregables` (versión final de one-pager y guion de video) → `06-ideas` (notas crudas sin validar) → `07-construccion` (PRDs, design system y esquemas de pantalla para landing + prototipo, decisión 04 Set. 2026). Nuevo contenido va en la carpeta que corresponda a esa fase del Doble Diamante, no en la raíz.
- **Antes de mover/borrar notas de `1-07-2026/` u otras carpetas fechadas:** son notas personales del líder del equipo — tratar con el mismo cuidado que "unfamiliar files" de otro usuario: no descartar contenido sin confirmar.
- **`docs/memoria/bitacora/` es append-only.** Al cerrar una sesión de trabajo con cambios relevantes, agregar una entrada nueva fechada (`YYYY-MM-DD.md`) — nunca editar una entrada ya escrita. Y actualizar (reescribiendo) `docs/memoria/CONTEXTO-ACTUAL.md` para que la próxima sesión arranque con el estado real.

## Al iniciar una sesión nueva sobre este proyecto

Leer en este orden: `docs/memoria/CONTEXTO-ACTUAL.md` → `docs/PLAN-TRABAJO.md` (especialmente la tabla de decisiones y preguntas abiertas) → `docs/00-bases/BASES-CONCURSO.md` si hay dudas de reglas. Confirmar con el usuario si el registro de decisiones tiene entradas más recientes que las que estos archivos describen — el plan es un documento vivo durante todo el sprint (01–08 Set. 2026). Al cerrar la sesión con cambios relevantes, actualizar `docs/memoria/CONTEXTO-ACTUAL.md` y agregar una entrada nueva en `docs/memoria/bitacora/`.
