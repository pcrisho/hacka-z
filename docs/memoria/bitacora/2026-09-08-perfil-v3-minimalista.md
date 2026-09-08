# Bitácora: Perfil v3, Estética Running Minimalista y Descompresión Visual

- **Fecha:** 08 Set. 2026 (Día 8 de 8 del sprint)
- **Autor / Colaborador:** Roberto Crisóstomo & Antigravity

---

## 1. Contexto y Diagnóstico Previo

Tras optimizar `/hoy`, `/comunidad`, `/salida` y `/progreso`, el equipo auditó la pantalla de **Perfil** (`app/app/(app)/(tabs)/perfil/perfil-view.tsx`). Se detectaron las siguientes oportunidades de mejora visual y de UX:
1. **Ruido Visual y Banners Pesados:** Un banner superior con gradiente de 3 colores ocupaba tercio de la pantalla sin brindar utilidad y saturaba la jerarquía.
2. **Fotografía Mock Desconectada:** Se empleaba una foto de stock de Unsplash genérica que restaba autenticidad a la experiencia de usuario.
3. **Saturación de Emojis:** Títulos como `Editar Perfil ✨`, `Invita a tus Amigos 🤝` o `Insignias Ganadas 🏆` añadían ruido visual innecesario.
4. **Desglose Vertical Agotador:** Las herramientas de protección y las insignias se apilaban en tarjetas verticales grandes, haciendo la pantalla larguísima y confusa.

---

## 2. Inspiración y Decisiones Implementadas

Inspirado en interfaces deportivas y de bienestar minimalistas como **Adidas Running (Runtastic)**, **Strava** y **Apple Fitness**:
1. **Avatar Vectorial Sobrio (Cero Fotos Mock):**
   - Se reemplazó la foto de stock por un avatar circular estilizado con el icono `<User className="size-9 text-primary" />` de Lucide, aro con el color del Nivel actual y un micro-badge inferior de cuenta verificada por Pacífico Seguros.
2. **Tira de Métricas Clave (Fitness/Running Style):**
   - 4 estadísticas resumidas en una tarjeta limpia:
     - **Racha:** 5d (icono Flame)
     - **Reserva:** Puntos acumulados reales (icono Shield)
     - **Movimiento:** 4.5h (icono Activity)
     - **Respaldo:** S/ 15k garantizado por Pacífico (icono ShieldCheck)
3. **Carrusel Deslizable 1: Vitrina de Insignias (Horizontal Snap):**
   - Formato carrusel con snap táctil fluido (`snap-x overflow-x-auto scrollbar-none`).
   - Cards compactas de ancho fijo (`min-w-[150px]`) con iconografía vectorial (PiggyBank, Activity, Brain, Users) y micro-badge de obtención.
4. **Carrusel Deslizable 2: Beneficios Pacífico Seguros:**
   - Cards horizontales deslizables (`min-w-[220px]`) para Dr. Online (telemedicina 24/7), Quererte Sano (alianzas y prevención) y Microseguro Pay-as-you-go (póliza de emergencia S/ 9.90/mes pausable).
5. **Tarjeta Compacta de Tribu:**
   - Bloque conciso que conecta con la tribu activa del usuario (ej. *Runners Lima Sur*), porcentaje de cumplimiento y botón directo para invitar amigos vía WhatsApp.
6. **Menú de Cuenta Agrupado (Estilo iOS):**
   - Ajustes limpios de recordatorios, Declaración Jurada de Salud & Póliza oficial, y acceso directo al agente conversacional de reclamos de FIBO (`/momento-de-verdad`).
   - Botón discreto de cierre de sesión al pie.

---

## 3. Verificación Técnica

- `pnpm exec tsc --noEmit`: 0 errores.
- `pnpm run build`: 18/18 páginas estáticas compiladas en Turbopack.
