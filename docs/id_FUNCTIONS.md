<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · **Bahasa Indonesia** · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Referensi Fungsi

Referensi lengkap untuk 128 fungsi tingkat atas di `DemoScope.user.js` v1.0.0 (nama, parameter, nilai kembali, tanggung jawab). Kembali ke [README](../../README/id_README.md).

Konvensi: `—` berarti tanpa parameter; `void` berarti fungsi dipanggil demi efek sampingnya.

## Lokalisasi

| Fungsi | Parameter | Mengembalikan | Tanggung jawab |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Markup SVG inline bendera untuk suatu bahasa; kembali ke ikon bola dunia jika tidak ada. |
| `getSavedLocale` | — | `string \| null` | Membaca bahasa tersimpan milik pengguna (`demoscopeLanguage`) dari `localStorage`. |
| `getActiveLocale` | — | `string` | Menentukan bahasa aktif: pilihan tersimpan → Steam `?l=` → bahasa browser/halaman → `en`. |
| `getLanguageBadge` | — | `string` | Nama tampilan bahasa itu sendiri, mis. “English version”, untuk lencana pemilih bahasa. |
| `tr` | `key: string` | `string` | Mencari string antarmuka untuk bahasa aktif (cadangan: Inggris, lalu kuncinya sendiri). |
| `inviteText` | `key: string` | `string` | Pencarian yang sama untuk tabel string halaman undangan. |
| `settingText` | `key: string` | `string` | Pencarian yang sama untuk tabel string dialog pengaturan. |
| `getPresetLabel` | `name: string` | `string` | Label preset yang sudah dilokalkan; menyusun kombinasi seperti “Bot + Aim”. |
| `buildLanguageOptions` | — | `string (HTML)` | Markup tombol pilihan bahasa, termasuk entri “auto”. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Mengikat pemilih bahasa popover, memosisikannya, menyimpan pilihan, dan memuat ulang halaman. |

## Efek suara dan dialog pengaturan

