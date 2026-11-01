<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · **Bahasa Indonesia** · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>
# DemoScope v1.4.0

Rilis perlindungan mandiri: DemoScope kini menangani perubahan halaman VACNet alih-alih rusak di tengah proses, serta memberi tahu Anda dan pengembang tentang penyebabnya.

### Ditambahkan
- **Langkah penyiapan terisolasi.** Setiap langkah tata letak dan instalasi berjalan sendiri. Jika gagal, kegagalan dicatat dan langkah lainnya tetap berjalan.
- **Pencarian alternatif** untuk wadah video, wadah putusan, dan area pengiriman. Jika VACNet mengganti nama kelas wadah video, DemoScope menemukannya melalui elemen pemutar.
- **Penonaktifan yang aman.** Jika video atau formulir putusan tidak ada, atau lima langkah penyiapan atau lebih gagal, DemoScope membatalkan perubahannya sendiri, memulihkan footer VACNet, menyisakan jendela pengaturan, dan menampilkan pemberitahuan satu kali. Halaman antrean kosong tetap dikenali seperti sebelumnya dan tidak memicu penonaktifan.
- **Laporan diagnostik** (Settings → Diagnostics → Copy diagnostics): versi, waktu, bahasa, browser, jenis halaman dan tugas, 22 pemeriksaan elemen (`ok` / `MISSING`), kegagalan langkah, serta struktur halaman sebelum dan setelah DemoScope mengubahnya. Struktur hanya memuat tag, ID, dan kelas; tidak ada teks halaman. Jika clipboard diblokir, laporan muncul di kotak yang dapat dipilih.
- Tunggu hingga 2 s sebelum menilai halaman yang baru dimuat sebagian.

### Lokalisasi
- 6 string baru untuk diagnostik, hasil penyalinan, dan pemberitahuan penonaktifan dalam seluruh 29 bahasa.

# DemoScope v1.3.0

Penyempurnaan pengaturan, halaman undangan, dan teks putusan.

### Ditambahkan
- **Tombol tutup halaman undangan.** Tanda × di sudut kartu kembali ke klip seperti “Done”.
- **Pintasan halaman undangan:** `Enter` menjalankan “Done”, `Esc` menutup halaman. Pintasan diabaikan saat tombol, tautan, kolom, dialog, atau daftar bahasa sedang fokus. Keduanya dapat diubah di Hotkeys, grup “Invite page”.
- **Konflik tombol berdasarkan halaman.** Halaman undangan tidak memiliki pemutar, jadi `Enter` / `Esc` di sana tidak lagi berbenturan dengan tombol yang sama di halaman peninjauan. Tombol pengaturan tetap berlaku global.
- **Scrollbar gelap dan tipis** pada pengaturan, jendela tambahan, dan daftar putusan, serta color-scheme gelap.

### Diubah
- **Jendela pengaturan didesain ulang.** Bagian diurutkan berdasarkan frekuensi penggunaan: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (ditambahkan di v1.4.0), Reset. Hotkeys dan Animations menampilkan ringkasan yang diperbarui saat pengaturan berubah.
- **Satu reset untuk semua.** Memulihkan suara, volume, pintasan, dan animasi; riwayat tetap disimpan.
- Tombol untuk membuka pengaturan kini diubah dari jendela Hotkeys.
- **Angka tombol dihapus dari teks konfirmasi putusan.** Ini mencegah teks seperti “2Not sure” dan “3No cheats seen”; lencana tombol kini digambar dengan CSS.
- Opsi 2 pada tugas satu pertanyaan kini berbunyi “Not sure” dengan sudut pandang orang pertama seperti kalimat VACNet.

### Lokalisasi
- 12 string baru untuk ringkasan, reset, tindakan halaman undangan, dan “Not sure” dalam seluruh 29 bahasa.

Pengaturan CSS: `color-scheme: dark`.

