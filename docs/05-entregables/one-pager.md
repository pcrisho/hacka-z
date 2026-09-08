# Entregable: One Pager Oficial — FIBO

> **Hackathon UCSUR – Pacífico Seguros × AWS:** *"El futuro de los seguros para la Generación Z"* (Ciclo 2026-2)  
> **Nombre del Producto:** **FIBO**  
> **Tagline:** *"Cada hábito suma al siguiente. Tu Reserva crece en espiral."*  
> **Equipo:** Roberto Crisóstomo (Líder), Franco Chávez, Israel Manrique  
> **Link del video de sustentación (≤ 3 min):** `[https://youtu.be/fibo-pacifico-genz-demo]`  
> *(Sustentación de problema, propuesta de valor, modelo GTM, equipo y demostración del prototipo funcional interactivo).*

---

## 1. Oportunidad (35% Rúbrica — Sustentación y Diagnóstico)

En el Perú, la penetración de seguros apenas alcanza el **2.05% del PBI** (APESEG, 2T 2025), frente al 6.2% promedio de los países de la OCDE. Para la Generación Z (18 a 26 años), la desconexión con el sistema asegurador es estructural:
1. **El abismo de la informalidad laboral:** El **84.9% de los jóvenes entre 14 y 24 años trabaja en la informalidad** (INEI 2025). Al no contar con planilla ni empleo formal, quedan excluidos automáticamente de las pólizas corporativas (EPS), donde Pacífico lidera sólidamente con el 42.3% del mercado.
2. **El castigo del seguro tradicional:** Los productos médicos tradicionales exigen primas fijas mensuales elevadas, permanencia forzosa y cobros por adelantado. Si un joven independiente o practicante tiene un mes con ingresos reducidos y deja de pagar, la póliza se cancela con penalidades y pierde toda su antigüedad.
3. **La crisis silenciosa de salud mental y financiera:** El **40% de los jóvenes peruanos de 18 a 24 años experimenta dificultades clínicas de bienestar emocional** (Sapien Labs 2026), agravadas por la ansiedad del costo de vida y la falta de un colchón financiero para imprevistos.

---

## 2. Insight

Del research oficial de Pacífico Seguros × La Chakra (2026) y la mentoría especializada con líderes de Pacífico, emergieron cuatro verdades clave:
- **"La salud es más que no enfermarse y la tranquilidad es tener el control":** La Gen Z no busca discursos paternalistas ni alarmistas sobre la muerte o catástrofes; busca herramientas cotidianas que le devuelvan agencia sobre su cuerpo, su mente y su dinero.
- **Rechazo a la prima fija, adopción del retorno tangible:** No desconfían de la protección, rechazan pagar por un servicio intangible que no saben si usarán. Responden al valor inmediato antes del compromiso financiero (*cold-start*).
- **"Sus beneficios son sus apps" (Plot Twist de las bases):** Desprecian los descuentos comerciales disfrazados. Valoran el acceso a suscripciones digitales de productividad y salud mental (Spotify, Calm, Google One, telemedicina) por encima de cupones tradicionales.
- **Accountability Social Potenciado:** El compromiso grupal entre pares eleva entre **65% y 95% la probabilidad de cumplimiento de metas de bienestar** (`insight-salud-mental-y-habito-gen-z.md`).

---

## 3. Usuario Objetivo (Arquetipo Oficial Integrado)

Diseñado a partir de la convergencia de los dos lentes oficiales de investigación de Pacífico:
- **Lente Psicológico:** El **Guardián** (perfil previsor, cauteloso con su presupuesto, evita deudas y busca blindar a los suyos con pasos concretos).
- **Lente Situacional:** El **Estudiante / Primer Empleo con Ansiedad Financiera** (universitario, practicante o freelancer que vive la transición a la adultez sin red de seguridad institucional).

