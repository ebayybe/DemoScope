<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · **Español (Latinoamérica)** · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>

# DemoScope v1.2.0

Versión de autoprotección: DemoScope ahora se adapta a los cambios de las páginas de VACNet en lugar de fallar a mitad del proceso, e informa de lo ocurrido tanto al usuario como al desarrollador.

Ajustes, página de invitación y mejoras en el texto de los veredictos.

Atajos, animaciones y una corrección de carga.

Compatibilidad con la tarea de una sola pregunta de VACNet.

Compatibilidad con la página de revisión rediseñada de VACNet.

### Añadido

- **Pasos de inicialización aislados.** Cada paso de diseño e instalación se ejecuta por separado. Si uno falla, se registra el error y continúan los pasos restantes, de modo que un elemento modificado ya no deja un panel a medio construir.
- **Búsquedas alternativas** para el contenedor del vídeo, el contenedor de veredictos y el área de envío. Si VACNet cambia la clase del contenedor del vídeo, DemoScope lo encuentra a través del reproductor en vez de rendirse.
- **Desactivación controlada.** Si la página tiene el vídeo pero no el formulario de veredictos (o al revés), o si fallan cinco o más pasos de inicialización, DemoScope revierte sus cambios, restaura el pie de página de VACNet, deja solo la ventana de ajustes y muestra un aviso una vez. La página de cola vacía sigue reconociéndose como antes y nunca activa este comportamiento.
- **Informe de diagnóstico** (Ajustes → Diagnóstico → Copiar diagnóstico): versión del script, hora, idioma y navegador, página y tipo de tarea, comprobaciones de 22 elementos esperados (`ok` / `MISSING`), errores de pasos registrados y estructura de la página antes y después de los cambios de DemoScope. La estructura contiene únicamente etiquetas, identificadores y clases, nunca texto de la página. Si el portapapeles está bloqueado, el informe aparece en un cuadro cuyo texto se puede seleccionar.
- Una breve espera (hasta 2 s) antes de evaluar una página que todavía se está renderizando.

- **Botón para cerrar la página de invitación.** Una × en la esquina de la tarjeta vuelve a la lista de clips, igual que “Done”.
- **Atajos en la página de invitación:** `Enter` ejecuta “Done” y `Esc` hace lo mismo que ×. Se ignoran cuando el foco está en un botón, enlace, campo, diálogo o lista de idiomas; el botón “Done” ahora también muestra su tecla. Ambos atajos se pueden reasignar en la ventana de Atajos (nuevo grupo “Página de invitación”).
- **Conflictos de teclas por página.** La página de invitación no tiene reproductor, por lo que sus teclas `Enter` / `Esc` ya no entran en conflicto con las de la página de revisión. La tecla de ajustes sigue entrando en conflicto con todas.
- **Barras de desplazamiento oscuras y finas** en la ventana de ajustes, las ventanas secundarias y la lista de veredictos, además de `color-scheme: dark`. Brave, Chrome y Edge mostraban antes la barra predeterminada clara.

- **Ventana de Atajos** (Ajustes → Atajos). Los 18 atajos están en un registro común y se pueden reasignar. Las acciones se agrupan (Reproducción, Navegación, Veredictos, Envío, Página de invitación e Interfaz), cada una con una descripción y un botón de restablecimiento, además de “Reset all” con confirmación mediante un segundo clic.
  - **Gestión de conflictos.** Al pulsar una tecla que ya se usa, se indica qué acción la tiene asignada, en qué grupo y qué hace. Se puede elegir **Replace** (la otra acción pierde la tecla), **Swap** (recibe la tecla que tenía esta acción) o **Cancel**.
  - `Esc` se puede asignar como cualquier otra tecla y no cierra la ventana mientras se captura una tecla. Se rechazan `Tab`, las teclas modificadoras, Caps Lock, `F5`, `F11` y `F12`; `Shift` solo se admite para la acción mantenida “Speed boost”.
  - Las sugerencias bajo el vídeo, las insignias de preajustes y veredictos y los botones Continue/Cancel siguen las asignaciones.
