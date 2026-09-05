# Design system FIBO — propuesta inicial (04 Set. 2026)

> **Esto no es una decisión de campo, es una propuesta de trabajo.** No hay validación visual con usuarios todavía — se define ahora para que la construcción del prototipo y la landing no se detengan por falta de dirección visual. Si en la mentoría o en campo surge una razón fuerte para cambiar algo, se ajusta sin problema (nada aquí es "sustentación" o "GTM", es solo forma).

## 1. Principio rector

La identidad visual debe **mostrar** el concepto de FIBO (crecimiento compuesto por hábitos, espiral de Fibonacci — `02-ideacion/historias-usuario-y-validacion.md` §0), no solo nombrarlo. Si la Reserva de Bienestar no se *ve* crecer de forma orgánica, se pierde el momento más fuerte del pitch (`03-mvp/alcance-producto.md` §5: "debe sentirse real e interactivo").

Segundo principio: el segmento (`PLAN-TRABAJO.md` §6) rechaza letra chica, publicidad disfrazada y complejidad — el diseño debe ser **simple y cálido**, no corporativo/técnico. Es salud y bienestar, no una app de banca tradicional.

## 2. Paleta de color — resuelta con tokens reales (corregido 05 Set., ver §7)

**Corrección importante:** la versión anterior de esta sección proponía "evitar el azul corporativo típico de seguros" e inventaba una paleta cálida (verde salvia, dorado, crema) sin ningún dato que lo respalde. Al extraer los tokens reales de **Quererte Sano** — el propio brazo de bienestar de Pacífico, la referencia más cercana a lo que FIBO quiere ser (§7) — se confirma que ese supuesto era incorrecto: Pacífico **ya resolvió** "salud/bienestar sin sentirse corporativo" usando su cyan de marca (`#0099CC`) combinado con verdes de vitalidad y degradados frescos, no evitándolo. Adoptar una paleta ajena a la de Pacífico habría sido una decisión de diseño sin evidencia, justo cuando la evidencia real ya existía en `docs/03-mvp/ux-ui-referencia-2/DESIGN.md`.

**Paleta definitiva de FIBO — heredada de Quererte Sano, con un acento propio:**

| Uso | Color / token | Fuente | Justificación |
|---|---|---|---|
| Primario (marca, CTA, confianza) | Cyan Pacífico `#0099CC` (escala `--colors-cyan50` a `900`) | Quererte Sano / Pacífico Corporativo | Es el color real de Pacífico — ancla de confianza institucional, no inventado |
| Secundario (hábitos, crecimiento, éxito) | Verde Salud `#01A355` / `#00AF3F` (escala verde) | Quererte Sano | Vitalidad y confirmación de hábito cumplido, ya validado en producción por el propio Pacífico |
| Acento distintivo de FIBO (espiral, Reserva) | Dorado/ámbar suave (`#D4A24C` aprox.) | Propio de FIBO, no existe en ninguna referencia de Pacífico | Único elemento no heredado — referencia visual directa a la espiral de Fibonacci (proporción áurea); diferencia a FIBO dentro del ecosistema Pacífico sin romper su lenguaje de marca |
| Gradiente destacado (badges, chips de comunidad/logro) | Tritono fresco `#35DAFF → #65F9CF → #98FFF3` | Quererte Sano | Firma visual ya reconocible del brazo de bienestar de Pacífico — reutilizar en vez de inventar una nueva |
| Fondo | Gris neutro `#F9FAFB` / blanco | Quererte Sano | Fondo limpio validado en producción, mobile-first |
| Texto principal | `#545E62` (cuerpo) / `#2F373C` (titulares) | Quererte Sano | Legible, no negro puro, coherente con el tono "acompaña, no informa" |
| Alerta/pausa (top-up pausado) | Terracota suave (`#C97B5B` aprox.) | Propio de FIBO | Sigue sin existir en las referencias de Pacífico — comunica pausa sin sentirse como error/penalidad |

Detalle completo de tokens (incluye estados hover/pressed, escalas intermedias) en `docs/03-mvp/ux-ui-referencia-2/DESIGN.md` §2.

### 2.1 Validación de contraste/accesibilidad (cerrado 05 Set.)

Chequeo WCAG 2.1 (ratio texto normal ≥4.5:1, texto grande/negrita ≥18px o componentes UI ≥3:1) sobre las combinaciones que usan los componentes prioritarios de §5. Regla general que resuelve todos los hallazgos: **cyan500, verde-medio y dorado son colores de fondo/relleno/ícono, no de texto sobre fondo claro** — para texto usar siempre las variantes oscuras ya definidas arriba.

