# PRD — Prototipo MVP FIBO

> Convierte `03-mvp/alcance-producto.md` en requisitos accionables para construcción. No repite el "por qué" de cada decisión (eso ya está ahí y en `02-ideacion/`) — asume esas decisiones como cerradas y define qué se construye, en qué orden y con qué criterio de "terminado".

## 1. Objetivo del prototipo

Demostrar, de forma interactiva y clicable, el flujo crítico único que sostiene la propuesta de valor, para el video pitch (≤3 min, `BASES-CONCURSO.md` §6.2) y para la evaluación de "MVP" (35% preselección, 20% Demoday — `PLAN-TRABAJO.md` §2). No es un producto terminado ni debe intentar serlo (`AGENTS.md`: "MVP = validar, no construir completo").

## 2. Usuario objetivo del prototipo

Se construye pensando en la Historia 1 (Camila, `02-ideacion/historias-usuario-y-validacion.md` §2) como camino principal de demo — es la más completa y la que mejor ilustra los 3 hábitos + recompensa por niveles + momento de verdad. La Historia 2 (Diego) queda como referencia narrativa para el pitch, no requiere pantallas propias salvo que sobre tiempo.

## 3. Ecosistema de Navegación y Flujos Construidos (MVP v3)

El MVP evolucionó de un flujo lineal único a una **experiencia de producto digital completa y modular** estructurada en un shell con `BottomNav` de 4 pestañas y rutas transaccionales dedicadas:

