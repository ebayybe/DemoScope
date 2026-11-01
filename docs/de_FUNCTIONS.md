<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ko_FUNCTIONS.md) · **Deutsch** · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ja_FUNCTIONS.md)

</div>

# DemoScope — Funktionsreferenz

Vollständige Referenz der 217 Top-Level-Funktionen in `DemoScope.user.js` v1.4.0 (Name, Parameter, Rückgabewert, Aufgabe). Zurück zur [README](../README.md).

Konventionen: `—` bedeutet keine Parameter; `void` bedeutet, dass die Funktion wegen ihrer Nebenwirkungen aufgerufen wird.

## Überblick über das Nutzerverhalten

| Bereich | Beschreibung |
|---|---|
| Unterstützte Seiten | Gestaltet die VACNet-Startseite (`/vacnet`), Prüfseiten (`/vacnet/clips`), die Einladungsseite (`/vacnet/createinvite`) und den Zustand ohne Clips auf der Prüfseite neu. Andere Seiten bleiben unverändert. |
| Aufgabentypen | Erkennt, welches Prüfungsformular VACNet bereitstellt. Das **klassische Formular** (Aim Assist, Wallhack, Auto-Bhop, Bot) erhält Vorlagen und erweiterte Kombinationen. Die neuere **Aufgabe mit einer Frage** („Betrügt die Person zweifelsfrei?“) erhält stattdessen eine kompakte Ansicht: drei beschriftete Bewertungen auf `1`–`3`, eine Sperranzeige mit verbleibender Clipzeit und keine Schnellbewertungen oder Kombinationen. |
| Sprache | Unterstützt 29 Steam-Sprachen. Eine gespeicherte manuelle Auswahl hat Vorrang; andernfalls folgt das Skript dem Steam-Parameter `?l=` und danach der Browser- bzw. Seitensprache. Die Sprachauswahl in DemoScope übergibt den passenden `?l=`-Wert auch an VACNet, damit VACNet seine eigenen Texte (Bewertungsschaltflächen und Fragen) ebenfalls in dieser Sprache anzeigt. Im Automatikmodus wird der Steam-Sprachparameter mit der Browsersprache synchronisiert. |
| Start- und Einladungsseiten | Gestaltet beide Seiten neu, fügt die gemeinsame Sprachauswahl hinzu und bietet eine Augen-Schaltfläche zum Ausblenden des Kontonamens. Auf der Startseite geht es mit `Enter` oder Leertaste weiter, wenn kein interaktives Element fokussiert ist. Auf der Einladungsseite lässt sich der Einladungslink verbergen, anzeigen und kopieren; außerdem werden die Voraussetzungen erklärt. Eine ×-Schaltfläche schließt die Seite; `Enter` entspricht „Fertig“, `Esc` der ×-Schaltfläche. |
| Clip-Prüfung | Ergänzt Bewertungsvorlagen und erweiterte Kombinationen, einen standardmäßig deaktivierten Zufallsgenerator für Bewertungen, eine einstellbare Wiedergabegeschwindigkeit bei gedrückter Umschalttaste, auf den Clipabschnitt begrenztes Suchen, Einzelbildschritte und Wiedergabe-Tastenkürzel. Bewertungskategorien haben eine „?“-Schaltfläche mit lokalisierter Erklärung. Schlüsselbegriffe in den Bewertungsschaltflächen werden in den DemoScope-Farben hervorgehoben. |
| Tastenkürzel | Jedes Kürzel ist eine Aktion in einer gemeinsamen Liste und lässt sich unter **Einstellungen → Tastenkürzel** neu belegen. Konflikte werden je Seite erkannt (Einladungs- und Prüfseiten überschneiden sich nicht) und mit der bereits zugewiesenen Aktion, Gruppe und Beschreibung angezeigt. Sie können die Belegung ersetzen, tauschen oder abbrechen. Jede Aktion hat eine Zurücksetzen-Schaltfläche; Hinweise auf der Seite folgen den aktuellen Belegungen. |
| Absenden | `Enter` oder `Numpad Enter` (Standard) aktiviert „Weiter“. Im klassischen Formular schaltet der erste Tastendruck die Aktion scharf; der nächste sendet die Bewertungen ab. Bei der Aufgabe mit einer Frage zeigt VACNet nach Auswahl einer Bewertung seine eigene Bestätigung an, die mit `Enter` bestätigt wird. `Esc` (Standard) drückt „Abbrechen“, solange eine Bewertung auf Bestätigung wartet, oder hebt die erste Eingabe auf. Die Leertaste ist kein Absende-Kürzel. |
| Einstellungen | `F2` öffnet standardmäßig den Einstellungsdialog (im Tastenkürzel-Fenster änderbar). Bereiche: Tastenkürzel, Animationen, Soundeffekte und Lautstärke, lokaler Verlauf (Aktivierung, Grenzen, 12-/24-Stunden-Format, Sicherungen), Sichtbarkeit der Fußzeile, Diagnose und eine gemeinsame Zurücksetzen-Funktion für Sound, Tastenkürzel und Animationen. |
| Animationen | Der Punkt neben „DemoScope“ kann animiert werden. Ein eigenes Fenster bietet sechs Stile (Pulsieren, Atmen, Wellen, Herzschlag, Umlauf, Blinken) mit Live-Vorschau, drei Geschwindigkeiten und einem Ein-/Ausschalter. Ist „Bewegung reduzieren“ im Betriebssystem aktiviert, sind Animationen zunächst ausgeschaltet. |
| Lokaler Verlauf | Speichert Zusammenfassungen der Bewertungen im `localStorage` dieses Browsers; DemoScope lädt sie nicht hoch. Der Verlauf lässt sich deaktivieren, importieren, als JSON oder HTML exportieren, aus JSON-Sicherungen zu einem HTML-Bericht zusammenführen oder löschen. Einstellbare Grenzen: 10/20/30/50 Einträge pro Schlüssel und insgesamt 100/200/300/500 Schlüssel. Beim Deaktivieren werden keine neuen Einträge erfasst, vorhandene Daten aber nicht gelöscht. Der Verlauf wird nur für das klassische Formular aufgezeichnet. |
| Leere Warteschlange | Ersetzt VACNets Meldung über eine leere Warteschlange durch lokalisierte Hinweise, Datum und Uhrzeit der ersten Anzeige (lokal im Browser gespeichert) sowie eine Sprachauswahl. Der Hinweis auf 250 Demos pro Tag beruht auf beobachtetem VACNet-Verhalten und dient nur der Information; DemoScope setzt diese Dienstgrenze weder durch noch umgeht es sie. |
| Fußzeile | Verwendet eine lokalisierte DemoScope-Fußzeile. Auf Clip-Seiten kann sie Feedback- und Meldelinks enthalten. In den Einstellungen lassen sich einzelne Links, die Copyright-Zeile oder die gesamte Fußzeile ausblenden. |
| Fehlerbehandlung | Jeder Einrichtungsschritt läuft isoliert, damit ein Fehler die übrigen Schritte nicht stoppt. Wichtige Elemente werden mit Ausweichlösungen gesucht. Ist die Seite nicht mehr erkennbar, deaktiviert sich DemoScope auf dieser Seite, stellt VACNets Layout wieder her und zeigt einen kurzen Hinweis. Unter **Einstellungen → Diagnose** lässt sich für Fehlerberichte ein Textbericht kopieren (Skriptversion, gefundene erwartete Elemente, fehlgeschlagene Schritte und Seitenstruktur). |

