# DESIGN.md — Guía de Estilos y Sistema Visual: Quererte Sano por Pacífico (Referencia 2)

> **Propósito:** Documento de referencia visual, arquitectura de tokens e ingeniería de interfaz extraído a partir de la captura oficial de producción de **Quererte Sano** (`querertesano.pe`), el ecosistema digital de bienestar, comunidad y salud preventiva de Pacífico Seguros. Es la **referencia directa más valiosa para FIBO**, ya que representa la evolución de la marca hacia hábitos saludables, frescura visual y lenguaje no corporativo para audiencias modernas.

---

## 1. Validación del Archivo de Referencia

| Atributo | Detalle de Validación |
|---|---|
| **Archivo fuente** | `Quererte Sano (9_5_2026 2：53：31 AM).html` |
| **Tamaño en disco** | ~2.1 MB (2,108,577 caracteres de código fuente) |
| **Origen real** | Plataforma oficial de bienestar de Pacífico Seguros (`https://www.querertesano.pe/` o `https://querertesano.com.pe/`) |
| **Nota técnica sobre `<title>`** | El archivo presenta la etiqueta `<title>reCAPTCHA</title>` debido a que el script de seguridad Google reCAPTCHA v3/Enterprise se encontraba activo en el momento de la captura offline. **La validación del DOM confirma que el 100% de la página, contenidos, hojas de estilo CSS y componentes corresponden íntegramente al portal Quererte Sano de Pacífico Seguros** (47 menciones de marca "Quererte", 24 de "Salud/Bienestar", módulos de clases, rutinas y calculadora de salud). |
| **Stack técnico detectado** | Modern Frontend (Next.js / React), Tailwind CSS v3 con diseño atómico y utilitarios JIT, 302 variables CSS de tokens semánticos nativos (`--colors-*`, `--space-*`, `--fontSizes-*`), SVGs vectoriales integrados, responsive mobile-first. |
| **Rol en el ecosistema** | Es el **brazo de bienestar y prevención de Pacífico**. A diferencia del portal comercial de seguros tradicionales (Referencia 1), aquí la propuesta es 100% estilo de vida, hábitos diarios, actividad física y comunidad. |

---

## 2. Sistema de Tokens de Color (Full Palette)

Quererte Sano amplía la paleta corporativa de Pacífico introduciendo **tonos verdes de salud/vitalidad, oscuros profundos (Teal / Deep Navy) para máxima legibilidad, y degradados luminosos de alta energía**.

### 2.1 Escala Primaria: Azules y Cianes (Identidad Pacífico)

```css
/* Escala de Cyan / Azul Pacífico — Tokens Oficiales */
:root {
  --colors-cyan50:  #E8F9FF;  /* Fondo hielo ultra suave para banners y badges */
  --colors-cyan100: #AADDEE;  /* Borde suave / hovers secundarios */
  --colors-cyan200: #80CCE5;  /* Acentos claros */
  --colors-cyan300: #55BBDD;  /* Cian intermedio */
  --colors-cyan400: #2AAAD5;  /* Bordes de inputs enfocados */
  --colors-cyan500: #0099CC;  /* COLOR PRINCIPAL PACÍFICO (#09C) */
  --colors-cyan600: #0080AA;  /* Hover de botones primarios */
  --colors-cyan700: #006688;  /* Estado pressed / active */
  --colors-cyan800: #004C66;  /* Azul petróleo profundo */
  --colors-cyan850: #001A23;  /* Casi negro azulado */
  --colors-cyan900: #001F29;  /* Fondo oscuro institucional */
}
```

### 2.2 Escala Semántica de Contraste: Deep Teal & Blues

```css
/* Escala Funcional de Contraste */
:root {
  --blue-xhigh:  #003840;  /* Deep Dark Teal: usado en botones secundarios y titulares */
  --blue-high:   #007499;  /* Hover en botones principales */
  --blue-medium: #0099CC;  /* Cyan Pacífico base */
  --blue-low:    #79C2E4;  /* Acento celeste suave */
  --blue-xlow:   #F2F9FD;  /* Fondo de secciones limpias */
}
```

### 2.3 Escala Verde: Hábitos Saludables y Vitalidad

```css
/* Escala Verde Salud / Bienestar */
:root {
  --green-xhigh:  #00230C;  /* Texto de máxima jerarquía en salud */
  --green-high:   #00652C;  /* Verde bosque para textos destacados */
  --green-medium: #01A355;  /* Verde éxito y confirmación */
  --green-low:    #77D296;  /* Borde de progreso de hábitos */
  --green-xlow:   #D6F5DF;  /* Fondo de tarjetas de actividad física */
  --colors-green500: #00AF3F; /* Verde pastilla / estado activo */
  --colors-green600: #CFF8DD; /* Píldora de hábito cumplido */
}
```

