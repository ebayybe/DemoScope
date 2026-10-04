<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · **Türkçe** · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**CS2 VACNet incelemecileri için klavye odaklı userscript araç seti: karar ön ayarları, bölüm farkındalıklı video oynatıcı, davet sayfası iyileştirmeleri, ses efektleri ve özel yerel geçmiş — 29 dilde.**

</div>

## Genel bakış

DemoScope, Counter-Strike VACNet inceleme sayfalarını (`counter-strike.net/vacnet`) geliştirir. Her kısa klip için dört karar grubuna (aim assist, wallhack, auto-bhop, bot) tek tek tıklamak yerine klavye odaklı bir iş akışı sunar: hazır kararlar, yalnızca incelenen bölümle sınırlı bir arama çubuğu, kare kare ilerleme, geçici hızlandırma, iki adımlı gönderim onayı ve kendi kararlarınızın özel geçmişi. Her şey tarayıcınızda yerel olarak çalışır.

## Temel özellikler

- **Karar ön ayarları** – `1`–`5` tuşlarında 5 hızlı ön ayar ve 15 genişletilmiş kombinasyon (aim, wallhack, bhop, bot ve karışımları, “emin değilim” varyantları dahil).
- **Bölüm farkındalıklı oynatıcı** – arama çubuğu, süre göstergesi, ±5 sn atlamalar ve 1/64 sn kare adımları; klibin başlangıç/bitiş sınırlarıyla kısıtlıdır.
- **Basılı tutarak hızlandırma** – ayarlanabilir hızda oynatmak için `Shift` tuşunu basılı tutun (0,5×–4×, varsayılan 2×).
- **Güvenli iki adımlı gönderim** – `Enter` düğmeyi hazırlar, ikinci `Enter` kararları gönderir; farklı kökenli form hedefleri engellenir.
- **29 dilli arayüz** – Steam'in `?l=` parametresini, kayıtlı seçiminizi veya tarayıcı dilini izler; sayfa içi dil seçici sunar.
- **Yerel inceleme geçmişi** – `localStorage` içinde klip ve oyun bazında geçmiş; JSON dışa/içe aktarma, HTML raporu ve birçok yedeği tek raporda birleştirme.
- **Davet sayfası iyileştirmeleri** – davet bağlantısını göster/gizle ve tek tıkla kopyala özellikli, gereksinim özeti içeren yeniden tasarlanmış `/vacnet/createinvite`.
- **Ses efektleri** – Web Audio ile sentezlenen sesler; aç/kapat, ses düzeyi ve önizleme denetimleriyle.
- **Ayarlar penceresi** – `F2` ile açılır (değiştirilebilir): sesler, kısayol, geçmiş sınırları, yedekler, varsayılanlara sıfırlama.
- **Kolaylıklar** – gönderim sonrası yükleme katmanı, bildirimler, hesap adını gizleme düğmesi, inceleme kuralları penceresi ve isteğe bağlı karar rastgeleleştirici (varsayılan olarak kapalı).

## Kurulum

1. [Tampermonkey](https://www.tampermonkey.net/) veya [Violentmonkey](https://violentmonkey.github.io/) gibi bir userscript yöneticisi kurun (betik `GM_addStyle` ve `unsafeWindow` kullanır).
2. [DemoScope'u kurun](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) ve kurulumu yöneticinizde onaylayın.
3. Steam'e giriş yapın ve <https://www.counter-strike.net/vacnet/> adresini açın.
4. Bir inceleme klibi açın — DemoScope otomatik olarak yüklenir (`/vacnet/join` sayfası hariçtir).

## Kullanım

Kısayollar, odak bir giriş alanında, düğmede, bağlantıda veya seçim listesinde olmadığı sürece inceleme sayfalarında çalışır.

| Tuş | İşlem |
|---|---|
| `1` … `5` | Karar ön ayarı uygula: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 temiz oyuncu, 5 emin değilim |
| `Shift` (hold) | Hızlandırmak için basılı tutun (0,5×–4×, varsayılan 2×, sayfada seçilebilir) |
| `←` `→` | 5 saniye geri / ileri atla |
| `,` `.` | Bir kare (1/64 sn) geri / ileri |
| `Space` | Oynat / duraklat |
| `M` / `F` | Sessize al / tam ekran (videoya çift tıklamak da tam ekranı açıp kapatır) |
| `Enter` ×2 | Gönder düğmesini hazırlamak için bir kez, kararları göndermek için tekrar basın |
| `F2` | Ayarlar penceresini aç (değiştirilebilir) |

## Mimari ve işlev dökümü

DemoScope, kendi kendini çağıran tek bir işlevdir (`@run-at document-start`, `@noframes`). `init()`, davet sayfası ile inceleme sayfası arasında seçim yapar ve aşağıdaki modülleri bağlar. Tüm 143 işlevin — ad, sorumluluk, parametreler ve dönüş değeri — eksiksiz başvurusu şurada: [tr_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md).

| Modül | Sorumluluk | Ana işlevler |
|---|---|---|
| `Localization` | Arayüz dilini belirler, metinleri arar, bayrakları ve dil seçiciyi çizer | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Klibin başlangıç/bitişini sayfadan okur, Video.js/HTML5 oynatmayı sarmalar, sitenin yerel bölüm döngüsü zamanlayıcısını devre dışı bırakır | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Özel arama çubuğu, tuş ipuçları, Shift ile hızlandırma, kare adımı, klavye kısayolları | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Ön ayar tablosu, seçim durumu, isteğe bağlı rastgele sıra ve gecikmelerle ön ayar uygulama | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | İki adımlı Enter, `verdict_labels[]` oluşturma, aynı köken denetimi, yükleme katmanı | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | `localStorage` içinde klip ve oyun bazlı geçmişi saklar, budar ve gösterir | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | JSON dışa/içe aktarma, HTML raporu, birçok yedekten birleşik rapor | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Ayarlar penceresi, değiştirilebilir kısayol, Web Audio ses sinyalleri | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | Yeniden tasarlanmış `/vacnet/createinvite`: bağlantıyı göster/gizle ve kopyala, gereksinimler | `installInvitePage` |
| `Layout & UI helpers` | Bildirimler, alt bilgiyi gizleme, yerleşim gözlemcileri, hesap adı düğmesi | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Giriş noktası: sayfa türünü seçer ve modülleri başlatır | `init` |

## Yerel veriler ve gizlilik

DemoScope telemetri göndermez. Ayarlar ve geçmiş, tarayıcınızın `localStorage` (`demoscope` ile başlayan anahtarlar) ve `sessionStorage` alanlarında kalır. Geçmişi silmek için ayarlar penceresindeki geçmişi temizleme seçeneğini kullanın.

## Sorumluluk reddi

DemoScope resmî olmayan bir topluluk projesidir; Valve Corporation ile bağlantılı değildir ve onun tarafından onaylanmamıştır. Sizin yerinize asla karar vermez — her klibi kendiniz inceleyin ve inceleme programının kurallarına uyun. Kullanım riski size aittir.

## License

[MIT](../LICENSE) lisansı altında yayımlanmıştır.