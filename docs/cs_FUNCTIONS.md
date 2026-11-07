<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · **Čeština** · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md)

</div>

# DemoScope — Přehled funkcí

Úplný přehled všech 217 funkcí nejvyšší úrovně v `DemoScope.user.js` v1.4.0 (název, parametry, návratová hodnota, odpovědnost). Zpět na [README](../README.md).

Konvence: `—` znamená bez parametrů; `void` znamená, že se funkce volá kvůli svým vedlejším účinkům.

## Přehled chování pro uživatele

| Oblast | Popis |
|---|---|
| Podporované stránky | Vylepšuje uvítací stránku VACNet (`/vacnet`), stránky kontroly (`/vacnet/clips`), stránku pozvánky (`/vacnet/createinvite`) a stav bez klipů. Ostatních stránek se nedotýká. |
| Typy úloh | Rozpozná formulář VACNetu. **Klasický formulář** (aim assist, wallhack, auto-bhop, bot) dostane předvolby a kombinace. **Úloha s jednou otázkou** má kompaktní rozvržení se třemi rozhodnutími na `1`–`3`, indikátorem zámku a zbývajícím časem klipu; bez rychlých rozhodnutí a kombinací. |
| Jazyk | Podporuje 29 jazyků Steam. Přednost má uložená ruční volba, jinak parametr Steam `?l=` a poté jazyk prohlížeče/stránky. Výběr v DemoScope předá odpovídající `?l=` také VACNetu. Automatický režim synchronizuje jazyk Steam s prohlížečem. |
| Uvítací a pozvánková stránka | Upraví vzhled obou stránek, přidá společný výběr jazyka a tlačítko oka pro skrytí názvu účtu. Enter nebo Space pokračuje na uvítací stránce, pokud fokus není na ovládacím prvku. Odkaz pozvánky lze skrýt, zobrazit a kopírovat; stránka vysvětluje podmínky. × zavře, Enter provede „Done“ a Esc funguje jako ×. |
| Kontrola klipů | Přidává předvolby a kombinace rozhodnutí, náhodný výběr (ve výchozím stavu vypnutý), rychlost při podržení Shiftu, posun v rámci segmentu, krokování po snímcích a zkratky přehrávání. Tlačítko „?“ vysvětluje kategorie; důležité fráze zvýrazňuje paleta DemoScope. |
| Klávesové zkratky | Zkratky jsou akce ve společném registru a mění se v **Nastavení → Klávesové zkratky**. Konflikty se kontrolují podle stránky; pozvánky a kontrola se nepřekrývají. Zobrazuje se akce, skupina a popis, které klávesu používají. Lze nahradit, prohodit nebo zrušit; každá akce má reset. |
| Odeslání | `Enter` nebo `Numpad Enter` spustí „Continue“. V klasickém formuláři první stisk připraví a druhý odešle rozhodnutí. U jedné otázky výběr otevře potvrzení VACNetu a Enter je potvrdí. `Esc` zruší čekající potvrzení nebo první stisk. Space neodesílá. |
| Nastavení | `F2` otevírá nastavení a lze jej změnit v okně Klávesové zkratky. Obsahuje zkratky, animace, zvuky/hlasitost, místní historii a limity, formát 12/24 hodin, zálohy, zápatí, diagnostiku a společné obnovení výchozích hodnot. |
| Animace | Tečka vedle DemoScope může používat šest stylů (pulse, breathe, ripple, heartbeat, orbit, blink), živý náhled, tři rychlosti a přepínač. Při zapnutém omezení pohybu v systému jsou animace zpočátku vypnuté. |
| Místní historie | Ukládá souhrny do `localStorage` tohoto prohlížeče; DemoScope je neodesílá. Historii lze vypnout, importovat, exportovat jako JSON/HTML, spojit zálohy JSON do jednoho HTML nebo vymazat. Limity jsou 10/20/30/50 záznamů na klíč a 100/200/300/500 celkem. Vypnutí zastaví nové záznamy, staré nesmaže; zaznamenává se jen klasický formulář. |
| Prázdná fronta | Zprávu VACNetu nahradí lokalizovanými pokyny, datem/časem prvního zobrazení uloženým v prohlížeči a výběrem jazyka. Údaj 250 dem denně je informativní pozorování; DemoScope limit služby nevynucuje ani neobchází. |
| Zápatí | Používá lokalizované zápatí DemoScope. Stránky klipů mohou zobrazit odkazy zpětné vazby a hlášení; skrýt lze každý odkaz, copyright nebo celé zápatí. |
| Odolnost | Kroky nastavení běží nezávisle a klíčové prvky mají náhradní vyhledávání. Pokud stránku nelze rozpoznat, DemoScope se na ní vypne, obnoví rozvržení VACNetu a zobrazí oznámení. **Nastavení → Diagnostika** kopíruje zprávu s verzí, nalezenými prvky, chybami kroků a strukturou stránky. |

