# Hallazgos de la mentoría — 04 Set. 2026 (2 sesiones)

> **Primera evidencia externa real del proyecto.** Todo lo anterior en `01-research/` es research secundario (fuentes públicas) o insumo oficial de kick-off; esto es feedback directo de dos mentores de Pacífico sobre la propuesta ya presentada, con preguntas y objeciones reales. Se le da prioridad alta en la toma de decisiones — a la par del insumo oficial de kick-off, por encima del research secundario del equipo.
>
> **Fuente:** transcripciones automáticas (audio→texto, con ruido de reconocimiento de voz) de las dos sesiones de mentoría del 04 Set., guardadas íntegras en `4-07-2026/RETROALIMENTACION - 1 - LUIGGI/RETROALIMENTACION.md` y `4-07-2026/RETROALIMENTACION - 2 - CAMI/RETROALIMENTACION.md`. Este documento es la síntesis y las decisiones que se toman a partir de ellas — las transcripciones crudas no se editan, quedan como registro.

## 1. Contexto

Dos mentores, dos perfiles distintos:
- **Luiggi** — feedback más orientado a producto/mecánica: cuestiona el detalle operativo de los hábitos, la robustez del sistema de honestidad, y propone la idea de comunidades + seguro grupal.
- **Cami** — feedback más orientado a estrategia, UX y ética: cuestiona la estructura del discurso, la solidez del modelo de negocio (recompensa vs. venta de seguro), la transparencia de datos, y la falta de validación con usuarios reales.

## 2. Confirmaciones — lo que ya teníamos y quedó validado por un tercero externo

| Lo que ya decíamos | Cómo lo confirmó la mentoría |
|---|---|
| Capa gratuita sin suscripción; capa de pago = "activar" microseguros puntuales, no una mensualidad | Luiggi lo reafirma explícitamente: *"no hay una suscripción... la idea es que se puedan acercar al mundo de los seguros, no poner una barrera más con el precio"* |
| Prohibido usar descuentos/publicidad disfrazada (Plot Twist oficial) | Cami valida el mismo principio desde otro ángulo: *"no vamos a interrumpir el flujo"* — sin que el equipo mencionara el Plot Twist, llegó a la misma conclusión sola |
| La informalidad laboral es la causa estructural, no el ingreso | Ambos mentores abren su sesión repitiendo el mismo dato (penetración Perú vs. Chile/EEUU) sin que el equipo lo forzara |
| Betterfly como referencia de *mecanismo*, no de adquisición | Ambos mentores lo aceptan como caso de referencia — Cami incluso pide bajarle protagonismo en el discurso, no cuestiona la validez del caso |
| Capa de conversión = embudo hacia productos de Pacífico | Cami lo dice casi con las mismas palabras que `04-gtm/modelo-negocio-y-viabilidad.md` §1: *"básicamente es un embudo hacia los productos financieros... de seguro mucho más robusto de Pacífico"* |

## 3. Decisiones que cambian (con razón, fuente y acción tomada)

### 3.1. Arquitectura de distribución — corrección importante

**Antes:** el repo asumía "FIBO vive embebido dentro de Yape" (mini-app, sin descarga nueva), basado en el precedente de Seguro Salud Yape.

**Corrección (confirmada por Roberto, 04 Set.):** FIBO es una **plataforma independiente** (app propia). Yape se integra como **pasarela de pago** para las microprimas — no como contenedor de la app. Esto es coherente con lo que Luiggi propuso en la mentoría: *"por ahí puede haber una separación que puede ser independiente al Pacífico... por parte de Fibo no necesita ser cliente de Pacífico para pertenecer, pero si eres cliente del Pacífico puedes pertenecer de igual forma... Fibo es un canal donde tú puedes recomendarlo."*

**Implicancia real que hay que asumir, no esconder:** esto cambia el argumento de adquisición. Antes decíamos "el alcance ya está resuelto de fábrica, cero fricción de descarga". Ahora la app sí requiere una descarga — el argumento correcto es "la **visibilidad y confianza** están resueltas vía un banner/referido dentro de Yape (mismo grupo Credicorp) y vía el pago integrado", pero la conversión banner→instalación→primer hábito sigue siendo un riesgo real de adquisición, no solo de retención. Ver corrección propagada en `04-gtm/modelo-negocio-y-viabilidad.md` §2-3.

**Propagado a:** `historias-usuario-y-validacion.md`, `problem-statement-v1.md`, `territorios-solucion.md`, `04-gtm/modelo-negocio-y-viabilidad.md`, `03-mvp/alcance-producto.md`, `05-entregables/guion-pitch-v1.md`, `07-construccion/*`, `CONTEXTO-ACTUAL.md`.

