# Plan de Trabajo — Hackathon UCSUR × Pacífico Seguros × AWS

> Fuente de verdad para fechas y criterios: [`00-bases/BASES-CONCURSO.md`](./00-bases/BASES-CONCURSO.md). Este plan traduce esas bases en un sprint ejecutable de 7 días (01–08 Set.) usando la metodología Doble Diamante.

## 0. Corrección respecto a las notas iniciales

Una versión anterior de `1-07-2026/INICIALIZATION.md` mencionaba "2 equipos ganadores con pase a incubación" como premio — esto fue un error introducido por un agente de IA al redactar la nota, no un dato real entregado en el kick-off. Las bases oficiales (§9) son claras: **1er puesto S/2,000 + merchandising/beneficios AWS; 2do puesto S/1,500 + merchandising/beneficios AWS**, ambos con certificado. No hay incubación en ninguna etapa del concurso. La nota ya fue corregida en la fuente (03 Set. 2026). Usar siempre las bases como referencia autoritativa ante cualquier discrepancia con notas personales.

## 1. Los tres entregables obligatorios (bases §3)

Cualquier propuesta que omita uno de los tres **no se evalúa**. Este plan está diseñado para que los tres avancen en paralelo, no en secuencia:

1. **Sustentación** — propuesta de valor Gen Z, justificada y alineada al problema.
2. **MVP** — funcional o demostrable (app, plataforma, servicio o experiencia).
3. **Go-to-market** — segmento, canales, modelo de ingresos, adquisición, métricas.

## 2. Cómo se reparten los puntos (para no perder tiempo en lo que no puntúa)

> **Resuelto (04 Set. 2026):** `BASES-CONCURSO.md` es la única fuente de verdad para pesos y plazos — confirmado por el equipo. `docs/00-bases/LANZAMIENTO.md` (slides de kick-off) tiene una rúbrica formulada distinto, pero no se usa para puntaje. **Video de sustentación: hasta 3 minutos** (`BASES-CONCURSO.md` §6.2) — no 5, como sugería `MODELO-ONE-PAGER.md`. No reabrir ninguna de las dos.

**Preselección (one-pager + video, filtra a 10 finalistas):**
| Criterio | Peso |
|---|---|
| Sustentación | 35% |
| MVP | 35% |
| Go-to-market | 20% |
| Equipo y comunicación | 10% |

**Demoday (solo finalistas, puntaje independiente):**
| Criterio | Peso |
|---|---|
| Entendimiento del problema (evidencia e insights) | 30% |
| Demostración del MVP | 20% |
| Innovación | 20% |
| Solidez de la propuesta (coherencia sustentación-MVP-GTM) | 15% |
| Calidad de la presentación | 15% |

**Lectura clave:** "Entendimiento del problema" con evidencia de campo pesa tanto o más que el MVP en ambas etapas. No es un hackathon de "quién construye más" — es de quién demuestra que entendió el dolor real y lo resolvió con coherencia. Esto valida el enfoque: research primero, MVP simple después.

## 3. Sprint de 7 días (Doble Diamante aplicado al calendario real)

| Día | Fecha                           | Fase (Doble Diamante) | Foco                                                                                                                                                                 |
| --- | ------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Lun 01 Set (hoy, post kick-off) | Descubrir             | Sintetizar insumo oficial de Pacífico (`01-research/insight-*.md`), elegir arquetipo(s) prioritario(s), reestructurar base de conocimiento (✅ este commit)           |
| 2   | Mar 02 Set                      | Descubrir → Definir   | Research externo: Pacífico Seguros (mercado Perú/LatAm) + comparativa industria seguros países desarrollados vs. Perú. Lanzar mini-encuesta/entrevistas a Gen Z real |
| 3   | Mié 03 Set                      | Definir → Idear       | Cerrar recolección de campo, redactar *Problem Statement* v1 con evidencia, generar 2-3 territorios de solución                                                      |
| 4   | Vie 04 Set                      | Validar               | **Mentoría 9–11am en Pacífico** — llevar problem statement + hallazgos + bosquejo. Tarde: incorporar feedback, converger a **una sola** propuesta                    |
| 5   | Sáb 05 Set                      | Entregar              | Definir alcance mínimo del MVP (qué se prototipa vs. qué se simula/wizard-of-oz), armar GTM                                                                          |
| 6   | Dom 06 Set                      | Entregar              | Construir MVP, iterar con feedback interno, borrador de one-pager                                                                                                    |
| 7   | Lun 07 Set                      | Entregar              | Cerrar MVP, grabar y editar video pitch (≤3 min), pulir one-pager                                                                                                    |
| 8   | Mar 08 Set, 11:59pm             | —                     | **Entrega final** (sin prórrogas ni modificaciones — bases §6.2)                                                                                                     |