Tombol “Done” juga menampilkan tombol yang ditetapkan.

# DemoScope v1.2.1

### Lokalisasi
- Jendela Hotkeys dan Animations (77 string per bahasa) kini diterjemahkan ke 27 bahasa lainnya; sebelumnya hanya tersedia dalam bahasa Inggris dan Rusia.

# DemoScope v1.2.0

Pintasan, animasi, dan perbaikan pemuatan.

### Ditambahkan
- **Jendela Hotkeys** (Settings → Hotkeys): seluruh 18 pintasan dapat diubah, dikelompokkan berdasarkan tindakan, disertai deskripsi dan tombol reset. “Reset all” meminta konfirmasi kedua.
  - **Penanganan konflik.** Jika tombol sudah dipakai, tindakan, grup, dan fungsinya ditampilkan; pilih Replace, Swap, atau Cancel.
  - `Esc` dapat ditetapkan dan tidak menutup jendela saat tombol sedang direkam. `Tab`, tombol modifier, Caps Lock, `F5`, `F11`, dan `F12` ditolak; `Shift` hanya diizinkan untuk tindakan tahan “Speed boost”.
  - Petunjuk di bawah video, lencana, dan tombol Continue/Cancel mengikuti pemetaan tombol.
- `Esc` membatalkan putusan yang menunggu konfirmasi dan langkah `Enter` pertama pada pengiriman dua tahap.
- **Jendela Animations** (Settings → Animations): enam gaya, pratinjau langsung, tiga kecepatan, dan sakelar aktif/nonaktif. Jika sistem meminta pengurangan gerakan, animasi dinonaktifkan.
- `Enter` dan `Esc` juga berfungsi saat tombol radio putusan sedang fokus.

### Diperbaiki
- **“loading next clip” berlangsung lama** setelah pengiriman pada tugas satu pertanyaan: pemeriksaan kesiapan tidak lagi menunggu kolom `aimassist` yang tidak ada, menerima formulir putusan dan metadata media, dimulai lebih awal, serta menutup overlay secara senyap setelah 3 detik di halaman tanpa klip.
- Pintasan halaman (`Space`, `Enter`, dll.) tidak lagi memengaruhi halaman di balik dialog terbuka.

### Lokalisasi
- Hotkeys dan Animations awalnya dibuat dalam bahasa Inggris dan Rusia; terjemahan lain ditambahkan di v1.2.1.

Enam gaya tersebut adalah pulse, breathe, ripple, heartbeat, orbit, dan blink.

# DemoScope v1.1.0

Dukungan untuk tugas satu pertanyaan VACNet.

### Ditambahkan
- **Tugas satu pertanyaan.** VACNet terkadang menampilkan “Is the Subject cheating beyond a reasonable doubt?” dengan jawaban Cheating / Uncertain / No cheats seen. DemoScope mengenalinya dan beralih ke tata letak ringkas tanpa putusan cepat, kombinasi lanjutan, atau pengacak.
- Label putusan dengan bahasa DemoScope, lencana tombol `1–3`, dan pintasan terkait.
- **Indikator terkunci.** Uncertain dan No cheats seen terbuka setelah klip selesai. Kartu menampilkan waktu tersisa dan progres; opsi terkunci diredupkan, dan menekan tombolnya memutar bunyi kesalahan serta menggoyangkan kartu.
- Petunjuk di bawah video berubah menjadi `Enter` dan `1–3`; tombol putusan dibuat lebih tinggi.

### Lokalisasi
- 5 string baru (label, judul, penjelasan, pesan terkunci) dalam seluruh 29 bahasa.

# DemoScope v1.0.6

### Ditambahkan
- **Penjelasan bawaan DemoScope** untuk empat kategori putusan dalam seluruh 29 bahasa. Popover “?” kini tidak bergantung pada teks pertanyaan VACNet berbahasa Inggris yang muncul pada beberapa bahasa, misalnya Ukraina.

