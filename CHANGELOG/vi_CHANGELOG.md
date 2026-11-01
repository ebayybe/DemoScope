<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · **Tiếng Việt** · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>
# DemoScope v1.4.0

Bản phát hành tăng cường tự bảo vệ: DemoScope xử lý được các thay đổi trên trang VACNet thay vì lỗi giữa chừng, đồng thời cho bạn và nhà phát triển biết điều gì đã xảy ra.

### Tính năng mới
- **Các bước thiết lập độc lập.** Mỗi bước bố cục và cài đặt chạy riêng. Nếu một bước lỗi, lỗi được ghi lại và các bước còn lại vẫn tiếp tục.
- **Cách tìm dự phòng** cho vùng chứa video, vùng chứa phán quyết và khu vực gửi. Nếu VACNet đổi tên lớp vùng chứa video, DemoScope tìm nó thông qua phần tử trình phát.
- **Tắt an toàn.** Nếu thiếu video hoặc biểu mẫu phán quyết, hoặc có từ năm bước thiết lập thất bại, DemoScope hoàn tác thay đổi của mình, khôi phục chân trang VACNet, chỉ giữ cửa sổ cài đặt và hiện thông báo một lần. Trang hàng đợi trống vẫn được nhận diện như trước và không kích hoạt chức năng này.
- **Báo cáo chẩn đoán** (Settings → Diagnostics → Copy diagnostics): phiên bản, thời gian, ngôn ngữ, trình duyệt, loại trang và tác vụ, 22 lần kiểm tra phần tử (`ok` / `MISSING`), lỗi từng bước và cấu trúc trang trước/sau khi DemoScope can thiệp. Cấu trúc chỉ gồm thẻ, ID và lớp, không chứa văn bản trang. Nếu clipboard bị chặn, báo cáo xuất hiện trong ô có thể chọn.
- Chờ tối đa 2 s trước khi đánh giá trang mới tải một phần.

### Bản địa hóa
- 6 chuỗi mới về chẩn đoán, kết quả sao chép và thông báo tắt trên cả 29 ngôn ngữ.

# DemoScope v1.3.0

Tinh chỉnh cài đặt, trang lời mời và nội dung phán quyết.

### Tính năng mới
- **Nút đóng trang lời mời.** Dấu × ở góc thẻ quay lại danh sách clip giống thao tác “Done”.
- **Phím tắt trang lời mời:** `Enter` thực hiện “Done”, `Esc` đóng trang. Phím bị bỏ qua khi nút, liên kết, ô nhập, hộp thoại hoặc danh sách ngôn ngữ đang được focus. Có thể đổi trong Hotkeys, nhóm “Invite page”.
- **Xung đột phím theo trang.** Trang lời mời không có trình phát nên `Enter` / `Esc` ở đó không xung đột với phím cùng tên trên trang xem xét. Phím mở cài đặt vẫn áp dụng toàn cục.
- **Thanh cuộn tối và mảnh** trong cửa sổ cài đặt, cửa sổ phụ và danh sách phán quyết; color-scheme cũng được đặt thành tối.

### Thay đổi
- **Thiết kế lại cửa sổ cài đặt.** Các mục theo tần suất sử dụng: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (thêm ở v1.4.0), Reset. Hotkeys và Animations có tóm tắt cập nhật theo thay đổi.
- **Một lần đặt lại cho tất cả.** Khôi phục âm thanh, âm lượng, phím tắt và hoạt ảnh; lịch sử vẫn được giữ.
- Phím mở cài đặt giờ được chỉnh trong Hotkeys.
- **Bỏ chữ số phím khỏi nội dung xác nhận phán quyết.** Tránh hiển thị “2Not sure” và “3No cheats seen”; huy hiệu phím được vẽ bằng CSS.
- Lựa chọn 2 của tác vụ một câu hỏi giờ là “Not sure”, dùng ngôi thứ nhất như câu của VACNet.

### Bản địa hóa
- 12 chuỗi mới cho phần tóm tắt, đặt lại, thao tác trang lời mời và “Not sure” trên cả 29 ngôn ngữ.

Thiết lập CSS: `color-scheme: dark`.

