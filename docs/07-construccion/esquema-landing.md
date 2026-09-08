# Esquema de la landing page FIBO

> Wireframe en texto, sección por sección. Ver objetivo y métricas en [`PRD-landing.md`](./PRD-landing.md); ver paleta/tono en [`design-system.md`](./design-system.md).

## Estructura (una sola página, scroll vertical, mobile-first)

### 1. Hero
- Nombre "FIBO" + ícono de espiral (ver `design-system.md` §6).
- **Copy actualizado (08 Set. - tono Betterfly):**
  - Titular Two-Tone: *"Tus hábitos diarios,* **tu mejor respaldo"**.
  - Subtítulo: *"Una app que premia tu constancia. Suma pequeños hábitos de bolsillo, cuerpo y mente cada semana y desbloquea protección médica real, a tu ritmo y sin letra chica."*
  - Badge superior: *"Tu bienestar diario convertido en protección"*.
  - CTAs adaptados al flujo real de la app:
    - Principal: `"Comenzar gratis"` (`/ingresar?modo=registro`).
    - Secundario: `"Cómo funciona ↓"` (`#mecanismo`).

### 2. Por qué FIBO (comparación de valor, no queja institucional)
- Titular: *"Tu bienestar merece otra lógica"*.
- Bajada: *"Si tu estilo de vida es flexible, tu protección también debería serlo. Sin ataduras, sin trámites infinitos y sin pagar por adelantado por algo que no sabes cuándo vas a usar."*
- Comparativa visual positiva: "Los seguros de siempre" vs. "La experiencia FIBO" (autonomía, pausa sin penalidad, respaldo ganado con el día a día).

### 3. Cómo funciona (3 pasos simples inspirados en bienestar)
1. **Elige tus hábitos:** Acciones simples a tu ritmo (Bolsillo, Cuerpo, Mente). Sin wearables costosos ni trámites invasivos.
2. **Haz crecer tu Reserva:** Tu constancia suma valor como un fondo de bienestar. Cobertura activa desde el inicio.
3. **Protección cuando la necesitas:** Telemedicina, consultas y cobertura ante imprevistos respaldada por Pacífico Seguros.
- Incluye tarjeta explicativa de **Modo pausa anti-ansiedad**: si una semana no llegas, la cobertura se pausa intacta sin cobros ni penalidades.

### 4. Comunidad y respaldo de pares
- Badge: `X personas listas para cambiar las reglas`.
- Mensaje de pertenencia: *"Una comunidad de jóvenes construyendo un nuevo estándar de salud y respaldo en Perú. Recomendado de persona a persona."*

### 5. Formulario de registro / lista de espera
- Campos mínimos: nombre/alias + celular o correo.
- Al completar, generar el link único de referido (`?ref=<id>`) con invitación directa por WhatsApp y botón directo para `Probar la app ahora →`.

### 6. Cierre / footer
- Mención de FIBO como iniciativa para la Hackathon UCSUR–Pacífico Seguros × AWS.
- Enlace directo a Iniciar sesión y política de privacidad simple.

## Qué NO lleva esta landing

- No lleva el flujo de hábitos/Reserva — eso es el prototipo, no la landing (ver `README.md` de la carpeta, tabla comparativa).
- No lleva pricing ni mención de la microprima — a este nivel del funnel el gancho es 100% el hábito gratuito, no el modelo de pago (coherente con "valor antes que compromiso", `historias-usuario-y-validacion.md` §5.1).
