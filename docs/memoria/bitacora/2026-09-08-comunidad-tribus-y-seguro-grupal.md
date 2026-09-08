# Bitácora: Comunidad, Ecosistema de Tribus y Salidas Protegidas (/comunidad y /hoy)

- **Fecha:** 08 Set. 2026 (Día 8 de 8 del sprint)
- **Autor / Colaborador:** Roberto Crisóstomo & Antigravity

---

## 1. Contexto y Oportunidad Detectada

Tras consolidar la experiencia del dashboard `/hoy` y la vista de `/recompensa`, el equipo abordó la pantalla de `/comunidad`. Se identificaron cuatro grandes oportunidades de alineamiento UX y de negocio:
1. **Feedback Loop Inexistente con `/hoy`:** En la versión anterior, los retos eran tarjetas estáticas desconectadas del dashboard. Unirse a un reto no tenía impacto en el día a día.
2. **Ciclo de Vida Incompleto de Tribus:** Solo se podían visualizar tribus existentes de manera pasiva. No existía la posibilidad de fundar una nueva tribu (`+ Crear Tribu`), unirse, abandonar o interactuar con el desafío colectivo semanal ni activar el *Escudo de Tribu Pacífico*.
3. **De "On-Demand" Frío a "Salidas Protegidas" de la Tribu:** En vez de un seguro on-demand abstracto con nombre corporativo, la cobertura se articula como **Salidas de la Tribu**: una tribu puede tener 100 miembros, pero el Capitán activa el seguro médico express **únicamente para los 12 miembros que asisten a la salida de la semana** (fútbol, ciclismo, running, trekking o pádel).
4. **Accountability Colectivo sin Vergüenza ni Exceso de Emojis:** Basado en el research de Pacífico Seguros × La Chakra 2026 (65%–95% mayor probabilidad de cumplir hábitos en grupo, rechazo absoluto a la humillación financiera). Se eliminó la sobrecarga de emojis en títulos para mantener un tono fresco, limpio y profesional ante el jurado.

---

## 2. Arquitectura de Estado y Tipos (`app/lib/reserva/`)

Se expandió el núcleo del estado global `ReservaState` para soportar la sincronización en tiempo real:
- **`types.ts`:**
  - `Tribu`: id, nombre, universidad/ámbito, miembros, metaSemanal, rachaSemanas, cumplimiento, esMiembro, esAdmin.
  - `RetoProgreso`: completadoHoy, diasCompletados.
  - Acciones: `unirse-reto`, `abandonar-reto`, `check-reto`, `unirse-tribu`, `salir-tribu`, `crear-tribu`.
- **`constants.ts`:**
  - `RETOS_COMUNIDAD`: catálogo unificado con títulos limpios (*Reto Cero Delivery: Cocinar en Casa*, *10,000 Pasos por 5 Días*, *Semana Anti-Burnout Mental*).
  - `AMBITOS_TRIBU_OPCIONES`: opciones no encasilladas en universidades (*Amigos & Deporte*, *Trabajo Remoto & Freelance*, *Comunidad de Barrio & Salidas*, *Estudio & Jóvenes Universitarios*, *Primer Empleo & Emprendimiento*).
  - `METAS_COLECTIVAS_OPCIONES`: catálogo estructurado para selección rápida en formularios.
- **`context.tsx`:**
  - Reducer con manejo de estado reactivo, hidratación segura con defaults para compatibilidad en `localStorage`, y acreditación de puntos (+10 pts Reserva por check de reto completado).

---

## 3. Lo que se Construyó y Refinó

### A. Pestaña 1: Retos (Sincronizada con `/hoy`)
- Cabecera limpia sin colisión entre título y badge de puntos.
- Tarjetas con títulos tipográficamente sobrios e iconografía SVG sutil (`UtensilsCrossed`, `Activity`, `Brain`).
- Recompensa concisa (`+30 pts Reserva • Cupón S/ 15`) y botón de unirse/ver en Hoy bien proporcionado.

### B. Pestaña 2: Tribus (Ciclo de Vida Completo y Selects)
- **Banner del Escudo de Tribu Pacífico:** Explicación de la regla colectiva (80% de cumplimiento grupal desbloquea protección para todos).
- **Modal interactivo `+ Crear Tribu`:** Formulario guiado con `NativeSelect` para Ámbito y Meta Colectiva Semanal, asignando el rol de Capitán al creador.
- **Membresía Activa:** Unirse o salir de tribus con actualización inmediata.
- **Modal de Detalle de Tribu:** Visualización de la racha semanal colectiva en semanas, barra de avance grupal y botón para invitar vía WhatsApp.

### C. Pestaña 3: Salidas Protegidas (Cobertura Contextual de Tribu)
- **Vinculación a la Tribu:** El Capitán u organizador selecciona la Tribu anfitriona (ej. *Runners Lima Sur con 128 miembros*).
- **Cobertura Proporcional:** Stepper dinámico para seleccionar la nómina exacta de asistentes (ej. 12 de 128 miembros).
- **Catálogo de Salidas:**
  1. ⚽ *Pichanga de Fútbol* (24h, S/ 3.50/persona)
  2. 🚴 *Ruta de Ciclismo Urbano* (24h, S/ 3.00/persona)
  3. 🏃 *Running Grupal / 10K* (24h, S/ 3.00/persona)
  4. 🎒 *Trekking & Escapada* (48h, S/ 5.00/persona)
  5. 🎾 *Torneo de Pádel / Vóley* (24h, S/ 3.50/persona)
- **Nómina y Desglose Financiero:** Muestra los nombres de los cubiertos, costo individual, póliza colectiva (S/ 42.00 para 12) y recaudación por Yape.
- **Emisión Express:** Simulación de activación inmediata con código `PAC-TRIBU-XXXX`.

### D. Reflejo en el Dashboard Diario `/hoy`
- Debajo de la lista de hábitos diarios se incorporó el bloque **"Retos de comunidad"**.
- Si el usuario tiene retos activos:
  - Muestra la tarjeta del reto, la meta de días, barra de avance personal y botón `Marcar reto hoy (+10 pts)`.
  - Al completarse hoy, conmuta a `¡Cumplido hoy! ✓` y suma +10 puntos directamente al historial de la Reserva médica.

---

## 4. Verificación Técnica

- `pnpm exec tsc --noEmit`: **0 errores de TypeScript**.
- `pnpm run build`: **17/17 rutas estáticas y dinámicas compiladas exitosamente en Turbopack**.
