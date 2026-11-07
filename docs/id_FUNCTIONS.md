<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/da_FUNCTIONS.md) · **Bahasa Indonesia** · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md)

</div>

# DemoScope — Referensi Fungsi

Referensi lengkap untuk 217 fungsi tingkat atas di `DemoScope.user.js` v1.4.0 (nama, parameter, nilai kembali, tanggung jawab). Kembali ke [README](../README.md).

Konvensi: `—` berarti tanpa parameter; `void` berarti fungsi dipanggil demi efek sampingnya.

## Ringkasan perilaku pengguna

| Bagian | Deskripsi |
|---|---|
| Halaman yang didukung | Menyempurnakan halaman sambutan VACNet (`/vacnet`), halaman peninjauan (`/vacnet/clips`), halaman undangan (`/vacnet/createinvite`), dan kondisi tanpa klip pada rute peninjauan. Halaman lain tidak diubah. |
| Jenis tugas | Mendeteksi formulir peninjauan yang disediakan VACNet. **Formulir klasik** (aim assist, wallhack, auto-bhop, bot) mendapat preset dan kombinasi lanjutan. **Tugas satu pertanyaan** yang lebih baru memakai tata letak ringkas dengan tiga keputusan berlabel pada tombol `1`–`3`, indikator kunci dengan sisa waktu klip, tanpa keputusan cepat atau kombinasi. |
| Bahasa | Mendukung 29 bahasa Steam. Pilihan manual tersimpan diutamakan; jika tidak ada, skrip menggunakan parameter Steam `?l=`, lalu bahasa browser/halaman. Memilih bahasa di DemoScope juga meneruskan `?l=` yang sesuai ke VACNet agar teksnya mengikuti bahasa tersebut. Mode otomatis menyelaraskan parameter bahasa Steam dengan browser. |
| Halaman sambutan dan undangan | Mengubah tampilan kedua halaman, menambahkan pemilih bahasa bersama, dan menyembunyikan nama akun dengan tombol mata. Di halaman sambutan, Enter atau Space melanjutkan jika fokus tidak berada pada kontrol interaktif. Halaman undangan dapat menyembunyikan, menampilkan, dan menyalin tautan serta menjelaskan persyaratan; × menutupnya, Enter berarti “Done”, dan Esc berfungsi seperti ×. |
| Peninjauan klip | Menambahkan preset keputusan dan kombinasi lanjutan, pengacak keputusan (nonaktif secara bawaan), kecepatan pemutaran yang dapat diatur saat Shift ditahan, pencarian dalam batas segmen, langkah per bingkai, serta pintasan pemutaran. Kategori keputusan memiliki tombol “?” dengan penjelasan lokal; frasa penting pada tombol disorot dengan warna DemoScope. |
| Pintasan keyboard | Semua pintasan merupakan tindakan dalam satu registri dan dapat diubah melalui **Pengaturan → Pintasan**. Konflik diperiksa per halaman (undangan dan peninjauan tidak saling bertabrakan) serta menampilkan tindakan, grup, dan deskripsi yang memakai tombol tersebut. Pilih ganti, tukar, atau batal. Setiap tindakan memiliki tombol reset; petunjuk tombol di halaman mengikuti pengaturan Anda. |
| Pengiriman | `Enter` atau `Numpad Enter` (bawaan) menjalankan “Continue”. Pada formulir klasik, tekan pertama menyiapkan tindakan dan tekan berikutnya mengirim keputusan. Pada tugas satu pertanyaan, memilih keputusan menampilkan konfirmasi VACNet yang dikonfirmasi dengan `Enter`. `Esc` (bawaan) menekan “Cancel” saat keputusan menunggu konfirmasi atau membatalkan tekan pertama. Space bukan pintasan pengiriman. |
| Pengaturan | `F2` membuka dialog pengaturan secara bawaan (dapat diubah di jendela Pintasan). Bagian: pintasan, animasi, efek suara dan volume, riwayat lokal (aktifkan, batas, format 12/24 jam, cadangan), visibilitas footer, diagnostik, serta satu reset untuk suara, pintasan, dan animasi. |
| Animasi | Titik indikator di samping “DemoScope” dapat dianimasikan. Jendela terpisah menyediakan enam gaya (pulse, breathe, ripple, heartbeat, orbit, blink), pratinjau langsung, tiga kecepatan, dan sakelar aktif/nonaktif. Jika sistem operasi mengurangi gerakan, animasi dimulai dalam keadaan mati. |
| Riwayat lokal | Menyimpan ringkasan keputusan di `localStorage` browser ini; DemoScope tidak mengunggahnya. Riwayat dapat dinonaktifkan, diimpor, diekspor sebagai JSON/HTML, digabung dari cadangan JSON menjadi satu laporan HTML, atau dihapus. Batasnya 10/20/30/50 entri per kunci dan 100/200/300/500 kunci total. Menonaktifkan riwayat menghentikan entri baru, bukan menghapus data yang ada. Hanya formulir klasik yang dicatat. |
| Antrean kosong | Mengganti pesan antrean kosong VACNet dengan panduan lokal, tanggal/waktu pertama kali terlihat yang disimpan di browser, dan pemilih bahasa. Informasi 250 demo per hari berdasarkan pengamatan perilaku VACNet; DemoScope tidak menerapkan atau melewati batas layanan tersebut. |
| Footer | Menggunakan footer DemoScope yang diterjemahkan. Halaman klip dapat menampilkan tautan masukan dan laporan; pengaturan dapat menyembunyikan tautan satu per satu, baris hak cipta, atau seluruh footer. |
| Ketahanan | Setiap langkah penyiapan berjalan terpisah agar satu kegagalan tidak menghentikan langkah lain. Elemen penting dicari dengan pencarian cadangan. Jika halaman tidak dikenali, DemoScope menonaktifkan dirinya pada halaman itu, memulihkan tata letak VACNet, dan menampilkan pemberitahuan singkat. **Pengaturan → Diagnostik** menyalin laporan teks berisi versi skrip, elemen yang ditemukan, langkah gagal, dan struktur halaman untuk laporan bug. |

