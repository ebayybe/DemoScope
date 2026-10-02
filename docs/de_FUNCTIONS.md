<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · **Deutsch** · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Funktionsreferenz

Vollständige Referenz der 128 Top-Level-Funktionen in `DemoScope.user.js` v1.0.0 (Name, Parameter, Rückgabewert, Aufgabe). Zurück zur [README](../../README/de_README.md).

Konventionen: `—` bedeutet keine Parameter; `void` bedeutet, dass die Funktion wegen ihrer Nebenwirkungen aufgerufen wird.

## Lokalisierung

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Inline-SVG-Markup der Flagge für eine Sprache; fällt auf ein Globus-Symbol zurück. |
| `getSavedLocale` | — | `string \| null` | Liest die gespeicherte Sprache des Nutzers (`demoscopeLanguage`) aus `localStorage`. |
| `getActiveLocale` | — | `string` | Ermittelt die aktive Sprache: gespeicherte Auswahl → Steam `?l=` → Browser-/Seitensprache → `en`. |
| `getLanguageBadge` | — | `string` | Eigener Anzeigename der Sprache, z. B. „English version“, für das Abzeichen der Sprachauswahl. |
| `tr` | `key: string` | `string` | Schlägt einen Oberflächentext für die aktive Sprache nach (Rückfall: Englisch, dann der Schlüssel selbst). |
| `inviteText` | `key: string` | `string` | Dieselbe Suche für die Texttabelle der Einladungsseite. |
| `settingText` | `key: string` | `string` | Dieselbe Suche für die Texttabelle des Einstellungsdialogs. |
| `getPresetLabel` | `name: string` | `string` | Lokalisierte Bezeichnung einer Vorlage; setzt Kombinationen wie „Bot + Aim“ zusammen. |
| `buildLanguageOptions` | — | `string (HTML)` | Markup der Sprachauswahl-Schaltflächen, einschließlich des Eintrags „auto“. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Bindet die Popover-Sprachauswahl, positioniert sie, speichert die Wahl und lädt die Seite neu. |

