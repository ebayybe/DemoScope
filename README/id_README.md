<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · **Bahasa Indonesia** · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Toolkit userscript berbasis keyboard untuk peninjau CS2 VACNet: preset vonis, pemutar video yang sadar segmen, peningkatan halaman undangan, efek suara, dan riwayat lokal pribadi — dalam 29 bahasa.**

</div>

## Ringkasan

DemoScope meningkatkan halaman tinjauan Counter-Strike VACNet (`counter-strike.net/vacnet`). Alih-alih mengeklik empat grup vonis (aim assist, wallhack, auto-bhop, bot) untuk setiap klip pendek, Anda mendapat alur kerja berbasis keyboard: vonis preset, bilah pencarian yang dibatasi pada segmen yang ditinjau, lompat per bingkai, percepatan sementara, konfirmasi pengiriman dua langkah, dan riwayat pribadi vonis Anda sendiri. Semuanya berjalan secara lokal di browser Anda.

## Fitur Utama

- **Preset vonis** – 5 preset cepat pada tombol `1`–`5` ditambah 15 kombinasi lanjutan (aim, wallhack, bhop, bot dan campurannya, termasuk varian “tidak yakin”).
- **Pemutar sadar segmen** – bilah pencarian, penampil waktu, lompatan ±5 dtk, dan langkah bingkai 1/64 dtk yang dibatasi pada awal/akhir klip.
- **Tahan untuk mempercepat** – tahan `Shift` untuk memutar dengan kecepatan yang dapat diatur (0,5×–4×, default 2×).
- **Pengiriman dua langkah yang aman** – `Enter` mengaktifkan tombol, `Enter` kedua mengirim vonis; tujuan formulir lintas-origin diblokir.
- **Antarmuka 29 bahasa** – mengikuti parameter `?l=` Steam, pilihan tersimpan, atau bahasa browser, dengan pemilih bahasa di halaman.
- **Riwayat tinjauan lokal** – riwayat per klip dan per gim di `localStorage`; ekspor/impor JSON, laporan HTML, dan penggabungan banyak cadangan menjadi satu laporan.
- **Peningkatan halaman undangan** – `/vacnet/createinvite` yang didesain ulang dengan tampil/sembunyi dan salin tautan undangan sekali klik, plus ringkasan persyaratan.
- **Efek suara** – nada Web Audio sintetis dengan sakelar hidup/mati, volume, dan pratinjau.
- **Dialog pengaturan** – buka dengan `F2` (dapat diubah): suara, pintasan, batas riwayat, cadangan, setel ulang ke default.
- **Kemudahan** – lapisan pemuatan setelah pengiriman, notifikasi, sembunyikan nama akun, dialog aturan tinjauan, dan pengacak vonis opsional (nonaktif secara default).

## Instalasi

1. Pasang pengelola userscript seperti [Tampermonkey](https://www.tampermonkey.net/) atau [Violentmonkey](https://violentmonkey.github.io/) (skrip memakai `GM_addStyle` dan `unsafeWindow`).
2. [Pasang DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) dan konfirmasi instalasi di pengelola Anda.
3. Masuk ke Steam dan buka <https://www.counter-strike.net/vacnet/>.
4. Buka klip tinjauan — DemoScope dimuat otomatis (halaman `/vacnet/join` dikecualikan).

## Penggunaan

Pintasan berfungsi di halaman tinjauan selama fokus tidak berada di kolom input, tombol, tautan, atau menu pilihan.

| Tombol | Aksi |
|---|---|
| `1` … `5` | Terapkan preset vonis: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 pemain bersih, 5 tidak yakin |
| `Shift` (hold) | Tahan untuk percepatan (0,5×–4×, default 2×, dapat dipilih di halaman) |
| `←` `→` | Lompat 5 detik mundur / maju |
| `,` `.` | Satu bingkai (1/64 dtk) mundur / maju |
| `Space` | Putar / jeda |
| `M` / `F` | Bisukan / layar penuh (klik dua kali pada video juga mengalihkan layar penuh) |
| `Enter` ×2 | Tekan sekali untuk mengaktifkan tombol kirim, tekan lagi untuk mengirim vonis |
| `F2` | Buka dialog pengaturan (dapat diubah) |

## Arsitektur dan Rincian Fungsi

DemoScope adalah satu fungsi yang langsung dijalankan (`@run-at document-start`, `@noframes`). `init()` memilih antara halaman undangan dan halaman tinjauan lalu menghubungkan modul di bawah. Referensi lengkap untuk seluruh 143 fungsi — nama, tanggung jawab, parameter, dan nilai kembali — ada di [id_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/id_FUNCTIONS.md).

| Modul | Tanggung jawab | Fungsi utama |
|---|---|---|
| `Localization` | Menentukan bahasa antarmuka, mencari teks, menggambar bendera dan pemilih bahasa | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Membaca awal/akhir klip dari halaman, membungkus pemutaran Video.js/HTML5, menonaktifkan timer pengulangan segmen bawaan situs | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Bilah pencarian kustom, petunjuk tombol, percepatan Shift, langkah bingkai, pintasan keyboard | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Tabel preset, status pilihan, penerapan preset dengan urutan dan jeda acak opsional | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Enter dua langkah, membuat `verdict_labels[]`, pemeriksaan same-origin, lapisan pemuatan | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Menyimpan, memangkas, dan menampilkan riwayat per klip dan per gim di `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | Ekspor/impor JSON, laporan HTML, laporan gabungan dari banyak cadangan | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Dialog pengaturan, pintasan yang dapat diubah, nada suara Web Audio | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | `/vacnet/createinvite` yang didesain ulang: tampil/sembunyi dan salin tautan undangan, persyaratan | `installInvitePage` |
| `Layout & UI helpers` | Notifikasi, penyembunyian footer, pengamat tata letak, sakelar nama akun | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Titik masuk: menentukan jenis halaman dan memulai modul | `init` |

## Data Lokal dan Privasi

DemoScope tidak mengirim telemetri. Pengaturan dan riwayat tetap berada di `localStorage` browser Anda (kunci berawalan `demoscope`) dan `sessionStorage`. Gunakan opsi hapus riwayat di dialog pengaturan untuk menghapus riwayat.

## Penafian

DemoScope adalah proyek komunitas tidak resmi, tidak berafiliasi dengan atau didukung oleh Valve Corporation. Alat ini tidak pernah memutuskan vonis untuk Anda — tinjau setiap klip sendiri dan patuhi aturan program tinjauan. Gunakan dengan risiko Anda sendiri.

## License

Dirilis di bawah lisensi [MIT](../LICENSE).