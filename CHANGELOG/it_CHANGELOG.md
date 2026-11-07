<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · **Italiano** · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>

# DemoScope v1.2.0

Rilascio di autoprotezione: DemoScope ora gestisce le modifiche alle pagine VACNet senza interrompersi a metà e comunica all’utente e allo sviluppatore che cosa è successo.

Impostazioni, pagina degli inviti e miglioramenti al testo dei verdetti.

Tasti rapidi, animazioni e correzione del caricamento.

Supporto all’attività a domanda singola di VACNet.

Compatibilità con la pagina di revisione riprogettata di VACNet.

### Aggiunto

- **Passaggi di configurazione isolati.** Ogni passaggio di layout e installazione viene eseguito separatamente. Se uno non riesce, l’errore viene registrato e gli altri continuano: la modifica di un elemento non lascia più il pannello costruito a metà.
- **Ricerche di ripiego** per il contenitore video, quello dei verdetti e l’area di invio. Se VACNet rinomina la classe del contenitore video, DemoScope lo individua tramite il player invece di arrendersi.
- **Disattivazione controllata.** Se la pagina contiene il video ma non il modulo dei verdetti (o viceversa), oppure se falliscono almeno cinque passaggi di configurazione, DemoScope annulla le proprie modifiche, ripristina il footer VACNet, lascia aperta solo la finestra delle impostazioni e mostra un avviso una volta. La pagina con coda vuota continua a essere riconosciuta come prima e non attiva mai questa procedura.
- **Rapporto diagnostico** (Impostazioni → Diagnostica → Copia diagnostica): versione dello script, data e ora, lingua e browser, pagina e tipo di attività, controlli di 22 elementi previsti (`ok` / `MISSING`), errori registrati e struttura della pagina prima e dopo l’intervento di DemoScope. La struttura contiene solo tag, ID e classi, mai il testo della pagina. Se gli appunti sono bloccati, il rapporto appare in un riquadro da cui il testo può essere selezionato.
- Una breve attesa (fino a 2 s) prima di valutare una pagina renderizzata solo in parte.

- **Pulsante per chiudere la pagina degli inviti.** Una × nell’angolo della scheda torna ai clip, proprio come “Done”.
- **Scorciatoie della pagina degli inviti:** `Enter` esegue “Done” e `Esc` equivale a ×. Sono ignorate se il focus è su un pulsante, collegamento, campo, finestra di dialogo o elenco delle lingue; ora il pulsante “Done” mostra anche il tasto. Entrambe si possono rimappare nella finestra Hotkeys (nuovo gruppo “Invite page”).
- **Conflitti dei tasti distinti per pagina.** La pagina degli inviti non ha un player, quindi i suoi `Enter` / `Esc` non entrano più in conflitto con quelli della pagina di revisione. Il tasto delle impostazioni continua a entrare in conflitto con tutti.
- **Barre di scorrimento scure e sottili** nella finestra delle impostazioni, nelle sottofinestre e nell’elenco dei verdetti, oltre a `color-scheme: dark`. Prima Brave, Chrome ed Edge mostravano la barra chiara predefinita.

- **Finestra Hotkeys** (Impostazioni → Hotkeys). Tutte le 18 scorciatoie sono raccolte in un unico registro e si possono rimappare. Le azioni sono raggruppate (Riproduzione, Navigazione, Verdetti, Invio, Pagina inviti, Interfaccia), ciascuna con descrizione e pulsante di ripristino; “Reset all” richiede un secondo clic di conferma.
  - **Gestione dei conflitti.** Premendo un tasto già usato viene mostrato quale azione lo possiede, il gruppo e la sua funzione. Si può scegliere **Replace** (l’altra azione perde il tasto), **Swap** (riceve il tasto precedente di questa azione) o **Cancel**.
  - `Esc` si può assegnare come qualsiasi altro tasto e non chiude la finestra durante l’acquisizione. `Tab`, i modificatori, Caps Lock, `F5`, `F11` e `F12` sono rifiutati; `Shift` è accettato solo per l’azione da tenere premuta “Speed boost”.
  - I suggerimenti sotto il video, i badge dei preset e dei verdetti e i pulsanti Continue/Cancel seguono le assegnazioni.
