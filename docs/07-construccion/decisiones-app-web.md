# Decisiones técnicas — prototipo de la app FIBO (hábitos/Reserva/agente)

> Mismo criterio que `stack-tecnico.md`: esto es la capa de implementación, no reabre ninguna decisión de producto de `PRD-mvp.md` o `esquema-mvp.md`. Cierra las piezas que esos documentos dejaban abiertas ("Bedrock u otro", cómo vive el estado en cliente, estructura real de rutas).

## 1. Sin backend, sin auth, sin ORM — confirmado (06 Set.)

El estado de hábitos/Reserva vive 100% en cliente. No hay cuentas de usuario, no hay tabla propia en NeonDB para el app (NeonDB sigue existiendo solo para la waitlist de la landing, sin cambios), y por lo tanto no hace falta Prisma ni ningún otro ORM. Confirmado explícitamente con el equipo el 06 Set. al plantear la duda — ver `PLAN-TRABAJO.md` §7.

## 2. Manejo de estado en cliente

`app/lib/reserva/`:
- `types.ts` — forma del estado (`ReservaState`) y de las acciones (`ReservaAction`).
- `constants.ts` — los 3 hábitos y los 3 niveles de recompensa, copiados literal de `03-mvp/alcance-producto.md` §2 y §3.
- `context.tsx` — `ReservaProvider`, un `useReducer` de React sin librería externa (zustand/jotai no se justifican para un solo flujo lineal). Se hidrata desde `localStorage` en un efecto (arranca siempre igual en servidor y cliente, evita mismatch de hidratación de Next.js) y persiste en cada cambio.

`app/hooks/use-reserva.ts` expone el context a los componentes de pantalla.

## 3. Agente conversacional — Vercel AI SDK + AWS Bedrock, con fallback no bloqueante

- Paquetes: `ai` (Vercel AI SDK) + `@ai-sdk/amazon-bedrock`.
- Modelo por defecto: `amazon.nova-micro-v1:0` (configurable vía `BEDROCK_MODEL_ID`) — los dos únicos usos reales (onboarding, momento de verdad) son intercambios cortos, no requieren un modelo grande.
- Un solo route handler, `app/app/api/agente/route.ts`, con `modo: "onboarding" | "momento-de-verdad"` y su propio system prompt en `app/lib/agente/prompts.ts` (guiones tomados literal de `historias-usuario-y-validacion.md` §2 y §6: las 2 preguntas de contexto exactas, la frase de transparencia de datos, y el guion de escalamiento a humano).
- **Sin credenciales de AWS configuradas, la ruta no intenta la llamada real** — responde directo con el guion equivalente (`primerMensajeFallback`/`continuacionFallback`). Con credenciales, intenta la llamada real con un timeout de 5s vía `Promise.race`; si falla o tarda, cae al mismo guion. En ningún caso el usuario percibe un error o una espera indefinida.
- **Pendiente fuera de este repo:** pedir acceso a los modelos de Bedrock en la consola de AWS — la aprobación puede tardar horas.
- **Plan de respaldo si Bedrock no está listo a tiempo:** Neon AI Gateway (el equipo ya tiene cuenta Neon por la waitlist) — expone una URL compatible con OpenAI, así que cambiar de proveedor es agregar `@ai-sdk/openai` apuntando a esa URL, no reescribir el route handler.

## 4. Estructura de rutas

Las 6 pantallas de `esquema-mvp.md` se implementan como 5 rutas bajo un route group `app/app/(app)/`, con layout propio (`app/app/(app)/layout.tsx`): solo la marca FIBO en el header, **sin bottom nav** — una barra de navegación persistente insinuaría secciones que no existen, lo que rompería el principio de "mostrarse honestamente" que ya rige el resto del prototipo (escalamiento del momento de verdad, límite del honor system).

| Ruta | Pantalla de `esquema-mvp.md` |
|---|---|
| `/onboarding` | 1. Onboarding conversacional |
| `/hoy` | 2+3 fusionadas — 3 hábitos + anillo de la Reserva en una sola vista (ver nota en `esquema-mvp.md`) |
| `/recompensa` | 4. Desbloqueo de recompensa → oferta de microseguro (misma pantalla, nunca un pop-up) |
| `/seguro` | 5. Activar/pausar microseguro |
| `/momento-de-verdad` | 6. Reclamo/canje guiado por el agente |

