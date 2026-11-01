<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · **Polski** · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**Narzędzie do obsługi recenzji CS2 VACNet stworzone z myślą o klawiaturze.**<br>
Presety werdyktów · odtwarzacz uwzględniający granice klipu · konfigurowalne klawisze · prywatna historia lokalna · 29 języków.

<br>

[![Wersja](https://img.shields.io/badge/version-1.4.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![Licencja](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#instalacja)
[![Języki](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#języki)
[![Prywatność](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#prywatność)

<br>

[**⬇ Zainstaluj DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[Funkcje](#funkcje) · [Instalacja](#instalacja) · [Skróty klawiszowe](#skróty-klawiszowe) · [Personalizacja](#personalizacja) · [Dokumentacja](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Historia zmian](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md)

</div>

<br>

## Zrzuty ekranu

<table>
  <tr>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="Ekran powitalny DemoScope"></a><br><sub><b>Ekran powitalny</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="Główny interfejs DemoScope"></a><br><sub><b>Główny interfejs</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="Strona zaproszenia DemoScope"></a><br><sub><b>Zaproś znajomego</b></sub></td>
  </tr>
</table>

## Omówienie

DemoScope ulepsza strony recenzji Counter-Strike VACNet (`counter-strike.net/vacnet`). Zamiast klikać formularz werdyktu przy każdym krótkim klipie, możesz obsługiwać wszystko z klawiatury: presety werdyktów, pasek przewijania ograniczony do sprawdzanego segmentu, krokowe przewijanie klatek, tymczasowe przyspieszenie, dwuetapowe wysyłanie i prywatna historia własnych werdyktów. Obsługuje oba formularze VACNet dostępne obecnie (klasyczny z czterema pytaniami i nowy z jednym pytaniem) oraz chroni się przed zmianami strony wprowadzanymi przez Valve. Wszystko działa lokalnie w przeglądarce.

## Funkcje

| | |
|---|---|
| **Przebieg recenzji** | 5 szybkich presetów werdyktów pod klawiszami `1`–`5` i 15 rozszerzonych kombinacji, opcjonalny losowy wybór werdyktu (domyślnie wyłączony) oraz bezpieczne wysyłanie w dwóch krokach: `Enter` uzbraja przycisk, drugie `Enter` wysyła. `Esc` anuluje. |
| **Oba typy zadań** | Wykrywa klasyczny formularz (wspomaganie celowania, wallhack, auto-bhop, bot) oraz zadanie z jednym pytaniem („Is the Subject cheating beyond a reasonable doubt?”). To drugie używa kompaktowego układu z opisanymi werdyktami pod `1`–`3` i wskaźnikiem blokady do końca klipu. |
| **Odtwarzacz uwzględniający klip** | Pasek i czas ograniczone do początku i końca klipu, skoki ±5 s, krok klatki 1/64 s, przyspieszenie po przytrzymaniu `Shift` (0,5×–4×), skróty wyciszenia i pełnego ekranu. |
| **Skróty pod Twoją kontrolą** | Zmień przypisanie dowolnej z 18 czynności w osobnym oknie. Przed zastąpieniem klawisza wyjaśniany jest konflikt (czynność, grupa, działanie), a podpowiedzi na stronie uwzględniają Twoje przypisania. |
| **Animacje** | Okno z podglądem na żywo, sześcioma stylami wskaźnika, trzema prędkościami i przełącznikiem. Domyślnie respektuje systemowe ustawienie ograniczenia animacji. |
| **Zrozumiałe werdykty** | Znak „?” obok każdej kategorii wyjaśnia jej znaczenie; kluczowe wyrażenia są wyróżniane, aby nie przeoczyć „not”. |
| **Prywatna historia lokalna** | Historia dla klipów i meczów w `localStorage`, import i eksport JSON, raporty HTML oraz łączenie wielu kopii zapasowych w jeden raport. |
| **Strona zaproszenia** | Przeprojektowana strona `/vacnet/createinvite` z pokazywaniem/ukrywaniem, kopiowaniem jednym kliknięciem, podsumowaniem wymagań, przyciskiem zamknięcia oraz skrótami `Enter` / `Esc`. |
| **29 języków** | Najpierw używa wybranego języka, potem ustawienia Steam `?l=`, a na końcu języka przeglądarki. Wybór języka w DemoScope zmienia również tekst VACNet. |
| **Efekty dźwiękowe** | Syntetyczne sygnały Web Audio z regulacją głośności, podglądem i przełącznikiem. |
| **Odporność na redesigny** | Etapy konfiguracji są odizolowane, kluczowe elementy mają zapasowe metody wyszukiwania, a gdy strona staje się nierozpoznawalna, DemoScope wyłącza się bez ingerowania w VACNet. Raport diagnostyczny można skopiować jednym kliknięciem, aby zgłosić błąd. |

## Instalacja

1. Zainstaluj menedżer userscriptów, np. [Tampermonkey](https://www.tampermonkey.net/) lub [Violentmonkey](https://violentmonkey.github.io/). Skrypt korzysta z `GM_addStyle` i `unsafeWindow`.
2. [**Zainstaluj DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) i potwierdź instalację w menedżerze.
3. Zaloguj się do Steam i otwórz [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/).
4. Otwórz klip do recenzji. DemoScope załaduje się automatycznie (strona `/vacnet/join` jest wykluczona).

Aktualizacje są dostarczane przez menedżer userscriptów. DemoScope działa w przeglądarkach opartych na Chromium i w Firefoksie.

## Skróty klawiszowe

Skróty działają na stronach recenzji, gdy fokus nie znajduje się w edytowalnym polu ani innym interaktywnym elemencie. **Każdy z poniższych klawiszy można zmienić** w **Settings → Hotkeys**.

| Klawisz | Działanie |
|---|---|
| `1` … `5` | Formularz klasyczny: zastosuj preset (1 bot + wspomaganie celowania + wallhack; 2 celowanie + wallhack; 3 rage; 4 czysty gracz; 5 niepewny). |
| `1` `2` `3` | Zadanie z jednym pytaniem: Cheating / Not sure / No cheats seen. |
| `Enter` | Potwierdź. W formularzu klasycznym: naciśnij raz, aby uzbroić przycisk, drugi raz, aby wysłać. |
| `Esc` | Anuluj werdykt oczekujący na potwierdzenie lub rozbrój pierwsze `Enter`. |
| `Shift` (przytrzymaj) | Przyspieszenie (0,5×–4×; domyślnie 2×, można wybrać na stronie). |
| `←` `→` | Przeskocz 5 sekund wstecz / naprzód. |
| `,` `.` | Przejdź o jedną klatkę wstecz / naprzód (1/64 s). |
| `Space` | Odtwarzanie / pauza. |
| `M` / `F` | Wyciszenie / pełny ekran (dwuklik wideo również przełącza pełny ekran). |
| `F2` | Otwórz okno ustawień. |
| `Enter` / `Esc` *(strona zaproszenia)* | Gotowe / zamknij. |

## Personalizacja

Otwórz ustawienia klawiszem `F2`. Sekcje są uporządkowane od najczęściej używanych:

- **Hotkeys**: osobne okno ze wszystkimi czynnościami pogrupowanymi według celu, resetowaniem pojedynczej czynności, „Reset all” i obsługą konfliktów przez **Replace**, **Swap** lub **Cancel**. `Esc` można przypisać jak każdy inny klawisz.
- **Animations**: wybierz styl (pulse, breathe, ripple, heartbeat, orbit, blink), szybkość lub wyłącz animacje. Każda karta pokazuje podgląd na żywo.
- **Sound effects**: włącz/wyłącz, ustaw głośność (regulowaną również kółkiem myszy) i użyj przycisku testu.
- **Local history**: włącz/wyłącz, limity (10/20/30/50 wpisów na klucz, 100/200/300/500 kluczy), format 12/24-godzinny, kopie JSON i raporty HTML.
- **Footer**: ukryj link do opinii, link do raportu, wiersz praw autorskich lub całą stopkę.
- **Diagnostics**: skopiuj raport do zgłoszenia błędu (zobacz [Zgłaszanie problemu](#zgłaszanie-problemu)).
- **Reset**: jeden przycisk przywraca domyślne dźwięki, skróty i animacje. Historia zostaje zachowana.

## Języki

DemoScope obsługuje 29 języków: bułgarski, chiński (uproszczony i tradycyjny), czeski, duński, niderlandzki, angielski, fiński, francuski, niemiecki, grecki, węgierski, indonezyjski, włoski, japoński, koreański, norweski, polski, portugalski (Portugalia i Brazylia), rumuński, rosyjski, hiszpański (Hiszpania i Ameryka Łacińska), szwedzki, tajski, turecki, ukraiński i wietnamski. Język możesz zmienić w dowolnym momencie za pomocą selektora na stronie.

## Zgłaszanie problemu

Valve może zmieniać strony VACNet bez uprzedzenia. Jeśli coś przestanie działać:

1. Naciśnij `F2`, otwórz **Diagnostics** i kliknij **Copy diagnostics**.
2. Wklej tekst do nowego [issue](https://github.com/ebayybe/DemoScope/issues), najlepiej razem ze zrzutem ekranu.

Raport zawiera wersję skryptu, czas, język i user-agent przeglądarki, znalezione elementy strony, nieudane kroki konfiguracji oraz strukturę strony (tylko tagi, ID i klasy). Nie zawiera tekstu strony, nazwy konta ani historii. Jeśli strona nie jest już rozpoznawana, DemoScope wyłącza się na niej i informuje o tym; VACNet nadal działa normalnie.

## Często zadawane pytania

<details>
<summary><b>DemoScope informuje, że został wyłączony na tej stronie. Co się stało?</b></summary>

Strona VACNet nie pasuje już do oczekiwanej struktury, więc skrypt wycofał się zamiast pozostawiać niedokończony interfejs. Skopiuj diagnostykę (zobacz wyżej) i otwórz issue; aktualizacja zwykle pojawia się szybko.
</details>

<details>
<summary><b>Tekst werdyktu VACNet jest w innym języku niż DemoScope.</b></summary>

Wybór języka w DemoScope prosi VACNet o tekst w tym języku za pomocą parametru Steam `?l=`. Jeśli VACNet nie ma tłumaczenia, używa swojego języka domyślnego, a etykiety DemoScope pozostają w wybranym przez Ciebie języku.
</details>

<details>
<summary><b>Czy DemoScope wybiera werdykty za mnie?</b></summary>

Nie. Presety tylko klikają wybrane przez Ciebie przyciski werdyktów, a wysyłanie zawsze potwierdzasz samodzielnie. Sprawdzaj każdy klip i przestrzegaj zasad programu.
</details>

<details>
<summary><b>Czy historia jest zapisywana dla zadania z jednym pytaniem?</b></summary>

Jeszcze nie. Obecnie historia lokalna jest zapisywana tylko dla klasycznego formularza z czterema pytaniami.
</details>

<details>
<summary><b>Jak przywrócić domyślne klawisze?</b></summary>

Użyj ikony resetowania obok zmienionego klawisza, opcji **Reset all** w oknie Hotkeys albo **Reset** w ustawieniach. Ta ostatnia resetuje również dźwięki i animacje.
</details>

## Architektura

DemoScope to pojedyncza samowywołująca się funkcja (`@run-at document-start`, `@noframes`). `init()` ustala typ strony, sprawdza, czy da się ją rozpoznać, i uruchamia poniższe moduły. Pełna dokumentacja wszystkich 217 funkcji najwyższego poziomu, wraz z parametrami, wartościami zwracanymi i kluczami przechowywania, znajduje się w [en_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md).

<details>
<summary><b>Przegląd modułów</b></summary>

| Moduł | Odpowiedzialność | Główne funkcje |
|---|---|---|
| `Localization` | Język interfejsu, wyszukiwanie tekstów, flagi, selektor języka, synchronizacja VACNet `?l=` | `getActiveLocale`, `tr`, `settingText`, `syncSelectedLanguage`, `installLanguageSelector` |
| `Segment & player` | Odczytuje granice klipu, obsługuje Video.js/HTML5, wyłącza natywną pętlę segmentu | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Pasek przewijania, podpowiedzi klawiszy, przyspieszenie, krok klatek, skróty | `installCustomControls`, `installPlayerEnhancements` |
| `Hotkeys` | Rejestr czynności, przypisania, wykrywanie konfliktów, okno Hotkeys | `getBinding`, `findKeyConflict`, `getActionForEvent`, `ensureHotkeysDialog` |
| `Verdict presets` | Tabela presetów, stan wyboru, losowe zastosowanie | `applyPreset`, `detectActivePreset`, `buildEnhancementBar` |
| `Single-question task` | Etykiety, wskaźnik blokady, klawisze nowego formularza | `isCheatingMode`, `selectCheatingVerdict`, `updateCheatingLock` |
| `Submit flow` | Dwuetapowe potwierdzenie, anulowanie, `verdict_labels[]`, kontrola same-origin i nakładka ładowania | `invokeProceedAction`, `invokeCancelAction`, `submitVerdictForm`, `finishSubmitLoadingWhenReady` |
| `Local history` | Historia klipów i meczów, kopie zapasowe i raporty | `appendReviewHistory`, `importLocalHistory`, `exportCombinedHistoryReports` |
| `Settings & animations` | Ustawienia i podokna, dźwięk, animacje wskaźników | `ensureSettingsDialog`, `installExtraSettingsSections`, `ensureAnimationsDialog`, `playUiSound` |
| `Invite page` | Zmieniona strona, przycisk zamknięcia, skróty | `installInvitePage`, `installInviteExtras` |
| `Resilience` | Izolowane kroki, zapasowe wyszukiwanie, wyłączenie, diagnostyka | `safeStep`, `disableDemoScope`, `buildDiagnosticsReport` |
| `Bootstrap` | Punkt wejścia | `init`, `enhanceLayout` |

</details>

## Prywatność

DemoScope nie wysyła telemetrii ani nie przesyła ustawień lub historii. Wysłany werdykt trafia do VACNet przez standardowy formularz strony. Ustawienia i historia pozostają w przeglądarce: w `localStorage` (klucze zaczynające się od `demoscope`) i `sessionStorage`. Aby usunąć historię, wybierz **Settings → Local history → Clear history**. Raport diagnostyczny jest tylko kopiowany do schowka; sam decydujesz, czy go udostępnisz.

## Zastrzeżenie

DemoScope to nieoficjalny projekt społeczności, niezwiązany z Valve Corporation ani przez nią niezatwierdzony. Nigdy nie podejmuje decyzji za Ciebie. Samodzielnie sprawdzaj każdy klip i przestrzegaj zasad programu. Używasz na własne ryzyko.

## Licencja

Wydano na licencji [MIT](https://github.com/ebayybe/DemoScope/blob/main/LICENSE).