## Lokalizace

| Funkce | Parametry | Návratová hodnota | Účel |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Vložený SVG kód vlajky pro jazyk; pokud chybí, vrátí ikonu zeměkoule. |
| `getSavedLocale` | — | `string \| null` | Načte uložený jazyk uživatele (`demoscopeLanguage`) z `localStorage`. |
| `getActiveLocale` | — | `string` | Určí aktivní jazyk: uložená volba → Steam `?l=` → jazyk prohlížeče/stránky → `en`. |
| `getLanguageBadge` | — | `string` | Vlastní zobrazovaný název jazyka, např. „English version“, pro odznak ve výběru jazyka. |
| `getBrowserLocale` | — | `string \| null` | Najde první podporovaný jazyk prohlížeče včetně regionálních variant. |
| `syncAutomaticLanguage` | — | `boolean` | V automatickém režimu synchronizuje ?l= s jazykem prohlížeče a při rozdílu stránku přesměruje. |
| `getRenderedSteamLanguage` | — | `string \| null` | Z parametru l= v adresách vlastního stylesheetu a skriptů stránky čte jazyk, ve kterém VACNet stránku skutečně vykreslil. |
| `syncSelectedLanguage` | — | `boolean` | Po ručním výběru jazyka v DemoScope jednou znovu načte stránku s odpovídajícím ?l=, aby se jazyk textů VACNet sjednotil. Přeskočí se, pokud se jazyk již shoduje; chrání před smyčkou přesměrování. Vrátí true, pokud došlo k navigaci. |
| `tr` | `key: string` | `string` | Vyhledá řetězec rozhraní pro aktivní jazyk (záloha: angličtina, poté samotný klíč). |
| `inviteText` | `key: string` | `string` | Totéž vyhledávání pro tabulku řetězců stránky pozvánek. |
| `settingText` | `key: string` | `string` | Totéž vyhledávání pro tabulku řetězců dialogu nastavení. |
| `getPresetLabel` | `name: string` | `string` | Lokalizovaný popisek předvolby; skládá kombinace jako „Bot + Aim“. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | HTML tlačítek pro výběr jazyka včetně položky „auto“. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Propojí a umístí výběr jazyka, uloží volbu a obnoví stránku; volitelný callback může volbu zpracovat místo toho. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Vyhledá lokalizovaný text pro prázdnou frontu nebo patičku. |

## Zvukové efekty a dialog nastavení

