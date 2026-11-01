<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ro_FUNCTIONS.md) · **Русский** · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ja_FUNCTIONS.md)

</div>

# DemoScope — Справочник функций

Справочник всех 217 функций верхнего уровня текущей версии `DemoScope.user.js` (v1.4.0): имена, параметры, возвращаемые значения и назначение. Обзор описывает возможности для пользователя, а таблицы — подробности реализации. Назад к [README](../README.md).

Обозначения: `—` означает отсутствие параметров; `void` означает, что функция вызывается ради побочных эффектов.

## Возможности для пользователя

| Область | Описание |
|---|---|
| Поддерживаемые страницы | Улучшает приветственную страницу VACNet (`/vacnet`), страницы проверки (`/vacnet/clips`), страницу приглашения (`/vacnet/createinvite`) и состояние без клипов на странице проверки. На остальных страницах скрипт не работает. |
| Типы заданий | Определяет, какую форму проверки показывает VACNet. Для **классической формы** (aim assist, wallhack, auto-bhop, bot) доступны пресеты и расширенные комбинации. Для нового **задания с одним вопросом** («Есть ли достаточно оснований считать, что субъект использует читы?») предусмотрен компактный интерфейс: три подписанных вердикта на клавишах `1`–`3`, индикатор блокировки с оставшимся временем клипа; быстрые вердикты и комбинации не показываются. |
| Язык | Поддерживается 29 языков Steam. Сначала используется сохранённый выбор, иначе язык из параметра Steam `?l=`, затем язык браузера или страницы. При выборе языка в DemoScope скрипт также передаёт соответствующий `?l=` в VACNet, чтобы текст самой VACNet (кнопки вердиктов и вопросы) отображался на нужном языке. В автоматическом режиме параметр языка Steam синхронизируется с языком браузера. |
| Приветственная страница и приглашение | Меняет оформление приветственной страницы и страницы приглашения, добавляет общий переключатель языка и кнопку-глаз для скрытия имени аккаунта. На приветственной странице Enter или Space продолжает работу, если фокус не находится на интерактивном элементе. На странице приглашения можно скрыть или показать и скопировать ссылку, прочитать требования и закрыть окно кнопкой ×; `Enter` выполняет действие «Готово», а `Esc` закрывает страницу. |
| Проверка клипов | Добавляет пресеты вердиктов и расширенные комбинации, случайный порядок вердиктов (по умолчанию выключен), настраиваемую скорость воспроизведения при удержании Shift, перемотку в пределах сегмента, покадровый просмотр и горячие клавиши плеера. У категорий вердиктов есть кнопка «?» с пояснением на выбранном языке. Ключевые слова в кнопках подсвечиваются цветами DemoScope. |
| Горячие клавиши | Каждое сочетание клавиш зарегистрировано как действие и переназначается в окне **Настройки → Горячие клавиши**. Конфликты проверяются отдельно для каждой страницы: действия страницы приглашения не конфликтуют с действиями проверки. При конфликте показывается действие, группа и описание уже назначенной клавиши; можно заменить назначение, поменять клавиши местами или отменить. Для каждого действия есть сброс, а подсказки на странице обновляются согласно выбранным клавишам. |
| Отправка вердикта | `Enter` или `Numpad Enter` (по умолчанию) нажимает «Продолжить». В классической форме первое нажатие подготавливает отправку, второе отправляет вердикты. В задании с одним вопросом выбор вердикта открывает штатное подтверждение VACNet, а `Enter` подтверждает его. `Esc` (по умолчанию) нажимает «Отмена», если вердикт ожидает подтверждения, или отменяет подготовку отправки после первого нажатия Enter. Пробел не используется для отправки. |
| Настройки | По умолчанию окно настроек открывается клавишей `F2` (её можно переназначить в окне горячих клавиш). В настройках есть горячие клавиши, анимации, звуковые эффекты и громкость, локальная история (включение, лимиты, формат времени 12/24 часа, резервные копии), видимость нижнего колонтитула, диагностика и общий сброс звука, горячих клавиш и анимаций. |
| Анимации | Индикатор рядом с надписью «DemoScope» можно анимировать. В отдельном окне доступны шесть стилей (пульсация, дыхание, рябь, сердцебиение, орбита, мигание), живые примеры, три скорости и переключатель. Если в операционной системе включено уменьшение движения, анимации изначально выключены. |
| Локальная история | Сохраняет сводки вердиктов в `localStorage` этого браузера; DemoScope не отправляет историю на сервер. Историю можно отключить, импортировать, экспортировать в JSON или HTML, объединить несколько JSON-копий в один HTML-отчёт или очистить. Лимиты настраиваются: 10/20/30/50 записей на ключ и 100/200/300/500 ключей всего. Отключение истории прекращает добавление новых записей, но не удаляет сохранённые данные. История записывается только для классической формы. |
| Пустая очередь | Заменяет сообщение VACNet об отсутствии клипов локализованной подсказкой, датой и временем первого появления этого состояния в браузере и переключателем языка. Текст о 250 демо в день носит справочный характер и основан на наблюдаемом поведении VACNet; DemoScope не ограничивает и не обходит этот лимит сервиса. |
| Нижний колонтитул | Показывает локализованный нижний колонтитул DemoScope. На страницах клипов в нём могут быть ссылки на отзыв и жалобу; в настройках можно скрыть отдельные ссылки, строку авторских прав или весь колонтитул. |
| Обработка ошибок | Каждый этап настройки выполняется отдельно, поэтому сбой одного этапа не останавливает остальные. Для поиска ключевых элементов предусмотрены запасные варианты. Если скрипт больше не распознаёт страницу, DemoScope отключается на ней, восстанавливает исходную разметку VACNet и показывает короткое уведомление. Раздел **Настройки → Диагностика** копирует текстовый отчёт (версия скрипта, найденные элементы, ошибки этапов и структура страницы) для сообщения об ошибке. |

