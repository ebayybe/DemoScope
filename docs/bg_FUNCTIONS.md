<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/en_FUNCTIONS.md) · **Български** · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ja_FUNCTIONS.md)

</div>

# DemoScope — справочник на функциите

Пълен справочник на 217 функции от най-високо ниво в `DemoScope.user.js` v1.4.0 (име, параметри, върната стойност, отговорност). Обратно към [README](../README.md).

Означения: `—` означава липса на параметри; `void` означава, че функцията се извиква заради страничните си ефекти.

## Обзор на поведението

| Област | Описание |
|---|---|
| Поддържани страници | Подобрява началната страница на VACNet (`/vacnet`), страниците за преглед (`/vacnet/clips`), страницата за покани (`/vacnet/createinvite`) и състоянието без клипове в раздела за преглед. Не променя други страници. |
| Типове задачи | Разпознава кой формуляр за преглед предоставя VACNet. Към **класическия формуляр** (aim assist, wallhack, auto-bhop, bot) добавя шаблони и разширени комбинации. По-новата **задача с един въпрос** получава компактен изглед: три означени оценки с клавиши `1`–`3`, индикатор за заключване с оставащото време на клипа и без бързи оценки или комбинации. |
| Език | Поддържа 29 езика на Steam. Запазеният ръчен избор е с предимство; в противен случай скриптът използва параметъра `?l=` на Steam, а после езика на браузъра/страницата. Изборът в DemoScope подава съответния `?l=` и на VACNet, така че неговите бутони и въпроси да са на същия език. Автоматичният режим синхронизира езиковия параметър на Steam с браузъра. |
| Начална страница и покани | Променя оформлението на двете страници, добавя общ избор на език и бутон с око за скриване на името на акаунта. На началната страница Enter или Space продължава, когато фокусът не е върху интерактивен елемент. На страницата за покани може да се скрива, показва и копира връзката, обясняват се условията, а × затваря страницата; Enter изпълнява „Готово“, Esc — действието на ×. |
| Преглед на клипове | Добавя предварително зададени оценки и разширени комбинации, разбъркване на оценките (изключено по подразбиране), регулируема скорост при задържан Shift, търсене в рамките на сегмент, преместване кадър по кадър и клавиши за възпроизвеждане. Категориите имат бутон „?“ с преведено обяснение; важните думи в бутоните са оцветени в палитрата на DemoScope. |
| Клавишни комбинации | Всички комбинации са действия в общ регистър и могат да се променят от **Настройки → Клавишни комбинации**. Конфликтите се проверяват отделно за всяка страница (поканите и прегледът не се застъпват) и показват действието, групата и описанието, които вече използват клавиша. Можете да замените, размените или отмените. Всяко действие има бутон за нулиране, а подсказките на страницата следват зададените клавиши. |
| Изпращане | `Enter` или `Numpad Enter` (по подразбиране) задейства „Продължи“. При класическия формуляр първото натискане подготвя действието, а следващото изпраща оценките. При задачата с един въпрос изборът показва потвърждението на VACNet, което се потвърждава с `Enter`. `Esc` (по подразбиране) натиска „Отказ“ при чакаща оценка или отменя първото натискане. Space не изпраща. |
| Настройки | `F2` отваря настройките по подразбиране (може да се промени в прозореца за комбинации). Раздели: комбинации, анимации, звукови ефекти и сила на звука, локална история (включване, ограничения, 12/24-часов формат, резервни копия), видимост на долния колонтитул, диагностика и общо нулиране на звука, комбинациите и анимациите. |
| Анимации | Точката до „DemoScope“ може да се анимира. Отделен прозорец предлага шест стила (pulse, breathe, ripple, heartbeat, orbit, blink), преглед на живо, три скорости и превключвател. Ако операционната система ограничава движението, анимациите са изключени по подразбиране. |
| Локална история | Записва обобщения на оценките в `localStorage` на този браузър; DemoScope не ги качва. Историята може да се изключва, импортира, експортира като JSON/HTML, обединява от JSON резервни копия в HTML отчет или изчиства. Ограниченията са 10/20/30/50 записа на ключ и общо 100/200/300/500 ключа. Изключването спира новите записи, но не изтрива старите. Записва се само класическият формуляр. |
| Празна опашка | Заменя съобщението на VACNet за празна опашка с преведени указания, локално запазена в браузъра дата/час на първата поява и избор на език. Текстът за 250 демонстрации дневно е ориентировъчна информация от наблюдения на VACNet; DemoScope нито налага, нито заобикаля това ограничение. |
| Долен колонтитул | Използва преведен долен колонтитул на DemoScope. На страниците с клипове може да показва връзки за обратна връзка и сигнализиране; настройките могат да скрият всяка връзка, авторските права или целия колонтитул. |
| Устойчивост | Всяка стъпка по настройването се изпълнява отделно, така че една грешка да не спира останалите. Важните елементи се търсят и с резервни варианти. Ако страницата вече не може да бъде разпозната, DemoScope се изключва за нея, възстановява оформлението на VACNet и показва кратко известие. **Настройки → Диагностика** копира текстов отчет за грешки с версията, намерените елементи, неуспешните стъпки и структурата на страницата. |

