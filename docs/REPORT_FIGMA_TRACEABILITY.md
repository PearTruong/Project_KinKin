# Ma trận bám sát báo cáo và Figma

## Nguồn chuẩn

- Báo cáo: `../../2. Phân tích và thiết kế hệ thống/Báo cáo/50K142.04.3007.docx`.
- Figma file key: `5RdlpDu7V3VZLrJ9xWu3U8`.
- Figma URL: `https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8/Untitled?node-id=0-1`.
- Page Figma: `Page 1`, node `0:1`.

## Nguyên tắc đối chiếu

| Nội dung | Nguồn quyết định |
|---|---|
| Actor, quyền hạn, business rule, điều kiện trước/sau | Báo cáo |
| Công thức tiền, tồn kho, trạng thái giao dịch | Báo cáo |
| Trường dữ liệu và quan hệ lưu trữ | Báo cáo, sau đó chuẩn hóa trong `CONTRACTS.md` |
| Bố cục, nhãn, thứ tự trường, menu, thông báo | Figma |
| Trạng thái loading, empty, error, success | Figma, nhưng điều kiện kích hoạt theo báo cáo |
| Desktop/mobile | Figma |

## Phạm vi bắt buộc trong bản solo 10 ngày

Đây là lát cắt trực tiếp từ báo cáo, không phải một sản phẩm khác:

| Thứ tự | Use case báo cáo | Chức năng giao | Figma chuẩn |
|---|---|---|---|
| 1 | UC_1 | Đăng nhập và phân vai trò | Section `1:4286`; desktop ban đầu `1:4884`, sai thông tin `1:4404`, vô hiệu hóa `1:4431`, OWNER `1:4458`, EMPLOYEE `1:4581`; mobile ban đầu `1:4668` |
| 2 | UC_7.1–UC_7.3 | Danh mục | Danh sách `1:30676`; thêm `1:30870`, trống `1:31075`, trùng `1:31281`, thành công `1:31696`; xóa `1:31908`, còn sản phẩm `1:32110`, thành công `1:32687`; sửa `1:32871`, trống `1:33277`, trùng `1:33487`, thành công `1:33910` |
| 3 | UC_7.4 | Thêm sản phẩm | Section `1:18584`; ban đầu `1:18585`, nhập cơ bản `1:18710`, ngưỡng `1:18835`, không có danh mục `1:18960`, trùng tên `1:20347`, lỗi lưu `1:20473` |
| 4 | UC_7.5–UC_7.7 | Giá, sửa và xóa sản phẩm | Giá `1:20601`, form `1:20875`, thành công `1:22197`; sửa `1:22475`, form `1:22729`, thành công `1:23445`; xóa `1:23956`, còn tồn `1:24483`, có giao dịch `1:24740`, thành công `1:25493` |
| 5 | UC_7.8–UC_7.9 | Ngưỡng và tra cứu sản phẩm | Ngưỡng `1:25733`, preview hết `1:26118`, sắp hết `1:26249`, tồn lâu `1:26380`, thành công `1:27681`; tra cứu OWNER `1:27939`, EMPLOYEE `1:28077`, không kết quả `1:28828` |
| 6 | UC_8.1 | Ghi nhận nhập hàng | Quản lý `1:40505`, tạo phiếu `1:40624`, chọn sản phẩm `1:40729`, nhập SL/giá vốn `1:40888`, xác nhận `1:41242`, đang xử lý `1:41418`, lỗi đầu vào `1:43328`–`1:44098`, thành công `1:44312` |
| 7 | UC_8.2 | Lịch sử nhập hàng | Danh sách `1:29004`, chi tiết `1:29137`, nhiều lô `1:29282`, lọc thời gian `1:29464`, tìm sản phẩm `1:29697`, chưa có dữ liệu `1:30163`, lỗi chi tiết `1:30616` |
| 8 | UC_4.4 | Tra cứu tồn kho | Section `1:34107`; main `1:34666`, lọc `1:34940`, hết hàng `1:34294`, sắp hết `1:34480`, tồn lâu `1:34108`, không kết quả `1:36320` |
| 9 | UC_2.1 | Tạo hóa đơn bán lẻ | Section `1:7886`; chọn hàng `1:10533`, `1:11007`, `1:11481`, `1:11953`; tiền mặt `1:10075`; chuyển khoản `1:9945`; QR chờ `1:9797`; hoàn tất `1:9054` |
| 10 | UC_2.2 | Tra cứu hóa đơn | Tìm kiếm `1:8668`, lỗi tìm kiếm `1:8836`, chi tiết `1:8916` |
| 11 | UC_5.1 | Xem doanh thu | Section `1:48053`; desktop ban đầu `1:50619`, chọn ngày `1:50726`, chọn tháng `1:51112`, báo cáo ngày `1:51275`, tháng `1:54615`, không phát sinh `1:51414`, lỗi tải `1:51693`; mobile ban đầu `1:48869` |
| 12 | UC_5.2 | Số lượng hàng bán/trả | Desktop ban đầu `1:51955`, chọn ngày `1:52055`, ngày `1:52443`, tháng `1:52590`, không dữ liệu `1:52738`, lỗi tải `1:52851`; mobile ban đầu `1:50557` |
| 13 | UC_10 | Đăng xuất | Desktop trước đăng xuất `1:48236`, thành công `1:48058`; mobile `1:48110`, thành công `1:48184` |

