# 05 Set. 2026 (sesión 3, continuación) — Skills de inicio/cierre de sesión

> Entrada de bitácora. **No editar después de escrita** — solo se agregan entradas nuevas con fecha nueva.

## Qué se pidió

Formalizar como skills invocables el protocolo de arranque/cierre de sesión que `AGENTS.md` ya describía en prosa, y sumarle una verificación nueva: que los artifacts publicados (brandboard, logo brief) no queden desincronizados de sus archivos locales entre sesiones.

## Qué se hizo

1. **`.claude/skills/iniciar-sesion/SKILL.md`**: lee `CONTEXTO-ACTUAL.md` → `PLAN-TRABAJO.md` §7/§8 → última entrada de bitácora, verifica con `Artifact action:"read"` que los artifacts registrados sigan vigentes, y reporta un resumen corto + próximo paso — sin editar nada (skill de solo lectura/reporte).
2. **`.claude/skills/cerrar-sesion/SKILL.md`**: verifica cambios reales con `git status`/`git diff`, republica artifacts cuyo archivo local haya cambiado en la sesión, escribe una entrada nueva de bitácora (formato ya establecido), reescribe `CONTEXTO-ACTUAL.md`, y agrega filas nuevas a `PLAN-TRABAJO.md` §7 si hubo decisiones reales — todo append-only, nunca editando entradas/filas ya escritas.
3. **Se agregó una tabla de registro de artifacts** en `design-system.md` §9 (archivo local ↔ URL publicada) — es la fuente de verdad que ambas skills consultan; antes esa información solo vivía en el historial de conversación, invisible para una sesión nueva sin memoria.
4. Puente agregado en `AGENTS.md` (sección "Al iniciar una sesión nueva") apuntando a estas dos skills.

## Estado al cerrar

Skills creadas y documentadas. No se probaron todavía en una sesión nueva real (la primera prueba real ocurre quien las invoque en la próxima sesión) — si el formato de reporte o el criterio de sincronización de artifacts no resulta útil en la práctica, ajustar el `SKILL.md` correspondiente, no crear una tercera skill paralela.

## Qué sigue

Nada bloqueante. La próxima sesión sobre este repo es la primera oportunidad real de validar `iniciar-sesion` en la práctica.
