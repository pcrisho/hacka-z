# Esquema de la landing page FIBO

> Wireframe en texto, sección por sección. Ver objetivo y métricas en [`PRD-landing.md`](./PRD-landing.md); ver paleta/tono en [`design-system.md`](./design-system.md).

## Estructura (una sola página, scroll vertical, mobile-first)

### 1. Hero
- Nombre "FIBO" + ícono de espiral (ver `design-system.md` §6).
- **Copy cerrado (05 Set.):** tagline oficial de marca como subtítulo del hero — *"Cada hábito suma al siguiente. Tu Reserva crece en espiral."* (`design-system.md` §8). Como titular corto encima, en el patrón Two-Tone Heading: *"Pequeños hábitos,* **gran Reserva"** (no usar "historial crediticio" — es impreciso, ver `01-research/pacifico-friccion-usuario-eps.md` §3).
- CTA único, visible sin hacer scroll: "Únete a la lista de espera".

### 2. El problema (breve, 2-3 líneas)
- Resume la brecha: seguro tradicional no encaja con ingresos variables ni con la falta de un empleador que subsidie/afilie. Fuente de contenido: `problem-statement-v1.md`, sección Problem Statement.
- No usar cifras de mercado aquí (informalidad, penetración) — eso es para el jurado/pitch, no para el usuario final; a Camila no le habla el dato macro, le habla su propia situación.

### 3. Cómo funciona (3 pasos simples, no un flujo técnico)
1. Registra hábitos simples cada semana (ahorro chico, actividad física, bienestar mental).
2. Tu Reserva de Bienestar crece — sin costo, sin letra chica.
3. Cuando algo pasa, ya tienes cobertura ganada, no una que tuviste que pagar desde el día uno.

Contenido base: loop central de `02-ideacion/historias-usuario-y-validacion.md` §1, simplificado a lenguaje de landing (no reutilizar el lenguaje técnico del documento interno).

### 4. Prueba social / lista de espera
- Contador de personas ya registradas (opcional si el tiempo aprieta, ver `PRD-landing.md` §4).
- Refuerzo de que esto se comparte entre pares, no es publicidad — coherente con "entrada social, no publicitaria" (`historias-usuario-y-validacion.md` §5.2).

### 5. Formulario de registro
- Campos mínimos: nombre/alias + celular o correo.
- Al completar, generar el link único de referido (`?ref=<id>`) y mostrarlo de inmediato con un CTA claro para compartirlo (ej. botón de compartir por WhatsApp, canal natural del segmento).
- Este es el momento donde se captura el dato que responde a la pregunta de fondo del PRD: quién invitó a quién.

### 6. Cierre / footer
- Mención breve de que FIBO es una propuesta en desarrollo para la Hackathon UCSUR–Pacífico Seguros×AWS — transparencia simple, sin necesidad de legales complejos (no se procesan pagos ni datos sensibles reales).
- Sin necesidad de política de privacidad extensa dado el alcance (solo nombre + contacto), pero sí una línea que aclare que los datos no se usan para nada fuera de la lista de espera.

## Qué NO lleva esta landing

- No lleva el flujo de hábitos/Reserva — eso es el prototipo, no la landing (ver `README.md` de la carpeta, tabla comparativa).
- No lleva pricing ni mención de la microprima — a este nivel del funnel el gancho es 100% el hábito gratuito, no el modelo de pago (coherente con "valor antes que compromiso", `historias-usuario-y-validacion.md` §5.1).
