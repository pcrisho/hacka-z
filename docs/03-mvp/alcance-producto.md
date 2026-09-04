# Alcance del producto — capa gratuita y qué es real vs. simulado en el MVP

> Responde a la pregunta del 03 Set.: "registrar hábitos" sonaba demasiado general — este documento define con precisión qué incluye la capa gratuita, con qué objetivo, y qué se construye real vs. se simula en el MVP del hackathon. Complementa `02-ideacion/historias-usuario-y-validacion.md` (loop e historias) y `04-gtm/modelo-negocio-y-viabilidad.md` (por qué existe esta capa).

## 1. Objetivo de la capa gratuita (dos, no uno)

1. **Para el usuario:** recibir valor tangible antes de comprometerse a pagar nada — el principio de cold-start ya definido (`historias-usuario-y-validacion.md` §5).
2. **Para el producto:** generar una señal de comportamiento real (constancia, tipo de hábito, frecuencia) que funciona como "score alternativo" — la base para decidir qué ofrecer después, y la evidencia que sustenta la tesis de conversión a largo plazo (`04-gtm/modelo-negocio-y-viabilidad.md` §1, capa 3).

Sin este segundo objetivo, la capa gratuita sería solo costo. Con él, es la fuente de datos que hace defendible el modelo de negocio frente al jurado.

## 2. Los 3 hábitos — acotados a propósito

Máximo 3, no más — mismo principio que Betterfly (caminar, dormir, meditar: pocos ejes, no un catálogo). Cada uno ligado a un eje del arquetipo Guardián + Estudiante/Primer Empleo (bienestar financiero + físico + mental):

| Hábito | Qué hace el usuario | Por qué este y no otro |
|---|---|---|
| Micro-ahorro semanal declarado | Aparta un monto simbólico (ej. S/5-10) y lo registra en la app | Responde directo al insight oficial de ansiedad financiera del arquetipo Estudiante/Primer Empleo |
| Actividad física breve | Registra 15-20 min de actividad, autoreportado (no requiere wearable para el MVP) | Eje físico del "bienestar" sin exigir hardware ni integración compleja |
| Práctica breve de bienestar mental | Confirma una sesión corta de respiración/mindfulness dentro de la app, o agenda un chequeo preventivo | Eje mental — conecta con "tranquilidad = control" y "la salud es más que no enfermarse" (los dos insights más citados del insumo oficial), y responde directo al dolor #1 declarado para el arquetipo situacional Estudiante/Primer Empleo: "burnout, crisis de salud mental" (`01-research/insight-arquetipos-situacionales.md`) |

**Este es el hábito con mayor resonancia esperada (validado 04 Set., a confirmar en campo) — tratarlo como el "hábito ancla" de la narrativa, no como uno más de tres:**
- Es el único de los tres que responde punto por punto al mismo terreno que ya ocupa Quererte Sano (contenido de bienestar sin mecanismo de earning) — por eso es el diferencial más directo y fácil de explicar frente al jurado: "lo que Quererte Sano da como contenido suelto, aquí se convierte en cobertura real".
- Tiene una línea recta hacia la recompensa de mayor valor percibido (nivel alto = sesión real de psicología digital, `alcance-producto.md` §3) — a diferencia del hábito financiero o físico, cuyo camino a la recompensa es menos narrativo.
- Es compatible con provincias sin adaptación: al ser 100% digital (sesión de mindfulness en app, psicología digital como recompensa), no depende de la red física de clínicas ni de la brecha Lima/provincias en penetración de seguros (45% vs. <1.5%, `01-research/pacifico-seguros-research.md`) — a diferencia de una recompensa presencial, que sí quedaría limitada a Lima.
- **Recomendación de ejecución:** priorizarlo en el onboarding (primera pregunta/sugerencia del agente FIBO) y en el video pitch (el momento demo debe mostrar este hábito primero, no en tercer lugar) — sin cambiar la estructura de 3 hábitos co-iguales para efectos del "score" de comportamiento (`§1`), solo la narrativa y el orden de presentación.

**Contenido asociado:** cápsulas cortas (no artículos largos tipo blog) ligadas directamente a completar el hábito de esa semana — no es una biblioteca general como Quererte Sano, es contenido funcional al loop, no informativo suelto.

## 3. La recompensa — por niveles, ligada a la espiral FIBO (decisión cerrada 04 Set.)

