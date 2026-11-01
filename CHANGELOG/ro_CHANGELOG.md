<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · **Română** · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>
# DemoScope v1.4.0

Lansare cu autoprotecție: DemoScope gestionează acum modificările paginii VACNet în loc să se defecteze la jumătatea procesului și vă informează pe dvs. și pe dezvoltator ce s-a întâmplat.

### Adăugat
- **Pași de configurare izolați.** Fiecare pas de aranjare și instalare rulează separat. Dacă eșuează, eroarea este înregistrată, iar ceilalți pași continuă.
- **Căutări alternative** pentru containerul video, containerul verdictului și zona de trimitere. Dacă VACNet redenumește clasa containerului video, DemoScope îl găsește prin elementul playerului.
- **Dezactivare controlată.** Dacă lipsește videoclipul sau formularul de verdict ori eșuează cel puțin cinci pași de configurare, DemoScope își anulează modificările, restaurează subsolul VACNet, păstrează doar fereastra de setări și afișează o notificare o singură dată. Pagina cu coadă goală este recunoscută în continuare și nu declanșează acest comportament.
- **Raport de diagnosticare** (Settings → Diagnostics → Copy diagnostics): versiune, oră, limbă, browser, tipul paginii și al sarcinii, 22 de verificări de elemente (`ok` / `MISSING`), erori înregistrate și structura paginii înainte și după intervenția DemoScope. Structura conține doar etichete, identificatori și clase, nu textul paginii. Dacă clipboardul este blocat, raportul apare într-un câmp selectabil.
- Așteptare de până la 2 s înainte de evaluarea unei pagini încărcate parțial.

### Localizare
- 6 șiruri noi pentru diagnosticare, rezultatele copierii și notificarea de dezactivare în toate cele 29 de limbi.

# DemoScope v1.3.0

Îmbunătățiri pentru setări, pagina de invitație și textele verdictelor.

### Adăugat
- **Buton de închidere pentru pagina de invitație.** Simbolul × din colțul cardului revine la clipuri, la fel ca „Done”.
- **Taste rapide pentru pagina de invitație:** `Enter` execută „Done”, iar `Esc` închide pagina. Sunt ignorate când are focus un buton, link, câmp, dialog sau lista de limbi. Pot fi reconfigurate în Hotkeys, grupul „Invite page”.
- **Conflicte de taste în funcție de pagină.** Pagina de invitație nu are player, deci `Enter` / `Esc` de acolo nu mai intră în conflict cu tastele identice de pe pagina de evaluare. Tasta de setări rămâne globală.
- **Bare de derulare întunecate și subțiri** în setări, ferestre secundare și lista verdictelor; se aplică și un color-scheme întunecat.

### Modificat
- **Fereastră de setări reproiectată.** Secțiunile sunt ordonate după frecvența utilizării: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (adăugat în v1.4.0), Reset. Hotkeys și Animations afișează rezumate actualizate la modificări.
- **O singură resetare pentru toate.** Restaurează sunetul, volumul, tastele rapide și animațiile; istoricul este păstrat.
- Tasta ferestrei de setări se modifică acum în Hotkeys.
- **Cifra tastei a fost eliminată din confirmarea verdictului.** Astfel se evită „2Not sure” și „3No cheats seen”; insigna tastei este desenată prin CSS.
- Opțiunea 2 a sarcinii cu o singură întrebare este acum „Not sure”, la persoana întâi ca textul VACNet.

### Localizare
- 12 șiruri noi pentru rezumate, resetare, acțiuni pe pagina de invitație și „Not sure”, în toate cele 29 de limbi.

Setarea CSS: `color-scheme: dark`.

Butonul „Done” afișează și tasta atribuită.

# DemoScope v1.2.1

### Localizare
- Ferestrele Hotkeys și Animations (77 de șiruri pentru fiecare limbă) sunt traduse și în celelalte 27 de limbi; anterior erau disponibile doar în engleză și rusă.

# DemoScope v1.2.0

Taste rapide, animații și o remediere a încărcării.

### Adăugat
- **Fereastra Hotkeys** (Settings → Hotkeys): toate cele 18 scurtături pot fi reatribuite, grupate după acțiune, cu descrieri și buton de resetare. „Reset all” cere o a doua confirmare.
  - **Gestionarea conflictelor.** Pentru o tastă deja folosită se afișează acțiunea, grupul și funcția; se poate alege Replace, Swap sau Cancel.
  - `Esc` poate fi atribuit și nu închide fereastra în timpul capturării unei taste. `Tab`, tastele modificatoare, Caps Lock, `F5`, `F11` și `F12` sunt respinse; `Shift` este permis doar pentru acțiunea ținută apăsată „Speed boost”.
  - Indicațiile de sub videoclip, insignele și butoanele Continue/Cancel respectă tastele configurate.
- `Esc` anulează un verdict care așteaptă confirmarea și primul `Enter` al trimiterii în doi pași.
- **Fereastra Animations** (Settings → Animations): șase stiluri, previzualizare live, trei viteze și comutator pornit/oprit. Dacă sistemul cere mișcare redusă, animațiile sunt dezactivate.
- `Enter` și `Esc` funcționează și când este focalizat un buton radio de verdict.

