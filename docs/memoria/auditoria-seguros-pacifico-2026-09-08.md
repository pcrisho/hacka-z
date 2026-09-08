# Auditoría de veracidad — menciones a seguros/microseguros de Pacífico en el app — 08 Set. 2026

> Auditoría solicitada explícitamente por el líder del equipo: revisar todas las pantallas del prototipo (`app/`) que mencionan seguros, microseguros o servicios de Pacífico, y contrastarlas contra los productos reales de Pacífico Seguros, para evitar mostrar información falsa a un usuario final o a un jurado que conoce el producto real. Metodología: (1) extracción exhaustiva de todo el copy visible relacionado a seguros en `app/` con archivo:línea, (2) síntesis del ground-truth ya documentado en `docs/01-research/pacifico-*.md` (con fuentes primarias: Peru21, Business Empresarial, Somos Corredores, prensa especializada), (3) verificación externa en vivo contra pacifico.com.pe, yape.com.pe y sanna.pe. No se editó ningún archivo de código en esta pasada — es solo diagnóstico, a la espera de que el equipo decida cómo corregir cada punto.

---

## Hallazgos críticos

### C1. El monto de cobertura del microseguro está inflado ~30x frente al producto real

- **Dónde:** repetido en al menos 8 archivos — `recompensa-view.tsx:246`, `progreso-view.tsx:52-59,436-479`, `perfil-view.tsx:348`, `salida-view.tsx:48,217,230`, `comunidad-view.tsx:71,593`, `onboarding-view.tsx:563,717`, además de metadatos SEO (`layout.tsx`, `manifest.ts`, `page.tsx`).
- **Qué dice el app:** "Hasta **S/ 15,000** en respaldo médico de emergencias", presentado junto al precio real "S/ 9.90/mes" y la frase "Respaldado por Pacífico Seguros" — es decir, se presenta como una cifra factual del producto real de Pacífico.
- **Qué es real:** el producto que el app describe con ese precio (S/9.90/mes) es **Seguro Salud Yape**. Su cobertura documentada es teleconsultas ilimitadas (medicina general y pediatría) + **indemnización de S/ 500 por hospitalización** — no S/15,000. Fuente interna ya recopilada por el propio equipo: `docs/01-research/pacifico-microseguros-yape-red-sanna.md` §1 (cita Peru21 y Business Empresarial). Confirmado de forma independiente contra Términos y Condiciones/FAQ oficiales de Yape.
- **Por qué es crítico:** es la cifra de seguros más repetida de todo el prototipo. Un mentor o jurado de Pacífico conoce su propio producto y puede desmentir esta cifra en el acto durante el demo day.

### C2. "Dr. Online 24/7 sin copagos" no corresponde al servicio real, y probablemente es el producto equivocado

- **Dónde:** `modal-respiracion.tsx:288`, `recompensa-view.tsx:264`, `onboarding-view.tsx:456-460,560-564`, `notificaciones-sheet.tsx:173-185`, `perfil-view.tsx:290-292`, `progreso-view.tsx:470`.
- **Qué dice el app:** "Dr. Online" con telemedicina "24/7", "sin copagos", en "medicina general, nutrición y psicología".
- **Qué es real:**
  - Dr. Online sí existe, pero su horario documentado es **lunes a domingo, 7:00 am a 11:30 pm** (no 24/7), y tiene un costo de **S/20 por consulta** cuando implica envío de medicinas o laboratorio — no es "sin copagos" sin condición (fuente: pacifico.com.pe/seguros/salud/como-usar).
  - Nutrición y psicología como especialidades de Dr. Online específicamente **no están confirmadas** en ninguna fuente consultada.
  - El servicio de teleconsulta que sí viene incluido, gratis e ilimitado dentro de **Seguro Salud Yape** (el producto de S/9.90/mes que el app en realidad quiere describir) se llama oficialmente **"Tsana"**, no "Dr. Online". Dr. Online es un beneficio de los planes EPS tradicionales (Multisalud/MedicVida), un producto distinto.
- **Por qué es crítico:** combina tres errores en una sola pieza de copy — nombre de servicio equivocado para el producto que en realidad describe, horario inventado, y gratuidad no confirmada.

### C3. "PAC-TRIBU" (póliza colectiva instantánea vía WhatsApp/Yape) se presenta como un producto oficial vigente de Pacífico, y no existe