- **`Esc` cancela** un veredicto pendiente de confirmación (pulsa el “Cancel” de VACNet) y desarma la primera pulsación de `Enter` del envío en dos pasos.
- **Ventana de Animaciones** (Ajustes → Animaciones): seis estilos de indicador (pulse, breathe, ripple, heartbeat, orbit, blink), con vista previa en directo, tres velocidades y un interruptor. Si el sistema solicita reducir el movimiento, las animaciones se inician desactivadas.
- `Enter` y `Esc` también funcionan cuando un botón de opción de veredicto tiene el foco, que es donde queda el foco tras seleccionar un veredicto.

- **Compatibilidad con la tarea de una sola pregunta.** VACNet a veces presenta una pregunta: “Is the Subject cheating beyond a reasonable doubt?”, con las respuestas Cheating / Uncertain / No cheats seen. DemoScope la detecta y cambia a un diseño compacto sin veredictos rápidos, combinaciones ampliadas ni aleatorizador.
- Etiquetas de veredicto con el texto y el idioma propios de DemoScope, insignias `1`–`3` y atajos correspondientes.
- **Indicador de bloqueo.** VACNet no desbloquea “Uncertain” y “No cheats seen” hasta que termina el clip. Una tarjeta lo explica y muestra el tiempo restante con una barra de progreso; las opciones bloqueadas aparecen atenuadas y pulsar su tecla reproduce un sonido de error y agita la tarjeta.
- Las sugerencias bajo el vídeo cambian a `Enter` y `1–3`; los botones de veredicto aumentan de altura para llenar el panel.

- **Explicaciones propias de DemoScope** para las cuatro categorías de veredicto en los 29 idiomas. VACNet recurre al inglés para el texto de algunas preguntas (por ejemplo, en ucraniano), así que las ventanas “?” ya no dependen de ese texto.

- **Botón de ayuda “?”** junto a AIM ASSIST, WALL HACK, AUTO BHOP y BOT. Al pulsarlo, se abre una pequeña ventana que explica la categoría; se cierra al hacer clic fuera, volver a pulsar el botón o usar `Esc`. El botón no recibe el foco del teclado, para que `Enter` y `Space` mantengan su función durante la revisión.

### Cambiado

- **Rediseño de la ventana de ajustes.** Las secciones ahora se ordenan según la frecuencia de uso: Atajos, Animaciones, Efectos de sonido, Historial local, Pie de página, Diagnóstico (añadido en 1.2.0) y Restablecer. Todo queda alineado a la izquierda, como en las ventanas secundarias nuevas. Atajos y Animaciones son filas con una etiqueta de resumen (“Changed: 2”, “Orbit · Fast”) que se actualiza al cambiar los valores.
- **Un solo restablecimiento para todo.** El botón pasó a su propia sección y ahora restaura el sonido, el volumen, los atajos y las animaciones (el texto de confirmación lo indica). El historial se conserva.
- Se eliminó de la ventana el antiguo bloque de “tecla de ajustes”: ahora esa tecla se cambia en la ventana de Atajos, como las demás.
- **El texto de confirmación del veredicto ya no incluye el número de tecla.** VACNet copia en la línea de confirmación el texto de la etiqueta seleccionada, lo que producía “2Not sure” y “3No cheats seen”. La insignia de tecla ahora se dibuja con CSS y no forma parte del texto.
- La opción 2 de la tarea de una sola pregunta ahora dice “Not sure” (en ruso: “Не уверен(а)”), con el mismo estilo en primera persona que la frase de VACNet “I'm sure the subject is cheating…”.

- **Se recuperó el resaltado de frases clave** en los botones de veredicto con la paleta de DemoScope: la frase consultada (“help with aiming”, “see through walls”, etc.) aparece en naranja de acento y la palabra “not” de las respuestas negativas en azul apagado; ambas en negrita. Los botones seleccionados mantienen su tinte y legibilidad.
- `normalizeVerdictLabels` antes convertía todo el resaltado en texto plano. Ahora solo elimina las etiquetas `<b>` de énfasis, por lo que se conserva el marcado del resaltado.

- Se ocultan el encabezado del portal y la tarjeta de instrucciones para mantener el aspecto anterior; el contador de clips se duplica en la insignia del encabezado porque el rediseño oculta el original.
- El botón Continue queda fijo en la parte inferior del panel, así permanece visible aunque las traducciones largas hagan que la lista de veredictos supere la altura de la ventana.

### Corregido

