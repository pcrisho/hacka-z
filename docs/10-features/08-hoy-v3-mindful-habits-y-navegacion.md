# Feature 08: Dashboard Diario (/hoy) v3 — Mindful Rituals, Navegación Semanal Reactiva y Anti-Checkbox Syndrome

> **Estado:** En implementación  
> **Ruta:** `app/app/(app)/(tabs)/hoy/hoy-view.tsx` y componentes asociados  
> **Objetivo:** Elevar el valor percibido del producto, eliminando la sensación de "to-do list genérico" mediante rituales interactivos por pilar, navegación temporal contextual y clarificación del progreso diario frente al acumulado.

---

## 1. Justificación de UX, Psicología del Comportamiento y Negocio

### 1.1. El Problema del "Checkbox Syndrome"
En la versión v2 de `/hoy`, completar un hábito de salud o ahorro requería únicamente dar un clic sobre un botón plano (`Marcar` o `S/ 5`). 
- **Riesgo:** Si desbloquear un respaldo médico de **S/ 15,000** cuesta exactamente lo mismo que tachar una lista de supermercado en un bloc de notas, el producto pierde peso y credibilidad técnica ante el jurado (Pacífico Seguros y AWS) y ante el propio usuario.
- **Psicología Gen Z:** El arquetipo (Guardián con ansiedad financiera) busca sentir que realmente tiene el control de su vida. El tap inmediato genera sensación de *"hacer trampa"* o superficialidad.

### 1.2. La Solución: *Mindful Rituals* y Patrón *Dual-Path*
No se trata de imponer fricción burocrática (el *honor system* se mantiene sin exigir fotos obligatorias ni papeleos), sino de dotar de **intencionalidad, ritual y satisfacción táctil** a cada hábito:
- **Camino Rápido (Quick Action):** Confirmación con botón intencional y feedback háptico/confetti para cuando el usuario está en movimiento.
- **Camino Inmersivo (Tap en la tarjeta):** Abre una micro-experiencia interactiva de 15 a 30 segundos diseñada a la medida del pilar.

---

## 2. Especificación de los Tres Rituales por Pilar

```
+-------------------------------------------------------------------------+
|                                PILARES FIBO                             |
|                                                                         |
|  [💰 Bolsillo]                 [🏃 Cuerpo]                 [🧠 Mente]   |
|  Modal Alcancía                Selector Actividad          Respiración  |
|  de Salud                      o Mini-Timer                Guiada 30s   |
|                                                                         |
|  - Selector S/ 2, S/ 5, S/ 10  - Caminata urbana           - Inhala     |
|  - Depósito visual interactivo - Gym / Trote               - Sostén     |
|  - Acumulado en soles          - Escaleras / Movimiento    - Exhala     |
|  - Feedback estilo Yape        - Yoga / Estiramiento       - Check-in   |
+-------------------------------------------------------------------------+
```

### 2.1. Pilar Bolsillo 💰 — La Alcancía de Salud
- **Intención:** Conectar el ahorro chico con la tangibilidad del respaldo médico.
- **Micro-experiencia:**
  - Selector de monto rápido: `S/ 2` (café/pasaje evitado), `S/ 5` (almuerzo optimizado), `S/ 10` (gusto postergado) o monto libre.
  - Indicador visual del **Acumulado del Mes** (ej. *S/ 50 ahorrados este mes en tu alcancía*).
  - Micro-animación de moneda entrando a la alcancía con confirmación: *"Apartado con éxito a tu Reserva de Salud"*.

### 2.2. Pilar Cuerpo 🏃 — Contextualización de Movimiento & Mini-Timer
- **Intención:** Reconocer cualquier forma de movimiento urbano sin necesidad de un smartwatch costoso.
- **Micro-experiencia:**
  - **Selector de actividad de 1-tap:**
    - 🚶 *Caminata hacia campus/trabajo (15 min)*
    - 🏃 *Trote / Entrenamiento funcional*
    - 🪜 *Subir escaleras / Desplazamiento activo*
    - 🧘 *Estiramiento o movilidad articular*
  - **Mini-Timer opcional:** Contador de 15 minutos en cuenta regresiva para quien desea realizar la caminata en ese instante con música o podcasts.

