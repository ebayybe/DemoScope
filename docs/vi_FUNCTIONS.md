<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) · **Tiếng Việt** · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md)

</div>

# DemoScope — Tài liệu tham chiếu hàm

Tài liệu tham chiếu đầy đủ cho 217 hàm cấp cao nhất trong `DemoScope.user.js` v1.4.0 (tên, tham số, giá trị trả về, trách nhiệm). Quay lại [README](../README.md).

Quy ước: `—` nghĩa là không có tham số; `void` nghĩa là hàm được gọi vì tác dụng phụ của nó.

## Tổng quan hoạt động dành cho người dùng

| Mục | Mô tả |
|---|---|
| Trang được hỗ trợ | Bổ sung tính năng cho trang chào mừng VACNet (`/vacnet`), trang đánh giá (`/vacnet/clips`), trang mời (`/vacnet/createinvite`) và trạng thái không có clip trên trang đánh giá. Không thay đổi các trang khác. |
| Loại tác vụ | Nhận diện biểu mẫu đánh giá VACNet cung cấp. **Biểu mẫu cổ điển** (aim assist, wallhack, auto-bhop, bot) có preset và tổ hợp mở rộng. **Tác vụ một câu hỏi** mới dùng bố cục gọn với ba phán quyết trên phím `1`–`3`, chỉ báo khóa kèm thời gian clip còn lại, không có phán quyết nhanh hay tổ hợp. |
| Ngôn ngữ | Hỗ trợ 29 ngôn ngữ Steam. Ưu tiên lựa chọn thủ công đã lưu; nếu chưa có, dùng tham số `?l=` của Steam rồi đến ngôn ngữ trình duyệt/trang. Chọn ngôn ngữ trong DemoScope cũng truyền `?l=` tương ứng cho VACNet để văn bản của VACNet dùng cùng ngôn ngữ. Chế độ tự động đồng bộ tham số ngôn ngữ Steam với trình duyệt. |
| Trang chào mừng và lời mời | Đổi giao diện hai trang, thêm bộ chọn ngôn ngữ chung và nút hình mắt để ẩn tên tài khoản. Ở trang chào mừng, Enter hoặc Space tiếp tục nếu focus không nằm trên điều khiển tương tác. Trang mời cho phép ẩn/hiện và sao chép liên kết, giải thích điều kiện mời; nút × đóng trang, Enter tương ứng “Done”, Esc tương ứng ×. |
| Đánh giá clip | Thêm preset phán quyết và tổ hợp mở rộng, bộ ngẫu nhiên phán quyết (mặc định tắt), tốc độ phát tùy chỉnh khi giữ Shift, tua trong giới hạn phân đoạn, chuyển từng khung hình và phím tắt phát. Mỗi nhóm phán quyết có nút “?” giải thích đã bản địa hóa; cụm từ chính trên nút được tô màu theo bảng màu DemoScope. |
| Phím tắt | Mọi phím tắt là một thao tác trong danh mục chung và có thể đổi tại **Cài đặt → Phím tắt**. Phát hiện xung đột theo từng trang (trang mời và đánh giá không xung đột), kèm thao tác, nhóm và mô tả đang dùng phím đó. Có thể thay thế, hoán đổi hoặc hủy. Mỗi thao tác có nút đặt lại; gợi ý phím trên trang theo các phím đã gán. |
| Gửi đánh giá | `Enter` hoặc `Numpad Enter` (mặc định) kích hoạt “Continue”. Với biểu mẫu cổ điển, lần nhấn đầu chuẩn bị thao tác, lần sau gửi phán quyết. Với tác vụ một câu hỏi, chọn phán quyết sẽ hiện xác nhận của VACNet và dùng `Enter` để xác nhận. `Esc` (mặc định) nhấn “Cancel” khi đang chờ xác nhận hoặc hủy lần nhấn đầu. Space không dùng để gửi. |
| Cài đặt | Mặc định `F2` mở hộp thoại cài đặt (có thể đổi trong cửa sổ Phím tắt). Các mục: phím tắt, hoạt ảnh, hiệu ứng âm thanh và âm lượng, lịch sử cục bộ (bật, giới hạn, giờ 12/24, bản sao lưu), hiển thị chân trang, chẩn đoán và nút đặt lại chung cho âm thanh, phím tắt, hoạt ảnh. |
| Hoạt ảnh | Có thể tạo hoạt ảnh cho chấm cạnh “DemoScope”. Cửa sổ riêng có sáu kiểu (pulse, breathe, ripple, heartbeat, orbit, blink), xem trước trực tiếp, ba tốc độ và công tắc bật/tắt. Nếu hệ điều hành bật giảm chuyển động, hoạt ảnh mặc định tắt. |
| Lịch sử cục bộ | Lưu tóm tắt phán quyết trong `localStorage` của trình duyệt này; DemoScope không tải dữ liệu lên. Có thể tắt, nhập, xuất JSON/HTML, gộp bản sao JSON thành một báo cáo HTML hoặc xóa lịch sử. Giới hạn: 10/20/30/50 mục mỗi khóa và tổng cộng 100/200/300/500 khóa. Tắt lịch sử chỉ ngừng ghi mới, không xóa dữ liệu cũ. Chỉ ghi biểu mẫu cổ điển. |
| Hàng đợi trống | Thay thông báo hàng đợi trống VACNet bằng hướng dẫn đã dịch, thời điểm lần đầu xuất hiện được lưu trong trình duyệt và bộ chọn ngôn ngữ. Thông tin 250 bản demo/ngày dựa trên quan sát VACNet; DemoScope không áp đặt hoặc vượt qua giới hạn dịch vụ này. |
| Chân trang | Dùng chân trang DemoScope đã dịch. Trang clip có thể hiện liên kết góp ý và báo cáo; cài đặt cho phép ẩn từng liên kết, dòng bản quyền hoặc toàn bộ chân trang. |
| Khả năng phục hồi | Mỗi bước thiết lập chạy độc lập để lỗi ở một bước không dừng bước khác. Các phần tử quan trọng được tìm bằng phương án dự phòng. Nếu không nhận diện được trang, DemoScope tự tắt trên trang đó, khôi phục bố cục VACNet và hiện thông báo ngắn. **Cài đặt → Chẩn đoán** sao chép báo cáo văn bản về phiên bản, phần tử tìm thấy, bước lỗi và cấu trúc trang để gửi báo lỗi. |

