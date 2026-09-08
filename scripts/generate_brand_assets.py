import os
import subprocess

ASSETS_DIR = "docs/07-construccion/assets"
os.makedirs(ASSETS_DIR, exist_ok=True)

# 1. Isotipo (Símbolo puro transparente)
isotipo_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCE3A6"/>
      <stop offset="45%" stop-color="#D4A24C"/>
      <stop offset="100%" stop-color="#B88334"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#35DAFF"/>
      <stop offset="50%" stop-color="#0099CC"/>
      <stop offset="100%" stop-color="#004C66"/>
    </linearGradient>
    <radialGradient id="glow" cx="45%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#0099CC" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#0099CC" stop-opacity="0"/>
    </radialGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#001A23" flood-opacity="0.16"/>
    </filter>
  </defs>

  <circle cx="256" cy="256" r="230" fill="url(#glow)"/>

  <g transform="translate(256, 256) scale(21) translate(-11.5, -9.5)" filter="url(#softShadow)">
    <!-- Inner Golden Arc of Fibonacci growth -->
    <path
      d="M12 2C7 2 4 5 4 9c0 3 2 5 5 5"
      stroke="url(#goldGrad)"
      stroke-width="2.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <!-- Outer Cyan Arc of Protection and Compound Expansion -->
    <path
      d="M12 2c5 0 8 3 8 7 0 5-4 8-9 8-3.5 0-6-2-6-5"
      stroke="url(#cyanGrad)"
      stroke-width="2.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      opacity="0.95"
      fill="none"
    />
    <!-- Golden Genesis Point / Hábito Semilla -->
    <circle cx="9" cy="14" r="1.3" fill="url(#goldGrad)"/>
  </g>
</svg>"""

# 2. Isotipo con Contenedor / Badge Squircle (App Icon Style)
isotipo_badge_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#001822"/>
      <stop offset="50%" stop-color="#002633"/>
      <stop offset="100%" stop-color="#04323E"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCE3A6"/>
      <stop offset="45%" stop-color="#D4A24C"/>
      <stop offset="100%" stop-color="#B88334"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#35DAFF"/>
      <stop offset="50%" stop-color="#0099CC"/>
      <stop offset="100%" stop-color="#004C66"/>
    </linearGradient>
    <radialGradient id="badgeGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#0099CC" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="#0099CC" stop-opacity="0"/>
    </radialGradient>
    <filter id="iconShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000000" flood-opacity="0.45"/>
    </filter>
  </defs>

  <!-- Squircle Base (iOS / Modern Style) -->
  <rect width="512" height="512" rx="118" fill="url(#bgGrad)"/>
  <circle cx="256" cy="240" r="200" fill="url(#badgeGlow)"/>
  <rect width="506" height="506" x="3" y="3" rx="115" fill="none" stroke="#0099CC" stroke-opacity="0.25" stroke-width="3"/>

  <!-- Golden Spiral Mark -->
  <g transform="translate(256, 256) scale(18) translate(-11.5, -9.5)" filter="url(#iconShadow)">
    <path
      d="M12 2C7 2 4 5 4 9c0 3 2 5 5 5"
      stroke="url(#goldGrad)"
      stroke-width="2.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <path
      d="M12 2c5 0 8 3 8 7 0 5-4 8-9 8-3.5 0-6-2-6-5"
      stroke="url(#cyanGrad)"
      stroke-width="2.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      opacity="0.95"
      fill="none"
    />
    <circle cx="9" cy="14" r="1.3" fill="url(#goldGrad)"/>
  </g>
</svg>"""

# 3. Logotipo Light (Wordmark sobre fondo claro)
logotipo_light_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 180" width="600" height="180">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&amp;display=swap');
      .wordmark {
        font-family: 'Bricolage Grotesque', 'Poppins', -apple-system, sans-serif;
        font-weight: 800;
        font-size: 130px;
        letter-spacing: -0.02em;
      }
    </style>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCE3A6"/>
      <stop offset="50%" stop-color="#D4A24C"/>
      <stop offset="100%" stop-color="#B88334"/>
    </linearGradient>
  </defs>
  <text x="30" y="138" class="wordmark">
    <tspan fill="#0099CC">F</tspan><tspan fill="url(#goldGrad)">I</tspan><tspan fill="#0099CC">BO</tspan>
  </text>
