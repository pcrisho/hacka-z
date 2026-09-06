# 05 Set. 2026 (sesión 4) — Problem statement v2, landing v1 construida y rediseñada, tooling de diseño

> Entrada de bitácora. **No editar después de escrita** — solo se agregan entradas nuevas con fecha nueva.

## Qué se pidió

Cerrar el problem statement (quedaba enmarcado como brief pre-mentoría, ya desactualizado), y luego empezar a construir sobre `app/` — primero la landing. A medida que avanzó la sesión, el pedido se refinó varias veces: de "landing funcional" a "landing con impacto visual real, no genérica", con validaciones de dirección en cada vuelta.

## Qué se hizo

**1. Problem statement v2** (`docs/02-ideacion/problem-statement-v2.md`): reemplaza a `problem-statement-v1.md` como fuente de verdad. v1 estaba escrito como brief para la mentoría del 04 Set. (ya ocurrida, única del sprint) con una sección de preguntas a mentores ya respondidas, y no reflejaba las correcciones de cifras/marca del 05 Set. v1 se conservó intacto por trazabilidad (mismo criterio que `identidad-billetera-con-proposito.md`), solo se le agregó una nota de "superado por v2" al inicio. Fila nueva en `PLAN-TRABAJO.md` §7 documentando el reemplazo; `PLAN-TRABAJO.md` §8 ítem 6 corregido (decía que no existía un problem statement consolidado — ya no era cierto).

**2. Landing v1 construida sobre `app/`** siguiendo `esquema-landing.md`/`PRD-landing.md`: hero, problema, mecanismo (hábitos/Reserva/cobertura), prueba social, formulario de lista de espera, footer. Backend real: NeonDB (`app/lib/db.ts`, `app/lib/waitlist.ts`) con una tabla `waitlist` creada de forma perezosa (`CREATE TABLE IF NOT EXISTS`), Server Action (`app/app/actions.ts`) con validación `zod`, generación de código de referido y atribución (solo si el `ref_code` del link existe de verdad — nunca se confía en un `?ref=` inventado). Verificado end-to-end contra la BD real: alta, referido válido, rechazo de referido inventado, conteo — con limpieza de las filas de prueba después (la tabla quedó como estaba, en 0).

**3. Tres rediseños sucesivos de la landing**, cada uno gatillado por feedback directo del usuario:

- **Primera pasada de pulido:** se agregaron componentes de `shadcn` (Field, Card, Badge) y `@magicui` (anillo de progreso animado para la Reserva, avatares, confeti, blur-fade) para reemplazar el esqueleto plano inicial. Se descubrió que `@tailark` (headers/heroes/ilustraciones) está pagado — se pivoteó a `@magicui` (gratis).
- **Segunda pasada — disciplina estructural:** el usuario marcó la landing como "demasiado básica" pidiendo algo tipo Steve Jobs. Se instaló el plugin oficial `frontend-design@claude-plugins-official` y la skill de terceros `senlindesign/taste-skill` (requirió Playwright MCP — 2 reconfiguraciones hasta apuntar al Chromium correcto: el canal `chrome` del sistema no existe en esta máquina, se resolvió con `--executable-path` al binario descargado por `npx playwright install chromium`). El usuario pegó una referencia que resultó ser de **Brex** (no Betterfly, como creía) — se verificó contra el HTML real guardado en `docs/03-mvp/ux-ui-reference-4/` (paleta verde/menta de Betterfly, nada que ver con el naranja "Ember" de Brex) antes de aplicar nada. Dirección validada: disciplina de Brex (un solo acento, sin sombras, bordes de 1px, radio 12px consistente) con los colores de FIBO ya cerrados — nunca el naranja de Brex ni la paleta de Betterfly.
- **Tercera pasada — anti-slop:** se corrió la skill `frontend-design` en modo evaluación (no build) sobre el código ya construido. Encontró tells concretos de "diseño genérico de IA" ya presentes: eyebrows en mayúsculas sobre cada título, `BlurFade` repetido en cada sección/tarjeta, el mismo bloque de layout espejado 3 veces, blobs decorativos sin relación con el contenido. Se corrigieron los 4: los "Paso N" en mayúsculas se reemplazaron por los primeros términos de Fibonacci (1, 1, 2) como numeral fantasma tipográfico (ligado al propio nombre de marca, no chrome genérico); el motion se concentró en un solo momento orquestado (el hero); los 3 bloques de mecanismo pasaron a tener composiciones visuales distintas entre sí.
- **Cuarta ronda de ajustes** sobre una captura de pantalla real del usuario: alto definido del hero (`min-h-[calc(100svh-4rem)]`, antes solo tenía el alto de su contenido), más separación vertical entre secciones, un componente `image-placeholder.tsx` explícito para marcar dónde va fotografía de producto real más adelante, el mecanismo de 3 pasos secuenciales se reemplazó por un **bento grid** (decisión validada explícitamente con el usuario, no una libre interpretación), y el formulario pasó de inputs tipo pill en caja a inputs editoriales de solo línea inferior.

**4. Tooling de diseño evaluado y parcialmente adoptado:**
- `@react-bits` (registry): evaluado, es una colección de efectos visuales (fondos WebGL, texto animado), no de bento grids ni formularios — se agregó el registry por si sirve un fondo puntual más adelante, no se usó nada de ahí todavía.
- `@aceternity` (registry, pedido explícito del usuario): la URL que pasó el usuario (`/r/{name}.json`) daba 404 en todo — la real es `/registry/{name}.json`, corregida en `components.json`. Se instaló `spotlight` (sin dependencias, coloreado al cyan de FIBO) para el fondo del hero. Se evaluó y **se descartó** `glowing-effect`: trae un gradiente cónico de 4 colores con seguimiento del mouse en cada tarjeta — viola la disciplina de un solo acento ya validada y es exactamente el patrón de "hover en cada tarjeta" que la skill `frontend-design` marca como genérico.

**5. Recalibración de alcance validada con el usuario:** la landing puede ser más ambiciosa visualmente de lo que "super-MVP" sugeriría; el prototipo tampoco tiene que sentirse básico en los flujos que sí construya — profundidad real en pocos flujos, no todos a medias. No contradice el principio de `AGENTS.md` ("MVP = validar, no construir completo") porque ese principio habla de *cuántos* flujos construir, no de *qué tan bien* construir los que entran.

## Estado al cerrar

Landing v1 corriendo en `pnpm dev`, verificada con `pnpm typecheck`/`pnpm lint` limpios en cada pasada y con inserciones reales contra Neon. Todo sin commitear todavía (nadie lo ha pedido). El registro de artifacts de `design-system.md` §9 no cambió — no se publicó ningún artifact nuevo esta sesión, todo fue código en `app/`.

## Qué sigue

1. **Instrumento de campo v2 sigue siendo el bloqueador #1** — esta sesión no lo tocó, sigue sin desplegarse.
2. Deploy de la landing a Vercel (stack ya listo para eso, falta que el equipo conecte el repo o dé acceso).
3. Pendiente de decisión del usuario: si corre `/taste` sobre Brex real ahora que Playwright quedó funcionando, para verificar con evidencia (screenshot + DOM) en vez de la lectura manual del HTML guardado que se usó esta sesión.
4. Ideas anotadas pero no ejecutadas: `sticky-scroll-reveal` y `bento-grid-with-skeletons` de `@aceternity` si se quiere profundizar más la sección de mecanismo; revisar Kibo UI cuando se construya la burbuja de chat del agente conversacional en el prototipo (`design-system.md` §5).
