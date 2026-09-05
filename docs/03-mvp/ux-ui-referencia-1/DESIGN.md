# DESIGN.md — Guía de Estilos y Sistema Visual: Pacífico Seguros Corporativo (Referencia 1)

> **Propósito:** Documento de referencia visual e ingeniería de diseño extraído a partir de la captura oficial de producción del portal comercial e institucional de Pacífico Seguros (`pacifico.com.pe`). Sirve como estándar base para alinear el prototipo y la landing de **FIBO** con la identidad visual corporativa del Grupo Pacífico / Credicorp.

---

## 1. Validación del Archivo de Referencia

| Atributo | Detalle de Validación |
|---|---|
| **Archivo fuente** | `Seguros para ti y tu familia, para asegurar tus bienes ¡y más!, en Pacífico (9_5_2026 2：54：15 AM).html` |
| **Tamaño en disco** | ~5.4 MB (5,611,849 caracteres de código fuente) |
| **Origen real** | Portal principal comercial y corporativo de Pacífico Seguros (`https://www.pacifico.com.pe/`) |
| **Estado de preservación** | **100% íntegro y funcional offline**: Contiene CSS embebido, 188 iconos SVG vectoriales, fuentes corporativas, 43 imágenes codificadas en Base64/WebP y lógica de presentación. |
| **Stack técnico detectado** | HTML5 semántico, Bootstrap / Liferay Portal DXP, Swiper.js (carruseles táctiles), suite de componentes BEM propios con prefijo `pacifico-*`, tipografía corporativa propietaria `Foco` + `Roboto`. |
| **Rol en el ecosistema** | Es la **fuente primaria de la identidad comercial formal** de Pacífico Seguros: define cómo la marca se presenta ante clientes masivos, la estructura de venta digital de seguros (Salud, Vida, SOAT, Vehicular, Hogar), los patrones de conversión y la confianza corporativa. |

---

## 2. Paleta de Colores Oficial (Brand Tokens)

Pacífico Seguros utiliza una combinación de **Azul/Cyan Pacífico** como color primario de confianza, contrastado con un **Magenta/Pink vibrante** como acelerador de acción y conversión (CTA principal), junto a neutros fríos y cálidos.

### 2.1 Colores Principales de Marca

```css
/* Tokens de Color — Pacífico Corporativo */
:root {
  /* Primario Pacífico (Confianza, Identidad, Enlaces, Bordes activos) */
  --pacifico-primary: #0099CC;        /* Alias corto: #09C */
  --pacifico-primary-hover: #E8F9FF;  /* Tinte ultra claro para hovers en botones outline */
  --pacifico-primary-focus: #AADDEE;  /* Tinte medio para estados focus/active */
  --pacifico-primary-dark: #005C7A;   /* Azul petróleo para títulos en menú y navbar */
  --pacifico-primary-deep: #004D66;   /* Azul profundo para cintillos y footers */

  /* Secundario / Acento de Acción (CTAs de compra, badges destacados, flechas activas) */
  --pacifico-secondary: #EE2C70;      /* Magenta/Fucsia oficial Pacífico */
  --pacifico-secondary-hover: #9F1D4B;/* Magenta oscuro para hover */
  --pacifico-secondary-focus: #771638;/* Magenta profundo para focus/active */

  /* Estados de Validación y Feedback */
  --pacifico-success: #007C2D;        /* Verde éxito / badge verde (ej. SOAT disponible) */
  --pacifico-success-bg: #F4FFF9;     /* Fondo suave para badges positivos */
  --pacifico-warning: #FFC107;        /* Ámbar preventivo */
  --pacifico-danger: #DC3545;         /* Rojo alertas y errores */
  --pacifico-disabled-bg: #A1A1A1;    /* Gris botón deshabilitado */
  --pacifico-disabled-text: #DADADA;  /* Texto botón deshabilitado */

  /* Escala de Neutros y Superficies */
  --pacifico-bg-light: #F8F9FA;       /* Fondo de secciones alternas */
  --pacifico-bg-blue-tint: #E8F9FF;   /* Fondo de secciones destacadas (tabs) */
  --pacifico-surface: #FFFFFF;        /* Superficie de tarjetas y modales */
  --pacifico-text-primary: #212529;   /* Texto principal de alta legibilidad */
  --pacifico-text-secondary: #444444; /* Texto secundario en descripciones y tarjetas */
  --pacifico-text-muted: #6C757D;     /* Texto desfasado, leyendas legales */
  --pacifico-border: #DEE2E6;         /* Bordes de divisores e inputs */
}
```