Скрипт не меняет серверные правила VACNet для получения приглашения, обработку вердиктов и лимиты просмотра. История, язык и настройки интерфейса хранятся локально в профиле браузера.

## Локализация

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Встроенная SVG-разметка флага для языка; при отсутствии возвращает значок глобуса. |
| `getSavedLocale` | — | `string \| null` | Читает сохранённый пользователем язык (`demoscopeLanguage`) из `localStorage`. |
| `getActiveLocale` | — | `string` | Определяет активный язык: сохранённый выбор → Steam `?l=` → язык браузера/страницы → `en`. |
| `getLanguageBadge` | — | `string` | Собственное отображаемое название языка, например «English version», для значка в выборе языка. |
| `getBrowserLocale` | — | `string \| null` | Находит первый поддерживаемый язык браузера, включая региональные варианты. |
| `syncAutomaticLanguage` | — | `boolean` | В автоматическом режиме синхронизирует ?l= с языком браузера и переходит по новому адресу при несовпадении. |
| `getRenderedSteamLanguage` | — | `string \| null` | Читает язык Steam, на котором VACNet действительно отобразила страницу, из параметра `l=` в URL таблиц стилей и скриптов. |
| `syncSelectedLanguage` | — | `boolean` | При ручном выборе языка в DemoScope один раз загружает страницу с соответствующим `?l=`, чтобы изменить язык текста VACNet. Не выполняет переход, если язык уже совпадает; защита предотвращает циклические перенаправления. Возвращает `true`, если произошёл переход. |
| `tr` | `key: string` | `string` | Ищет строку интерфейса для активного языка (запасной вариант: английский, затем сам ключ). |
| `inviteText` | `key: string` | `string` | Такой же поиск для таблицы строк страницы приглашений. |
| `settingText` | `key: string` | `string` | Такой же поиск для таблицы строк диалога настроек. |
| `getPresetLabel` | `name: string` | `string` | Локализованная подпись пресета; собирает сочетания вроде «Bot + Aim». |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | Формирует HTML-разметку кнопок выбора языка, включая пункт автоматического определения. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Привязывает и позиционирует переключатель языка, сохраняет выбор и перезагружает страницу; необязательный callback может обработать выбор без перезагрузки. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Ищет локализованный текст уведомления о пустой очереди или подвала. |