- **`Esc` annulla** un verdetto in attesa di conferma (premendo “Cancel” di VACNet) e disarma il primo `Enter` dell’invio in due passaggi.
- **Finestra Animations** (Impostazioni → Animations): sei stili dell’indicatore (pulse, breathe, ripple, heartbeat, orbit, blink), anteprima dal vivo, tre velocità e interruttore. Se il sistema richiede di ridurre il movimento, le animazioni partono disattivate.
- `Enter` ed `Esc` funzionano anche quando è attivo un pulsante radio del verdetto, che è il punto in cui resta il focus dopo averne selezionato uno.

- **Supporto all’attività a domanda singola.** A volte VACNet presenta “Is the Subject cheating beyond a reasonable doubt?”, con le risposte Cheating / Uncertain / No cheats seen. DemoScope la riconosce e passa a un layout compatto senza verdetti rapidi, combinazioni estese o randomizzatore.
- Etichette dei verdetti con testo e lingua propri di DemoScope, badge dei tasti `1`–`3` e relative scorciatoie.
- **Indicatore di blocco.** VACNet sblocca “Uncertain” e “No cheats seen” solo alla fine del clip. Una scheda lo spiega e mostra il tempo rimanente con una barra di avanzamento; le opzioni bloccate sono attenuate e premere il relativo tasto riproduce un suono d’errore e fa vibrare la scheda.
- I suggerimenti sotto il video passano a `Enter` e `1–3`; i pulsanti dei verdetti sono più alti per riempire il pannello.

- **Spiegazioni proprie di DemoScope** per le quattro categorie di verdetto in tutte le 29 lingue. Per alcune lingue (per esempio l’ucraino) VACNet ripiega sull’inglese, quindi i popup “?” non dipendono più dal testo del servizio.

- **Pulsante di aiuto “?”** accanto ad AIM ASSIST, WALL HACK, AUTO BHOP e BOT. Un clic apre una piccola spiegazione della categoria; si chiude cliccando fuori, premendo di nuovo il pulsante o usando `Esc`. Il pulsante non riceve intenzionalmente il focus da tastiera, così `Enter` e `Space` mantengono il loro significato durante la revisione.

### Modificato

- **Finestra delle impostazioni ridisegnata.** Le sezioni sono ordinate in base alla frequenza d’uso: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (aggiunta in 1.2.0), Reset. Tutto è allineato a sinistra come nelle nuove sottofinestre. Hotkeys e Animations sono righe di accesso con un riepilogo (“Changed: 2”, “Orbit · Fast”) che si aggiorna quando si modificano i valori.
- **Un solo ripristino per tutto.** Il pulsante ha una sezione dedicata e ripristina suono, volume, tasti rapidi e animazioni; il testo di conferma lo specifica. La cronologia viene mantenuta.
- Il vecchio blocco “settings key” è stato rimosso dalla finestra: il tasto si modifica ora nella finestra Hotkeys come tutti gli altri.
- **Il testo di conferma del verdetto non contiene più il numero del tasto.** VACNet copia il testo dell’etichetta selezionata nella riga di conferma, producendo “2Not sure” e “3No cheats seen”. Ora il badge del tasto è disegnato con CSS e non fa parte del testo.
- L’opzione 2 dell’attività a domanda singola ora dice “Not sure” (in russo: “Не уверен(а)”), con la stessa forma in prima persona della frase VACNet “I'm sure the subject is cheating…”.

- **È tornata l’evidenziazione delle frasi chiave** nei pulsanti dei verdetti, con la palette DemoScope: la frase richiesta (“help with aiming”, “see through walls”, …) in arancione acceso e il “not” delle risposte negative in blu attenuato; entrambe in grassetto. I pulsanti selezionati mantengono la tinta e restano leggibili.
- `normalizeVerdictLabels` appiattiva tutte le evidenziazioni in testo semplice. Ora rimuove solo i tag di enfasi `<b>`, preservando il markup delle evidenziazioni.

- L’intestazione del portale e la scheda di istruzioni sono nascoste per mantenere l’aspetto precedente; il conteggio dei clip viene riportato anche nel badge dell’intestazione perché la riprogettazione nasconde l’originale.
- Il pulsante Continue resta fissato in fondo al pannello, quindi rimane visibile anche quando le traduzioni lunghe rendono l’elenco dei verdetti più alto della finestra.

### Corretto