Das Skript ändert weder VACNets serverseitige Einladungsvoraussetzungen und Bewertungsverarbeitung noch die Wiedergabelimits. Lokaler Verlauf, Sprache und Oberflächeneinstellungen bleiben im Browserprofil gespeichert.

## Lokalisierung

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Inline-SVG-Markup der Flagge für eine Sprache; fällt auf ein Globus-Symbol zurück. |
| `getSavedLocale` | — | `string \| null` | Liest die gespeicherte Sprache des Nutzers (`demoscopeLanguage`) aus `localStorage`. |
| `getActiveLocale` | — | `string` | Ermittelt die aktive Sprache: gespeicherte Auswahl → Steam `?l=` → Browser-/Seitensprache → `en`. |
| `getLanguageBadge` | — | `string` | Eigener Anzeigename der Sprache, z. B. „English version“, für das Abzeichen der Sprachauswahl. |
| `getBrowserLocale` | — | `string \| null` | Ermittelt die erste unterstützte Browsersprache einschließlich regionaler Varianten. |
| `syncAutomaticLanguage` | — | `boolean` | Gleicht im Automatikmodus ?l= mit der Browsersprache ab und navigiert bei Abweichung. |
| `getRenderedSteamLanguage` | — | `string \| null` | Liest die Steam-Sprache aus, in der VACNet die Seite tatsächlich gerendert hat, anhand des Parameters `l=` in den CSS- und Skript-URLs der Seite. |
| `syncSelectedLanguage` | — | `boolean` | Wenn in DemoScope manuell eine Sprache gewählt wurde, lädt die Seite einmal mit dem passenden `?l=` neu, damit VACNet seine eigenen Texte in dieser Sprache anzeigt. Wird übersprungen, wenn die gerenderte Sprache bereits stimmt; eine Schutzlogik verhindert Weiterleitungsschleifen. Gibt `true` zurück, wenn eine Navigation stattgefunden hat. |
| `tr` | `key: string` | `string` | Schlägt einen Oberflächentext für die aktive Sprache nach (Rückfall: Englisch, dann der Schlüssel selbst). |
| `inviteText` | `key: string` | `string` | Dieselbe Suche für die Texttabelle der Einladungsseite. |
| `settingText` | `key: string` | `string` | Dieselbe Suche für die Texttabelle des Einstellungsdialogs. |
| `getPresetLabel` | `name: string` | `string` | Lokalisierte Bezeichnung einer Vorlage; setzt Kombinationen wie „Bot + Aim“ zusammen. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | Markup der Sprachauswahl-Schaltflächen, einschließlich des Eintrags „auto“. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Bindet und positioniert die Sprachauswahl, speichert die Auswahl und lädt die Seite neu; ein optionaler Callback kann die Auswahl stattdessen verarbeiten. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Sucht lokalisierten Text für den Hinweis zur leeren Warteschlange oder die Fußzeile. |

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
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Erstellt und verknüpft die Einstellungen: Sounds und Lautstärke, Vorschau, Hotkey, lokaler Verlauf und Limits, Zeitformat, JSON-Import/-Export, HTML-Export/-Zusammenführung, Verlauf löschen, Fußzeilensichtbarkeit und Zurücksetzen. |
| `openSettingsDialog` | `opener = null` | `void` | Öffnet den Dialog mit den aktuellen Werten und merkt sich das Element, das den Fokus zurückerhält. |
| `installSettingsUi` | — | `void` | Installiert den globalen Tasten-Listener in der Capture-Phase (Dialog öffnen/schließen, Neubelegung) und die Sound-Ereignisse. |
| `installUiSoundEvents` | — | `void` | Delegierter Klick-Listener, der Rückmeldungstöne für DemoScope-Bedienelemente abspielt. |
| `ensureSettingsLayoutStyles` | — | `void` | Fügt die Formatierung des Einstellungsfensters ein (linksbündige Abschnitte, Zeilen mit Zusammenfassungsmarken). |
| `refreshSettingsSummaries` | — | `void` | Aktualisiert die Zusammenfassungsmarken für Tastenkürzel („Geändert: N“ / „Standard“) und Animationen („Stil · Tempo“ / „Aus“). |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Fügt oben die Bereiche Tastenkürzel und Animationen sowie unten Diagnose und Zurücksetzen hinzu. Der frühere Block für das Einstellungskürzel wird ausgeblendet, da es jetzt im Tastenkürzel-Fenster geändert wird. |

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

