# Análisis y Deconstrucción Visual del One-Pager (Google Slides)

> **Documento de referencia técnica y diseño para agentes y equipo.**  
> **Basado en la imagen de referencia:** `uploaded_media_1788902234671.png`  
> **Proyecto:** FIBO — Hábitos Diarios y Microseguros On-Demand (Hackathon UCSUR × Pacífico Seguros × AWS)

---

## 1. Visión General del Formato y Canvas

- **Tipo de archivo de origen:** Diapositiva única horizontal (Canvas 16:9 widescreen, dimensiones estándar en Google Slides: `1920 × 1080 px` o `10 pulgadas × 5.625 pulgadas`).
- **Propósito:** One-Pager ejecutivo de alto impacto visual diseñado para ser evaluado en menos de 90 segundos por el jurado de preselección.
- **Línea de corte / "Área Segura":** La imagen presenta un contorno punteado rojo en la parte superior e inferior que delimita el margen de seguridad de impresión y visualización de pantalla (`safe area`). Todo el contenido crítico está a 30px dentro de este borde.

---

## 2. Arquitectura de Información y Grid (Disposición en 3 Columnas)

El diseño utiliza una composición asimétrica de 3 columnas de lectura occidental natural (**Z-pattern / de izquierda a derecha**):

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  HEADER: [CLUSTER TEAM presenta]        [ LOGO: FIBO ]                  [ SÍMBOLO ]    │
├──────────────────────────┬─────────────────────────────┬───────────────────────────────┤
│ COLUMNA 1: DIAGNÓSTICO   │ COLUMNA 2: PERSONA & VALOR  │ COLUMNA 3: PRODUCTO & PRUEBA  │
│ (Ancho: ~28%)            │ (Ancho: ~36%)               │ (Ancho: ~36% - Fondo Celeste) │
│                          │                             │                               │
│ 1. OPORTUNIDAD           │ 3. USUARIO                  │ 5. SOLUCIÓN (FIBO)            │
│  • Problema macro        │  • Ficha de Camila (Avatar) │  • Flujo 1-2-3-4              │
│  • Cifra 84.9%           │  • Ingresos y situación     │  • 3 Mockups de App Mobile    │
│  • Tags contextuales     │  • Señal de canal (82.5%)   │  • Validación (57.5% / 70%)   │
│  • Encuesta n=100        │                             │                               │
│                          │ 4. PROPUESTA DE VALOR       │                               │
│ 2. INSIGHT               │  • Tagline en espiral       │                               │
│  • Verdad revelada       │  • 3 Tarjetas de pilares    │                               │
│  • Cifra 85% constancia  │                             │                               │
│  • Tags de solución      │ 6. EQUIPO                   │                               │
│  • Cajetín Video Pitch   │  • 3 Integrantes y roles    │                               │
├──────────────────────────┴─────────────────────────────┴───────────────────────────────┤
│  FOOTER: CLUSTER TEAM | Roberto Paolo Crisóstomo | Franco Akira Chávez | Israel Manrique│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Desglose Módulo por Módulo (Qué contiene la imagen original)

### A. Cabecera (Header Banner)
- **Fondo:** Barra superior oscura (`#1E293B` o `#0F172A`).
- **Izquierda:** Píldora turquesa/cyan con el texto `"CLUSTER TEAM presenta"`.
- **Centro:** Logotipo `"FIBO"` en tipografía condensada sans-serif en color verde agua.
- **Derecha:** Símbolo de flecha en espiral ondulada ascendente con degradado cyan-verde.
- **Función:** Genera recordación inmediata del equipo y el nombre de marca.