## Phạm vi không cam kết trong 10 ngày

Các use case dưới đây vẫn thuộc báo cáo và Figma nhưng được xếp sau bản MVP vì một người không thể bảo đảm chất lượng giao dịch trong 10 ngày nếu triển khai tất cả:

- UC_3.1 Đổi hàng: Figma section `1:45946`.
- UC_3.2 Trả hàng: Figma section `1:44574`.
- UC_4.1 Điều chỉnh tồn, UC_4.2 cảnh báo tồn và UC_4.3 lịch sử điều chỉnh: Figma section `1:34107`.
- UC_6.1–UC_6.4 Quản lý tài khoản: sections `1:309`, `1:1797`, `1:2359`, `1:3161`, `1:4195`.
- UC_9 Phê duyệt tại quầy/Zalo: phần bán hàng `1:7886` và phần báo cáo/phê duyệt `1:48053`.

Không xóa hoặc làm sai thiết kế của các use case này. Chỉ chưa đưa chúng vào tiêu chí hoàn thành bản 10 ngày.

## Definition of done cho từng màn hình

Một màn hình chỉ đạt khi:

1. Route và quyền truy cập đúng actor trong báo cáo.
2. Dữ liệu hiển thị đến từ API thật.
3. Thứ tự nội dung, nhãn, nút và hierarchy bám frame Figma được chỉ định.
4. Có loading, empty, validation error, server error và success theo các frame liên quan.
5. Thao tác thay đổi tiền hoặc tồn kho chạy trong transaction.
6. Sau thao tác có thể truy vết lại qua lịch sử hoặc chứng từ.
7. Có ảnh đối chiếu giao diện ở 1440×900; màn hình có mobile reference phải kiểm tra thêm 390/393 px.
8. Có test cho main flow và ít nhất một exceptional flow quan trọng.

## Golden flow nghiệm thu

1. OWNER đăng nhập.
2. Tạo danh mục.
3. Tạo sản phẩm và thiết lập giá/ngưỡng.
4. Lập phiếu nhập 20 sản phẩm.
5. Kiểm tra lịch sử nhập và tồn kho.
6. EMPLOYEE đăng nhập và tạo hóa đơn bán lẻ 2 sản phẩm.
7. Thanh toán tiền mặt hoặc chuyển khoản mô phỏng.
8. In và tra cứu hóa đơn.
9. Kiểm tra tồn còn 18.
10. OWNER xem doanh thu và số lượng bán.
11. Đăng xuất.

## Cổng kiểm tra Figma

Trước khi đóng một use case:

- Mở đúng node Figma được liệt kê.
- So sánh screenshot implementation với frame ở cùng viewport.
- Kiểm tra sidebar, breadcrumb, tiêu đề, spacing, trường nhập, bảng, modal và thông báo.
- Chỉ sửa khác Figma khi có lý do nghiệp vụ từ báo cáo; ghi rõ sai khác trong pull request/nhật ký thực hiện.