### 3.1. Acceso y Onboarding
1. **Acceso Express ([`/ingresar`](file:///home/pcrisho/Documents/University/hacka-z/app/app/(app)/ingresar)):** Acceso con DNI o teléfono, con retorno de sesión o bifurcación hacia onboarding.
2. **Onboarding Conversacional ([`/onboarding`](file:///home/pcrisho/Documents/University/hacka-z/app/app/(app)/onboarding)):** Agente FIBO (LLM real vía AWS Bedrock / API, no bloqueante con fallback garantizado). Diagnóstico de situación laboral, foco de preocupación (salud/dinero), sugerencia de hábitos iniciales y **declaración explícita de transparencia de datos**: anuncia desde el primer minuto que, según la constancia del usuario, se le ofrecerán microseguros personalizados sin presión.

### 3.2. Las 4 Pestañas del Shell Principal (`app/app/(app)/(tabs)`)
1. **Dashboard Diario ([`/hoy`](file:///home/pcrisho/Documents/University/hacka-z/app/app/(app)/(tabs)/hoy)) — Mindful Rituals v3:**
   - **Calendar Strip Reactivo:** Navegación temporal semanal con estados de constancia y dual-path.
   - **Anillo Central Diario:** Progreso del día calibrado de 0 a 100% con banner de cobertura del día asegurada al cumplir los 3 hábitos.
   - **Mindful Rituals por Pilar (Anti-Checkbox Syndrome):**
     * *Bolsillo:* Modal de Alcancía de Salud con aporte rápido de S/ 5 o S/ 10.
     * *Cuerpo:* Modal de Selector de Actividad Física con Live Timer (15/30/45 min) sincronizado en vivo en la tarjeta.
     * *Mente:* Modal de Pausa Guiada de Respiración 4-4-4 de 30s con check-in de estado de ánimo.
   - **Feedback Loop de Comunidad:** Los retos inscritos en `/comunidad` se sincronizan en `/hoy` con botón de check diario (+10 pts a la Reserva).
   - **Anti-intrusión y Notificaciones:** Modal de felicitación de nivel persistido en `localStorage` (`fibo_niveles_celebrados_v1`) y campana interactiva con `notificaciones-sheet.tsx`.
2. **Comunidad y Tribus ([`/comunidad`](file:///home/pcrisho/Documents/University/hacka-z/app/app/(app)/(tabs)/comunidad)):**
   - **Ecosistema de Tribus:** Creación y unión interactiva con selectores de ámbito (universidad, instituto, trabajo) y metas colectivas semanales.
   - **Retos Colectivos e Individuales:** Desafíos semanales con recompensas en puntos de Reserva.
   - **Acceso a Salida Protegida:** Banner y botón de acción para asegurar eventos grupales (pichangas, viajes, trekking) e invitación vía WhatsApp.
3. **Analíticas y Crecimiento de Reserva ([`/progreso`](file:///home/pcrisho/Documents/University/hacka-z/app/app/(app)/(tabs)/progreso)) — v3 Coherente:**
   - **Sincronización Total:** Retos activos y Tribu en progreso.
   - **Métricas Vivas por Pilar:** Distribución dinámica acumulada (Bolsillo, Cuerpo, Mente).
   - **Curva de Crecimiento Compuesto:** Gráfico `AreaChart` (Recharts) con selector interactivo temporal (`Semana` \| `Mes` \| `Histórico`).
   - **Tarjeta Oficial de Respaldo Médico:** Microseguro Pay-as-you-go a S/ 9.90/mes vía Yape (cobertura hasta S/ 15,000) ganado por derecho de constancia.
4. **Perfil de Bienestar y Cobertura ([`/perfil`](file:///home/pcrisho/Documents/University/hacka-z/app/app/(app)/(tabs)/perfil)) — v3 Minimalista:**
   - **Estética Deportiva Sobria (Strava / Adidas Running):** Avatar vectorial sobrio con micro-badge de verificación Pacífico.
   - **Tira de 4 Métricas Clave:** Racha, Reserva acumulada, Horas de movimiento y Respaldo médico garantizado.
   - **Carruseles Deslizables:** Vitrina de Insignias y Beneficios Corporativos de Pacífico (Dr. Online 24/7, Quererte Sano, Microseguro).
   - **Gestión de Póliza:** Menú agrupado estilo iOS para revisar estado de póliza, declaración jurada de salud y asesor de reclamos.

### 3.3. Rutas Transaccionales y Flujos Dedicados
1. **Recompensa y Conversión ([`/recompensa`](file:///home/pcrisho/Documents/University/hacka-z/app/app/(app)/recompensa)):**
   - Voucher digital perforado interactivo con código de descuento copiable (`FIBO-CALM-2026`).
   - Conversión integrada a Microseguro Pay-as-you-go de Pacífico a S/ 9.90/mes vía Yape (pausable sin penalidad, hasta S/ 15,000 de respaldo).
   - Progresión de 3 niveles escalonados (Bajo: Insignia + Guía; Medio: App digital; Alto: Telemedicina / Consulta especialista).
2. **Salida Protegida ([`/salida`](file:///home/pcrisho/Documents/University/hacka-z/app/app/(app)/salida)):**
   - Página transaccional ergonómica de seguro grupal para la Tribu.
   - Regla de proporcionalidad del Capitán: cubre exactamente la nómina de asistentes reales (ej. 12 de 100 miembros).
   - Desglose financiero transparente con recaudación Yape (S/ 3.50/persona por salida).
   - Deep linking (`/salida?t=...&act=...&p=...`) con link copiable para compartir en el grupo de WhatsApp de la tribu.
   - Emisión express con póliza colectiva real (`PAC-TRIBU-XXXX`).
3. **Gestión de Seguro ([`/seguro`](file:///home/pcrisho/Documents/University/hacka-z/app/app/(app)/seguro)):** Switch instantáneo de activación y pausa sin penalidad.
4. **Momento de Verdad ([`/momento-de-verdad`](file:///home/pcrisho/Documents/University/hacka-z/app/app/(app)/momento-de-verdad)):** Reclamo/asistencia conversacional guiada por el agente FIBO, subida de foto/evidencia, triaje y escalamiento honesto a asesor humano de Pacífico / Dr. Online.

## 4. Qué se construye Real vs. Simulado en el MVP

| Componente | Nivel de Implementación Real | Qué se Simula / Emula |
|---|---|---|
| **Registro de Hábitos y Rituales Mindful** | **100% Real e Interactivo:** Alcancía, Live Timer y Respiración 4-4-4. | Wearables / Sensores biomédicos (honor system explícito). |
| **Reserva y Analíticas en Espiral** | **100% Real:** Gráfico Recharts, filtros temporales, histórico acumulado. | Scoring bancario tradicional de riesgo crediticio. |
| **Comunidad y Tribus** | **100% Real:** Creación de tribus, retos, metas colectivas, deep links WhatsApp. | Chat grupal propio dentro de la app (usa WhatsApp). |
| **Salida Protegida (Seguro Grupal)** | **100% Real el flujo y emisión:** Cotizador proporcional, deep links, número de póliza colectiva `PAC-TRIBU-XXXX`. | La pasarela real de Yape debita en un sandbox/demo visual. |
| **Recompensa por Niveles** | **100% Real:** Voucher perforado con código real, confetti, persistencia de niveles. | Canje automatizado por API de terceros externos. |
| **Microseguro Pay-as-you-go** | **100% Real el flujo de activación/pausa:** Estado persistido y reflejado en el perfil. | Cobro bancario mensual recurrente. |
| **Agente Conversacional FIBO** | **100% Real la llamada:** AWS Bedrock (`amazon.nova-micro-v1:0`) con fallback garantizado. | La persona humana real que atiende el siniestro (escalamiento simulado honestamente). |
| **Landing Page + Waitlist** | **100% Real:** Formulario conectado a NeonDB con tracking de referidos. | — |

## 5. Requisitos Técnicos y Estado de Construcción

- **Framework:** Next.js 16 (App Router, Turbopack).
- **Compilación:** TypeScript estricto con **0 errores**, `pnpm run build` genera **18/18 páginas** estables.
- **Componentes:** shadcn/ui con primitivas Base UI, Lucide Icons, Recharts, Framer Motion / Canvas-confetti.
- **Persistencia en Cliente:** `ReservaProvider` con `useReducer` y sincronización instantánea en `localStorage`.
- **Diseño Responsive:** Optimización mobile-first para smartphones y formato PWA (`manifest.ts`).

## 6. Criterio de "Terminado" para Preselección y Pitch

El prototipo ha superado el criterio de terminado:
1. Flujo completo de extremo a extremo navegable sin pantallas bloqueadas ni rotas.
2. Todas las rutas interactivas con estados de éxito, modales y respuestas reactivas.
3. Coherencia conceptual absoluta con la propuesta de valor de Pacífico Seguros (prevención, bienestar integral, acceso ágil sin penalidad).

## 7. Identidad Visual y Especificaciones de Features

- **Design System General:** [`design-system.md`](./design-system.md) y [`brandboard.html`](./brandboard.html).
- **Especificaciones Funcionales Granulares:** Consultar la suite completa en [`docs/10-features/`](../10-features/).
