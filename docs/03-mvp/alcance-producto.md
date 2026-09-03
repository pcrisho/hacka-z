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
| Práctica breve de bienestar mental | Confirma una sesión corta de respiración/mindfulness dentro de la app, o agenda un chequeo preventivo | Eje mental — conecta con "tranquilidad = control", el insight más citado del insumo oficial |

**Contenido asociado:** cápsulas cortas (no artículos largos tipo blog) ligadas directamente a completar el hábito de esa semana — no es una biblioteca general como Quererte Sano, es contenido funcional al loop, no informativo suelto.

## 3. La recompensa — qué es y por qué debería funcionar (con una duda pendiente)

Al alcanzar un nivel de Reserva, el usuario desbloquea algo no-monetario: en las historias ya narradas, una sesión de bienestar emocional gratuita. Es la aplicación directa del Plot Twist oficial "prohibido usar descuentos".

**Por qué hay evidencia a favor:** Betterfly ya demostró a escala que recompensas no-monetarias/sociales (BetterCoin → donaciones) sostienen el engagement; el insumo oficial confirma rechazo a descuentos disfrazados, no a recompensas en sí.

**Por qué no está 100% confirmado para nuestro caso:** Betterfly demuestra esto dentro de un contexto B2B2E — el usuario ya "tiene" el beneficio pagado por su empresa antes de empezar a interactuar. No está confirmado que la misma reacción positiva ocurra en frío, con alguien que no recibió nada gratis de un empleador de por medio. **Pregunta específica a agregar en las entrevistas de campo:** ¿qué tipo de recompensa se percibe como valiosa — una sesión gratuita, contenido, reconocimiento social, algo tipo donación estilo BetterCoin? No asumir que la respuesta es obvia solo porque funcionó en Chile.

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