| Muestra Visual | Token / Variable | Hex | Uso en UI |
|---|---|---|---|
| 🔵 | `--pacifico-primary` | `#0099CC` | Logos, bordes de botón outline, links, acento de tab activo, borde superior de navbar. |
| 🔷 | `--pacifico-primary-dark` | `#005C7A` | Títulos del menú lateral, subtítulos institucionales de peso. |
| 🌐 | `--pacifico-primary-hover` | `#E8F9FF` | Fondo de hover para botones primarios, fondo de tabs activas. |
| 💖 | `--pacifico-secondary` | `#EE2C70` | Botón secundario de compra/cotización, icono de flecha activa en hover de tarjetas. |
| 🍷 | `--pacifico-secondary-hover` | `#9F1D4B` | Hover de botón de acción principal. |
| 🟢 | `--pacifico-success` | `#007C2D` | Texto y borde de chips de beneficio (ej. "HASTA 43% DSCTO"). |
| 🥬 | `--pacifico-success-bg` | `#F4FFF9` | Fondo de chips verdes de ahorro/promoción. |
| ⚫ | `--pacifico-text-primary` | `#212529` | Encabezados H1-H3, cuerpo principal de texto. |
| ⚪ | `--pacifico-surface` | `#FFFFFF` | Fondo de tarjetas (`pacifico-card`), inputs y navbar. |

---

## 3. Tipografía Oficial y Jerarquía de Texto

La identidad tipográfica de Pacífico se apoya en dos familias:
1. **`Foco` (`Foco, sans-serif`)**: Tipografía corporativa exclusiva de Pacífico. Se caracteriza por remates sutilmente redondeados, transmitiendo calidez, cercanía y humanidad sin perder seriedad institucional. Se usa en titulares (`h1` - `h4`), botones y nombres de producto.
2. **`Roboto` / `sans-serif`**: Tipografía de soporte para cuerpos largos de texto, tablas de datos, términos y condiciones, y micro-copys de formularios.

```css
/* Jerarquía Tipográfica de Referencia 1 */
:root {
  --font-family-display: "Foco", "Roboto", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-family-body: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

/* Escala de Tamaños */
.pacifico-text-h1 {
  font-family: var(--font-family-display);
  font-size: 2.5rem;      /* 40px */
  line-height: 3rem;       /* 48px */
  font-weight: 700;
  letter-spacing: 0.2px;
  color: var(--pacifico-text-primary);
}

.pacifico-text-h2 {
  font-family: var(--font-family-display);
  font-size: 2.0rem;      /* 32px */
  line-height: 2.4rem;
  font-weight: 700;
  color: var(--pacifico-text-primary);
}

.pacifico-text-card-title {
  font-family: var(--font-family-display);
  font-size: 1.0rem;      /* 16px */
  line-height: 1.25rem;   /* 20px */
  font-weight: 400;       /* En cards de lista usa weight regular */
  color: #444444;
}

.pacifico-text-body {
  font-family: var(--font-family-body);
  font-size: 1.0rem;      /* 16px */
  line-height: 1.5rem;
  font-weight: 400;
  color: var(--pacifico-text-secondary);
}

.pacifico-text-caption {
  font-family: var(--font-family-body);
  font-size: 0.75rem;     /* 12px */
  line-height: 0.938rem;  /* 15px */
  font-weight: 400;
  text-transform: uppercase;
}
```

---

## 4. Sombras, Bordes y Radios (Elevation & Shapes)

La interfaz combina **bordes ampliamente redondeados (pills)** en botones y badges con **esquinas moderadas (16px - 20px)** en tarjetas contenedoras, creando una estética accesible y amigable.

### 4.1 Radios de Borde (`border-radius`)

