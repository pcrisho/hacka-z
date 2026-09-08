# Bitácora: Optimización Integral de Metadatos y Configuración PWA en Todas las Rutas

- **Fecha:** 06 Set. 2026 (Día 6 de 8 del sprint)
- **Autor / Colaborador:** Roberto Crisóstomo & Antigravity

---

## 1. Contexto y Objetivos

La aplicación FIBO contaba con una estructura funcional sólida (Landing + Prototipo interactivo de 9 rutas), pero carecía de una capa de metadatos moderna, estructurada e indexable:
- Las páginas del flujo de la app estaban implementadas directamente como `"use client"`, impidiendo la declaración de metadatos de servidor de Next.js (`Metadata`).
- El navegador mostraba títulos genéricos o vacíos, y al compartir enlaces por WhatsApp, Telegram o redes no existían tarjetas de Open Graph o Twitter Card.
- No existía un archivo `manifest.ts` / `manifest.webmanifest`, ni iconos PWA en resoluciones clave (192, 512, maskable, apple-touch-icon), impidiendo la instalación nativa como PWA en iOS/Android.
- No existían `robots.txt` ni `sitemap.xml` para indexación SEO y rastreo limpio.

El objetivo de esta sesión fue **subir de nivel los metadatos de todas las rutas de la PWA**, implementando la arquitectura canónica de Server Components de Next.js App Router para metadatos, generando el manifiesto PWA oficial, assets vectoriales convertidos a PNG de alta resolución, Open Graph universal y configuración de viewport.

---

## 2. Lo que se construyó y mejoró

### A. Arquitectura Canónica de Metadatos en Next.js (Server Component + Client View)
Para permitir que las rutas interactivas con `"use client"` tengan metadatos completos y tipados, se separó la vista cliente en un componente dedicado y se mantuvo `page.tsx` como Server Component con `export const metadata: Metadata`:

1. **`/` (Landing):**
   - Título: `FIBO — Micro-hábitos que construyen tu respaldo`
   - Canonical: `/`
   - Open Graph + Twitter Cards con descripción de valor Gen Z + Pacífico Seguros.
2. **`/ingresar`:**
   - Client Component extraído a `ingresar-view.tsx`.
   - Título: `Ingresar | FIBO`
   - Metadatos de acceso seguro por SMS/OTP y gestión de racha.
3. **`/onboarding`:**
   - Client Component extraído a `onboarding-view.tsx`.
   - Título: `Onboarding | FIBO`
   - Metadatos de personalización de los 3 micro-hábitos y Reserva inicial con Fibo.
4. **`/hoy`:**
   - Client Component extraído a `hoy-view.tsx`.
   - Título: `Hoy | FIBO`
   - Metadatos de registro diario de hábitos (Bolsillo, Cuerpo, Mente), racha protegida y Reserva.
5. **`/comunidad`:**
   - Client Component extraído a `comunidad-view.tsx`.
   - Título: `Comunidad y Tribus | FIBO`
   - Metadatos de retos grupales, tribus y microseguros on-demand de pichanga y salidas.
6. **`/progreso`:**
   - Client Component extraído a `progreso-view.tsx`.
   - Título: `Mi Progreso | FIBO`
   - Metadatos de crecimiento de Reserva de Bienestar y respaldo médico proyectado.
7. **`/perfil`:**
   - Client Component extraído a `perfil-view.tsx`.
   - Título: `Mi Perfil | FIBO`
   - Metadatos de configuración, vitrina de trofeos e insignias y coberturas activas.
8. **`/seguro`:**
   - Client Component extraído a `seguro-view.tsx`.
   - Título: `Microseguro On-Demand | FIBO`
   - Metadatos de activación pay-as-you-go vía Yape sin penalidad por pausa.
9. **`/recompensa`:**
   - Client Component extraído a `recompensa-view.tsx`.
   - Título: `Recompensas | FIBO`
   - Metadatos de desbloqueo de beneficios y acceso al microseguro por constancia.
10. **`/momento-de-verdad`:**
    - Client Component extraído a `momento-de-verdad-view.tsx`.
    - Título: `Asistencia Inmediata | FIBO`
    - Metadatos de soporte guiado por IA y derivación prioritaria con asesores de Pacífico.