Después: 09 Set evaluación comité, 10 Set finalistas, 11 Set Demoday (3 min pitch + 5 min preguntas del jurado).

## 4. Principio de MVP para este sprint

Con 7 días y 3 personas, el MVP **no** debe intentar ser una app de seguros completa. Debe demostrar el *flujo crítico único* que prueba la propuesta de valor (ej.: cotizar → activar cobertura → ver el "momento de verdad" donde se siente el valor). Todo lo demás (pagos reales, integración con Yape real, backend actuarial) se simula o se deja como "roadmap" en el GTM. Esto es coherente con el criterio de evaluación ("grado de avance y funcionalidad... coherencia con la propuesta"), no exige producción real.

## 5. Reparto de responsabilidades — CONFIRMADO (01 Set.)

Por **fase**, no por rol fijo: los 3 hacen research/campo juntos (días 2-3), un integrante distinto lidera la coordinación de cada día, y a partir del día 5 se especializan (producto/UX, desarrollo, GTM/pitch) según lo que emerja del problem statement. Detalle en [`00-bases/equipo.md`](./00-bases/equipo.md).

## 5.1. MVP — CONFIRMADO (01 Set.)

**Web app / prototipo clicable.** Flujo único cotizar → activar → ver el "momento de verdad" del valor, sin backend real. Justificado por el research: no depender de scoring/historial crediticio individual (la Gen Z peruana en su mayoría no tiene ese historial — ver `01-research/industria-seguros-comparativa.md` §2.2), así que el prototipo puede simular pricing simple y plano sin que eso sea una debilidad técnica real.

## 5.2. Research de campo — CONFIRMADO (01 Set.)

Dos canales en paralelo, no solo uno: **encuesta digital** (Google Forms/Typeform, difundida vía contactos del equipo, meta 30-50 respuestas) + **entrevistas 1:1 presenciales/a profundidad** (no cortas — el equipo ya tiene contactos Gen Z para conseguir esto). Mover a día 2-3 del sprint. Registrar hallazgos crudos en `docs/01-research/campo-*.md` (crear al recolectar) y la síntesis en el problem statement de `docs/02-ideacion/`.

## 6. Arquetipo — CONFIRMADO (03 Set. 2026)

Con base en `01-research/pacifico-seguros-research.md` y `01-research/industria-seguros-comparativa.md`:

- Pacífico es **2° en el mercado general** (24-25%, detrás de Rimac) pero **1° en salud/EPS (42.3%)** — una propuesta con eje de salud/bienestar tiene más "terreno propio" que una de seguros generales.
- La variable estructural más fuerte de la brecha Perú vs. mercados desarrollados es la **informalidad laboral (~70%)** — el seguro no llega "por defecto" vía planilla, así que el producto debe ganarse una decisión activa. Esto valida directamente los arquetipos situacionales **Freelancer** y **Estudiante/Primer Empleo**.
- El caso más trasladable (**Betterfly**, Chile, unicornio LatAm) combina exactamente gamificación + hábitos saludables + protección, los mismos ejes que ya aparecen en el insumo oficial de Pacífico (`insight-sabias-que.md`: "tranquilidad = control", "la salud es más que no enfermarse").

