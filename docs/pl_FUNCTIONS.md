<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md) · **Polski** · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md)

</div>

# DemoScope — Dokumentacja funkcji

Pełna dokumentacja 217 funkcji najwyższego poziomu w `DemoScope.user.js` v1.4.0 (nazwa, parametry, wartość zwracana, odpowiedzialność). Powrót do [README](../README.md).

Konwencje: `—` oznacza brak parametrów; `void` oznacza, że funkcja jest wywoływana ze względu na swoje efekty uboczne.

## Przegląd działania dla użytkownika

| Obszar | Opis |
|---|---|
| Obsługiwane strony | Ulepsza stronę powitalną VACNet (/vacnet), strony przeglądu (/vacnet/clips), stronę zaproszeń (/vacnet/createinvite) oraz stan braku klipów na stronie przeglądu. Pozostałe strony pozostawia bez zmian. |
| Typy zadań | Rozpoznaje formularz używany przez VACNet. Klasyczny formularz (aim assist, wallhack, auto-bhop, bot) otrzymuje presety i rozszerzone kombinacje. Nowsze zadanie z jednym pytaniem („Czy osoba bez wątpienia oszukuje?”) otrzymuje kompaktowy układ: trzy opisane werdykty pod klawiszami 1–3, wskaźnik blokady z pozostałym czasem klipu oraz brak szybkich werdyktów i kombinacji. |
| Język | Obsługuje 29 języków Steam. Zapisany wybór ręczny ma pierwszeństwo; w przeciwnym razie skrypt używa parametru Steam ?l=, a następnie języka przeglądarki/strony. Wybór języka w DemoScope przekazuje odpowiedni parametr ?l= także do VACNet, aby jego teksty były zgodne z wyborem. Tryb automatyczny synchronizuje parametr języka Steam z językiem przeglądarki. |
| Strony powitalne i zaproszeń | Zmienia wygląd obu stron, dodaje wspólny wybór języka i ukrywa nazwę konta za pomocą przycisku oka. Na stronie powitalnej Enter lub Spacja kontynuuje, gdy fokus nie znajduje się na elemencie interaktywnym. Na stronie zaproszeń można ukryć, pokazać i skopiować łącze; wyjaśnione są też wymagania. Przycisk × zamyka stronę; Enter oznacza „Gotowe”, a Esc działa jak ×. |
| Przegląd klipów | Dodaje presety i rozszerzone kombinacje werdyktów, domyślnie wyłączony losowy wybór werdyktu, regulowaną szybkość odtwarzania przytrzymaniem Shift, przewijanie ograniczone do segmentu, krok klatka po klatce i skróty odtwarzania. Kategorie werdyktów mają przycisk „?” z lokalnym objaśnieniem. Ważne frazy w przyciskach są wyróżnione kolorami DemoScope. |
| Skróty klawiszowe | Każdy skrót jest działaniem we wspólnym rejestrze i można go zmienić w Ustawienia → Skróty. Konflikty są wykrywane osobno na stronach (zaproszenia i przegląd nie kolidują), a komunikat pokazuje działanie, grupę i opis już korzystające z klawisza; można zastąpić przypisanie, zamienić klawisze lub anulować. Każde działanie ma przycisk resetowania, a podpowiedzi na stronie odzwierciedlają przypisania. |
| Wysyłanie | Enter lub Numpad Enter (domyślnie) uruchamia „Kontynuuj”. W klasycznym formularzu pierwsze naciśnięcie uzbraja działanie, a następne wysyła werdykty. W zadaniu z jednym pytaniem wybór werdyktu wyświetla potwierdzenie VACNet, które zatwierdza się klawiszem Enter. Esc (domyślnie) naciska „Anuluj”, gdy werdykt czeka na potwierdzenie, albo rozbraja pierwsze naciśnięcie. Spacja nie wysyła formularza. |
| Ustawienia | F2 domyślnie otwiera okno ustawień (można zmienić w oknie Skróty). Sekcje: skróty, animacje, efekty dźwiękowe i głośność, historia lokalna (włączanie, limity, format 12/24 godz., kopie zapasowe), widoczność stopki, diagnostyka i wspólny reset dźwięku, skrótów i animacji. |
| Animacje | Kropka obok DemoScope może być animowana. Osobne okno oferuje sześć stylów (pulsowanie, oddech, fala, bicie serca, orbita, miganie), podgląd na żywo, trzy szybkości i przełącznik. Gdy system operacyjny ogranicza ruch, animacje są domyślnie wyłączone. |
| Historia lokalna | Zapisuje podsumowania werdyktów w localStorage tej przeglądarki; DemoScope ich nie wysyła. Historię można wyłączyć, importować, eksportować jako JSON lub HTML, połączyć kopie JSON w jeden raport HTML albo wyczyścić. Limity: 10/20/30/50 wpisów na klucz i 100/200/300/500 kluczy łącznie. Wyłączenie zatrzymuje nowe wpisy, ale nie kasuje istniejących danych. Historia jest zapisywana tylko dla klasycznego formularza. |
| Pusta kolejka | Zastępuje komunikat VACNet o pustej kolejce lokalnymi wskazówkami, lokalną datą i godziną pierwszego wyświetlenia oraz wyborem języka. Informacja o 250 demach dziennie wynika z obserwowanego działania VACNet i ma charakter informacyjny; DemoScope nie egzekwuje ani nie omija tego limitu. |
| Stopka | Używa zlokalizowanej stopki DemoScope. Na stronach klipów może zawierać łącza do opinii i zgłoszeń; w ustawieniach można ukryć poszczególne łącza, wiersz praw autorskich albo całą stopkę. |
| Odporność na błędy | Każdy krok konfiguracji działa osobno, więc pojedynczy błąd nie zatrzymuje pozostałych. Ważne elementy są wyszukiwane z rozwiązaniami zastępczymi. Jeśli strona nie jest już rozpoznawana, DemoScope wyłącza się na tej stronie, przywraca układ VACNet i pokazuje krótki komunikat. Ustawienia → Diagnostyka pozwala skopiować raport tekstowy (wersja skryptu, znalezione oczekiwane elementy, błędne kroki i struktura strony) do zgłoszenia błędu. |