</svg>"""

# 4. Logotipo Dark (Wordmark sobre fondo oscuro)
logotipo_dark_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 180" width="600" height="180">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&amp;display=swap');
      .wordmark {
        font-family: 'Bricolage Grotesque', 'Poppins', -apple-system, sans-serif;
        font-weight: 800;
        font-size: 130px;
        letter-spacing: -0.02em;
      }
    </style>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCE3A6"/>
      <stop offset="50%" stop-color="#D4A24C"/>
      <stop offset="100%" stop-color="#B88334"/>
    </linearGradient>
  </defs>
  <text x="30" y="138" class="wordmark">
    <tspan fill="#FFFFFF">F</tspan><tspan fill="url(#goldGrad)">I</tspan><tspan fill="#FFFFFF">BO</tspan>
  </text>
</svg>"""

# 5. Imagotipo Horizontal Light (Isotipo + Wordmark + Subtítulo Oficial)
imagotipo_h_light_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 220" width="880" height="220">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&amp;family=Geist:wght@500;700&amp;display=swap');
      .wm {
        font-family: 'Bricolage Grotesque', 'Poppins', -apple-system, sans-serif;
        font-weight: 800;
        font-size: 104px;
        letter-spacing: -0.02em;
      }
      .tag {
        font-family: 'Geist', -apple-system, sans-serif;
        font-weight: 600;
        font-size: 19px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        fill: #65737B;
      }
    </style>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCE3A6"/>
      <stop offset="50%" stop-color="#D4A24C"/>
      <stop offset="100%" stop-color="#B88334"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#35DAFF"/>
      <stop offset="50%" stop-color="#0099CC"/>
      <stop offset="100%" stop-color="#004C66"/>
    </linearGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#001A23" flood-opacity="0.10"/>
    </filter>
  </defs>

  <!-- Isotipo Spiral Icon -->
  <g transform="translate(100, 105) scale(8.8) translate(-11.5, -9.5)" filter="url(#softGlow)">
    <path
      d="M12 2C7 2 4 5 4 9c0 3 2 5 5 5"
      stroke="url(#goldGrad)"
      stroke-width="2.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <path
      d="M12 2c5 0 8 3 8 7 0 5-4 8-9 8-3.5 0-6-2-6-5"
      stroke="url(#cyanGrad)"
      stroke-width="2.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      opacity="0.95"
      fill="none"
    />
    <circle cx="9" cy="14" r="1.3" fill="url(#goldGrad)"/>
  </g>

  <!-- Divider line -->
  <line x1="205" y1="40" x2="205" y2="175" stroke="#E7EBED" stroke-width="2"/>

  <!-- Wordmark & Tagline -->
  <g transform="translate(235, 0)">
    <text x="0" y="120" class="wm">
      <tspan fill="#0099CC">F</tspan><tspan fill="url(#goldGrad)">I</tspan><tspan fill="#0099CC">BO</tspan>
    </text>
    <text x="5" y="156" class="tag">Crece en espiral · Pacífico Seguros × AWS</text>
  </g>
</svg>"""

# 6. Imagotipo Horizontal Dark (Isotipo + Wordmark para fondos oscuros)
imagotipo_h_dark_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 220" width="880" height="220">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&amp;family=Geist:wght@500;700&amp;display=swap');
      .wm {
        font-family: 'Bricolage Grotesque', 'Poppins', -apple-system, sans-serif;
        font-weight: 800;
        font-size: 104px;
        letter-spacing: -0.02em;
      }
      .tag {
        font-family: 'Geist', -apple-system, sans-serif;
        font-weight: 600;
        font-size: 19px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        fill: #8FC6D6;
      }
    </style>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCE3A6"/>
      <stop offset="50%" stop-color="#D4A24C"/>
      <stop offset="100%" stop-color="#B88334"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#35DAFF"/>
      <stop offset="50%" stop-color="#0099CC"/>
      <stop offset="100%" stop-color="#004C66"/>
    </linearGradient>
  </defs>

  <!-- Isotipo Spiral Icon -->
  <g transform="translate(100, 105) scale(8.8) translate(-11.5, -9.5)">
    <path
      d="M12 2C7 2 4 5 4 9c0 3 2 5 5 5"
      stroke="url(#goldGrad)"
      stroke-width="2.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <path
      d="M12 2c5 0 8 3 8 7 0 5-4 8-9 8-3.5 0-6-2-6-5"
      stroke="url(#cyanGrad)"
      stroke-width="2.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      opacity="0.95"
      fill="none"
    />
    <circle cx="9" cy="14" r="1.3" fill="url(#goldGrad)"/>
  </g>

  <!-- Divider line -->
  <line x1="205" y1="40" x2="205" y2="175" stroke="#0F3F49" stroke-width="2"/>

  <!-- Wordmark & Tagline -->
  <g transform="translate(235, 0)">
    <text x="0" y="120" class="wm">
      <tspan fill="#FFFFFF">F</tspan><tspan fill="url(#goldGrad)">I</tspan><tspan fill="#FFFFFF">BO</tspan>
    </text>
    <text x="5" y="156" class="tag">Crece en espiral · Pacífico Seguros × AWS</text>
  </g>
</svg>"""

