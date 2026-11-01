<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · **Tiếng Việt** · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**Bộ công cụ đánh giá CS2 VACNet ưu tiên thao tác bằng bàn phím.**<br>
Preset phán quyết · trình phát theo đúng giới hạn clip · phím tắt có thể gán lại · lịch sử cục bộ riêng tư · 29 ngôn ngữ.

<br>

[![Phiên bản](https://img.shields.io/badge/version-1.4.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![Giấy phép](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#cài-đặt)
[![Ngôn ngữ](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#ngôn-ngữ)
[![Quyền riêng tư](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#quyền-riêng-tư)

<br>

[**⬇ Cài đặt DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[Tính năng](#tính-năng) · [Cài đặt](#cài-đặt) · [Phím tắt](#phím-tắt) · [Tùy chỉnh](#tùy-chỉnh) · [Tài liệu](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md) · [Nhật ký thay đổi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md)

</div>

<br>

## Ảnh chụp màn hình

<table>
  <tr>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="Màn hình chào mừng DemoScope"></a><br><sub><b>Màn hình chào mừng</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="Giao diện chính DemoScope"></a><br><sub><b>Giao diện chính</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="Trang mời bạn bè DemoScope"></a><br><sub><b>Mời bạn bè</b></sub></td>
  </tr>
</table>

## Tổng quan

DemoScope nâng cấp các trang đánh giá Counter-Strike VACNet (`counter-strike.net/vacnet`). Thay vì nhấp qua biểu mẫu phán quyết cho từng clip ngắn, bạn có thể thao tác bằng bàn phím: preset phán quyết, thanh tua giới hạn trong đoạn đang xem, chuyển từng khung hình, tăng tốc tạm thời, gửi theo hai bước và lịch sử phán quyết riêng tư. Công cụ hỗ trợ cả hai biểu mẫu VACNet hiện dùng (biểu mẫu cổ điển bốn câu hỏi và tác vụ một câu hỏi mới) đồng thời tự bảo vệ khi Valve thay đổi trang. Mọi thứ chạy cục bộ trong trình duyệt.

## Tính năng

| | |
|---|---|
| **Quy trình đánh giá** | 5 preset phán quyết nhanh trên `1`–`5` cùng 15 tổ hợp mở rộng, bộ chọn ngẫu nhiên tùy chọn (mặc định tắt) và gửi an toàn qua hai bước: `Enter` kích hoạt nút, nhấn `Enter` lần nữa để gửi. `Esc` hủy thao tác. |
| **Cả hai loại tác vụ** | Nhận diện biểu mẫu cổ điển (hỗ trợ ngắm, wallhack, auto-bhop, bot) và tác vụ một câu hỏi (“Is the Subject cheating beyond a reasonable doubt?”). Tác vụ này dùng bố cục gọn, phán quyết gắn với `1`–`3` và chỉ báo khóa đếm đến khi clip kết thúc. |
| **Trình phát theo clip** | Thanh tua và thời gian giới hạn ở đầu/cuối clip, nhảy ±5 giây, bước khung hình 1/64 giây, giữ `Shift` để tăng tốc (0,5×–4×), phím tắt tắt tiếng và toàn màn hình. |
| **Phím tắt do bạn kiểm soát** | Gán lại bất kỳ thao tác nào trong 18 thao tác ở cửa sổ riêng. Trước khi thay thế, xung đột được giải thích (thao tác, nhóm, chức năng); mọi gợi ý phím trên trang tuân theo thiết lập của bạn. |
| **Hoạt ảnh** | Cửa sổ xem trước trực tiếp với sáu kiểu chỉ báo, ba tốc độ và công tắc bật/tắt. Mặc định tôn trọng cài đặt hệ thống “giảm chuyển động”. |
| **Phán quyết dễ hiểu** | Dấu “?” bên cạnh từng loại phán quyết giải thích ý nghĩa; cụm từ quan trọng được tô sáng để bạn không bỏ sót từ phủ định “not”. |
| **Lịch sử cục bộ riêng tư** | Lịch sử theo clip và trận đấu trong `localStorage`, nhập/xuất JSON, báo cáo HTML và gộp nhiều bản sao lưu vào một báo cáo. |
| **Trang mời** | Trang `/vacnet/createinvite` được thiết kế lại, có hiện/ẩn, sao chép một lần nhấp, tóm tắt yêu cầu, nút đóng và phím tắt `Enter` / `Esc`. |
| **29 ngôn ngữ** | Ưu tiên ngôn ngữ bạn chọn, tiếp theo là cài đặt Steam `?l=`, rồi đến ngôn ngữ trình duyệt. Chọn ngôn ngữ trong DemoScope cũng đổi văn bản của VACNet. |
| **Hiệu ứng âm thanh** | Âm báo tổng hợp bằng Web Audio, có âm lượng, nghe thử và công tắc bật/tắt. |
| **Sẵn sàng trước thay đổi giao diện** | Các bước thiết lập chạy độc lập, phần tử quan trọng có cách tìm dự phòng; nếu không nhận ra trang, DemoScope tự tắt mà không sửa VACNet. Có thể sao chép báo cáo chẩn đoán chỉ bằng một lần nhấp để báo lỗi. |

## Cài đặt

1. Cài trình quản lý userscript như [Tampermonkey](https://www.tampermonkey.net/) hoặc [Violentmonkey](https://violentmonkey.github.io/). Script sử dụng `GM_addStyle` và `unsafeWindow`.
2. [**Cài DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) và xác nhận trong trình quản lý.
3. Đăng nhập Steam rồi mở [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/).
4. Mở clip cần đánh giá. DemoScope tự tải (loại trừ trang `/vacnet/join`).

Bản cập nhật được gửi qua trình quản lý userscript. DemoScope chạy trên trình duyệt Chromium và Firefox.

## Phím tắt

Phím tắt hoạt động trên trang đánh giá khi tiêu điểm không nằm trong ô nhập liệu hoặc điều khiển tương tác khác. **Bạn có thể đổi mọi phím dưới đây** trong **Settings → Hotkeys**.

| Phím | Thao tác |
|---|---|
| `1` … `5` | Biểu mẫu cổ điển: áp dụng preset (1 bot + hỗ trợ ngắm + wallhack; 2 hỗ trợ ngắm + wallhack; 3 rage; 4 người chơi sạch; 5 không chắc). |
| `1` `2` `3` | Tác vụ một câu hỏi: Cheating / Not sure / No cheats seen. |
| `Enter` | Xác nhận. Biểu mẫu cổ điển: nhấn một lần để kích hoạt nút, nhấn lần nữa để gửi. |
| `Esc` | Hủy phán quyết đang chờ xác nhận hoặc bỏ kích hoạt lần `Enter` đầu tiên. |
| `Shift` (giữ) | Tăng tốc (0,5×–4×; mặc định 2×, có thể chọn trên trang). |
| `←` `→` | Nhảy lùi / tiến 5 giây. |
| `,` `.` | Lùi / tiến một khung hình (1/64 giây). |
| `Space` | Phát / tạm dừng. |
| `M` / `F` | Tắt tiếng / toàn màn hình (nhấp đúp video cũng bật/tắt toàn màn hình). |
| `F2` | Mở cửa sổ cài đặt. |
| `Enter` / `Esc` *(trang mời)* | Hoàn tất / đóng. |

## Tùy chỉnh

Mở cài đặt bằng `F2`. Các mục được sắp xếp từ dùng nhiều đến dùng ít:

- **Hotkeys**: cửa sổ riêng liệt kê mọi thao tác theo nhóm mục đích, đặt lại từng thao tác, “Reset all” và xử lý xung đột bằng **Replace**, **Swap** hoặc **Cancel**. Có thể gán `Esc` như mọi phím khác.
- **Animations**: chọn kiểu (pulse, breathe, ripple, heartbeat, orbit, blink), tốc độ hoặc tắt hoạt ảnh. Mỗi thẻ đều có xem trước trực tiếp.
- **Sound effects**: bật/tắt, âm lượng (có thể chỉnh bằng con lăn chuột) và nút thử âm thanh.
- **Local history**: bật/tắt, giới hạn (10/20/30/50 mục mỗi khóa, 100/200/300/500 khóa), định dạng giờ 12/24 tiếng, bản sao JSON và báo cáo HTML.
- **Footer**: ẩn liên kết phản hồi, liên kết báo cáo, dòng bản quyền hoặc toàn bộ chân trang.
- **Diagnostics**: sao chép báo cáo để gửi lỗi (xem [Báo cáo sự cố](#báo-cáo-sự-cố)).
- **Reset**: một nút khôi phục âm thanh, phím tắt và hoạt ảnh về mặc định. Lịch sử vẫn được giữ.

## Ngôn ngữ

DemoScope có 29 ngôn ngữ: Bulgaria, Trung giản thể và phồn thể, Séc, Đan Mạch, Hà Lan, Anh, Phần Lan, Pháp, Đức, Hy Lạp, Hungary, Indonesia, Ý, Nhật, Hàn, Na Uy, Ba Lan, Bồ Đào Nha (Portugal và Brazil), Romania, Nga, Tây Ban Nha (Spain và Mỹ Latinh), Thụy Điển, Thái, Thổ Nhĩ Kỳ, Ukraina và Việt Nam. Có thể đổi ngôn ngữ bất cứ lúc nào bằng bộ chọn trên trang.

## Báo cáo sự cố

Valve có thể thay đổi trang VACNet mà không báo trước. Nếu có chức năng ngừng hoạt động:

1. Nhấn `F2`, mở **Diagnostics**, rồi chọn **Copy diagnostics**.
2. Dán văn bản vào [issue mới](https://github.com/ebayybe/DemoScope/issues), kèm ảnh chụp màn hình nếu có thể.

Báo cáo có phiên bản script, thời gian, ngôn ngữ và user-agent của trình duyệt, các phần tử trang tìm thấy, bước thiết lập thất bại và cấu trúc trang (chỉ gồm thẻ, ID, lớp). Báo cáo không có văn bản trang, tên tài khoản hoặc lịch sử. Nếu trang không còn nhận diện được, DemoScope tự tắt tại trang đó và báo cho bạn; VACNet vẫn hoạt động bình thường.

## Câu hỏi thường gặp

<details>
<summary><b>DemoScope thông báo đã tắt trên trang này. Chuyện gì đã xảy ra?</b></summary>

Trang VACNet không còn khớp với cấu trúc DemoScope mong đợi, nên script dừng lại thay vì để giao diện dựng dở. Sao chép báo cáo chẩn đoán (xem phía trên) và tạo issue; bản cập nhật thường sớm được phát hành.
</details>

<details>
<summary><b>Văn bản phán quyết VACNet khác ngôn ngữ với DemoScope.</b></summary>

Khi bạn chọn ngôn ngữ trong DemoScope, VACNet được yêu cầu dùng ngôn ngữ đó thông qua tham số Steam `?l=`. Nếu VACNet chưa có bản dịch, nó dùng ngôn ngữ mặc định; nhãn riêng của DemoScope vẫn giữ ngôn ngữ bạn chọn.
</details>

<details>
<summary><b>DemoScope có tự chọn phán quyết thay tôi không?</b></summary>

Không. Preset chỉ nhấp vào nút phán quyết bạn chọn và bạn luôn xác nhận việc gửi. Hãy tự xem xét từng clip và tuân thủ quy tắc chương trình.
</details>

<details>
<summary><b>Lịch sử có được ghi cho tác vụ một câu hỏi không?</b></summary>

Chưa. Hiện lịch sử cục bộ chỉ được ghi cho biểu mẫu cổ điển gồm bốn câu hỏi.
</details>

<details>
<summary><b>Làm sao khôi phục phím mặc định?</b></summary>

Dùng biểu tượng đặt lại cạnh phím đã đổi, chọn **Reset all** trong cửa sổ Hotkeys hoặc **Reset** trong cửa sổ cài đặt; tùy chọn cuối cũng đặt lại âm thanh và hoạt ảnh.
</details>

## Kiến trúc

DemoScope là một hàm tự gọi duy nhất (`@run-at document-start`, `@noframes`). `init()` xác định loại trang, kiểm tra khả năng nhận diện rồi kết nối các mô-đun bên dưới. Tài liệu tham khảo đầy đủ cho 217 hàm cấp cao nhất, gồm tham số, giá trị trả về và khóa lưu trữ, nằm trong [vi_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md).

<details>
<summary><b>Tổng quan mô-đun</b></summary>

| Mô-đun | Trách nhiệm | Hàm chính |
|---|---|---|
| `Localization` | Ngôn ngữ giao diện, tra cứu chuỗi, cờ, bộ chọn ngôn ngữ, đồng bộ `?l=` của VACNet | `getActiveLocale`, `tr`, `settingText`, `syncSelectedLanguage`, `installLanguageSelector` |
| `Segment & player` | Đọc giới hạn clip, bọc trình phát Video.js/HTML5, tắt vòng lặp đoạn gốc của trang | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Thanh tua, gợi ý phím, tăng tốc, bước khung hình, phím tắt | `installCustomControls`, `installPlayerEnhancements` |
| `Hotkeys` | Danh sách hành động, gán phím, phát hiện xung đột, cửa sổ Hotkeys | `getBinding`, `findKeyConflict`, `getActionForEvent`, `ensureHotkeysDialog` |
| `Verdict presets` | Bảng preset, trạng thái chọn, áp dụng ngẫu nhiên | `applyPreset`, `detectActivePreset`, `buildEnhancementBar` |
| `Single-question task` | Nhãn, chỉ báo khóa và phím cho biểu mẫu mới | `isCheatingMode`, `selectCheatingVerdict`, `updateCheatingLock` |
| `Submit flow` | Xác nhận hai bước, hủy, `verdict_labels[]`, kiểm tra cùng nguồn, lớp phủ tải | `invokeProceedAction`, `invokeCancelAction`, `submitVerdictForm`, `finishSubmitLoadingWhenReady` |
| `Local history` | Lịch sử theo clip/trận đấu, bản sao lưu và báo cáo | `appendReviewHistory`, `importLocalHistory`, `exportCombinedHistoryReports` |
| `Settings & animations` | Cửa sổ cài đặt và cửa sổ phụ, âm thanh, hoạt ảnh chỉ báo | `ensureSettingsDialog`, `installExtraSettingsSections`, `ensureAnimationsDialog`, `playUiSound` |
| `Invite page` | Trang mới, nút đóng, phím tắt | `installInvitePage`, `installInviteExtras` |
| `Resilience` | Bước độc lập, tìm dự phòng, tự tắt, chẩn đoán | `safeStep`, `disableDemoScope`, `buildDiagnosticsReport` |
| `Bootstrap` | Điểm vào | `init`, `enhanceLayout` |

</details>

## Quyền riêng tư

DemoScope không gửi telemetry và không tải cài đặt hay lịch sử lên mạng. Khi bạn gửi phán quyết, VACNet nhận dữ liệu qua biểu mẫu thông thường của trang. Cài đặt và lịch sử nằm trong trình duyệt: `localStorage` (khóa bắt đầu bằng `demoscope`) và `sessionStorage`. Chọn **Settings → Local history → Clear history** để xóa lịch sử. Báo cáo chẩn đoán chỉ được sao chép vào clipboard; bạn tự quyết định có chia sẻ hay không.

## Tuyên bố miễn trừ trách nhiệm

DemoScope là dự án cộng đồng không chính thức, không liên kết và không được Valve Corporation chứng thực. Công cụ không bao giờ tự quyết định phán quyết thay bạn. Hãy tự đánh giá từng clip và tuân thủ quy tắc chương trình. Sử dụng theo rủi ro của bạn.

## Giấy phép

Phát hành theo giấy phép [MIT](https://github.com/ebayybe/DemoScope/blob/main/LICENSE).


