# Bảng kiểm kê toàn bộ màn hình Figma Final — KinKin POS (FE-00)

> **File Figma chuẩn:** `https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8/Final?node-id=0-1`
> **Nguồn đặc tả & nghiệp vụ:** `docs/REPORT_FIGMA_TRACEABILITY.md`, `docs/CONTRACTS.md`, `Đặc tả giao diện.docx` (Bảng 78–180, Hình 53–155), `anhxa.docx` (Bảng 75, 76, 77), `đặc tả.docx`.
> **Quy ước trạng thái triển khai:**
> - `implemented`: Đã có component code trong dự án (`YES` / `PARTIAL` / `NO`).
> - `visual-approved`: Đã được review đối chiếu screenshot khớp pixel/layout Figma (`YES` / `NO`).
> - `wired-to-api`: Đã nối dữ liệu thật từ NestJS API (`YES` / `PARTIAL` / `MOCK` / `NO`).

---

## 1. Bảng kiểm kê chi tiết (Inventory Matrix)

| STT | Section | Frame / Tên trạng thái | Node ID | Viewport | UC | Role | Route dự kiến | Lane | Implemented | Visual Approved | Wired to API | Ghi chú / Trạng thái thiết kế |
|:---:|:---|:---|:---:|:---:|:---:|:---:|:---|:---:|:---:|:---:|:---:|:---|
| **LANE 1 & 2: NỀN TẢNG, ĐĂNG NHẬP, APP SHELL & TÀI KHOẢN** |
| 1 | `1:4286` (01 · Đăng nhập) | 01 · Đăng nhập · Ban đầu | `1:4884` | 1440×900 | UC_1 | ALL | `/login` | Lane 1+2 | YES | YES | YES | Desktop login ban đầu (Hình 53) |
| 2 | `1:4286` (01 · Đăng nhập) | 02 · Đăng nhập · Hiện mật khẩu | `1:4287` | 1440×900 | UC_1 | ALL | `/login` | Lane 2 | YES | NO | YES | Toggle eye icon hiển thị password |
| 3 | `1:4286` (01 · Đăng nhập) | 03 · Đăng nhập · Trống cả hai trường | `1:4331` | 1440×900 | UC_1 | ALL | `/login` | Lane 2 | YES | NO | YES | Validation error border đỏ (Hình 54) |
| 4 | `1:4286` (01 · Đăng nhập) | 04 · Đăng nhập · Trống tên đăng nhập | `1:4356` | 1440×900 | UC_1 | ALL | `/login` | Lane 2 | YES | NO | YES | Focus & border đỏ username |
| 5 | `1:4286` (01 · Đăng nhập) | 05 · Đăng nhập · Trống mật khẩu | `1:4380` | 1440×900 | UC_1 | ALL | `/login` | Lane 2 | YES | NO | YES | Focus & border đỏ password |
| 6 | `1:4286` (01 · Đăng nhập) | 06 · Đăng nhập · Sai thông tin | `1:4404` | 1440×900 | UC_1 | ALL | `/login` | Lane 2 | YES | NO | YES | Banner lỗi đỏ 401 (Hình 55) |
| 7 | `1:4286` (01 · Đăng nhập) | 07 · Đăng nhập · Vô hiệu hóa | `1:4431` | 1440×900 | UC_1 | ALL | `/login` | Lane 2 | YES | NO | YES | Banner lỗi tài khoản ngưng hoạt động |
| 8 | `1:4286` (01 · Đăng nhập) | 10 · Đăng nhập thành công · Chủ cửa hàng | `1:4458` | 1440×900 | UC_1 | OWNER | `/` | Lane 1 | YES | NO | PARTIAL | App Shell desktop 224px sidebar không cắt chữ, 7 nhóm menu, header 72px; nhận auth state từ localStorage |
| 9 | `1:4286` (01 · Đăng nhập) | 11 · Đăng nhập thành công · Nhân viên | `1:4581` | 1440×900 | UC_1 | EMPLOYEE | `/` | Lane 1 | YES | NO | PARTIAL | App Shell desktop 224px sidebar, 2 nhóm menu cấp cao (Bán hàng, Đổi trả) chuẩn Figma Final 1:4581; auth state từ localStorage |
| 10 | `1:4286` (01 · Đăng nhập) | Đăng nhập di động · Ban đầu | `1:4668` | 390×844 | UC_1 | ALL | `/login` | Lane 2 | YES | NO | YES | Giao diện di động (Hình 56), cùng LoginView responsive và API đăng nhập thật |
| 11 | `1:4286` (01 · Đăng nhập) | Đăng nhập di động · Trống thông tin | — | 390×844 | UC_1 | ALL | `/login` | Lane 2 | YES | NO | YES | Lỗi trống di động (Hình 57), đã có ảnh kiểm chứng |
| 12 | `1:4286` (01 · Đăng nhập) | Đăng nhập di động · Sai thông tin | — | 390×844 | UC_1 | ALL | `/login` | Lane 2 | YES | NO | YES | Lỗi sai thông tin di động (Hình 58), đã có ảnh kiểm chứng |
| 13 | `1:4286` (01 · Đăng nhập) | Đăng nhập thành công · Điện thoại / Menu chính di động | `1:4841` | 390×844 | UC_1 | OWNER | `/` | Lane 1 | YES | NO | PARTIAL | Menu mobile toàn trang 390px (Hình 59, Bảng 84, Node 1:4841) dành cho OWNER theo quy định thiết bị trong đặc tả; auth state từ localStorage |
| 14 | `1:4286` (Đăng xuất) | 10-W01 · Desktop trước đăng xuất | `1:48236` | 1440×900 | UC_10 | ALL | `/` | Lane 1 | YES | NO | PARTIAL | Màn hình làm việc máy tính trước đăng xuất, có nút Đăng xuất tại sidebar/header (UC_10); auth state từ localStorage |
| 15 | `1:4286` (Đăng xuất) | 10-W05 · Desktop đăng xuất thành công | `1:48058` | 1440×900 | UC_10 | ALL | `/login` | Lane 1 | YES | NO | NO | Màn hình đăng nhập máy tính sau khi đăng xuất thành công (UC_10); xóa session localStorage và chuyển hướng /login, chưa gọi endpoint backend |
| 16 | `1:4286` (Đăng xuất) | 10-M01 · Mobile trước đăng xuất | `1:48110` | 390×844 | UC_10 | OWNER | `/` | Lane 1 | YES | NO | PARTIAL | Màn hình làm việc điện thoại trước đăng xuất của OWNER (BR6-17), có nút mở menu điều hướng/đăng xuất (UC_10); auth state từ localStorage |
| 17 | `1:4286` (Đăng xuất) | 10-M05 · Mobile đăng xuất thành công | `1:48184` | 390×844 | UC_10 | ALL | `/login` | Lane 1 | YES | NO | NO | Màn hình đăng nhập điện thoại sau khi đăng xuất thành công (UC_10); xóa session localStorage và chuyển hướng /login, chưa gọi endpoint backend |
| 18 | `1:309` (Đổi mật khẩu) | 33 · Đổi mật khẩu · Ban đầu | `1:310` | 1440×900 | UC_6.3 | EMPLOYEE | Modal | Lane 2 | YES | NO | MOCK | Modal đổi mật khẩu cá nhân đè lên màn hình làm việc (Hình 107) |
| 19 | `1:309` (Đổi mật khẩu) | 34 · Đổi mật khẩu · Đã nhập | `1:422` | 1440×900 | UC_6.3 | EMPLOYEE | Modal | Lane 2 | YES | NO | MOCK | Đã nhập đầy đủ các trường mật khẩu |
| 20 | `1:309` (Đổi mật khẩu) | 35 · Đổi mật khẩu · Thiếu thông tin | `1:534` | 1440×900 | UC_6.3 | EMPLOYEE | Modal | Lane 2 | YES | NO | MOCK | Lỗi validation rỗng các trường mật khẩu |
| 21 | `1:309` (Đổi mật khẩu) | 36 · Đổi mật khẩu · Mật khẩu hiện tại sai | `1:649` | 1440×900 | UC_6.3 | EMPLOYEE | Modal | Lane 2 | YES | NO | MOCK | Lỗi mật khẩu hiện tại không đúng (Node 1:706) |
| 22 | `1:309` (Đổi mật khẩu) | 37 · Đổi mật khẩu · Xác nhận không khớp | `1:761` | 1440×900 | UC_6.3 | EMPLOYEE | Modal | Lane 2 | YES | NO | MOCK | Lỗi xác nhận mật khẩu mới không trùng khớp (Node 1:818) |
| 23 | `1:309` (Đổi mật khẩu) | 38 · Đổi mật khẩu · Mật khẩu mới quá ngắn | `1:872` | 1440×900 | UC_6.3 | EMPLOYEE | Modal | Lane 2 | YES | NO | MOCK | Lỗi pass < 8 ký tự theo BR6-13 (Node 1:929) |
| 24 | `1:309` (Đổi mật khẩu) | Đổi mật khẩu · Mật khẩu mới chỉ gồm khoảng trắng | `1:982` | 1440×900 | UC_6.3 | EMPLOYEE | Modal | Lane 2 | YES | NO | MOCK | Lỗi pass toàn khoảng trắng theo BR6-13 (Node 1:1039) |
| 25 | `1:309` (Đổi mật khẩu) | 39 · Đổi mật khẩu · Mật khẩu mới trùng mật khẩu hiện tại | `1:1097` | 1440×900 | UC_6.3 | EMPLOYEE | Modal | Lane 2 | YES | NO | MOCK | Lỗi trùng pass cũ theo BR6-13 (Node 1:1154) |
| 26 | `1:309` (Đổi mật khẩu) | 40 · Đổi mật khẩu · Lỗi lưu | `1:1207` | 1440×900 | UC_6.3 | EMPLOYEE | Modal | Lane 2 | YES | NO | MOCK | Banner đỏ lỗi hệ thống khi lưu (Node 1:1257) |
| 27 | `1:309` (Đổi mật khẩu) | 41 · Đổi mật khẩu · Thành công | `1:1321` | 1440×900 | UC_6.3 | EMPLOYEE | Page | Lane 2 | YES | NO | MOCK | Banner xanh lá "Đổi mật khẩu thành công." (Hình 108) |
| 28 | `1:309` (Đổi mật khẩu) | 42 · Đổi mật khẩu · Xác nhận bỏ thay đổi | `1:1406` | 1440×900 | UC_6.3 | EMPLOYEE | Modal | Lane 2 | YES | NO | MOCK | Trạng thái trước khi chọn Hủy bỏ đổi mật khẩu |
| 29 | `1:309` (Đổi mật khẩu) | Đổi mật khẩu · Chủ cửa hàng · Ban đầu | `1:1517` | 1440×900 | UC_6.3 | OWNER | Modal | Lane 2 | YES | NO | MOCK | Modal đổi mật khẩu của Chủ cửa hàng (Hình 109) |
| 30 | `1:309` (Đổi mật khẩu) | Đổi mật khẩu · Chủ cửa hàng · Thành công | `1:1664` | 1440×900 | UC_6.3 | OWNER | Page | Lane 2 | YES | NO | MOCK | Banner thành công của Chủ cửa hàng (Node 1:1664) |
| 31 | `1:4195` (02 · Danh sách nhân viên) | 12 · Tài khoản · Danh sách nhân viên | `1:4196` | 1440×900 | UC_6.1–6.4 | OWNER | `/accounts` | Lane 2 | YES | NO | MOCK | Bảng 3 nhân viên chuẩn, vai trò Nhân viên, thao tác Chỉnh sửa & Vô hiệu hóa (Hình 113) |
| 32 | `1:3161` (03 · Tạo tài khoản) | 13 · Tạo tài khoản · Ban đầu | `1:3162` | 1440×900 | UC_6.1 | OWNER | `/accounts/new` | Lane 2 | YES | NO | MOCK | Trang thêm nhân viên mới, form 2 cột (Hình 114) |
| 33 | `1:3161` (03 · Tạo tài khoản) | 14 · Tạo tài khoản · Đã nhập hợp lệ | `1:3252` | 1440×900 | UC_6.1 | OWNER | `/accounts/new` | Lane 2 | YES | NO | MOCK | Đã điền đầy đủ thông tin hợp lệ |
| 34 | `1:3161` (03 · Tạo tài khoản) | 15 · Tạo tài khoản · Thiếu thông tin bắt buộc | `1:3342` | 1440×900 | UC_6.1 | OWNER | `/accounts/new` | Lane 2 | YES | NO | MOCK | Lỗi validation rỗng các trường bắt buộc |
| 35 | `1:3161` (03 · Tạo tài khoản) | 16 · Tạo tài khoản · Trùng tên đăng nhập | `1:3435` | 1440×900 | UC_6.1 | OWNER | `/accounts/new` | Lane 2 | YES | NO | MOCK | Lỗi trùng tên đăng nhập (Node 1:3494) |
| 36 | `1:3161` (03 · Tạo tài khoản) | 17 · Tạo tài khoản · Trùng số điện thoại | `1:3526` | 1440×900 | UC_6.1 | OWNER | `/accounts/new` | Lane 2 | YES | NO | MOCK | Lỗi trùng số điện thoại (Node 1:3584) |
| 37 | `1:3161` (03 · Tạo tài khoản) | 18 · Tạo tài khoản · Sai số điện thoại và mật khẩu ngắn | `1:3617` | 1440×900 | UC_6.1 | OWNER | `/accounts/new` | Lane 2 | YES | NO | MOCK | Lỗi định dạng SĐT và pass < 8 ký tự |
| 38 | `1:3161` (03 · Tạo tài khoản) | Tạo tài khoản · Mật khẩu chỉ gồm khoảng trắng | `1:3708` | 1440×900 | UC_6.1 | OWNER | `/accounts/new` | Lane 2 | YES | NO | MOCK | Lỗi pass toàn khoảng trắng theo BR6-13 |
| 39 | `1:3161` (03 · Tạo tài khoản) | 19 · Tạo tài khoản · Lỗi hệ thống | `1:3798` | 1440×900 | UC_6.1 | OWNER | `/accounts/new` | Lane 2 | YES | NO | MOCK | Banner đỏ lỗi hệ thống khi lưu (Node 1:3848) |
| 40 | `1:3161` (03 · Tạo tài khoản) | 20 · Tạo tài khoản · Thành công | `1:3892` | 1440×900 | UC_6.1 | OWNER | `/accounts` | Lane 2 | YES | NO | MOCK | Banner xanh "Tạo tài khoản thành công." & thêm hàng thứ 4 thuha (Hình 116) |
| 41 | `1:3161` (03 · Tạo tài khoản) | 21 · Tạo tài khoản · Xác nhận bỏ thay đổi | `1:3999` | 1440×900 | UC_6.1 | OWNER | `/accounts/new` | Lane 2 | YES | NO | MOCK | Modal "Bỏ thay đổi?" với nút Tiếp tục chỉnh sửa & Hủy bỏ (Hình 115) |
| 42 | `1:3161` (03 · Tạo tài khoản) | 20 · Tạo tài khoản · Xác nhận bỏ thay đổi | `1:4099` | 1440×900 | UC_6.1 | OWNER | `/accounts/new` | Lane 2 | YES | NO | MOCK | Modal bỏ thay đổi khi form đã có dữ liệu |
| 43 | `1:2359` (Sửa tài khoản) | 22 · Sửa tài khoản · Nhân viên hoạt động | `1:2360` | 1440×900 | UC_6.2 | OWNER | `/accounts/edit` | Lane 2 | YES | NO | MOCK | Trang sửa nhân viên đang hoạt động, badge Hoạt động (Hình 111) |
| 44 | `1:2359` (Sửa tài khoản) | 23 · Sửa tài khoản · Nhân viên vô hiệu hóa | `1:2444` | 1440×900 | UC_6.2 | OWNER | `/accounts/edit` | Lane 2 | YES | NO | MOCK | Trang sửa nhân viên đã vô hiệu hóa, badge Đã vô hiệu hóa |
| 45 | `1:2359` (Sửa tài khoản) | 24 · Sửa tài khoản · Số điện thoại không hợp lệ | `1:2528` | 1440×900 | UC_6.2 | OWNER | `/accounts/edit` | Lane 2 | YES | NO | MOCK | Lỗi SĐT không hợp lệ khi sửa |
| 46 | `1:2359` (Sửa tài khoản) | Sửa tài khoản · Số điện thoại sai định dạng | `1:2613` | 1440×900 | UC_6.2 | OWNER | `/accounts/edit` | Lane 2 | YES | NO | MOCK | Lỗi định dạng SĐT (Node 1:2613) |
| 47 | `1:2359` (Sửa tài khoản) | 25 · Sửa tài khoản · Số điện thoại đã sử dụng | `1:2698` | 1440×900 | UC_6.2 | OWNER | `/accounts/edit` | Lane 2 | YES | NO | MOCK | Lỗi SĐT trùng người khác khi sửa |
| 48 | `1:2359` (Sửa tài khoản) | 26 · Sửa tài khoản · Lỗi lưu | `1:2783` | 1440×900 | UC_6.2 | OWNER | `/accounts/edit` | Lane 2 | YES | NO | MOCK | Banner đỏ lỗi hệ thống khi cập nhật (Node 1:2833) |
| 49 | `1:2359` (Sửa tài khoản) | 28 · Sửa tài khoản · Thành công | `1:2871` | 1440×900 | UC_6.2 | OWNER | `/accounts` | Lane 2 | YES | NO | MOCK | Banner cập nhật thông tin thành công |
| 50 | `1:2359` (Sửa tài khoản) | 29 · Sửa tài khoản · Xác nhận bỏ thay đổi | `1:2980` | 1440×900 | UC_6.2 | OWNER | `/accounts/edit` | Lane 2 | YES | NO | MOCK | Modal "Bỏ thay đổi?" khi sửa (Hình 112) |
| 51 | `1:2359` (Sửa tài khoản) | 27 · Sửa tài khoản · Họ tên bị bỏ trống | `1:3076` | 1440×900 | UC_6.2 | OWNER | `/accounts/edit` | Lane 2 | YES | NO | MOCK | Lỗi bỏ trống họ tên khi sửa (Node 1:3076) |
| 52 | `1:1797` (Vô hiệu hóa) | 30 · Vô hiệu hóa · Xác nhận | `1:1798` | 1440×900 | UC_6.4 | OWNER | `/accounts/disable` | Lane 2 | YES | NO | MOCK | Modal xác nhận ngưng tài khoản (Hình 117) |
| 53 | `1:1797` (Vô hiệu hóa) | 31 · Vô hiệu hóa · Thành công | `1:1914` | 1440×900 | UC_6.4 | OWNER | `/accounts/disable` | Lane 2 | YES | NO | MOCK | Banner xanh thành công & badge Đã vô hiệu hóa (Hình 118, 119) |
| 54 | `1:1797` (Vô hiệu hóa) | 32 · Vô hiệu hóa · Lỗi lưu | `1:2020` | 1440×900 | UC_6.4 | OWNER | `/accounts/disable` | Lane 2 | YES | NO | MOCK | Banner đỏ lỗi hệ thống khi vô hiệu hóa (Node 1:2070) |
| 55 | `1:1797` (Vô hiệu hóa) | Vô hiệu hóa · Trước khi chọn Hủy bỏ | `1:2142` | 1440×900 | UC_6.4 | OWNER | `/accounts/disable` | Lane 2 | YES | NO | MOCK | Trạng thái chuẩn bị hủy vô hiệu hóa |
| 56 | `1:1797` (Vô hiệu hóa) | Vô hiệu hóa · Sau khi Hủy bỏ | `1:2256` | 1440×900 | UC_6.4 | OWNER | `/accounts` | Lane 2 | YES | NO | MOCK | Quay về trang danh sách nhân viên |
| **LANE 3: DANH MỤC, GIÁ & SẢN PHẨM** |
| 30 | `1:30675` (SECTION 1 · Danh mục) | Quản lý danh mục · Danh sách | `1:30676` | 1440×900 | UC_7 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Bảng danh mục sản phẩm 9 dòng mẫu (Hình 120, Bảng 145) |
| 31 | `1:30869` (SECTION 2 · Thêm) | Thêm danh mục mới · Form ban đầu | `1:30870` | 1440×900 | UC_7.1 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Modal thêm danh mục trống (Hình 121, Bảng 146) |
| 32 | `1:30869` (SECTION 2 · Thêm) | Thêm danh mục · Lỗi trống tên | `1:31075` | 1440×900 | UC_7.1 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Validation rỗng `Tên danh mục không được để trống` (Node 1:31189) |
| 33 | `1:30869` (SECTION 2 · Thêm) | Thêm danh mục · Lỗi trùng tên | `1:31281` | 1440×900 | UC_7.1 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Thông báo `Tên danh mục đã tồn tại trong hệ thống` (Node 1:31395) |
| 34 | `1:30869` (SECTION 2 · Thêm) | Thêm danh mục · Lỗi lưu | `1:31487` | 1440×900 | UC_7.1 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Toast đỏ lỗi lưu phía máy chủ (Node 1:31610) |
| 35 | `1:30869` (SECTION 2 · Thêm) | Thêm danh mục · Thành công | `1:31696` | 1440×900 | UC_7.1 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Thêm "Đế TPU" mã NH-0010, Toast xanh `Thêm danh mục mới thành công` |
| 36 | `1:31907` (SECTION 3 · Xóa) | Xóa danh mục · Xác nhận | `1:31908` | 1440×900 | UC_7.2 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Modal xác nhận xóa danh mục (Hình 122, Bảng 147) |
| 37 | `1:31907` (SECTION 3 · Xóa) | Xóa danh mục · Lỗi còn sản phẩm | `1:32110` | 1440×900 | UC_7.2 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Cảnh báo ràng buộc toàn vẹn, Banner vàng Node 1:32167 |
| 38 | `1:31907` (SECTION 3 · Xóa) | Xóa danh mục · Không tìm thấy | `1:32307` | 1440×900 | UC_7.2 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Toast đỏ `Danh mục không tồn tại hoặc đã bị xóa` (Node 1:32404) |
| 39 | `1:31907` (SECTION 3 · Xóa) | Xóa danh mục · Lỗi hệ thống | `1:32490` | 1440×900 | UC_7.2 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Toast đỏ `Lỗi kết nối máy chủ, vui lòng thử lại` (Node 1:32601) |
| 40 | `1:31907` (SECTION 3 · Xóa) | Xóa danh mục · Thành công | `1:32687` | 1440×900 | UC_7.2 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Xóa Keo dán chuyên dụng NH-0008, Toast xanh `Xóa danh mục thành công` |
| 41 | `1:32870` (SECTION 4 · Sửa) | Sửa danh mục · Form | `1:32871` | 1440×900 | UC_7.3 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Modal chỉnh sửa danh mục, mã NH-0009 readonly (Hình 123, Bảng 148) |
| 42 | `1:32870` (SECTION 4 · Sửa) | Sửa danh mục · Tên không thay đổi | `1:33080` | 1440×900 | UC_7.3 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Toast xanh dương/info `Không có thay đổi nào được ghi nhận` (Node 1:33190) |
| 43 | `1:32870` (SECTION 4 · Sửa) | Sửa danh mục · Lỗi trống | `1:33277` | 1440×900 | UC_7.3 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Validation rỗng khi sửa (Node 1:33385) |
| 44 | `1:32870` (SECTION 4 · Sửa) | Sửa danh mục · Lỗi trùng tên | `1:33487` | 1440×900 | UC_7.3 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Lỗi trùng tên khi sửa (Node 1:33595) |
| 45 | `1:32870` (SECTION 4 · Sửa) | Sửa danh mục · Lỗi cập nhật | `1:33697` | 1440×900 | UC_7.3 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Toast đỏ lỗi cập nhật phía máy chủ (Node 1:33808) |
| 46 | `1:32870` (SECTION 4 · Sửa) | Sửa danh mục · Thành công | `1:33910` | 1440×900 | UC_7.3 | OWNER | `/catalog/categories` | Lane 3 | YES | NO | MOCK | Đổi NH-0009 thành Dụng cụ vệ sinh giày, Toast `Cập nhật danh mục thành công` |
| 42 | `1:18584` (Sản phẩm) | Thêm sản phẩm mới · Ban đầu | `1:18585` | 1440×900 | UC_7.4 | OWNER | `/catalog/products/new` | Lane 3 | NO | NO | NO | Form trống thêm sản phẩm (Hình 124) |
| 43 | `1:18584` (Sản phẩm) | Thêm sản phẩm · Nhập cơ bản | `1:18710` | 1440×900 | UC_7.4 | OWNER | `/catalog/products/new` | Lane 3 | NO | NO | NO | Đã điền tên, mã, giá bán (Hình 125) |
| 44 | `1:18584` (Sản phẩm) | Thêm sản phẩm · Nhập ngưỡng | `1:18835` | 1440×900 | UC_7.4 | OWNER | `/catalog/products/new` | Lane 3 | NO | NO | NO | Đầy đủ dữ liệu & ngưỡng (Hình 126) |
| 45 | `1:18584` (Sản phẩm) | Thêm sản phẩm · Chưa có danh mục | `1:18960` | 1440×900 | UC_7.4 | OWNER | `/catalog/products/new` | Lane 3 | NO | NO | NO | Cảnh báo cần tạo danh mục trước |
| 46 | `1:18584` (Sản phẩm) | Thêm sản phẩm · Lỗi trùng tên/SKU | `1:20347` | 1440×900 | UC_7.4 | OWNER | `/catalog/products/new` | Lane 3 | NO | NO | NO | Báo lỗi trùng thông tin |
| 47 | `1:18584` (Sản phẩm) | Thêm sản phẩm · Lỗi lưu hệ thống | `1:20473` | 1440×900 | UC_7.4 | OWNER | `/catalog/products/new` | Lane 3 | NO | NO | NO | Banner lỗi 500 khi lưu |
| 48 | `1:20601` (Giá sản phẩm) | Cập nhật giá bán & gốc · Danh sách | `1:20601` | 1440×900 | UC_7.5 | OWNER | `/catalog/pricing` | Lane 3 | NO | NO | NO | Bảng giá bán hiện tại (Hình 127) |
| 49 | `1:20601` (Giá sản phẩm) | Cập nhật giá bán & gốc · Nhập giá mới | `1:20875` | 1440×900 | UC_7.5 | OWNER | `/catalog/pricing` | Lane 3 | NO | NO | NO | Form thay đổi giá bán/vốn (Hình 128) |
| 50 | `1:20601` (Giá sản phẩm) | Cập nhật giá bán & gốc · Thành công | `1:22197` | 1440×900 | UC_7.5 | OWNER | `/catalog/pricing` | Lane 3 | NO | NO | NO | Lưu giá thành công (Hình 129) |
| 51 | `1:22475` (Sửa sản phẩm) | Sửa thông tin sản phẩm · Danh sách | `1:22475` | 1440×900 | UC_7.6 | OWNER | `/catalog/products/:id/edit` | Lane 3 | NO | NO | NO | Chọn sản phẩm cần sửa (Hình 130) |
| 52 | `1:22475` (Sửa sản phẩm) | Sửa thông tin sản phẩm · Form dữ liệu | `1:22729` | 1440×900 | UC_7.6 | OWNER | `/catalog/products/:id/edit` | Lane 3 | NO | NO | NO | Form điền dữ liệu cũ (Hình 131) |
| 53 | `1:22475` (Sửa sản phẩm) | Sửa thông tin sản phẩm · Thành công | `1:23445` | 1440×900 | UC_7.6 | OWNER | `/catalog/products` | Lane 3 | NO | NO | NO | Thông báo cập nhật xong (Hình 132) |
| 54 | `1:23956` (Xóa sản phẩm) | Xóa sản phẩm · Danh sách | `1:23956` | 1440×900 | UC_7.7 | OWNER | `/catalog/products` | Lane 3 | NO | NO | NO | Nút xóa trên bảng sản phẩm (Hình 133) |
| 55 | `1:23956` (Xóa sản phẩm) | Xóa sản phẩm · Xác nhận | `1:24483` | 1440×900 | UC_7.7 | OWNER | `/catalog/products` | Lane 3 | NO | NO | NO | Hộp thoại xác nhận xóa (Hình 134) |
| 56 | `1:23956` (Xóa sản phẩm) | Xóa sản phẩm · Lỗi còn tồn kho | — | 1440×900 | UC_7.7 | OWNER | `/catalog/products` | Lane 3 | NO | NO | NO | Chặn xóa khi stock > 0 |
| 57 | `1:23956` (Xóa sản phẩm) | Xóa sản phẩm · Lỗi có giao dịch | `1:24740` | 1440×900 | UC_7.7 | OWNER | `/catalog/products` | Lane 3 | NO | NO | NO | Chặn xóa khi đã phát sinh hóa đơn |
| 58 | `1:23956` (Xóa sản phẩm) | Xóa sản phẩm · Thành công | `1:25493` | 1440×900 | UC_7.7 | OWNER | `/catalog/products` | Lane 3 | NO | NO | NO | Xóa thành công |
| 59 | `1:25733` (Ngưỡng cảnh báo) | Thiết lập ngưỡng · Danh sách | `1:25733` | 1440×900 | UC_7.8 | OWNER | `/catalog/thresholds` | Lane 3 | NO | NO | NO | Chọn sản phẩm đặt ngưỡng (Hình 135) |
| 60 | `1:25733` (Ngưỡng cảnh báo) | Thiết lập ngưỡng · Form ban đầu | `1:26118` | 1440×900 | UC_7.8 | OWNER | `/catalog/thresholds` | Lane 3 | NO | NO | NO | Form nhập min/max/aged (Hình 136) |
| 61 | `1:25733` (Ngưỡng cảnh báo) | Thiết lập ngưỡng · Dự kiến Hết hàng | — | 1440×900 | UC_7.8 | OWNER | `/catalog/thresholds` | Lane 3 | NO | NO | NO | Dynamic preview OUT_OF_STOCK (Hình 137) |
| 62 | `1:25733` (Ngưỡng cảnh báo) | Thiết lập ngưỡng · Dự kiến Sắp hết | `1:26249` | 1440×900 | UC_7.8 | OWNER | `/catalog/thresholds` | Lane 3 | NO | NO | NO | Dynamic preview LOW_STOCK (Hình 138) |
| 63 | `1:25733` (Ngưỡng cảnh báo) | Thiết lập ngưỡng · Dự kiến Tồn lâu | `1:26380` | 1440×900 | UC_7.8 | OWNER | `/catalog/thresholds` | Lane 3 | NO | NO | NO | Dynamic preview AGED (Hình 139) |
| 64 | `1:25733` (Ngưỡng cảnh báo) | Thiết lập ngưỡng · Dự kiến Còn hàng | — | 1440×900 | UC_7.8 | OWNER | `/catalog/thresholds` | Lane 3 | NO | NO | NO | Dynamic preview IN_STOCK (Hình 140) |
| 65 | `1:25733` (Ngưỡng cảnh báo) | Thiết lập ngưỡng · Hủy thao tác | — | 1440×900 | UC_7.8 | OWNER | `/catalog/thresholds` | Lane 3 | NO | NO | NO | Hủy bỏ thay đổi (Hình 141) |
| 66 | `1:25733` (Ngưỡng cảnh báo) | Thiết lập ngưỡng · Lỗi dữ liệu | — | 1440×900 | UC_7.8 | OWNER | `/catalog/thresholds` | Lane 3 | NO | NO | NO | Lỗi nhập số âm / ngưỡng vô lý (Hình 142) |
| 67 | `1:25733` (Ngưỡng cảnh báo) | Thiết lập ngưỡng · Thành công | `1:27681` | 1440×900 | UC_7.8 | OWNER | `/catalog/thresholds` | Lane 3 | NO | NO | NO | Lưu ngưỡng thành công |
| 68 | `1:27939` (Tra cứu sản phẩm) | Tra cứu sản phẩm · Chủ cửa hàng | `1:27939` | 1440×900 | UC_7.9 | OWNER | `/catalog/products` | Lane 3 | NO | NO | NO | Xem đầy đủ giá vốn, giá bán, tồn (Hình 143) |
| 69 | `1:27939` (Tra cứu sản phẩm) | Tra cứu sản phẩm · Nhân viên | `1:28077` | 1440×900 | UC_7.9 | EMPLOYEE | `/catalog/products` | Lane 3 | NO | NO | NO | Ẩn giá vốn, chỉ xem giá bán & tồn (Hình 144) |
| 70 | `1:27939` (Tra cứu sản phẩm) | Tra cứu sản phẩm · Không có kết quả | `1:28828` | 1440×900 | UC_7.9 | ALL | `/catalog/products` | Lane 3 | NO | NO | NO | Empty search state |
| **LANE 4: BÁN HÀNG, HÓA ĐƠN & PHÊ DUYỆT GIÁ SỈ** |
| 71 | `1:7886` (Bán hàng) | Bán lẻ · Chọn sản phẩm | `1:10533` | 1440×900 | UC_2.1 | ALL | `/sales` | Lane 4 | PARTIAL | NO | PARTIAL | Lưới sản phẩm + giỏ hàng bên phải (Hình 60) |
| 72 | `1:7886` (Bán hàng) | Bán lẻ · Tìm kiếm & Bộ lọc | `1:11007` | 1440×900 | UC_2.1 | ALL | `/sales` | Lane 4 | NO | NO | NO | Tìm theo mã/tên, filter danh mục |
| 73 | `1:7886` (Bán hàng) | Bán lẻ · Giỏ hàng có món | `1:11481` | 1440×900 | UC_2.1 | ALL | `/sales` | Lane 4 | NO | NO | NO | Thêm số lượng, tính tổng tạm |
| 74 | `1:7886` (Bán hàng) | Bán lẻ · Giỏ hàng trống | `1:11953` | 1440×900 | UC_2.1 | ALL | `/sales` | Lane 4 | NO | NO | NO | Empty cart state |
| 75 | `1:7886` (Bán hàng) | Thanh toán tiền mặt | `1:10075` | 1440×900 | UC_2.1 | ALL | `/sales` | Lane 4 | NO | NO | NO | Nhập tiền khách đưa, tính tiền thừa |
| 76 | `1:7886` (Bán hàng) | Thanh toán chuyển khoản ngân hàng | `1:9945` | 1440×900 | UC_2.1 | ALL | `/sales` | Lane 4 | NO | NO | NO | Tạo mã VietQR động theo đơn |
| 77 | `1:7886` (Bán hàng) | Chờ thanh toán QR | `1:9797` | 1440×900 | UC_2.1 | ALL | `/sales` | Lane 4 | NO | NO | NO | Modal đếm ngược xác nhận thanh toán |
| 78 | `1:7886` (Bán hàng) | Hoàn tất giao dịch bán lẻ | `1:9054` | 1440×900 | UC_2.1 | ALL | `/sales` | Lane 4 | NO | NO | NO | Màn hình thành công, nút in hóa đơn |
| 79 | `1:7886` (Hóa đơn) | Tra cứu hóa đơn · Danh sách | `1:8668` | 1440×900 | UC_2.2 | OWNER | `/sales/invoices` | Lane 4 | NO | NO | NO | Bảng hóa đơn, tìm theo mã (Hình 68) |
| 80 | `1:7886` (Hóa đơn) | Tra cứu hóa đơn · Lỗi tìm kiếm | `1:8836` | 1440×900 | UC_2.2 | OWNER | `/sales/invoices` | Lane 4 | NO | NO | NO | Không tìm thấy hóa đơn |
| 81 | `1:7886` (Hóa đơn) | Chi tiết hóa đơn | `1:8916` | 1440×900 | UC_2.2 | OWNER | `/sales/invoices/:id` | Lane 4 | NO | NO | NO | Xem chi tiết dòng sản phẩm, in lại (Hình 69) |
| 82 | `1:7886` (Bán sỉ) | Bán sỉ · Chọn sản phẩm | — | 1440×900 | UC_2.1/9 | ALL | `/sales/wholesale` | Lane 4 | NO | NO | NO | Lập đơn sỉ số lượng lớn (Hình 60) |
| 83 | `1:7886` (Bán sỉ) | Bán sỉ · Xác thực chủ tại quầy | — | 1440×900 | UC_9 | ALL | `/sales/wholesale` | Lane 4 | NO | NO | NO | Chủ nhập mã PIN/pass duyệt giá (Hình 61) |
| 84 | `1:7886` (Bán sỉ) | Bán sỉ · Duyệt giá qua Zalo | — | 1440×900 | UC_9 | ALL | `/sales/wholesale` | Lane 4 | NO | NO | NO | Chờ chủ cửa hàng duyệt từ xa (Hình 62) |
| 85 | `1:7886` (Bán sỉ) | Bán sỉ · Nhập mức giá giảm | — | 1440×900 | UC_2.1 | ALL | `/sales/wholesale` | Lane 4 | NO | NO | NO | Điền mức chiết khấu được duyệt (Hình 63) |
| 86 | `1:7886` (Bán sỉ) | Bán sỉ · Giảm giá đã duyệt | — | 1440×900 | UC_2.1 | ALL | `/sales/wholesale` | Lane 4 | NO | NO | NO | Áp dụng giá mới vào hóa đơn (Hình 64) |
| 87 | `1:7886` (Bán sỉ) | Bán sỉ · Thanh toán tiền mặt | — | 1440×900 | UC_2.1 | ALL | `/sales/wholesale` | Lane 4 | NO | NO | NO | Thanh toán đơn hàng sỉ (Hình 65) |
| 88 | `1:7886` (Bán sỉ) | Bán sỉ · Thanh toán chuyển khoản | — | 1440×900 | UC_2.1 | ALL | `/sales/wholesale` | Lane 4 | NO | NO | NO | Chuyển khoản đơn sỉ (Hình 66) |
| 89 | `1:7886` (Bán sỉ) | Bán sỉ · Hoàn tất giao dịch | — | 1440×900 | UC_2.1 | ALL | `/sales/wholesale` | Lane 4 | NO | NO | NO | In hóa đơn bán sỉ (Hình 67) |
| **LANE 5: TỒN KHO & NHẬP HÀNG** |
| 90 | `1:40504` (Nhập hàng) | Quản lý nhập hàng · Danh sách | `1:40505` | 1440×900 | UC_8.1 | OWNER | `/purchases` | Lane 5 | NO | NO | NO | Màn quản lý nhập hàng (Hình 150) |
| 91 | `1:40504` (Nhập hàng) | Tạo phiếu nhập mới · Biểu mẫu | `1:40624` | 1440×900 | UC_8.1 | OWNER | `/purchases/new` | Lane 5 | NO | NO | NO | Khung phiếu nhập mới (Hình 145) |
| 92 | `1:40504` (Nhập hàng) | Chọn sản phẩm nhập | `1:40729` | 1440×900 | UC_8.1 | OWNER | `/purchases/new` | Lane 5 | NO | NO | NO | Modal tra cứu thêm mặt hàng (Hình 146) |
| 93 | `1:40504` (Nhập hàng) | Chỉnh sửa dòng nhập (SL/Giá vốn) | `1:40888` | 1440×900 | UC_8.1 | OWNER | `/purchases/new` | Lane 5 | NO | NO | NO | Modal chỉnh SL và giá nhập (Hình 147) |
| 94 | `1:40504` (Nhập hàng) | Hủy phiếu nhập đang lập | — | 1440×900 | UC_8.1 | OWNER | `/purchases/new` | Lane 5 | NO | NO | NO | Xác nhận bỏ phiếu nhập (Hình 148) |
| 95 | `1:40504` (Nhập hàng) | Xác nhận phiếu nhập | `1:41242` | 1440×900 | UC_8.1 | OWNER | `/purchases/new` | Lane 5 | NO | NO | NO | Tóm tắt tổng tiền, nhà cung cấp |
| 96 | `1:40504` (Nhập hàng) | Đang xử lý nhập hàng | `1:41418` | 1440×900 | UC_8.1 | OWNER | `/purchases/new` | Lane 5 | NO | NO | NO | Trạng thái loading giao dịch |
| 97 | `1:40504` (Nhập hàng) | Lỗi dữ liệu đầu vào | `1:43328`–`44098` | 1440×900 | UC_8.1 | OWNER | `/purchases/new` | Lane 5 | NO | NO | NO | Lỗi SL <= 0 hoặc giá vốn < 0 |
| 98 | `1:40504` (Nhập hàng) | Nhập hàng thành công | `1:44312` | 1440×900 | UC_8.1 | OWNER | `/purchases/new` | Lane 5 | NO | NO | NO | Thành công, tăng tồn kho (Hình 149) |
| 99 | `1:29003` (Lịch sử nhập) | Lịch sử nhập hàng · Danh sách | `1:29004` | 1440×900 | UC_8.2 | OWNER | `/purchases/history` | Lane 5 | NO | NO | NO | Bảng các lần nhập hàng |
| 100 | `1:29003` (Lịch sử nhập) | Chi tiết phiếu nhập hàng | `1:29137` | 1440×900 | UC_8.2 | OWNER | `/purchases/history/:id` | Lane 5 | NO | NO | NO | Chi tiết mặt hàng và giá vốn |
| 101 | `1:29003` (Lịch sử nhập) | Chi tiết phiếu nhập nhiều lô | `1:29282` | 1440×900 | UC_8.2 | OWNER | `/purchases/history/:id` | Lane 5 | NO | NO | NO | Hiển thị phiếu có nhiều dòng |
| 102 | `1:29003` (Lịch sử nhập) | Lọc lịch sử theo thời gian | `1:29464` | 1440×900 | UC_8.2 | OWNER | `/purchases/history` | Lane 5 | NO | NO | NO | Datepicker từ ngày - đến ngày |
| 103 | `1:29003` (Lịch sử nhập) | Tìm kiếm theo tên sản phẩm | `1:29697` | 1440×900 | UC_8.2 | OWNER | `/purchases/history` | Lane 5 | NO | NO | NO | Search input tên hàng nhập |
| 104 | `1:29003` (Lịch sử nhập) | Chưa có dữ liệu nhập hàng | `1:30163` | 1440×900 | UC_8.2 | OWNER | `/purchases/history` | Lane 5 | NO | NO | NO | Empty history state |
| 105 | `1:29003` (Lịch sử nhập) | Lỗi tải chi tiết phiếu nhập | `1:30616` | 1440×900 | UC_8.2 | OWNER | `/purchases/history/:id` | Lane 5 | NO | NO | NO | Error boundary tải phiếu |
| 106 | `1:34107` (Tồn kho) | Tra cứu tồn kho · Danh sách | `1:34666` | 1440×900 | UC_4.4 | ALL | `/inventory` | Lane 5 | NO | NO | NO | Bảng tồn kho tổng quát (Hình 100) |
| 107 | `1:34107` (Tồn kho) | Chi tiết các lô hàng còn tồn | — | 1440×900 | UC_4.4 | ALL | `/inventory` | Lane 5 | NO | NO | NO | Xem chi tiết lô sản phẩm (Hình 101) |
| 108 | `1:34107` (Tồn kho) | Lọc theo tình trạng tồn kho | `1:34940` | 1440×900 | UC_4.4 | ALL | `/inventory` | Lane 5 | NO | NO | NO | Filter tabs (Hình 102) |
| 109 | `1:34107` (Tồn kho) | Danh sách Hết hàng (`OUT_OF_STOCK`) | `1:34294` | 1440×900 | UC_4.4 | ALL | `/inventory` | Lane 5 | NO | NO | NO | Filter `stock === 0` |
| 110 | `1:34107` (Tồn kho) | Danh sách Sắp hết (`LOW_STOCK`) | `1:34480` | 1440×900 | UC_4.4 | ALL | `/inventory` | Lane 5 | NO | NO | NO | Filter `0 < stock <= alertThreshold` |
| 111 | `1:34107` (Tồn kho) | Danh sách Tồn lâu (`AGED`) | `1:34108` | 1440×900 | UC_4.4 | ALL | `/inventory` | Lane 5 | NO | NO | NO | Filter ngày tồn vượt ngưỡng |
| 112 | `1:34107` (Tồn kho) | Tìm theo tên sản phẩm | — | 1440×900 | UC_4.4 | ALL | `/inventory` | Lane 5 | NO | NO | NO | Search input (Hình 103) |
| 113 | `1:34107` (Tồn kho) | Tra cứu không có kết quả | `1:36320` | 1440×900 | UC_4.4 | ALL | `/inventory` | Lane 5 | NO | NO | NO | Empty search state |
| 114 | `1:34107` (Điều chỉnh tồn) | Điều chỉnh số tồn theo lô | — | 1440×900 | UC_4.1 | OWNER | `/inventory/adjust` | Lane 5 | NO | NO | NO | Chọn lô điều chỉnh (Hình 87) |
| 115 | `1:34107` (Điều chỉnh tồn) | Điều chỉnh số tồn · Form nhập | — | 1440×900 | UC_4.1 | OWNER | `/inventory/adjust` | Lane 5 | NO | NO | NO | Nhập số tồn thực tế & lý do (Hình 88) |
| 116 | `1:34107` (Điều chỉnh tồn) | Trùng số tồn hiện tại | — | 1440×900 | UC_4.1 | OWNER | `/inventory/adjust` | Lane 5 | NO | NO | NO | Chặn khi SL thực = SL sổ sách (Hình 89) |
| 117 | `1:34107` (Điều chỉnh tồn) | Lỗi khi lưu điều chỉnh | — | 1440×900 | UC_4.1 | OWNER | `/inventory/adjust` | Lane 5 | NO | NO | NO | Banner lỗi hệ thống (Hình 90) |
| 118 | `1:34107` (Điều chỉnh tồn) | Điều chỉnh thành công | — | 1440×900 | UC_4.1 | OWNER | `/inventory/adjust` | Lane 5 | NO | NO | NO | Ghi nhận StockMovement (Hình 91) |
| 119 | `1:34107` (Điều chỉnh tồn) | Chưa có danh mục | — | 1440×900 | UC_4.1 | OWNER | `/inventory/adjust` | Lane 5 | NO | NO | NO | Cảnh báo chưa có danh mục (Hình 92) |
| 120 | `1:34107` (Cảnh báo tồn) | Danh sách cảnh báo tồn kho | — | 1440×900 | UC_4.2 | OWNER | `/inventory/alerts` | Lane 5 | NO | NO | NO | Bảng tổng hợp cảnh báo (Hình 95) |
| 121 | `1:34107` (Cảnh báo tồn) | Chi tiết cảnh báo tồn kho | — | 1440×900 | UC_4.2 | OWNER | `/inventory/alerts` | Lane 5 | NO | NO | NO | Chi tiết mức chênh lệch (Hình 93) |
| 122 | `1:34107` (Cảnh báo tồn) | Cảnh báo tồn khi không có sản phẩm | — | 1440×900 | UC_4.2 | OWNER | `/inventory/alerts` | Lane 5 | NO | NO | NO | Trạng thái an toàn (Hình 94) |
| 123 | `1:34107` (Lịch sử tồn) | Lịch sử điều chỉnh tồn kho | — | 1440×900 | UC_4.3 | OWNER | `/inventory/history` | Lane 5 | NO | NO | NO | Bảng audit tồn kho (Hình 96) |
| 124 | `1:34107` (Lịch sử tồn) | Chi tiết lịch sử điều chỉnh | — | 1440×900 | UC_4.3 | OWNER | `/inventory/history/:id` | Lane 5 | NO | NO | NO | Xem người chỉnh & lý do (Hình 97) |
| 125 | `1:34107` (Lịch sử tồn) | Lịch sử khi không có kết quả tìm kiếm | — | 1440×900 | UC_4.3 | OWNER | `/inventory/history` | Lane 5 | NO | NO | NO | Empty search (Hình 98) |
| 126 | `1:34107` (Lịch sử tồn) | Lịch sử khi chưa có dữ liệu | — | 1440×900 | UC_4.3 | OWNER | `/inventory/history` | Lane 5 | NO | NO | NO | Empty table (Hình 99) |
| **LANE 6: BÁO CÁO, ĐỔI/TRẢ & PHÊ DUYỆT TỪ XA** |
| 127 | `1:48053` (Doanh thu) | Báo cáo doanh thu · Ban đầu | `1:50619` | 1440×900 | UC_5.1 | OWNER | `/reports/revenue` | Lane 6 | NO | NO | NO | Biểu đồ doanh thu desktop (Hình 104) |
| 128 | `1:48053` (Doanh thu) | Báo cáo doanh thu · Chọn ngày | `1:50726` | 1440×900 | UC_5.1 | OWNER | `/reports/revenue` | Lane 6 | NO | NO | NO | Datepicker ngày |
| 129 | `1:48053` (Doanh thu) | Báo cáo doanh thu · Chọn tháng | `1:51112` | 1440×900 | UC_5.1 | OWNER | `/reports/revenue` | Lane 6 | NO | NO | NO | Month picker |
| 130 | `1:48053` (Doanh thu) | Báo cáo doanh thu theo ngày | `1:51275` | 1440×900 | UC_5.1 | OWNER | `/reports/revenue` | Lane 6 | NO | NO | NO | Cột doanh thu chi tiết |
| 131 | `1:48053` (Doanh thu) | Báo cáo doanh thu theo tháng | `1:54615` | 1440×900 | UC_5.1 | OWNER | `/reports/revenue` | Lane 6 | NO | NO | NO | Thống kê 12 tháng |
| 132 | `1:48053` (Doanh thu) | Báo cáo doanh thu không phát sinh | `1:51414` | 1440×900 | UC_5.1 | OWNER | `/reports/revenue` | Lane 6 | NO | NO | NO | 0 VNĐ trong kỳ |
| 133 | `1:48053` (Doanh thu) | Báo cáo doanh thu lỗi tải | `1:51693` | 1440×900 | UC_5.1 | OWNER | `/reports/revenue` | Lane 6 | NO | NO | NO | Error boundary |
| 134 | `1:48053` (Doanh thu) | Báo cáo doanh thu di động | `1:48869` | 390×844 | UC_5.1 | OWNER | `/reports/revenue` | Lane 6 | NO | NO | NO | Giao diện mobile chủ xem (Hình 105) |
| 135 | `1:48053` (Bán/Trả) | Số lượng bán/trả · Ban đầu | `1:51955` | 1440×900 | UC_5.2 | OWNER | `/reports/units` | Lane 6 | NO | NO | NO | Thống kê số món bán/trả (Hình 106) |
| 136 | `1:48053` (Bán/Trả) | Số lượng bán/trả · Chọn ngày | `1:52055` | 1440×900 | UC_5.2 | OWNER | `/reports/units` | Lane 6 | NO | NO | NO | Date filter |
| 137 | `1:48053` (Bán/Trả) | Số lượng bán/trả theo ngày | `1:52443` | 1440×900 | UC_5.2 | OWNER | `/reports/units` | Lane 6 | NO | NO | NO | Chi tiết ngày |
| 138 | `1:48053` (Bán/Trả) | Số lượng bán/trả theo tháng | `1:52590` | 1440×900 | UC_5.2 | OWNER | `/reports/units` | Lane 6 | NO | NO | NO | Chi tiết tháng |
| 139 | `1:48053` (Bán/Trả) | Số lượng bán/trả không có dữ liệu | `1:52738` | 1440×900 | UC_5.2 | OWNER | `/reports/units` | Lane 6 | NO | NO | NO | Empty units |
| 140 | `1:48053` (Bán/Trả) | Số lượng bán/trả lỗi tải | `1:52851` | 1440×900 | UC_5.2 | OWNER | `/reports/units` | Lane 6 | NO | NO | NO | Network error |
| 141 | `1:48053` (Bán/Trả) | Số lượng bán/trả di động | `1:50557` | 390×844 | UC_5.2 | OWNER | `/reports/units` | Lane 6 | NO | NO | NO | Mobile chart |
| 142 | `1:45946` (Đổi hàng) | Màn hình đổi hàng ban đầu | — | 1440×900 | UC_3.1 | ALL | `/returns/exchange` | Lane 6 | NO | NO | NO | Form khởi tạo đổi hàng (Hình 70) |
| 143 | `1:45946` (Đổi hàng) | Tìm và chọn hóa đơn cần đổi | — | 1440×900 | UC_3.1 | ALL | `/returns/exchange` | Lane 6 | NO | NO | NO | Tra cứu hóa đơn cũ (Hình 71) |
| 144 | `1:45946` (Đổi hàng) | Chọn sản phẩm đổi & hàng mới | — | 1440×900 | UC_3.1 | ALL | `/returns/exchange` | Lane 6 | NO | NO | NO | Lưới chọn đổi sản phẩm (Hình 72) |
| 145 | `1:45946` (Đổi hàng) | Màn hình chờ duyệt đổi hàng | — | 1440×900 | UC_3.1/9 | ALL | `/returns/exchange` | Lane 6 | NO | NO | NO | Chờ chủ xác nhận (Hình 73) |
| 146 | `1:45946` (Đổi hàng) | Đổi hàng ngang giá | — | 1440×900 | UC_3.1 | ALL | `/returns/exchange` | Lane 6 | NO | NO | NO | Chênh lệch 0 VNĐ (Hình 74) |
| 147 | `1:45946` (Đổi hàng) | Thu thêm tiền mặt | — | 1440×900 | UC_3.1 | ALL | `/returns/exchange` | Lane 6 | NO | NO | NO | Thu tiền khách đổi món đắt hơn (Hình 75) |
| 148 | `1:45946` (Đổi hàng) | Thu thêm chuyển khoản | — | 1440×900 | UC_3.1 | ALL | `/returns/exchange` | Lane 6 | NO | NO | NO | QR chuyển khoản thu thêm (Hình 76) |
| 149 | `1:45946` (Đổi hàng) | Hoàn tiền mặt khi đổi món rẻ hơn | — | 1440×900 | UC_3.1 | ALL | `/returns/exchange` | Lane 6 | NO | NO | NO | Hoàn tiền cho khách (Hình 77) |
| 150 | `1:45946` (Đổi hàng) | Xác nhận đổi hàng | — | 1440×900 | UC_3.1 | ALL | `/returns/exchange` | Lane 6 | NO | NO | NO | Tóm tắt phiếu đổi (Hình 78) |
| 151 | `1:45946` (Đổi hàng) | Hoàn tất đổi hàng | — | 1440×900 | UC_3.1 | ALL | `/returns/exchange` | Lane 6 | NO | NO | NO | In phiếu đổi hàng (Hình 79) |
| 152 | `1:44574` (Trả hàng) | Màn hình trả hàng ban đầu | — | 1440×900 | UC_3.2 | ALL | `/returns/refund` | Lane 6 | NO | NO | NO | Form trả hàng (Hình 80) |
| 153 | `1:44574` (Trả hàng) | Tìm và chọn hóa đơn cần trả | — | 1440×900 | UC_3.2 | ALL | `/returns/refund` | Lane 6 | NO | NO | NO | Tra cứu hóa đơn cũ (Hình 81) |
| 154 | `1:44574` (Trả hàng) | Chọn sản phẩm & SL trả | — | 1440×900 | UC_3.2 | ALL | `/returns/refund` | Lane 6 | NO | NO | NO | Nhập số lượng hoàn (Hình 82) |
| 155 | `1:44574` (Trả hàng) | Màn hình chờ duyệt trả hàng | — | 1440×900 | UC_3.2/9 | ALL | `/returns/refund` | Lane 6 | NO | NO | NO | Chờ chủ xác nhận (Hình 83) |
| 156 | `1:44574` (Trả hàng) | Hoàn tiền mặt trả hàng | — | 1440×900 | UC_3.2 | ALL | `/returns/refund` | Lane 6 | NO | NO | NO | Xác nhận số tiền chi (Hình 84) |
| 157 | `1:44574` (Trả hàng) | Xác nhận trả hàng | — | 1440×900 | UC_3.2 | ALL | `/returns/refund` | Lane 6 | NO | NO | NO | Tóm tắt phiếu trả (Hình 85) |
| 158 | `1:44574` (Trả hàng) | Hoàn tất trả hàng | — | 1440×900 | UC_3.2 | ALL | `/returns/refund` | Lane 6 | NO | NO | NO | In phiếu hoàn tiền (Hình 86) |
| 159 | Phê duyệt (`9-W`/`9-M`) | Phê duyệt giảm giá sỉ: chờ xác thực (Nhân viên) | — | 1440×900 | UC_9 | EMPLOYEE | `/sales/wholesale` | Lane 4 | NO | NO | NO | Chờ xác thực tại quầy/Zalo (Hình 151) |
| 160 | Phê duyệt (`9-W`/`9-M`) | Phê duyệt giảm giá sỉ: đã xác thực (Nhân viên) | — | 1440×900 | UC_9 | EMPLOYEE | `/sales/wholesale` | Lane 4 | NO | NO | NO | Đã nhận mã phê duyệt (Hình 152) |
| 161 | Phê duyệt (`9-W`/`9-M`) | Duyệt giảm giá sỉ (di động, Chủ cửa hàng) | — | 390×844 | UC_9 | OWNER | `/approvals/wholesale` | Lane 6 | NO | NO | NO | Nút Đồng ý/Từ chối trên mobile (Hình 153) |
| 162 | Phê duyệt (`9-W`/`9-M`) | Duyệt trả hàng (di động, Chủ cửa hàng) | — | 390×844 | UC_9 | OWNER | `/approvals/refund` | Lane 6 | NO | NO | NO | Nút Duyệt trả tiền trên mobile (Hình 154) |
| 163 | Phê duyệt (`9-W`/`9-M`) | Duyệt đổi hàng · Thu thêm (di động, Chủ cửa hàng) | — | 390×844 | UC_9 | OWNER | `/approvals/exchange` | Lane 6 | NO | NO | NO | Nút Duyệt đổi hàng trên mobile (Hình 155) |