**Decisión:** cruzar **Guardián** (piensa solo en la semana, quiere sentir más control) **+ Estudiante/Primer Empleo con Ansiedad Financiera**, con ángulo de bienestar financiero y salud mental, modelo de micro-primas pay-as-you-go con gamificación tipo Betterfly. Confirmado por Franco e Israel (03 Set.) — ya no es una recomendación pendiente, es la línea de trabajo del equipo.

**Alternativa descartada:** Sobreviviente + Freelancer/Creador Digital (eje continuidad de ingresos/herramientas de trabajo) — se deja registrada por si el campo obliga a pivotar (ver §4 de `02-ideacion/historias-usuario-y-validacion.md`, los supuestos que podrían mover el arquetipo líder).

## 7. Registro de decisiones (trazabilidad)

Toda decisión relevante (arquetipo elegido, problem statement final, concepto de solución descartado, pivotes) se registra aquí con fecha y razón, para poder justificar el "por qué" en la sustentación y el video.

| Fecha | Decisión | Razón | Alternativas descartadas |
|---|---|---|---|
| 01 Set. 2026 | MVP = web app / prototipo clicable | Evita depender de historial crediticio/scoring que gran parte de la Gen Z peruana no tiene; más rápido de construir y mostrar en 7 días | App móvil nativa (más tiempo de build, más riesgo de plazo); chatbot/WhatsApp (se deja como posible canal de GTM, no como MVP) |
| 01 Set. 2026 | Research de campo = encuesta digital + entrevistas 1:1 presenciales en paralelo | El equipo ya tiene contactos Gen Z reales; combinar cuantitativo (alcance) y cualitativo (profundidad) fortalece el criterio "evidencia e insights sólidos" (30% Demoday) | Solo encuesta (menos profundidad); solo entrevistas (menos alcance/representatividad) |
| 01 Set. 2026 | Reparto de roles = por fase, liderazgo rotativo diario | Los 3 tienen capacidad técnica pareja; máxima colaboración en la fase de descubrimiento, especialización solo cuando hace falta (días 5-7) | Roles fijos desde el día 1 (se descartó por aislar el trabajo de research) |
| 03 Set. 2026 | Arquetipo/cruce final = Guardián + Estudiante/Primer Empleo con Ansiedad Financiera | Confirmado por todo el equipo (Franco e Israel de acuerdo); terreno propio de Pacífico (EPS), informalidad como driver estructural, precedente Betterfly | Sobreviviente + Freelancer/Creador Digital (queda como alternativa si el campo lo exige) |
| 03 Set. 2026 | Se identifica a Quererte Sano como el competidor/precedente directo dentro de Pacífico | Es contenido gratuito abierto, sin mecánica de "hábito → cobertura", y sus beneficios reales siguen atados a EPS vía planilla — confirma el hueco que la propuesta resuelve en vez de invalidarla | — |
| 03 Set. 2026 | Explorando identidad de producto como "billetera con propósito" (capa de experiencia) sin reemplazar el ancla de salud/bienestar (capa de sustancia) | Yape/Plin guardan dinero sin proponer qué hacer con él; Lemon sí lo hace (invertir en bolsa EEUU) — hueco de posicionamiento similar en "guardar para protegerte". Yape, BCP y Pacífico son subsidiarias de Credicorp — una alianza intra-grupo es más defendible que una externa | Producto puramente financiero/inversión (se descarta por diluir la fortaleza real de Pacífico en salud/EPS) |
| 03 Set. 2026 | Se corrige el alcance de la validación que ofrece Betterfly: valida la mecánica hábito→cobertura, **no** valida adquisición B2C | Betterfly pivoteó en 2020 de un producto más abierto ("Burn to Give") a un modelo B2B2E exclusivo (+5,000 empresas cliente) — nuestro público objetivo no tiene canal corporativo, así que necesitamos B2C puro, algo que Betterfly no prueba | Se descarta citar a Betterfly como prueba de que el B2C funciona; se usa Nubank (CAC $0, boca a boca, 1M→34M usuarios 2016-2021) como precedente de *mecanismo* de crecimiento B2C en fintech LatAm, con la salvedad de que no es un producto idéntico |
| 04 Set. 2026 | `BASES-CONCURSO.md` queda como única fuente de verdad para rúbrica y plazos (video ≤3 min) frente a `00-bases/LANZAMIENTO.md`/`MODELO-ONE-PAGER.md`, que traían pesos y duración distintos | Documento legal/contractual sobre slides de kick-off; evita cualquier riesgo de incumplimiento por citar la fuente equivocada | Usar la rúbrica de `LANZAMIENTO.md` para puntaje, o 5 min de video (ambas descartadas) |
| 04 Set. 2026 | Prototipo del MVP se construye **codeado (HTML/React)**, no en Figma — con Claude Code construyéndolo directamente junto a Roberto | Más rápido de iterar en la misma sesión de trabajo; más defendible como "funcional" ante el criterio de evaluación que un mockup estático | Figma/herramienta de diseño (se deja de lado el aporte directo de Claude Code en la construcción visual) |
| 04 Set. 2026 | Nombre de marca = **FIBO** | Simboliza crecimiento compuesto (espiral de Fibonacci) — traduce la mecánica de hábitos que se acumulan; doble uso como nombre de producto y del agente conversacional ("Fibo, tu copiloto de bienestar"), humaniza la IA sin costo extra | "Pacto" (nombre provisional anterior, descartado) |
| 04 Set. 2026 | Identidad "billetera con propósito" descartada — framing definitivo: **bienestar puro** | Era una idea inicial (03 Set.) sin relación real con el producto actual; riesgo de que el usuario espere un medio de pago | "Billetera con propósito" (documento conservado por trazabilidad en `02-ideacion/identidad-billetera-con-proposito.md`, marcado como descartado) |
| 04 Set. 2026 | Recompensa por niveles, ligada a la espiral Fibonacci: nivel bajo = contenido/insignia social; nivel medio = 1 mes gratis de un beneficio digital tipo suscripción (mindfulness, productividad); nivel alto = sesión real de bienestar emocional/psicología digital | El insumo oficial (`01-research/insight-sabias-que.md` §5, "sus beneficios son sus apps") confirma que la Gen Z valora suscripciones digitales (Spotify, Canva, Google One, IA) más que descuentos — un nivel intermedio de este tipo es más escalable de simular en el MVP que solo sesiones reales, y el nivel alto conserva el ancla de salud/bienestar de Pacífico | Recompensa única (solo sesión de bienestar) — se mantenía como duda abierta en `03-mvp/alcance-producto.md` §3, sin resolver |
| 04 Set. 2026 | Agente conversacional: llamada real a un LLM vía API, **no bloqueante**, con fallback a interacción simulada si la llamada falla o tarda | Evita que una falla de red/API tumbe el demo en vivo (riesgo real en un pitch de 3 min); conserva el argumento de "uso genuino de AWS" sin apostar la demo completa a la disponibilidad de la API | Llamada real sin fallback (riesgo de demo fallida en vivo); solo simulado sin llamada real (pierde el argumento de uso genuino de AWS) |
| 04 Set. 2026 | Se crea `docs/07-construccion/` (PRDs de landing y de MVP, design system inicial, esquemas de pantalla) para pasar de decisión a construcción concreta; landing (no obligatoria) se prioriza primero para generar señal real de boca a boca antes del 08 Set. | Con todas las decisiones de producto/marca/recompensa/agente ya cerradas, faltaba un puente accionable hacia la construcción; la landing responde directamente al supuesto B2C más frágil identificado en `02-ideacion/historias-usuario-y-validacion.md` §4 | Empezar a codear sin PRD/esquema (se descarta por riesgo de divergencia entre los 3 miembros del equipo construyendo en paralelo) |
| 04 Set. 2026 | **Corrección:** se retira "sin historial crediticio" como framing de la barrera de acceso a seguro de salud en todo el repo (problem statement, historias, guion de pitch, territorio de solución) — la barrera real y verificada es la informalidad laboral/falta de planilla, no el scoring crediticio | Verificado con fuentes públicas (Pacífico: la suscripción médica se evalúa por Declaración Jurada de Salud, no por crédito; SBS Res. 00890-2025: desgravamen ya no es exigible para préstamos personales/vehiculares/tarjetas desde mar. 2025) — un jurado del área técnica de Pacífico podría refutar la afirmación anterior en el acto. Detalle completo en `01-research/pacifico-friccion-usuario-eps.md` §3 | Mantener "sin historial crediticio" (se descarta por riesgo de credibilidad frente al jurado) |
| 04 Set. 2026 | Se añade a `04-gtm/modelo-negocio-y-viabilidad.md` §1 (capa 3) el argumento de que el "score alternativo" de FIBO puede, a mediano plazo, acercar al usuario a los beneficios cruzados de Credicorp que sí dependen de scoring crediticio (no reemplazarlo) | El historial crediticio sí es una barrera real, pero para beneficios cruzados (BCP↔Pacífico), no para la suscripción médica — corrige el error anterior sin perder el argumento de negocio, lo hace más específico y defendible | Prometer que FIBO sustituye el scoring crediticio regulado (se descarta por ser una promesa que el equipo no puede sostener en un hackathon) |
| 04 Set. 2026 | El hábito "práctica breve de bienestar mental" se trata como **hábito ancla** de la narrativa (onboarding primero, demo primero) — se mantienen los 3 hábitos co-iguales para el score de comportamiento, solo cambia énfasis narrativo | Es el que más resuena, el diferencial más directo frente a Quererte Sano, y el único 100% compatible con provincias sin adaptación (recompensa 100% digital, no depende de red física de clínicas) | Dar los 3 hábitos igual peso narrativo (se descarta porque diluye el hábito con más punch para un pitch de 3 min) |
| 04 Set. 2026 | Recompensa por niveles: **confirmada sin cambios** tras segunda revisión | El equipo valida el concepto ya cerrado el 04 Set. sin encontrar objeciones nuevas | — |

