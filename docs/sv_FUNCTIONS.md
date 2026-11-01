<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/cs_FUNCTIONS.md) · **Svenska** · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ja_FUNCTIONS.md)

</div>

# DemoScope — Funktionsreferens

Fullständig referens för de 217 funktionerna på översta nivån i `DemoScope.user.js` v1.4.0 (namn, parametrar, returvärde, ansvar). Tillbaka till [README](../README.md).

Konventioner: `—` betyder inga parametrar; `void` betyder att funktionen anropas för sina biverkningars skull.

## Översikt över användarbeteende

| Område | Beskrivning |
|---|---|
| Sidor som stöds | Förbättrar VACNets välkomstsida (/vacnet), granskningssidor (/vacnet/clips), inbjudningssidan (/vacnet/createinvite) och läget utan klipp på granskningssidan. Orelaterade sidor lämnas orörda. |
| Uppgiftstyper | Identifierar vilket granskningsformulär VACNet visar. Det klassiska formuläret (aim assist, wallhack, auto-bhop, bot) får förval och utökade kombinationer. Den nyare uppgiften med en fråga (”Fuskar personen bortom rimligt tvivel?”) får i stället en kompakt layout: tre märkta omdömen på tangenterna 1–3, en låsindikator med klippets återstående tid och inga snabbomdömen eller kombinationer. |
| Språk | Stöder 29 Steam-språk. Ett sparat manuellt val har företräde; annars följer skriptet Steams ?l=-parameter och därefter webbläsarens/sidans språk. Ett språkval i DemoScope skickar även motsvarande ?l= till VACNet, så att VACNets egna texter följer valet. Automatiskt läge synkroniserar Steams språkparameter med webbläsarens språk. |
| Välkomst- och inbjudningssidor | Ändrar utseendet på båda sidorna, lägger till den gemensamma språkvalsmenyn och döljer kontonamnet med en ögonknapp. På välkomstsidan fortsätter Enter eller mellanslag när fokus inte ligger på ett interaktivt reglage. På inbjudningssidan kan länken döljas, visas och kopieras; inbjudningskraven förklaras. ×-knappen stänger sidan; Enter motsvarar ”Klart” och Esc motsvarar ×. |
| Klippgranskning | Lägger till omdömesförval och utökade kombinationer, en slumpfunktion för omdömen (av som standard), justerbar uppspelningshastighet med Shift, sökning begränsad till segmentet, bildstegning och uppspelningsgenvägar. Omdömeskategorier har en ”?”-knapp med lokaliserad förklaring. Nyckelfraser i omdömesknappar markeras med DemoScopes färger. |
| Snabbkommandon | Varje genväg är en åtgärd i ett gemensamt register och kan ändras i Inställningar → Snabbkommandon. Konflikter upptäcks per sida (inbjudningssidor och granskningssidor krockar inte) och visar åtgärden, gruppen och beskrivningen som redan använder tangenten; du kan ersätta, byta eller avbryta. Varje åtgärd har en återställningsknapp och tangenttipsen följer dina bindningar. |
| Skicka | Enter eller Numpad Enter (standard) aktiverar ”Fortsätt”. I det klassiska formuläret armerar första trycket åtgärden och nästa skickar omdömena. I uppgiften med en fråga visar ett valt omdöme VACNets egen bekräftelse, som bekräftas med Enter. Esc (standard) trycker på ”Avbryt” medan ett omdöme väntar på bekräftelse, eller avaktiverar det första trycket. Mellanslag skickar inte formuläret. |
| Inställningar | F2 öppnar inställningsdialogen som standard (kan ändras i snabbkommandofönstret). Avsnitt: snabbkommandon, animationer, ljudeffekter och volym, lokal historik (aktivering, gränser, 12/24-timmarsformat, säkerhetskopior), sidfotsvisning, diagnostik och en gemensam återställning av ljud, snabbkommandon och animationer. |
| Animationer | Punkten bredvid DemoScope kan animeras. Ett separat fönster erbjuder sex stilar (puls, andning, ringar, hjärtslag, bana, blinkning), liveförhandsvisning, tre hastigheter och en av/på-knapp. Om operativsystemet ber om minskad rörelse är animationerna avstängda från början. |
| Lokal historik | Sparar sammanfattningar av omdömen i webbläsarens localStorage; DemoScope laddar inte upp dem. Historiken kan stängas av, importeras, exporteras som JSON eller HTML, sammanfogas från JSON-säkerhetskopior till en HTML-rapport eller rensas. Gränser kan ställas in: 10/20/30/50 poster per nyckel och 100/200/300/500 nycklar totalt. Avstängning stoppar nya poster men raderar inte befintliga data. Historik sparas endast för det klassiska formuläret. |
| Tom kö | Ersätter VACNets meddelande om tom kö med lokaliserad vägledning, datum/tid då läget först visades (sparas i webbläsaren) och en språkvalsmeny. Texten om 250 demon per dag är information baserad på observerat VACNet-beteende; DemoScope tillämpar eller kringgår inte tjänstens gräns. |
| Sidfot | Använder en lokaliserad DemoScope-sidfot. På klippsidor kan den visa länkar för feedback och rapportering; inställningarna kan dölja varje länk, copyright-raden eller hela sidfoten. |
| Robusthet | Varje installationssteg körs isolerat så att ett fel inte stoppar de andra. Viktiga element söks med reservlösningar. Om sidan inte längre känns igen stänger DemoScope av sig på den sidan, återställer VACNets layout och visar ett kort meddelande. Inställningar → Diagnostik kopierar en textrapport (skriptversion, vilka förväntade element som hittades, misslyckade steg och sidstrukturen) för felrapporter. |

