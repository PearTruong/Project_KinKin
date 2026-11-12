# Quy chuẩn giao diện — thông số đã khảo sát

## Phạm vi

Đã đọc cấu trúc và kiểm tra hình ảnh mẫu danh sách nhân viên, thêm sản phẩm, doanh thu ngày; đọc thêm thông số đăng nhập và tra cứu đổi hàng. Đây là baseline có nguồn, không phải khẳng định mọi màn hình giống hệt nhau. Không tìm thấy local text style trong lần khảo sát; không giả định đã có design token chuẩn hóa toàn bộ.

## Khung desktop đã đo

| Thành phần | Giá trị quan sát | Nguồn |
|---|---|---|
| Viewport mẫu | 1440 × 900 | 1:4196, 1:18585, 1:47995 |
| Sidebar | 224 px rộng, 900 px cao ở viewport mẫu | 1:4197, 1:18586 |
| Workspace | 1216 px, bắt đầu x=224 | 1:4225, 1:18611 |
| Header | 72 px cao; padding ngang 32 px | 1:4226, 1:18612 |
| Nội dung danh sách | padding dọc 24, ngang 32; gap 20 | 1:4241 |
| Nội dung thêm sản phẩm | padding 32 cả bốn cạnh; gap 20 | 1:18630 |
| Sidebar padding | trên/dưới 20, trái/phải 16; gap gốc 12 | 1:4197, 1:18586 |
| Thẻ bảng nhân viên | rộng 1152; bo góc 12 | 1:4244 |
| Hàng bảng mẫu | tiêu đề bảng 56; hàng header cột 35; hàng dữ liệu đầu 57 px | 1:4245, 1:4247, 1:4254 |

Không cố định chiều cao mọi trang bằng 900 px; đó là viewport tham chiếu. Không dùng scale toàn trang để ép khớp ảnh. Dùng bố cục web có co giãn; chỉ đối chiếu pixel tại viewport được chỉ định.

## Màu đã xuất hiện trong mẫu

| Vai trò đề xuất | HEX quan sát |
|---|---|
| Chữ chính / sidebar tối | #0F172A |
| Hành động chính / liên kết | #2563EB |
| Nền nội dung nhạt | #F8FAFC |
| Bề mặt | #FFFFFF |
| Viền | #E2E8F0 |
| Chữ phụ | #64748B |
| Nền nhấn nhạt | #EFF6FF |
| Nguy hiểm | #EF4444 |
| Nền nguy hiểm nhạt | #FEE2E2 |

Tên vai trò là quy ước triển khai đề xuất, HEX là giá trị đã đọc. Màu trạng thái khác không được tự suy ra từ bảng này. Kiểm tra opacity, stroke và trạng thái cụ thể trước khi dùng lại.

## Typography

Font quan sát: Inter, Regular 400 / Medium 500 / Semi Bold 600 / Bold 700. Cần font có dấu tiếng Việt đúng; chờ font tải xong trước khi chụp đối chiếu.

- Danh sách nhân viên: tiêu đề trang 22/28 px, Bold; tiêu đề khối 16/24 px, Semi Bold; dữ liệu bảng thường 12/18 px.
- Thêm sản phẩm: tiêu đề trang 24 px Bold, line-height AUTO trong Figma; tiêu đề nhóm 15 px Semi Bold, line-height 150%; label 12 px Medium; nội dung nhập 13 px Regular.
- Tra cứu đổi hàng: tiêu đề trang 24/36 px Bold; label và nút 13/20 px Semi Bold; nội dung nhập 13/20 px Regular.
- Đăng nhập: tiêu đề 22/28 px Bold; label 12/18 px Medium; placeholder 13/20 px Regular; nút 13/20 px Semi Bold.
- Sidebar và metadata có cỡ 10–12 px; không tự nâng toàn bộ thành 14–16 px.
- Có cả line-height AUTO, 150% và giá trị px. Không quy tất cả thành một tỷ lệ nếu làm thay đổi bố cục.

## Đăng nhập đã đo

Desktop frame 1440 × 900; card 420 × 388, vị trí x=510, y=256; padding 24, gap 24, radius 12. Trường nhập cao 44, radius 8, padding ngang 12; nút cao 40, radius 8. Card tăng chiều cao khi có lỗi; không khóa 388 px cho mọi trạng thái. Mobile có frame 390 × 844, card rộng 358; tương ứng lề ngang 16. Bộ báo cáo còn có mobile rộng 393 và chiều cao khác: lấy đúng kích thước trong danh mục, không gom tất cả thành 390 × 844.

## Component frontend đề xuất

AppShell, Sidebar/NavGroup/NavItem, Topbar, Breadcrumb, PageHeading, Button, TextField, PasswordField, SelectField, FormSection, DataTable, StatusBadge, ConfirmDialog, Alert, Toast, EmptyState, MetricCard, PeriodPicker, MoneyInput, QuantityInput.

- Tách variant kích thước/màu/trạng thái; không sao chép nguyên trang cho từng lỗi.
- Sidebar đổi mục active và mục con theo module/vai trò; không gắn cố định một menu cho mọi màn hình.
- Không đưa mọi thành phần về giao diện mặc định của thư viện UI. Override thông số theo tham chiếu.
- Bảng khác module có thể khác cột, độ rộng và chiều cao hàng; thông số bảng nhân viên chỉ là một mẫu.

## Assets và giới hạn

Logo, icon SVG và font chưa được xuất thành bộ tài nguyên. Không thay logo bằng chữ/emoji hoặc icon gần giống khi chưa được đồng ý. Các ký tự lịch/mũi tên có trong text trích xuất có thể là cách mô phỏng hình ảnh; đối chiếu ảnh trước khi triển khai. Chưa kiểm kê đầy đủ shadow, mọi màu trạng thái hoặc mọi breakpoint.
