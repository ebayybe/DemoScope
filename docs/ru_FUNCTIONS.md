<div align="center">

[English](en_FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · **Русский** · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Справочник функций

Полный справочник по всем 143 функциям верхнего уровня в `DemoScope.user.js` v1.0.0 (имя, параметры, возвращаемое значение, назначение). Назад к [README](../README/ru_README.md).

Обозначения: `—` означает отсутствие параметров; `void` означает, что функция вызывается ради побочных эффектов.

## Обзор поведения для пользователя

| Раздел | Описание |
|---|---|
| Страницы и язык | Скрипт улучшает страницы VACNet: приветствие (/vacnet), проверку клипов (/vacnet/clips), приглашения (/vacnet/createinvite) и состояние без клипов; другие страницы не меняет. Поддерживает 29 языков: ручной выбор приоритетен, иначе используется Steam ?l=, затем язык браузера. Автоматический режим синхронизирует ?l= с языком браузера. На страницах приветствия и приглашений общий выбор языка и скрытие имени аккаунта; на приветствии можно продолжить клавишами Enter/Space, а ссылку-приглашение скрыть, показать и скопировать. |
| Проверка, клавиши и настройки | Проверка клипов включает быстрые вердикты, расширенные комбинации, выключенный по умолчанию рандомайзер, ускорение Shift, перемотку в пределах клипа, покадровое управление и горячие клавиши; Space управляет видео. Enter или Numpad Enter активирует «Продолжить»; в форме первое нажатие подготавливает действие, второе отправляет вердикты. Space не отправляет вердикт. По умолчанию настройки открываются клавишей F2, её можно переназначить. В настройках есть звуки и громкость, локальная история и лимиты, формат времени 12/24 часа и видимость подвала. |
| Локальная история | История хранится только в localStorage этого браузера и не отправляется DemoScope. Её можно отключить, импортировать, экспортировать в JSON/HTML, объединить JSON-копии в один HTML-отчёт или очистить. Лимиты: 10/20/30/50 записей на ключ и 100/200/300/500 ключей. Отключение прекращает новые записи, но не удаляет сохранённые. |
| Пустая очередь, подвал и конфиденциальность | При пустой очереди показываются локализованное пояснение, сохранённое в браузере время первого обнаружения и выбор языка. Информация о примерно 250 демо в день основана на наблюдениях и не является лимитом DemoScope; скрипт не меняет и не обходит ограничения VACNet, условия приглашений или обработку вердиктов. Подвал локализован; на странице клипов он может содержать ссылки на отзыв и сообщение о проблеме, которые можно скрыть отдельно или вместе с авторской строкой. Язык, история и настройки остаются в профиле браузера. |

## Локализация

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Встроенная SVG-разметка флага для языка; при отсутствии возвращает значок глобуса. |
| `getSavedLocale` | — | `string \| null` | Читает сохранённый пользователем язык (`demoscopeLanguage`) из `localStorage`. |
| `getActiveLocale` | — | `string` | Определяет активный язык: сохранённый выбор → Steam `?l=` → язык браузера/страницы → `en`. |
| `getLanguageBadge` | — | `string` | Собственное отображаемое название языка, например «English version», для значка в выборе языка. |
| `tr` | `key: string` | `string` | Ищет строку интерфейса для активного языка (запасной вариант: английский, затем сам ключ). |
| `inviteText` | `key: string` | `string` | Такой же поиск для таблицы строк страницы приглашений. |
| `settingText` | `key: string` | `string` | Такой же поиск для таблицы строк диалога настроек. |
| `getPresetLabel` | `name: string` | `string` | Локализованная подпись пресета; собирает сочетания вроде «Bot + Aim». |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | HTML кнопок выбора языка, включая пункт «auto». |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Привязывает и позиционирует переключатель языка, сохраняет выбор и перезагружает страницу; необязательный callback может обработать выбор без перезагрузки. |

## Звуковые эффекты и диалог настроек

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Строка «N записей · последняя запись: …» в диалоге настроек. |
| `soundsEnabled` | — | `boolean` | Включены ли звуки интерфейса (`demoscopeSoundEffectsEnabled`, по умолчанию включены). |
| `getSoundVolume` | — | `number (0–1)` | Сохранённая громкость звука (`demoscopeSoundEffectsVolume`, по умолчанию 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Синтезирует короткую последовательность тонов через Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); никогда не выбрасывает исключений. |
| `readSettingsHotkey` | — | `string` | Сохранённый `KeyboardEvent.code`, открывающий диалог настроек (по умолчанию `F2`). |
| `formatHotkey` | `code: string` | `string` | Читаемое название клавиши (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Извлекает код физической клавиши, сопоставляя нелатинские раскладки обратно с `KeyX`; `""`, если код непригоден. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Истина для клавиш, которые уже использует DemoScope или плеер (Enter, пробел, стрелки, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Создаёт диалог настроек и связывает элементы управления: звуки и громкость, предпрослушивание, горячая клавиша, локальная история и лимиты, формат времени, импорт/экспорт JSON, экспорт/объединение HTML, очистка истории, видимость подвала и сброс настроек. |
| `openSettingsDialog` | `opener = null` | `void` | Открывает диалог с текущими значениями и запоминает элемент, которому нужно вернуть фокус. |
| `installSettingsUi` | — | `void` | Устанавливает глобальный обработчик клавиш на фазе capture (открытие/закрытие диалога, переназначение) и звуковые события. |
| `installUiSoundEvents` | — | `void` | Делегированный обработчик кликов, который проигрывает звуки обратной связи для элементов DemoScope. |

## Резервные копии, отчёты и лимиты истории

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Скачивает всю историю как `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Запускает скачивание файла через временный Blob URL. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Разворачивает и дедуплицирует записи истории, сначала самые новые. |
| `exportReadableHistory` | — | `void` | Скачивает автономный локализованный HTML-отчёт по истории. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Формирует HTML-разметку отчёта с экранированием. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Обновляет строку состояния инструмента объединения (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Проверяет множество JSON-копий (каждая ≤ 5 МБ, всего ≤ 100 МБ), дедуплицирует записи и скачивает один сводный HTML-отчёт. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Проверка ключей истории по белому списку (блокирует `__proto__`, `constructor` и некорректные ключи). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Проверяет JSON-копию, объединяет её с локальной историей (с учётом лимитов) и обновляет интерфейс. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Читает числовой лимит из `localStorage`, принимая только допустимые значения. |
| `getHistoryPerKeyLimit` | — | `number` | Число записей, хранимых на ключ клипа/игры (10/20/30/50, по умолчанию 30). |
| `getHistoryTotalLimit` | — | `number` | Общее число хранимых ключей клипов/игр (100/200/300/500, по умолчанию 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | Оставался ли открытым ящик расширенных пресетов. |

## Имя аккаунта и страница приглашений

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Скрыто ли сейчас имя аккаунта Steam. |
| `installAccountNameControl` | — | `void` | Добавляет переключатель-глаз рядом со ссылкой выхода и поддерживает его синхронизацию через `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Переделывает `/vacnet/createinvite`: карточная раскладка, показ/скрытие и копирование ссылки (Clipboard API с запасным `execCommand`), список требований, выбор языка. Возвращает `false`, если ожидаемых элементов нет. |

## Сегмент клипа и адаптер плеера

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Извлекает `startTime`/`endTime` из встроенных скриптов страницы. |
| `formatSegmentTime` | `seconds: number` | `string` | Форматирует секунды как `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Находит элемент `<video>` проверяемого клипа. |
| `getVjsPlayer` | — | `Video.js player \| null` | Возвращает плеер Video.js страницы, если он доступен и не уничтожен. |
| `createPlayerAdapter` | — | `adapter \| null` | Единый API поверх Video.js / HTML5-видео: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Опрашивает каждые 100 мс, пока не появится плеер; отклоняет при истечении времени. |
| `clampSegment` | `time: number, bounds: object` | `number` | Ограничивает время границами клипа. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Относительная позиция внутри клипа. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Добавляет полосу перемотки, индикатор времени и подсказки клавиш под видео. |
| `pauseLayoutMutations` | `run: Function` | `void` | Выполняет колбэк, пока наблюдатели разметки приостановлены (предотвращает циклы обратной связи). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Возвращает true, если фокус находится в поле ввода, textarea, select или редактируемом тексте. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Подпись варианта скорости. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Список `<option>` для выбора скорости (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Сохранённая скорость при Shift (по умолчанию 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Сохранённое состояние рандомайзера вердиктов (по умолчанию выключен). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Подключает обработку скорости воспроизведения, ограничение/паузу сегмента, помощники перемотки/покадрового шага/отключения звука/полного экрана и глобальные горячие клавиши (`1`–`5`, стрелки, `,` `.`, пробел, `M`, `F`, Shift). Внутренние замыкания: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, помощники цикла отрисовки. |

## Пресеты вердиктов

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Выбирает «skip» в каждой группе вердиктов без выбора. |
| `getSelectedVerdictState` | — | `object` | Текущее значение (`positive` / `negative` / `skip` / `null`) для `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Название пресета, соответствующего текущему выбору. |
| `syncPresetButtons` | — | `string \| null` | Обновляет `aria-pressed` на кнопках пресетов и значок расширенного пресета. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Нажимает радиокнопки пресета; при включённом рандомайзере перемешивает порядок и ждёт 200–600 мс между нажатиями. На время работы блокирует кнопки пресетов. |
| `normalizeVerdictLabels` | `root = document` | `void` | Убирает разметку подсветки из подписей вердиктов. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Добавляет локализованные заголовки над каждой группой вердиктов. |

## Уведомления, подвал и загрузка при отправке

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Скрывает подвал сайта. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Показывает неблокирующее уведомление ARIA-live. |
| `markSubmitPending` | — | `void` | Сохраняет в `sessionStorage` время отправки и идентификатор текущего клипа. |
| `isSubmitPending` | — | `boolean` | Ожидает ли отправка следующего клипа. |
| `clearSubmitPending` | — | `void` | Очищает признаки ожидающей отправки. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Показывает полностраничный экран загрузки. |
| `hideSubmitLoadingOverlay` | — | `void` | Скрывает экран и сбрасывает состояние ожидания. |
| `bootSubmitLoadingIfPending` | — | `void` | Повторно показывает экран при загрузке страницы, если есть ожидающая отправка. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Истина, когда интерфейс и медиа следующего клипа готовы. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Ждёт следующий клип до 30 с, затем скрывает экран (уведомление об ошибке по таймауту). |

## Локальное хранилище истории

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `extractVodId` | — | `string` | Выводит идентификатор клипа/игры из URL видео. |
| `getGameKey` | — | `string` | Ключ истории для игры (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Ключ истории для одного сегмента (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Проверяет и очищает одну запись истории. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Нормализованные записи для ключа. |
| `getGameHistoryEntries` | `store: object` | `Array` | Записи для текущей игры (поддерживает устаревший ключ). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Записи для текущего сегмента. |
| `formatClipId` | `vodId: string` | `string` | Короткий числовой отображаемый идентификатор (`#0000000`), полученный хешированием идентификатора клипа. |
| `formatRelativeTime` | `timestamp: number` | `string` | Локализованное относительное время (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Загружает объект истории из `localStorage` (`{}` при ошибке). |
| `pruneHistoryStore` | `store: object` | `void` | Применяет лимиты на ключ и общий лимит (сначала удаляются самые старые ключи). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Обрезает и сохраняет; `false` при ошибках квоты/хранилища. |
| `summarizeCurrentVerdict` | — | `string` | Название пресета для текущего выбора или `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Локализованная подпись для сводки истории. |
| `formatClockTime` | `seconds: number` | `string` | Формат часов `m:ss` (или `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Читаемый диапазон сегмента. |
| `formatGameLabel` | — | `string` | Локализованная подпись текущей игры. |
| `historyEntryKey` | `entry: object` | `string` | Строка-идентификатор, используемая для дедупликации. |
| `formatPriorStat` | `count: number, label: string` | `string` | Строка «подпись: N» в панели истории. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Объединяет записи клипов/игр в элементы для показа. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML одной строки истории. |
| `escapeHtml` | `value: any` | `string` | Экранирует `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML панели истории, включая кнопку правил проверки. |
| `ensureClipHistoryPanel` | — | `void` | Создаёт контейнер панели, если его нет. |
| `ensureReviewRulesDialog` | — | `void` | Создаёт диалог правил проверки и связывает его кнопки открытия/закрытия. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Связывает кнопку «локальная история» (прокручивает к списку или показывает уведомление о пустой истории). |
| `positionClipHistoryPanel` | — | `void` | Держит панель первым элементом в `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Перерисовывает панель истории для текущего клипа. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Добавляет сводку текущего вердикта в историю игры и клипа. |

## Процесс отправки

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Истина на страницах, где показаны четыре группы вердиктов. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Нативная кнопка отправки, если она видима и доступна. |
| `recordProceedHistoryIfLabeling` | — | `void` | Записывает историю один раз за отправку (с защитой от повторного входа). |
| `resetProceedArmed` | — | `void` | Снимает с боевого взвода двухэтапную отправку. |
| `refreshProceedButtonLabel` | — | `void` | Обновляет подпись кнопки/подсказку `Enter` и стиль взведённого состояния. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Сопоставляет выбор с `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Строит скрытые поля `verdict_labels[]`; показывает уведомление об ошибке и возвращает `false`, если в какой-либо группе нет выбора. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Разрешает только действия форм по HTTPS с тем же источником. |
| `restoreSubmitUi` | — | `void` | Восстанавливает кнопки после неудачной отправки. |
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Выполняет проверку безопасности, показывает экран загрузки и отправляет форму. |
| `submitVerdictsDirect` | — | `boolean` | Подготавливает подписи и отправляет. |
| `invokeProceedAction` | — | `boolean` | Обработчик Enter/клика: первое нажатие взводит, второе отправляет. |
| `installProceedShortcut` | — | `void` | Обработчик на фазе capture для `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Заменяет поведение клика нативной кнопки отправки. |
| `installVerdictChangeReset` | — | `void` | Снимает взвод отправки и повторно синхронизирует пресеты при изменении вердикта. |
| `scheduleProceedFooterFix` | — | `void` | Отложенный (`requestAnimationFrame`) вызов `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Отложенная повторная нормализация подписей/заголовков/значений по умолчанию. |

## Разметка и запуск

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Строит панель выбора скорости Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML одной кнопки пресета. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML групп расширенных пресетов. |
| `buildEnhancementBar` | — | `HTMLElement` | Строит панель быстрых вердиктов: пресеты, переключатель рандомайзера, расширенный ящик. |
| `positionShiftSpeedBar` | — | `void` | Держит панель скорости перед списком вердиктов. |
| `positionEnhancementBar` | — | `void` | Держит панель пресетов перед кнопками отправки. |
| `fixProceedFooter` | — | `void` | Переупорядочивает подвал, панели и кнопку отправки. |
| `enhanceLayout` | — | `void` | Применяет все изменения разметки и устанавливает интерфейс настроек. |
| `watchProceedFooter` | — | `void` | Наблюдает за `.verdicts-container` и планирует исправления подвала. |
| `watchVerdictLabels` | — | `void` | Наблюдает за подписями вердиктов и планирует повторную нормализацию. |
| `init` | — | `Promise<void>` | Точка входа: элемент управления именем аккаунта → страница приглашений или проверки → разметка, наблюдатели, горячие клавиши, улучшения плеера. |

### Дополнение к текущей реализации

> 15 новых функций определяют и синхронизируют язык, локализуют уведомление о пустой очереди, оформляют приветственную страницу, управляют локальной историей и временем, обновляют отображаемое время и настройки видимости подвала.

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `getBrowserLocale` | — | `string \| null` | Находит первый поддерживаемый язык браузера, включая региональные варианты. |
| `syncAutomaticLanguage` | — | `boolean` | В автоматическом режиме синхронизирует ?l= с языком браузера и переходит по новому адресу при несовпадении. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Ищет локализованный текст уведомления о пустой очереди или подвала. |
| `installWelcomePage` | — | `boolean` | Оформляет приветственную страницу, добавляет брендинг и выбор языка; Enter/Space продолжает; возвращает false, если нужных элементов нет. |
| `isLocalHistoryEnabled` | — | `boolean` | Читает, включена ли локальная история; по умолчанию включена. |
| `readTimeFormat` | — | `string` | Читает формат времени: автоматический, 12- или 24-часовой. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Форматирует время первого обнаружения с учётом языка и формата времени. |
| `getQueueNoticeLocale` | — | `string` | Возвращает активный язык уведомления о пустой очереди. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Переносит прежний выбор языка в общую настройку и синхронизирует URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Обновляет отображаемое время первого обнаружения. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Читает из localStorage настройку видимости подвала. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Сохраняет настройку видимости подвала. |
| `applyFooterPreferences` | `footer: HTMLElement | null = document.querySelector(".demoscope-custom-footer")` | `void` | Применяет настройки к ссылкам, авторским правам и подвалу целиком, включая «скрыть всё». |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Создаёт или обновляет локализованный подвал с необязательными ссылками и применяет настройки видимости. |
| `installEmptyQueueNotice` | — | `boolean` | Заменяет сообщение о пустой очереди локализованным пояснением, временем, выбором языка и подвалом. |

### Не перечислено выше

* **`blockSegmentLoopGuard`** (IIFE, выполняется при загрузке): оборачивает `setInterval` на странице, так что встроенный 100-миллисекундный таймер зацикливания сегмента на сайте заменяется пустой функцией; сегментом управляют собственные элементы DemoScope.
* **Константы и таблицы:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 определение).
