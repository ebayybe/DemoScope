<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · **Español (España)** · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Referencia de funciones

Referencia completa de las 128 funciones de nivel superior de `DemoScope.user.js` v1.0.0 (nombre, parámetros, valor devuelto, responsabilidad). Volver al [README](../../README/es-ES_README.md).

Convenciones: `—` significa sin parámetros; `void` significa que la función se invoca por sus efectos secundarios.

## Localización

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Código SVG en línea de la bandera de un idioma; si no existe, devuelve un icono de globo terráqueo. |
| `getSavedLocale` | — | `string \| null` | Lee el idioma guardado del usuario (`demoscopeLanguage`) desde `localStorage`. |
| `getActiveLocale` | — | `string` | Determina el idioma activo: elección guardada → Steam `?l=` → idioma del navegador/página → `en`. |
| `getLanguageBadge` | — | `string` | Nombre propio del idioma, p. ej. «English version», para la insignia del selector de idioma. |
| `tr` | `key: string` | `string` | Busca una cadena de la interfaz para el idioma activo (alternativa: inglés y, después, la propia clave). |
| `inviteText` | `key: string` | `string` | La misma búsqueda para la tabla de cadenas de la página de invitaciones. |
| `settingText` | `key: string` | `string` | La misma búsqueda para la tabla de cadenas del diálogo de ajustes. |
| `getPresetLabel` | `name: string` | `string` | Etiqueta localizada de un ajuste predefinido; compone combinaciones como «Bot + Aim». |
| `buildLanguageOptions` | — | `string (HTML)` | HTML de los botones de selección de idioma, incluida la entrada «auto». |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Enlaza el selector de idioma emergente, lo posiciona, guarda la elección y recarga la página. |

