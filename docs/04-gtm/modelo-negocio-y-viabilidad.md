# Modelo de negocio y viabilidad económica

> Formaliza y corrige lo discutido en el chat de trabajo del 03 Set. 2026 sobre qué se vende, cómo se penetra el mercado y qué tan viable es el modelo a mediano/largo plazo — no en la semana del sprint, sino en el horizonte de meses que acompañaría al MVP si el equipo llega a la final. Complementa `02-ideacion/territorios-solucion.md` y `02-ideacion/historias-usuario-y-validacion.md`.

## 1. Las tres capas del modelo — qué se vende realmente

No es un solo producto monetizable — son tres capas con función distinta, y conviene no mezclarlas al explicarlo:

1. **Capa gratuita (Reserva de Bienestar + recompensa).** No genera ingreso directo. Su función es ser el gancho de confianza: contenido + cobertura base que crece con hábitos, más una recompensa no monetaria por nivel de constancia. Es inversión en adquisición, no un producto que se monetiza en sí mismo. Alcance detallado en `03-mvp/alcance-producto.md`.
2. **Capa paga (micro-primas pay-as-you-go).** S/3-10 por riesgos puntuales (herramientas de trabajo, viaje, accidentes), pausable sin penalidad. **Actualizado 04 Set. (`02-ideacion/hallazgos-mentoria-04-set.md` §3.2):** esta capa no se ofrece en paralelo a la recompensa de la capa 1 — se activa **como consecuencia** de haber alcanzado un nivel de recompensa, no como una segunda decisión de compra independiente. Es el ingreso directo del modelo, aunque modesto por usuario individual.
3. **Capa de conversión (el motor de rentabilidad real).** Con el tiempo, un usuario que consigue empleo formal o mayores ingresos se vuelve candidato natural para los productos tradicionales de Pacífico (EPS completo, vida, etc.). Aquí está el valor real a mediano/largo plazo: no se gana por la microprima de S/5, se gana por haber sido la primera relación de confianza de alguien que eventualmente sí puede pagar un seguro completo.

   **Precisión sobre qué barrera resuelve esta capa (verificado 04 Set. 2026, `01-research/pacifico-friccion-usuario-eps.md` §3):** la suscripción médica nunca dependió del historial crediticio del usuario — depende de tener planilla formal, y esa barrera la resuelve la capa gratuita, no esta. Lo que sí depende de scoring crediticio dentro del ecosistema Credicorp es el acceso a **beneficios cruzados** (campañas BCP↔Pacífico, facilidades de pago, productos vinculados a crédito) — algo a lo que este segmento tampoco accede hoy, por la misma razón estructural (informalidad → sin historial bancario/crediticio). El "score alternativo" de comportamiento que FIBO construye con los micro-hábitos no reemplaza el scoring crediticio regulado (sería una promesa que el equipo no puede sostener en un hackathon), pero sí es la relación de datos y confianza que puede, más adelante, alimentar o acelerar ese camino — un argumento de portafolio adicional y concreto para la capa 3, más allá de "algún día compra un seguro completo": **el usuario que ya demostró constancia con FIBO es un candidato más informado y de menor riesgo percibido para que Pacífico/BCP lo prioricen en esas campañas cruzadas**, incluso antes de tener historial bancario tradicional. Se presenta como hipótesis de negocio a mediano plazo, no como mecanismo ya construido en el MVP.

**Declaración explícita (a pedido del equipo, 03 Set.):** este es un modelo de **jugada de portafolio y de marca, no de margen por póliza**. Es coherente con cómo Pacífico ya opera "Seguros para Todos" (millones de pólizas inclusivas de bajo precio, meta 6M para 2026) — no es una jugada de rentabilidad inmediata por unidad, es adquisición de marca y de dato en un segmento que hoy no le compra nada.

## 2. Cómo se penetra el mercado Gen Z — mecanismos concretos

- **Canal:** **corrección 04 Set. (`02-ideacion/hallazgos-mentoria-04-set.md` §3.1):** FIBO es una app independiente, no vive embebida dentro de Yape (eso es lo que hace Seguro Salud Yape, un producto de Pacífico distinto — `01-research/pacifico-microseguros-yape-red-sanna.md`). Yape se usa como (a) pasarela de pago para las microprimas y (b) canal de descubrimiento vía banner/referido, aprovechando que Yape es del mismo grupo Credicorp — pero la instalación de la app sigue siendo un paso real que el usuario debe dar, no una fricción eliminada de fábrica.
- **Entrada:** boca a boca real entre pares, no publicidad — mismo mecanismo que usó Nubank para escalar sin canal corporativo (ver corrección sobre Betterfly en `territorios-solucion.md` §3).
- **Semilla inicial:** los contactos reales de campo del equipo (ya usados para la encuesta/entrevistas) funcionan como primer cohorte de prueba del boca a boca, no solo como fuente de datos cualitativos.
- **Semillero de comunidades existentes** (universidades, comunidades de trabajadores de plataformas gig) como canal intermedio si el boca a boca puro no alcanza — no es un B2B corporativo tradicional, es una adquisición grupal de bajo costo. Queda como opción a explorar, no confirmada.

## 3. Viabilidad económica de largo plazo

