<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · **Türkçe** · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — İşlev Başvurusu

`DemoScope.user.js` v1.0.0 içindeki 128 üst düzey işlevin tam başvurusu (ad, parametreler, dönüş değeri, sorumluluk). [README](../../README/tr_README.md) sayfasına dön.

Gösterimler: `—` parametre olmadığını; `void` işlevin yan etkileri için çağrıldığını belirtir.

## Yerelleştirme

| İşlev | Parametreler | Döndürür | Sorumluluk |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Bir dilin bayrağı için satır içi SVG kodu; yoksa küre simgesine geri döner. |
| `getSavedLocale` | — | `string \| null` | Kullanıcının kaydettiği dili (`demoscopeLanguage`) `localStorage` içinden okur. |
| `getActiveLocale` | — | `string` | Etkin dili belirler: kayıtlı seçim → Steam `?l=` → tarayıcı/sayfa dili → `en`. |
| `getLanguageBadge` | — | `string` | Dil seçicideki rozet için dilin kendi görünen adı, ör. “English version”. |
| `tr` | `key: string` | `string` | Etkin dil için bir arayüz metni arar (yedek: İngilizce, sonra anahtarın kendisi). |
| `inviteText` | `key: string` | `string` | Davet sayfası metin tablosu için aynı arama. |
| `settingText` | `key: string` | `string` | Ayarlar penceresi metin tablosu için aynı arama. |
| `getPresetLabel` | `name: string` | `string` | Bir ön ayarın yerelleştirilmiş etiketi; “Bot + Aim” gibi kombinasyonları oluşturur. |
| `buildLanguageOptions` | — | `string (HTML)` | “auto” girdisi dahil dil seçim düğmelerinin HTML'i. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Açılır dil seçiciyi bağlar, konumlandırır, seçimi kaydeder ve sayfayı yeniden yükler. |

## Ses efektleri ve ayarlar penceresi

