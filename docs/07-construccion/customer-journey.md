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

## 3. Durante — el loop de hábitos diarios y accountability de tribu

- **Loop Diario de Hábitos (`/hoy`):** Registro consciente mediante Mindful Rituals (Alcancía de salud, selector de movimiento con live timer, pausa de respiración guiada 4-4-4).
- **Refuerzo Social Comunitario (`/comunidad`):** Pertenencia a una **Tribu** (universidad, instituto, trabajo) con meta colectiva semanal y retos compartidos. El compromiso social eleva entre 65% y 95% el cumplimiento de metas (`insight-salud-mental-y-habito-gen-z.md`).
- **Feedback Loop Integrado:** Los retos de comunidad se sincronizan en el dashboard diario `/hoy` para dar recompensa inmediata de +10 puntos de Reserva.
- **Honor system explícito:** Autodeclarado para el hackathon, con diseño que prioriza honestidad y consistencia antes que penalización burocrática.

## 4. El momento de la oferta y la recompensa ganada

- Al acumular constancia y subir de nivel, FIBO **entrega primero la recompensa no monetaria** (voucher digital perforado interactivo en `/recompensa`, ej. `FIBO-CALM-2026`).
- **Conversión natural a microseguro pay-as-you-go:** En la misma pantalla `/recompensa`, el usuario descubre que su disciplina ha "ganado el derecho" a un microseguro médico de Pacífico a S/ 9.90/mes vía Yape (cobertura médica hasta S/ 15,000, pausable sin penalidad).
- **Regla explícita:** Nunca un pop-up invasivo; la oferta es un derecho ganado que el usuario activa cuando lo desea.

## 5. Salidas Protegidas y Activación Grupal (`/salida`)

- **Momento contextual de protección:** Cuando la tribu organiza una salida deportiva, pichanga, trekking o viaje grupal, el Capitán activa una **Salida Protegida** desde `/comunidad` que lo lleva a `/salida`.
- **Proporcionalidad y transparencia:** El Capitán cotiza el seguro colectivo para los asistentes reales (ej. 12 personas a S/ 3.50 cada una = S/ 42 total), comparte el link de pago y nómina por WhatsApp, y emite una póliza de accidentes personales colectiva (`PAC-TRIBU-XXXX`).

## 6. Uso y momento de verdad

- **Asistencia / Siniestro (`/momento-de-verdad`):** El usuario reporta cualquier incidente guiado por el agente FIBO, adjuntando fotografía y recibiendo triaje inmediato con derivación a telemedicina Dr. Online o asesor humano de Pacífico.
- **Pausa sin castigo (`/seguro`):** El usuario puede pausar su seguro en cualquier momento con un solo switch; su Reserva de hábitos se conserva intacta.

## 7. Qué de este journey está construido en el MVP

A diferencia de la planificación preliminar, **la dimensión comunitaria y transaccional grupal fue construida exitosamente para el hackathon**:
1. Acceso y Onboarding conversacional con transparencia de datos (`/ingresar`, `/onboarding`).
2. Dashboard diario con rituales conscientes y racha protegida (`/hoy`).
3. Ecosistema de tribus, retos grupales e invitación WhatsApp (`/comunidad`).
4. Analíticas vivas con Recharts y métricas por pilar (`/progreso`).
5. Perfil deportivo minimalista con vitrina de coberturas e insignias (`/perfil`).
6. Recompensa digital y conversión a microseguro (`/recompensa`).
7. Emisión de póliza colectiva para eventos y salidas (`/salida`).
8. Flujo asistido de reclamo y siniestro (`/momento-de-verdad`).