### Remediat
- **„loading next clip” dura prea mult** după trimiterea sarcinii cu o întrebare: verificarea nu mai așteaptă câmpul `aimassist` inexistent, acceptă formularul de verdict și metadatele media, începe mai devreme și închide discret suprapunerea după 3 secunde pe paginile fără clip.
- Scurtăturile paginii (`Space`, `Enter` etc.) nu mai acționează asupra paginii din spatele unui dialog deschis.

### Localizare
- Hotkeys și Animations au fost inițial disponibile în engleză și rusă; celelalte traduceri au fost adăugate în v1.2.1.

Cele șase stiluri sunt pulse, breathe, ripple, heartbeat, orbit și blink.

# DemoScope v1.1.0

Suport pentru sarcina VACNet cu o singură întrebare.

### Adăugat
- **Sarcină cu o singură întrebare.** VACNet poate afișa „Is the Subject cheating beyond a reasonable doubt?” cu răspunsurile Cheating / Uncertain / No cheats seen. DemoScope o detectează și trece la un aspect compact, fără verdicte rapide, combinații extinse și randomizator.
- Etichete de verdict în limba DemoScope, insignele tastelor `1–3` și scurtăturile corespunzătoare.
- **Indicator de blocare.** Uncertain și No cheats seen se deblochează când se termină clipul. Cardul arată timpul rămas și progresul; opțiunile blocate sunt estompate, iar apăsarea tastei redă un sunet de eroare și scutură cardul.
- Indicațiile de sub videoclip afișează `Enter` și `1–3`; butoanele verdictului sunt mai înalte.

### Localizare
- 5 șiruri noi (etichete, titlu, explicație și mesaj de blocare) în toate cele 29 de limbi.

# DemoScope v1.0.6

### Adăugat
- **Explicații proprii DemoScope** pentru cele patru categorii de verdict, în toate cele 29 de limbi. Ferestrele „?” nu mai depind de textul englezesc VACNet care apare în unele limbi, de exemplu ucraineana.

# DemoScope v1.0.5

### Adăugat
- **Butonul de ajutor „?”** de lângă AIM ASSIST, WALL HACK, AUTO BHOP și BOT deschide o explicație. Se închide la clic în afară, la al doilea clic sau la `Esc`. Nu primește focus de la tastatură, astfel încât `Enter` și `Space` își păstrează funcția de evaluare.

### Remediat
- Butonul Local history are acum dimensiunea insignelor vecine, nu trece pe rândul următor, scurtează etichetele lungi, iar rândul insignelor se rearanjează în loc să se comprime.

# DemoScope v1.0.4

### Remediat
- **Textul verdictelor rămânea în limba browserului** după schimbarea limbii în DemoScope. VACNet folosește parametrul Steam `?l=`, iar DemoScope modifica doar propriile etichete. Pagina de evaluare se deschide acum cu parametrul `?l=` ales; o pagină fără acesta este solicitată din nou o dată. Limba efectivă VACNet este citită din `l=` în URL-urile CSS și scripturilor; limita de o încercare previne buclele de redirecționare când limba nu este acceptată.

# DemoScope v1.0.3

### Modificat
- **Evidențierea expresiilor-cheie a revenit** în butoanele verdictului: expresia căutată este portocalie și aldină, iar „not” din răspunsurile negative este albastru discret. Butoanele selectate rămân lizibile.
- `normalizeVerdictLabels` elimină acum doar marcajul b, păstrând evidențierea.

Elementul HTML: `<b>`.

# DemoScope v1.0.2

### Remediat
- **`Space`, `M` și `F` păreau să nu funcționeze**, deoarece VACNet / Video.js procesa aceeași tastă încă o dată. DemoScope le interceptează acum.
- În Firefox, eliberarea tastei `Space` nu mai activează butonul playerului focalizat.
- Scurtăturile playerului funcționează și când este focalizat un buton radio de verdict.

# DemoScope v1.0.1

Compatibilitate cu pagina VACNet de evaluare reproiectată.

### Remediat
- **Panoul era construit doar parțial** după modificările VACNet: antetul portalului, cardul cu instrucțiuni, grila, eliminarea verdicts-container-inner și mutarea submitbuttons provocau o eroare `insertBefore`. Pasul `ensureReviewStructure` normalizează structura pentru aspectul vechi și cel nou.

### Modificat
- Antetul portalului și cardul cu instrucțiuni sunt ascunse; contorul de clipuri este afișat și în insigna antetului.
- Continue este fixat în partea de jos și rămâne vizibil când traducerile lungi măresc lista.

Selectori tehnici: `.verdicts-container-inner`, `#submitbuttons`.

# DemoScope v1.0.0

Prima versiune publică a userscriptului DemoScope pentru paginile de evaluare CS2 VACNet.

### Adăugat
- Interfață în 29 de limbi, alegere automată a limbii, cinci presetări rapide de verdict și 15 combinații extinse.
- Comenzi video pe segmente, avans cadru cu cadru, accelerare `Shift`, `Space` redare/pauză, `M` dezactivare sunet, `F` ecran complet și trimitere verdict în doi pași cu `Enter`.
- Istoric local configurabil, import/export JSON, rapoarte HTML și combinarea mai multor copii JSON într-un singur raport.
- Pagină de invitație îmbunătățită, setări audio, tastă configurabilă pentru setări, ascunderea numelui contului, dialog cu regulile de evaluare și randomizator opțional de verdict (dezactivat implicit).

### Confidențialitate
- Fără telemetrie; setările și istoricul local nu sunt încărcate. Verdicturile trimise ajung la VACNet prin formularul obișnuit al site-ului.






