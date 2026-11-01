<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · **Polski** · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>
# DemoScope v1.4.0

Wydanie zwiększające odporność: DemoScope obsługuje teraz zmiany na stronie VACNet zamiast przerywać działanie w połowie i informuje użytkownika oraz programistę o przyczynie.

### Dodano
- **Niezależne kroki konfiguracji.** Każdy krok układu i instalacji działa osobno. Błąd jest zapisywany, a pozostałe kroki są kontynuowane.
- **Zapasowe wyszukiwanie** kontenera wideo, kontenera werdyktu i obszaru wysyłania. Jeśli VACNet zmieni nazwę klasy kontenera, DemoScope odnajduje go przez element odtwarzacza.
- **Bezpieczne wyłączenie.** Gdy brakuje wideo lub formularza werdyktu albo nie powiedzie się co najmniej pięć kroków konfiguracji, DemoScope cofa własne zmiany, przywraca stopkę VACNet, pozostawia tylko okno ustawień i wyświetla jednorazowe powiadomienie. Strona pustej kolejki nadal jest rozpoznawana i nie uruchamia tej funkcji.
- **Raport diagnostyczny** (Settings → Diagnostics → Copy diagnostics): wersja, czas, język i przeglądarka, typ strony i zadania, 22 kontrole elementów (`ok` / `MISSING`), błędy kroków oraz struktura strony przed zmianami i po nich. Struktura zawiera wyłącznie tagi, identyfikatory i klasy, bez tekstu strony. Jeśli schowek jest zablokowany, raport pojawia się w polu umożliwiającym zaznaczenie.
- Oczekiwanie do 2 s przed oceną częściowo załadowanej strony.

### Lokalizacja
- 6 nowych ciągów dotyczących diagnostyki, wyniku kopiowania i powiadomienia o wyłączeniu we wszystkich 29 językach.

# DemoScope v1.3.0

Ulepszenia ustawień, strony zaproszenia i tekstów werdyktów.

### Dodano
- **Przycisk zamknięcia strony zaproszenia.** Symbol × w rogu karty wraca do klipów tak jak „Done”.
- **Skróty strony zaproszenia:** `Enter` wykonuje „Done”, a `Esc` zamyka stronę. Są ignorowane, gdy fokus ma przycisk, odnośnik, pole, okno dialogowe lub lista języków. Można je zmienić w Hotkeys, grupa „Invite page”.
- **Konflikty klawiszy zależne od strony.** Strona zaproszenia nie ma odtwarzacza, więc `Enter` / `Esc` nie kolidują tam z tymi samymi klawiszami strony przeglądu. Klawisz ustawień nadal działa globalnie.
- **Ciemne, cienkie paski przewijania** w ustawieniach, oknach podrzędnych i na liście werdyktów oraz ciemny color-scheme.

### Zmieniono
- **Przeprojektowane okno ustawień.** Sekcje są uporządkowane według częstotliwości użycia: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (dodano w v1.4.0), Reset. Hotkeys i Animations pokazują aktualizowane podsumowania.
- **Jedno resetowanie wszystkiego.** Przywraca dźwięk, głośność, skróty i animacje; historia pozostaje zachowana.
- Klawisz ustawień można teraz zmienić w oknie Hotkeys.
- **Usunięto numer klawisza z tekstu potwierdzenia werdyktu.** Zapobiega to tekstom „2Not sure” i „3No cheats seen”; znaczek jest rysowany przez CSS.
- Opcja 2 zadania z jednym pytaniem to teraz „Not sure”, w pierwszej osobie, zgodnie z tekstem VACNet.

### Lokalizacja
- 12 nowych ciągów dotyczących podsumowań, resetowania, strony zaproszenia i „Not sure” we wszystkich 29 językach.

Ustawienie CSS: `color-scheme: dark`.

Przycisk „Done” pokazuje również przypisany klawisz.

# DemoScope v1.2.1

### Lokalizacja
- Okna Hotkeys i Animations (po 77 ciągów na język) są teraz przetłumaczone na pozostałe 27 języków; wcześniej dostępne były tylko po angielsku i rosyjsku.

# DemoScope v1.2.0

Skróty klawiszowe, animacje i poprawka ładowania.

### Dodano
- **Okno Hotkeys** (Settings → Hotkeys): wszystkie 18 skrótów można zmieniać; są pogrupowane według działań, mają opisy i przyciski resetowania. „Reset all” wymaga drugiego potwierdzenia.
  - **Obsługa konfliktów.** Dla zajętego klawisza widać działanie, grupę i opis; można wybrać Replace, Swap lub Cancel.
  - `Esc` można przypisać i nie zamyka okna podczas przechwytywania klawisza. `Tab`, klawisze modyfikujące, Caps Lock, `F5`, `F11` i `F12` są odrzucane; `Shift` jest dozwolony tylko dla przytrzymywanej akcji „Speed boost”.
  - Podpowiedzi pod wideo, znaczniki i przyciski Continue/Cancel uwzględniają przypisane skróty.
- `Esc` anuluje werdykt oczekujący na potwierdzenie oraz pierwsze `Enter` w dwuetapowym wysyłaniu.
- **Okno Animations** (Settings → Animations): sześć stylów, podgląd na żywo, trzy prędkości i przełącznik. Przy systemowym ograniczeniu ruchu animacje są domyślnie wyłączone.
- `Enter` i `Esc` działają również wtedy, gdy fokus ma przycisk radiowy werdyktu.

### Naprawiono
- **Długie „loading next clip”** po wysłaniu zadania z jednym pytaniem: kontrola nie czeka już na nieistniejące pole `aimassist`, akceptuje formularz werdyktu i metadane multimediów, zaczyna wcześniej i po 3 sekundach po cichu zamyka nakładkę na stronie bez klipu.
- Skróty strony (`Space`, `Enter` itd.) nie działają już na stronie za otwartym oknem dialogowym.

