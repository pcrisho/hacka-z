import fs from "fs"
import { execSync } from "child_process"
import path from "path"

const ICONS_DIR = path.resolve("public/icons")
const PUBLIC_DIR = path.resolve("public")

if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true })
}

// 1. Standard App Icon SVG (512x512)
const standardIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#001A23"/>
      <stop offset="100%" stop-color="#04262F"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="#0099CC" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0099CC" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F5CE7A"/>
      <stop offset="50%" stop-color="#D4A24C"/>
      <stop offset="100%" stop-color="#B88334"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#35DAFF"/>
      <stop offset="50%" stop-color="#0099CC"/>
      <stop offset="100%" stop-color="#004C66"/>
    </linearGradient>
    <filter id="subtleDrop" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="512" height="512" rx="116" fill="url(#bgGrad)"/>
  <circle cx="256" cy="240" r="180" fill="url(#glow)"/>

  <!-- Border hint -->
  <rect width="508" height="508" x="2" y="2" rx="114" fill="none" stroke="#0099CC" stroke-opacity="0.2" stroke-width="4"/>

  <!-- Brand Spiral Icon -->
  <g transform="translate(256, 236) scale(15) translate(-12, -10)" filter="url(#subtleDrop)">
    <!-- Inner Golden Arc -->
    <path
      d="M12 2C7 2 4 5 4 9c0 3 2 5 5 5"
      stroke="url(#goldGrad)"
      stroke-width="2.3"
      stroke-linecap="round"
    />
    <!-- Outer Cyan Arc -->
    <path
      d="M12 2c5 0 8 3 8 7 0 5-4 8-9 8-3.5 0-6-2-6-5"
      stroke="url(#cyanGrad)"
      stroke-width="2.3"
      stroke-linecap="round"
      stroke-opacity="0.9"
    />
  </g>

  <!-- Label FIBO at bottom -->
  <text
    x="256"
    y="440"
    text-anchor="middle"
    font-family="system-ui, -apple-system, sans-serif"
    font-size="44"
    font-weight="900"
    letter-spacing="4"
    fill="#FFFFFF"
  >FIBO</text>
</svg>`

// 2. Maskable Icon SVG (512x512, full bleed background, icon strictly in safe zone)
const maskableIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGradMask" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#001A23"/>
      <stop offset="100%" stop-color="#04262F"/>
    </linearGradient>
    <radialGradient id="glowMask" cx="50%" cy="50%" r="40%">
      <stop offset="0%" stop-color="#0099CC" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#0099CC" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="goldGradMask" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F5CE7A"/>
      <stop offset="50%" stop-color="#D4A24C"/>
      <stop offset="100%" stop-color="#B88334"/>
    </linearGradient>
    <linearGradient id="cyanGradMask" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#35DAFF"/>
      <stop offset="50%" stop-color="#0099CC"/>
      <stop offset="100%" stop-color="#004C66"/>
    </linearGradient>
  </defs>

  <!-- Full bleed background without border-radius for maskable icons -->
  <rect width="512" height="512" fill="url(#bgGradMask)"/>
  <circle cx="256" cy="256" r="160" fill="url(#glowMask)"/>

  <!-- Centered strictly within 60% safe area circle (radius 153px) -->
  <g transform="translate(256, 230) scale(12) translate(-12, -10)">
    <path
      d="M12 2C7 2 4 5 4 9c0 3 2 5 5 5"
      stroke="url(#goldGradMask)"
      stroke-width="2.4"
      stroke-linecap="round"
    />
    <path
      d="M12 2c5 0 8 3 8 7 0 5-4 8-9 8-3.5 0-6-2-6-5"
      stroke="url(#cyanGradMask)"
      stroke-width="2.4"
      stroke-linecap="round"
      stroke-opacity="0.9"
    />
  </g>

  <text
    x="256"
    y="384"
    text-anchor="middle"
    font-family="system-ui, -apple-system, sans-serif"
    font-size="34"
    font-weight="900"
    letter-spacing="3"
    fill="#FFFFFF"
  >FIBO</text>
</svg>`