Nút “Done” cũng hiển thị phím được gán.

# DemoScope v1.2.1

### Bản địa hóa
- Cửa sổ Hotkeys và Animations (77 chuỗi mỗi ngôn ngữ) nay được dịch sang 27 ngôn ngữ còn lại; trước đó chỉ có tiếng Anh và tiếng Nga.

# DemoScope v1.2.0

Phím tắt, hoạt ảnh và sửa lỗi tải.

### Tính năng mới
- **Cửa sổ Hotkeys** (Settings → Hotkeys): cả 18 phím tắt đều có thể đổi, được nhóm theo chức năng, có mô tả và nút đặt lại. “Reset all” yêu cầu xác nhận lần nhấn thứ hai.
  - **Xử lý xung đột.** Khi chọn phím đang dùng, cửa sổ cho biết chức năng, nhóm và tác dụng; có thể chọn Replace, Swap hoặc Cancel.
  - Có thể gán `Esc` và nó không đóng cửa sổ khi đang ghi nhận phím. `Tab`, phím bổ trợ, Caps Lock, `F5`, `F11` và `F12` bị từ chối; `Shift` chỉ dùng được cho thao tác giữ “Speed boost”.
  - Gợi ý dưới video, huy hiệu và nút Continue/Cancel tuân theo phím đã gán.
- `Esc` hủy phán quyết đang chờ xác nhận và bước `Enter` đầu tiên trong quy trình gửi hai bước.
- **Cửa sổ Animations** (Settings → Animations): sáu kiểu, xem trước trực tiếp, ba tốc độ và công tắc bật/tắt. Nếu hệ thống yêu cầu giảm chuyển động, hoạt ảnh mặc định tắt.
- `Enter` và `Esc` cũng hoạt động khi nút radio phán quyết đang được focus.

### Đã sửa
- **“loading next clip” kéo dài** sau khi gửi ở tác vụ một câu hỏi: kiểm tra sẵn sàng không còn chờ trường `aimassist` vốn không tồn tại, chấp nhận biểu mẫu phán quyết và siêu dữ liệu phương tiện, bắt đầu sớm hơn; trang không có clip tự đóng lớp phủ sau 3 giây.
- Phím tắt trang (`Space`, `Enter`, v.v.) không còn tác động lên trang phía sau hộp thoại đang mở.

### Bản địa hóa
- Hotkeys và Animations ban đầu chỉ có tiếng Anh và tiếng Nga; các bản dịch khác được thêm ở v1.2.1.

Sáu kiểu gồm pulse, breathe, ripple, heartbeat, orbit và blink.

# DemoScope v1.1.0

Hỗ trợ tác vụ một câu hỏi của VACNet.

### Tính năng mới
- **Tác vụ một câu hỏi.** Đôi khi VACNet hỏi “Is the Subject cheating beyond a reasonable doubt?” với câu trả lời Cheating / Uncertain / No cheats seen. DemoScope nhận diện và chuyển sang bố cục gọn, bỏ phán quyết nhanh, tổ hợp mở rộng và bộ chọn ngẫu nhiên.
- Nhãn phán quyết theo ngôn ngữ của DemoScope, huy hiệu phím `1–3` và phím tắt tương ứng.
- **Chỉ báo khóa.** Uncertain và No cheats seen chỉ mở khóa khi clip kết thúc. Thẻ hiển thị thời gian còn lại và thanh tiến trình; lựa chọn bị khóa mờ đi, nhấn phím sẽ phát âm báo lỗi và làm thẻ rung.
- Gợi ý dưới video đổi thành `Enter` và `1–3`; nút phán quyết cao hơn.

### Bản địa hóa
- 5 chuỗi mới (nhãn, tiêu đề, giải thích, thông báo khóa) trên cả 29 ngôn ngữ.

# DemoScope v1.0.6

### Tính năng mới
- **Phần giải thích riêng của DemoScope** cho bốn loại phán quyết bằng cả 29 ngôn ngữ. VACNet đôi khi dùng câu hỏi tiếng Anh ở một số ngôn ngữ như tiếng Ukraina, nên popover “?” không còn phụ thuộc vào văn bản đó.

# DemoScope v1.0.5

