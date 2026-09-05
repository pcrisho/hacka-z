# Resumen ejecutivo — Mentoría con Luiggi (04 Set. 2026, 10:30am)

> Resumen derivado de `RETROALIMENTACION.md` (transcripción automática cruda de esta sesión, no editar). Este archivo sí puede actualizarse si una relectura encuentra algo nuevo. Para la síntesis conjunta de ambas mentorías y el detalle completo de qué decisión salió de qué comentario, ver [`docs/02-ideacion/hallazgos-mentoria-04-set.md`](../../docs/02-ideacion/hallazgos-mentoria-04-set.md) — ese archivo es la fuente de verdad para trazabilidad, este es solo una guía de lectura rápida de esta sesión específica.

## Enfoque de la sesión

Feedback orientado a **producto y mecánica**: Luiggi cuestionó el detalle operativo de cómo se registran los hábitos, la robustez del sistema de honestidad del usuario, y la arquitectura de distribución — y aportó, sin que el equipo lo pidiera, la idea de comunidades + seguro grupal.

## Insights y objeciones clave

1. **Ambigüedad del hábito y honor system.** Preguntó cómo se mide un hábito concretamente (ej. "quiero tener el hábito de lectura, ¿cómo se trackea?") y objetó que el registro autodeclarado es "gameable" — alguien puede reclamar una recompensa sin haber hecho el hábito. Propuso evidencia (foto) o integración con wearables como alternativa más robusta, reconociendo él mismo que es más compleja de construir.
2. **Confirmación del modelo de capas.** Validó explícitamente que no hay suscripción: la capa gratuita es de hábitos sin restricción, y la capa de pago es "activar" un microseguro puntual — no una mensualidad. Usó la analogía de modelos de consumo en la nube (pago por lo que usas) para explicar por qué esto evita la sensación de "barrera de precio".
3. **Pregunta sobre independencia de la plataforma.** Preguntó si FIBO debería ser una extensión de "Mi Pacífico" o una app separada. Su propia respuesta: puede ser independiente, porque FIBO no necesita que el usuario sea cliente de Pacífico para usarla, pero si lo es, se integra igual — Pacífico se beneficia de FIBO como canal de referidos hacia sus productos. Esto es lo que llevó a la corrección de arquitectura (FIBO independiente, no embebida en Yape).
4. **Comunidades + seguro grupal contextual.** El aporte más fuerte de la sesión: propuso reforzar los hábitos de forma grupal (ej. grupos de running) y hasta un seguro colectivo puntual — el ejemplo concreto fue un grupo de 12 amigos jugando pichanga, aportando S/1 cada uno para quedar asegurados durante el partido. Extendió la idea hacia B2B (canchas, clubs, gimnasios que cobran ese seguro como parte de la entrada).
5. **Confirmación del modelo de negocio para Pacífico.** Confirmó que espera que Pacífico financie/mantenga la aplicación como inversión — el objetivo es generar un embudo hacia los productos de Pacífico, no que FIBO sea rentable por sí sola.

## Qué se decidió a partir de esto

Ver `hallazgos-mentoria-04-set.md` §3 para el detalle completo. En breve: arquitectura de distribución corregida (§3.1), honor system aceptado como limitación conocida del MVP en vez de resolverse con wearables (§3.5), y comunidades + seguro grupal documentado como visión de producto fuera del alcance del hackathon (§3.3).
