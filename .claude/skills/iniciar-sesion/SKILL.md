---
name: iniciar-sesion
description: Empezar una sesión nueva de trabajo en el repo FIBO (Hackathon UCSUR-Pacífico Seguros-AWS). Usar al inicio de cualquier sesión nueva sobre este repo, o cuando el usuario diga "ponme al día", "qué falta", "estado del proyecto", "en qué quedamos", "empecemos", antes de tomar cualquier acción de escritura. Lee el estado más reciente (CONTEXTO-ACTUAL.md, PLAN-TRABAJO.md, bitácora reciente), verifica que los artifacts publicados sigan vigentes, y reporta un resumen corto + próximo paso sugerido.
---

# Iniciar sesión — FIBO

Formaliza el protocolo de arranque que `AGENTS.md` ya describe en prosa ("Al iniciar una sesión nueva..."), y le suma una verificación que ese archivo no cubre: que los artifacts publicados no se hayan quedado desactualizados respecto al repo.

Este skill **es de lectura y reporte, no de escritura** — no edites nada todavía. La única excepción: si el mensaje que invocó la skill ya trae una tarea explícita, usa lo que leas aquí como contexto y sigue directo con esa tarea sin bloquear con preguntas que el estado leído ya responde.

## 1. Leer, en este orden

1. `AGENTS.md` (si esta sesión no lo leyó ya).
2. `docs/memoria/CONTEXTO-ACTUAL.md` — completo, es la fotografía más reciente.
3. `docs/PLAN-TRABAJO.md` §7 (solo las últimas 6-8 filas del registro de decisiones — no hace falta releer todo el historial) y §8 (preguntas abiertas/bloqueadores).
4. El archivo más reciente de `docs/memoria/bitacora/` por fecha de nombre — a veces tiene detalle que `CONTEXTO-ACTUAL.md` resumió de más; úsalo para llenar huecos, no lo repitas entero.

Si `CONTEXTO-ACTUAL.md` referencia una fecha/entrada de bitácora que no coincide con el archivo más reciente que encuentras en la carpeta, señálalo en el reporte — puede ser una sesión que no cerró bien (ver skill `cerrar-sesion`).

## 2. Verificar que los artifacts sigan vigentes

La tabla de artifacts conocidos vive en `docs/07-construccion/design-system.md` §9. Para cada uno:

- `Artifact` con `action: "read"` sobre la URL registrada.
- Si la lectura falla o el contenido no coincide con lo que describe el archivo local correspondiente (cuando existe copia local, ej. `brandboard.html`), no asumas que está bien — repórtalo como "artifact posiblemente desincronizado" en vez de omitirlo.
- No republiques nada en esta skill — eso es trabajo de `cerrar-sesion` o de la tarea que el usuario pida a continuación. Aquí solo se diagnostica.

## 3. Reportar — corto, no un volcado

Devuelve al usuario, en pocas líneas:

- Día del sprint (calcula desde la fecha de `CONTEXTO-ACTUAL.md` y `BASES-CONCURSO.md` si hace falta el rango total).
- Qué quedó cerrado en la sesión más reciente (1-3 bullets, no la lista completa de `CONTEXTO-ACTUAL.md`).
- El bloqueador #1 del proyecto en este momento (verifica si sigue siendo el mismo que la última vez o si cambió).
- Cualquier pregunta abierta real que quede (de §8 de `PLAN-TRABAJO.md` o de la última bitácora) — omite las que ya se resolvieron aunque el documento todavía las mencione de pasada.
- Estado de los artifacts (sincronizados / a revisar, del paso 2).
- Un próximo paso sugerido, concreto y accionable — no "seguir avanzando", sino el archivo o la acción específica que corresponde según lo que ya está definido.

No listes todas las decisiones cerradas del proyecto ni repitas contenido que el usuario puede leer él mismo en `CONTEXTO-ACTUAL.md` — el valor de este reporte es la síntesis y la verificación, no la repetición.
