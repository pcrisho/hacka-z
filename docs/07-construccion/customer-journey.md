# Customer journey de punta a punta — FIBO

> Pedido explícito de la mentora Cami (`02-ideacion/hallazgos-mentoria-04-set.md` §3.7): *"pensar todo el... punta a punta"* — no solo el flujo feliz del prototipo (eso ya está en `esquema-mvp.md`), sino qué pasa antes de entrar, durante, en el momento de la oferta, y cuando el usuario se quiere ir. Este documento es el mapa completo; `esquema-mvp.md` sigue siendo la referencia de qué de esto se construye real vs. simulado para el hackathon.

## 1. Antes de entrar — qué motiva el primer contacto

- **Canal de descubrimiento:** banner/referido dentro de Yape (visibilidad vía Credicorp) o recomendación directa de un par (boca a boca, el mecanismo B2C central — ver `02-ideacion/historias-usuario-y-validacion.md` §4). FIBO es una app independiente (corrección `hallazgos-mentoria-04-set.md` §3.1) — este paso incluye una descarga real, no es zero-friction.
- **Promesa inicial:** bienestar (financiero + físico + mental), nunca "seguro" como primera palabra — coherente con "no vender seguro como primer contacto con la marca" (`territorios-solucion.md` §2).
- **Momento de fricción real a vigilar:** banner visto → instalación completada. Es el punto más débil de la cadena de adquisición ahora que no hay embedding — validar tasa de conversión en el piloto post-hackathon, no asumirla.

## 2. Onboarding — primer contacto con la app

- Agente conversacional FIBO se presenta (`historias-usuario-y-validacion.md` §6), 2 preguntas de contexto, sugiere 3 hábitos iniciales.
- **Momento de transparencia obligatorio (nuevo, `hallazgos-mentoria-04-set.md` §3.6):** antes de pedir cualquier hábito, FIBO comunica explícitamente y en lenguaje simple que, según la constancia del usuario, más adelante le ofrecerá microseguros personalizados — sin presión, decisión del usuario. No es letra chica al final, es parte de la presentación inicial.
- Entrega de valor antes de pedir compromiso (principio de cold-start ya cerrado).

## 3. Durante — el loop de hábitos

- Registro semanal de los 3 hábitos (uno de ellos, bienestar mental, tratado como hábito ancla — `03-mvp/alcance-producto.md` §2).
- Refuerzo social/comunidad (territorio validado en mentoría, `hallazgos-mentoria-04-set.md` §3.3) — fuera de alcance del MVP de 7 días, pero parte de la visión de producto.
- Honor system aceptado explícitamente como limitación del MVP (§3.5 de `hallazgos-mentoria-04-set.md`) — no se construye verificación por evidencia/wearable en esta fase.

## 4. El momento de la oferta — donde más se puede romper la confianza

- Al alcanzar el nivel correspondiente, FIBO **entrega primero la recompensa** (contenido/insignia, o beneficio digital) — ya anunciada desde el onboarding como el camino hacia una oferta de seguro, nunca como sorpresa.
- Solo después, y de forma clara, se presenta la oferta de microseguro personalizado — encuadrada como consecuencia de la recompensa ya ganada (decisión `hallazgos-mentoria-04-set.md` §3.2: la recompensa gana el derecho a la oferta, no son dos productos separados).
- **Regla explícita:** nunca como pop-up que interrumpe el flujo de uso normal (validado por Cami — ver §2 de `hallazgos-mentoria-04-set.md`). La oferta aparece en un espacio propio dedicado a "lo que ganaste", no sobre la pantalla de hábitos.
- El usuario puede decir que no sin penalidad ni fricción — declinar la oferta no afecta la Reserva ni el acceso a la app.

## 5. Activación y uso del microseguro

- Pago vía Yape (integración de pasarela, no de contenedor — `hallazgos-mentoria-04-set.md` §3.1).
- Uso real: el "momento de verdad" (reclamo/canje) — flujo conversacional con el agente, escalamiento humano cuando corresponde (`historias-usuario-y-validacion.md` §6).

## 6. Pausa y cancelación — lo que el flujo feliz no muestra

- Pausar un top-up: ya definido, sin penalidad, un toggle simple (`03-mvp/alcance-producto.md` §5, `07-construccion/esquema-mvp.md`).
- **Cancelar del todo (dejar de usar FIBO):** no debe sentirse como una ruptura — la Reserva de hábitos y el historial de comportamiento quedan disponibles si el usuario vuelve más adelante (coherente con "no depende de una relación laboral formal", el mismo principio de no penalizar discontinuidad se extiende aquí). No es un requisito construido para el MVP, pero si el jurado pregunta "¿qué pasa si me voy?", la respuesta ya está pensada: nada se pierde, nada penaliza, se puede volver.

## 7. Qué de este journey se construye para el hackathon

Ver `esquema-mvp.md` para el detalle real-vs-simulado pantalla por pantalla. Regla general: los pasos 2 (onboarding con transparencia), 3 (loop de hábitos) y 4 (recompensa → oferta) son el corazón del prototipo y deben sentirse reales; los pasos 1 (adquisición), 5 (pago real) y 6 (cancelación) se narran o se simulan — no requieren pantallas propias más allá de lo ya definido.
