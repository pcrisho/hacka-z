# Bitácora: 08 Setiembre 2026 — Auditoría Heurística de Landing Page y Entrega de One-Pager HTML con Citas Web

## 1. Contexto y Objetivos de la Sesión
Continuando con la jornada de entrega para la preselección (08 Set. 2026):
1. El usuario solicitó validar y auditar la landing page (`app/app/page.tsx` y `app/components/landing/*`) sin modificar código inicialmente, contrastándola con el MVP v3 ya construido, la rúbrica y las decisiones de gobernanza.
2. Tras presentar el diagnóstico detallado (skill `auditoria-ux-ui`), el usuario autorizó los cambios ("Procede").
3. Se implementaron los ajustes de contenido y microcopy en la landing page.
4. Se construyó el archivo final `docs/05-entregables/one-pager.html` con layout 16:9 widescreen, diseño responsive, botón de guardado como PDF (`window.print()`) y citas con enlaces URL directos y activos a las fuentes primarias de mercado.

## 2. Ajustes Aplicados en la Landing Page
- **`mecanismo.tsx`:** 
  - Se corrigió el mockup del iPhone que mostraba `"S/ 150 en Reserva"` (concepto monetario descartado), reemplazándolo por `"150 pts en Reserva"` y `"Nivel 1 • Cobertura activa"`.
  - Se explicitó la oferta del Paso 3: telemedicina 24/7 y microseguros médicos desde S/ 9.90/mes vía Yape, respaldados por Pacífico Seguros.
  - Se incorporó un bloque comunitario para destacar las **Tribus** y la **Salida Protegida** (seguro de accidentes colectivo on-demand para pichangas o salidas desde S/ 3.50 por persona).
- **`hero.tsx`:**
  - Se perfeccionó el badge y el párrafo del hero para explicitar que los hábitos diarios desbloquean microseguros médicos y colectivos de Pacífico Seguros, sin contratos forzosos.
- **`problema.tsx`:**
  - Se enriquecieron las tarjetas comparativas ("Los seguros de siempre" vs. "La experiencia FIBO"), añadiendo el badge con el dato verificado del **84.9% de jóvenes sin planilla ni EPS** (INEI) y contrastándolo con los microseguros on-demand y las Tribus.
- **`faq.tsx`:**
  - Pregunta 1 actualizada para aclarar la naturaleza freemium: registro, hábitos y Reserva 100% gratuitos, ganando el derecho a activar microseguros por Yape desde S/ 9.90/mes.
  - Se añadió la Pregunta 5 sobre el uso de FIBO en grupos/universidades con Tribus y Salidas Protegidas.

## 3. Validación Técnica
- `pnpm exec tsc --noEmit`: 0 errores de TypeScript.
- `pnpm run build`: Compilación exitosa con Turbopack (Next.js 16.2.6), 18/18 páginas estáticas y dinámicas generadas limpiamente.
- Renderizado de `one-pager.html` verificado en Chromium headless con fidelidad visual exacta al diseño.

## 4. Archivos Entregados
- `docs/05-entregables/one-pager.html`: One-Pager oficial en HTML interactivo y PDF-ready con citas y URLs verificadas.
- Componentes de landing actualizados: `mecanismo.tsx`, `hero.tsx`, `problema.tsx`, `faq.tsx`.