---

## 2. Tổng kết phân chia theo 6 Lane & Hiện trạng triển khai

### Bảng phân chia theo 6 Lane

| Lane | Nhóm trách nhiệm | Use Case | Phạm vi Section & Màn hình | Tổng số frame/trạng thái | Trạng thái hiện tại |
|:---|:---|:---|:---|:---:|:---|
| **Lane 1** | Nền UI & Tích hợp Shell | UC_1, UC_10 | Section `1:4286` (Login ban đầu shared với Lane 2 `1:4884`, Shell OWNER `1:4458`, EMPLOYEE `1:4581`, Desktop/Mobile Logout `1:48236` / `1:48058`, Mobile menu `1:4841` / `Hình 59`) | **8** | 8 frames đã triển khai hoàn chỉnh (implemented: YES). Login ban đầu `1:4884` visual-approved: YES; 7 frames còn lại visual-approved: NO |
| **Lane 2** | Tài khoản & Trạng thái Auth | UC_1, UC_6.1–6.4 | Section `1:4286` (Desktop Login 7 states `1:4884`..`1:4431`, Mobile Login 3 states `1:4668`..`Hình 58`), Section `1:4195` (Danh sách 1:4196), Section `1:3161` (Tạo tài khoản 11 states `1:3162`..`1:4099`), Section `1:2359` (Sửa tài khoản 9 states `1:2360`..`1:3076`), Section `1:309` (Đổi mật khẩu 13 states `1:310`..`1:1664`), Section `1:1797` (Vô hiệu hóa 5 states `1:1798`..`1:2256`) | **48** | 48 states đã có component; tất cả visual-approved: NO. Login ban đầu `1:4884` là frame dùng chung Lane 1+2 và đã được duyệt |
| **Lane 3** | Danh mục, Giá & Sản phẩm | UC_7.1–7.9 | Section `1:30675` (Danh mục 17 states), Section `1:18584` (Thêm SP 6 states), Section `1:20601` (Giá 3 states), Section `1:22475` (Sửa SP 3 states), Section `1:23956` (Xóa SP 5 states), Section `1:25733` (Ngưỡng 9 states), Section `1:27939` (Tra cứu 3 states) | **46** | 17 YES (Danh mục FE-04), 29 NO; chưa visual-approved; wired-to-api: MOCK |
| **Lane 4** | Bán hàng & Hóa đơn | UC_2.1–2.2, UC_9 | Section `1:7886` (Bán lẻ 8 states `1:10533`..`1:9054`, Hóa đơn 3 states `1:8668`..`1:8916`, Bán sỉ & Duyệt giá 8 states `Hình 60`..`67`, `Hình 151`..`152`) | **21** | 1 PARTIAL (bán hàng demo xanh lá), 20 NO; chưa visual-approved |
| **Lane 5** | Tồn kho & Nhập hàng | UC_8.1–8.2, UC_4.1–4.4 | Section `1:40504` (Nhập hàng 9 states `1:40505`..`1:44312`), Section `1:29003` (Lịch sử nhập 7 states `1:29004`..`1:30616`), Section `1:34107` (Tra cứu tồn 8 states `1:34666`..`1:36320`, Điều chỉnh 6 states `Hình 87`..`92`, Cảnh báo 3 states `Hình 93`..`95`, Lịch sử tồn 4 states `Hình 96`..`99`) | **37** | 100% chưa code (37 NO), chưa visual-approved |
| **Lane 6** | Báo cáo, Đổi/trả & Duyệt từ xa | UC_5.1–5.2, UC_3.1–3.2, UC_9 | Section `1:48053` (Doanh thu 8 states `1:50619`..`1:48869`, Hàng bán/trả 7 states `1:51955`..`1:50557`), Section `1:45946` (Đổi hàng 10 states `Hình 70`..`79`), Section `1:44574` (Trả hàng 7 states `Hình 80`..`86`), Phê duyệt di động 3 states (`Hình 153`..`155`) | **35** | 100% chưa code (35 NO), chưa visual-approved |
| **TỔNG CỘNG** | **TOÀN BỘ HỆ THỐNG** | **28 Use Cases** | **15 Sections Figma Final + Đặc tả giao diện** | **195** | **73 YES, 1 PARTIAL, 121 NO; Duy nhất 1 frame visual-approved: YES** |