## Lokalisasi

| Fungsi | Parameter | Nilai kembali | Tujuan |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Markup SVG inline bendera untuk suatu bahasa; kembali ke ikon bola dunia jika tidak ada. |
| `getSavedLocale` | — | `string \| null` | Membaca bahasa tersimpan milik pengguna (`demoscopeLanguage`) dari `localStorage`. |
| `getActiveLocale` | — | `string` | Menentukan bahasa aktif: pilihan tersimpan → Steam `?l=` → bahasa browser/halaman → `en`. |
| `getLanguageBadge` | — | `string` | Nama tampilan bahasa itu sendiri, mis. “English version”, untuk lencana pemilih bahasa. |
| `getBrowserLocale` | — | `string \| null` | Mendeteksi bahasa browser pertama yang didukung, termasuk varian regional. |
| `syncAutomaticLanguage` | — | `boolean` | Dalam mode otomatis, menyelaraskan ?l= dengan bahasa browser dan berpindah halaman jika berbeda. |
| `getRenderedSteamLanguage` | — | `string \| null` | Membaca bahasa yang benar-benar digunakan VACNet untuk menampilkan halaman dari parameter l= pada URL stylesheet dan skrip halaman itu sendiri. |
| `syncSelectedLanguage` | — | `boolean` | Saat bahasa dipilih secara manual di DemoScope, memuat ulang halaman sekali dengan ?l= yang sesuai agar teks VACNet ikut berubah. Dilewati jika bahasanya sudah sama dan mencegah loop pengalihan. Mengembalikan true jika terjadi navigasi. |
| `tr` | `key: string` | `string` | Mencari string antarmuka untuk bahasa aktif (cadangan: Inggris, lalu kuncinya sendiri). |
| `inviteText` | `key: string` | `string` | Pencarian yang sama untuk tabel string halaman undangan. |
| `settingText` | `key: string` | `string` | Pencarian yang sama untuk tabel string dialog pengaturan. |
| `getPresetLabel` | `name: string` | `string` | Label preset yang sudah dilokalkan; menyusun kombinasi seperti “Bot + Aim”. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | Markup tombol pilihan bahasa, termasuk entri “auto”. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Menghubungkan dan mengatur posisi pemilih bahasa, menyimpan pilihan, lalu memuat ulang halaman; callback opsional dapat menangani pilihan sebagai gantinya. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Mencari teks lokal untuk antrean kosong atau footer. |