- **Espera larga al cargar el siguiente clip tras enviar** en la tarea de una sola pregunta. La comprobación de disponibilidad esperaba el campo `aimassist` del formulario clásico, que esa tarea no tiene; por eso siempre alcanzaba el límite de 30 segundos y mostraba un aviso de error. Ahora acepta cualquier formulario de veredicto y los metadatos del vídeo, comienza antes de que termine de cargar el reproductor y cierra silenciosamente la superposición tras 3 segundos en páginas que no son de clips.
- Los atajos de página (`Space`, `Enter`, …) ya no actúan sobre la página que queda detrás de un diálogo abierto.

- El botón “Local history” era demasiado grande (heredaba la fuente de la página) y se partía en dos líneas en muchos idiomas. Ahora coincide con las insignias vecinas, no salta de línea, recorta las etiquetas muy largas y permite que la fila de insignias se ajuste en lugar de estrecharse.

- **El texto de los veredictos seguía en el idioma del navegador** después de cambiar el idioma en DemoScope. VACNet obtiene sus textos del parámetro Steam `?l=`; DemoScope solo cambiaba sus propias etiquetas. Al seleccionar un idioma en la página de revisión, ahora navega con el `?l=` correspondiente; las páginas que se abren sin ese parámetro (por ejemplo, el siguiente clip tras Continue) vuelven a solicitarse una vez en el idioma elegido. El idioma que VACNet usó realmente se lee del parámetro `l=` en las URL de sus propias hojas de estilo y scripts; una protección de un solo intento evita bucles de redirección si VACNet no ofrece ese idioma.

- **`Space`, `M` y `F` parecían no hacer nada** porque VACNet / Video.js reaccionaban a las mismas teclas y alternaban una segunda vez (pausa seguida inmediatamente de reproducción). DemoScope ahora captura esas teclas, estén asignadas o no.
- En Firefox, al soltar `Space` también se activaba el botón del reproductor enfocado. Ahora también se intercepta esa liberación.
- Los atajos del reproductor siguen activos cuando un botón de opción de veredicto tiene el foco.

- **Panel a medio construir tras el rediseño de VACNet.** La página añadió un encabezado de portal, una tarjeta de instrucciones y una cuadrícula; dejó de envolver los bloques de veredicto en `.verdicts-container-inner` y movió `#submitbuttons` fuera del contenedor de veredictos. El `insertBefore` de DemoScope fallaba y omitía todos los pasos posteriores. El nuevo paso `ensureReviewStructure` normaliza el marcado y permite usar tanto el diseño anterior como el nuevo.

### Localización

- 6 cadenas nuevas (sección de diagnóstico, resultado de la copia y aviso de desactivación) en los 29 idiomas.

- 12 cadenas nuevas (resúmenes, sección de restablecimiento, acciones de la página de invitación y “Not sure”) en los 29 idiomas.

- Las ventanas de Atajos y Animaciones (77 cadenas por idioma) ya están traducidas a los otros 27 idiomas. Antes solo estaban escritas en inglés y ruso.

- Las ventanas de Atajos y Animaciones se redactaron en inglés y ruso; los demás idiomas se incorporaron en 1.2.0.

- 5 cadenas nuevas (etiquetas, título, explicación y mensaje de bloqueo) en los 29 idiomas.

# DemoScope v1.0.0

Primera versión pública de DemoScope, un conjunto de herramientas de userscript para revisar clips VACNet de CS2.

### Añadido
- Interfaz en 29 idiomas, selección automática del idioma, cinco preajustes de veredicto rápido y 15 combinaciones ampliadas.
- Controles de vídeo conscientes de los segmentos, avance fotograma a fotograma, aceleración con `Shift`, reproducir/pausar con `Space`, silenciar con `M`, pantalla completa con `F` y envío de veredictos en dos pasos con `Enter`.
- Historial de revisiones local configurable, importación/exportación JSON, informes HTML y combinación de varias copias JSON en un informe.
- Página de invitación mejorada, ajustes de sonido, tecla de ajustes configurable, control de visibilidad del nombre de cuenta, diálogo opcional de reglas y aleatorizador de veredictos (desactivado inicialmente).

### Privacidad
- Sin telemetría; los ajustes y el historial locales no se suben. Los veredictos se envían a VACNet mediante el formulario habitual del sitio.