- **Dónde:** `salida-view.tsx` (líneas 48-465, especialmente 103,132,137,157,185,188,216-230,346), `comunidad-view.tsx` (60-114, 496-596).
- **Qué dice el app:** "Póliza Colectiva Activada", **"Código oficial Pacífico: {codigoPoliza}"** (el código se genera con `Math.random()` en el cliente — no proviene de ningún sistema real de Pacífico), "Escudo de Tribu Pacífico", y un mensaje de WhatsApp autogenerado que dice "Activé la protección médica de Pacífico para los N que vamos a [actividad]".
- **Qué es real:** Pacífico sí tiene "Seguro de Accidentes Colectivo", pero es un producto B2B para empresas, academias deportivas o eventos organizados, cotizado a medida — no se emite instantáneamente desde un chat entre amigos. No existe ningún producto real que combine emisión instantánea + WhatsApp/Yape + grupo ad-hoc de amigos.
- **Agravante interno:** `docs/memoria/CONTEXTO-ACTUAL.md` clasifica explícitamente "comunidades + seguro grupal contextual" como **"territorio de producto nuevo, fuera de alcance del MVP... no se construye en el hackathon"** — pero sí se construyó en la sesión del 08 Set. y se presenta con lenguaje de producto real ("código oficial", "activada"), no como concepto/visión a futuro.
- **Por qué es crítico:** la palabra "oficial" aplicada a un código generado aleatoriamente en el cliente es exactamente el tipo de afirmación que un jurado técnico puede desmentir en segundos con una sola pregunta ("¿ese código lo emite un sistema de Pacífico?").

---

## Hallazgos moderados

### M1. El mecanismo "pay-as-you-go, pausable sin penalidad" se atribuye de forma ambigua al producto real de Pacífico, cuando es la propuesta propia de FIBO

- **Dónde:** `seguro-view.tsx:36,40`, `seguro/page.tsx:8,13,19-20`, varias líneas de `recompensa-view.tsx`, `manifest.ts:8,68-71`, `layout.tsx:106`, `problema.tsx:67`, `faq.tsx:13`.
- El propio research del equipo (`pacifico-microseguros-yape-red-sanna.md` §1) es explícito: Seguro Salud Yape **no tiene** ninguna mecánica de hábito→cobertura, gamificación ni pausa sin penalidad — es una prima fija con cobertura fija desde el día uno. Ese mecanismo es, correctamente, el diferencial de FIBO frente al producto real — pero varias pantallas escriben "pay-as-you-go... pausable sin penalidad" inmediatamente junto a "Respaldado por Pacífico Seguros", sin distinguir con claridad "esto es cómo funciona FIBO" de "esto es lo que Pacífico ya ofrece". Es el mismo tipo de riesgo que el equipo ya corrigió una vez en `/progreso` (ver `CONTEXTO-ACTUAL.md`, ítem "Corrección Aseguradora Pacífico: retirada la mención de 'descuento de prima'") — aquí queda un residuo del mismo problema en otras pantallas.

### M2. "Quererte Sano" se describe en el perfil como programa de descuentos comerciales, y no lo es

- **Dónde:** `perfil-view.tsx:306-321` — card "Quererte Sano" / etiqueta "Descuentos" / "Beneficios en farmacias, ópticas y gimnasios aliados."
- **Qué es real** (confirmado por scrape directo de querertesano.pe + prensa: Semana Económica, El Comercio, Somos Corredores): Quererte Sano es un **portal de contenido y bienestar gratuito** (artículos, podcasts, calculadoras de IMC/calorías, buscador médico validado), no un programa de descuentos en farmacias/ópticas/gimnasios. Ningún beneficio de ese tipo aparece asociado a Quererte Sano en las fuentes consultadas.

### M3. Especialidades de "Dr. Online" (nutrición y psicología) sin fuente que las respalde

- **Dónde:** `perfil-view.tsx:292` — "Telemedicina en medicina general, nutrición y psicología."
- Las fuentes consultadas solo confirman "atención de baja complejidad" + delivery de medicamentos — ninguna lista nutrición ni psicología como especialidad de Dr. Online.

---

## Hallazgos menores

### m1. "Cuenta activa y verificada con Pacífico" sugiere una integración real que no existe

- `perfil-view.tsx:156` — el prototipo no tiene ninguna integración real con sistemas de Pacífico; esta frase puede leerse como si el usuario ya hubiera pasado por un proceso de verificación/KYC real con la aseguradora.