## Efectos de sonido y diálogo de ajustes

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Línea «N entradas · última entrada: …» que se muestra en el diálogo de ajustes. |
| `soundsEnabled` | — | `boolean` | Indica si los sonidos de la interfaz están activados (`demoscopeSoundEffectsEnabled`, activado por defecto). |
| `getSoundVolume` | — | `number (0–1)` | Volumen de sonido guardado (`demoscopeSoundEffectsVolume`, 0,4 por defecto). |
| `playUiSound` | `kind = "click"` | `void` | Sintetiza una breve secuencia de tonos con Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); nunca lanza errores. |
| `readSettingsHotkey` | — | `string` | `KeyboardEvent.code` guardado que abre el diálogo de ajustes (`F2` por defecto). |
| `formatHotkey` | `code: string` | `string` | Nombre legible de una tecla (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Extrae el código de la tecla física, asignando de nuevo los teclados no latinos a `KeyX`; `""` si no es utilizable. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Verdadero para las teclas que DemoScope o el reproductor ya usan (Enter, espacio, flechas, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Crea (una sola vez) y conecta el diálogo de ajustes: sonido, volumen, captura del atajo, límites del historial, exportar/importar/informe/fusionar/borrar, restablecer. |
| `openSettingsDialog` | `opener = null` | `void` | Abre el diálogo con los valores actuales y recuerda el elemento al que devolver el foco. |
| `installSettingsUi` | — | `void` | Instala el detector global de teclas en fase de captura (abrir/cerrar el diálogo, reasignación) y los eventos de sonido. |
| `installUiSoundEvents` | — | `void` | Detector de clics delegado que reproduce sonidos de respuesta para los controles de DemoScope. |

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
| `readAdvancedPresetsOpen` | — | `boolean` | Indica si el cajón de ajustes predefinidos ampliados se dejó abierto. |

## Nombre de cuenta y página de invitaciones

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Indica si el nombre de la cuenta de Steam está oculto en este momento. |
| `installAccountNameControl` | — | `void` | Añade un interruptor con forma de ojo junto al enlace de cierre de sesión y lo mantiene sincronizado mediante un `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Rediseña `/vacnet/createinvite`: diseño de tarjeta, mostrar/ocultar y copiar el enlace (Clipboard API con alternativa `execCommand`), lista de requisitos, selector de idioma. Devuelve `false` si faltan los elementos esperados. |

## Segmento del clip y adaptador del reproductor

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Extrae `startTime`/`endTime` de los scripts en línea de la página. |
| `formatSegmentTime` | `seconds: number` | `string` | Da formato a los segundos como `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Localiza el elemento `<video>` de la revisión. |
| `getVjsPlayer` | — | `Video.js player \| null` | Devuelve el reproductor Video.js de la página si está disponible y no ha sido destruido. |
| `createPlayerAdapter` | — | `adapter \| null` | API unificada sobre Video.js / vídeo HTML5: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Consulta cada 100 ms hasta que existe un reproductor; rechaza al agotarse el tiempo. |
| `clampSegment` | `time: number, bounds: object` | `number` | Limita un instante a los límites del clip. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Posición relativa dentro del clip. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Añade la barra de búsqueda, el indicador de tiempo y las ayudas de teclas debajo del vídeo. |
| `pauseLayoutMutations` | `run: Function` | `void` | Ejecuta una función mientras los observadores de diseño están suspendidos (evita bucles de retroalimentación). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Verdadero cuando el foco está en un campo de entrada, textarea, select, botón, enlace o elemento editable. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Etiqueta de una opción de velocidad. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Lista de `<option>` para el selector de velocidad (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Velocidad de Shift guardada (2× por defecto). |
| `readStoredVerdictRandomizer` | — | `boolean` | Estado guardado del aleatorizador de veredictos (desactivado por defecto). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Conecta la gestión de la velocidad de reproducción, la limitación/pausa del segmento, las ayudas de búsqueda/avance por fotogramas/silencio/pantalla completa y los atajos de teclado globales (`1`–`5`, flechas, `,` `.`, espacio, `M`, `F`, Shift). Cierres internos: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, ayudas del bucle de dibujo. |

## Veredictos predefinidos

| Función | Parámetros | Devuelve | Responsabilidad |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Selecciona «skip» en cada grupo de veredicto sin selección. |
| `getSelectedVerdictState` | — | `object` | Valor actual (`positive` / `negative` / `skip` / `null`) de `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Nombre del ajuste predefinido que coincide con la selección actual. |
| `syncPresetButtons` | — | `string \| null` | Actualiza `aria-pressed` en los botones de ajustes predefinidos y la insignia del ajuste ampliado. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Hace clic en los campos de opción de un ajuste predefinido; con el aleatorizador activado mezcla el orden y espera entre 200 y 600 ms entre clics. Desactiva los botones de ajustes mientras se ejecuta. |
| `normalizeVerdictLabels` | `root = document` | `void` | Elimina el marcado de resaltado de las etiquetas de veredicto. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Añade títulos localizados sobre cada grupo de veredicto. |

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
| `extractVodId` | — | `string` | Deriva el id del clip/partida a partir de la URL del vídeo. |
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
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Ejecuta la comprobación de seguridad, muestra la capa de carga y envía el formulario. |
| `submitVerdictsDirect` | — | `boolean` | Prepara las etiquetas y envía. |
| `invokeProceedAction` | — | `boolean` | Controlador de Enter/clic: la primera pulsación arma, la segunda envía. |
| `installProceedShortcut` | — | `void` | Detector en fase de captura para `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Sustituye el comportamiento de clic del botón de envío nativo. |
| `installVerdictChangeReset` | — | `void` | Desarma el envío y vuelve a sincronizar los ajustes predefinidos cuando cambia un veredicto. |
| `scheduleProceedFooterFix` | — | `void` | Llamada diferida (`requestAnimationFrame`) a `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Renormalización diferida de etiquetas/títulos/valores predeterminados. |

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
| `enhanceLayout` | — | `void` | Aplica todos los cambios de diseño e instala la interfaz de ajustes. |
| `watchProceedFooter` | — | `void` | Observa `.verdicts-container` y programa correcciones del pie de página. |
| `watchVerdictLabels` | — | `void` | Observa las etiquetas de veredicto y programa la renormalización. |
| `init` | — | `Promise<void>` | Punto de entrada: control del nombre de cuenta → página de invitaciones o de revisión → diseño, observadores, atajos, mejoras del reproductor. |

### No incluido arriba

* **`blockSegmentLoopGuard`** (IIFE, se ejecuta al cargar): envuelve `setInterval` en la página para que el temporizador nativo de bucle de segmento de 100 ms del sitio se sustituya por una función vacía; los controles propios de DemoScope gestionan el segmento.
* **Constantes y tablas:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definiciones).
