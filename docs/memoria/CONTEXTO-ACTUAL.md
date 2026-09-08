# Contexto actual del proyecto

> **Léeme primero si eres un agente nuevo entrando a este repo.** Este archivo se **reescribe** cada sesión de trabajo para reflejar el estado más reciente — es una fotografía del presente, no un historial. Para ver cómo llegamos aquí y por qué cambiaron las decisiones, ver `bitacora/` (esa sí es append-only, nunca se reescribe).
>
> Última actualización: 08 Set. 2026 (día 8 de 8 del sprint). En orden: sesiones del 01 al 05 Set. cerraron branding, research, stack y landing v1. Sesiones del 06 Set. pulieron `/ingresar`, onboarding de 5 pasos, pestañas de `/comunidad`, `/progreso` y `/perfil`, metadatos PWA e indexación. **Sesión del 08 Set. (hoy):** 
> 1. **Mindful Rituals en `/hoy`:** resolvió el "Checkbox Syndrome" e implementó rituales por pilar (Alcancía de Salud para Bolsillo; Selector de movimiento con Live Timer sincronizado en la card de Cuerpo; Pausa de Respiración Guiada 4-4-4 de 30s y Check-in mental para Mente).
> 2. **Navegación temporal y calendario reactivo:** manejadores `‹` y `›` en Calendar Strip con estados contextuales (Hoy activo con dual-path, días pasados completados y días protegidos por el Escudo de Racha sin culpa).
> 3. **Desacople del Anillo Central:** Anillo de `/hoy` 100% calibrado al progreso de HOY (0-100%) con banner de cobertura del día asegurada al cumplir los 3 hábitos.
> 4. **Anti-intrusión de modales:** persistencia en `localStorage` (`fibo_niveles_celebrados_v1`) para evitar aperturas repetitivas de felicitación de nivel.
> 5. **Centro de Notificaciones y Avisos:** campana interactiva en el Header (`notificaciones-sheet.tsx`) con acceso a recompensas, racha y avisos de Dr. Online.
> 6. **Rediseño integral de `/recompensa`:** voucher digital perforado con código copiable (`FIBO-CALM-2026`), conversión a microseguro médico pay-as-you-go de Pacífico (S/ 9.90/mes vía Yape, pausable sin penalidad, hasta S/ 15,000 de respaldo) y camino escalonado de 3 niveles.
> 7. **Ecosistema de Comunidad, Tribus y Ruta Dedicada `/salida` (`/comunidad`, `/salida` y `/hoy`):** 
>    - **Feedback Loop de Retos:** retos inscritos en `/comunidad` se sincronizan en tiempo real en `/hoy` con botón de check diario (+10 pts a la Reserva).
>    - **Ciclo de vida de Tribus:** creación interactiva de tribus con selectores limpios para Ámbito (universidad, instituto, trabajo, etc.) y Metas Colectivas Semanales, membresía activa y modal de detalle con desafío semanal, Escudo de Tribu Pacífico e invitación automática vía WhatsApp.
>    - **Ruta Dedicada de Salida Protegida (`/salida`):** reemplazó el modal claustrofóbico por una página transaccional ergonómica con botón de retorno (`← Comunidad`). Integra selector de Tribu anfitriona, regla de proporcionalidad del Capitán (cubre únicamente a los asistentes reales, e.g. 12 de 100 miembros), desglose financiero transparente con recaudación Yape, deep linking (`/salida?t=...&act=...&p=...`) con link copiable para el grupo de WhatsApp de la tribu, y emisión express con póliza colectiva real (`PAC-TRIBU-XXXX`). Títulos y tarjetas limpios de saturación de emojis, priorizando iconografía vectorial fina.
>    - Todo documentado formalmente en `docs/10-features/08-hoy-v3-mindful-habits-y-navegacion.md`, `09-recompensa-v2-voucher-y-microseguro.md` y `10-comunidad-tribus-y-seguro-grupal.md`.
> 8. **Progreso y Analíticas de Bienestar Coherentes (`/progreso` v3):**
>    - **Sincronización Total con Hoy y Comunidad:** Visualización de Retos Activos (`diasCompletados` de `metaDias`, barra de progreso y recompensas) y de la Tribu activa (meta colectiva semanal y % de cumplimiento grupal).
>    - **Métricas Vivas por Pilar:** Distribución dinámica conectada con los hábitos de `/hoy` (Alcancía de Salud para Bolsillo, movimiento para Cuerpo y pausas mindful para Mente).
>    - **Selector Temporal Reactivo:** Filtro interactivo `Semana` | `Mes` | `Histórico` que recalcula la curva de crecimiento compuesto en `AreaChart`.
>    - **Corrección Aseguradora Pacífico:** Retirada la mención de "descuento de prima"; se reemplazó por la tarjeta oficial de "Derecho Ganado / Microseguro Pay-as-you-go" a S/ 9.90/mes vía Yape con respaldo médico de hasta S/ 15,000.
>    - Documentado en `docs/10-features/05-progreso-analiticas-y-reserva.md` y bitácora. Verificado con `pnpm exec tsc --noEmit` (0 errores) y `pnpm run build` (18/18 páginas generadas).
> 9. **Perfil de Bienestar Minimalista (`/perfil` v3):**
>    - **Estética Deportiva y Cero Ruido Visual (Inspiración Adidas Running & Strava):** Retiro de la foto mock genérica de Unsplash y del banner superior de gradiente. Implementación de avatar vectorial sobrio con icono `<User />` y micro-badge de verificación de Pacífico Seguros.
>    - **Tira de Métricas Clave:** 4 métricas compactas (Racha 5d, Reserva en puntos, Movimiento activo 4.5h, Respaldo médico garantizado S/ 15k).
>    - **Cards Deslizables Horizontales (`snap-x overflow-x-auto scrollbar-none`):**
>      * Carrusel de Vitrina de Insignias (Ahorro Hormiga, Movimiento Constante, Mente Serena, Capitán de Tribu).
>      * Carrusel de Beneficios Pacífico (Dr. Online telemedicina 24/7, Quererte Sano y Microseguro Pay-as-you-go S/ 9.90/mes).
>    - **Conexión Social y Gestión de Cuenta:** Tarjeta compacta de Tribu con enlace para compartir vía WhatsApp, y menú agrupado estilo iOS para gestionar póliza, declaración jurada de salud y agente de reclamos.
>    - Documentado en `docs/10-features/06-perfil-social-y-proteccion.md` y bitácora. Verificado con `pnpm exec tsc --noEmit` (0 errores) y `pnpm run build` (18/18 páginas generadas).
> 10. **Auditoría Heurística y Actualización de la Landing Page:**
>    - Se corrigió el mockup del iPhone en `mecanismo.tsx` (reemplazando `S/ 150 en Reserva` por `150 pts en Reserva` y `Nivel 1 • Cobertura activa`).
>    - Se incorporó la oferta concreta de telemedicina 24/7 y microseguros médicos pay-as-you-go desde S/ 9.90/mes vía Yape respaldados por Pacífico.
>    - Se añadieron bloques comunitarios de Tribus & Salida Protegida (cobertura colectiva on-demand desde S/ 3.50 por persona).
>    - Se actualizaron `hero.tsx`, `problema.tsx` (con el dato verificado del 84.9% de informalidad juvenil) y `faq.tsx` (con preguntas sobre Tribus y freemium).
> 11. **Aviso de Prototipo y Privacidad en Flujo de Registro (`/ingresar` y `/onboarding`):**
>    - Implementación del componente reutilizable `PrototipoAvisoModal` (`app/app/(app)/_components/prototipo-aviso-modal.tsx`).
>    - Comunica explícitamente que la app es una prueba de concepto para la Hackathon UCSUR × Pacífico × AWS, con cero recolección de datos en servidores externos y almacenamiento 100% local en `localStorage`.
>    - Incorpora trigger no invasivo con persistencia en `localStorage` (`fibo_aviso_prototipo_visto_v1`), botón para probar con datos ficticios y banner informativo discreto en pantalla. Verificado con `pnpm exec tsc --noEmit` (0 errores) y `pnpm run build` (18/18 páginas generadas).
> 12. **One-Pager Oficial Interactivo en HTML (`docs/05-entregables/one-pager.html`):**
>    - Construido en HTML semántico, responsive (canvas 16:9 widescreen) y formato listo para exportar a PDF (`@media print` A4 apaisado).
>    - Integración de citas bibliográficas verificadas con enlaces URL directos (APESEG 2.05%, INEI 84.9%, Sapien Labs 40%, Pacífico Seguros).
>    - Showcase con las rutas reales del MVP v3 (`/hoy`, `/salida`, `/progreso`). Verificado con renderizado visual en Chromium (`one-pager-preview.png`).
> 12. **Resiliencia Offline y Fallback de Base de Datos (Anti-Cuelgues):**
>    - **Diagnóstico:** Se identificó que la landing se colgaba ante caídas de red o sin internet debido a la espera no acotada de sockets/DNS hacia NeonDB en SSR (`page.tsx`), intentos de mutación en `actions.ts` y la excepción síncrona ante `DATABASE_URL` no definida en `lib/db.ts`.
>    - **Capa DB Resiliente (`lib/db.ts`):** Detección no bloqueante de variables de entorno, timeout estricto de 1.5s por consulta y Circuit Breaker automático con enfriamiento de 30s (fail-fast 0ms) que previene cuelgues recurrentes.
>    - **Almacén Fallback en Memoria (`lib/waitlist.ts`):** Retorno instantáneo de línea base (48 registros y 5 códigos de referido para demo). Registro offline 100% operativo con generación de código único, incremento de contador y flujo de confeti/WhatsApp funcional.
>    - **Avatares Deterministas Offline (`avatar-circles.tsx`):** Soporte de fallback en SVG data URI con la paleta de FIBO ante fallos de carga externa de Dicebear.
>    - **Agente Conversacional (`/api/agente`):** Timeout acotado a 2.5s con entrega del guion de contingencia en caso de no contar con acceso a AWS Bedrock.
>    - **Validación rigurosa:** Suite `app/scripts/test-db-fallback.mjs` aprobada, `tsc --noEmit` (0 errores), `pnpm run build` (18/18 páginas generadas) y prueba en servidor de producción con respuesta en 116ms.

