<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-ES_FUNCTIONS.md) · **Español (Latinoamérica)** · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md)

</div>

# DemoScope — Referencia de funciones

Referencia completa de las 217 funciones de nivel superior de `DemoScope.user.js` v1.4.0 (nombre, parámetros, valor devuelto, responsabilidad). Volver al [README](../README.md).

Convenciones: `—` significa sin parámetros; `void` significa que la función se invoca por sus efectos secundarios.

## Resumen del comportamiento para el usuario

| Área | Descripción |
|---|---|
| Páginas compatibles | Mejora la bienvenida de VACNet (/vacnet), las páginas de revisión (/vacnet/clips), la invitación (/vacnet/createinvite) y el estado sin clips. No modifica otras páginas. |
| Tipos de tarea | Detecta el formulario de revisión. El formulario clásico (aim assist, wallhack, auto-bhop, bot) ofrece preajustes y combinaciones. La tarea de una pregunta muestra tres veredictos en las teclas 1–3 y un indicador de bloqueo con el tiempo restante, sin veredictos rápidos ni combinaciones. |
| Idioma | Admite 29 idiomas de Steam. Tiene prioridad el idioma manual guardado; si no existe, usa ?l= de Steam y luego el idioma del navegador o la página. Al cambiar el idioma en DemoScope, también lo pasa a VACNet para localizar sus botones y preguntas. El modo automático sincroniza el parámetro con el navegador. |
| Bienvenida e invitación | Aplica un estilo común, selector de idioma y control para ocultar el nombre de cuenta. En la bienvenida, Enter o Espacio continúa fuera de los controles. En la invitación se puede mostrar, ocultar y copiar el enlace, consultar requisitos y cerrar con ×; Enter equivale a Listo y Esc a ×. |
| Revisión de clips | Añade preajustes y combinaciones, aleatorización opcional, velocidad configurable con Shift, búsqueda dentro del segmento, avance fotograma a fotograma y atajos del reproductor. Cada categoría incluye ayuda localizada y las palabras clave se resaltan con los colores de DemoScope. |
| Atajos | Cada atajo se puede reasignar en Ajustes → Atajos. Los conflictos se comprueban por página; se puede reemplazar, intercambiar o cancelar. Las etiquetas se actualizan según las asignaciones. |
| Envío | Enter o Numpad Enter activa Continuar. En el formulario clásico, la primera pulsación prepara el envío y la segunda envía los veredictos. En la tarea de una pregunta, Enter confirma el diálogo de VACNet. Esc cancela; Espacio no envía veredictos. |
| Ajustes | F2 abre los ajustes de forma predeterminada. Incluyen atajos, animaciones, sonido y volumen, historial local y copias, formato de hora, visibilidad del pie, diagnóstico y restablecimiento. |
| Animaciones | El punto junto a DemoScope puede animarse. Hay seis estilos, vistas previas en directo, tres velocidades y un interruptor. Si el sistema solicita reducir el movimiento, empiezan desactivadas. |
| Historial local | Guarda resúmenes en el almacenamiento local del navegador y no los sube. Se puede desactivar, importar, exportar a JSON o HTML, combinar copias JSON en un informe HTML o borrar. Los límites son configurables; desactivar no elimina los datos existentes. Solo se registra el formulario clásico. |
| Cola vacía | Cuando VACNet no tiene clips, muestra una explicación localizada, la hora de primera aparición y un selector de idioma. La referencia a 250 demos al día es informativa; DemoScope no aplica ni evita ese límite. |
| Pie de página | Muestra un pie localizado con enlaces de comentarios e informes en páginas de clips. Los ajustes permiten ocultar enlaces, copyright o todo el pie. |
| Robustez | Cada paso se ejecuta de forma aislada. Si la página deja de ser reconocible, DemoScope se desactiva, restaura VACNet y muestra un aviso. Ajustes → Diagnóstico copia un informe con versión, elementos encontrados, fallos y estructura. |

El script no modifica los requisitos de VACNet para obtener invitaciones, el procesamiento de veredictos ni los límites del servidor. El historial, el idioma y las preferencias se guardan en el perfil del navegador.

