# Feature 01: Dashboard Diario (/hoy) v2 — Experiencia de Hábitos y Racha

> **Estado:** Especificación aprobada para implementación  
> **Ruta:** `app/app/(app)/(tabs)/hoy/page.tsx`  
> **Público objetivo:** Gen Z (Arquetipo Guardián / Estudiante con ansiedad financiera y necesidad de estructura simple)  
> **Inspiración UX:** Finch (cuidado empático sin culpa), Apple Fitness Rings (progreso visual tangible), Duolingo (retención por racha).

---

## 1. Problema de la vista v1 y Oportunidad

La versión v1 de `/hoy` cumplía con el flujo mínimo (mostrar 3 hábitos fijos y un indicador circular de porcentaje), pero presentaba tres debilidades frente a los estándares de productos digitales para la Generación Z:
1. **Falta de dinamismo temporal:** No existía noción de días de la semana, constancia acumulada ni racha activa.
2. **Homogeneidad visual:** Los 3 hábitos tenían el mismo tratamiento cromático y componentes planos, sin transmitir la identidad de cada pilar de bienestar.
3. **Interacción binaria fría:** Al marcar un hábito solo aparecía un badge estático "Hecho", sin micro-recompensa ni feedback emocional inmediato.

---

## 2. Anatomía de la Pantalla /hoy v2

```
+-------------------------------------------------------------+
|  [Logo FIBO]                             [🔥 5 días] [Avatar]|
+-------------------------------------------------------------+
|                                                             |
|  ¡Hola, Camila! ✨                                          |
|  Domingo, 6 de septiembre                                   |
|                                                             |
|  [ L ]  [ M ]  [ M ]  [ J ]  [ V ]  [ S ]  [ D ]  <- Calendar|
|   ●      ●      ●      ●      ●      ○     [●]       Strip  |
|                                                             |
|                   +-------------------+                     |
|                   |    (( ESPIRAL ))  |                     |
|                   |      75% HOY      |                     |
|                   +-------------------+                     |
|             "A 1 hábito de proteger tu semana"              |
|                                                             |
|  +-------------------------------------------------------+  |
|  | 🎁 ¡Desbloqueaste Nivel 2: Guardián!                  |  |
|  | Canjea 1 mes de app mindfulness + evalúa microseguro  |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  TUS HÁBITOS DE HOY (2/3)                 [+ Nuevo Hábito]  |
|                                                             |
|  +-------------------------------------------------------+  |
|  | [💰 Bolsillo]  Ahorro chico            [ ✓ S/ 10 ]    |  |
|  | S/ 5-10 apartados a tu alcancía digital               |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  +-------------------------------------------------------+  |
|  | [🏃 Cuerpo]    Actividad física          [ Marcar ]   |  |
|  | 15-20 min caminata o ejercicio                        |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  +-------------------------------------------------------+  |
|  | [🧠 Mente]     Pausa activa            [ ✓ Hecho ]    |  |
|  | 3 min de respiración guiada                           |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  [Hoy]              [Comunidad]        [Progreso]   [Perfil]|
+-------------------------------------------------------------+
```

---

## 3. Especificaciones de Componentes

### 3.1. Header & Racha Activa (Streak Counter)
- **Componente:** `StreakBadge` en el header o debajo del saludo.
- **Micro-copy:** `🔥 5 días de racha` | `🛡️ Racha protegida (1 freeze semanal)`.
- **Comportamiento:** Al tocar la racha, se abre un popover/tooltip explicando:
  > *"Completar al menos 1 hábito diario mantiene viva tu racha y acelera la bonificación de puntos para tu Reserva de Pacífico."*

### 3.2. Selector Semanal (Weekly Calendar Strip)
- **Visual:** Tira horizontal de 7 días correspondientes a la semana en curso (Lunes a Domingo).
- **Estados por día:**
  - `Completado (●)`: Verde/cyan con check si se cumplieron los hábitos del día.
  - `Día actual ([●])`: Contorno activo con fondo de acento de marca.
  - `Futuro (○)`: Muted, no seleccionable.
  - `Perdido (x)`: Indicador neutro sin castigo agresivo (empatía con el usuario).

### 3.3. Anillo Central de la Reserva con Micro-copy Dinámico
- **Visual:** `AnimatedCircularProgressBar` con la espiral de Fibonacci integrada (`SpiralIcon`).
- **Estados de copy:**
  - 0%: *"Comienza el día: elige un micro-hábito y suma a tu Reserva."*
  - 33%-66%: *"Vas a buen ritmo: 1 hábito más para cerrar tu meta de hoy."*
  - 100%: *"¡Meta diaria cumplida! Tu Reserva sumó +15 puntos hoy."*

### 3.4. Cards de Hábitos con Identidad por Pilar
Cada hábito cuenta con un badge de categoría con color semántico según los tokens de FIBO:

| Pilar | Categoría | Color Token | Icono | Micro-acción |
|---|---|---|---|---|
| **Bolsillo** | Finanzas & Ahorro | Dorado / Esmeralda (`#D4A24C` / `#01A355`) | `PiggyBank` / `Coins` | Selector rápido: S/ 5, S/ 10 o personalizado |
| **Cuerpo** | Salud Física | Cyan Pacífico (`#0099CC`) | `Activity` / `Footprints` | Check de 15 min de caminata o entrenamiento |
| **Mente** | Salud Mental & Pausa | Lavanda / Cyan suave (`#004C66` / `#E8F9FF`) | `Brain` / `Sparkles` | Check de respiración o descanso sin pantalla |

### 3.5. Feedback de Completado (Confetti + Haptic visual)
- Al marcar el 3er hábito del día, se dispara una ráfaga sutil de `canvas-confetti` (paquete ya instalado en `package.json`).
- Animación fluida con `framer-motion` / `motion` en la card completada.

---

## 4. Métricas de Éxito de la Feature
- **Retención D1 / D7:** Elevada por la racha visible y el calendar strip.
- **Engagement diario:** Tiempo de interacción < 45 segundos para no generar fricción.
- **Conversión a seguro:** Hábitos cumplidos generan el "derecho moral" a la oferta del microseguro sin sentirse invasivo.
