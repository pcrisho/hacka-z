# Auditoría de consistencia y veracidad — 05 Set. 2026

> Auditoría externa de solo lectura, realizada por un agente sin contexto previo del proyecto, siguiendo el encargo del equipo. Objetivo: coherencia interna (contradicciones entre archivos, referencias cruzadas rotas, decisiones cerradas no propagadas) y veracidad (afirmaciones sin fuente verificable o con fuente que dice algo distinto). No se editó ningún archivo. No se auditó `docs/memoria/bitacora/` (append-only por diseño) ni `1-07-2026/`/`4-07-2026/` (fuente cruda, no documento a auditar).

---

## Hallazgos críticos

### C1. `PLAN-TRABAJO.md` §6 conserva la cifra de mercado general ya descartada ("24-25%")

- **Archivo:** `docs/PLAN-TRABAJO.md` §6 ("Arquetipo — CONFIRMADO").
- **Qué dice:** *"Pacífico es 2° en el mercado general (24-25%, detrás de Rimac)..."*
- **Qué dicen los demás:** `docs/memoria/CONTEXTO-ACTUAL.md` (hallazgo #1) es explícito: *"2° en mercado general (22.6%, jun. 2025 — actualizado, ya no usar el rango '24-25%')"*. `docs/01-research/pacifico-seguros-research.md` §2 trae ambas cifras con nota de confiabilidad: *"usar 22.6%/2° lugar en vez del rango 24-25% si se cita el dato más reciente"*. `docs/02-ideacion/problem-statement-v1.md` ya usa correctamente "22.6%, jun. 2025".
- **Verificación externa:** confirmado por búsqueda directa (Moody's Local, Análisis del Sistema Asegurador Peruano al 30/06/2025): Rímac 27.41%, Pacífico 22.60% a jun. 2025. La cifra correcta está bien sustentada; lo que falla es que `PLAN-TRABAJO.md` no se actualizó.
- **Por qué es crítico:** `PLAN-TRABAJO.md` es fuente de verdad de rango 4 en la jerarquía de `AGENTS.md`, y su propio §7 registra la corrección "22.6%... ya confirmada contra Memoria 2025" el 04 Set. sin que eso se reflejara en §6, el mismo documento. Si un jurado o mentor de Pacífico revisa este archivo (probable, es el plan de sprint) y compara con el pitch, encuentra una cifra que el propio equipo ya marcó como incorrecta.

### C2. `PLAN-TRABAJO.md` §5.1 y la fila de decisión "01 Set. 2026" siguen usando el framing "sin historial crediticio" ya retirado

- **Archivo:** `docs/PLAN-TRABAJO.md` §5.1 ("MVP — CONFIRMADO") y la primera fila de la tabla §7.
- **Qué dice §5.1:** *"Justificado por el research: no depender de scoring/historial crediticio individual (la Gen Z peruana en su mayoría no tiene ese historial — ver `01-research/industria-seguros-comparativa.md` §2.2), así que el prototipo puede simular pricing simple y plano..."*
- **Qué dice la fila de decisión "01 Set. 2026" (§7):** razón = *"Evita depender de historial crediticio/scoring que gran parte de la Gen Z peruana no tiene"*.
- **Por qué es una contradicción:** la fila de decisión fechada **04 Set. 2026** en la misma tabla §7 dice textualmente: *"se retira 'sin historial crediticio' como framing de la barrera de acceso a seguro de salud **en todo el repo** (problem statement, historias, guion de pitch, territorio de solución)"* — y detalla que la barrera real es la informalidad laboral, no el scoring bancario (`01-research/pacifico-friccion-usuario-eps.md` §3, verificado con fuentes públicas: la suscripción médica se evalúa por Declaración Jurada de Salud). El propio `PLAN-TRABAJO.md`, que contiene esa corrección, **no corrigió su propio §5.1 ni la fila del 01 Set.** — la lista de documentos corregidos en la fila del 04 Set. no incluye `PLAN-TRABAJO.md` mismo.
- **Severidad:** crítico. Es exactamente el tipo de afirmación que, según el propio registro de decisiones, "un jurado del área técnica de Pacífico podría refutar en el acto" — y sigue viva en el documento de plan de sprint, no en un rincón menor.

### C3. Cifra de crecimiento de Nubank ("1M→34M, CAC $0") sin fuente en el repo y más matizada de lo que se afirma

- **Archivo:** `docs/02-ideacion/territorios-solucion.md` §3 — *"Nubank, que creció de 1M a 34M de usuarios (2016-2021) con CAC declarado en $0, por boca a boca y listas de espera, sin canal corporativo"*. Se repite (por referencia) en `historias-usuario-y-validacion.md` §4 y sostiene el argumento de adquisición B2C en `04-gtm/modelo-negocio-y-viabilidad.md` §2 y `PLAN-TRABAJO.md` §7.
- **Problema de cita:** `territorios-solucion.md` no tiene sección de fuentes ni enlaza ninguna URL para esta cifra — a diferencia de `industria-seguros-comparativa.md`, que sí cita fuente (Infobae, marzo 2026) pero para la cifra de 131M de clientes 2025, no para el crecimiento 2016-2021 ni para el CAC.
- **Verificación externa:** el crecimiento 1M (2016) → 34M (2021) es consistente con reportes públicos. Pero el **CAC "$0" no es una cifra regulatoria**: el propio F-1 de Nu Holdings ante la SEC (2021) reporta un CAC real de **~US$5.0 por cliente** para los nueve meses terminados en sept. 2021 (con ~80-90% de adquisición orgánica). "$0" es un framing de relaciones públicas del CEO, no el dato que Nubank reportó a su regulador.
- **Por qué importa:** es el precedente central que sostiene el supuesto más frágil del modelo de negocio (crecimiento B2C sin canal corporativo, ver `historias-usuario-y-validacion.md` §4) — si un jurado o mentor pide la fuente de "CAC $0", el repo no tiene una que citar, y la cifra real y verificable es distinta (mayormente orgánico, no literalmente cero).
- **Recomendación:** citar la fuente real (SEC F-1 2021 o cobertura de prensa) y matizar a "CAC mayormente orgánico (~80-90%), reportado en ~US$5/cliente" en vez de "$0".

---

## Hallazgos moderados

### M1. `industria-seguros-comparativa.md` conserva el framing de "historial crediticio" que el resto del repo ya corrigió

- **Archivo:** `docs/01-research/industria-seguros-comparativa.md` §2.2 y §4.
- **Qué dice:** *"cualquier producto que dependa de scoring tradicional excluye a su propio público objetivo"* (§2.2); *"el pricing no puede depender de scoring individual sofisticado dado el bajo historial crediticio de la Gen Z peruana"* (§4).
- **Contraste:** `territorios-solucion.md` §1.3 sí incorporó la precisión del 04 Set.: *"la suscripción de un seguro de salud no depende de historial crediticio — depende de tener planilla; el pricing de FIBO sigue sin depender de ningún scoring, pero por una razón distinta a la que se venía citando"*. `industria-seguros-comparativa.md` es precisamente el archivo que `PLAN-TRABAJO.md` §5.1 cita como fuente (ver C2) — es decir, el error de C2 tiene una raíz que tampoco se corrigió en el archivo de research original.
- **Severidad:** moderada — es un archivo de research interno, no una pieza que un jurado lea directamente como el pitch, pero alimenta directamente el error de C2.

### M2. `historias-usuario-y-validacion.md` §1 (loop central) conserva un residuo del framing "recompensa y microseguro en paralelo"

- **Archivo:** `docs/02-ideacion/historias-usuario-y-validacion.md` §1.
- **Qué dice:** la lista numerada del loop pone el ítem 4 ("Opcional: top-ups pay-as-you-go... para riesgos puntuales") **antes** del ítem 5 ("Recompensas no monetarias..."), presentándolos como dos pasos/features paralelos del loop, sin la relación secuencial "recompensa gana el derecho a la oferta".
- **Contraste:** el propio archivo, en su Historia 1 (§2, paso 4), sí narra la secuencia corregida: *"su Reserva sube a un nivel que le desbloquea 1 sesión... y, como consecuencia de haber llegado a ese nivel (no en paralelo), FIBO le presenta una oferta de microseguro"*. `hallazgos-mentoria-04-set.md` §3.2 lista explícitamente `historias-usuario-y-validacion.md` §1 como uno de los archivos a los que se "propagó" la corrección — pero el §1 tal como está hoy no refleja del todo esa secuencia, solo el §2 lo hace con claridad.
- **Severidad:** moderada — no es una contradicción abierta (nada dice explícitamente "son dos mecanismos paralelos"), pero el orden y el lenguaje ("Opcional" + ítem separado antes de la recompensa) puede leerse como el encuadre viejo si alguien lee solo el recap del §1 sin llegar a la historia completa.

### M3. Cifra de penetración de seguros en Perú (2.5%) con fuente vaga, pese a ser una de las más citadas del repo

- **Archivo:** `docs/01-research/pacifico-seguros-research.md` §5 — *"Penetración (primas / PBI), 2025 | 2.5%... | Fuentes sectoriales / APESEG, mayo 2025"*.
- **Por qué es un problema:** esta cifra abre literalmente el guion de pitch (`05-entregables/guion-pitch-v1.md`, minuto 0:00-0:45: *"Perú tiene una penetración de seguros de 2.5% del PBI, la mitad que Chile"*) y aparece también en `territorios-solucion.md` §1 y `problem-statement-v1.md`. "Fuentes sectoriales / APESEG" no es una cita verificable (no hay URL, no hay documento específico de APESEG referenciado) — a diferencia de casi todas las demás cifras del mismo archivo, que sí tienen link directo. El propio guion de pitch ya señala internamente: *"La cifra de 2.5% penetración sí debe re-chequearse contra el fork de verificación en curso"* — es decir, el propio equipo ya sospechaba de esta cita.
- **Severidad:** moderada-alta por ser una cifra de apertura del pitch, pero no crítica porque el orden de magnitud (Perú por debajo de la región) sí está bien respaldado por otras cifras del mismo documento (densidad de prima, comparativa LatAm).

### M4. Fragmento de nota cruda sin editar dentro de `03-mvp/alcance-producto.md`

- **Archivo:** `docs/03-mvp/alcance-producto.md`, entre §3 y el párrafo final de esa sección (líneas 44-46).
- **Qué dice:** *"Quitar hábitos / malos hábiyos\n\nDEje de fumar -> Proponer cambios en pacíficos."*
- **Por qué es un hallazgo:** no es una oración completa, tiene un error de tipeo ("hábiyos"), interrumpe el flujo entre la tabla de niveles de recompensa y el párrafo "Duda que sigue abierta...", y no cita ninguna fuente ni decisión. El contenido al que alude (FIBO ayudando a dejar malos hábitos) sí está desarrollado correctamente en `historias-usuario-y-validacion.md` §8 ("FIBO también ayuda a dejar malos hábitos, no solo a construir buenos") — parece una nota de trabajo que quedó pegada sin integrar ni borrar. No se lee como una transcripción de IA/chat, pero cumple el criterio de "contenido que parece fuera de lugar" que vale la pena señalar aunque no sea grave.
- **Severidad:** moderada — bajo riesgo de contenido (no contradice nada), pero es exactamente el tipo de descuido visual que se nota si alguien del equipo o un mentor abre el archivo directamente.

---

## Hallazgos menores

### m1. Referencia de `CONTEXTO-ACTUAL.md` a `historias-usuario-y-validacion.md §5` para "transparencia de datos" es imprecisa

- **Archivo:** `docs/memoria/CONTEXTO-ACTUAL.md`, tabla de decisiones cerradas, fila "Transparencia de datos" → cita `historias-usuario-y-validacion.md §5, hallazgos-mentoria-04-set.md §3.6`.
- **Qué encontré:** el compromiso concreto ("el onboarding anuncia desde el inicio que se ofrecerán microseguros") está narrado con claridad en **§2** de ese archivo (Historia de Camila, paso 2) y en `hallazgos-mentoria-04-set.md` §3.6 — no en §5. El §5 citado ("Cómo se inicializa correctamente / cold start") sí toca transparencia, pero de datos de uso/permisos progresivos (ítem 4: *"pedir permisos progresivamente... responde al insight 'esperan entender cómo se usan sus datos'"*), un principio relacionado pero distinto del anuncio explícito de que se ofrecerán microseguros.
- **Severidad:** menor — no hay contradicción de contenido, solo una cita que apunta a la sección vecina en vez de la exacta.

### m2. Convención de citar "§5.1/§5.2/§5.3" de `historias-usuario-y-validacion.md` sin que existan como subtítulos reales

- **Archivos:** `docs/07-construccion/esquema-mvp.md`, `esquema-landing.md`, `PRD-landing.md` citan `historias-usuario-y-validacion.md §5.1`, `§5.2`, `§5.3` para referirse a los ítems 1, 2 y 3 de la lista numerada dentro de la sección "## 5. Cómo se inicializa correctamente". El archivo fuente no tiene subtítulos "### 5.1" etc., solo una lista numerada dentro de un único encabezado "## 5".
- **Por qué lo marco:** hoy el contenido coincide por posición (ítem 1 = "valor antes que compromiso" = lo que se cita como §5.1, etc.), así que no hay error de contenido — pero es una referencia frágil: si alguien reordena o edita esa lista en el futuro, las citas "§5.x" en otros tres archivos quedan apuntando a algo distinto sin que nada avise del cambio.
- **Severidad:** menor, preventiva.

### m3. Recomendación propia del equipo (cifras de informalidad juvenil más específicas) aún no aplicada al pitch/problem statement

- **Archivo origen:** `docs/01-research/insight-salud-mental-y-habito-gen-z.md` §2 — recomienda explícitamente: *"reemplazar o complementar la cifra genérica de 70% con la cifra específica de 84.9% (jóvenes 14-24) y el 35.6% (sin seguro, 20-24) en el pitch y el problem statement"*.
- **Estado actual:** `docs/05-entregables/guion-pitch-v1.md` (apertura) y `docs/02-ideacion/problem-statement-v1.md` siguen usando solo la cifra genérica de 70%.
- **Por qué lo incluyo:** no es una contradicción (ambas cifras son ciertas y compatibles), pero es una recomendación que el propio equipo dejó escrita y que corre el riesgo de perderse antes de grabar el video final — vale la pena que quede visible en esta auditoría además de en su archivo de origen.
- **Severidad:** menor / informativo.

---

## Verificaciones de fuente realizadas (muestreo de las cifras más citadas)

| Cifra | Resultado |
|---|---|
| Pacífico EPS 42.3%, 1er lugar (dic. 2025) | **Confirmada** — coincide con Memoria Integrada 2025 y cobertura de prensa. |
| Pacífico mercado general 22.6% (jun. 2025), Rímac 27.41% | **Confirmada** — coincide con Análisis del Sistema Asegurador Peruano de Moody's Local. |
| Informalidad laboral Perú ~70% (INEI) | **Confirmada** — INEI reporta 70.2% para 2025 (EPEN). |
| Betterfly unicornio, Serie C US$125M, >US$1,000M valorización | **Confirmada** textualmente contra la fuente citada (Bloomberg Línea). |
| 40% de peruanos 18-24 con dificultades clínicas de salud mental (Sapien Labs) | **Confirmada** — coincide con cobertura de prensa del estudio "Global Mind Health". |
| Nubank 1M→34M usuarios (2016-2021), CAC "$0" | **Parcialmente confirmada, sin cita en el repo** — el crecimiento de usuarios es consistente con reportes públicos, pero el CAC "$0" es un framing de PR; el F-1 de Nu Holdings ante la SEC (2021) reporta ~US$5.0/cliente. Ver hallazgo C3. |
| Penetración de seguros Perú 2.5% del PBI | **No verificable con la cita dada** ("fuentes sectoriales/APESEG" sin URL) — ver hallazgo M3. |

No se intentó verificar la Memoria Integrada 2025 ni el PDF de Moody's Local directamente (ambos bloquearon la descarga automatizada), pero la cifra que contienen fue confirmada de forma independiente por cobertura de prensa/búsqueda.

---

## Resumen

- **Archivos revisados:** 31 (todo `docs/` excepto `docs/memoria/bitacora/*` y las carpetas fechadas `1-07-2026/`, `4-07-2026/`, excluidas explícitamente del alcance).
- **Hallazgos críticos:** 3 (C1, C2, C3).
- **Hallazgos moderados:** 4 (M1-M4).
- **Hallazgos menores:** 3 (m1-m3).
- **Total:** 10 hallazgos.

Las tres correcciones grandes de la mentoría del 04 Set. (arquitectura de distribución fuera de Yape, recompensa como puerta al microseguro, retiro del framing de historial crediticio) están **bien propagadas en general** — la mayoría de los documentos de producto, GTM y construcción reflejan la versión corregida con consistencia. Los huecos reales encontrados están concentrados en `PLAN-TRABAJO.md` (el propio documento que registra las correcciones no se autocorrigió en dos lugares) y en cifras de mercado/crecimiento citadas sin URL verificable.
