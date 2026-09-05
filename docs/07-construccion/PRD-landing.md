# PRD — Landing page FIBO

> No es un entregable obligatorio de las bases (`PLAN-TRABAJO.md` §1) — es una herramienta de validación de campo. Ver `README.md` de esta carpeta para la comparación completa con el prototipo MVP.

## 1. Problema que resuelve

`02-ideacion/historias-usuario-y-validacion.md` §4 deja explícito que **el supuesto más frágil del modelo de negocio es que FIBO puede crecer B2C (boca a boca) sin canal corporativo**, porque el precedente principal (Betterfly) en realidad escala B2B2E, no B2C. Ese mismo documento propone la forma correcta de probarlo: no preguntar intención ("¿lo recomendarías?"), medir comportamiento real — registros orgánicos + referidos durante la semana de campo.

La landing es el instrumento para generar y medir esa señal, en paralelo a la encuesta/entrevistas de `01-research/instrumento-campo.md`.

## 2. Objetivo (uno solo, no varios)

Conseguir señal de comportamiento real sobre crecimiento B2C: cuántas personas se registran orgánicamente y cuántas llegan por referido de otra persona, no por canal pagado o directo del equipo.

**No es objetivo de esta landing:** explicar el producto con el mismo detalle que el pitch, ni vender, ni recolectar pagos.

## 3. Audiencia

Igual que el producto: Guardián + Estudiante/Primer Empleo con Ansiedad Financiera (`PLAN-TRABAJO.md` §6). El copy debe hablarle a Camila (`historias-usuario-y-validacion.md` §2), no a un inversionista ni a un jurado — el jurado ve el pitch, no la landing.

## 4. Alcance (dentro)

- Página única (one-page), mobile-first (el segmento vive en el celular).
- Propuesta de valor corta + CTA único: unirse a la lista de espera.
- Formulario mínimo: solo lo indispensable para contactar y para atribuir referidos (ej. nombre/alias + celular o correo).
- **Mecanismo de referido:** cada persona registrada recibe un link único (`?ref=<id>`); la landing debe poder atribuir un nuevo registro a quien lo invitó. No requiere cuenta de usuario — con guardar el `ref` en el registro alcanza.
- Contador visible de personas ya en la lista (refuerzo social liviano, coherente con "entrada social, no publicitaria" de `historias-usuario-y-validacion.md` §5.2) — opcional si el tiempo aprieta, no crítico.

## 5. Fuera de alcance (explícito, para no perder tiempo)

- Pagos o cualquier procesamiento financiero real.
- Autenticación de usuario.
- Integración real con Yape — se referencia narrativamente, no se conecta.
- El loop de hábitos/Reserva — eso vive en el prototipo, no en la landing. No duplicar esfuerzo.

## 6. Cómo se mide éxito

| Métrica | Qué valida |
|---|---|
| Nº de registros totales | Interés bruto — señal débil sola |
| Nº de registros con `ref` de otro usuario (no del equipo) | **La métrica que realmente importa** — evidencia directa de boca a boca real, no simulado |
| Profundidad de la cadena de referidos (A invita a B, B invita a C) | Evidencia de viralidad orgánica, no solo de un empujón inicial del equipo |

Estos números alimentan directamente la pregunta 4 de `02-ideacion/problem-statement-v1.md` ("¿qué señal mínima de campo consideraría el jurado suficiente?") y el criterio "Entendimiento del problema (evidencia e insights)" que pesa 30% en Demoday (`PLAN-TRABAJO.md` §2).

## 7. Riesgo a evitar

No inflar el contador con registros del propio equipo o de conocidos directos sin marcarlos como tal — si se hace, debe declararse explícitamente al reportar los números (consistente con la regla de no inventar datos de campo, `AGENTS.md`).

## 8. Detalle de estructura

Ver [`esquema-landing.md`](./esquema-landing.md) para el wireframe sección por sección.