### 2.3. Pilar Mente 🧠 — Micro-Pausa de Respiración (30 Segundos) & Check-in Emocional
- **Intención:** Responder al insight oficial: 40% de jóvenes 18-24 en Perú reporta sobrecarga mental. No basta con decir "medité"; la app brinda la herramienta.
- **Micro-experiencia:**
  - **Respiración 4-4-4 (Caja o Fibonacci):**
    - El círculo central de la pantalla pulsa suavemente: *Inhala (4s)... Sostén (4s)... Exhala (4s)...* durante 3 ciclos (36 segundos).
    - Al terminar los 3 ciclos, el hábito se marca automáticamente con una lluvia suave de partículas esmeralda.
  - **Check-in Emocional complementario:**
    - ¿Cómo está tu energía hoy? `[ ⚡ Con energía ]` `[ 😌 En balance ]` `[ 🤯 Agotado ]`.
    - Si el usuario selecciona *Agotado*, se le sugiere sutilmente activar una consulta sin copago con *Dr. Online* de Pacífico.

---

## 3. Navegación Temporal y Calendar Strip Reactivo

### 3.1. Controles Semanales
- La cabecera del calendario ahora incluye manejadores de navegación:
  - Botón anterior `‹`, etiqueta dinámica (`Semana actual • 1 - 7 Set.`) y botón siguiente `›` (deshabilitado para semanas futuras no vividas).

### 3.2. Reactividad según el Día Seleccionado
| Tipo de Día | Estado en la UI | Comportamiento al seleccionar |
|---|---|---|
| **Día de Hoy (Domingo 7)** | Activo con badge primario | Muestra los hábitos listos para accionar e interactuar. |
| **Día Pasado Completado (ej. Jueves 4)** | Verde con check (`●`) | Muestra tarjeta histórica: *"Día completado: 3/3 hábitos cumplidos (+15 pts Reserva ganados)"*, con los hábitos en modo lectura protegida. |
| **Día Pasado con Faltantes (ej. Sábado 6)** | Amigable con escudo (`🛡️`) | Muestra: *"Tu Escudo de Racha protegió tu historial este día. Cero culpa."* |
| **Día Futuro** | Muted (`○`) | Muestra estado anticipatorio: *"Día bloqueado. Concéntrate en tu bienestar de hoy."* |

---

## 4. Desacople de Métricas: Anillo Diario vs. Progreso a Largo Plazo

### 4.1. El Anillo Central en `/hoy`
- Su objetivo único y exclusivo es **el día de hoy**:
  - `0 de 3` (0%): *"Empieza tu día con un micro-paso."*
  - `1 de 3` (33%): *"Buen arranque. 2 hábitos para asegurar tu día."*
  - `2 de 3` (66%): *"¡A un paso de proteger tu racha!"*
  - `3 de 3` (100%): *"¡Meta diaria cumplida! 🎉 Cobertura del día asegurada."*

### 4.2. El Progreso Acumulado
- Los puntos totales para subir de Nivel 1 a Nivel 2 y 3, así como la cobertura de **S/ 15,000**, viven en **/progreso**, evitando la ambigüedad cognitiva en el dashboard diario.

---

## 5. Criterios de Aceptación Técnica
1. Persistencia de los estados en `localStorage` mediante `ReservaContext`.
2. Responsive total en anchos móviles (360px a 430px) y alturas reducidas.
3. Compatibilidad con accesibilidad (foco por teclado, `aria-label`, contraste WCAG AAA).
4. `tsc --noEmit` y `next build` sin advertencias ni errores.
