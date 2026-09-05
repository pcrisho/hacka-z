# Síntesis de research → territorio de solución

> Conecta `01-research/pacifico-seguros-research.md` + `01-research/industria-seguros-comparativa.md` con la recomendación de arquetipo de `PLAN-TRABAJO.md` §6. Es un territorio propuesto para validar en campo (días 2-3), no una decisión cerrada.

## 1. Los 5 hallazgos que más deberían mover la aguja

1. **Pacífico ya gana en salud (EPS 42.3%, 1er lugar), no en seguros generales (2° detrás de Rimac).** Jugar donde ya tienen autoridad reduce el riesgo de la propuesta y facilita que la sustentación conecte con su negocio real.
2. **La brecha de penetración (Perú 2.05% vs. OECD 6.2%, LatAm 3.0%, Chile 5.3% — cifra de Perú corregida 05 Set., ver `01-research/pacifico-seguros-research.md` §5) no es solo de ingreso.** Chile, con un PBI per cápita no tan lejano, más que duplica a Perú — el problema es estructural y de confianza, no solo poder adquisitivo.
3. **La causa estructural #1 es la informalidad laboral (~70%).** En países desarrollados el seguro llega "por defecto" vía empleador. En Perú, no — el producto tiene que ganarse una decisión activa del usuario. *(Precisión 04 Set.: la suscripción de un seguro de salud no depende de historial crediticio — depende de tener planilla; ver `01-research/pacifico-friccion-usuario-eps.md` §3. El pricing de FIBO sigue sin depender de ningún scoring, pero por una razón distinta a la que se venía citando: se ancla en comportamiento porque el usuario no tiene planilla, no porque no tenga tarjeta de crédito.)*
4. **No hay checkout de tarjeta dominante en Gen Z Perú — hay Yape, y Pacífico ya está ahí.** Pacífico y Yape lanzaron **"Seguro Salud Yape"** (S/9.90/mes, teleconsultas + indemnización, mismo público objetivo: independientes, informales, sin seguro previo — ver `01-research/pacifico-microseguros-yape-red-sanna.md`). Ese producto sí vive embebido en Yape; FIBO **no** — es una app independiente que usa Yape como pasarela de pago y canal de descubrimiento, no como contenedor (corrección de la mentoría, `02-ideacion/hallazgos-mentoria-04-set.md` §3.1). Lo que Seguro Salud Yape no tiene es el mecanismo: es prima fija de una sola vez, sin hábito, sin gamificación, sin pausar sin penalidad. Ahí sigue el diferencial real.
5. **El patrón regional que ya funcionó (Nubank) es: ganar confianza con algo simple primero, vender protección después sobre esa base** — no vender seguro como primer contacto con la marca.
6. **El momento de mayor vulnerabilidad no es "nunca tuvo seguro" — es perder el que ya tenía.** Al dejar un empleo formal, el afiliado tiene solo 60 días para mantener continuidad, atraviesa una carencia adicional de 3 meses en EsSalud potestativo, y el costo sube porque desaparece el subsidio del empleador (2.25 de los 9 puntos que iban a EsSalud) — ver `01-research/pacifico-friccion-usuario-eps.md`. Es un problema de *timing y fricción administrativa* en la transición, no solo de precio. Un producto que nunca dependió de una relación laboral formal evita este abismo por diseño, en vez de suavizarlo — argumento fuerte a favor del territorio propuesto, y relevante también para el cruce alternativo Sobreviviente + Freelancer (quien entra y sale de la formalidad, no solo quien nunca la tuvo).

## 2. Hacia dónde apunta esto

La implicación conjunta de (1)+(3)+(5) es que **el problema no es solo "qué seguro diseñar", es "cómo se gana el derecho a ofrecerlo".** Un producto que abre con "cotiza tu seguro" repite el error que ya frena la categoría en Perú (confianza baja, letra chica, fricción). Un producto que abre con algo gratuito, útil y frecuente — y que *revela* la protección como consecuencia, no como venta — tiene más chances de ser adoptado por una generación que, según el insumo oficial, rechaza específicamente la publicidad disfrazada y la letra chica.

Esto también resuelve, sin proponérselo, dos de las restricciones "Plot Twist" del insumo oficial:
- *"Prohibido usar descuentos"* → si el producto no vende con precio sino con hábito/comportamiento, el descuento deja de ser la palanca.
- *"Tu cliente nunca lo usa" / "Sin letra chica"* → un modelo donde la cobertura crece con el uso (no es un contrato fijo que "quizás nunca se use") cambia la sensación de "dinero perdido" que aparece en `insight-sabias-que.md`.

## 3. Betterfly como validación del mecanismo (no como plantilla a copiar)

**Por qué importa específicamente para este proyecto, más que Lemonade o Trov:**

| | Lemonade | Trov | Betterfly |
|---|---|---|---|
| Mercado de origen | EEUU/Europa | EEUU/UK | **Chile → LatAm** |
| Depende de scoring actuarial/de comportamiento individualizado para fijar precio | Sí (pricing por IA, Lemonade) | Parcial | **No** — el "precio" es el hábito, no un score |
| Resultado de negocio | Crece pero aún no rentable | Trayectoria irregular, pivots | **Unicornio (>US$1,000M), alianza regional con Chubb en 5 países** |
| Mecánica trasladable a Perú sin adaptar | Parcial (transparencia sí, IA de suscripción no) | Parcial (el concepto "prender/apagar" sí) | **Alta — nació en un contexto similar al peruano** |

