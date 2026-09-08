# Feature 10: Comunidad, Ecosistema de Tribus y Salidas Protegidas (/comunidad y /hoy)

> **Estado:** Implementado  
> **Rutas:** `app/app/(app)/(tabs)/comunidad/page.tsx` y `app/app/(app)/(tabs)/hoy/page.tsx`  
> **Objetivo:** Transformar la comunidad en un motor de retención social mediante accountability grupal, ciclo de vida completo de tribus (crear con selectores de ámbito y meta, unirse y desafíos colectivos), feedback loop de retos hacia el dashboard diario `/hoy`, y cobertura de microseguro contextual de Pacífico para **Salidas Protegidas** gestionadas por el Capitán de una tribu para la nómina exacta de asistentes (ej. 12 de 100 miembros).

---

## 1. Fundamentos de UX y Psicología del Comportamiento

### 1.1. Accountability Social en la Gen Z
El research de Pacífico Seguros × La Chakra demostró que **el compromiso social eleva entre 65% y 95% la probabilidad de cumplimiento de una meta**. Sin embargo, la Gen Z rechaza los esquemas punitivos o que expongan su dinero o vulnerabilidades. El diseño de FIBO se basa en:
1. **El Escudo de Tribu Pacífico:** Si el 80% del grupo cumple sus hábitos semanales, todos reciben 1 escudo de protección contra la culpa o semanas difíciles.
2. **Privacidad de saldos:** La comunidad comparte constancia de hábitos y logros deportivos, nunca montos en cuentas bancarias.
3. **Tono Visual Sobrio:** Cero sobrecarga de emojis en títulos o encabezados principales; empleo de iconografía vectorial fina de Lucide (`Trophy`, `Users`, `ShieldCheck`, `UtensilsCrossed`, `Activity`, `Brain`).

### 1.2. El Ciclo de Vida de las Tribus de Bienestar
- **Ámbitos Flexibles (Sin encasillar en Universidad):** Diseñado para la diversidad juvenil urbana (Amigos & Deporte, Trabajo Remoto & Freelance, Comunidad de Barrio, Primer Empleo, Jóvenes Universitarios).
- **Creación Guiada (`+ Crear Tribu`):** Formulario ergonómico con selectores claros:
  - *Ámbito o tipo de grupo* (Select).
  - *Meta colectiva semanal* (Select predefinido: 4 días de hábitos, 5 días cocinando en casa, 60k pasos grupales, etc.).
  - Asignación inmediata del rol de Capitán para el fundador.
- **Desafío Colectivo:** Avance semanal grupal compartido con feedback visual empático.

### 1.3. Salidas Protegidas de una Tribu (De "On-Demand" a Cobertura Contextual)
En vez de vender "seguros on-demand" fríos, FIBO enmarca el microseguro como una herramienta de protección para las **Salidas y Eventos de la Tribu**:
- **La regla de proporcionalidad:** Una tribu puede tener 100 integrantes, pero el Capitán u organizador activa el seguro médico express **únicamente para los 12 miembros que asisten a la salida de la semana**.
- **Catálogo de Salidas:**
  - ⚽ **Pichanga de Fútbol (24h):** S/ 3.50 por persona.
  - 🚴 **Ruta de Ciclismo Urbano (24h):** S/ 3.00 por persona.
  - 🏃 **Running Grupal / 10K (24h):** S/ 3.00 por persona.
  - 🎒 **Trekking & Escapada (48h):** S/ 5.00 por persona.
  - 🎾 **Torneo de Pádel / Vóley (24h):** S/ 3.50 por persona.
- **Cobertura Médica Pacífico:** Emergencias hospitalarias, fracturas, esguinces, desgarros y ambulancia hasta S/ 15,000 sin deducible.
- **Recaudación Transparente:** Link de cobro vía Yape y mensaje preformateado para el grupo de WhatsApp de la tribu.

---

## 2. Feedback Loop: Retos Comunitarios en el Dashboard `/hoy`

Al unirse a un reto en `/comunidad` (*Reto Cero Delivery: Cocinar en Casa*, *10,000 Pasos por 5 Días*, *Semana Anti-Burnout Mental*):
- Se refleja inmediatamente en `/hoy` en el bloque **Retos de comunidad**.
- Micro-acción de check diario del reto con bonificación especial (+10 pts Reserva).
- Indicador claro de avance personal (ej. "Día 2 de 4 logrados").

---

## 3. Especificaciones de Componentes en `/comunidad`

### 3.1. Tab 1: Retos (Icono Trophy)
- Header balanceado sin choque entre título y badge de puntos.
- Tarjetas con títulos limpios, badge de pilar con icono SVG, barra comunitaria y progreso personal.
- Botones de acción directa: `Unirme al reto`, `Ver en Hoy →` y `Salir`.

### 3.2. Tab 2: Tribus (Icono Users)
- Lista de tribus con ámbito no restringido a universidad.
- Modal `+ Crear Tribu` con `NativeSelect` para ámbito y metas colectivas.
- Modal de detalle con barra de cumplimiento, Escudo Pacífico y compartir por WhatsApp.

### 3.3. Tab 3: Salidas (Icono ShieldCheck)
- Selector de Tribu anfitriona (la tribu que organiza la salida).
- Selector de actividad deportiva / recreativa.
- Stepper de miembros convocados (los que realmente asisten).
- Muestra de nómina nominal cubierta.
- Cálculo de costo total y por persona.
- Generación de link de cobro vía Yape/WhatsApp y activación express con código `PAC-TRIBU-XXXX`.
