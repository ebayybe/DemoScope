<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/th_FUNCTIONS.md) · **Türkçe** · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ja_FUNCTIONS.md)

</div>

# DemoScope — İşlev Başvurusu

`DemoScope.user.js` v1.4.0 içindeki 217 üst düzey işlevin tam başvurusu (ad, parametreler, dönüş değeri, sorumluluk). [README](../README.md) sayfasına dön.

Gösterimler: `—` parametre olmadığını; `void` işlevin yan etkileri için çağrıldığını belirtir.

## Kullanıcı davranışına genel bakış

| Alan | Açıklama |
|---|---|
| Desteklenen sayfalar | VACNet karşılama sayfasını (`/vacnet`), inceleme sayfalarını (`/vacnet/clips`), davet sayfasını (`/vacnet/createinvite`) ve inceleme yolundaki klipsiz durumu geliştirir. İlgisiz sayfalara dokunmaz. |
| Görev türleri | VACNet’in sunduğu inceleme formunu algılar. **Klasik forma** (aim assist, wallhack, auto-bhop, bot) hazır seçenekler ve genişletilmiş birleşimler ekler. Yeni **tek soruluk görev** için üç etiketli karar (`1`–`3`), klibin kalan süresini gösteren kilit göstergesi bulunan kompakt düzen kullanır; hızlı kararları ve birleşimleri göstermez. |
| Dil | Steam’in 29 dilini destekler. Kaydedilmiş elle seçim önceliklidir; yoksa Steam `?l=` parametresi, ardından tarayıcı/sayfa dili kullanılır. DemoScope’ta dil seçmek eşleşen `?l=` değerini VACNet’e de iletir; böylece VACNet metinleri de aynı dilde görünür. Otomatik mod Steam dil parametresini tarayıcıyla eşleştirir. |
| Karşılama ve davet sayfaları | İki sayfanın görünümünü düzenler, ortak dil seçici ekler ve göz düğmesiyle hesap adını gizler. Karşılama sayfasında etkileşimli bir denetim odakta değilse Enter veya Space ile devam edilir. Davet sayfasında bağlantı gizlenip gösterilebilir ve kopyalanabilir; davet koşulları açıklanır. × kapatır; Enter “Done”, Esc ise × işlevini görür. |
| Klip inceleme | Karar hazır ayarları ve genişletilmiş birleşimler, varsayılan olarak kapalı karar karıştırıcısı, Shift basılıyken ayarlanabilir oynatma hızı, segment sınırları içinde arama, kare kare ilerleme ve oynatma kısayolları ekler. Karar kategorilerinde yerelleştirilmiş açıklama sunan “?” düğmesi vardır; düğmelerdeki önemli ifadeler DemoScope renkleriyle vurgulanır. |
| Kısayollar | Tüm kısayollar ortak bir kayıtta eylem olarak tutulur ve **Ayarlar → Kısayollar** bölümünden değiştirilebilir. Çakışmalar sayfa kapsamına göre denetlenir (davet ve inceleme sayfaları çakışmaz) ve tuşu kullanan eylem, grup ve açıklama gösterilir. Değiştirebilir, takas edebilir veya iptal edebilirsiniz. Her eylemin sıfırlama düğmesi vardır; sayfadaki tuş ipuçları atamaları izler. |
| Gönderme işlemi | `Enter` veya `Numpad Enter` (varsayılan) “Continue” işlemini başlatır. Klasik formda ilk basış işlemi hazırlar, ikincisi kararları gönderir. Tek soruluk görevde karar seçilince VACNet’in onayı görünür ve `Enter` ile onaylanır. `Esc` (varsayılan) bekleyen kararı “Cancel” eder veya ilk basışı geri alır. Space gönderme kısayolu değildir. |
| Ayarlar | Varsayılan olarak `F2` ayar penceresini açar (Kısayollar penceresinden değiştirilebilir). Bölümler: kısayollar, animasyonlar, ses efektleri ve düzey, yerel geçmiş (etkinleştirme, sınırlar, 12/24 saat biçimi, yedekler), altbilgi görünürlüğü, tanılama ve ses/kısayol/animasyon için tek sıfırlama. |
| Animasyonlar | “DemoScope” yanındaki gösterge noktası canlandırılabilir. Ayrı pencerede altı stil (pulse, breathe, ripple, heartbeat, orbit, blink), canlı önizleme, üç hız ve aç/kapat anahtarı vardır. İşletim sisteminde hareketi azaltma açıksa başlangıçta kapalıdır. |
| Yerel geçmiş | Karar özetlerini bu tarayıcının `localStorage` alanında tutar; DemoScope bunları yüklemez. Geçmiş kapatılabilir, içe aktarılabilir, JSON/HTML olarak dışa aktarılabilir, JSON yedeklerinden bir HTML raporuna birleştirilebilir veya temizlenebilir. Anahtar başına 10/20/30/50 kayıt, toplam 100/200/300/500 anahtar sınırı vardır. Kapatmak yeni kayıtları durdurur, eski veriyi silmez. Yalnızca klasik form kaydedilir. |
| Boş kuyruk | VACNet’in boş kuyruk mesajını yerelleştirilmiş yönergeler, tarayıcıda saklanan ilk görülme zamanı ve dil seçiciyle değiştirir. Günde 250 demo bilgisi VACNet davranışına ilişkin gözleme dayalıdır; DemoScope hizmet sınırını uygulamaz veya aşmaz. |
| Altbilgi | Yerelleştirilmiş DemoScope altbilgisi kullanır. Klip sayfalarında geri bildirim ve rapor bağlantıları gösterilebilir; ayarlardan tek tek bağlantılar, telif satırı veya altbilginin tamamı gizlenebilir. |
| Dayanıklılık | Her kurulum adımı yalıtılmış çalışır; bir hata diğerlerini durduramaz. Önemli öğeler yedek seçicilerle aranır. Sayfa tanınamazsa DemoScope o sayfada kendini kapatır, VACNet düzenini geri yükler ve kısa bildirim gösterir. Hata raporları için **Ayarlar → Tanılama**, sürüm, bulunan öğeler, başarısız adımlar ve sayfa yapısını içeren metin raporunu kopyalar. |