## Звуковые эффекты и окно настроек

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
| `ensureSettingsLayoutStyles` | — | `void` | Добавляет стили окна настроек: выравнивание разделов по левому краю и строки с краткими сводками. |
| `refreshSettingsSummaries` | — | `void` | Обновляет краткие сводки для разделов «Горячие клавиши» («Изменено: N» / «По умолчанию») и «Анимации» («Стиль · скорость» / «Выкл.»). |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Добавляет в окно настроек пункты «Горячие клавиши» и «Анимации», раздел диагностики и раздел сброса внизу; скрывает прежний блок настройки клавиши настроек, поскольку теперь она меняется в окне горячих клавиш. |

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

## Имя аккаунта и страница приглашений

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Скрыто ли сейчас имя аккаунта Steam. |
| `installAccountNameControl` | — | `void` | Добавляет переключатель-глаз рядом со ссылкой выхода и поддерживает его синхронизацию через `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Переделывает `/vacnet/createinvite`: карточная раскладка, показ/скрытие и копирование ссылки (Clipboard API с запасным `execCommand`), список требований, выбор языка. Возвращает `false`, если ожидаемых элементов нет. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Добавляет кнопку закрытия × и обработчик клавиш для действий `inviteDone` (по умолчанию `Enter`) и `inviteClose` (по умолчанию `Esc`). Не обрабатывает клавиши, если фокус находится на кнопке, ссылке, поле ввода, модальном окне или списке языков. |
| `refreshInviteKeyLabels` | — | `void` | Обновляет подпись «Готово» с подсказкой клавиши и всплывающую подсказку кнопки × в соответствии с текущими назначениями. |
| `installWelcomePage` | — | `boolean` | Оформляет приветственную страницу, добавляет брендинг и выбор языка; Enter/Space продолжает; возвращает false, если нужных элементов нет. |

## Сегмент клипа и адаптер видеоплеера

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
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Как `isShortcutBlocked`, но разрешает горячие клавиши на радиокнопках вердиктов, поскольку после выбора фокус остаётся на радиокнопке. |
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
| `readAdvancedPresetsOpen` | — | `boolean` | Оставался ли открытым ящик расширенных пресетов. |
| `normalizeVerdictLabels` | `root = document` | `void` | Убирает разметку подсветки из подписей вердиктов. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Добавляет локализованные заголовки над каждой группой вердиктов. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Создаёт кнопку «?» и всплывающее пояснение для группы вердиктов, используя локализованный текст DemoScope; формулировка VACNet служит запасным вариантом. |
| `closeVerdictHelp` | `except = null` | `void` | Закрывает все открытые пояснения, кроме указанного. |
| `installVerdictHelpHandlers` | — | `void` | Один раз устанавливает делегированные обработчики щелчка, щелчка вне пояснения и клавиши `Esc` для всплывающих пояснений. |

## Уведомления, нижний колонтитул и загрузка при отправке

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
| `renderHistoryItem` | `item: object` | `string (HTML)` | одной строки истории. |
| `escapeHtml` | `value: any` | `string` | Экранирует `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | панели истории, включая кнопку правил проверки. |
| `ensureClipHistoryPanel` | — | `void` | Создаёт контейнер панели, если его нет. |
| `ensureReviewRulesDialog` | — | `void` | Создаёт диалог правил проверки и связывает его кнопки открытия/закрытия. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Связывает кнопку «локальная история» (прокручивает к списку или показывает уведомление о пустой истории). |
| `positionClipHistoryPanel` | — | `void` | Держит панель первым элементом в `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Перерисовывает панель истории для текущего клипа. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Добавляет сводку текущего вердикта в историю игры и клипа. |
| `isLocalHistoryEnabled` | — | `boolean` | Читает, включена ли локальная история; по умолчанию включена. |
| `readTimeFormat` | — | `string` | Читает формат времени: автоматический, 12- или 24-часовой. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Форматирует время первого обнаружения с учётом языка и формата времени. |
| `getQueueNoticeLocale` | — | `string` | Возвращает активный язык уведомления о пустой очереди. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Переносит прежний выбор языка в общую настройку и синхронизирует URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Обновляет отображаемое время первого обнаружения. |

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
| `invokeCancelAction` | — | `boolean` | Снимает подготовку двухэтапной отправки или нажимает видимую кнопку «Отмена»; возвращает `false`, если отменять нечего. |
| `refreshCancelButtonLabel` | — | `void` | Добавляет или обновляет подсказку клавиши на кнопке «Отмена». |
| `hookProceedButton` | — | `void` | Заменяет поведение клика нативной кнопки отправки. |
| `installVerdictChangeReset` | — | `void` | Снимает взвод отправки и повторно синхронизирует пресеты при изменении вердикта. |
| `scheduleProceedFooterFix` | — | `void` | Отложенный (`requestAnimationFrame`) вызов `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Отложенная повторная нормализация подписей/заголовков/значений по умолчанию. |