- **Attesa lunga per il caricamento del clip successivo dopo l’invio** nell’attività a domanda singola. Il controllo di disponibilità aspettava l’input `aimassist` del modulo classico, assente in questa attività; raggiungeva quindi sempre il timeout di 30 secondi e mostrava un errore. Ora accetta qualsiasi modulo di verdetto e i metadati dei media, parte prima che il player abbia finito di caricarsi e chiude silenziosamente l’overlay dopo 3 secondi nelle pagine che non sono dei clip.
- Le scorciatoie della pagina (`Space`, `Enter`, …) non agiscono più sulla pagina dietro una finestra di dialogo aperta.

- Il pulsante “Local history” era troppo grande (ereditava il carattere della pagina) e andava a capo in molte lingue. Ora ha le dimensioni dei badge vicini, non va a capo, tronca le etichette molto lunghe e permette alla riga di badge di andare a capo invece di restringersi.

- **Il testo dei verdetti restava nella lingua del browser** dopo averne scelta un’altra in DemoScope. VACNet sceglie i propri testi dal parametro Steam `?l=`; DemoScope modificava solo le proprie etichette. Ora la scelta della lingua in una pagina di revisione naviga con il `?l=` corrispondente; se una pagina viene aperta senza quel parametro (per esempio il clip successivo dopo Continue), viene richiesta nuovamente una volta nella lingua selezionata. La lingua realmente usata da VACNet viene letta dal parametro `l=` negli URL dei suoi fogli di stile e script; una protezione a un solo tentativo evita cicli di reindirizzamento se VACNet non offre quella lingua.

- **`Space`, `M` e `F` sembravano non funzionare** perché VACNet / Video.js reagivano agli stessi tasti e cambiavano stato una seconda volta (pausa seguita subito dalla riproduzione). DemoScope ora intercetta questi tasti, assegnati o meno.
- In Firefox, al rilascio di `Space` veniva anche “cliccato” il pulsante del player con il focus. Ora viene intercettato anche il rilascio.
- Le scorciatoie del player restano attive quando è selezionato un pulsante radio del verdetto.

- **Pannello incompleto dopo la riprogettazione di VACNet.** La pagina ha aggiunto un’intestazione del portale, una scheda di istruzioni e una griglia; non avvolgeva più i blocchi dei verdetti in `.verdicts-container-inner` e spostava `#submitbuttons` fuori dal contenitore. `insertBefore` di DemoScope generava un errore e saltava tutti i passaggi successivi. Il nuovo passaggio `ensureReviewStructure` normalizza il markup e supporta sia il layout vecchio sia quello nuovo.

### Localizzazione

- 6 nuove stringhe (sezione diagnostica, risultato della copia e avviso di disattivazione) in tutte le 29 lingue.

- 12 nuove stringhe (riepiloghi, sezione di ripristino, azioni della pagina inviti e “Not sure”) in tutte le 29 lingue.

- Le finestre Hotkeys e Animations (77 stringhe per lingua) sono ora tradotte nelle altre 27 lingue. In precedenza erano state scritte solo in inglese e russo.

- Le finestre Hotkeys e Animations erano state scritte in inglese e russo; le altre lingue sono arrivate nella versione 1.2.0.

- 5 nuove stringhe (etichette, titolo, spiegazione e messaggio di blocco) in tutte le 29 lingue.

# DemoScope v1.0.0

Prima versione pubblica di DemoScope, un toolkit userscript per le pagine di revisione VACNet di CS2.

### Aggiunto
- Interfaccia in 29 lingue, selezione automatica della lingua, cinque preset per i verdetti rapidi e 15 combinazioni estese.
- Controlli video consapevoli dei segmenti, avanzamento fotogramma per fotogramma, accelerazione con `Shift`, riproduci/pausa con `Space`, silenzia con `M`, schermo intero con `F` e invio dei verdetti in due passaggi con `Enter`.
- Cronologia locale configurabile, importazione/esportazione JSON, rapporti HTML e unione di più backup JSON in un unico rapporto.
- Pagina degli inviti migliorata, impostazioni audio, tasto impostazioni configurabile, controllo della visibilità del nome account, finestra delle regole e randomizzatore opzionale dei verdetti (disattivato per impostazione predefinita).

### Privacy
- Nessuna telemetria; impostazioni e cronologia locali non vengono caricate. I verdetti inviati raggiungono VACNet tramite il normale modulo del sito.