### Đối chiếu Hiện trạng Mã nguồn & Nghiệm thu Hình ảnh (4 nhóm rõ ràng)

1. **Đã triển khai và đã được duyệt hình ảnh (`implemented: YES`, `visual-approved: YES`): 1 frame**
   - STT 1 (`1:4884`): Đăng nhập desktop ban đầu (đã đối chiếu pixel/layout và được người dùng xác nhận đạt chuẩn).
2. **Đã có component trong code và chụp ảnh đối chiếu đầy đủ, đang chờ duyệt hình ảnh (`implemented: YES`, `visual-approved: NO`): 72 frames**
   - **Phạm vi Lane 1 (7 frames shell, menu và đăng xuất trong FE-02):**
     - STT 8–9 (2 frames): App Shell desktop cho OWNER `1:4458` (7 nhóm menu) và EMPLOYEE `1:4581` (2 nhóm menu cấp cao chuẩn Figma Final).
     - STT 13 (1 frame): Menu mobile toàn trang 390px `1:4841` (Hình 59, Bảng 84, dành cho OWNER).
     - STT 14–17 (4 frames): Desktop trước/sau đăng xuất (`1:48236`, `1:48058`) và Mobile trước/sau đăng xuất (`1:48110`, `1:48184`).
   - **Phạm vi Lane 2 (48 frames đối soát chi tiết trong FE-03):**
     - STT 2–7 (6 frames): Các trạng thái tương tác/lỗi của màn hình đăng nhập desktop (`1:4287`, `1:4331`, `1:4356`, `1:4380`, `1:4404`, `1:4431`).
     - STT 10–12 (3 frames): Đăng nhập mobile viewport 390×844 (`1:4668`, trống trường, sai thông tin).
     - STT 18–30 (13 frames): Toàn bộ trạng thái Section `1:309` Đổi mật khẩu (Modal nhân viên `1:310`, đã nhập `1:422`, thiếu thông tin `1:534`, sai pass cũ `1:649`, không khớp `1:761`, pass ngắn `1:872`, pass khoảng trắng `1:982`, trùng pass cũ `1:1097`, lỗi lưu `1:1207`, thành công `1:1321`, hủy `1:1406`, modal chủ cửa hàng `1:1517`, thành công `1:1664`).
     - STT 31 (1 frame): Section `1:4195` Danh sách nhân viên `1:4196` (bảng 3 nhân viên chuẩn).
     - STT 32–42 (11 frames): Toàn bộ trạng thái Section `1:3161` Tạo tài khoản (`1:3162`, `1:3252`, `1:3342`, `1:3435`, `1:3526`, `1:3617`, `1:3708`, `1:3798`, `1:3892`, `1:3999`, `1:4099`).
     - STT 43–51 (9 frames): Toàn bộ trạng thái Section `1:2359` Sửa tài khoản (`1:2360`, `1:2444`, `1:2528`, `1:2613`, `1:2698`, `1:2783`, `1:2871`, `1:2980`, `1:3076`).
     - STT 52–56 (5 frames): Toàn bộ trạng thái Section `1:1797` Vô hiệu hóa (`1:1798`, `1:1914`, `1:2020`, `1:2142`, `1:2256`).
     - Thêm 4 ảnh mobile responsive cho các màn tài khoản (danh sách, tạo, sửa, vô hiệu hóa) ở viewport 390×844.
   - **Phạm vi Lane 3 (17 frames Quản lý danh mục trong FE-04):**
     - STT 30 (1 frame): Section `1:30675` Danh sách danh mục `1:30676` (Bảng 9 danh mục sản phẩm chuẩn Hình 120, phân trang 10/trang, breadcrumb `Cửa hàng / Quản lý danh mục / Danh mục`).
     - STT 31–35 (5 frames): Toàn bộ trạng thái Section `1:30869` Thêm danh mục mới (Form modal trống `1:30870`, lỗi trống tên `1:31075`, lỗi trùng tên `1:31281`, lỗi lưu hệ thống `1:31487`, thành công `1:31696` sinh mã NH-0010).
     - STT 36–40 (5 frames): Toàn bộ trạng thái Section `1:31907` Xóa danh mục (Modal xác nhận `1:31908`, từ chối xóa vì còn sản phẩm `1:32110` kèm Banner vàng Node `1:32167`, lỗi không tìm thấy `1:32307`, lỗi hệ thống `1:32490`, thành công `1:32687` xóa Keo dán chuyên dụng).
     - STT 41–46 (6 frames): Toàn bộ trạng thái Section `1:32870` Sửa danh mục (Form modal mã readonly `1:32871`, tên không đổi `1:33080`, lỗi trống tên `1:33277`, lỗi trùng tên `1:33487`, lỗi cập nhật `1:33697`, thành công `1:33910` đổi tên thành Dụng cụ vệ sinh giày).
     - Thêm 1 ảnh responsive viewport 390×844 cho màn danh sách danh mục di động.
   - **Ghi chú về Lane 1 & Đăng xuất:** Toàn bộ 7 frame thuộc Lane 1 (STT 8–9 Shell OWNER/EMPLOYEE, STT 13 Menu mobile `1:4841`, STT 14–17 Đăng xuất desktop/mobile `1:48236`, `1:48058`, `1:48110`, `1:48184`) đã có component hoàn chỉnh và đã chụp ảnh đối soát thực tế đầy đủ trong phạm vi task FE-02, hiện đang ở trạng thái chờ reviewer duyệt hình ảnh (`visual-approved: NO`).