## Yerelleştirme

| İşlev | Parametreler | Dönüş | Açıklama |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Bir dilin bayrağı için satır içi SVG kodu; yoksa küre simgesine geri döner. |
| `getSavedLocale` | — | `string \| null` | Kullanıcının kaydettiği dili (`demoscopeLanguage`) `localStorage` içinden okur. |
| `getActiveLocale` | — | `string` | Etkin dili belirler: kayıtlı seçim → Steam `?l=` → tarayıcı/sayfa dili → `en`. |
| `getLanguageBadge` | — | `string` | Dil seçicideki rozet için dilin kendi görünen adı, ör. “English version”. |
| `getBrowserLocale` | — | `string \| null` | Bölgesel varyantlar dâhil desteklenen ilk tarayıcı dilini bulur. |
| `syncAutomaticLanguage` | — | `boolean` | Otomatik modda ?l= değerini tarayıcı diliyle eşitler; farklıysa sayfaya gider. |
| `getRenderedSteamLanguage` | — | `string \| null` | VACNet’in sayfayı gerçekten hangi dilde görüntülediğini, sayfanın stil sayfası ve komut dosyası URL’lerindeki l= parametresinden okur. |
| `syncSelectedLanguage` | — | `boolean` | DemoScope’ta elle bir dil seçildiğinde VACNet metni de aynı dili kullansın diye sayfayı eşleşen ?l= ile bir kez yeniden ister. Dil zaten eşleşiyorsa atlar ve yönlendirme döngüsünü önler. Gezinme olduysa true döndürür. |
| `tr` | `key: string` | `string` | Etkin dil için bir arayüz metni arar (yedek: İngilizce, sonra anahtarın kendisi). |
| `inviteText` | `key: string` | `string` | Davet sayfası metin tablosu için aynı arama. |
| `settingText` | `key: string` | `string` | Ayarlar penceresi metin tablosu için aynı arama. |
| `getPresetLabel` | `name: string` | `string` | Bir ön ayarın yerelleştirilmiş etiketi; “Bot + Aim” gibi kombinasyonları oluşturur. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | “auto” girdisi dahil dil seçim düğmelerinin HTML'i. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Dil seçiciyi bağlar ve konumlandırır, seçimi kaydedip sayfayı yeniler; isteğe bağlı callback seçimi kendisi işleyebilir. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Boş kuyruk veya altbilgi için yerelleştirilmiş metni bulur. |

## Ses efektleri ve ayarlar penceresi

