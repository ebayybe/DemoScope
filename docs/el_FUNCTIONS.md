<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md) · **Ελληνικά** · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md)

</div>

# DemoScope — Αναφορά συναρτήσεων

Πλήρης αναφορά των 217 συναρτήσεων ανώτατου επιπέδου στο `DemoScope.user.js` v1.4.0 (όνομα, παράμετροι, τιμή επιστροφής, αρμοδιότητα). Επιστροφή στο [README](../README.md).

Συμβάσεις: το `—` σημαίνει ότι δεν υπάρχουν παράμετροι· το `void` σημαίνει ότι η συνάρτηση καλείται για τις παρενέργειές της.

## Επισκόπηση λειτουργίας για τον χρήστη

| Πεδίο | Περιγραφή |
|---|---|
| Υποστηριζόμενες σελίδες | Βελτιώνει τη σελίδα υποδοχής του VACNet (`/vacnet`), τις σελίδες ελέγχου (`/vacnet/clips`), τη σελίδα πρόσκλησης (`/vacnet/createinvite`) και την κατάσταση χωρίς κλιπ. Δεν αλλάζει άλλες σελίδες. |
| Τύποι εργασιών | Αναγνωρίζει τη φόρμα του VACNet. Η **κλασική φόρμα** (aim assist, wallhack, auto-bhop, bot) αποκτά προεπιλογές και συνδυασμούς. Η **εργασία μίας ερώτησης** έχει συμπαγή διάταξη με τρεις αποφάσεις στα `1`–`3`, ένδειξη κλειδώματος και χρόνο κλιπ που απομένει· χωρίς γρήγορες αποφάσεις ή συνδυασμούς. |
| Γλώσσα | Υποστηρίζει 29 γλώσσες Steam. Προηγείται η αποθηκευμένη χειροκίνητη επιλογή, αλλιώς χρησιμοποιείται το `?l=` του Steam και έπειτα η γλώσσα browser/σελίδας. Η επιλογή στο DemoScope περνά το αντίστοιχο `?l=` και στο VACNet. Η αυτόματη λειτουργία συγχρονίζει τη γλώσσα Steam με τον browser. |
| Σελίδες υποδοχής και πρόσκλησης | Αλλάζει την εμφάνιση και προσθέτει κοινό επιλογέα γλώσσας και κουμπί ματιού για απόκρυψη ονόματος. Enter ή Space συνεχίζει στην υποδοχή όταν δεν έχει εστίαση διαδραστικό στοιχείο. Στις προσκλήσεις ο σύνδεσμος κρύβεται, εμφανίζεται και αντιγράφεται· εξηγούνται οι όροι. Το × κλείνει, Enter εκτελεί «Done», Esc λειτουργεί όπως το ×. |
| Έλεγχος κλιπ | Προσθέτει προεπιλογές και συνδυασμούς αποφάσεων, τυχαιοποιητή (αρχικά απενεργοποιημένο), ρυθμιζόμενη ταχύτητα με πατημένο Shift, αναζήτηση εντός τμήματος, βήματα καρέ και συντομεύσεις αναπαραγωγής. Το «?» εξηγεί τοπικοποιημένα τις κατηγορίες· οι βασικές φράσεις χρωματίζονται με την παλέτα DemoScope. |
| Συντομεύσεις πληκτρολογίου | Όλες οι συντομεύσεις είναι ενέργειες σε κοινό μητρώο και αλλάζουν από **Ρυθμίσεις → Συντομεύσεις**. Οι διενέξεις ελέγχονται ανά σελίδα· πρόσκληση και έλεγχος δεν συγκρούονται. Εμφανίζονται ενέργεια, ομάδα και περιγραφή που χρησιμοποιούν το πλήκτρο. Μπορείτε να αντικαταστήσετε, να ανταλλάξετε ή να ακυρώσετε· κάθε ενέργεια έχει επαναφορά. |
| Υποβολή | Το `Enter` ή `Numpad Enter` ενεργοποιεί το «Continue». Στην κλασική φόρμα το πρώτο πάτημα προετοιμάζει και το επόμενο υποβάλλει. Στη μία ερώτηση, η επιλογή εμφανίζει επιβεβαίωση VACNet που εγκρίνεται με Enter. Το `Esc` ακυρώνει αναμονή επιβεβαίωσης ή το πρώτο πάτημα. Το Space δεν υποβάλλει. |
| Ρυθμίσεις | Το `F2` ανοίγει τις ρυθμίσεις και αλλάζει από το παράθυρο Συντομεύσεων. Περιλαμβάνει συντομεύσεις, κινούμενα σχέδια, ήχο/ένταση, τοπικό ιστορικό και τα όριά του, μορφή 12/24 ωρών, αντίγραφα ασφαλείας, υποσέλιδο, διαγνωστικά και ενιαία επαναφορά. |
| Κινούμενα σχέδια | Η κουκκίδα δίπλα στο DemoScope κινείται με έξι στυλ (pulse, breathe, ripple, heartbeat, orbit, blink), ζωντανή προεπισκόπηση, τρεις ταχύτητες και διακόπτη. Με ρύθμιση μειωμένης κίνησης στο λειτουργικό, είναι αρχικά απενεργοποιημένα. |
| Τοπικό ιστορικό | Αποθηκεύει περιλήψεις στο `localStorage` του browser, χωρίς αποστολή από το DemoScope. Ενεργοποιείται/απενεργοποιείται, εισάγεται, εξάγεται ως JSON/HTML, συνδυάζεται από αντίγραφα JSON σε HTML ή διαγράφεται. Όρια: 10/20/30/50 ανά κλειδί και 100/200/300/500 συνολικά. Η απενεργοποίηση σταματά νέες εγγραφές, δεν διαγράφει παλιές· καταγράφεται μόνο η κλασική φόρμα. |
| Κενή ουρά | Αντικαθιστά το μήνυμα VACNet με οδηγίες στη γλώσσα, πρώτη ημερομηνία/ώρα εμφάνισης αποθηκευμένη στον browser και επιλογέα γλώσσας. Οι 250 επιδείξεις/ημέρα είναι πληροφορία από παρατήρηση· το DemoScope δεν επιβάλλει ούτε παρακάμπτει το όριο. |
| Υποσέλιδο | Χρησιμοποιεί τοπικοποιημένο υποσέλιδο. Στις σελίδες κλιπ μπορεί να εμφανίζει σχόλια και αναφορές· κρύβονται ξεχωριστά σύνδεσμοι, πνευματικά δικαιώματα ή ολόκληρο το υποσέλιδο. |
| Ανθεκτικότητα | Τα βήματα ρύθμισης είναι ανεξάρτητα και βασικά στοιχεία αναζητούνται με εναλλακτικές. Αν η σελίδα δεν αναγνωρίζεται, το DemoScope απενεργοποιείται εκεί, επαναφέρει τη διάταξη VACNet και ειδοποιεί. **Ρυθμίσεις → Διαγνωστικά** αντιγράφει αναφορά με έκδοση, στοιχεία που βρέθηκαν, αποτυχημένα βήματα και δομή σελίδας. |

