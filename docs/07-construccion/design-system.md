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

## 3. Tipografía — resuelta con tokens reales (corregido 05 Set.)

- **Titulares:** `Foco` (la tipografía real de Pacífico, `Foco Trial`/`Foco_Trial_Bd`/`Foco_Trial_Lt`) — o una sans-serif redondeada equivalente si no se consigue la fuente exacta a tiempo (ej. Poppins). Adoptar el patrón **"Two-Tone Heading"** de Quererte Sano: mezclar una palabra en `font-light` con una en `font-bold` en el mismo titular — es la firma visual de bienestar de Pacífico, ya validada en producción.
- **Cuerpo/UI:** `Roboto` (la tipografía real de Pacífico) o `system-ui` — prioridad es legibilidad mobile.
- Evitar serif — se asocia a documento legal/letra chica, exactamente lo que el segmento rechaza (insight oficial). Esto sí se mantiene de la versión anterior, es coherente con ambas referencias reales.

## 4. Tono de voz

- Directo, sin jerga de seguros ("prima", "siniestro", "carencia" se traducen a lenguaje simple en toda la UI — ej. "pausa", "algo pasó", "tu Reserva").
- Nunca alarmista. El producto acompaña, no asusta.
- Primera persona/cercana del agente FIBO ("te ayudo a...", no "el sistema procesará su solicitud").
- Nunca lenguaje de descuento/oferta ("¡Gana!", "¡Aprovecha!") — coherente con el rechazo explícito a descuentos disfrazados (Plot Twist oficial).

## 5. Componentes clave (los que importan para la demo)

| Componente | Por qué es prioritario |
|---|---|
| **Espiral/anillo de progreso de la Reserva** | Es el componente más importante de todo el prototipo — si esto no comunica crecimiento de forma visual e inmediata, se pierde el corazón del pitch. Preferible una espiral o anillo que crece por nivel, no una barra de progreso genérica de fitness-app |
| **Tarjeta de hábito** (3 hábitos) | Debe mostrar claramente: estado (hecho/pendiente esta semana), y qué aporta a la Reserva al completarse |
| **Tarjeta de recompensa por nivel** | Debe distinguir visualmente los 3 niveles (bajo/medio/alto, `alcance-producto.md` §3) sin parecer una tabla de precios |
| **Burbuja de chat del agente FIBO** | Debe sentirse conversacional y cálida, no como un formulario con pasos numerados |
| **Toggle de top-up (activar/pausar)** | Debe comunicar explícitamente "sin penalidad" al pausar — es un diferencial de producto, no solo un switch on/off |

## 6. Qué queda fuera de esta versión

- Logotipo final / lockup de marca — para el hackathon alcanza con un tratamiento tipográfico simple del nombre "FIBO" + el ícono de espiral; no es necesario un proceso de branding completo.
- Ilustraciones custom — usar formas geométricas simples (círculos, espirales) antes que invertir tiempo en ilustración original.
- Modo oscuro — no es prioridad para una demo de 3 minutos.

## 7. Referencias visuales oficiales de Pacífico Seguros

Para no diseñar en el vacío y mantener coherencia con la línea visual real de Pacífico Seguros, se documentaron e integraron dos referencias oficiales de producción en `docs/03-mvp/`:

1. **[Referencia 1 — Pacífico Corporativo](file:///home/pcrisho/Documents/University/hacka-z/docs/03-mvp/ux-ui-referencia-1/DESIGN.md):** Sistema visual institucional (`pacifico.com.pe`). Define el Azul/Cyan Pacífico (`#0099CC`), el Magenta de acción (`#EE2C70`), la tipografía `Foco`, las tarjetas de producto y el anclaje de confianza del microseguro pay-as-you-go.
2. **[Referencia 2 — Quererte Sano](file:///home/pcrisho/Documents/University/hacka-z/docs/03-mvp/ux-ui-referencia-2/DESIGN.md):** Sistema visual de bienestar y prevención (`querertesano.pe`). Define la paleta extendida para hábitos saludables, los gradientes frescos de vitalidad (`#35DAFF` → `#65F9CF` → `#98FFF3`), botones de 48px `rounded-full`, y titulares de doble peso ("Two-Tone Headings" con `font-light` en `#003840` + `font-bold` en `#0099CC`).