## Qué es esto

Equipo de 3 personas (Roberto Crisóstomo — líder, Franco Chávez, Israel Manrique) participando en la Hackathon UCSUR – Pacífico Seguros × AWS: "El futuro de los seguros para la Generación Z" (Ciclo 2026-2). Repo de documentación estratégica — el MVP se construirá como prototipo codeado (HTML/React) dentro de este mismo repo, con Claude Code como colaborador directo de construcción (decisión del 04 Set.). Fuente de verdad completa en `AGENTS.md` (leer después de este archivo).

## Dónde estamos en el sprint

Día 5 de 8 (preselección el 08 Set.). **Ya se tuvieron las 2 sesiones de mentoría (Luiggi, Cami)** — primera evidencia externa real del proyecto, síntesis completa en `02-ideacion/hallazgos-mentoria-04-set.md`. A partir de ahí se corrigieron 2 decisiones (arquitectura de distribución, encuadre de la recompensa), se añadió un territorio de producto nuevo (comunidades + seguro grupal, fuera de alcance del MVP), y se relanzó el instrumento de campo (`01-research/instrumento-campo.md` v2). Después se corrió una **auditoría de consistencia externa** (agente sin contexto previo, solo lectura) que encontró 10 hallazgos de propagación incompleta y cifras sin fuente sólida — todos corregidos el mismo día (detalle en `bitacora/2026-09-05.md`).