## Efek suara dan dialog pengaturan

| Fungsi | Parameter | Nilai kembali | Tujuan |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Baris “N entri · entri terakhir: …” yang ditampilkan di dialog pengaturan. |
| `soundsEnabled` | — | `boolean` | Apakah suara antarmuka aktif (`demoscopeSoundEffectsEnabled`, default aktif). |
| `getSoundVolume` | — | `number (0–1)` | Volume suara tersimpan (`demoscopeSoundEffectsVolume`, default 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Mensintesis urutan nada singkat dengan Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); tidak pernah melempar galat. |
| `readSettingsHotkey` | — | `string` | `KeyboardEvent.code` tersimpan yang membuka dialog pengaturan (default `F2`). |
| `formatHotkey` | `code: string` | `string` | Nama tombol yang mudah dibaca (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Mengekstrak kode tombol fisik, memetakan tata letak non-Latin kembali ke `KeyX`; `""` jika tidak dapat dipakai. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Benar untuk tombol yang sudah dipakai DemoScope atau pemutar (Enter, Spasi, panah, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Membuat dan menghubungkan pengaturan: suara dan volume, pratinjau, pintasan, riwayat lokal dan batas, format waktu, impor/ekspor JSON, ekspor/penggabungan HTML, hapus riwayat, visibilitas footer, dan reset. |
| `openSettingsDialog` | `opener = null` | `void` | Membuka dialog dengan nilai saat ini dan mengingat elemen tujuan pengembalian fokus. |
| `installSettingsUi` | — | `void` | Memasang pendengar tombol global fase capture (buka/tutup dialog, pengubahan tombol) dan peristiwa suara. |
| `installUiSoundEvents` | — | `void` | Pendengar klik terdelegasi yang memutar suara umpan balik untuk kontrol DemoScope. |
| `ensureSettingsLayoutStyles` | — | `void` | Menyisipkan gaya jendela pengaturan: bagian rata kiri dan baris entri dengan lencana ringkasan. |
| `refreshSettingsSummaries` | — | `void` | Memperbarui lencana ringkasan untuk entri Pintasan dan Animasi. |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Menambahkan bagian Pintasan, Animasi, Diagnostik, dan Atur Ulang; menyembunyikan blok tombol pengaturan lama. |

## Cadangan, laporan, dan batas riwayat

| Fungsi | Parameter | Nilai kembali | Tujuan |
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

## Nama akun dan halaman undangan

| Fungsi | Parameter | Nilai kembali | Tujuan |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Apakah nama akun Steam sedang disembunyikan. |
| `installAccountNameControl` | — | `void` | Menambahkan sakelar mata di samping tautan keluar dan menjaganya tetap sinkron lewat `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Mendesain ulang `/vacnet/createinvite`: tata letak kartu, tampil/sembunyi dan salin tautan (Clipboard API dengan cadangan `execCommand`), daftar persyaratan, pemilih bahasa. Mengembalikan `false` jika elemen yang diharapkan tidak ada. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Menambahkan tombol tutup (×) dan listener fase tangkap untuk tindakan inviteDone dan inviteClose. Mengabaikan tombol saat fokus berada pada tombol, tautan, kolom, modal, atau daftar bahasa. |
| `refreshInviteKeyLabels` | — | `void` | Memperbarui label “Done” dan tooltip × sesuai pintasan aktif. |
| `installWelcomePage` | — | `boolean` | Menata ulang halaman sambutan, menambahkan identitas dan pemilih bahasa; Enter/Space melanjutkan; mengembalikan false jika elemen wajib tidak ada. |

## Segmen klip dan adaptor pemutar

| Fungsi | Parameter | Nilai kembali | Tujuan |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Mengembalikan true jika fokus berada pada input, textarea, select, atau teks yang dapat diedit. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Seperti isShortcutBlocked, tetapi mengizinkan tombol radio keputusan karena fokus tetap di tombol setelah diklik. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Label opsi kecepatan. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Daftar `<option>` untuk pemilih kecepatan (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Kecepatan Shift tersimpan (default 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Status tersimpan pengacak vonis (default nonaktif). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Menyambungkan penanganan kecepatan putar, pembatasan/jeda segmen, bantuan cari/langkah bingkai/bisu/layar penuh, dan pintasan keyboard global (`1`–`5`, panah, `,` `.`, Spasi, `M`, `F`, Shift). Closure internal: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, pembantu loop gambar. |

## Preset vonis

| Fungsi | Parameter | Nilai kembali | Tujuan |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Memilih “skip” di setiap grup vonis yang belum dipilih. |
| `getSelectedVerdictState` | — | `object` | Nilai saat ini (`positive` / `negative` / `skip` / `null`) dari `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Nama preset yang cocok dengan pilihan saat ini. |
| `syncPresetButtons` | — | `string \| null` | Memperbarui `aria-pressed` pada tombol preset dan lencana preset lanjutan. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Mengeklik input radio suatu preset; dengan pengacak aktif, urutan diacak dan menunggu 200–600 ms antar klik. Menonaktifkan tombol preset selama berjalan. |
| `readAdvancedPresetsOpen` | — | `boolean` | Apakah laci preset lanjutan dibiarkan terbuka. |
| `normalizeVerdictLabels` | `root = document` | `void` | Menghapus markup sorotan dari label vonis. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Menambahkan judul berbahasa lokal di atas tiap grup vonis. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Membuat tombol “?” dan popover penjelasan untuk satu kelompok keputusan, menggunakan teks lokal DemoScope. |
| `closeVerdictHelp` | `except = null` | `void` | Menutup semua popover penjelasan yang terbuka kecuali yang ditentukan. |
| `installVerdictHelpHandlers` | — | `void` | Memasang sekali penangan klik terdelegasi, klik di luar, dan Esc untuk popover. |

## Notifikasi, footer, dan pemuatan saat kirim

| Fungsi | Parameter | Nilai kembali | Tujuan |
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

| Fungsi | Parameter | Nilai kembali | Tujuan |
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
| `isLocalHistoryEnabled` | — | `boolean` | Membaca apakah riwayat lokal aktif; default aktif. |
| `readTimeFormat` | — | `string` | Membaca format waktu: otomatis, 12 jam, atau 24 jam. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Memformat waktu pertama kali terdeteksi sesuai bahasa dan format waktu. |
| `getQueueNoticeLocale` | — | `string` | Mengembalikan bahasa aktif untuk pemberitahuan antrean kosong. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Memindahkan pilihan bahasa lama ke pengaturan bersama dan menyelaraskan URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Memperbarui waktu deteksi awal yang ditampilkan. |

## Alur pengiriman

| Fungsi | Parameter | Nilai kembali | Tujuan |
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
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Menjalankan pemeriksaan keamanan, menampilkan lapisan pemuatan, dan mengirim formulir. |
| `submitVerdictsDirect` | — | `boolean` | Menyiapkan label lalu mengirim. |
| `invokeProceedAction` | — | `boolean` | Penangan Enter/klik: penekanan pertama menyiapkan, kedua mengirim. |
| `installProceedShortcut` | — | `void` | Pendengar fase capture untuk `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Membatalkan persiapan dari tekan pertama pada pengiriman dua tahap atau mengeklik tombol “Cancel” yang terlihat; false jika tidak ada yang dapat dibatalkan. |
| `refreshCancelButtonLabel` | — | `void` | Menambahkan atau memperbarui lencana tombol pada “Cancel”. |
| `hookProceedButton` | — | `void` | Mengganti perilaku klik tombol kirim asli. |
| `installVerdictChangeReset` | — | `void` | Melepas kesiapan kirim dan menyinkronkan ulang preset saat vonis berubah. |
| `scheduleProceedFooterFix` | — | `void` | Pemanggilan `fixProceedFooter` yang ditunda (`requestAnimationFrame`). |
| `scheduleVerdictLabelsFix` | — | `void` | Normalisasi ulang label/judul/default yang ditunda. |

## Registri pintasan dan penggantian tombol

| Action | Default | Group | Deskripsi |
|---|---|---|---|
| `playPause` | `Space` | Playback | Menjeda atau melanjutkan klip. |
| `mute` | `M` | Playback | Membisukan atau mengaktifkan suara. |
| `fullscreen` | `F` | Playback | Masuk atau keluar dari layar penuh. |
| `seekBack` / `seekForward` | `←` / `→` | Navigasi | Melompat mundur/maju 5 detik. |
| `frameBack` / `frameForward` | `,` / `.` | Navigasi | Melangkah mundur/maju satu bingkai. |
| `speedBoost` | `Shift` | Navigation | Mempercepat pemutaran selama tombol ditahan; satu-satunya tindakan yang dapat menggunakan Shift. |
| `quick1` … `quick5` | `1` … `5` | Keputusan | Formulir klasik: preset 1–5. Tugas satu pertanyaan: Cheating / Not sure / No cheats seen (`1`–`3`). |
| `proceed` | `Enter` | Submission | Mengonfirmasi keputusan atau menyiapkan dan mengirim formulir klasik. |
| `cancel` | `Esc` | Submission | Menekan “Cancel” atau membatalkan tekan Enter pertama. |
| `inviteDone` | `Enter` | Invite page | Meninggalkan halaman undangan, sama seperti tombol “Done”. |
| `inviteClose` | `Esc` | Invite page | Melakukan tindakan yang sama dengan tombol ×. |
| `settings` | `F2` | Interface | Membuka atau menutup dialog pengaturan. |

Penetapan disimpan sebagai nilai `KeyboardEvent.code` di `demoscopeKeybindings` (hanya perubahan dari bawaan; tombol pengaturan memiliki entri sendiri). Modifier kiri/kanan dihitung sebagai satu tombol dan numpad mengikuti baris utama. Tombol yang tidak dapat ditetapkan: `Tab`, `Ctrl`, `Alt`, `Meta`, `Caps Lock`, `ContextMenu`, `F5`, `F11`, `F12`. Cakupan konflik: tindakan `review`, tindakan `invite`, dan tombol pengaturan `global` yang berbenturan dengan semuanya.

| Fungsi | Parameter | Nilai kembali | Tujuan |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Mengganti placeholder {name} dalam templat lokal. |
| `isModalOpen` | — | `boolean` | True selama ada <dialog> yang terbuka; pintasan halaman tidak aktif saat itu. |
| `normalizeKeyCode` | `code: string` | `string` | Menyatukan pengubah kiri/kanan dan memetakan angka numpad serta NumpadEnter ke tombol baris utama. |
| `formatKeyLabel` | `code: string` | `string` | Nama tampilan tombol (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Membaca dan memvalidasi pintasan tersimpan (di-cache; {} jika terjadi kesalahan). |
| `saveKeyOverrides` | `overrides: object` | `void` | Menyimpan pintasan atau menghapus entri jika semuanya menggunakan nilai bawaan. |
| `getBinding` | `id: string` | `string` | Mengambil tombol aktif suatu tindakan; string kosong berarti belum ditetapkan. |
| `setBinding` | `id: string, code: string` | `void` | Menyimpan tombol untuk tindakan; kode kosong menghapus penetapan, nilai bawaan tidak disimpan. |
| `resetAllBindings` | — | `void` | Mengembalikan semua pintasan, termasuk tombol pengaturan, ke nilai bawaan. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Mencari tindakan lain yang memakai tombol sama dalam cakupan yang bertumpang tindih. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Menentukan ID tindakan dari peristiwa keyboard untuk cakupan halaman saat ini. |
| `keyScopeOf` | `id: string` | `string` | Cakupan tindakan: review, invite, atau global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | True jika dua cakupan dapat bertabrakan (sama atau salah satunya global). |
| `currentKeyScope` | — | `string` | Mengembalikan invite pada halaman undangan, dan review pada halaman lain. |
| `validateKeyForAction` | `id: string, code: string` | `string` | String kosong jika tombol dapat ditetapkan, reserved untuk tombol browser/navigasi, shift jika Shift dipilih untuk tindakan yang tidak ditahan. |
| `quickRangeLabel` | `count: number` | `string` | Label tombol keputusan cepat: 1–5 jika belum diubah, atau tombol yang sudah ditetapkan. |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Membuat petunjuk tombol di bawah video berdasarkan penetapan aktif. |
| `refreshKeyLabels` | — | `void` | Memperbarui semua label tombol pada halaman: petunjuk, lencana, tombol Lanjutkan/Batal/Undangan, dan ringkasan pengaturan. |
| `ensureDemoscopeDialogStyles` | — | `void` | Menyisipkan tampilan bersama untuk jendela Pintasan dan Animasi. |
| `hkActionName` | `id: string` | `string` | Nama tindakan lokal. |
| `hkGroupName` | `group: string` | `string` | Nama grup lokal. |
| `hkActionDescription` | `id: string` | `string` | Deskripsi lokal mengenai fungsi tindakan; keputusan cepat dijelaskan untuk kedua jenis tugas. |
| `hkSetMessage` | `text: string, warn = false` | `void` | Mengatur baris status jendela Pintasan. |
| `hkCancelCapture` | — | `void` | Keluar dari mode penangkapan tombol. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Markup HTML untuk satu baris tindakan, termasuk panel konflik jika ada. |
| `renderHotkeys` | — | `void` | Merender ulang seluruh jendela dan mempertahankan posisi gulir. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Menetapkan tombol; replace melepas tombol dari tindakan lain, swap menukar tombol. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Menetapkan tombol langsung atau membuka panel konflik (Replace / Swap / Cancel) jika tombol sudah dipakai. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Membuat jendela Pintasan dan listener tombol fase tangkap; Esc dapat ditetapkan dan tidak menutup jendela selama penangkapan. |
| `openHotkeysDialog` | — | `void` | Membuka jendela Pintasan. |

## Animasi

Enam gaya indikator (`pulse`, `breathe`, `ripple`, `heartbeat`, `orbit`, `blink`), tiga kecepatan (0.6× / 1× / 1.7×), dan status aktif/nonaktif disimpan pada `demoscopeAnimStyle`, `demoscopeAnimSpeed`, dan `demoscopeAnimEnabled`. Gaya aktif diatur lewat `data-ds-anim` pada `<html>` (`off` jika nonaktif); stylesheet mengatur titik langsung dan pratinjau.

| Fungsi | Parameter | Nilai kembali | Tujuan |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Membaca localStorage dengan aman. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Menulis localStorage dengan aman; nilai null menghapus kunci. |
| `animEnabled` | — | `boolean` | Status animasi tersimpan; bawaan mati jika sistem meminta pengurangan gerakan. |
| `animStyle` | — | `string` | Gaya tersimpan (bawaan pulse). |
| `animSpeedKey` | — | `string` | Kecepatan tersimpan (slow / normal / fast; bawaan normal). |
| `ensureAnimationStyles` | — | `void` | Menyisipkan keyframe dan aturan bersama untuk titik indikator serta titik pratinjau. |
| `applyAnimationSettings` | — | `void` | Menerapkan gaya, kecepatan, dan status aktif ke <html>, lalu memperbarui ringkasan pengaturan. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Membuat jendela Animasi dengan sakelar, kecepatan, kartu gaya dengan pratinjau langsung, dan reset. |
| `openAnimationsDialog` | — | `void` | Membuka jendela Animasi. |
| `ensureUiPolishStyles` | — | `void` | Menambahkan scrollbar gelap dan tipis serta color-scheme: dark pada jendela dan daftar keputusan. |

## Tugas satu pertanyaan

| Fungsi | Parameter | Nilai kembali | Tujuan |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | True saat halaman menampilkan formulir satu pertanyaan (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | Mengeklik radio Cheating / Not sure / No cheats seen; jika masih terkunci, memutar bunyi kesalahan dan menggoyangkan kartu kunci. |
| `localizeCheatingVerdicts` | — | `void` | Mengubah tiga label ke bahasa DemoScope dan menggambar lencana tombol dengan CSS agar teks konfirmasi VACNet tidak memuat angka tombol. Juga menyiapkan kartu kunci. |
| `updateCheatingLock` | — | `void` | Memperbarui kartu kunci dan bilah progres dengan sisa waktu hingga dua keputusan lain terbuka; menyembunyikannya setelah terbuka atau keputusan dipilih. |
| `startCheatingLockWatcher` | — | `void` | Memulai timer 250 ms yang memanggil updateCheatingLock. |

## Ketahanan dan diagnostik

| Fungsi | Parameter | Nilai kembali | Tujuan |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Mencatat langkah gagal untuk laporan diagnostik; jumlah catatan dibatasi. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Menjalankan langkah penyiapan; jika gagal, mencatatnya dan mengembalikan nilai cadangan agar langkah selanjutnya tetap berjalan. |
| `getVideoContainer` | — | `HTMLElement \| null` | Mencari kontainer video, dengan fallback ke induk pemutar atau elemen <video>. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Mencari kontainer keputusan, dengan fallback ke induk blok keputusan pertama. |
| `getSubmitArea` | — | `HTMLElement \| null` | Mencari area kirim/konfirmasi (#submitbuttons, .submitbuttons, atau induk tombol kirim). |
| `hasVerdictForm` | — | `boolean` | True jika setidaknya ada satu radio keputusan. |
| `removeEnhancements` | — | `void` | Menghapus panel, kelas, dan perubahan footer DemoScope lalu memulihkan footer VACNet. |
| `disableDemoScope` | `reason: string` | `void` | Menonaktifkan DemoScope pada halaman ini, membatalkan perubahan, menyisakan jendela pengaturan, dan menampilkan pemberitahuan sekali per alasan dalam sesi. |
| `isOwnNode` | `el: Element` | `boolean` | True untuk elemen yang dibuat DemoScope; elemen ini dikecualikan dari laporan struktur. |
| `elementSignature` | `el: Element` | `string` | Tanda tangan tag#id.class[…] untuk laporan struktur; tidak memuat teks. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Pohon ringkas bertingkat dari tag, ID, dan kelas; saudara identik diringkas sebagai ×N. |
| `captureOriginalSkeleton` | — | `void` | Mencatat struktur halaman sebelum DemoScope mengubahnya. |
| `buildDiagnosticsReport` | — | `string` | Membuat laporan berisi versi, halaman, bahasa, browser, jenis tugas, 22 pemeriksaan elemen, kegagalan langkah, dan struktur sebelum/sesudah. Tidak memuat teks halaman atau data akun. |
| `fallbackCopyText` | `text: string` | `boolean` | Menyalin teks melalui textarea sementara jika Clipboard API tidak tersedia. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Menyalin laporan; jika gagal, menampilkan teks dalam kotak yang dapat dipilih. |

## Tata letak dan inisialisasi

| Fungsi | Parameter | Nilai kembali | Tujuan |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Membangun bilah pemilih kecepatan Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | Markup satu tombol preset. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | Markup grup preset lanjutan. |
| `buildEnhancementBar` | — | `HTMLElement` | Membangun bilah vonis cepat: preset, sakelar pengacak, laci lanjutan. |
| `positionShiftSpeedBar` | — | `void` | Menjaga bilah kecepatan berada sebelum daftar vonis. |
| `positionEnhancementBar` | — | `void` | Menjaga bilah preset berada sebelum tombol kirim. |
| `fixProceedFooter` | — | `void` | Menata ulang footer, bilah, dan tombol kirim. |
| `enhanceLayout` | — | `void` | Menerapkan semua perubahan tata letak dan memasang UI pengaturan. |
| `ensureReviewStructure` | — | `void` | Menormalkan markup VACNet: membungkus blok keputusan dalam .verdicts-container-inner, memindahkan #submitbuttons ke kontainer, dan menampilkan penghitung klip di lencana header. Mendukung markup lama dan desain ulang. |
| `watchProceedFooter` | — | `void` | Mengamati `.verdicts-container` dan menjadwalkan perbaikan footer. |
| `watchVerdictLabels` | — | `void` | Mengamati label vonis dan menjadwalkan normalisasi ulang. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Membaca preferensi visibilitas footer dari localStorage. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Menyimpan preferensi visibilitas footer. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Membuat atau memperbarui footer lokal, dengan tautan opsional, lalu menerapkan preferensi. |
| `installEmptyQueueNotice` | — | `boolean` | Mengganti pesan antrean kosong dengan panduan lokal, waktu, pemilih bahasa, dan footer. |
| `init` | — | `Promise<void>` | Titik masuk: kontrol nama akun → halaman undangan atau tinjauan → tata letak, pengamat, pintasan, peningkatan pemutar. |

`installWelcomePage` dan `installInvitePage` mengembalikan `false` when required VACNet page elements are unavailable. `installEmptyQueueNotice` mengembalikan `false` when the page is not the empty-queue state.

### Tidak tercantum di atas

* **`blockSegmentLoopGuard`** (IIFE, berjalan saat dimuat): membungkus `setInterval` halaman dan mengganti timer loop segmen bawaan 100 ms dengan fungsi kosong; kontrol DemoScope sendiri yang menangani segmen.
* **Konstanta dan tabel:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitions); added since v1.0.0: `KEY_ACTIONS`, `KEY_GROUPS`, `KEY_ACTION_BY_ID`, `KEY_ACTION_SCOPE`, `RESERVED_KEY_CODES`, `CHEATING_KEYS`, `VERDICT_SECTION_TITLES`, `VERDICT_SECTION_HELP`, `ANIM_STYLES`, `ANIM_SPEEDS`.
* **Status modul:** `diag` (step failures, the switch-off reason and the original page structure), `hkState` (state of the Hotkeys window) and the `SCRIPT_VERSION` constant used by the diagnostics report.
* **Teks:** semua teks yang terlihat pengguna ada dalam tabel lokal di atas; jendela yang ditambahkan pada v1.2.0–v1.4.0 diterjemahkan ke 29 bahasa.

## Kunci penyimpanan

| Kunci | Lokasi | Tujuan |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Bahasa pilihan / mode otomatis. |
| `demoscopeKeybindings` | `localStorage` | Pintasan yang berbeda dari nilai bawaan (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Tombol untuk membuka dialog pengaturan (none jika dihapus). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Pengaturan animasi indikator. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Pengaturan suara. |
| `demoscopeClipHistory` dan kunci batas/format riwayat | `localStorage` | Riwayat peninjauan lokal dan pengaturannya. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Status pemuatan kiriman, pelindung sinkronisasi bahasa, dan pemberitahuan sekali saat dinonaktifkan. |