## Список горячих клавиш и их переназначение

| Действие | По умолчанию | Группа | Назначение |
|---|---|---|---|
| `playPause` | `Space` | Воспроизведение | Приостанавливает клип или возобновляет воспроизведение. |
| `mute` | `M` | Воспроизведение | Включает или выключает звук. |
| `fullscreen` | `F` | Воспроизведение | Включает или выключает полноэкранный режим. |
| `seekBack` / `seekForward` | `←` / `→` | Навигация | Перематывает клип на 5 секунд назад или вперёд. |
| `frameBack` / `frameForward` | `,` / `.` | Навигация | Переходит на один кадр назад или вперёд. |
| `speedBoost` | `Shift` | Навигация | Ускоряет воспроизведение, пока клавиша удерживается (единственное действие, которому можно назначить `Shift`). |
| `quick1` … `quick5` | `1` … `5` | Вердикты | Классическая форма: пресеты 1–5. Одно вопросное задание: «Читы» / «Не уверен» / «Читов не обнаружено» на клавишах `1`–`3`. |
| `proceed` | `Enter` | Отправка | Подтверждает вердикт либо подготавливает и отправляет классическую форму. |
| `cancel` | `Esc` | Отправка | Нажимает «Отмена» или отменяет подготовку после первого нажатия `Enter`. |
| `inviteDone` | `Enter` | Страница приглашения | Покидает страницу приглашения; то же действие, что у кнопки «Готово». |
| `inviteClose` | `Esc` | Страница приглашения | Закрывает страницу приглашения; то же действие, что у кнопки ×. |
| `settings` | `F2` | Интерфейс | Открывает или закрывает окно настроек. |