**El instrumento de campo v2 sigue sin desplegarse** — es la tarea más urgente y bloqueante para la próxima sesión, no un tema de documentación.

**Documentación de producto, diseño y marca ya lista para pasar a un agente/sesión enfocada en decisiones técnicas (stack, arquitectura de código).** Última pasada de validación (05 Set.): arquetipo y los 3 hábitos confirmados sin cambios (se evaluó y descartó explícitamente cambiar a arquetipos tipo "deportista"/"runner" y reencuadrar el ahorro como grupal/"junta" — sin evidencia de mentoría que lo respalde, ver `PLAN-TRABAJO.md` §7); alcance del agente conversacional cerrado (onboarding + momento de verdad, sin ampliar a soporte general); se corrigió una contradicción real en `07-construccion/design-system.md` (proponía evitar el azul corporativo con una paleta inventada, pero los tokens reales de Quererte Sano —el propio Pacífico— sí usan su cyan de marca combinado con verdes de vitalidad — la paleta de FIBO ahora hereda esos tokens reales en vez de una propuesta sin evidencia); y, en una segunda sesión el mismo día, se cerraron los 5 temas de branding que quedaban abiertos: tagline propio anclado en la espiral/crecimiento compuesto (reemplaza el vacío que dejó retirar el framing tipo "vivir tu mejor vida" de Betterfly), dirección concreta de logo/lockup (sigue sin producirse un logo final), validación WCAG de la paleta heredada (dorado/verde/terracota son colores de relleno, nunca texto plano — sin cambiar tokens), tipografía principal pasada de `Foco` (sin licencia confirmada) a `Poppins`, y tono de voz validado sin hallazgos contra el copy ya escrito. Detalle en `memoria/bitacora/2026-09-05-branding-cierre.md` y `PLAN-TRABAJO.md` §7.

