<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · **Deutsch** · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**Das tastaturorientierte Prüfwerkzeug für CS2 VACNet.**<br>
Urteilsvoreinstellungen · Player mit clipgenauer Navigation · frei belegbare Tasten · private lokale Historie · 29 Sprachen.

<br>

[![Version](https://img.shields.io/badge/version-1.4.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![Lizenz](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#installation)
[![Sprachen](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#sprachen)
[![Datenschutz](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#datenschutz)

<br>

[**⬇ DemoScope installieren**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[Funktionen](#funktionen) · [Installation](#installation) · [Tastenkürzel](#tastenkürzel) · [Anpassung](#anpassung) · [Dokumentation](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · [Änderungsprotokoll](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md)

</div>

<br>

## Screenshots

<table>
  <tr>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="DemoScope-Willkommensbildschirm"></a><br><sub><b>Willkommensbildschirm</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="DemoScope-Hauptoberfläche"></a><br><sub><b>Hauptoberfläche</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="DemoScope-Einladungsseite"></a><br><sub><b>Freund einladen</b></sub></td>
  </tr>
</table>

## Überblick

DemoScope erweitert die Counter-Strike-VACNet-Prüfseiten (`counter-strike.net/vacnet`). Statt bei jedem kurzen Clip durch das Urteilsformular zu klicken, bedienst du alles über die Tastatur: Urteilspresets, eine auf den geprüften Abschnitt begrenzte Suchleiste, Einzelbildschritte, eine vorübergehende Geschwindigkeitssteigerung, zweistufiges Absenden und eine private Historie deiner eigenen Urteile. Das Skript unterstützt beide derzeit von VACNet verwendeten Formulare (das klassische mit vier Fragen und die neue Aufgabe mit nur einer Frage) und schützt sich vor Änderungen an der Seite. Alles läuft lokal im Browser.

## Funktionen

| | |
|---|---|
| **Prüfablauf** | 5 schnelle Urteilspresets auf `1`–`5` und 15 erweiterte Kombinationen, optionaler Urteilszufall (standardmäßig aus) und sicheres Absenden in zwei Schritten: `Enter` aktiviert die Schaltfläche, ein zweites `Enter` sendet ab. `Esc` bricht ab. |
| **Beide Aufgabentypen** | Erkennt das klassische Formular (Zielhilfe, Wallhack, Auto-Bhop, Bot) und die Aufgabe mit einer Frage („Is the Subject cheating beyond a reasonable doubt?“). Letztere erhält ein kompaktes Layout mit beschrifteten Urteilen auf `1`–`3` und einer Sperranzeige bis zum Ende des Clips. |
| **Clipgenauer Player** | Suchleiste und Zeitanzeige sind auf Anfang und Ende des Clips begrenzt, Sprünge um ±5 s, Einzelbildschritte von 1/64 s, Geschwindigkeitsboost bei gedrücktem `Shift` (0,5×–4×), Stummschaltung und Vollbild per Tastenkürzel. |
| **Anpassbare Tastenkürzel** | Weise alle 18 Aktionen in einem eigenen Fenster neu zu. Vor dem Ersetzen einer Taste wird der Konflikt erklärt (Aktion, Gruppe und Funktion); alle Tastenhinweise auf der Seite folgen deinen Belegungen. |
| **Animationen** | Eigenes Fenster mit Live-Vorschau, sechs Anzeigestilen, drei Geschwindigkeiten und Ein/Aus-Schalter. Die Systemeinstellung „Bewegung reduzieren“ wird standardmäßig berücksichtigt. |
| **Verständliche Urteile** | Ein „?“-Symbol neben jeder Urteilskategorie erklärt sie. Schlüsselbegriffe werden hervorgehoben, damit ein „not“ nicht übersehen wird. |
| **Private lokale Historie** | Verlauf pro Clip und Spiel in `localStorage`, JSON-Import und -Export, HTML-Berichte und Zusammenführen mehrerer Sicherungen zu einem Bericht. |
| **Einladungsseite** | Überarbeitete Seite `/vacnet/createinvite` mit Ein-/Ausblenden, Kopieren mit einem Klick, Anforderungsübersicht, Schließen-Schaltfläche und `Enter` / `Esc`-Tastenkürzeln. |
| **29 Sprachen** | Verwendet zuerst deine Auswahl, dann Steams Einstellung `?l=` und zuletzt die Browsersprache. Eine Sprachauswahl in DemoScope ändert auch VACNets eigenen Text. |
| **Soundeffekte** | Synthetische Web-Audio-Signale mit Lautstärke, Vorschau und Ein/Aus-Schalter. |
| **Für Redesigns gewappnet** | Einrichtungsschritte sind voneinander isoliert, wichtige Elemente haben alternative Suchwege und bei einer nicht mehr erkennbaren Seite schaltet sich DemoScope ab, ohne VACNet anzutasten. Ein Klick kopiert einen Diagnosebericht für Fehlermeldungen. |

## Installation

1. Installiere einen Userscript-Manager wie [Tampermonkey](https://www.tampermonkey.net/) oder [Violentmonkey](https://violentmonkey.github.io/). Das Skript verwendet `GM_addStyle` und `unsafeWindow`.
2. [**DemoScope installieren**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) und die Installation im Manager bestätigen.
3. Melde dich bei Steam an und öffne [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/).
4. Öffne einen Prüfclip. DemoScope wird automatisch geladen (die Seite `/vacnet/join` ist ausgenommen).

Updates kommen über deinen Userscript-Manager. DemoScope funktioniert in Chromium-basierten Browsern und Firefox.

## Tastenkürzel

Auf Prüfseiten funktionieren Tastenkürzel, sofern kein bearbeitbares Feld oder ein anderes interaktives Steuerelement fokussiert ist. **Alle folgenden Tasten lassen sich ändern** unter **Settings → Hotkeys**.

| Taste | Aktion |
|---|---|
| `1` … `5` | Klassisches Formular: Preset anwenden (1 Bot + Zielhilfe + Wallhack; 2 Zielhilfe + Wallhack; 3 Rage; 4 sauberer Spieler; 5 unsicher). |
| `1` `2` `3` | Aufgabe mit einer Frage: Cheating / Not sure / No cheats seen. |
| `Enter` | Bestätigen. Im klassischen Formular: einmal drücken, um die Schaltfläche scharfzuschalten, erneut drücken, um abzusenden. |
| `Esc` | Urteil mit ausstehender Bestätigung abbrechen oder das erste `Enter` entschärfen. |
| `Shift` (halten) | Geschwindigkeitsboost (0,5×–4×; Standard 2×, auf der Seite einstellbar). |
| `←` `→` | 5 Sekunden zurück / vor springen. |
| `,` `.` | Ein Einzelbild (1/64 s) zurück / vor. |
| `Space` | Wiedergabe / Pause. |
| `M` / `F` | Stummschalten / Vollbild (Doppelklick auf das Video schaltet ebenfalls Vollbild um). |
| `F2` | Einstellungsfenster öffnen. |
| `Enter` / `Esc` *(Einladungsseite)* | Fertig / schließen. |

## Anpassung

Öffne die Einstellungen mit `F2`. Die Bereiche sind von häufig bis selten genutzt angeordnet:

- **Hotkeys**: eigenes Fenster mit allen Aktionen, nach Zweck gruppiert, mit Zurücksetzen pro Aktion, „Reset all“ und Konfliktbehandlung über **Replace**, **Swap** oder **Cancel**. `Esc` kann wie jede andere Taste belegt werden.
- **Animations**: Stil (pulse, breathe, ripple, heartbeat, orbit, blink) und Geschwindigkeit auswählen oder Animationen ausschalten. Jede Karte zeigt eine Live-Vorschau.
- **Sound effects**: Ein/Aus, Lautstärke (auch über das Mausrad) und Testschaltfläche.
- **Local history**: aktivieren/deaktivieren, Limits (10/20/30/50 Einträge pro Schlüssel, 100/200/300/500 Schlüssel), 12/24-Stunden-Zeitformat, JSON-Sicherungen und HTML-Berichte.
- **Footer**: Feedback-Link, Berichtslink, Copyright-Zeile oder die gesamte Fußzeile ausblenden.
- **Diagnostics**: Bericht für eine Fehlermeldung kopieren (siehe [Problem melden](#problem-melden)).
- **Reset**: Eine Schaltfläche setzt Sound, Tastenkürzel und Animationen zurück. Deine Historie bleibt erhalten.

## Sprachen

DemoScope unterstützt 29 Sprachen: Bulgarisch, Chinesisch (vereinfacht und traditionell), Tschechisch, Dänisch, Niederländisch, Englisch, Finnisch, Französisch, Deutsch, Griechisch, Ungarisch, Indonesisch, Italienisch, Japanisch, Koreanisch, Norwegisch, Polnisch, Portugiesisch (Portugal und Brasilien), Rumänisch, Russisch, Spanisch (Spanien und Lateinamerika), Schwedisch, Thai, Türkisch, Ukrainisch und Vietnamesisch. Die Sprache lässt sich jederzeit über die Auswahl auf der Seite ändern.

## Problem melden

Valve ändert VACNet-Seiten unangekündigt. Wenn etwas nicht mehr funktioniert:

1. Drücke `F2`, öffne **Diagnostics** und klicke auf **Copy diagnostics**.
2. Füge den Text in ein neues [Issue](https://github.com/ebayybe/DemoScope/issues) ein und hänge nach Möglichkeit einen Screenshot an.

Der Bericht enthält Skriptversion, Zeitpunkt, Browsersprache und User-Agent, gefundene Seitenelemente, fehlgeschlagene Einrichtungsschritte sowie die Seitenstruktur (nur Tags, IDs und Klassen). Er enthält weder Seitentext noch Kontonamen oder Historie. Wenn die Seite nicht mehr erkannt wird, schaltet DemoScope sich dort ab und meldet dies; VACNet funktioniert normal weiter.

## Häufige Fragen

<details>
<summary><b>DemoScope meldet, dass es auf dieser Seite deaktiviert wurde. Was ist passiert?</b></summary>

Die VACNet-Seite entspricht nicht mehr der erwarteten Struktur. Das Skript hat sich zurückgezogen, statt eine halb aufgebaute Oberfläche zu hinterlassen. Kopiere die Diagnose (siehe oben) und erstelle ein Issue; ein Update folgt normalerweise schnell.
</details>

<details>
<summary><b>Der VACNet-Urteiltext ist in einer anderen Sprache als DemoScope.</b></summary>

Bei einer Sprachauswahl in DemoScope wird VACNet über Steams Parameter `?l=` in dieser Sprache angefordert. Falls VACNet keine Übersetzung dafür hat, verwendet es seine Standardsprache; die eigenen Beschriftungen von DemoScope bleiben in deiner gewählten Sprache.
</details>

<details>
<summary><b>Wählt DemoScope die Urteile für mich aus?</b></summary>

Nein. Presets klicken nur die von dir ausgewählten Urteilsbuttons, und du bestätigst das Absenden immer selbst. Prüfe jeden Clip persönlich und halte dich an die Regeln des Programms.
</details>

<details>
<summary><b>Wird die Historie für die Aufgabe mit einer Frage gespeichert?</b></summary>

Noch nicht. Die lokale Historie wird derzeit nur für das klassische Formular mit vier Fragen erfasst.
</details>

<details>
<summary><b>Wie stelle ich die Standardtasten wieder her?</b></summary>

Nutze das Reset-Symbol neben einer geänderten Taste, **Reset all** im Hotkeys-Fenster oder **Reset** in den Einstellungen. Letzteres setzt auch Sound und Animationen zurück.
</details>

## Architektur

DemoScope besteht aus einer einzigen selbstaufrufenden Funktion (`@run-at document-start`, `@noframes`). `init()` ermittelt den Seitentyp, prüft, ob die Seite erkennbar ist, und verbindet die folgenden Module. Die vollständige Referenz aller 217 Funktionen der obersten Ebene einschließlich Parametern, Rückgabewerten und Speicherschlüsseln steht in [de_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md).

<details>
<summary><b>Modulübersicht</b></summary>

| Modul | Aufgabe | Wichtige Funktionen |
|---|---|---|
| `Localization` | UI-Sprache, Textsuche, Flaggen, Sprachauswahl und Abgleich von VACNets `?l=` | `getActiveLocale`, `tr`, `settingText`, `syncSelectedLanguage`, `installLanguageSelector` |
| `Segment & player` | Liest Clipgrenzen, kapselt Video.js/HTML5-Wiedergabe und deaktiviert die native Segment-Schleife | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Suchleiste, Tastenhinweise, Geschwindigkeitsboost, Einzelbildschritte, Tastenkürzel | `installCustomControls`, `installPlayerEnhancements` |
| `Hotkeys` | Aktionsregister, Belegungen, Konflikterkennung und Hotkeys-Fenster | `getBinding`, `findKeyConflict`, `getActionForEvent`, `ensureHotkeysDialog` |
| `Verdict presets` | Preset-Tabelle, Auswahlstatus, zufällige Anwendung | `applyPreset`, `detectActivePreset`, `buildEnhancementBar` |
| `Single-question task` | Beschriftungen, Sperranzeige und Tasten für das neue Formular | `isCheatingMode`, `selectCheatingVerdict`, `updateCheatingLock` |
| `Submit flow` | Zweistufige Bestätigung, Abbruch, `verdict_labels[]`, Same-Origin-Prüfung, Ladeoverlay | `invokeProceedAction`, `invokeCancelAction`, `submitVerdictForm`, `finishSubmitLoadingWhenReady` |
| `Local history` | Verlauf pro Clip und Spiel, Sicherungen und Berichte | `appendReviewHistory`, `importLocalHistory`, `exportCombinedHistoryReports` |
| `Settings & animations` | Einstellungsfenster und Unterfenster, Sound, Indikatoranimationen | `ensureSettingsDialog`, `installExtraSettingsSections`, `ensureAnimationsDialog`, `playUiSound` |
| `Invite page` | Überarbeitete Seite, Schließen-Schaltfläche, Tastenkürzel | `installInvitePage`, `installInviteExtras` |
| `Resilience` | Isolierte Schritte, alternative Suche, Abschaltung, Diagnose | `safeStep`, `disableDemoScope`, `buildDiagnosticsReport` |
| `Bootstrap` | Einstiegspunkt | `init`, `enhanceLayout` |

</details>

## Datenschutz

DemoScope sendet keine Telemetrie und lädt weder Einstellungen noch Historie hoch. Beim Absenden eines Urteils erhält VACNet dieses über das normale Websiteformular. Einstellungen und Historie bleiben im Browser: in `localStorage` (Schlüssel mit dem Präfix `demoscope`) und `sessionStorage`. Mit **Settings → Local history → Clear history** kannst du die Historie löschen. Der Diagnosebericht wird nur in die Zwischenablage kopiert; du entscheidest, ob du ihn weitergibst.

## Haftungsausschluss

DemoScope ist ein inoffizielles Community-Projekt und weder mit Valve Corporation verbunden noch von Valve unterstützt. Es entscheidet niemals für dich. Prüfe jeden Clip selbst und halte dich an die Regeln des Prüfprogramms. Nutzung auf eigene Gefahr.

## Lizenz

Veröffentlicht unter der [MIT](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)-Lizenz.