### 2.4 Gradientes de Frescura y Vitalidad (Firma de Quererte Sano)

Quererte Sano incorpora un gradiente muy distintivo para badges de herramientas, chips interactivos y destacados de comunidad:

```css
/* Gradiente Tritono Fresco — Quererte Sano */
.badge-fresco {
  background: linear-gradient(to right, #35DAFF, #65F9CF, #98FFF3);
  /* De Cyan Neón (#35DAFF) pasando por Menta (#65F9CF) hacia Aqua Glaciar (#98FFF3) */
}

/* Gradiente de Iluminación Suave en Tarjetas */
.bg-glow-card {
  background: linear-gradient(180deg, rgba(217, 255, 253, 0.4) 0%, rgba(255, 255, 255, 1) 100%);
}
```

### 2.5 Escala Neutra y de Fondo

```css
:root {
  --colors-white:    #FFFFFF;
  --colors-gray50:   #F9FAFB;  /* Fondo general de aplicación */
  --colors-gray100:  #F2F5F5;  /* Fondo de tarjetas de contenido */
  --colors-gray200:  #E7EBED;  /* Bordes sutiles */
  --colors-gray300:  #D4DBDE;  /* Bordes de tarjetas deshabilitadas */
  --colors-gray700:  #65737B;  /* Subtítulos descriptivos */
  --colors-gray800:  #545E62;  /* Cuerpo de texto principal */
  --colors-gray900:  #2F373C;  /* Titulares secundarios */
  --black-xhigh:     #121314;  /* Texto oscuro absoluto */
  --black-high:      #2E2F33;  /* Texto cuerpo de alta lectura */
}
```

---

## 3. Tipografía y Estilo Editorial

Quererte Sano utiliza una combinación estilística muy característica: **titulares de doble peso (Two-Tone Headings)** que mezclan una palabra ligera (`font-light`) con una palabra gruesa (`font-bold`) para crear dinamismo y ritmo visual sin saturar.

### 3.1 Familias Tipográficas
- **Display / Titulares:** `Foco` (`Foco Trial`, `Foco_Trial_Bd`, `Foco_Trial_Lt`) o sans-serif redondeada moderna.
- **Cuerpo y UI:** `Roboto` (`Roboto_regular`, `Roboto_bold`, `Roboto_light`) / `system-ui`.

### 3.2 El Patrón "Two-Tone Heading" (Firma de Bienestar)

```html
<!-- Ejemplo real extraído del Hero de Quererte Sano -->
<h1 class="text-3.5 lg:text-[64px] leading-none font-light">
  <span class="text-[#003840]">Nueva rutina,</span>
  <span class="font-bold text-[#003840]"> nueva </span>
  <span class="font-bold text-[#0099CC]">vida</span>
</h1>
```
- **"Nueva rutina,"**: En peso `300` (Light) y color Deep Teal `#003840`.
- **"nueva"**: En peso `700` (Bold) y color Deep Teal `#003840`.
- **"vida"**: En peso `700` (Bold) y color Cyan Pacífico `#0099CC`.

### 3.3 Escala Tipográfica Semántica

| Nivel | Tamaño (rem / px) | Line Height | Peso | Uso |
|---|---|---|---|---|
| **H1 Hero** | `3.5rem` - `4.0rem` (56px - 64px) | `1.0` - `1.1` | Light (300) + Bold (700) | Título principal de la landing |
| **H2 Sección** | `2.0rem` (32px) | `1.25` | Bold (700) | "Aprende y consigue una vida saludable" |
| **H3 Card** | `1.5rem` (24px) | `1.3` | Bold (700) | Títulos de módulos ("Calculadora de IMC", "Clases en línea") |
| **H4 Sub** | `1.125rem` (18px) | `1.4` | Medium (500) | Submódulos y programas |
| **Body Large** | `1.25rem` (20px) | `1.5` | Light (300) / Regular (400) | Bajadas explicativas de cabecera |
| **Body Base** | `1.0rem` (16px) | `1.52` (`--line-height-xlarge`) | Regular (400) | Descripciones de actividades y rutinas |
| **Caption** | `0.875rem` (14px) | `1.36` | Medium (500) | Categorías de ejercicio, duración en minutos |
| **Micro** | `0.75rem` (12px) | `1.32` | Regular (400) | Badges compactos y avisos legales |