3. **Mới triển khai một phần (`implemented: PARTIAL`, `visual-approved: NO`): 1 frame**
   - STT 71 (`1:10533`): Bán lẻ · Chọn sản phẩm — Đang có UI bán hàng demo cũ trong `apps/web/app/(app)/sales/page.tsx` thuộc phạm vi FE-08.
4. **Chưa được triển khai (`implemented: NO`, `visual-approved: NO`): 121 frames**
   - 121 frames/states thuộc Lane 3 (29 frames sản phẩm, giá, ngưỡng), Lane 4 (20 frames, trừ 1:10533), Lane 5 (37 frames) và Lane 6 (35 frames) chưa có component hay route thực tế, sẽ được phát triển tuần tự từ FE-05 đến FE-11.

### Tổng hợp Hiện trạng Kết nối API (Wired to API)

Cột `wired-to-api` được định nghĩa nghiêm ngặt là trạng thái kết nối dữ liệu thật từ NestJS backend API:
- **`wired-to-api: YES` (10 frames):** Gồm 10 trạng thái đăng nhập desktop và mobile (`1:4884`, `1:4287`, `1:4331`, `1:4356`, `1:4380`, `1:4404`, `1:4431`, `1:4668`, lỗi rỗng di động, lỗi sai thông tin di động) kết nối trực tiếp với endpoint `POST /auth/login`.
- **`wired-to-api: PARTIAL` (6 frames):** Gồm 5 màn shell/menu (STT 8 Shell OWNER `1:4458`, STT 9 Shell EMPLOYEE `1:4581`, STT 13 Menu mobile `1:4841`, STT 14 Desktop trước đăng xuất `1:48236`, STT 16 Mobile trước đăng xuất `1:48110`) đọc auth state từ `localStorage` (chưa có endpoint `GET /auth/me`); và STT 71 UI bán hàng demo cũ (`1:10533`).
- **`wired-to-api: MOCK` (56 frames):** Gồm 39 trạng thái quản lý tài khoản Lane 2 (Đổi mật khẩu, Danh sách nhân viên, Tạo/Sửa/Vô hiệu hóa tài khoản) và 17 trạng thái quản lý danh mục Lane 3 hoạt động qua Mock Adapter đồng bộ `localStorage`.
- **`wired-to-api: NO` (123 frames):** Gồm STT 15 (`1:48058`) và STT 17 (`1:48184`) do luồng logout chỉ xóa session cục bộ `localStorage` rồi điều hướng `/login` (chưa gọi backend API đăng xuất); cùng 121 frames thuộc các chức năng chưa phát triển (Lane 3 sản phẩm/giá/ngưỡng, Lane 4 bán hàng, Lane 5 nhập hàng/kho, Lane 6 báo cáo/đổi trả).
- **Tổng kiểm đếm:** 10 (YES) + 6 (PARTIAL) + 56 (MOCK) + 123 (NO) = **195 frame/state** (100% khớp).

