# Esquema de pantallas del prototipo MVP FIBO

> Camino principal: Historia de Camila (`02-ideacion/historias-usuario-y-validacion.md` §2). Cada pantalla está marcada como **Real** o **Simulada** siguiendo exactamente la tabla de `03-mvp/alcance-producto.md` §5 — si hay una discrepancia entre este documento y esa tabla, esa tabla manda (es la fuente original de la decisión).

## Flujo de pantallas

### 1. Onboarding conversacional — **Real** (llamada a LLM)
- Agente FIBO se presenta, hace las 2 preguntas de contexto ("¿trabajas de forma independiente?", "¿qué te preocupa más: salud, plata o herramientas de trabajo?").
- En base a las respuestas, sugiere los 3 hábitos iniciales.
- Entrega un primer valor antes de pedir nada (contenido corto + explicación de cómo crece la Reserva) — principio de cold-start §5.1 de `historias-usuario-y-validacion.md`.
- Requisito técnico: llamada real a LLM vía API, no bloqueante; si falla o tarda, cae a una interacción simulada equivalente (guion fijo) sin que el usuario perciba un error.

### 2. Home / los 3 hábitos de la semana — **Real**
- Muestra las 3 tarjetas de hábito (micro-ahorro, actividad física, práctica de bienestar mental) con estado hecho/pendiente.
- Al completar un hábito, animación clara de aporte a la Reserva — este es el momento que más debe cuidarse visualmente (ver `design-system.md` §5, componente de espiral/anillo de progreso).

### 3. Reserva de Bienestar (vista de progreso) — **Real**
- Visualización tipo espiral/anillo que crece con cada hábito completado.
- Indicadores claros de los 3 niveles de recompensa (bajo/medio/alto) y en cuál está el usuario ahora.

### 4. Desbloqueo de recompensa — **Real el flujo, simulado el servicio final**
- Nivel bajo: contenido + insignia — completamente real y funcional en el prototipo.
- Nivel medio: "1 mes gratis" de un beneficio digital — se muestra el flujo de canje completo; el beneficio en sí (integración con el proveedor real) no existe, es una pantalla de confirmación.
- Nivel alto: sesión real de bienestar — se muestra el flujo de "gané algo real"; no hay psicólogo conectado de verdad (`alcance-producto.md` §5).

### 5. Top-up pay-as-you-go (activar/pausar) — **Real el flujo, simulado el cobro**
- Toggle simple para activar un top-up puntual (ej. herramientas de trabajo) y pausarlo sin penalidad.
- Debe comunicar visualmente "pausado, no cancelado, no penalizado" (ver `design-system.md` §5).
- El cobro/pasarela de pago real no se construye.

### 6. Momento de verdad (reclamo/canje) — **Real el flujo conversacional, simulada la resolución**
- Replica el caso de Camila: sube una foto del daño, responde 2-3 preguntas guiadas por el agente FIBO.
- El agente hace un primer filtro y comunica de forma explícita el paso siguiente (escalar a una persona real) — la resolución real del caso y la escalación a humano se simulan, pero deben **mostrarse honestamente como tales** en el flujo (ej. "esto lo revisa un asesor, te contactamos en breve"), no ocultarse.
- Si aplica, referencia de salida hacia Dr. Online (telemedicina) como servicio ya existente de Pacífico, no reconstruido (`alcance-producto.md` §4).

## Notas de construcción

- Todas las pantallas priorizan mobile — el contexto real de uso es una superficie tipo Yape (`historias-usuario-y-validacion.md` §5.3).
- Estado de hábitos/Reserva puede vivir en el cliente (ver `PRD-mvp.md` §5) — no se requiere backend persistente real para la demo.
- Criterio de "terminado" para dejar de iterar y grabar el video: `PRD-mvp.md` §6.
