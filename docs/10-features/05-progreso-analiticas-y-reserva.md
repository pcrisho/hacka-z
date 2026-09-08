# Feature 05: Progreso, Analíticas de Bienestar y Crecimiento de Reserva (/progreso)

> **Estado:** Implementado / Actualizado (v3 Coherente)  
> **Ruta:** `app/app/(app)/(tabs)/progreso/progreso-view.tsx`  
> **Público objetivo:** Gen Z analítica, usuarios que necesitan ver retorno tangible de sus hábitos en su cobertura médica.  
> **Alineación:** Crecimiento compuesto de FIBO, sincronización con `/hoy` y `/comunidad`, sin descuentos de prima (Derecho Ganado / Microseguro Pay-as-you-go).

---

## 1. El Problema Previo y la Nueva Arquitectura Coherente

Anteriormente, la vista de `/progreso` presentaba tres desconexiones graves:
1. **Desconexión con Comunidad:** Ignoraba los Retos a los que el usuario se sumaba en `/comunidad` y el impacto en su Tribu.
2. **Desconexión con los Rituales de `/hoy`:** Mostraba números estáticos que no reflejaban la Alcancía de Salud, las sesiones del Live Timer o las pausas guiadas.
3. **Discrepancia de Negocio:** Afirmaba erróneamente un "descuento" de S/ 9.90 a S/ 6.90. La regla de negocio de Pacífico no permite descuentos en primas reguladas; el modelo es **Derecho Ganado**: la constancia habilita activar el microseguro pay-as-you-go a S/ 9.90/mes vía Yape, pausable sin penalidad y con respaldo de hasta S/ 15,000.

---

## 2. Anatomía de la Pantalla /progreso v3 (Minimalista y Fluida)

```
+-------------------------------------------------------------+
|  ANALÍTICAS DE BIENESTAR                                    |
|  Tu evolución y respaldo              [ Nivel 2 • Guardián ] |
+-------------------------------------------------------------+
|                                                             |
|  1. TARJETA HERO: SALDO DE RESERVA Y RESPALDO PACÍFICO       |
|  +-------------------------------------------------------+  |
|  |  🛡️ Respaldo Médico Garantizado                       |  |
|  |  S/ 15,000  (en emergencias y chequeos preventivos)   |  |
|  |                                                       |  |
|  |  Reserva Acumulada: 145 pts  •  Racha Activa: 5 días  |  |
|  |  [============ 75% hacia Nivel 3 ============]       |  |
|  |  Póliza respaldada por Pacífico Seguros               |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  2. EVOLUCIÓN EN EL TIEMPO (INTERACTIVA)                    |
|  +-------------------------------------------------------+  |
|  |  Evolución de tu Reserva          [Semana] [Mes] [Total] |  |
|  |  [ Gráfico de Área Recharts minimalista con gradiente ]|  |
|  +-------------------------------------------------------+  |
|                                                             |
|  3. APORTE POR PILAR DE HÁBITOS (CONECTADO A /HOY)          |
|  +-------------------------------------------------------+  |
|  |  [ 🐷 Bolsillo ]       [ ⚡ Cuerpo ]        [ 🧠 Mente ]  |
|  |  S/ 35 apartados       3.2 hrs activas      6 pausas     |
|  |  Alcancía de salud     Live Timer sesiones  Check mindful|
|  +-------------------------------------------------------+  |
|                                                             |
|  4. IMPACTO EN COMUNIDAD & RETOS (CONECTADO A /COMUNIDAD)   |
|  +-------------------------------------------------------+  |
|  |  • Retos Activos:                                     |  |
|  |    - Reto Anti-burnout: 3 de 7 días (43% completado)  |  |
|  |    - Hidratación 2L: 2 de 5 días (40% completado)     |  |
|  |  • Tribu Activa: Runners Lima Sur                     |  |
|  |    Cumplimiento grupal al 78% (Meta semanal: 100 km)  |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  5. CAMINO DE HITOS Y MICROSEGURO PACÍFICO                  |
|  +-------------------------------------------------------+  |
|  |  [✓] Nivel 1: Contenido e insignia (Desbloqueado)        |  |
|  |  [●] Nivel 2: Beneficio digital + Microseguro Yape     |  |
|  |  [○] Nivel 3: Sesión 1 a 1 de psicología Dr. Online     |  |
|  |                                                       |  |
|  |  🛡️ Microseguro Médico Pay-as-you-go Pacífico          |  |
|  |  S/ 9.90 / mes vía Yape • Pausable sin penalidad       |  |
|  |  [ Gestionar o activar en Recompensas → ]             |  |
|  +-------------------------------------------------------+  |
+-------------------------------------------------------------+
```

---

## 3. Principios de UX y Coherencia de Datos

1. **Jerarquía Limpia sin Emojis de Relleno:** Títulos y subtítulos limpios de emojis decorativos en encabezados, priorizando tipografía con Bricolage Grotesque y Geist, e iconografía vectorial SVG fina de Lucide.
2. **Sincronización Bidireccional:**
   - Si el usuario completa retos en `/comunidad` y checks en `/hoy`, el contador de Retos Activos en `/progreso` se actualiza.
   - Si pertenece a una tribu, la tarjeta de comunidad destaca su tribu anfitriona y el progreso colectivo.
3. **Selector Temporal Reactivo:** Los botones `Semana`, `Mes` y `Total` recalculan el array de datos del `AreaChart` dinámicamente.
4. **Verdad Financiera y Aseguradora:** La tarjeta de Microseguro no promete descuentos ficticios, sino el acceso por derecho ganado a la póliza pay-as-you-go de Pacífico a S/ 9.90/mes, con redirección fluida a `/recompensa`.