### Giải trình về 4 ảnh Baseline chụp thực tế

Trong khuôn khổ task phân tích FE-00, hệ thống đã chụp 4 ảnh baseline tĩnh nền tảng:
- `01_baseline_login_1440x900.png`: Chụp STT 1 (`1:4884`).
- `02_baseline_owner_shell_1440x900.png`: Chụp STT 8 (`1:4458` PARTIAL, bao gồm cả khung shell và vùng demo bán hàng).
- `03_baseline_employee_shell_1440x900.png`: Chụp STT 9 (`1:4581` PARTIAL, bao gồm khung shell nhân viên và vùng demo bán hàng).
- `04_baseline_sales_demo_1440x900.png`: Chụp cận cảnh STT 71 (`1:10533` PARTIAL, vùng bán hàng demo xanh lá).

**Lý do 8 states `implemented: YES` chưa chụp riêng trong đợt baseline này:**
- Các state STT 2, 3, 4, 5, 6, 7 là các trạng thái tương tác động (toggle nút con mắt, submit form rỗng để kích hoạt viền đỏ, hoặc gọi API thất bại để hiển thị banner lỗi đỏ 401).
- STT 14 là modal pop-up xuất hiện khi click nút Đăng xuất.
- STT 15 là trạng thái sau khi logout (màn hình hiển thị trùng với ảnh `01_baseline_login_1440x900.png`).
- Kịch bản baseline FE-00 tập trung ghi lại 4 góc nhìn tĩnh nền tảng đại diện cho toàn bộ hiện trạng ứng dụng trước khi chuyển đổi. Các state động, modal và validation lỗi này đã có component trong code và sẽ được chụp đối chiếu visual chi tiết trong các task chuyên biệt (Lane 1 và Lane 2).