## Bản địa hóa

| Hàm | Tham số | Giá trị trả về | Chức năng |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Mã SVG nội tuyến của lá cờ cho một ngôn ngữ; nếu không có thì dùng biểu tượng quả địa cầu. |
| `getSavedLocale` | — | `string \| null` | Đọc ngôn ngữ người dùng đã lưu (`demoscopeLanguage`) từ `localStorage`. |
| `getActiveLocale` | — | `string` | Xác định ngôn ngữ đang dùng: lựa chọn đã lưu → Steam `?l=` → ngôn ngữ trình duyệt/trang → `en`. |
| `getLanguageBadge` | — | `string` | Tên hiển thị riêng của ngôn ngữ, ví dụ “English version”, cho huy hiệu trong bộ chọn ngôn ngữ. |
| `getBrowserLocale` | — | `string \| null` | Tìm ngôn ngữ trình duyệt được hỗ trợ đầu tiên, kể cả biến thể vùng. |
| `syncAutomaticLanguage` | — | `boolean` | Ở chế độ tự động, đồng bộ ?l= với ngôn ngữ trình duyệt và chuyển trang nếu khác nhau. |
| `getRenderedSteamLanguage` | — | `string \| null` | Đọc ngôn ngữ mà VACNet thực sự dùng để hiển thị trang từ tham số l= trong URL stylesheet và script của chính trang. |
| `syncSelectedLanguage` | — | `boolean` | Khi người dùng chọn ngôn ngữ thủ công trong DemoScope, tải lại trang một lần với ?l= tương ứng để văn bản VACNet theo cùng ngôn ngữ. Bỏ qua nếu ngôn ngữ đã khớp và ngăn vòng lặp chuyển hướng. Trả về true nếu đã điều hướng. |
| `tr` | `key: string` | `string` | Tra cứu chuỗi giao diện cho ngôn ngữ đang dùng (dự phòng: tiếng Anh, rồi chính khóa). |
| `inviteText` | `key: string` | `string` | Tra cứu tương tự cho bảng chuỗi của trang mời. |
| `settingText` | `key: string` | `string` | Tra cứu tương tự cho bảng chuỗi của hộp thoại cài đặt. |
| `getPresetLabel` | `name: string` | `string` | Nhãn đã bản địa hóa của một mẫu, ghép các tổ hợp như “Bot + Aim”. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | HTML của các nút chọn ngôn ngữ, gồm cả mục “auto”. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Gắn và định vị bộ chọn ngôn ngữ, lưu lựa chọn rồi tải lại trang; callback tùy chọn có thể xử lý lựa chọn thay thế. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Tìm chuỗi đã bản địa hóa cho thông báo hàng đợi trống hoặc chân trang. |