Skrypt nie zmienia serwerowych zasad zaproszeń VACNet, obsługi werdyktów ani limitów oglądania. Historia lokalna, język i preferencje interfejsu pozostają w profilu przeglądarki.

## Lokalizacja

| Funkcja | Parametry | Zwraca | Opis |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Wbudowany kod SVG flagi dla danego języka; w razie braku zwraca ikonę globu. |
| `getSavedLocale` | — | `string \| null` | Odczytuje zapisany język użytkownika (`demoscopeLanguage`) z `localStorage`. |
| `getActiveLocale` | — | `string` | Ustala aktywny język: zapisany wybór → Steam `?l=` → język przeglądarki/strony → `en`. |
| `getLanguageBadge` | — | `string` | Własna nazwa wyświetlana języka, np. „English version”, na plakietkę w wyborze języka. |
| `getBrowserLocale` | — | `string \| null` | Wykrywa pierwszy obsługiwany język przeglądarki, również warianty regionalne. |
| `syncAutomaticLanguage` | — | `boolean` | W trybie automatycznym synchronizuje ?l= z językiem przeglądarki i przechodzi pod nowy adres, gdy się różnią. |
| `getRenderedSteamLanguage` | — | `string \| null` | Odczytuje język Steam, w którym VACNet faktycznie wyświetlił stronę, na podstawie parametru l= w adresach arkuszy stylów i skryptów strony. |
| `syncSelectedLanguage` | — | `boolean` | Po ręcznym wybraniu języka w DemoScope jednokrotnie wczytuje stronę ponownie z odpowiednim parametrem ?l=, aby tekst VACNet również używał tego języka. Pomija działanie, gdy wyświetlany język już pasuje, i zapobiega pętlom przekierowań. Zwraca true, jeśli nastąpiła nawigacja. |
| `tr` | `key: string` | `string` | Wyszukuje tekst interfejsu dla aktywnego języka (zapas: angielski, potem sam klucz). |
| `inviteText` | `key: string` | `string` | To samo wyszukiwanie dla tabeli tekstów strony zaproszeń. |
| `settingText` | `key: string` | `string` | To samo wyszukiwanie dla tabeli tekstów okna ustawień. |
| `getPresetLabel` | `name: string` | `string` | Zlokalizowana etykieta presetu; składa kombinacje takie jak „Bot + Aim”. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | HTML przycisków wyboru języka, wraz z pozycją „auto”. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Podłącza i pozycjonuje wybór języka, zapisuje wybór i przeładowuje stronę; opcjonalny callback może obsłużyć wybór zamiast tego. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Wyszukuje zlokalizowany tekst pustej kolejki lub stopki. |