## Kontoname und Einladungsseite

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Ob der Steam-Kontoname aktuell ausgeblendet ist. |
| `installAccountNameControl` | — | `void` | Fügt neben dem Abmelde-Link einen Augen-Schalter hinzu und hält ihn per `MutationObserver` synchron. |
| `installInvitePage` | — | `boolean` | Gestaltet `/vacnet/createinvite` um: Kartenlayout, Anzeigen/Verbergen und Kopieren des Links (Clipboard API mit `execCommand`-Rückfall), Voraussetzungsliste, Sprachauswahl. Gibt `false` zurück, wenn erwartete Elemente fehlen. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Fügt die Schließen-Schaltfläche (×) und einen Listener in der Capture-Phase für `inviteDone` (standardmäßig `Enter`) und `inviteClose` (standardmäßig `Esc`) hinzu. Ignoriert Tasten, wenn eine Schaltfläche, ein Link, ein Eingabefeld, ein Dialog oder die Sprachauswahl fokussiert ist. |
| `refreshInviteKeyLabels` | — | `void` | Erstellt die Beschriftung „Fertig“ mit Tastenkürzel-Marke und den Tooltip für × anhand der aktuellen Belegungen neu. |
| `installWelcomePage` | — | `boolean` | Gestaltet die Willkommensseite um, ergänzt Branding und Sprachauswahl; Enter/Leertaste fährt fort; bei fehlenden Elementen false. |

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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Liefert true, wenn der Fokus in einem Eingabefeld, einer Textarea, einem Select oder einem bearbeitbaren Textbereich liegt. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Wie `isShortcutBlocked`, lässt aber Optionsfelder für Bewertungen zu, da der Fokus nach einer Auswahl auf dem Optionsfeld bleibt. |
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
| `readAdvancedPresetsOpen` | — | `boolean` | Ob die Schublade der erweiterten Vorlagen offen gelassen wurde. |
| `normalizeVerdictLabels` | `root = document` | `void` | Entfernt Hervorhebungs-Markup aus den Urteilsbezeichnungen. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Fügt lokalisierte Überschriften über jeder Urteilsgruppe hinzu. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Erstellt die Schaltfläche „?“ und das Erklärungspopup für eine Bewertungskategorie. Es verwendet DemoScopes lokalisierte Erklärung; VACNets Formulierung dient nur als Rückfall. |
| `closeVerdictHelp` | `except = null` | `void` | Schließt alle geöffneten Erklärungspopups außer dem angegebenen. |
| `installVerdictHelpHandlers` | — | `void` | Richtet einmalig delegierte Klick-, Außenklick- und `Esc`-Handler für die Popups ein. |

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
| `isLocalHistoryEnabled` | — | `boolean` | Liest, ob der lokale Verlauf aktiviert ist; Standard: aktiviert. |
| `readTimeFormat` | — | `string` | Liest das Zeitformat: automatisch, 12 oder 24 Stunden. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Formatiert den Zeitpunkt der ersten Erkennung nach Sprache und Zeitformat. |
| `getQueueNoticeLocale` | — | `string` | Liefert die aktive Sprache des Hinweises zur leeren Warteschlange. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Übernimmt die frühere Sprachauswahl in die gemeinsame Einstellung und synchronisiert die URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Aktualisiert den angezeigten Zeitpunkt der ersten Erkennung. |

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
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Führt die Sicherheitsprüfung aus, zeigt das Overlay und sendet das Formular. |
| `submitVerdictsDirect` | — | `boolean` | Bereitet die Bezeichnungen vor und sendet. |
| `invokeProceedAction` | — | `boolean` | Enter-/Klick-Handler: erster Druck schärft, zweiter sendet. |
| `installProceedShortcut` | — | `void` | Capture-Phasen-Listener für `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Hebt die erste Stufe der zweistufigen Abgabe auf oder klickt auf die sichtbare Schaltfläche „Abbrechen“; `false`, wenn nichts abgebrochen werden kann. |
| `refreshCancelButtonLabel` | — | `void` | Fügt der Schaltfläche „Abbrechen“ die Tastenkürzel-Marke hinzu oder aktualisiert sie. |
| `hookProceedButton` | — | `void` | Ersetzt das Klickverhalten der nativen Senden-Schaltfläche. |
| `installVerdictChangeReset` | — | `void` | Entschärft das Senden und synchronisiert die Vorlagen neu, wenn sich ein Urteil ändert. |
| `scheduleProceedFooterFix` | — | `void` | Entprellter (`requestAnimationFrame`) Aufruf von `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Entprellte Neu-Normalisierung von Bezeichnungen/Titeln/Standardwerten. |

