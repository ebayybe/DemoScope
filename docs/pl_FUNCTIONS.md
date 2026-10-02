<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · **Polski** · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Dokumentacja funkcji

Pełna dokumentacja 128 funkcji najwyższego poziomu w `DemoScope.user.js` v1.0.0 (nazwa, parametry, wartość zwracana, odpowiedzialność). Powrót do [README](../../README/pl_README.md).

Konwencje: `—` oznacza brak parametrów; `void` oznacza, że funkcja jest wywoływana ze względu na swoje efekty uboczne.

## Lokalizacja

| Funkcja | Parametry | Zwraca | Odpowiedzialność |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Wbudowany kod SVG flagi dla danego języka; w razie braku zwraca ikonę globu. |
| `getSavedLocale` | — | `string \| null` | Odczytuje zapisany język użytkownika (`demoscopeLanguage`) z `localStorage`. |
| `getActiveLocale` | — | `string` | Ustala aktywny język: zapisany wybór → Steam `?l=` → język przeglądarki/strony → `en`. |
| `getLanguageBadge` | — | `string` | Własna nazwa wyświetlana języka, np. „English version”, na plakietkę w wyborze języka. |
| `tr` | `key: string` | `string` | Wyszukuje tekst interfejsu dla aktywnego języka (zapas: angielski, potem sam klucz). |
| `inviteText` | `key: string` | `string` | To samo wyszukiwanie dla tabeli tekstów strony zaproszeń. |
| `settingText` | `key: string` | `string` | To samo wyszukiwanie dla tabeli tekstów okna ustawień. |
| `getPresetLabel` | `name: string` | `string` | Zlokalizowana etykieta presetu; składa kombinacje takie jak „Bot + Aim”. |
| `buildLanguageOptions` | — | `string (HTML)` | HTML przycisków wyboru języka, wraz z pozycją „auto”. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Podpina wyskakujący wybór języka, ustawia jego położenie, zapisuje wybór i przeładowuje stronę. |

## Efekty dźwiękowe i okno ustawień