### Tính năng mới
- **Nút trợ giúp “?”** bên cạnh AIM ASSIST, WALL HACK, AUTO BHOP và BOT mở giải thích ngắn. Đóng khi nhấn bên ngoài, nhấn lại hoặc `Esc`. Nút không nhận focus bàn phím để `Enter` và `Space` vẫn giữ chức năng xem xét.

### Đã sửa
- Nút Local history nay có kích thước như huy hiệu bên cạnh, không xuống dòng, rút gọn nhãn quá dài và cho phép hàng huy hiệu xuống dòng thay vì bị ép nhỏ.

# DemoScope v1.0.4

### Đã sửa
- **Nội dung phán quyết vẫn theo ngôn ngữ trình duyệt** sau khi đổi ngôn ngữ trong DemoScope. VACNet dùng tham số Steam `?l=`, còn DemoScope trước đây chỉ đổi nhãn riêng. Trang xem xét nay mở với `?l=` đã chọn; trang thiếu tham số được tải lại một lần. Ngôn ngữ VACNet thực dùng được đọc từ `l=` trong URL CSS và script; giới hạn một lần ngăn vòng lặp chuyển hướng khi VACNet không hỗ trợ ngôn ngữ đó.

# DemoScope v1.0.3

### Thay đổi
- **Khôi phục tô sáng cụm từ khóa** trên nút phán quyết: cụm từ cần tìm in đậm màu cam, “not” trong câu phủ định màu xanh dịu. Nút được chọn vẫn dễ đọc.
- `normalizeVerdictLabels` giờ chỉ bỏ thẻ b, nhờ đó dấu tô sáng được giữ nguyên.

Thẻ HTML: `<b>`.

# DemoScope v1.0.2

### Đã sửa
- **`Space`, `M` và `F` có vẻ không hoạt động** vì VACNet / Video.js xử lý cùng phím lần thứ hai. DemoScope giờ chặn các phím này.
- Trong Firefox, nhả `Space` không còn kích hoạt nút trình phát đang focus.
- Phím tắt trình phát vẫn hoạt động khi radio phán quyết được focus.

# DemoScope v1.0.1

Tương thích với trang xem xét VACNet được thiết kế lại.

### Đã sửa
- **Bảng chỉ dựng được một phần** sau khi VACNet thay đổi: tiêu đề cổng, thẻ hướng dẫn, bố cục lưới, việc bỏ verdicts-container-inner và chuyển submitbuttons gây lỗi `insertBefore`. Bước `ensureReviewStructure` chuẩn hóa cấu trúc để hỗ trợ cả bố cục cũ và mới.

### Thay đổi
- Ẩn tiêu đề cổng và thẻ hướng dẫn; sao chép bộ đếm clip vào huy hiệu tiêu đề.
- Nút Continue ghim ở cuối bảng và vẫn hiện khi bản dịch dài làm danh sách cao hơn màn hình.

Bộ chọn kỹ thuật: `.verdicts-container-inner`, `#submitbuttons`.

# DemoScope v1.0.0

Bản phát hành công khai đầu tiên của userscript DemoScope cho trang đánh giá CS2 VACNet.

### Tính năng mới
- Giao diện 29 ngôn ngữ, tự chọn ngôn ngữ, năm phán quyết nhanh và 15 tổ hợp mở rộng.
- Điều khiển video theo đoạn, tua từng khung hình, tăng tốc bằng `Shift`, `Space` phát/tạm dừng, `M` tắt tiếng, `F` toàn màn hình và gửi phán quyết hai bước bằng `Enter`.
- Lịch sử cục bộ có thể cấu hình, nhập/xuất JSON, báo cáo HTML và gộp nhiều bản sao JSON thành một báo cáo.
- Trang lời mời cải tiến, cài đặt âm thanh, phím mở cài đặt, ẩn tên tài khoản, hộp thoại quy tắc xem xét và bộ chọn phán quyết ngẫu nhiên tùy chọn (mặc định tắt).

### Quyền riêng tư
- Không có telemetry; cài đặt và lịch sử cục bộ không được tải lên. Phán quyết gửi tới VACNet qua biểu mẫu thông thường của trang.







