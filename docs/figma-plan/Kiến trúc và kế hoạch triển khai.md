# Kiến trúc và kế hoạch triển khai

## Nguyên tắc

Đây là phương án triển khai đề xuất, không phải công nghệ hay cấu trúc đã được xác nhận. Không viết lại dự án đang có chỉ để theo tài liệu này. Chốt shared UI trước khi chia module song song.

## Cấu trúc trách nhiệm đề xuất

- app: khởi tạo, router, provider, AppShell.
- shared/ui: button, input, select, table, dialog, badge, alert, toast.
- shared/styles: font và biến giao diện.
- features: auth, accounts, catalog, products, sales, exchanges, returns, inventory, purchasing, approvals, reports.
- mocks: dữ liệu cố định và kịch bản phản hồi; tách khỏi component.
- tests/visual: ảnh chuẩn và kiểm thử trình duyệt.
- docs/figma: tài liệu này và ảnh tham chiếu đặt tên theo node ID.

## Route đề xuất, không phải route đọc từ Figma

| Nhóm | Route đề xuất | Ghi chú |
|---|---|---|
| Đăng nhập | /login | hiện/ẩn mật khẩu là state |
| Nhân viên | /accounts; /accounts/new; /accounts/:id/edit | vô hiệu hóa là dialog/action |
| Mật khẩu | /account/password | vai trò cần xác nhận |
| Danh mục | /categories | thêm/sửa/xóa theo cách hiển thị gốc |
| Sản phẩm | /products; /products/new; /products/:id/edit | cập nhật giá/ngưỡng dùng state hoặc trang theo nguồn |
| Bán hàng | /sales/new; /invoices; /invoices/:id | phân biệt bán lẻ/bán sỉ |
| Đổi và trả | /exchanges/new; /returns/new | các bước cùng flow, không mỗi frame một route |
| Tồn kho | /inventory; /inventory/alerts | lọc và chi tiết theo thiết kế |
| Nhập hàng | /purchases; /purchases/new; /purchases/:id | kiểm tra lịch sử và trạng thái |
| Phê duyệt | /approvals; /approvals/:id | deep link và quyền cần backend xác nhận |
| Báo cáo | /reports/revenue; /reports/quantities | ngày/tháng và các trạng thái lỗi |

## Trình tự để giảm sửa lại

1. Kiểm tra dự án, giữ framework hiện có; nạp Inter đúng trọng lượng; thiết lập màu và layout baseline.
2. Dựng mẫu danh sách nhân viên + thêm sản phẩm + đăng nhập; so ảnh để chốt shell, bảng, form.
3. Hoàn thành danh mục/sản phẩm và tài khoản bằng shared UI đã chốt.
4. Triển khai bán hàng; sau đó đổi/trả và phê duyệt vì dùng chung hóa đơn, dòng sản phẩm và thanh toán.
5. Tồn kho/nhập hàng có thể làm song song với báo cáo khi đã chốt shared UI và quy ước dữ liệu.
6. Bổ sung mobile ở những luồng có bản thiết kế; nghiệm thu các trạng thái và đối chiếu ảnh toàn bộ nhóm.

## Chia việc song song

Một người/phiên chịu trách nhiệm shared UI. Mỗi phiên module chỉ sửa vùng phụ trách; thay đổi shared UI phải thống nhất trước. Định nghĩa trước dữ liệu dòng sản phẩm, hóa đơn và kết quả thao tác để bán hàng/đổi trả/nhập hàng không tự dùng ba mô hình khác nhau. Không để nhiều phiên cùng sửa global CSS hoặc router mà không chia trách nhiệm.

## Hợp đồng frontend tạm thời

Dữ liệu mock là mô phỏng, không phải API đã chốt. Đề xuất mỗi kịch bản có: scenarioId, sourceNodeId, role, initialData, responseKind, message. ResponseKind có thể gồm success, validation-error, conflict, network-error, forbidden; chỉ thêm khi module có thiết kế hoặc yêu cầu rõ.

- Giữ số tiền ở dạng số trong tính toán, định dạng hiển thị theo mẫu; không parse ngược chuỗi “1.922.000 ₫”.
- Không tự quyết định số lẻ tiền tệ, làm tròn hoặc quy tắc tiền âm; cần xác nhận nghiệp vụ.
- Tránh ghi trùng khi submit lặp; lưu nội dung nhập khi xảy ra lỗi theo thiết kế.
- Không ghi mật khẩu vào log, không lưu thông tin xác thực nhạy cảm trong mock dùng chung.
- Ẩn nút theo vai trò không thay thế kiểm tra quyền backend.
- QR/Zalo/in hóa đơn và tồn kho thật không được tuyên bố đã tích hợp bằng màn hình mô phỏng.

## Quy ước trạng thái

Một màn hình gốc có thể có state biểu mẫu, fieldErrors, lỗi hệ thống, dialog, toast và bước quy trình. Không tạo component trang riêng cho mỗi frame lỗi. Cũng không gộp các bước có dữ liệu/ngữ nghĩa khác nhau chỉ vì hình thức giống nhau.

## Chỉ dẫn mở đầu cho Antigravity/Codex

Đọc tài liệu tổng quan, quy chuẩn giao diện và đúng module được giao. Kiểm tra cấu trúc dự án trước khi thay đổi. Figma là nguồn cho hình thức và nội dung; route/kiến trúc trong tài liệu chỉ là đề xuất. Liệt kê sourceNodeId sẽ thực hiện. Tái sử dụng shared UI, không tự thiết kế lại, không đổi tiếng Việt và không tự thêm tính năng. Dùng dữ liệu mô phỏng cố định nếu chưa có API. Chỉ gọi MCP cho chi tiết còn thiếu, lưu kết quả để dùng lại. Triển khai màn hình gốc rồi các trạng thái. Chụp trình duyệt ở đúng kích thước nguồn; sửa khác biệt bố cục, font, khoảng cách trước. Báo rõ trạng thái nào hoàn tất và phần nào chưa tích hợp. Không kết luận pixel-perfect chỉ từ việc chạy được.

## Mẫu một tác vụ

Module: \[tên\]. Nguồn: \[node ID bản chuẩn và trạng thái\]. Đầu vào: tài liệu module + ảnh tham chiếu + quy chuẩn dùng chung. Phạm vi được sửa: \[vùng\]. Không sửa: \[shared UI đã chốt/vùng phiên khác\]. Kết quả: giao diện, thao tác và kịch bản mock tái hiện được. Nghiệm thu: ảnh trình duyệt đúng viewport, giữ đúng text, không tràn, không route giả cho mỗi trạng thái.