---

## 3. Đề xuất Route Tree cho Lane 1 (Nhiệm vụ FE-01)

Nhằm tránh việc 6 thành viên cùng chỉnh sửa file đơn lẻ `apps/web/app/page.tsx`, Lane 1 cần chia nhỏ cấu trúc thư mục route trong Next.js App Router theo chuẩn phân quyền:

```text
apps/web/app/
├── (auth)/
│   └── login/
│       └── page.tsx                     # Màn hình đăng nhập (Desktop 1:4884 & Mobile 1:4668)
└── (app)/
    ├── layout.tsx                       # Shared Application Shell (Sidebar + Header + Breadcrumb + Guards)
    ├── page.tsx                         # Dashboard chuyển hướng mặc định theo Role
    ├── sales/                           # LANE 4: Bán hàng & Hóa đơn
    │   ├── page.tsx                     # Bán lẻ (Chọn món, giỏ hàng, thanh toán) (1:10533)
    │   ├── invoices/
    │   │   ├── page.tsx                 # Tra cứu hóa đơn (1:8668)
    │   │   └── [id]/page.tsx            # Chi tiết hóa đơn (1:8916)
    │   └── wholesale/
    │       └── page.tsx                 # Bán sỉ & Luồng xin phê duyệt giá (Hình 60–67)
    ├── catalog/                         # LANE 3: Danh mục & Sản phẩm
    │   ├── categories/
    │   │   └── page.tsx                 # Quản lý danh mục (1:30676)
    │   ├── products/
    │   │   ├── page.tsx                 # Tra cứu danh sách sản phẩm (1:27939)
    │   │   ├── new/page.tsx             # Thêm sản phẩm mới (1:18585)
    │   │   └── [id]/edit/page.tsx       # Chỉnh sửa sản phẩm (1:22475)
    │   ├── pricing/
    │   │   └── page.tsx                 # Cập nhật bảng giá bán & giá vốn (1:20601)
    │   └── thresholds/
    │       └── page.tsx                 # Thiết lập ngưỡng cảnh báo tồn (1:25733)
    ├── inventory/                       # LANE 5: Quản lý tồn kho
    │   ├── page.tsx                     # Tra cứu tồn kho & bộ lọc tình trạng tồn (1:34666)
    │   ├── adjust/
    │   │   └── page.tsx                 # Điều chỉnh số lượng tồn kho (Hình 87–92)
    │   ├── alerts/
    │   │   └── page.tsx                 # Xem danh sách cảnh báo tồn (Hình 93–95)
    │   └── history/
    │       └── page.tsx                 # Lịch sử biến động & điều chỉnh tồn (Hình 96–99)
    ├── purchases/                       # LANE 5: Quản lý nhập hàng
    │   ├── page.tsx                     # Màn hình quản lý nhập hàng (1:40505)
    │   ├── new/page.tsx                 # Tạo phiếu nhập hàng mới (1:40624)
    │   └── history/
    │       ├── page.tsx                 # Lịch sử các đợt nhập hàng (1:29004)
    │       └── [id]/page.tsx            # Chi tiết phiếu nhập hàng (1:29137)
    ├── accounts/                        # LANE 2: Quản lý tài khoản & Nhân viên (OWNER)
    │   ├── page.tsx                     # Danh sách nhân viên & phân quyền (Hình 113)
    │   ├── new/page.tsx                 # Thêm tài khoản nhân viên (Hình 114)
    │   └── [id]/edit/page.tsx           # Sửa tài khoản & Vô hiệu hóa (Hình 111, 117)
    ├── reports/                         # LANE 6: Thống kê & Báo cáo (OWNER)
    │   ├── revenue/
    │   │   └── page.tsx                 # Báo cáo doanh thu ngày/tháng (1:50619)
    │   └── units/
    │       └── page.tsx                 # Báo cáo số lượng bán & trả (1:51955)
    ├── returns/                         # LANE 6: Quản lý đổi trả
    │   ├── exchange/
    │   │   └── page.tsx                 # Quy trình đổi hàng (Hình 70–79)
    │   └── refund/
    │       └── page.tsx                 # Quy trình trả hàng & hoàn tiền (Hình 80–86)
    └── approvals/                       # LANE 4 & 6: Trung tâm phê duyệt (Desktop & Mobile)
        └── page.tsx                     # Danh sách yêu cầu phê duyệt giá/đổi trả (Hình 151–155)
```

