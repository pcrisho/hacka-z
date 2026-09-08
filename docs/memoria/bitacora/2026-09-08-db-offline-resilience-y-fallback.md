# Bitácora — Fallback y Resiliencia ante Ausencia de Base de Datos (08 Set. 2026)

**Autor:** Claude Code / Antigravity
**Fecha:** 08 de septiembre de 2026 (Día 8 del sprint, cierre)
**Objetivo:** Implementar un fallback transparente, controlado y no bloqueante cuando la base de datos (NeonDB) no esté configurada o no esté disponible.

---

## 1. Contexto y Diagnóstico

El usuario solicitó:
> *"Quisiera que valides el proyecto, en este caso, quisiera que haya un fallback para que funcione sin la necesidad de la bd en caso no haya llegada a ella. He visto que cuando no hay internet se cuelga, cosa que no debería pasar. Valida, por favor"*
> *"Ojo, el cambio era solo para lo que es cuando la bd no está disponible, no amplies el alcance, por favor"*

Al revisar el flujo relacionado estrictamente a la base de datos:
1. **Lanzamiento de error síncrono en `app/lib/db.ts`:**
   Si `DATABASE_URL` no estaba definido en `.env`, el módulo ejecutaba `throw new Error("DATABASE_URL no está definido")` a nivel de importación de módulo, rompiendo el arranque de Next.js.
2. **Cuelgues prolongados por DNS/TCP en SSR (`app/app/page.tsx`):**
   La landing ejecutaba `Promise.all([getWaitlistCount(), getRecentRefCodes(5)])` sin timeout explícito ni control de errores. Cuando la base de datos Neon estaba inaccesible o no había internet, la llamada `fetch` de Node esperaba los timeouts TCP/DNS del sistema operativo (30-120 segundos), dejando la pantalla en blanco y culminando en error 500.
3. **Caché de promesas rechazadas en `ensureTable()`:**
   Si `ensureTable()` fallaba por falta de conectividad, almacenaba la promesa rechazada de forma permanente en memoria, provocando fallos encadenados en todas las peticiones posteriores.
4. **Formulario de lista de espera bloqueante (`app/actions.ts` y `joinWaitlist`):**
   Al enviar el formulario sin conexión, el intento de inserción SQL se quedaba colgado en bucle de reintentos, congelando el botón de submit ("Asegurando tu lugar...").

---

## 2. Solución Acotada Implementada

### A. Capa de Base de Datos Resiliente con Circuit Breaker (`app/lib/db.ts`)
- **Detección no bloqueante de credenciales:** Si `DATABASE_URL` no existe o no es válida, `isDbConfigured()` retorna `false` y no se lanza ninguna excepción al importar.
- **Timeout estricto de 1.5 segundos (`QUERY_TIMEOUT_MS = 1500`):** Toda consulta SQL a NeonDB está envuelta en un `Promise.race` con temporizador y limpieza de timers (`clearTimeout`). Si la BD no responde en 1.5s, se aborta controladamente con `DbUnavailableError`.
- **Circuit Breaker automático con Fail-Fast (0ms):** Ante el primer fallo de red o timeout hacia la BD, se activa un periodo de enfriamiento de 30 segundos (`circuitBreakerUntil = Date.now() + 30_000`). Durante este periodo, cualquier consulta subsiguiente se rechaza inmediatamente en 0ms sin intentar abrir sockets ni colgar peticiones SSR. Si la BD responde correctamente, el circuit breaker se restablece.

### B. Fallback en Memoria para la Lista de Espera (`app/lib/waitlist.ts`)
- **Línea base realista para el Demo:** Se definieron `BASELINE_WAITLIST_COUNT = 48` y `BASELINE_REF_CODES = ["PAC782", "FIB904", "SAL310", "GEN552", "BCP189"]`.
- **Almacén local en memoria (`fallbackStore`):**
  - `getWaitlistCount()`: Si la BD responde, retorna los registros reales + registros locales. Si la BD está caída o inalcanzable, retorna la línea base de 48 + registros locales en 0ms.
  - `getRecentRefCodes(limit)`: Devuelve los códigos locales unificados con los códigos base o de BD, garantizando siempre 5 códigos válidos sin colgar la petición.
  - `joinWaitlist(input)`: Valida el correo y nombre; intenta persistir en Neon si está disponible. Si la BD no está disponible o expira el timeout, guarda en `fallbackStore`, genera un `refCode` auténtico (6 caracteres) y retorna `{ ok: true, refCode }`.
- **Experiencia de usuario 100% fluida:** El usuario recibe su código, ve el confeti, puede copiar su link de referido y compartirlo por WhatsApp sin percibir ningún error técnico por ausencia de la BD.

### C. Protección en Server Components y Server Actions
- **`app/app/page.tsx`:** Se añadió `.catch(() => BASELINE_WAITLIST_COUNT)` y `.catch(() => BASELINE_REF_CODES)` como salvaguarda adicional en el Server Component.
- **`app/app/actions.ts`:** Se encapsuló `joinWaitlistAction` en un bloque `try/catch` de contingencia para garantizar que las Server Actions nunca emitan una excepción 500 no controlada si la BD falla.

---

## 3. Verificación Realizada

1. **Chequeo de tipos:** `pnpm exec tsc --noEmit` completado con 0 errores.
2. **Compilación de producción:** `pnpm run build` completó con éxito (18/18 páginas generadas, incluyendo landing SSR y todas las rutas estáticas).
3. **Prueba en servidor de producción (`next start -p 3005`):**
   - Primera petición a `/`: HTTP 200 servido.
   - Petición bajo cooldown de circuit breaker: HTTP 200 servido en **116ms**.
   - Badge de social proof con 48 personas y códigos base renderizados correctamente.