- **Botones y Badges (`border-radius: 1.5rem` = 24px)**: Apariencia tipo píldora, suave al tacto y visualmente moderna.
- **Tarjetas de Producto (`border-radius: 1.25rem` = 20px)**: Esquinas redondeadas orgánicas que albergan los productos de seguros.
- **Contenedor de Navegación Lateral (`border-radius: 0 0 20px 0`)**: Esquina inferior derecha curva característica al desplegar el menú móvil.
- **Elementos circulares (`border-radius: 50%` / `9999px`)**: Avatares, iconos de categoría y botones de paginación.

### 4.2 Sombras y Elevación (`box-shadow`)

Pacífico se destaca por usar **sombras tintadas con su azul corporativo** para comunicar elevación con identidad propia:

```css
/* Elevación y Sombras Pacífico */
:root {
  /* Sombra de marca con tinte azul (usada en Navbar flotante y menús) */
  --pacifico-shadow-brand: 0 4px 10px -2px rgba(1, 125, 167, 0.27);

  /* Resplandor suave de marca (halo interactivo) */
  --pacifico-glow-brand: 0 0 5px 0 rgba(0, 102, 136, 0.25), 0 0 16px 1px rgba(0, 102, 136, 0.24);

  /* Sombra dura de hover en tarjetas de seguro (efecto offset) */
  --pacifico-shadow-card-hover: 3px 5px 0px #DADADA;

  /* Sombra de modales y diálogos */
  --pacifico-shadow-modal: 0 1px 8px rgba(0, 0, 0, 0.3);
}
```

---

## 5. Componentes Clave Analizados

### 5.1 Botones (`.pacifico-btn`)

El sistema de botones de Pacífico tiene dos variantes dominantes:

#### Botón Primario Institucional (`.pacifico-btn--primary`)
Botón estilo *outline* sobrio para navegación, consulta y opciones secundarias en home:
- **Estructura:** Fondo blanco, borde de 1px sólido `#0099CC`, texto `#0099CC`.
- **Forma:** `border-radius: 1.5rem` (24px), `padding: 13px 24px` (`padding-block: 13px; padding-inline: 1.5rem`).
- **Tipografía:** `font-family: Foco, sans-serif; font-weight: 700;`.
- **Estado Hover:** `background-color: #E8F9FF;` (fondo azul hielo suave).
- **Estado Focus:** `background-color: #AADDEE; outline: none;`.

#### Botón Secundario / Acción Principal (`.pacifico-btn--secondary`)
Botón sólido de alto impacto para conversión y compra ("Solicítalo aquí", "Cotizar"):
- **Estructura:** Fondo sólido `#EE2C70` (Magenta Pacífico), sin borde visible, texto `#FFFFFF`.
- **Forma:** `border-radius: 1.5rem`, `padding: 13px 24px`.
- **Tipografía:** `font-family: Foco, sans-serif; font-weight: 700;`.
- **Estado Hover:** `background-color: #9F1D4B;` (oscurecimiento de alto contraste).
- **Estado Focus:** `background-color: #771638;`.

#### Botón Deshabilitado (`.pacifico-btn:disabled`)
- `background-color: #A1A1A1; color: #DADADA; cursor: not-allowed;`.

---

### 5.2 Tarjetas de Producto (`.section-cards__product-card`)

Este es el patrón base utilizado para desplegar el catálogo de seguros:
- **Contenedor:** `background-color: #FFFFFF; border-radius: 1.25rem; padding: 1rem; border: 1px solid transparent;`.
- **Icono/Imagen del Seguro:** `width: 4.5rem; height: 4.5rem;` (72px × 72px) en disposición vertical alineada a la izquierda.
- **Título del Seguro:** `font-family: Foco; font-size: 1rem; line-height: 1.25rem; color: #444444; min-height: 2.5rem;`.
- **Chip Flotante de Promoción (`.section-cards__product-card__chip`):**
  - Ubicación: `position: absolute; top: -0.75rem; right: 0.313rem;`.
  - Estilo: `border-radius: 1.25rem; font-size: 0.75rem; line-height: 0.938rem; text-transform: uppercase; padding: 0.25rem 0.5rem;`.
  - Variante verde (`.green`): `background: #F4FFF9; border: 0.031rem solid #007C2D; color: #007C2D;`.
