# Task giao Antigravity — chuyển Figma Final sang frontend KinKin POS

> **Chế độ nhóm hiện tại:** xem phân công theo tên và review/commit tại `docs/TEAM_TASK_BOARD.md`. Quy tắc giao việc nhóm ở đó được ưu tiên hơn lịch sử quy trình solo bên dưới.

Nguồn: `docs/FRONTEND_6_PERSON_PLAN.md`, `docs/REPORT_FIGMA_TRACEABILITY.md`, báo cáo/đặc tả trong `../2. Phân tích và thiết kế hệ thống`, Figma Final file key `5RdlpDu7V3VZLrJ9xWu3U8`.

## Quy ước giao và nhận

Antigravity là người code chính. Codex là reviewer độc lập: kiểm tra diff, mapping Use Case/Figma, screenshot, role, API contract, test và build. Antigravity **không tự commit/push**; sau mỗi task gửi báo cáo cùng `git status`, danh sách file, ảnh so sánh và điểm chưa đạt. Codex review, yêu cầu sửa hoặc commit/push khi người dùng yêu cầu.

Chỉ màn đăng nhập desktop được xem là đã đúng Figma. Phần còn lại là UI demo cần thay. Không xóa API/schema/logic giao dịch để thay giao diện.

## Hàng đợi task và phụ thuộc

| ID | Lane | Task | Phụ thuộc | Đầu ra kiểm được |
|---|---:|---|---|---|
| FE-00 | 1+6 | Inventory mọi frame Figma, route/state/role/Use Case và chụp baseline UI hiện tại | Không | `FIGMA_SCREEN_INVENTORY.md`, `API_GAPS.md`, ảnh baseline ngoài repo |
| FE-01 | 1 | Tách `app/page.tsx` thành route/composition; giữ login hoạt động; thiết lập design tokens, component contracts | FE-00 | Route skeleton, không còn sáu người cùng sửa một file |
| FE-02 | 1 | Dựng lại App Shell desktop/mobile, sidebar/header/breadcrumb/menu theo Figma; logout | FE-01 | OWNER/EMPLOYEE visual-approved |
| FE-03 | 2 | Mobile login, tài khoản list/create/edit/disable/change password và các state | FE-01, FE-02 | Section UC_1/UC_6 visual-approved |
| FE-04 | 3 | Danh mục list/add/edit/delete | FE-01, FE-02 | UC_7.1–7.3 visual-approved |
| FE-05 | 3 | Sản phẩm add/edit/delete/search, giá/ngưỡng | FE-04 | UC_7.4–7.9 visual-approved |
| FE-06 | 5 | Tồn kho: tra cứu, điều chỉnh, cảnh báo, lịch sử | FE-01, FE-02 | UC_4.1–4.4 visual-approved |
| FE-07 | 5 | Nhập hàng mới và lịch sử/chi tiết | FE-05, FE-06 | UC_8.1–8.2 visual-approved |
| FE-08 | 4 | Bán lẻ: chọn hàng, giỏ, thanh toán, kết quả | FE-01, FE-02, FE-05 | UC_2.1 visual-approved, UI demo xanh lá bị thay |
| FE-09 | 4 | Tra cứu/chi tiết/in hóa đơn và bán sỉ theo frame | FE-08 | UC_2.2 và frame bán sỉ visual-approved |
| FE-10 | 6 | Báo cáo doanh thu, số lượng bán/trả | FE-01, FE-02 | UC_5.1–5.2 visual-approved |
| FE-11 | 6 | Đổi/trả, phê duyệt tại quầy/Zalo theo frame | FE-08, FE-09 | UC_3.1/3.2/9 visual-approved, gap API ghi rõ |
| FE-12 | 6+1 | Visual QA toàn bộ inventory, role/regression E2E, loại UI demo khỏi điều hướng, kiểm tra mobile | FE-02..11 | Mọi frame có trạng thái, ảnh đối chiếu, checklist release |

