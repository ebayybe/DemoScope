<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · **Ελληνικά** · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Αναφορά συναρτήσεων

Πλήρης αναφορά των 128 συναρτήσεων ανώτατου επιπέδου στο `DemoScope.user.js` v1.0.0 (όνομα, παράμετροι, τιμή επιστροφής, αρμοδιότητα). Επιστροφή στο [README](../../README/el_README.md).

Συμβάσεις: το `—` σημαίνει ότι δεν υπάρχουν παράμετροι· το `void` σημαίνει ότι η συνάρτηση καλείται για τις παρενέργειές της.

## Τοπικοποίηση

| Συνάρτηση | Παράμετροι | Επιστρέφει | Αρμοδιότητα |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Ενσωματωμένος κώδικας SVG της σημαίας μιας γλώσσας· αν λείπει, επιστρέφει εικονίδιο υδρογείου. |
| `getSavedLocale` | — | `string \| null` | Διαβάζει την αποθηκευμένη γλώσσα του χρήστη (`demoscopeLanguage`) από το `localStorage`. |
| `getActiveLocale` | — | `string` | Καθορίζει την ενεργή γλώσσα: αποθηκευμένη επιλογή → Steam `?l=` → γλώσσα προγράμματος περιήγησης/σελίδας → `en`. |
| `getLanguageBadge` | — | `string` | Το δικό της όνομα εμφάνισης της γλώσσας, π.χ. «English version», για το σήμα του επιλογέα γλώσσας. |
| `tr` | `key: string` | `string` | Αναζητά ένα κείμενο διεπαφής για την ενεργή γλώσσα (εφεδρικά: αγγλικά, μετά το ίδιο το κλειδί). |
| `inviteText` | `key: string` | `string` | Η ίδια αναζήτηση για τον πίνακα κειμένων της σελίδας προσκλήσεων. |
| `settingText` | `key: string` | `string` | Η ίδια αναζήτηση για τον πίνακα κειμένων του παραθύρου ρυθμίσεων. |
| `getPresetLabel` | `name: string` | `string` | Τοπικοποιημένη ετικέτα μιας προεπιλογής· συνθέτει συνδυασμούς όπως «Bot + Aim». |
| `buildLanguageOptions` | — | `string (HTML)` | HTML των κουμπιών επιλογής γλώσσας, συμπεριλαμβανομένης της καταχώρισης «auto». |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Συνδέει τον αναδυόμενο επιλογέα γλώσσας, τον τοποθετεί, αποθηκεύει την επιλογή και φορτώνει ξανά τη σελίδα. |

## Ηχητικά εφέ και παράθυρο ρυθμίσεων