- **Micro-interacción de Hover (Firma Pacífico):**
  ```css
  .section-cards__product-card:hover {
    box-shadow: 3px 5px #DADADA;
    border-color: #0099CC;
  }
  .section-cards__product-card:hover .section-cards__product-card__cta svg path {
    fill: #EE2C70; /* La flecha cambia de azul a magenta al pasar el mouse */
  }
  ```

---

### 5.3 Barra de Navegación y Encabezado (`.main-navbar` y `.header`)

- **Altura del Header:** 60px fijo.
- **Logotipo:** Isotipo corporativo Pacífico con la ola/humanoide estilizado en Cyan.
- **Acceso Directo a Asistencia:** Botón de emergencia/llamada en la cabecera rápida (`.header__call-btn`).
- **Área Clientes:** Botón "Mi Espacio" (`.header__login-btn`) con acceso directo por DNI.
- **Menú Drawer Móvil (`.main-navbar__container`):**
  - Ancho: 290px.
  - Borde superior distintivo: `border-top: 6px solid #0099CC;`.
  - Esquinas: `border-radius: 0 0 20px 0;`.
  - Sombra: `box-shadow: 0 4px 10px -2px rgba(1, 125, 167, 0.27);`.
  - Enlaces: `color: #005C7A; font-family: Foco; font-weight: 700; font-size: 16px; hover: color: #0099CC;`.

---

### 5.4 Sistema de Pestañas Interactivas (`.pacifico-tabs`)

Utilizado para segmentar públicos (ej. "Para mí y mi familia" vs. "Para mi empresa"):
- **Fondos temáticos:** Pestañas alternan entre `var(--backgroundColor: #E8F9FF)` y `white`.
- **Gradientes de Swiper:** Desvanecen los laterales con `linear-gradient(268deg, #E8F9FF 1.72%, rgba(255,255,255,0) 87.82%)` para indicar deslizamiento en pantallas estrechas.

---

## 6. Fotografía, Iconografía y Lenguaje Visual

1. **Fotografía:**
   - Personas peruanas reales, diversidad etaria y familiar (jóvenes universitarios, familias con mascotas, emprendedores).
   - Iluminación natural, ambientes luminosos sin poses rígidas de estudio.
   - Enfoque temático: actividades al aire libre, convivencia en casa, viajes y movilidad urbana.
2. **Iconografía:**
   - Líneas de trazo medio (stroke 2px) en SVGs monocromáticos con acento en `#0099CC`.
   - Elementos circulares de fondo con opacity baja (`rgba(0, 153, 204, 0.1)`).
3. **Tono de Voz Comercial:**
   - Empático pero directo: *"Cuidamos tu felicidad"*, *"Descubre el valor de no estar solo"*, *"Operaciones rápidas en WhatsApp"*.
   - Respaldo institucional explícito en pie de página (RUC de Compañía de Seguros y EPS, SBS).

---

## 7. Directrices de Aplicación para FIBO

Para el diseño del prototipo y landing de **FIBO**, esta Referencia 1 aporta los siguientes lineamientos:

1. **Qué adoptar de Pacífico Corporativo en FIBO:**
   - **El Cyan Oficial (`#0099CC`)**: Mantenerlo como color de anclaje de respaldo institucional ("Respaldado por Pacífico Seguros / Credicorp"). Da solvencia inmediata ante el jurado.
   - **El Magenta de Acción (`#EE2C70`)**: Excelente para acciones de activación clave o para destacar el microseguro pay-as-you-go cuando el usuario sube de nivel.
   - **El radio pildorado en botones (`border-radius: 1.5rem`)**: Coherente con la modernidad y calidez requerida.
   - **La micro-interacción de hover en tarjetas**: Resaltar con borde `#0099CC` y cambio de color en el indicador de acción.
   - **Los chips de estado y beneficio**: Usar el estilo `.green` (`background: #F4FFF9; border: 1px solid #007C2D; color: #007C2D`) para comunicar "Meta cumplida" o "Semana completada".

2. **Qué adaptar o evitar para la Generación Z:**
   - **Evitar la sobrecarga de texto legal y carruseles densos:** La Gen Z rechaza la fricción y la letra chica.
   - **Evitar el esquema corporativo frío:** Complementar el Cyan `#0099CC` con los tonos cálidos y orgánicos de salud preventiva y bienestar (que veremos en la Referencia 2).