| İşlev | Parametreler | Döndürür | Sorumluluk |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Ayarlar penceresinde gösterilen “N girdi · son girdi: …” satırı. |
| `soundsEnabled` | — | `boolean` | Arayüz seslerinin açık olup olmadığı (`demoscopeSoundEffectsEnabled`, varsayılan açık). |
| `getSoundVolume` | — | `number (0–1)` | Kayıtlı ses düzeyi (`demoscopeSoundEffectsVolume`, varsayılan 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Web Audio ile kısa bir ton dizisi sentezler (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); asla hata fırlatmaz. |
| `readSettingsHotkey` | — | `string` | Ayarlar penceresini açan kayıtlı `KeyboardEvent.code` (varsayılan `F2`). |
| `formatHotkey` | `code: string` | `string` | Okunabilir tuş adı (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Fiziksel tuş kodunu çıkarır, Latin olmayan düzenleri `KeyX` biçimine geri eşler; kullanılamıyorsa `""`. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | DemoScope veya oynatıcının zaten kullandığı tuşlar için doğru (Enter, Boşluk, oklar, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Ayarlar penceresini (bir kez) oluşturur ve bağlar: ses, ses düzeyi, kısayol yakalama, geçmiş sınırları, dışa aktar/içe aktar/rapor/birleştir/temizle, sıfırlama. |
| `openSettingsDialog` | `opener = null` | `void` | Pencereyi geçerli değerlerle açar ve odağın döneceği öğeyi hatırlar. |
| `installSettingsUi` | — | `void` | Genel capture aşamalı tuş dinleyicisini (pencereyi açma/kapama, yeniden atama) ve ses olaylarını kurar. |
| `installUiSoundEvents` | — | `void` | DemoScope denetimleri için geri bildirim sesleri çalan, yetkilendirilmiş tıklama dinleyicisi. |

## Yedekler, raporlar ve geçmiş sınırları

| İşlev | Parametreler | Döndürür | Sorumluluk |
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
| `readAdvancedPresetsOpen` | — | `boolean` | Genişletilmiş ön ayarlar çekmecesinin açık bırakılıp bırakılmadığı. |

## Hesap adı ve davet sayfası

| İşlev | Parametreler | Döndürür | Sorumluluk |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Steam hesap adının şu anda gizli olup olmadığı. |
| `installAccountNameControl` | — | `void` | Çıkış bağlantısının yanına göz biçimli bir anahtar ekler ve `MutationObserver` ile eşzamanlı tutar. |
| `installInvitePage` | — | `boolean` | `/vacnet/createinvite` sayfasını yeniden biçimlendirir: kart düzeni, bağlantıyı göster/gizle ve kopyala (Clipboard API, `execCommand` yedeğiyle), gereksinim listesi, dil seçici. Beklenen öğeler yoksa `false` döndürür. |

## Klip bölümü ve oynatıcı bağdaştırıcısı

| İşlev | Parametreler | Döndürür | Sorumluluk |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Odak bir girdi alanında, textarea, select, düğme, bağlantı veya düzenlenebilir öğede olduğunda doğru. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Bir hız seçeneğinin etiketi. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Hız seçici için `<option>` listesi (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Kayıtlı Shift hızı (varsayılan 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Karar rastgeleleştiricisinin kayıtlı durumu (varsayılan kapalı). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Oynatma hızı yönetimini, bölüm sınırlama/duraklatmayı, arama/kare adımı/sessize alma/tam ekran yardımcılarını ve genel klavye kısayollarını (`1`–`5`, oklar, `,` `.`, Boşluk, `M`, `F`, Shift) bağlar. İç kapanışlar: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, çizim döngüsü yardımcıları. |

## Karar ön ayarları

| İşlev | Parametreler | Döndürür | Sorumluluk |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Seçimi olmayan her karar grubunda “skip” seçer. |
| `getSelectedVerdictState` | — | `object` | `aimassist`, `wallhack`, `autobhop`, `bot` için geçerli değer (`positive` / `negative` / `skip` / `null`). |
| `detectActivePreset` | — | `string \| null` | Geçerli seçimle eşleşen ön ayarın adı. |
| `syncPresetButtons` | — | `string \| null` | Ön ayar düğmelerindeki `aria-pressed` değerini ve genişletilmiş ön ayar rozetini günceller. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Bir ön ayarın radyo girdilerine tıklar; rastgeleleştirici açıksa sırayı karıştırır ve tıklamalar arasında 200–600 ms bekler. Çalışırken ön ayar düğmelerini devre dışı bırakır. |
| `normalizeVerdictLabels` | `root = document` | `void` | Karar etiketlerinden vurgu işaretlemesini kaldırır. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Her karar grubunun üstüne yerelleştirilmiş başlıklar ekler. |

## Bildirimler, alt bilgi ve gönderim yüklemesi

| İşlev | Parametreler | Döndürür | Sorumluluk |
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

| İşlev | Parametreler | Döndürür | Sorumluluk |
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

## Gönderim akışı

| İşlev | Parametreler | Döndürür | Sorumluluk |
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
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Güvenlik denetimini çalıştırır, yükleme katmanını gösterir ve formu gönderir. |
| `submitVerdictsDirect` | — | `boolean` | Etiketleri hazırlar ve gönderir. |
| `invokeProceedAction` | — | `boolean` | Enter/tıklama işleyicisi: ilk basış hazırlar, ikinci basış gönderir. |
| `installProceedShortcut` | — | `void` | `Enter`/`NumpadEnter` için capture aşamalı dinleyici. |
| `hookProceedButton` | — | `void` | Yerel gönder düğmesinin tıklama davranışını değiştirir. |
| `installVerdictChangeReset` | — | `void` | Bir karar değiştiğinde gönderimi hazır durumdan çıkarır ve ön ayarları yeniden eşler. |
| `scheduleProceedFooterFix` | — | `void` | `fixProceedFooter` çağrısını geciktirir (`requestAnimationFrame`). |
| `scheduleVerdictLabelsFix` | — | `void` | Etiket/başlık/varsayılan değerlerin gecikmeli yeniden normalleştirilmesi. |

## Düzen ve başlatma

| İşlev | Parametreler | Döndürür | Sorumluluk |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Shift hız seçim çubuğunu oluşturur. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | Tek bir ön ayar düğmesinin HTML'i. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | Genişletilmiş ön ayar gruplarının HTML'i. |
| `buildEnhancementBar` | — | `HTMLElement` | Hızlı karar çubuğunu oluşturur: ön ayarlar, rastgeleleştirici anahtarı, genişletilmiş çekmece. |
| `positionShiftSpeedBar` | — | `void` | Hız çubuğunu karar listesinin önünde tutar. |
| `positionEnhancementBar` | — | `void` | Ön ayar çubuğunu gönder düğmelerinin önünde tutar. |
| `fixProceedFooter` | — | `void` | Alt bilgiyi, çubukları ve gönder düğmesini yeniden düzenler. |
| `enhanceLayout` | — | `void` | Tüm düzen değişikliklerini uygular ve ayarlar arayüzünü kurar. |
| `watchProceedFooter` | — | `void` | `.verdicts-container` öğesini gözlemler ve alt bilgi düzeltmelerini zamanlar. |
| `watchVerdictLabels` | — | `void` | Karar etiketlerini gözlemler ve yeniden normalleştirmeyi zamanlar. |
| `init` | — | `Promise<void>` | Giriş noktası: hesap adı denetimi → davet veya inceleme sayfası → düzen, gözlemciler, kısayollar, oynatıcı iyileştirmeleri. |

### Yukarıda listelenmeyenler

* **`blockSegmentLoopGuard`** (IIFE, yüklemede çalışır): sayfadaki `setInterval` işlevini sarar; böylece sitenin yerel 100 ms bölüm döngüsü zamanlayıcısı boş bir işlevle değiştirilir ve bölümü DemoScope'un kendi denetimleri yönetir.
* **Sabitler ve tablolar:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 tanım).