### B. Columna 1 — Diagnóstico y Necesidad
1. **Sección 1. Oportunidad:**
   - *Titular:* `1. Oportunidad` subrayado.
   - *Bajada:* Breve síntesis del problema de los jóvenes en transición laboral y la desconfianza en seguros.
   - *Tarjeta de Métrica Destacada:* Fondo crema/amarillo claro con número gigante **84.9%** (*"de jóvenes de 14-24 años en Perú trabajan en la informalidad"*).
   - *Etiquetas (Pills):* `[SIN PLANILLA]`, `[INGRESOS VARIABLES]`, `[DESCONFIANZA]`.
   - *Dato de Campo:* Bloque destacado de encuesta cuantitativa propia (`n=100`): **67.5%** participaría en un seguro tras cumplir metas de salud.
2. **Sección 2. Insight:**
   - *Titular:* `2. Insight` subrayado.
   - *Explicación:* La barrera no es el seguro, sino la utilidad inicial. El hábito y el grupo son la llave de entrada.
   - *Métrica Clave:* Número grande en verde **85%** (*"se sumaría más fácilmente a un hábito si lo hace con un grupo"*).
   - *Etiquetas (Pills):* `[COMUNIDAD]`, `[CONSTANCIA]`, `[PROTECCIÓN]`.
   - *Cajetín de Video:* Contenedor blanco redondeado para insertar el enlace del video de sustentación de preselección.

### C. Columna 2 — Usuario, Propuesta y Equipo
1. **Sección 3. Usuario:**
   - *Perfil:* `Camila, 22 años - independiente`.
   - *Tarjeta de Datos:* Avatar circular de Camila + Bloque de ingresos: `S/ 1,200 - 1,800/mes | Ingresos variables | sin planilla`.
   - *Viñetas de Dolor y Comportamiento:* Nativa digital, rechazo a la letra chica, búsqueda de autonomía y control.
   - *Señal de Canal:* Píldora blanca destacando que el **82.5%** usa billeteras digitales (Yape/Plin) todos los días.
2. **Sección 4. Propuesta de Valor:**
   - *Tagline Destacado:* Píldora cyan curva con texto en cursiva: *"Cada hábito suma al siguiente. Tu Reserva crece en espiral."*
   - *3 Tarjetas de Pilares:*
     - **COMUNIDAD:** 85% prefiere hacerlo en grupo.
     - **TRANSPARENCIA:** 70% gana confianza al saberlo desde el inicio.
     - **BENEFICIO:** 60% prioriza transparencia y beneficios inmediatos.
3. **Sección 6. Equipo:**
   - Disposición horizontal o triangular con bullets oscuros:
     - Roberto Crisóstomo Berrocal (Líder / Producto)
     - Israel Manrique Marcelo (Investigación / Insights)
     - Franco Chávez Bada (Construcción / MVP)

### D. Columna 3 — Solución y Validación (Contenedor Destacado)
- **Fondo:** Contenedor curvo en tono pastel verde menta/turquesa claro que separa visualmente la solución del problema.
- **Píldora de Título:** Fondo negro con texto blanco: `5. SOLUCIÓN`.
- **Subtítulo:** `FIBO - BilleteradeBienestar con Propósito`.
- **Diagrama de Proceso (Stepper):** Línea numerada `1 Onboarding` → `2 Hábitos` → `3 Protección` → `4 Pago`.
- **Wireframes / Mockups de Pantallas Móviles:** 3 tarjetas con silueta de smartphone:
  - *Pantalla 1:* Saludo personalizado ("Hola, Camila"), 3 hábitos, progreso 12 semanas.
  - *Pantalla 2:* "Mi Reserva" acumulada (S/ 150), contador 3/3 semanas.
  - *Pantalla 3:* "Fibo Proteger" (microseguro activable S/ 2 - 3 por semana).
- **Caja de Validación de la Propuesta:**
  - `57.5%` pagaría con alta probabilidad S/3 a S/10 por una protección puntual.
  - `70%` siente más confianza al conocer desde el inicio que habrá un seguro personalizado.

### E. Pie de Página (Footer)
- Barra delgada con el identificador del equipo: `CLUSTER TEAM | Roberto Paolo Crisóstomo Berrocal | Franco Akira Chávez Bada | Israel Manrique Marcelo`.

