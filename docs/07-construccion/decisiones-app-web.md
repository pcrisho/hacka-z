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

## 4. Evolución de la Estructura de Rutas y Adopción de BottomNav (06–08 Set.)

El prototipo superó el esquema de flujo lineal aislado al evidenciarse que la retención de la Gen Z exige un sentido de permanencia y exploración diaria. Se implementó un **Shell con Bottom Navigation de 4 pestañas** en `app/app/(app)/(tabs)/_components/bottom-nav.tsx`:

| Ruta | Rol dentro de la Arquitectura | Componente y Vista Principal |
|---|---|---|
| `/` | Landing institucional y waitlist NeonDB | `app/page.tsx` + `components/landing/` |
| `/ingresar` | Acceso rápido express | `app/(app)/ingresar/ingresar-view.tsx` |
| `/onboarding` | Onboarding conversacional 5 pasos | `app/(app)/onboarding/onboarding-view.tsx` |
| `/(tabs)/hoy` | Tab 1: Dashboard diario y Mindful Rituals | `app/(app)/(tabs)/hoy/hoy-view.tsx` |
| `/(tabs)/comunidad` | Tab 2: Ecosistema de Tribus y Retos | `app/(app)/(tabs)/comunidad/comunidad-view.tsx` |
| `/(tabs)/progreso` | Tab 3: Analíticas y Crecimiento Compuesto | `app/(app)/(tabs)/progreso/progreso-view.tsx` |
| `/(tabs)/perfil` | Tab 4: Perfil Deportivo y Coberturas | `app/(app)/(tabs)/perfil/perfil-view.tsx` |
| `/recompensa` | Flujo de Recompensa y Conversión a Seguro | `app/(app)/recompensa/recompensa-view.tsx` |
| `/salida` | Ruta dedicada de Salida Protegida (Seguro Grupal) | `app/(app)/salida/salida-view.tsx` |
| `/seguro` | Gestión y switch de microseguro pay-as-you-go | `app/(app)/seguro/seguro-view.tsx` |
| `/momento-de-verdad` | Flujo de siniestro/asistencia y triaje con IA | `app/(app)/momento-de-verdad/momento-de-verdad-view.tsx` |

El layout general `app/app/(app)/_components/app-header.tsx` gobierna la navegación contextual: muestra botón de retroceso (`ChevronLeft`) con título en rutas secundarias (`/recompensa`, `/salida`, `/seguro`, `/momento-de-verdad`), marca limpia en las tabs de primer nivel, y campana interactiva para el centro de avisos (`notificaciones-sheet.tsx`).

## 5. Componentes y Librerías Incorporadas

- Primitivas UI: shadcn/ui sobre **Base UI** (`Card`, `Badge`, `Button`, `Dialog`, `Drawer`, `Switch`, `RadioGroup`, `Tabs`, `Separator`, `Sheet`).
- Visualización de Datos: `Recharts` (`AreaChart`, `ResponsiveContainer`) para la curva de crecimiento compuesto en `/progreso`.
- Micro-interacciones: `canvas-confetti` para celebraciones de nivel y canje de voucher; `AnimatedCircularProgressBar` para el anillo de la Reserva.
- Iconografía: `lucide-react` (fina, consistente, sin emojis saturados).

## 6. Iteración de Pulido Visual (06 Set.)

- Corrección de radios de esquina (`--radius: 0.6rem` en `globals.css`) para mantener tarjetas en ~25px y botones en píldora equilibrada.
- Componentes de selección de foco (`RadioGroup`) en onboarding.
- Modal de celebración de nivel persistido para evitar intrusión reiterada (`fibo_niveles_celebrados_v1`).

## 7. Mindful Rituals v3 en `/hoy` (08 Set.)

Para evitar el "Checkbox Syndrome" (clic mecánico plano), cada hábito activa un modal de ritual según su pilar:
- **Alcancía de Salud (Bolsillo):** Aporte rápido con confirmación visual de micro-ahorro.
- **Selector de Movimiento y Live Timer (Cuerpo):** Temporizador real de 15, 30 o 45 minutos con actualización de progreso en vivo en la tarjeta del dashboard.
- **Pausa Guiada de Respiración 4-4-4 (Mente):** Ejercicio guiado de inhalar-retener-exhalar de 30s con registro de check-in mental y anclaje emocional.
- **Calendar Strip Reactivo:** Navegación semanal (L-D) con dual-path (días activos vs. días cubiertos con el Escudo de Racha).

## 8. Ecosistema de Tribus y Salida Protegida en `/comunidad` y `/salida` (08 Set.)

- **Tribus Universitarias y Laborales:** Creación y membresía activa, metas semanales grupales e integración directa con grupos de WhatsApp.
- **Salida Protegida (`/salida`):** Reemplazo del modal limitado por una ruta transaccional completa. El Capitán de la tribu emite una póliza de accidentes personales de Pacífico que cubre únicamente a los asistentes confirmados (proporcionalidad real, ej. 12 de 100 miembros), con desglose a S/ 3.50 por persona, deep linking (`/salida?t=...&act=...&p=...`) con link copiable para el chat de WhatsApp y emisión de póliza `PAC-TRIBU-XXXX`.

## 9. Analíticas y Perfil Minimalista (08 Set.)

- **`/progreso` v3:** Conexión real con hábitos y metas de tribu, desglose vivo por pilar y proyección de Reserva en curva de crecimiento compuesto.
- **`/perfil` v3:** Rediseño sobrio inspirado en Strava y Adidas Running, eliminando ruido visual y mockups genéricos para priorizar métricas clave de racha, movimiento y respaldo médico garantizado.

## 10. Estado de Compilación y Gobernanza

- TypeScript estricto verificado con `0 errores` (`tsc --noEmit`).
- 18/18 páginas generadas limpiamente en `pnpm run build`.
- Persistencia cliente completa sin inconsistencias de hidratación de Next.js.