### 3.2. Recompensa reencuadrada — ya no es un mecanismo paralelo

**Antes:** recompensa (por niveles) y microprima pay-as-you-go eran dos mecanismos que convivían en paralelo dentro de la capa gratuita y la capa paga respectivamente.

**Objeción de Cami:** *"si una persona te pagaría por X beneficio y además te pagaría por un seguro... si lo que queremos es vender microseguros, de pronto los beneficios son parte de esa experiencia que te va a llevar a comprar."* — el riesgo es que se sienta como "págame dos veces" en vez de una progresión con sentido.

**Decisión (confirmada por Roberto, 04 Set.):** la recompensa deja de ser un fin en sí — es explícitamente **el paso previo y gratuito que gana el derecho a que se le ofrezca el microseguro**. No hay dos productos que vender, hay una sola progresión: hábito → recompensa (prueba de valor y de confianza) → oferta de microseguro personalizada. Esto también resuelve por diseño la preocupación de ética/transparencia de Cami (§3.6): si la oferta de seguro es la consecuencia lógica y anunciada de haber ganado la recompensa, no es una sorpresa ni un cambio de tema.

**Propagado a:** `03-mvp/alcance-producto.md` §3, `04-gtm/modelo-negocio-y-viabilidad.md` §1, `historias-usuario-y-validacion.md` §1, `problem-statement-v1.md`, `PLAN-TRABAJO.md` §7.

### 3.3. Comunidades + seguro grupal contextual — nuevo territorio de producto

**El hallazgo más fuerte de ambas sesiones.** Luiggi lo propone con un ejemplo muy concreto: *"vamos a jugar pichanga, somos un grupo de 12 personas... pagamos entre todos un sol, y estamos seguros durante el partido... accidentes personales."* Cami lo califica de *"súper potente... está conectando la vida cotidiana de las personas con la comunidad... y está conectando con un seguro. Es como que se cierra el ciclo."*

Es un mecanismo con tres capas en uno: (1) refuerzo social del hábito (accountability de grupo, ver respaldo científico en `01-research/insight-salud-mental-y-habito-gen-z.md` §3), (2) sentido de pertenencia (lo que el usuario ya había señalado como su intuición inicial), y (3) un producto de seguro grupal contextual y puntual (ligado a una actividad real de un grupo real — deportiva, en el ejemplo), extensible incluso a B2B (canchas, clubs, gimnasios que cobran ese seguro como parte de la entrada).

**Estado:** territorio de producto validado para documentar; **no es alcance del MVP de 7 días** (el equipo ya cerró que el hackathon es un prototipo funcional acotado, no una app para masas — ver §3.5). Se documenta como visión de producto y, si el tiempo alcanza, como posible mención narrativa en el pitch (el ejemplo de la pichanga es memorable y fácil de contar en 15 segundos).

### 3.4. FIBO también ayuda a dejar malos hábitos, no solo a construir buenos

Ampliación de visión de producto señalada por Roberto tras la mentoría: FIBO no se limita a construir 3 hábitos positivos — puede también trackear y ayudar a reducir hábitos no saludables (ej. sedentarismo, gasto impulsivo). Esto tiene sentido actuarial además de narrativo (reducir un hábito de riesgo también reduce el riesgo real que eventualmente cubre un seguro).

**Estado:** visión de producto completa, **no alcance del MVP** — el mismo principio de §3.5 aplica. Se documenta en `historias-usuario-y-validacion.md` como extensión futura, no se construye ni se promete en el pitch como si ya existiera.

### 3.5. Honor system del tracking autodeclarado — limitación aceptada explícitamente

Luiggi objeta que el registro de hábitos es autodeclarado y por tanto "gameable": *"es auto declarado... hay mucha intención de poder para ganarme ese beneficio [sin ser honesto]."* Propone como solución más robusta evidencia (foto) o integración con wearables — y él mismo reconoce que es *"más complejo, probablemente."*

**Decisión (confirmada por Roberto, 04 Set.):** para el MVP del hackathon, el honor system (autodeclarado) se acepta **explícitamente como limitación conocida**, no se intenta resolver con integraciones de wearables ni verificación por foto — eso queda como roadmap post-hackathon. Consistente con el principio ya cerrado "MVP = validar, no construir completo", y con la corrección de scope que el propio equipo pidió: el hackathon construye un **prototipo funcional que demuestra el mecanismo**, no una aplicación lista para escala masiva con todos los controles anti-fraude resueltos.

**Propagado a:** `07-construccion/PRD-mvp.md`.

### 3.6. Ética y transparencia de datos — nuevo principio explícito de producto