| Fungsi | Parameter | Mengembalikan | Tanggung jawab |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Baris “N entri · entri terakhir: …” yang ditampilkan di dialog pengaturan. |
| `soundsEnabled` | — | `boolean` | Apakah suara antarmuka aktif (`demoscopeSoundEffectsEnabled`, default aktif). |
| `getSoundVolume` | — | `number (0–1)` | Volume suara tersimpan (`demoscopeSoundEffectsVolume`, default 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Mensintesis urutan nada singkat dengan Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); tidak pernah melempar galat. |
| `readSettingsHotkey` | — | `string` | `KeyboardEvent.code` tersimpan yang membuka dialog pengaturan (default `F2`). |
| `formatHotkey` | `code: string` | `string` | Nama tombol yang mudah dibaca (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Mengekstrak kode tombol fisik, memetakan tata letak non-Latin kembali ke `KeyX`; `""` jika tidak dapat dipakai. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Benar untuk tombol yang sudah dipakai DemoScope atau pemutar (Enter, Spasi, panah, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Membuat (sekali) dan menyambungkan dialog pengaturan: suara, volume, perekaman pintasan, batas riwayat, ekspor/impor/laporan/gabung/hapus, setel ulang. |
| `openSettingsDialog` | `opener = null` | `void` | Membuka dialog dengan nilai saat ini dan mengingat elemen tujuan pengembalian fokus. |
| `installSettingsUi` | — | `void` | Memasang pendengar tombol global fase capture (buka/tutup dialog, pengubahan tombol) dan peristiwa suara. |
| `installUiSoundEvents` | — | `void` | Pendengar klik terdelegasi yang memutar suara umpan balik untuk kontrol DemoScope. |

## Cadangan, laporan, dan batas riwayat

| Fungsi | Parameter | Mengembalikan | Tanggung jawab |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Mengunduh seluruh riwayat sebagai `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Memicu unduhan berkas melalui Blob URL sementara. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Meratakan dan menghapus duplikat entri riwayat, terbaru lebih dulu. |
| `exportReadableHistory` | — | `void` | Mengunduh laporan HTML mandiri berbahasa lokal dari riwayat. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Membangun markup laporan HTML yang sudah di-escape. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Memperbarui baris status alat penggabung (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Memvalidasi banyak cadangan JSON (≤ 5 MB masing-masing, ≤ 100 MB total), menghapus duplikat entri, dan mengunduh satu laporan HTML gabungan. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Pemeriksaan daftar putih untuk kunci riwayat (memblokir `__proto__`, `constructor`, kunci yang salah format). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Memvalidasi cadangan JSON, menggabungkannya ke riwayat lokal (sesuai batas), dan menyegarkan UI. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Membaca batas numerik dari `localStorage`, hanya menerima nilai yang diizinkan. |
| `getHistoryPerKeyLimit` | — | `number` | Entri yang disimpan per kunci klip/gim (10/20/30/50, default 30). |
| `getHistoryTotalLimit` | — | `number` | Jumlah total kunci klip/gim yang disimpan (100/200/300/500, default 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | Apakah laci preset lanjutan dibiarkan terbuka. |

## Nama akun dan halaman undangan

| Fungsi | Parameter | Mengembalikan | Tanggung jawab |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Apakah nama akun Steam sedang disembunyikan. |
| `installAccountNameControl` | — | `void` | Menambahkan sakelar mata di samping tautan keluar dan menjaganya tetap sinkron lewat `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Mendesain ulang `/vacnet/createinvite`: tata letak kartu, tampil/sembunyi dan salin tautan (Clipboard API dengan cadangan `execCommand`), daftar persyaratan, pemilih bahasa. Mengembalikan `false` jika elemen yang diharapkan tidak ada. |

## Segmen klip dan adaptor pemutar

| Fungsi | Parameter | Mengembalikan | Tanggung jawab |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Mengekstrak `startTime`/`endTime` dari skrip inline halaman. |
| `formatSegmentTime` | `seconds: number` | `string` | Memformat detik sebagai `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Menemukan elemen `<video>` tinjauan. |
| `getVjsPlayer` | — | `Video.js player \| null` | Mengembalikan pemutar Video.js halaman jika tersedia dan belum dibuang. |
| `createPlayerAdapter` | — | `adapter \| null` | API terpadu di atas Video.js / video HTML5: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Memeriksa tiap 100 ms hingga pemutar ada; menolak saat waktu habis. |
| `clampSegment` | `time: number, bounds: object` | `number` | Membatasi suatu waktu pada batas klip. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Posisi relatif di dalam klip. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Menambahkan bilah pencarian, penampil waktu, dan petunjuk pintasan di bawah video. |
| `pauseLayoutMutations` | `run: Function` | `void` | Menjalankan callback saat pengamat tata letak ditangguhkan (mencegah putaran umpan balik). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Benar saat fokus berada di input, textarea, select, tombol, tautan, atau elemen yang dapat diedit. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Label opsi kecepatan. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Daftar `<option>` untuk pemilih kecepatan (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Kecepatan Shift tersimpan (default 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Status tersimpan pengacak vonis (default nonaktif). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Menyambungkan penanganan kecepatan putar, pembatasan/jeda segmen, bantuan cari/langkah bingkai/bisu/layar penuh, dan pintasan keyboard global (`1`–`5`, panah, `,` `.`, Spasi, `M`, `F`, Shift). Closure internal: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, pembantu loop gambar. |

## Preset vonis

| Fungsi | Parameter | Mengembalikan | Tanggung jawab |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Memilih “skip” di setiap grup vonis yang belum dipilih. |
| `getSelectedVerdictState` | — | `object` | Nilai saat ini (`positive` / `negative` / `skip` / `null`) dari `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Nama preset yang cocok dengan pilihan saat ini. |
| `syncPresetButtons` | — | `string \| null` | Memperbarui `aria-pressed` pada tombol preset dan lencana preset lanjutan. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Mengeklik input radio suatu preset; dengan pengacak aktif, urutan diacak dan menunggu 200–600 ms antar klik. Menonaktifkan tombol preset selama berjalan. |
| `normalizeVerdictLabels` | `root = document` | `void` | Menghapus markup sorotan dari label vonis. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Menambahkan judul berbahasa lokal di atas tiap grup vonis. |

## Notifikasi, footer, dan pemuatan saat kirim

| Fungsi | Parameter | Mengembalikan | Tanggung jawab |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Menyembunyikan footer situs. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Menampilkan notifikasi non-pemblokir dengan ARIA-live. |
| `markSubmitPending` | — | `void` | Menyimpan waktu pengiriman dan id klip saat ini di `sessionStorage`. |
| `isSubmitPending` | — | `boolean` | Apakah suatu pengiriman menunggu klip berikutnya. |
| `clearSubmitPending` | — | `void` | Menghapus penanda pengiriman tertunda. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Menampilkan lapisan pemuatan layar penuh. |
| `hideSubmitLoadingOverlay` | — | `void` | Menyembunyikan lapisan dan menghapus status tertunda. |
| `bootSubmitLoadingIfPending` | — | `void` | Menampilkan lagi lapisan saat halaman dimuat jika ada pengiriman tertunda. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Benar saat UI dan media klip berikutnya siap. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Menunggu hingga 30 dtk untuk klip berikutnya, lalu menyembunyikan lapisan (notifikasi galat saat waktu habis). |

## Penyimpanan riwayat lokal

| Fungsi | Parameter | Mengembalikan | Tanggung jawab |
|---|---|---|---|
| `extractVodId` | — | `string` | Menurunkan id klip/gim dari URL video. |
| `getGameKey` | — | `string` | Kunci riwayat untuk gim (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Kunci riwayat untuk satu segmen (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Memvalidasi dan membersihkan satu entri riwayat. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Entri ternormalisasi untuk satu kunci. |
| `getGameHistoryEntries` | `store: object` | `Array` | Entri untuk gim saat ini (mendukung kunci lama). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Entri untuk segmen saat ini. |
| `formatClipId` | `vodId: string` | `string` | Id tampilan numerik singkat (`#0000000`) hasil hash dari id klip. |
| `formatRelativeTime` | `timestamp: number` | `string` | Waktu relatif berbahasa lokal (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Memuat objek riwayat dari `localStorage` (`{}` jika galat). |
| `pruneHistoryStore` | `store: object` | `void` | Menerapkan batas per kunci dan total (kunci terlama dibuang lebih dulu). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Memangkas dan menyimpan; `false` jika galat kuota/penyimpanan. |
| `summarizeCurrentVerdict` | — | `string` | Nama preset dari pilihan saat ini, atau `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Label berbahasa lokal untuk ringkasan riwayat. |
| `formatClockTime` | `seconds: number` | `string` | Format jam `m:ss` (atau `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Rentang segmen yang mudah dibaca. |
| `formatGameLabel` | — | `string` | Label berbahasa lokal untuk gim saat ini. |
| `historyEntryKey` | `entry: object` | `string` | String identitas yang dipakai untuk menghapus duplikat. |
| `formatPriorStat` | `count: number, label: string` | `string` | Baris “label: N” di panel riwayat. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Menggabungkan entri klip/gim menjadi item tampilan. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | Markup satu baris riwayat. |
| `escapeHtml` | `value: any` | `string` | Meng-escape `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | Markup panel riwayat, termasuk tombol aturan tinjauan. |
| `ensureClipHistoryPanel` | — | `void` | Membuat kontainer panel jika belum ada. |
| `ensureReviewRulesDialog` | — | `void` | Membuat dialog aturan tinjauan dan mengikat tombol buka/tutupnya. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Mengikat tombol “riwayat lokal” (menggulir ke daftar atau menampilkan notifikasi saat kosong). |
| `positionClipHistoryPanel` | — | `void` | Menjaga panel tetap pertama di dalam `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Merender ulang panel riwayat untuk klip saat ini. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Menambahkan ringkasan vonis saat ini ke riwayat gim dan klip. |

## Alur pengiriman

| Fungsi | Parameter | Mengembalikan | Tanggung jawab |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Benar pada halaman yang menampilkan empat grup vonis. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Tombol kirim asli jika terlihat dan aktif. |
| `recordProceedHistoryIfLabeling` | — | `void` | Mencatat riwayat sekali per pengiriman (dijaga dari masuk ulang). |
| `resetProceedArmed` | — | `void` | Melepas kesiapan pengiriman dua langkah. |
| `refreshProceedButtonLabel` | — | `void` | Memperbarui label tombol/petunjuk `Enter` dan gaya status siap. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Memetakan pilihan ke `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Membangun input tersembunyi `verdict_labels[]`; menampilkan notifikasi galat dan mengembalikan `false` jika ada grup yang belum dipilih. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Hanya mengizinkan aksi formulir HTTPS dengan origin yang sama. |
| `restoreSubmitUi` | — | `void` | Memulihkan tombol setelah pengiriman gagal. |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Menjalankan pemeriksaan keamanan, menampilkan lapisan pemuatan, dan mengirim formulir. |
| `submitVerdictsDirect` | — | `boolean` | Menyiapkan label lalu mengirim. |
| `invokeProceedAction` | — | `boolean` | Penangan Enter/klik: penekanan pertama menyiapkan, kedua mengirim. |
| `installProceedShortcut` | — | `void` | Pendengar fase capture untuk `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Mengganti perilaku klik tombol kirim asli. |
| `installVerdictChangeReset` | — | `void` | Melepas kesiapan kirim dan menyinkronkan ulang preset saat vonis berubah. |
| `scheduleProceedFooterFix` | — | `void` | Pemanggilan `fixProceedFooter` yang ditunda (`requestAnimationFrame`). |
| `scheduleVerdictLabelsFix` | — | `void` | Normalisasi ulang label/judul/default yang ditunda. |

## Tata letak dan inisialisasi

| Fungsi | Parameter | Mengembalikan | Tanggung jawab |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Membangun bilah pemilih kecepatan Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | Markup satu tombol preset. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | Markup grup preset lanjutan. |
| `buildEnhancementBar` | — | `HTMLElement` | Membangun bilah vonis cepat: preset, sakelar pengacak, laci lanjutan. |
| `positionShiftSpeedBar` | — | `void` | Menjaga bilah kecepatan berada sebelum daftar vonis. |
| `positionEnhancementBar` | — | `void` | Menjaga bilah preset berada sebelum tombol kirim. |
| `fixProceedFooter` | — | `void` | Menata ulang footer, bilah, dan tombol kirim. |
| `enhanceLayout` | — | `void` | Menerapkan semua perubahan tata letak dan memasang UI pengaturan. |
| `watchProceedFooter` | — | `void` | Mengamati `.verdicts-container` dan menjadwalkan perbaikan footer. |
| `watchVerdictLabels` | — | `void` | Mengamati label vonis dan menjadwalkan normalisasi ulang. |
| `init` | — | `Promise<void>` | Titik masuk: kontrol nama akun → halaman undangan atau tinjauan → tata letak, pengamat, pintasan, peningkatan pemutar. |

### Tidak tercantum di atas

* **`blockSegmentLoopGuard`** (IIFE, berjalan saat dimuat): membungkus `setInterval` pada halaman sehingga timer pengulangan segmen bawaan situs sebesar 100 ms diganti fungsi kosong; kontrol DemoScope sendiri yang menangani segmen.
* **Konstanta dan tabel:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definisi).