## Tastenkürzel und Neubelegung

| Aktion | Standardtaste | Gruppe | Funktion |
|---|---|---|---|
| `playPause` | `Space` | Playback | Pausiert den Clip oder setzt die Wiedergabe fort. |
| `mute` | `M` | Playback | Schaltet den Ton stumm oder wieder ein. |
| `fullscreen` | `F` | Playback | Aktiviert oder beendet den Vollbildmodus. |
| `seekBack` / `seekForward` | `←` / `→` | Navigation | Springt 5 Sekunden zurück oder vor. |
| `frameBack` / `frameForward` | `,` / `.` | Navigation | Geht ein Einzelbild zurück oder vor. |
| `speedBoost` | `Shift` | Navigation | Spielt schneller ab, solange die Taste gedrückt gehalten wird (die einzige Aktion, die `Shift` verwenden darf). |
| `quick1` … `quick5` | `1` … `5` | Bewertungen | Klassisches Formular: Vorlagen 1–5. Aufgabe mit einer Frage: Cheating / Nicht sicher / Keine Cheats gesehen (`1`–`3`). |
| `proceed` | `Enter` | Submission | Bestätigt die Bewertung oder aktiviert und sendet das klassische Formular. |
| `cancel` | `Esc` | Submission | Drückt „Abbrechen“ oder hebt die erste `Enter`-Eingabe auf. |
| `inviteDone` | `Enter` | Invite page | Verlässt die Einladungsseite (entspricht „Fertig“). |
| `inviteClose` | `Esc` | Invite page | Entspricht der Schaltfläche ×. |
| `settings` | `F2` | Interface | Öffnet oder schließt das Einstellungsfenster. |