Назначения сохраняются как значения `KeyboardEvent.code` в `demoscopeKeybindings` (записываются только отличия от стандартных назначений; клавиша настроек хранится отдельно). Левый и правый модификаторы считаются одной клавишей, а цифровая клавиатура соответствует основному ряду. Нельзя назначить `Tab`, `Ctrl`, `Alt`, `Meta`, `Caps Lock`, `ContextMenu`, `F5`, `F11` и `F12`. Конфликты проверяются по областям: действия `review`, действия `invite` и глобальная клавиша настроек, конфликтующая со всеми.

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Подставляет значения вместо меток `{name}` в локализованной строке. |
| `isModalOpen` | — | `boolean` | Возвращает `true`, если открыто любое окно `<dialog>`; пока оно открыто, горячие клавиши страницы не срабатывают. |
| `normalizeKeyCode` | `code: string` | `string` | Объединяет левый и правый модификаторы и сопоставляет цифры цифрового блока и `NumpadEnter` с клавишами основного ряда. |
| `formatKeyLabel` | `code: string` | `string` | Возвращает отображаемое название клавиши (`ArrowLeft` → `←`, `KeyM` → `M`, `Escape` → `Esc`). |
| `loadKeyOverrides` | — | `object` | Читает и проверяет сохранённые назначения клавиш; использует кэш и возвращает `{}` при ошибке. |
| `saveKeyOverrides` | `overrides: object` | `void` | Сохраняет назначения или удаляет запись, если все клавиши возвращены к стандартным. |
| `getBinding` | `id: string` | `string` | Возвращает текущую клавишу действия; пустая строка означает, что клавиша не назначена. |
| `setBinding` | `id: string, code: string` | `void` | Назначает клавишу действию; пустой код снимает назначение. Стандартные значения не сохраняются. |
| `resetAllBindings` | — | `void` | Сбрасывает все назначения, в том числе клавишу настроек, к стандартным. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Находит другое действие с этой клавишей в пересекающейся области. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | По событию клавиатуры определяет действие для текущей области страницы. |
| `keyScopeOf` | `id: string` | `string` | Возвращает область действия клавиши: `review`, `invite` или `global`. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | Возвращает `true`, если области могут конфликтовать: они совпадают или одна из них глобальная. |
| `currentKeyScope` | — | `string` | Возвращает `invite` на странице приглашения и `review` на остальных страницах. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Возвращает пустую строку, если клавишу можно назначить, `reserved` для зарезервированной клавиши или `shift`, если Shift назначен действию, не связанному с удержанием. |
| `quickRangeLabel` | `count: number` | `string` | Формирует подпись клавиш быстрых вердиктов (`1–5`, если назначения не менялись, иначе перечисляет назначенные клавиши). |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Создаёт HTML-разметку подсказок клавиш под видео на основе текущих назначений. |
| `refreshKeyLabels` | — | `void` | Обновляет подсказки клавиш под видео, на пресетах и вердиктах, на кнопках продолжения, отмены и страницы приглашения, а также в сводках настроек. |
| `ensureDemoscopeDialogStyles` | — | `void` | Добавляет общие стили окон горячих клавиш и анимаций. |
| `hkActionName` | `id: string` | `string` | Возвращает локализованное название действия. |
| `hkGroupName` | `group: string` | `string` | Возвращает локализованное название группы действий. |
| `hkActionDescription` | `id: string` | `string` | Возвращает локализованное описание действия; быстрые вердикты описаны для обоих типов заданий. |
| `hkSetMessage` | `text: string, warn = false` | `void` | Устанавливает строку состояния окна горячих клавиш. |
| `hkCancelCapture` | — | `void` | Выходит из режима записи клавиши. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Создаёт разметку строки действия, включая панель конфликта, если он возник. |
| `renderHotkeys` | — | `void` | Повторно отображает окно горячих клавиш, сохраняя позицию прокрутки. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Назначает клавишу: режим `replace` снимает её с другого действия, а `swap` меняет клавиши двух действий местами. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Назначает клавишу или открывает панель конфликта («Заменить» / «Поменять местами» / «Отмена»), если клавиша уже занята. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Создаёт окно горячих клавиш и обработчик клавиш в фазе перехвата. `Esc` можно назначить; в режиме записи клавиши она не закрывает окно. |
| `openHotkeysDialog` | — | `void` | Открывает окно горячих клавиш. |

## Анимации