## 8. Preguntas abiertas / bloqueadores

1. **Crítico, hoy es día 4 (mentoría 9-11am):** instrumento de campo diseñado en `01-research/instrumento-campo.md` (encuesta + guía de entrevista semiestructurada; recomendación: Google Forms) — a esta hora **sigue sin desplegarse** (no existe ningún `docs/01-research/campo-*.md` con resultados). Sin esto, se llega a la mentoría con research secundario fuerte pero cero evidencia primaria propia — justo el criterio de mayor peso en ambas rúbricas (§2).
2. **Resuelto (03-04 Set.):** cifras de mercado de Pacífico validadas contra Memoria Integrada 2025 (42.3% EPS, 1er lugar) y Moody's Local a jun. 2025 (22.6% mercado general, 2° lugar).
3. **Resuelto (04 Set.):** identidad "billetera con propósito" descartada — framing definitivo es bienestar puro (ver `02-ideacion/identidad-billetera-con-proposito.md`, marcado como descartado).
4. **Resuelto (04 Set.):** nombre de marca = **FIBO** (ver `02-ideacion/historias-usuario-y-validacion.md` §0).
5. **Resuelto (04 Set.):** `BASES-CONCURSO.md` es la única fuente de verdad para rúbrica y duración de video (3 min) — decisión del equipo, no reabrir salvo indicación explícita del comité.
6. **Nuevo (04 Set.):** no existe todavía un *Problem Statement* v1 como documento único (estaba pedido para el día 3, `§3`) — el contenido existe repartido entre `02-ideacion/territorios-solucion.md`, `historias-usuario-y-validacion.md` y `05-entregables/guion-pitch-v1.md`, pero falta consolidarlo en una sola frase/página antes de la mentoría.