| Combinación | Ratio | Veredicto | Dónde aplica / ajuste |
|---|---|---|---|
| Texto blanco sobre botón cyan `#0099CC` | 3.27:1 | Pasa solo como UI grande/negrita (≥16px bold), no como texto de párrafo | Heredado de Quererte Sano (ellos ya lo usan así en producción) — mantener solo en botones píldora de 48px con texto en negrita, nunca en párrafos |
| Texto cyan `#0099CC` sobre fondo blanco/gris50 | 3.27:1 | Falla para texto normal | No usar cyan500 como color de texto de cuerpo o links — el propio design system ya evita esto en la práctica (§2 define `#545E62`/`#2F373C` para texto, no cyan directo); dejarlo explícito para que nadie lo reintroduzca por accidente |
| Texto `#545E62` (cuerpo) / `#2F373C` (titulares) sobre blanco/gris50 | 6.65:1 / 12.1:1 | Pasa AA (cuerpo) y AAA (titulares) | Sin cambios — los tokens de texto ya definidos son correctos, úsalos siempre para texto real |
| **Dorado `#D4A24C` como texto sobre blanco/gris50** | **2.32:1** | **Falla incluso como texto grande** | Es el hallazgo real de esta validación: el acento de la espiral **no puede usarse como color de texto** en ningún tamaño — solo como relleno del anillo/espiral, ícono grueso (≥3px stroke) o fondo de chip oscuro. Si una etiqueta necesita asociarse visualmente al nivel "dorado", usar un chip con fondo oscuro (`#003840` o `#2F373C`) y texto dorado, nunca dorado sobre claro |
| Verde-medio `#01A355`/`#00AF3F` como texto sobre blanco/gris50 | 3.3:1 | Falla para texto normal | Para pastillas de "hábito cumplido" usar el patrón que Referencia 1 ya valida en producción: fondo tintado + texto oscuro (`#007C2D` sobre `#F4FFF9`/`#CFF8DD`, 5.36:1, pasa AA) — nunca verde-medio plano como color de texto |
| Terracota `#C97B5B` como texto sobre blanco/gris50 | 3.25:1 | Pasa solo como UI grande/negrita, falla para texto normal | Mismo patrón de chip que el verde: usar fondo tintado claro + terracota solo en negrita ≥16px o en el ícono/borde del chip de "pausado", no en texto corrido |

**Consecuencia directa para los componentes de §5:** el anillo/espiral de progreso (dorado como relleno, no como número/etiqueta encima sin fondo oscuro), la tarjeta de recompensa (nivel "dorado" siempre en chip con fondo oscuro), la tarjeta de hábito (pastilla verde con el patrón fondo-tintado + texto oscuro) y el toggle de pausa (terracota en ícono/borde + negrita, no en texto plano) ya quedan resueltos con esta regla — no se requiere ningún cambio de paleta, solo esta disciplina de uso.

## 3. Tipografía — Bricolage Grotesque (display) + Geist (cuerpo/UI), Foco solo si aparece kit oficial (corregido 05 Set., 2ª sesión)

- **Decisión de licencia (05 Set., confirmada por el equipo):** `Foco`/`Foco Trial` es la tipografía real de Pacífico, pero es una fuente de prueba (trial) sin licencia confirmada de uso/redistribución para el build del equipo. Sin acceso legal verificado, comprometerla en el design system es un riesgo evitable. Si en algún momento el equipo confirma acceso legítimo al kit de marca oficial de Pacífico (ej. entregado por el comité del hackathon), se puede reemplazar la tipografía de titulares por `Foco` sin rediseñar nada más — son intercambiables en los mismos tokens tipográficos.
- **Decisión de pairing (05 Set., 2ª sesión, validada contra el brandboard):** en vez de una sola fuente "segura" para todo (la primera pasada de esta corrección proponía `Poppins` para titulares y cuerpo), se separan los dos roles con personalidad propia. La referencia que motivó el cambio es `docs/03-mvp/ux-ui-referencia-3/DESIGN.md` (sistema de `caldera.xyz`, un producto cripto): su paleta volcánica no aplica a FIBO, pero su *método* tipográfico sí — un display expresivo de peso fuerte + un cuerpo humanista de peso medio, nunca la misma fuente para ambos roles.
- **Titulares/display:** `Bricolage Grotesque` (Google Fonts, variable, peso 800 para titulares/wordmark) — expresiva y con carácter propio para el público Gen Z, evitando el Poppins/Inter/Space Grotesk "seguro pero genérico". Mantiene el patrón **"Two-Tone Heading"** de Quererte Sano: mezclar una palabra en `font-light` con una en `font-bold` en el mismo titular.
- **Cuerpo/UI:** `Geist` (Google Fonts, libre) — coherente con que el stack de construcción es Next.js/Vercel (`stack-tecnico.md`), limpia y legible en mobile. Reemplaza a `Roboto` como elección principal; `Roboto` queda como alternativa válida si Geist da problemas de integración.
- **Utilitaria (tokens, hex, cifras, timestamps):** `Geist Mono` — rol nuevo, antes no existía una fuente monoespaciada en el sistema.
- Validado visualmente en `brandboard.html` (artifact + copia local en esta carpeta) antes de cerrarse aquí.
- Evitar serif — se asocia a documento legal/letra chica, exactamente lo que el segmento rechaza (insight oficial). Esto se mantiene sin cambios.

