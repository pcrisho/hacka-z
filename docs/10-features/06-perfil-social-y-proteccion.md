# Feature 06: Perfil de Bienestar y Protección Personal (/perfil)

> **Estado:** Implementado / Actualizado (v3 Minimalista)  
> **Ruta:** `app/app/(app)/(tabs)/perfil/perfil-view.tsx`  
> **Público objetivo:** Gen Z que valora el diseño limpio, la ausencia de fricción y el entendimiento claro de sus coberturas y logros sin ruido visual.  
> **Inspiración:** Adidas Running (Runtastic), Strava Athlete Profile, Apple Fitness, Calm.

---

## 1. Filosofía de Diseño: Minimalismo y Cero Ruido Visual

Inspirado en las mejores aplicaciones deportivas y de bienestar contemporáneas:
1. **Identidad Limpia sin Fotos Mock:** Se elimina la fotografía genérica de stock de Unsplash y se reemplaza por un avatar tipográfico/vectorial sobrio con el icono `<User />` de Lucide y un sutil anillo de estado según el Nivel alcanzado.
2. **Eliminación de Banners Abultados:** Se retira el banner de gradiente pesado para dar prioridad al contenido, tipografía y espacio negativo.
3. **Cards Deslizables Horizontales (Horizontal Snap Carousels):**
   - **Vitrina de Insignias:** Carrusel horizontal fluido con snap táctil (`snap-x overflow-x-auto scrollbar-none`), reduciendo drásticamente la altura vertical de la pantalla.
   - **Beneficios y Cobertura Pacífico:** Carrusel horizontal deslizable con tarjetas de servicios (Dr. Online, Quererte Sano y Microseguro Pay-as-you-go).
4. **Tira de Métricas Clave (Estilo Running/Fitness):** 4 métricas compactas (Racha, Reserva, Movimiento activo, Respaldo médico garantizado).
5. **Menú de Cuenta y Póliza:** Opciones agrupadas con iconografía vectorial nítida y chevrons discretos para acceder a la póliza oficial, declaración de salud, soporte y cierre de sesión.

---

## 2. Anatomía de la Pantalla /perfil v3

```
+-------------------------------------------------------------+
|  PERFIL                                           [ Ajustes ]|
+-------------------------------------------------------------+
|                                                             |
|  1. IDENTIDAD (AVATAR VECTORIAL LIMPIO)                     |
|            ( [Icono User] )                                 |
|            Camila Rodríguez                                 |
|            @camila.r • Miembro activo FIBO                  |
|            [ Nivel 2 • Guardián ]                           |
|                                                             |
|  2. TIRA DE MÉTRICAS COMPACTAS                              |
|  +-------------------------------------------------------+  |
|  |  5 días      145 pts       4.5 hrs       S/ 15,000    |  |
|  |  Racha       Reserva       Movimiento    Respaldo     |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  3. INSIGNIAS DESBLOQUEADAS (CARRUSEL HORIZONTAL SNAP)      |
|  Logros de bienestar (4 de 8)                      [Ver todo]|
|  +----------------+  +----------------+  +----------------+ |
|  | 🪙 Ahorrador   |  | 🏃 Movimiento  |  | 🧘 Mente       | |
|  | S/ 50 ahorrados|  | 5 días activo  |  | 8 pausas relax | |
|  +----------------+  +----------------+  +----------------+ |
|                                                             |
|  4. BENEFICIOS Y COBERTURA PACÍFICO (CARRUSEL SNAP)         |
|  Herramientas que te cuidan                                 |
|  +-----------------------+  +-----------------------+       |
|  | 🩺 Dr. Online         |  | 🛡️ Microseguro Pacífico|      |
|  | Telemedicina 24/7     |  | S/ 9.90/mes Yape      |       |
|  | [Consultar médico]    |  | [Gestionar póliza]    |       |
|  +-----------------------+  +-----------------------+       |
|                                                             |
|  5. TU TRIBU ACTIVA (TARJETA COMPACTA)                      |
|  +-------------------------------------------------------+  |
|  | Runners Lima Sur • 78% meta semanal   [Invitar amigos] |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  6. GESTIÓN DE CUENTA Y PÓLIZAS                             |
|  +-------------------------------------------------------+  |
|  | > Recordatorios de hábitos y avisos                      |
|  | > Declaración Jurada de Salud & Póliza Pacífico          |
|  | > Reportar reclamo o emergencia médica (Agente FIBO)     |
|  +-------------------------------------------------------+  |
|  [ Cerrar sesión ]                                          |
+-------------------------------------------------------------+
```

---

## 3. Principios Técnicos y de UX

- **`scrollbar-none` & `snap-x`:** Desplazamiento horizontal táctil optimizado para iOS/Android y web, sin barras grises antiestéticas.
- **Iconografía Unificada:** Lucide SVG nítidos (`User`, `Shield`, `Flame`, `Activity`, `Trophy`, `Stethoscope`, `HeartPulse`, `Zap`, `ChevronRight`).
- **Respeto a Datos Globales:** Consumo dinámico de `state.sesion?.perfil`, `state.reservaPuntos`, `state.seguro` y `state.tribus`.

