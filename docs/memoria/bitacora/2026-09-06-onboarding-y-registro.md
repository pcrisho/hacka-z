# Bitácora: Flujo de Registro, Onboarding de Primer Ingreso y Transparencia de Datos

- **Fecha:** 06 Set. 2026 (Día 6 de 8 del sprint)
- **Autor / Colaborador:** Roberto Crisóstomo & Antigravity

---

## 1. Contexto y Objetivos

Avanzando en la maduración del producto FIBO, se identificó que la pantalla de ingreso previa solo contemplaba un acceso directo rápido sin distinguir entre usuarios recurrentes y usuarios que entran por primera vez. Para convertir a FIBO en una experiencia completa de producto, se diseñó e implementó:

1. **Bifurcación en `/ingresar`:** Diferenciación nítida entre **"Iniciar sesión"** (usuarios con cuenta) y **"Crear cuenta"** (usuarios nuevos).
2. **Onboarding Integral de Primer Ingreso (`/onboarding`):** Flujo estructurado en 5 pasos interactivos con barra de progreso superior.
3. **Persistencia y Vinculación de Identidad:** El alias capturado en el registro pasa al estado global persistido en `localStorage` (`fibo_reserva_v1`), alimentando dinámicamente el saludo en `/hoy` y la vitrina en `/perfil`.
4. **Mapeo de Servicios y Tono Formal:** Tras feedback del equipo, se estableció un tono formal e institucional para la declaración de protección de datos (sin expresiones coloquiales), desvinculando la experiencia de un seguro corporativo pesado y aclarando la división entre la capa gratuita (Reserva y telemedicina por hábitos) y la capa opcional pay-as-you-go (microseguros on-demand para pichangas o viajes desde S/ 3.50 vía Yape).

---

## 2. Decisiones de Diseño y Arquitectura

### A. Bifurcación en `/ingresar`
- Control segmentado estilizado con tokens de FIBO: selector entre *"Iniciar sesión"* y *"Crear cuenta"*.
- Soporte para inicialización por query parameter `?modo=registro` o `?modo=iniciar` (con envoltura `<Suspense>` para compatibilidad con Next.js App Router).
- Máscara telefónica automática en formato `987 123 987`, retroceso inteligente sin espacios residuales e `InputOTP` de 4 casillas con auto-focus y confirmación automática.
- Si el usuario selecciona *"Crear cuenta"*, tras validar el SMS es enviado directamente a `/onboarding`. Si selecciona *"Iniciar sesión"*, el sistema verifica si ya completó el onboarding para llevarlo a `/hoy` o a `/onboarding`.

### B. Los 5 Pasos del Onboarding (`/onboarding`)
- **Paso 1 (Identidad y Alias):** Nombres, apellidos, alias (*"¿Cómo te gusta que te llamen?"*) y correo electrónico para constancias.
- **Paso 2 (Diagnóstico Gen Z):** Ocupación (estudiante, primer empleo, freelancer), mayor desafío (ansiedad por dinero, sedentarismo, sobrecarga mental) y pilar prioritario (Bolsillo, Cuerpo, Mente).
- **Paso 3 (Transparencia y Protección de Datos):** Tono formal e institucional. 3 compromisos de honor:
  1. Hábitos subsidian beneficios de salud preventiva (telemedicina con Dr. Online).
  2. Confidencialidad estricta sin venta a terceros.
  3. Escudo de Racha que protege ante semanas difíciles sin penalizaciones ni culpa.
  - Checkbox de consentimiento informado con FIBO.
- **Paso 4 (Storytelling del Producto):** Explicación del impacto compuesto de la espiral de Fibonacci, respaldo tangible de la Reserva (hasta S/ 15,000) y coberturas on-demand opcionales.
- **Paso 5 (Tour Guiado del App Shell):** Selector interactivo de las 4 vistas del producto (`Hoy`, `Comunidad`, `Progreso`, `Perfil`) antes de activar la Reserva.
- **Finalización:** Lluvia de confetti con la paleta de marca (`#0099CC`, `#D4A24C`, `#01A355`), guardado del perfil en `ReservaContext` y redirección a `/hoy`.

### C. Cohesión en el App Shell
- En `/hoy`, el saludo se personaliza dinámicamente con el alias del usuario (`¡Hola, [Alias]! ✨`).
- En `/perfil`, se sincronizan los nombres y el identificador social `@alias`.

---

## 3. Estado Técnico y Verificación

- `npm run typecheck` pasó con código 0 (0 errores de TypeScript).
- `npm run build` compiló con éxito las 17 rutas estáticas y dinámicas de la aplicación.
- Especificación formal registrada en `docs/10-features/07-registro-onboarding-primer-ingreso.md`.
