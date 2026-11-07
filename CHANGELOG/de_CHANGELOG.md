<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · **Deutsch** · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>

# DemoScope v1.2.0

Selbstschutz-Release: DemoScope kommt nun mit Änderungen an VACNet-Seiten zurecht, statt mitten im Ablauf auszufallen, und informiert Nutzer sowie Entwickler über die Ursache.

Einstellungen, Einladungsseite und Verbesserungen am Bewertungstext.

Hotkeys, Animationen und eine Korrektur beim Laden.

Unterstützung für VACNets Einzelaufgabe mit einer Frage.

Kompatibilität mit der neu gestalteten VACNet-Prüfseite.

### Hinzugefügt

- **Isolierte Einrichtungsschritte.** Jeder Layout- und Installationsschritt läuft separat. Schlägt ein Schritt fehl, wird der Fehler protokolliert und die übrigen Schritte laufen weiter. Ein geändertes Seitenelement hinterlässt dadurch kein halb aufgebautes Bedienfeld mehr.
- **Ausweichsuche** für Video-, Bewertungs- und Sendecontainer. Benennt VACNet die Klasse des Videocontainers um, findet DemoScope ihn über das Player-Element, statt abzubrechen.
- **Kontrolliertes Abschalten.** Enthält die Seite das Video, aber kein Bewertungsformular (oder umgekehrt), oder schlagen mindestens fünf Einrichtungsschritte fehl, macht DemoScope eigene Änderungen rückgängig, stellt VACNets Fußzeile wieder her, lässt nur das Einstellungsfenster geöffnet und zeigt einmalig einen Hinweis. Die Seite mit leerer Warteschlange wird wie bisher erkannt und löst dies nie aus.
- **Diagnosebericht** (Einstellungen → Diagnose → Diagnose kopieren): Skriptversion, Zeitpunkt, Sprache und Browser, Seite und Aufgabentyp, Prüfungen von 22 erwarteten Elementen (`ok` / `MISSING`), protokollierte fehlgeschlagene Schritte sowie die Seitenstruktur vor und nach den Änderungen durch DemoScope. Die Struktur enthält ausschließlich Tags, IDs und Klassen, niemals Seitentext. Ist die Zwischenablage gesperrt, erscheint der Bericht in einem auswählbaren Textfeld.
- Eine kurze Wartezeit (bis zu 2 s), bevor eine noch teilweise gerenderte Seite bewertet wird.

- **Schließen-Schaltfläche auf der Einladungsseite.** Ein × in der Kartenecke führt wie „Done“ zurück zu den Clips.
- **Tastenkürzel auf der Einladungsseite:** `Enter` führt „Done“ aus und `Esc` entspricht ×. Sie werden ignoriert, wenn eine Schaltfläche, ein Link, ein Eingabefeld, Dialog oder die Sprachenliste fokussiert ist. Die Taste wird jetzt auch auf „Done“ angezeigt. Beide Kürzel lassen sich im Fenster „Hotkeys“ neu zuweisen (neue Gruppe „Invite page“).
- **Seitenspezifische Tastenkonflikte.** Die Einladungsseite hat keinen Player, daher kollidieren ihre Tasten `Enter` / `Esc` nicht mehr mit denen der Prüfseite. Die Einstellungstaste kollidiert weiterhin mit allen Aktionen.
- **Dunkle, schmale Scrollleisten** im Einstellungsfenster, in Unterfenstern und in der Bewertungsliste sowie `color-scheme: dark`. Brave, Chrome und Edge zeigten zuvor eine helle Standardschaltleiste.

- **Hotkeys-Fenster** (Einstellungen → Hotkeys). Alle 18 Tastenkürzel befinden sich in einem gemeinsamen Register und lassen sich neu zuweisen. Aktionen sind gruppiert (Wiedergabe, Navigation, Bewertungen, Absenden, Einladungsseite, Benutzeroberfläche); jede hat eine Beschreibung und eine Zurücksetzen-Schaltfläche. „Reset all“ erfordert einen bestätigenden zweiten Klick.
  - **Konfliktbehandlung.** Wird eine bereits verwendete Taste gedrückt, zeigt das Fenster die zugehörige Aktion, Gruppe und Funktion an. Möglich sind **Replace** (die andere Aktion verliert ihre Taste), **Swap** (sie erhält die bisherige Taste dieser Aktion) oder **Cancel**.
  - `Esc` kann wie jede andere Taste zugewiesen werden und schließt das Fenster während der Tastenaufnahme nicht. `Tab`, Modifikatortasten, Caps Lock, `F5`, `F11` und `F12` werden abgelehnt; `Shift` ist nur für die Halteaktion „Speed boost“ zulässig.
  - Hinweise unter dem Video, Marken an Vorlagen und Bewertungen sowie die Schaltflächen Continue/Cancel folgen den Zuweisungen.