**Tercera sesión el mismo día:** se construyó `FIBO Brandboard` (artifact + copia local en `07-construccion/brandboard.html`) para validar visualmente el design system, y `FIBO Logo Brief` (artifact) con el criterio para que Roberto explore el logo por su cuenta en Behance. Al revisar `docs/03-mvp/ux-ui-referencia-3` (sistema de un producto cripto, `caldera.xyz`) se rescató solo su método de pairing tipográfico, no su paleta — esto pivoteó la tipografía de titulares de `Poppins` a **`Bricolage Grotesque`** (display) + **`Geist`** (cuerpo/UI). También se cerró el **stack técnico**: Next.js + Vercel + shadcn/ui tematizado con los tokens de FIBO + NeonDB solo para waitlist/referidos de la landing (`07-construccion/stack-tecnico.md`). Detalle en `memoria/bitacora/2026-09-05-brandboard-y-stack.md`.

## Decisiones ya cerradas — no reabrir salvo que la mentoría o el campo las contradigan

| Decisión | Resumen | Detalle |
|---|---|---|
| Arquetipo | Guardián + Estudiante/Primer Empleo con Ansiedad Financiera | `PLAN-TRABAJO.md` §6 |
| MVP | Web app / prototipo clicable, un solo flujo crítico | `PLAN-TRABAJO.md` §5.1, alcance en `03-mvp/alcance-producto.md` |
| Cómo se construye el MVP | Prototipo **codeado** (HTML/React), no Figma — Claude Code construye junto a Roberto | `PLAN-TRABAJO.md` §7, decisión 04 Set. |
| Modelo de negocio | 3 capas: gratuita (adquisición) + microprima pay-as-you-go (ingreso directo) + conversión a productos tradicionales de Pacífico (motor real de rentabilidad, jugada de portafolio/marca) | `04-gtm/modelo-negocio-y-viabilidad.md` |
| Fuente de verdad para rúbrica/plazos | `BASES-CONCURSO.md` únicamente — video ≤3 min. `00-bases/LANZAMIENTO.md` es solo contexto narrativo, no puntaje | `AGENTS.md`, `PLAN-TRABAJO.md` §2, decisión 04 Set. |
| Agente conversacional | Llamada real a un LLM vía API, **no bloqueante**, con fallback a interacción simulada si falla/tarda; acotado a onboarding + primer filtro del momento de verdad, con escalamiento humano obligatorio | `02-ideacion/historias-usuario-y-validacion.md` §6, cerrado 04 Set. |
| Nombre de marca | **FIBO** (espiral de Fibonacci — crecimiento compuesto de hábitos; doble uso como nombre del producto y del agente conversacional) | `02-ideacion/historias-usuario-y-validacion.md` §0, cerrado 04 Set. |
| Framing de identidad | **Bienestar puro** — "billetera con propósito" descartada explícitamente, no se retoma | `02-ideacion/identidad-billetera-con-proposito.md` (marcado descartado), cerrado 04 Set. |
| Recompensa | Por niveles: contenido/insignia (bajo) → suscripción digital tipo mindfulness/productividad (medio, respaldado por `insight-sabias-que.md` §5) → sesión real de bienestar (alto). **Actualizado tras mentoría:** la recompensa ya no es un mecanismo paralelo al microseguro — es el paso previo gratuito que gana el derecho a que se le ofrezca | `03-mvp/alcance-producto.md` §3, cerrado 04 Set., actualizado 04 Set. tras mentoría (`02-ideacion/hallazgos-mentoria-04-set.md` §3.2) |
| Arquitectura de distribución | **FIBO es una app independiente, no vive dentro de Yape.** Yape se integra solo como pasarela de pago y canal de descubrimiento (banner/referido) | `02-ideacion/hallazgos-mentoria-04-set.md` §3.1, corregido 04 Set. tras mentoría |
| Honor system del MVP | El tracking de hábitos es autodeclarado — se acepta explícitamente como limitación conocida, no se resuelve con wearables/evidencia en el hackathon | `07-construccion/PRD-mvp.md` §4.1, `hallazgos-mentoria-04-set.md` §3.5 |
| Transparencia de datos | El onboarding anuncia desde el inicio que se ofrecerán microseguros según la constancia del usuario — sin sorpresas, con consentimiento | `02-ideacion/historias-usuario-y-validacion.md` §2 (Historia de Camila, paso 2), `hallazgos-mentoria-04-set.md` §3.6 |