## 4. Tono de voz

- Directo, sin jerga de seguros ("prima", "siniestro", "carencia" se traducen a lenguaje simple en toda la UI — ej. "pausa", "algo pasó", "tu Reserva").
- Nunca alarmista. El producto acompaña, no asusta.
- Primera persona/cercana del agente FIBO ("te ayudo a...", no "el sistema procesará su solicitud").
- Nunca lenguaje de descuento/oferta ("¡Gana!", "¡Aprovecha!") — coherente con el rechazo explícito a descuentos disfrazados (Plot Twist oficial).

**Validado 05 Set.:** se revisó el copy ya escrito en `07-construccion/esquema-mvp.md`, `esquema-landing.md` y los diálogos de `02-ideacion/historias-usuario-y-validacion.md` contra estas 4 reglas — sin hallazgos. Las únicas menciones de "prima"/"microprima"/"descuento" en esos documentos son uso analítico interno (explicar el modelo a otro agente/mentor), no copy de cara al usuario; el copy de UI ya usa el lenguaje traducido ("pausa", "tu Reserva", "algo pasó") consistentemente.

## 5. Componentes clave (los que importan para la demo)

| Componente | Por qué es prioritario |
|---|---|
| **Espiral/anillo de progreso de la Reserva** | Es el componente más importante de todo el prototipo — si esto no comunica crecimiento de forma visual e inmediata, se pierde el corazón del pitch. Preferible una espiral o anillo que crece por nivel, no una barra de progreso genérica de fitness-app |
| **Tarjeta de hábito** (3 hábitos) | Debe mostrar claramente: estado (hecho/pendiente esta semana), y qué aporta a la Reserva al completarse |
| **Tarjeta de recompensa por nivel** | Debe distinguir visualmente los 3 niveles (bajo/medio/alto, `alcance-producto.md` §3) sin parecer una tabla de precios |
| **Burbuja de chat del agente FIBO** | Debe sentirse conversacional y cálida, no como un formulario con pasos numerados |
| **Toggle de top-up (activar/pausar)** | Debe comunicar explícitamente "sin penalidad" al pausar — es un diferencial de producto, no solo un switch on/off |

**Nota de accesibilidad para los 5 componentes de esta tabla:** ver §2.1 — el resumen corto es que dorado/verde/terracota son colores de relleno o de chip con fondo tintado, nunca texto plano sobre fondo claro.

## 6. Logotipo/lockup — se mantiene fuera de alcance de producción, con dirección concreta (cerrado 05 Set.)

**Decisión (05 Set.):** con 3 días de sprint restantes, no se justifica abrir una exploración de branding completa — se mantiene la decisión original de no producir un logotipo final. Lo que sí se cierra ahora es la ambigüedad de "tratamiento tipográfico simple", para que quien construya la landing/app no tenga que decidir esto sobre la marcha:

- **Wordmark:** el nombre "FIBO" en `Bricolage Grotesque` `font-weight:800` (o `Foco` si aparece el kit oficial, ver §3), en Cyan Pacífico `#0099CC` sobre fondo claro / blanco sobre fondo oscuro. Sin efectos, sin degradado en el texto — el degradado se reserva para el ícono y los componentes de progreso.
- **Ícono:** una espiral áurea simplificada (2-3 arcos concéntricos construidos con `border-radius` sobre cuadrados en proporción de Fibonacci — no un logo importado ni ilustración vectorial custom), en trazo grueso (≥3px), color dorado de acento `#D4A24C` sobre fondo claro u oscuro indistintamente (es relleno/trazo, no texto — no aplica la restricción de §2.1). Es el mismo ícono que ya usa el anillo de progreso de la Reserva, reutilizado como marca — no un ícono nuevo y distinto.
- **Lockup:** ícono a la izquierda + wordmark a la derecha, un solo tamaño (el de la cabecera de la landing/app, ~32-40px de alto). No se necesitan variantes apiladas, monocromáticas ni de distintos tamaños para el hackathon — alcanza con la versión horizontal única.
- Sigue sin ser necesario un manual de marca, variantes de lockup, o un proceso de branding completo — este es el límite de la dirección visual del logo para este sprint.
- Ilustraciones custom — usar formas geométricas simples (círculos, espirales) antes que invertir tiempo en ilustración original.
- Modo oscuro — no es prioridad para una demo de 3 minutos.