Betterfly no es solo "un buen ejemplo" — es **evidencia de que el mecanismo (hábito → cobertura) funciona en LatAm sin depender de la infraestructura que buena parte del público objetivo peruano no tiene** (checkout de tarjeta, seguro por planilla formal). Eso es lo que lo hace más fuerte que un caso de EEUU para este pitch: responde directamente al criterio de evaluación "innovación... rompe paradigmas o mejora algo existente" (Demoday §7.2) con precedente real, no solo con una idea.

**Corrección importante (03 Set.):** Betterfly **no valida la adquisición B2C**. Nació en 2018 como "Burn to Give", un producto más abierto/individual, pero en 2020 pivoteó deliberadamente a un modelo **B2B2E exclusivo**: la empresa contrata y paga la membresía, el colaborador la recibe como beneficio (+5,000 empresas cliente en 8 países). Es decir, el propio Betterfly probó algo cercano a B2C y se alejó de eso — señal de que fue, como mínimo, más difícil de escalar así. Nuestra propuesta necesita ser B2C (el público objetivo no tiene un empleador de por medio), así que Betterfly responde "¿funciona la mecánica?" pero no "¿funciona llegar directo a la persona?". Para esa segunda pregunta, el precedente regional más sólido es otro: **Nubank**, que creció de 1M a 34M de usuarios (2016-2021) con 80-90% de adquisición orgánica (boca a boca y listas de espera, sin canal corporativo) y un CAC real reportado de **bajo US$5 por cliente** — *corregido 05 Set. tras auditoría: la cifra "CAC $0" que se citaba antes era un framing de relaciones públicas del CEO, no el dato que Nubank reportó a su regulador* ([Nu Holdings — Form F-1 ante la SEC, 2021](https://www.sec.gov/Archives/edgar/data/1691493/000119312521314359/d213207df1.htm)) — analogía de *mecanismo de crecimiento mayormente orgánico*, no de adquisición gratuita ni de producto idéntico (es banca, no seguro de hábitos). Detalle y método de validación de esto en `historias-usuario-y-validacion.md` §4.

**Lo que Betterfly valida, mecánica por mecánica:**
- *Hábito → cobertura, no prima → cobertura.* La protección crece con acciones (caminar, dormir, meditar), medidas por app, no con un pago mensual fijo. Encaja con "tranquilidad = control" y con el arquetipo Guardián/Estudiante (quiere sentir que puede hacer algo hoy, no planificar a 20 años).
- *Recompensa social/altruista (BetterCoin → donaciones), no descuento monetario.* Esto es exactamente la salida a la restricción "prohibido descuentos" del insumo oficial — Betterfly ya demostró que una recompensa no-monetaria puede sostener el engagement.
- *Alianza con una aseguradora (Chubb) en vez de construir la aseguradora.* Precedente de GTM: el equipo puede posicionar la propuesta como algo que **Pacífico co-construye o potencia**, no como una startup que reemplaza a Pacífico. Esto es coherente con el objetivo real del concurso, según las bases (`BASES-CONCURSO.md` §2): "generar propuestas accionables que Pacífico Seguros pueda incorporar a su reflexión estratégica" — no hay mención de incubación en ninguna etapa. Esto sigue siendo válido independientemente de si la adquisición final de usuarios es B2B o B2C.

**Lo que NO se debe copiar tal cual:**
- El producto ancla de Betterfly es *seguro de vida*. La fortaleza real de Pacífico es *salud/EPS* — el equivalente peruano debería anclarse en bienestar/salud (física + mental), no en vida, para heredar la autoridad de mercado real de Pacífico (hallazgo #1).
- Betterfly depende de un partner actuarial (Chubb) para el respaldo real de la cobertura. Para el MVP de 7 días esto no hace falta resolverlo — se simula — pero si el jurado pregunta "¿quién respalda la cobertura?", la respuesta honesta es "un partner tipo Pacífico/Chubb, análogo al modelo Betterfly-Chubb", no un cálculo actuarial propio.

## 4. Territorio de solución propuesto (para validar en campo, no decidido)

Un producto de **bienestar financiero + salud/salud mental** para el cruce Guardián + Estudiante/Primer Empleo (`PLAN-TRABAJO.md` §6): micro-hábitos semanales (ahorro chico, actividad física, chequeo preventivo, sesión de bienestar) trackeados vía una app propia de FIBO (no embebida en Yape — ver `hallazgos-mentoria-04-set.md` §3.1), que hacen crecer una cobertura base de salud/bienestar sin costo. Al alcanzar un nivel de constancia, el usuario recibe una recompensa no monetaria que **gana el derecho** a que se le ofrezca un microseguro personalizado pay-as-you-go, pagado vía Yape, pausable sin penalidad (`hallazgos-mentoria-04-set.md` §3.2) — recompensa y microseguro no son dos mecanismos paralelos, son una sola progresión.

Esto es un punto de partida para contrastar con la encuesta/entrevistas del día 2-3 — no reemplaza la validación de campo, la orienta.

**Desarrollo completo** (historias de usuario, cold start, resiliencia, agente embebido) en [`historias-usuario-y-validacion.md`](./historias-usuario-y-validacion.md). **Modelo de negocio y viabilidad económica** en [`../04-gtm/modelo-negocio-y-viabilidad.md`](../04-gtm/modelo-negocio-y-viabilidad.md). **Alcance detallado del producto (qué es real vs. simulado en el MVP)** en [`../03-mvp/alcance-producto.md`](../03-mvp/alcance-producto.md).
