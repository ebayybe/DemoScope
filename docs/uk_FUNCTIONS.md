<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · **Українська** · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md)

</div>

# DemoScope — Довідник функцій

Повний довідник з усіх 217 функцій верхнього рівня в `DemoScope.user.js` v1.4.0 (ім'я, параметри, значення, що повертається, призначення). Назад до [README](../README.md).

Позначення: `—` означає відсутність параметрів; `void` означає, що функцію викликають заради побічних ефектів.

## Огляд поведінки для користувача

| Розділ | Опис |
|---|---|
| Підтримувані сторінки | Покращує вітальну сторінку VACNet (/vacnet), сторінки перевірки (/vacnet/clips), сторінку запрошень (/vacnet/createinvite) і стан без кліпів на сторінці перевірки. Інші сторінки не змінює. |
| Типи завдань | Визначає, яку форму перевірки надає VACNet. Класична форма (aim assist, wallhack, auto-bhop, bot) отримує шаблони й розширені комбінації. Нове завдання з одним запитанням («Чи шахраює суб’єкт поза розумним сумнівом?») натомість має компактний вигляд: три підписані вердикти на клавішах 1–3, індикатор блокування із часом кліпу, що залишився, без швидких вердиктів і комбінацій. |
| Мова | Підтримує 29 мов Steam. Збережений ручний вибір має пріоритет; інакше скрипт використовує параметр Steam ?l=, потім мову браузера/сторінки. Вибір мови в DemoScope передає відповідний ?l= і до VACNet, щоб її власні тексти відповідали вибору. Автоматичний режим синхронізує параметр мови Steam із мовою браузера. |
| Вітальна сторінка та запрошення | Оновлює вигляд обох сторінок, додає спільний вибір мови та приховує ім’я облікового запису перемикачем із піктограмою ока. На вітальній сторінці Enter або Space продовжує роботу, якщо фокус не на інтерактивному елементі. На сторінці запрошення посилання можна приховати, показати й скопіювати; вимоги до запрошення пояснено. Кнопка × закриває сторінку; Enter означає «Готово», Esc — ×. |
| Перевірка кліпів | Додає шаблони вердиктів і розширені комбінації, випадковий вибір вердикту (типово вимкнений), налаштовувану швидкість відтворення з Shift, перемотування в межах сегмента, покадровий перегляд і клавіші керування відтворенням. Біля категорій вердиктів є кнопка «?» з локалізованим поясненням. Ключові фрази в кнопках виділено кольорами DemoScope. |
| Гарячі клавіші | Кожна комбінація є дією в спільному реєстрі й може бути змінена в Налаштування → Гарячі клавіші. Конфлікти визначаються окремо для сторінок (запрошення й перевірка не перетинаються) та показують дію, групу й опис, які вже використовують клавішу; можна замінити, поміняти місцями або скасувати. Для кожної дії є кнопка скидання, а підказки на сторінці відповідають призначенням. |
| Надсилання | Enter або Numpad Enter (типово) активує «Продовжити». У класичній формі перше натискання готує дію, а наступне надсилає вердикти. У завданні з одним запитанням вибір вердикту показує підтвердження VACNet, яке підтверджується Enter. Esc (типово) натискає «Скасувати», коли вердикт очікує підтвердження, або скасовує перше натискання. Space не надсилає форму. |
| Налаштування | F2 типово відкриває діалог налаштувань (перепризначається у вікні Гарячі клавіші). Розділи: гарячі клавіші, анімації, звукові ефекти й гучність, локальна історія (увімкнення, ліміти, формат 12/24 години, резервні копії), видимість нижнього колонтитула, діагностика та спільне скидання звуку, гарячих клавіш і анімацій. |
| Анімації | Крапка поруч із DemoScope може анімуватися. Окреме вікно пропонує шість стилів (пульсація, дихання, хвилі, серцебиття, орбіта, блимання), попередній перегляд, три швидкості й перемикач. Якщо система просить зменшити рух, анімації запускаються вимкненими. |
| Локальна історія | Зберігає підсумки вердиктів у localStorage цього браузера; DemoScope їх не завантажує. Історію можна вимкнути, імпортувати, експортувати в JSON або HTML, об’єднати копії JSON в один HTML-звіт або очистити. Ліміти: 10/20/30/50 записів на ключ і 100/200/300/500 ключів загалом. Вимкнення зупиняє нові записи, але не стирає наявні. Історія записується лише для класичної форми. |
| Порожня черга | Замінює повідомлення VACNet про порожню чергу локалізованими підказками, датою й часом першої появи, збереженими в браузері, та вибором мови. Текст про 250 демо на день є довідковим і базується на спостереженнях за VACNet; DemoScope не встановлює й не обходить цей ліміт. |
| Нижній колонтитул | Використовує локалізований нижній колонтитул DemoScope. На сторінках кліпів він може містити посилання для відгуків і скарг; у налаштуваннях можна приховати окреме посилання, рядок авторських прав або весь колонтитул. |
| Стійкість до помилок | Кожен крок налаштування ізольований, тому одна помилка не зупинить решту. Важливі елементи шукаються із запасними варіантами. Якщо сторінку не вдається розпізнати, DemoScope вимикається лише на ній, відновлює вигляд VACNet і показує коротке повідомлення. Налаштування → Діагностика дає змогу скопіювати текстовий звіт (версія скрипта, знайдені очікувані елементи, помилки кроків і структура сторінки) для повідомлення про проблему. |

Скрипт не змінює серверні правила VACNet щодо запрошень, обробку вердиктів чи ліміти перегляду. Локальна історія, мова та налаштування інтерфейсу залишаються у профілі браузера.

## Локалізація

| Функція | Параметри | Повертає | Опис |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Вбудована SVG-розмітка прапора для мови; за відсутності повертає значок глобуса. |
| `getSavedLocale` | — | `string \| null` | Читає збережену користувачем мову (`demoscopeLanguage`) із `localStorage`. |
| `getActiveLocale` | — | `string` | Визначає активну мову: збережений вибір → Steam `?l=` → мова браузера/сторінки → `en`. |
| `getLanguageBadge` | — | `string` | Власна назва мови для показу, наприклад «English version», для значка у виборі мови. |
| `getBrowserLocale` | — | `string \| null` | Знаходить першу підтримувану мову браузера, зокрема регіональні варіанти. |
| `syncAutomaticLanguage` | — | `boolean` | В автоматичному режимі синхронізує ?l= з мовою браузера та переходить за новою адресою, якщо вони різняться. |
| `getRenderedSteamLanguage` | — | `string \| null` | Читає мову Steam, якою VACNet фактично відобразив сторінку, з параметра l= в URL таблиць стилів і скриптів сторінки. |
| `syncSelectedLanguage` | — | `boolean` | Якщо в DemoScope вручну вибрано мову, один раз повторно завантажує сторінку з відповідним ?l=, щоб тексти VACNet також відповідали вибору. Пропускає це, якщо мова сторінки вже правильна, і запобігає циклам перенаправлення. Повертає true, якщо відбулася навігація. |
| `tr` | `key: string` | `string` | Шукає рядок інтерфейсу для активної мови (запасний варіант: англійська, потім сам ключ). |
| `inviteText` | `key: string` | `string` | Такий самий пошук для таблиці рядків сторінки запрошень. |
| `settingText` | `key: string` | `string` | Такий самий пошук для таблиці рядків діалогу налаштувань. |
| `getPresetLabel` | `name: string` | `string` | Локалізований підпис шаблону; складає комбінації на кшталт «Bot + Aim». |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | HTML кнопок вибору мови, зокрема пункту «auto». |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Підключає та розташовує перемикач мови, зберігає вибір і перезавантажує сторінку; необов’язковий callback може обробити вибір замість цього. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Шукає локалізований текст сповіщення про порожню чергу або колонтитула. |

## Звукові ефекти та діалог налаштувань

| Функція | Параметри | Повертає | Опис |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Рядок «N записів · останній запис: …» у діалозі налаштувань. |
| `soundsEnabled` | — | `boolean` | Чи ввімкнено звуки інтерфейсу (`demoscopeSoundEffectsEnabled`, типово ввімкнено). |
| `getSoundVolume` | — | `number (0–1)` | Збережена гучність звуку (`demoscopeSoundEffectsVolume`, типово 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Синтезує коротку послідовність тонів через Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); ніколи не викидає винятків. |
| `readSettingsHotkey` | — | `string` | Збережений `KeyboardEvent.code`, що відкриває діалог налаштувань (типово `F2`). |
| `formatHotkey` | `code: string` | `string` | Читабельна назва клавіші (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Витягує код фізичної клавіші, зіставляючи нелатинські розкладки назад із `KeyX`; `""`, якщо код непридатний. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Істина для клавіш, які вже використовує DemoScope або плеєр (Enter, пробіл, стрілки, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Створює діалог налаштувань і підключає елементи: звуки й гучність, перевірка звуку, гаряча клавіша, локальна історія та ліміти, формат часу, імпорт/експорт JSON, експорт/об’єднання HTML, очищення історії, видимість колонтитула та скидання. |
| `openSettingsDialog` | `opener = null` | `void` | Відкриває діалог із поточними значеннями та запам'ятовує елемент, якому слід повернути фокус. |
| `installSettingsUi` | — | `void` | Встановлює глобальний обробник клавіш на фазі capture (відкриття/закриття діалогу, перепризначення) і звукові події. |
| `installUiSoundEvents` | — | `void` | Делегований обробник кліків, що відтворює звуки зворотного зв'язку для елементів DemoScope. |
| `ensureSettingsLayoutStyles` | — | `void` | Додає стилі вікна налаштувань: вирівняні ліворуч розділи та рядки з підсумковими позначками. |
| `refreshSettingsSummaries` | — | `void` | Оновлює підсумкові позначки для пунктів Гарячі клавіші («Змінено: N» / «За замовчуванням») та Анімації («Стиль · швидкість» / «Вимкнено»). |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Додає згори пункти Гарячі клавіші й Анімації, а знизу — Діагностика та Скидання. Приховує попередній блок клавіші налаштувань, яку тепер можна змінити у вікні гарячих клавіш. |

## Резервні копії, звіти та ліміти історії

| Функція | Параметри | Повертає | Опис |
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

## Ім'я облікового запису та сторінка запрошень

| Функція | Параметри | Повертає | Опис |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Чи приховане зараз ім'я облікового запису Steam. |
| `installAccountNameControl` | — | `void` | Додає перемикач-око поруч із посиланням виходу й підтримує його синхронізацію через `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Переробляє `/vacnet/createinvite`: картковий макет, показ/приховування та копіювання посилання (Clipboard API із запасним `execCommand`), перелік вимог, вибір мови. Повертає `false`, якщо очікуваних елементів немає. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Додає кнопку закриття (×) та обробник у фазі захоплення для дій inviteDone (типово Enter) і inviteClose (типово Esc). Ігнорує клавіші, коли фокус на кнопці, посиланні, полі, діалоговому вікні чи списку мов. |
| `refreshInviteKeyLabels` | — | `void` | Оновлює напис «Готово» з позначкою клавіші та підказку для × відповідно до поточних призначень. |
| `installWelcomePage` | — | `boolean` | Оформлює вітальну сторінку, додає брендинг і вибір мови; Enter/Space продовжує; повертає false за відсутності потрібних елементів. |

## Сегмент кліпу та адаптер плеєра

| Функція | Параметри | Повертає | Опис |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Повертає true, якщо фокус у полі введення, textarea, select або редагованому тексті. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Як і isShortcutBlocked, але пропускає перемикачі вердиктів, оскільки після натискання фокус залишається на них. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Підпис варіанта швидкості. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Список `<option>` для вибору швидкості (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Збережена швидкість за Shift (типово 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Збережений стан рандомайзера вердиктів (типово вимкнений). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Підключає обробку швидкості відтворення, обмеження/паузу сегмента, помічники перемотування/покадрового кроку/вимкнення звуку/повного екрана та глобальні гарячі клавіші (`1`–`5`, стрілки, `,` `.`, пробіл, `M`, `F`, Shift). Внутрішні замикання: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, помічники циклу малювання. |

## Шаблони вердиктів

| Функція | Параметри | Повертає | Опис |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Вибирає «skip» у кожній групі вердиктів без вибору. |
| `getSelectedVerdictState` | — | `object` | Поточне значення (`positive` / `negative` / `skip` / `null`) для `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Назва шаблону, що відповідає поточному вибору. |
| `syncPresetButtons` | — | `string \| null` | Оновлює `aria-pressed` на кнопках шаблонів і значок розширеного шаблону. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Натискає радіокнопки шаблону; за ввімкненого рандомайзера перемішує порядок і чекає 200–600 мс між натисканнями. На час роботи блокує кнопки шаблонів. |
| `readAdvancedPresetsOpen` | — | `boolean` | Чи залишалася відкритою шухляда розширених шаблонів. |
| `normalizeVerdictLabels` | `root = document` | `void` | Прибирає розмітку підсвічування з підписів вердиктів. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Додає локалізовані заголовки над кожною групою вердиктів. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Створює кнопку «?» і спливне пояснення для групи вердиктів, використовуючи локалізований текст DemoScope; текст VACNet є лише запасним варіантом. |
| `closeVerdictHelp` | `except = null` | `void` | Закриває всі відкриті пояснення, крім зазначеного. |
| `installVerdictHelpHandlers` | — | `void` | Одноразово встановлює делеговану обробку кліків, кліків поза вікном та Esc для підказок. |

## Сповіщення, підвал і завантаження під час надсилання

| Функція | Параметри | Повертає | Опис |
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

| Функція | Параметри | Повертає | Опис |
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
| `isLocalHistoryEnabled` | — | `boolean` | Читає, чи ввімкнена локальна історія; типово ввімкнена. |
| `readTimeFormat` | — | `string` | Читає формат часу: автоматичний, 12- або 24-годинний. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Форматує час першого виявлення з урахуванням мови й формату часу. |
| `getQueueNoticeLocale` | — | `string` | Повертає активну мову сповіщення про порожню чергу. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Переносить попередній вибір мови до спільного налаштування та синхронізує URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Оновлює показаний час першого виявлення. |

## Процес надсилання

| Функція | Параметри | Повертає | Опис |
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
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Виконує перевірку безпеки, показує екран завантаження й надсилає форму. |
| `submitVerdictsDirect` | — | `boolean` | Готує підписи й надсилає. |
| `invokeProceedAction` | — | `boolean` | Обробник Enter/кліку: перше натискання зводить, друге надсилає. |
| `installProceedShortcut` | — | `void` | Обробник на фазі capture для `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Скасовує перше натискання двоетапного надсилання або натискає видиму кнопку «Скасувати»; повертає false, якщо скасовувати нічого. |
| `refreshCancelButtonLabel` | — | `void` | Додає або оновлює позначку клавіші на кнопці «Скасувати». |
| `hookProceedButton` | — | `void` | Замінює поведінку кліку нативної кнопки надсилання. |
| `installVerdictChangeReset` | — | `void` | Знімає звід надсилання й повторно синхронізує шаблони, коли вердикт змінюється. |
| `scheduleProceedFooterFix` | — | `void` | Відкладений (`requestAnimationFrame`) виклик `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Відкладена повторна нормалізація підписів/заголовків/типових значень. |

## Реєстр гарячих клавіш і перепризначення

| Дія | Типово | Група | Призначення |
|---|---|---|---|
| `playPause` | `Space` | Playback | Призупиняє або відновлює відтворення кліпу. |
| `mute` | `M` | Playback | Вимикає або вмикає звук. |
| `fullscreen` | `F` | Playback | Вмикає або вимикає повноекранний режим. |
| `seekBack` / `seekForward` | `←` / `→` | Навігація | Перестрибує на 5 секунд назад або вперед. |
| `frameBack` / `frameForward` | `,` / `.` | Навігація | Переходить на один кадр назад або вперед. |
| `speedBoost` | `Shift` | Navigation | Прискорює відтворення, доки клавішу утримують (єдина дія, яка може використовувати Shift). |
| `quick1` … `quick5` | `1` … `5` | Вердикти | Класична форма: шаблони 1–5. Завдання з одним запитанням: Cheating / Не впевнений / Не бачив шахрайства (1–3). |
| `proceed` | `Enter` | Submission | Підтверджує вердикт або активує та надсилає класичну форму. |
| `cancel` | `Esc` | Submission | Натискає «Скасувати» або скасовує перше натискання Enter. |
| `inviteDone` | `Enter` | Invite page | Виходить зі сторінки запрошення (те саме, що «Готово»). |
| `inviteClose` | `Esc` | Invite page | Виконує ту саму дію, що й кнопка ×. |
| `settings` | `F2` | Interface | Відкриває або закриває вікно налаштувань. |

Призначення зберігаються як значення KeyboardEvent.code у demoscopeKeybindings (лише зміни від стандартних; клавіша налаштувань має окремий запис). Лівий і правий модифікатори вважаються однією клавішею, а цифровий блок відповідає основному ряду. Не можна призначити: Tab, Ctrl, Alt, Meta, Caps Lock, ContextMenu, F5, F11, F12. Конфлікти обмежені діапазонами review, invite та global; глобальна клавіша налаштувань конфліктує з усіма.

| Функція | Параметри | Повертає | Опис |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Замінює заповнювачі {name} у локалізованому шаблоні. |
| `isModalOpen` | — | `boolean` | Повертає true, доки відкрите будь-яке dialog; у цей час комбінації клавіш сторінки не діють. |
| `normalizeKeyCode` | `code: string` | `string` | Об’єднує лівий і правий модифікатори в одну клавішу та зіставляє цифри цифрового блока й NumpadEnter з відповідними клавішами основного ряду. |
| `formatKeyLabel` | `code: string` | `string` | Зрозуміла назва клавіші (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Читає та перевіряє збережені призначення клавіш (кешує; у разі помилки повертає {}). |
| `saveKeyOverrides` | `overrides: object` | `void` | Зберігає призначення або видаляє запис, якщо всі значення стандартні. |
| `getBinding` | `id: string` | `string` | Поточна клавіша дії; порожній рядок, якщо її не призначено. |
| `setBinding` | `id: string, code: string` | `void` | Зберігає клавішу для дії (порожній код скасовує призначення); стандартні значення не зберігаються. |
| `resetAllBindings` | — | `void` | Відновлює стандартні призначення всіх клавіш, включно з клавішею налаштувань. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Шукає конфлікт із клавішею, яку вже використовує дія в цьому діапазоні. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Визначає дію, пов’язану з подією клавіатури. |
| `keyScopeOf` | `id: string` | `string` | Діапазон дії: review, invite або global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | Повертає true, якщо два діапазони можуть перетинатися (однаковий діапазон або один із них global). |
| `currentKeyScope` | — | `string` | invite на сторінці запрошення, інакше review. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Повертає порожній рядок, якщо клавішу можна призначити, reserved для клавіш браузера/навігації або shift, якщо Shift вибрано для дії без утримання. |
| `quickRangeLabel` | `count: number` | `string` | Назва клавіш швидкого вердикту (1–5, якщо не змінювалися, інакше призначені клавіші). |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Створює підказки клавіш під відео за поточними призначеннями. |
| `refreshKeyLabels` | — | `void` | Оновлює всі підписи клавіш на сторінці: підказки, позначки шаблонів і вердиктів, Продовжити/Скасувати/запрошення та підсумки налаштувань. |
| `ensureDemoscopeDialogStyles` | — | `void` | Додає спільне оформлення вікон Гарячі клавіші й Анімації. |
| `hkActionName` | `id: string` | `string` | Локалізована назва дії. |
| `hkGroupName` | `group: string` | `string` | Локалізована назва групи. |
| `hkActionDescription` | `id: string` | `string` | Локалізований опис дії (швидкі вердикти описані для обох типів завдань). |
| `hkSetMessage` | `text: string, warn = false` | `void` | Задає рядок стану вікна Гарячі клавіші. |
| `hkCancelCapture` | — | `void` | Виходить із режиму захоплення клавіші. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Розмітка рядка дії, включно з панеллю конфлікту, якщо він очікує на розв’язання. |
| `renderHotkeys` | — | `void` | Повторно відображає все вікно та зберігає позицію прокручування. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Призначає клавішу; replace звільняє її для іншої дії, swap міняє клавіші місцями. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Призначає клавішу або відкриває панель конфлікту (Замінити / Поміняти / Скасувати), якщо вона зайнята. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Створює вікно Гарячі клавіші та обробник клавіатури у фазі захоплення (Esc можна призначити; під час захоплення вона не закриває вікно). |
| `openHotkeysDialog` | — | `void` | Відкриває вікно Гарячі клавіші. |

## Анімації

Шість стилів індикаторної крапки (pulse, breathe, ripple, heartbeat, orbit, blink), три швидкості (0,6× / 1× / 1,7×) і перемикач, збережені в demoscopeAnimStyle, demoscopeAnimSpeed та demoscopeAnimEnabled. Активний стиль задається через data-ds-anim на html (off, коли вимкнено); таблиця стилів керує крапкою та попереднім переглядом.

| Функція | Параметри | Повертає | Опис |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Безпечне читання з localStorage. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Безпечний запис у localStorage (null видаляє ключ). |
| `animEnabled` | — | `boolean` | Збережений стан увімкнення/вимкнення; за замовчуванням вимкнено, якщо система просить зменшити рух. |
| `animStyle` | — | `string` | Збережений стиль (типово pulse). |
| `animSpeedKey` | — | `string` | Збережена швидкість (slow / normal / fast; типово normal). |
| `ensureAnimationStyles` | — | `void` | Додає ключові кадри та правила, спільні для анімованої крапки й крапок попереднього перегляду. |
| `applyAnimationSettings` | — | `void` | Застосовує стиль, швидкість і стан до html та оновлює підсумок налаштувань. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Створює вікно Анімації: перемикач, швидкість, картки стилів із попереднім переглядом і скиданням. |
| `openAnimationsDialog` | — | `void` | Відкриває вікно Анімації. |
| `ensureUiPolishStyles` | — | `void` | Додає темні тонкі смуги прокручування й color-scheme: dark для вікон і списку вердиктів (інакше Chromium показав би світлу смугу). |

## Завдання з одним запитанням

| Функція | Параметри | Повертає | Опис |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Повертає true, коли сторінка показує форму з одним запитанням (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | Натискає перемикач Cheating / Не впевнений / Не бачив шахрайства (positive / skip / negative). Якщо варіант заблоковано, відтворює звук помилки й струшує картку блокування. |
| `localizeCheatingVerdicts` | — | `void` | Переписує три підписи мовою DemoScope й малює позначки клавіш через CSS, щоб у підтвердженні VACNet не з’являлася цифра клавіші. Також готує картку блокування. |
| `updateCheatingLock` | — | `void` | Оновлює картку блокування («два інші вердикти відкриються після завершення кліпу · залишилося m:ss») і смугу прогресу. Ховає картку після розблокування варіантів або вибору вердикту. |
| `startCheatingLockWatcher` | — | `void` | Запускає таймер із періодом 250 мс, який викликає updateCheatingLock. |

## Стійкість і діагностика

| Функція | Параметри | Повертає | Опис |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Записує невдалий крок (у списку з обмеженою кількістю записів) для звіту діагностики. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Виконує крок налаштування; у разі помилки записує її та повертає запасне значення, щоб наступні кроки продовжилися. |
| `getVideoContainer` | — | `HTMLElement \| null` | Знаходить контейнер відео або, як запасний варіант, батьківський елемент програвача чи video. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Знаходить контейнер вердиктів або батьківський елемент першого блоку вердикту. |
| `getSubmitArea` | — | `HTMLElement \| null` | Знаходить область надсилання/підтвердження (#submitbuttons, .submitbuttons або батьківський елемент кнопки надсилання). |
| `hasVerdictForm` | — | `boolean` | Повертає true, якщо є хоча б один перемикач вердикту. |
| `removeEnhancements` | — | `void` | Видаляє панелі, класи й зміни нижнього колонтитула DemoScope та відновлює нижній колонтитул VACNet. |
| `disableDemoScope` | `reason: string` | `void` | Вимикає DemoScope на цій сторінці: скасовує зміни, залишає лише вікно налаштувань і показує повідомлення один раз для кожної причини протягом сеансу. |
| `isOwnNode` | `el: Element` | `boolean` | Повертає true для елементів, створених DemoScope (їх не включають у звіт структури). |
| `elementSignature` | `el: Element` | `string` | Підпис tag#id.class[…] для звіту структури; не містить тексту. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Компактне дерево з відступами для тегів, ідентифікаторів і класів (однакові сусідні елементи згортаються як ×N). |
| `captureOriginalSkeleton` | — | `void` | Записує структуру сторінки до будь-яких змін DemoScope. |
| `buildDiagnosticsReport` | — | `string` | Створює звіт: версія, сторінка, мова та браузер, тип завдання, 22 перевірки елементів (ok / MISSING), помилки кроків і структура до та після DemoScope. Без тексту сторінки й даних облікового запису. |
| `fallbackCopyText` | `text: string` | `boolean` | Копіює текст через тимчасове текстове поле, якщо Clipboard API недоступний. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Копіює звіт; якщо копіювання не вдалося, показує текст у полі, де його можна виділити. |

## Розмітка та запуск

| Функція | Параметри | Повертає | Опис |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Будує панель вибору швидкості Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML однієї кнопки шаблону. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML груп розширених шаблонів. |
| `buildEnhancementBar` | — | `HTMLElement` | Будує панель швидких вердиктів: шаблони, перемикач рандомайзера, розширена шухляда. |
| `positionShiftSpeedBar` | — | `void` | Тримає панель швидкості перед списком вердиктів. |
| `positionEnhancementBar` | — | `void` | Тримає панель шаблонів перед кнопками надсилання. |
| `fixProceedFooter` | — | `void` | Переупорядковує підвал, панелі та кнопку надсилання. |
| `enhanceLayout` | — | `void` | Застосовує всі зміни розмітки та встановлює інтерфейс налаштувань. |
| `ensureReviewStructure` | — | `void` | Нормалізує розмітку VACNet: вкладає блоки вердиктів у .verdicts-container-inner, переносить #submitbuttons до контейнера та дублює лічильник кліпів у позначці заголовка. Працює зі старою та оновленою розміткою. |
| `watchProceedFooter` | — | `void` | Спостерігає за `.verdicts-container` і планує виправлення підвалу. |
| `watchVerdictLabels` | — | `void` | Спостерігає за підписами вердиктів і планує повторну нормалізацію. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Читає з localStorage налаштування видимості колонтитула. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Зберігає налаштування видимості колонтитула. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Створює або оновлює локалізований колонтитул з необов’язковими посиланнями й застосовує параметри. |
| `installEmptyQueueNotice` | — | `boolean` | Замінює повідомлення про порожню чергу локалізованим поясненням, часом, вибором мови й колонтитулом. |
| `init` | — | `Promise<void>` | Точка входу: елемент керування іменем облікового запису → сторінка запрошень або перевірки → розмітка, спостерігачі, гарячі клавіші, покращення плеєра. |

installWelcomePage і installInvitePage повертають false, якщо бракує потрібних елементів сторінки VACNet. installEmptyQueueNotice повертає false, якщо сторінка не показує порожню чергу.

### Інші елементи

* **blockSegmentLoopGuard** (IIFE, виконується під час завантаження): замінює рідний 100-мс таймер сайту для циклу сегмента на порожню функцію; сегментом керують власні засоби DemoScope.
* **Константи й таблиці:** SUPPORTED_LOCALES, FLAG_SVG, UI_TEXT_ROWS, INVITE_TEXT_ROWS, SETTINGS_TEXT_ROWS, PRESETS, PRESET_KEYS, PRESET_TONES, ADVANCED_PRESET_GROUPS, SHIFT_SPEEDS, FRAME_STEP та ARROW_JUMP_SEC (21 визначення PRESETS); додано після v1.0.0: KEY_ACTIONS, KEY_GROUPS, KEY_ACTION_BY_ID, KEY_ACTION_SCOPE, RESERVED_KEY_CODES, CHEATING_KEYS, VERDICT_SECTION_TITLES, VERDICT_SECTION_HELP, ANIM_STYLES та ANIM_SPEEDS.
* **Стан модуля:** diag (помилки кроків, причина вимкнення й початкова структура сторінки), hkState (стан вікна Гарячі клавіші) та константа SCRIPT_VERSION для звіту діагностики.
* **Тексти:** усі видимі рядки містяться у локалізованих таблицях вище; вікна, додані у v1.2.0–v1.4.0, перекладено всіма 29 мовами.

## Ключі сховища

| Ключ | Де зберігається | Призначення |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Вибрана мова / автоматичний режим. |
| `demoscopeKeybindings` | `localStorage` | Гарячі клавіші, що відрізняються від стандартних (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Клавіша відкриття налаштувань (none, якщо видалена). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Налаштування анімації індикатора. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Налаштування звуку. |
| `demoscopeClipHistory` та ключі ліміту/формату історії | `localStorage` | Локальна історія перевірок і її налаштування. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Стан очікування надсилання, захист синхронізації мови й одноразове повідомлення про вимкнення. |




