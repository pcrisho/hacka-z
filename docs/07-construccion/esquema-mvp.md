# Esquema de pantallas del prototipo MVP FIBO

> Camino principal: Historia de Camila (`02-ideacion/historias-usuario-y-validacion.md` §2). Cada pantalla está marcada como **Real** o **Simulada** siguiendo exactamente la tabla de `03-mvp/alcance-producto.md` §5 — si hay una discrepancia entre este documento y esa tabla, esa tabla manda (es la fuente original de la decisión). Para el mapa completo de punta a punta (incluyendo lo que pasa antes de instalar la app y al cancelar), ver `customer-journey.md`.
>
> **Corrección de arquitectura (04 Set., mentoría):** FIBO es una app independiente, no una mini-app dentro de Yape — Yape aparece únicamente como método de pago en la pantalla 5. Ver `02-ideacion/hallazgos-mentoria-04-set.md` §3.1.

## Flujo de pantallas

> **Nota de implementación (06 Set.):** las pantallas 2 y 3 se construyeron como una sola ruta (`/hoy`) en vez de dos pantallas separadas — el anillo de la Reserva es "el componente más importante de todo el prototipo" (`design-system.md` §5) y esconderlo detrás de una navegación aparte le restaba protagonismo en vez de dárselo. El contenido de ambas pantallas descrito abajo no cambia, solo la forma en que se agrupan. Detalle técnico completo en `decisiones-app-web.md`.

### 1. Onboarding conversacional — **Real** (llamada a LLM)
- Agente FIBO se presenta, hace las 2 preguntas de contexto ("¿trabajas de forma independiente?", "¿qué te preocupa más: salud, plata o herramientas de trabajo?").
- En base a las respuestas, sugiere los 3 hábitos iniciales.
- Entrega un primer valor antes de pedir nada (contenido corto + explicación de cómo crece la Reserva) — principio de cold-start §5.1 de `historias-usuario-y-validacion.md`.
- **Anuncia la transparencia de datos**: en una frase simple, cuenta que más adelante, según la constancia del usuario, le ofrecerá microseguros a su medida — sin presión (principio de la mentoría, `02-ideacion/hallazgos-mentoria-04-set.md` §3.6).
- Requisito técnico: llamada real a LLM vía API, no bloqueante; si falla o tarda, cae a una interacción simulada equivalente (guion fijo) sin que el usuario perciba un error.

### 2. Home / los 3 hábitos de la semana — **Real**
- Muestra las 3 tarjetas de hábito (micro-ahorro, actividad física, práctica de bienestar mental) con estado hecho/pendiente.
- Al completar un hábito, animación clara de aporte a la Reserva — este es el momento que más debe cuidarse visualmente (ver `design-system.md` §5, componente de espiral/anillo de progreso).

### 3. Reserva de Bienestar (vista de progreso) — **Real**
- Visualización tipo espiral/anillo que crece con cada hábito completado.
- Indicadores claros de los 3 niveles de recompensa (bajo/medio/alto) y en cuál está el usuario ahora.

### 4. Desbloqueo de recompensa → oferta de microseguro — **Real el flujo, simulado el servicio final**
- Nivel bajo: contenido + insignia — completamente real y funcional en el prototipo.
- Nivel medio: "1 mes gratis" de un beneficio digital — se muestra el flujo de canje completo; el beneficio en sí (integración con el proveedor real) no existe, es una pantalla de confirmación.
- Nivel alto: sesión real de bienestar — se muestra el flujo de "gané algo real"; no hay psicólogo conectado de verdad (`alcance-producto.md` §5).
- **Inmediatamente después de cada recompensa (no en una pantalla aparte ni como pop-up), se presenta la oferta del microseguro correspondiente** — encuadrada como consecuencia de haber llegado a ese nivel, nunca como una interrupción del flujo de hábitos (`02-ideacion/hallazgos-mentoria-04-set.md` §3.2 y §2).

### 5. Activar/pausar el microseguro — **Real el flujo, simulado el cobro**
- Toggle simple para activar el microseguro ofrecido en la pantalla anterior (ej. herramientas de trabajo) y pausarlo sin penalidad.
- Debe comunicar visualmente "pausado, no cancelado, no penalizado" (ver `design-system.md` §5).
- El pago se muestra integrado con Yape (pasarela, no contenedor de la app) — el cobro real no se construye.

### 6. Momento de verdad (reclamo/canje) — **Real el flujo conversacional, simulada la resolución**
- Replica el caso de Camila: sube una foto del daño, responde 2-3 preguntas guiadas por el agente FIBO.
- El agente hace un primer filtro y comunica de forma explícita el paso siguiente (escalar a una persona real) — la resolución real del caso y la escalación a humano se simulan, pero deben **mostrarse honestamente como tales** en el flujo (ej. "esto lo revisa un asesor, te contactamos en breve"), no ocultarse.
- Si aplica, referencia de salida hacia Dr. Online (telemedicina) como servicio ya existente de Pacífico, no reconstruido (`alcance-producto.md` §4).

## Notas de construcción

- Todas las pantallas priorizan mobile — FIBO es una app propia, con Yape integrado solo como método de pago (`historias-usuario-y-validacion.md` §5.3).
- Estado de hábitos/Reserva puede vivir en el cliente (ver `PRD-mvp.md` §5) — no se requiere backend persistente real para la demo.
- Criterio de "terminado" para dejar de iterar y grabar el video: `PRD-mvp.md` §6.
