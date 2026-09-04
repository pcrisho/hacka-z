# PRD — Prototipo MVP FIBO

> Convierte `03-mvp/alcance-producto.md` en requisitos accionables para construcción. No repite el "por qué" de cada decisión (eso ya está ahí y en `02-ideacion/`) — asume esas decisiones como cerradas y define qué se construye, en qué orden y con qué criterio de "terminado".

## 1. Objetivo del prototipo

Demostrar, de forma interactiva y clicable, el flujo crítico único que sostiene la propuesta de valor, para el video pitch (≤3 min, `BASES-CONCURSO.md` §6.2) y para la evaluación de "MVP" (35% preselección, 20% Demoday — `PLAN-TRABAJO.md` §2). No es un producto terminado ni debe intentar serlo (`AGENTS.md`: "MVP = validar, no construir completo").

## 2. Usuario objetivo del prototipo

Se construye pensando en la Historia 1 (Camila, `02-ideacion/historias-usuario-y-validacion.md` §2) como camino principal de demo — es la más completa y la que mejor ilustra los 3 hábitos + recompensa por niveles + momento de verdad. La Historia 2 (Diego) queda como referencia narrativa para el pitch, no requiere pantallas propias salvo que sobre tiempo.

## 3. Flujo crítico único (el que se construye real e interactivo)

Tomado de `03-mvp/alcance-producto.md` §5, regla general: *"todo lo que sea parte del flujo crítico único se construye real e interactivo; todo lo que dependa de infraestructura externa real se simula."*

1. Onboarding conversacional (agente FIBO, LLM real vía API, no bloqueante, fallback simulado si falla/tarda — `historias-usuario-y-validacion.md` §6).
2. Registro de los 3 hábitos semanales (micro-ahorro, actividad física, práctica de bienestar mental).
3. Crecimiento visible de la Reserva de Bienestar (debe sentirse real, no un número estático).
4. Desbloqueo de recompensa por nivel (bajo → medio → alto, `03-mvp/alcance-producto.md` §3).
5. Activar/pausar un top-up pay-as-you-go (el diferencial frente a Seguro Salud Yape).
6. Momento de verdad: reclamo/canje guiado por el agente, con escalamiento a humano simulado.

Detalle pantalla por pantalla en [`esquema-mvp.md`](./esquema-mvp.md).

## 4. Qué NO se construye (simulado o fuera de alcance)

Reutiliza tal cual la tabla de `03-mvp/alcance-producto.md` §5 — no se repite aquí para evitar que las dos tablas diverjan con el tiempo. Regla corta: pagos reales, terapeuta/psicólogo real, aseguradora de respaldo real y telemedicina propia **no se construyen** — se simulan o se referencian como salida hacia lo que Pacífico ya tiene (Dr. Online).

## 5. Requisitos técnicos mínimos

- Prototipo **codeado** (HTML/React), no Figma — decisión ya cerrada (`PLAN-TRABAJO.md` §7, 04 Set.).
- Debe correr en mobile (el contexto de uso real es dentro de una superficie tipo Yape) — priorizar diseño mobile-first, ver `esquema-mvp.md`.
- Agente conversacional: llamada real a un LLM vía API (Bedrock u otro), con manejo de fallback no bloqueante — no dejar el flujo esperando indefinidamente una respuesta.
- Sin backend persistente real requerido — estado de la Reserva/hábitos puede vivir en el cliente (localStorage o estado de sesión) para efectos de la demo; no es necesario resolver persistencia multi-usuario real para el hackathon.

## 6. Criterio de "terminado" para el hackathon

El prototipo está listo para grabar el video cuando:

1. El flujo de la Historia de Camila se puede recorrer de principio a fin sin errores, en un celular o en una vista mobile de navegador.
2. El agente conversacional responde en al menos un punto real (onboarding o momento de verdad) con una llamada real a un LLM, no 100% scripted.
3. La Reserva de Bienestar crece visualmente al completar hábitos — es el momento más importante de la demo, no puede sentirse plano.
4. Existe al menos una recompensa desbloqueable visible (no hace falta las 3, pero al menos el nivel bajo y uno más).

No se necesita más que esto para grabar — cualquier pulido adicional es bienvenido pero no bloquea el entregable.

## 7. Identidad visual

Ver [`design-system.md`](./design-system.md). Es una propuesta inicial — usarla para no bloquear la construcción, no tratarla como cierre de marca definitivo.
