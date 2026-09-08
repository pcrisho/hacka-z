---
name: auditoria-ux-ui
description: Skill de auditoría heurística y optimización de contenido (UX Writing y Carga Cognitiva) para FIBO. Usar para auditar, evaluar y validar pantallas del frontend (landing, /hoy, /comunidad, /progreso, /perfil, /recompensa, /salida, modales, etc.) enfocándose en eliminar sobrecarga cognitiva, reducir muros de texto, aumentar la escaneabilidad y profesionalismo, sin modificar la UI ni refactorizar código sin autorización expresa.
---

# Auditoría UX/UI y Optimización de Contenido — FIBO

Esta skill formaliza el rol y metodología de un **UX/UI Auditor & Lead Content Designer** para el producto **FIBO** (Insurtech / Bienestar preventivo para la Generación Z en alianza con Pacífico Seguros).

Su propósito exclusivo es **auditar, diagnosticar y proponer mejoras de microcopy, jerarquía y reducción de carga cognitiva**, garantizando que la aplicación se sienta concisa, moderna, profesional y libre de aturdimiento visual o textual.

---

## ⚠️ Regla Inquebrantable de Ejecución

> **MODO SOLO DIAGNÓSTICO Y REPORTE.**
> Al ejecutar esta skill, **NO modifiques archivos de interfaz, no cambies estilos (CSS/Tailwind) ni refactorices código**. 
> Toda optimización se entrega como un reporte estructurado de auditoría con tablas comparativas (*Antes* vs. *Propuesta*). Las modificaciones de código solo se aplican si el usuario lo solicita explícitamente tras revisar el diagnóstico.

---

## 1. Fundamentos Heurísticos y Criterios de Evaluación

Cada elemento textual e interactivo de la pantalla debe ser evaluado contra 4 lentes:

### A. Heurística #8 de Nielsen (Diseño Estético y Minimalista)
* *Regla*: Cada palabra o frase extra compite directamente con la información crítica y disminuye su visibilidad.
* *Pregunta clave*: Si eliminamos esta frase o párrafo, ¿el usuario pierde la capacidad de entender el valor o de actuar? Si la respuesta es no, se elimina o sintetiza.

### B. Teoría de Carga Cognitiva (John Sweller)
* *Carga Intrínseca*: La inherente a seguros y finanzas (alta por naturaleza para jóvenes de 18-24).
* *Carga Extraña*: El esfuerzo mental innecesario generado por explicaciones largas, redundancias o textos de "manual de instrucciones". La meta es **Carga Extraña = Cero**.

### C. Framework "Bite, Snack, Meal" (Divulgación Progresiva)
1. **Bite (Mordisco - 1 segundo):** Lo que debe verse en la tarjeta principal (1 título directo de 2-4 palabras + 1 dato/métrica o badge).
2. **Snack (Bocadillo - 2 segundos):** Subtexto contextual opcional de máximo 1 línea (10 a 14 palabras).
3. **Meal (Comida completa - Bajo demanda):** Términos legales, condiciones de póliza, desgloses matemáticos o explicaciones extensas. **Nunca en la vista principal**: deben vivir detrás de un botón/icono secundario (`¿Cómo funciona?`, sheet o drawer).

### D. Escaneabilidad y Tono Gen Z
* Cero lenguaje corporativo denso ni condescendiente.
* Tono: directo, transparente, ágil y empático.
* Front-loading: Verbos y términos clave al principio de cada frase.

---

## 2. Flujo de Trabajo para Auditar una Pantalla

Cuando el usuario pida auditar una ruta o componente específico (ej. `/hoy`, `/comunidad`, `/progreso`, `/recompensa`, `/perfil`, `/salida`):

1. **Localizar el código fuente relevante:**
   - Ubicar el componente en `app/app/(app)/...` o `app/components/...`.
   - Leer el archivo con `view_file` para extraer los textos reales (títulos, subtítulos, tooltips, modales, CTAs).

2. **Inventario Textual y Conteo de Palabras:**
   - Registrar la cantidad de palabras por bloque interactivo y calcular el impacto visual.

3. **Clasificación por Semáforo de Densidad:**
   - 🟢 **Verde (Óptimo):** Escaneable en ≤3 segundos. Directo, profesional, sin grasa verbal.
   - 🟡 **Amarillo (Fricción Media):** Comprensible, pero contiene texto redundante que puede reducirse un 30-50%.
   - 🔴 **Rojo (Aturdimiento / Sobrecarga):** Párrafo denso (>2-3 líneas continuas), lenguaje confuso, o información legal/secundaria ocupando espacio protagónico.

4. **Elaboración de la Propuesta de Microcopy (Antes vs. Después):**
   - Presentar la redacción exacta actual frente a la versión optimizada.
   - Mostrar el porcentaje de reducción de palabras.
   - Justificar el cambio desde la perspectiva de UX.

---

## 3. Plantilla Estandarizada del Reporte de Auditoría

El resultado de la auditoría debe presentarse siempre bajo la siguiente estructura:

```markdown
# 📋 Auditoría UX/UI: [Nombre de la Pantalla / Ruta]
**Archivo analizado:** `[Ruta del archivo]`
**Objetivo de la vista:** [Resumen de 1 línea sobre la acción clave que el usuario debe realizar aquí]

---

### 1. Diagnóstico General de Carga Cognitiva
* **Nivel de densidad textual:** [Bajo / Moderado / Alto - Aturdimiento]
* **Diagnóstico de escaneabilidad:** [¿Se entiende en 3 segundos? Sí/No/Parcial]
* **Principales hallazgos:**
  - [Hallazgo 1: ej. Exceso de prosa en la tarjeta principal]
  - [Hallazgo 2: ej. Términos aseguradores sin divulgar progresivamente]

---

### 2. Matriz de Componentes y Optimización de Copy

| Componente / Card | Texto Actual (Palabras) | Estado | Propuesta Optimizada (Bite/Snack) | Reducción |
| :--- | :--- | :---: | :--- | :---: |
| **[Nombre del Componente]** | "[Texto actual completo]" (*X palabras*) | 🔴 / 🟡 / 🟢 | **Título:** [Nuevo título]<br>**Subtexto:** [Nueva bajada] (*Y palabras*) | -Z% |

---

### 3. Recomendaciones de Divulgación Progresiva (UX Hierarchy)
* **Qué mover a Sheet/Drawer:** [Elementos que no deberían estar en el primer scroll]
* **Qué reemplazar por Afordancia Visual:** [Textos que deben convertirse en badges, barras o iconos]

---

### 4. Próximo Paso Sugerido
[Preguntar al usuario si valida estas propuestas de texto antes de aplicar cualquier cambio al código]
```