## Localización

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Código SVG en línea de la bandera de un idioma; si no existe, devuelve un icono de globo terráqueo. |
| `getSavedLocale` | — | `string \| null` | Lee el idioma guardado del usuario (`demoscopeLanguage`) desde `localStorage`. |
| `getActiveLocale` | — | `string` | Determina el idioma activo: elección guardada → Steam `?l=` → idioma del navegador/página → `en`. |
| `getLanguageBadge` | — | `string` | Nombre propio del idioma, p. ej. «English version», para la insignia del selector de idioma. |
| `getBrowserLocale` | — | `string \| null` | Detecta el primer idioma compatible del navegador, incluidas variantes regionales. |
| `syncAutomaticLanguage` | — | `boolean` | Sincroniza automáticamente ?l= con el idioma del navegador y navega si difiere. |
| `getRenderedSteamLanguage` | — | `string \| null` | Lee el idioma de Steam en el que VACNet generó la página, según el parámetro l= de las URL de sus hojas de estilo y scripts. |
| `syncSelectedLanguage` | — | `boolean` | Al elegir un idioma manualmente, solicita la página una vez con el ?l= correspondiente para que VACNet lo use. Evita navegar si ya coincide y previene bucles. Devuelve true si navegó. |
| `tr` | `key: string` | `string` | Busca una cadena de la interfaz para el idioma activo (alternativa: inglés y, después, la propia clave). |
| `inviteText` | `key: string` | `string` | La misma búsqueda para la tabla de cadenas de la página de invitaciones. |
| `settingText` | `key: string` | `string` | La misma búsqueda para la tabla de cadenas del diálogo de configuración. |
| `getPresetLabel` | `name: string` | `string` | Etiqueta localizada de un ajuste predefinido; compone combinaciones como «Bot + Aim». |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | HTML de los botones de selección de idioma, incluida la entrada «auto». |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Conecta y ubica el selector de idioma, guarda la elección y recarga la página; un callback opcional puede gestionar la selección en su lugar. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Busca texto localizado para la cola vacía o el pie de página. |

