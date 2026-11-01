<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · **Türkçe** · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>
# DemoScope v1.4.0

Kendi kendini koruma sürümü: DemoScope artık VACNet sayfasındaki değişikliklerle başa çıkıyor, yarıda bozulmuyor ve size ve geliştiriciye ne olduğunu bildiriyor.

### Eklendi
- **Yalıtılmış kurulum adımları.** Her düzen ve kurulum adımı ayrı çalışır. Bir adım başarısız olursa hata kaydedilir ve diğer adımlar devam eder.
- Video kapsayıcısı, karar kapsayıcısı ve gönderim alanı için **yedek bulma yöntemleri**. VACNet video kapsayıcısı sınıfını yeniden adlandırırsa DemoScope, oynatıcı öğesi üzerinden bulur.
- **Sorunsuz kapatma.** Video veya karar formu yoksa ya da en az beş kurulum adımı başarısız olursa DemoScope kendi değişikliklerini geri alır, VACNet altbilgisini geri yükler, yalnızca ayarlar penceresini bırakır ve bir kez bildirim gösterir. Boş kuyruk sayfası önceki gibi tanınır ve bu davranışı tetiklemez.
- **Tanılama raporu** (Settings → Diagnostics → Copy diagnostics): sürüm, saat, dil, tarayıcı, sayfa ve görev türü, 22 öğe kontrolü (`ok` / `MISSING`), adım hataları ve DemoScope müdahalesinden önceki/sonraki sayfa yapısı. Yapı yalnızca etiket, kimlik ve sınıfları içerir; sayfa metnini içermez. Pano engelliyse rapor seçilebilir bir kutuda gösterilir.
- Kısmen yüklenmiş bir sayfayı değerlendirmeden önce 2 s'ye kadar bekleme.

### Yerelleştirme
- Tanılama, kopyalama sonuçları ve kapatma bildirimi için 6 yeni dize, 29 dilin tamamında eklendi.

# DemoScope v1.3.0

Ayarlar, davet sayfası ve karar metinlerinde iyileştirmeler.

### Eklendi
- **Davet sayfasını kapatma düğmesi.** Kartın köşesindeki ×, “Done” gibi kliplere döner.
- **Davet sayfası kısayolları:** `Enter` “Done” işlemini yapar, `Esc` sayfayı kapatır. Düğme, bağlantı, alan, iletişim kutusu veya dil listesi odaktayken yoksayılır. Hotkeys penceresindeki “Invite page” grubundan değiştirilebilir.
- **Sayfaya özel tuş çakışmaları.** Davet sayfasında oynatıcı olmadığından `Enter` / `Esc`, inceleme sayfasındaki aynı tuşlarla artık çakışmaz. Ayarlar tuşu genel kalır.
- Ayarlar, alt pencereler ve karar listesinde **koyu, ince kaydırma çubukları**; ayrıca koyu color-scheme.

