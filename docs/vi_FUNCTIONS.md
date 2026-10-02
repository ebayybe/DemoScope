<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · **Tiếng Việt** · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Tài liệu tham chiếu hàm

Tài liệu tham chiếu đầy đủ cho 128 hàm cấp cao nhất trong `DemoScope.user.js` v1.0.0 (tên, tham số, giá trị trả về, trách nhiệm). Quay lại [README](../../README/vi_README.md).

Quy ước: `—` nghĩa là không có tham số; `void` nghĩa là hàm được gọi vì tác dụng phụ của nó.

## Bản địa hóa

| Hàm | Tham số | Trả về | Trách nhiệm |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Mã SVG nội tuyến của lá cờ cho một ngôn ngữ; nếu không có thì dùng biểu tượng quả địa cầu. |
| `getSavedLocale` | — | `string \| null` | Đọc ngôn ngữ người dùng đã lưu (`demoscopeLanguage`) từ `localStorage`. |
| `getActiveLocale` | — | `string` | Xác định ngôn ngữ đang dùng: lựa chọn đã lưu → Steam `?l=` → ngôn ngữ trình duyệt/trang → `en`. |
| `getLanguageBadge` | — | `string` | Tên hiển thị riêng của ngôn ngữ, ví dụ “English version”, cho huy hiệu trong bộ chọn ngôn ngữ. |
| `tr` | `key: string` | `string` | Tra cứu chuỗi giao diện cho ngôn ngữ đang dùng (dự phòng: tiếng Anh, rồi chính khóa). |
| `inviteText` | `key: string` | `string` | Tra cứu tương tự cho bảng chuỗi của trang mời. |
| `settingText` | `key: string` | `string` | Tra cứu tương tự cho bảng chuỗi của hộp thoại cài đặt. |
| `getPresetLabel` | `name: string` | `string` | Nhãn đã bản địa hóa của một mẫu, ghép các tổ hợp như “Bot + Aim”. |
| `buildLanguageOptions` | — | `string (HTML)` | HTML của các nút chọn ngôn ngữ, gồm cả mục “auto”. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Gắn bộ chọn ngôn ngữ dạng popover, định vị nó, lưu lựa chọn và tải lại trang. |

## Hiệu ứng âm thanh và hộp thoại cài đặt

