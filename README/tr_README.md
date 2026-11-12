<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · **Türkçe** · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**Klavye öncelikli CS2 VACNet inceleme araç seti.**<br>
Karar presetleri · klip sınırlarına duyarlı oynatıcı · yeniden atanabilir tuşlar · gizli yerel geçmiş · 29 dil.

<br>

[![Sürüm](https://img.shields.io/badge/version-v1.2.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![Lisans](https://img.shields.io/badge/license-GPL--3.0-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#kurulum)
[![Diller](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#diller)
[![Gizlilik](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#gizlilik)

<br>

[**⬇ DemoScope’u yükle**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[Özellikler](#özellikler) · [Kurulum](#kurulum) · [Klavye kısayolları](#klavye-kısayolları) · [Özelleştirme](#özelleştirme) · [Belgeler](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · [Değişiklik günlüğü](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md)

</div>

<br>

## Ekran görüntüleri

<table>
  <tr>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="DemoScope karşılama ekranı"></a><br><sub><b>Karşılama ekranı</b></sub></td>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="DemoScope ana arayüzü"></a><br><sub><b>Ana arayüz</b></sub></td>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/2_DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/2_DemoScope.png" alt="Klip inceleme arayüzü"></a><br><sub><b>Klip inceleme arayüzü</b></sub></td>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="DemoScope davet sayfası"></a><br><sub><b>Arkadaş davet et</b></sub></td>
  </tr>
</table>

## Genel bakış

DemoScope, Counter-Strike VACNet inceleme sayfalarını geliştirir (`counter-strike.net/vacnet`). Her kısa klip için karar formunda tıklamak yerine klavyeyle çalışırsınız: karar presetleri, incelenen bölümle sınırlı arama çubuğu, kare kare ilerleme, geçici hız artışı, iki adımlı gönderim ve kendi kararlarınızın gizli geçmişi. VACNet’in şu anda sunduğu iki formu da (klasik dört sorulu form ve yeni tek sorulu görev) destekler ve Valve sayfayı değiştirdiğinde kendini korur. Her şey tarayıcınızda yerel olarak çalışır.

## Özellikler

| | |
|---|---|
| **İnceleme akışı** | `1`–`5` tuşlarında 5 hızlı karar preseti ve 15 genişletilmiş kombinasyon, isteğe bağlı karar rastgeleleştirici (varsayılan olarak kapalı) ve güvenli iki aşamalı gönderim: `Enter` düğmeyi hazırlar, ikinci `Enter` gönderir. `Esc` iptal eder. |
| **İki görev türü** | Klasik formu (nişan yardımı, wallhack, auto-bhop, bot) ve tek sorulu görevi (“Is the Subject cheating beyond a reasonable doubt?”) algılar. Tek sorulu görevde kompakt düzen, `1`–`3` ile etiketli kararlar ve klip sonuna kadar geri sayan kilit göstergesi kullanılır. |
| **Klip duyarlı oynatıcı** | Arama çubuğu ve süre klibin başlangıç/bitişiyle sınırlıdır; ±5 sn atlama, 1/64 sn kare adımı, `Shift` basılıyken hız artırma (0,5×–4×), sessize alma ve tam ekran kısayolları. |
| **Kontrol sizde olan kısayollar** | 18 eylemin herhangi birini özel pencereden yeniden atayın. Değiştirmeden önce çakışma açıklanır (eylem, grup ve işlev); sayfadaki tüm tuş ipuçları atamalarınızı izler. |
| **Animasyonlar** | Canlı önizlemeli pencere, altı gösterge stili, üç hız ve aç/kapat düğmesi. Varsayılan olarak sistemin “hareketi azalt” ayarına uyar. |
| **Anlaşılır kararlar** | Her karar kategorisinin yanındaki “?” anlamını açıklar; önemli ifadeler vurgulanır, böylece “not” gözden kaçmaz. |
| **Gizli yerel geçmiş** | `localStorage` içinde klip ve maç bazında geçmiş, JSON içe/dışa aktarma, HTML raporları ve birden fazla yedeği tek raporda birleştirme. |
| **Davet sayfası** | Yenilenen `/vacnet/createinvite` sayfasında göster/gizle, tek tıkla kopyalama, gereksinim özeti, kapatma düğmesi ve `Enter` / `Esc` kısayolları bulunur. |
| **29 dil** | Önce seçiminizi, ardından Steam’in `?l=` ayarını ve son olarak tarayıcı dilini kullanır. DemoScope’ta dil seçmek VACNet’in kendi metnini de değiştirir. |
| **Ses efektleri** | Web Audio ile sentezlenen sinyaller; ses düzeyi, önizleme ve aç/kapat seçeneği. |
| **Yeniden tasarımlara dayanıklı** | Kurulum adımları yalıtılmıştır, önemli öğeler için yedek aramalar vardır; sayfa tanınmaz hâle gelirse DemoScope VACNet’e dokunmadan kendini kapatır. Hata bildirimi için tanılama raporu tek tıkla kopyalanır. |

## Kurulum

1. [Tampermonkey](https://www.tampermonkey.net/) veya [Violentmonkey](https://violentmonkey.github.io/) gibi bir userscript yöneticisi yükleyin. Betik `GM_addStyle` ve `unsafeWindow` kullanır.
2. [**DemoScope’u yükleyin**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) ve yöneticinizde kurulumu onaylayın.
3. Steam’e giriş yapın ve [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/) adresini açın.
4. İncelenecek bir klip açın. DemoScope otomatik yüklenir (`/vacnet/join` sayfası kapsam dışıdır).

Güncellemeler userscript yöneticiniz üzerinden gelir. DemoScope Chromium tabanlı tarayıcılarda ve Firefox’ta çalışır.

## Klavye kısayolları

Kısayollar, odak düzenlenebilir bir alanda veya başka bir etkileşimli denetimde değilken inceleme sayfalarında çalışır. **Aşağıdaki tüm tuşlar** **Settings → Hotkeys** bölümünden değiştirilebilir.

| Tuş | Eylem |
|---|---|
| `1` … `5` | Klasik form: preset uygula (1 bot + nişan + wallhack; 2 nişan + wallhack; 3 rage; 4 temiz oyuncu; 5 emin değilim). |
| `1` `2` `3` | Tek sorulu görev: Cheating / Not sure / No cheats seen. |
| `Enter` | Onayla. Klasik formda ilk basış düğmeyi hazırlar, ikinci basış gönderir. |
| `Esc` | Onay bekleyen kararı iptal eder veya ilk `Enter` hazırlığını kaldırır. |
| `Shift` (basılı tut) | Hız artışı (0,5×–4×; varsayılan 2×, sayfadan seçilebilir). |
| `←` `→` | 5 saniye geri / ileri atla. |
| `,` `.` | Bir kare geri / ileri git (1/64 sn). |
| `Space` | Oynat / duraklat. |
| `M` / `F` | Sessize al / tam ekran (videoya çift tıklamak da tam ekranı değiştirir). |
| `F2` | Ayarlar penceresini aç. |
| `Enter` / `Esc` *(davet sayfası)* | Tamam / kapat. |

## Özelleştirme

Ayarları `F2` ile açın. Bölümler en sık kullanılandan daha seyrek kullanılana doğru sıralanır:

- **Hotkeys**: tüm eylemlerin amaca göre gruplandığı özel pencere, eylem başına sıfırlama, “Reset all” ve **Replace**, **Swap**, **Cancel** ile çakışma yönetimi. `Esc` diğer tuşlar gibi atanabilir.
- **Animations**: stil (pulse, breathe, ripple, heartbeat, orbit, blink) ve hız seçin veya animasyonları kapatın. Her kartta canlı önizleme bulunur.
- **Sound effects**: aç/kapat, ses düzeyi (fare tekerleğiyle de ayarlanır) ve test düğmesi.
- **Local history**: etkinleştir/devre dışı bırak, sınırlar (anahtar başına 10/20/30/50 kayıt, 100/200/300/500 anahtar), 12/24 saat biçimi, JSON yedekleri ve HTML raporları.
- **Footer**: geri bildirim bağlantısını, rapor bağlantısını, telif satırını veya altbilginin tamamını gizle.
- **Diagnostics**: hata bildirimi için rapor kopyala ([Sorun bildirme](#sorun-bildirme) bölümüne bakın).
- **Reset**: tek düğme ses, kısayol ve animasyonları varsayılanlara döndürür. Geçmişiniz korunur.

## Diller

DemoScope 29 dili destekler: Bulgarca, Çince (Basitleştirilmiş ve Geleneksel), Çekçe, Danca, Felemenkçe, İngilizce, Fince, Fransızca, Almanca, Yunanca, Macarca, Endonezce, İtalyanca, Japonca, Korece, Norveççe, Lehçe, Portekizce (Portekiz ve Brezilya), Romence, Rusça, İspanyolca (İspanya ve Latin Amerika), İsveççe, Tayca, Türkçe, Ukraynaca ve Vietnamca. Sayfadaki seçiciden dili istediğiniz zaman değiştirebilirsiniz.

## Sorun bildirme

Valve, VACNet sayfalarını haber vermeden değiştirebilir. Bir şey çalışmayı durdurursa:

1. `F2` tuşuna basın, **Diagnostics** bölümünü açın ve **Copy diagnostics** seçeneğine tıklayın.
2. Metni mümkünse ekran görüntüsüyle birlikte yeni bir [issue](https://github.com/ebayybe/DemoScope/issues) içine yapıştırın.

Rapor; betik sürümünü, zamanı, tarayıcı dilini ve user-agent bilgisini, bulunan sayfa öğelerini, başarısız kurulum adımlarını ve sayfa yapısını (yalnızca etiketler, ID’ler ve sınıflar) içerir. Sayfa metni, hesap adı veya geçmiş içermez. Sayfa tanınmazsa DemoScope o sayfada kendini kapatıp bunu bildirir; VACNet normal çalışmaya devam eder.

## Sık sorulan sorular

<details>
<summary><b>DemoScope bu sayfada kapatıldığını söylüyor. Ne oldu?</b></summary>

VACNet sayfası artık DemoScope’un beklediği yapıya uymuyor; betik yarım kalmış bir arayüz bırakmamak için geri çekildi. Tanılama raporunu (yukarıya bakın) kopyalayıp bir issue açın; genellikle kısa sürede güncelleme gelir.
</details>

<details>
<summary><b>VACNet’in karar metni DemoScope’tan farklı bir dilde.</b></summary>

DemoScope’ta dil seçtiğinizde VACNet, Steam’in `?l=` parametresi üzerinden bu dili kullanması için istenir. VACNet’te çeviri yoksa varsayılan diline döner; DemoScope’un kendi etiketleri seçtiğiniz dilde kalır.
</details>

<details>
<summary><b>DemoScope kararları benim yerime mi seçiyor?</b></summary>

Hayır. Presetler yalnızca istediğiniz karar düğmelerine tıklar ve gönderimi her zaman siz onaylarsınız. Her klibi kendiniz inceleyin ve programın kurallarına uyun.
</details>

<details>
<summary><b>Tek sorulu görev için geçmiş kaydediliyor mu?</b></summary>

Henüz değil. Yerel geçmiş şu anda yalnızca klasik dört sorulu form için kaydediliyor.
</details>

<details>
<summary><b>Varsayılan tuşları nasıl geri yüklerim?</b></summary>

Değiştirilen tuşun yanındaki sıfırlama simgesini, Hotkeys penceresindeki **Reset all** seçeneğini veya ayarlardaki **Reset** düğmesini kullanın. Son seçenek ses ve animasyonları da sıfırlar.
</details>

## Mimari

DemoScope tek bir kendi kendini çağıran işlevdir (`@run-at document-start`, `@noframes`). `init()` sayfa türünü belirler, tanınıp tanınmadığını denetler ve aşağıdaki modülleri bağlar. Parametreler, dönüş değerleri ve depolama anahtarları dâhil 217 üst düzey işlevin tüm başvuru belgesi [tr_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) dosyasındadır.

<details>
<summary><b>Modül özeti</b></summary>

| Modül | Sorumluluk | Önemli işlevler |
|---|---|---|
| `Localization` | Arayüz dili, metin arama, bayraklar, dil seçici ve VACNet `?l=` eşitlemesi | `getActiveLocale`, `tr`, `settingText`, `syncSelectedLanguage`, `installLanguageSelector` |
| `Segment & player` | Klip sınırlarını okur, Video.js/HTML5 oynatımını sarar, sitenin yerel segment döngüsünü devre dışı bırakır | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Arama çubuğu, tuş ipuçları, hız artışı, kare adımı, kısayollar | `installCustomControls`, `installPlayerEnhancements` |
| `Hotkeys` | Eylem kaydı, eşlemeler, çakışma algılama ve Hotkeys penceresi | `getBinding`, `findKeyConflict`, `getActionForEvent`, `ensureHotkeysDialog` |
| `Verdict presets` | Preset tablosu, seçim durumu, rastgele uygulama | `applyPreset`, `detectActivePreset`, `buildEnhancementBar` |
| `Single-question task` | Yeni formun etiketleri, kilit göstergesi ve tuşları | `isCheatingMode`, `selectCheatingVerdict`, `updateCheatingLock` |
| `Submit flow` | İki aşamalı onay, iptal, `verdict_labels[]`, aynı kaynak denetimi, yükleme katmanı | `invokeProceedAction`, `invokeCancelAction`, `submitVerdictForm`, `finishSubmitLoadingWhenReady` |
| `Local history` | Klip ve maç bazında geçmiş, yedekler ve raporlar | `appendReviewHistory`, `importLocalHistory`, `exportCombinedHistoryReports` |
| `Settings & animations` | Ayarlar penceresi ve alt pencereler, ses, gösterge animasyonları | `ensureSettingsDialog`, `installExtraSettingsSections`, `ensureAnimationsDialog`, `playUiSound` |
| `Invite page` | Yenilenen sayfa, kapatma düğmesi ve kısayollar | `installInvitePage`, `installInviteExtras` |
| `Resilience` | Yalıtılmış adımlar, yedek aramalar, kapatma, tanılama | `safeStep`, `disableDemoScope`, `buildDiagnosticsReport` |
| `Bootstrap` | Giriş noktası | `init`, `enhanceLayout` |

</details>

## Gizlilik

DemoScope telemetri göndermez, ayarlarınızı veya geçmişinizi yüklemez. Bir kararı gönderdiğinizde VACNet bunu sitenin normal formu üzerinden alır. Ayarlar ve geçmiş tarayıcınızda kalır: `localStorage` (anahtarlar `demoscope` ile başlar) ve `sessionStorage` içinde. Geçmişi silmek için **Settings → Local history → Clear history** yolunu kullanın. Tanılama raporu yalnızca panoya kopyalanır; paylaşıp paylaşmayacağınıza siz karar verirsiniz.

## Sorumluluk reddi

DemoScope, Valve Corporation ile bağlantısı veya onayı olmayan resmi olmayan bir topluluk projesidir. Sizin yerinize karar vermez. Her klibi kendiniz inceleyin ve program kurallarına uyun. Kullanım riski size aittir.

## Lisans

[GNU GPL v3.0](https://github.com/ebayybe/DemoScope/blob/main/LICENSE) lisansı altında yayımlanmıştır.

## Teşekkürler

- **İlk fikir ve temel arayüz:** skinsales / goodvibes tarafından hazırlanan [*CS2 VACNet Review — Player & Layout Enhancements*](https://greasyfork.org/ru/scripts/591778-cs2-vacnet-review-player-layout-enhancements) (MIT).
- **İlgili konsept ve Rusça fork:** authorless tarafından hazırlanan [*VACLens RU — CS2 Review Assistant*](https://greasyfork.org/ru/scripts/592414-vaclens-ru-cs2-review-assistant) (MIT).
- **Mimarinin yeniden yazılması, yeniden kullanılabilir çerçeve, 29 dil desteği ve özel karar ön ayarları:** ebayybe.