// 3. Apple Touch Icon SVG (180x180)
const appleIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <defs>
    <linearGradient id="bgGradApple" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#001A23"/>
      <stop offset="100%" stop-color="#04262F"/>
    </linearGradient>
    <linearGradient id="goldGradApple" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F5CE7A"/>
      <stop offset="100%" stop-color="#D4A24C"/>
    </linearGradient>
    <linearGradient id="cyanGradApple" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#35DAFF"/>
      <stop offset="100%" stop-color="#0099CC"/>
    </linearGradient>
  </defs>

  <rect width="180" height="180" fill="url(#bgGradApple)"/>

  <g transform="translate(90, 84) scale(5.4) translate(-12, -10)">
    <path
      d="M12 2C7 2 4 5 4 9c0 3 2 5 5 5"
      stroke="url(#goldGradApple)"
      stroke-width="2.4"
      stroke-linecap="round"
    />
    <path
      d="M12 2c5 0 8 3 8 7 0 5-4 8-9 8-3.5 0-6-2-6-5"
      stroke="url(#cyanGradApple)"
      stroke-width="2.4"
      stroke-linecap="round"
      stroke-opacity="0.9"
    />
  </g>

  <text
    x="90"
    y="152"
    text-anchor="middle"
    font-family="system-ui, -apple-system, sans-serif"
    font-size="16"
    font-weight="900"
    letter-spacing="2"
    fill="#FFFFFF"
  >FIBO</text>
