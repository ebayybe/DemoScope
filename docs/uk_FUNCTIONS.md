<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · **Українська** · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Довідник функцій

Повний довідник з усіх 128 функцій верхнього рівня в `DemoScope.user.js` v1.0.0 (ім'я, параметри, значення, що повертається, призначення). Назад до [README](../../README/uk_README.md).

Позначення: `—` означає відсутність параметрів; `void` означає, що функцію викликають заради побічних ефектів.

## Локалізація

| Функція | Параметри | Повертає | Призначення |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Вбудована SVG-розмітка прапора для мови; за відсутності повертає значок глобуса. |
| `getSavedLocale` | — | `string \| null` | Читає збережену користувачем мову (`demoscopeLanguage`) із `localStorage`. |
| `getActiveLocale` | — | `string` | Визначає активну мову: збережений вибір → Steam `?l=` → мова браузера/сторінки → `en`. |
| `getLanguageBadge` | — | `string` | Власна назва мови для показу, наприклад «English version», для значка у виборі мови. |
| `tr` | `key: string` | `string` | Шукає рядок інтерфейсу для активної мови (запасний варіант: англійська, потім сам ключ). |
| `inviteText` | `key: string` | `string` | Такий самий пошук для таблиці рядків сторінки запрошень. |
| `settingText` | `key: string` | `string` | Такий самий пошук для таблиці рядків діалогу налаштувань. |
| `getPresetLabel` | `name: string` | `string` | Локалізований підпис шаблону; складає комбінації на кшталт «Bot + Aim». |
| `buildLanguageOptions` | — | `string (HTML)` | HTML кнопок вибору мови, зокрема пункту «auto». |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Підключає спливний вибір мови, позиціонує його, зберігає вибір і перезавантажує сторінку. |

## Звукові ефекти та діалог налаштувань

| Функція | Параметри | Повертає | Призначення |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Рядок «N записів · останній запис: …» у діалозі налаштувань. |
| `soundsEnabled` | — | `boolean` | Чи ввімкнено звуки інтерфейсу (`demoscopeSoundEffectsEnabled`, типово ввімкнено). |
| `getSoundVolume` | — | `number (0–1)` | Збережена гучність звуку (`demoscopeSoundEffectsVolume`, типово 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Синтезує коротку послідовність тонів через Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); ніколи не викидає винятків. |
| `readSettingsHotkey` | — | `string` | Збережений `KeyboardEvent.code`, що відкриває діалог налаштувань (типово `F2`). |
| `formatHotkey` | `code: string` | `string` | Читабельна назва клавіші (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Витягує код фізичної клавіші, зіставляючи нелатинські розкладки назад із `KeyX`; `""`, якщо код непридатний. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Істина для клавіш, які вже використовує DemoScope або плеєр (Enter, пробіл, стрілки, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Створює (один раз) і пов'язує діалог налаштувань: звук, гучність, запис гарячої клавіші, ліміти історії, експорт/імпорт/звіт/об'єднання/очищення, скидання. |
| `openSettingsDialog` | `opener = null` | `void` | Відкриває діалог із поточними значеннями та запам'ятовує елемент, якому слід повернути фокус. |
| `installSettingsUi` | — | `void` | Встановлює глобальний обробник клавіш на фазі capture (відкриття/закриття діалогу, перепризначення) і звукові події. |
| `installUiSoundEvents` | — | `void` | Делегований обробник кліків, що відтворює звуки зворотного зв'язку для елементів DemoScope. |

## Резервні копії, звіти та ліміти історії

| Функція | Параметри | Повертає | Призначення |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Завантажує всю історію як `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Запускає завантаження файлу через тимчасовий Blob URL. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Розгортає й дедуплікує записи історії, спершу найновіші. |
| `exportReadableHistory` | — | `void` | Завантажує автономний локалізований HTML-звіт з історії. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Формує HTML-розмітку звіту з екрануванням. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Оновлює рядок стану інструмента об'єднання (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Перевіряє безліч JSON-копій (кожна ≤ 5 МБ, разом ≤ 100 МБ), дедуплікує записи й завантажує один зведений HTML-звіт. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Перевірка ключів історії за білим списком (блокує `__proto__`, `constructor` і некоректні ключі). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Перевіряє JSON-копію, об'єднує її з локальною історією (з урахуванням лімітів) і оновлює інтерфейс. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Читає числовий ліміт із `localStorage`, приймаючи лише допустимі значення. |
| `getHistoryPerKeyLimit` | — | `number` | Кількість записів, що зберігаються на ключ кліпу/гри (10/20/30/50, типово 30). |
| `getHistoryTotalLimit` | — | `number` | Загальна кількість ключів кліпів/ігор, що зберігаються (100/200/300/500, типово 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | Чи залишалася відкритою шухляда розширених шаблонів. |

## Ім'я облікового запису та сторінка запрошень

| Функція | Параметри | Повертає | Призначення |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Чи приховане зараз ім'я облікового запису Steam. |
| `installAccountNameControl` | — | `void` | Додає перемикач-око поруч із посиланням виходу й підтримує його синхронізацію через `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Переробляє `/vacnet/createinvite`: картковий макет, показ/приховування та копіювання посилання (Clipboard API із запасним `execCommand`), перелік вимог, вибір мови. Повертає `false`, якщо очікуваних елементів немає. |

## Сегмент кліпу та адаптер плеєра

| Функція | Параметри | Повертає | Призначення |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Витягує `startTime`/`endTime` із вбудованих скриптів сторінки. |
| `formatSegmentTime` | `seconds: number` | `string` | Форматує секунди як `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Знаходить елемент `<video>` кліпу, що перевіряється. |
| `getVjsPlayer` | — | `Video.js player \| null` | Повертає плеєр Video.js сторінки, якщо він доступний і не знищений. |
| `createPlayerAdapter` | — | `adapter \| null` | Єдиний API поверх Video.js / HTML5-відео: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Опитує кожні 100 мс, доки не з'явиться плеєр; відхиляє після завершення часу очікування. |
| `clampSegment` | `time: number, bounds: object` | `number` | Обмежує час межами кліпу. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Відносна позиція всередині кліпу. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Додає смугу перемотування, індикатор часу та підказки клавіш під відео. |
| `pauseLayoutMutations` | `run: Function` | `void` | Виконує зворотний виклик, поки спостерігачі розмітки призупинені (запобігає циклам зворотного зв'язку). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Істина, коли фокус перебуває в полі введення, textarea, select, кнопці, посиланні або редагованому елементі. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Підпис варіанта швидкості. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Список `<option>` для вибору швидкості (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Збережена швидкість за Shift (типово 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Збережений стан рандомайзера вердиктів (типово вимкнений). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Підключає обробку швидкості відтворення, обмеження/паузу сегмента, помічники перемотування/покадрового кроку/вимкнення звуку/повного екрана та глобальні гарячі клавіші (`1`–`5`, стрілки, `,` `.`, пробіл, `M`, `F`, Shift). Внутрішні замикання: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, помічники циклу малювання. |

## Шаблони вердиктів

| Функція | Параметри | Повертає | Призначення |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Вибирає «skip» у кожній групі вердиктів без вибору. |
| `getSelectedVerdictState` | — | `object` | Поточне значення (`positive` / `negative` / `skip` / `null`) для `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Назва шаблону, що відповідає поточному вибору. |
| `syncPresetButtons` | — | `string \| null` | Оновлює `aria-pressed` на кнопках шаблонів і значок розширеного шаблону. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Натискає радіокнопки шаблону; за ввімкненого рандомайзера перемішує порядок і чекає 200–600 мс між натисканнями. На час роботи блокує кнопки шаблонів. |
| `normalizeVerdictLabels` | `root = document` | `void` | Прибирає розмітку підсвічування з підписів вердиктів. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Додає локалізовані заголовки над кожною групою вердиктів. |

## Сповіщення, підвал і завантаження під час надсилання

| Функція | Параметри | Повертає | Призначення |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Приховує підвал сайту. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Показує неблокувальне сповіщення ARIA-live. |
| `markSubmitPending` | — | `void` | Зберігає в `sessionStorage` час надсилання та ідентифікатор поточного кліпу. |
| `isSubmitPending` | — | `boolean` | Чи очікує надсилання наступного кліпу. |
| `clearSubmitPending` | — | `void` | Очищає ознаки очікуваного надсилання. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Показує повносторінковий екран завантаження. |
| `hideSubmitLoadingOverlay` | — | `void` | Приховує екран і скидає стан очікування. |
| `bootSubmitLoadingIfPending` | — | `void` | Повторно показує екран під час завантаження сторінки, якщо є очікуване надсилання. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Істина, коли інтерфейс і медіа наступного кліпу готові. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Чекає наступний кліп до 30 с, потім приховує екран (сповіщення про помилку за тайм-аутом). |

## Локальне сховище історії

| Функція | Параметри | Повертає | Призначення |
|---|---|---|---|
| `extractVodId` | — | `string` | Виводить ідентифікатор кліпу/гри з URL відео. |
| `getGameKey` | — | `string` | Ключ історії для гри (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Ключ історії для одного сегмента (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Перевіряє й очищає один запис історії. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Нормалізовані записи для ключа. |
| `getGameHistoryEntries` | `store: object` | `Array` | Записи для поточної гри (підтримує застарілий ключ). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Записи для поточного сегмента. |
| `formatClipId` | `vodId: string` | `string` | Короткий числовий ідентифікатор для показу (`#0000000`), отриманий хешуванням ідентифікатора кліпу. |
| `formatRelativeTime` | `timestamp: number` | `string` | Локалізований відносний час (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Завантажує об'єкт історії з `localStorage` (`{}` у разі помилки). |
| `pruneHistoryStore` | `store: object` | `void` | Застосовує ліміти на ключ і загальний ліміт (спершу видаляються найстарші ключі). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Обрізає й зберігає; `false` у разі помилок квоти/сховища. |
| `summarizeCurrentVerdict` | — | `string` | Назва шаблону для поточного вибору або `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Локалізований підпис для зведення історії. |
| `formatClockTime` | `seconds: number` | `string` | Формат годинника `m:ss` (або `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Читабельний діапазон сегмента. |
| `formatGameLabel` | — | `string` | Локалізований підпис поточної гри. |
| `historyEntryKey` | `entry: object` | `string` | Рядок-ідентифікатор, що використовується для дедуплікації. |
| `formatPriorStat` | `count: number, label: string` | `string` | Рядок «підпис: N» у панелі історії. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Об'єднує записи кліпів/ігор в елементи для показу. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML одного рядка історії. |
| `escapeHtml` | `value: any` | `string` | Екранує `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML панелі історії, зокрема кнопки правил перевірки. |
| `ensureClipHistoryPanel` | — | `void` | Створює контейнер панелі, якщо його немає. |
| `ensureReviewRulesDialog` | — | `void` | Створює діалог правил перевірки та пов'язує його кнопки відкриття/закриття. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Пов'язує кнопку «локальна історія» (прокручує до списку або показує сповіщення про порожню історію). |
| `positionClipHistoryPanel` | — | `void` | Тримає панель першим елементом у `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Перемальовує панель історії для поточного кліпу. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Додає зведення поточного вердикту до історії гри та кліпу. |

## Процес надсилання

| Функція | Параметри | Повертає | Призначення |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Істина на сторінках, що показують чотири групи вердиктів. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Нативна кнопка надсилання, якщо вона видима й доступна. |
| `recordProceedHistoryIfLabeling` | — | `void` | Записує історію один раз за надсилання (із захистом від повторного входу). |
| `resetProceedArmed` | — | `void` | Знімає з бойового зводу двоетапне надсилання. |
| `refreshProceedButtonLabel` | — | `void` | Оновлює підпис кнопки/підказку `Enter` і стиль зведеного стану. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Зіставляє вибір із `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Будує приховані поля `verdict_labels[]`; показує сповіщення про помилку й повертає `false`, якщо в якійсь групі немає вибору. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Дозволяє лише дії форм за HTTPS з тим самим джерелом. |
| `restoreSubmitUi` | — | `void` | Відновлює кнопки після невдалого надсилання. |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Виконує перевірку безпеки, показує екран завантаження й надсилає форму. |
| `submitVerdictsDirect` | — | `boolean` | Готує підписи й надсилає. |
| `invokeProceedAction` | — | `boolean` | Обробник Enter/кліку: перше натискання зводить, друге надсилає. |
| `installProceedShortcut` | — | `void` | Обробник на фазі capture для `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Замінює поведінку кліку нативної кнопки надсилання. |
| `installVerdictChangeReset` | — | `void` | Знімає звід надсилання й повторно синхронізує шаблони, коли вердикт змінюється. |
| `scheduleProceedFooterFix` | — | `void` | Відкладений (`requestAnimationFrame`) виклик `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Відкладена повторна нормалізація підписів/заголовків/типових значень. |

## Розмітка та запуск

| Функція | Параметри | Повертає | Призначення |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Будує панель вибору швидкості Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML однієї кнопки шаблону. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML груп розширених шаблонів. |
| `buildEnhancementBar` | — | `HTMLElement` | Будує панель швидких вердиктів: шаблони, перемикач рандомайзера, розширена шухляда. |
| `positionShiftSpeedBar` | — | `void` | Тримає панель швидкості перед списком вердиктів. |
| `positionEnhancementBar` | — | `void` | Тримає панель шаблонів перед кнопками надсилання. |
| `fixProceedFooter` | — | `void` | Переупорядковує підвал, панелі та кнопку надсилання. |
| `enhanceLayout` | — | `void` | Застосовує всі зміни розмітки та встановлює інтерфейс налаштувань. |
| `watchProceedFooter` | — | `void` | Спостерігає за `.verdicts-container` і планує виправлення підвалу. |
| `watchVerdictLabels` | — | `void` | Спостерігає за підписами вердиктів і планує повторну нормалізацію. |
| `init` | — | `Promise<void>` | Точка входу: елемент керування іменем облікового запису → сторінка запрошень або перевірки → розмітка, спостерігачі, гарячі клавіші, покращення плеєра. |

### Не перелічено вище

* **`blockSegmentLoopGuard`** (IIFE, виконується під час завантаження): обгортає `setInterval` на сторінці, так що вбудований 100-мілісекундний таймер циклу сегмента на сайті замінюється порожньою функцією; сегментом керують власні елементи DemoScope.
* **Константи й таблиці:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 визначення).
