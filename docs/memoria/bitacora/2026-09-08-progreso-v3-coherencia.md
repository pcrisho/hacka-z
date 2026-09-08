# Bitácora: Progreso v3, Analíticas Coherentes y Conexión con Hoy & Comunidad

- **Fecha:** 08 Set. 2026 (Día 8 de 8 del sprint)
- **Autor / Colaborador:** Roberto Crisóstomo & Antigravity

---

## 1. Contexto y Diagnóstico Previo

Tras completar el ecosistema de `/hoy`, `/comunidad` y la ruta dedicada `/salida`, se procedió a auditar la vista de **Progreso** (`app/app/(app)/(tabs)/progreso/progreso-view.tsx`). Se detectaron tres fricciones importantes:
1. **Desconexión con Comunidad:** El usuario se inscribe en Retos y participa en Tribus, pero la pestaña de progreso no mostraba ningún indicador de avance en desafíos grupales ni cumplimiento de tribu.
2. **Desconexión con los Rituales de `/hoy`:** Los 3 pilares (Bolsillo, Cuerpo, Mente) presentaban métricas estáticas ficticias en lugar de sincronizarse con la Alcancía de Salud, el Live Timer de actividad y las pausas mindful.
3. **Discrepancia en el Modelo de Microseguro:** Se prometía un "descuento" de S/ 9.90 a S/ 6.90/mes. Siguiendo las definiciones de las mentorías oficiales de Pacífico (04 Set.), las primas reguladas no ofrecen descuentos; el mecanismo es **Derecho Ganado**: la constancia habilita la contratación del microseguro pay-as-you-go a S/ 9.90/mes vía Yape, pausable sin penalidad y con respaldo de hasta S/ 15,000.
4. **Sobrecarga visual y Emojis:** Títulos saturados con emojis que restaban seriedad analítica a la pantalla.

---

## 2. Decisiones y Cambios Implementados

1. **Header Limpio y Minimalista:**
   - Título: *Tu evolución y respaldo* (sin emojis).
   - Badge de Nivel dinámico (*Nivel 1 • Iniciando*, *Nivel 2 • Constante*, *Nivel 3 • Guardián*).
2. **Tarjeta Hero de Respaldo Pacífico:**
   - Monto tangible garantizado por constancia (S/ 5,000 a S/ 15,000 según constancia o póliza activa).
   - Reserva de puntos calculada con exactitud sobre `state.reservaPuntos`.
   - Indicador de Racha activa (5 días) y estado de la póliza colectiva.
3. **Selector Temporal Reactivo y Curva Compuesta:**
   - Segmented control minimalista: `Semana` | `Mes` | `Histórico`.
   - Recalculación en tiempo real del conjunto de datos del `AreaChart` de Recharts con gradiente sutil.
4. **Desglose de Pilares Sincronizado:**
   - **Bolsillo:** Dinero acumulado en la alcancía (S/ 35 base / S/ 45 si completó ahorro).
   - **Cuerpo:** Tiempo de movimiento activo (3.2 hrs / 4.5 hrs con sesión).
   - **Mente:** Pausas mindful guiadas (5 a 8 pausas).
5. **Sección de Impacto en Comunidad & Retos:**
   - Tarjetas de progreso para cada reto activo (`diasCompletados` de `metaDias`), con barra de porcentaje y badge de recompensa.
   - Estado de la Tribu activa del usuario: nombre de la tribu, meta semanal colectiva (ej. *100 km acumulados*) y cumplimiento grupal (ej. *78% del objetivo*).
6. **Camino de Recompensas & Tarjeta de Microseguro:**
   - Milestones de Niveles 1, 2 y 3 con estado de desbloqueo.
   - Tarjeta inferior enfocada en *Derecho Ganado / Póliza Vigente*, explicando el microseguro pay-as-you-go de S/ 9.90/mes vía Yape con enlace directo a `/recompensa`.

---

## 3. Verificación Técnica

- `pnpm exec tsc --noEmit`: 0 errores de tipado.
- `pnpm run build`: 18/18 páginas estáticas generadas exitosamente con Next.js Turbopack.