---

## 4. Diagnóstico Crítico: Qué funciona muy bien y qué debe actualizarse

### Lo que funciona extraordinariamente (Mantener en el nuevo):
1. **La distribución espacial (3 columnas):** Es la forma más eficiente de condensar un caso de negocio completo en una sola lámina sin saturar la vista.
2. **El bloque de Camila con foto e ingresos:** Humaniza el problema de inmediato para el evaluador.
3. **Las tarjetas de validación con porcentajes (n=100):** Aportan evidencia cuantitativa real que responde directamente a la rúbrica (35% Sustentación).
4. **La columna de la Solución diferenciada en color:** Hace que el producto resalte como la respuesta inevitable a las dos columnas de la izquierda.

### Lo que está desactualizado y DEBE actualizarse con el estado real del proyecto:
1. **Identidad Visual y Logotipo:**
   - *Antes:* Tipografía genérica comprimida y una espiral de flecha tipo infografía que no corresponde al producto real.
   - *Ahora:* Utilizar el **Logotipo e Isotipo oficiales de FIBO** (doble arco dorado `#D4A24C` + cyan `#0099CC` y palabra FIBO en *Bricolage Grotesque* 800 en `#0099CC`), tal como figura en el header de la app.
2. **Paleta de Color:**
   - *Antes:* Tonalidades verdes y turquesas dispersas.
   - *Ahora:* Cyan Pacífico (`#0099CC`), Slate Oscuro (`#0F172A`), Acento Dorado (`#D4A24C`), Coral Alerta (`#E26D5C`) y fondos cálidos (`#FAF8F5`).
3. **Contenido de la Solución (MVP v3 Real):**
   - *Antes:* Menciona conceptos hipotéticos tempranos como "Mi Reserva S/150" o "12 semanas".
   - *Ahora:* Reflejar las **4 pantallas del MVP ya codeado y verificado en Next.js 16**:
     - `1. Onboarding Transparente con Agente IA (AWS Bedrock)`
     - `2. Hoy: Mindful Rituals (Alcancía S/5-10, Live Timer, Respiración 4-4-4)`
     - `3. Comunidad: Tribus Universitarias + Salida Protegida (S/ 3.50 - 4.90)`
     - `4. Progreso: Racha sin culpa + Derecho Ganado a Microseguro Pacífico (S/ 9.90/mes)`
4. **Cifra Macro de Seguros:**
   - Agregar el dato de contexto macro que valida la oportunidad para Pacífico: **Penetración de seguros en Perú es de solo 2.05% del PBI** (APESEG) vs 6.2% OCDE.
5. **Duración del Video:**
   - Clarificar que el video de sustentación dura **hasta 3 minutos** (conforme al artículo §6.2 de las Bases Oficiales del Concurso).

---

## 5. Guía de Implementación en Google Slides

Para recrear esta lámina de manera limpia en Google Slides:
1. **Configuración de Página:** Archivo → Configuración de página → Pantalla ancha (16:9).
2. **Fondo:** Color sólido `#FAF8F5` (Warm Canvas) o `#FFFFFF`.
3. **Banner Superior:** Rectángulo con relleno `#0F172A`, ancho total, altura ~120px. Insertar `fibo-imagotipo.png`.
4. **Contenedor Derecho (Solución):** Rectángulo con esquinas redondeadas (`radio: 24px`), relleno `#E0F2FE` (Cyan muy suave) o `#F0FDFA`, borde 1px `#BAE6FD`.
5. **Tarjetas de Datos y Cifras:** Rectángulos redondeados con relleno `#F3EFEA` o `#FFFFFF`, sombras suaves (desenfoque 4px, transparencia 8%).
6. **Tipografías a usar en Google Slides:**
   - Títulos y Cifras: *Bricolage Grotesque* (disponible en Google Fonts / Fuentes de Google Slides).
   - Textos y Viñetas: *Plus Jakarta Sans*.
