<div align="center">

[English](../FUNCTIONS.md) · **Български** · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — справочник на функциите

Пълен справочник на 128 функции от най-високо ниво в `DemoScope.user.js` v1.0.0 (име, параметри, върната стойност, отговорност). Обратно към [README](../../README/bg_README.md).

Означения: `—` означава липса на параметри; `void` означава, че функцията се извиква заради страничните си ефекти.

## Локализация

| Функция | Параметри | Връща | Отговорност |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | SVG код на знамето за даден език; при липса се връща иконата на глобус. |
| `getSavedLocale` | — | `string \| null` | Чете запазения от потребителя език (`demoscopeLanguage`) от `localStorage`. |
| `getActiveLocale` | — | `string` | Определя активния език: запазен избор → Steam `?l=` → език на браузъра/страницата → `en`. |
| `getLanguageBadge` | — | `string` | Собственото име на езика, напр. „English version“, за значката в избора на език. |
| `tr` | `key: string` | `string` | Търси низ от интерфейса за активния език (резервно: английски, после самият ключ). |
| `inviteText` | `key: string` | `string` | Същото търсене за таблицата с низове на страницата за покани. |
| `settingText` | `key: string` | `string` | Същото търсене за таблицата с низове на диалога с настройки. |
| `getPresetLabel` | `name: string` | `string` | Локализиран етикет на шаблон; съставя комбинации като „Bot + Aim“. |
| `buildLanguageOptions` | — | `string (HTML)` | HTML на бутоните за избор на език, включително опцията „auto“. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Свързва изскачащия избор на език, позиционира го, запазва избора и презарежда страницата. |

## Звукови ефекти и диалог с настройки