# 7. Imagotipo Vertical (Centrado con Tagline Completo)
imagotipo_v_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 640" width="600" height="640">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&amp;family=Geist:wght@500;600;700&amp;display=swap');
      .wm {
        font-family: 'Bricolage Grotesque', 'Poppins', -apple-system, sans-serif;
        font-weight: 800;
        font-size: 115px;
        letter-spacing: -0.02em;
        text-anchor: middle;
      }
      .tag-main {
        font-family: 'Geist', -apple-system, sans-serif;
        font-weight: 600;
        font-size: 21px;
        text-anchor: middle;
        fill: #2F373C;
      }
      .subtag {
        font-family: 'Geist', -apple-system, sans-serif;
        font-weight: 600;
        font-size: 15px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        text-anchor: middle;
        fill: #0099CC;
      }
    </style>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCE3A6"/>
      <stop offset="50%" stop-color="#D4A24C"/>
      <stop offset="100%" stop-color="#B88334"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#35DAFF"/>
      <stop offset="50%" stop-color="#0099CC"/>
      <stop offset="100%" stop-color="#004C66"/>
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#001A23" flood-opacity="0.14"/>
    </filter>
  </defs>

  <!-- Large Centered Spiral Icon -->
  <g transform="translate(300, 200) scale(15) translate(-11.5, -9.5)" filter="url(#softShadow)">
    <path
      d="M12 2C7 2 4 5 4 9c0 3 2 5 5 5"
      stroke="url(#goldGrad)"
      stroke-width="2.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <path
      d="M12 2c5 0 8 3 8 7 0 5-4 8-9 8-3.5 0-6-2-6-5"
      stroke="url(#cyanGrad)"
      stroke-width="2.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      opacity="0.95"
      fill="none"
    />
    <circle cx="9" cy="14" r="1.3" fill="url(#goldGrad)"/>
  </g>

  <!-- Wordmark FIBO -->
  <text x="300" y="450" class="wm">
    <tspan fill="#0099CC">F</tspan><tspan fill="url(#goldGrad)">I</tspan><tspan fill="#0099CC">BO</tspan>
  </text>

  <!-- Tagline -->
  <text x="300" y="515" class="tag-main">Cada hábito suma al siguiente. Tu Reserva crece en espiral.</text>
  <text x="300" y="555" class="subtag">Pacífico Seguros × AWS · Hackathon 2026</text>
</svg>"""

files_to_generate = [
    ("fibo-isotipo.svg", isotipo_svg),
    ("fibo-isotipo-badge.svg", isotipo_badge_svg),
    ("fibo-logotipo-light.svg", logotipo_light_svg),
    ("fibo-logotipo-dark.svg", logotipo_dark_svg),
    ("fibo-imagotipo-horizontal-light.svg", imagotipo_h_light_svg),
    ("fibo-imagotipo-horizontal-dark.svg", imagotipo_h_dark_svg),
    ("fibo-imagotipo-vertical.svg", imagotipo_v_svg),
]

for filename, content in files_to_generate:
    svg_path = os.path.join(ASSETS_DIR, filename)
    with open(svg_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated SVG: {svg_path}")

    # Generate PNG with rsvg-convert
    png_name = filename.replace(".svg", ".png")
    png_path = os.path.join(ASSETS_DIR, png_name)
    subprocess.run(["rsvg-convert", "-o", png_path, svg_path], check=True)
    print(f"Rendered PNG:  {png_path}")

    # Also generate high-resolution versions
    if "isotipo" in filename:
        png_hi = os.path.join(ASSETS_DIR, filename.replace(".svg", "@2x.png"))
        subprocess.run(["rsvg-convert", "-w", "1024", "-h", "1024", "-o", png_hi, svg_path], check=True)
        print(f"Rendered PNG @2x: {png_hi}")
    elif "imagotipo" in filename:
        png_hi = os.path.join(ASSETS_DIR, filename.replace(".svg", "@2x.png"))
        subprocess.run(["rsvg-convert", "-z", "2", "-o", png_hi, svg_path], check=True)
        print(f"Rendered PNG @2x: {png_hi}")

print("\nAll brand assets successfully generated!")
