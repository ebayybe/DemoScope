<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · **Tiếng Việt** · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Bộ công cụ userscript ưu tiên bàn phím dành cho người kiểm duyệt CS2 VACNet: phán quyết mẫu, trình phát video theo đoạn clip, trang mời được cải tiến, hiệu ứng âm thanh và lịch sử cục bộ riêng tư — hỗ trợ 29 ngôn ngữ.**

</div>

## Tổng quan

DemoScope nâng cấp các trang kiểm duyệt Counter-Strike VACNet (`counter-strike.net/vacnet`). Thay vì phải bấm chuột vào bốn nhóm phán quyết (aim assist, wallhack, auto-bhop, bot) cho mỗi clip ngắn, bạn có quy trình ưu tiên bàn phím: phán quyết mẫu, thanh tua giới hạn trong đoạn đang xem, tua từng khung hình, tăng tốc tạm thời, xác nhận gửi hai bước và lịch sử riêng tư về các phán quyết của bạn. Mọi thứ chạy cục bộ trong trình duyệt của bạn.

## Tính năng chính

- **Phán quyết mẫu** – 5 mẫu nhanh trên phím `1`–`5` cùng 15 tổ hợp mở rộng (aim, wallhack, bhop, bot và các tổ hợp của chúng, gồm cả biến thể “không chắc chắn”).
- **Trình phát theo đoạn** – thanh tua, hiển thị thời gian, nhảy ±5 giây và tua từng khung 1/64 giây, giới hạn trong điểm đầu/cuối của clip.
- **Giữ để tăng tốc** – giữ `Shift` để phát ở tốc độ tùy chỉnh (0,5×–4×, mặc định 2×).
- **Gửi hai bước an toàn** – `Enter` kích hoạt nút, `Enter` lần hai gửi phán quyết; các đích biểu mẫu khác nguồn gốc bị chặn.
- **Giao diện 29 ngôn ngữ** – theo tham số `?l=` của Steam, lựa chọn đã lưu hoặc ngôn ngữ trình duyệt, kèm bộ chọn ngôn ngữ ngay trên trang.
- **Lịch sử kiểm duyệt cục bộ** – lịch sử theo từng clip và từng trận trong `localStorage`; xuất/nhập JSON, báo cáo HTML và gộp nhiều bản sao lưu thành một báo cáo.
- **Nâng cấp trang mời** – `/vacnet/createinvite` được thiết kế lại với hiện/ẩn và sao chép liên kết mời bằng một cú bấm, kèm tóm tắt điều kiện.
- **Hiệu ứng âm thanh** – âm báo tổng hợp bằng Web Audio với nút bật/tắt, âm lượng và nghe thử.
- **Hộp thoại cài đặt** – mở bằng `F2` (có thể đổi phím): âm thanh, phím tắt, giới hạn lịch sử, sao lưu, khôi phục mặc định.
- **Tiện ích** – lớp phủ tải sau khi gửi, thông báo nhanh, nút ẩn tên tài khoản, hộp thoại quy tắc kiểm duyệt và bộ ngẫu nhiên hóa phán quyết tùy chọn (mặc định tắt).

## Cài đặt

1. Cài một trình quản lý userscript như [Tampermonkey](https://www.tampermonkey.net/) hoặc [Violentmonkey](https://violentmonkey.github.io/) (script dùng `GM_addStyle` và `unsafeWindow`).
2. [Cài đặt DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) và xác nhận cài đặt trong trình quản lý.
3. Đăng nhập Steam và mở <https://www.counter-strike.net/vacnet/>.
4. Mở một clip cần kiểm duyệt — DemoScope tự động tải (trang `/vacnet/join` bị loại trừ).

## Cách sử dụng

Phím tắt hoạt động trên các trang kiểm duyệt khi tiêu điểm không nằm trong ô nhập liệu, nút, liên kết hoặc danh sách chọn.

| Phím | Hành động |
|---|---|
| `1` … `5` | Áp dụng phán quyết mẫu: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 người chơi sạch, 5 không chắc chắn |
| `Shift` (hold) | Giữ để tăng tốc (0,5×–4×, mặc định 2×, chọn ngay trên trang) |
| `←` `→` | Nhảy lùi / tiến 5 giây |
| `,` `.` | Lùi / tiến một khung hình (1/64 giây) |
| `Space` | Phát / tạm dừng |
| `M` / `F` | Tắt tiếng / toàn màn hình (nhấp đúp vào video cũng bật/tắt toàn màn hình) |
| `Enter` ×2 | Nhấn một lần để kích hoạt nút gửi, nhấn lần nữa để gửi phán quyết |
| `F2` | Mở hộp thoại cài đặt (có thể đổi phím) |

## Kiến trúc và phân tích hàm

DemoScope là một hàm tự gọi duy nhất (`@run-at document-start`, `@noframes`). `init()` chọn giữa trang mời và trang kiểm duyệt rồi kết nối các mô-đun bên dưới. Tài liệu đầy đủ cho cả 143 hàm — tên, trách nhiệm, tham số và giá trị trả về — nằm tại [vi_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md).

| Mô-đun | Trách nhiệm | Hàm chính |
|---|---|---|
| `Localization` | Xác định ngôn ngữ giao diện, tra cứu chuỗi, vẽ cờ và bộ chọn ngôn ngữ | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Đọc điểm đầu/cuối clip từ trang, bọc trình phát Video.js/HTML5, vô hiệu hóa bộ đếm lặp đoạn gốc của trang | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Thanh tua tùy chỉnh, gợi ý phím, tăng tốc bằng Shift, tua từng khung, phím tắt | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Bảng phán quyết mẫu, trạng thái lựa chọn, áp dụng mẫu với thứ tự và độ trễ ngẫu nhiên tùy chọn | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Enter hai bước, tạo `verdict_labels[]`, kiểm tra cùng nguồn gốc, lớp phủ tải | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Lưu, cắt tỉa và hiển thị lịch sử theo clip và theo trận trong `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | Xuất/nhập JSON, báo cáo HTML, báo cáo gộp từ nhiều bản sao lưu | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Hộp thoại cài đặt, phím tắt đổi được, âm báo Web Audio | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | `/vacnet/createinvite` được làm mới: hiện/ẩn và sao chép liên kết mời, điều kiện | `installInvitePage` |
| `Layout & UI helpers` | Thông báo nhanh, ẩn chân trang, bộ quan sát bố cục, nút ẩn tên tài khoản | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Điểm vào: xác định loại trang và khởi động các mô-đun | `init` |

## Dữ liệu cục bộ và quyền riêng tư

DemoScope không gửi dữ liệu đo từ xa. Cài đặt và lịch sử nằm trong `localStorage` của trình duyệt (khóa bắt đầu bằng `demoscope`) và `sessionStorage`. Dùng tùy chọn xóa lịch sử trong hộp thoại cài đặt để xóa lịch sử.

## Tuyên bố miễn trừ

DemoScope là dự án cộng đồng không chính thức, không liên kết với hay được Valve Corporation xác nhận. Công cụ không bao giờ tự quyết định phán quyết thay bạn — hãy tự xem từng clip và tuân thủ quy định của chương trình kiểm duyệt. Sử dụng với rủi ro của riêng bạn.

## License

Phát hành theo giấy phép [MIT](../LICENSE).