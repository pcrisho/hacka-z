---
name: cerrar-sesion
description: Cerrar una sesión de trabajo en el repo FIBO (Hackathon UCSUR-Pacífico Seguros-AWS). Usar cuando el usuario diga "cerremos por hoy", "documenta esto", "antes de irme", "resumen de cierre", "termina la sesión", o pida explícitamente dejar todo documentado antes de terminar. Escribe una entrada nueva en la bitácora, reescribe CONTEXTO-ACTUAL.md, agrega filas al registro de decisiones si aplica, y verifica que los artifacts publicados (brandboard, logo brief, u otros que se agreguen) sigan sincronizados con sus archivos locales.
---

# Cerrar sesión — FIBO

Formaliza lo que `AGENTS.md` ya pide al cerrar una sesión con cambios relevantes, y añade una verificación que `AGENTS.md` no cubre: que los artifacts publicados no queden desincronizados de sus archivos locales.

No preguntes permiso para ejecutar estos pasos — es exactamente lo que esta skill fue invocada a hacer. Sí para el paso 3 si un artifact nuevo no tiene todavía una fila en la tabla de registro (ver abajo), tu criterio decide si merece guardarse localmente, siguiendo el patrón ya usado con `brandboard.html`.

## 1. Verificar qué cambió realmente

No documentes de memoria. Corre `git status` y `git diff` (staged y sin stage) sobre todo el repo — incluye `app/` si existe. Si algo relevante no está en el diff, no pasó de verdad en el filesystem; no lo escribas como si hubiera pasado.

## 2. Sincronizar artifacts publicados

La tabla de artifacts conocidos vive en `docs/07-construccion/design-system.md` §9 ("Registro de artifacts publicados"). Para cada fila:

- Si el archivo local (columna "Archivo local") aparece modificado en el `git diff` de esta sesión **y no se republicó ya** en esta misma conversación, republícalo ahora: `Artifact` con `action: "publish"`, el mismo `file_path`, y sin `url` si esta conversación fue la que lo publicó originalmente (mismo hilo → mismo path actualiza), o con la `url` de la tabla si vienes de una sesión/conversación distinta a la que lo publicó.
- Si se publicó un artifact **nuevo** en esta sesión que aún no está en la tabla, decide si amerita una copia local en `docs/07-construccion/` (criterio: ¿el equipo va a querer iterarlo en el editor sin pasar por el navegador, como `brandboard.html`? si sí, cópialo; si es un documento de una sola vez tipo brief, con el artifact alcanza) y agrega la fila correspondiente a la tabla, con su URL real (nunca inventar un placeholder).
- Si un artifact de la tabla ya no existe o dejó de ser relevante, márcalo como retirado en la tabla (no borres la fila silenciosamente — deja una nota corta de por qué).

## 3. Entrada nueva en la bitácora

Crea `docs/memoria/bitacora/YYYY-MM-DD-<slug-corto>.md` (fecha real de hoy; si ya existe una entrada con esa fecha de una sesión anterior del mismo día, usa un sufijo distinto, como ya se hizo con `2026-09-05-branding-cierre.md` / `2026-09-05-brandboard-y-stack.md` / `2026-09-05-theming-app.md`). **Nunca edites una entrada ya escrita** — el directorio es append-only.

Estructura a seguir (mismo formato que las entradas existentes, para que se pueda hojear la carpeta con expectativas consistentes):

```markdown
# DD Mmm. AAAA (sesión N) — Título corto de lo que se cerró

> Entrada de bitácora. **No editar después de escrita** — solo se agregan entradas nuevas con fecha nueva.

## Qué se pidió
## Qué se hizo
## Estado al cerrar
## Qué sigue
```

Sé concreto: cita archivos y secciones reales (`archivo.md` §N), no describas en abstracto. Si corregiste algo que ya estaba mal documentado, dilo — la bitácora es el historial real del proyecto, no un reporte de relaciones públicas.

## 4. Reescribir CONTEXTO-ACTUAL.md

No es un parche — es una fotografía del estado más reciente (así lo define su propio encabezado). Actualiza como mínimo:

- La línea de "Última actualización" (fecha + qué se cerró en esta sesión, en una frase).
- La sección de decisiones/estado de producto-diseño si esta sesión tocó algo de eso.
- "Preguntas abiertas / próximos pasos" — quita lo que ya se resolvió, agrega lo nuevo que quedó pendiente.
- El mapa de documentos, si se agregó un archivo nuevo que otras sesiones deberían saber que existe.

## 5. Registro de decisiones (si aplica)

Si esta sesión cerró una decisión real (de producto, diseño, arquitectura, negocio) — no solo un cambio de redacción — agrega una fila nueva en `docs/PLAN-TRABAJO.md` §7, con fecha, decisión, razón y alternativas descartadas. **Nunca edites una fila existente** — es un registro de trazabilidad, el mismo principio append-only que la bitácora.

## 6. Cierre con el usuario

Termina con un resumen corto (no un volcado de todo lo anterior): qué quedó documentado, qué artifacts se sincronizaron (o por qué no hizo falta), y si algo quedó abierto para la próxima sesión que valga la pena que el usuario sepa antes de cerrar.