| Функция | Параметри | Връща | Отговорност |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Ред „N записа · последен запис: …“ в диалога с настройки. |
| `soundsEnabled` | — | `boolean` | Дали звуците на интерфейса са включени (`demoscopeSoundEffectsEnabled`, по подразбиране включени). |
| `getSoundVolume` | — | `number (0–1)` | Запазена сила на звука (`demoscopeSoundEffectsVolume`, по подразбиране 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Синтезира кратка поредица от тонове с Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); никога не хвърля грешка. |
| `readSettingsHotkey` | — | `string` | Запазеният `KeyboardEvent.code`, който отваря диалога с настройки (по подразбиране `F2`). |
| `formatHotkey` | `code: string` | `string` | Четливо име на клавиш (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Извлича код на физически клавиш, като връща нелатинските подредби към `KeyX`; `""`, ако е неизползваем. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Истина за клавишите, които DemoScope или плейърът вече ползват (Enter, интервал, стрелки, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Създава (еднократно) и свързва диалога с настройки: звук, сила на звука, избор на клавиш, лимити на историята, износ/внос/отчет/обединяване/изчистване, нулиране. |
| `openSettingsDialog` | `opener = null` | `void` | Отваря диалога с текущите стойности и запомня елемента, към който да върне фокуса. |
| `installSettingsUi` | — | `void` | Инсталира глобалния слушател на клавиши във фаза capture (отваряне/затваряне на диалога, преназначаване) и звуковите събития. |
| `installUiSoundEvents` | — | `void` | Делегиран слушател на щраквания, който пуска звукова обратна връзка за контролите на DemoScope. |

## Архиви, отчети и лимити на историята

| Функция | Параметри | Връща | Отговорност |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Изтегля цялата история като `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Стартира изтегляне на файл чрез временен Blob URL. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Изравнява и дедуплицира записите в историята, най-новите първи. |
| `exportReadableHistory` | — | `void` | Изтегля самостоятелен, локализиран HTML отчет на историята. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Изгражда екранирания HTML на отчета. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Обновява реда за състояние на инструмента за обединяване (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Проверява много JSON архиви (≤ 5 MB всеки, ≤ 100 MB общо), дедуплицира записите и изтегля един общ HTML отчет. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Проверка по бял списък за ключовете на историята (блокира `__proto__`, `constructor`, невалидни ключове). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Проверява JSON архив, обединява го с локалната история (при спазване на лимитите) и обновява интерфейса. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Чете числов лимит от `localStorage`, като приема само разрешени стойности. |
| `getHistoryPerKeyLimit` | — | `number` | Записи, пазени на ключ за клип/игра (10/20/30/50, по подразбиране 30). |
| `getHistoryTotalLimit` | — | `number` | Общ брой пазени ключове за клипове/игри (100/200/300/500, по подразбиране 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | Дали панелът с разширени шаблони е оставен отворен. |

## Име на акаунта и страница за покани

| Функция | Параметри | Връща | Отговорност |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Дали името на Steam акаунта в момента е скрито. |
| `installAccountNameControl` | — | `void` | Добавя превключвател с око до връзката за изход и го поддържа синхронизиран чрез `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Преработва `/vacnet/createinvite`: карта, показване/скриване и копиране на връзката (Clipboard API с резервен `execCommand`), списък с изисквания, избор на език. Връща `false`, ако липсват очакваните елементи. |

## Сегмент на клипа и адаптер на плейъра

| Функция | Параметри | Връща | Отговорност |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Извлича `startTime`/`endTime` от вградените скриптове на страницата. |
| `formatSegmentTime` | `seconds: number` | `string` | Форматира секунди като `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Намира `<video>` елемента за прегледа. |
| `getVjsPlayer` | — | `Video.js player \| null` | Връща Video.js плейъра на страницата, ако е наличен и не е унищожен. |
| `createPlayerAdapter` | — | `adapter \| null` | Единен API над Video.js / HTML5 видео: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Проверява на всеки 100 ms, докато се появи плейър; отхвърля при изтичане на времето. |
| `clampSegment` | `time: number, bounds: object` | `number` | Ограничава време до границите на клипа. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Относителна позиция в клипа. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Добавя лентата за превъртане, времето и подсказките за клавиши под видеото. |
| `pauseLayoutMutations` | `run: Function` | `void` | Изпълнява функция, докато наблюдателите на оформлението са спрени (предотвратява цикли на обратна връзка). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Истина, когато фокусът е в поле за въвеждане, textarea, select, бутон, връзка или редактируем елемент. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Етикет на опция за скорост. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Списък с `<option>` за избора на скорост (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Запазена скорост при Shift (по подразбиране 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Запазено състояние на рандомизатора на присъди (по подразбиране изключен). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Свързва управлението на скоростта, ограничаването/паузирането на сегмента, помощниците за превъртане/кадър/заглушаване/цял екран и глобалните клавишни комбинации (`1`–`5`, стрелки, `,` `.`, интервал, `M`, `F`, Shift). Вътрешни затваряния: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, помощници за цикъла на рисуване. |

## Шаблони за присъди

| Функция | Параметри | Връща | Отговорност |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Избира „skip“ във всяка група присъди без избор. |
| `getSelectedVerdictState` | — | `object` | Текуща стойност (`positive` / `negative` / `skip` / `null`) на `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Име на шаблона, съвпадащ с текущия избор. |
| `syncPresetButtons` | — | `string \| null` | Обновява `aria-pressed` на бутоните за шаблони и значката на разширения шаблон. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Щраква радио входовете на шаблон; при включен рандомизатор разбърква реда и изчаква 200–600 ms между щракванията. Забранява бутоните за шаблони, докато работи. |
| `normalizeVerdictLabels` | `root = document` | `void` | Премахва маркировката за подчертаване от етикетите на присъдите. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Добавя локализирани заглавия над всяка група присъди. |

## Известия, долен колонтитул и екран за зареждане

| Функция | Параметри | Връща | Отговорност |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Скрива долния колонтитул на сайта. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Показва неблокиращо известие с ARIA-live. |
| `markSubmitPending` | — | `void` | Записва часа на изпращане и ID на текущия клип в `sessionStorage`. |
| `isSubmitPending` | — | `boolean` | Дали изпратена присъда чака следващия клип. |
| `clearSubmitPending` | — | `void` | Изчиства маркерите за чакащо изпращане. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Показва екрана за зареждане на цялата страница. |
| `hideSubmitLoadingOverlay` | — | `void` | Скрива екрана за зареждане и изчиства състоянието на чакане. |
| `bootSubmitLoadingIfPending` | — | `void` | Показва отново екрана при зареждане на страницата, ако има чакащо изпращане. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Истина, когато интерфейсът и медията на следващия клип са готови. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Чака до 30 s следващия клип, после скрива екрана (известие за грешка при изтичане на времето). |

## Локално хранилище на историята

| Функция | Параметри | Връща | Отговорност |
|---|---|---|---|
| `extractVodId` | — | `string` | Извежда ID на клипа/играта от URL адреса на видеото. |
| `getGameKey` | — | `string` | Ключ в историята за играта (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Ключ в историята за един сегмент (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Проверява и почиства един запис от историята. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Нормализирани записи за ключ. |
| `getGameHistoryEntries` | `store: object` | `Array` | Записи за текущата игра (поддържа остарял ключ). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Записи за текущия сегмент. |
| `formatClipId` | `vodId: string` | `string` | Кратък цифров идентификатор за показване (`#0000000`), получен чрез хеш от ID на клипа. |
| `formatRelativeTime` | `timestamp: number` | `string` | Локализирано относително време (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Зарежда обекта на историята от `localStorage` (`{}` при грешка). |
| `pruneHistoryStore` | `store: object` | `void` | Прилага лимитите на ключ и общия лимит (най-старите ключове се махат първи). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Подрязва и записва; `false` при грешки с квота/хранилище. |
| `summarizeCurrentVerdict` | — | `string` | Име на шаблона за текущия избор или `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Локализиран етикет за обобщение в историята. |
| `formatClockTime` | `seconds: number` | `string` | Формат на часовник `m:ss` (или `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Четим интервал на сегмента. |
| `formatGameLabel` | — | `string` | Локализиран етикет на текущата игра. |
| `historyEntryKey` | `entry: object` | `string` | Идентифициращ низ, използван за дедупликация. |
| `formatPriorStat` | `count: number, label: string` | `string` | Ред „етикет: N“ в панела с историята. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Слива записите за клипове/игри в елементи за показване. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML на един ред от историята. |
| `escapeHtml` | `value: any` | `string` | Екранира `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML на панела с историята, включително бутона за правилата на прегледа. |
| `ensureClipHistoryPanel` | — | `void` | Създава контейнера на панела, ако липсва. |
| `ensureReviewRulesDialog` | — | `void` | Създава диалога с правилата на прегледа и свързва бутоните му за отваряне/затваряне. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Свързва бутона „локална история“ (превърта до списъка или показва известие за празна история). |
| `positionClipHistoryPanel` | — | `void` | Държи панела първи във `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Прерисува панела с историята за текущия клип. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Добавя обобщението на текущата присъда към историята на играта и клипа. |

## Процес на изпращане

| Функция | Параметри | Връща | Отговорност |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Истина на страници, които показват четирите групи присъди. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Вграденият бутон за изпращане, ако е видим и активен. |
| `recordProceedHistoryIfLabeling` | — | `void` | Записва историята веднъж за изпращане (защита от повторно влизане). |
| `resetProceedArmed` | — | `void` | Обезоръжава двустъпковото изпращане. |
| `refreshProceedButtonLabel` | — | `void` | Обновява етикета на бутона/подсказката за `Enter` и стила на подготвения бутон. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Съпоставя избор с `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Създава скритите полета `verdict_labels[]`; показва известие за грешка и връща `false`, ако някоя група няма избор. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Допуска само действия на формуляри към същия произход по HTTPS. |
| `restoreSubmitUi` | — | `void` | Възстановява бутоните след неуспешно изпращане. |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Прави проверката за сигурност, показва екрана за зареждане и изпраща формуляра. |
| `submitVerdictsDirect` | — | `boolean` | Подготвя етикетите и изпраща. |
| `invokeProceedAction` | — | `boolean` | Обработчик на Enter/щракване: първото натискане подготвя, второто изпраща. |
| `installProceedShortcut` | — | `void` | Слушател във фаза capture за `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Заменя поведението при щракване на вградения бутон за изпращане. |
| `installVerdictChangeReset` | — | `void` | Обезоръжава изпращането и синхронизира шаблоните, когато присъда се промени. |
| `scheduleProceedFooterFix` | — | `void` | Забавено (`requestAnimationFrame`) извикване на `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Забавена повторна нормализация на етикети/заглавия/стойности по подразбиране. |

## Оформление и стартиране

| Функция | Параметри | Връща | Отговорност |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Изгражда лентата за избор на скорост при Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML на един бутон за шаблон. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML на групите с разширени шаблони. |
| `buildEnhancementBar` | — | `HTMLElement` | Изгражда лентата за бързи присъди: шаблони, превключвател на рандомизатора, разширен панел. |
| `positionShiftSpeedBar` | — | `void` | Държи лентата за скорост преди списъка с присъди. |
| `positionEnhancementBar` | — | `void` | Държи лентата с шаблони преди бутоните за изпращане. |
| `fixProceedFooter` | — | `void` | Пренарежда долния колонтитул, лентите и бутона за изпращане. |
| `enhanceLayout` | — | `void` | Прилага всички промени в оформлението и инсталира интерфейса за настройки. |
| `watchProceedFooter` | — | `void` | Наблюдава `.verdicts-container` и планира поправки на колонтитула. |
| `watchVerdictLabels` | — | `void` | Наблюдава етикетите на присъдите и планира повторна нормализация. |
| `init` | — | `Promise<void>` | Входна точка: контрол на името на акаунта → страница за покани или за преглед → оформление, наблюдатели, клавишни комбинации, подобрения на плейъра. |

### Неописани по-горе

* **`blockSegmentLoopGuard`** (IIFE, изпълнява се при зареждане): обвива `setInterval` на страницата, така че вграденият 100 ms таймер на сайта за повтаряне на сегмента се заменя с празна функция; сегментът се управлява от собствените контроли на DemoScope.
* **Константи и таблици:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 дефиниции).
