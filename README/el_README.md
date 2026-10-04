<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · **Ελληνικά** · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Εργαλειοθήκη userscript με έμφαση στο πληκτρολόγιο για ελεγκτές CS2 VACNet: προεπιλογές κρίσεων, πρόγραμμα αναπαραγωγής με επίγνωση τμήματος, βελτιώσεις στη σελίδα προσκλήσεων, ηχητικά εφέ και ιδιωτικό τοπικό ιστορικό — σε 29 γλώσσες.**

</div>

## Επισκόπηση

Το DemoScope αναβαθμίζει τις σελίδες ελέγχου του Counter-Strike VACNet (`counter-strike.net/vacnet`). Αντί να κάνετε κλικ σε τέσσερις ομάδες κρίσεων (aim assist, wallhack, auto-bhop, bot) για κάθε σύντομο κλιπ, αποκτάτε ροή εργασίας βασισμένη στο πληκτρολόγιο: έτοιμες κρίσεις, γραμμή αναζήτησης περιορισμένη στο τμήμα που ελέγχετε, προώθηση καρέ-καρέ, προσωρινή επιτάχυνση, επιβεβαίωση υποβολής σε δύο βήματα και ιδιωτικό ιστορικό των δικών σας κρίσεων. Όλα εκτελούνται τοπικά στο πρόγραμμα περιήγησής σας.

## Βασικά χαρακτηριστικά

- **Προεπιλογές κρίσεων** – 5 γρήγορες προεπιλογές στα πλήκτρα `1`–`5` και 15 εκτεταμένοι συνδυασμοί (aim, wallhack, bhop, bot και μείξεις τους, μαζί με παραλλαγές «αβέβαιο»).
- **Πρόγραμμα αναπαραγωγής με επίγνωση τμήματος** – γραμμή αναζήτησης, ένδειξη χρόνου, άλματα ±5 δ και βήματα καρέ 1/64 δ, περιορισμένα στα όρια έναρξης/λήξης του κλιπ.
- **Επιτάχυνση με κράτημα** – κρατήστε πατημένο το `Shift` για αναπαραγωγή με ρυθμιζόμενη ταχύτητα (0,5×–4×, προεπιλογή 2×).
- **Ασφαλής υποβολή σε δύο βήματα** – το `Enter` οπλίζει το κουμπί, δεύτερο `Enter` στέλνει τις κρίσεις· οι προορισμοί φορμών άλλης προέλευσης αποκλείονται.
- **Διεπαφή σε 29 γλώσσες** – ακολουθεί την παράμετρο `?l=` του Steam, την αποθηκευμένη επιλογή ή τη γλώσσα του προγράμματος περιήγησης, με επιλογέα γλώσσας στη σελίδα.
- **Τοπικό ιστορικό ελέγχων** – ιστορικό ανά κλιπ και ανά παιχνίδι στο `localStorage`· εξαγωγή/εισαγωγή JSON, αναφορά HTML και συγχώνευση πολλών αντιγράφων ασφαλείας σε μία αναφορά.
- **Βελτιώσεις στη σελίδα προσκλήσεων** – ανασχεδιασμένη `/vacnet/createinvite` με εμφάνιση/απόκρυψη και αντιγραφή του συνδέσμου με ένα κλικ, συν σύνοψη των απαιτήσεων.
- **Ηχητικά εφέ** – συνθετικοί ήχοι Web Audio με ενεργοποίηση/απενεργοποίηση, ένταση και προεπισκόπηση.
- **Παράθυρο ρυθμίσεων** – ανοίγει με `F2` (αλλάζει): ήχοι, συντόμευση, όρια ιστορικού, αντίγραφα ασφαλείας, επαναφορά προεπιλογών.
- **Ευκολίες** – οθόνη φόρτωσης μετά την υποβολή, ειδοποιήσεις, απόκρυψη ονόματος λογαριασμού, παράθυρο κανόνων ελέγχου και προαιρετικός τυχαιοποιητής κρίσεων (απενεργοποιημένος από προεπιλογή).

## Εγκατάσταση