## Efectos de sonido y diálogo de configuración

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Línea «N entradas · última entrada: …» que se muestra en el diálogo de configuración. |
| `soundsEnabled` | — | `boolean` | Indica si los sonidos de la interfaz están activados (`demoscopeSoundEffectsEnabled`, activado por defecto). |
| `getSoundVolume` | — | `number (0–1)` | Volumen de sonido guardado (`demoscopeSoundEffectsVolume`, 0,4 por defecto). |
| `playUiSound` | `kind = "click"` | `void` | Sintetiza una breve secuencia de tonos con Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); nunca lanza errores. |
| `readSettingsHotkey` | — | `string` | `KeyboardEvent.code` guardado que abre el diálogo de configuración (`F2` por defecto). |
| `formatHotkey` | `code: string` | `string` | Nombre legible de una tecla (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Extrae el código de la tecla física, asignando de nuevo los teclados no latinos a `KeyX`; `""` si no es utilizable. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Verdadero para las teclas que DemoScope o el reproductor ya usan (Enter, espacio, flechas, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Crea y conecta los ajustes: sonidos y volumen, vista previa, atajo, historial local y límites, formato de hora, importar/exportar JSON, exportar/unir HTML, borrar historial, visibilidad del pie y restablecer. |
| `openSettingsDialog` | `opener = null` | `void` | Abre el diálogo con los valores actuales y recuerda el elemento al que devolver el foco. |
| `installSettingsUi` | — | `void` | Instala el detector global de teclas en fase de captura (abrir/cerrar el diálogo, reasignación) y los eventos de sonido. |
| `installUiSoundEvents` | — | `void` | Detector de clics delegado que reproduce sonidos de respuesta para los controles de DemoScope. |
| `ensureSettingsLayoutStyles` | — | `void` | Añade estilos a la ventana de ajustes: secciones alineadas a la izquierda y filas con resúmenes. |
| `refreshSettingsSummaries` | — | `void` | Actualiza los resúmenes de Atajos y Animaciones. |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Añade Atajos, Animaciones, Diagnóstico y Restablecer; oculta el antiguo bloque para cambiar la tecla de ajustes, ahora editable en Atajos. |

## Copias de seguridad, informes y límites del historial

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Descarga todo el historial como `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Inicia la descarga de un archivo mediante una URL Blob temporal. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Aplana y elimina duplicados de las entradas del historial, las más recientes primero. |
| `exportReadableHistory` | — | `void` | Descarga un informe HTML independiente y localizado del historial. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Construye el HTML del informe con los caracteres escapados. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Actualiza la línea de estado de la herramienta de fusión (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Valida muchas copias JSON (≤ 5 MB cada una, ≤ 100 MB en total), elimina entradas duplicadas y descarga un único informe HTML combinado. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Comprobación con lista blanca de las claves del historial (bloquea `__proto__`, `constructor` y claves mal formadas). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Valida una copia JSON, la fusiona con el historial local (respetando los límites) y actualiza la interfaz. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Lee un límite numérico de `localStorage`, aceptando solo valores permitidos. |
| `getHistoryPerKeyLimit` | — | `number` | Entradas conservadas por clave de clip/partida (10/20/30/50, 30 por defecto). |
| `getHistoryTotalLimit` | — | `number` | Número total de claves de clip/partida conservadas (100/200/300/500, 300 por defecto). |

## Nombre de cuenta y página de invitaciones

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Indica si el nombre de la cuenta de Steam está oculto en este momento. |
| `installAccountNameControl` | — | `void` | Añade un interruptor con forma de ojo junto al enlace de cierre de sesión y lo mantiene sincronizado mediante un `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Rediseña `/vacnet/createinvite`: diseño de tarjeta, mostrar/ocultar y copiar el enlace (Clipboard API con alternativa `execCommand`), lista de requisitos, selector de idioma. Devuelve `false` si faltan los elementos esperados. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Añade el botón de cierre y manejadores para inviteDone (Enter) e inviteClose (Esc). Ignora teclas si el foco está en un botón, enlace, campo, diálogo o lista de idiomas. |
| `refreshInviteKeyLabels` | — | `void` | Actualiza la etiqueta Listo y la ayuda de cierre según las teclas asignadas. |
| `installWelcomePage` | — | `boolean` | Rediseña la bienvenida, agrega identidad y selector de idioma; Enter/Space continúa; devuelve false si faltan elementos. |

## Segmento del clip y adaptador del reproductor

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Extrae `startTime`/`endTime` de los scripts en línea de la página. |
| `formatSegmentTime` | `seconds: number` | `string` | Da formato a los segundos como `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Localiza el elemento `<video>` de la revisión. |
| `getVjsPlayer` | — | `Video.js player \| null` | Devuelve el reproductor Video.js de la página si está disponible y no ha sido destruido. |
| `createPlayerAdapter` | — | `adapter \| null` | API unificada sobre Video.js / video HTML5: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Consulta cada 100 ms hasta que existe un reproductor; rechaza al agotarse el tiempo. |
| `clampSegment` | `time: number, bounds: object` | `number` | Limita un instante a los límites del clip. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Posición relativa dentro del clip. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Añade la barra de búsqueda, el indicador de tiempo y las ayudas de teclas debajo del video. |
| `pauseLayoutMutations` | `run: Function` | `void` | Ejecuta una función mientras los observadores de diseño están suspendidos (evita bucles de retroalimentación). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Devuelve true si el foco está en un campo, textarea, select o texto editable. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Como isShortcutBlocked, pero permite atajos cuando el foco está en una opción de veredicto. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Etiqueta de una opción de velocidad. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Lista de `<option>` para el selector de velocidad (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Velocidad de Shift guardada (2× por defecto). |
| `readStoredVerdictRandomizer` | — | `boolean` | Estado guardado del aleatorizador de veredictos (desactivado por defecto). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Conecta la gestión de la velocidad de reproducción, la limitación/pausa del segmento, las ayudas de búsqueda/avance por cuadros/silencio/pantalla completa y los atajos de teclado globales (`1`–`5`, flechas, `,` `.`, espacio, `M`, `F`, Shift). Cierres internos: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, ayudas del bucle de dibujo. |

## Veredictos predefinidos

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Selecciona «skip» en cada grupo de veredicto sin selección. |
| `getSelectedVerdictState` | — | `object` | Valor actual (`positive` / `negative` / `skip` / `null`) de `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Nombre del ajuste predefinido que coincide con la selección actual. |
| `syncPresetButtons` | — | `string \| null` | Actualiza `aria-pressed` en los botones de ajustes predefinidos y la insignia del ajuste ampliado. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Hace clic en los campos de opción de un ajuste predefinido; con el aleatorizador activado mezcla el orden y espera entre 200 y 600 ms entre clics. Desactiva los botones de ajustes mientras se ejecuta. |
| `readAdvancedPresetsOpen` | — | `boolean` | Indica si el cajón de ajustes predefinidos ampliados se dejó abierto. |
| `normalizeVerdictLabels` | `root = document` | `void` | Elimina el marcado de resaltado de las etiquetas de veredicto. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Añade títulos localizados sobre cada grupo de veredicto. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Crea el botón de ayuda y el aviso localizado de un grupo de veredictos; el texto de VACNet es una alternativa. |
| `closeVerdictHelp` | `except = null` | `void` | Cierra las explicaciones abiertas, excepto la indicada. |
| `installVerdictHelpHandlers` | — | `void` | Instala una sola vez los manejadores de clic, clic externo y Esc de las explicaciones. |

## Avisos, pie de página y carga al enviar

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Oculta el pie de página del sitio. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Muestra un aviso no bloqueante con ARIA-live. |
| `markSubmitPending` | — | `void` | Guarda la marca de tiempo del envío y el id del clip actual en `sessionStorage`. |
| `isSubmitPending` | — | `boolean` | Indica si un envío está esperando al siguiente clip. |
| `clearSubmitPending` | — | `void` | Borra los marcadores de envío pendiente. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Muestra la capa de carga a pantalla completa. |
| `hideSubmitLoadingOverlay` | — | `void` | Oculta la capa y borra el estado pendiente. |
| `bootSubmitLoadingIfPending` | — | `void` | Vuelve a mostrar la capa al cargar la página si hay un envío pendiente. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Verdadero cuando la interfaz y el contenido multimedia del siguiente clip están listos. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Espera hasta 30 s al siguiente clip y luego oculta la capa (aviso de error si se agota el tiempo). |

## Almacén del historial local

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `extractVodId` | — | `string` | Deriva el id del clip/partida a partir de la URL del video. |
| `getGameKey` | — | `string` | Clave del historial de la partida (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Clave del historial de un segmento (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Valida y depura una entrada del historial. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Entradas normalizadas de una clave. |
| `getGameHistoryEntries` | `store: object` | `Array` | Entradas de la partida actual (admite una clave heredada). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Entradas del segmento actual. |
| `formatClipId` | `vodId: string` | `string` | Id numérico corto para mostrar (`#0000000`), obtenido por hash del id del clip. |
| `formatRelativeTime` | `timestamp: number` | `string` | Tiempo relativo localizado (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Carga el objeto del historial desde `localStorage` (`{}` si hay error). |
| `pruneHistoryStore` | `store: object` | `void` | Aplica los límites por clave y totales (se descartan primero las claves más antiguas). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Poda y guarda; `false` si hay errores de cuota o de almacenamiento. |
| `summarizeCurrentVerdict` | — | `string` | Nombre del ajuste predefinido de la selección actual, o `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Etiqueta localizada de un resumen del historial. |
| `formatClockTime` | `seconds: number` | `string` | Formato de reloj `m:ss` (o `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Intervalo de segmento legible. |
| `formatGameLabel` | — | `string` | Etiqueta localizada de la partida actual. |
| `historyEntryKey` | `entry: object` | `string` | Cadena de identidad usada para eliminar duplicados. |
| `formatPriorStat` | `count: number, label: string` | `string` | Línea «etiqueta: N» del panel del historial. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Combina las entradas de clip/partida en elementos para mostrar. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML de una fila del historial. |
| `escapeHtml` | `value: any` | `string` | Escapa `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML del panel del historial, incluido el botón de las normas de revisión. |
| `ensureClipHistoryPanel` | — | `void` | Crea el contenedor del panel si falta. |
| `ensureReviewRulesDialog` | — | `void` | Crea el diálogo de las normas de revisión y enlaza sus botones de abrir/cerrar. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Enlaza el botón «historial local» (se desplaza a la lista o muestra un aviso si está vacío). |
| `positionClipHistoryPanel` | — | `void` | Mantiene el panel como primer elemento dentro de `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Vuelve a renderizar el panel del historial para el clip actual. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Añade el resumen del veredicto actual al historial de la partida y del clip. |
| `isLocalHistoryEnabled` | — | `boolean` | Lee si el historial local está activo; por defecto, sí. |
| `readTimeFormat` | — | `string` | Lee el formato horario: automático, 12 o 24 horas. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Formatea la hora de detección inicial según el idioma y formato. |
| `getQueueNoticeLocale` | — | `string` | Devuelve el idioma activo del aviso de cola vacía. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Migra la preferencia de idioma anterior al ajuste común y sincroniza la URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Actualiza la hora de detección mostrada. |

## Flujo de envío

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Verdadero en las páginas que muestran los cuatro grupos de veredicto. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | El botón de envío nativo, si está visible y habilitado. |
| `recordProceedHistoryIfLabeling` | — | `void` | Registra el historial una vez por envío (protegido contra reentrada). |
| `resetProceedArmed` | — | `void` | Desarma el envío en dos pasos. |
| `refreshProceedButtonLabel` | — | `void` | Actualiza la etiqueta del botón, la ayuda de `Enter` y el estilo de estado armado. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Asigna una selección a `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Construye los campos ocultos `verdict_labels[]`; muestra un aviso de error y devuelve `false` si algún grupo no tiene selección. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Solo permite acciones de formulario HTTPS del mismo origen. |
| `restoreSubmitUi` | — | `void` | Restaura los botones tras un envío fallido. |
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Ejecuta la comprobación de seguridad, muestra la capa de carga y envía el formulario. |
| `submitVerdictsDirect` | — | `boolean` | Prepara las etiquetas y envía. |
| `invokeProceedAction` | — | `boolean` | Controlador de Enter/clic: la primera pulsación arma, la segunda envía. |
| `installProceedShortcut` | — | `void` | Detector en fase de captura para `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Desarma el primer paso del envío o pulsa Cancelar; devuelve false si no hay nada que cancelar. |
| `refreshCancelButtonLabel` | — | `void` | Añade o actualiza la tecla asignada en la etiqueta del botón Cancelar. |
| `hookProceedButton` | — | `void` | Sustituye el comportamiento de clic del botón de envío nativo. |
| `installVerdictChangeReset` | — | `void` | Desarma el envío y vuelve a sincronizar los ajustes predefinidos cuando cambia un veredicto. |
| `scheduleProceedFooterFix` | — | `void` | Llamada diferida (`requestAnimationFrame`) a `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Renormalización diferida de etiquetas/títulos/valores predeterminados. |

## Registro y reasignación de atajos

| Acción | Predeterminado | Grupo | Descripción |
|---|---|---|---|
| `playPause` | `Space` | Reproducción | Pausa o reanuda el clip. |
| `mute` | `M` | Reproducción | Activa o desactiva el sonido. |
| `fullscreen` | `F` | Reproducción | Activa o desactiva la pantalla completa. |
| `seekBack` / `seekForward` | `←` / `→` | Navegación | Retrocede o avanza 5 segundos. |
| `frameBack` / `frameForward` | `,` / `.` | Navegación | Retrocede o avanza un fotograma. |
| `speedBoost` | `Shift` | Navegación | Acelera mientras se mantiene pulsada. |
| `quick1` … `quick5` | `1` … `5` | Veredictos | Formulario clásico: preajustes 1–5; tarea de una pregunta: tres opciones en las teclas 1–3. |
| `proceed` | `Enter` | Envío | Confirma el veredicto o prepara y envía el formulario clásico. |
| `cancel` | `Esc` | Envío | Pulsa Cancelar o desarma el primer Enter. |
| `inviteDone` | `Enter` | Invitación | Sale de la invitación, igual que Listo. |
| `inviteClose` | `Esc` | Invitación | Cierra la invitación, igual que ×. |
| `settings` | `F2` | Interfaz | Abre o cierra los ajustes. |

Las asignaciones se guardan como valores KeyboardEvent.code en demoscopeKeybindings; solo se conservan cambios y la tecla de ajustes va aparte. Los modificadores izquierdo y derecho cuentan como una tecla; el teclado numérico equivale a la fila principal. No se pueden asignar Tab, Ctrl, Alt, Meta, Caps Lock, ContextMenu, F5, F11 ni F12. Los conflictos se limitan a revisión, invitación y la tecla global de ajustes.

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` |  |  |
| `isModalOpen` | — |  |  |
| `normalizeKeyCode` | `code: string` |  |  |
| `formatKeyLabel` | `code: string` |  |  |
| `loadKeyOverrides` | — |  |  |
| `saveKeyOverrides` | `overrides: object` |  |  |
| `getBinding` | `id: string` |  |  |
| `setBinding` | `id: string, code: string` |  |  |
| `resetAllBindings` | — |  |  |
| `findKeyConflict` | `id: string, code: string` |  |  | Busca otra acción que ya use esa tecla en un ámbito coincidente. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` |  |  | Resuelve el evento de teclado al identificador de acción del ámbito actual. |
| `keyScopeOf` | `id: string` |  |  |
| `keyScopesOverlap` | `a: string, b: string` |  |  |
| `currentKeyScope` | — |  |  |
| `validateKeyForAction` | `id: string, code: string` |  |  |
| `quickRangeLabel` | `count: number` |  |  |
| `buildHintsInnerMarkup` | — |  |  |
| `refreshKeyLabels` | — |  |  |
| `ensureDemoscopeDialogStyles` | — |  |  |
| `hkActionName` | `id: string` |  |  |
| `hkGroupName` | `group: string` |  |  |
| `hkActionDescription` | `id: string` |  |  |
| `hkSetMessage` | `text: string, warn = false` |  |  |
| `hkCancelCapture` | — |  |  |
| `hkRowMarkup` | `action: object` |  |  |
| `renderHotkeys` | — |  |  |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` |  |  |
| `hkRequestAssign` | `actionId: string, code: string` |  |  |
| `ensureHotkeysDialog` | — |  |  |
| `openHotkeysDialog` | — |  |  |

## Animaciones

Hay seis estilos de indicador (pulso, respiración, ondas, latido, órbita y parpadeo), tres velocidades (0,6× / 1× / 1,7×) y un interruptor. El estilo se aplica al indicador y a las vistas previas mediante data-ds-anim.

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `readStorage` | `key: string` |  |  | Lee localStorage de forma segura. |
| `writeStorage` | `key: string, value: string \|  |  | Escribe en localStorage; null elimina la clave. |
| `animEnabled` | — |  |  |
| `animStyle` | — |  |  |
| `animSpeedKey` | — |  |  |
| `ensureAnimationStyles` | — |  |  |
| `applyAnimationSettings` | — |  |  |
| `ensureAnimationsDialog` | — |  |  |
| `openAnimationsDialog` | — |  |  |
| `ensureUiPolishStyles` | — |  |  |

## Tarea de una sola pregunta

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `isCheatingMode` | — |  |  |
| `selectCheatingVerdict` | `kind: string` |  |  |
| `localizeCheatingVerdicts` | — |  |  |
| `updateCheatingLock` | — |  |  |
| `startCheatingLockWatcher` | — |  |  |

## Robustez y diagnóstico

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` |  |  |
| `safeStep` | `step: string, fn: Function, fallback?: any` |  |  |
| `getVideoContainer` | — |  |  | Busca el contenedor de vídeo o usa el elemento padre del reproductor o del vídeo. |
| `getVerdictContainer` | — |  |  | Busca el contenedor de veredictos o el padre del primer bloque. |
| `getSubmitArea` | — |  |  | Busca el área de envío o confirmación. |
| `hasVerdictForm` | — |  |  |
| `removeEnhancements` | — |  |  |
| `disableDemoScope` | `reason: string` |  |  |
| `isOwnNode` | `el: Element` |  |  |
| `elementSignature` | `el: Element` |  |  |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` |  |  |
| `captureOriginalSkeleton` | — |  |  |
| `buildDiagnosticsReport` | — |  |  |
| `fallbackCopyText` | `text: string` |  |  |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` |  |  |

## Diseño y arranque

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Construye la barra del selector de velocidad de Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML de un botón de ajuste predefinido. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML de los grupos de ajustes predefinidos ampliados. |
| `buildEnhancementBar` | — | `HTMLElement` | Construye la barra de veredicto rápido: ajustes predefinidos, interruptor del aleatorizador, cajón ampliado. |
| `positionShiftSpeedBar` | — | `void` | Mantiene la barra de velocidad antes de la lista de veredictos. |
| `positionEnhancementBar` | — | `void` | Mantiene la barra de ajustes predefinidos antes de los botones de envío. |
| `fixProceedFooter` | — | `void` | Reorganiza el pie de página, las barras y el botón de envío. |
| `enhanceLayout` | — | `void` | Aplica todos los cambios de diseño e instala la interfaz de configuración. |
| `ensureReviewStructure` | — | `void` | Normaliza VACNet, reubica el botón de envío y muestra el contador en el encabezado; admite la estructura antigua y la nueva. |
| `watchProceedFooter` | — | `void` | Observa `.verdicts-container` y programa correcciones del pie de página. |
| `watchVerdictLabels` | — | `void` | Observa las etiquetas de veredicto y programa la renormalización. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Lee de localStorage la preferencia de visibilidad del pie. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Guarda la preferencia de visibilidad del pie. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Crea o actualiza el pie localizado con enlaces opcionales y aplica preferencias. |
| `installEmptyQueueNotice` | — | `boolean` | Reemplaza el aviso de cola vacía por instrucciones localizadas, hora, selector de idioma y pie. |
| `init` | — | `Promise<void>` | Punto de entrada: control del nombre de cuenta → página de invitaciones o de revisión → diseño, observadores, atajos, mejoras del reproductor. |

installWelcomePage e installInvitePage devuelven false si faltan elementos necesarios de VACNet. installEmptyQueueNotice devuelve false si la cola no está vacía.

### Elementos no enumerados arriba

* **`blockSegmentLoopGuard`** (IIFE, se ejecuta al cargar): sustituye por una función vacía el temporizador nativo de 100 ms del sitio para el ciclo del segmento; los controles de DemoScope gestionan ese límite.
* **Constantes y tablas:** incluye tablas de idiomas, textos, preajustes, velocidades y fotogramas; las versiones posteriores a v1.0.0 añadieron el registro de atajos, veredictos y animaciones.
* **Estado del módulo:** diag registra los fallos, el motivo de desactivación y la estructura original; hkState guarda el estado de la ventana de atajos y SCRIPT_VERSION identifica la versión del informe.
* **Textos:** las cadenas visibles están en las tablas localizadas; las ventanas añadidas entre v1.2.0 y v1.4.0 están traducidas a los 29 idiomas.

## Claves de almacenamiento

| Clave | Almacenamiento | Propósito |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Almacenamiento local | Idioma y modo automático. 
| `demoscopeKeybindings` | `localStorage` | Almacenamiento local | Atajos distintos de los predeterminados (JSON). 
| `demoscopeSettingsHotkey` | `localStorage` | Almacenamiento local | Tecla para abrir los ajustes. 
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Almacenamiento local | Ajustes de animación. 
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Almacenamiento local | Ajustes de sonido. 
| `demoscopeClipHistory` and the history limit/format keys | `localStorage` | Almacenamiento local | Historial local y sus opciones. 
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Almacenamiento de sesión | Estado del envío, sincronización del idioma y aviso de desactivación. 



