# Kiểm thử và nghiệm thu frontend

## Điều kiện đối chiếu hình ảnh

- Có ảnh xuất đúng frame, không phải thumbnail cả section; lưu sourceNodeId và kích thước.
- Trình duyệt đúng viewport nguồn (desktop thường 1440 × 900; mobile lấy từng frame).
- Chờ font và ảnh tải xong; cố định dữ liệu, ngày giờ, vai trò, trạng thái, vị trí scroll và zoom trình duyệt.
- So ảnh cạnh nhau/chồng lớp trước. Có thể dùng Playwright screenshot và image diff nếu dự án hỗ trợ; ngưỡng sai khác phải được nhóm dự án chốt, không tự đặt một tỷ lệ để tuyên bố đạt.
- Ưu tiên: cấu trúc và kích thước lớn → font và xuống dòng → spacing/cột → màu, viền và icon.

## Checklist hình thức

- Sidebar 224 và header 72 ở mẫu chuẩn; content bắt đầu đúng vị trí.
- Không thay đồng loạt font 12–13 bằng 14–16; đúng Inter và weight.
- Đúng nội dung tiếng Việt, dấu, đơn vị và ký hiệu tiền.
- Bảng giữ cột, alignment, trạng thái và các thao tác; không co text sai do thiếu chiều rộng.
- Dialog đúng kích thước tương đối, lớp nền và vị trí theo ảnh; lỗi không đè lên nội dung.
- Không xuất hiện scrollbar giả từ lớp minh họa khi trình duyệt đã có scroll thật.
- Header/footer không che nội dung, không clip thông báo lỗi; card form tự tăng chiều cao khi cần.
- Mobile theo đúng bản nguồn, không thu nhỏ desktop bằng transform.

## Ma trận chức năng tối thiểu

| Module | Kịch bản phải đối chiếu |
|---|---|
| Đăng nhập | ban đầu, hiện/ẩn mật khẩu, thiếu trường, sai thông tin, tài khoản vô hiệu hóa, vai trò sau đăng nhập, mobile đã có |
| Tài khoản | danh sách, tạo/sửa hợp lệ, bỏ trống, trùng tên/điện thoại, lỗi lưu, vô hiệu hóa/hủy, đổi mật khẩu và các lỗi có thiết kế |
| Danh mục | thêm/sửa/xóa, tên trống/trùng/không đổi, không được xóa khi còn sản phẩm, thành công và lỗi theo nguồn |
| Sản phẩm | thêm/sửa, giá thiếu/không hợp lệ/không dương, ngưỡng, trùng tên, tra cứu và quyền hiển thị theo nguồn |
| Bán hàng | bán lẻ/bán sỉ, sản phẩm và số lượng, giảm giá/phê duyệt, tiền mặt, chuyển khoản chờ/thành công, hóa đơn và gửi/in theo nguồn |
| Đổi/trả | tra cứu hóa đơn, đủ/không đủ điều kiện, số lượng, chờ/duyệt/từ chối/hủy, thu thêm/hoàn/đổi ngang giá, lỗi thanh toán/lưu |
| Kho/nhập | lọc tồn, cảnh báo, tạo phiếu, dòng hàng, lỗi nhập, lịch sử/chi tiết, lỗi tải/lưu theo nguồn |
| Báo cáo/phê duyệt | kỳ ngày/tháng, không dữ liệu, chỉ hoàn trả, thiếu giá vốn, lỗi mạng, quyền phê duyệt, đăng xuất khi còn yêu cầu |

Tên kịch bản ở đây là danh sách bao quát; điều kiện và câu thông báo chính xác lấy từ tài liệu module và ảnh nguồn. Không tự suy ra mọi lỗi đều bắt buộc cho mọi form.

## Accessibility đề xuất bổ sung

Dùng label liên kết input, nút thật, focus bàn phím, focus trap/khôi phục focus cho dialog, tên truy cập cho nút icon; lỗi liên kết với trường. Đây là yêu cầu chất lượng triển khai đề xuất, không phải chứng nhận thiết kế hiện tại đã đáp ứng. Nếu cần đổi màu để tăng tương phản mà lệch Figma, ghi rõ và xin quyết định thay vì tự thay âm thầm.

## Quy tắc dữ liệu

Số liệu Figma là fixture tham chiếu, không phải dữ liệu kinh doanh đã xác minh. Mẫu doanh thu ngày 07/11/2026: tiền bán 2.000.000 ₫; hoàn trả 78.000 ₫; doanh thu 1.922.000 ₫; giá vốn 1.190.000 ₫; lợi nhuận gộp 732.000 ₫. Phép tính của mẫu khớp, nhưng không đủ xác lập công thức nghiệp vụ cho mọi trường hợp. Không tính thiếu giá vốn thành 0 nếu chưa có quy tắc.

## Điều kiện hoàn tất một nhóm

- Chọn và ghi rõ bản chuẩn khi có trùng nguồn.
- Tất cả trạng thái trong phạm vi đã giao tái hiện được bằng kịch bản cố định.
- Không còn lỗi hình thức rõ ràng, thiếu assets bị che giấu hoặc text bị cắt.
- Đã chạy các kiểm tra có sẵn của dự án; không báo “đã test” nếu chưa chạy.
- Có ảnh trình duyệt để đối chiếu và bảng theo dõi: sourceNodeId / route đề xuất hoặc thực tế / scenario / viewport / kết quả / sai lệch còn lại.
- Phân biệt hoàn tất giao diện, mô phỏng tương tác và tích hợp thật.

## Những quyết định chưa được tài liệu này xác nhận

Bản chuẩn của các màn hình trùng; breakpoint ngoài mẫu; độ dài mật khẩu; định dạng điện thoại; quy tắc thời hạn đổi/trả; quyền đầy đủ theo vai trò; hợp đồng API; cơ chế đồng bộ Zalo/QR; quy tắc làm tròn/giá vốn/tồn kho; phạm vi in và mobile. Có thể thấy ví dụ trong giao diện nhưng không coi ví dụ là toàn bộ chính sách.