**Territorio de producto nuevo, fuera de alcance del MVP:** comunidades + seguro grupal contextual (ej. seguro de pichanga entre amigos) y ayudar a dejar malos hábitos, no solo construir buenos — validados en mentoría, documentados como visión a mediano plazo en `historias-usuario-y-validacion.md` §8, no se construyen en el hackathon.

**Lo que queda pendiente de validar con mentores/campo:** el nivel alto de la recompensa, la conversión real banner-de-Yape→instalación (ya no "alcance resuelto de fábrica", ver `04-gtm/modelo-negocio-y-viabilidad.md` §3.2), y las preguntas nuevas de `01-research/instrumento-campo.md` v2 (comunidad, transparencia de datos, valor real del hábito de bienestar mental) — ver `problem-statement-v1.md` y `hallazgos-mentoria-04-set.md` §5 para el detalle.

**Gap identificado y resuelto (05 Set.):** el agente conversacional nunca se puso a prueba con Luiggi ni Cami (verificado contra las transcripciones crudas de `4-07-2026/`, ninguna lo menciona). A partir de esto, el equipo evaluó explícitamente ampliar el rol del agente a soporte general de consultas (beneficios, seguros) y **decidió no hacerlo en esta iteración** — se mantiene acotado a onboarding + primer filtro del momento de verdad (`historias-usuario-y-validacion.md` §6), y la extensión queda documentada como visión de producto en §8 del mismo archivo. Se agregó una pregunta a la guía de entrevistas de `instrumento-campo.md` v2 para cerrar parte del hueco de validación sin retrasar el lanzamiento.

## El territorio de solución (resumen)

