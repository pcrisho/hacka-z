# Bitácora: Rediseño de /hoy v2, Pestaña /comunidad y Pulido de /ingresar

- **Fecha:** 06 Set. 2026 (Día 6 de 8 del sprint)
- **Autor / Colaborador:** Roberto Crisóstomo & Antigravity

---

## 1. Contexto y Objetivos

El equipo decidió dar un salto cualitativo en el prototipo de FIBO: pasar de un "mini-MVP limitado" a un **producto digital maduro, deseable y con tracción real para la Gen Z**, incorporando dinámicas de psicología del comportamiento (Finch, Fabulous, Duolingo, Strava) y el respaldo cualitativo de la mentoría de Pacífico Seguros (accountability social, microseguros grupales contextuales).

---

## 2. Lo que se construyó

### A. Pulido de `/ingresar` (Autenticación y UX de entrada)
1. **Máscara telefónica automática:**
   - Formato en tiempo real de 3 en 3: `987 123 987` (máximo 9 dígitos, estándar Perú).
   - Retroceso inteligente: al borrar un dígito precedido de espacio, se elimina el número y el espacio a la vez (evita espacios residuales o quedarse atascado).
   - Limpieza automática de entradas (solo números, soporte para pegar con o sin `+51`).
2. **Feedback visual de carga:**
   - Spinner animado (`components/ui/spinner.tsx`) tanto en "Enviar código" como en "Confirmar".
3. **Componente `InputOTP` oficial de shadcn:**
   - 4 casillas táctiles de 48x48px con foco celda por celda, caret parpadeante animado, auto-foco y confirmación automática al completar el 4to dígito (`onComplete`).
   - Opción *"Cambiar número"* para regresar fácilmente si el usuario se equivocó.

### B. Especificación de Features en `docs/10-features/`
Se documentó la arquitectura y visión del producto en cuatro documentos formales:
- `docs/10-features/01-dashboard-hoy-v2.md`: Pantalla diaria enriquecida.
- `docs/10-features/02-creacion-habitos.md`: Flujo de Bottom Sheet (Drawer) con plantillas 1-tap.
- `docs/10-features/03-comunidad-y-retos.md`: Pestaña social, tribus y microseguros contextuales.
- `docs/10-features/04-arquitectura-rutas-y-navegacion.md`: Mapa completo de rutas y flujo.
- **Artifact Maestro:** `fibo-vision-producto-y-features.md` con diagramas Mermaid de arquitectura.

### C. Rediseño completo de `/hoy` (Dashboard Diario v2)
1. **Header:** Saludo dinámico, fecha formateada y badge de racha activa (`🔥 5 días racha`) con diálogo explicativo del **Escudo de Racha** (Streak Shield) para eliminar la culpa o ansiedad de racha.
2. **Weekly Calendar Strip:** Selector horizontal de 7 días (`L M M J V S D`) con indicadores de cumplimiento y día activo resaltado en color de marca.
3. **Anillo de Reserva:** Progreso visual continuo con espiral central y copy dinámico adaptado al avance diario.
4. **Tarjetas de hábitos enriquecidas por pilar:**
   - **Bolsillo 💰:** Icono `PiggyBank`, badge dorado/ámbar, botones rápidos `S/ 5` | `S/ 10`.
   - **Cuerpo 🏃:** Icono `Activity`, badge cyan Pacífico.
   - **Mente 🧠:** Icono `Brain`, badge esmeralda de salud mental.
   - Micro-interacción: botón `✓ Completado` interactivo (permite desmarcar en 1 clic) y lluvia de confetti con la paleta de FIBO (`#0099CC`, `#D4A24C`, `#01A355`).
5. **Drawer "+ Nuevo Hábito":** Bottom Sheet interactivo con plantillas 1-tap (*Ahorro hormiga*, *Cocinar en casa*, *Caminata 2,500 pasos*, *Desconexión nocturna*).

### D. Nueva Pestaña `/comunidad` y expansión del `BottomNav`
1. **`BottomNav` de 4 pestañas:** `Hoy` (`/hoy`), `Comunidad` (`/comunidad`), `Progreso` (`/progreso`), `Perfil` (`/perfil`).
2. **Pestaña `/comunidad` (`comunidad/page.tsx`):**
   - **Retos del Mes:** Desafíos colectivos con barra de progreso comunitario (ej. *Reto Cero Delivery*, *10,000 Pasos*, *Semana Anti-Burnout*), botón interactivo "Unirme al reto" con confetti.
   - **Mis Tribus:** Comunidades de afinidad (*UCSUR Runners & Active*, *Freelancers Perú*, etc.) con racha colectiva y regla del Escudo de Tribu.
   - **Microseguro On-Demand Grupal (Pacífico × Yape):**
     - Seguro Pichanga 24h (S/ 3.50 por persona).
     - Seguro Escapada / Viaje corto 48h (S/ 5.00 por persona).
     - Modal interactivo para armar grupo de pichanga con selector de jugadores, cálculo de costo colectivo y link de WhatsApp/Yape.

### E. Rediseño de `/progreso` (Analíticas de Bienestar y Crecimiento Compuesto)
1. **Hero de Cobertura Médica Tangible:** Traduce los puntos abstractos en respaldo real (`S/ 15,000 en emergencias médicas`) con comparativa de crecimiento mensual (+24%).
2. **Camino de Niveles Escalonado (Stepped Milestones):** Hitos visuales de recompensa (Nivel 1, Nivel 2 actual desbloqueado, Nivel 3 en camino).
3. **Gráfica de Tendencia de Área (Recharts):** Curva continua de crecimiento de puntos con gradiente cyan Pacífico.
4. **Desglose de Hábitos por Pilares:** Métricas de impacto acumulado: S/ 45 en ahorro chico, 6.5 hrs de actividad física y 8 pausas de salud mental.
5. **Impacto en Prima:** Proyección de reducción de la prima mensual de S/ 9.90 a S/ 6.90 al alcanzar Nivel 3.

### F. Rediseño de `/perfil` (Perfil Social, Insignias y Ecosistema de Protección)
1. **Header Social con Portada y Avatar:** Banner con gradiente de marca, avatar con badge de cuenta verificada, handle `@camila.r`, bio personalizada y toggle de privacidad interactivo (`Público 🌐` / `Privado 🔒`).
2. **Estadísticas de Impacto:** Tira con Racha (5d), Nivel de Reserva (Nivel 2), Tribus (2) y Amigos (18).
3. **Vitrina de Insignias Ganadas (Trophy Case):** Grid interactivo con insignias por pilar (*Ahorrador Hormiga*, *Runner Urbano*, *Mente Serena*, *Capitán Pichanga*) con modal de detalle y botón para compartir.
4. **Comunidades y Amigos:** Tarjetas de tribus activas y tira de avatares con modal para invitar amigos con link personalizado de referido.
5. **Herramientas que me Protegen (Pacífico Seguros):** Acceso directo y empático a Dr. Online (telemedicina 24/7), Quererte Sano y gestión del Microseguro pay-as-you-go.
6. **Menú de Cuenta y Salida:** Enlaces a recordatorios, declaración de salud / póliza, reporte de siniestro con el agente y botón de cerrar sesión.

---

## 3. Verificación Técnica
- `npm run typecheck`: **0 errores**.
- `npm run build`: **14/14 rutas estáticas generadas exitosamente** (incluyendo `/comunidad`, `/progreso` y `/perfil` v2).