Al alcanzar un nivel de Reserva, el usuario desbloquea algo no-monetario — nunca un descuento (Plot Twist oficial "prohibido usar descuentos"). Se resuelve la duda que este documento dejaba abierta con una estructura de 3 niveles, coherente con el nombre de marca (FIBO, espiral de Fibonacci — ver `02-ideacion/historias-usuario-y-validacion.md` §0):

| Nivel | Recompensa | Por qué |
|---|---|---|
| Bajo (primeros hábitos) | Contenido corto + insignia/reconocimiento social | Costo ~cero, entrega valor inmediato desde el día 0 (principio de cold-start, §5) |
| Medio (constancia de 2-3 semanas) | 1 mes gratis de un beneficio digital tipo suscripción (mindfulness, productividad) | El insumo oficial confirma que la Gen Z valora suscripciones digitales (Spotify, Canva, Google One, IA) más que descuentos en efectivo (`01-research/insight-sabias-que.md` §5) — más escalable de simular en el MVP que coordinar sesiones reales |
| Alto (Reserva madura) | Sesión real de bienestar emocional/psicología digital | Conserva el ancla de salud/bienestar de Pacífico como recompensa de mayor valor percibido |

**Por qué hay evidencia a favor:** Betterfly ya demostró a escala que recompensas no-monetarias/sociales (BetterCoin → donaciones) sostienen el engagement; el insumo oficial confirma rechazo a descuentos disfrazados, no a recompensas en sí — y el nivel medio (suscripción digital) tiene respaldo directo y específico en el insight oficial, no solo en el precedente chileno.

**Duda que sigue abierta, ahora acotada al nivel alto únicamente:** Betterfly demuestra el enganche por recompensa no-monetaria dentro de un contexto B2B2E (el usuario ya "tiene" el beneficio pagado por su empresa). No está confirmado que una sesión real (nivel alto) funcione igual en frío, sin empleador de por medio — el nivel medio (suscripción) mitiga este riesgo porque no depende de la misma lógica. Sigue siendo una pregunta útil para campo o para la mentoría.

## 4. Telemedicina — aclaración importante, no forma parte del gancho gratuito

Pacífico ya tiene **Dr. Online** y la adopción nacional de telemedicina ya es alta (`01-research/pacifico-percepcion-eps-digital.md` §1) — el cuello de botella real es conectividad, no desconfianza. Incluir telemedicina como parte del gancho gratuito inicial sería redundante con algo que Pacífico ya construyó y ya funciona razonablemente.

**Su lugar correcto en la propuesta:** aparece más adelante, como parte de la cobertura ya ganada — en el "momento de verdad" (ej. la laptop dañada de Camila), el flujo puede conectar o simular una conexión al servicio real de Pacífico (Dr. Online) en vez de reinventar uno propio. Coherente con el principio ya establecido: "no reemplazamos lo que Pacífico construyó, lo completamos".

## 5. Qué es real vs. qué se simula en el MVP del hackathon

El equipo no considera los 7 días un riesgo de ejecución (corrección 03 Set.) — el criterio no es "cuánto se puede construir", es "qué demuestra la propuesta de valor y qué no aporta demostrar". Se prioriza:

| Elemento | Real (construido) | Simulado / mockup |
|---|---|---|
| Registro de los 3 hábitos y crecimiento de la Reserva | Sí — es el corazón del loop, debe sentirse real e interactivo | — |
| Contenido de las cápsulas | Sí, un set acotado (no la biblioteca completa) | — |
| Recompensa (sesión de bienestar) | Se muestra el flujo de "gané algo real" | El servicio en sí (no hay psicólogo real conectado) |
| Micro-prima pay-as-you-go (activar/pausar) | Sí — es el flujo que demuestra el diferencial frente a Seguro Salud Yape | El cobro real / pasarela de pago |
| Momento de verdad (reclamo/canje) | Sí — el flujo conversacional con el agente | La resolución real del caso; la escalación a humano se simula |
| Telemedicina / Dr. Online | — | Se referencia como flujo de salida hacia el servicio real de Pacífico, no se reconstruye |
| Onboarding conversacional | Sí, con una llamada real a un LLM (Bedrock u otro) — ver `02-ideacion/historias-usuario-y-validacion.md` §6 | — |

**Regla general:** todo lo que sea parte del flujo crítico único (cotizar/registrar hábito → activar/crecer Reserva → ver el momento de verdad) se construye real e interactivo. Todo lo que dependa de infraestructura externa real (pagos, terapeutas, aseguradora de respaldo) se simula o se deja como conexión de salida hacia lo que Pacífico ya tiene.