### Değiştirildi
- **Ayarlar penceresi yeniden tasarlandı.** Bölümler kullanım sıklığına göre sıralanır: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (v1.4.0'da eklendi), Reset. Hotkeys ve Animations değiştikçe güncellenen özetler gösterir.
- **Her şey için tek sıfırlama.** Ses, ses düzeyi, kısayollar ve animasyonları geri yükler; geçmiş korunur.
- Ayarlar penceresi kısayolu artık Hotkeys içinden düzenlenir.
- **Karar onay metninden tuş numarası kaldırıldı.** Böylece “2Not sure” ve “3No cheats seen” metinleri oluşmaz; tuş rozeti CSS ile çizilir.
- Tek sorulu görevin 2. seçeneği artık “Not sure”; VACNet metni gibi birinci kişi ağzındadır.

### Yerelleştirme
- Özetler, sıfırlama, davet sayfası işlemleri ve “Not sure” için 12 yeni dize 29 dilin tamamına eklendi.

CSS ayarı: `color-scheme: dark`.

“Done” düğmesi atanan tuşu da gösterir.

# DemoScope v1.2.1

### Yerelleştirme
- Hotkeys ve Animations pencereleri (dil başına 77 dize) kalan 27 dile çevrildi; önceden yalnızca İngilizce ve Rusça vardı.

# DemoScope v1.2.0

Kısayollar, animasyonlar ve yükleme düzeltmesi.

### Eklendi
- **Hotkeys penceresi** (Settings → Hotkeys): 18 kısayolun tümü yeniden atanabilir, eyleme göre gruplanır, açıklama ve sıfırlama düğmesi içerir. “Reset all” ikinci bir onay ister.
  - **Çakışma yönetimi.** Kullanımdaki tuşun eylemi, grubu ve işlevi gösterilir; Replace, Swap veya Cancel seçilebilir.
  - `Esc` atanabilir ve tuş yakalanırken pencereyi kapatmaz. `Tab`, değiştirici tuşlar, Caps Lock, `F5`, `F11` ve `F12` reddedilir; `Shift` yalnızca basılı tutulan “Speed boost” eyleminde kullanılabilir.
  - Video altındaki ipuçları, rozetler ve Continue/Cancel düğmeleri atamalara uyar.
- `Esc`, onay bekleyen kararı ve iki aşamalı gönderimin ilk `Enter` adımını iptal eder.
- **Animations penceresi** (Settings → Animations): altı stil, canlı önizleme, üç hız ve açma/kapama seçeneği. Sistem azaltılmış hareket istiyorsa animasyonlar kapalı başlar.
- `Enter` ve `Esc`, karar radyo düğmesi odaktayken de çalışır.

### Düzeltildi
- **Tek sorulu görevde gönderim sonrası uzun “loading next clip”**: kontrol artık bulunmayan `aimassist` alanını beklemez; karar formunu ve medya meta verilerini kabul eder, daha erken başlar ve klip olmayan sayfalardaki katmanı 3 saniye sonra sessizce kapatır.
- Sayfa kısayolları (`Space`, `Enter` vb.) açık iletişim kutusunun arkasındaki sayfada çalışmaz.

### Yerelleştirme
- Hotkeys ve Animations önce İngilizce ve Rusçaydı; diğer çeviriler v1.2.1'de eklendi.

Altı stil: pulse, breathe, ripple, heartbeat, orbit ve blink.

# DemoScope v1.1.0

VACNet'in tek sorulu görevine destek.

### Eklendi
- **Tek sorulu görev.** VACNet bazen “Is the Subject cheating beyond a reasonable doubt?” sorusunu ve Cheating / Uncertain / No cheats seen yanıtlarını gösterir. DemoScope bunu algılar ve hızlı kararlar, genişletilmiş kombinasyonlar ve rastgeleleştirici olmadan kompakt düzene geçer.
- DemoScope dilinde karar etiketleri, `1–3` tuş rozetleri ve karşılık gelen kısayollar.
- **Kilit göstergesi.** Uncertain ve No cheats seen, klip bitince açılır. Kart kalan süreyi ve ilerleme çubuğunu gösterir; kilitli seçenekler soluk görünür, tuşlarına basılması hata sesi çalar ve kartı sallar.
- Video altındaki ipuçları `Enter` ve `1–3` olarak değişir; karar düğmeleri yükseltilir.

### Yerelleştirme
- Etiketler, başlık, açıklama ve kilit mesajı için 5 yeni dize 29 dilin tamamına eklendi.

# DemoScope v1.0.6

### Eklendi
- 29 dilin tamamında dört karar kategorisi için **DemoScope'un kendi açıklamaları**. Bazı dillerde, örneğin Ukraynacada VACNet sorusu İngilizce kaldığından “?” pencereleri artık bu metne bağlı değil.

# DemoScope v1.0.5

### Eklendi
- AIM ASSIST, WALL HACK, AUTO BHOP ve BOT yanındaki **“?” yardım düğmesi** kategori açıklamasını açar. Dışarı tıklayınca, tekrar tıklayınca veya `Esc` ile kapanır. Klavye odağı almaz; böylece `Enter` ve `Space` inceleme işlevlerini korur.

### Düzeltildi
- Local history düğmesi artık komşu rozetlerle aynı boyuttadır, satıra bölünmez, uzun etiketleri kısaltır ve rozet satırı sıkışmak yerine alt satıra geçer.

# DemoScope v1.0.4

### Düzeltildi
- **DemoScope'da dil değiştirildikten sonra karar metni tarayıcı dilinde kaldı.** VACNet Steam'in `?l=` parametresini kullanırken DemoScope yalnızca kendi etiketlerini değiştiriyordu. İnceleme sayfası artık seçili `?l=` ile açılır; parametre yoksa bir kez yeniden istenir. VACNet'in kullandığı dil CSS ve betik URL'lerindeki `l=` değerinden okunur; tek deneme sınırı, dil desteklenmediğinde yönlendirme döngüsünü önler.

# DemoScope v1.0.3

### Değiştirildi
- Karar düğmelerinde **anahtar ifade vurgusu geri geldi**: aranan ifade kalın turuncu, olumsuz yanıtlardaki “not” ise yumuşak mavidir. Seçili düğmeler okunaklı kalır.
- `normalizeVerdictLabels` artık yalnızca b işaretlemesini kaldırır; böylece vurgu biçimlendirmesi korunur.

HTML öğesi: `<b>`.

# DemoScope v1.0.2

### Düzeltildi
- **`Space`, `M` ve `F` çalışmıyor gibi görünüyordu**, çünkü VACNet / Video.js aynı tuşu ikinci kez işliyordu. DemoScope artık bu tuşları yakalar.
- Firefox'ta `Space` tuşunu bırakmak artık odaktaki oynatıcı düğmesini etkinleştirmez.
- Oynatıcı kısayolları, karar radyo düğmesi odaktayken de çalışır.

# DemoScope v1.0.1

Yeniden tasarlanan VACNet inceleme sayfasıyla uyumluluk.

### Düzeltildi
- **Panel, VACNet yeniden tasarımından sonra kısmen oluşturuluyordu.** Yeni başlık, talimat kartı, ızgara düzeni, verdicts-container-inner yapısının kaldırılması ve submitbuttons öğesinin taşınması `insertBefore` hatasına neden oluyordu. `ensureReviewStructure` adımı eski ve yeni düzen için işaretlemeyi normalleştirir.

### Değiştirildi
- Portal başlığı ve talimat kartı gizlenir; klip sayacı başlık rozetine de yansıtılır.
- Continue düğmesi panelin altına sabitlenir ve uzun çevirilerde de görünür kalır.

Teknik seçiciler: `.verdicts-container-inner`, `#submitbuttons`.

# DemoScope v1.0.0

CS2 VACNet inceleme sayfaları için DemoScope userscript'inin ilk genel sürümü.

### Eklendi
- 29 dilde arayüz, otomatik dil seçimi, beş hızlı karar ön ayarı ve 15 genişletilmiş kombinasyon.
- Bölüm tabanlı video kontrolleri, kare kare ilerleme, `Shift` hız artırma, `Space` oynat/duraklat, `M` sessize alma, `F` tam ekran ve `Enter` ile iki aşamalı karar gönderimi.
- Yapılandırılabilir yerel inceleme geçmişi, JSON içe/dışa aktarma, HTML raporları ve birden fazla JSON yedeğini tek raporda birleştirme.
- Geliştirilmiş davet sayfası, ses ayarları, ayar kısayolu, hesap adını gizleme, inceleme kuralları iletişim kutusu ve isteğe bağlı karar rastgeleleştirici (varsayılan olarak kapalı).

### Gizlilik
- Telemetri yoktur; yerel ayarlar ve geçmiş yüklenmez. Gönderilen kararlar VACNet'e sitenin normal formu üzerinden iletilir.






