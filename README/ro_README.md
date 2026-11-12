<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · **Română** · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**Setul de instrumente pentru evaluarea CS2 VACNet, conceput pentru tastatură.**<br>
Presetări de verdict · player adaptat limitelor clipului · taste reconfigurabile · istoric local privat · 29 de limbi.

<br>

[![Versiune](https://img.shields.io/badge/version-v1.2.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![Licență](https://img.shields.io/badge/license-GPL--3.0-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#instalare)
[![Limbi](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#limbi)
[![Confidențialitate](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#confidențialitate)

<br>

[**⬇ Instalează DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[Funcții](#funcții) · [Instalare](#instalare) · [Scurtături](#scurtături-de-tastatură) · [Personalizare](#personalizare) · [Documentație](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md) · [Jurnal de modificări](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md)

</div>

<br>

## Capturi de ecran

<table>
  <tr>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="Ecranul de bun venit DemoScope"></a><br><sub><b>Ecran de bun venit</b></sub></td>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="Interfața principală DemoScope"></a><br><sub><b>Interfață principală</b></sub></td>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/2_DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/2_DemoScope.png" alt="Interfață de revizuire a clipurilor"></a><br><sub><b>Interfață de revizuire a clipurilor</b></sub></td>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="Pagina de invitație DemoScope"></a><br><sub><b>Invită un prieten</b></sub></td>
  </tr>
</table>

## Prezentare generală

DemoScope îmbunătățește paginile de evaluare Counter-Strike VACNet (`counter-strike.net/vacnet`). În loc să parcurgi formularul de verdict pentru fiecare clip scurt, poți lucra de la tastatură: presetări de verdict, bară de căutare limitată la segmentul verificat, avansare cadru cu cadru, accelerare temporară, trimitere în doi pași și istoric privat al verdictelor tale. Acceptă ambele formulare VACNet curente (formularul clasic cu patru întrebări și noua sarcină cu o singură întrebare) și se protejează când Valve modifică pagina. Totul rulează local în browser.

## Funcții

| | |
|---|---|
| **Flux de evaluare** | 5 presetări rapide pe `1`–`5` și încă 15 combinații extinse, randomizare opțională a verdictului (dezactivată implicit) și trimitere sigură în doi pași: `Enter` armează butonul, a doua apăsare pe `Enter` trimite. `Esc` anulează. |
| **Ambele tipuri de sarcini** | Detectează formularul clasic (asistență la țintire, wallhack, auto-bhop, bot) și sarcina cu o singură întrebare („Is the Subject cheating beyond a reasonable doubt?”). Aceasta folosește un aspect compact, verdicte etichetate pe `1`–`3` și un indicator de blocare până la finalul clipului. |
| **Player adaptat clipului** | Bara și timpul sunt limitate la începutul și sfârșitul clipului; salturi de ±5 s, pas de 1/64 s pe cadru, accelerare la apăsarea `Shift` (0,5×–4×), scurtături pentru dezactivarea sunetului și ecran complet. |
| **Scurtături configurabile** | Reatribuie oricare dintre cele 18 acțiuni într-o fereastră dedicată. Conflictele sunt explicate înainte de înlocuire (acțiune, grup și rol), iar toate indiciile de taste urmează configurarea ta. |
| **Animații** | Fereastră cu previzualizare live, șase stiluri de indicator, trei viteze și comutator. Respectă implicit setarea sistemului „reducere mișcare”. |
| **Verdicte ușor de înțeles** | Un buton „?” de lângă fiecare categorie o explică; expresiile-cheie sunt evidențiate pentru ca „not” să nu treacă neobservat. |
| **Istoric local privat** | Istoric per clip și meci în `localStorage`, import/export JSON, rapoarte HTML și combinarea mai multor copii de siguranță într-un singur raport. |
| **Pagina de invitație** | Pagina `/vacnet/createinvite` reproiectată, cu afișare/ascundere, copiere cu un clic, rezumat al cerințelor, buton de închidere și scurtături `Enter` / `Esc`. |
| **29 de limbi** | Folosește mai întâi limba aleasă, apoi setarea Steam `?l=` și, la final, limba browserului. Alegerea limbii în DemoScope schimbă și textul VACNet. |
| **Efecte sonore** | Semnale sintetizate Web Audio cu volum, previzualizare și comutator pornit/oprit. |
| **Pregătit pentru redesignuri** | Pașii de configurare sunt izolați, elementele importante au metode alternative de căutare, iar dacă pagina nu mai poate fi recunoscută DemoScope se dezactivează fără să modifice VACNet. Raportul de diagnosticare se copiază cu un clic pentru raportarea problemelor. |

## Instalare

1. Instalează un manager de userscripturi, cum ar fi [Tampermonkey](https://www.tampermonkey.net/) sau [Violentmonkey](https://violentmonkey.github.io/). Scriptul folosește `GM_addStyle` și `unsafeWindow`.
2. [**Instalează DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) și confirmă instalarea în manager.
3. Conectează-te la Steam și deschide [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/).
4. Deschide un clip de evaluare. DemoScope se încarcă automat (pagina `/vacnet/join` este exclusă).

Actualizările vin prin managerul de userscripturi. DemoScope funcționează în browsere bazate pe Chromium și Firefox.

## Scurtături de tastatură

Scurtăturile funcționează pe paginile de evaluare când focalizarea nu este într-un câmp editabil sau alt control interactiv. **Toate tastele de mai jos pot fi schimbate** din **Settings → Hotkeys**.

| Tastă | Acțiune |
|---|---|
| `1` … `5` | Formular clasic: aplică o presetare (1 bot + asistență țintire + wallhack; 2 țintire + wallhack; 3 rage; 4 jucător curat; 5 nesigur). |
| `1` `2` `3` | Sarcină cu o întrebare: Cheating / Not sure / No cheats seen. |
| `Enter` | Confirmă. În formularul clasic: prima apăsare armează butonul, a doua trimite. |
| `Esc` | Anulează verdictul în așteptarea confirmării sau dezarmează primul `Enter`. |
| `Shift` (ține apăsat) | Accelerare (0,5×–4×; implicit 2×, selectabilă pe pagină). |
| `←` `→` | Salt înapoi / înainte cu 5 secunde. |
| `,` `.` | Înapoi / înainte cu un cadru (1/64 s). |
| `Space` | Redare / pauză. |
| `M` / `F` | Dezactivare sunet / ecran complet (dublu clic pe video comută și ecranul complet). |
| `F2` | Deschide fereastra de setări. |
| `Enter` / `Esc` *(pagina de invitație)* | Gata / închide. |

## Personalizare

Deschide setările cu `F2`. Sunt organizate de la cele mai utilizate la cele mai puțin utilizate:

- **Hotkeys**: fereastră dedicată cu toate acțiunile grupate după scop, resetare per acțiune, „Reset all” și gestionarea conflictelor prin **Replace**, **Swap** sau **Cancel**. `Esc` poate fi atribuită ca orice altă tastă.
- **Animations**: alege un stil (pulse, breathe, ripple, heartbeat, orbit, blink), o viteză sau dezactivează animațiile. Fiecare card previzualizează animația live.
- **Sound effects**: pornit/oprit, volum (ajustabil și cu rotița mouse-ului) și buton de test.
- **Local history**: activare/dezactivare, limite (10/20/30/50 intrări per cheie, 100/200/300/500 chei), format de 12/24 de ore, copii JSON și rapoarte HTML.
- **Footer**: ascunde linkul de feedback, linkul raportului, linia de copyright sau întregul subsol.
- **Diagnostics**: copiază un raport pentru sesizări (vezi [Raportarea unei probleme](#raportarea-unei-probleme)).
- **Reset**: un buton restabilește setările implicite pentru sunet, scurtături și animații. Istoricul se păstrează.

## Limbi

DemoScope este disponibil în 29 de limbi: bulgară, chineză (simplificată și tradițională), cehă, daneză, neerlandeză, engleză, finlandeză, franceză, germană, greacă, maghiară, indoneziană, italiană, japoneză, coreeană, norvegiană, poloneză, portugheză (Portugalia și Brazilia), română, rusă, spaniolă (Spania și America Latină), suedeză, thailandeză, turcă, ucraineană și vietnameză. Poți schimba limba oricând din selectorul paginii.

## Raportarea unei probleme

Valve poate modifica paginile VACNet fără avertisment. Dacă ceva nu mai funcționează:

1. Apasă `F2`, deschide **Diagnostics**, apoi apasă **Copy diagnostics**.
2. Lipește textul într-un [issue nou](https://github.com/ebayybe/DemoScope/issues), împreună cu o captură de ecran dacă poți.

Raportul conține versiunea scriptului, ora, limba și user-agent-ul browserului, elementele găsite, pașii de configurare eșuați și structura paginii (doar taguri, ID-uri și clase). Nu include textul paginii, numele contului sau istoricul. Dacă pagina nu mai este recunoscută, DemoScope se dezactivează acolo și anunță acest lucru; VACNet continuă să funcționeze normal.

## Întrebări frecvente

<details>
<summary><b>DemoScope spune că a fost dezactivat pe această pagină. Ce s-a întâmplat?</b></summary>

Pagina VACNet nu mai corespunde structurii așteptate de DemoScope, așa că scriptul s-a retras în loc să lase o interfață incompletă. Copiază diagnosticul (vezi mai sus) și deschide un issue; de obicei urmează repede o actualizare.
</details>

<details>
<summary><b>Textul verdictului VACNet este într-o altă limbă decât DemoScope.</b></summary>

Când alegi o limbă în DemoScope, VACNet este solicitată în limba respectivă prin parametrul Steam `?l=`. Dacă VACNet nu are o traducere, folosește limba implicită, iar etichetele DemoScope rămân în limba selectată.
</details>

<details>
<summary><b>DemoScope alege verdicturile în locul meu?</b></summary>

Nu. Presetările doar apasă butoanele de verdict alese de tine, iar trimiterea este confirmată întotdeauna de tine. Verifică personal fiecare clip și respectă regulile programului.
</details>

<details>
<summary><b>Se înregistrează istoricul pentru sarcina cu o întrebare?</b></summary>

Nu încă. Istoricul local este înregistrat momentan doar pentru formularul clasic cu patru întrebări.
</details>

<details>
<summary><b>Cum readuc tastele implicite?</b></summary>

Folosește pictograma de resetare de lângă o tastă modificată, **Reset all** în fereastra Hotkeys sau **Reset** în fereastra de setări; ultima opțiune resetează și sunetul și animațiile.
</details>

## Arhitectură

DemoScope este o singură funcție autoexecutabilă (`@run-at document-start`, `@noframes`). `init()` determină tipul paginii, verifică dacă aceasta poate fi recunoscută și conectează modulele de mai jos. Referința completă pentru toate cele 217 funcții de nivel superior, inclusiv parametri, valori returnate și chei de stocare, este în [ro_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md).

<details>
<summary><b>Prezentarea modulelor</b></summary>

| Modul | Responsabilitate | Funcții principale |
|---|---|---|
| `Localization` | Limba interfeței, căutarea textelor, steaguri, selectorul de limbă și sincronizarea `?l=` VACNet | `getActiveLocale`, `tr`, `settingText`, `syncSelectedLanguage`, `installLanguageSelector` |
| `Segment & player` | Citește limitele clipului, adaptează redarea Video.js/HTML5 și dezactivează bucla nativă pe segmente | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Bară de căutare, indicii pentru taste, accelerare, pas cadru cu cadru, scurtături | `installCustomControls`, `installPlayerEnhancements` |
| `Hotkeys` | Registrul acțiunilor, legături, detectarea conflictelor, fereastra Hotkeys | `getBinding`, `findKeyConflict`, `getActionForEvent`, `ensureHotkeysDialog` |
| `Verdict presets` | Tabel de presetări, starea selecției, aplicare aleatorie | `applyPreset`, `detectActivePreset`, `buildEnhancementBar` |
| `Single-question task` | Etichete, indicator de blocare și taste pentru formularul nou | `isCheatingMode`, `selectCheatingVerdict`, `updateCheatingLock` |
| `Submit flow` | Confirmare în doi pași, anulare, `verdict_labels[]`, verificare same-origin, suprapunere de încărcare | `invokeProceedAction`, `invokeCancelAction`, `submitVerdictForm`, `finishSubmitLoadingWhenReady` |
| `Local history` | Istoric per clip și meci, copii de siguranță și rapoarte | `appendReviewHistory`, `importLocalHistory`, `exportCombinedHistoryReports` |
| `Settings & animations` | Fereastra de setări și subferestre, sunet, animații de indicator | `ensureSettingsDialog`, `installExtraSettingsSections`, `ensureAnimationsDialog`, `playUiSound` |
| `Invite page` | Pagina reproiectată, buton de închidere, scurtături | `installInvitePage`, `installInviteExtras` |
| `Resilience` | Pași izolați, căutări alternative, oprire, diagnosticare | `safeStep`, `disableDemoScope`, `buildDiagnosticsReport` |
| `Bootstrap` | Punct de intrare | `init`, `enhanceLayout` |

</details>

## Confidențialitate

DemoScope nu trimite telemetrie și nu încarcă setările sau istoricul. Când trimiți un verdict, VACNet îl primește prin formularul obișnuit al site-ului. Setările și istoricul rămân în browser: în `localStorage` (chei care încep cu `demoscope`) și `sessionStorage`. Pentru a șterge istoricul, folosește **Settings → Local history → Clear history**. Raportul de diagnosticare este doar copiat în clipboard; tu decizi dacă îl distribui.

## Declarație de exonerare

DemoScope este un proiect comunitar neoficial, neafiliat și neaprobat de Valve Corporation. Nu decide niciodată verdictul în locul tău. Evaluează personal fiecare clip și respectă regulile programului. Folosește pe propria răspundere.

## Licență

Lansat sub licența [GNU GPL v3.0](https://github.com/ebayybe/DemoScope/blob/main/LICENSE).

## Mulțumiri

- **Ideea inițială și interfața de bază:** [*CS2 VACNet Review — Player & Layout Enhancements*](https://greasyfork.org/ru/scripts/591778-cs2-vacnet-review-player-layout-enhancements) de skinsales / goodvibes (MIT).
- **Concept asociat și fork în limba rusă:** [*VACLens RU — CS2 Review Assistant*](https://greasyfork.org/ru/scripts/592414-vaclens-ru-cs2-review-assistant) de authorless (MIT).
- **Rescrierea arhitecturii, framework reutilizabil, suport pentru 29 de limbi și presetări personalizate de verdict:** ebayybe.
