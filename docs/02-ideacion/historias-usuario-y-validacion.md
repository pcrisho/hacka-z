# Historias de usuario, inicialización, resiliencia y agente embebido

> Expande `territorios-solucion.md`. Todo lo narrado aquí es **storytelling con supuestos explícitos**, no un hallazgo de campo — sirve para tener una idea preliminar accionable antes de la encuesta/entrevistas del día 2-3, y para que esas entrevistas prueben las suposiciones concretas listadas en la §3, no solo exploren el problema en general.

## 0. Nombre de trabajo

**"Pacto"** (pacto contigo mismo/a) — nombre provisional solo para narrar, no una decisión de marca. Fácil de reemplazar; útil para no escribir "la app" cuarenta veces.

## 1. El loop central (recap)

1. Onboarding liviano (sin letra chica, ver §4).
2. El usuario registra micro-hábitos semanales (ahorro chico, actividad física, chequeo preventivo, sesión de bienestar).
3. Esos hábitos hacen crecer una **Reserva de Bienestar** — cobertura de salud/bienestar base, sin costo.
4. Opcional: top-ups pay-as-you-go, planos, cancelables en un clic, para riesgos puntuales (herramientas de trabajo, viaje).
5. Recompensas no monetarias (sesiones, contenido, reconocimiento social) — nunca descuentos.
6. El "momento de verdad": cuando algo pasa (o cuando el usuario canjea un beneficio), el reclamo/canje es simple y rápido.

## 2. Historia 1 — Camila, 22, Guardián + Estudiante/Primer Empleo

Camila egresó hace 4 meses, trabaja freelance en diseño mientras busca su primer empleo formal. Planifica en función de la semana, no del año. Le pesa la adultez y busca alivio, no más cosas que gestionar (insight oficial).

1. Se entera por una amiga que ya usa Pacto — no por un anuncio. La amiga le muestra en su celular que ya desbloqueó una sesión gratis de terapia.
2. Camila abre Pacto (como mini-app dentro de algo que ya usa, ej. Yape) y responde 2 preguntas de contexto: "¿trabajas de forma independiente?" y "¿qué te preocupa más ahora: tu salud, tu plata o tus herramientas de trabajo?". En base a eso, Pacto le sugiere sus primeros 3 hábitos.
3. Antes de pedirle nada, Pacto ya le regala algo: un primer contenido corto de bienestar financiero + una explicación en 3 viñetas de cómo crece la Reserva (sin letra chica, respondiendo al plot twist "sin instrucciones").
4. Semana 1: aparta S/10, camina 20 minutos 3 veces, agenda un chequeo preventivo. Su Reserva sube a un nivel que desbloquea 1 sesión de bienestar emocional gratuita.
5. Un mes después: se le malogra la laptop con la que trabaja. Había activado, ese mismo mes, un top-up de S/8 para herramientas de trabajo (lo pausó dos semanas antes porque tuvo un mes flojo, sin penalidad). Sube una foto del daño, responde 3 preguntas guiadas por un agente conversacional (§6), y en minutos tiene una respuesta clara de siguiente paso — sin llamar a nadie, sin letra chica.
6. Cierre: aunque nunca tuvo un problema de salud ese mes, ya sintió que "valió la pena" — porque ya recibió valor (la sesión de bienestar) antes de necesitar la cobertura. Responde directamente al plot twist "tu cliente nunca lo usa".

## 3. Historia 2 — Diego, 24, Sobreviviente + Freelancer/Creador Digital

Diego reparte en bicicleta y crea contenido part-time. Un mes gana S/2,000 disponibles, el siguiente apenas S/500 — **el plot twist oficial "tu usuario gana diferente cada mes" es literalmente su vida**, no una hipótesis.

1. Ve el banner de Pacto al pagar con Yape a un negocio afiliado — no tiene que buscarlo ni descargar nada nuevo.
2. Empieza **sin pagar nada**: solo completando hábitos. Esto es clave — el producto no excluye a quien no tiene margen ese mes, a diferencia de una prima fija mensual.
3. En una semana buena, activa una microprima de S/3 por 7 días para accidentes de tránsito (se mueve en bici). En una semana mala, la pausa sin penalidad ni cancelación forzada — el sistema no lo "castiga", solo detiene el crecimiento de su Reserva esa semana.
4. Con el tiempo, su constancia de hábitos (no su historial crediticio, que no tiene) lo hace subir de nivel y acceder a más beneficios acumulados — el producto genera su propio "score" alternativo en vez de depender de uno que Diego nunca tuvo.