Skriptet ändrar inte VACNets serverregler för inbjudningsbehörighet, omdömeshantering eller visningsgränser. Lokal historik, språk och gränssnittsinställningar finns kvar i webbläsarprofilen.

## Lokalisering

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Inbäddad SVG-kod för en flagga till ett språk; faller tillbaka på en globikon. |
| `getSavedLocale` | — | `string \| null` | Läser användarens sparade språk (`demoscopeLanguage`) från `localStorage`. |
| `getActiveLocale` | — | `string` | Avgör det aktiva språket: sparat val → Steams `?l=` → webbläsar-/sidspråk → `en`. |
| `getLanguageBadge` | — | `string` | Språkets eget visningsnamn, t.ex. “English version”, till märket i språkväljaren. |
| `getBrowserLocale` | — | `string \| null` | Hittar det första språk som stöds i webbläsaren, även regionala varianter. |
| `syncAutomaticLanguage` | — | `boolean` | Synkroniserar automatiskt ?l= med webbläsarens språk och navigerar om de skiljer sig. |
| `getRenderedSteamLanguage` | — | `string \| null` | Läser Steam-språket som VACNet faktiskt använde för sidan, från parametern l= i sidans formatmallars och skripts URL:er. |
| `syncSelectedLanguage` | — | `boolean` | När ett språk har valts manuellt i DemoScope läses sidan in en gång med motsvarande ?l= så att VACNets egna texter följer valet. Hoppar över omladdningen om det visade språket redan stämmer och förhindrar omdirigeringsloopar. Returnerar true om en navigering skedde. |
| `tr` | `key: string` | `string` | Slår upp en gränssnittstext för det aktiva språket (reserv: engelska, därefter själva nyckeln). |
| `inviteText` | `key: string` | `string` | Samma uppslagning för teksttabellen på inbjudningssidan. |
| `settingText` | `key: string` | `string` | Samma uppslagning för teksttabellen i inställningsdialogen. |
| `getPresetLabel` | `name: string` | `string` | Lokaliserad etikett för en förinställning; sätter ihop kombinationer som “Bot + Aim”. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | HTML för språkvalsknapparna, inklusive posten “auto”. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Kopplar och placerar språkväljaren, sparar valet och läser in sidan igen; en valfri callback kan hantera valet i stället. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Hämtar lokaliserad text för tom kö eller sidfot. |

