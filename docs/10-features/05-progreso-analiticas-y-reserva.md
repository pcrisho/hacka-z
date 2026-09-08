# Feature 05: Progreso, Analíticas de Bienestar y Crecimiento de Reserva (/progreso)

> **Estado:** Especificación aprobada para implementación  
> **Ruta:** `app/app/(app)/(tabs)/progreso/page.tsx`  
> **Público objetivo:** Gen Z analítica, usuarios que necesitan ver retorno tangible de sus hábitos en su cobertura médica.  
> **Inspiración:** Apple Health Trends, Nubank Insights, Duolingo Milestones, Oura Ring Readiness.

---

## 1. El Problema de la v1 y la Nueva Propuesta

La v1 de `/progreso` mostraba un porcentaje aislado y un gráfico básico de puntos sin contexto.
En la **v2 de Progreso**, el usuario comprende el principio de **crecimiento compuesto**:
- *¿Cuánto equivale mi Reserva en dinero o cobertura médica real?*
- *¿A cuántos hábitos estoy de desbloquear el siguiente nivel de beneficio con Pacífico?*
- *¿Cómo se distribuye mi esfuerzo entre bolsillo, cuerpo y salud mental?*

---

## 2. Anatomía de la Pantalla /progreso v2

```
+-------------------------------------------------------------+
|  Tu Crecimiento 📈                      [Semana] [Mes] [Total]
+-------------------------------------------------------------+
|                                                             |
|  SALDO DE RESERVA DE BIENESTAR:                             |
|  +-------------------------------------------------------+  |
|  | S/ 15,000 en Cobertura Médica de Emergencia          |  |
|  | 145 Puntos acumulados • +24% este mes 🚀              |  |
|  | Estado: Nivel 2 (Guardián en activo)                  |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  CAMINO DE NIVELES & RECOMPENSAS PACÍFICO:                  |
|  +-------------------------------------------------------+  |
|  | [✓] Nivel 1: Contenido de Bienestar + Insignia        |  |
|  | [●] Nivel 2: 1 mes de App de Mindfulness (ACTUAL)     |  |
|  | [○] Nivel 3: Sesión con Psicólogo + Seguro Bonificado |  |
|  |     (Faltan 2 hábitos esta semana para desbloquear)   |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  EVOLUCIÓN EN EL TIEMPO:                                    |
|  +-------------------------------------------------------+  |
|  | [ Gráfico de Área / Tendencia de Crecimiento ]        |  |
|  | Puntos acumulados semana a semana                     |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  DISTRIBUCIÓN POR PILAR DE BIENESTAR:                       |
|  +-------------------------------------------------------+  |
|  | 💰 Bolsillo:     S/ 45 apartados (9 hábitos)          |  |
|  | 🏃 Cuerpo:       6.5 horas de actividad física        |  |
|  | 🧠 Mente:        8 pausas guiadas con Dr. Online      |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  BONIFICACIÓN EN MICROSEGURO:                               |
|  "Tu constancia reduce el costo de tu prima mensual         |
|   de S/ 9.90 a S/ 6.90 al alcanzar Nivel 3."                |
|                                                             |
|  [Hoy]              [Comunidad]        [Progreso]   [Perfil]|
+-------------------------------------------------------------+
```

---

## 3. Componentes Clave

1. **Tarjeta Hero de Reserva Tangible:** Convierte puntos abstractos en un valor de protección entendible (`S/ 15,000 de cobertura`).
2. **Timeline de Hitos (Stepped Milestones):** Camino visual claro de niveles bajo, medio y alto.
3. **Área Interactiva con Recharts:** Curva de crecimiento continuo de puntos.
4. **Desglose de Pilares:** Validación de que el usuario no solo cuida su dinero o su cuerpo, sino una rutina integral.
