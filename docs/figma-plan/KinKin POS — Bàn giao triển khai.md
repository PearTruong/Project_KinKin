# KinKin POS — Bàn giao triển khai frontend

## Mục tiêu

Triển khai nhanh trong Antigravity/Codex, bám sát thiết kế Figma, tái sử dụng giao diện và không đọc lại toàn bộ cây thiết kế cho từng tác vụ. Đây là tài liệu triển khai frontend, không phải đặc tả backend đã được phê duyệt.

## Nguồn và mức độ tin cậy

- Nguồn: trang hiện tại của bản thiết kế KinKin POS; khảo sát ngày 11/11/2026.
- Kích thước, font, màu, nội dung và mã tham chiếu trong tài liệu được đọc từ thiết kế khi ghi rõ là quan sát/đã đo.
- Cấu trúc thư mục, route, tên component, thứ tự triển khai và cách kiểm thử là ĐỀ XUẤT; ưu tiên cấu trúc có sẵn của dự án.
- Tên frame mô tả trạng thái nhưng không tự chứng minh điều kiện chuyển trạng thái. Không suy diễn quy tắc nghiệp vụ chưa được xác nhận.
- Bộ tài liệu chưa chứa ảnh xuất của từng màn hình, gói SVG/logo, tệp font, mã nguồn frontend hay kết nối API. Các phần này không được coi là đã bàn giao.

## Cách dùng trong dự án

1. Sao chép các tài liệu này thành Markdown cục bộ trong thư mục tài liệu của dự án. Tài liệu nằm trong Figma hiện tại, chưa tự đồng bộ vào Antigravity/Codex.
2. Đọc tài liệu 01 để dựng giao diện chung; tài liệu 02 để tra mã màn hình; tài liệu 03 để chia tác vụ; tài liệu 04 để nghiệm thu.
3. Chỉ nạp tài liệu module đang triển khai và thông số dùng chung; không đưa toàn bộ tài liệu module vào cùng một ngữ cảnh.
4. Xuất ảnh từng màn hình chuẩn và từng trạng thái khác biệt đáng kể tại kích thước gốc. Lưu kèm mã node để tránh trùng tên. Không dùng ảnh toàn section làm chuẩn so sánh.
5. Dùng MCP tập trung cho màn hình chuẩn/phần còn thiếu hình học, không yêu cầu đọc lại mọi màn hình sau mỗi thay đổi.
6. Sau mỗi nhóm, chụp giao diện trình duyệt ở đúng viewport và so với ảnh Figma trước khi mở rộng.

## Mở nhanh các tài liệu

Bộ bàn giao gồm **12 tài liệu**, bao phủ **476 ứng viên frame** bằng chỉ mục và bản trích xuất theo module. Con số này bao gồm trạng thái và bản trùng, không phải 476 trang ứng dụng độc lập.

- [01 · Quy chuẩn giao diện](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=53-24340)
- [02 · Danh mục nguồn màn hình](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=53-24488)
- [03 · Kế hoạch triển khai frontend](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=53-28074)
- [04 · Kiểm thử và nghiệm thu](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=53-28195)
- [05 · Đăng nhập và tài khoản](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=53-28273)
- [06 · Danh mục và sản phẩm](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=53-28460)
- [07 · Bán hàng và hóa đơn](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=53-28732)
- [08 · Đổi hàng và trả hàng](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=53-28854)
- [09 · Tồn kho và cảnh báo](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=53-29047)
- [10 · Nhập hàng và lịch sử](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=53-29180)
- [11 · Báo cáo và phê duyệt](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=53-29314)

## Thứ tự đọc

- 01 · Quy chuẩn giao diện đã khảo sát.
- 02 · Danh mục nguồn màn hình: toàn bộ ứng viên màn hình, không phải toàn bộ route độc lập.
- 03 · Kiến trúc và kế hoạch triển khai.
- 04 · Kiểm thử và nghiệm thu.
- 05–11 · Trích xuất theo module: văn bản giao diện, trạng thái, kích thước, thông số frame và liên kết nguồn.

## Các màn hình chuẩn nên làm trước

- [Danh sách nhân viên](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4196): khung ứng dụng, bảng, badge và thao tác dòng.
- [Thêm sản phẩm](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-18585): biểu mẫu nhiều nhóm, bố cục hai cột, đơn vị nhập liệu.
- [Đăng nhập desktop](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4884): biểu mẫu đăng nhập và lỗi.
- [Doanh thu ngày](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-51275): thẻ chỉ số, bộ chọn kỳ.
- [Nhập mã hóa đơn đổi hàng](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-47995): bố cục tra cứu đơn giản.

## Quyết định cần chốt trước khi nhân rộng

- Chọn bản chuẩn ở các màn hình trùng tên, đặc biệt báo cáo/phê duyệt có hai hệ điều hướng.
- Section tên “Huy” có các biến thể đổi/trả và thanh toán; chưa được kết luận là bỏ hay thay thế cho UC\_3.1/3.2.
- Frame tên “Frame” và các ảnh mô phỏng Zalo cần phân loại, không biến thành route ứng dụng mặc định.
- Chưa chốt framework, thư viện UI, định tuyến và công cụ test: giữ công nghệ dự án hiện có; chỉ chọn mới khi dự án trống.
- API, phân quyền thật, ngưỡng mật khẩu, quy tắc tính tồn kho/giá vốn/hoàn trả cần chủ sản phẩm hoặc backend xác nhận.
- Không tự tạo thiết kế mobile cho mọi module chỉ vì một số luồng đã có bản mobile.

## Phạm vi nghiệm thu đợt đầu đề xuất

Chỉ frontend với dữ liệu mô phỏng có thể tái hiện các trạng thái đã thiết kế. Luồng QR, Zalo, xác thực, in và ghi nhận tồn kho chỉ là mô phỏng nếu chưa tích hợp thực tế. Không báo các thao tác này thành công thật khi chưa có xác nhận từ hệ thống liên quan.