| Hàm | Tham số | Trả về | Trách nhiệm |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Dòng “N mục · mục gần nhất: …” hiển thị trong hộp thoại cài đặt. |
| `soundsEnabled` | — | `boolean` | Cho biết âm thanh giao diện có bật không (`demoscopeSoundEffectsEnabled`, mặc định bật). |
| `getSoundVolume` | — | `number (0–1)` | Âm lượng đã lưu (`demoscopeSoundEffectsVolume`, mặc định 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Tổng hợp một chuỗi âm ngắn bằng Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); không bao giờ ném lỗi. |
| `readSettingsHotkey` | — | `string` | `KeyboardEvent.code` đã lưu để mở hộp thoại cài đặt (mặc định `F2`). |
| `formatHotkey` | `code: string` | `string` | Tên phím dễ đọc (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Trích mã phím vật lý, ánh xạ bố cục không phải Latin về `KeyX`; trả về `""` nếu không dùng được. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Đúng với các phím mà DemoScope hoặc trình phát đã dùng (Enter, Space, phím mũi tên, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Tạo (một lần) và nối dây hộp thoại cài đặt: âm thanh, âm lượng, bắt phím tắt, giới hạn lịch sử, xuất/nhập/báo cáo/gộp/xóa, đặt lại. |
| `openSettingsDialog` | `opener = null` | `void` | Mở hộp thoại với giá trị hiện tại và nhớ phần tử để trả lại tiêu điểm. |
| `installSettingsUi` | — | `void` | Cài bộ lắng nghe phím toàn cục ở pha capture (mở/đóng hộp thoại, gán lại phím) và các sự kiện âm thanh. |
| `installUiSoundEvents` | — | `void` | Bộ lắng nghe nhấp chuột ủy quyền, phát âm thanh phản hồi cho các điều khiển của DemoScope. |

## Sao lưu, báo cáo và giới hạn lịch sử

| Hàm | Tham số | Trả về | Trách nhiệm |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Tải toàn bộ lịch sử về dưới dạng `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Kích hoạt tải tệp thông qua một Blob URL tạm. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Làm phẳng và loại trùng các mục lịch sử, mới nhất lên đầu. |
| `exportReadableHistory` | — | `void` | Tải về báo cáo HTML độc lập, đã bản địa hóa của lịch sử. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Dựng mã HTML báo cáo đã được thoát ký tự. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Cập nhật dòng trạng thái của công cụ gộp (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Kiểm tra nhiều bản sao lưu JSON (mỗi tệp ≤ 5 MB, tổng ≤ 100 MB), loại trùng các mục và tải về một báo cáo HTML tổng hợp. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Kiểm tra theo danh sách cho phép đối với khóa lịch sử (chặn `__proto__`, `constructor` và khóa sai định dạng). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Kiểm tra một bản sao lưu JSON, gộp vào lịch sử cục bộ (tuân thủ giới hạn) và làm mới giao diện. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Đọc một giới hạn số từ `localStorage`, chỉ chấp nhận các giá trị cho phép. |
| `getHistoryPerKeyLimit` | — | `number` | Số mục được giữ cho mỗi khóa clip/trận (10/20/30/50, mặc định 30). |
| `getHistoryTotalLimit` | — | `number` | Tổng số khóa clip/trận được giữ (100/200/300/500, mặc định 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | Cho biết ngăn mẫu mở rộng có đang được để mở không. |

## Tên tài khoản và trang mời

| Hàm | Tham số | Trả về | Trách nhiệm |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Cho biết tên tài khoản Steam hiện có đang bị ẩn không. |
| `installAccountNameControl` | — | `void` | Thêm nút chuyển hình con mắt cạnh liên kết đăng xuất và giữ đồng bộ bằng `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Thiết kế lại `/vacnet/createinvite`: bố cục thẻ, hiện/ẩn và sao chép liên kết (Clipboard API, dự phòng `execCommand`), danh sách điều kiện, bộ chọn ngôn ngữ. Trả về `false` nếu thiếu các phần tử cần thiết. |

## Đoạn clip và bộ điều hợp trình phát

| Hàm | Tham số | Trả về | Trách nhiệm |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Trích `startTime`/`endTime` từ các script nội tuyến của trang. |
| `formatSegmentTime` | `seconds: number` | `string` | Định dạng số giây thành `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Tìm phần tử `<video>` của lượt kiểm duyệt. |
| `getVjsPlayer` | — | `Video.js player \| null` | Trả về trình phát Video.js của trang nếu có và chưa bị hủy. |
| `createPlayerAdapter` | — | `adapter \| null` | API thống nhất trên Video.js / video HTML5: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Kiểm tra mỗi 100 ms cho đến khi có trình phát; từ chối khi hết thời gian chờ. |
| `clampSegment` | `time: number, bounds: object` | `number` | Giới hạn một thời điểm trong phạm vi của clip. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Vị trí tương đối bên trong clip. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Thêm thanh tua, hiển thị thời gian và gợi ý phím tắt bên dưới video. |
| `pauseLayoutMutations` | `run: Function` | `void` | Chạy một callback trong khi các bộ quan sát bố cục bị tạm dừng (ngăn vòng lặp phản hồi). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Đúng khi tiêu điểm nằm trong ô nhập, textarea, select, nút, liên kết hoặc phần tử có thể chỉnh sửa. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Nhãn của một tùy chọn tốc độ. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Danh sách `<option>` cho bộ chọn tốc độ (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Tốc độ Shift đã lưu (mặc định 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Trạng thái đã lưu của bộ ngẫu nhiên hóa phán quyết (mặc định tắt). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Nối dây xử lý tốc độ phát, giới hạn/tạm dừng đoạn clip, các hàm hỗ trợ tua/lùi khung/tắt tiếng/toàn màn hình và phím tắt toàn cục (`1`–`5`, phím mũi tên, `,` `.`, Space, `M`, `F`, Shift). Các closure nội bộ: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, các hàm hỗ trợ vòng vẽ. |

## Phán quyết mẫu

| Hàm | Tham số | Trả về | Trách nhiệm |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Chọn “skip” ở mọi nhóm phán quyết chưa có lựa chọn. |
| `getSelectedVerdictState` | — | `object` | Giá trị hiện tại (`positive` / `negative` / `skip` / `null`) của `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Tên mẫu khớp với lựa chọn hiện tại. |
| `syncPresetButtons` | — | `string \| null` | Cập nhật `aria-pressed` trên các nút mẫu và huy hiệu của mẫu mở rộng. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Nhấp các nút radio của một mẫu; khi bật bộ ngẫu nhiên hóa thì xáo trộn thứ tự và chờ 200–600 ms giữa các lần nhấp. Vô hiệu hóa các nút mẫu khi đang chạy. |
| `normalizeVerdictLabels` | `root = document` | `void` | Bỏ phần đánh dấu nổi bật khỏi nhãn phán quyết. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Thêm tiêu đề đã bản địa hóa phía trên mỗi nhóm phán quyết. |

## Thông báo, chân trang và màn hình tải khi gửi

| Hàm | Tham số | Trả về | Trách nhiệm |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Ẩn chân trang của trang web. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Hiển thị thông báo không chặn, dùng ARIA-live. |
| `markSubmitPending` | — | `void` | Lưu thời điểm gửi và id clip hiện tại vào `sessionStorage`. |
| `isSubmitPending` | — | `boolean` | Cho biết có lượt gửi đang chờ clip tiếp theo không. |
| `clearSubmitPending` | — | `void` | Xóa các dấu hiệu đang chờ gửi. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Hiển thị lớp phủ tải toàn trang. |
| `hideSubmitLoadingOverlay` | — | `void` | Ẩn lớp phủ và xóa trạng thái chờ. |
| `bootSubmitLoadingIfPending` | — | `void` | Hiện lại lớp phủ khi tải trang nếu có lượt gửi đang chờ. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Đúng khi giao diện và media của clip tiếp theo đã sẵn sàng. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Chờ tối đa 30 s cho clip tiếp theo rồi ẩn lớp phủ (thông báo lỗi nếu hết thời gian). |

## Kho lịch sử cục bộ

| Hàm | Tham số | Trả về | Trách nhiệm |
|---|---|---|---|
| `extractVodId` | — | `string` | Suy ra id clip/trận từ URL của video. |
| `getGameKey` | — | `string` | Khóa lịch sử cho trận (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Khóa lịch sử cho một đoạn clip (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Kiểm tra và làm sạch một mục lịch sử. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Các mục đã chuẩn hóa của một khóa. |
| `getGameHistoryEntries` | `store: object` | `Array` | Các mục của trận hiện tại (hỗ trợ khóa cũ). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Các mục của đoạn clip hiện tại. |
| `formatClipId` | `vodId: string` | `string` | Id hiển thị dạng số ngắn (`#0000000`), băm từ id clip. |
| `formatRelativeTime` | `timestamp: number` | `string` | Thời gian tương đối đã bản địa hóa (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Tải đối tượng lịch sử từ `localStorage` (`{}` khi có lỗi). |
| `pruneHistoryStore` | `store: object` | `void` | Áp dụng giới hạn theo từng khóa và tổng (các khóa cũ nhất bị bỏ trước). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Cắt tỉa rồi lưu; trả về `false` nếu lỗi hạn mức/lưu trữ. |
| `summarizeCurrentVerdict` | — | `string` | Tên mẫu của lựa chọn hiện tại, hoặc `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Nhãn đã bản địa hóa cho phần tóm tắt lịch sử. |
| `formatClockTime` | `seconds: number` | `string` | Định dạng đồng hồ `m:ss` (hoặc `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Khoảng đoạn clip dễ đọc. |
| `formatGameLabel` | — | `string` | Nhãn đã bản địa hóa của trận hiện tại. |
| `historyEntryKey` | `entry: object` | `string` | Chuỗi định danh dùng để loại trùng. |
| `formatPriorStat` | `count: number, label: string` | `string` | Dòng “nhãn: N” trong bảng lịch sử. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Gộp các mục clip/trận thành các mục hiển thị. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML của một dòng lịch sử. |
| `escapeHtml` | `value: any` | `string` | Thoát ký tự `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML của bảng lịch sử, gồm cả nút quy tắc kiểm duyệt. |
| `ensureClipHistoryPanel` | — | `void` | Tạo vùng chứa của bảng nếu chưa có. |
| `ensureReviewRulesDialog` | — | `void` | Tạo hộp thoại quy tắc kiểm duyệt và gắn các nút mở/đóng của nó. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Gắn nút “lịch sử cục bộ” (cuộn tới danh sách hoặc hiện thông báo khi trống). |
| `positionClipHistoryPanel` | — | `void` | Giữ bảng ở vị trí đầu tiên trong `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Vẽ lại bảng lịch sử cho clip hiện tại. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Thêm tóm tắt phán quyết hiện tại vào lịch sử của trận và của clip. |

## Quy trình gửi

| Hàm | Tham số | Trả về | Trách nhiệm |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Đúng trên các trang hiển thị bốn nhóm phán quyết. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Nút gửi gốc nếu đang hiển thị và được bật. |
| `recordProceedHistoryIfLabeling` | — | `void` | Ghi lịch sử một lần cho mỗi lượt gửi (có bảo vệ chống vào lại). |
| `resetProceedArmed` | — | `void` | Hủy trạng thái sẵn sàng của thao tác gửi hai bước. |
| `refreshProceedButtonLabel` | — | `void` | Cập nhật nhãn nút/gợi ý `Enter` và kiểu hiển thị khi đã sẵn sàng. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Ánh xạ một lựa chọn sang `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Dựng các input ẩn `verdict_labels[]`; hiện thông báo lỗi và trả về `false` nếu có nhóm chưa chọn. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Chỉ cho phép action của biểu mẫu cùng nguồn gốc và dùng HTTPS. |
| `restoreSubmitUi` | — | `void` | Khôi phục các nút sau khi gửi thất bại. |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Chạy kiểm tra an toàn, hiện lớp phủ tải và gửi biểu mẫu. |
| `submitVerdictsDirect` | — | `boolean` | Chuẩn bị các nhãn rồi gửi. |
| `invokeProceedAction` | — | `boolean` | Trình xử lý Enter/nhấp: lần nhấn đầu chuẩn bị, lần nhấn thứ hai gửi. |
| `installProceedShortcut` | — | `void` | Bộ lắng nghe pha capture cho `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Thay hành vi nhấp của nút gửi gốc. |
| `installVerdictChangeReset` | — | `void` | Hủy trạng thái sẵn sàng gửi và đồng bộ lại các mẫu khi một phán quyết thay đổi. |
| `scheduleProceedFooterFix` | — | `void` | Gọi `fixProceedFooter` có trì hoãn (`requestAnimationFrame`). |
| `scheduleVerdictLabelsFix` | — | `void` | Chuẩn hóa lại nhãn/tiêu đề/giá trị mặc định có trì hoãn. |

## Bố cục và khởi tạo

| Hàm | Tham số | Trả về | Trách nhiệm |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Dựng thanh chọn tốc độ Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML của một nút mẫu. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML của các nhóm mẫu mở rộng. |
| `buildEnhancementBar` | — | `HTMLElement` | Dựng thanh phán quyết nhanh: các mẫu, nút bật ngẫu nhiên hóa, ngăn mở rộng. |
| `positionShiftSpeedBar` | — | `void` | Giữ thanh tốc độ nằm trước danh sách phán quyết. |
| `positionEnhancementBar` | — | `void` | Giữ thanh mẫu nằm trước các nút gửi. |
| `fixProceedFooter` | — | `void` | Sắp xếp lại chân trang, các thanh và nút gửi. |
| `enhanceLayout` | — | `void` | Áp dụng mọi thay đổi bố cục và cài đặt giao diện cài đặt. |
| `watchProceedFooter` | — | `void` | Quan sát `.verdicts-container` và lên lịch chỉnh chân trang. |
| `watchVerdictLabels` | — | `void` | Quan sát các nhãn phán quyết và lên lịch chuẩn hóa lại. |
| `init` | — | `Promise<void>` | Điểm vào: điều khiển tên tài khoản → trang mời hoặc trang kiểm duyệt → bố cục, bộ quan sát, phím tắt, cải tiến trình phát. |

### Không liệt kê ở trên

* **`blockSegmentLoopGuard`** (IIFE, chạy khi tải): bọc `setInterval` trên trang để bộ đếm lặp đoạn clip gốc 100 ms của trang bị thay bằng hàm rỗng; các điều khiển riêng của DemoScope sẽ xử lý đoạn clip.
* **Hằng số và bảng:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 định nghĩa).