Доступны шесть стилей индикатора (`pulse`, `breathe`, `ripple`, `heartbeat`, `orbit`, `blink`), три скорости (0,6× / 1× / 1,7×) и переключатель. Настройки хранятся в `demoscopeAnimStyle`, `demoscopeAnimSpeed` и `demoscopeAnimEnabled`. Активный стиль задаётся атрибутом `data-ds-anim` у `<html>` (значение `off`, если анимация выключена); таблица стилей применяет его к индикатору и примерам.

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Безопасно читает значение из `localStorage`. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Безопасно записывает значение в `localStorage`; значение `null` удаляет ключ. |
| `animEnabled` | — | `boolean` | Читает сохранённое состояние анимации; по умолчанию она выключена, если система просит уменьшить движение. |
| `animStyle` | — | `string` | Читает сохранённый стиль анимации (по умолчанию `pulse`). |
| `animSpeedKey` | — | `string` | Читает сохранённую скорость (`slow` / `normal` / `fast`, по умолчанию `normal`). |
| `ensureAnimationStyles` | — | `void` | Добавляет общие ключевые кадры и правила стилей для индикатора и примеров анимации. |
| `applyAnimationSettings` | — | `void` | Применяет стиль, скорость и состояние анимации к `<html>` и обновляет сводку настроек. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Создаёт окно анимаций с переключателем, настройкой скорости, карточками стилей с живыми примерами и кнопкой сброса. |
| `openAnimationsDialog` | — | `void` | Открывает окно анимаций. |
| `ensureUiPolishStyles` | — | `void` | Задаёт тёмные тонкие полосы прокрутки и `color-scheme: dark` для окон и списка вердиктов (иначе Chromium может показывать светлую полосу). |

## Задание с одним вопросом

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Возвращает `true`, если страница показывает форму с одним вопросом (`#verdictbuttons_cheating`). |
| `selectCheatingVerdict` | `kind: string` | `void` | Выбирает вариант «Читы» / «Не уверен» / «Читов не обнаружено» (`positive` / `skip` / `negative`). Если вариант заблокирован, проигрывает звук ошибки и встряхивает карточку блокировки. |
| `localizeCheatingVerdicts` | — | `void` | Переводит подписи трёх вариантов на язык DemoScope и добавляет подсказки клавиш средствами CSS, чтобы цифры не попадали в строку подтверждения VACNet. Также подготавливает карточку блокировки. |
| `updateCheatingLock` | — | `void` | Обновляет карточку блокировки и индикатор оставшегося времени; скрывает её после разблокировки вариантов или выбора вердикта. |
| `startCheatingLockWatcher` | — | `void` | Запускает таймер с интервалом 250 мс, который обновляет карточку блокировки. |

## Устойчивость и диагностика

