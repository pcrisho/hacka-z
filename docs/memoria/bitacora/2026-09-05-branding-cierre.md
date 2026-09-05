# 05 Set. 2026 (sesión 2) — Cierre de branding: tagline, logo, contraste, fuente y tono

> Entrada de bitácora. **No editar después de escrita** — solo se agregan entradas nuevas con fecha nueva.

## Qué se pidió

Cerrar 5 temas de identidad visual y verbal que quedaban abiertos o ambiguos en `07-construccion/design-system.md` y documentos relacionados — a diferencia de la auditoría de consistencia de la sesión anterior (`2026-09-05.md`), esta sesión sí debía decidir y editar, no solo señalar.

## Qué se decidió y cerró

1. **Tagline propio de FIBO.** El equipo, al describir el producto en vivo durante la mentoría con Cami, usó literalmente la premisa de Betterfly ("queremos que tú vivas tu mejor vida" — `4-07-2026/RETROALIMENTACION - 2 - CAMI/RETROALIMENTACION.md` líneas 6-9), justo lo que la mentora pidió evitar ("quítale protagonismo a Betterfly"). Esa frase ya no aparecía en `guion-pitch-v1.md` (se había corregido el 04 Set. junto con el resto de menciones a Betterfly), pero no existía ninguna línea propia que la reemplazara. Se define: **"Cada hábito suma al siguiente. Tu Reserva crece en espiral."** (corta: "Crece en espiral."), anclada en la espiral de Fibonacci/crecimiento compuesto en vez de en una aspiración genérica de bienestar. Cerrado en `design-system.md` §8, insertado en `guion-pitch-v1.md` (cierre del video) y en `esquema-landing.md` §1 (hero, que quedaba con el copy sin cerrar).
2. **Logo/lockup.** Se evaluó abrir una exploración de branding dado que quedan pocos días de sprint, y se decidió mantenerlo fuera de alcance de producción — pero se cerró la ambigüedad de "tratamiento tipográfico simple" con una dirección concreta y no bloqueante: wordmark en Poppins bold + ícono de espiral áurea de 2-3 arcos (el mismo del anillo de progreso, reutilizado como marca) + un solo lockup horizontal. `design-system.md` §6.
3. **Contraste/accesibilidad de la paleta heredada.** Se calculó el ratio WCAG 2.1 de las combinaciones que usan los 5 componentes prioritarios de §5. Los tokens de color en sí son correctos (son reales, ya validados en producción por Pacífico) — el hallazgo real es de *uso*: dorado (`#D4A24C`, 2.32:1) falla incluso como texto grande, y verde-medio/terracota (~3.3:1) fallan como texto normal. Se resuelve sin tocar ningún token: esos 3 colores quedan documentados explícitamente como relleno/ícono/chip-con-fondo-tintado, nunca texto plano sobre fondo claro. Blanco sobre cyan500 (3.27:1) se mantiene porque es un patrón que Quererte Sano ya usa en producción, limitado a botones píldora negrita ≥16px. Nueva sección `design-system.md` §2.1.
4. **Riesgo de licencia de fuente.** `Foco`/`Foco Trial` es la tipografía real de Pacífico, pero es una fuente de prueba sin licencia de uso/redistribución confirmada. Se preguntó al usuario directamente si el equipo tenía acceso legal (ej. kit de marca oficial del hackathon) — la respuesta fue que no. Se decidió: **Poppins** (Google Fonts, libre) pasa a ser la tipografía principal de titulares; `Foco` queda documentado como upgrade opcional e intercambiable si apareciera un kit oficial con licencia confirmada antes de grabar el video. `design-system.md` §3.
5. **Tono de voz.** Se revisó el copy ya escrito en `esquema-mvp.md`, `esquema-landing.md` y los diálogos de `historias-usuario-y-validacion.md` contra las 4 reglas de §4 (sin jerga de seguros, nunca alarmista, primera persona cercana, sin lenguaje de descuento) — sin hallazgos. Las menciones de "prima"/"microprima"/"descuento" encontradas son uso analítico interno (explicar el modelo), no copy de cara al usuario. Se deja la validación documentada en §4 para que quede registrada, no solo verificada de palabra.

## Qué NO se hizo (fuera del alcance pedido)

No se tocó research de producto/negocio, ni el instrumento de campo (sigue siendo la tarea #1 pendiente, ver `CONTEXTO-ACTUAL.md`). Esta sesión fue exclusivamente identidad visual y verbal.

## Estado al cerrar

Los 5 temas de branding quedan cerrados con decisión y archivo editado — no quedan pendientes de branding conocidos. Fila de decisiones correspondiente en `PLAN-TRABAJO.md` §7 (05 Set. 2026, 5 filas nuevas).

## Qué sigue (para la próxima sesión)

1. Desplegar `01-research/instrumento-campo.md` v2 — sigue siendo la tarea más urgente y bloqueante, sin relación con esta sesión.
2. Si el equipo consigue un kit de marca oficial de Pacífico con licencia confirmada para `Foco`, reemplazar `Poppins` por `Foco` en `design-system.md` §3 — el cambio es intercambiable, no requiere rediseñar nada más.
3. Construir la landing/prototipo puede usar directamente el tagline, la dirección de logo y las reglas de contraste ya cerradas — no hay bloqueadores de decisión de branding para empezar a codear.
