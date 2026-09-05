# 05 Set. 2026 (sesión 3) — Brandboard visual, brief de logo y stack técnico

> Entrada de bitácora. **No editar después de escrita** — solo se agregan entradas nuevas con fecha nueva.

## Qué se pidió

Validar visualmente el design system cerrado en la sesión anterior (`2026-09-05-branding-cierre.md`) con un artifact tipo brandboard; dejar una copia local iterable en `docs/07-construccion/`; redactar un documento de recomendaciones para la exploración de logo que Roberto hace por su cuenta con inspiración de Behance; y validar/cerrar el stack técnico del prototipo (Next.js, Vercel, NeonDB, shadcn/ui).

## Qué se hizo

1. **Se revisó `docs/03-mvp/ux-ui-referencia-3`** (nueva carpeta agregada por el usuario entre mensajes) — resultó ser el sistema de diseño extraído de `caldera.xyz`, un producto cripto/web3 ("Caldera"), con paleta volcánica (naranja ember, violeta plasma) totalmente ajena a FIBO. Se descartó adoptar su paleta, pero se rescató su método tipográfico (display expresivo de peso fuerte + cuerpo humanista de peso medio) como justificación para un pivote de tipografía.
2. **Se construyó y publicó `FIBO Brandboard`** (artifact HTML): paleta con las anotaciones de contraste WCAG ya validadas en la sesión anterior, tipografía en vivo, tono de voz en pares real/nunca, los 5 componentes prioritarios de `design-system.md` §5 construidos con las reglas de contraste aplicadas, y la dirección de logo (no el logo final) para comparar contra la exploración propia del usuario. Incluye un toggle de tema claro/oscuro/sistema y una espiral áurea animada en canvas (ecuación logarítmica real, no una ilustración decorativa).
3. **Se corrigió un bug de contraste en modo oscuro** que el usuario detectó con una captura de pantalla: el texto de las tarjetas "Nunca/Siempre" y las placas de la sección de logo usaban el token de texto *dependiente del tema* (que se vuelve casi blanco en oscuro) sobre fondos de chip que son intencionalmente fijos (claros siempre) — texto casi invisible. Se corrigió fijando el color de texto de esas tarjetas/placas a valores fijos, desacoplados del tema, consistente con el resto del sistema donde cada color de texto ya usa el mismo set de tokens que su superficie.
4. **Se copió el brandboard a `docs/07-construccion/brandboard.html`** para iteración local, y se referenció en `README.md` y `design-system.md` §9 (sección nueva).
5. **Se publicó `FIBO Logo Brief`** (artifact HTML, documento): qué debe comunicar el ícono (crecimiento, calidez, distancia de Quererte Sano), lo ya cerrado (lockup único, mismo ícono que el anillo de progreso), las 3 trampas comunes del territorio "espiral/Fibonacci" en Behance (nautilus realista, diagrama de rectángulos áureos, check-en-escudo genérico) con una galería de referencia visual construida en SVG, y 3 pruebas de validación (tamaño mínimo 16px, monocromía, "tápame el texto FIBO").
6. **Se pivotea la tipografía de titulares** de `Poppins` (decisión de la sesión anterior) a `Bricolage Grotesque` (display) + `Geist` (cuerpo/UI) + `Geist Mono` (utilitaria) — validado visualmente en el brandboard antes de escribirlo en `design-system.md` §3 y §6.
7. **Se cerró el stack técnico** en `docs/07-construccion/stack-tecnico.md`: Next.js (App Router) + Vercel + shadcn/ui tematizado con los tokens de FIBO + NeonDB únicamente para la tabla de waitlist/referidos de la landing (el prototipo del app sigue sin necesitar BD, sin cambios respecto a `PRD-mvp.md` §5).

## Estado al cerrar

Branding y stack quedan cerrados con una sola pregunta abierta y explícita: dónde vive el código de la app dentro del repo (subcarpeta de este mismo repo vs. repo separado) — es la única decisión pendiente antes de correr `create-next-app`.

## Qué sigue (para la próxima sesión)

1. Confirmar la ubicación del código (única pregunta abierta de `stack-tecnico.md` §3) y correr el scaffolding de Next.js.
2. Desplegar `01-research/instrumento-campo.md` v2 — sigue siendo la tarea más urgente y bloqueante, sin relación con esta sesión.
3. Cuando Roberto tenga 2-3 candidatos de logo (usando `FIBO Logo Brief` como criterio), revisar juntos antes de producir el vector final.