Producto de bienestar financiero + salud/salud mental: micro-hábitos semanales (3, acotados: ahorro chico, actividad física, práctica breve de bienestar mental) que hacen crecer una "Reserva de Bienestar" — cobertura base gratuita, sin descuentos. Al alcanzar un nivel, una recompensa gana el derecho a que se le ofrezca al usuario un microseguro pay-as-you-go pausable sin penalidad (recompensa y microseguro son una sola progresión, no dos mecanismos paralelos — corrección 04 Set. tras mentoría). **FIBO es una app independiente, no vive embebida en Yape** — Yape se integra solo como pasarela de pago y canal de descubrimiento. Detalle completo, historias de usuario (Camila, Diego) y guion de pitch v1 en `02-ideacion/` y `05-entregables/guion-pitch-v1.md`.

## Hallazgos de research que más pesan

1. Pacífico es 1° en salud/EPS (**42.3%, confirmado contra Memoria Integrada 2025**), 2° en mercado general (**22.6%, jun. 2025 — actualizado, ya no usar el rango "24-25%"**).
2. Informalidad laboral (~70% general, 84.9% en jóvenes 14-24) es el driver estructural de la brecha de penetración (Perú 2.05%, 2T 2025 — corregido 05 Set., ya no usar "2.5%" — vs. OECD 6.2%).
3. Pacífico ya compite en el mismo territorio: Quererte Sano (contenido sin earning) y Seguro Salud Yape (S/9.90/mes, prima fija) — el diferencial real es "se gana con hábitos y se pausa sin penalidad".
4. El abismo de transición laboral (60 días de ventana, 3 meses de carencia) es un momento de vulnerabilidad real y bien documentado.
5. Yape, BCP y Pacífico son subsidiarias de Credicorp — la **visibilidad** del canal (banner) está resuelta de fábrica; la **instalación** de FIBO (app independiente) y la conversión posterior no lo están.
6. Betterfly valida la mecánica hábito→cobertura, **no** la adquisición B2C (es B2B2E desde 2020) — Nubank es la analogía de mecanismo de crecimiento B2C, no un producto idéntico.
7. 40% de peruanos de 18-24 años tiene dificultades clínicas de salud mental (Sapien Labs 2026); 84.9% de jóvenes de 14-24 años trabaja informalmente (más agudo que el 70% general); accountability social aumenta 65-95% el cumplimiento de metas — respaldo directo al hábito ancla de bienestar mental y al territorio de comunidades (`01-research/insight-salud-mental-y-habito-gen-z.md`).

Fuentes completas en `01-research/`.

## Correcciones importantes hechas hasta ahora (para no repetir errores)

