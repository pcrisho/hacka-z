# Instrumento de campo — encuesta digital + guía de entrevista 1:1

> **v2 — relanzado 05 Set. 2026** tras la mentoría del 04 Set. (`02-ideacion/hallazgos-mentoria-04-set.md`). Responde al bloqueador #1 de `PLAN-TRABAJO.md` §8. Diseñado para probar directamente los supuestos de `02-ideacion/historias-usuario-y-validacion.md` §4, `hallazgos-mentoria-04-set.md` §5, `pacifico-percepcion-eps-digital.md` §3 y `03-mvp/alcance-producto.md` §3. Formato neutro (Google Forms o Typeform); recomendación: **Google Forms** por velocidad de armado y exportación a Sheets.
>
> **Cambios v2 vs. v1:** se agregan preguntas de ubicación y rubro/actividad (huecos identificados antes de la mentoría), preguntas sobre comunidad/grupo y transparencia de datos (de la mentoría), se reformula la pregunta de recompensa para reflejar el nuevo encuadre "recompensa gana el derecho a la oferta de seguro" (ya no es un mecanismo paralelo), y se prueba directamente la objeción de Cami sobre hábitos de bajo valor ("tomar agua cada 10 min no aporta valor real"). Se mantiene el objetivo de 3-4 min de duración pese a las preguntas nuevas — se retiran 2 preguntas de menor prioridad (ver nota al final de A.3) para compensar.
>
> **Regla de registro:** los resultados crudos van en `docs/01-research/campo-encuesta.md` y `docs/01-research/campo-entrevistas.md` (crear al recolectar, por convención de `AGENTS.md`). Este archivo es el instrumento, no los resultados.

---

## A. Encuesta digital (objetivo: 3-4 min, lanzar 05 Set., máxima cantidad de respuestas antes de la preselección del 08 Set.)

**Intro (pegar como texto de la encuesta):**
> Somos un equipo de UCSUR trabajando con Pacífico Seguros en un proyecto sobre bienestar financiero y de salud para gente de nuestra edad. 3-4 minutos, sin trampas ni letra chica: solo queremos entender tu realidad. Gracias 🙏

### A.1 Perfil (para segmentar por arquetipo, ubicación y rubro — no para descartar respuestas)
1. **Edad** — numérico o rango (18-21 / 22-25 / 26-29 / 30+)
2. **Situación actual** (única): Estudiante sin trabajo / Practicante / Primer empleo formal (<2 años) / Freelance o independiente / Emprendedor(a) / Buscando empleo / Empleado(a) formal con experiencia / Otro
3. **¿A qué te dedicas principalmente?** (única + "otro") — *nueva, valida el sector económico real, hoy sin dato en el repo:* Servicios digitales/freelance creativo o técnico / Delivery o transporte por apps / Comercio o negocio propio pequeño / Estudios a tiempo completo / Oficina/administrativo / Otro
4. **¿Dónde vives?** (única) — *nueva, valida la brecha Lima 45% vs. provincias <1.5% de `pacifico-seguros-research.md`:* Lima Metropolitana / Capital de provincia (ciudad grande) / Provincia (ciudad chica o pueblo) / Fuera del Perú
5. **¿Tienes seguro de salud privado (EPS) hoy?** (única): Sí, por mi trabajo / Sí, lo pago yo / No, solo EsSalud / No tengo ningún seguro / No estoy seguro/a
6. **¿Usas Yape o Plin?** (única): Todos los días / Varias veces por semana / Rara vez / No uso

### A.2 Dolor y contexto real (prueba el "abismo de transición", la ansiedad financiera y la conexión bienestar mental-financiero de `insight-salud-mental-y-habito-gen-z.md` §1)
7. **¿Qué te preocupa más hoy?** (única, + "otro"): Mi salud / Mi situación financiera / Mi salud mental (estrés, ansiedad) / Mis herramientas de trabajo o estudio (laptop, celular, etc.) / Nada en particular
8. **Del 1 al 5, ¿qué tan seguido piensas "qué pasaría si me enfermo o pierdo mi fuente de ingresos"?** (escala 1-5)
9. **¿Alguna vez dejaste de tener seguro de salud al cambiar de trabajo, egresar o dejar de estudiar?** (Sí / No / No aplica todavía)
10. *(opcional, abierta)* Cuéntanos brevemente la última vez que un imprevisto de salud, plata, salud mental o de tus herramientas de trabajo te generó estrés.

### A.3 Reacción al concepto (mostrar el concepto antes de preguntar)
**Texto a mostrar antes de la pregunta 11:**
> Imagina una app (FIBO) donde completas hábitos simples cada semana (ahorrar un poco, moverte, cuidar tu bienestar mental) y eso hace crecer una cobertura de salud/bienestar **gratuita**. Al alcanzar cierto nivel, se te ofrece un microseguro puntual (ej. para tu laptop o un viaje) que puedes activar pagando montos chicos (S/3 a S/10) vía Yape, y pausar cuando quieras, sin penalidad ni letra chica.