</svg>`

// 4. Open Graph Image SVG (1200x630)
const ogImageSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgOg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#00141C"/>
      <stop offset="50%" stop-color="#001F2B"/>
      <stop offset="100%" stop-color="#04262F"/>
    </linearGradient>
    <radialGradient id="ogGlow1" cx="20%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#0099CC" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0099CC" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="ogGlow2" cx="80%" cy="70%" r="50%">
      <stop offset="0%" stop-color="#D4A24C" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#D4A24C" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="goldOg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F5CE7A"/>
      <stop offset="50%" stop-color="#D4A24C"/>
      <stop offset="100%" stop-color="#B88334"/>
    </linearGradient>
    <linearGradient id="cyanOg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#35DAFF"/>
      <stop offset="50%" stop-color="#0099CC"/>
      <stop offset="100%" stop-color="#004C66"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.02"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgOg)"/>
  <rect width="1200" height="630" fill="url(#ogGlow1)"/>
  <rect width="1200" height="630" fill="url(#ogGlow2)"/>

  <!-- Subtle grid lines -->
  <g stroke="#0099CC" stroke-opacity="0.06" stroke-width="1">
    <line x1="100" y1="0" x2="100" y2="630"/>
    <line x1="300" y1="0" x2="300" y2="630"/>
    <line x1="500" y1="0" x2="500" y2="630"/>
    <line x1="700" y1="0" x2="700" y2="630"/>
    <line x1="900" y1="0" x2="900" y2="630"/>
    <line x1="1100" y1="0" x2="1100" y2="630"/>
    <line x1="0" y1="150" x2="1200" y2="150"/>
    <line x1="0" y1="315" x2="1200" y2="315"/>
    <line x1="0" y1="480" x2="1200" y2="480"/>
  </g>

  <!-- Left Content Container -->
  <g transform="translate(100, 100)">
    <!-- Header Badge -->
    <rect width="360" height="42" rx="21" fill="url(#cardGrad)" stroke="#0099CC" stroke-opacity="0.3" stroke-width="1.5"/>
    <circle cx="24" cy="21" r="6" fill="#01A355"/>
    <text x="40" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#35DAFF" letter-spacing="1">
      HACKATHON PACÍFICO × AWS 2026
    </text>

    <!-- Main Title with FIBO Wordmark -->
    <g transform="translate(0, 95)">
      <!-- Spiral brand mark in header -->
      <g transform="translate(0, -5) scale(2.8) translate(-12, -10)">
        <path d="M12 2C7 2 4 5 4 9c0 3 2 5 5 5" stroke="url(#goldOg)" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M12 2c5 0 8 3 8 7 0 5-4 8-9 8-3.5 0-6-2-6-5" stroke="url(#cyanOg)" stroke-width="2.4" stroke-linecap="round" stroke-opacity="0.9"/>
      </g>
      <text x="75" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" fill="#FFFFFF" letter-spacing="-1">
        FIBO
      </text>
    </g>

    <!-- Headline -->
    <text x="0" y="195" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="800" fill="#FFFFFF" letter-spacing="-1.5">
      Micro-hábitos que respaldan
    </text>
    <text x="0" y="250" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="800" fill="#35DAFF" letter-spacing="-1.5">
      tu bienestar integral.
    </text>

    <!-- Subtitle -->
    <text x="0" y="305" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#A0B5BE" letter-spacing="0.2">
      Convierte tu constancia diaria en una Reserva de Bienestar
    </text>
    <text x="0" y="333" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#A0B5BE" letter-spacing="0.2">
      y microseguros on-demand con Pacífico Seguros.
    </text>

    <!-- 3 Pillars Chips -->
    <g transform="translate(0, 375)">
      <!-- Bolsillo -->
      <rect width="140" height="38" rx="19" fill="#04262F" stroke="#D4A24C" stroke-opacity="0.4" stroke-width="1.5"/>
      <text x="70" y="24" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#F5CE7A">
        🪙 Bolsillo
      </text>

      <!-- Cuerpo -->
      <rect x="152" width="135" height="38" rx="19" fill="#04262F" stroke="#0099CC" stroke-opacity="0.4" stroke-width="1.5"/>
      <text x="219" y="24" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#35DAFF">
        🏃 Cuerpo
      </text>

      <!-- Mente -->
      <rect x="299" width="130" height="38" rx="19" fill="#04262F" stroke="#01A355" stroke-opacity="0.4" stroke-width="1.5"/>
      <text x="364" y="24" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#65F9CF">
        🧠 Mente
      </text>
    </g>
  </g>

  <!-- Right Visual Feature: Floating Phone Mockup preview -->
  <g transform="translate(760, 60)">
    <!-- Decorative Glow Behind Card -->
    <circle cx="180" cy="250" r="170" fill="url(#ogGlow1)"/>

    <!-- App Card Container -->
    <rect width="340" height="500" rx="36" fill="#0B1F28" stroke="#0099CC" stroke-opacity="0.35" stroke-width="2" filter="url(#subtleDrop)"/>

    <!-- Top status bar & brand -->
    <g transform="translate(24, 30)">
      <circle cx="12" cy="12" r="10" fill="#0099CC" fill-opacity="0.2"/>
      <circle cx="12" cy="12" r="5" fill="#35DAFF"/>
      <text x="32" y="16" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF" letter-spacing="1">
        FIBO APP PWA
      </text>
      <rect x="220" y="2" width="70" height="20" rx="10" fill="#01A355" fill-opacity="0.2"/>
      <text x="255" y="16" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#65F9CF">
        EN VIVO
      </text>
    </g>

    <!-- Big Circular Ring -->
    <g transform="translate(170, 190)">
      <circle r="75" fill="none" stroke="#001A23" stroke-width="16"/>
      <circle r="75" fill="none" stroke="#0099CC" stroke-width="16" stroke-dasharray="471" stroke-dashoffset="120" stroke-linecap="round"/>
      <circle r="60" fill="none" stroke="#D4A24C" stroke-width="10" stroke-dasharray="377" stroke-dashoffset="150" stroke-linecap="round"/>
      <text y="-8" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF">
        S/ 12,500
      </text>
      <text y="16" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="#A0B5BE">
        Reserva Activa
      </text>
      <text y="32" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#D4A24C">
        Nivel Plata ✦
      </text>
    </g>

    <!-- Habit Mini Card 1 -->
    <g transform="translate(24, 300)">
      <rect width="292" height="54" rx="16" fill="#04262F" stroke="#E7EBED" stroke-opacity="0.08"/>
      <rect x="14" y="12" width="30" height="30" rx="8" fill="#D4A24C" fill-opacity="0.2"/>
      <text x="29" y="32" text-anchor="middle" font-size="16">🪙</text>
      <text x="56" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Separar S/ 5 a la alcancía</text>
      <text x="56" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="500" fill="#A0B5BE">Hoy · +1 pt Reserva</text>
      <circle cx="266" cy="27" r="10" fill="#01A355"/>
      <path d="M262 27l3 3 5-6" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round"/>
    </g>

    <!-- Habit Mini Card 2 -->
    <g transform="translate(24, 365)">
      <rect width="292" height="54" rx="16" fill="#04262F" stroke="#E7EBED" stroke-opacity="0.08"/>
      <rect x="14" y="12" width="30" height="30" rx="8" fill="#0099CC" fill-opacity="0.2"/>
      <text x="29" y="32" text-anchor="middle" font-size="16">🏃</text>
      <text x="56" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">30 min caminata activa</text>
      <text x="56" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="500" fill="#A0B5BE">Hoy · +1 pt Reserva</text>
      <circle cx="266" cy="27" r="10" fill="#01A355"/>
      <path d="M262 27l3 3 5-6" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round"/>
    </g>

    <!-- Bottom prompt -->
    <g transform="translate(24, 435)">
      <rect width="292" height="42" rx="21" fill="#0099CC"/>
      <text x="146" y="26" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF" letter-spacing="0.5">
        🛡️ Racha Protegida (4 días)
      </text>
    </g>
  </g>
</svg>`