---

## 4. Espaciado, Formas y Radios (Spacing & Geometry)

### 4.1 Escala de Espaciado (`--space-*`)

Quererte Sano cuenta con una escala modular estricta de 14 pasos:
- `--space-1`: `4px`
- `--space-2`: `8px`
- `--space-3`: `12px`
- `--space-4`: `16px`
- `--space-5`: `20px`
- `--space-6`: `24px`
- `--space-7`: `32px`
- `--space-8`: `40px`
- `--space-9`: `56px`
- `--space-10`: `64px`
- `--space-11`: `88px`
- `--space-12`: `96px`

### 4.2 Radios de Borde (`border-radius`)

A diferencia de interfaces corporativas cuadradas, Quererte Sano adopta **curvas muy amplias y orgánicas**:
- **Píldoras y Botones (`rounded-full` / `--border-radius-circular: 31.25rem`)**: Botones de acción, chips y buscadores son completamente redondeados.
- **Tarjetas Principales (`rounded-3xl` = 24px, `lg:rounded-[30px]` = 30px)**: Contenedores de contenido con radio muy suave.
- **Tarjetas Secundarias (`rounded-2xl` = 16px)**: Tarjetas de clases y artículos.
- **Formas decorativas de fondo (`rounded-b-[100%]` o formas elípticas)**: Usadas en fondos decorativos superiores para dar sensación de fluidez y movimiento humano.

### 4.3 Sombras y Elevación (`box-shadow`)

Las sombras en Quererte Sano son sutiles y vaporosas, evitando el efecto de "ventana flotante pesada":
- **Hover en tarjetas interactivas:** `hover:shadow-[0px_1px_5px_0px_#00000070]`
- **Hover en escritorio:** `lg:hover:shadow-[1px_3px_5px_3px_rgba(64,66,72,0.08)]`
- **Focus ring accesible:** `ring-2 ring-[#0099CC] ring-offset-2`

---

## 5. Componentes Principales de Quererte Sano

### 5.1 Botones de Acción (Button Specs)

#### Botón Primario de Bienestar ("Comienza ahora")
```html
<button class="inline-flex items-center justify-center h-[48px] rounded-full py-3 px-6 font-medium text-[16px] leading-[24px] transition-all duration-200 bg-[#0099CC] hover:bg-[#007499] active:bg-[#003840] text-white disabled:bg-[#E9EAEB] disabled:text-gray-600">
  Comienza ahora
</button>
```
- **Altura fija:** 48px (altura ergonómica ideal para móvil).
- **Radio:** `rounded-full` (píldora).
- **Color base:** `#0099CC` (Cyan Pacífico).
- **Hover:** `#007499`.
- **Active / Pressed:** `#003840` (Dark Teal).
- **Disabled:** Fondo `#E9EAEB` con texto gris `#545E62`.

#### Botón Secundario Deep Teal ("Ver programas")
```html
<button class="inline-flex items-center justify-center h-[48px] rounded-full py-3 px-6 font-medium text-[16px] leading-[24px] transition-all duration-200 bg-[#003840] hover:bg-[#161718] active:bg-[#404248] text-white">
  Ver programas
</button>
```
- Fondo `#003840` (Deep Teal), hover a carbón `#161718`. Brinda elegancia y contraste al botón primario celeste.

#### Botón Outline / Ghost ("Ver trailer" / "Inicia sesión")
```html
<button class="inline-flex items-center justify-center h-12 rounded-full px-6 font-medium text-base border border-[#003840] text-[#003840] bg-transparent hover:bg-[#003840] hover:text-white transition duration-300">
  Ver trailer
</button>
```

---

### 5.2 Chips y Badges con Gradiente Tritono

Se utilizan para destacar características especiales, calculadoras y llamadas a la acción:
```html
<div class="flex items-center h-6 gap-1 bg-gradient-to-r from-[#35DAFF] via-[#65F9CF] to-[#98FFF3] rounded-3xl px-3 py-[2px] text-xs font-bold text-[#003840]">
  <span>GRATIS</span>
</div>
```

---

### 5.3 Tarjetas de Actividades y Hábitos

Las tarjetas organizan el contenido en tres pilares:
1. **Clases en línea:** Rutinas grupales guiadas por coaches.
2. **Clases grabadas:** Biblioteca On-Demand (yoga, estiramiento, cardio).
3. **Guías y consejos:** Artículos cortos y accionables de nutrición y salud mental.
4. **Calculadora Interactiva (IMC):** Herramienta de autodiagnóstico amigable, no juzgadora.