> **Caso Representativo — Camila (21 años, Lima / Provincias):**  
> Estudiante de últimos ciclos y diseñadora gráfica independiente. No tiene planilla ni EPS. Cuando sus ingresos son buenos aparta dinero, pero cuando bajan, cualquier consulta médica particular desbalancea su presupuesto mensual. Necesita una solución que premie su esfuerzo diario, que se adapte a su flujo de caja y que nunca la castigue si necesita pausar.

---

## 4. Propuesta de Valor Única

**FIBO invierte la ecuación del seguro: la protección no se compra en frío, se gana con hábitos diarios.**

```
+-------------------------------------------------------------------------------+
|  1. HÁBITOS DIARIOS      2. CRECIMIENTO ESPIRAL      3. RECOMPENSA Y SEGURO   |
|  [Bolsillo + Cuerpo + Mente] -> [Reserva de Bienestar] -> [Microseguro Pacífico]|
|  Rituales conscientes        Puntos acumulativos          S/ 9.90/mes vía Yape|
|  sin culpa (escudo racha)    en curva compuesta           Pausable sin castigo|
+-------------------------------------------------------------------------------+
```

### Diferenciadores frente al mercado actual:
1. **Integración en Espiral (Hábito → Derecho Ganado):** A diferencia de *Quererte Sano* (contenido informativo sin earning) o *Seguro Salud Yape* (prima fija plana), en FIBO completar hábitos semanales hace crecer una **Reserva de Bienestar**. Al alcanzar un nivel, el usuario recibe primero una recompensa digital no-monetaria (ej. voucher de app de bienestar) y **gana el derecho a acceder a un Microseguro Médico Pay-as-you-go de Pacífico a solo S/ 9.90/mes vía Yape**, con respaldo de hasta S/ 15,000 y pausa instantánea sin penalidad.
2. **Ecosistema Comunitario y Salida Protegida:** Introducimos el concepto de **Tribus** (universitarias, de trabajo o amigos de pichangas/running). El Capitán puede convocar una **"Salida Protegida"** con seguro colectivo de accidentes personales de Pacífico, cotizado proporcionalmente para los asistentes reales (S/ 3.50 por persona/evento), recaudado por Yape y compartido por WhatsApp con emisión inmediata de póliza (`PAC-TRIBU-XXXX`).
3. **IA con Transparencia Radical y Escalamiento Humano:** Agente conversacional nativo en AWS Bedrock que desde el onboarding declara honestamente cómo se usarán los datos de hábitos para ofrecer seguros, y que en el siniestro realiza el triaje inicial derivando con empatía al médico de *Dr. Online* o a un asesor humano de Pacífico.

---

## 5. Solución y Prototipo MVP (35% Rúbrica — Grado de Avance y Funcionalidad)

El prototipo se encuentra **100% codeado, verificado y navegable** en Next.js 16 App Router (TypeScript estricto, 0 errores, 18/18 páginas generadas en producción, persistencia reactiva en cliente con `localStorage` y modo PWA):

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ECOSISTEMA NAVEGABLE FIBO v3 (Rutas Implementadas)                          │
├─────────────────────────────────────────────────────────────────────────────┤
│ • /                 Landing institucional con lista de espera real en NeonDB│
│ • /ingresar         Acceso rápido express (DNI/Teléfono)                    │
│ • /onboarding       Agente IA (AWS Bedrock) + Declaración de transparencia   │
│ • /(tabs)/hoy       Mindful Rituals (Alcancía, Live Timer, Respiración 4-4-4)│
│ • /(tabs)/comunidad Tribus universitarias, retos grupales y link a WhatsApp │
│ • /(tabs)/progreso  Analíticas Recharts (AreaChart) + Derecho Ganado        │
│ • /(tabs)/perfil    Perfil deportivo sobrio (Strava/Adidas) + Pólizas iOS   │
│ • /recompensa       Voucher perforado FIBO-CALM-2026 + Microseguro S/ 9.90  │
│ • /salida           Salida Protegida: Cotizador grupal, Yape y póliza real  │
│ • /seguro           Switch de microseguro: activar / pausar sin penalidad   │
│ • /momento-de-verdad Siniestro guiado por IA con carga de fotos y triaje    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Aspectos Destacados de UX / UI:
- **Anti-Checkbox Syndrome en `/hoy`:** Cada pilar cuenta con un modal interactivo: Alcancía digital para micro-ahorro (S/ 5 o 10), Live Timer de 15/30/45 min sincronizado en la card de ejercicio físico, y Pausa de Respiración guiada 4-4-4 de 30 segundos con check-in de estado de ánimo.
- **Calendar Strip Reactivo:** Navegación semanal con dual-path (días completados vs. días protegidos por el Escudo de Racha sin culpa).
- **Transaccionalidad en `/salida`:** Ergonómica y transparente. Evita el cobro injusto a miembros inactivos y automatiza la póliza para eventos deportivos o salidas grupales.