| Funkce | Parametry | Návratová hodnota | Účel |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Řádek „N záznamů · poslední záznam: …“ zobrazený v dialogu nastavení. |
| `soundsEnabled` | — | `boolean` | Zda jsou zvuky rozhraní zapnuté (`demoscopeSoundEffectsEnabled`, ve výchozím stavu zapnuto). |
| `getSoundVolume` | — | `number (0–1)` | Uložená hlasitost zvuku (`demoscopeSoundEffectsVolume`, výchozí 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Pomocí Web Audio syntetizuje krátkou sekvenci tónů (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); nikdy nevyhodí chybu. |
| `readSettingsHotkey` | — | `string` | Uložený `KeyboardEvent.code`, který otevírá dialog nastavení (výchozí `F2`). |
| `formatHotkey` | `code: string` | `string` | Čitelný název klávesy (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Získá kód fyzické klávesy, nelatinská rozložení mapuje zpět na `KeyX`; `""`, pokud je nepoužitelný. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Pravda pro klávesy, které DemoScope nebo přehrávač již používají (Enter, mezerník, šipky, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Vytvoří a propojí nastavení: zvuky a hlasitost, náhled, klávesová zkratka, místní historie a limity, formát času, import/export JSON, export/sloučení HTML, vymazání historie, viditelnost patičky a reset. |
| `openSettingsDialog` | `opener = null` | `void` | Otevře dialog s aktuálními hodnotami a zapamatuje si prvek, kterému se vrátí fokus. |
| `installSettingsUi` | — | `void` | Nainstaluje globální posluchač kláves ve fázi capture (otevření/zavření dialogu, přiřazení nové klávesy) a zvukové události. |
| `installUiSoundEvents` | — | `void` | Delegovaný posluchač kliknutí, který přehrává zvuky zpětné vazby pro ovládací prvky DemoScope. |
| `ensureSettingsLayoutStyles` | — | `void` | Vloží styly okna nastavení: sekce zarovná doleva a řádky doplní souhrnnými štítky. |
| `refreshSettingsSummaries` | — | `void` | Obnoví souhrnné štítky položek Klávesové zkratky a Animace. |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Přidá sekce Klávesové zkratky, Animace, Diagnostika a Obnovení; skryje starou sekci klávesy nastavení. |

## Zálohy, reporty a limity historie

| Funkce | Parametry | Návratová hodnota | Účel |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Stáhne celou historii jako `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Spustí stažení souboru pomocí dočasné adresy Blob URL. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Zploští a odstraní duplicity ze záznamů historie, nejnovější první. |
| `exportReadableHistory` | — | `void` | Stáhne samostatný lokalizovaný HTML report historie. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Sestaví HTML kód reportu s escapovanými znaky. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Aktualizuje stavový řádek nástroje pro slučování (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Ověří mnoho JSON záloh (každá ≤ 5 MB, celkem ≤ 100 MB), odstraní duplicity záznamů a stáhne jeden společný HTML report. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Kontrola klíčů historie podle seznamu povolených (blokuje `__proto__`, `constructor` a chybně utvořené klíče). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Ověří JSON zálohu, sloučí ji s místní historií (s respektováním limitů) a obnoví rozhraní. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Načte číselný limit z `localStorage` a přijímá pouze povolené hodnoty. |
| `getHistoryPerKeyLimit` | — | `number` | Záznamy uchovávané na klíč klipu/hry (10/20/30/50, výchozí 30). |
| `getHistoryTotalLimit` | — | `number` | Celkový počet uchovávaných klíčů klipů/her (100/200/300/500, výchozí 300). |

## Název účtu a stránka pozvánek

| Funkce | Parametry | Návratová hodnota | Účel |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Zda je název účtu Steam právě skrytý. |
| `installAccountNameControl` | — | `void` | Přidá přepínač ve tvaru oka vedle odkazu pro odhlášení a udržuje ho synchronizovaný pomocí `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Přepracuje `/vacnet/createinvite`: kartové rozvržení, zobrazení/skrytí a kopírování odkazu (Clipboard API se zálohou `execCommand`), seznam požadavků, výběr jazyka. Vrací `false`, pokud chybí očekávané prvky. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Přidá tlačítko zavření (×) a posluchač ve fázi capture pro akce inviteDone a inviteClose. Ignoruje klávesy, když je fokus na tlačítku, odkazu, poli, modálním okně nebo seznamu jazyků. |
| `refreshInviteKeyLabels` | — | `void` | Podle aktuálních přiřazení obnoví popisek „Done“ a nápovědu tlačítka ×. |
| `installWelcomePage` | — | `boolean` | Upraví uvítací stránku, přidá značku a výběr jazyka; Enter/Space pokračuje; při chybějících prvcích vrací false. |

## Segment klipu a adaptér přehrávače

| Funkce | Parametry | Návratová hodnota | Účel |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Získá `startTime`/`endTime` z vložených skriptů stránky. |
| `formatSegmentTime` | `seconds: number` | `string` | Naformátuje sekundy jako `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Najde prvek `<video>` kontrolovaného klipu. |
| `getVjsPlayer` | — | `Video.js player \| null` | Vrátí přehrávač Video.js stránky, pokud je dostupný a nebyl zničen. |
| `createPlayerAdapter` | — | `adapter \| null` | Jednotné API nad Video.js / HTML5 videem: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Dotazuje se každých 100 ms, dokud přehrávač neexistuje; při vypršení času odmítne. |
| `clampSegment` | `time: number, bounds: object` | `number` | Omezí čas na hranice klipu. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Relativní pozice uvnitř klipu. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Přidá posuvník, zobrazení času a nápovědu kláves pod video. |
| `pauseLayoutMutations` | `run: Function` | `void` | Spustí zpětné volání, zatímco jsou pozorovatelé rozvržení pozastaveni (zabraňuje smyčkám zpětné vazby). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Vrátí true, pokud je fokus ve vstupu, textarea, selectu nebo editovatelném textu. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Funguje jako isShortcutBlocked, ale propustí přepínače rozhodnutí, protože po kliknutí zůstává fokus na nich. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Popisek volby rychlosti. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Seznam `<option>` pro výběr rychlosti (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Uložená rychlost při Shiftu (výchozí 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Uložený stav randomizéru verdiktů (ve výchozím stavu vypnuto). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Propojí zpracování rychlosti přehrávání, omezení/pozastavení segmentu, pomocné funkce pro posun/krok po snímcích/ztlumení/celou obrazovku a globální klávesové zkratky (`1`–`5`, šipky, `,` `.`, mezerník, `M`, `F`, Shift). Vnitřní uzávěry: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, pomocné funkce kreslicí smyčky. |

## Předvolby verdiktů

| Funkce | Parametry | Návratová hodnota | Účel |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Vybere „skip“ v každé skupině verdiktů bez výběru. |
| `getSelectedVerdictState` | — | `object` | Aktuální hodnota (`positive` / `negative` / `skip` / `null`) pro `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Název předvolby, která odpovídá aktuálnímu výběru. |
| `syncPresetButtons` | — | `string \| null` | Aktualizuje `aria-pressed` na tlačítkách předvoleb a odznak rozšířené předvolby. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Klikne na přepínače předvolby; při zapnutém randomizéru zamíchá pořadí a mezi kliknutími čeká 200–600 ms. Po dobu běhu zakáže tlačítka předvoleb. |
| `readAdvancedPresetsOpen` | — | `boolean` | Zda zůstala otevřená zásuvka rozšířených předvoleb. |
| `normalizeVerdictLabels` | `root = document` | `void` | Odstraní zvýrazňující značky z popisků verdiktů. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Přidá lokalizované nadpisy nad každou skupinu verdiktů. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Pro jednu skupinu rozhodnutí vytvoří tlačítko „?“ a vysvětlující bublinu s lokalizovaným textem DemoScope. |
| `closeVerdictHelp` | `except = null` | `void` | Zavře všechny otevřené bubliny s vysvětlením kromě zadané. |
| `installVerdictHelpHandlers` | — | `void` | Jednou nastaví delegované obsluhy kliknutí, kliknutí mimo a Esc pro bubliny. |

## Oznámení, zápatí a načítání při odeslání

| Funkce | Parametry | Návratová hodnota | Účel |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Skryje zápatí webu. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Zobrazí neblokující oznámení ARIA-live. |
| `markSubmitPending` | — | `void` | Uloží do `sessionStorage` čas odeslání a ID aktuálního klipu. |
| `isSubmitPending` | — | `boolean` | Zda odeslání čeká na další klip. |
| `clearSubmitPending` | — | `void` | Vymaže značky čekajícího odeslání. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Zobrazí celostránkový překryv načítání. |
| `hideSubmitLoadingOverlay` | — | `void` | Skryje překryv a vymaže stav čekání. |
| `bootSubmitLoadingIfPending` | — | `void` | Při načtení stránky znovu zobrazí překryv, pokud je odeslání v čekání. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Pravda, pokud jsou rozhraní a média dalšího klipu připravené. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Čeká až 30 s na další klip, poté skryje překryv (při vypršení času chybové oznámení). |

## Místní úložiště historie

| Funkce | Parametry | Návratová hodnota | Účel |
|---|---|---|---|
| `extractVodId` | — | `string` | Odvodí ID klipu/hry z URL videa. |
| `getGameKey` | — | `string` | Klíč historie pro hru (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Klíč historie pro jeden segment (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Ověří a vyčistí jeden záznam historie. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Normalizované záznamy pro klíč. |
| `getGameHistoryEntries` | `store: object` | `Array` | Záznamy pro aktuální hru (podporuje starý klíč). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Záznamy pro aktuální segment. |
| `formatClipId` | `vodId: string` | `string` | Krátké číselné zobrazované ID (`#0000000`) vytvořené hashem z ID klipu. |
| `formatRelativeTime` | `timestamp: number` | `string` | Lokalizovaný relativní čas (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Načte objekt historie z `localStorage` (`{}` při chybě). |
| `pruneHistoryStore` | `store: object` | `void` | Použije limity na klíč i celkové limity (nejstarší klíče se zahodí jako první). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Ořízne a uloží; `false` při chybách kvóty/úložiště. |
| `summarizeCurrentVerdict` | — | `string` | Název předvolby pro aktuální výběr nebo `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Lokalizovaný popisek souhrnu historie. |
| `formatClockTime` | `seconds: number` | `string` | Formát hodin `m:ss` (nebo `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Čitelný rozsah segmentu. |
| `formatGameLabel` | — | `string` | Lokalizovaný popisek aktuální hry. |
| `historyEntryKey` | `entry: object` | `string` | Identifikační řetězec používaný k odstranění duplicit. |
| `formatPriorStat` | `count: number, label: string` | `string` | Řádek „popisek: N“ v panelu historie. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Sloučí záznamy klipů/her do zobrazovaných položek. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML jednoho řádku historie. |
| `escapeHtml` | `value: any` | `string` | Escapuje `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML panelu historie včetně tlačítka pravidel kontroly. |
| `ensureClipHistoryPanel` | — | `void` | Vytvoří kontejner panelu, pokud chybí. |
| `ensureReviewRulesDialog` | — | `void` | Vytvoří dialog pravidel kontroly a propojí jeho tlačítka pro otevření/zavření. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Propojí tlačítko „místní historie“ (posune na seznam nebo zobrazí oznámení o prázdném stavu). |
| `positionClipHistoryPanel` | — | `void` | Udržuje panel jako první prvek v `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Znovu vykreslí panel historie pro aktuální klip. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Připojí souhrn aktuálního verdiktu k historii hry a klipu. |
| `isLocalHistoryEnabled` | — | `boolean` | Čte, zda je místní historie zapnutá; výchozí stav je zapnuto. |
| `readTimeFormat` | — | `string` | Čte preferovaný formát času: automatický, 12hodinový nebo 24hodinový. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Formátuje čas prvního zjištění podle jazyka a formátu času. |
| `getQueueNoticeLocale` | — | `string` | Vrací aktivní jazyk oznámení prázdné fronty. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Převede starou volbu jazyka na společné nastavení a synchronizuje URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Obnoví zobrazený čas prvního zjištění. |

## Průběh odeslání

| Funkce | Parametry | Návratová hodnota | Účel |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Pravda na stránkách, které zobrazují čtyři skupiny verdiktů. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Nativní tlačítko odeslání, pokud je viditelné a povolené. |
| `recordProceedHistoryIfLabeling` | — | `void` | Zaznamená historii jednou na odeslání (chráněno proti opětovnému vstupu). |
| `resetProceedArmed` | — | `void` | Odzbrojí dvoukrokové odeslání. |
| `refreshProceedButtonLabel` | — | `void` | Aktualizuje popisek tlačítka/nápovědu `Enter` a styl připraveného stavu. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Namapuje výběr na `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Sestaví skrytá pole `verdict_labels[]`; zobrazí chybové oznámení a vrátí `false`, pokud některá skupina nemá výběr. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Povoluje pouze akce formulářů přes HTTPS se stejným původem. |
| `restoreSubmitUi` | — | `void` | Obnoví tlačítka po neúspěšném odeslání. |
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Provede bezpečnostní kontrolu, zobrazí překryv načítání a odešle formulář. |
| `submitVerdictsDirect` | — | `boolean` | Připraví popisky a odešle. |
| `invokeProceedAction` | — | `boolean` | Obsluha Enteru/kliknutí: první stisk připraví, druhý odešle. |
| `installProceedShortcut` | — | `void` | Posluchač ve fázi capture pro `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Zruší přípravu prvního stisku při dvoufázovém odesílání nebo klikne na viditelné „Cancel“; pokud není co zrušit, vrátí false. |
| `refreshCancelButtonLabel` | — | `void` | Přidá nebo obnoví štítek klávesy na tlačítku „Cancel“. |
| `hookProceedButton` | — | `void` | Nahradí chování při kliknutí nativního tlačítka odeslání. |
| `installVerdictChangeReset` | — | `void` | Odzbrojí odeslání a znovu synchronizuje předvolby, když se verdikt změní. |
| `scheduleProceedFooterFix` | — | `void` | Odložené (`requestAnimationFrame`) volání `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Odložená renormalizace popisků/nadpisů/výchozích hodnot. |

## Registr a změna klávesových zkratek

| Action | Default | Group | Popis |
|---|---|---|---|
| `playPause` | `Space` | Playback | Pozastaví nebo obnoví klip. |
| `mute` | `M` | Playback | Vypne nebo zapne zvuk. |
| `fullscreen` | `F` | Playback | Zapne nebo ukončí režim celé obrazovky. |
| `seekBack` / `seekForward` | `←` / `→` | Navigace | Přeskočí o 5 sekund zpět / vpřed. |
| `frameBack` / `frameForward` | `,` / `.` | Navigace | Posune se o jeden snímek zpět / vpřed. |
| `speedBoost` | `Shift` | Navigation | Při podržení zrychlí přehrávání; je to jediná akce, která může používat Shift. |
| `quick1` … `quick5` | `1` … `5` | Rozhodnutí | Klasický formulář: předvolby 1–5. Úloha s jednou otázkou: Cheating / Not sure / No cheats seen (`1`–`3`). |
| `proceed` | `Enter` | Submission | Potvrdí rozhodnutí nebo připraví a odešle klasický formulář. |
| `cancel` | `Esc` | Submission | Stiskne „Cancel“ nebo zruší první stisk Enter. |
| `inviteDone` | `Enter` | Invite page | Opustí stránku pozvánky stejně jako tlačítko „Done“. |
| `inviteClose` | `Esc` | Invite page | Provede stejnou akci jako tlačítko ×. |
| `settings` | `F2` | Interface | Otevře nebo zavře dialog nastavení. |

Přiřazení se ukládají jako hodnoty `KeyboardEvent.code` pod `demoscopeKeybindings` (jen změny oproti výchozímu nastavení; klávesa nastavení má vlastní položku). Levý a pravý modifikátor se počítají jako jedna klávesa a numerická klávesnice odpovídá hlavní řadě. Nelze přiřadit: `Tab`, `Ctrl`, `Alt`, `Meta`, `Caps Lock`, `ContextMenu`, `F5`, `F11`, `F12`. Rozsahy jsou oddělené: `review`, `invite` a nastavení `global`, které koliduje se vším.

| Funkce | Parametry | Návratová hodnota | Účel |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Nahradí zástupné symboly {name} v lokalizované šabloně. |
| `isModalOpen` | — | `boolean` | Vrátí true, pokud je otevřen nějaký <dialog>; klávesové zkratky stránky jsou pak neaktivní. |
| `normalizeKeyCode` | `code: string` | `string` | Sloučí levé a pravé modifikační klávesy a namapuje číslice numerické klávesnice a NumpadEnter na hlavní řadu. |
| `formatKeyLabel` | `code: string` | `string` | Zobrazovaný název klávesy (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Načte a ověří uložená přiřazení (z mezipaměti; při chybě vrátí {}). |
| `saveKeyOverrides` | `overrides: object` | `void` | Uloží přiřazení nebo záznam odstraní, pokud jsou všechna výchozí. |
| `getBinding` | `id: string` | `string` | Vrátí aktuální klávesu akce; nepřiřazená akce vrací prázdný řetězec. |
| `setBinding` | `id: string, code: string` | `void` | Uloží klávesu akci; prázdný kód přiřazení zruší a výchozí hodnoty se neukládají. |
| `resetAllBindings` | — | `void` | Obnoví všechna přiřazení včetně klávesy nastavení na výchozí hodnoty. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Najde jinou akci, která již používá danou klávesu v překrývajícím se rozsahu. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Převede událost klávesnice na ID akce pro aktuální rozsah stránky. |
| `keyScopeOf` | `id: string` | `string` | Rozsah akce: review, invite nebo global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | Vrátí true, pokud se rozsahy mohou střetnout (jsou stejné nebo jeden z nich je global). |
| `currentKeyScope` | — | `string` | Na stránce pozvánky vrací invite, jinak review. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Vrátí prázdný řetězec pro povolenou klávesu, reserved pro klávesy prohlížeče/navigace nebo shift při použití Shift pro akci bez podržení. |
| `quickRangeLabel` | `count: number` | `string` | Popisek kláves rychlého rozhodnutí: 1–5, pokud nebyly změněny, jinak přiřazené klávesy. |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Vytvoří nápovědy kláves pod videem podle aktuálních přiřazení. |
| `refreshKeyLabels` | — | `void` | Obnoví všechny popisky kláves na stránce: nápovědy, štítky, Pokračovat/Zrušit/Pozvánka a souhrny nastavení. |
| `ensureDemoscopeDialogStyles` | — | `void` | Vloží společný vzhled oken Klávesové zkratky a Animace. |
| `hkActionName` | `id: string` | `string` | Lokalizovaný název akce. |
| `hkGroupName` | `group: string` | `string` | Lokalizovaný název skupiny. |
| `hkActionDescription` | `id: string` | `string` | Lokalizovaný popis akce; rychlá rozhodnutí jsou popsána pro oba typy úloh. |
| `hkSetMessage` | `text: string, warn = false` | `void` | Nastaví stavový řádek okna Klávesové zkratky. |
| `hkCancelCapture` | — | `void` | Ukončí režim zachytávání klávesy. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Vytvoří HTML řádek akce včetně panelu konfliktu, pokud je čekající. |
| `renderHotkeys` | — | `void` | Znovu vykreslí celé okno a zachová pozici posuvníku. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Přiřadí klávesu; replace odebere přiřazení druhé akci, swap klávesy vymění. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Přímo přiřadí klávesu nebo při jejím obsazení otevře panel konfliktu (Replace / Swap / Cancel). |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Vytvoří okno Klávesové zkratky a posluchač kláves ve fázi zachytávání; Esc lze přiřadit a během zachytávání okno nezavírá. |
| `openHotkeysDialog` | — | `void` | Otevře okno Klávesové zkratky. |

## Animace

Šest stylů indikátoru (`pulse`, `breathe`, `ripple`, `heartbeat`, `orbit`, `blink`), tři rychlosti (0,6× / 1× / 1,7×) a přepínač se ukládají pod `demoscopeAnimStyle`, `demoscopeAnimSpeed` a `demoscopeAnimEnabled`. Aktivní styl je na `<html>` uveden v `data-ds-anim` (`off` při vypnutí); styly řídí živou tečku i náhledy.

| Funkce | Parametry | Návratová hodnota | Účel |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Bezpečně přečte localStorage. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Bezpečně zapíše do localStorage; hodnota null klíč odstraní. |
| `animEnabled` | — | `boolean` | Uložený stav animací; při požadavku systému na omezení pohybu jsou ve výchozím stavu vypnuté. |
| `animStyle` | — | `string` | Uložený styl (výchozí pulse). |
| `animSpeedKey` | — | `string` | Uložená rychlost (slow / normal / fast; výchozí normal). |
| `ensureAnimationStyles` | — | `void` | Vloží společné keyframes a pravidla pro indikátor a náhledové tečky. |
| `applyAnimationSettings` | — | `void` | Použije styl, rychlost a zapnutí/vypnutí na <html> a obnoví souhrn nastavení. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Vytvoří okno Animace s přepínačem, rychlostí, kartami stylů s živým náhledem a obnovením. |
| `openAnimationsDialog` | — | `void` | Otevře okno Animace. |
| `ensureUiPolishStyles` | — | `void` | Přidá tmavé úzké posuvníky a color-scheme: dark pro okna a seznam rozhodnutí. |

## Úloha s jednou otázkou

| Funkce | Parametry | Návratová hodnota | Účel |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Vrátí true, pokud stránka zobrazuje formulář s jedinou otázkou (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | Klikne na přepínač Cheating / Not sure / No cheats seen; je-li volba zamčená, přehraje chybový zvuk a zatřese kartou zámku. |
| `localizeCheatingVerdicts` | — | `void` | Přeloží tři štítky do jazyka DemoScope a pomocí CSS vykreslí klávesové štítky, takže potvrzovací řádek VACNet neobsahuje číslici klávesy. Připraví také kartu zámku. |
| `updateCheatingLock` | — | `void` | Aktualizuje kartu zámku a ukazatel průběhu o zbývající čas do odemčení dalších dvou rozhodnutí; po odemčení nebo výběru je skryje. |
| `startCheatingLockWatcher` | — | `void` | Spustí časovač po 250 ms, který volá updateCheatingLock. |

## Odolnost a diagnostika

| Funkce | Parametry | Návratová hodnota | Účel |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Zapíše neúspěšný krok do diagnostické zprávy; počet záznamů je omezen. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Spustí krok nastavení; při chybě ji zaznamená a vrátí náhradní hodnotu, aby pokračovaly další kroky. |
| `getVideoContainer` | — | `HTMLElement \| null` | Najde kontejner videa; pokud chybí, použije rodiče přehrávače nebo prvku <video>. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Najde kontejner rozhodnutí; pokud chybí, použije rodiče prvního bloku rozhodnutí. |
| `getSubmitArea` | — | `HTMLElement \| null` | Najde oblast odeslání/potvrzení (#submitbuttons, .submitbuttons nebo rodiče tlačítka odeslání). |
| `hasVerdictForm` | — | `boolean` | Vrátí true, pokud existuje alespoň jeden přepínač rozhodnutí. |
| `removeEnhancements` | — | `void` | Odstraní panely, třídy a změny zápatí DemoScope a obnoví zápatí VACNet. |
| `disableDemoScope` | `reason: string` | `void` | Na této stránce vypne DemoScope, vrátí změny, ponechá pouze okno nastavení a jednou za relaci zobrazí oznámení pro každý důvod. |
| `isOwnNode` | `el: Element` | `boolean` | Vrátí true pro prvky vytvořené DemoScope; do zprávy o struktuře se nezahrnují. |
| `elementSignature` | `el: Element` | `string` | Signatura tag#id.class[…] pro zprávu o struktuře; neobsahuje text. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Stručný odsazený strom tagů, ID a tříd; stejní sourozenci se sloučí jako ×N. |
| `captureOriginalSkeleton` | — | `void` | Zaznamená strukturu stránky před změnami DemoScope. |
| `buildDiagnosticsReport` | — | `string` | Vytvoří zprávu s verzí, stránkou, jazykem a prohlížečem, typem úlohy, 22 kontrolami prvků, chybami kroků a strukturou před/po DemoScope. Neobsahuje text stránky ani údaje o účtu. |
| `fallbackCopyText` | `text: string` | `boolean` | Kopíruje text přes dočasné textové pole, pokud není dostupné Clipboard API. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Zkopíruje zprávu; při neúspěchu zobrazí text ve výběrovém poli. |

## Rozvržení a spuštění

| Funkce | Parametry | Návratová hodnota | Účel |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Sestaví lištu pro výběr rychlosti Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML jednoho tlačítka předvolby. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML skupin rozšířených předvoleb. |
| `buildEnhancementBar` | — | `HTMLElement` | Sestaví lištu rychlých verdiktů: předvolby, přepínač randomizéru, rozšířená zásuvka. |
| `positionShiftSpeedBar` | — | `void` | Udržuje lištu rychlosti před seznamem verdiktů. |
| `positionEnhancementBar` | — | `void` | Udržuje lištu předvoleb před tlačítky odeslání. |
| `fixProceedFooter` | — | `void` | Přeuspořádá zápatí, lišty a tlačítko odeslání. |
| `enhanceLayout` | — | `void` | Použije všechny změny rozvržení a nainstaluje rozhraní nastavení. |
| `ensureReviewStructure` | — | `void` | Normalizuje značky VACNet: obalí bloky rozhodnutí do .verdicts-container-inner, přesune #submitbuttons do kontejneru a zobrazí počet klipů ve štítku záhlaví. Podporuje staré i nové značky. |
| `watchProceedFooter` | — | `void` | Pozoruje `.verdicts-container` a plánuje opravy zápatí. |
| `watchVerdictLabels` | — | `void` | Pozoruje popisky verdiktů a plánuje renormalizaci. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Čte z localStorage nastavení viditelnosti patičky. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Uloží nastavení viditelnosti patičky. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Vytvoří či aktualizuje lokalizovanou patičku s volitelnými odkazy a použije nastavení. |
| `installEmptyQueueNotice` | — | `boolean` | Nahradí hlášení prázdné fronty lokalizovanými pokyny, časem, výběrem jazyka a patičkou. |
| `init` | — | `Promise<void>` | Vstupní bod: ovládání názvu účtu → stránka pozvánek nebo kontroly → rozvržení, pozorovatelé, zkratky, vylepšení přehrávače. |

`installWelcomePage` a `installInvitePage` vracejí `false`, pokud nejsou dostupné potřebné prvky stránky VACNet. `installEmptyQueueNotice` vrací `false`, pokud stránka není ve stavu prázdné fronty.

### Ostatní položky

* **`blockSegmentLoopGuard`** (IIFE, spustí se při načtení): obalí stránkový `setInterval` a nahradí nativní 100ms časovač smyčky segmentu prázdnou funkcí; segment pak ovládají vlastní prvky DemoScope.
* **Konstanty a tabulky:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitions); added since v1.0.0: `KEY_ACTIONS`, `KEY_GROUPS`, `KEY_ACTION_BY_ID`, `KEY_ACTION_SCOPE`, `RESERVED_KEY_CODES`, `CHEATING_KEYS`, `VERDICT_SECTION_TITLES`, `VERDICT_SECTION_HELP`, `ANIM_STYLES`, `ANIM_SPEEDS`.
* **Stav modulu:** `diag` (step failures, the switch-off reason and the original page structure), `hkState` (state of the Hotkeys window) and the `SCRIPT_VERSION` constant used by the diagnostics report.
* **Texty:** všechny texty viditelné uživateli jsou v lokalizovaných tabulkách výše; okna přidaná ve verzích v1.2.0–v1.4.0 jsou přeložena do všech 29 jazyků.

## Klíče úložiště

| Klíč | Umístění | Účel |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Zvolený jazyk / automatický režim. |
| `demoscopeKeybindings` | `localStorage` | Klávesové zkratky odlišné od výchozích (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Klávesa pro otevření dialogu nastavení (po odebrání none). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Nastavení animace indikátoru. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Nastavení zvuku. |
| `demoscopeClipHistory` a klíče limitu/formátu historie | `localStorage` | Místní historie kontrol a její nastavení. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Stav načítání při odeslání, ochrana synchronizace jazyka a jednorázové oznámení o vypnutí. |









