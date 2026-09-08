# Feature 06: Perfil Social, Insignias y Ecosistema de Protección Personal (/perfil)

> **Estado:** Especificación aprobada para implementación  
> **Ruta:** `app/app/(app)/(tabs)/perfil/page.tsx`  
> **Público objetivo:** Gen Z conectada que valora la identidad, el reconocimiento social entre pares y el autocuidado sin burocracia.  
> **Inspiración:** Strava Profile, BeReal / Instagram bio, Duolingo Trophy Case, Nubank Profile.

---

## 1. Filosofía de Diseño: "Esto soy yo, y esto cuida lo mío"

En los seguros tradicionales, el perfil del asegurado es una ficha clínica fría con número de póliza y fecha de vencimiento.
En **FIBO**, el perfil es la **carta de presentación de bienestar del usuario**:
1. **Identidad & Conexión Social:** Foto/Avatar, bio, racha, amistades y comunidades donde participa.
2. **Vitrina de Insignias (Trophy Case):** Reconocimiento a los hábitos cumplidos (ahorro, actividad física, salud mental).
3. **Control de Privacidad:** Toggle `Público / Solo Amigos` para compartir logros sin exponer datos financieros privados.
4. **Herramientas de Protección Integradas:** Los servicios de Pacífico (Dr. Online, Quererte Sano, Microseguro pausable) ya no aparecen como un menú rígido arriba, sino abajo como el kit de herramientas que respaldan su estilo de vida.
5. **Menú de Configuración & Salida:** Ajustes de notificaciones, soporte y cierre de sesión.

---

## 2. Wireframe de la Pantalla /perfil v2

```
+-------------------------------------------------------------+
|  [ Banner de Portada en Gradiente Orgánico FIBO           ] |
|               [ (FOTO / AVATAR CON BADGE) ]                 |
|                                                             |
|  Camila Rodríguez ✨                     [@camila.r]        |
|  UCSUR • Estudiante de Medicina & Runner                    |
|  "Cuidando mi salud mental y ahorrando para mi internado"   |
|                                                             |
|  [ 🟢 Perfil Público ]                        [Editar Perfil]|
|                                                             |
|  MÉTRICAS SOCIALES:                                         |
|  +-------------------------------------------------------+  |
|  |   🔥 5 días    |   🛡️ Nivel 2   |   👥 2 Tribus  | 🤝 18  |
|  |     Racha      |     Guardián   |   Comunidad    | Amigos |
|  +-------------------------------------------------------+  |
|                                                             |
|  VITRINA DE INSIGNIAS GANADAS (4/8)                         |
|  +-------------------------------------------------------+  |
|  | 🪙 Ahorrador Hormiga    🏃 Runner Urbano                 |  |
|  | 🧘 Mente Serena         ⚽ Capitán Pichanga              |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  MIS COMUNIDADES Y AMIGOS:                                  |
|  +-------------------------------------------------------+  |
|  | • UCSUR Runners & Active (128 miembros)               |  |
|  | • Gen Z Primer Empleo (210 miembros)                  |  |
|  | [ (A) (B) (C) (D) +14 amigos en FIBO ]  [+ Conectar]  |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  HERRAMIENTAS QUE ME PROTEGEN (Pacífico Seguros) 🛡️         |
|  +-------------------------------------------------------+  |
|  | 🩺 Dr. Online Pacífico: Telemedicina 24/7 sin costo    |  |
|  |    [ Consultar médico ahora ]                         |  |
|  +-------------------------------------------------------+  |
|  | 💚 Quererte Sano: Descuentos en farmacias & salud      |  |
|  +-------------------------------------------------------+  |
|  | ⚡ Microseguro FIBO: Cobertura Activa (S/ 9.90/mes)     |  |
|  |    Pausable sin penalidad cuando lo necesites.        |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  MÁS OPCIONES:                                              |
|  [ Notificaciones y Recordatorios                      > ]  |
|  [ Declaración de Salud y Documentos                   > ]  |
|  [ Centro de Ayuda & Términos                          > ]  |
|                                                             |
|  [                  Cerrar sesión                        ]  |
|                                                             |
|  [Hoy]              [Comunidad]        [Progreso]   [Perfil]|
+-------------------------------------------------------------+
```

---

## 3. Especificación de Componentes

1. **Avatar con Status Ring:** Aro de color dorado/cyan que indica el Nivel de Reserva alcanzado.
2. **Insignias Gamificadas:** Tarjetas pequeñas con iconografía, nombre y fecha de obtención.
3. **Conexión de Amistades:** Lista horizontal con avatares y botón para compartir link de invitación personal.
4. **Protección Pacífico Contextual:** Presentado como "Respaldado por Pacífico Seguros para cuidar lo que ya construiste".
5. **Menú de Cuenta:** Lista limpia de opciones con flechas de navegación y botón de cierre de sesión secundario.
