<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · **Español (Latinoamérica)** · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**Herramientas para revisar CS2 VACNet con el teclado.**<br>
Presets de veredictos · reproductor que respeta los límites del clip · teclas reasignables · historial local privado · 29 idiomas.

<br>

[![Versión](https://img.shields.io/badge/version-1.2.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![Licencia](https://img.shields.io/badge/license-GPL--3.0-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#instalación)
[![Idiomas](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#idiomas)
[![Privacidad](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#privacidad)

<br>

[**⬇ Instalar DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[Funciones](#funciones) · [Instalación](#instalación) · [Atajos de teclado](#atajos-de-teclado) · [Personalización](#personalización) · [Documentación](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md) · [Registro de cambios](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md)

</div>

<br>

## Capturas de pantalla

<table>
  <tr>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="Pantalla de bienvenida de DemoScope"></a><br><sub><b>Pantalla de bienvenida</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="Interfaz principal de DemoScope"></a><br><sub><b>Interfaz principal</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="Página de invitación de DemoScope"></a><br><sub><b>Invitar a un amigo</b></sub></td>
  </tr>
</table>

## Descripción general

DemoScope mejora las páginas de revisión de Counter-Strike VACNet (`counter-strike.net/vacnet`). En vez de hacer clic por todo el formulario de veredictos para cada clip corto, puedes trabajar con el teclado: presets de veredictos, una barra de búsqueda limitada al segmento revisado, avance por fotogramas, aceleración temporal, envío en dos pasos e historial privado de tus veredictos. Es compatible con los dos formularios que VACNet ofrece actualmente (el clásico de cuatro preguntas y la nueva tarea de una sola pregunta) y se protege cuando Valve modifica la página. Todo se ejecuta localmente en tu navegador.

## Funciones

| | |
|---|---|
| **Flujo de revisión** | 5 presets rápidos de veredicto con `1`–`5` y otros 15 combos ampliados, aleatorizador opcional de veredictos (desactivado por defecto) y envío seguro en dos pasos: `Enter` prepara el envío y, al pulsarlo otra vez, lo envía. `Esc` lo cancela. |
| **Los dos tipos de tarea** | Detecta el formulario clásico (asistencia de apuntado, wallhack, auto-bhop y bot) y la tarea de una pregunta (“Is the Subject cheating beyond a reasonable doubt?”). Esta última usa un diseño compacto, veredictos etiquetados con `1`–`3` e indicador bloqueado hasta el final del clip. |
| **Reproductor adaptado al clip** | La barra de búsqueda y el tiempo se limitan al inicio y al final del clip; saltos de ±5 s, avance de 1/64 s por fotograma, aceleración al mantener `Shift` (0,5×–4×), silencio y pantalla completa con atajos. |
| **Atajos a tu gusto** | Reasigna cualquiera de las 18 acciones en una ventana específica. Antes de sustituir una tecla se explica el conflicto (acción, grupo y función), y todas las indicaciones de teclas de la página siguen tus asignaciones. |
| **Animaciones** | Ventana con vista previa en directo, seis estilos de indicador, tres velocidades y un interruptor. Respeta por defecto la opción del sistema «reducir movimiento». |
| **Veredictos comprensibles** | Un botón «?» junto a cada categoría explica su significado; se resaltan las frases clave para que no pase desapercibido un «not». |
| **Historial local privado** | Historial por clip y partida en `localStorage`, importar y exportar JSON, informes HTML y combinar varias copias de seguridad en un informe. |
| **Página de invitación** | Página `/vacnet/createinvite` renovada, con mostrar/ocultar, copia en un clic, resumen de requisitos, botón de cierre y atajos `Enter` / `Esc`. |
| **29 idiomas** | Respeta primero tu selección, después el ajuste `?l=` de Steam y, por último, el idioma del navegador. Al elegir un idioma en DemoScope también cambia el texto de VACNet. |
| **Efectos de sonido** | Señales sintetizadas con Web Audio, volumen, vista previa e interruptor de activación. |
| **Preparado para rediseños** | Los pasos de configuración están aislados, los elementos clave tienen búsquedas alternativas y, si la página deja de reconocerse, DemoScope se desactiva sin alterar VACNet. Puedes copiar un informe de diagnóstico para comunicar errores con un solo clic. |

## Instalación

1. Instala un gestor de userscripts como [Tampermonkey](https://www.tampermonkey.net/) o [Violentmonkey](https://violentmonkey.github.io/). El script utiliza `GM_addStyle` y `unsafeWindow`.
2. [**Instala DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) y confirma la instalación en el gestor.
3. Inicia sesión en Steam y abre [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/).
4. Abre un clip de revisión. DemoScope se carga automáticamente (la página `/vacnet/join` está excluida).

El gestor de userscripts instalará las actualizaciones. DemoScope funciona en navegadores basados en Chromium y en Firefox.

## Atajos de teclado

Los atajos funcionan en páginas de revisión cuando el foco no está en un campo editable u otro control interactivo. **Puedes cambiar todas las teclas** en **Settings → Hotkeys**.

| Tecla | Acción |
|---|---|
| `1` … `5` | Formulario clásico: aplica un preset (1 bot + apuntado + wallhack; 2 apuntado + wallhack; 3 rage; 4 jugador limpio; 5 no estoy seguro). |
| `1` `2` `3` | Tarea de una pregunta: Cheating / Not sure / No cheats seen. |
| `Enter` | Confirmar. En el formulario clásico, la primera pulsación prepara el botón y la segunda envía. |
| `Esc` | Cancela el veredicto pendiente de confirmación o desactiva el primer `Enter`. |
| `Shift` (mantener) | Aceleración (0,5×–4×; 2× por defecto, seleccionable en la página). |
| `←` `→` | Saltar 5 segundos atrás / adelante. |
| `,` `.` | Retroceder / avanzar un fotograma (1/64 s). |
| `Space` | Reproducir / pausar. |
| `M` / `F` | Silencio / pantalla completa (un doble clic en el vídeo también cambia a pantalla completa). |
| `F2` | Abrir la ventana de ajustes. |
| `Enter` / `Esc` *(página de invitación)* | Listo / cerrar. |

## Personalización

Abre los ajustes con `F2`. Se organizan de más a menos usados:

- **Hotkeys**: ventana específica con todas las acciones agrupadas por finalidad, restablecimiento por acción, «Reset all» y gestión de conflictos con **Replace**, **Swap** o **Cancel**. `Esc` se puede asignar como cualquier otra tecla.
- **Animations**: elige un estilo (pulse, breathe, ripple, heartbeat, orbit, blink), una velocidad o desactiva las animaciones. Cada tarjeta muestra una vista previa en directo.
- **Sound effects**: activar/desactivar, volumen (también se ajusta con la rueda del ratón) y botón de prueba.
- **Local history**: activar/desactivar, límites (10/20/30/50 registros por clave y 100/200/300/500 claves), formato de hora de 12/24 horas, copias JSON e informes HTML.
- **Footer**: ocultar el enlace de comentarios, el enlace al informe, el aviso de copyright o todo el pie de página.
- **Diagnostics**: copiar un informe para comunicar errores (consulta [Informar de un problema](#informar-de-un-problema)).
- **Reset**: un botón restaura los valores predeterminados del sonido, los atajos y las animaciones. El historial se conserva.

## Idiomas

DemoScope está disponible en 29 idiomas: búlgaro, chino (simplificado y tradicional), checo, danés, neerlandés, inglés, finés, francés, alemán, griego, húngaro, indonesio, italiano, japonés, coreano, noruego, polaco, portugués (Portugal y Brasil), rumano, ruso, español (España y Latinoamérica), sueco, tailandés, turco, ucraniano y vietnamita. Puedes cambiar de idioma en cualquier momento desde el selector de la página.

## Informar de un problema

Valve cambia las páginas de VACNet sin avisar. Si algo deja de funcionar:

1. Presiona `F2`, abre **Diagnostics** y selecciona **Copy diagnostics**.
2. Pega el texto en una [incidencia nueva](https://github.com/ebayybe/DemoScope/issues), junto con una captura si puedes.

El informe contiene la versión del script, la hora, el idioma del navegador y su cadena user-agent, qué elementos de página se encontraron, qué pasos de configuración fallaron y la estructura de la página (solo etiquetas, ID y clases). No incluye texto de la página, nombre de cuenta ni historial. Si la página deja de ser reconocible, DemoScope se desactiva allí y lo indica; VACNet sigue funcionando con normalidad.

## Preguntas frecuentes

<details>
<summary><b>DemoScope dice que se ha desactivado en esta página. ¿Qué ha pasado?</b></summary>

La página de VACNet ya no coincide con lo que espera DemoScope, así que el script se apartó para no dejar una interfaz a medio construir. Copia el informe de diagnóstico (consulta arriba) y abre una incidencia; normalmente la actualización llega pronto.
</details>

<details>
<summary><b>El texto de los veredictos de VACNet está en otro idioma que DemoScope.</b></summary>

Al elegir un idioma en DemoScope, se solicita ese idioma a VACNet mediante el parámetro `?l=` de Steam. Si VACNet no tiene la traducción, utiliza su idioma predeterminado, mientras las etiquetas propias de DemoScope siguen en el idioma que elegiste.
</details>

<details>
<summary><b>¿DemoScope elige los veredictos por mí?</b></summary>

No. Los presets solo pulsan los botones de veredicto que has elegido y siempre confirmas tú el envío. Revisa cada clip personalmente y sigue las normas del programa.
</details>

<details>
<summary><b>¿Se guarda el historial de la tarea de una pregunta?</b></summary>

Todavía no. Actualmente, el historial local solo se registra para el formulario clásico de cuatro preguntas.
</details>

<details>
<summary><b>¿Cómo restauro las teclas predeterminadas?</b></summary>

Usa el icono de restablecimiento junto a una tecla modificada, **Reset all** en la ventana Hotkeys o **Reset** en los ajustes; esta última opción también restaura el sonido y las animaciones.
</details>

## Arquitectura

DemoScope es una única función autoejecutable (`@run-at document-start`, `@noframes`). `init()` determina el tipo de página, comprueba que sea reconocible y conecta los módulos siguientes. La referencia completa de las 217 funciones de nivel superior, incluidos parámetros, valores devueltos y claves de almacenamiento, está en [es-419_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md).

<details>
<summary><b>Resumen de módulos</b></summary>

| Módulo | Responsabilidad | Funciones principales |
|---|---|---|
| `Localization` | Idioma de la interfaz, búsqueda de textos, banderas, selector de idioma y sincronización de `?l=` de VACNet | `getActiveLocale`, `tr`, `settingText`, `syncSelectedLanguage`, `installLanguageSelector` |
| `Segment & player` | Lee los límites del clip, adapta Video.js/HTML5 y desactiva el bucle de segmentos nativo del sitio | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Barra de búsqueda, avisos de teclas, aceleración, avance por fotogramas y atajos | `installCustomControls`, `installPlayerEnhancements` |
| `Hotkeys` | Registro de acciones, asignaciones, detección de conflictos y ventana Hotkeys | `getBinding`, `findKeyConflict`, `getActionForEvent`, `ensureHotkeysDialog` |
| `Verdict presets` | Tabla de presets, estado de selección y aplicación aleatoria | `applyPreset`, `detectActivePreset`, `buildEnhancementBar` |
| `Single-question task` | Etiquetas, indicador de bloqueo y teclas del formulario nuevo | `isCheatingMode`, `selectCheatingVerdict`, `updateCheatingLock` |
| `Submit flow` | Confirmación en dos pasos, cancelación, `verdict_labels[]`, comprobación del mismo origen y capa de carga | `invokeProceedAction`, `invokeCancelAction`, `submitVerdictForm`, `finishSubmitLoadingWhenReady` |
| `Local history` | Historial por clip y partida, copias de seguridad e informes | `appendReviewHistory`, `importLocalHistory`, `exportCombinedHistoryReports` |
| `Settings & animations` | Ventana de ajustes y subventanas, sonido y animaciones de indicadores | `ensureSettingsDialog`, `installExtraSettingsSections`, `ensureAnimationsDialog`, `playUiSound` |
| `Invite page` | Página renovada, botón de cierre y atajos | `installInvitePage`, `installInviteExtras` |
| `Resilience` | Pasos aislados, búsquedas alternativas, apagado y diagnósticos | `safeStep`, `disableDemoScope`, `buildDiagnosticsReport` |
| `Bootstrap` | Punto de entrada | `init`, `enhanceLayout` |

</details>

## Privacidad

DemoScope no envía telemetría ni sube tus ajustes o historial. Al enviar un veredicto, VACNet lo recibe mediante el formulario habitual del sitio. Los ajustes y el historial permanecen en tu navegador: en `localStorage` (claves que empiezan por `demoscope`) y `sessionStorage`. Usa **Settings → Local history → Clear history** para borrar el historial. El informe de diagnóstico solo se copia al portapapeles; tú decides si lo compartes.

## Aviso legal

DemoScope es un proyecto comunitario no oficial, no afiliado ni respaldado por Valve Corporation. Nunca decide un veredicto por ti. Revisa personalmente cada clip y sigue las reglas del programa. Úsalo bajo tu responsabilidad.

## Licencia

Publicado bajo la licencia [GNU GPL v3.0](https://github.com/ebayybe/DemoScope/blob/main/LICENSE).

## Agradecimientos

- **Idea original e interfaz base:** [*CS2 VACNet Review — Player & Layout Enhancements*](https://greasyfork.org/ru/scripts/591778-cs2-vacnet-review-player-layout-enhancements), de skinsales / goodvibes (MIT).
- **Concepto relacionado y fork en ruso:** [*VACLens RU — CS2 Review Assistant*](https://greasyfork.org/ru/scripts/592414-vaclens-ru-cs2-review-assistant), de authorless (MIT).
- **Reescritura de la arquitectura, framework reutilizable, compatibilidad con 29 idiomas y presets de veredictos personalizados:** ebayybe.