---

## 4. Danh sách Shared Components cần Lane 1 tạo ở FE-01

1. **`components/ui/button.tsx`**: Button đa dạng variant theo Figma:
   - `primary`: Nền xanh Cobalt `#2563EB`, text trắng, hover `#1D4ED8`, border-radius 8px.
   - `secondary`: Nền trắng, border `#E2E8F0`, text slate-700.
   - `destructive`: Nền `#EF4444`, text trắng.
   - `ghost` / `link`: Nút không viền.
2. **`components/ui/input.tsx`**: Input text/number:
   - Chiều cao chuẩn 40px–44px, border-radius 8px, border `#E2E8F0`, focus ring `#2563EB`.
   - Trạng thái lỗi: Border đỏ `#EF4444`, icon cảnh báo, dòng thông báo lỗi bên dưới.
   - Hỗ trợ icon prefix (kính lúp search) và icon suffix (nút xóa, con mắt password).
3. **`components/ui/modal.tsx` / `dialog.tsx`**: Hộp thoại modal:
   - Overlay backdrop đen mờ `bg-slate-900/50`.
   - Card modal bo góc 12px, tiêu đề, nút đóng X, phân tách body & footer rõ ràng.
   - `ConfirmModal`: Hộp thoại xác nhận hủy/xóa/đăng xuất với hành động hủy hoặc tiếp tục.