### 3.1. El precio ya está validado en el mercado peruano

El precio de S/9.90/mes de Seguro Salud Yape confirma que ese rango funciona en el canal Yape. No se está proponiendo un punto de precio nuevo sin precedente — se propone un **mecanismo distinto** (progresivo, ganado por hábito, pausable) sobre un rango de precio que el propio Pacífico ya validó.

### 3.2. La barrera real: costo de adquisición, no precio

**Matizado 04 Set. tras la corrección de arquitectura** (`02-ideacion/hallazgos-mentoria-04-set.md` §3.1): antes este documento asumía que, al vivir embebido en Yape, el alcance quedaba "resuelto de fábrica" sin fricción de descarga. Al ser FIBO una app independiente, eso ya no es exactamente cierto — hay un paso real de instalación entre "ve el banner" y "es un usuario activo". Lo que sigue resuelto de fábrica es la **visibilidad y la confianza inicial** (banner dentro de una app que el segmento ya usa a diario, del mismo grupo Credicorp) — no la instalación en sí. Esto cambia el tipo de riesgo del modelo: sigue sin ser un problema clásico de adquisición fría tipo startup (no se parte de cero, hay un canal de visibilidad masiva ya resuelto), pero ahora hay **dos** conversiones que validar en campo, no una: banner → instalación, e instalación → primer hábito completado. El alcance (quién ve el banner) está resuelto de fábrica; lo que no está resuelto es si esas personas instalan la app y luego forman el hábito.

### 3.3. ¿Es superable, a corto o largo plazo?

| Horizonte | Qué debe cumplirse para ser viable | Qué lo haría inviable |
|---|---|---|
| **Corto plazo (piloto, 0-6 meses post-hackathon)** | Que exista una tasa de conversión mínima en las dos etapas: "ve el banner en Yape" → "instala FIBO" → "completa el primer hábito" — probable de validar con datos reales de un piloto acotado, no con proyecciones | Que Pacífico no otorgue el espacio de banner dentro de Yape (riesgo de negociación/alianza interna, no de producto) — sin ese acceso, el modelo vuelve a depender de adquisición fría, mucho más costosa |
| **Mediano plazo (6-18 meses)** | Retención del hábito más allá del primer mes (que no sea solo novedad); adopción real de la microprima por una fracción de los usuarios activos | Que el hábito se abandone masivamente pasado el primer mes, o que nadie pague ni la microprima más baja — obligaría a rediseñar el mecanismo, no solo el mensaje |
| **Largo plazo (18+ meses)** | Conversión real de una fracción de usuarios hacia productos tradicionales de Pacífico de mayor valor — es la tesis completa de "jugada de portafolio" | Que los usuarios se queden indefinidamente en la capa gratuita/micro sin nunca convertir — en ese punto el modelo deja de ser una inversión de adquisición y se vuelve un costo permanente sin retorno, el mismo riesgo que Lemonade documenta públicamente (crece, pero tarda años en ser rentable — `01-research/industria-seguros-comparativa.md` §3) |

**Conclusión honesta:** el modelo es superable a corto plazo si Pacífico concede el canal (una decisión de negocio de Pacífico, no algo que el equipo controle) — eso es lo más fácil de asegurar, precisamente porque no depende de inventar tracción desde cero. Lo que sí depende enteramente de la ejecución del producto es la retención y la conversión, y ahí es donde el sprint de campo (día 2-3) y el piloto post-hackathon deben poner el foco de validación real.

## 4. Riesgos y mitigación (actualizado 03 Set.)

| Riesgo | Si se confirma en campo | Mitigación |
|---|---|---|
| Nadie registra hábitos cada semana | El loop central colapsa | Pasar de registro manual a tracking pasivo (patrones de transacciones Yape) para bajar la fricción; o reducir a un solo hábito en vez de varios |
| El boca a boca, o el banner de Yape, no logran suficiente conversión a instalación | El modelo de adquisición requiere ajuste, no reinvención (la visibilidad ya está resuelta por el canal, la instalación no) | Semillero de comunidades existentes (universidades, plataformas gig) como refuerzo, no como reemplazo del canal Yape |
| Nadie paga la microprima, ni siquiera S/3-10 | El ingreso directo desaparece | La capa gratuita sigue entregando valor real — el modelo se apoya en la conversión futura (capa 3), no se cae el producto, cambia el énfasis de la sustentación |
| El jurado no ve diferencia frente a Quererte Sano / Seguro Salud Yape | Riesgo de percepción, no de producto | Ya resuelto en el guion de pitch — se nombran ambos explícitamente y se explica el mecanismo diferencial |
| Retención cae después del primer mes (novedad, no hábito real) | La tesis de conversión a largo plazo pierde sustento | Validar en el piloto post-hackathon, no solo en la semana de campo; diseñar el reward de forma que el valor entregado no dependa solo del efecto novedad |

**Nota sobre alcance de desarrollo (corrección 03 Set.):** el equipo no considera los 7 días como un riesgo de ejecución — el MVP se construye con mockups/flujos abstraídos donde no aporta demostrar funcionalidad real, y foco de desarrollo real solo en el flujo crítico. Ver alcance exacto en `03-mvp/alcance-producto.md`.
