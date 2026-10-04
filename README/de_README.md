<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · **Deutsch** · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Tastaturorientiertes Userscript-Toolkit für CS2-VACNet-Prüfer: Urteilsvorlagen, ein segmentbewusster Videoplayer, Verbesserungen der Einladungsseite, Soundeffekte und ein privater lokaler Verlauf — in 29 Sprachen.**

</div>

## Überblick

DemoScope erweitert die Prüfseiten von Counter-Strike VACNet (`counter-strike.net/vacnet`). Statt für jeden kurzen Clip vier Urteilsgruppen (Aim Assist, Wallhack, Auto-Bhop, Bot) anzuklicken, erhalten Sie einen tastaturzentrierten Ablauf: vordefinierte Urteile, eine auf das geprüfte Segment begrenzte Suchleiste, Einzelbildschritte, vorübergehende Beschleunigung, eine zweistufige Sendebestätigung und einen privaten Verlauf Ihrer eigenen Urteile. Alles läuft lokal in Ihrem Browser.

## Hauptfunktionen

- **Urteilsvorlagen** – 5 Schnellvorlagen auf den Tasten `1`–`5` plus 15 erweiterte Kombinationen (Aim, Wallhack, Bhop, Bot und deren Mischungen, auch „unsicher“-Varianten).
- **Segmentbewusster Player** – Suchleiste, Zeitanzeige, ±5-s-Sprünge und 1/64-s-Bildschritte, begrenzt auf Anfang und Ende des Clips.
- **Beschleunigen durch Halten** – `Shift` gedrückt halten, um mit einstellbarer Geschwindigkeit abzuspielen (0,5×–4×, Standard 2×).
- **Sicheres zweistufiges Senden** – `Enter` schärft die Schaltfläche, ein zweites `Enter` sendet die Urteile; Formularziele mit anderem Ursprung werden blockiert.
- **Oberfläche in 29 Sprachen** – folgt dem Steam-Parameter `?l=`, Ihrer gespeicherten Auswahl oder der Browsersprache, mit Sprachauswahl auf der Seite.
- **Lokaler Prüfverlauf** – Verlauf pro Clip und pro Spiel in `localStorage`; JSON-Export/-Import, HTML-Bericht und Zusammenführen vieler Sicherungen zu einem Bericht.
- **Verbesserte Einladungsseite** – neu gestaltete `/vacnet/createinvite` mit Anzeigen/Verbergen und Ein-Klick-Kopieren des Einladungslinks sowie einer Zusammenfassung der Voraussetzungen.
- **Soundeffekte** – synthetisierte Web-Audio-Töne mit Ein/Aus, Lautstärke und Vorhören.
- **Einstellungsdialog** – öffnet mit `F2` (änderbar): Sounds, Tastenkürzel, Verlaufsgrenzen, Sicherungen, Zurücksetzen auf Standardwerte.
- **Komfortfunktionen** – Lade-Overlay nach dem Senden, Hinweismeldungen, Umschalter zum Ausblenden des Kontonamens, Dialog mit Prüfregeln und ein optionaler Urteils-Zufallsmodus (standardmäßig aus).

## Installation

1. Installieren Sie einen Userscript-Manager wie [Tampermonkey](https://www.tampermonkey.net/) oder [Violentmonkey](https://violentmonkey.github.io/) (das Skript nutzt `GM_addStyle` und `unsafeWindow`).
2. [DemoScope installieren](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) und die Installation im Manager bestätigen.
3. Bei Steam anmelden und <https://www.counter-strike.net/vacnet/> öffnen.
4. Einen Prüf-Clip öffnen — DemoScope lädt automatisch (die Seite `/vacnet/join` ist ausgenommen).

## Verwendung

Tastenkürzel funktionieren auf Prüfseiten, solange der Fokus nicht in einem Eingabefeld, einer Schaltfläche, einem Link oder einer Auswahlliste liegt.

| Taste | Aktion |
|---|---|
| `1` … `5` | Urteilsvorlage anwenden: 1 Bot + Aim + Wallhack, 2 Aim + Wallhack, 3 Rage, 4 sauberer Spieler, 5 unsicher |
| `Shift` (hold) | Gedrückt halten zum Beschleunigen (0,5×–4×, Standard 2×, auf der Seite wählbar) |
| `←` `→` | 5 Sekunden zurück / vor springen |
| `,` `.` | Ein Bild (1/64 s) zurück / vor |
| `Space` | Wiedergabe / Pause |
| `M` / `F` | Stummschalten / Vollbild (Doppelklick auf das Video schaltet ebenfalls Vollbild um) |
| `Enter` ×2 | Einmal drücken, um die Senden-Schaltfläche zu schärfen, erneut drücken, um die Urteile zu senden |
| `F2` | Einstellungsdialog öffnen (änderbar) |

## Architektur und Funktionsübersicht

DemoScope ist eine einzelne selbstaufrufende Funktion (`@run-at document-start`, `@noframes`). `init()` wählt zwischen Einladungs- und Prüfseite und verbindet die folgenden Module. Die vollständige Referenz aller 143 dokumentierte Funktionen — Name, Aufgabe, Parameter und Rückgabewert — finden Sie in [de_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md).

| Modul | Aufgabe | Wichtige Funktionen |
|---|---|---|
| `Localization` | Bestimmt die Oberflächensprache, schlägt Texte nach, zeichnet Flaggen und die Sprachauswahl | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Liest Anfang/Ende des Clips aus der Seite, kapselt die Video.js-/HTML5-Wiedergabe, deaktiviert den nativen Segmentschleifen-Timer der Seite | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Eigene Suchleiste, Tastenhinweise, Shift-Beschleunigung, Bildschritte, Tastenkürzel | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Vorlagentabelle, Auswahlzustand, Anwenden von Vorlagen mit optional zufälliger Reihenfolge und Verzögerungen | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Zweistufiges Enter, erzeugt `verdict_labels[]`, Same-Origin-Prüfung, Lade-Overlay | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Speichert, kürzt und zeigt den Verlauf pro Clip und pro Spiel in `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | JSON-Export/-Import, HTML-Bericht, zusammengeführter Bericht aus vielen Sicherungen | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Einstellungsdialog, änderbares Tastenkürzel, Web-Audio-Signaltöne | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | Neu gestaltete `/vacnet/createinvite`: Einladungslink anzeigen/verbergen und kopieren, Voraussetzungen | `installInvitePage` |
| `Layout & UI helpers` | Hinweismeldungen, Footer ausblenden, Layout-Beobachter, Kontonamen-Umschalter | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Einstiegspunkt: erkennt den Seitentyp und startet die Module | `init` |

## Lokale Daten und Datenschutz

DemoScope sendet keine Telemetrie. Einstellungen und Verlauf bleiben im `localStorage` Ihres Browsers (Schlüssel mit dem Präfix `demoscope`) und im `sessionStorage`. Zum Löschen des Verlaufs nutzen Sie die Option zum Löschen im Einstellungsdialog.

## Haftungsausschluss

DemoScope ist ein inoffizielles Community-Projekt und weder mit der Valve Corporation verbunden noch von ihr unterstützt. Es trifft nie ein Urteil für Sie — prüfen Sie jeden Clip selbst und befolgen Sie die Regeln des Prüfprogramms. Die Nutzung erfolgt auf eigenes Risiko.

## License

Veröffentlicht unter der [MIT](../LICENSE)-Lizenz.