- **`Esc` bricht** ein auf Bestätigung wartendes Urteil ab (drückt VACNets „Cancel“) und deaktiviert den ersten `Enter`-Druck der zweistufigen Übermittlung.
- **Animationsfenster** (Einstellungen → Animationen): sechs Anzeigestile (pulse, breathe, ripple, heartbeat, orbit, blink) mit Livevorschau, drei Geschwindigkeiten und Ein/Aus-Schalter. Wenn das System reduzierte Bewegung anfordert, starten Animationen ausgeschaltet.
- `Enter` und `Esc` funktionieren jetzt auch bei fokussiertem Bewertungs-Radiobutton, auf dem der Fokus nach dem Anklicken einer Bewertung verbleibt.

- **Unterstützung für die Einzelaufgabe.** VACNet stellt gelegentlich die Frage „Is the Subject cheating beyond a reasonable doubt?“ mit den Antworten Cheating / Uncertain / No cheats seen. DemoScope erkennt diesen Typ und wechselt zu einem kompakten Layout ohne Schnellbewertungen, erweiterte Kombinationen und Zufallsauswahl.
- Bewertungslabels in DemoScopes eigener Formulierung und Sprache, Tastenmarken `1`–`3` und passende Hotkeys.
- **Sperranzeige.** VACNet gibt „Uncertain“ und „No cheats seen“ erst frei, wenn der Clip endet. Eine Karte erklärt dies und zeigt die verbleibende Zeit mit Fortschrittsbalken. Gesperrte Optionen sind abgedunkelt; das Drücken ihrer Taste spielt einen Fehlerklang ab und lässt die Karte wackeln.
- Die Hinweise unter dem Video wechseln zu `Enter` und `1–3`; die Bewertungsbuttons sind höher, um das Bedienfeld auszufüllen.

- **Eigene Erklärungen von DemoScope** für die vier Bewertungskategorien in allen 29 Sprachen. VACNet verwendet bei manchen Sprachen (zum Beispiel Ukrainisch) englische Fragen; die „?“-Erklärungen hängen nun nicht mehr davon ab.

- **Hilfeschaltfläche „?“** neben AIM ASSIST, WALL HACK, AUTO BHOP und BOT. Ein Klick öffnet eine kurze Erklärung der Kategorie; sie schließt sich bei Klick außerhalb, einem zweiten Klick oder `Esc`. Die Schaltfläche erhält absichtlich keinen Tastaturfokus, damit `Enter` und `Space` ihre Bedeutung bei der Prüfung behalten.

### Geändert

- **Einstellungsfenster neu gestaltet.** Die Abschnitte sind nach Nutzungshäufigkeit sortiert: Hotkeys, Animationen, Soundeffekte, lokaler Verlauf, Fußzeile, Diagnose (in 1.2.0 hinzugefügt), Zurücksetzen. Alles ist wie in den neuen Unterfenstern linksbündig. Hotkeys und Animationen sind Eintragszeilen mit einer Zusammenfassungsmarke („Changed: 2“, „Orbit · Fast“), die sich beim Ändern aktualisiert.
- **Eine Zurücksetzung für alles.** Die Schaltfläche erhielt einen eigenen Abschnitt und setzt nun Sound, Lautstärke, Hotkeys und Animationen zurück (der Bestätigungstext nennt dies). Der Verlauf bleibt erhalten.
- Der alte Block „settings key“ wurde aus dem Fenster entfernt: Diese Taste wird jetzt wie alle anderen im Hotkeys-Fenster bearbeitet.
- **Der Bestätigungstext eines Urteils enthält keine Tastenziffer mehr.** VACNet übernimmt den Text des angeklickten Labels in die Bestätigungszeile, wodurch „2Not sure“ und „3No cheats seen“ entstand. Die Tastenmarke wird nun per CSS gezeichnet und ist kein Bestandteil des Textes.
- Option 2 der Einzelaufgabe heißt jetzt „Not sure“ (Russisch: „Не уверен(а)“) und ist wie VACNets Satz „I'm sure the subject is cheating…“ in der ersten Person formuliert.

- **Die Hervorhebung wichtiger Begriffe ist in den Bewertungsbuttons zurück.** Die abgefragte Formulierung („help with aiming“, „see through walls“ usw.) erscheint in Akzentorange und das „not“ negativer Antworten in gedämpftem Blau; beide sind fett. Ausgewählte Buttons behalten ihre Tönung und bleiben lesbar.
- `normalizeVerdictLabels` wandelte bisher jede Hervorhebung in einfachen Text um. Nun werden nur `<b>`-Hervorhebungen entfernt, sodass das Markup der Farbmarkierung erhalten bleibt.

- Portal-Kopfbereich und Anleitungskarte werden ausgeblendet, damit das frühere Erscheinungsbild erhalten bleibt. Der Clipzähler erscheint zusätzlich in der Kopfzeilenmarke, weil die Neugestaltung das Original verbirgt.
- Die Schaltfläche Continue bleibt am unteren Rand des Bedienfelds haften und sichtbar, auch wenn lange Übersetzungen die Bewertungsliste höher als das Fenster machen.

### Behoben

