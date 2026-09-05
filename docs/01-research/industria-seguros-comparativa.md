# Comparativa: industria de seguros en países desarrollados vs. Perú

> Research propio del equipo. Objetivo: identificar qué explica la diferencia de adopción/confianza en seguros entre mercados desarrollados y Perú, y qué de eso es trasladable a una propuesta para Gen Z. Fecha de investigación: septiembre 2026.

## 1. Penetración: la brecha en números

| Mercado | Penetración (primas / PBI) | Nota |
|---|---|---|
| Estados Unidos | supera el 10% (junto con Reino Unido y Francia, entre los mercados con mayor penetración) | [OECD, Global Insurance Market Trends 2025](https://www.oecd.org/en/publications/global-insurance-market-trends-2025_0d11ecf4-en/full-report/component-3.html) |
| Reino Unido | supera el 10% | Ídem |
| Promedio OECD | 6.2% (2024), subiendo desde 6.0% (2023) | Ídem |
| Chile | 5.3% | Comparativa sectorial LatAm 2025 |
| Uruguay | 3.7% | Ídem |
| Colombia | 3.6% | Ídem |
| Brasil / promedio LatAm | ~3.0% | Ídem |
| **Perú** | **2.05%** (2T 2025) — corregido 05 Set., ver `pacifico-seguros-research.md` §5 | [APESEG, Informe Trimestral 2T 2025](https://www.apeseg.org.pe/wp-content/uploads/2025/10/Resultados-Sistema-Asegurador-2T25-web.pdf) |

Perú no solo está por debajo de los mercados desarrollados (4x menos que EEUU/UK) sino también por debajo del promedio de su propia región. No es solo "somos un país pobre" — Chile, con un PBI per cápita no tan distante, duplica la penetración peruana, lo que apunta a factores estructurales y de confianza, no solo de ingreso disponible.

## 2. Qué explica la diferencia (más allá del ingreso)

1. **Formalidad laboral y seguro "por defecto".** En EEUU y UK, buena parte de la población accede a seguro de salud/vida a través del empleo formal o de sistemas cuasi-obligatorios (Medicare/Medicaid, NHS + seguros complementarios). En Perú, con ~70% de informalidad laboral ([INEI vía Infobae, abril 2026](https://www.infobae.com/peru/2026/04/01/inei-confirma-que-7-de-cada-10-trabajadores-en-peru-son-informales-pierden-acceso-a-cts-seguro-y-pension/)), el seguro casi nunca llega "por defecto" — el usuario tiene que buscarlo y decidirlo activamente, lo cual eleva la fricción de adopción drásticamente.
2. **Historial y scoring disponible.** Los mercados desarrollados tienen décadas de historial actuarial granular por persona, lo que permite pricing individualizado y productos "instantáneos" (ej. Lemonade emite pólizas en minutos). En Perú, gran parte de la Gen Z (estudiantes, freelancers, primer empleo) no tiene ese historial actuarial ni acceso a seguro vía planilla — cualquier producto que dependa de scoring tradicional excluye a su propio público objetivo. *(Precisión 05 Set., auditoría de consistencia: esto no es un tema de historial crediticio bancario — el seguro de salud nunca se evaluó con eso, ver `01-research/pacifico-friccion-usuario-eps.md` §3 — es la ausencia de datos actuariales/de planilla lo que excluye al segmento.)*
3. **Madurez de canales digitales de distribución.** En mercados desarrollados, el seguro embebido (point-of-sale, checkout de e-commerce) ya es una categoría consolidada (ver Trov, sección 3). En Perú, la distribución digital de seguros es más reciente — pero el país sí tiene un canal digital masivo y ya adoptado: Yape (mencionado en las notas del equipo), que podría cumplir el rol que en EEUU cumple el checkout de Amazon o Stripe.
4. **Confianza y letra chica.** Los insights oficiales de Pacífico (`insight-sabias-que.md`) confirman que la Gen Z peruana rechaza específicamente la letra chica y confía más en pares que en publicidad — esto no es exclusivo de Perú, pero se combina con una industria aseguradora local que históricamente no ha priorizado la transparencia, a diferencia de insurtechs como Lemonade que hicieron de la transparencia su propuesta de marca central.

## 3. Casos insurtech relevantes para Gen Z (con datos actuales)

### Lemonade (EEUU/Europa) — transparencia + IA + reclamos instantáneos
- **3 millones de clientes** a cierre de 2025, +23% vs. 2024. Prima en vigor (IFP): US$1.24B en Q4 2025 (+31% interanual). Ingresos anuales 2025: US$738M (vs. US$526M en 2024) ([Reinsurance News, Q4 2025](https://www.reinsurancene.ws/lemonade-reports-28-net-loss-improvement-and-53-revenue-growth-for-q425/)).
- **Loss ratio** mejoró de 88% a 67% en dos años gracias a IA en suscripción y siniestros ([Insurance Business Mag, Q3 2025](https://www.insurancebusinessmag.com/us/news/technology/lemonade-reports-record-q3-growth-and-path-toward-profitability-555611.aspx)).
- Sigue sin ser rentable (pérdida neta Q4 2025: US$21.7M, aunque mejorando 28% interanual) — **lección honesta:** el modelo "seguro simple + transparente + rápido" genera adopción masiva pero la rentabilidad tarda años, incluso en un mercado maduro. Para un MVP de hackathon esto no es un problema (no se necesita rentabilidad en 7 días), pero sí es un dato útil para la sección de GTM/sostenibilidad: hay que ser realistas sobre plazos de rentabilidad si el jurado pregunta.

### Betterfly (Chile → LatAm) — gamificación + seguro de vida gratuito por hábitos saludables
- Fundada en 2018, se convirtió en **unicornio** (valorización >US$1,000M) tras levantar US$125M en su ronda Serie C — la primera empresa B certificada en llegar a unicornio en LatAm ([Bloomberg Línea](https://www.bloomberglinea.com/2022/02/01/que-es-betterfly-el-nuevo-unicornio-de-latinoamerica/)).
- Modelo: la cobertura de vida crece a costo cero según hábitos saludables (caminar, meditar, dormir bien), medidos vía app; recompensas en "BetterCoin" canjeables por donaciones sociales.
- **Alianza regional con Chubb** para expandir seguros de vida en 5 países de LatAm ([Chubb newsroom, 2021](https://chubb.mediaroom.com/20211202-Chubb-y-Betterfly-anuncian-alianza)).
- **Es el caso más directamente relevante para este proyecto**: nació en LatAm (no EEUU/Europa), combina gamificación + bienestar + protección social — exactamente los tres ejes que aparecen en el insumo oficial de Pacífico (`insight-sabias-que.md`: "tranquilidad = control", "la salud es más que no enfermarse") y en el territorio "Ecosistema Preventivo con Gamificación" de las notas del equipo.

### Trov (EEUU/Reino Unido) — microseguro on-demand por segundo
- Pólizas "por segundo" y microprimas "por centavo", activables/desactivables desde el celular para objetos de alto valor (electrónica, equipaje), integradas en el punto de venta de e-commerce ([The Digital Insurer](https://www.the-digital-insurer.com/dia/trov-worlds-first-demand-insurance-things/); [FinTech Global, 2022](https://fintech.global/2022/03/07/embedded-insurance-the-future-of-insurance-distribution/)).
- Relevante como *prueba de concepto* de que el modelo "prende/apaga cobertura cuando la necesito" (que ya proponen las notas del equipo como "Microseguros On-Demand") es viable y ha sido probado, aunque Trov como compañía ha tenido una trayectoria irregular (pivots, cierre de operaciones en algunos mercados) — no presentarlo como caso de éxito indiscutible, sino como validación de la mecánica de producto, con la advertencia de que la ejecución comercial es difícil incluso en mercados maduros.

### Nubank (Brasil/México/Colombia) — referencia de distribución digital masiva en LatAm
- **131 millones de clientes** a cierre de 2025 en la región (112M Brasil, 13M México, 4M Colombia), +15% interanual ([Infobae, marzo 2026](https://www.infobae.com/tecno/2026/03/12/nubank-supera-los-130-millones-de-clientes-que-esta-pasando-con-este-banco-en-america-latina/)).
- No es una insurtech pura, pero ya distribuye seguros e inversiones (NuInvest) sobre su base de usuarios bancarios — confirma que en LatAm el patrón ganador es **construir confianza con un producto financiero simple primero, y usar esa base para vender seguro después** (embedded desde una relación financiera ya existente), en vez de vender seguro como primer contacto con la marca.

## 4. Implicancias para Perú — qué trasladar, qué adaptar, qué no aplica

**Trasladable casi tal cual:**
- Transparencia radical y reclamos rápidos vía app (Lemonade) — no depende de infraestructura local, es una decisión de producto/UX.
- Gamificación de hábitos saludables ligada a beneficios tangibles (Betterfly) — ya validado en LatAm, con contexto cultural similar al peruano.
- Distribuir seguro sobre una base de confianza financiera ya existente (Nubank) — en Perú el equivalente más fuerte es **Yape** (ya mencionado en las notas del equipo), que ya tiene adopción masiva Gen Z.

**Requiere adaptación:**
- Microseguro on-demand "por segundo" (Trov): el concepto es válido, pero probablemente debe simplificarse a "por día/por evento" en un MVP de 7 días, y el pricing no puede depender de scoring individual sofisticado dado el bajo acceso a datos actuariales/de planilla de la Gen Z peruana (no es un tema de historial crediticio, corregido 05 Set.) — mejor un pricing simple y plano por categoría de riesgo.
- Seguro embebido en checkout (point-of-sale): en Perú el "checkout" dominante para Gen Z no es tarjeta de crédito sino Yape/billeteras digitales — cualquier propuesta de embedded insurance debe anclarse ahí, no en un flujo de tarjeta como en EEUU.

**Probablemente no aplica directamente:**
- Cualquier modelo que asuma seguro "por defecto" vía empleador formal (como buena parte del mercado UK/EEUU) — con 70% de informalidad, ese canal de distribución casi no existe para el público Gen Z objetivo. El producto tiene que ganarse la decisión activa del usuario, no heredarla de un empleador.
- Modelos que dependen de años de historial actuarial individual para pricing dinámico sofisticado — no hay esa data disponible todavía para gran parte del segmento; un MVP de hackathon no debería prometer esto como diferenciador técnico.

## 5. Fuentes

- [OECD — Global Insurance Market Trends 2025](https://www.oecd.org/en/publications/global-insurance-market-trends-2025_0d11ecf4-en/full-report/component-3.html)
- [Swiss Re Institute — sigma 2/2025: World insurance in 2025](https://www.swissre.com/institute/research/sigma-research/sigma-2025-02-world-insurance-riskier-fragmented-world.html)
- [Reinsurance News — Lemonade Q4 2025 results](https://www.reinsurancene.ws/lemonade-reports-28-net-loss-improvement-and-53-revenue-growth-for-q425/)
- [Insurance Business Mag — Lemonade Q3 2025 growth](https://www.insurancebusinessmag.com/us/news/technology/lemonade-reports-record-q3-growth-and-path-toward-profitability-555611.aspx)
- [Bloomberg Línea — Qué es Betterfly, el nuevo unicornio de Latinoamérica](https://www.bloomberglinea.com/2022/02/01/que-es-betterfly-el-nuevo-unicornio-de-latinoamerica/)
- [Chubb — Alianza regional Chubb y Betterfly](https://chubb.mediaroom.com/20211202-Chubb-y-Betterfly-anuncian-alianza)
- [The Digital Insurer — Trov, on-demand insurance](https://www.the-digital-insurer.com/dia/trov-worlds-first-demand-insurance-things/)
- [Infobae — Nubank supera los 130 millones de clientes (marzo 2026)](https://www.infobae.com/tecno/2026/03/12/nubank-supera-los-130-millones-de-clientes-que-esta-pasando-con-este-banco-en-america-latina/)
- [Infobae — Informalidad laboral en Perú (abril 2026, INEI)](https://www.infobae.com/peru/2026/04/01/inei-confirma-que-7-de-cada-10-trabajadores-en-peru-son-informales-pierden-acceso-a-cts-seguro-y-pension/)
- Ver también `pacifico-seguros-research.md` para las cifras de penetración en Perú.