11. **¿Qué tan probable es que probarías esto?** (escala 1-5)
12. **¿Qué te da más confianza?** (única): "Que la cobertura crezca según mis hábitos" / "Que me den un descuento por buen comportamiento" / "Ninguna de las dos, prefiero pagar un precio fijo simple"
13. **De estas formas de cuidar tu bienestar mental, ¿cuál sentirías que realmente te aporta valor (no solo "está bien tenerla")?** (única + otro) — *nueva, prueba directo la objeción de Cami sobre hábitos genéricos de bajo valor:* Una sesión guiada de respiración/mindfulness / Hablar con alguien (chat o llamada) cuando lo necesito / Contenido corto sobre cómo manejar el estrés / Ninguna me convence realmente / Otro
14. **¿Qué recompensa gratuita te motivaría más a empezar?** (única + otro): Una sesión de bienestar/terapia / Contenido o cursos cortos / Reconocimiento o insignias sociales / 1 mes gratis de una suscripción digital (Spotify, Canva, apps de mindfulness) / Ninguna, prefiero descuentos en efectivo
15. **¿Te sumarías más fácil a un hábito si lo haces con un grupo (amigos, compañeros) en vez de solo?** (Sí, mucho más fácil / Un poco más fácil / Es igual / No, prefiero solo) — *nueva, valida el territorio de comunidades de `hallazgos-mentoria-04-set.md` §3.3*
16. **Si supieras desde el inicio que la app eventualmente te ofrecerá un seguro personalizado según tus hábitos (sin presión, tú decides), ¿te generaría más o menos confianza que si no te lo dijeran?** (Más confianza / Menos confianza / Es igual) — *nueva, valida el principio de transparencia de datos de `hallazgos-mentoria-04-set.md` §3.6*
17. **Si tuvieras que pagar algo puntual y chico (S/3-10) para proteger tu laptop, celular o bici por unos días, ¿lo harías?** (Sí, definitivamente / Probablemente sí / No sé / Probablemente no / No)

*(Se retiran de la v1 la pregunta de frecuencia de apertura de la app y la de "Yape vs. app nueva" — la segunda ya no aplica igual desde que FIBO es una app independiente, no embebida; ver `hallazgos-mentoria-04-set.md` §3.1. Se compensa el tiempo agregado por las preguntas nuevas.)*

### A.4 Boca a boca (prueba el supuesto MÁS frágil del modelo de negocio)
18. **Si te gustara, ¿lo recomendarías a alguien sin que te lo pidamos?** (Sí, seguro / Tal vez, depende / No)
19. *(opcional, abierta)* ¿Bajo qué condición sí lo recomendarías?

### A.5 Cierre — reclutamiento para entrevistas
20. **¿Nos regalas 20-25 min para una llamada o café y profundizar?** (Sí + campo de contacto / No)

---

## B. Guía de entrevista 1:1 (20-30 min, semiestructurada)

> Formato conversación, no cuestionario leído. Dejar hablar, repreguntar "¿por qué?" / "cuéntame más". Grabar (con permiso) o tomar notas literales — las citas textuales son oro para el one-pager y el video.

**Apertura (2 min):** contexto breve del proyecto, sin mencionar el nombre/mecánica del producto todavía (para no sesgar las primeras respuestas).

1. Cuéntame cómo es tu situación laboral/económica hoy — ¿a qué te dedicas exactamente, y cambió mucho en el último año?
2. ¿Tienes seguro de salud? ¿Por qué sí/no? ¿Alguna vez lo tuviste y lo perdiste? ¿Qué pasó en ese momento?
3. Cuando piensas en "seguros", ¿qué es lo primero que se te viene a la mente? (dejar que salga solo)
4. ¿Alguna vez tuviste un imprevisto (salud, laptop, plata, salud mental) donde te hubiera servido tener algo así? ¿Qué hiciste?
5. ¿Usas Quererte Sano o algún beneficio de bienestar de tu trabajo/universidad? ¿Lo usas de verdad o lo tienes ahí sin tocar?
6. Cuando piensas en cuidar tu salud mental, ¿qué es lo único que sientes que de verdad te ayudaría (no lo que "deberías" hacer, sino lo que realmente usarías)? *(nueva — ataca directo la objeción de Cami sobre hábitos genéricos de bajo valor)*
7. **(Mostrar el concepto, igual que en la encuesta §A.3)** — reacción en caliente: ¿qué te gusta, qué te choca, qué no entiendes?
8. ¿Te sería más fácil mantener un hábito si lo haces con un grupo de amigos o conocidos, en vez de solo? ¿Por qué sí o no? *(nueva — profundiza la pregunta 15 de la encuesta)*
9. Si supieras desde el día 1 que la app eventualmente te va a ofrecer un seguro según tus hábitos, ¿cambiaría cómo te sientes usándola? *(nueva — profundiza la pregunta 16)*
10. ¿Confiarías en un primer filtro hecho por un asistente/IA antes de hablar con una persona? ¿En qué caso sí, en cuál no?
11. Si esto existiera y te gustara, ¿se lo dirías a alguien sin que te lo pidamos? ¿A quién, y por qué?
12. Cierre abierto: ¿qué le falta a esto para que realmente lo uses, no solo lo pruebes una vez?

**Al terminar:** completar `campo-entrevistas.md` con: perfil de la persona (edad, situación laboral, ubicación, ¿tiene EPS?), 3-5 citas textuales, y qué supuesto de `historias-usuario-y-validacion.md` §4 y `hallazgos-mentoria-04-set.md` §5 confirmó/refutó.

---

## C. Qué hacer con las respuestas

- Mínimo de señal útil antes de la preselección (08 Set.): aunque sea n=15-20 respuestas + 2-3 entrevistas, es mejor evidencia que cero — no esperar a una meta alta para empezar a mirar patrones, dado que se relanza con menos días de margen que la v1.
- Cruzar primero: pregunta 12 (hábito vs. descuento), 15 (comunidad) y 18 (boca a boca) — son las tres con más poder para mover la propuesta si salen distinto a lo esperado.
- La pregunta 13 (qué manifestación del bienestar mental aporta valor real) es la más directamente ligada a la objeción de Cami — revisar sus respuestas abiertas/"otro" con especial atención, no solo el conteo de opciones cerradas.
- Actualizar `PLAN-TRABAJO.md` §7 si algún supuesto se cae con la evidencia — no reescribir el territorio sin dejar rastro de por qué cambió.