Tastenzuweisungen werden als KeyboardEvent.code-Werte unter dem Schlüssel demoscopeKeybindings gespeichert (nur Abweichungen vom Standard; die Einstellungstaste hat einen eigenen Eintrag). Linke und rechte Modifikatortasten gelten als eine Taste; der Nummernblock entspricht der Haupttastenreihe. Nicht belegbare Tasten: Tab, Ctrl, Alt, Meta, Caps Lock, ContextMenu, F5, F11, F12. Konflikte gelten innerhalb der Bereiche review, invite und global; der globale Einstellungsschlüssel kollidiert mit allen.

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Ersetzt `{name}`-Platzhalter in einer lokalisierten Vorlage. |
| `isModalOpen` | — | `boolean` | Ist `true`, solange ein `<dialog>` geöffnet ist; Seitentastenkürzel bleiben in diesem Zustand inaktiv. |
| `normalizeKeyCode` | `code: string` | `string` | Fasst linke und rechte Modifikatortasten zusammen und ordnet Ziffern des Nummernblocks sowie `NumpadEnter` den entsprechenden Haupttasten zu. |
| `formatKeyLabel` | `code: string` | `string` | Anzeigename einer Taste (`ArrowLeft` → `←`, `KeyM` → `M`, `Escape` → `Esc`). |
| `loadKeyOverrides` | — | `object` | Liest und prüft die gespeicherten Tastenzuweisungen (zwischengespeichert; bei Fehler `{}`). |
| `saveKeyOverrides` | `overrides: object` | `void` | Speichert die Tastenzuweisungen oder entfernt den Eintrag, wenn alle Standardwerte gelten. |
| `getBinding` | `id: string` | `string` | Aktuelle Taste einer Aktion; `""`, wenn keine Taste zugewiesen ist. |
| `setBinding` | `id: string, code: string` | `void` | Speichert eine Taste für eine Aktion (ein leerer Code hebt die Zuweisung auf); Standardwerte werden nicht gespeichert. |
| `resetAllBindings` | — | `void` | Setzt alle Tastenzuweisungen einschließlich der Einstellungstaste auf die Standardwerte zurück. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Sucht einen Konflikt mit einer bereits belegten Taste im jeweiligen Geltungsbereich. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Ermittelt anhand eines Tastaturereignisses die zugehörige Aktion. |
| `keyScopeOf` | `id: string` | `string` | Geltungsbereich einer Aktion: `review`, `invite` oder `global`. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | Ist `true`, wenn sich zwei Geltungsbereiche überschneiden können (gleicher Bereich oder mindestens einer ist `global`). |
| `currentKeyScope` | — | `string` | `invite` auf der Einladungsseite, sonst `review`. |
| `validateKeyForAction` | `id: string, code: string` | `string` | `""`, wenn die Taste zugewiesen werden darf, `"reserved"` für Browser-/Navigationstasten oder `"shift"`, wenn `Shift` für eine Aktion ohne Gedrückthalten gewählt wurde. |
| `quickRangeLabel` | `count: number` | `string` | Beschriftung der Tastenkürzel für Schnellbewertungen (`1–5`, wenn unverändert, andernfalls die zugewiesenen Tasten). |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Erstellt die unter dem Video angezeigten Tastaturhinweise anhand der aktuellen Belegungen. |
| `refreshKeyLabels` | — | `void` | Aktualisiert alle Tastaturhinweise auf der Seite (Hinweise, Vorlagenmarken, Bewertungsmarken, Fertig/Abbrechen/Einladung und Einstellungszusammenfassungen). |
| `ensureDemoscopeDialogStyles` | — | `void` | Fügt das gemeinsame Design der Fenster für Tastenkürzel und Animationen ein. |
| `hkActionName` | `id: string` | `string` | Lokalisierter Aktionsname. |
| `hkGroupName` | `group: string` | `string` | Lokalisierter Gruppenname. |
| `hkActionDescription` | `id: string` | `string` | Lokalisierte Beschreibung der Aktion (Schnellbewertungen für beide Aufgabentypen). |
| `hkSetMessage` | `text: string, warn = false` | `void` | Legt die Statusmeldung im Tastenkürzel-Fenster fest. |
| `hkCancelCapture` | — | `void` | Beendet den Modus zur Tastenaufnahme. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Markup einer Aktionszeile, einschließlich Konfliktbereich, falls ein Konflikt vorliegt. |
| `renderHotkeys` | — | `void` | Zeichnet das gesamte Fenster neu und behält die Scrollposition bei. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Weist eine Taste zu; `replace` hebt die Zuweisung der anderen Aktion auf, `swap` tauscht die Tasten. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Weist eine Taste direkt zu oder öffnet bei bereits belegter Taste den Konfliktbereich (Ersetzen / Tauschen / Abbrechen). |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Erstellt das Tastenkürzel-Fenster samt Listener in der Capture-Phase (`Esc` kann zugewiesen werden; während der Tastenaufnahme schließt es das Fenster nicht). |
| `openHotkeysDialog` | — | `void` | Öffnet das Tastenkürzel-Fenster. |

