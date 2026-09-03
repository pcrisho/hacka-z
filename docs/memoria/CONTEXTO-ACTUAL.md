# Contexto actual del proyecto

> **Léeme primero si eres un agente nuevo entrando a este repo.** Este archivo se **reescribe** cada sesión de trabajo para reflejar el estado más reciente — es una fotografía del presente, no un historial. Para ver cómo llegamos aquí y por qué cambiaron las decisiones, ver `bitacora/` (esa sí es append-only, nunca se reescribe).
>
> Última actualización: 03 Set. 2026 (día 3 de 8 del sprint).

## Qué es esto

Equipo de 3 personas (Roberto Crisóstomo — líder, Franco Chávez, Israel Manrique) participando en la Hackathon UCSUR – Pacífico Seguros × AWS: "El futuro de los seguros para la Generación Z" (Ciclo 2026-2). Repo de documentación estratégica — no hay código de producto todavía. Fuente de verdad completa en `AGENTS.md` (leer después de este archivo).

## Dónde estamos en el sprint

Día 3 de 8 (`PLAN-TRABAJO.md` §3). Fase Descubrir→Definir→Idear ya avanzada; falta cerrar recolección de campo (encuesta + entrevistas 1:1) antes de la mentoría del 04 Set.

## Decisiones ya cerradas — no reabrir salvo que el campo las contradiga

| Decisión | Resumen | Detalle |
|---|---|---|
| Arquetipo | Guardián + Estudiante/Primer Empleo con Ansiedad Financiera | `PLAN-TRABAJO.md` §6 |
| MVP | Web app / prototipo clicable, un solo flujo crítico | `PLAN-TRABAJO.md` §5.1, alcance detallado en `03-mvp/alcance-producto.md` |
| Research de campo | Encuesta digital + entrevistas 1:1 en paralelo, contactos reales del equipo | `PLAN-TRABAJO.md` §5.2 |
| Roles | Por fase, liderazgo rotativo, especialización desde día 5 | `00-bases/equipo.md` |
| Modelo de negocio | 3 capas: gratuita (adquisición) + microprima pay-as-you-go (ingreso directo) + conversión a productos tradicionales de Pacífico (motor real de rentabilidad, jugada de portafolio/marca, no margen por póliza) | `04-gtm/modelo-negocio-y-viabilidad.md` |

## El territorio de solución (resumen)

Producto de bienestar financiero + salud/salud mental: micro-hábitos semanales (3, acotados: ahorro chico, actividad física, práctica breve de bienestar mental) que hacen crecer una "Reserva de Bienestar" — cobertura base gratuita, sin descuentos (recompensas no-monetarias). Top-ups pay-as-you-go pausables para riesgos puntuales. Vive embebido en Yape. Nombre de trabajo: **"Pacto"** (provisional, no decidido). Detalle completo, historias de usuario (Camila, Diego) y guion de pitch en `02-ideacion/`.

## Hallazgos de research que más pesan

1. Pacífico es 1° en salud/EPS (42.3%), no en mercado general — ahí está el terreno propio.
2. Informalidad laboral (~70%) es el driver estructural de la brecha de penetración (Perú 2.5% vs. OECD 6.2%).
3. **Pacífico ya compite en el mismo territorio**: Quererte Sano (contenido gratuito, sin mecánica de earning) y **Seguro Salud Yape** (S/9.90/mes, prima fija de pago único, mismo canal y público) — el diferencial real es "se gana con hábitos y se pausa sin penalidad", no "existe en Yape" (eso ya lo hizo Pacífico).
4. El abismo de transición laboral (perder el empleo formal, no solo nunca haberlo tenido) es un momento de vulnerabilidad real y bien documentado (60 días de ventana, 3 meses de carencia).
5. Yape, BCP y Pacífico son subsidiarias de Credicorp — una alianza intra-grupo es más defendible que una externa tipo Betterfly-Chubb.

Fuentes completas en `01-research/`.

## Correcciones importantes hechas hoy (para no repetir errores)

- **No hay "incubación" como premio.** Solo efectivo (S/2,000 / S/1,500) — la mención anterior fue una alucinación de otro agente al redactar `1-07-2026/INICIALIZATION.md`, ya corregida en la fuente.
- **Betterfly no valida adquisición B2C.** Pivoteó en 2020 a un modelo B2B2E exclusivo (vende a empresas). Valida la mecánica hábito→cobertura, no el canal de adquisición. Para B2C puro, el precedente regional es Nubank (CAC $0, boca a boca), con la salvedad de que no es un producto idéntico.
- **"Uso de APIs = 20% del Demoday" no es una cifra oficial.** Las bases (`00-bases/BASES-CONCURSO.md` §7.2) no tienen ese criterio con ese peso — venía de una lectura de las notas personales del kick-off, no de las bases.

## Preguntas abiertas / próximos pasos

Ver `PLAN-TRABAJO.md` §8 (lista viva). Las que bloquean avance real: canal de encuesta + lista de contactos de entrevistas; validar cifras de mercado de Pacífico contra la Memoria Integrada 2025 antes de citarlas.

## Mapa de documentos

```
docs/
├── memoria/              ← estás aquí (CONTEXTO-ACTUAL.md + bitacora/)
├── 00-bases/              reglas oficiales + equipo
├── 01-research/           insumo oficial + research propio (Pacífico, industria, competidores directos)
├── 02-ideacion/           territorio de solución, historias de usuario, identidad, pitch
├── 03-mvp/                alcance del producto (qué es real vs. simulado)
├── 04-gtm/                modelo de negocio y viabilidad
├── 05-entregables/        (aún vacío — one-pager y video final van aquí)
├── 06-ideas/              notas crudas sin validar del equipo
└── PLAN-TRABAJO.md         plan de sprint + registro de decisiones (tabla de trazabilidad)
```

## Cómo trabajar en este repo

Todo en español, citar fuentes siempre, nunca inventar datos de campo (marcar "hipótesis a validar"), MVP = validar no construir completo. Ver convenciones completas en `AGENTS.md`.