## Локализация

| Функция | Параметри | Връща | Предназначение |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | SVG код на знамето за даден език; при липса се връща иконата на глобус. |
| `getSavedLocale` | — | `string \| null` | Чете запазения от потребителя език (`demoscopeLanguage`) от `localStorage`. |
| `getActiveLocale` | — | `string` | Определя активния език: запазен избор → Steam `?l=` → език на браузъра/страницата → `en`. |
| `getLanguageBadge` | — | `string` | Собственото име на езика, напр. „English version“, за значката в избора на език. |
| `getBrowserLocale` | — | `string \| null` | Намира първия поддържан език на браузъра, включително регионалните варианти. |
| `syncAutomaticLanguage` | — | `boolean` | При автоматичен режим синхронизира ?l= с езика на браузъра и навигира при разлика. |
| `getRenderedSteamLanguage` | — | `string \| null` | Прочита езика, на който VACNet действително е показал страницата, от параметъра l= в URL адресите на таблицата със стилове и скриптовете на страницата. |
| `syncSelectedLanguage` | — | `boolean` | При ръчен избор на език в DemoScope зарежда страницата еднократно със съответния ?l=, така че текстът на VACNet да е на същия език. Пропуска презареждането, ако езиците съвпадат; предпазва от цикъл на пренасочване. Връща true, ако е извършена навигация. |
| `tr` | `key: string` | `string` | Търси низ от интерфейса за активния език (резервно: английски, после самият ключ). |
| `inviteText` | `key: string` | `string` | Същото търсене за таблицата с низове на страницата за покани. |
| `settingText` | `key: string` | `string` | Същото търсене за таблицата с низове на диалога с настройки. |
| `getPresetLabel` | `name: string` | `string` | Локализиран етикет на шаблон; съставя комбинации като „Bot + Aim“. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | HTML на бутоните за избор на език, включително опцията „auto“. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Свързва и позиционира избора на език, записва избора и презарежда страницата; незадължителен callback обработва избора вместо това. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Намира локализиран текст за празната опашка или долния колонтитул. |

## Звукови ефекти и диалог с настройки

