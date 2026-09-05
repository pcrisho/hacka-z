# 05 Set. 2026 (sesión 3, continuación) — Theming aplicado sobre `app/`

> Entrada de bitácora. **No editar después de escrita** — solo se agregan entradas nuevas con fecha nueva.

## Qué se pidió

Aplicar los tokens de FIBO sobre el scaffold de Next.js + shadcn ya levantado en `app/` (paleta, tipografía, radios), que había quedado con la paleta neutra genérica del preset `b1tgce4ig`.

## Qué se hizo

1. **`app/app/globals.css`**: los tokens OKLCH neutros del preset se reemplazaron por los hex reales de `design-system.md`/`brandboard.html`, en light y dark. Dos tokens nuevos que no existían como variables CSS: `--link` (cyan-800/`#004C66` en claro, `#6FD6FF` en oscuro) y `--destructive` remapeado a terracota-dark (`#8C4A2F`) en vez de la terracota base.
2. **Se encontró y corrigió un bug de contraste real dentro del propio componente de shadcn**, no solo en la documentación: el variant `link` del `Button` usa `text-primary` por defecto, y `--primary` es cyan500 — el mismo color que la auditoría de contraste de la sesión anterior (`2026-09-05-branding-cierre.md`) ya había marcado como no apto para texto corrido (3.27:1, falla AA). Se separó el token `--link` específicamente para esto y se cambió `components/ui/button.tsx` para que el variant `link` use `text-link` en vez de `text-primary`. El variant `destructive` tiene el mismo patrón (texto de color sobre fondo traslúcido) — por eso `--destructive` se mapeó a terracota-dark, no a la terracota base, siguiendo el mismo patrón "texto oscuro + fondo tintado" ya validado en los chips del brandboard.
3. **`--radius` subido de `0.625rem` a `1.25rem`** para que la escala derivada (que ya usa el Card por defecto) caiga en el rango 20-24px de `design-system.md` §5. Los botones no necesitaron un `rounded-full` forzado — a esa altura de botón, el radio ya definido por el preset (`rounded-4xl`) se clampea visualmente a píldora completa.
4. **`app/app/layout.tsx`**: `Inter` (que no era ninguno de los tokens decididos) reemplazado por `Geist` como fuente de cuerpo/UI; `Bricolage_Grotesque` agregado como fuente de heading (aplicada a `h1`-`h6` vía `@layer base`); `Geist_Mono` sin cambios. Las tres están en el manifiesto de Google Fonts que Next.js autohospeda — sin llamadas a un CDN externo en runtime. De paso, `lang="en"` → `lang="es"` (`AGENTS.md`: todo el contenido del repo va en español).
5. **`app/app/page.tsx`** reemplazado por una página mínima que ejercita el theming (heading Two-Tone, los 6 variants del `Button`) en vez del boilerplate en inglés del scaffold — es un smoke test visual, no una pantalla real del producto.
6. Verificado con `pnpm dev`: compila sin errores, `HTTP 200`, el copy y los variants nuevos aparecen en el HTML servido. Servidor detenido al terminar.

## Estado al cerrar

`app/` queda inicializado, themeado y verificado — listo para empezar a construir pantallas reales de la landing o el prototipo. Detalle técnico completo en `docs/07-construccion/stack-tecnico.md` §3.

## Qué sigue

Construir la primera pantalla real (recomendado: Hero de la landing, `esquema-landing.md` §1, ya tiene el tagline y el copy cerrados) o el primer paso del onboarding del prototipo (`esquema-mvp.md` §1) — cualquiera de los dos es un buen primer componente real para validar el theming en contenido de producto, no solo en el smoke test.