## Animationen

Sechs Stile für den Anzeigepunkt (pulse, breathe, ripple, heartbeat, orbit, blink), drei Geschwindigkeiten (0,6× / 1× / 1,7×) und ein Ein-/Ausschalter. Gespeichert in demoscopeAnimStyle, demoscopeAnimSpeed und demoscopeAnimEnabled. Der aktive Stil wird über data-ds-anim auf html gesetzt (off bei deaktivierter Animation); das Stylesheet steuert den Punkt und die Vorschauen.

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Liest einen Wert aus dem angegebenen Speicher und behandelt ungültige oder fehlende Werte sicher. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Schreibt einen Wert in den angegebenen Speicher und behandelt Speicherfehler sicher. |
| `animEnabled` | — | `boolean` | Gespeicherter Ein-/Aus-Status; standardmäßig aus, wenn das Betriebssystem reduzierte Bewegung vorgibt. |
| `animStyle` | — | `string` | Gespeicherter Stil (Standard: `pulse`). |
| `animSpeedKey` | — | `string` | Gespeicherte Geschwindigkeit (`slow` / `normal` / `fast`, Standard: `normal`). |
| `ensureAnimationStyles` | — | `void` | Fügt Keyframes und Regeln ein, die für den Live-Punkt und die Vorschau-Punkte gemeinsam verwendet werden. |
| `applyAnimationSettings` | — | `void` | Wendet Stil, Tempo und Ein/Aus auf `<html>` an und aktualisiert die Einstellungszusammenfassung. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Erstellt das Animationsfenster mit Schalter, Tempo, Stil-Karten samt Live-Vorschau und Zurücksetzen. |
| `openAnimationsDialog` | — | `void` | Öffnet das Animationsfenster. |
| `ensureUiPolishStyles` | — | `void` | Fügt dunkle, schmale Scrollleisten und `color-scheme: dark` für Fenster und Bewertungsliste hinzu (Chromium würde sonst eine helle Leiste anzeigen). |