| İşlev | Parametreler | Dönüş | Açıklama |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Ayarlar penceresinde gösterilen “N girdi · son girdi: …” satırı. |
| `soundsEnabled` | — | `boolean` | Arayüz seslerinin açık olup olmadığı (`demoscopeSoundEffectsEnabled`, varsayılan açık). |
| `getSoundVolume` | — | `number (0–1)` | Kayıtlı ses düzeyi (`demoscopeSoundEffectsVolume`, varsayılan 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Web Audio ile kısa bir ton dizisi sentezler (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); asla hata fırlatmaz. |
| `readSettingsHotkey` | — | `string` | Ayarlar penceresini açan kayıtlı `KeyboardEvent.code` (varsayılan `F2`). |
| `formatHotkey` | `code: string` | `string` | Okunabilir tuş adı (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Fiziksel tuş kodunu çıkarır, Latin olmayan düzenleri `KeyX` biçimine geri eşler; kullanılamıyorsa `""`. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | DemoScope veya oynatıcının zaten kullandığı tuşlar için doğru (Enter, Boşluk, oklar, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Ayarlar iletişim kutusunu kurar: ses ve düzey, önizleme, kısayol, yerel geçmiş ve sınırlar, saat biçimi, JSON içe/dışa aktarma, HTML dışa aktarma/birleştirme, geçmişi temizleme, altbilgi görünürlüğü ve sıfırlama. |
| `openSettingsDialog` | `opener = null` | `void` | Pencereyi geçerli değerlerle açar ve odağın döneceği öğeyi hatırlar. |
| `installSettingsUi` | — | `void` | Genel capture aşamalı tuş dinleyicisini (pencereyi açma/kapama, yeniden atama) ve ses olaylarını kurar. |
| `installUiSoundEvents` | — | `void` | DemoScope denetimleri için geri bildirim sesleri çalan, yetkilendirilmiş tıklama dinleyicisi. |
| `ensureSettingsLayoutStyles` | — | `void` | Ayarlar penceresinin stillerini ekler: bölümleri sola hizalar ve özet rozetli satırlar oluşturur. |
| `refreshSettingsSummaries` | — | `void` | Kısayollar ve Animasyonlar girişlerinin özet rozetlerini yeniler. |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Kısayollar, Animasyonlar, Tanılama ve Sıfırlama bölümlerini ekler; eski ayarlar tuşu bölümünü gizler. |

## Yedekler, raporlar ve geçmiş sınırları

| İşlev | Parametreler | Dönüş | Açıklama |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Tüm geçmişi `demoscope-history-YYYY-MM-DD.json` olarak indirir. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Geçici bir Blob URL üzerinden dosya indirmeyi başlatır. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Geçmiş girdilerini düzleştirir ve yinelenenleri kaldırır, en yeni önce. |
| `exportReadableHistory` | — | `void` | Geçmişin bağımsız, yerelleştirilmiş HTML raporunu indirir. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Kaçışlı HTML rapor işaretlemesini oluşturur. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Birleştirme aracının durum satırını günceller (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Çok sayıda JSON yedeğini doğrular (her biri ≤ 5 MB, toplam ≤ 100 MB), girdilerdeki yinelenenleri kaldırır ve tek bir birleşik HTML raporu indirir. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Geçmiş anahtarları için izin listesi denetimi (`__proto__`, `constructor` ve hatalı biçimli anahtarları engeller). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Bir JSON yedeğini doğrular, yerel geçmişe (sınırlara uyarak) birleştirir ve arayüzü yeniler. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | `localStorage` içinden sayısal bir sınır okur, yalnızca izin verilen değerleri kabul eder. |
| `getHistoryPerKeyLimit` | — | `number` | Klip/oyun anahtarı başına tutulan girdi sayısı (10/20/30/50, varsayılan 30). |
| `getHistoryTotalLimit` | — | `number` | Toplamda tutulan klip/oyun anahtarı sayısı (100/200/300/500, varsayılan 300). |

## Hesap adı ve davet sayfası

| İşlev | Parametreler | Dönüş | Açıklama |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Steam hesap adının şu anda gizli olup olmadığı. |
| `installAccountNameControl` | — | `void` | Çıkış bağlantısının yanına göz biçimli bir anahtar ekler ve `MutationObserver` ile eşzamanlı tutar. |
| `installInvitePage` | — | `boolean` | `/vacnet/createinvite` sayfasını yeniden biçimlendirir: kart düzeni, bağlantıyı göster/gizle ve kopyala (Clipboard API, `execCommand` yedeğiyle), gereksinim listesi, dil seçici. Beklenen öğeler yoksa `false` döndürür. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Kapatma (×) düğmesini ve inviteDone/inviteClose eylemlerini yakalama aşamasında işleyen dinleyiciyi ekler. Odak düğme, bağlantı, alan, modal veya dil listesindeyken tuşları yok sayar. |
| `refreshInviteKeyLabels` | — | `void` | Geçerli atamalara göre “Done” etiketini ve × ipucunu yeniler. |
| `installWelcomePage` | — | `boolean` | Karşılama sayfasını düzenler, marka ve dil seçici ekler; Enter/Space devam eder; gerekli öğeler yoksa false döndürür. |

## Klip bölümü ve oynatıcı bağdaştırıcısı

| İşlev | Parametreler | Dönüş | Açıklama |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Sayfanın satır içi betiklerinden `startTime`/`endTime` değerlerini çıkarır. |
| `formatSegmentTime` | `seconds: number` | `string` | Saniyeleri `m:ss.cc` biçiminde biçimlendirir. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | İncelemenin `<video>` öğesini bulur. |
| `getVjsPlayer` | — | `Video.js player \| null` | Sayfanın Video.js oynatıcısını, varsa ve yok edilmemişse döndürür. |
| `createPlayerAdapter` | — | `adapter \| null` | Video.js / HTML5 video üzerinde birleşik API: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Bir oynatıcı oluşana kadar her 100 ms'de yoklar; zaman aşımında reddeder. |
| `clampSegment` | `time: number, bounds: object` | `number` | Bir zamanı klip sınırlarına kısıtlar. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Klip içindeki göreli konum. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Videonun altına arama çubuğu, süre göstergesi ve kısayol ipuçlarını ekler. |
| `pauseLayoutMutations` | `run: Function` | `void` | Düzen gözlemcileri askıdayken bir geri çağrı çalıştırır (geri besleme döngülerini önler). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Odak input, textarea, select veya düzenlenebilir metindeyse true döndürür. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | isShortcutBlocked gibidir ancak karar radyo düğmelerine izin verir; tıklamadan sonra odak düğmede kalır. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Bir hız seçeneğinin etiketi. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Hız seçici için `<option>` listesi (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Kayıtlı Shift hızı (varsayılan 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Karar rastgeleleştiricisinin kayıtlı durumu (varsayılan kapalı). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Oynatma hızı yönetimini, bölüm sınırlama/duraklatmayı, arama/kare adımı/sessize alma/tam ekran yardımcılarını ve genel klavye kısayollarını (`1`–`5`, oklar, `,` `.`, Boşluk, `M`, `F`, Shift) bağlar. İç kapanışlar: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, çizim döngüsü yardımcıları. |

## Karar ön ayarları

| İşlev | Parametreler | Dönüş | Açıklama |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Seçimi olmayan her karar grubunda “skip” seçer. |
| `getSelectedVerdictState` | — | `object` | `aimassist`, `wallhack`, `autobhop`, `bot` için geçerli değer (`positive` / `negative` / `skip` / `null`). |
| `detectActivePreset` | — | `string \| null` | Geçerli seçimle eşleşen ön ayarın adı. |
| `syncPresetButtons` | — | `string \| null` | Ön ayar düğmelerindeki `aria-pressed` değerini ve genişletilmiş ön ayar rozetini günceller. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Bir ön ayarın radyo girdilerine tıklar; rastgeleleştirici açıksa sırayı karıştırır ve tıklamalar arasında 200–600 ms bekler. Çalışırken ön ayar düğmelerini devre dışı bırakır. |
| `readAdvancedPresetsOpen` | — | `boolean` | Genişletilmiş ön ayarlar çekmecesinin açık bırakılıp bırakılmadığı. |
| `normalizeVerdictLabels` | `root = document` | `void` | Karar etiketlerinden vurgu işaretlemesini kaldırır. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Her karar grubunun üstüne yerelleştirilmiş başlıklar ekler. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Bir karar grubu için “?” düğmesi ve açıklama penceresi oluşturur; DemoScope’un yerelleştirilmiş metnini kullanır. |
| `closeVerdictHelp` | `except = null` | `void` | Belirtilen pencere dışındaki tüm açık açıklamaları kapatır. |
| `installVerdictHelpHandlers` | — | `void` | Açıklama pencerelerine delege tıklama, dışarı tıklama ve Esc işleyicilerini bir kez kurar. |

## Bildirimler, alt bilgi ve gönderim yüklemesi

| İşlev | Parametreler | Dönüş | Açıklama |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Sitenin alt bilgisini gizler. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Engellemeyen, ARIA-live bir bildirim gösterir. |
| `markSubmitPending` | — | `void` | Gönderim zamanını ve geçerli klip kimliğini `sessionStorage` içine kaydeder. |
| `isSubmitPending` | — | `boolean` | Bir gönderimin sonraki klibi bekleyip beklemediği. |
| `clearSubmitPending` | — | `void` | Bekleyen gönderim işaretlerini temizler. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Tam sayfa yükleme katmanını gösterir. |
| `hideSubmitLoadingOverlay` | — | `void` | Katmanı gizler ve bekleme durumunu temizler. |
| `bootSubmitLoadingIfPending` | — | `void` | Bekleyen bir gönderim varsa sayfa yüklenirken katmanı yeniden gösterir. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Sonraki klibin arayüzü ve medyası hazır olduğunda doğru. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Sonraki klip için en fazla 30 s bekler, sonra katmanı gizler (zaman aşımında hata bildirimi). |

## Yerel geçmiş deposu

| İşlev | Parametreler | Dönüş | Açıklama |
|---|---|---|---|
| `extractVodId` | — | `string` | Video URL'sinden klip/oyun kimliğini türetir. |
| `getGameKey` | — | `string` | Oyun için geçmiş anahtarı (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Tek bir bölüm için geçmiş anahtarı (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Bir geçmiş girdisini doğrular ve temizler. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Bir anahtarın normalleştirilmiş girdileri. |
| `getGameHistoryEntries` | `store: object` | `Array` | Geçerli oyunun girdileri (eski bir anahtarı destekler). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Geçerli bölümün girdileri. |
| `formatClipId` | `vodId: string` | `string` | Klip kimliğinden karma ile üretilen kısa sayısal görüntüleme kimliği (`#0000000`). |
| `formatRelativeTime` | `timestamp: number` | `string` | Yerelleştirilmiş göreli zaman (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Geçmiş nesnesini `localStorage` içinden yükler (hata olursa `{}`). |
| `pruneHistoryStore` | `store: object` | `void` | Anahtar başına ve toplam sınırları uygular (en eski anahtarlar önce atılır). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Budar ve kaydeder; kota/depolama hatalarında `false`. |
| `summarizeCurrentVerdict` | — | `string` | Geçerli seçimin ön ayar adı veya `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Bir geçmiş özeti için yerelleştirilmiş etiket. |
| `formatClockTime` | `seconds: number` | `string` | `m:ss` (veya `x.xs`) saat biçimi. |
| `formatHumanSegment` | `bounds: object` | `string` | Okunabilir bölüm aralığı. |
| `formatGameLabel` | — | `string` | Geçerli oyunun yerelleştirilmiş etiketi. |
| `historyEntryKey` | `entry: object` | `string` | Yinelenenleri kaldırmada kullanılan kimlik dizesi. |
| `formatPriorStat` | `count: number, label: string` | `string` | Geçmiş panelindeki “etiket: N” satırı. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Klip/oyun girdilerini görüntülenecek öğelere birleştirir. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | Tek bir geçmiş satırının HTML'i. |
| `escapeHtml` | `value: any` | `string` | `& < > " '` karakterlerini kaçışlar. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | İnceleme kuralları düğmesi dahil geçmiş panelinin HTML'i. |
| `ensureClipHistoryPanel` | — | `void` | Eksikse panel kapsayıcısını oluşturur. |
| `ensureReviewRulesDialog` | — | `void` | İnceleme kuralları penceresini oluşturur ve açma/kapama düğmelerini bağlar. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | “Yerel geçmiş” düğmesini bağlar (listeye kaydırır veya boşsa bildirim gösterir). |
| `positionClipHistoryPanel` | — | `void` | Paneli `.verdicts-container` içinde ilk sırada tutar. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Geçerli klip için geçmiş panelini yeniden çizer. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Geçerli karar özetini oyun ve klip geçmişine ekler. |
| `isLocalHistoryEnabled` | — | `boolean` | Yerel geçmişin etkin olup olmadığını okur; varsayılan olarak etkindir. |
| `readTimeFormat` | — | `string` | Saat biçimini okur: otomatik, 12 veya 24 saat. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | İlk algılanma zamanını dile ve saat biçimine göre biçimlendirir. |
| `getQueueNoticeLocale` | — | `string` | Boş kuyruk bildiriminin etkin dilini döndürür. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Eski dil seçimini ortak ayara taşır ve URL'yi eşitler. |
| `updateEmptyQueueTimestamp` | — | `void` | Gösterilen ilk algılanma zamanını günceller. |

## Gönderim akışı

| İşlev | Parametreler | Dönüş | Açıklama |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Dört karar grubunu gösteren sayfalarda doğru. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Görünür ve etkinse yerel gönder düğmesi. |
| `recordProceedHistoryIfLabeling` | — | `void` | Gönderim başına bir kez geçmiş kaydeder (yeniden girişe karşı korumalı). |
| `resetProceedArmed` | — | `void` | İki adımlı gönderimi hazır durumdan çıkarır. |
| `refreshProceedButtonLabel` | — | `void` | Düğme etiketini/`Enter` ipucunu ve hazır durum stilini günceller. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Bir seçimi `guilty_*` / `innocent_*` / `skip_*` değerine eşler. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Gizli `verdict_labels[]` girdilerini oluşturur; herhangi bir grup seçilmemişse hata bildirimi gösterir ve `false` döndürür. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Yalnızca aynı kökenli HTTPS form eylemlerine izin verir. |
| `restoreSubmitUi` | — | `void` | Başarısız bir gönderimden sonra düğmeleri geri yükler. |
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Güvenlik denetimini çalıştırır, yükleme katmanını gösterir ve formu gönderir. |
| `submitVerdictsDirect` | — | `boolean` | Etiketleri hazırlar ve gönderir. |
| `invokeProceedAction` | — | `boolean` | Enter/tıklama işleyicisi: ilk basış hazırlar, ikinci basış gönderir. |
| `installProceedShortcut` | — | `void` | `Enter`/`NumpadEnter` için capture aşamalı dinleyici. |
| `invokeCancelAction` | — | `boolean` | İki aşamalı gönderimin ilk tuş basımını iptal eder veya görünür “Cancel” düğmesine tıklar; iptal edilecek bir şey yoksa false döndürür. |
| `refreshCancelButtonLabel` | — | `void` | “Cancel” düğmesinin tuş rozetini ekler veya yeniler. |
| `hookProceedButton` | — | `void` | Yerel gönder düğmesinin tıklama davranışını değiştirir. |
| `installVerdictChangeReset` | — | `void` | Bir karar değiştiğinde gönderimi hazır durumdan çıkarır ve ön ayarları yeniden eşler. |
| `scheduleProceedFooterFix` | — | `void` | `fixProceedFooter` çağrısını geciktirir (`requestAnimationFrame`). |
| `scheduleVerdictLabelsFix` | — | `void` | Etiket/başlık/varsayılan değerlerin gecikmeli yeniden normalleştirilmesi. |

## Kısayol kaydı ve yeniden atama

| Action | Default | Group | Açıklama |
|---|---|---|---|
| `playPause` | `Space` | Playback | Klibi duraklatır veya oynatmaya devam eder. |
| `mute` | `M` | Playback | Sesi kapatır veya açar. |
| `fullscreen` | `F` | Playback | Tam ekrana geçer veya tam ekrandan çıkar. |
| `seekBack` / `seekForward` | `←` / `→` | Gezinme | 5 saniye geri/ileri gider. |
| `frameBack` / `frameForward` | `,` / `.` | Gezinme | Bir kare geri/ileri gider. |
| `speedBoost` | `Shift` | Navigation | Tuş basılı tutulduğu sürece oynatmayı hızlandırır; Shift kullanabilen tek eylemdir. |
| `quick1` … `quick5` | `1` … `5` | Kararlar | Klasik form: 1–5 hazır ayarları. Tek soruluk görev: Cheating / Not sure / No cheats seen (`1`–`3`). |
| `proceed` | `Enter` | Submission | Kararı onaylar ya da klasik formu hazırlar ve gönderir. |
| `cancel` | `Esc` | Submission | “Cancel” düğmesine basar veya ilk Enter basımını geri alır. |
| `inviteDone` | `Enter` | Invite page | “Done” ile aynı şekilde davet sayfasından çıkar. |
| `inviteClose` | `Esc` | Invite page | × düğmesiyle aynı işlemi yapar. |
| `settings` | `F2` | Interface | Ayarlar iletişim kutusunu açar veya kapatır. |

Atamalar `demoscopeKeybindings` içinde `KeyboardEvent.code` değerleri olarak saklanır; yalnızca varsayılandan farklı olanlar kaydedilir ve ayarlar tuşunun ayrı kaydı vardır. Sol/sağ değiştiriciler aynı sayılır, sayısal tuş takımı ana satırı yansıtır. `Tab`, `Ctrl`, `Alt`, `Meta`, `Caps Lock`, `ContextMenu`, `F5`, `F11`, `F12` atanamaz. Kapsamlar ayrıdır: `review`, `invite` ve her şeyle çakışan ayarların `global` anahtarı.

| İşlev | Parametreler | Dönüş | Açıklama |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Yerelleştirilmiş şablondaki {name} yer tutucularını değiştirir. |
| `isModalOpen` | — | `boolean` | Herhangi bir <dialog> açıkken true döndürür; bu sırada sayfa kısayolları çalışmaz. |
| `normalizeKeyCode` | `code: string` | `string` | Sol ve sağ değiştiricileri tek tuş sayar; sayısal tuş takımını ve NumpadEnter’ı ana sıradaki eşlerine dönüştürür. |
| `formatKeyLabel` | `code: string` | `string` | Bir tuşun görüntülenen adını verir (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Kaydedilmiş atamaları okur ve doğrular (önbellekli; hata durumunda {}). |
| `saveKeyOverrides` | `overrides: object` | `void` | Atamaları kaydeder; hepsi varsayılan ise kaydı kaldırır. |
| `getBinding` | `id: string` | `string` | Bir eylemin geçerli tuşunu verir; atanmamışsa boş metin döndürür. |
| `setBinding` | `id: string, code: string` | `void` | Bir eyleme tuş kaydeder; boş kod atamayı kaldırır, varsayılan değerler saklanmaz. |
| `resetAllBindings` | — | `void` | Ayarlar tuşu dâhil tüm atamaları varsayılanlara döndürür. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Kesişen kapsamda aynı tuşu kullanan diğer eylemi bulur. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Geçerli sayfa kapsamındaki klavye olayını eylem kimliğine dönüştürür. |
| `keyScopeOf` | `id: string` | `string` | Eylemin kapsamını verir: review, invite veya global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | İki kapsam aynıysa veya biri global ise true döndürür. |
| `currentKeyScope` | — | `string` | Davet sayfasında invite, diğer sayfalarda review döndürür. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Tuş atanabiliyorsa boş metin, tarayıcı tuşuysa reserved, basılı tutulmayan bir eylemde Shift seçilmişse shift döndürür. |
| `quickRangeLabel` | `count: number` | `string` | Hızlı karar tuşu etiketini oluşturur: değiştirilmemişse 1–5, aksi halde atanmış tuşlar. |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Geçerli atamalardan videonun altındaki tuş ipuçlarını oluşturur. |
| `refreshKeyLabels` | — | `void` | Sayfadaki tüm tuş etiketlerini yeniler: ipuçları, rozetler, Devam/İptal/Davet etiketleri ve ayar özetleri. |
| `ensureDemoscopeDialogStyles` | — | `void` | Kısayollar ve Animasyonlar pencerelerinin ortak görünümünü ekler. |
| `hkActionName` | `id: string` | `string` | Yerelleştirilmiş eylem adını verir. |
| `hkGroupName` | `group: string` | `string` | Yerelleştirilmiş grup adını verir. |
| `hkActionDescription` | `id: string` | `string` | Eylemin ne yaptığını yerelleştirilmiş olarak açıklar; hızlı kararlar iki görev türü için de açıklanır. |
| `hkSetMessage` | `text: string, warn = false` | `void` | Kısayollar penceresinin durum satırını ayarlar. |
| `hkCancelCapture` | — | `void` | Tuş yakalama modundan çıkar. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Çakışma varsa çakışma paneli dâhil bir eylem satırının HTML işaretlemesini oluşturur. |
| `renderHotkeys` | — | `void` | Pencerenin tamamını yeniden çizer ve kaydırma konumunu korur. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Tuş atar; replace diğer eylemin atamasını kaldırır, swap tuşları değiştirir. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Tuşu doğrudan atar veya kullanımda ise çakışma panelini (Replace / Swap / Cancel) açar. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Kısayollar penceresini ve yakalama aşaması tuş dinleyicisini oluşturur; Esc atanabilir ve yakalama sırasında pencereyi kapatmaz. |
| `openHotkeysDialog` | — | `void` | Kısayollar penceresini açar. |

## Animasyonlar

Gösterge için altı stil (`pulse`, `breathe`, `ripple`, `heartbeat`, `orbit`, `blink`), üç hız (0.6× / 1× / 1.7×) ve aç/kapat durumu `demoscopeAnimStyle`, `demoscopeAnimSpeed`, `demoscopeAnimEnabled` içinde saklanır. Etkin stil `<html>` üzerindeki `data-ds-anim` ile ayarlanır (kapalıysa `off`); stil sayfası hem göstergeyi hem önizlemeleri yönetir.

| İşlev | Parametreler | Dönüş | Açıklama |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | localStorage değerini güvenli biçimde okur. |
| `writeStorage` | `key: string, value: string \| null` | `void` | localStorage’a güvenli biçimde yazar; null anahtarı kaldırır. |
| `animEnabled` | — | `boolean` | Kaydedilmiş animasyon durumunu verir; sistem hareket azaltma istiyorsa varsayılan olarak kapalıdır. |
| `animStyle` | — | `string` | Kaydedilmiş stili verir (varsayılan pulse). |
| `animSpeedKey` | — | `string` | Kaydedilmiş hızı verir (slow / normal / fast; varsayılan normal). |
| `ensureAnimationStyles` | — | `void` | Gösterge ve önizleme noktalarının ortak keyframe ve kurallarını ekler. |
| `applyAnimationSettings` | — | `void` | Stil, hız ve açık/kapalı durumunu <html> öğesine uygular ve ayar özetini yeniler. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Anahtar, hız, canlı önizlemeli stil kartları ve sıfırlama içeren Animasyonlar penceresini oluşturur. |
| `openAnimationsDialog` | — | `void` | Animasyonlar penceresini açar. |
| `ensureUiPolishStyles` | — | `void` | Pencereler ve karar listesi için koyu ince kaydırma çubukları ve color-scheme: dark ekler. |

## Tek soruluk görev

| İşlev | Parametreler | Dönüş | Açıklama |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Sayfa tek soruluk formu (#verdictbuttons_cheating) sunuyorsa true döndürür. |
| `selectCheatingVerdict` | `kind: string` | `void` | Cheating / Not sure / No cheats seen radyo seçeneğine tıklar; seçenek kilitliyse hata sesi çalar ve kilit kartını sallar. |
| `localizeCheatingVerdicts` | — | `void` | Üç etiketi DemoScope diline çevirir ve tuş rozetlerini CSS ile çizer; böylece VACNet onay metninde tuş rakamı görünmez. Kilit kartını da hazırlar. |
| `updateCheatingLock` | — | `void` | Diğer iki kararın açılmasına kalan süreyi kilit kartı ve ilerleme çubuğunda günceller; seçenekler açıldığında veya karar seçildiğinde gizler. |
| `startCheatingLockWatcher` | — | `void` | updateCheatingLock işlevini 250 ms aralıkla çağıran zamanlayıcıyı başlatır. |

## Dayanıklılık ve tanılama

| İşlev | Parametreler | Dönüş | Açıklama |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Tanılama raporu için başarısız adımı kaydeder; kayıt sayısı sınırlıdır. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Kurulum adımını çalıştırır; hata olursa kaydeder ve sonraki adımlar devam etsin diye yedek değeri döndürür. |
| `getVideoContainer` | — | `HTMLElement \| null` | Video kapsayıcısını bulur; yoksa oynatıcının veya <video> öğesinin üst öğesini kullanır. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Karar kapsayıcısını bulur; yoksa ilk karar bloğunun üst öğesini kullanır. |
| `getSubmitArea` | — | `HTMLElement \| null` | Gönderme/onaylama alanını bulur (#submitbuttons, .submitbuttons veya gönder düğmesinin üst öğesi). |
| `hasVerdictForm` | — | `boolean` | En az bir karar radyo düğmesi varsa true döndürür. |
| `removeEnhancements` | — | `void` | DemoScope panellerini, sınıflarını ve altbilgi değişikliklerini kaldırır; VACNet altbilgisini geri yükler. |
| `disableDemoScope` | `reason: string` | `void` | Bu sayfada DemoScope’u kapatır, değişiklikleri geri alır, yalnızca ayarlar penceresini bırakır ve oturumda her neden için bir kez bildirim gösterir. |
| `isOwnNode` | `el: Element` | `boolean` | DemoScope’un oluşturduğu öğeler için true döndürür; yapı raporuna eklenmezler. |
| `elementSignature` | `el: Element` | `string` | Yapı raporunda kullanılan, metin içermeyen tag#id.class[…] imzası. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Etiket, ID ve sınıflardan oluşan girintili kompakt ağaç; aynı kardeşler ×N olarak birleştirilir. |
| `captureOriginalSkeleton` | — | `void` | DemoScope değişiklik yapmadan önce sayfa yapısını kaydeder. |
| `buildDiagnosticsReport` | — | `string` | Sürüm, sayfa, dil ve tarayıcı, görev türü, 22 öğe kontrolü, adım hataları ve DemoScope öncesi/sonrası yapıyı içeren rapor oluşturur. Sayfa metni ve hesap verilerini içermez. |
| `fallbackCopyText` | `text: string` | `boolean` | Clipboard API yoksa geçici metin alanı üzerinden kopyalar. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Raporu kopyalar; başarısız olursa metni seçilebilir bir kutuda gösterir. |

## Düzen ve başlatma

| İşlev | Parametreler | Dönüş | Açıklama |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Shift hız seçim çubuğunu oluşturur. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | Tek bir ön ayar düğmesinin HTML'i. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | Genişletilmiş ön ayar gruplarının HTML'i. |
| `buildEnhancementBar` | — | `HTMLElement` | Hızlı karar çubuğunu oluşturur: ön ayarlar, rastgeleleştirici anahtarı, genişletilmiş çekmece. |
| `positionShiftSpeedBar` | — | `void` | Hız çubuğunu karar listesinin önünde tutar. |
| `positionEnhancementBar` | — | `void` | Ön ayar çubuğunu gönder düğmelerinin önünde tutar. |
| `fixProceedFooter` | — | `void` | Alt bilgiyi, çubukları ve gönder düğmesini yeniden düzenler. |
| `enhanceLayout` | — | `void` | Tüm düzen değişikliklerini uygular ve ayarlar arayüzünü kurar. |
| `ensureReviewStructure` | — | `void` | VACNet işaretlemesini düzenler: karar bloklarını .verdicts-container-inner içine alır, #submitbuttons öğesini kapsayıcıya taşır ve klip sayısını başlık rozetinde gösterir. Eski ve yenilenmiş işaretlemeyle çalışır. |
| `watchProceedFooter` | — | `void` | `.verdicts-container` öğesini gözlemler ve alt bilgi düzeltmelerini zamanlar. |
| `watchVerdictLabels` | — | `void` | Karar etiketlerini gözlemler ve yeniden normalleştirmeyi zamanlar. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Altbilgi görünürlük tercihini localStorage'dan okur. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Altbilgi görünürlük tercihini kaydeder. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | İsteğe bağlı bağlantılarla yerelleştirilmiş altbilgiyi oluşturur veya günceller, tercihleri uygular. |
| `installEmptyQueueNotice` | — | `boolean` | Boş kuyruk mesajını yerelleştirilmiş açıklama, saat, dil seçici ve altbilgiyle değiştirir. |
| `init` | — | `Promise<void>` | Giriş noktası: hesap adı denetimi → davet veya inceleme sayfası → düzen, gözlemciler, kısayollar, oynatıcı iyileştirmeleri. |

`installWelcomePage` ve `installInvitePage` şu değeri döndürür `false` when required VACNet page elements are unavailable. `installEmptyQueueNotice` şu değeri döndürür `false` when the page is not the empty-queue state.

### Yukarıda listelenmeyenler

* **`blockSegmentLoopGuard`** (IIFE, yüklemede çalışır): sayfanın `setInterval` işlevini sarar ve sitenin yerel 100 ms segment döngüsü zamanlayıcısını boş bir işlemle değiştirir; segmenti DemoScope denetimleri yönetir.
* **Sabitler ve tablolar:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitions); added since v1.0.0: `KEY_ACTIONS`, `KEY_GROUPS`, `KEY_ACTION_BY_ID`, `KEY_ACTION_SCOPE`, `RESERVED_KEY_CODES`, `CHEATING_KEYS`, `VERDICT_SECTION_TITLES`, `VERDICT_SECTION_HELP`, `ANIM_STYLES`, `ANIM_SPEEDS`.
* **Modül durumu:** `diag` (step failures, the switch-off reason and the original page structure), `hkState` (state of the Hotkeys window) and the `SCRIPT_VERSION` constant used by the diagnostics report.
* **Metinler:** Kullanıcıya görünen tüm metinler yukarıdaki yerelleştirme tablolarındadır; v1.2.0–v1.4.0 pencereleri 29 dile çevrilmiştir.

## Depolama anahtarları

| Anahtar | Konum | Amaç |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Seçilen dil / otomatik mod. |
| `demoscopeKeybindings` | `localStorage` | Varsayılandan farklı kısayollar (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Ayarlar iletişim kutusunu açan tuş (kaldırılırsa none). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Gösterge animasyonu ayarları. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Ses ayarları. |
| `demoscopeClipHistory` ve geçmiş sınır/biçim anahtarları | `localStorage` | Yerel inceleme geçmişi ve ayarları. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Gönderim yükleme durumu, dil eşitleme koruması ve tek seferlik kapatma bildirimi. |