**Patrón estructural de la tarjeta:**
- Contenedor con `rounded-2xl` o `rounded-3xl`, fondo blanco o `#F9FAFB`.
- Icono en círculo de 56px con fondo hover pastel `#D9FFFD`.
- Título en `text-primary-xhigh font-bold` (18px - 20px).
- Párrafo de una línea con `text-neutral-high text-[14px]` (máxima síntesis, sin párrafos largos).
- Flecha o indicador de navegación a la derecha.

---

### 5.4 Barra de Navegación de Estilo de Vida

- **Cabecera despojada de jerga financiera:** En lugar de "Seguros de Salud, Vida, Decesos", el menú se estructura en verbos de acción humana:
  - **Actívate** (deporte, clases, movimiento).
  - **Prevención** (chequeos, alertas, nutrición).
  - **Salud** (telemedicina, bienestar integral).
  - **Comunidad** (foros, retos colectivos).
- **Acceso rápido a usuario:** Botón de píldora "Inicia sesión" sin fricciones burocráticas.

---

## 6. Comparativa Arquitectónica: Referencia 1 vs. Referencia 2

| Dimensión Visual | Referencia 1 (Pacífico Corporativo) | Referencia 2 (Quererte Sano) | Lo que FIBO adopta |
|---|---|---|---|
| **Público objetivo** | Clientes formales, familias, compradores de seguros | Personas activas, jóvenes, hábitos preventivos | **Gen Z (Guardián / Estudiante con ansiedad financiera)** |
| **Color dominante** | `#0099CC` (Cyan) + `#EE2C70` (Magenta compra) | `#0099CC` (Cyan) + `#003840` (Teal) + Gradiente Menta `#65F9CF` | **Cyan Pacífico `#0099CC` + Gradiente Menta/Verde + Acento Oro de FIBO** |
| **Tono de titulares** | Transaccional e imperativo (*"Cotiza tu seguro"*) | Motivador y aspiracional (*"Nueva rutina, nueva vida"*) | **Empático, claro, libre de jerga ("Tu Reserva de Bienestar")** |
| **Esquinas / Radios** | `1.25rem` (20px) en tarjetas | `rounded-3xl` (24-30px) y `rounded-full` (píldoras) | **Píldoras completas en botones y 24px en tarjetas de hábitos** |
| **Estructura de menú** | Árbol denso de seguros y coberturas | Verbos de estilo de vida (*Actívate, Prevención*) | **Navegación centrada en hábitos, progreso y cobertura** |
| **Modelo de interacción** | Venta digital tradicional (formulario → pago) | Contenido gratuito → comunidad | **Hábitos gratuitos → Reserva → Microseguro opcional** |

---

## 7. Directrices de Aplicación Directa para FIBO

La Referencia 2 es el **espejo directo de cómo Pacífico Seguros visualiza el bienestar**. Para el MVP y landing de FIBO:

1. **Adoptar la sintaxis de botones de Quererte Sano:**
   - Botón primario: 48px de alto, `rounded-full`, color `#0099CC`, hover `#007499`, active `#003840`.
   - Botón secundario: 48px de alto, `rounded-full`, color `#003840` (Deep Teal), hover `#161718`.
2. **Implementar los titulares de doble peso (Two-Tone Headings):**
   - En la landing de FIBO: *"Pequeños hábitos,* **gran tranquilidad**" o *"Tu rutina diaria,* **tu respaldo real"*.
   - Combinar `font-light` en `#003840` con `font-bold` en `#0099CC`.
3. **Utilizar el Gradiente Menta/Cian para la Reserva de Bienestar:**
   - El gradiente `#35DAFF` -> `#65F9CF` -> `#98FFF3` es ideal para el medidor / anillo de progreso de la **Reserva de Bienestar de FIBO**.
   - Comunica salud, crecimiento y frescura inmediata, alejándose del "verde dólar bancario".
4. **Tarjetas de los 3 Hábitos Semanales:**
   - Usar el patrón de tarjetas de Quererte Sano: `rounded-3xl`, icono en círculo pastel (`#D9FFFD`), descripción en una línea, y estado visual con pastilla verde (`#CFF8DD` + `#007C2D`).
5. **El diferencial de FIBO frente a Quererte Sano (Crucial para el Pitch):**
   - Quererte Sano ofrece contenido educativo y clases gratuitas, pero **no premia la constancia con cobertura real**.
   - FIBO toma esta misma línea visual amigable de Quererte Sano y le incorpora el motor de valor: **hábito sostenido = Reserva protegida + acceso al microseguro pay-as-you-go**.