## Τοπικοποίηση

| Συνάρτηση | Παράμετροι | Επιστροφή | Σκοπός |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Ενσωματωμένος κώδικας SVG της σημαίας μιας γλώσσας· αν λείπει, επιστρέφει εικονίδιο υδρογείου. |
| `getSavedLocale` | — | `string \| null` | Διαβάζει την αποθηκευμένη γλώσσα του χρήστη (`demoscopeLanguage`) από το `localStorage`. |
| `getActiveLocale` | — | `string` | Καθορίζει την ενεργή γλώσσα: αποθηκευμένη επιλογή → Steam `?l=` → γλώσσα προγράμματος περιήγησης/σελίδας → `en`. |
| `getLanguageBadge` | — | `string` | Το δικό της όνομα εμφάνισης της γλώσσας, π.χ. «English version», για το σήμα του επιλογέα γλώσσας. |
| `getBrowserLocale` | — | `string \| null` | Εντοπίζει την πρώτη υποστηριζόμενη γλώσσα, μαζί με τοπικές παραλλαγές. |
| `syncAutomaticLanguage` | — | `boolean` | Συγχρονίζει αυτόματα το ?l= με τη γλώσσα του προγράμματος περιήγησης και μεταβαίνει αν διαφέρει. |
| `getRenderedSteamLanguage` | — | `string \| null` | Διαβάζει τη γλώσσα στην οποία το VACNet εμφάνισε πράγματι τη σελίδα, από την παράμετρο l= στα URL των stylesheet και script της ίδιας της σελίδας. |
| `syncSelectedLanguage` | — | `boolean` | Όταν επιλεγεί χειροκίνητα γλώσσα στο DemoScope, ζητά μία φορά τη σελίδα με το αντίστοιχο ?l= ώστε το κείμενο του VACNet να ακολουθήσει. Παραλείπεται αν η γλώσσα ταιριάζει ήδη και αποτρέπει βρόχους ανακατεύθυνσης. Επιστρέφει true αν έγινε πλοήγηση. |
| `tr` | `key: string` | `string` | Αναζητά ένα κείμενο διεπαφής για την ενεργή γλώσσα (εφεδρικά: αγγλικά, μετά το ίδιο το κλειδί). |
| `inviteText` | `key: string` | `string` | Η ίδια αναζήτηση για τον πίνακα κειμένων της σελίδας προσκλήσεων. |
| `settingText` | `key: string` | `string` | Η ίδια αναζήτηση για τον πίνακα κειμένων του παραθύρου ρυθμίσεων. |
| `getPresetLabel` | `name: string` | `string` | Τοπικοποιημένη ετικέτα μιας προεπιλογής· συνθέτει συνδυασμούς όπως «Bot + Aim». |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | HTML των κουμπιών επιλογής γλώσσας, συμπεριλαμβανομένης της καταχώρισης «auto». |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Συνδέει και τοποθετεί τον επιλογέα γλώσσας, αποθηκεύει την επιλογή και φορτώνει ξανά τη σελίδα· προαιρετικό callback μπορεί να χειριστεί την επιλογή. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Αναζητά τοπικοποιημένο κείμενο για κενή ουρά ή υποσέλιδο. |

## Ηχητικά εφέ και παράθυρο ρυθμίσεων

