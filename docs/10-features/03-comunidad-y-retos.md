# Feature 03: Comunidad, Retos Colectivos y Protección Grupal (/comunidad)

> **Estado:** Especificación aprobada para implementación  
> **Ruta:** `app/app/(app)/(tabs)/comunidad/page.tsx`  
> **Público objetivo:** Gen Z comunitaria, universitarios (UCSUR, PUCP, UPC), freelancers y creadores de contenido.  
> **Inspiración:** Strava (retos y clubes sociales), Habitica (partys y misiones grupales), Splitwise / Yape Juntas (finanzas compartidas).  
> **Respaldo de Research:** El compromiso social aumenta entre 65% y 95% el cumplimiento de metas (`insight-salud-mental-y-habito-gen-z.md`).

---

## 1. Por qué Comunidad en una App de Seguros de Pacífico

Los seguros tradicionales se perciben como un trámite individual, solitario y frío: una póliza que pagas esperando nunca tener que usarla.
Para la Generación Z, el bienestar es **colectivo, compartido y social**:
- Entrenan en comunidad (running clubs, gimnasios en grupo).
- Ahorran en juntas o metas comunes (viajes de promo, festivales).
- Comparten recomendaciones de salud mental sin el tabú de generaciones previas.

La pestaña **Comunidad** convierte la protección en un juego de equipo, donde cumplir hábitos en grupo multiplica el crecimiento de la Reserva e introduce un modelo disruptivo: **Microseguros contextuales grupales**.

---

## 2. Los 3 Pilares de la Experiencia de Comunidad

```
+-------------------------------------------------------------+
|  [Logo FIBO]                             [🔔 2]     [Avatar] |
+-------------------------------------------------------------+
|                                                             |
|  Comunidad & Retos 👥                                       |
|  El bienestar se multiplica cuando lo compartes.            |
|                                                             |
|  [ Retos Activos ]      [ Mis Tribus ]      [ Seguros Grup ]|
|                                                             |
|  RETOS DEL MES 🔥                                           |
|  +-------------------------------------------------------+  |
|  | 🏆 Reto Cero Delivery: 4 días cocinando en casa       |  |
|  | 👥 482 participantes de Lima y UCSUR                  |  |
|  | Recompensa: +30 pts Reserva + S/15 cupón Quererte Sano|  |
|  | [===========                    ] 65% del objetivo    |  |
|  |                                      [ Unirme al Reto ]|  |
|  +-------------------------------------------------------+  |
|                                                             |
|  TRIBUS POPULARES EN TU ZONA                                |
|  +-------------------------------------------------------+  |
|  | 🏃 UCSUR Runners & Active                             |  |
|  | 128 miembros • Meta semanal: 5,000 km colectivos      |  |
|  | Estado: Racha de Tribu activa (Semana 4 🔥)           |  |
|  |                                            [ Ver ]    |  |
|  +-------------------------------------------------------+  |
|  | 💻 Freelancers & Creadores Perú                       |  |
|  | 95 miembros • Hábito: Ahorro de emergencia quincenal  |  |
|  |                                            [ Ver ]    |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  PROTECCIÓN GRUPAL CONTEXTUAL (Pacífico On-Demand) ⚡       |
|  +-------------------------------------------------------+  |
|  | ⚽ Seguro Pichanga & Deporte de Fin de Semana         |  |
|  | Activa cobertura de accidentes por S/ 3.50 por persona|  |
|  | Válido por 24 horas para ti y tu grupo de amigos.     |  |
|  |                                  [ Armar grupo / Yape]|  |
|  +-------------------------------------------------------+  |
|                                                             |
|  [Hoy]              [Comunidad]        [Progreso]   [Perfil]|
+-------------------------------------------------------------+
```

---

## 3. Especificación Detallada de Módulos

### 3.1. Retos Colectivos (Group Challenges)
- **Mecánica:** Desafíos temporales (semanales o mensuales) con metas compartidas.
  - Ejemplos:
    - *"Semana Verde: 10,000 pasos al día por 5 días"*.
    - *"Bolsillo Blindado: Aparta S/ 20 esta semana sin tocar tu Reserva"*.
    - *"Mente Clara: 3 sesiones de respiración o Dr. Online preventivo"*.
- **Incentivo gamificado:** Quienes completan el reto obtienen un boost del 25% en puntos para su Reserva de Bienestar y badges exclusivos de perfil.

### 3.2. Tribus de Bienestar (Tribes)
- Espacios de afinidad donde grupos de usuarios (compañeros de universidad, amigos de departamento, colegas freelancers) se unen.
- **Racha de Tribu:** Si el 80% de los miembros completa sus hábitos de la semana, toda la tribu gana un "Escudo de Racha" colectivo.
- **Sin vergüenza ni shame:** No se exhiben balances bancarios ni fallos individuales; solo se celebran los hitos positivos grupales.

### 3.3. Innovación Pacífico: Microseguro Contextual Grupal
Validado con los mentores de Pacífico (Luiggi y Cami, 04 Set.):
- **Caso de uso:** Jóvenes que van a jugar una pichanga de fútbol, salir a hacer trekking a Huaraz o viajar un fin de semana a Lunahuaná.
- **La solución:** Un microseguro de accidentes personales activable en 1 tap por 24 o 48 horas.
- **Flujo:** Uno del grupo crea la "pichanga", envía el link por WhatsApp/Yape, cada amigo paga su aporte (S/ 3 a S/ 5 vía Yape) y todos quedan asegurados con póliza express de Pacífico durante el evento.

---

## 4. Impacto en la Rúbrica de Evaluación de la Hackathon
1. **Desirability (Deseabilidad Gen Z):** Transforma el seguro de una carga burocrática a una experiencia social y compartida.
2. **Viabilidad e Innovación Credicorp:** Aprovecha el efecto de red de Yape y la solvencia técnica de Pacífico Seguros.
3. **Retención de Producto:** Aumenta el Lifetime Value (LTV) orgánico al apalancar la presión positiva entre pares.