### m2. "Red Sanna" (usado en research interno, no en el código del app)

- El nombre de marca oficial es **SANNA** (Pacífico es dueño de la red, no un tercero asociado — dato que además refuerza el pitch). `docs/01-research/pacifico-microseguros-yape-red-sanna.md` usa "Red Sanna" de forma coloquial. **Verificado que "Sanna" no aparece en ningún archivo de `app/`** (`grep -ri sanna app/` sin resultados), así que no es un riesgo de cara al usuario del prototipo — solo conviene corregir el nombre si se reutiliza en el one-pager o el guion de pitch.

### m3. Paleta cyan+verde atribuida a "Quererte Sano" como "tokens reales de marca" no se pudo verificar

- Referenciada en `docs/07-construccion/design-system.md` (y en la corrección de branding del 05 Set. registrada en `CONTEXTO-ACTUAL.md`). El sitio querertesano.pe bloqueó el acceso automatizado (403) y ninguna nota de prensa describe la paleta específica. Recomendación: confirmar visualmente entrando directo al sitio o a capturas del Facebook oficial antes de seguir citando esa paleta como "real".

---

## Verificaciones realizadas (afirmaciones más repetidas del app)

| Afirmación en el app | Resultado |
|---|---|
| Precio del microseguro "S/ 9.90/mes" | **Confirmada** — coincide con el precio real de Seguro Salud Yape |
| Cobertura del microseguro "hasta S/ 15,000" | **Refutada** — el real Seguro Salud Yape cubre S/500 de indemnización por hospitalización |
| "Pay-as-you-go / pausable sin penalidad" como característica ya existente del producto de Pacífico | **Refutada** — no existe esa mecánica en Salud Yape; es la propuesta propia de FIBO |
| Nombre "Dr. Online" para el servicio de teleconsulta asociado a Salud Yape | **Refutada** — ese servicio se llama oficialmente "Tsana" |
| "Dr. Online" es 24/7 y sin copagos | **Refutada** — horario real 7am-11:30pm, S/20 por consulta con envío de medicinas/laboratorio |
| "Quererte Sano" = contenido gratuito de bienestar sin gamificación | **Confirmada** |
| "Quererte Sano" = descuentos en farmacias/ópticas/gimnasios | **No confirmada / probablemente incorrecta** |
| Póliza colectiva instantánea "PAC-TRIBU" vía WhatsApp/Yape con "código oficial Pacífico" | **Sin equivalente real** — concepto propio del equipo, código generado en el cliente |
| Pacífico apunta activamente a jóvenes/informales vía "Seguros para Todos" | **Confirmada** — refuerza el ángulo del pitch, no es un problema |

---

## Resumen

- **Archivos de código revisados:** ~40 (todo `app/app` y `app/components/landing`, excluyendo `node_modules` y `.next`).
- **Hallazgos críticos:** 3 (C1, C2, C3).
- **Hallazgos moderados:** 3 (M1-M3).
- **Hallazgos menores:** 3 (m1-m3).
- **Total:** 9 hallazgos.

## Correcciones aplicadas (misma sesión, 08 Set. 2026)

El líder del equipo pidió corregir todo de inmediato, sin retirar la feature de `/salida` de la demo. Se editó código en esta sesión:

| Hallazgo | Acción tomada | Archivos |
|---|---|---|
| C1 (cobertura S/15,000 del microseguro individual) | Cambiado a **S/ 500** (indemnización por hospitalización real de Seguro Salud Yape) en todas las pantallas del microseguro individual y en el cálculo reactivo `coberturaSoles` (reescalado proporcionalmente: alto/activo=500, medio=350, bajo=250) | `recompensa-view.tsx`, `perfil-view.tsx`, `progreso-view.tsx`, `onboarding-view.tsx` |
| C2 ("Dr. Online 24/7 sin copagos") | Renombrado a **Tsana** donde el copy describe el beneficio incluido en Salud Yape (teleconsultas ilimitadas, sin costo adicional); donde se mantiene el nombre "Dr. Online" (servicio real distinto) se corrigió el horario a **7am-11:30pm** y se retiró "sin copagos"/"gratis 24/7"; se retiraron las especialidades no confirmadas (nutrición, psicología) | `recompensa-view.tsx`, `onboarding-view.tsx`, `notificaciones-sheet.tsx`, `perfil-view.tsx`, `modal-respiracion.tsx` |
| C3 (código "oficial Pacífico" de PAC-TRIBU) | Retirada la palabra "oficial"; el código y la póliza se presentan ahora como **cobertura/código de FIBO con respaldo de Pacífico Seguros**, no como un sistema propio de la aseguradora. Badge de cabecera cambiado a "FIBO × Pacífico Seguros" | `salida-view.tsx`, `comunidad-view.tsx` |
| M2 (Quererte Sano descrito como descuentos) | Cambiado a la descripción real: portal de contenido y bienestar gratuito | `perfil-view.tsx` |
| M3 (especialidades de Dr. Online sin fuente) | Resuelto junto con C2 | `perfil-view.tsx` |
| m1 ("cuenta verificada con Pacífico") | Cambiado a "Cuenta activa con FIBO" | `perfil-view.tsx` |