## 5. Componentes nuevos

Vía la skill `shadcn` (registry `@shadcn`, base **Base UI** — no Radix, confirmado en `components.json`):
- `Switch` — toggle de activar/pausar el microseguro.
- `Message`, `MessageScroller`, `Bubble`, `Marker` — primitivas de chat para el agente (onboarding y momento de verdad), en vez de burbujas hechas a mano.

El resto (tarjeta de hábito, tarjeta de recompensa, input de foto) usa primitivas ya existentes (`Card`, `Badge`, `input type="file"` nativo) sin agregar dependencias.

## 6. Iteración de pulido visual (06 Set., referencias externas)

El usuario compartió capturas de 3 apps de hábitos/metas compartidas (**felt**, **right.**, **COOP**) como referencia de UX/UI. Todas comparten un mecanismo social/de pareja ("pod", User 1 vs User 2) — **confirmado explícitamente con el usuario que ese mecanismo no se adopta** (`historias-usuario-y-validacion.md` §8 ya lo dejó fuera de alcance del hackathon). Solo se adoptó el lenguaje visual, aplicado a una experiencia de un solo usuario:

| Patrón adoptado | Dónde | Componente shadcn |
|---|---|---|
| Número hero (%) con arco de progreso | `/progreso`, header | `AnimatedCircularProgressBar` (ya existente) |
| Mini-tarjeta de progreso por métrica | `/progreso`, una fila por hábito | `Progress` |
| Modal de celebración al alcanzar un nivel | `/hoy`, dispara una sola vez por nivel (no en cada visita) | `Dialog` — no reemplaza la regla de "la oferta de microseguro nunca es un pop-up" (`customer-journey.md` §4): el modal solo celebra el nivel, la oferta sigue viviendo en su propia pantalla `/recompensa` |
| Tarjeta seleccionable con radio + descripción, botón "Continuar" que se habilita con la selección | Onboarding, pregunta 2 (foco) | `RadioGroup` + `Field`/`FieldLabel`/`FieldContent`/`FieldTitle`/`FieldDescription` |

**Nota técnica (Base UI):** `RadioGroup` de este proyecto es Base UI, no Radix — no acepta pasar `value={undefined}` inicialmente y luego un string (lo trata como cambiar de no-controlado a controlado y lanza error en consola). Se resolvió inicializando el estado en `""` en vez de `null`.

## 6.1. Corrección de radio de esquinas y navegación tipo iOS (06 Set., feedback directo)

El usuario notó que el onboarding (burbujas de chat) y las tarjetas se veían "muy redondeadas". Verificado contra el código: el `Card`/`Bubble` reales de la librería usan `rounded-4xl`/`rounded-3xl`, y `--radius` se había fijado en `1.25rem` pensando en `--radius-lg` (el supuesto original de `stack-tecnico.md` §3, escrito antes de que el `Card` real del proyecto usara `rounded-4xl`) — el resultado real eran tarjetas de **52px** y burbujas de **44px**, muy por encima de los 20-24px que pide `design-system.md` §5. Se corrigió bajando `--radius` a `0.6rem` en `app/globals.css`, lo que deja `--radius-4xl` (tarjetas) en ~25px y `--radius-3xl` (burbujas) en ~21px sin tocar componente por componente — los botones (`rounded-4xl`) siguen viéndose como píldora porque el navegador clampea el radio a la mitad de la altura del control, no al valor exacto del token.

También se agregó navegación tipo iOS: `app/app/(app)/_components/app-header.tsx` muestra un back (`ChevronLeft` + `router.back()`) con el título de la pantalla en las 3 pantallas de flujo (`/recompensa`, `/seguro`, `/momento-de-verdad`); las pantallas raíz (tabs + `/ingresar` + `/onboarding`) siguen mostrando la marca FIBO, sin back, porque no hay un "atrás" honesto desde ahí.

## 7. Qué falta después de esta pasada

El contenido visual de las pantallas de flujo restantes (recompensa, seguro, momento de verdad) todavía no pasó por esta misma revisión de referencias — es la siguiente iteración pendiente, con el mismo criterio: adoptar patrones visuales de apps de referencia sin heredar mecanismos de producto (social, pagos reales, etc.) que ya están fuera de alcance.