## 4. Supuestos incorporados en las historias — qué probar en campo (día 2-3)

| Supuesto | Por qué importa | Cómo probarlo (encuesta/entrevista) |
|---|---|---|
| Abrirían la app semanalmente para registrar hábitos, no solo la primera vez | Si no hay uso recurrente, no hay Reserva que crezca y el producto colapsa | Preguntar frecuencia realista de uso de apps similares (fitness, finanzas) hoy; pedir que prueben el flujo en un prototipo clicable y observar si vuelven sin recordatorio |
| "Cobertura que crece con hábitos" se percibe como más confiable que un descuento | Es el corazón del pitch — si no es cierto, el diferencial se cae | Mostrar ambos framings (top-up con descuento vs. cobertura que crece con hábito) y preguntar directamente cuál genera más confianza y por qué |
| Pagarían una microprima plana (S/3-10) por una cobertura puntual activable/pausable | Valida el modelo de ingresos del GTM | Pregunta de disposición a pagar con anclas de precio concretas, no abiertas |
| El "gancho gratis" correcto es salud/bienestar y no herramientas de trabajo o viaje | Determina si el cruce Guardián+Estudiante es el correcto o si Sobreviviente+Freelancer debe liderar en su lugar | Preguntar directamente qué beneficio gratuito los haría probar el producto primero |
| Confían más en una app dentro de Yape que en una app nueva independiente | Valida la estrategia de distribución (hallazgo #4 de `territorios-solucion.md`) | Preguntar preferencia de canal directamente |
| El producto puede crecer B2C (persona a persona) sin canal corporativo, con costo de adquisición bajo | Es el supuesto más frágil del modelo de negocio — Betterfly, nuestro precedente principal, en realidad escala B2B2E, no B2C (ver corrección en `territorios-solucion.md` §3). Si esto no se sostiene, el modelo de adquisición completo debe replantearse | No preguntar directamente ("¿lo recomendarías?" mide intención, no comportamiento). Medir acción real: (1) lanzar una landing page/lista de espera durante la semana de campo y contar registros orgánicos + referidos; (2) en las entrevistas, preguntar específicamente "¿se lo recomendarías a alguien sin que te lo pidamos? ¿bajo qué condición?" para estimar propensión al boca a boca |

**Si alguno de estos supuestos se cae en el campo, el territorio de solución debe ajustarse — no está escrito en piedra.**

## 5. Cómo se inicializa correctamente (cold start)

El riesgo real de este modelo es el clásico problema de arranque: usuario nuevo, cero hábito, cero confianza, cero dato. Cuatro decisiones para resolverlo, ya reflejadas en las historias:

1. **Valor antes que compromiso.** Día 0 se regala algo (contenido, primer crédito de sesión) sin exigir ningún hábito todavía — nunca "primero demuéstrame algo, después te doy valor". Esto invierte el orden que hace fallar a la mayoría de programas de fidelización.
2. **Entrada social, no publicitaria.** La referencia viene de un par real (Camila lo ve en la amiga), no de un banner genérico — coherente con el insight oficial "la confianza se demuestra, rechazan publicidad disfrazada". Cuidado: debe sentirse auténtico, no un esquema de referidos agresivo.
3. **Vivir dentro de una superficie de confianza existente** (ej. Yape) en vez de pedir una descarga nueva — baja la fricción de activación a casi cero, apalancando una confianza que el usuario ya tiene, no una que Pacto tiene que ganarse desde cero.
4. **Pedir permisos progresivamente.** Empezar con un registro manual simple; recién pedir acceso a datos (ej. lectura de patrones de transacción) después de que el usuario ya vio valor — responde directamente al insight "esperan entender cómo se usan sus datos".

## 6. ¿Vale la pena un agente conversacional embebido?

**Sí, pero con un rol acotado — no como motor central del producto.** El insight oficial es explícito: *"lo digital no reemplaza todo... cuando realmente importa, quieren hablar con una persona"*. Un agente autónomo que decide todo rompería esa expectativa. Tres usos concretos donde sí aporta:

1. **Guía de onboarding conversacional** — en vez de un manual o tutorial (que el plot twist "sin instrucciones" prohíbe), el agente narra el producto en lenguaje simple y personaliza los 3 hábitos sugeridos según las 2 respuestas iniciales. El agente **es** la respuesta a esa restricción, no un extra.
2. **Asistente del "momento de verdad"** (reclamos/canjes) — guía al usuario con preguntas simples (ej. sube una foto, responde 2-3 preguntas), hace un primer filtro, y **escala a un humano** en cualquier caso con peso económico o emocional real. El punto no es automatizar todo — es no hacer esperar al usuario en la parte simple, y ser honesto en que lo importante lo ve una persona.
3. **Nudge/coach de hábitos** — recordatorios breves y personalizados ligados a la Reserva, sin ser invasivo.

**Por qué conviene para el MVP de hackathon específicamente:** AWS es aliado tecnológico oficial del concurso (`BASES-CONCURSO.md` §1-§2) y un agente conversacional real da evidencia tangible de "MVP funcional" y "Solidez de la propuesta" (`BASES-CONCURSO.md` §7.1-§7.2). *Corrección (03 Set.):* la versión anterior de esta nota citaba "uso de APIs" como criterio con 20% de peso propio en Demoday — esa cifra venía de una lectura de las notas personales del kick-off (`1-07-2026/INICIALIZATION.md` §4B), no de las bases oficiales, que no listan ese criterio de forma independiente. Se usa como argumento cualitativo de solidez técnica, no como un porcentaje citable en el pitch. Un agente conversacional simple sobre Bedrock (u otro LLM) es realista de construir en 1-2 días dentro del sprint y da un momento demostrable fuerte para el video pitch (mostrar la conversación de onboarding + un reclamo resuelto en minutos) — más memorable que una maqueta clicable estática. El riesgo a evitar: que el agente se convierta en "la estrella" y opaque la propuesta de valor real (la Reserva de Bienestar); debe sentirse como la forma en que el producto se explica solo, no como el producto en sí.

## 7. Resiliencia y adaptabilidad a futuro

La pregunta de fondo — cómo evitar que la solución se vea afectada por cambios futuros, o que pueda adaptarse a ellos — se resuelve con un principio de diseño, no con una promesa: **separar la capa de confianza/hábito de la capa de cobertura específica.**

- **La capa de hábito (Reserva de Bienestar) es el activo permanente.** No depende de qué asegurador esté detrás, ni de qué riesgos específicos cubre hoy. Si mañana cambia la regulación, si Pacífico ajusta su catálogo, o si aparecen riesgos nuevos (ciberfraude, eventos climáticos, riesgos propios de la economía gig), se puede enchufar un nuevo módulo de cobertura sobre la misma relación de confianza con el usuario — sin tener que reconstruirla desde cero. Es el mismo patrón que usó Betterfly con Chubb: la capa de engagement no es la aseguradora, se asocia con una.
- **Los datos que se piden son agnósticos a la fuente.** Se registra "hábito declarado + evidencia liviana", no un dato financiero o médico duro atado a una sola API. Esto reduce riesgo de privacidad hoy y evita que el producto quede obsoleto si cambia una fuente específica (ej. si cambia la API de Yape) — puede migrar a otras billeteras, wearables, o a las APIs de open finance que Perú viene regulando, sin rediseñar la relación con el usuario.
- **El pricing pay-as-you-go ya es resiliencia económica incorporada.** No es una promesa aparte — al no depender de contratos anuales fijos, el mismo producto se adapta solo a ciclos económicos buenos o malos del usuario (y del país), sin necesitar un rediseño de precios cada vez que cambia el contexto.

## 8. Qué falta decidir (no bloquea seguir avanzando)

- Confirmar con campo cuál de los supuestos de §4 se sostiene — puede mover el arquetipo líder.
- Decidir el nombre real (no "Pacto") — puede esperar hasta tener más validación.
- Decidir el alcance exacto del agente para el MVP: ¿demo scripted o llamada real a un LLM vía AWS? (recomendado: llamada real, aunque sea simple, para demostrar uso genuino de AWS).