| Функция | Параметри | Връща | Предназначение |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Ред „N записа · последен запис: …“ в диалога с настройки. |
| `soundsEnabled` | — | `boolean` | Дали звуците на интерфейса са включени (`demoscopeSoundEffectsEnabled`, по подразбиране включени). |
| `getSoundVolume` | — | `number (0–1)` | Запазена сила на звука (`demoscopeSoundEffectsVolume`, по подразбиране 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Синтезира кратка поредица от тонове с Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); никога не хвърля грешка. |
| `readSettingsHotkey` | — | `string` | Запазеният `KeyboardEvent.code`, който отваря диалога с настройки (по подразбиране `F2`). |
| `formatHotkey` | `code: string` | `string` | Четливо име на клавиш (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Извлича код на физически клавиш, като връща нелатинските подредби към `KeyX`; `""`, ако е неизползваем. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Истина за клавишите, които DemoScope или плейърът вече ползват (Enter, интервал, стрелки, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Създава и свързва настройките: звуци и сила, преглед, клавишна комбинация, локална история и лимити, формат на часа, JSON импорт/експорт, HTML експорт/обединяване, изчистване на историята, видимост на колонтитула и нулиране. |
| `openSettingsDialog` | `opener = null` | `void` | Отваря диалога с текущите стойности и запомня елемента, към който да върне фокуса. |
| `installSettingsUi` | — | `void` | Инсталира глобалния слушател на клавиши във фаза capture (отваряне/затваряне на диалога, преназначаване) и звуковите събития. |
| `installUiSoundEvents` | — | `void` | Делегиран слушател на щраквания, който пуска звукова обратна връзка за контролите на DemoScope. |
| `ensureSettingsLayoutStyles` | — | `void` | Добавя стиловете за прозореца с настройки: подравнява секциите вляво и оформя редовете с обобщаващи значки. |
| `refreshSettingsSummaries` | — | `void` | Обновява обобщаващите значки за клавишните комбинации и анимациите. |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Добавя секциите за клавишни комбинации, анимации, диагностика и нулиране; скрива стария блок за клавиша на настройките. |

## Архиви, отчети и лимити на историята

| Функция | Параметри | Връща | Предназначение |
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

## Име на акаунта и страница за покани

| Функция | Параметри | Връща | Предназначение |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Дали името на Steam акаунта в момента е скрито. |
| `installAccountNameControl` | — | `void` | Добавя превключвател с око до връзката за изход и го поддържа синхронизиран чрез `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Преработва `/vacnet/createinvite`: карта, показване/скриване и копиране на връзката (Clipboard API с резервен `execCommand`), списък с изисквания, избор на език. Връща `false`, ако липсват очакваните елементи. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Добавя бутон за затваряне и обработчик за действията inviteDone и inviteClose. Игнорира клавишите, когато фокусът е върху интерактивен елемент или списъка с езици. |
| `refreshInviteKeyLabels` | — | `void` | Обновява надписа „Готово“ и подсказката на × според текущите клавишни комбинации. |
| `installWelcomePage` | — | `boolean` | Оформя началната страница, добавя брандинг и избор на език; Enter/Space продължава; false при липсващи елементи. |

## Сегмент на клипа и адаптер на плейъра

| Функция | Параметри | Връща | Предназначение |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Връща true, когато фокусът е в поле за въвеждане, textarea, select или редактиран текст. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Като isShortcutBlocked, но допуска радио бутоните за избор, понеже фокусът остава върху тях след щракване. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Етикет на опция за скорост. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Списък с `<option>` за избора на скорост (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Запазена скорост при Shift (по подразбиране 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Запазено състояние на рандомизатора на присъди (по подразбиране изключен). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Свързва управлението на скоростта, ограничаването/паузирането на сегмента, помощниците за превъртане/кадър/заглушаване/цял екран и глобалните клавишни комбинации (`1`–`5`, стрелки, `,` `.`, интервал, `M`, `F`, Shift). Вътрешни затваряния: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, помощници за цикъла на рисуване. |

## Шаблони за присъди

| Функция | Параметри | Връща | Предназначение |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Избира „skip“ във всяка група присъди без избор. |
| `getSelectedVerdictState` | — | `object` | Текуща стойност (`positive` / `negative` / `skip` / `null`) на `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Име на шаблона, съвпадащ с текущия избор. |
| `syncPresetButtons` | — | `string \| null` | Обновява `aria-pressed` на бутоните за шаблони и значката на разширения шаблон. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Щраква радио входовете на шаблон; при включен рандомизатор разбърква реда и изчаква 200–600 ms между щракванията. Забранява бутоните за шаблони, докато работи. |
| `readAdvancedPresetsOpen` | — | `boolean` | Дали панелът с разширени шаблони е оставен отворен. |
| `normalizeVerdictLabels` | `root = document` | `void` | Премахва маркировката за подчертаване от етикетите на присъдите. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Добавя локализирани заглавия над всяка група присъди. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Създава бутон „?“ и обяснителен прозорец за група решения, като използва преведения текст на DemoScope; текстът на VACNet е резервен вариант. |
| `closeVerdictHelp` | `except = null` | `void` | Затваря всички отворени обяснения освен посоченото. |
| `installVerdictHelpHandlers` | — | `void` | Еднократно настройва делегирана обработка на щракване, щракване извън прозореца и Esc за обясненията. |

## Известия, долен колонтитул и екран за зареждане

| Функция | Параметри | Връща | Предназначение |
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

| Функция | Параметри | Връща | Предназначение |
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
| `isLocalHistoryEnabled` | — | `boolean` | Чете дали локалната история е включена; по подразбиране е включена. |
| `readTimeFormat` | — | `string` | Чете предпочитан формат: автоматичен, 12- или 24-часов. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Форматира първия час според езика и избрания формат. |
| `getQueueNoticeLocale` | — | `string` | Връща активния език за известието за празна опашка. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Премества стария избор на език към общата настройка и синхронизира URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Обновява показания час на първото засичане. |

## Процес на изпращане

| Функция | Параметри | Връща | Предназначение |
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
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Прави проверката за сигурност, показва екрана за зареждане и изпраща формуляра. |
| `submitVerdictsDirect` | — | `boolean` | Подготвя етикетите и изпраща. |
| `invokeProceedAction` | — | `boolean` | Обработчик на Enter/щракване: първото натискане подготвя, второто изпраща. |
| `installProceedShortcut` | — | `void` | Слушател във фаза capture за `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Отменя подготовката от първото натискане при двустъпково изпращане или натиска видимия бутон „Отказ“. Връща false, ако няма какво да се отмени. |
| `refreshCancelButtonLabel` | — | `void` | Добавя или обновява значката с клавиша върху бутона „Отказ“. |
| `hookProceedButton` | — | `void` | Заменя поведението при щракване на вградения бутон за изпращане. |
| `installVerdictChangeReset` | — | `void` | Обезоръжава изпращането и синхронизира шаблоните, когато присъда се промени. |
| `scheduleProceedFooterFix` | — | `void` | Забавено (`requestAnimationFrame`) извикване на `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Забавена повторна нормализация на етикети/заглавия/стойности по подразбиране. |

## Регистър и промяна на клавишните комбинации

| Действие | По подразбиране | Група | Описание |
|---|---|---|---|
| `playPause` | `Space` | Playback | Спира или възобновява клипа. |
| `mute` | `M` | Playback | Изключва или включва звука. |
| `fullscreen` | `F` | Playback | Включва или изключва режим на цял екран. |
| `seekBack` / `seekForward` | `←` / `→` | Навигация | Прескача с 5 секунди назад/напред. |
| `frameBack` / `frameForward` | `,` / `.` | Навигация | Премества с един кадър назад/напред. |
| `speedBoost` | `Shift` | Navigation | Докато клавишът е задържан, ускорява възпроизвеждането; това е единственото действие, което може да използва Shift. |
| `quick1` … `quick5` | `1` … `5` | Оценки | Класически формуляр: шаблони 1–5. Една задача с въпрос: Cheating / Not sure / No cheats seen (`1`–`3`). |
| `proceed` | `Enter` | Submission | Потвърждава решението или подготвя и изпраща класическия формуляр. |
| `cancel` | `Esc` | Submission | Натиска „Отказ“ или отменя първото натискане на Enter. |
| `inviteDone` | `Enter` | Invite page | Напуска страницата с поканата, както бутонът „Готово“. |
| `inviteClose` | `Esc` | Invite page | Извършва същото като бутона ×. |
| `settings` | `F2` | Interface | Отваря или затваря прозореца с настройки. |

Клавишите се записват като стойности на `KeyboardEvent.code` в `demoscopeKeybindings` (само отклоненията от подразбиращите се; клавишът за настройки е отделно). Левият и десният модификатор се броят за един клавиш, а цифровият блок съответства на основния ред. Не могат да се задават: `Tab`, `Ctrl`, `Alt`, `Meta`, `Caps Lock`, `ContextMenu`, `F5`, `F11`, `F12`. Обхватите са отделни: `review`, `invite` и `global` за настройки, който влиза в конфликт с всички.

| Функция | Параметри | Връща | Предназначение |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Заменя заместителите {name} в преведен шаблон. |
| `isModalOpen` | — | `boolean` | Връща true, докато има отворен елемент <dialog>; през това време преките пътища на страницата не се обработват. |
| `normalizeKeyCode` | `code: string` | `string` | Обединява левия и десния модификатор като един клавиш и преобразува цифрите от цифровия блок и NumpadEnter към основните клавиши. |
| `formatKeyLabel` | `code: string` | `string` | Връща показваното име на клавиша (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Зарежда и проверява запазените комбинации (от кеш; при грешка връща {}). |
| `saveKeyOverrides` | `overrides: object` | `void` | Запазва комбинациите или премахва записа, ако всички са по подразбиране. |
| `getBinding` | `id: string` | `string` | Връща текущия клавиш за действие; празен низ означава, че няма назначен клавиш. |
| `setBinding` | `id: string, code: string` | `void` | Запазва клавиш за действие; празният код премахва назначението. Стойностите по подразбиране не се записват. |
| `resetAllBindings` | — | `void` | Връща всички комбинации, включително клавиша за настройки, към стойностите по подразбиране. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Намира друго действие, което използва същия клавиш в припокриващ се обхват. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Определя идентификатора на действието за събитие от клавиатурата в текущия обхват на страницата. |
| `keyScopeOf` | `id: string` | `string` | Връща обхвата на действието: review, invite или global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | Връща true, ако два обхвата могат да се сблъскат: еднакви са или единият е global. |
| `currentKeyScope` | — | `string` | Връща invite на страницата с покана и review на останалите. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Връща празен низ при допустим клавиш, reserved за забранени клавиши или shift, когато Shift е зададен за действие без задържане. |
| `quickRangeLabel` | `count: number` | `string` | Създава надпис за клавишите за бързо решение: 1–5 по подразбиране или назначените клавиши. |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Създава подсказките за клавиши под видеото според текущите назначения. |
| `refreshKeyLabels` | — | `void` | Обновява всички надписи на клавиши в страницата, включително подсказките, значките и обобщенията в настройките. |
| `ensureDemoscopeDialogStyles` | — | `void` | Добавя общия облик на прозорците за клавишни комбинации и анимации. |
| `hkActionName` | `id: string` | `string` | Връща преведеното име на действие. |
| `hkGroupName` | `group: string` | `string` | Връща преведеното име на група. |
| `hkActionDescription` | `id: string` | `string` | Връща преведено обяснение на действието; бързите решения са описани за двата вида задачи. |
| `hkSetMessage` | `text: string, warn = false` | `void` | Задава текста в лентата за състояние на прозореца с клавишни комбинации. |
| `hkCancelCapture` | — | `void` | Излиза от режима за улавяне на клавиш. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Създава HTML за ред на действие, включително панела за конфликт, ако има такъв. |
| `renderHotkeys` | — | `void` | Изобразява отново целия прозорец и запазва позицията на превъртане. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Назначава клавиш; replace премахва назначението на другото действие, а swap разменя клавишите. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Назначава клавиш или показва панел за конфликт (Replace / Swap / Cancel), ако клавишът вече се използва. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Създава прозореца за клавишни комбинации и обработчика за клавиши; Esc може да се назначи и не затваря прозореца по време на улавяне. |
| `openHotkeysDialog` | — | `void` | Отваря прозореца за клавишни комбинации. |

## Анимации

Шест стила на индикатора (`pulse`, `breathe`, `ripple`, `heartbeat`, `orbit`, `blink`), три скорости (0.6× / 1× / 1.7×) и превключвател се пазят в `demoscopeAnimStyle`, `demoscopeAnimSpeed` и `demoscopeAnimEnabled`. Активният стил се задава чрез `data-ds-anim` на `<html>` (`off`, когато е изключено); стиловете управляват точката и прегледите.

| Функция | Параметри | Връща | Предназначение |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Безопасно прочита стойност от localStorage. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Безопасно записва стойност в localStorage; null премахва ключа. |
| `animEnabled` | — | `boolean` | Прочита запазеното състояние на анимацията; по подразбиране е изключена при системна настройка за намалено движение. |
| `animStyle` | — | `string` | Прочита запазения стил; по подразбиране pulse. |
| `animSpeedKey` | — | `string` | Прочита запазената скорост (slow / normal / fast; по подразбиране normal). |
| `ensureAnimationStyles` | — | `void` | Добавя общите keyframes и правила за индикатора и точките в предварителния преглед. |
| `applyAnimationSettings` | — | `void` | Прилага стила, скоростта и включването към <html> и обновява обобщението в настройките. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Създава прозореца за анимации с превключвател, скорост, карти със стилове и преглед на живо, и нулиране. |
| `openAnimationsDialog` | — | `void` | Отваря прозореца за анимации. |
| `ensureUiPolishStyles` | — | `void` | Добавя тъмни тънки ленти за превъртане и color-scheme: dark към прозорците и списъка с решения. |

## Задача с един въпрос

| Функция | Параметри | Връща | Предназначение |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Връща true, когато страницата показва формуляра с един въпрос (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | Избира радио бутона Cheating / Not sure / No cheats seen; ако е заключен, пуска звук за грешка и разклаща картата за заключване. |
| `localizeCheatingVerdicts` | — | `void` | Превежда трите надписа и добавя значки на клавишите с CSS, така че редът за потвърждение на VACNet да не съдържа цифрата на клавиша. Подготвя и картата за заключване. |
| `updateCheatingLock` | — | `void` | Обновява картата и лентата за напредък с оставащото време до отключване на другите две решения; скрива ги при отключване или избор. |
| `startCheatingLockWatcher` | — | `void` | Стартира таймер през 250 ms, който извиква updateCheatingLock. |

## Устойчивост и диагностика

| Функция | Параметри | Връща | Предназначение |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Записва неуспешна стъпка в диагностичния отчет; броят на записите е ограничен. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Изпълнява стъпка от настройването; при грешка я записва и връща резервната стойност, за да продължат следващите стъпки. |
| `getVideoContainer` | — | `HTMLElement \| null` | Намира контейнера на видеото или използва родителя на плейъра/елемента <video>. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Намира контейнера на решенията или родителя на първия блок с решение. |
| `getSubmitArea` | — | `HTMLElement \| null` | Намира зоната за изпращане/потвърждение (#submitbuttons, .submitbuttons или родителя на бутона). |
| `hasVerdictForm` | — | `boolean` | Връща true, ако има поне един радио бутон за решение. |
| `removeEnhancements` | — | `void` | Премахва панелите, класовете и промените по долния колонтитул на DemoScope и възстановява колонтитула на VACNet. |
| `disableDemoScope` | `reason: string` | `void` | Изключва DemoScope на тази страница, връща промените назад, оставя само прозореца с настройки и показва еднократно известие за причината в рамките на сесията. |
| `isOwnNode` | `el: Element` | `boolean` | Връща true за елемент, създаден от DemoScope; той се изключва от отчета за структурата. |
| `elementSignature` | `el: Element` | `string` | Създава подпис tag#id.class[…] за отчета за структурата; не включва текст. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Създава компактно отстъпено дърво от тагове, идентификатори и класове; еднаквите съседни елементи се групират като ×N. |
| `captureOriginalSkeleton` | — | `void` | Записва структурата на страницата преди промените на DemoScope. |
| `buildDiagnosticsReport` | — | `string` | Създава отчет с версия, страница, език и браузър, тип задача, 22 проверки на елементи, грешки по стъпки и структурата преди/след DemoScope. Не включва текст от страницата или данни за акаунта. |
| `fallbackCopyText` | `text: string` | `boolean` | Копира текст чрез временно текстово поле, ако Clipboard API не е наличен. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Копира отчета; при неуспех показва текста в поле, от което може да бъде избран. |

## Оформление и стартиране

| Функция | Параметри | Връща | Предназначение |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Изгражда лентата за избор на скорост при Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML на един бутон за шаблон. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML на групите с разширени шаблони. |
| `buildEnhancementBar` | — | `HTMLElement` | Изгражда лентата за бързи присъди: шаблони, превключвател на рандомизатора, разширен панел. |
| `positionShiftSpeedBar` | — | `void` | Държи лентата за скорост преди списъка с присъди. |
| `positionEnhancementBar` | — | `void` | Държи лентата с шаблони преди бутоните за изпращане. |
| `fixProceedFooter` | — | `void` | Пренарежда долния колонтитул, лентите и бутона за изпращане. |
| `enhanceLayout` | — | `void` | Прилага всички промени в оформлението и инсталира интерфейса за настройки. |
| `ensureReviewStructure` | — | `void` | Нормализира HTML структурата на VACNet: обгръща блоковете с решения, премества #submitbuttons в контейнера и дублира брояча на клипове в заглавната значка. Поддържа старата и новата структура. |
| `watchProceedFooter` | — | `void` | Наблюдава `.verdicts-container` и планира поправки на колонтитула. |
| `watchVerdictLabels` | — | `void` | Наблюдава етикетите на присъдите и планира повторна нормализация. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Чете предпочитанието за видимост на колонтитула от localStorage. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Записва предпочитанието за видимост на колонтитула. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Създава или обновява локализиран колонтитул с незадължителни връзки и прилага предпочитанията. |
| `installEmptyQueueNotice` | — | `boolean` | Заменя съобщението за празна опашка с локализирани указания, час, избор на език и колонтитул. |
| `init` | — | `Promise<void>` | Входна точка: контрол на името на акаунта → страница за покани или за преглед → оформление, наблюдатели, клавишни комбинации, подобрения на плейъра. |

`installWelcomePage` и `installInvitePage` връщат `false`, ако липсват необходимите елементи на VACNet. `installEmptyQueueNotice` връща `false`, ако опашката не е празна.

### Други елементи

* **`blockSegmentLoopGuard`** (IIFE, изпълнява се при зареждане): обвива `setInterval` на страницата и заменя стандартния 100 ms таймер за цикъл на сегмента с празно действие; вместо него сегментът се управлява от контролите на DemoScope.
* **Константи и таблици:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitions); added since v1.0.0: `KEY_ACTIONS`, `KEY_GROUPS`, `KEY_ACTION_BY_ID`, `KEY_ACTION_SCOPE`, `RESERVED_KEY_CODES`, `CHEATING_KEYS`, `VERDICT_SECTION_TITLES`, `VERDICT_SECTION_HELP`, `ANIM_STYLES`, `ANIM_SPEEDS`.
* **Състояние на модула:** `diag` (step failures, the switch-off reason and the original page structure), `hkState` (state of the Hotkeys window) and the `SCRIPT_VERSION` constant used by the diagnostics report.
* **Текстове:** всички видими за потребителя текстове са в локализираните таблици по-горе; прозорците от v1.2.0–v1.4.0 са преведени на 29 езика.

## Ключове за съхранение

| Ключ | Къде | Предназначение |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Избран език / автоматичен режим. |
| `demoscopeKeybindings` | `localStorage` | Клавишни комбинации, различни от стойностите по подразбиране (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Клавишът за отваряне на настройките (none при премахване). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Настройки на анимацията на индикатора. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Настройки на звука. |
| `demoscopeClipHistory` и ключовете за ограничения/формат на историята | `localStorage` | Локална история на прегледите и настройките ѝ. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Състояние на изпращането, защита при синхронизиране на езика и еднократно известие за изключване. |