| Функция | Параметры | Возвращает | Назначение |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Записывает сбой этапа в ограниченный по размеру список для диагностического отчёта. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Запускает этап настройки; при ошибке записывает её и возвращает запасное значение, чтобы следующие этапы продолжили работу. |
| `getVideoContainer` | — | `HTMLElement \| null` | Находит контейнер видео; если его нет, использует родительский элемент плеера или `<video>`. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Находит контейнер вердиктов; запасной вариант — родитель первого блока вердикта. |
| `getSubmitArea` | — | `HTMLElement \| null` | Находит область отправки или подтверждения (`#submitbuttons`, `.submitbuttons` либо родителя кнопки отправки). |
| `hasVerdictForm` | — | `boolean` | Возвращает `true`, если на странице есть хотя бы одна радиокнопка вердикта. |
| `removeEnhancements` | — | `void` | Удаляет панели и классы DemoScope и восстанавливает исходный нижний колонтитул VACNet. |
| `disableDemoScope` | `reason: string` | `void` | Отключает DemoScope на этой странице: отменяет изменения, оставляет только окно настроек и один раз за сеанс показывает уведомление с причиной. |
| `isOwnNode` | `el: Element` | `boolean` | Проверяет, создан ли элемент DemoScope; такие элементы не включаются в отчёт о структуре. |
| `elementSignature` | `el: Element` | `string` | Формирует сигнатуру `tag#id.class[…]` для отчёта о структуре; текст в неё не входит. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Создаёт компактное дерево тегов, идентификаторов и классов; одинаковые соседние элементы сворачиваются в `×N`. |
| `captureOriginalSkeleton` | — | `void` | Сохраняет структуру страницы до изменений DemoScope. |
| `buildDiagnosticsReport` | — | `string` | Создаёт отчёт с версией, страницей, языком и браузером, типом задания, результатами 22 проверок элементов (`ok` / `MISSING`), ошибками этапов и структурой до и после DemoScope. Не содержит текста страницы или данных аккаунта. |
| `fallbackCopyText` | `text: string` | `boolean` | Копирует текст через временное текстовое поле, если Clipboard API недоступен. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Копирует отчёт; если копирование не удаётся, выводит текст в поле, где его можно выделить. |

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
| `ensureReviewStructure` | — | `void` | Нормализует разметку VACNet: оборачивает блоки вердиктов в `.verdicts-container-inner`, перемещает `#submitbuttons` внутрь контейнера и переносит счётчик клипов в заголовок. Поддерживает старую и обновлённую разметку. |
| `watchProceedFooter` | — | `void` | Наблюдает за `.verdicts-container` и планирует исправления подвала. |
| `watchVerdictLabels` | — | `void` | Наблюдает за подписями вердиктов и планирует повторную нормализацию. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Читает из localStorage настройку видимости подвала. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Сохраняет настройку видимости подвала. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | Применяет индивидуальные настройки и режим «Скрыть всё» к ссылкам, строке авторских прав и всему нижнему колонтитулу. |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Создаёт или обновляет локализованный подвал с необязательными ссылками и применяет настройки видимости. |
| `installEmptyQueueNotice` | — | `boolean` | Заменяет сообщение о пустой очереди локализованным пояснением, временем, выбором языка и подвалом. |
| `init` | — | `Promise<void>` | Точка входа: элемент управления именем аккаунта → страница приглашений или проверки → разметка, наблюдатели, горячие клавиши, улучшения плеера. |

`installWelcomePage` и `installInvitePage` возвращают `false`, если на странице нет необходимых элементов VACNet. `installEmptyQueueNotice` возвращает `false`, если очередь не пуста.

### Не перечислено выше

* **`blockSegmentLoopGuard`** (IIFE, выполняется при загрузке): перехватывает `setInterval` на странице и заменяет штатный таймер сегмента VACNet с интервалом 100 мс на пустую функцию; управление сегментом выполняют собственные элементы DemoScope.
* **Константы и таблицы:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (21 определение в `PRESETS`); добавлены после v1.0.0: `KEY_ACTIONS`, `KEY_GROUPS`, `KEY_ACTION_BY_ID`, `KEY_ACTION_SCOPE`, `RESERVED_KEY_CODES`, `CHEATING_KEYS`, `VERDICT_SECTION_TITLES`, `VERDICT_SECTION_HELP`, `ANIM_STYLES`, `ANIM_SPEEDS`.
* **Состояние модуля:** `diag` (ошибки этапов, причина отключения и исходная структура страницы), `hkState` (состояние окна горячих клавиш) и константа `SCRIPT_VERSION`, используемая в диагностическом отчёте.
* **Строки интерфейса:** все видимые пользователю строки находятся в таблицах локализации выше; окна, добавленные в версиях v1.2.0–v1.4.0, переведены на все 29 языков.

## Ключи хранения

| Ключ | Где хранится | Назначение |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Выбранный язык и режим автоматического выбора. |
| `demoscopeKeybindings` | `localStorage` | Назначения горячих клавиш, отличающиеся от стандартных (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Клавиша открытия окна настроек (`none`, если назначение снято). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Параметры анимации индикатора. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Параметры звука. |
| `demoscopeClipHistory` и ключи лимитов/формата истории | `localStorage` | Локальная история проверок и её настройки. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Состояние отправки, защита синхронизации языка и уведомление об отключении. |


