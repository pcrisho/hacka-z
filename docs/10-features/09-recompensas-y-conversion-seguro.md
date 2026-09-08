# Feature 09: Recompensas de Bienestar y Conversión a Microseguro (/recompensa)

> **Estado:** Implementado  
> **Ruta:** `app/app/(app)/recompensa/recompensa-view.tsx`  
> **Alineación:** Hallazgos de Mentoría (04 Set.) §3.2 — "La recompensa y el microseguro son una sola progresión integrada, no dos mecanismos paralelos. La recompensa gratuita gana el derecho a que se ofrezca el microseguro".

---

## 1. Fundamentos de UX y Psicología del Comportamiento

### 1.1. El Rol de la Recompensa en FIBO
Para la Generación Z, los seguros tradicionales son percibidos como productos lejanos, caros y llenos de fricción. FIBO invierte esta dinámica:
1. **Paso 1 (Gratuito):** El usuario realiza micro-hábitos que le aportan bienestar inmediato.
2. **Paso 2 (Recompensa Desbloqueada):** Al cumplir un umbral de constancia, desbloquea un beneficio no monetario tangible (contenido, suscripción mindfulness, sesión de telemedicina).
3. **Paso 3 (Conversión por Derecho Ganado):** En ese mismo espacio de gratificación, se le presenta la posibilidad de activar una cobertura médica accesible (S/ 9.90/mes vía Yape), pausable en cualquier momento sin penalidad.

---

## 2. Anatomía de la Pantalla /recompensa

```
+-------------------------------------------------------------+
|  [ ← Atrás ]               Recompensa                       |
+-------------------------------------------------------------+
|                                                             |
|  [ 🎁 RECOMPENSA DESBLOQUEADA ]                             |
|  ¡Felicidades, Camila! 🏆                                   |
|  Tu constancia de 5 días desbloqueó beneficios exclusivos.  |
|                                                             |
|  +-------------------------------------------------------+  |
|  |  🎟️ TICKET DIGITAL DE BENEFICIO                       |  |
|  |  1 Mes Gratis de App Mindfulness / Productividad      |  |
|  |  Suscripción valorizada en S/ 35.00                   |  |
|  |                                                       |  |
|  |  Código: [ FIBO-CALM-2026 ]         [ Copiar ]        |  |
|  |  [ Canjear beneficio ahora ↗ ]                        |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  +-------------------------------------------------------+  |
|  |  🛡️ DERECHO GANADO • PACÍFICO SEGUROS                 |  |
|  |  Tu Microseguro Pay-as-you-go                         |  |
|  |  Hasta S/ 15,000 en respaldo médico de emergencia.    |  |
|  |  - Tarifa joven: S/ 9.90 / mes vía Yape               |  |
|  |  - Sin contratos forzosos: páusalo cuando quieras.    |  |
|  |                                                       |  |
|  |  [ Configurar mi microseguro con Yape ⚡ ]            |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  CAMINO DE NIVELES FIBO                                     |
|  [✓] Nivel 1: Contenido e insignia                          |
|  [●] Nivel 2: Suscripción digital (Actual)                  |
|  [○] Nivel 3: Sesión 1 a 1 de psicología con Dr. Online     |
+-------------------------------------------------------------+
```

---

## 3. Especificación de Componentes

### 3.1. Ticket Digital de Beneficio (Voucher)
- Formato con corte visual tipo cupón perforado (`border-dashed`).
- Código promocional dinámico con botón de copiado rápido y feedback visual (`Check` verde).
- Botón de canje directo con animación de confetti.

### 3.2. Tarjeta de Conversión al Microseguro
- Lenguaje sin tecnicismos ni letra chica.
- Explica los tres pilares del seguro:
  - Respaldo de emergencia tangible (hasta S/ 15,000).
  - Cobro semanal o mensual ligero (S/ 9.90) integrado con Yape.
  - Pausa libre sin castigos ni pérdida de puntos de Reserva acumulados.

### 3.3. Camino Escalonado de Progresión
- Mapa claro de los 3 niveles para fomentar retención a mediano plazo:
  - **Nivel 1 (1 pt):** Insignia de honor y guías preventivas.
  - **Nivel 2 (3 pts):** Suscripción digital de bienestar.
  - **Nivel 3 (6 pts):** Sesión clínica individual con psicólogo o nutricionista en Dr. Online.