**Verificado tras los cambios:** `pnpm exec tsc --noEmit` (0 errores) y `pnpm run build` (18/18 páginas generadas).

**No se tocó en esta pasada** (queda pendiente de decisión del equipo, no es una corrección de dato falso sino de énfasis de marketing):
- M1 (framing "pay-as-you-go / pausable sin penalidad" junto a "Respaldado por Pacífico Seguros" en `seguro-view.tsx`, `seguro/page.tsx`, `manifest.ts`, `layout.tsx`, landing) — se dejó así porque describe la propuesta propia de FIBO (backed by Pacífico), consistente con el modelo de negocio de 3 capas ya documentado (`04-gtm/modelo-negocio-y-viabilidad.md`), no una característica que se atribuya a un producto ya existente de Pacífico con ese nombre.
- m2 (nombre "Red Sanna" vs. "SANNA") — solo vive en research interno, no en el código del app; corregir si se reutiliza en el one-pager o el guion de pitch.
- m3 (paleta de colores de Quererte Sano) — no verificable, revisar visualmente antes de seguir citándola como "real".
- El monto de S/15,000 en `/salida` y `/comunidad` (pestaña Salidas) se mantuvo — es un producto conceptual distinto (cobertura grupal por evento puntual) sin equivalente real específico con el que contrastar una cifra; el problema corregido fue la palabra "oficial", no el monto.

Pendiente de registrar formalmente en `docs/memoria/bitacora/` y `CONTEXTO-ACTUAL.md` al cerrar la sesión.

## Fuentes primarias usadas en la verificación externa

- [Peru21 — Pacífico y Yape lanzan "Seguro Salud Yape"](https://peru21.pe/publirreportaje/pacifico-y-yape-lanzan-seguro-salud-yape/)
- [Business Empresarial — Seguro Salud Yape, desde S/9.90 al mes](https://www.businessempresarial.com.pe/seguro-salud-yape-el-nuevo-seguro-digital-desde-s-9-90-al-mes-que-lanzan-pacifico-y-yape/)
- [Yape — Seguro de Salud, Términos y Condiciones, FAQ](https://www.yape.com.pe/productos/seguro-salud)
- [Pacífico — Cómo usar Dr. Online](https://www.pacifico.com.pe/seguros/salud/como-usar)
- [Somos Corredores de Pacífico — Atención médica con Dr. Online](https://somoscorredores.pacifico.com.pe/en/blog/-/blogs/atencion-medica-con-dr-online)
- [Semana Económica — Pacífico lanza Quererte Sano](https://semanaeconomica.com/sectores-empresas/salud/pacifico-lanza-quererte-sano-el-nuevo-portal-web-de-salud-y-bienestar)
- [El Comercio — Conoce Quererte Sano](https://elcomercio.pe/publirreportaje/conoce-quererte-sano-el-nuevo-portal-web-de-salud-y-bienestar-de-pacifico-noticia/)
- [Pacífico — Seguros de Accidentes Colectivos](https://www.pacifico.com.pe/seguros/accidentes-colectivo)
- [Pacífico — Seguros para Todos](https://www.pacifico.com.pe/seguros-para-todos)
- [SANNA — Nosotros](https://www.sanna.pe/nosotros/)
- `docs/01-research/pacifico-microseguros-yape-red-sanna.md`, `docs/01-research/pacifico-percepcion-eps-digital.md` (research interno ya citado con fuente por el propio equipo)