## Ljudeffekter och inställningsdialog

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Raden “N poster · senaste post: …” i inställningsdialogen. |
| `soundsEnabled` | — | `boolean` | Om gränssnittsljud är påslagna (`demoscopeSoundEffectsEnabled`, standard på). |
| `getSoundVolume` | — | `number (0–1)` | Sparad ljudvolym (`demoscopeSoundEffectsVolume`, standard 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Syntetiserar en kort tonsekvens med Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); kastar aldrig fel. |
| `readSettingsHotkey` | — | `string` | Sparad `KeyboardEvent.code` som öppnar inställningsdialogen (standard `F2`). |
| `formatHotkey` | `code: string` | `string` | Läsbart tangentnamn (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Hämtar en fysisk tangentkod och avbildar icke-latinska layouter tillbaka till `KeyX`; `""` om den inte går att använda. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Sant för tangenter som DemoScope eller spelaren redan använder (Enter, mellanslag, piltangenter, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Skapar inställningsdialogen och kopplar funktionerna: ljud och volym, förhandslyssning, snabbtangent, lokal historik och gränser, tidsformat, JSON-import/export, HTML-export/sammanslagning, rensa historik, sidfotsvisning och återställning. |
| `openSettingsDialog` | `opener = null` | `void` | Öppnar dialogen med aktuella värden och kommer ihåg elementet som fokus ska återgå till. |
| `installSettingsUi` | — | `void` | Installerar den globala tangentlyssnaren i capture-fasen (öppna/stänga dialogen, ny tilldelning) och ljudhändelserna. |
| `installUiSoundEvents` | — | `void` | Delegerad klicklyssnare som spelar upp återkopplingsljud för DemoScopes kontroller. |
| `ensureSettingsLayoutStyles` | — | `void` | Lägger till inställningsfönstrets utseende: vänsterjusterade avsnitt och rader med sammanfattningsmarkörer. |
| `refreshSettingsSummaries` | — | `void` | Uppdaterar sammanfattningarna för Snabbkommandon (”Ändrade: N” / ”Standard”) och Animationer (”Stil · hastighet” / ”Av”). |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Lägger till Snabbkommandon och Animationer högst upp, samt Diagnostik och Återställ längst ned. Döljer det tidigare blocket för inställningstangenten, som nu ändras i snabbkommandofönstret. |

## Säkerhetskopior, rapporter och historikgränser

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Laddar ned hela historiken som `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Startar en filnedladdning via en tillfällig Blob-URL. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Plattar ut och tar bort dubbletter bland historikposter, nyaste först. |
| `exportReadableHistory` | — | `void` | Laddar ned en fristående, lokaliserad HTML-rapport över historiken. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Bygger den escapade HTML-koden för rapporten. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Uppdaterar statusraden för sammanslagningsverktyget (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Validerar många JSON-säkerhetskopior (≤ 5 MB vardera, ≤ 100 MB totalt), tar bort dubbletter bland posterna och laddar ned en samlad HTML-rapport. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Vitlistekontroll av historiknycklar (blockerar `__proto__`, `constructor` och felformade nycklar). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Validerar en JSON-säkerhetskopia, slår ihop den med den lokala historiken (med respekt för gränserna) och uppdaterar gränssnittet. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Läser en numerisk gräns från `localStorage` och godtar bara tillåtna värden. |
| `getHistoryPerKeyLimit` | — | `number` | Poster som sparas per klipp-/spelnyckel (10/20/30/50, standard 30). |
| `getHistoryTotalLimit` | — | `number` | Totalt antal sparade klipp-/spelnycklar (100/200/300/500, standard 300). |

## Kontonamn och inbjudningssida

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Om Steam-kontonamnet för tillfället är dolt. |
| `installAccountNameControl` | — | `void` | Lägger till en ögonväxel bredvid utloggningslänken och håller den synkroniserad via en `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Gör om `/vacnet/createinvite`: kortlayout, visa/dölj och kopiera länken (Clipboard API med `execCommand` som reserv), kravlista, språkväljare. Returnerar `false` om förväntade element saknas. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Lägger till stängningsknappen (×) och en avlyssnare i fångstfasen för inviteDone (standard Enter) och inviteClose (standard Esc). Ignorerar tangenter när en knapp, länk, ett fält, en dialogruta eller språklistan har fokus. |
| `refreshInviteKeyLabels` | — | `void` | Ritar om etiketten ”Klart” med tangentmarkören och verktygstipset för × utifrån aktuella bindningar. |
| `installWelcomePage` | — | `boolean` | Utformar välkomstsidan, lägger till profilering och språkväljare; Enter/Space fortsätter; returnerar false om element saknas. |

## Klippsegment och spelaradapter

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Hämtar `startTime`/`endTime` från sidans inbäddade skript. |
| `formatSegmentTime` | `seconds: number` | `string` | Formaterar sekunder som `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Hittar granskningens `<video>`-element. |
| `getVjsPlayer` | — | `Video.js player \| null` | Returnerar sidans Video.js-spelare om den finns och inte har förstörts. |
| `createPlayerAdapter` | — | `adapter \| null` | Enhetligt API ovanpå Video.js / HTML5-video: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Pollar var 100 ms tills en spelare finns; avvisar vid timeout. |
| `clampSegment` | `time: number, bounds: object` | `number` | Begränsar en tidpunkt till klippets gränser. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Relativ position inom klippet. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Lägger till sökfältet, tidsvisningen och tangenttipsen under videon. |
| `pauseLayoutMutations` | `run: Function` | `void` | Kör en återanropsfunktion medan layoutobservatörer är pausade (förhindrar återkopplingsloopar). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Returnerar true om fokus finns i ett inmatningsfält, textarea, select eller redigerbar text. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Som isShortcutBlocked, men släpper igenom alternativknapparna för omdömen eftersom fokus stannar på en sådan knapp efter klick. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Etikett för ett hastighetsalternativ. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | `<option>`-lista för hastighetsväljaren (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Sparad Shift-hastighet (standard 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Sparat tillstånd för bedömnings-randomiseraren (standard av). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Kopplar hantering av uppspelningshastighet, segmentbegränsning/-paus, hjälpfunktioner för sökning/bildsteg/ljud av/helskärm och de globala kortkommandona (`1`–`5`, piltangenter, `,` `.`, mellanslag, `M`, `F`, Shift). Interna closures: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, hjälpfunktioner för ritloopen. |

## Förinställda bedömningar

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Väljer “skip” i varje bedömningsgrupp utan val. |
| `getSelectedVerdictState` | — | `object` | Aktuellt värde (`positive` / `negative` / `skip` / `null`) för `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Namnet på den förinställning som matchar aktuellt val. |
| `syncPresetButtons` | — | `string \| null` | Uppdaterar `aria-pressed` på förinställningsknapparna och märket för den utökade förinställningen. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Klickar på en förinställnings radioinmatningar; med randomiseraren på blandas ordningen och 200–600 ms väntas mellan klicken. Inaktiverar förinställningsknapparna medan den körs. |
| `readAdvancedPresetsOpen` | — | `boolean` | Om lådan med utökade förinställningar lämnades öppen. |
| `normalizeVerdictLabels` | `root = document` | `void` | Tar bort markeringskod från bedömningsetiketterna. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Lägger till lokaliserade rubriker ovanför varje bedömningsgrupp. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Skapar knappen ”?” och en förklaringsruta för en omdömesgrupp med DemoScopes egen lokaliserade text; VACNets formulering används bara som reserv. |
| `closeVerdictHelp` | `except = null` | `void` | Stänger alla öppna förklaringsrutor utom den angivna. |
| `installVerdictHelpHandlers` | — | `void` | Installerar en gång delegerad hantering av klick, klick utanför rutan och Esc för förklaringsrutorna. |

## Aviseringar, sidfot och laddning vid inskick

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Döljer webbplatsens sidfot. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Visar en icke-blockerande ARIA-live-avisering. |
| `markSubmitPending` | — | `void` | Sparar tidpunkten för inskicket och aktuellt klipp-id i `sessionStorage`. |
| `isSubmitPending` | — | `boolean` | Om ett inskick väntar på nästa klipp. |
| `clearSubmitPending` | — | `void` | Rensar markörerna för väntande inskick. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Visar laddningsöverlägget över hela sidan. |
| `hideSubmitLoadingOverlay` | — | `void` | Döljer överlägget och rensar väntetillståndet. |
| `bootSubmitLoadingIfPending` | — | `void` | Visar överlägget igen vid sidinläsning om ett inskick väntar. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Sant när nästa klipps gränssnitt och media är redo. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Väntar upp till 30 s på nästa klipp och döljer sedan överlägget (felavisering vid timeout). |

## Lokalt historiklager

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `extractVodId` | — | `string` | Härleder klipp-/spel-id från video-URL:en. |
| `getGameKey` | — | `string` | Historiknyckel för spelet (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Historiknyckel för ett segment (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Validerar och rensar en historikpost. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Normaliserade poster för en nyckel. |
| `getGameHistoryEntries` | `store: object` | `Array` | Poster för aktuellt spel (stöder en äldre nyckel). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Poster för aktuellt segment. |
| `formatClipId` | `vodId: string` | `string` | Kort numeriskt visnings-id (`#0000000`), hashat från klipp-id:t. |
| `formatRelativeTime` | `timestamp: number` | `string` | Lokaliserad relativ tid (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Läser in historikobjektet från `localStorage` (`{}` vid fel). |
| `pruneHistoryStore` | `store: object` | `void` | Tillämpar gränserna per nyckel och totalt (äldsta nycklar tas bort först). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Beskär och sparar; `false` vid kvot-/lagringsfel. |
| `summarizeCurrentVerdict` | — | `string` | Förinställningsnamn för aktuellt val, eller `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Lokaliserad etikett för ett historiksammandrag. |
| `formatClockTime` | `seconds: number` | `string` | Klockformat `m:ss` (eller `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Läsbart segmentintervall. |
| `formatGameLabel` | — | `string` | Lokaliserad etikett för aktuellt spel. |
| `historyEntryKey` | `entry: object` | `string` | Identitetssträng som används för att ta bort dubbletter. |
| `formatPriorStat` | `count: number, label: string` | `string` | Raden “etikett: N” i historikpanelen. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Slår ihop klipp-/spelposter till visningsobjekt. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML för en historikrad. |
| `escapeHtml` | `value: any` | `string` | Escapar `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML för historikpanelen, inklusive knappen för granskningsregler. |
| `ensureClipHistoryPanel` | — | `void` | Skapar panelens behållare om den saknas. |
| `ensureReviewRulesDialog` | — | `void` | Skapar dialogen med granskningsregler och binder dess öppna/stäng-knappar. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Binder knappen “lokal historik” (rullar till listan eller visar en avisering när den är tom). |
| `positionClipHistoryPanel` | — | `void` | Håller panelen som första element i `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Ritar om historikpanelen för aktuellt klipp. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Lägger till sammandraget av aktuell bedömning i spelets och klippets historik. |
| `isLocalHistoryEnabled` | — | `boolean` | Läser om lokal historik är aktiverad; aktiverad som standard. |
| `readTimeFormat` | — | `string` | Läser tidsformat: automatiskt, 12 eller 24 timmar. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Formaterar den första upptäcktstiden enligt språk och tidsformat. |
| `getQueueNoticeLocale` | — | `string` | Returnerar aktivt språk för meddelandet om tom kö. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Flyttar det tidigare språkvalet till den gemensamma inställningen och synkroniserar URL:en. |
| `updateEmptyQueueTimestamp` | — | `void` | Uppdaterar den visade första upptäcktstiden. |

## Inskickningsflöde

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Sant på sidor som visar de fyra bedömningsgrupperna. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Den inbyggda skicka-knappen om den är synlig och aktiverad. |
| `recordProceedHistoryIfLabeling` | — | `void` | Registrerar historik en gång per inskick (skyddat mot återinträde). |
| `resetProceedArmed` | — | `void` | Avväpnar inskicket i två steg. |
| `refreshProceedButtonLabel` | — | `void` | Uppdaterar knappetiketten/`Enter`-tipset och stilen för klarmarkerat läge. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Avbildar ett val på `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Bygger dolda `verdict_labels[]`-fält; visar en felavisering och returnerar `false` om någon grupp saknar val. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Tillåter bara HTTPS-formuläråtgärder med samma ursprung. |
| `restoreSubmitUi` | — | `void` | Återställer knapparna efter ett misslyckat inskick. |
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Kör säkerhetskontrollen, visar överlägget och skickar formuläret. |
| `submitVerdictsDirect` | — | `boolean` | Förbereder etiketterna och skickar. |
| `invokeProceedAction` | — | `boolean` | Enter-/klickhanterare: första trycket klarmarkerar, andra trycket skickar. |
| `installProceedShortcut` | — | `void` | Lyssnare i capture-fasen för `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Avbryter det första steget i tvåstegssändningen eller klickar på den synliga knappen ”Avbryt”; returnerar false om inget kan avbrytas. |
| `refreshCancelButtonLabel` | — | `void` | Lägger till eller uppdaterar tangentmarkören på knappen ”Avbryt”. |
| `hookProceedButton` | — | `void` | Ersätter klickbeteendet för den inbyggda skicka-knappen. |
| `installVerdictChangeReset` | — | `void` | Avväpnar inskicket och synkar förinställningarna igen när en bedömning ändras. |
| `scheduleProceedFooterFix` | — | `void` | Fördröjt (`requestAnimationFrame`) anrop av `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Fördröjd omnormalisering av etiketter/rubriker/standardvärden. |

## Snabbkommandoregister och ombindning

| Åtgärd | Standard | Grupp | Funktion |
|---|---|---|---|
| `playPause` | `Space` | Playback | Pausar klippet eller återupptar uppspelningen. |
| `mute` | `M` | Playback | Stänger av eller slår på ljudet. |
| `fullscreen` | `F` | Playback | Växlar helskärmsläge. |
| `seekBack` / `seekForward` | `←` / `→` | Navigering | Hoppar 5 sekunder bakåt eller framåt. |
| `frameBack` / `frameForward` | `,` / `.` | Navigering | Går en bildruta bakåt eller framåt. |
| `speedBoost` | `Shift` | Navigation | Spelar upp snabbare så länge tangenten hålls ned (den enda åtgärden som kan använda Shift). |
| `quick1` … `quick5` | `1` … `5` | Omdömen | Klassiskt formulär: förval 1–5. Uppgift med en fråga: Cheating / Osäker / Inget fusk sett (1–3). |
| `proceed` | `Enter` | Submission | Bekräftar omdömet eller aktiverar och skickar det klassiska formuläret. |
| `cancel` | `Esc` | Submission | Trycker på ”Avbryt” eller avaktiverar det första Enter-trycket. |
| `inviteDone` | `Enter` | Invite page | Lämnar inbjudningssidan (samma som ”Klart”). |
| `inviteClose` | `Esc` | Invite page | Samma som knappen ×. |
| `settings` | `F2` | Interface | Öppnar eller stänger inställningsfönstret. |

Bindningar sparas som KeyboardEvent.code-värden under demoscopeKeybindings (endast ändringar från standard; inställningstangenten har en egen post). Vänster och höger modifierare räknas som en tangent och det numeriska tangentbordet motsvarar huvudraden. Tangenter som inte kan bindas: Tab, Ctrl, Alt, Meta, Caps Lock, ContextMenu, F5, F11, F12. Konflikter avgränsas till omfången review, invite och global; den globala inställningstangenten krockar med allt.

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Ersätter platshållare för {name} i en lokaliserad mall. |
| `isModalOpen` | — | `boolean` | Är true så länge en dialogruta är öppen; sidans snabbkommandon är då inaktiva. |
| `normalizeKeyCode` | `code: string` | `string` | Slår ihop vänster och höger modifierare till samma tangent och mappar siffror på numeriska tangentbordet och NumpadEnter till motsvarande huvudtangenter. |
| `formatKeyLabel` | `code: string` | `string` | Visningsnamn för en tangent (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Läser och validerar sparade bindningar (cachelagrade; returnerar {} vid fel). |
| `saveKeyOverrides` | `overrides: object` | `void` | Sparar bindningarna eller tar bort posten när allt använder standardvärden. |
| `getBinding` | `id: string` | `string` | Aktuell tangent för en åtgärd; tom sträng om den saknar bindning. |
| `setBinding` | `id: string, code: string` | `void` | Sparar en tangent för en åtgärd (tom kod tar bort bindningen); standardvärden sparas inte. |
| `resetAllBindings` | — | `void` | Återställer alla tangentbindningar, även inställningstangenten, till standardvärden. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Söker efter konflikt med en tangent som redan används inom det aktuella omfånget. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Avgör vilken åtgärd som hör till en tangentbordshändelse. |
| `keyScopeOf` | `id: string` | `string` | En åtgärds omfång: review, invite eller global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | Är true om två omfång kan överlappa (samma omfång eller något av dem är global). |
| `currentKeyScope` | — | `string` | invite på inbjudningssidan, annars review. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Returnerar tom sträng om tangenten kan bindas, reserved för webbläsar-/navigeringstangenter eller shift om Shift väljs för en åtgärd som inte kräver att tangenten hålls ned. |
| `quickRangeLabel` | `count: number` | `string` | Etikett för snabbomdömenas tangenter (1–5 om de är orörda, annars de bundna tangenterna). |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Skapar tangenttipsen under videon från aktuella bindningar. |
| `refreshKeyLabels` | — | `void` | Uppdaterar alla tangentetiketter på sidan: tips, märken för förval och omdömen, Fortsätt/Avbryt/inbjudan och inställningssammanfattningar. |
| `ensureDemoscopeDialogStyles` | — | `void` | Lägger till den gemensamma stilen för fönstren Snabbkommandon och Animationer. |
| `hkActionName` | `id: string` | `string` | Lokaliserat åtgärdsnamn. |
| `hkGroupName` | `group: string` | `string` | Lokaliserat gruppnamn. |
| `hkActionDescription` | `id: string` | `string` | Lokaliserad beskrivning av åtgärden (snabbomdömen beskrivs för båda uppgiftstyperna). |
| `hkSetMessage` | `text: string, warn = false` | `void` | Anger statusraden i snabbkommandofönstret. |
| `hkCancelCapture` | — | `void` | Avslutar tangentregistreringen. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Markup för en åtgärdsrad, inklusive konfliktpanelen när en konflikt väntar. |
| `renderHotkeys` | — | `void` | Ritar om hela fönstret och behåller rullningspositionen. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Binder en tangent; replace frigör den från den andra åtgärden, swap byter tangenterna med varandra. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Binder en tangent direkt eller öppnar konfliktpanelen (Ersätt / Byt / Avbryt) om den redan används. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Skapar snabbkommandofönstret och tangentbordslyssnaren i fångstfasen (Esc kan bindas och stänger inte fönstret under registrering). |
| `openHotkeysDialog` | — | `void` | Öppnar snabbkommandofönstret. |

## Animationer

Sex stilar för indikatorpunkten (pulse, breathe, ripple, heartbeat, orbit, blink), tre hastigheter (0,6× / 1× / 1,7×) och en av/på-knapp, sparade som demoscopeAnimStyle, demoscopeAnimSpeed och demoscopeAnimEnabled. Aktiv stil anges med data-ds-anim på html (off när den är avstängd); formatmallen styr punkten och förhandsvisningarna.

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Säker läsning från localStorage. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Säker skrivning till localStorage (null tar bort nyckeln). |
| `animEnabled` | — | `boolean` | Sparat på/av-läge; av som standard om systemet ber om minskad rörelse. |
| `animStyle` | — | `string` | Sparad stil (pulse som standard). |
| `animSpeedKey` | — | `string` | Sparad hastighet (slow / normal / fast; normal som standard). |
| `ensureAnimationStyles` | — | `void` | Lägger till keyframes och regler som delas av den animerade punkten och förhandsvisningspunkterna. |
| `applyAnimationSettings` | — | `void` | Använder stil, hastighet och på/av på html och uppdaterar inställningssammanfattningen. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Skapar animationsfönstret med reglage, hastighet, stilkort med förhandsvisning och återställning. |
| `openAnimationsDialog` | — | `void` | Öppnar animationsfönstret. |
| `ensureUiPolishStyles` | — | `void` | Lägger till mörka, smala rullningslister och color-scheme: dark för fönster och omdömeslistan (Chromium skulle annars visa en ljus list). |

## Uppgift med en fråga

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Är true när sidan visar formuläret med en fråga (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | Klickar på alternativknappen Cheating / Osäker / Inget fusk sett (positive / skip / negative). Om alternativet är låst spelas ett felsound upp och låskortet skakas. |
| `localizeCheatingVerdicts` | — | `void` | Skriver om de tre etiketterna på DemoScopes språk och ritar tangentmärken med CSS, så att VACNets bekräftelserad inte innehåller tangentens siffra. Förbereder även låskortet. |
| `updateCheatingLock` | — | `void` | Uppdaterar låskortet (”de två andra omdömena låses upp när klippet slutar · m:ss kvar”) och förloppsindikatorn. Döljer kortet när alternativen låses upp eller ett omdöme väljs. |
| `startCheatingLockWatcher` | — | `void` | Startar timern på 250 ms som anropar updateCheatingLock. |

## Robusthet och diagnostik

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Loggar ett misslyckat steg (med begränsad lista) för diagnostikrapporten. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Kör ett konfigurationssteg; vid fel loggas det och reservvärdet returneras så att efterföljande steg kan fortsätta. |
| `getVideoContainer` | — | `HTMLElement \| null` | Hittar videobehållaren, eller vid behov den överordnade noden till spelaren eller videoelementet. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Hittar omdömesbehållaren, eller den överordnade noden till det första omdömesblocket. |
| `getSubmitArea` | — | `HTMLElement \| null` | Hittar området för skicka/bekräfta (#submitbuttons, .submitbuttons eller den överordnade noden till skicka-knappen). |
| `hasVerdictForm` | — | `boolean` | Är true om minst en alternativknapp för omdöme finns. |
| `removeEnhancements` | — | `void` | Tar bort DemoScopes paneler, klasser och sidfotsändringar och återställer VACNets sidfot. |
| `disableDemoScope` | `reason: string` | `void` | Stänger av DemoScope på sidan: återställer ändringarna, behåller bara inställningsfönstret och visar en avisering en gång per orsak och session. |
| `isOwnNode` | `el: Element` | `boolean` | Är true för element som DemoScope skapat (utesluts ur struktur­rapporten). |
| `elementSignature` | `el: Element` | `string` | Signaturen tag#id.class[…] som används i struktur­rapporten; innehåller ingen text. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Kompakt indraget träd av taggar, ID:n och klasser (identiska syskon slås ihop som ×N). |
| `captureOriginalSkeleton` | — | `void` | Sparar sidans struktur innan DemoScope ändrar något. |
| `buildDiagnosticsReport` | — | `string` | Skapar rapporten med version, sida, språk och webbläsare, uppgiftstyp, 22 elementkontroller (ok / MISSING), misslyckade steg och strukturen före/efter DemoScope. Inget sidinnehåll eller kontodata. |
| `fallbackCopyText` | `text: string` | `boolean` | Kopierar text via ett tillfälligt textfält när Clipboard API inte är tillgängligt. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Kopierar rapporten; om det misslyckas visas texten i ett markerbart fält. |

## Layout och uppstart

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Bygger raden för val av Shift-hastighet. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML för en förinställningsknapp. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML för de utökade förinställningsgrupperna. |
| `buildEnhancementBar` | — | `HTMLElement` | Bygger snabbbedömningsraden: förinställningar, randomiserarväxel, utökad låda. |
| `positionShiftSpeedBar` | — | `void` | Håller hastighetsraden före bedömningslistan. |
| `positionEnhancementBar` | — | `void` | Håller förinställningsraden före skicka-knapparna. |
| `fixProceedFooter` | — | `void` | Ordnar om sidfoten, raderna och skicka-knappen. |
| `enhanceLayout` | — | `void` | Tillämpar alla layoutändringar och installerar inställningsgränssnittet. |
| `ensureReviewStructure` | — | `void` | Normaliserar VACNets markup: placerar omdömesblock i .verdicts-container-inner, flyttar #submitbuttons till behållaren och speglar klippräknaren i märket i sidhuvudet. Fungerar med både den gamla och den omgjorda markuppen. |
| `watchProceedFooter` | — | `void` | Observerar `.verdicts-container` och schemalägger korrigeringar av sidfoten. |
| `watchVerdictLabels` | — | `void` | Observerar bedömningsetiketterna och schemalägger omnormalisering. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Läser sidfotens synlighetsval från localStorage. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Sparar sidfotens synlighetsval. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Skapar eller uppdaterar den lokaliserade sidfoten med valfria länkar och tillämpar inställningarna. |
| `installEmptyQueueNotice` | — | `boolean` | Ersätter meddelandet om tom kö med lokaliserad vägledning, tid, språkväljare och sidfot. |
| `init` | — | `Promise<void>` | Startpunkt: kontonamnskontroll → inbjudnings- eller granskningssida → layout, observatörer, kortkommandon, spelarförbättringar. |

installWelcomePage och installInvitePage returnerar false om nödvändiga VACNet-element saknas. installEmptyQueueNotice returnerar false om sidan inte visar läget tom kö.

### Övriga element

* **blockSegmentLoopGuard** (IIFE, körs vid inläsning): ersätter webbplatsens inbyggda 100-ms-timer för segmentloopen med en tom funktion; DemoScopes egna kontroller hanterar segmentet.
* **Konstanter och tabeller:** SUPPORTED_LOCALES, FLAG_SVG, UI_TEXT_ROWS, INVITE_TEXT_ROWS, SETTINGS_TEXT_ROWS, PRESETS, PRESET_KEYS, PRESET_TONES, ADVANCED_PRESET_GROUPS, SHIFT_SPEEDS, FRAME_STEP och ARROW_JUMP_SEC (21 PRESETS-definitioner); tillagda efter v1.0.0: KEY_ACTIONS, KEY_GROUPS, KEY_ACTION_BY_ID, KEY_ACTION_SCOPE, RESERVED_KEY_CODES, CHEATING_KEYS, VERDICT_SECTION_TITLES, VERDICT_SECTION_HELP, ANIM_STYLES och ANIM_SPEEDS.
* **Modultillstånd:** diag (misslyckade steg, orsak till avstängning och sidans ursprungliga struktur), hkState (snabbkommandofönstrets tillstånd) och konstanten SCRIPT_VERSION som används i diagnostikrapporten.
* **Texter:** all synlig text finns i de lokaliserade tabellerna ovan; fönstren som tillkom i v1.2.0–v1.4.0 är översatta till alla 29 språk.

## Lagringsnycklar

| Nyckel | Lagring | Syfte |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Valt språk / automatiskt läge. |
| `demoscopeKeybindings` | `localStorage` | Snabbkommandon som avviker från standard (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Tangent som öppnar inställningarna (none om den har tagits bort). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Inställningar för indikatoranimation. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Ljudinställningar. |
| `demoscopeClipHistory` och nycklar för historikens gränser/format | `localStorage` | Lokal granskningshistorik och dess inställningar. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Väntande sändning, skydd för språksynkronisering och engångsmeddelande om avstängning. |