## Efekty dźwiękowe i okno ustawień

| Funkcja | Parametry | Zwraca | Opis |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Wiersz „N wpisów · ostatni wpis: …” w oknie ustawień. |
| `soundsEnabled` | — | `boolean` | Czy dźwięki interfejsu są włączone (`demoscopeSoundEffectsEnabled`, domyślnie włączone). |
| `getSoundVolume` | — | `number (0–1)` | Zapisana głośność dźwięku (`demoscopeSoundEffectsVolume`, domyślnie 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Syntezuje krótką sekwencję tonów przez Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); nigdy nie zgłasza wyjątku. |
| `readSettingsHotkey` | — | `string` | Zapisany `KeyboardEvent.code`, który otwiera okno ustawień (domyślnie `F2`). |
| `formatHotkey` | `code: string` | `string` | Czytelna nazwa klawisza (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Wyodrębnia kod klawisza fizycznego, odwzorowując układy nielacińskie z powrotem na `KeyX`; `""`, jeśli nieużyteczny. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Prawda dla klawiszy, których DemoScope lub odtwarzacz już używa (Enter, spacja, strzałki, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Tworzy i obsługuje ustawienia: dźwięki i głośność, podgląd, skrót klawiszowy, historia lokalna i limity, format czasu, import/eksport JSON, eksport/scalanie HTML, czyszczenie historii, widoczność stopki i reset. |
| `openSettingsDialog` | `opener = null` | `void` | Otwiera okno z bieżącymi wartościami i zapamiętuje element, do którego wróci fokus. |
| `installSettingsUi` | — | `void` | Instaluje globalny nasłuch klawiszy w fazie capture (otwieranie/zamykanie okna, zmiana przypisania) oraz zdarzenia dźwiękowe. |
| `installUiSoundEvents` | — | `void` | Delegowany nasłuch kliknięć, który odtwarza dźwięki zwrotne dla kontrolek DemoScope. |
| `ensureSettingsLayoutStyles` | — | `void` | Dodaje style okna ustawień: sekcje wyrównane do lewej i wiersze z podsumowaniami. |
| `refreshSettingsSummaries` | — | `void` | Odświeża podsumowania pozycji Skróty („Zmieniono: N” / „Domyślne”) oraz Animacje („Styl · szybkość” / „Wyłączone”). |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Dodaje u góry pozycje Skróty i Animacje, a na dole sekcje Diagnostyka i Resetowanie. Ukrywa dawny blok skrótu ustawień, który można teraz zmienić w oknie Skróty. |

## Kopie zapasowe, raporty i limity historii

| Funkcja | Parametry | Zwraca | Opis |
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

## Nazwa konta i strona zaproszeń

| Funkcja | Parametry | Zwraca | Opis |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Czy nazwa konta Steam jest aktualnie ukryta. |
| `installAccountNameControl` | — | `void` | Dodaje przełącznik w kształcie oka obok linku wylogowania i utrzymuje go zsynchronizowanego przez `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Przebudowuje `/vacnet/createinvite`: układ kart, pokaż/ukryj i kopiowanie linku (Clipboard API z zapasowym `execCommand`), lista wymagań, wybór języka. Zwraca `false`, jeśli brakuje oczekiwanych elementów. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Dodaje przycisk zamknięcia (×) i nasłuchiwacz w fazie przechwytywania dla działań inviteDone (domyślnie Enter) i inviteClose (domyślnie Esc). Ignoruje klawisze, gdy fokus jest na przycisku, łączu, polu, oknie dialogowym lub liście języków. |
| `refreshInviteKeyLabels` | — | `void` | Ponownie renderuje etykietę „Gotowe” z oznaczeniem klawisza oraz podpowiedź dla × zgodnie z bieżącymi przypisaniami. |
| `installWelcomePage` | — | `boolean` | Zmienia wygląd strony powitalnej, dodaje oznaczenie i wybór języka; Enter/Space kontynuuje; zwraca false przy brakujących elementach. |

## Segment klipu i adapter odtwarzacza

| Funkcja | Parametry | Zwraca | Opis |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Zwraca true, gdy fokus znajduje się w polu, textarea, select lub edytowalnym tekście. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Podobnie jak isShortcutBlocked, ale przepuszcza przyciski radiowe werdyktów, ponieważ fokus pozostaje na przycisku po kliknięciu. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Etykieta opcji prędkości. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Lista `<option>` dla wyboru prędkości (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Zapisana prędkość Shift (domyślnie 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Zapisany stan randomizatora werdyktów (domyślnie wyłączony). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Podpina obsługę prędkości odtwarzania, ograniczanie/pauzowanie segmentu, pomocnicze funkcje przewijania/kroku klatki/wyciszenia/pełnego ekranu oraz globalne skróty klawiszowe (`1`–`5`, strzałki, `,` `.`, spacja, `M`, `F`, Shift). Wewnętrzne domknięcia: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, funkcje pomocnicze pętli rysowania. |

## Presety werdyktów

| Funkcja | Parametry | Zwraca | Opis |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Wybiera „skip” w każdej grupie werdyktów bez wyboru. |
| `getSelectedVerdictState` | — | `object` | Bieżąca wartość (`positive` / `negative` / `skip` / `null`) dla `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Nazwa presetu zgodnego z bieżącym wyborem. |
| `syncPresetButtons` | — | `string \| null` | Aktualizuje `aria-pressed` na przyciskach presetów oraz plakietkę rozszerzonego presetu. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Klika pola radio presetu; przy włączonym randomizatorze tasuje kolejność i czeka 200–600 ms między kliknięciami. Wyłącza przyciski presetów na czas działania. |
| `readAdvancedPresetsOpen` | — | `boolean` | Czy szuflada rozszerzonych presetów została pozostawiona otwarta. |
| `normalizeVerdictLabels` | `root = document` | `void` | Usuwa znaczniki wyróżnienia z etykiet werdyktów. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Dodaje zlokalizowane tytuły nad każdą grupą werdyktów. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Tworzy przycisk „?” i wyskakujące wyjaśnienie dla grupy werdyktów, korzystając z lokalnego tekstu DemoScope; tekst VACNet służy tylko jako rezerwa. |
| `closeVerdictHelp` | `except = null` | `void` | Zamyka wszystkie otwarte wyjaśnienia poza wskazanym. |
| `installVerdictHelpHandlers` | — | `void` | Jednorazowo instaluje delegowaną obsługę kliknięć, kliknięć poza oknem i klawisza Esc dla podpowiedzi. |

## Powiadomienia, stopka i ładowanie przy wysyłaniu

| Funkcja | Parametry | Zwraca | Opis |
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

| Funkcja | Parametry | Zwraca | Opis |
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
| `isLocalHistoryEnabled` | — | `boolean` | Odczytuje, czy historia lokalna jest włączona; domyślnie jest włączona. |
| `readTimeFormat` | — | `string` | Odczytuje format czasu: automatyczny, 12- lub 24-godzinny. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Formatuje czas pierwszego wykrycia według języka i formatu czasu. |
| `getQueueNoticeLocale` | — | `string` | Zwraca aktywny język komunikatu o pustej kolejce. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Przenosi poprzedni wybór języka do wspólnego ustawienia i synchronizuje URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Odświeża wyświetlany czas pierwszego wykrycia. |

## Przebieg wysyłania

| Funkcja | Parametry | Zwraca | Opis |
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
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Wykonuje kontrolę bezpieczeństwa, pokazuje nakładkę i wysyła formularz. |
| `submitVerdictsDirect` | — | `boolean` | Przygotowuje etykiety i wysyła. |
| `invokeProceedAction` | — | `boolean` | Obsługa Enter/kliknięcia: pierwsze naciśnięcie uzbraja, drugie wysyła. |
| `installProceedShortcut` | — | `void` | Nasłuch w fazie capture dla `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Rozbraja pierwsze naciśnięcie dwuetapowego wysłania albo klika widoczny przycisk „Anuluj”; zwraca false, jeśli nie ma czego anulować. |
| `refreshCancelButtonLabel` | — | `void` | Dodaje lub aktualizuje oznaczenie klawisza na przycisku „Anuluj”. |
| `hookProceedButton` | — | `void` | Zastępuje zachowanie kliknięcia natywnego przycisku wysyłania. |
| `installVerdictChangeReset` | — | `void` | Rozbraja wysyłanie i ponownie synchronizuje presety po zmianie werdyktu. |
| `scheduleProceedFooterFix` | — | `void` | Opóźnione (`requestAnimationFrame`) wywołanie `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Opóźniona ponowna normalizacja etykiet/tytułów/wartości domyślnych. |

## Rejestr i zmiana przypisań skrótów

| Działanie | Domyślnie | Grupa | Funkcja |
|---|---|---|---|
| `playPause` | `Space` | Playback | Wstrzymuje lub wznawia odtwarzanie klipu. |
| `mute` | `M` | Playback | Wycisza lub przywraca dźwięk. |
| `fullscreen` | `F` | Playback | Włącza lub wyłącza pełny ekran. |
| `seekBack` / `seekForward` | `←` / `→` | Nawigacja | Przeskakuje o 5 sekund wstecz lub naprzód. |
| `frameBack` / `frameForward` | `,` / `.` | Nawigacja | Przesuwa o jedną klatkę wstecz lub naprzód. |
| `speedBoost` | `Shift` | Navigation | Przyspiesza odtwarzanie, gdy klawisz jest wciśnięty (jedyne działanie, które może używać Shift). |
| `quick1` … `quick5` | `1` … `5` | Werdykty | Formularz klasyczny: presety 1–5. Zadanie z jednym pytaniem: Cheating / Nie wiem / Nie wykryto oszustwa (1–3). |
| `proceed` | `Enter` | Submission | Potwierdza werdykt albo uzbraja i wysyła klasyczny formularz. |
| `cancel` | `Esc` | Submission | Naciska „Anuluj” albo rozbraja pierwsze naciśnięcie Enter. |
| `inviteDone` | `Enter` | Invite page | Opuszcza stronę zaproszenia (tak samo jak „Gotowe”). |
| `inviteClose` | `Esc` | Invite page | Działa tak samo jak przycisk ×. |
| `settings` | `F2` | Interface | Otwiera lub zamyka okno ustawień. |

Przypisania są przechowywane jako wartości KeyboardEvent.code w demoscopeKeybindings (tylko zmiany względem ustawień domyślnych; klawisz ustawień ma osobny wpis). Lewy i prawy modyfikator liczą się jako jeden klawisz, a klawiatura numeryczna odpowiada głównemu rzędowi. Nie można przypisać: Tab, Ctrl, Alt, Meta, Caps Lock, ContextMenu, F5, F11, F12. Konflikty są ograniczone do zakresów review, invite i global; globalny klawisz ustawień koliduje ze wszystkimi.

| Funkcja | Parametry | Zwraca | Opis |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Zastępuje znaczniki {name} w zlokalizowanym szablonie. |
| `isModalOpen` | — | `boolean` | Zwraca true, gdy otwarte jest dowolne okno dialogowe; skróty strony są wtedy nieaktywne. |
| `normalizeKeyCode` | `code: string` | `string` | Łączy lewy i prawy modyfikator w jeden klawisz oraz mapuje cyfry z klawiatury numerycznej i NumpadEnter na odpowiedniki z głównej części klawiatury. |
| `formatKeyLabel` | `code: string` | `string` | Czytelna nazwa klawisza (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Odczytuje i sprawdza zapisane przypisania (buforowane; w razie błędu zwraca {}). |
| `saveKeyOverrides` | `overrides: object` | `void` | Zapisuje przypisania albo usuwa wpis, gdy wszystkie mają wartości domyślne. |
| `getBinding` | `id: string` | `string` | Aktualny klawisz działania; pusty tekst, jeśli nie ma przypisania. |
| `setBinding` | `id: string, code: string` | `void` | Zapisuje klawisz dla działania (pusty kod usuwa przypisanie); wartości domyślne nie są zapisywane. |
| `resetAllBindings` | — | `void` | Przywraca domyślne przypisania wszystkich klawiszy, w tym klawisza ustawień. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Wyszukuje konflikt z klawiszem już używanym w danym zakresie. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Ustala działanie przypisane do zdarzenia klawiatury. |
| `keyScopeOf` | `id: string` | `string` | Zakres działania: review, invite lub global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | Zwraca true, gdy zakresy mogą się nakładać (są takie same albo jeden z nich to global). |
| `currentKeyScope` | — | `string` | invite na stronie zaproszenia, w pozostałych przypadkach review. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Zwraca pusty tekst, jeśli klawisz można przypisać, reserved dla klawiszy przeglądarki/nawigacji lub shift, gdy Shift wybrano dla działania niewymagającego przytrzymania. |
| `quickRangeLabel` | `count: number` | `string` | Etykieta klawiszy szybkiego werdyktu (1–5, jeśli nie zmieniono, w przeciwnym razie przypisane klawisze). |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Tworzy podpowiedzi klawiszy pod wideo na podstawie bieżących przypisań. |
| `refreshKeyLabels` | — | `void` | Odświeża wszystkie etykiety klawiszy na stronie: podpowiedzi, odznaki presetów i werdyktów, Kontynuuj/Anuluj/zaproszenie oraz podsumowania ustawień. |
| `ensureDemoscopeDialogStyles` | — | `void` | Dodaje wspólny wygląd okien Skróty i Animacje. |
| `hkActionName` | `id: string` | `string` | Zlokalizowana nazwa działania. |
| `hkGroupName` | `group: string` | `string` | Zlokalizowana nazwa grupy. |
| `hkActionDescription` | `id: string` | `string` | Zlokalizowany opis działania (szybkie werdykty opisane dla obu typów zadań). |
| `hkSetMessage` | `text: string, warn = false` | `void` | Ustawia wiersz statusu okna Skróty. |
| `hkCancelCapture` | — | `void` | Kończy przechwytywanie klawisza. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Kod HTML wiersza działania, w tym panelu konfliktu, jeśli występuje. |
| `renderHotkeys` | — | `void` | Ponownie renderuje całe okno i zachowuje pozycję przewijania. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Przypisuje klawisz; replace zwalnia go w drugim działaniu, swap zamienia przypisane klawisze. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Przypisuje klawisz bezpośrednio albo otwiera panel konfliktu (Zastąp / Zamień / Anuluj), jeśli klawisz jest zajęty. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Tworzy okno Skróty i nasłuchiwacz klawiatury w fazie przechwytywania (Esc można przypisać; nie zamyka okna podczas przechwytywania). |
| `openHotkeysDialog` | — | `void` | Otwiera okno Skróty. |

## Animacje

Sześć stylów kropki wskaźnika (pulse, breathe, ripple, heartbeat, orbit, blink), trzy szybkości (0,6× / 1× / 1,7×) i przełącznik, zapisane w demoscopeAnimStyle, demoscopeAnimSpeed i demoscopeAnimEnabled. Aktywny styl określa atrybut data-ds-anim elementu html (off przy wyłączeniu); arkusz stylów steruje kropką i podglądem.

| Funkcja | Parametry | Zwraca | Opis |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Bezpieczny odczyt z localStorage. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Bezpieczny zapis do localStorage (null usuwa klucz). |
| `animEnabled` | — | `boolean` | Zapisany stan włączenia/wyłączenia; domyślnie wyłączone, gdy system prosi o ograniczenie ruchu. |
| `animStyle` | — | `string` | Zapisany styl (domyślnie pulse). |
| `animSpeedKey` | — | `string` | Zapisana szybkość (slow / normal / fast; domyślnie normal). |
| `ensureAnimationStyles` | — | `void` | Dodaje klatki kluczowe i reguły wspólne dla animowanej kropki i kropek podglądu. |
| `applyAnimationSettings` | — | `void` | Ustawia styl, szybkość i włączenie na elemencie html oraz odświeża podsumowanie ustawień. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Tworzy okno Animacje: przełącznik, szybkość, karty stylów z podglądem na żywo i reset. |
| `openAnimationsDialog` | — | `void` | Otwiera okno Animacje. |
| `ensureUiPolishStyles` | — | `void` | Dodaje ciemne, wąskie paski przewijania i color-scheme: dark do okien i listy werdyktów (Chromium w przeciwnym razie wyświetla jasny pasek). |

## Zadanie z jednym pytaniem

| Funkcja | Parametry | Zwraca | Opis |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Zwraca true, gdy strona wyświetla formularz z jednym pytaniem (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | Klikа przycisk radiowy Cheating / Nie wiem / Nie wykryto oszustwa (positive / skip / negative). Jeśli opcja jest zablokowana, odtwarza dźwięk błędu i potrząsa kartą blokady. |
| `localizeCheatingVerdicts` | — | `void` | Zmienia trzy etykiety na język DemoScope i rysuje odznaki klawiszy w CSS, aby potwierdzenie VACNet nie zawierało cyfry klawisza. Przygotowuje też kartę blokady. |
| `updateCheatingLock` | — | `void` | Aktualizuje kartę blokady („dwa pozostałe werdykty odblokują się po zakończeniu klipu · pozostało m:ss”) i pasek postępu. Ukrywa ją po odblokowaniu opcji lub wybraniu werdyktu. |
| `startCheatingLockWatcher` | — | `void` | Uruchamia timer co 250 ms wywołujący updateCheatingLock. |

## Odporność i diagnostyka

| Funkcja | Parametry | Zwraca | Opis |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Zapisuje nieudany krok (z limitem liczby wpisów) do raportu diagnostycznego. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Wykonuje krok konfiguracji; w razie błędu zapisuje go i zwraca wartość zastępczą, aby kolejne kroki mogły działać. |
| `getVideoContainer` | — | `HTMLElement \| null` | Znajduje kontener wideo lub, w razie potrzeby, element nadrzędny odtwarzacza albo elementu video. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Znajduje kontener werdyktów albo element nadrzędny pierwszego bloku werdyktu. |
| `getSubmitArea` | — | `HTMLElement \| null` | Znajduje obszar wysyłania/potwierdzania (#submitbuttons, .submitbuttons lub element nadrzędny przycisku wysyłania). |
| `hasVerdictForm` | — | `boolean` | Zwraca true, gdy istnieje co najmniej jeden przycisk radiowy werdyktu. |
| `removeEnhancements` | — | `void` | Usuwa panele, klasy i zmiany stopki DemoScope, a następnie przywraca stopkę VACNet. |
| `disableDemoScope` | `reason: string` | `void` | Wyłącza DemoScope na tej stronie: cofa zmiany, pozostawia tylko okno ustawień i pokazuje komunikat raz na przyczynę w danej sesji. |
| `isOwnNode` | `el: Element` | `boolean` | Zwraca true dla elementów utworzonych przez DemoScope (wykluczonych z raportu struktury). |
| `elementSignature` | `el: Element` | `string` | Sygnatura tag#id.class[…] używana w raporcie struktury; nie zawiera tekstu. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Zwięzłe, wcięte drzewo tagów, identyfikatorów i klas (identyczne elementy sąsiadujące zebrane jako ×N). |
| `captureOriginalSkeleton` | — | `void` | Zapisuje strukturę strony przed wprowadzeniem zmian przez DemoScope. |
| `buildDiagnosticsReport` | — | `string` | Tworzy raport: wersja, strona, język i przeglądarka, typ zadania, 22 kontrole elementów (ok / MISSING), nieudane kroki oraz struktura przed i po zmianach DemoScope. Bez tekstu strony i danych konta. |
| `fallbackCopyText` | `text: string` | `boolean` | Kopiuje tekst przez tymczasowe pole tekstowe, jeśli Clipboard API nie jest dostępne. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Kopiuje raport; jeśli kopiowanie się nie powiedzie, wyświetla tekst w polu, z którego można go zaznaczyć. |

## Układ i uruchamianie

| Funkcja | Parametry | Zwraca | Opis |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Buduje pasek wyboru prędkości Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML jednego przycisku presetu. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML grup rozszerzonych presetów. |
| `buildEnhancementBar` | — | `HTMLElement` | Buduje pasek szybkich werdyktów: presety, przełącznik randomizatora, rozszerzona szuflada. |
| `positionShiftSpeedBar` | — | `void` | Utrzymuje pasek prędkości przed listą werdyktów. |
| `positionEnhancementBar` | — | `void` | Utrzymuje pasek presetów przed przyciskami wysyłania. |
| `fixProceedFooter` | — | `void` | Przestawia stopkę, paski i przycisk wysyłania. |
| `enhanceLayout` | — | `void` | Stosuje wszystkie zmiany układu i instaluje interfejs ustawień. |
| `ensureReviewStructure` | — | `void` | Normalizuje kod VACNet: umieszcza bloki werdyktów w .verdicts-container-inner, przenosi #submitbuttons do kontenera i odzwierciedla licznik klipów w znaczniku nagłówka. Obsługuje stary i przebudowany układ. |
| `watchProceedFooter` | — | `void` | Obserwuje `.verdicts-container` i planuje poprawki stopki. |
| `watchVerdictLabels` | — | `void` | Obserwuje etykiety werdyktów i planuje ponowną normalizację. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Odczytuje z localStorage preferencję widoczności stopki. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Zapisuje preferencję widoczności stopki. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Tworzy lub aktualizuje zlokalizowaną stopkę z opcjonalnymi linkami i stosuje ustawienia. |
| `installEmptyQueueNotice` | — | `boolean` | Zastępuje komunikat o pustej kolejce lokalnymi instrukcjami, czasem, wyborem języka i stopką. |
| `init` | — | `Promise<void>` | Punkt wejścia: kontrolka nazwy konta → strona zaproszeń lub weryfikacji → układ, obserwatorzy, skróty, ulepszenia odtwarzacza. |

installWelcomePage i installInvitePage zwracają false, gdy brakuje wymaganych elementów strony VACNet. installEmptyQueueNotice zwraca false, gdy strona nie pokazuje pustej kolejki.

### Pozostałe elementy

* **blockSegmentLoopGuard** (IIFE uruchamiane przy starcie): zastępuje pustą funkcją natywny 100-ms timer witryny dla pętli segmentu; własne sterowanie DemoScope obsługuje segment.
* **Stałe i tabele:** SUPPORTED_LOCALES, FLAG_SVG, UI_TEXT_ROWS, INVITE_TEXT_ROWS, SETTINGS_TEXT_ROWS, PRESETS, PRESET_KEYS, PRESET_TONES, ADVANCED_PRESET_GROUPS, SHIFT_SPEEDS, FRAME_STEP i ARROW_JUMP_SEC (21 definicji PRESETS); dodane od v1.0.0: KEY_ACTIONS, KEY_GROUPS, KEY_ACTION_BY_ID, KEY_ACTION_SCOPE, RESERVED_KEY_CODES, CHEATING_KEYS, VERDICT_SECTION_TITLES, VERDICT_SECTION_HELP, ANIM_STYLES i ANIM_SPEEDS.
* **Stan modułu:** diag (błędne kroki, powód wyłączenia i pierwotna struktura strony), hkState (stan okna Skróty) i stała SCRIPT_VERSION używana w raporcie diagnostycznym.
* **Teksty:** wszystkie widoczne teksty znajdują się w zlokalizowanych tabelach powyżej; okna dodane w v1.2.0–v1.4.0 przetłumaczono na wszystkie 29 języków.

## Klucze przechowywania

| Klucz | Miejsce | Cel |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Wybrany język / tryb automatyczny. |
| `demoscopeKeybindings` | `localStorage` | Skróty różniące się od domyślnych (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Klawisz otwierający ustawienia (none, jeśli usunięto). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Ustawienia animacji wskaźnika. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Ustawienia dźwięku. |
| `demoscopeClipHistory` i klucze limitów/formatu historii | `localStorage` | Lokalna historia przeglądów i jej ustawienia. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Stan oczekiwania na wysłanie, ochrona synchronizacji języka i jednorazowy komunikat o wyłączeniu. |




