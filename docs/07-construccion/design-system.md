# Design system FIBO — propuesta inicial (04 Set. 2026)

> **Esto no es una decisión de campo, es una propuesta de trabajo.** No hay validación visual con usuarios todavía — se define ahora para que la construcción del prototipo y la landing no se detengan por falta de dirección visual. Si en la mentoría o en campo surge una razón fuerte para cambiar algo, se ajusta sin problema (nada aquí es "sustentación" o "GTM", es solo forma).

## 1. Principio rector

La identidad visual debe **mostrar** el concepto de FIBO (crecimiento compuesto por hábitos, espiral de Fibonacci — `02-ideacion/historias-usuario-y-validacion.md` §0), no solo nombrarlo. Si la Reserva de Bienestar no se *ve* crecer de forma orgánica, se pierde el momento más fuerte del pitch (`03-mvp/alcance-producto.md` §5: "debe sentirse real e interactivo").

Segundo principio: el segmento (`PLAN-TRABAJO.md` §6) rechaza letra chica, publicidad disfrazada y complejidad — el diseño debe ser **simple y cálido**, no corporativo/técnico. Es salud y bienestar, no una app de banca tradicional.

## 2. Paleta de color (propuesta)

Evitar el azul corporativo típico de seguros (asociado a lo que el segmento ya desconfía) y evitar también verde-fintech genérico. Dirección propuesta: tonos cálidos de crecimiento orgánico.

| Uso | Color | Justificación |
|---|---|---|
| Primario (marca, CTA principal) | Verde salvia / verde bienestar (`#4A7C59` aprox.) | Salud + calma, distinto del azul-seguro genérico |
| Acento (crecimiento, Reserva, espiral) | Dorado/ámbar suave (`#D4A24C` aprox.) | Referencia visual directa a la espiral de Fibonacci (proporción áurea) sin ser literal ni cursi |
| Fondo | Blanco cálido / crema (`#FAF7F2`) | Evita el blanco frío de apps financieras tradicionales |
| Texto principal | Gris carbón, no negro puro (`#2B2B2B`) | Suaviza el tono, más cercano a "acompañar" que a "informar" |
| Alerta/pausa (top-up pausado) | Terracota suave (`#C97B5B`) | Comunica pausa sin sentirse como error/penalidad — coherente con "se pausa sin penalidad" |

Estos son valores de partida, no hex definitivos — ajustar en la primera pasada de construcción según contraste/accesibilidad real en pantalla.

## 3. Tipografía (propuesta)

- **Titulares:** una sans-serif redondeada, cercana (ej. tipo Nunito, Poppins) — refuerza cercanía, no institucionalidad.
- **Cuerpo/UI:** una sans-serif de alta legibilidad en pantallas chicas (ej. Inter, system-ui) — prioridad es legibilidad mobile sobre personalidad.
- Evitar serif — se asocia a documento legal/letra chica, exactamente lo que el segmento rechaza (insight oficial).

## 4. Tono de voz

- Directo, sin jerga de seguros ("prima", "siniestro", "carencia" se traducen a lenguaje simple en toda la UI — ej. "pausa", "algo pasó", "tu Reserva").
- Nunca alarmista. El producto acompaña, no asusta.
- Primera persona/cercana del agente FIBO ("te ayudo a...", no "el sistema procesará su solicitud").
- Nunca lenguaje de descuento/oferta ("¡Gana!", "¡Aprovecha!") — coherente con el rechazo explícito a descuentos disfrazados (Plot Twist oficial).

## 5. Componentes clave (los que importan para la demo)

| Componente | Por qué es prioritario |
|---|---|
| **Espiral/anillo de progreso de la Reserva** | Es el componente más importante de todo el prototipo — si esto no comunica crecimiento de forma visual e inmediata, se pierde el corazón del pitch. Preferible una espiral o anillo que crece por nivel, no una barra de progreso genérica de fitness-app |
| **Tarjeta de hábito** (3 hábitos) | Debe mostrar claramente: estado (hecho/pendiente esta semana), y qué aporta a la Reserva al completarse |
| **Tarjeta de recompensa por nivel** | Debe distinguir visualmente los 3 niveles (bajo/medio/alto, `alcance-producto.md` §3) sin parecer una tabla de precios |
| **Burbuja de chat del agente FIBO** | Debe sentirse conversacional y cálida, no como un formulario con pasos numerados |
| **Toggle de top-up (activar/pausar)** | Debe comunicar explícitamente "sin penalidad" al pausar — es un diferencial de producto, no solo un switch on/off |

## 6. Qué queda fuera de esta versión

- Logotipo final / lockup de marca — para el hackathon alcanza con un tratamiento tipográfico simple del nombre "FIBO" + el ícono de espiral; no es necesario un proceso de branding completo.
- Ilustraciones custom — usar formas geométricas simples (círculos, espirales) antes que invertir tiempo en ilustración original.
- Modo oscuro — no es prioridad para una demo de 3 minutos.