## Soundeffekte und Einstellungsdialog

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Zeile „N Einträge · letzter Eintrag: …“ im Einstellungsdialog. |
| `soundsEnabled` | — | `boolean` | Ob UI-Sounds aktiviert sind (`demoscopeSoundEffectsEnabled`, standardmäßig an). |
| `getSoundVolume` | — | `number (0–1)` | Gespeicherte Lautstärke (`demoscopeSoundEffectsVolume`, Standard 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Synthetisiert mit Web Audio eine kurze Tonfolge (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); wirft nie einen Fehler. |
| `readSettingsHotkey` | — | `string` | Gespeicherter `KeyboardEvent.code`, der den Einstellungsdialog öffnet (Standard `F2`). |
| `formatHotkey` | `code: string` | `string` | Lesbarer Tastenname (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Extrahiert einen physischen Tastencode und bildet nicht-lateinische Layouts auf `KeyX` ab; `""`, wenn unbrauchbar. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Wahr für Tasten, die DemoScope oder der Player bereits nutzen (Enter, Leertaste, Pfeile, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Erstellt (einmalig) und verdrahtet den Einstellungsdialog: Sound, Lautstärke, Tastenkürzel-Aufnahme, Verlaufsgrenzen, Export/Import/Bericht/Zusammenführen/Löschen, Zurücksetzen. |
| `openSettingsDialog` | `opener = null` | `void` | Öffnet den Dialog mit den aktuellen Werten und merkt sich das Element, das den Fokus zurückerhält. |
| `installSettingsUi` | — | `void` | Installiert den globalen Tasten-Listener in der Capture-Phase (Dialog öffnen/schließen, Neubelegung) und die Sound-Ereignisse. |
| `installUiSoundEvents` | — | `void` | Delegierter Klick-Listener, der Rückmeldungstöne für DemoScope-Bedienelemente abspielt. |

## Sicherungen, Berichte und Verlaufsgrenzen

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Lädt den gesamten Verlauf als `demoscope-history-YYYY-MM-DD.json` herunter. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Löst einen Datei-Download über eine temporäre Blob-URL aus. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Glättet und dedupliziert Verlaufseinträge, neueste zuerst. |
| `exportReadableHistory` | — | `void` | Lädt einen eigenständigen, lokalisierten HTML-Bericht des Verlaufs herunter. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Erzeugt das maskierte HTML-Markup des Berichts. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Aktualisiert die Statuszeile des Zusammenführungs-Werkzeugs (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Prüft viele JSON-Sicherungen (je ≤ 5 MB, insgesamt ≤ 100 MB), dedupliziert Einträge und lädt einen kombinierten HTML-Bericht herunter. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Whitelist-Prüfung für Verlaufsschlüssel (blockiert `__proto__`, `constructor` und fehlerhafte Schlüssel). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Prüft eine JSON-Sicherung, führt sie unter Beachtung der Grenzen mit dem lokalen Verlauf zusammen und aktualisiert die Oberfläche. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Liest ein numerisches Limit aus `localStorage` und akzeptiert nur erlaubte Werte. |
| `getHistoryPerKeyLimit` | — | `number` | Pro Clip-/Spielschlüssel behaltene Einträge (10/20/30/50, Standard 30). |
| `getHistoryTotalLimit` | — | `number` | Gesamtzahl der behaltenen Clip-/Spielschlüssel (100/200/300/500, Standard 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | Ob die Schublade der erweiterten Vorlagen offen gelassen wurde. |

## Kontoname und Einladungsseite

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Ob der Steam-Kontoname aktuell ausgeblendet ist. |
| `installAccountNameControl` | — | `void` | Fügt neben dem Abmelde-Link einen Augen-Schalter hinzu und hält ihn per `MutationObserver` synchron. |
| `installInvitePage` | — | `boolean` | Gestaltet `/vacnet/createinvite` um: Kartenlayout, Anzeigen/Verbergen und Kopieren des Links (Clipboard API mit `execCommand`-Rückfall), Voraussetzungsliste, Sprachauswahl. Gibt `false` zurück, wenn erwartete Elemente fehlen. |

## Clip-Segment und Player-Adapter

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Extrahiert `startTime`/`endTime` aus den Inline-Skripten der Seite. |
| `formatSegmentTime` | `seconds: number` | `string` | Formatiert Sekunden als `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Findet das `<video>`-Element der Prüfung. |
| `getVjsPlayer` | — | `Video.js player \| null` | Gibt den Video.js-Player der Seite zurück, falls vorhanden und nicht verworfen. |
| `createPlayerAdapter` | — | `adapter \| null` | Einheitliche API über Video.js / HTML5-Video: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Fragt alle 100 ms ab, bis ein Player existiert; lehnt bei Zeitüberschreitung ab. |
| `clampSegment` | `time: number, bounds: object` | `number` | Begrenzt einen Zeitpunkt auf die Clip-Grenzen. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Relative Position innerhalb des Clips. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Fügt Suchleiste, Zeitanzeige und Tastenhinweise unter dem Video hinzu. |
| `pauseLayoutMutations` | `run: Function` | `void` | Führt einen Callback aus, während Layout-Beobachter ausgesetzt sind (verhindert Rückkopplungsschleifen). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Wahr, wenn der Fokus in einem Eingabefeld, Textfeld, einer Auswahlliste, Schaltfläche, einem Link oder bearbeitbaren Element liegt. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Bezeichnung einer Geschwindigkeitsoption. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | `<option>`-Liste für die Geschwindigkeitsauswahl (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Gespeicherte Shift-Geschwindigkeit (Standard 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Gespeicherter Zustand des Urteils-Zufallsmodus (Standard aus). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Verdrahtet Wiedergabegeschwindigkeit, Segmentbegrenzung/-pause, Hilfen für Suchen/Einzelbild/Stummschalten/Vollbild und die globalen Tastenkürzel (`1`–`5`, Pfeile, `,` `.`, Leertaste, `M`, `F`, Shift). Interne Closures: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, Hilfen der Zeichenschleife. |

## Urteilsvorlagen

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Wählt „skip“ in jeder Urteilsgruppe ohne Auswahl. |
| `getSelectedVerdictState` | — | `object` | Aktueller Wert (`positive` / `negative` / `skip` / `null`) von `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Name der Vorlage, die zur aktuellen Auswahl passt. |
| `syncPresetButtons` | — | `string \| null` | Aktualisiert `aria-pressed` an den Vorlagen-Schaltflächen und das Abzeichen der erweiterten Vorlage. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Klickt die Radio-Eingaben einer Vorlage; bei aktivem Zufallsmodus wird die Reihenfolge gemischt und zwischen den Klicks 200–600 ms gewartet. Deaktiviert die Vorlagen-Schaltflächen während der Ausführung. |
| `normalizeVerdictLabels` | `root = document` | `void` | Entfernt Hervorhebungs-Markup aus den Urteilsbezeichnungen. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Fügt lokalisierte Überschriften über jeder Urteilsgruppe hinzu. |

## Hinweise, Footer und Ladezustand beim Senden

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Blendet den Footer der Website aus. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Zeigt einen nicht blockierenden ARIA-live-Hinweis an. |
| `markSubmitPending` | — | `void` | Speichert den Sendezeitpunkt und die aktuelle Clip-ID in `sessionStorage`. |
| `isSubmitPending` | — | `boolean` | Ob ein Senden auf den nächsten Clip wartet. |
| `clearSubmitPending` | — | `void` | Löscht die Markierungen für ein ausstehendes Senden. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Zeigt das ganzseitige Lade-Overlay an. |
| `hideSubmitLoadingOverlay` | — | `void` | Blendet das Overlay aus und löscht den Wartezustand. |
| `bootSubmitLoadingIfPending` | — | `void` | Zeigt das Overlay beim Laden der Seite erneut, wenn ein Senden aussteht. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Wahr, wenn Oberfläche und Medien des nächsten Clips bereit sind. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Wartet bis zu 30 s auf den nächsten Clip und blendet dann das Overlay aus (Fehlerhinweis bei Zeitüberschreitung). |

## Lokaler Verlaufsspeicher

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `extractVodId` | — | `string` | Leitet die Clip-/Spiel-ID aus der Video-URL ab. |
| `getGameKey` | — | `string` | Verlaufsschlüssel für das Spiel (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Verlaufsschlüssel für ein Segment (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Prüft und bereinigt einen Verlaufseintrag. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Normalisierte Einträge zu einem Schlüssel. |
| `getGameHistoryEntries` | `store: object` | `Array` | Einträge des aktuellen Spiels (unterstützt einen alten Schlüssel). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Einträge des aktuellen Segments. |
| `formatClipId` | `vodId: string` | `string` | Kurze numerische Anzeige-ID (`#0000000`), per Hash aus der Clip-ID gebildet. |
| `formatRelativeTime` | `timestamp: number` | `string` | Lokalisierte relative Zeit (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Lädt das Verlaufsobjekt aus `localStorage` (`{}` bei Fehler). |
| `pruneHistoryStore` | `store: object` | `void` | Wendet Schlüssel- und Gesamtgrenzen an (älteste Schlüssel fallen zuerst weg). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Kürzt und speichert; `false` bei Kontingent-/Speicherfehlern. |
| `summarizeCurrentVerdict` | — | `string` | Vorlagenname der aktuellen Auswahl oder `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Lokalisierte Bezeichnung für eine Verlaufszusammenfassung. |
| `formatClockTime` | `seconds: number` | `string` | Uhrzeitformat `m:ss` (oder `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Lesbarer Segmentbereich. |
| `formatGameLabel` | — | `string` | Lokalisierte Bezeichnung des aktuellen Spiels. |
| `historyEntryKey` | `entry: object` | `string` | Identitätszeichenfolge für die Deduplizierung. |
| `formatPriorStat` | `count: number, label: string` | `string` | Zeile „Bezeichnung: N“ im Verlaufspanel. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Führt Clip-/Spieleinträge zu Anzeigeelementen zusammen. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | Markup einer Verlaufszeile. |
| `escapeHtml` | `value: any` | `string` | Maskiert `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | Markup des Verlaufspanels, einschließlich der Schaltfläche für die Prüfregeln. |
| `ensureClipHistoryPanel` | — | `void` | Erstellt den Panel-Container, falls er fehlt. |
| `ensureReviewRulesDialog` | — | `void` | Erstellt den Dialog mit den Prüfregeln und bindet dessen Öffnen/Schließen-Schaltflächen. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Bindet die Schaltfläche „Lokaler Verlauf“ (scrollt zur Liste oder zeigt bei leerem Verlauf einen Hinweis). |
| `positionClipHistoryPanel` | — | `void` | Hält das Panel als erstes Element in `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Rendert das Verlaufspanel für den aktuellen Clip neu. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Hängt die Zusammenfassung des aktuellen Urteils an den Spiel- und Clip-Verlauf an. |

## Sendeablauf

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Wahr auf Seiten, die die vier Urteilsgruppen zeigen. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Die native Senden-Schaltfläche, falls sichtbar und aktiviert. |
| `recordProceedHistoryIfLabeling` | — | `void` | Zeichnet den Verlauf einmal pro Senden auf (gegen Wiedereintritt geschützt). |
| `resetProceedArmed` | — | `void` | Entschärft das zweistufige Senden. |
| `refreshProceedButtonLabel` | — | `void` | Aktualisiert Schaltflächenbeschriftung/`Enter`-Hinweis und das Styling im geschärften Zustand. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Bildet eine Auswahl auf `guilty_*` / `innocent_*` / `skip_*` ab. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Baut versteckte `verdict_labels[]`-Eingaben; zeigt einen Fehlerhinweis und gibt `false` zurück, wenn eine Gruppe nicht gewählt ist. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Erlaubt nur HTTPS-Formularziele mit gleichem Ursprung. |
| `restoreSubmitUi` | — | `void` | Stellt die Schaltflächen nach einem fehlgeschlagenen Senden wieder her. |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Führt die Sicherheitsprüfung aus, zeigt das Overlay und sendet das Formular. |
| `submitVerdictsDirect` | — | `boolean` | Bereitet die Bezeichnungen vor und sendet. |
| `invokeProceedAction` | — | `boolean` | Enter-/Klick-Handler: erster Druck schärft, zweiter sendet. |
| `installProceedShortcut` | — | `void` | Capture-Phasen-Listener für `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Ersetzt das Klickverhalten der nativen Senden-Schaltfläche. |
| `installVerdictChangeReset` | — | `void` | Entschärft das Senden und synchronisiert die Vorlagen neu, wenn sich ein Urteil ändert. |
| `scheduleProceedFooterFix` | — | `void` | Entprellter (`requestAnimationFrame`) Aufruf von `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Entprellte Neu-Normalisierung von Bezeichnungen/Titeln/Standardwerten. |

## Layout und Start

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Baut die Auswahlleiste für die Shift-Geschwindigkeit. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | Markup einer Vorlagen-Schaltfläche. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | Markup der erweiterten Vorlagengruppen. |
| `buildEnhancementBar` | — | `HTMLElement` | Baut die Schnellurteil-Leiste: Vorlagen, Zufallsschalter, erweiterte Schublade. |
| `positionShiftSpeedBar` | — | `void` | Hält die Geschwindigkeitsleiste vor der Urteilsliste. |
| `positionEnhancementBar` | — | `void` | Hält die Vorlagenleiste vor den Senden-Schaltflächen. |
| `fixProceedFooter` | — | `void` | Ordnet Footer, Leisten und die Senden-Schaltfläche neu an. |
| `enhanceLayout` | — | `void` | Wendet alle Layoutänderungen an und installiert die Einstellungsoberfläche. |
| `watchProceedFooter` | — | `void` | Beobachtet `.verdicts-container` und plant Footer-Korrekturen ein. |
| `watchVerdictLabels` | — | `void` | Beobachtet die Urteilsbezeichnungen und plant die Neu-Normalisierung ein. |
| `init` | — | `Promise<void>` | Einstiegspunkt: Kontonamen-Steuerung → Einladungs- oder Prüfseite → Layout, Beobachter, Tastenkürzel, Player-Erweiterungen. |

### Oben nicht aufgeführt

* **`blockSegmentLoopGuard`** (IIFE, läuft beim Laden): umhüllt `setInterval` auf der Seite, sodass der native 100-ms-Segmentschleifen-Timer der Website durch eine leere Funktion ersetzt wird; das Segment steuern stattdessen die eigenen Bedienelemente von DemoScope.
* **Konstanten und Tabellen:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 Definitionen).