fs.writeFileSync(path.join(ICONS_DIR, "standard.svg"), standardIconSvg)
fs.writeFileSync(path.join(ICONS_DIR, "maskable.svg"), maskableIconSvg)
fs.writeFileSync(path.join(ICONS_DIR, "apple.svg"), appleIconSvg)
fs.writeFileSync(path.join(PUBLIC_DIR, "og-image.svg"), ogImageSvg)

console.log("Generating PNG assets with rsvg-convert...")

execSync(`rsvg-convert -w 192 -h 192 "${path.join(ICONS_DIR, "standard.svg")}" -o "${path.join(ICONS_DIR, "icon-192.png")}"`)
execSync(`rsvg-convert -w 512 -h 512 "${path.join(ICONS_DIR, "standard.svg")}" -o "${path.join(ICONS_DIR, "icon-512.png")}"`)

execSync(`rsvg-convert -w 192 -h 192 "${path.join(ICONS_DIR, "maskable.svg")}" -o "${path.join(ICONS_DIR, "icon-maskable-192.png")}"`)
execSync(`rsvg-convert -w 512 -h 512 "${path.join(ICONS_DIR, "maskable.svg")}" -o "${path.join(ICONS_DIR, "icon-maskable-512.png")}"`)

execSync(`rsvg-convert -w 180 -h 180 "${path.join(ICONS_DIR, "apple.svg")}" -o "${path.join(ICONS_DIR, "apple-touch-icon.png")}"`)
execSync(`rsvg-convert -w 32 -h 32 "${path.join(ICONS_DIR, "standard.svg")}" -o "${path.join(ICONS_DIR, "favicon-32x32.png")}"`)
execSync(`rsvg-convert -w 16 -h 16 "${path.join(ICONS_DIR, "standard.svg")}" -o "${path.join(ICONS_DIR, "favicon-16x16.png")}"`)

execSync(`rsvg-convert -w 1200 -h 630 "${path.join(PUBLIC_DIR, "og-image.svg")}" -o "${path.join(PUBLIC_DIR, "og-image.png")}"`)

// Also place copy of apple-touch-icon in public/apple-touch-icon.png for iOS root crawler fallback
fs.copyFileSync(path.join(ICONS_DIR, "apple-touch-icon.png"), path.join(PUBLIC_DIR, "apple-touch-icon.png"))

console.log("Assets generated successfully!")