| Funkcja | Parametry | Zwraca | Odpowiedzialność |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Wiersz „N wpisów · ostatni wpis: …” w oknie ustawień. |
| `soundsEnabled` | — | `boolean` | Czy dźwięki interfejsu są włączone (`demoscopeSoundEffectsEnabled`, domyślnie włączone). |
| `getSoundVolume` | — | `number (0–1)` | Zapisana głośność dźwięku (`demoscopeSoundEffectsVolume`, domyślnie 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Syntezuje krótką sekwencję tonów przez Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); nigdy nie zgłasza wyjątku. |
| `readSettingsHotkey` | — | `string` | Zapisany `KeyboardEvent.code`, który otwiera okno ustawień (domyślnie `F2`). |
| `formatHotkey` | `code: string` | `string` | Czytelna nazwa klawisza (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Wyodrębnia kod klawisza fizycznego, odwzorowując układy nielacińskie z powrotem na `KeyX`; `""`, jeśli nieużyteczny. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Prawda dla klawiszy, których DemoScope lub odtwarzacz już używa (Enter, spacja, strzałki, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Tworzy (jednorazowo) i łączy okno ustawień: dźwięk, głośność, przechwytywanie skrótu, limity historii, eksport/import/raport/scalanie/czyszczenie, reset. |
| `openSettingsDialog` | `opener = null` | `void` | Otwiera okno z bieżącymi wartościami i zapamiętuje element, do którego wróci fokus. |
| `installSettingsUi` | — | `void` | Instaluje globalny nasłuch klawiszy w fazie capture (otwieranie/zamykanie okna, zmiana przypisania) oraz zdarzenia dźwiękowe. |
| `installUiSoundEvents` | — | `void` | Delegowany nasłuch kliknięć, który odtwarza dźwięki zwrotne dla kontrolek DemoScope. |

## Kopie zapasowe, raporty i limity historii

| Funkcja | Parametry | Zwraca | Odpowiedzialność |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Pobiera całą historię jako `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Wyzwala pobieranie pliku przez tymczasowy adres Blob URL. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Spłaszcza i deduplikuje wpisy historii, od najnowszych. |
| `exportReadableHistory` | — | `void` | Pobiera samodzielny, zlokalizowany raport HTML z historii. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Buduje zabezpieczony (escapowany) kod HTML raportu. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Aktualizuje wiersz stanu narzędzia scalania (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Waliduje wiele kopii JSON (≤ 5 MB każda, ≤ 100 MB łącznie), deduplikuje wpisy i pobiera jeden łączny raport HTML. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Sprawdzenie względem białej listy dla kluczy historii (blokuje `__proto__`, `constructor` i błędnie zbudowane klucze). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Waliduje kopię JSON, scala ją z lokalną historią (z poszanowaniem limitów) i odświeża interfejs. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Odczytuje limit liczbowy z `localStorage`, akceptując tylko dozwolone wartości. |
| `getHistoryPerKeyLimit` | — | `number` | Liczba wpisów zachowywanych na klucz klipu/gry (10/20/30/50, domyślnie 30). |
| `getHistoryTotalLimit` | — | `number` | Łączna liczba zachowywanych kluczy klipów/gier (100/200/300/500, domyślnie 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | Czy szuflada rozszerzonych presetów została pozostawiona otwarta. |

## Nazwa konta i strona zaproszeń

| Funkcja | Parametry | Zwraca | Odpowiedzialność |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Czy nazwa konta Steam jest aktualnie ukryta. |
| `installAccountNameControl` | — | `void` | Dodaje przełącznik w kształcie oka obok linku wylogowania i utrzymuje go zsynchronizowanego przez `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Przebudowuje `/vacnet/createinvite`: układ kart, pokaż/ukryj i kopiowanie linku (Clipboard API z zapasowym `execCommand`), lista wymagań, wybór języka. Zwraca `false`, jeśli brakuje oczekiwanych elementów. |

## Segment klipu i adapter odtwarzacza

| Funkcja | Parametry | Zwraca | Odpowiedzialność |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Wyodrębnia `startTime`/`endTime` ze skryptów wbudowanych na stronie. |
| `formatSegmentTime` | `seconds: number` | `string` | Formatuje sekundy jako `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Znajduje element `<video>` weryfikowanego klipu. |
| `getVjsPlayer` | — | `Video.js player \| null` | Zwraca odtwarzacz Video.js strony, jeśli jest dostępny i nie został zniszczony. |
| `createPlayerAdapter` | — | `adapter \| null` | Ujednolicone API nad Video.js / wideo HTML5: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Sprawdza co 100 ms, aż pojawi się odtwarzacz; odrzuca po przekroczeniu czasu. |
| `clampSegment` | `time: number, bounds: object` | `number` | Ogranicza czas do granic klipu. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Względna pozycja w obrębie klipu. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Dodaje pasek przewijania, wskaźnik czasu i podpowiedzi klawiszy pod wideo. |
| `pauseLayoutMutations` | `run: Function` | `void` | Uruchamia wywołanie zwrotne, gdy obserwatorzy układu są wstrzymani (zapobiega pętlom sprzężenia zwrotnego). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Prawda, gdy fokus jest w polu tekstowym, textarea, select, przycisku, linku lub elemencie edytowalnym. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Etykieta opcji prędkości. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Lista `<option>` dla wyboru prędkości (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Zapisana prędkość Shift (domyślnie 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Zapisany stan randomizatora werdyktów (domyślnie wyłączony). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Podpina obsługę prędkości odtwarzania, ograniczanie/pauzowanie segmentu, pomocnicze funkcje przewijania/kroku klatki/wyciszenia/pełnego ekranu oraz globalne skróty klawiszowe (`1`–`5`, strzałki, `,` `.`, spacja, `M`, `F`, Shift). Wewnętrzne domknięcia: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, funkcje pomocnicze pętli rysowania. |

## Presety werdyktów

| Funkcja | Parametry | Zwraca | Odpowiedzialność |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Wybiera „skip” w każdej grupie werdyktów bez wyboru. |
| `getSelectedVerdictState` | — | `object` | Bieżąca wartość (`positive` / `negative` / `skip` / `null`) dla `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Nazwa presetu zgodnego z bieżącym wyborem. |
| `syncPresetButtons` | — | `string \| null` | Aktualizuje `aria-pressed` na przyciskach presetów oraz plakietkę rozszerzonego presetu. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Klika pola radio presetu; przy włączonym randomizatorze tasuje kolejność i czeka 200–600 ms między kliknięciami. Wyłącza przyciski presetów na czas działania. |
| `normalizeVerdictLabels` | `root = document` | `void` | Usuwa znaczniki wyróżnienia z etykiet werdyktów. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Dodaje zlokalizowane tytuły nad każdą grupą werdyktów. |

## Powiadomienia, stopka i ładowanie przy wysyłaniu

| Funkcja | Parametry | Zwraca | Odpowiedzialność |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Ukrywa stopkę witryny. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Wyświetla nieblokujące powiadomienie ARIA-live. |
| `markSubmitPending` | — | `void` | Zapisuje w `sessionStorage` znacznik czasu wysłania i identyfikator bieżącego klipu. |
| `isSubmitPending` | — | `boolean` | Czy wysyłka oczekuje na następny klip. |
| `clearSubmitPending` | — | `void` | Czyści znaczniki oczekującej wysyłki. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Pokazuje nakładkę ładowania na całej stronie. |
| `hideSubmitLoadingOverlay` | — | `void` | Ukrywa nakładkę i czyści stan oczekiwania. |
| `bootSubmitLoadingIfPending` | — | `void` | Ponownie pokazuje nakładkę przy ładowaniu strony, jeśli wysyłka oczekuje. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Prawda, gdy interfejs i media następnego klipu są gotowe. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Czeka do 30 s na następny klip, po czym ukrywa nakładkę (powiadomienie o błędzie po przekroczeniu czasu). |

## Lokalny magazyn historii

| Funkcja | Parametry | Zwraca | Odpowiedzialność |
|---|---|---|---|
| `extractVodId` | — | `string` | Wyprowadza identyfikator klipu/gry z adresu URL wideo. |
| `getGameKey` | — | `string` | Klucz historii dla gry (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Klucz historii dla jednego segmentu (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Waliduje i oczyszcza jeden wpis historii. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Znormalizowane wpisy dla klucza. |
| `getGameHistoryEntries` | `store: object` | `Array` | Wpisy dla bieżącej gry (obsługuje starszy klucz). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Wpisy dla bieżącego segmentu. |
| `formatClipId` | `vodId: string` | `string` | Krótki numeryczny identyfikator wyświetlany (`#0000000`), uzyskany z mieszania identyfikatora klipu. |
| `formatRelativeTime` | `timestamp: number` | `string` | Zlokalizowany czas względny (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Wczytuje obiekt historii z `localStorage` (`{}` w razie błędu). |
| `pruneHistoryStore` | `store: object` | `void` | Stosuje limity na klucz i łączne (najstarsze klucze usuwane najpierw). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Przycina i zapisuje; `false` przy błędach limitu/pamięci. |
| `summarizeCurrentVerdict` | — | `string` | Nazwa presetu bieżącego wyboru albo `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Zlokalizowana etykieta podsumowania historii. |
| `formatClockTime` | `seconds: number` | `string` | Format zegara `m:ss` (lub `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Czytelny zakres segmentu. |
| `formatGameLabel` | — | `string` | Zlokalizowana etykieta bieżącej gry. |
| `historyEntryKey` | `entry: object` | `string` | Ciąg tożsamości używany do deduplikacji. |
| `formatPriorStat` | `count: number, label: string` | `string` | Wiersz „etykieta: N” w panelu historii. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Scala wpisy klipów/gier w elementy do wyświetlenia. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML jednego wiersza historii. |
| `escapeHtml` | `value: any` | `string` | Zabezpiecza (escapuje) `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML panelu historii, wraz z przyciskiem zasad weryfikacji. |
| `ensureClipHistoryPanel` | — | `void` | Tworzy kontener panelu, jeśli go brakuje. |
| `ensureReviewRulesDialog` | — | `void` | Tworzy okno zasad weryfikacji i podpina jego przyciski otwierania/zamykania. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Podpina przycisk „historia lokalna” (przewija do listy lub pokazuje powiadomienie o pustym stanie). |
| `positionClipHistoryPanel` | — | `void` | Utrzymuje panel jako pierwszy element w `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Ponownie renderuje panel historii dla bieżącego klipu. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Dołącza podsumowanie bieżącego werdyktu do historii gry i klipu. |

## Przebieg wysyłania

| Funkcja | Parametry | Zwraca | Odpowiedzialność |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Prawda na stronach pokazujących cztery grupy werdyktów. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Natywny przycisk wysyłania, jeśli jest widoczny i włączony. |
| `recordProceedHistoryIfLabeling` | — | `void` | Zapisuje historię raz na wysyłkę (z ochroną przed ponownym wejściem). |
| `resetProceedArmed` | — | `void` | Rozbraja dwuetapowe wysyłanie. |
| `refreshProceedButtonLabel` | — | `void` | Aktualizuje etykietę przycisku/podpowiedź `Enter` oraz styl stanu uzbrojenia. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Odwzorowuje wybór na `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Buduje ukryte pola `verdict_labels[]`; pokazuje błąd i zwraca `false`, jeśli któraś grupa nie ma wyboru. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Dopuszcza tylko akcje formularzy HTTPS z tego samego źródła. |
| `restoreSubmitUi` | — | `void` | Przywraca przyciski po nieudanej wysyłce. |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Wykonuje kontrolę bezpieczeństwa, pokazuje nakładkę i wysyła formularz. |
| `submitVerdictsDirect` | — | `boolean` | Przygotowuje etykiety i wysyła. |
| `invokeProceedAction` | — | `boolean` | Obsługa Enter/kliknięcia: pierwsze naciśnięcie uzbraja, drugie wysyła. |
| `installProceedShortcut` | — | `void` | Nasłuch w fazie capture dla `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Zastępuje zachowanie kliknięcia natywnego przycisku wysyłania. |
| `installVerdictChangeReset` | — | `void` | Rozbraja wysyłanie i ponownie synchronizuje presety po zmianie werdyktu. |
| `scheduleProceedFooterFix` | — | `void` | Opóźnione (`requestAnimationFrame`) wywołanie `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Opóźniona ponowna normalizacja etykiet/tytułów/wartości domyślnych. |

## Układ i uruchamianie

| Funkcja | Parametry | Zwraca | Odpowiedzialność |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Buduje pasek wyboru prędkości Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML jednego przycisku presetu. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML grup rozszerzonych presetów. |
| `buildEnhancementBar` | — | `HTMLElement` | Buduje pasek szybkich werdyktów: presety, przełącznik randomizatora, rozszerzona szuflada. |
| `positionShiftSpeedBar` | — | `void` | Utrzymuje pasek prędkości przed listą werdyktów. |
| `positionEnhancementBar` | — | `void` | Utrzymuje pasek presetów przed przyciskami wysyłania. |
| `fixProceedFooter` | — | `void` | Przestawia stopkę, paski i przycisk wysyłania. |
| `enhanceLayout` | — | `void` | Stosuje wszystkie zmiany układu i instaluje interfejs ustawień. |
| `watchProceedFooter` | — | `void` | Obserwuje `.verdicts-container` i planuje poprawki stopki. |
| `watchVerdictLabels` | — | `void` | Obserwuje etykiety werdyktów i planuje ponowną normalizację. |
| `init` | — | `Promise<void>` | Punkt wejścia: kontrolka nazwy konta → strona zaproszeń lub weryfikacji → układ, obserwatorzy, skróty, ulepszenia odtwarzacza. |

### Nieopisane powyżej

* **`blockSegmentLoopGuard`** (IIFE, uruchamiana przy ładowaniu): opakowuje `setInterval` na stronie, tak aby natywny 100-milisekundowy timer pętli segmentu witryny został zastąpiony pustą funkcją; segmentem zarządzają własne kontrolki DemoScope.
* **Stałe i tabele:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definicji).