### Lokalizacja
- Hotkeys i Animations początkowo były dostępne po angielsku i rosyjsku; pozostałe tłumaczenia dodano w v1.2.1.

Sześć stylów to: pulse, breathe, ripple, heartbeat, orbit i blink.

# DemoScope v1.1.0

Obsługa zadania VACNet z jednym pytaniem.

### Dodano
- **Zadanie z jednym pytaniem.** VACNet może zapytać „Is the Subject cheating beyond a reasonable doubt?” i podać odpowiedzi Cheating / Uncertain / No cheats seen. DemoScope rozpoznaje zadanie i przełącza się na kompaktowy układ bez szybkich werdyktów, rozszerzonych kombinacji i losowania.
- Etykiety werdyktów w języku DemoScope, znaczniki klawiszy `1–3` i odpowiadające im skróty.
- **Wskaźnik blokady.** Uncertain i No cheats seen odblokowują się po zakończeniu klipu. Karta pokazuje pozostały czas i pasek postępu; zablokowane opcje są przygaszone, a naciśnięcie ich klawisza odtwarza dźwięk błędu i potrząsa kartą.
- Podpowiedzi pod wideo pokazują teraz `Enter` i `1–3`; przyciski werdyktów są wyższe.

### Lokalizacja
- 5 nowych ciągów (etykiety, tytuł, wyjaśnienie, komunikat blokady) we wszystkich 29 językach.

# DemoScope v1.0.6

### Dodano
- **Własne objaśnienia DemoScope** dla czterech kategorii werdyktów we wszystkich 29 językach. Okna „?” nie zależą już od angielskiego tekstu VACNet, który pojawia się w niektórych językach, np. ukraińskim.

# DemoScope v1.0.5

### Dodano
- **Przycisk pomocy „?”** przy AIM ASSIST, WALL HACK, AUTO BHOP i BOT otwiera objaśnienie. Zamyka się po kliknięciu poza nim, ponownym kliknięciu lub naciśnięciu `Esc`. Nie otrzymuje fokusu klawiatury, więc `Enter` i `Space` zachowują funkcje przeglądu.

### Naprawiono
- Przycisk Local history ma teraz rozmiar sąsiednich znaczników, nie zawija tekstu, skraca długie etykiety, a wiersz znaczników zawija się zamiast kurczyć.

# DemoScope v1.0.4

### Naprawiono
- **Tekst werdyktów pozostawał w języku przeglądarki** po zmianie języka w DemoScope. VACNet używa parametru Steam `?l=`, a DemoScope zmieniał wcześniej tylko własne etykiety. Strona przeglądu otwiera się teraz z wybranym `?l=`; stronę bez parametru ładuje ponownie raz. Faktyczny język VACNet jest odczytywany z `l=` w adresach URL CSS i skryptów; limit jednej próby zapobiega pętli przekierowań, gdy język nie jest obsługiwany.

# DemoScope v1.0.3

### Zmieniono
- **Przywrócono wyróżnianie kluczowych fraz** w przyciskach werdyktów: szukana fraza jest pogrubiona i pomarańczowa, a „not” w odpowiedziach przeczących ma stonowany niebieski kolor. Wybrane przyciski pozostają czytelne.
- `normalizeVerdictLabels` usuwa teraz tylko znacznik b, dzięki czemu wyróżnienie pozostaje.

Element HTML: `<b>`.

# DemoScope v1.0.2

### Naprawiono
- **`Space`, `M` i `F` wyglądały na niedziałające**, ponieważ VACNet / Video.js obsługiwały ten sam klawisz drugi raz. DemoScope teraz przechwytuje te klawisze.
- W Firefoxie zwolnienie `Space` nie aktywuje już przycisku odtwarzacza z fokusem.
- Skróty odtwarzacza działają również przy fokusie na przycisku radiowym werdyktu.

# DemoScope v1.0.1

Zgodność z przeprojektowaną stroną przeglądu VACNet.

### Naprawiono
- **Panel tworzył się tylko częściowo** po zmianach VACNet: nowy nagłówek, karta instrukcji, układ siatki, brak verdicts-container-inner i przeniesienie submitbuttons powodowały błąd `insertBefore`. Krok `ensureReviewStructure` normalizuje strukturę dla starego i nowego układu.

### Zmieniono
- Ukryto nagłówek portalu i kartę instrukcji; licznik klipów jest również widoczny w znaczniku nagłówka.
- Przycisk Continue jest przyklejony u dołu panelu i pozostaje widoczny przy długich tłumaczeniach.

Selektory techniczne: `.verdicts-container-inner`, `#submitbuttons`.

# DemoScope v1.0.0

Pierwsze publiczne wydanie userscriptu DemoScope dla stron weryfikacji CS2 VACNet.

### Dodano
- Interfejs w 29 językach, automatyczny wybór języka, pięć szybkich werdyktów i 15 rozszerzonych kombinacji.
- Sterowanie wideo segmentami, krok klatka po klatce, przyspieszenie `Shift`, odtwarzanie/pauza `Space`, wyciszenie `M`, pełny ekran `F` i dwuetapowe wysyłanie werdyktu `Enter`.
- Konfigurowalna lokalna historia, import/eksport JSON, raporty HTML i łączenie kopii zapasowych JSON.
- Ulepszona strona zaproszenia, ustawienia dźwięku, skrót ustawień, ukrywanie nazwy konta, okno zasad przeglądu i opcjonalne losowanie werdyktów (domyślnie wyłączone).

### Prywatność
- Brak telemetrii; ustawienia i historia pozostają lokalne. Wysłane werdykty trafiają do VACNet przez standardowy formularz strony.