- **Langes Laden des nächsten Clips nach dem Absenden** bei der Einzelaufgabe. Die Bereitschaftsprüfung wartete auf das `aimassist`-Feld des klassischen Formulars, das diese Aufgabe nicht besitzt. Dadurch lief sie immer in das 30-Sekunden-Limit und zeigte eine Fehlermeldung. Nun akzeptiert sie jedes Bewertungsformular und Medienmetadaten, startet vor dem vollständigen Laden des Players und blendet die Überlagerung auf Nicht-Clip-Seiten nach 3 Sekunden still aus.
- Seitenkürzel (`Space`, `Enter`, …) wirken nicht mehr auf die Seite hinter einem geöffneten Dialog.

- Die Schaltfläche „Local history“ war übergroß (sie übernahm die Seitenschrift) und brach in vielen Sprachen in zwei Zeilen um. Sie entspricht nun den benachbarten Marken, verhindert Zeilenumbrüche, kürzt sehr lange Labels und lässt die Markenreihe umbrechen, statt sie zusammenzudrücken.

- **Bewertungstext blieb nach der Sprachauswahl in DemoScope in der Browsersprache.** VACNet wählt seine Texte anhand des Steam-Parameters `?l=`; DemoScope änderte nur eigene Labels. Die Sprachauswahl auf einer Prüfseite navigiert jetzt mit dem passenden `?l=`. Eine Seite ohne diesen Parameter (zum Beispiel der nächste Clip nach Continue) wird einmal in der ausgewählten Sprache erneut angefordert. Die tatsächlich von VACNet verwendete Sprache wird aus `l=` in den URL-Adressen der eigenen Stylesheets und Skripte gelesen; eine Einmal-Sperre verhindert Weiterleitungsschleifen, wenn VACNet die Sprache nicht anbietet.

- **`Space`, `M` und `F` schienen wirkungslos**, weil VACNet / Video.js dieselben Tasten ebenfalls verarbeiteten und ein zweites Mal umschalteten (Pause gefolgt von sofortiger Wiedergabe). DemoScope fängt diese Tasten jetzt ab, unabhängig davon, ob sie zugewiesen sind.
- In Firefox wurde beim Loslassen von `Space` zusätzlich die fokussierte Playerschaltfläche „geklickt“. Auch dieses Loslassen wird nun abgefangen.
- Playerkürzel bleiben aktiv, wenn ein Bewertungs-Radiobutton fokussiert ist.

- **Halb aufgebautes Bedienfeld nach VACNets Neugestaltung.** Die Seite erhielt einen Portal-Kopfbereich, eine Anleitungskarte und ein Raster, umschloss Bewertungsblöcke nicht mehr mit `.verdicts-container-inner` und verschob `#submitbuttons` aus dem Bewertungscontainer heraus. DemoScopes `insertBefore` schlug fehl, wodurch alle späteren Schritte übersprungen wurden. Der neue Schritt `ensureReviewStructure` normalisiert das Markup und unterstützt beide Layouts.

### Lokalisierung

- 6 neue Zeichenfolgen (Diagnoseabschnitt, Kopierergebnis und Abschalthinweis) in allen 29 Sprachen.

- 12 neue Zeichenfolgen (Zusammenfassungen, Zurücksetzen-Abschnitt, Einladungsaktionen und „Not sure“) in allen 29 Sprachen.

- Die Fenster Hotkeys und Animationen (77 Zeichenfolgen pro Sprache) sind nun in die 27 übrigen Sprachen übersetzt. Zuvor waren sie nur auf Englisch und Russisch ausgearbeitet.

- Die Fenster Hotkeys und Animationen wurden zunächst auf Englisch und Russisch erstellt; die übrigen Sprachen folgten in 1.2.0.

- 5 neue Zeichenfolgen (Labels, Titel, Erklärung und Sperrhinweis) in allen 29 Sprachen.

# DemoScope v1.0.0

Erste öffentliche Version von DemoScope, einer Userscript-Werkzeugsammlung für CS2-VACNet-Prüfseiten.

### Hinzugefügt
- Benutzeroberfläche in 29 Sprachen, automatische Sprachauswahl, fünf Schnellbewertungs-Vorlagen und 15 erweiterte Kombinationen.
- Segmentbezogene Videosteuerung, Einzelbildschritte, `Shift`-Beschleunigung, Wiedergabe/Pause mit `Space`, Stummschalten mit `M`, Vollbild mit `F` und zweistufiges Senden der Bewertung mit `Enter`.
- Konfigurierbarer lokaler Prüfverlauf, JSON-Import/-Export, HTML-Berichte und Zusammenführen mehrerer JSON-Sicherungen zu einem Bericht.
- Verbesserte Einladungsseite, Toneinstellungen, konfigurierbare Einstellungstaste, Steuerung der Kontonamensanzeige, Dialog mit Prüfregeln und optionaler Bewertungs-Zufallsgenerator (standardmäßig deaktiviert).

### Datenschutz
- Keine Telemetrie; lokale Einstellungen und der Verlauf werden nicht hochgeladen. Abgegebene Bewertungen gehen über das normale Websiteformular an VACNet.