| Συνάρτηση | Παράμετροι | Επιστροφή | Σκοπός |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Η γραμμή «N καταχωρίσεις · τελευταία καταχώριση: …» που εμφανίζεται στο παράθυρο ρυθμίσεων. |
| `soundsEnabled` | — | `boolean` | Αν οι ήχοι της διεπαφής είναι ενεργοί (`demoscopeSoundEffectsEnabled`, προεπιλογή ενεργοί). |
| `getSoundVolume` | — | `number (0–1)` | Η αποθηκευμένη ένταση ήχου (`demoscopeSoundEffectsVolume`, προεπιλογή 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Συνθέτει μια σύντομη ακολουθία τόνων με Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`)· δεν προκαλεί ποτέ σφάλμα. |
| `readSettingsHotkey` | — | `string` | Ο αποθηκευμένος `KeyboardEvent.code` που ανοίγει το παράθυρο ρυθμίσεων (προεπιλογή `F2`). |
| `formatHotkey` | `code: string` | `string` | Αναγνώσιμο όνομα πλήκτρου (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Εξάγει τον κωδικό φυσικού πλήκτρου, αντιστοιχίζοντας μη λατινικές διατάξεις πίσω σε `KeyX`· `""` αν δεν είναι χρησιμοποιήσιμος. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Αληθές για πλήκτρα που ήδη χρησιμοποιούν το DemoScope ή το πρόγραμμα αναπαραγωγής (Enter, Space, βέλη, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Δημιουργεί και συνδέει τις ρυθμίσεις: ήχοι και ένταση, προεπισκόπηση, πλήκτρο συντόμευσης, τοπικό ιστορικό και όρια, μορφή ώρας, εισαγωγή/εξαγωγή JSON, εξαγωγή/συγχώνευση HTML, εκκαθάριση ιστορικού, ορατότητα υποσέλιδου και επαναφορά. |
| `openSettingsDialog` | `opener = null` | `void` | Ανοίγει το παράθυρο με τις τρέχουσες τιμές και θυμάται το στοιχείο στο οποίο θα επιστρέψει η εστίαση. |
| `installSettingsUi` | — | `void` | Εγκαθιστά τον καθολικό ακροατή πλήκτρων φάσης capture (άνοιγμα/κλείσιμο παραθύρου, αλλαγή συντόμευσης) και τα συμβάντα ήχου. |
| `installUiSoundEvents` | — | `void` | Ακροατής κλικ με ανάθεση που αναπαράγει ηχητική ανατροφοδότηση για τα χειριστήρια του DemoScope. |
| `ensureSettingsLayoutStyles` | — | `void` | Προσθέτει τα στυλ του παραθύρου ρυθμίσεων: αριστερή στοίχιση ενοτήτων και γραμμές με συνοπτικές ετικέτες. |
| `refreshSettingsSummaries` | — | `void` | Ενημερώνει τις συνοπτικές ετικέτες των εγγραφών Συντομεύσεις και Κινούμενα σχέδια. |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Προσθέτει ενότητες Συντομεύσεις, Κινούμενα σχέδια, Διαγνωστικά και Επαναφορά και κρύβει την παλιά ενότητα πλήκτρου ρυθμίσεων. |

## Αντίγραφα ασφαλείας, αναφορές και όρια ιστορικού

| Συνάρτηση | Παράμετροι | Επιστροφή | Σκοπός |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Κατεβάζει ολόκληρο το ιστορικό ως `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Ξεκινά λήψη αρχείου μέσω προσωρινού Blob URL. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Ισοπεδώνει και αφαιρεί διπλότυπα από τις καταχωρίσεις ιστορικού, με τις νεότερες πρώτες. |
| `exportReadableHistory` | — | `void` | Κατεβάζει αυτόνομη, τοπικοποιημένη αναφορά HTML του ιστορικού. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Δημιουργεί το HTML της αναφοράς με διαφυγή χαρακτήρων. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Ενημερώνει τη γραμμή κατάστασης του εργαλείου συγχώνευσης (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Επικυρώνει πολλά αντίγραφα JSON (≤ 5 MB το καθένα, ≤ 100 MB συνολικά), αφαιρεί διπλότυπα και κατεβάζει μία συνδυασμένη αναφορά HTML. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Έλεγχος λίστας επιτρεπόμενων για κλειδιά ιστορικού (αποκλείει `__proto__`, `constructor` και κακοσχηματισμένα κλειδιά). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Επικυρώνει ένα αντίγραφο JSON, το συγχωνεύει στο τοπικό ιστορικό (τηρώντας τα όρια) και ανανεώνει τη διεπαφή. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Διαβάζει αριθμητικό όριο από το `localStorage`, δεχόμενη μόνο επιτρεπόμενες τιμές. |
| `getHistoryPerKeyLimit` | — | `number` | Καταχωρίσεις που διατηρούνται ανά κλειδί κλιπ/παιχνιδιού (10/20/30/50, προεπιλογή 30). |
| `getHistoryTotalLimit` | — | `number` | Συνολικός αριθμός κλειδιών κλιπ/παιχνιδιών που διατηρούνται (100/200/300/500, προεπιλογή 300). |

## Όνομα λογαριασμού και σελίδα προσκλήσεων

| Συνάρτηση | Παράμετροι | Επιστροφή | Σκοπός |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Αν το όνομα λογαριασμού Steam είναι αυτή τη στιγμή κρυμμένο. |
| `installAccountNameControl` | — | `void` | Προσθέτει διακόπτη-μάτι δίπλα στον σύνδεσμο αποσύνδεσης και τον διατηρεί συγχρονισμένο μέσω `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Αναδιαμορφώνει το `/vacnet/createinvite`: διάταξη κάρτας, εμφάνιση/απόκρυψη και αντιγραφή συνδέσμου (Clipboard API με εφεδρικό `execCommand`), λίστα απαιτήσεων, επιλογέας γλώσσας. Επιστρέφει `false` αν λείπουν τα αναμενόμενα στοιχεία. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Προσθέτει κουμπί κλεισίματος (×) και listener στη φάση σύλληψης για τα inviteDone και inviteClose. Αγνοεί πλήκτρα όταν η εστίαση βρίσκεται σε κουμπί, σύνδεσμο, πεδίο, modal ή λίστα γλωσσών. |
| `refreshInviteKeyLabels` | — | `void` | Ενημερώνει την ετικέτα «Done» και την υπόδειξη του × σύμφωνα με τις τρέχουσες αντιστοιχίσεις. |
| `installWelcomePage` | — | `boolean` | Ανασχεδιάζει τη σελίδα καλωσορίσματος, προσθέτει ταυτότητα και επιλογή γλώσσας· Enter/Space συνεχίζει· false αν λείπουν στοιχεία. |

## Τμήμα κλιπ και προσαρμογέας προγράμματος αναπαραγωγής

| Συνάρτηση | Παράμετροι | Επιστροφή | Σκοπός |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Εξάγει τα `startTime`/`endTime` από τα ενσωματωμένα scripts της σελίδας. |
| `formatSegmentTime` | `seconds: number` | `string` | Μορφοποιεί δευτερόλεπτα ως `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Βρίσκει το στοιχείο `<video>` του ελέγχου. |
| `getVjsPlayer` | — | `Video.js player \| null` | Επιστρέφει το πρόγραμμα αναπαραγωγής Video.js της σελίδας, αν είναι διαθέσιμο και δεν έχει καταστραφεί. |
| `createPlayerAdapter` | — | `adapter \| null` | Ενιαίο API πάνω από Video.js / βίντεο HTML5: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Ελέγχει ανά 100 ms μέχρι να υπάρξει πρόγραμμα αναπαραγωγής· απορρίπτει σε περίπτωση λήξης χρόνου. |
| `clampSegment` | `time: number, bounds: object` | `number` | Περιορίζει έναν χρόνο στα όρια του κλιπ. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Σχετική θέση μέσα στο κλιπ. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Προσθέτει τη γραμμή αναζήτησης, την ένδειξη χρόνου και τις υποδείξεις συντομεύσεων κάτω από το βίντεο. |
| `pauseLayoutMutations` | `run: Function` | `void` | Εκτελεί μια συνάρτηση ενώ οι παρατηρητές διάταξης είναι ανεσταλμένοι (αποτρέπει βρόχους ανατροφοδότησης). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Επιστρέφει true όταν η εστίαση βρίσκεται σε πεδίο εισαγωγής, textarea, select ή επεξεργάσιμο κείμενο. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Όπως το isShortcutBlocked, αλλά επιτρέπει τα radio κουμπιά απόφασης, επειδή η εστίαση παραμένει σε αυτά μετά το κλικ. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Ετικέτα μιας επιλογής ταχύτητας. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Λίστα `<option>` για τον επιλογέα ταχύτητας (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Αποθηκευμένη ταχύτητα Shift (προεπιλογή 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Αποθηκευμένη κατάσταση του τυχαιοποιητή κρίσεων (προεπιλογή ανενεργός). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Συνδέει τον χειρισμό ταχύτητας αναπαραγωγής, τον περιορισμό/τη παύση τμήματος, τα βοηθητικά για αναζήτηση/καρέ/σίγαση/πλήρη οθόνη και τις καθολικές συντομεύσεις (`1`–`5`, βέλη, `,` `.`, Space, `M`, `F`, Shift). Εσωτερικά closures: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, βοηθητικά βρόχου σχεδίασης. |

## Προεπιλογές κρίσεων

| Συνάρτηση | Παράμετροι | Επιστροφή | Σκοπός |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Επιλέγει «skip» σε κάθε ομάδα κρίσεων που δεν έχει επιλογή. |
| `getSelectedVerdictState` | — | `object` | Τρέχουσα τιμή (`positive` / `negative` / `skip` / `null`) των `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Όνομα της προεπιλογής που ταιριάζει με την τρέχουσα επιλογή. |
| `syncPresetButtons` | — | `string \| null` | Ενημερώνει το `aria-pressed` στα κουμπιά προεπιλογών και το σήμα της εκτεταμένης προεπιλογής. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Κάνει κλικ στα radio inputs μιας προεπιλογής· με ενεργό τυχαιοποιητή ανακατεύει τη σειρά και περιμένει 200–600 ms μεταξύ των κλικ. Απενεργοποιεί τα κουμπιά προεπιλογών όσο εκτελείται. |
| `readAdvancedPresetsOpen` | — | `boolean` | Αν το συρτάρι των εκτεταμένων προεπιλογών είχε μείνει ανοιχτό. |
| `normalizeVerdictLabels` | `root = document` | `void` | Αφαιρεί το σήμανση επισήμανσης από τις ετικέτες κρίσεων. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Προσθέτει τοπικοποιημένους τίτλους πάνω από κάθε ομάδα κρίσεων. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Δημιουργεί κουμπί «?» και αναδυόμενη επεξήγηση για μία ομάδα απόφασης, με τοπικοποιημένο κείμενο του DemoScope. |
| `closeVerdictHelp` | `except = null` | `void` | Κλείνει όλες τις ανοιχτές επεξηγήσεις εκτός από την καθορισμένη. |
| `installVerdictHelpHandlers` | — | `void` | Εγκαθιστά μία φορά χειριστές για εξουσιοδοτημένα κλικ, κλικ εκτός και Esc στα αναδυόμενα παράθυρα. |

## Ειδοποιήσεις, υποσέλιδο και φόρτωση υποβολής

| Συνάρτηση | Παράμετροι | Επιστροφή | Σκοπός |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Κρύβει το υποσέλιδο του ιστότοπου. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Εμφανίζει μη αποκλειστική ειδοποίηση ARIA-live. |
| `markSubmitPending` | — | `void` | Αποθηκεύει τη χρονική στιγμή υποβολής και το id του τρέχοντος κλιπ στο `sessionStorage`. |
| `isSubmitPending` | — | `boolean` | Αν μια υποβολή περιμένει το επόμενο κλιπ. |
| `clearSubmitPending` | — | `void` | Καθαρίζει τους δείκτες εκκρεμούς υποβολής. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Εμφανίζει το επικάλυμμα φόρτωσης πλήρους σελίδας. |
| `hideSubmitLoadingOverlay` | — | `void` | Κρύβει το επικάλυμμα και καθαρίζει την εκκρεμή κατάσταση. |
| `bootSubmitLoadingIfPending` | — | `void` | Εμφανίζει ξανά το επικάλυμμα κατά τη φόρτωση της σελίδας αν υπάρχει εκκρεμής υποβολή. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Αληθές όταν η διεπαφή και τα μέσα του επόμενου κλιπ είναι έτοιμα. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Περιμένει έως 30 s το επόμενο κλιπ και μετά κρύβει το επικάλυμμα (ειδοποίηση σφάλματος σε λήξη χρόνου). |

## Τοπικό αποθηκευτήριο ιστορικού

| Συνάρτηση | Παράμετροι | Επιστροφή | Σκοπός |
|---|---|---|---|
| `extractVodId` | — | `string` | Εξάγει το id κλιπ/παιχνιδιού από το URL του βίντεο. |
| `getGameKey` | — | `string` | Κλειδί ιστορικού για το παιχνίδι (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Κλειδί ιστορικού για ένα τμήμα (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Επικυρώνει και καθαρίζει μία καταχώριση ιστορικού. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Κανονικοποιημένες καταχωρίσεις για ένα κλειδί. |
| `getGameHistoryEntries` | `store: object` | `Array` | Καταχωρίσεις για το τρέχον παιχνίδι (υποστηρίζει παλιό κλειδί). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Καταχωρίσεις για το τρέχον τμήμα. |
| `formatClipId` | `vodId: string` | `string` | Σύντομο αριθμητικό αναγνωριστικό εμφάνισης (`#0000000`) που προκύπτει με hash από το id του κλιπ. |
| `formatRelativeTime` | `timestamp: number` | `string` | Τοπικοποιημένος σχετικός χρόνος (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Φορτώνει το αντικείμενο ιστορικού από το `localStorage` (`{}` σε σφάλμα). |
| `pruneHistoryStore` | `store: object` | `void` | Εφαρμόζει τα όρια ανά κλειδί και το συνολικό όριο (τα παλαιότερα κλειδιά αφαιρούνται πρώτα). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Κλαδεύει και αποθηκεύει· `false` σε σφάλματα ποσόστωσης/αποθήκευσης. |
| `summarizeCurrentVerdict` | — | `string` | Όνομα προεπιλογής της τρέχουσας επιλογής ή `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Τοπικοποιημένη ετικέτα για μια σύνοψη ιστορικού. |
| `formatClockTime` | `seconds: number` | `string` | Μορφή ρολογιού `m:ss` (ή `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Αναγνώσιμο εύρος τμήματος. |
| `formatGameLabel` | — | `string` | Τοπικοποιημένη ετικέτα του τρέχοντος παιχνιδιού. |
| `historyEntryKey` | `entry: object` | `string` | Συμβολοσειρά ταυτότητας που χρησιμοποιείται για την αφαίρεση διπλοτύπων. |
| `formatPriorStat` | `count: number, label: string` | `string` | Γραμμή «ετικέτα: N» στον πίνακα ιστορικού. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Συγχωνεύει καταχωρίσεις κλιπ/παιχνιδιών σε στοιχεία εμφάνισης. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML μιας γραμμής ιστορικού. |
| `escapeHtml` | `value: any` | `string` | Εφαρμόζει διαφυγή στα `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML του πίνακα ιστορικού, συμπεριλαμβανομένου του κουμπιού κανόνων ελέγχου. |
| `ensureClipHistoryPanel` | — | `void` | Δημιουργεί το κοντέινερ του πίνακα αν λείπει. |
| `ensureReviewRulesDialog` | — | `void` | Δημιουργεί το παράθυρο κανόνων ελέγχου και συνδέει τα κουμπιά ανοίγματος/κλεισίματός του. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Συνδέει το κουμπί «τοπικό ιστορικό» (κάνει κύλιση στη λίστα ή εμφανίζει ειδοποίηση κενής κατάστασης). |
| `positionClipHistoryPanel` | — | `void` | Διατηρεί τον πίνακα πρώτο μέσα στο `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Ξανασχεδιάζει τον πίνακα ιστορικού για το τρέχον κλιπ. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Προσθέτει τη σύνοψη της τρέχουσας κρίσης στο ιστορικό παιχνιδιού και κλιπ. |
| `isLocalHistoryEnabled` | — | `boolean` | Διαβάζει αν είναι ενεργό το τοπικό ιστορικό· προεπιλογή: ενεργό. |
| `readTimeFormat` | — | `string` | Διαβάζει μορφή ώρας: αυτόματη, 12ωρη ή 24ωρη. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Μορφοποιεί την πρώτη ώρα εντοπισμού με βάση τη γλώσσα και τη μορφή. |
| `getQueueNoticeLocale` | — | `string` | Επιστρέφει την ενεργή γλώσσα ειδοποίησης κενής ουράς. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Μεταφέρει την παλιά γλωσσική επιλογή στην κοινή ρύθμιση και συγχρονίζει το URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Ενημερώνει την εμφανιζόμενη ώρα πρώτης ανίχνευσης. |

## Ροή υποβολής

| Συνάρτηση | Παράμετροι | Επιστροφή | Σκοπός |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Αληθές σε σελίδες που εμφανίζουν τις τέσσερις ομάδες κρίσεων. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Το εγγενές κουμπί υποβολής, αν είναι ορατό και ενεργό. |
| `recordProceedHistoryIfLabeling` | — | `void` | Καταγράφει το ιστορικό μία φορά ανά υποβολή (με προστασία από επανείσοδο). |
| `resetProceedArmed` | — | `void` | Αφοπλίζει την υποβολή δύο βημάτων. |
| `refreshProceedButtonLabel` | — | `void` | Ενημερώνει την ετικέτα του κουμπιού/την υπόδειξη `Enter` και το στυλ οπλισμένης κατάστασης. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Αντιστοιχίζει μια επιλογή σε `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Δημιουργεί κρυφά inputs `verdict_labels[]`· εμφανίζει ειδοποίηση σφάλματος και επιστρέφει `false` αν κάποια ομάδα δεν έχει επιλογή. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Επιτρέπει μόνο ενέργειες φόρμας ίδιας προέλευσης μέσω HTTPS. |
| `restoreSubmitUi` | — | `void` | Επαναφέρει τα κουμπιά μετά από αποτυχημένη υποβολή. |
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Εκτελεί έλεγχο ασφαλείας, εμφανίζει το επικάλυμμα και υποβάλλει τη φόρμα. |
| `submitVerdictsDirect` | — | `boolean` | Προετοιμάζει τις ετικέτες και υποβάλλει. |
| `invokeProceedAction` | — | `boolean` | Χειριστής Enter/κλικ: το πρώτο πάτημα οπλίζει, το δεύτερο υποβάλλει. |
| `installProceedShortcut` | — | `void` | Ακροατής φάσης capture για `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Ακυρώνει την προετοιμασία του πρώτου πατήματος στη διπλή υποβολή ή πατά το ορατό «Cancel»· επιστρέφει false αν δεν υπάρχει κάτι προς ακύρωση. |
| `refreshCancelButtonLabel` | — | `void` | Προσθέτει ή ενημερώνει την ένδειξη πλήκτρου στο «Cancel». |
| `hookProceedButton` | — | `void` | Αντικαθιστά τη συμπεριφορά κλικ του εγγενούς κουμπιού υποβολής. |
| `installVerdictChangeReset` | — | `void` | Αφοπλίζει την υποβολή και συγχρονίζει ξανά τις προεπιλογές όταν αλλάζει μια κρίση. |
| `scheduleProceedFooterFix` | — | `void` | Καθυστερημένη κλήση (`requestAnimationFrame`) της `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Καθυστερημένη επανακανονικοποίηση ετικετών/τίτλων/προεπιλογών. |

## Μητρώο και αντιστοίχιση συντομεύσεων

| Action | Default | Group | Περιγραφή |
|---|---|---|---|
| `playPause` | `Space` | Playback | Παύει ή συνεχίζει το κλιπ. |
| `mute` | `M` | Playback | Κάνει σίγαση ή επαναφέρει τον ήχο. |
| `fullscreen` | `F` | Playback | Ενεργοποιεί ή τερματίζει την πλήρη οθόνη. |
| `seekBack` / `seekForward` | `←` / `→` | Πλοήγηση | Μετακινείται 5 δευτερόλεπτα πίσω / μπροστά. |
| `frameBack` / `frameForward` | `,` / `.` | Πλοήγηση | Μετακινείται ένα καρέ πίσω / μπροστά. |
| `speedBoost` | `Shift` | Navigation | Επιταχύνει την αναπαραγωγή όσο κρατιέται το πλήκτρο· είναι η μόνη ενέργεια που μπορεί να χρησιμοποιεί το Shift. |
| `quick1` … `quick5` | `1` … `5` | Αποφάσεις | Κλασική φόρμα: προεπιλογές 1–5. Εργασία μίας ερώτησης: Cheating / Not sure / No cheats seen (`1`–`3`). |
| `proceed` | `Enter` | Submission | Επιβεβαιώνει την απόφαση ή προετοιμάζει και υποβάλλει την κλασική φόρμα. |
| `cancel` | `Esc` | Submission | Πατά «Cancel» ή ακυρώνει το πρώτο πάτημα Enter. |
| `inviteDone` | `Enter` | Invite page | Φεύγει από τη σελίδα πρόσκλησης, όπως το «Done». |
| `inviteClose` | `Esc` | Invite page | Εκτελεί την ίδια ενέργεια με το κουμπί ×. |
| `settings` | `F2` | Interface | Ανοίγει ή κλείνει το παράθυρο ρυθμίσεων. |

Οι αντιστοιχίσεις αποθηκεύονται ως τιμές `KeyboardEvent.code` στο `demoscopeKeybindings` (μόνο οι αλλαγές από τις προεπιλογές· το πλήκτρο ρυθμίσεων έχει δική του εγγραφή). Οι αριστεροί και δεξιοί τροποποιητές μετρούν ως ένα πλήκτρο και το αριθμητικό πληκτρολόγιο αντιστοιχεί στην κύρια σειρά. Δεν αντιστοιχίζονται τα `Tab`, `Ctrl`, `Alt`, `Meta`, `Caps Lock`, `ContextMenu`, `F5`, `F11`, `F12`. Τα πεδία είναι χωριστά: `review`, `invite` και το πλήκτρο ρυθμίσεων `global`, που συγκρούεται με όλα.

| Συνάρτηση | Παράμετροι | Επιστροφή | Σκοπός |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Αντικαθιστά τα placeholders {name} σε ένα τοπικοποιημένο πρότυπο. |
| `isModalOpen` | — | `boolean` | Επιστρέφει true όσο είναι ανοιχτό οποιοδήποτε <dialog>· τότε οι συντομεύσεις σελίδας δεν ενεργοποιούνται. |
| `normalizeKeyCode` | `code: string` | `string` | Ενοποιεί τους αριστερούς/δεξιούς τροποποιητές και αντιστοιχίζει τα ψηφία του αριθμητικού πληκτρολογίου και το NumpadEnter στα κύρια πλήκτρα. |
| `formatKeyLabel` | `code: string` | `string` | Εμφανιζόμενο όνομα πλήκτρου (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Διαβάζει και επικυρώνει τις αποθηκευμένες αντιστοιχίσεις (με cache· {} σε σφάλμα). |
| `saveKeyOverrides` | `overrides: object` | `void` | Αποθηκεύει τις αντιστοιχίσεις ή αφαιρεί την εγγραφή αν όλες είναι προεπιλεγμένες. |
| `getBinding` | `id: string` | `string` | Επιστρέφει το τρέχον πλήκτρο μιας ενέργειας· κενό string αν δεν έχει αντιστοιχιστεί. |
| `setBinding` | `id: string, code: string` | `void` | Αποθηκεύει πλήκτρο για ενέργεια· κενός κωδικός αφαιρεί την αντιστοίχιση, οι προεπιλεγμένες τιμές δεν αποθηκεύονται. |
| `resetAllBindings` | — | `void` | Επαναφέρει όλες τις αντιστοιχίσεις, μαζί με το πλήκτρο ρυθμίσεων, στις προεπιλογές. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Βρίσκει άλλη ενέργεια που χρησιμοποιεί ήδη το πλήκτρο σε επικαλυπτόμενο πεδίο. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Αντιστοιχίζει ένα συμβάν πληκτρολογίου σε ID ενέργειας για το τρέχον πεδίο σελίδας. |
| `keyScopeOf` | `id: string` | `string` | Πεδίο ενέργειας: review, invite ή global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | Επιστρέφει true αν τα πεδία συγκρούονται (ίδια πεδία ή ένα είναι global). |
| `currentKeyScope` | — | `string` | Επιστρέφει invite στη σελίδα πρόσκλησης και review στις υπόλοιπες. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Κενό string αν επιτρέπεται το πλήκτρο, reserved για πλήκτρα browser/πλοήγησης ή shift αν το Shift οριστεί σε ενέργεια χωρίς κράτημα. |
| `quickRangeLabel` | `count: number` | `string` | Ετικέτα πλήκτρων γρήγορης απόφασης: 1–5 αν δεν έχουν αλλάξει, αλλιώς τα αντιστοιχισμένα πλήκτρα. |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Δημιουργεί τις υποδείξεις πλήκτρων κάτω από το βίντεο με βάση τις τρέχουσες αντιστοιχίσεις. |
| `refreshKeyLabels` | — | `void` | Ενημερώνει όλες τις ετικέτες πλήκτρων στη σελίδα: υποδείξεις, σήματα, Συνέχεια/Ακύρωση/Πρόσκληση και περιλήψεις ρυθμίσεων. |
| `ensureDemoscopeDialogStyles` | — | `void` | Προσθέτει κοινή εμφάνιση στα παράθυρα Συντομεύσεων και Κινούμενων σχεδίων. |
| `hkActionName` | `id: string` | `string` | Τοπικοποιημένο όνομα ενέργειας. |
| `hkGroupName` | `group: string` | `string` | Τοπικοποιημένο όνομα ομάδας. |
| `hkActionDescription` | `id: string` | `string` | Τοπικοποιημένη περιγραφή της ενέργειας· οι γρήγορες αποφάσεις εξηγούνται και για τους δύο τύπους εργασιών. |
| `hkSetMessage` | `text: string, warn = false` | `void` | Ορίζει τη γραμμή κατάστασης του παραθύρου Συντομεύσεων. |
| `hkCancelCapture` | — | `void` | Βγαίνει από τη λειτουργία καταγραφής πλήκτρου. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Markup μίας γραμμής ενέργειας, μαζί με το πλαίσιο σύγκρουσης αν εκκρεμεί. |
| `renderHotkeys` | — | `void` | Επανασχεδιάζει όλο το παράθυρο διατηρώντας τη θέση κύλισης. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Αντιστοιχίζει πλήκτρο· το replace αφαιρεί την αντιστοίχιση της άλλης ενέργειας, το swap ανταλλάσσει τα πλήκτρα. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Αντιστοιχίζει απευθείας πλήκτρο ή ανοίγει πλαίσιο σύγκρουσης (Replace / Swap / Cancel) αν χρησιμοποιείται ήδη. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Δημιουργεί το παράθυρο Συντομεύσεων και listener πλήκτρων στη φάση καταγραφής· το Esc αντιστοιχίζεται χωρίς να κλείνει το παράθυρο κατά την καταγραφή. |
| `openHotkeysDialog` | — | `void` | Ανοίγει το παράθυρο Συντομεύσεων. |

## Κινούμενα σχέδια

Έξι στυλ ένδειξης (`pulse`, `breathe`, `ripple`, `heartbeat`, `orbit`, `blink`), τρεις ταχύτητες (0.6× / 1× / 1.7×) και η ενεργοποίηση/απενεργοποίηση αποθηκεύονται στα `demoscopeAnimStyle`, `demoscopeAnimSpeed`, `demoscopeAnimEnabled`. Το ενεργό στυλ ορίζεται με `data-ds-anim` στο `<html>` (`off` όταν είναι ανενεργό) και το stylesheet ελέγχει την κουκκίδα και τις προεπισκοπήσεις.

| Συνάρτηση | Παράμετροι | Επιστροφή | Σκοπός |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Ασφαλής ανάγνωση του localStorage. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Ασφαλής εγγραφή στο localStorage· η τιμή null αφαιρεί το κλειδί. |
| `animEnabled` | — | `boolean` | Αποθηκευμένη κατάσταση κινούμενων σχεδίων· προεπιλογή απενεργοποιημένη όταν το σύστημα ζητά μειωμένη κίνηση. |
| `animStyle` | — | `string` | Αποθηκευμένο στυλ (προεπιλογή pulse). |
| `animSpeedKey` | — | `string` | Αποθηκευμένη ταχύτητα (slow / normal / fast, προεπιλογή normal). |
| `ensureAnimationStyles` | — | `void` | Προσθέτει κοινά keyframes και κανόνες για την ενδεικτική και τις προεπισκοπημένες κουκκίδες. |
| `applyAnimationSettings` | — | `void` | Εφαρμόζει στυλ, ταχύτητα και ενεργοποίηση στο <html> και ενημερώνει τη σύνοψη ρυθμίσεων. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Δημιουργεί παράθυρο Κινούμενων σχεδίων με διακόπτη, ταχύτητα, κάρτες στυλ με ζωντανή προεπισκόπηση και επαναφορά. |
| `openAnimationsDialog` | — | `void` | Ανοίγει το παράθυρο Κινούμενων σχεδίων. |
| `ensureUiPolishStyles` | — | `void` | Προσθέτει σκούρες, λεπτές μπάρες κύλισης και color-scheme: dark στα παράθυρα και στη λίστα αποφάσεων. |

## Εργασία μίας ερώτησης

| Συνάρτηση | Παράμετροι | Επιστροφή | Σκοπός |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Επιστρέφει true όταν η σελίδα εμφανίζει φόρμα μίας ερώτησης (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | Πατά το radio Cheating / Not sure / No cheats seen· αν είναι κλειδωμένο, παίζει ήχο σφάλματος και ανακινεί την κάρτα κλειδώματος. |
| `localizeCheatingVerdicts` | — | `void` | Μεταφράζει τις τρεις ετικέτες στη γλώσσα DemoScope και σχεδιάζει σήματα πλήκτρων με CSS, ώστε το κείμενο επιβεβαίωσης VACNet να μην περιέχει το ψηφίο. Προετοιμάζει και την κάρτα κλειδώματος. |
| `updateCheatingLock` | — | `void` | Ενημερώνει την κάρτα κλειδώματος και τη γραμμή προόδου με τον χρόνο μέχρι να ξεκλειδώσουν οι άλλες δύο αποφάσεις· τις κρύβει μετά το ξεκλείδωμα ή την επιλογή. |
| `startCheatingLockWatcher` | — | `void` | Ξεκινά χρονοδιακόπτη ανά 250 ms που καλεί το updateCheatingLock. |

## Ανθεκτικότητα και διαγνωστικά

| Συνάρτηση | Παράμετροι | Επιστροφή | Σκοπός |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Καταγράφει αποτυχημένο βήμα για την αναφορά διάγνωσης· ο αριθμός καταγραφών περιορίζεται. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Εκτελεί βήμα ρύθμισης· σε σφάλμα το καταγράφει και επιστρέφει εναλλακτική τιμή ώστε να συνεχιστούν τα επόμενα βήματα. |
| `getVideoContainer` | — | `HTMLElement \| null` | Εντοπίζει το πλαίσιο βίντεο· αν λείπει, χρησιμοποιεί τον γονέα του player ή του <video>. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Εντοπίζει το πλαίσιο απόφασης· αν λείπει, χρησιμοποιεί τον γονέα του πρώτου μπλοκ απόφασης. |
| `getSubmitArea` | — | `HTMLElement \| null` | Εντοπίζει την περιοχή υποβολής/επιβεβαίωσης (#submitbuttons, .submitbuttons ή γονέας κουμπιού υποβολής). |
| `hasVerdictForm` | — | `boolean` | Επιστρέφει true αν υπάρχει τουλάχιστον ένα radio απόφασης. |
| `removeEnhancements` | — | `void` | Αφαιρεί πάνελ, κλάσεις και αλλαγές υποσέλιδου του DemoScope και επαναφέρει το υποσέλιδο VACNet. |
| `disableDemoScope` | `reason: string` | `void` | Απενεργοποιεί το DemoScope σε αυτή τη σελίδα, αναιρεί αλλαγές, αφήνει μόνο το παράθυρο ρυθμίσεων και εμφανίζει ειδοποίηση μία φορά ανά λόγο στη συνεδρία. |
| `isOwnNode` | `el: Element` | `boolean` | Επιστρέφει true για στοιχεία που δημιούργησε το DemoScope· εξαιρούνται από την αναφορά δομής. |
| `elementSignature` | `el: Element` | `string` | Υπογραφή tag#id.class[…] για την αναφορά δομής· δεν περιέχει κείμενο. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Συμπαγές δέντρο με εσοχές από tags, IDs και κλάσεις· όμοια αδέλφια συγχωνεύονται ως ×N. |
| `captureOriginalSkeleton` | — | `void` | Καταγράφει τη δομή της σελίδας πριν από τις αλλαγές του DemoScope. |
| `buildDiagnosticsReport` | — | `string` | Δημιουργεί αναφορά με έκδοση, σελίδα, γλώσσα, browser, τύπο εργασίας, 22 ελέγχους στοιχείων, αποτυχίες βημάτων και δομή πριν/μετά. Δεν περιέχει κείμενο σελίδας ή δεδομένα λογαριασμού. |
| `fallbackCopyText` | `text: string` | `boolean` | Αντιγράφει μέσω προσωρινού textarea όταν δεν υπάρχει διαθέσιμο το Clipboard API. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Αντιγράφει την αναφορά· αν αποτύχει, εμφανίζει το κείμενο σε επιλέξιμο πεδίο. |

## Διάταξη και εκκίνηση

| Συνάρτηση | Παράμετροι | Επιστροφή | Σκοπός |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Δημιουργεί τη γραμμή επιλογής ταχύτητας Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML ενός κουμπιού προεπιλογής. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML των εκτεταμένων ομάδων προεπιλογών. |
| `buildEnhancementBar` | — | `HTMLElement` | Δημιουργεί τη γραμμή γρήγορων κρίσεων: προεπιλογές, διακόπτης τυχαιοποιητή, εκτεταμένο συρτάρι. |
| `positionShiftSpeedBar` | — | `void` | Διατηρεί τη γραμμή ταχύτητας πριν από τη λίστα κρίσεων. |
| `positionEnhancementBar` | — | `void` | Διατηρεί τη γραμμή προεπιλογών πριν από τα κουμπιά υποβολής. |
| `fixProceedFooter` | — | `void` | Αναδιατάσσει το υποσέλιδο, τις γραμμές και το κουμπί υποβολής. |
| `enhanceLayout` | — | `void` | Εφαρμόζει όλες τις αλλαγές διάταξης και εγκαθιστά τη διεπαφή ρυθμίσεων. |
| `ensureReviewStructure` | — | `void` | Κανονικοποιεί το markup του VACNet: τυλίγει τα μπλοκ αποφάσεων σε .verdicts-container-inner, μετακινεί το #submitbuttons στο πλαίσιο και εμφανίζει τον μετρητή κλιπ στην ετικέτα κεφαλίδας. Υποστηρίζει παλιά και νέα δομή. |
| `watchProceedFooter` | — | `void` | Παρατηρεί το `.verdicts-container` και προγραμματίζει διορθώσεις υποσέλιδου. |
| `watchVerdictLabels` | — | `void` | Παρατηρεί τις ετικέτες κρίσεων και προγραμματίζει επανακανονικοποίηση. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Διαβάζει από το localStorage την προτίμηση ορατότητας υποσέλιδου. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Αποθηκεύει την προτίμηση ορατότητας υποσέλιδου. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Δημιουργεί ή ενημερώνει τοπικοποιημένο υποσέλιδο με προαιρετικούς συνδέσμους και εφαρμόζει τις επιλογές. |
| `installEmptyQueueNotice` | — | `boolean` | Αντικαθιστά το μήνυμα κενής ουράς με οδηγίες, ώρα, επιλογή γλώσσας και υποσέλιδο. |
| `init` | — | `Promise<void>` | Σημείο εισόδου: χειριστήριο ονόματος λογαριασμού → σελίδα προσκλήσεων ή ελέγχου → διάταξη, παρατηρητές, συντομεύσεις, βελτιώσεις προγράμματος αναπαραγωγής. |

Οι `installWelcomePage` και `installInvitePage` επιστρέφουν `false` όταν λείπουν απαραίτητα στοιχεία της σελίδας VACNet. Η `installEmptyQueueNotice` επιστρέφει `false` όταν η ουρά δεν είναι κενή.

### Δεν αναφέρονται παραπάνω

* **`blockSegmentLoopGuard`** (IIFE, εκτελείται κατά τη φόρτωση): περιβάλλει το `setInterval` της σελίδας και αντικαθιστά τον εγγενή χρονοδιακόπτη 100 ms του τμήματος με κενή λειτουργία· το τμήμα ελέγχεται από τα χειριστήρια του DemoScope.
* **Σταθερές και πίνακες:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitions); added since v1.0.0: `KEY_ACTIONS`, `KEY_GROUPS`, `KEY_ACTION_BY_ID`, `KEY_ACTION_SCOPE`, `RESERVED_KEY_CODES`, `CHEATING_KEYS`, `VERDICT_SECTION_TITLES`, `VERDICT_SECTION_HELP`, `ANIM_STYLES`, `ANIM_SPEEDS`.
* **Κατάσταση μονάδας:** `diag` (step failures, the switch-off reason and the original page structure), `hkState` (state of the Hotkeys window) and the `SCRIPT_VERSION` constant used by the diagnostics report.
* **Κείμενα:** όλα τα κείμενα που βλέπει ο χρήστης βρίσκονται στους τοπικοποιημένους πίνακες παραπάνω· τα παράθυρα των v1.2.0–v1.4.0 έχουν μεταφραστεί και στις 29 γλώσσες.

## Κλειδιά αποθήκευσης

| Κλειδί | Θέση | Σκοπός |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Επιλεγμένη γλώσσα / αυτόματη λειτουργία. |
| `demoscopeKeybindings` | `localStorage` | Συντομεύσεις διαφορετικές από τις προεπιλεγμένες (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Πλήκτρο ανοίγματος του παραθύρου ρυθμίσεων (none αν αφαιρεθεί). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Ρυθμίσεις κινούμενης ένδειξης. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Ρυθμίσεις ήχου. |
| `demoscopeClipHistory` και κλειδιά ορίου/μορφής ιστορικού | `localStorage` | Τοπικό ιστορικό ελέγχων και ρυθμίσεις του. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Κατάσταση φόρτωσης υποβολής, προστασία συγχρονισμού γλώσσας και εφάπαξ ειδοποίηση απενεργοποίησης. |