Cami plantea el riesgo con más fuerza que ningún otro punto de la mentoría: *"imagínate que a mí me venden la idea de una plataforma que me ayuda a cuidar mi [bienestar] y de repente me sale [una] compra este seguro... yo me voy... hay que ver bien cómo se hace eso con mucha delicadeza y que la persona sepa que eso va a pasar."*

**Decisión:** el onboarding debe anunciar explícitamente, desde el primer contacto, que FIBO eventualmente ofrecerá microseguros personalizados en base al comportamiento registrado — con consentimiento claro, no como sorpresa. La reformulación de la recompensa (§3.2, "gana el derecho a que se le ofrezca") ya resuelve buena parte de esto por diseño: si el usuario sabe desde el inicio que ese es el camino, la oferta deja de sentirse como una traición de expectativas.

**Propagado a:** `historias-usuario-y-validacion.md` §5 (cold start).

### 3.7. Customer journey de punta a punta

Cami pide explícitamente pensar el flujo completo, no solo el "flujo feliz": *"¿qué pasa desde el ingreso a la plataforma?... ¿qué pasa durante?... ¿y qué pasa después de la compra?... ¿y qué pasa en el momento que esta persona se quiera detener [cancelar]?"*

**Acción:** nuevo documento `07-construccion/customer-journey.md` que mapea entrada → onboarding → loop de hábitos → recompensa → oferta de microseguro → activación/pago → uso → pausa/cancelación — con la misma filosofía "sin penalidad" que ya aplicamos al top-up, extendida a todo el ciclo.

## 4. Correcciones a la estructura del pitch (no al contenido)

Cami fue específica sobre la *forma* del discurso, no sobre si la idea es buena:

1. **Empezar por el usuario, no por la estadística ni por Betterfly.** *"No me dejaste ver cómo eso se conecta específicamente con ese usuario... eso tiene que estar desde el comienzo."* El guion actual (`05-entregables/guion-pitch-v1.md`) abre con la cifra de informalidad — hay que evaluar si el segmento 0:00-0:45 debe abrir con Camila/Diego en vez de la cifra macro, y traer la cifra como refuerzo, no como apertura.
2. **Bajarle protagonismo a Betterfly.** *"Después de que hablas de una referencia... el protagonista son ustedes, no ellos."* Mencionarlo una sola vez, sin repetirlo.
3. **Tener respuesta lista a "¿por qué esto y no Quererte Sano?"** — pregunta que Cami hizo directamente y que el jurado probablemente repetirá.
4. **Verificar que cada cifra citada tenga fuente defendible.** *"No sé si están 100% seguros de que los datos son fidedignos... siempre esos datos tienen que [tener fuente]."* — ya es una práctica del equipo (`AGENTS.md`), esta mentoría confirma que un jurado sí puede cuestionarlo en vivo.

## 5. Lo que falta validar en campo (reforzar con research + encuesta relanzada)

Cami fue enfática en que la validación no puede quedarse en hipótesis del equipo: *"no basta con ser Generación Z... hay que definir muy bien quién es tu público objetivo... imaginemos que a estas personas no les interesa el bienestar, se nos cae toda la propuesta."* Su ejemplo de hábito de bajo valor ("tomar agua cada 10 minutos no aporta valor real") es una advertencia concreta: no basta con elegir el eje correcto (bienestar mental), hay que validar qué manifestación específica de ese eje aporta valor real a este nicho.

Preguntas que se agregan al instrumento de campo (`01-research/instrumento-campo.md`, relanzado 05 Set.):
- ¿Qué tan atractivo es un mecanismo de comunidad/grupo para sostener el hábito? (valida §3.3)
- ¿Cambia la disposición a compartir datos si se anuncia desde el inicio que eventualmente se ofrecerá un seguro? (valida §3.6)
- ¿Qué manifestación específica del hábito de bienestar mental se percibe con valor real (no genérica)? (valida la objeción directa de Cami)
- Ubicación (Lima / provincia) y rubro/actividad — huecos ya identificados antes de esta mentoría, siguen pendientes.

Reforzado además con research secundario nuevo sobre salud mental Gen Z y ciencia del hábito — ver `01-research/insight-salud-mental-y-habito-gen-z.md`.

## 6. Riesgo de equipo, no de producto (para la bitácora, no para el pitch)

Roberto menciona en la grabación, hablando con la mentora, que recién esa semana fue "integrado" (aparente inicio de una inducción/trabajo nuevo) y que eso complicó los tiempos de preparación: *"ha sido un poco complicado por tema de tiempos."* Vale la pena dejarlo registrado como riesgo de capacidad del equipo de cara a los días 5-8 del sprint, no como un problema de la propuesta.