1. Εγκαταστήστε έναν διαχειριστή userscript όπως το [Tampermonkey](https://www.tampermonkey.net/) ή το [Violentmonkey](https://violentmonkey.github.io/) (το script χρησιμοποιεί `GM_addStyle` και `unsafeWindow`).
2. [Εγκαταστήστε το DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) και επιβεβαιώστε την εγκατάσταση στον διαχειριστή σας.
3. Συνδεθείτε στο Steam και ανοίξτε το <https://www.counter-strike.net/vacnet/>.
4. Ανοίξτε ένα κλιπ ελέγχου — το DemoScope φορτώνεται αυτόματα (η σελίδα `/vacnet/join` εξαιρείται).

## Χρήση

Οι συντομεύσεις λειτουργούν στις σελίδες ελέγχου όταν η εστίαση δεν βρίσκεται σε πεδίο εισαγωγής, κουμπί, σύνδεσμο ή λίστα επιλογής.

| Πλήκτρο | Ενέργεια |
|---|---|
| `1` … `5` | Εφαρμογή προεπιλογής κρίσης: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 καθαρός παίκτης, 5 αβέβαιο |
| `Shift` (hold) | Κράτημα για επιτάχυνση (0,5×–4×, προεπιλογή 2×, επιλέγεται στη σελίδα) |
| `←` `→` | Άλμα 5 δευτερόλεπτα πίσω / μπροστά |
| `,` `.` | Ένα καρέ (1/64 δ) πίσω / μπροστά |
| `Space` | Αναπαραγωγή / παύση |
| `M` / `F` | Σίγαση / πλήρης οθόνη (το διπλό κλικ στο βίντεο εναλλάσσει επίσης την πλήρη οθόνη) |
| `Enter` ×2 | Πατήστε μία φορά για να οπλίσετε το κουμπί υποβολής, ξανά για να σταλούν οι κρίσεις |
| `F2` | Άνοιγμα του παραθύρου ρυθμίσεων (αλλάζει) |

## Αρχιτεκτονική και ανάλυση συναρτήσεων

Το DemoScope είναι μία αυτοεκτελούμενη συνάρτηση (`@run-at document-start`, `@noframes`). Η `init()` επιλέγει ανάμεσα στη σελίδα προσκλήσεων και τη σελίδα ελέγχου και συνδέει τις παρακάτω ενότητες. Ο πλήρης οδηγός για και τις 143 συναρτήσεις — όνομα, αρμοδιότητα, παράμετροι και τιμή επιστροφής — βρίσκεται στο [el_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/el_FUNCTIONS.md).

| Ενότητα | Αρμοδιότητα | Βασικές συναρτήσεις |
|---|---|---|
| `Localization` | Καθορίζει τη γλώσσα της διεπαφής, αναζητά κείμενα, σχεδιάζει σημαίες και τον επιλογέα γλώσσας | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Διαβάζει την αρχή/το τέλος του κλιπ από τη σελίδα, τυλίγει την αναπαραγωγή Video.js/HTML5, απενεργοποιεί τον εγγενή χρονιστή επανάληψης τμήματος του ιστότοπου | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Προσαρμοσμένη γραμμή αναζήτησης, υποδείξεις πλήκτρων, επιτάχυνση με Shift, προώθηση καρέ, συντομεύσεις | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Πίνακας προεπιλογών, κατάσταση επιλογής, εφαρμογή προεπιλογής με προαιρετική τυχαία σειρά και καθυστερήσεις | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Enter σε δύο βήματα, δημιουργία `verdict_labels[]`, έλεγχος ίδιας προέλευσης, οθόνη φόρτωσης | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Αποθηκεύει, κλαδεύει και εμφανίζει ιστορικό ανά κλιπ και ανά παιχνίδι στο `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | Εξαγωγή/εισαγωγή JSON, αναφορά HTML, συγχωνευμένη αναφορά από πολλά αντίγραφα | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Παράθυρο ρυθμίσεων, αλλαζόμενη συντόμευση, ηχητικά σήματα Web Audio | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | Ανασχεδιασμένη `/vacnet/createinvite`: εμφάνιση/απόκρυψη και αντιγραφή συνδέσμου, απαιτήσεις | `installInvitePage` |
| `Layout & UI helpers` | Ειδοποιήσεις, απόκρυψη υποσέλιδου, παρατηρητές διάταξης, διακόπτης ονόματος λογαριασμού | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Σημείο εισόδου: επιλέγει τον τύπο σελίδας και εκκινεί τις ενότητες | `init` |

## Τοπικά δεδομένα και απόρρητο

Το DemoScope δεν στέλνει τηλεμετρία. Οι ρυθμίσεις και το ιστορικό μένουν στο `localStorage` του προγράμματος περιήγησης (κλειδιά που ξεκινούν με `demoscope`) και στο `sessionStorage`. Για να διαγράψετε το ιστορικό, χρησιμοποιήστε την επιλογή εκκαθάρισης στο παράθυρο ρυθμίσεων.

## Αποποίηση ευθύνης

Το DemoScope είναι ανεπίσημο έργο της κοινότητας, χωρίς σύνδεση ή έγκριση από τη Valve Corporation. Δεν αποφασίζει ποτέ κρίση για εσάς — ελέγξτε μόνοι σας κάθε κλιπ και τηρήστε τους κανόνες του προγράμματος ελέγχου. Χρήση με δική σας ευθύνη.

## License

Διανέμεται με την άδεια [MIT](../LICENSE).