### B. Manifiesto Web App (`app/manifest.ts` → `/manifest.webmanifest`)
Se configuró el manifiesto oficial PWA de Next.js:
- `name`: "FIBO — Hábitos que respaldan tu bienestar"
- `short_name`: "FIBO"
- `start_url`: "/hoy"
- `display`: "standalone"
- `background_color`: "#04262F" (noche teal de la marca)
- `theme_color`: "#0099CC" (Cyan Pacífico)
- `categories`: ["health", "fitness", "finance", "lifestyle"]
- Atajos de app (`shortcuts`): *Hoy*, *Comunidad*, *Progreso*, *Seguro*.
- Iconos adaptativos estándar y `maskable` (cumple con las directrices de Google Play Store y Android PWA).

### C. Generación de Assets Vectoriales y PNG de Alta Resolución
Utilizando `rsvg-convert` y un script reproducible (`scripts/generate-pwa-assets.js`), se generaron los recursos gráficos de la marca respetando el design system (`#0099CC`, `#D4A24C`, `#04262F`):
- `public/icons/icon-192.png` & `icon-512.png` (iconos cuadrados estándar con radio).
- `public/icons/icon-maskable-192.png` & `icon-maskable-512.png` (icono full bleed con safe-zone para Android adaptive icons).
- `public/icons/apple-touch-icon.png` (180x180 para iOS Safari).
- `public/icons/favicon-32x32.png` & `favicon-16x16.png`.
- `public/og-image.png` (1200x630, banner social preview completo con mock visual de la app, espiral áurea, pilares y badge oficial Pacífico Seguros × UCSUR).

### D. Layout Global y Viewport (`app/layout.tsx`)
- Separación moderna de `viewport` y `metadata` según Next.js 14+:
  - `themeColor` con media queries para modo claro (`#0099CC`) y modo oscuro (`#04262F`).
  - `viewportFit: "cover"`, `userScalable: false`, `maximumScale: 1` para sensación táctil 100% nativa.
- Configuración de `appleWebApp` (`capable: true`, `statusBarStyle: "default"`, `title: "FIBO"`).
- `metadataBase: new URL("https://fibo.pe")`.
- `title.template: "%s | FIBO"` con fallback default.
- Reglas anti-detección de formato indeseado (`telephone: false`, `date: false`).

### E. Indexación SEO y Descubrimiento (`robots.ts` y `sitemap.ts`)
- `app/robots.ts` → `/robots.txt`: Permite el rastreo de todas las rutas y bloquea endpoints internos `/api/`. Enlaza directamente al sitemap.
- `app/sitemap.ts` → `/sitemap.xml`: Lista las 10 rutas del ecosistema con prioridades (`1.0` landing, `0.9` hoy, `0.85` comunidad, etc.) y frecuencias de actualización programadas.

### F. Navegación del Header y Redirección a Landing Page
- Se actualizó `AppHeader` (`app/app/(app)/_components/app-header.tsx`):
  - El isotipo/marca `BrandMark` ahora está envuelto en un componente `<Link>` accesible con hover y `aria-label`.
  - **En rutas fuera del app (`/ingresar`, `/onboarding`):** El header redirige directamente a la landing page comercial (`/`), permitiendo al usuario volver al inicio de forma natural sin quedar atrapado.
  - **En rutas del app (`/hoy`, `/comunidad`, `/progreso`, `/perfil`):** El header redirige al dashboard de hábitos (`/hoy`), preservando la experiencia PWA nativa y evitando expulsar al usuario autenticado a la landing de marketing.
  - En `/ingresar`, el isotipo central sobre el formulario también fue vinculado a `/` para consistencia total.

---

## 3. Verificación Técnica
- `tsc --noEmit`: **0 errores de tipos**.
- `next build`:
  - Compilación exitosa en 8.1s.
  - **17/17 páginas y rutas generadas**, incluyendo los nuevos endpoints automáticos:
    - `/manifest.webmanifest`
    - `/robots.txt`
    - `/sitemap.xml`
- Verificación de etiquetas `<head>` en HTML estático:
  - Títulos con plantilla `%s | FIBO` funcionando en todas las páginas.
  - Tags de Open Graph, Twitter Card, canónicas e iconos validados.
  - Manifiesto JSON inspeccionado y validado en `.next/server/app/manifest.webmanifest.body`.