---

## 6. Go-To-Market y Modelo de Negocio (20% Rúbrica — Viabilidad y Realismo)

### Estrategia de Adquisición B2C y Crecimiento Viral:
- **Loop de Tribus Universitarias (K-factor > 1.2):** Cada tribu universitaria (UCSUR, UPC, PUCP, San Marcos) genera retos compartidos y convoca salidas grupales compartidas por WhatsApp. Para activar la cobertura del evento, los miembros descargan y abren FIBO orgánicamente.
- **Canal Estratégico Credicorp (Zero-CAC Discovery):** Banners contextuales dentro de la app de **Yape** (más de 16 millones de usuarios) y promociones cruzadas con el BCP, posicionando a FIBO como el beneficio de bienestar que convierte la rutina en protección.

### Modelo de Negocio en 3 Capas:
1. **Capa 1 — Gratuita (Adquisición & Retención):** Registro de hábitos, acumulación de Reserva, contenidos cortos de bienestar y retos grupales. Genera la data de constancia y reduce el riesgo de selección adversa.
2. **Capa 2 — Microseguros Pay-as-you-go (Ingresos Directos Inmediatos):**
   - Microseguro Médico Personal: **S/ 9.90 / mes** vía Yape (cobertura hasta S/ 15,000, telemedicina Dr. Online y emergencias).
   - Seguro Colectivo por Evento / Salida Protegida: **S/ 3.50 por asistente** / salida deportiva o recreativa.
3. **Capa 3 — Conversión al Portafolio Tradicional de Pacífico (LTV Max):**
   - El historial de constancia acumulado en la Reserva de FIBO actúa como un **score alternativo de salud y prevención**. Cuando el joven ingresa a planilla o incrementa sus ingresos, Pacífico cuenta con un cliente fidelizado listo para transicionar a seguros de salud integrales, vida o EPS, reduciendo drásticamente el costo de adquisición corporativo (CAC).

---

## 7. Equipo y Capacidades (10% Rúbrica — Complementariedad)

Un equipo multidisciplinario balanceado con roles especializados para garantizar viabilidad técnica y solidez estratégica:

| Integrante | Rol en el Proyecto | Disciplina y Aporte Clave |
|---|---|---|
| **Roberto Paolo Crisóstomo Berrocal** | Líder de Proyecto & Tech Lead | Arquitectura de software, Next.js 16, integración con AWS Bedrock y liderazgo de producto digital. |
| **Franco Akira Chávez Bada** | Strategy & Go-To-Market Lead | Análisis cuantitativo de mercado, modelo actuarial de microseguros, pricing e inteligencia competitiva. |
| **Israel Manrique Marcelo** | UX/UI & Product Designer | Sistema de diseño de FIBO, ergonomía móvil, micro-interacciones y validación heurística de experiencia. |

---

### Enlaces y Anexos del Proyecto
- **Prototipo Web Funcional:** `app/` (Next.js 16 desplegable en Vercel)
- **Repositorio de Documentación:** [`docs/`](../)
- **Design System y Brandboard:** [`docs/07-construccion/design-system.md`](../07-construccion/design-system.md) y [`brandboard.html`](../07-construccion/brandboard.html)
- **Especificaciones de Features:** [`docs/10-features/`](../10-features/) (01 a 10)