## 7. Referencias visuales oficiales de Pacífico Seguros

Para no diseñar en el vacío y mantener coherencia con la línea visual real de Pacífico Seguros, se documentaron e integraron dos referencias oficiales de producción en `docs/03-mvp/`:

1. **[Referencia 1 — Pacífico Corporativo](file:///home/pcrisho/Documents/University/hacka-z/docs/03-mvp/ux-ui-referencia-1/DESIGN.md):** Sistema visual institucional (`pacifico.com.pe`). Define el Azul/Cyan Pacífico (`#0099CC`), el Magenta de acción (`#EE2C70`), la tipografía `Foco`, las tarjetas de producto y el anclaje de confianza del microseguro pay-as-you-go.
2. **[Referencia 2 — Quererte Sano](file:///home/pcrisho/Documents/University/hacka-z/docs/03-mvp/ux-ui-referencia-2/DESIGN.md):** Sistema visual de bienestar y prevención (`querertesano.pe`). Define la paleta extendida para hábitos saludables, los gradientes frescos de vitalidad (`#35DAFF` → `#65F9CF` → `#98FFF3`), botones de 48px `rounded-full`, y titulares de doble peso ("Two-Tone Headings" con `font-light` en `#003840` + `font-bold` en `#0099CC`).

## 8. Tagline de marca (cerrado 05 Set.)

**Tagline oficial de FIBO:**

> **"Cada hábito suma al siguiente. Tu Reserva crece en espiral."**

**Versión corta** (footer, splash de app, bajo el lockup del logo): **"Crece en espiral."**

**Por qué se cierra ahora:** el equipo, en la mentoría en vivo con Cami, describió el producto ("Figo") usando literalmente la premisa textual de Betterfly — *"queremos que tú vivas tu mejor vida"* (`4-07-2026/RETROALIMENTACION - 2 - CAMI/RETROALIMENTACION.md` líneas 6-9) — y la mentora advirtió explícitamente *"quítale protagonismo a Betterfly, el protagonista son ustedes"* (misma transcripción, línea 24-28). Esa frase ya no aparece en `05-entregables/guion-pitch-v1.md` (se corrigió junto con el resto de las menciones de Betterfly el 04 Set.), pero FIBO se quedó sin una línea propia que la reemplazara — este tagline cierra ese vacío.

**Por qué esta redacción y no otra:** ancla en la metáfora que ya es la razón de ser del nombre de marca — la espiral de Fibonacci / crecimiento compuesto de hábitos (`02-ideacion/historias-usuario-y-validacion.md` §0) — en vez de en una aspiración genérica de bienestar ("vivir tu mejor vida") que no distingue a FIBO de Betterfly ni de ningún otro producto de bienestar. Nombra el mecanismo real del producto (hábito → Reserva que crece), no una promesa emocional intercambiable.

**Dónde usarlo:** línea de cierre del video de pitch (tarjeta final con logo, después del segmento de modelo de negocio — ver `05-entregables/guion-pitch-v1.md`), subtítulo del Hero de la landing (`esquema-landing.md` §1, que hasta ahora dejaba el copy del hero sin cerrar), y subtítulo del one-pager cuando se redacte.

## 9. Brandboard visual y brief de logo (05 Set., 2ª sesión)

Todo lo de arriba (paleta, tipografía, tono, componentes, dirección de logo) tiene una versión visual/interactiva validada en **[`brandboard.html`](./brandboard.html)** (copia local, iterable; también publicado como artifact) — úsalo como referencia rápida en vez de leer los hex sueltos de §2. Incluye toggle de tema claro/oscuro/sistema para revisar ambos modos.

El logo en sí sigue sin producirse (decisión de §6, sin cambios) — Roberto lo diseña con inspiración propia de Behance. El criterio para esa exploración (qué debe comunicar el ícono, qué evitar del territorio "espiral/Fibonacci", pruebas de tamaño mínimo/monocromía) está en un documento separado, `FIBO Logo Brief`, publicado como artifact — no se replica aquí para no mantener dos copias del mismo criterio.

**Registro de artifacts publicados (fuente de verdad para la skill `cerrar-sesion` — no editar manualmente salvo que se publique/retire un artifact):**

| Artifact | Archivo local | URL publicada |
|---|---|---|
| FIBO Brandboard | `07-construccion/brandboard.html` | https://claude.ai/code/artifact/e66cd762-b274-483f-961f-d7e07901af50 |
| FIBO Logo Brief | (sin copia local — solo artifact) | https://claude.ai/code/artifact/a89d1f5f-4be5-49aa-b890-5598823f07e1 |