# DemoScope v1.0.5

### Ditambahkan
- **Tombol bantuan “?”** di samping AIM ASSIST, WALL HACK, AUTO BHOP, dan BOT membuka penjelasan. Tutup dengan mengeklik di luar, mengeklik lagi, atau menekan `Esc`. Tombol tidak menerima fokus keyboard agar `Enter` dan `Space` tetap berfungsi untuk peninjauan.

### Diperbaiki
- Tombol Local history kini berukuran seperti lencana di sebelahnya, tidak membungkus teks, memendekkan label panjang, dan baris lencana membungkus alih-alih menyempit.

# DemoScope v1.0.4

### Diperbaiki
- **Teks putusan tetap menggunakan bahasa browser** setelah bahasa diubah di DemoScope. VACNet menggunakan parameter Steam `?l=`, sementara DemoScope sebelumnya hanya mengubah labelnya sendiri. Halaman peninjauan kini dibuka dengan `?l=` pilihan; halaman tanpa parameter diminta ulang sekali. Bahasa yang dipakai VACNet dibaca dari `l=` pada URL CSS dan skrip; batas satu percobaan mencegah loop pengalihan jika bahasanya tidak didukung.

# DemoScope v1.0.3

### Diubah
- **Penyorotan frasa kunci dikembalikan** pada tombol putusan: frasa yang dicari dicetak tebal warna oranye, sedangkan “not” pada jawaban negatif berwarna biru lembut. Tombol terpilih tetap mudah dibaca.
- `normalizeVerdictLabels` kini hanya membuka pembungkus b sehingga markup penyorotan tetap ada.

Elemen HTML: `<b>`.

# DemoScope v1.0.2

### Diperbaiki
- **`Space`, `M`, dan `F` tampak tidak berfungsi** karena VACNet / Video.js memproses tombol yang sama sekali lagi. DemoScope kini menangani tombol tersebut.
- Di Firefox, melepas `Space` tidak lagi mengeklik tombol pemutar yang sedang fokus.
- Pintasan pemutar tetap aktif saat radio putusan sedang fokus.

# DemoScope v1.0.1

Kompatibilitas dengan halaman peninjauan VACNet yang didesain ulang.

### Diperbaiki
- **Panel hanya terbentuk sebagian** setelah perubahan VACNet: header portal, kartu instruksi, tata letak grid, hilangnya verdicts-container-inner, serta pemindahan submitbuttons memicu kesalahan `insertBefore`. Langkah `ensureReviewStructure` menormalkan markup agar tata letak lama dan baru berfungsi.

### Diubah
- Header portal dan kartu instruksi disembunyikan; penghitung klip disalin ke lencana header.
- Tombol Continue melekat di bawah panel agar tetap terlihat saat terjemahan panjang memperbesar daftar.

Selektor teknis: `.verdicts-container-inner`, `#submitbuttons`.

# DemoScope v1.0.0

Rilis publik pertama userscript DemoScope untuk halaman peninjauan CS2 VACNet.

### Ditambahkan
- Antarmuka 29 bahasa, pilihan bahasa otomatis, lima preset putusan cepat, dan 15 kombinasi lanjutan.
- Kontrol video per segmen, langkah per bingkai, akselerasi `Shift`, `Space` putar/jeda, `M` senyap, `F` layar penuh, dan pengiriman putusan dua tahap dengan `Enter`.
- Riwayat tinjauan lokal yang dapat diatur, impor/ekspor JSON, laporan HTML, dan penggabungan beberapa cadangan JSON.
- Halaman undangan yang ditingkatkan, pengaturan suara, pintasan pengaturan, penyembunyian nama akun, dialog aturan tinjauan, dan pengacak putusan opsional (nonaktif secara default).

### Privasi
- Tidak ada telemetri; pengaturan dan riwayat lokal tidak diunggah. Putusan dikirim ke VACNet melalui formulir situs biasa.