FE-03, FE-04, FE-06, FE-08, FE-10 có thể chạy song song sau FE-02 nếu mỗi lane giữ đúng thư mục. Nếu chỉ một phiên Antigravity, làm tuần tự theo ID và đóng review gate sau mỗi task.

## Prompt chung gắn vào mọi task FE-02..FE-11

```text
Bạn là người triển khai frontend KinKin POS. Task hiện tại: [ID].
Đọc docs/FRONTEND_6_PERSON_PLAN.md, docs/REPORT_FIGMA_TRACEABILITY.md, docs/CONTRACTS.md và phần báo cáo/đặc tả liên quan. Mở trực tiếp từng frame Figma Final được task chỉ định, lấy design context và screenshot. Figma quyết định hình thức; báo cáo quyết định hành vi, role và dữ liệu.

Chỉ sửa thư mục lane được giao. Không tái sử dụng UI demo làm mẫu thiết kế. Giữ API và logic nghiệp vụ hiện hữu. Nếu endpoint thiếu, tạo adapter/fixture tách biệt, ghi vào API_GAPS.md, không báo màn đó đã nối API thật.

Làm đủ các trạng thái được vẽ: ban đầu, loading, empty, validation, lỗi server, thành công, desktop và mobile khi có frame. Asset phải lưu local, không dùng URL Figma tạm hoặc emoji thay icon. Screenshot app cùng viewport với Figma, ghi sai khác cụ thể rồi chỉnh tiếp.

Chạy pnpm typecheck, pnpm test và pnpm build; test tương tác phù hợp. Báo file thay đổi, frame ↔ component, trạng thái, API thật/mock, kết quả kiểm tra, ảnh đối chiếu, sai khác còn lại và git status. Dừng trước commit/push để Codex review.
```

## Prompt đầu tiên — FE-00

```text
Thực hiện FE-00: kiểm kê toàn bộ Figma Final và baseline frontend KinKin POS. Đây là task phân tích, chưa sửa UI.

Figma: https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8/Final?node-id=0-1
Nguồn nghiệp vụ: báo cáo, đặc tả và docs/REPORT_FIGMA_TRACEABILITY.md.

1. Liệt kê toàn bộ section/frame Figma, node ID, tên trạng thái, viewport và nhóm chức năng. Không chỉ chọn các frame đã có trong backlog solo.
2. Ánh xạ mỗi frame với Use Case, role, route dự kiến, lane FE-02..FE-11 và trạng thái API hiện có/thiếu.
3. Tạo docs/FIGMA_SCREEN_INVENTORY.md dạng bảng có cột: section, frame, viewport, UC, role, route, lane, implemented, visual-approved, wired-to-api.
4. Tạo docs/API_GAPS.md dựa trên API đang có; mỗi gap ghi endpoint mong đợi, request/response, màn phụ thuộc, mức ưu tiên. Không tự sửa backend.
5. Chạy web hiện tại, chụp baseline login, OWNER shell, EMPLOYEE shell và trang bán hàng tại 1440×900; lưu ảnh ở thư mục tạm ngoài repo. Mô tả lệch Figma, không tuyên bố khớp nếu chưa so ảnh.
6. Đề xuất route tree và danh sách shared component cần lane 1 tạo ở FE-01.
7. Không commit, không push. Báo các file tạo, số frame kiểm kê, số API gap, ảnh baseline và git status. Dừng để Codex review.
```

## Checklist Codex review sau mỗi task

1. Đối chiếu phạm vi file với lane, giữ thay đổi ngoài phạm vi của người khác.
2. Mở frame Figma đúng node và so screenshot app cùng viewport; kiểm tra nhãn, layout, màu, font, icon, states.
3. So hành vi, role và validation với báo cáo; kiểm tra API thật hoặc gap/fixture được ghi trung thực.
4. Xem `git diff --check`, file tạm, đường dẫn máy cá nhân, URL Figma tạm, secret.
5. Chạy typecheck, test, build và luồng tương tác quan trọng.
6. Gửi lỗi cụ thể theo mức độ; yêu cầu Antigravity sửa rồi review lại. Chỉ commit/push khi được người dùng yêu cầu và gate đạt.