| Συνάρτηση | Παράμετροι | Επιστρέφει | Αρμοδιότητα |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Η γραμμή «N καταχωρίσεις · τελευταία καταχώριση: …» που εμφανίζεται στο παράθυρο ρυθμίσεων. |
| `soundsEnabled` | — | `boolean` | Αν οι ήχοι της διεπαφής είναι ενεργοί (`demoscopeSoundEffectsEnabled`, προεπιλογή ενεργοί). |
| `getSoundVolume` | — | `number (0–1)` | Η αποθηκευμένη ένταση ήχου (`demoscopeSoundEffectsVolume`, προεπιλογή 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Συνθέτει μια σύντομη ακολουθία τόνων με Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`)· δεν προκαλεί ποτέ σφάλμα. |
| `readSettingsHotkey` | — | `string` | Ο αποθηκευμένος `KeyboardEvent.code` που ανοίγει το παράθυρο ρυθμίσεων (προεπιλογή `F2`). |
| `formatHotkey` | `code: string` | `string` | Αναγνώσιμο όνομα πλήκτρου (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Εξάγει τον κωδικό φυσικού πλήκτρου, αντιστοιχίζοντας μη λατινικές διατάξεις πίσω σε `KeyX`· `""` αν δεν είναι χρησιμοποιήσιμος. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Αληθές για πλήκτρα που ήδη χρησιμοποιούν το DemoScope ή το πρόγραμμα αναπαραγωγής (Enter, Space, βέλη, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Δημιουργεί (μία φορά) και συνδέει το παράθυρο ρυθμίσεων: ήχος, ένταση, καταγραφή συντόμευσης, όρια ιστορικού, εξαγωγή/εισαγωγή/αναφορά/συγχώνευση/εκκαθάριση, επαναφορά. |
| `openSettingsDialog` | `opener = null` | `void` | Ανοίγει το παράθυρο με τις τρέχουσες τιμές και θυμάται το στοιχείο στο οποίο θα επιστρέψει η εστίαση. |
| `installSettingsUi` | — | `void` | Εγκαθιστά τον καθολικό ακροατή πλήκτρων φάσης capture (άνοιγμα/κλείσιμο παραθύρου, αλλαγή συντόμευσης) και τα συμβάντα ήχου. |
| `installUiSoundEvents` | — | `void` | Ακροατής κλικ με ανάθεση που αναπαράγει ηχητική ανατροφοδότηση για τα χειριστήρια του DemoScope. |

## Αντίγραφα ασφαλείας, αναφορές και όρια ιστορικού

| Συνάρτηση | Παράμετροι | Επιστρέφει | Αρμοδιότητα |
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
| `readAdvancedPresetsOpen` | — | `boolean` | Αν το συρτάρι των εκτεταμένων προεπιλογών είχε μείνει ανοιχτό. |

## Όνομα λογαριασμού και σελίδα προσκλήσεων

| Συνάρτηση | Παράμετροι | Επιστρέφει | Αρμοδιότητα |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Αν το όνομα λογαριασμού Steam είναι αυτή τη στιγμή κρυμμένο. |
| `installAccountNameControl` | — | `void` | Προσθέτει διακόπτη-μάτι δίπλα στον σύνδεσμο αποσύνδεσης και τον διατηρεί συγχρονισμένο μέσω `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Αναδιαμορφώνει το `/vacnet/createinvite`: διάταξη κάρτας, εμφάνιση/απόκρυψη και αντιγραφή συνδέσμου (Clipboard API με εφεδρικό `execCommand`), λίστα απαιτήσεων, επιλογέας γλώσσας. Επιστρέφει `false` αν λείπουν τα αναμενόμενα στοιχεία. |

## Τμήμα κλιπ και προσαρμογέας προγράμματος αναπαραγωγής

| Συνάρτηση | Παράμετροι | Επιστρέφει | Αρμοδιότητα |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Αληθές όταν η εστίαση βρίσκεται σε πεδίο εισαγωγής, textarea, select, κουμπί, σύνδεσμο ή επεξεργάσιμο στοιχείο. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Ετικέτα μιας επιλογής ταχύτητας. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Λίστα `<option>` για τον επιλογέα ταχύτητας (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Αποθηκευμένη ταχύτητα Shift (προεπιλογή 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Αποθηκευμένη κατάσταση του τυχαιοποιητή κρίσεων (προεπιλογή ανενεργός). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Συνδέει τον χειρισμό ταχύτητας αναπαραγωγής, τον περιορισμό/τη παύση τμήματος, τα βοηθητικά για αναζήτηση/καρέ/σίγαση/πλήρη οθόνη και τις καθολικές συντομεύσεις (`1`–`5`, βέλη, `,` `.`, Space, `M`, `F`, Shift). Εσωτερικά closures: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, βοηθητικά βρόχου σχεδίασης. |

## Προεπιλογές κρίσεων

| Συνάρτηση | Παράμετροι | Επιστρέφει | Αρμοδιότητα |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Επιλέγει «skip» σε κάθε ομάδα κρίσεων που δεν έχει επιλογή. |
| `getSelectedVerdictState` | — | `object` | Τρέχουσα τιμή (`positive` / `negative` / `skip` / `null`) των `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Όνομα της προεπιλογής που ταιριάζει με την τρέχουσα επιλογή. |
| `syncPresetButtons` | — | `string \| null` | Ενημερώνει το `aria-pressed` στα κουμπιά προεπιλογών και το σήμα της εκτεταμένης προεπιλογής. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Κάνει κλικ στα radio inputs μιας προεπιλογής· με ενεργό τυχαιοποιητή ανακατεύει τη σειρά και περιμένει 200–600 ms μεταξύ των κλικ. Απενεργοποιεί τα κουμπιά προεπιλογών όσο εκτελείται. |
| `normalizeVerdictLabels` | `root = document` | `void` | Αφαιρεί το σήμανση επισήμανσης από τις ετικέτες κρίσεων. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Προσθέτει τοπικοποιημένους τίτλους πάνω από κάθε ομάδα κρίσεων. |

## Ειδοποιήσεις, υποσέλιδο και φόρτωση υποβολής

| Συνάρτηση | Παράμετροι | Επιστρέφει | Αρμοδιότητα |
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

| Συνάρτηση | Παράμετροι | Επιστρέφει | Αρμοδιότητα |
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

## Ροή υποβολής

| Συνάρτηση | Παράμετροι | Επιστρέφει | Αρμοδιότητα |
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
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Εκτελεί έλεγχο ασφαλείας, εμφανίζει το επικάλυμμα και υποβάλλει τη φόρμα. |
| `submitVerdictsDirect` | — | `boolean` | Προετοιμάζει τις ετικέτες και υποβάλλει. |
| `invokeProceedAction` | — | `boolean` | Χειριστής Enter/κλικ: το πρώτο πάτημα οπλίζει, το δεύτερο υποβάλλει. |
| `installProceedShortcut` | — | `void` | Ακροατής φάσης capture για `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Αντικαθιστά τη συμπεριφορά κλικ του εγγενούς κουμπιού υποβολής. |
| `installVerdictChangeReset` | — | `void` | Αφοπλίζει την υποβολή και συγχρονίζει ξανά τις προεπιλογές όταν αλλάζει μια κρίση. |
| `scheduleProceedFooterFix` | — | `void` | Καθυστερημένη κλήση (`requestAnimationFrame`) της `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Καθυστερημένη επανακανονικοποίηση ετικετών/τίτλων/προεπιλογών. |

## Διάταξη και εκκίνηση

| Συνάρτηση | Παράμετροι | Επιστρέφει | Αρμοδιότητα |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Δημιουργεί τη γραμμή επιλογής ταχύτητας Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML ενός κουμπιού προεπιλογής. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML των εκτεταμένων ομάδων προεπιλογών. |
| `buildEnhancementBar` | — | `HTMLElement` | Δημιουργεί τη γραμμή γρήγορων κρίσεων: προεπιλογές, διακόπτης τυχαιοποιητή, εκτεταμένο συρτάρι. |
| `positionShiftSpeedBar` | — | `void` | Διατηρεί τη γραμμή ταχύτητας πριν από τη λίστα κρίσεων. |
| `positionEnhancementBar` | — | `void` | Διατηρεί τη γραμμή προεπιλογών πριν από τα κουμπιά υποβολής. |
| `fixProceedFooter` | — | `void` | Αναδιατάσσει το υποσέλιδο, τις γραμμές και το κουμπί υποβολής. |
| `enhanceLayout` | — | `void` | Εφαρμόζει όλες τις αλλαγές διάταξης και εγκαθιστά τη διεπαφή ρυθμίσεων. |
| `watchProceedFooter` | — | `void` | Παρατηρεί το `.verdicts-container` και προγραμματίζει διορθώσεις υποσέλιδου. |
| `watchVerdictLabels` | — | `void` | Παρατηρεί τις ετικέτες κρίσεων και προγραμματίζει επανακανονικοποίηση. |
| `init` | — | `Promise<void>` | Σημείο εισόδου: χειριστήριο ονόματος λογαριασμού → σελίδα προσκλήσεων ή ελέγχου → διάταξη, παρατηρητές, συντομεύσεις, βελτιώσεις προγράμματος αναπαραγωγής. |

### Δεν αναφέρονται παραπάνω

* **`blockSegmentLoopGuard`** (IIFE, εκτελείται κατά τη φόρτωση): τυλίγει το `setInterval` της σελίδας ώστε ο εγγενής χρονιστής επανάληψης τμήματος των 100 ms του ιστότοπου να αντικαθίσταται από κενή συνάρτηση· το τμήμα το διαχειρίζονται τα δικά του χειριστήρια του DemoScope.
* **Σταθερές και πίνακες:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 ορισμοί).