4. **`components/ui/table.tsx`**: Bảng dữ liệu chuẩn:
   - Header bảng nền `#F8FAFC`, chữ hoa nhỏ xám `#64748B`, font-medium.
   - Dòng xen kẽ hoặc border đáy mỏng `#F1F5F9`, hover highlight nhẹ.
   - `TableEmpty`: Khối hiển thị khi không có dữ liệu (hình minh họa + thông báo tiếng Việt).
   - `TableSkeleton`: Loading skeleton dạng thanh mờ khi đang tải API.
5. **`components/ui/badge.tsx`**: Thẻ trạng thái tròn nhỏ:
   - Tồn kho: `OUT_OF_STOCK` (đỏ `#EF4444`), `LOW_STOCK` (cam `#F59E0B`), `AGED` (tím/vàng hổ phách), `IN_STOCK` (xanh ngọc `#10B981`).
   - Vai trò: `Chủ cửa hàng` (xanh Cobalt), `Nhân viên` (xám ghi).
   - Tài khoản: `Hoạt động` (xanh), `Đã vô hiệu hóa` (đỏ/xám).
6. **`components/ui/card.tsx`**: Thẻ chứa nội dung:
   - Nền trắng, viền `#E2E8F0`, bo góc 12px, padding 20px–24px.
7. **`components/ui/toast.tsx`**: Thông báo nổi góc màn hình (Thành công, Thất bại, Cảnh báo).
8. **`components/ui/pagination.tsx`**: Phân trang chuẩn gồm chọn số lượng dòng (10/20/50), nút trang trước/sau.
9. **`components/ui/tabs.tsx`**: Chuyển tab ngang (cho bộ lọc tình trạng tồn kho, kỳ báo cáo ngày/tháng).
