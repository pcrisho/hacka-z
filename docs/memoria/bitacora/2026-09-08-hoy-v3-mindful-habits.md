# Bitácora: Dashboard /hoy v3 — Mindful Rituals, Navegación Semanal Reactiva y Anti-Checkbox Syndrome

- **Fecha:** 08 Set. 2026 (Día 8 de 8 del sprint)
- **Autor / Colaborador:** Roberto Crisóstomo & Antigravity

---

## 1. Contexto y Objetivos

Tras validar los últimos commits del frontend, el equipo identificó dos oportunidades críticas de UX/UI en el dashboard principal `/hoy`:
1. **Falta de manejadores y reactividad en el Calendar Strip:** Los 7 días semanales eran estáticos sin controles de navegación (`‹` / `›`), y al tocar días pasados la lista de hábitos no respondía a ese contexto temporal.
2. **"Checkbox Syndrome" (Fricción Cero = Pérdida de Valor):** Completar hábitos de salud o ahorro requería únicamente un clic plano sobre un botón (`Marcar` o `S/ 5`), asemejándose a un to-do list genérico de compras en vez de una experiencia con peso psicológico y credibilidad técnica ante Pacífico Seguros y AWS.

---

## 2. Lo que se construyó

### A. Documentación y Especificación Formal
- Se creó `docs/10-features/08-hoy-v3-mindful-habits-y-navegacion.md` y el artifact interactivo de diseño `hoy-v3-mindful-habits-spec.md`.

### B. Los 3 Rituales Conscientes por Pilar (Componentes Modulares)
1. **💰 Bolsillo — Modal Alcancía de Salud (`modal-alcancia.tsx`):**
   - Selector interactivo de montos sugeridos: `S/ 2`, `S/ 5`, `S/ 10` o monto libre personalizado.
   - Indicador dinámico del acumulado del mes (S/ 45 base + monto actual).
   - Animación de confirmación con confetti en paleta de marca y justificación de honor system.
2. **🏃 Cuerpo — Selector de Movimiento & Mini-Timer (`modal-actividad.tsx`):**
   - Selector en 1 tap con cálculo calórico aproximado: *Caminata urbana hacia campus*, *Trote / Gimnasio*, *Subir escaleras*, *Estiramiento o yoga*.
   - Pestaña con Mini-Timer interactivo de 15 minutos (cuenta regresiva, pausa, reinicio y completado directo).
3. **🧠 Mente — Respiración Guiada 4-4-4 & Check-in Emocional (`modal-respiracion.tsx`):**
   - Animación cíclica de 30 segundos con el círculo central expandiéndose y contrayéndose (*Inhala 4s*, *Sostén 4s*, *Exhala 4s*) durante 3 ciclos guiados.
   - Check-in de energía mental (*⚡ Con energía*, *😌 En calma*, *🤯 Sobrecarga* con enlace contextual a orientación psicológica gratuita con *Dr. Online* de Pacífico Seguros).

### C. Navegación Semanal y Reactividad Temporal en `/hoy`
1. **Controles de Semana:** Manejadores `‹` y `›` para alternar entre la semana actual y la semana anterior.
2. **Reactividad por Día Seleccionado:**
   - **Hoy:** Anillo de progreso diario desacoplado (0%, 33%, 67%, 100%), tarjetas interactivas con dual-path (*Ritual consciente* o *Marcar rápido ✓*) y banner de cobertura del día asegurada con los 3 hábitos completos.
   - **Días Pasados Completados (1 al 5):** Banner histórico con fecha y resumen de 3/3 hábitos (+15 pts ganados) en modo lectura protegida.
   - **Día Pasado Protegido (Día 6 Sábado):** Activación empática del *Escudo de Racha* recordando que cuidarse no genera culpa ni rompe la constancia.
   - Botón *"Volver a Hoy"* para regresar instantáneamente.

### D. Live Timer en Card de Actividad Física y Control de Celebración
1. **Live Activity en la Card:** Si el timer de 15 min de caminata se inicia, la tarjeta de Cuerpo muestra en tiempo real `⏳ 14:07`, barra de progreso dinámica y botones `Pausar/Reanudar`, `Ver ↗` y `Terminar ✓` sin necesidad de mantener el modal abierto.
2. **Persistencia Anti-Intrusión:** El diálogo de celebración de nivel ahora almacena en `localStorage` (`fibo_niveles_celebrados_v1`) los niveles ya vistos, evitando que aparezca repetidamente al recargar o cambiar de pestaña.

### E. Centro de Notificaciones en el Header (`notificaciones-sheet.tsx`)
- Se integró un botón de campana (`Bell`) en el `AppHeader` de las rutas internas con dot animado para alertas pendientes.
- Abre un panel lateral (`Sheet`) con acceso a recompensas desbloqueadas, estado del Escudo de Racha, retos de la comunidad y Dr. Online.

### F. Rediseño Integral de la Vista de Recompensas (`/recompensa`)
- **Trophy Hero:** Celebración visual con insignia dorada y felicitación personalizada.
- **Voucher Perforado:** Ticket digital con código copiable (`FIBO-CALM-2026`) y botón de activación con confetti.
- **Conversión al Microseguro como Derecho Ganado:** Presentación del seguro médico pay-as-you-go de Pacífico (S/ 9.90/mes vía Yape, pausable sin penalidad, hasta S/ 15,000 en respaldo médico).
- **Camino Escalonado:** Visualización de los 3 niveles de la membresía para incentivar la retención.

---

## 3. Verificación Técnica
- `pnpm typecheck` (`tsc --noEmit`): **0 errores**.
- `next build`: **17/17 páginas y rutas compiladas exitosamente** en 3.9s.