## Aufgabe mit einer Frage

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Ist `true`, wenn die Seite das Formular mit einer einzelnen Frage bereitstellt (`#verdictbuttons_cheating`). |
| `selectCheatingVerdict` | `kind: string` | `void` | Klickt das Optionsfeld für Cheating / Nicht sicher / Keine Cheats gesehen (`positive` / `skip` / `negative`). Ist die Option noch gesperrt, wird ein Fehlerton abgespielt und die Sperrkarte wackelt. |
| `localizeCheatingVerdicts` | — | `void` | Übersetzt die drei Beschriftungen in DemoScopes Sprache und zeichnet Tastenkürzelmarken per CSS, damit VACNets Bestätigungszeile keine Tastenziffer enthält. Bereitet außerdem die Sperrkarte vor. |
| `updateCheatingLock` | — | `void` | Aktualisiert die Sperrkarte („die beiden anderen Bewertungen werden nach Ende des Clips freigeschaltet · m:ss verbleibend“) und ihren Fortschrittsbalken. Blendet sie aus, sobald die Optionen freigegeben oder eine Bewertung gewählt wurde. |
| `startCheatingLockWatcher` | — | `void` | Startet den 250-ms-Timer, der `updateCheatingLock` aufruft. |

## Fehlerbehandlung und Diagnose

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Protokolliert einen fehlgeschlagenen Schritt (mit begrenzter Anzahl) für den Diagnosebericht. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Führt einen Einrichtungsschritt aus; bei einem Fehler wird dieser protokolliert und der Ersatzwert zurückgegeben, damit die folgenden Schritte weiterlaufen. |
| `getVideoContainer` | — | `HTMLElement \| null` | Findet den Videobereich; falls nötig wird auf das übergeordnete Element des Players oder des `<video>`-Elements zurückgegriffen. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Findet den Bewertungsbereich; ersatzweise das übergeordnete Element des ersten Bewertungsblocks. |
| `getSubmitArea` | — | `HTMLElement \| null` | Findet den Sende-/Bestätigungsbereich (`#submitbuttons`, `.submitbuttons` oder den übergeordneten Bereich der Senden-Schaltfläche). |
| `hasVerdictForm` | — | `boolean` | Ist `true`, wenn mindestens ein Bewertungs-Optionsfeld vorhanden ist. |
| `removeEnhancements` | — | `void` | Entfernt DemoScopes Bereiche, Klassen und Änderungen an der Fußzeile und stellt VACNets Fußzeile wieder her. |
| `disableDemoScope` | `reason: string` | `void` | Schaltet DemoScope auf dieser Seite aus: Änderungen werden zurückgenommen, nur das Einstellungsfenster bleibt erhalten und einmal pro Grund und Sitzung wird ein Hinweis angezeigt. |
| `isOwnNode` | `el: Element` | `boolean` | Ist `true` für von DemoScope erstellte Elemente (sie werden im Strukturbericht ausgelassen). |
| `elementSignature` | `el: Element` | `string` | Signatur `tag#id.class[…]` für den Strukturbericht; enthält keinen Text. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Kompakter, eingerückter Baum aus Tags, IDs und Klassen (identische Geschwister werden als `×N` zusammengefasst). |
| `captureOriginalSkeleton` | — | `void` | Erfasst die Seitenstruktur, bevor DemoScope Änderungen vornimmt. |
| `buildDiagnosticsReport` | — | `string` | Erstellt den Bericht mit Version, Seite, Sprache und Browser, Aufgabentyp, 22 Elementprüfungen (`ok` / `MISSING`), fehlgeschlagenen Schritten und der Struktur vor und nach DemoScope. Enthält weder Seitentext noch Kontodaten. |
| `fallbackCopyText` | `text: string` | `boolean` | Kopiert Text über ein temporäres Textfeld, wenn die Clipboard-API nicht verfügbar ist. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Kopiert den Bericht; falls das Kopieren fehlschlägt, wird der Text in einem auswählbaren Feld angezeigt. |

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
| `ensureReviewStructure` | — | `void` | Normalisiert das VACNet-Markup: Bewertungsblöcke werden in `.verdicts-container-inner` eingeschlossen, `#submitbuttons` in den Container verschoben und der Clip-Zähler als Marke im Kopfbereich angezeigt. Funktioniert mit dem alten und dem neu gestalteten Markup. |
| `watchProceedFooter` | — | `void` | Beobachtet `.verdicts-container` und plant Footer-Korrekturen ein. |
| `watchVerdictLabels` | — | `void` | Beobachtet die Urteilsbezeichnungen und plant die Neu-Normalisierung ein. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Liest die Sichtbarkeitseinstellung der Fußzeile aus localStorage. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Speichert die Sichtbarkeitseinstellung der Fußzeile. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Erstellt oder aktualisiert die lokalisierte Fußzeile mit optionalen Links und wendet Einstellungen an. |
| `installEmptyQueueNotice` | — | `boolean` | Ersetzt den Hinweis zur leeren Warteschlange durch lokalisierte Anleitung, Zeit, Sprachauswahl und Fußzeile. |
| `init` | — | `Promise<void>` | Einstiegspunkt: Kontonamen-Steuerung → Einladungs- oder Prüfseite → Layout, Beobachter, Tastenkürzel, Player-Erweiterungen. |