- No hay "incubación" como premio — solo efectivo (S/2,000 / S/1,500).
- Betterfly no valida adquisición B2C (ver hallazgo #6).
- "Uso de APIs = 20% del Demoday" no es cifra oficial.
- Un bloque de texto pegado en sesión (04 Set.) simulaba una transcripción completa con ediciones de archivo que nunca ocurrieron realmente en el repo — verificado contra `git status`/`git diff` y descartado como fuente de verdad; el contenido sustantivo (guion de pitch, preguntas de negocio) sí se rescató y se usó, por indicación explícita del usuario.
- `BASES-CONCURSO.md` vs. `00-bases/LANZAMIENTO.md`: rúbricas y duración de video distintas — resuelto a favor de `BASES-CONCURSO.md` (único, video 3 min).
- "El seguro de salud depende del historial crediticio" — **incorrecto**, corregido en todo el repo (04 Set., reforzado 05 Set. tras auditoría al detectar 2 residuos en `PLAN-TRABAJO.md` mismo). La suscripción médica se evalúa por declaración jurada de salud, no por scoring bancario; la barrera real es la informalidad laboral/falta de planilla. El historial crediticio sí importa, pero para beneficios cruzados dentro de Credicorp (BCP↔Pacífico), no para el seguro de salud en sí. Detalle en `01-research/pacifico-friccion-usuario-eps.md` §3.
- Penetración de seguros en Perú citada como "2.5% del PBI" sin fuente verificable — **corregido 05 Set.**: el dato real, confirmado contra el informe trimestral primario de APESEG (2T 2025), es **2.05%**. Propagado a `pacifico-seguros-research.md`, `industria-seguros-comparativa.md`, `territorios-solucion.md`, `guion-pitch-v1.md`.
- Cifra de Nubank "CAC $0" (usada como precedente de adquisición B2C) no tenía fuente y era un framing de RR.PP. — **corregido 05 Set.**: el F-1 de Nu Holdings ante la SEC (2021) reporta ~US$5/cliente, 80-90% de adquisición orgánica. Detalle en `territorios-solucion.md` §3.

## Preguntas abiertas / próximos pasos

Ver `PLAN-TRABAJO.md` §8. Las prioridades vigentes para el cierre del sprint:
1. **Redacción y entrega del One-Pager oficial ([`05-entregables/one-pager.md`](../05-entregables)):** Elaborar el documento oficial bajo el formato de `MODELO-ONE-PAGER.md` con foco en los criterios de preselección (Sustentación 35%, MVP 35%, GTM 20%, Equipo 10%).
2. **Grabación y edición del Video de Sustentación (≤3 min):** Estructurar el guion final en `05-entregables/guion-pitch-v1.md` guiando la demo sobre el prototipo funcional codeado v3.
3. **Prototipo v3 100% construido y validado:** Shell con 4 tabs (`/hoy`, `/comunidad`, `/progreso`, `/perfil`), rutas transaccionales (`/recompensa`, `/salida`, `/seguro`, `/momento-de-verdad`), Mindful Rituals, analíticas en Recharts y emisión de seguro grupal. Verificado con `tsc --noEmit` (0 errores) y `pnpm run build` (18/18 páginas generadas).

## Mapa de documentos

```
docs/
├── memoria/              ← estás aquí (CONTEXTO-ACTUAL.md + bitacora/ + auditoria-consistencia-2026-09-05.md)
├── 00-bases/              BASES-CONCURSO.md (única fuente de rúbrica/plazos) + LANZAMIENTO.md/plantillas (contexto, no puntaje) + equipo
├── 01-research/           insumo oficial + research propio + instrumento de campo v2 + insight-salud-mental-y-habito-gen-z.md
├── 02-ideacion/           territorio de solución, historias de usuario, identidad, problem-statement-v2.md, hallazgos-mentoria-04-set.md
├── 03-mvp/                alcance del producto v3 + referencias UI/UX de Pacífico y benchmarks
├── 04-gtm/                modelo de negocio y viabilidad
├── 05-entregables/        one-pager.md (entregable oficial) + guion-pitch-v1.md (video ≤3 min)
├── 06-ideas/              notas crudas sin validar del equipo
├── 07-construccion/       PRDs (landing + MVP v3), design system + brandboard.html, esquemas de pantalla v3, customer-journey.md, decisiones-app-web.md, stack-tecnico.md
├── 10-features/           especificaciones granulares de componentes y pantallas (01 a 10)
└── PLAN-TRABAJO.md         plan de sprint + registro de decisiones (tabla de trazabilidad)
```

Fuera de `docs/`, en la raíz del repo: **`app/`** (proyecto Next.js 16 con App Router — landing v1 y prototipo funcional v3 completo con 18 rutas generadas y persistencia en cliente) y **`.claude/skills/`** (`iniciar-sesion`, `cerrar-sesion`).

**Tooling de diseño disponible en sesiones futuras (agregado 05 Set., sesión 4):** plugin oficial `frontend-design` (evaluación/crítica de diseño, no solo generación), skill de terceros `taste-skill` (`/taste <url>`, requiere Playwright MCP — ya configurado y funcionando), registries de shadcn `@magicui`, `@react-bits` y `@aceternity` en `app/components.json` (ver bitácora de sesión 4 para qué se usó de cada una y qué se descartó explícitamente).

## Cómo trabajar en este repo

Todo en español, citar fuentes siempre, nunca inventar datos de campo (marcar "hipótesis a validar"), MVP = validar no construir completo. Ver convenciones completas en `AGENTS.md`.