## Hiệu ứng âm thanh và hộp thoại cài đặt

| Hàm | Tham số | Giá trị trả về | Chức năng |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Dòng “N mục · mục gần nhất: …” hiển thị trong hộp thoại cài đặt. |
| `soundsEnabled` | — | `boolean` | Cho biết âm thanh giao diện có bật không (`demoscopeSoundEffectsEnabled`, mặc định bật). |
| `getSoundVolume` | — | `number (0–1)` | Âm lượng đã lưu (`demoscopeSoundEffectsVolume`, mặc định 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Tổng hợp một chuỗi âm ngắn bằng Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); không bao giờ ném lỗi. |
| `readSettingsHotkey` | — | `string` | `KeyboardEvent.code` đã lưu để mở hộp thoại cài đặt (mặc định `F2`). |
| `formatHotkey` | `code: string` | `string` | Tên phím dễ đọc (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Trích mã phím vật lý, ánh xạ bố cục không phải Latin về `KeyX`; trả về `""` nếu không dùng được. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Đúng với các phím mà DemoScope hoặc trình phát đã dùng (Enter, Space, phím mũi tên, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Tạo và kết nối hộp thoại cài đặt: âm thanh và âm lượng, nghe thử, phím tắt, lịch sử cục bộ và giới hạn, định dạng giờ, nhập/xuất JSON, xuất/gộp HTML, xóa lịch sử, hiển thị chân trang và đặt lại. |
| `openSettingsDialog` | `opener = null` | `void` | Mở hộp thoại với giá trị hiện tại và nhớ phần tử để trả lại tiêu điểm. |
| `installSettingsUi` | — | `void` | Cài bộ lắng nghe phím toàn cục ở pha capture (mở/đóng hộp thoại, gán lại phím) và các sự kiện âm thanh. |
| `installUiSoundEvents` | — | `void` | Bộ lắng nghe nhấp chuột ủy quyền, phát âm thanh phản hồi cho các điều khiển của DemoScope. |
| `ensureSettingsLayoutStyles` | — | `void` | Chèn kiểu cho cửa sổ cài đặt: căn trái các mục và dùng nhãn tóm tắt cho từng hàng. |
| `refreshSettingsSummaries` | — | `void` | Cập nhật nhãn tóm tắt cho mục Phím tắt và Hoạt ảnh. |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Thêm các mục Phím tắt, Hoạt ảnh, Chẩn đoán và Đặt lại; ẩn khối phím cài đặt cũ. |

## Sao lưu, báo cáo và giới hạn lịch sử

| Hàm | Tham số | Giá trị trả về | Chức năng |
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

## Tên tài khoản và trang mời

| Hàm | Tham số | Giá trị trả về | Chức năng |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Cho biết tên tài khoản Steam hiện có đang bị ẩn không. |
| `installAccountNameControl` | — | `void` | Thêm nút chuyển hình con mắt cạnh liên kết đăng xuất và giữ đồng bộ bằng `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Thiết kế lại `/vacnet/createinvite`: bố cục thẻ, hiện/ẩn và sao chép liên kết (Clipboard API, dự phòng `execCommand`), danh sách điều kiện, bộ chọn ngôn ngữ. Trả về `false` nếu thiếu các phần tử cần thiết. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Thêm nút đóng (×) và bộ xử lý bắt sự kiện cho inviteDone, inviteClose. Bỏ qua phím khi nút, liên kết, trường nhập, hộp thoại hoặc danh sách ngôn ngữ đang được focus. |
| `refreshInviteKeyLabels` | — | `void` | Cập nhật nhãn “Done” và chú giải của × theo phím tắt hiện tại. |
| `installWelcomePage` | — | `boolean` | Chỉnh trang chào mừng, thêm nhận diện và bộ chọn ngôn ngữ; Enter/Space tiếp tục; trả về false nếu thiếu thành phần cần thiết. |

## Đoạn clip và bộ điều hợp trình phát

| Hàm | Tham số | Giá trị trả về | Chức năng |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Trả về true nếu tiêu điểm nằm trong ô nhập, textarea, select hoặc văn bản có thể chỉnh sửa. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Giống isShortcutBlocked nhưng cho phép nút radio phán quyết, vì focus vẫn ở nút sau khi nhấp. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Nhãn của một tùy chọn tốc độ. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Danh sách `<option>` cho bộ chọn tốc độ (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Tốc độ Shift đã lưu (mặc định 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Trạng thái đã lưu của bộ ngẫu nhiên hóa phán quyết (mặc định tắt). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Nối dây xử lý tốc độ phát, giới hạn/tạm dừng đoạn clip, các hàm hỗ trợ tua/lùi khung/tắt tiếng/toàn màn hình và phím tắt toàn cục (`1`–`5`, phím mũi tên, `,` `.`, Space, `M`, `F`, Shift). Các closure nội bộ: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, các hàm hỗ trợ vòng vẽ. |

## Phán quyết mẫu

| Hàm | Tham số | Giá trị trả về | Chức năng |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Chọn “skip” ở mọi nhóm phán quyết chưa có lựa chọn. |
| `getSelectedVerdictState` | — | `object` | Giá trị hiện tại (`positive` / `negative` / `skip` / `null`) của `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Tên mẫu khớp với lựa chọn hiện tại. |
| `syncPresetButtons` | — | `string \| null` | Cập nhật `aria-pressed` trên các nút mẫu và huy hiệu của mẫu mở rộng. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Nhấp các nút radio của một mẫu; khi bật bộ ngẫu nhiên hóa thì xáo trộn thứ tự và chờ 200–600 ms giữa các lần nhấp. Vô hiệu hóa các nút mẫu khi đang chạy. |
| `readAdvancedPresetsOpen` | — | `boolean` | Cho biết ngăn mẫu mở rộng có đang được để mở không. |
| `normalizeVerdictLabels` | `root = document` | `void` | Bỏ phần đánh dấu nổi bật khỏi nhãn phán quyết. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Thêm tiêu đề đã bản địa hóa phía trên mỗi nhóm phán quyết. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Tạo nút “?” và cửa sổ giải thích cho một nhóm phán quyết, ưu tiên nội dung bản địa hóa của DemoScope. |
| `closeVerdictHelp` | `except = null` | `void` | Đóng mọi cửa sổ giải thích đang mở, trừ cửa sổ được chỉ định. |
| `installVerdictHelpHandlers` | — | `void` | Cài một lần bộ xử lý ủy quyền cho nhấp, nhấp bên ngoài và Esc của cửa sổ giải thích. |

## Thông báo, chân trang và màn hình tải khi gửi

| Hàm | Tham số | Giá trị trả về | Chức năng |
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

| Hàm | Tham số | Giá trị trả về | Chức năng |
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
| `isLocalHistoryEnabled` | — | `boolean` | Đọc trạng thái bật/tắt lịch sử cục bộ; mặc định bật. |
| `readTimeFormat` | — | `string` | Đọc định dạng giờ: tự động, 12 hoặc 24 giờ. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Định dạng thời điểm phát hiện đầu tiên theo ngôn ngữ và định dạng giờ. |
| `getQueueNoticeLocale` | — | `string` | Trả về ngôn ngữ hiện dùng cho thông báo hàng đợi trống. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Chuyển tùy chọn ngôn ngữ cũ sang thiết lập chung và đồng bộ URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Cập nhật thời điểm phát hiện đầu tiên đang hiển thị. |

## Quy trình gửi

| Hàm | Tham số | Giá trị trả về | Chức năng |
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
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Chạy kiểm tra an toàn, hiện lớp phủ tải và gửi biểu mẫu. |
| `submitVerdictsDirect` | — | `boolean` | Chuẩn bị các nhãn rồi gửi. |
| `invokeProceedAction` | — | `boolean` | Trình xử lý Enter/nhấp: lần nhấn đầu chuẩn bị, lần nhấn thứ hai gửi. |
| `installProceedShortcut` | — | `void` | Bộ lắng nghe pha capture cho `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Hủy bước chuẩn bị của lần nhấn đầu trong gửi hai bước hoặc nhấp nút “Cancel” đang hiển thị; trả về false nếu không có gì để hủy. |
| `refreshCancelButtonLabel` | — | `void` | Thêm hoặc cập nhật nhãn phím trên nút “Cancel”. |
| `hookProceedButton` | — | `void` | Thay hành vi nhấp của nút gửi gốc. |
| `installVerdictChangeReset` | — | `void` | Hủy trạng thái sẵn sàng gửi và đồng bộ lại các mẫu khi một phán quyết thay đổi. |
| `scheduleProceedFooterFix` | — | `void` | Gọi `fixProceedFooter` có trì hoãn (`requestAnimationFrame`). |
| `scheduleVerdictLabelsFix` | — | `void` | Chuẩn hóa lại nhãn/tiêu đề/giá trị mặc định có trì hoãn. |

## Danh mục và gán lại phím tắt

| Action | Default | Group | Mô tả |
|---|---|---|---|
| `playPause` | `Space` | Playback | Tạm dừng hoặc tiếp tục clip. |
| `mute` | `M` | Playback | Tắt hoặc bật tiếng. |
| `fullscreen` | `F` | Playback | Bật hoặc thoát toàn màn hình. |
| `seekBack` / `seekForward` | `←` / `→` | Điều hướng | Tua lùi/tiến 5 giây. |
| `frameBack` / `frameForward` | `,` / `.` | Điều hướng | Lùi/tiến một khung hình. |
| `speedBoost` | `Shift` | Navigation | Tăng tốc phát khi giữ phím; đây là hành động duy nhất có thể dùng Shift. |
| `quick1` … `quick5` | `1` … `5` | Phán quyết | Biểu mẫu cổ điển: preset 1–5. Tác vụ một câu hỏi: Cheating / Not sure / No cheats seen (`1`–`3`). |
| `proceed` | `Enter` | Submission | Xác nhận phán quyết hoặc chuẩn bị và gửi biểu mẫu kiểu cổ điển. |
| `cancel` | `Esc` | Submission | Nhấn “Cancel” hoặc hủy lần nhấn Enter đầu tiên. |
| `inviteDone` | `Enter` | Invite page | Rời trang mời, giống nút “Done”. |
| `inviteClose` | `Esc` | Invite page | Thực hiện thao tác giống nút ×. |
| `settings` | `F2` | Interface | Mở hoặc đóng hộp thoại cài đặt. |

Phím được lưu dưới dạng giá trị `KeyboardEvent.code` trong `demoscopeKeybindings` (chỉ lưu thay đổi so với mặc định; phím cài đặt có mục riêng). Modifier trái/phải được tính là một phím, bàn phím số tương ứng với hàng phím chính. Không thể gán: `Tab`, `Ctrl`, `Alt`, `Meta`, `Caps Lock`, `ContextMenu`, `F5`, `F11`, `F12`. Phạm vi xung đột riêng biệt: `review`, `invite` và phím cài đặt `global` xung đột với mọi thứ.

| Hàm | Tham số | Giá trị trả về | Chức năng |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Thay thế phần giữ chỗ {name} trong mẫu đã bản địa hóa. |
| `isModalOpen` | — | `boolean` | Trả về true khi có <dialog> đang mở; phím tắt trang sẽ không hoạt động khi đó. |
| `normalizeKeyCode` | `code: string` | `string` | Gộp phím bổ trợ trái/phải thành một và ánh xạ số bàn phím phụ cùng NumpadEnter sang phím hàng chính. |
| `formatKeyLabel` | `code: string` | `string` | Tên hiển thị của phím (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Đọc và xác thực phím đã lưu (có bộ nhớ đệm; trả về {} nếu lỗi). |
| `saveKeyOverrides` | `overrides: object` | `void` | Lưu phím gán hoặc xóa mục nếu tất cả đều là mặc định. |
| `getBinding` | `id: string` | `string` | Lấy phím hiện tại của hành động; trả về chuỗi rỗng nếu chưa gán. |
| `setBinding` | `id: string, code: string` | `void` | Lưu phím cho hành động; mã rỗng sẽ bỏ gán, giá trị mặc định không được lưu. |
| `resetAllBindings` | — | `void` | Khôi phục mọi phím, kể cả phím cài đặt, về mặc định. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Tìm hành động khác đang dùng phím đó trong phạm vi bị chồng lấn. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Xác định ID hành động từ sự kiện bàn phím trong phạm vi trang hiện tại. |
| `keyScopeOf` | `id: string` | `string` | Phạm vi của hành động: review, invite hoặc global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | Trả về true nếu hai phạm vi có thể xung đột (cùng phạm vi hoặc một phạm vi là global). |
| `currentKeyScope` | — | `string` | Trả về invite trên trang mời, ngược lại trả về review. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Trả về chuỗi rỗng nếu phím hợp lệ, reserved nếu là phím trình duyệt, shift nếu dùng Shift cho hành động không cần giữ. |
| `quickRangeLabel` | `count: number` | `string` | Nhãn phím phán quyết nhanh: 1–5 nếu chưa thay đổi, nếu không thì liệt kê các phím đã gán. |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Tạo gợi ý phím bên dưới video từ các phím gán hiện tại. |
| `refreshKeyLabels` | — | `void` | Cập nhật mọi nhãn phím trên trang: gợi ý, huy hiệu, nút Tiếp tục/Hủy/Mời và tóm tắt cài đặt. |
| `ensureDemoscopeDialogStyles` | — | `void` | Chèn kiểu dùng chung cho cửa sổ Phím tắt và Hoạt ảnh. |
| `hkActionName` | `id: string` | `string` | Tên hành động đã bản địa hóa. |
| `hkGroupName` | `group: string` | `string` | Tên nhóm đã bản địa hóa. |
| `hkActionDescription` | `id: string` | `string` | Mô tả đã bản địa hóa về tác dụng; phán quyết nhanh được giải thích cho cả hai dạng nhiệm vụ. |
| `hkSetMessage` | `text: string, warn = false` | `void` | Đặt dòng trạng thái của cửa sổ Phím tắt. |
| `hkCancelCapture` | — | `void` | Thoát chế độ ghi nhận phím. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Tạo HTML cho một hàng hành động, bao gồm bảng xung đột nếu có. |
| `renderHotkeys` | — | `void` | Vẽ lại toàn bộ cửa sổ và giữ nguyên vị trí cuộn. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Gán phím; replace bỏ gán ở hành động kia, swap đổi phím giữa hai hành động. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Gán phím trực tiếp hoặc mở bảng xung đột (Replace / Swap / Cancel) nếu phím đã được dùng. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Tạo cửa sổ Phím tắt và trình nghe phím ở giai đoạn ghi nhận; Esc có thể được gán và không đóng cửa sổ trong lúc ghi nhận. |
| `openHotkeysDialog` | — | `void` | Mở cửa sổ Phím tắt. |

## Hoạt ảnh

Sáu kiểu chấm chỉ báo (`pulse`, `breathe`, `ripple`, `heartbeat`, `orbit`, `blink`), ba tốc độ (0,6× / 1× / 1,7×) và trạng thái bật/tắt được lưu trong `demoscopeAnimStyle`, `demoscopeAnimSpeed`, `demoscopeAnimEnabled`. Kiểu đang dùng được đặt qua `data-ds-anim` trên `<html>` (`off` khi tắt); stylesheet điều khiển cả chấm trực tiếp và phần xem trước.

| Hàm | Tham số | Giá trị trả về | Chức năng |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Đọc localStorage an toàn. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Ghi localStorage an toàn; giá trị null sẽ xóa khóa. |
| `animEnabled` | — | `boolean` | Trạng thái hoạt ảnh đã lưu; mặc định tắt nếu hệ thống yêu cầu giảm chuyển động. |
| `animStyle` | — | `string` | Kiểu đã lưu (mặc định pulse). |
| `animSpeedKey` | — | `string` | Tốc độ đã lưu (slow / normal / fast; mặc định normal). |
| `ensureAnimationStyles` | — | `void` | Chèn keyframe và quy tắc dùng chung cho chấm chỉ báo và chấm xem trước. |
| `applyAnimationSettings` | — | `void` | Áp dụng kiểu, tốc độ và trạng thái bật/tắt vào <html>, rồi cập nhật tóm tắt cài đặt. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Tạo cửa sổ Hoạt ảnh với công tắc, tốc độ, thẻ kiểu có xem trước trực tiếp và nút đặt lại. |
| `openAnimationsDialog` | — | `void` | Mở cửa sổ Hoạt ảnh. |
| `ensureUiPolishStyles` | — | `void` | Thêm thanh cuộn tối, mảnh và color-scheme: dark cho cửa sổ và danh sách phán quyết. |

## Tác vụ một câu hỏi

| Hàm | Tham số | Giá trị trả về | Chức năng |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Trả về true khi trang hiển thị biểu mẫu một câu hỏi (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | Nhấp lựa chọn Cheating / Not sure / No cheats seen; nếu lựa chọn còn khóa, phát âm báo lỗi và làm rung thẻ khóa. |
| `localizeCheatingVerdicts` | — | `void` | Đổi ba nhãn sang ngôn ngữ DemoScope và vẽ huy hiệu phím bằng CSS để dòng xác nhận VACNet không chứa chữ số phím; đồng thời chuẩn bị thẻ khóa. |
| `updateCheatingLock` | — | `void` | Cập nhật thẻ khóa và thanh tiến trình với thời gian đến khi hai phán quyết còn lại mở; ẩn khi mở khóa hoặc đã chọn. |
| `startCheatingLockWatcher` | — | `void` | Chạy bộ hẹn giờ mỗi 250 ms gọi updateCheatingLock. |

## Khả năng phục hồi và chẩn đoán

| Hàm | Tham số | Giá trị trả về | Chức năng |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Ghi bước thất bại cho báo cáo chẩn đoán; số lượng có giới hạn. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Chạy bước thiết lập; nếu lỗi thì ghi nhận và trả về giá trị dự phòng để các bước sau vẫn chạy. |
| `getVideoContainer` | — | `HTMLElement \| null` | Tìm khung video; nếu không có thì dùng phần tử cha của trình phát hoặc <video>. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Tìm khung phán quyết; nếu không có thì dùng phần tử cha của khối phán quyết đầu tiên. |
| `getSubmitArea` | — | `HTMLElement \| null` | Tìm vùng gửi/xác nhận (#submitbuttons, .submitbuttons hoặc phần tử cha của nút gửi). |
| `hasVerdictForm` | — | `boolean` | Trả về true nếu có ít nhất một nút radio phán quyết. |
| `removeEnhancements` | — | `void` | Gỡ bảng, lớp và thay đổi chân trang của DemoScope rồi khôi phục chân trang VACNet. |
| `disableDemoScope` | `reason: string` | `void` | Tắt DemoScope trên trang này, hoàn tác thay đổi, chỉ giữ cửa sổ cài đặt và thông báo một lần cho mỗi lý do trong phiên. |
| `isOwnNode` | `el: Element` | `boolean` | Trả về true với phần tử do DemoScope tạo; loại chúng khỏi báo cáo cấu trúc. |
| `elementSignature` | `el: Element` | `string` | Chữ ký tag#id.class[…] dùng trong báo cáo cấu trúc; không chứa văn bản. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Cây thụt lề gọn gồm thẻ, ID và lớp; các phần tử anh em giống nhau được gộp thành ×N. |
| `captureOriginalSkeleton` | — | `void` | Ghi cấu trúc trang trước khi DemoScope thay đổi. |
| `buildDiagnosticsReport` | — | `string` | Tạo báo cáo gồm phiên bản, trang, ngôn ngữ, trình duyệt, dạng nhiệm vụ, 22 kiểm tra phần tử, lỗi theo bước và cấu trúc trước/sau. Không chứa văn bản trang hoặc dữ liệu tài khoản. |
| `fallbackCopyText` | `text: string` | `boolean` | Sao chép bằng vùng văn bản tạm nếu Clipboard API không khả dụng. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Sao chép báo cáo; nếu thất bại, hiển thị văn bản trong hộp có thể chọn. |

## Bố cục và khởi tạo

| Hàm | Tham số | Giá trị trả về | Chức năng |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Dựng thanh chọn tốc độ Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML của một nút mẫu. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML của các nhóm mẫu mở rộng. |
| `buildEnhancementBar` | — | `HTMLElement` | Dựng thanh phán quyết nhanh: các mẫu, nút bật ngẫu nhiên hóa, ngăn mở rộng. |
| `positionShiftSpeedBar` | — | `void` | Giữ thanh tốc độ nằm trước danh sách phán quyết. |
| `positionEnhancementBar` | — | `void` | Giữ thanh mẫu nằm trước các nút gửi. |
| `fixProceedFooter` | — | `void` | Sắp xếp lại chân trang, các thanh và nút gửi. |
| `enhanceLayout` | — | `void` | Áp dụng mọi thay đổi bố cục và cài đặt giao diện cài đặt. |
| `ensureReviewStructure` | — | `void` | Chuẩn hóa HTML VACNet: bọc khối phán quyết trong .verdicts-container-inner, chuyển #submitbuttons vào khung và đưa bộ đếm clip vào huy hiệu tiêu đề. Hỗ trợ cả cấu trúc cũ và mới. |
| `watchProceedFooter` | — | `void` | Quan sát `.verdicts-container` và lên lịch chỉnh chân trang. |
| `watchVerdictLabels` | — | `void` | Quan sát các nhãn phán quyết và lên lịch chuẩn hóa lại. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Đọc tùy chọn hiển thị chân trang từ localStorage. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Lưu tùy chọn hiển thị chân trang. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Tạo hoặc cập nhật chân trang bản địa hóa, có thể kèm liên kết, rồi áp dụng tùy chọn. |
| `installEmptyQueueNotice` | — | `boolean` | Thay thông báo hàng đợi trống bằng hướng dẫn, thời gian, bộ chọn ngôn ngữ và chân trang đã bản địa hóa. |
| `init` | — | `Promise<void>` | Điểm vào: điều khiển tên tài khoản → trang mời hoặc trang kiểm duyệt → bố cục, bộ quan sát, phím tắt, cải tiến trình phát. |

`installWelcomePage` và `installInvitePage` trả về `false` khi thiếu phần tử VACNet cần thiết. `installEmptyQueueNotice` trả về `false` nếu trang không ở trạng thái hàng đợi trống.

### Các mục khác

* **`blockSegmentLoopGuard`** (IIFE, chạy khi tải trang): bọc `setInterval` của trang và thay bộ hẹn giờ lặp đoạn 100 ms của trang web bằng thao tác rỗng; các điều khiển riêng của DemoScope sẽ quản lý đoạn đó.
* **Hằng số và bảng:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitions); added since v1.0.0: `KEY_ACTIONS`, `KEY_GROUPS`, `KEY_ACTION_BY_ID`, `KEY_ACTION_SCOPE`, `RESERVED_KEY_CODES`, `CHEATING_KEYS`, `VERDICT_SECTION_TITLES`, `VERDICT_SECTION_HELP`, `ANIM_STYLES`, `ANIM_SPEEDS`.
* **Trạng thái mô-đun:** `diag` (step failures, the switch-off reason and the original page structure), `hkState` (state of the Hotkeys window) and the `SCRIPT_VERSION` constant used by the diagnostics report.
* **Văn bản:** mọi nội dung hiển thị cho người dùng nằm trong các bảng bản địa hóa ở trên; các cửa sổ từ v1.2.0–v1.4.0 được dịch sang đủ 29 ngôn ngữ.

## Khóa lưu trữ

| Khóa | Nơi lưu | Mục đích |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Ngôn ngữ đã chọn / chế độ tự động. |
| `demoscopeKeybindings` | `localStorage` | Các phím tắt khác với mặc định (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Phím mở hộp thoại cài đặt (none nếu đã gỡ). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Cài đặt hoạt ảnh chỉ báo. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Cài đặt âm thanh. |
| `demoscopeClipHistory` và khóa giới hạn/định dạng lịch sử | `localStorage` | Lịch sử đánh giá cục bộ và cài đặt. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Trạng thái tải khi gửi, bảo vệ đồng bộ ngôn ngữ và thông báo tắt một lần. |