`installWelcomePage` und `installInvitePage` geben `false` zurück, wenn erforderliche Elemente der VACNet-Seite fehlen. `installEmptyQueueNotice` gibt `false` zurück, wenn die Seite keine leere Warteschlange anzeigt.

### Weitere nicht aufgeführte Elemente

* **blockSegmentLoopGuard** (IIFE, läuft beim Laden): ersetzt den nativen 100-ms-Timer der Website für die Segmentbegrenzung durch eine leere Funktion; DemoScopes eigene Steuerung übernimmt das Segment.
* **Konstanten und Tabellen:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 Definitionen); seit v1.0.0 hinzugekommen: `KEY_ACTIONS`, `KEY_GROUPS`, `KEY_ACTION_BY_ID`, `KEY_ACTION_SCOPE`, `RESERVED_KEY_CODES`, `CHEATING_KEYS`, `VERDICT_SECTION_TITLES`, `VERDICT_SECTION_HELP`, `ANIM_STYLES`, `ANIM_SPEEDS`.
* **Modulstatus:** `diag` (fehlgeschlagene Schritte, Grund für die Deaktivierung und ursprüngliche Seitenstruktur), `hkState` (Status des Tastenkürzel-Fensters) sowie die im Diagnosebericht verwendete Konstante `SCRIPT_VERSION`.
* **Texte:** Alle sichtbaren Texte stehen in den oben genannten lokalisierten Tabellen; die Fenster aus v1.2.0–v1.4.0 sind in alle 29 Sprachen übersetzt.

## Speicherschlüssel

| Schlüssel | Speicherort | Zweck |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Ausgewählte Sprache / Automatikmodus. |
| `demoscopeKeybindings` | `localStorage` | Vom Standard abweichende Tastenkürzel (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Taste zum Öffnen des Einstellungsdialogs (`none`, wenn die Taste entfernt wurde). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Einstellungen für die Punktanimation. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Soundeinstellungen. |
| `demoscopeClipHistory` und Schlüssel für Verlaufsgrenzen/-format | `localStorage` | Lokaler Prüfverlauf und seine Einstellungen. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Ladezustand beim Absenden, Schutz für die Sprachsynchronisierung und einmaliger Hinweis zur Deaktivierung. |


