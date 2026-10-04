<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · **Polski** · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Zestaw userscriptów nastawiony na klawiaturę dla recenzentów CS2 VACNet: presety werdyktów, odtwarzacz wideo świadomy segmentu, ulepszenia strony zaproszeń, efekty dźwiękowe i prywatna lokalna historia — w 29 językach.**

</div>

## Przegląd

DemoScope ulepsza strony weryfikacji Counter-Strike VACNet (`counter-strike.net/vacnet`). Zamiast klikać cztery grupy werdyktów (aim assist, wallhack, auto-bhop, bot) przy każdym krótkim klipie, otrzymujesz przepływ pracy oparty na klawiaturze: gotowe werdykty, pasek przewijania ograniczony do weryfikowanego segmentu, przechodzenie klatka po klatce, tymczasowe przyspieszenie, dwuetapowe potwierdzenie wysłania i prywatną historię własnych werdyktów. Wszystko działa lokalnie w Twojej przeglądarce.

## Najważniejsze funkcje

- **Presety werdyktów** – 5 szybkich presetów na klawiszach `1`–`5` oraz 15 rozszerzonych kombinacji (aim, wallhack, bhop, bot i ich mieszanki, w tym warianty „niepewny”).
- **Odtwarzacz świadomy segmentu** – pasek przewijania, wskaźnik czasu, skoki ±5 s i kroki co 1/64 s ograniczone do początku i końca klipu.
- **Przyspieszanie po przytrzymaniu** – przytrzymaj `Shift`, aby odtwarzać z ustawianą prędkością (0,5×–4×, domyślnie 2×).
- **Bezpieczne wysyłanie dwuetapowe** – `Enter` uzbraja przycisk, drugi `Enter` wysyła werdykty; cele formularzy z innego źródła są blokowane.
- **Interfejs w 29 językach** – zgodny z parametrem Steam `?l=`, zapisanym wyborem lub językiem przeglądarki, z wyborem języka na stronie.
- **Lokalna historia weryfikacji** – historia dla klipu i gry w `localStorage`; eksport/import JSON, raport HTML i scalanie wielu kopii zapasowych w jeden raport.
- **Ulepszona strona zaproszeń** – przeprojektowana `/vacnet/createinvite` z pokazywaniem/ukrywaniem i kopiowaniem linku zaproszenia jednym kliknięciem oraz podsumowaniem wymagań.
- **Efekty dźwiękowe** – syntezowane dźwięki Web Audio z włączaniem/wyłączaniem, głośnością i podsłuchem.
- **Okno ustawień** – otwierane klawiszem `F2` (można zmienić): dźwięki, skrót, limity historii, kopie zapasowe, przywracanie domyślnych.
- **Udogodnienia** – nakładka ładowania po wysłaniu, powiadomienia, przełącznik ukrywania nazwy konta, okno zasad weryfikacji i opcjonalny randomizator werdyktów (domyślnie wyłączony).

## Instalacja

1. Zainstaluj menedżera userscriptów, np. [Tampermonkey](https://www.tampermonkey.net/) lub [Violentmonkey](https://violentmonkey.github.io/) (skrypt używa `GM_addStyle` i `unsafeWindow`).
2. [Zainstaluj DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) i potwierdź instalację w menedżerze.
3. Zaloguj się do Steam i otwórz <https://www.counter-strike.net/vacnet/>.
4. Otwórz klip do weryfikacji — DemoScope wczyta się automatycznie (strona `/vacnet/join` jest wyłączona).

## Użytkowanie

Skróty działają na stronach weryfikacji, gdy fokus nie znajduje się w polu tekstowym, przycisku, linku ani liście wyboru.

| Klawisz | Działanie |
|---|---|
| `1` … `5` | Zastosuj preset werdyktu: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 czysty gracz, 5 niepewny |
| `Shift` (hold) | Przytrzymaj, aby przyspieszyć (0,5×–4×, domyślnie 2×, do wyboru na stronie) |
| `←` `→` | Skok o 5 sekund wstecz / do przodu |
| `,` `.` | Jedna klatka (1/64 s) wstecz / do przodu |
| `Space` | Odtwarzaj / pauza |
| `M` / `F` | Wycisz / pełny ekran (dwukrotne kliknięcie wideo również przełącza pełny ekran) |
| `Enter` ×2 | Naciśnij raz, aby uzbroić przycisk wysyłania, naciśnij ponownie, aby wysłać werdykty |
| `F2` | Otwórz okno ustawień (można zmienić) |

## Architektura i omówienie funkcji

DemoScope to jedna samowywołująca się funkcja (`@run-at document-start`, `@noframes`). `init()` wybiera między stroną zaproszeń a stroną weryfikacji i łączy poniższe moduły. Pełna dokumentacja wszystkich 143 funkcji — nazwa, odpowiedzialność, parametry i wartość zwracana — znajduje się w [pl_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/pl_FUNCTIONS.md).

| Moduł | Odpowiedzialność | Kluczowe funkcje |
|---|---|---|
| `Localization` | Ustala język interfejsu, wyszukuje teksty, rysuje flagi i wybór języka | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Odczytuje początek/koniec klipu ze strony, opakowuje odtwarzanie Video.js/HTML5, wyłącza natywny licznik pętli segmentu witryny | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Własny pasek przewijania, podpowiedzi klawiszy, przyspieszanie Shiftem, kroki klatek, skróty klawiszowe | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Tabela presetów, stan wyboru, stosowanie presetów z opcjonalną losową kolejnością i opóźnieniami | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Dwuetapowy Enter, budowanie `verdict_labels[]`, kontrola tego samego źródła, nakładka ładowania | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Przechowuje, przycina i wyświetla historię klipów i gier w `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | Eksport/import JSON, raport HTML, raport scalony z wielu kopii zapasowych | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Okno ustawień, zmienialny skrót, sygnały dźwiękowe Web Audio | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | Przeprojektowana `/vacnet/createinvite`: pokazywanie/ukrywanie i kopiowanie linku, wymagania | `installInvitePage` |
| `Layout & UI helpers` | Powiadomienia, ukrywanie stopki, obserwatory układu, przełącznik nazwy konta | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Punkt wejścia: rozpoznaje typ strony i uruchamia moduły | `init` |

## Dane lokalne i prywatność

DemoScope nie wysyła telemetrii. Ustawienia i historia pozostają w `localStorage` przeglądarki (klucze zaczynające się od `demoscope`) oraz w `sessionStorage`. Aby usunąć historię, użyj opcji czyszczenia historii w oknie ustawień.

## Zastrzeżenie

DemoScope jest nieoficjalnym projektem społeczności, niepowiązanym z Valve Corporation ani przez nią niepopieranym. Nigdy nie wydaje werdyktu za Ciebie — zweryfikuj każdy klip samodzielnie i przestrzegaj zasad programu weryfikacji. Korzystasz na własną odpowiedzialność.

## License

Udostępniany na licencji [MIT](../LICENSE).