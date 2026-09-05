# Stack técnico — landing + prototipo MVP FIBO

> `README.md` de esta carpeta decía explícitamente que el stack exacto "se define al empezar a codear... no es un documento de planeación". Esta sesión (05 Set., 2ª) es esa sesión — se cierra aquí antes de correr el primer comando de scaffolding.

## 1. Decisión

| Pieza | Elección | Por qué |
|---|---|---|
| Framework | **Next.js** (App Router), fullstack | Resuelve en un solo proyecto la landing (`esquema-landing.md`) y el prototipo (`esquema-mvp.md`); route handlers ocultan la API key del agente conversacional sin necesitar un backend separado (`PRD-mvp.md` §5: "llamada real a LLM, no bloqueante") |
| Hosting | **Vercel** | Deploy inmediato desde el repo, gratis en el tier del hackathon, cero configuración de servidor — coherente con el criterio de "MVP = validar, no construir completo" (`AGENTS.md`) |
| Base de datos | **Sin BD por defecto.** **NeonDB** (Postgres serverless) únicamente para la tabla de lista de espera/referidos de la landing | El estado de hábitos/Reserva del prototipo vive en cliente, sin cambios (`PRD-mvp.md` §5: "no es necesario resolver persistencia multi-usuario real"). Pero la landing sí necesita contar registros orgánicos y referidos entre visitantes distintos (`esquema-landing.md` §5, `historias-usuario-y-validacion.md` §4 última fila: "contar registros orgánicos + referidos") — eso no puede vivir solo en `localStorage` de cada navegador. NeonDB se integra nativo con Vercel/Next.js sin fricción |
| UI | **shadcn/ui**, tematizado con las CSS variables de `design-system.md`/`brandboard.html` | Es código copiado (no una librería cerrada) sobre Radix + Tailwind — se tematiza vía variables CSS, que ya mapean 1:1 con los tokens de FIBO (cyan/verde/dorado/terracota). Permite partir de un preset y crear/modificar componentes propios encima, en vez de construir desde cero cada control |

## 2. Cómo se tematiza shadcn con los tokens de FIBO

shadcn/ui espera variables CSS tipo `--primary`, `--radius`, etc. en `globals.css`. Mapeo directo desde los tokens ya cerrados (`design-system.md` §2, §2.1):

- `--primary` → Cyan Pacífico `#0099CC` (texto/ícono siempre en variantes oscuras cuando el fondo es claro, ver §2.1)
- `--secondary` → Verde Salud, mismo patrón de chip-con-fondo-tintado que ya usa el brandboard
- `--accent` → Dorado `#D4A24C`, **solo como relleno/ícono** (nunca `--accent-foreground` en fondo claro — es la regla de contraste de §2.1, no negociable al tematizar)
- `--destructive`/estado de pausa → Terracota, con el mismo patrón de chip
- `--radius` → variable por componente (pill en botones/inputs, 20-24px en tarjetas), no un solo valor global — así se preserva la mezcla de radios que ya define `design-system.md` en vez de aplanarla a un solo `rounded-lg`
- Tipografía → `Bricolage Grotesque` (display) + `Geist` (cuerpo/UI) + `Geist Mono` (utilitaria), cargadas vía `next/font/google`

## 3. Ubicación del código — resuelto (05 Set., 2ª sesión)

**`app/` dentro de este mismo repo.** Confirmado por Roberto — todo el proyecto (docs + código) en un solo lugar, un solo `git log` cuenta toda la historia.

Scaffolding ya ejecutado: `pnpm dlx shadcn@latest init --preset b1tgce4ig --template next --pointer`, con `--name fibo`. Detalle técnico real del resultado:

- **Next.js 16.2.6** (App Router, Turbopack), **React 19.2.4**. Es una versión de Next más nueva que mi conocimiento de entrenamiento — el propio `app/AGENTS.md` generado por el scaffold lo advierte explícitamente y apunta a `node_modules/next/dist/docs/` como fuente de verdad local; se consulta ahí antes de escribir código de framework que no esté ya validado en este proyecto.
- **Base UI** (`@base-ui/react`), no Radix — el preset eligió esta base de componentes headless por defecto.
- El comando inicial creó una carpeta anidada `app/fibo/` con su propio `.git` interno (comportamiento del template al recibir `--name`) — se aplanó a `app/` directamente y se eliminó el `.git` anidado para que quede como parte de un solo repo, no un submódulo fantasma.
- `app/.gitignore` ya excluye `node_modules`, `.next/`, etc. — confirmado que `git status` desde la raíz del repo solo lista `app/` como una entrada nueva, no miles de archivos.
- Verificado: `pnpm dev` levanta y sirve `HTTP 200` en `localhost:3000`.
- **Preset `b1tgce4ig` traía paleta neutra ("mist"/"base-luma") — ya reemplazada (05 Set., theming pass).** `app/app/globals.css` pasó de tokens OKLCH neutros a los hex reales de `design-system.md`/`brandboard.html` (light + dark), con dos matices nuevos que no existían como tokens CSS todavía:
  - `--link` (`#004C66` claro / `#6FD6FF` oscuro): el variant `link` de shadcn usa `text-primary` por defecto, y `--primary` es el cyan500 que §2.1 ya marcó como no apto para texto corrido (3.27:1). Se separó un token de texto-seguro solo para esto — `components/ui/button.tsx` variant `link` ahora usa `text-link`, no `text-primary`.
  - `--destructive` se mapeó a terracota-dark (`#8C4A2F`), no a la terracota base — el variant `destructive` de shadcn lo usa como color de texto sobre un fondo traslúcido (`bg-destructive/10 text-destructive`), el mismo patrón "texto oscuro + fondo tintado" que ya validamos para los chips del brandboard.
  - `--radius` subido a `1.25rem` (antes `0.625rem`) para que la escala derivada (`radius-lg`, que ya usa el Card por defecto) caiga en el rango 20-24px de `design-system.md` §5 sin tocar cada componente a mano. Los botones (`rounded-4xl` en el preset) ya salían con forma de píldora incluso antes de este cambio — a esa altura de botón, cualquier radio ≥18px se clampea visualmente a estadio completo, así que no hizo falta forzar `rounded-full` a mano.
  - Tipografía cableada en `app/app/layout.tsx`: `Geist` (antes `Inter`, que no era ninguno de los tokens decididos) como `--font-sans`, `Bricolage_Grotesque` nuevo como `--font-heading` (aplicado a `h1`-`h6` vía `@layer base` en `globals.css`), `Geist_Mono` sin cambios. Las tres están en el manifiesto de Google Fonts que Next.js autohospeda (`node_modules/next/dist/compiled/@next/font/dist/google/font-data.json`) — cero llamadas a un CDN externo en runtime.
  - `lang="en"` → `lang="es"` en `layout.tsx` (`AGENTS.md`: todo el contenido del repo va en español).
  - `app/app/page.tsx` reemplazado por una página mínima que ejercita el theming (heading Two-Tone, los 6 variants de `Button`) en vez del boilerplate en inglés del scaffold — sirve como smoke test visual, no es una pantalla real del producto.
  - Verificado con `pnpm dev`: compila sin errores, `HTTP 200`, el nuevo copy y los variants renderizan en el HTML servido.

## 4. Qué NO cambia con esta decisión

- El honor system, el flujo crítico único, y todo lo demás de `PRD-mvp.md` — este documento es solo la capa de implementación, no reabre ninguna decisión de producto.
- La landing sigue sin ser un entregable obligatorio de las bases (`README.md` de esta carpeta) — NeonDB ahí es una mejora de señal de campo, no un requisito del concurso.
