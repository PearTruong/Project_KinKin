# Mốc gom frontend và cách làm việc tạm thời

**Cập nhật 11/11/2026.** Branch tích hợp là `feat/fe-01-foundation`, hiện ở commit `eb3652f`. `main` vẫn ở mốc FE-00 `4176a8b`. Không lấy branch Preview làm nguồn code và không merge vào `main` trước khi FE-12 nghiệm thu.

## Đã gom những gì?

| Nguồn | Commit/PR | Có trong branch tích hợp | Mức hoàn thành |
|---|---|---|---|
| FE-01 nền route, FE-04 danh mục, hướng dẫn nhóm và CI | Lịch sử trước `e1e4784` | Có | Code đã có; FE-04 chưa duyệt hình ảnh, dùng mock |
| Huy, FE-02 shell/menu/logout | PR #2, merge `c1c2a8d` | Có | Code và CI đã review; các frame FE-02 chưa được đánh dấu visual-approved |
| Khánh, FE-03 tài khoản | PR #3, merge `eb3652f` | Có | Code và CI đã review; cần nghiệm thu hình ảnh/role; tài khoản dùng mock |

`feat/fe-00-inventory` là nhánh cũ đã được xử lý ở FE-00. `preview/huy-khanh-fe-03` chỉ là bản Preview tạm để vượt hạn chế tác giả commit trên Vercel Hobby; thay đổi của Khánh đã được merge từ branch gốc qua PR #3. Chưa có branch bàn giao của Vân, Trường, Khuê hoặc Ngân. Không gọi các task FE-05 đến FE-11 là đã hoàn thành.

## Chế độ làm việc hiện tại

Huy là **người duy nhất nhận task triển khai và tích hợp** cho đến khi Huy giao lại bằng tên task và phạm vi file. Khánh, Vân, Trường, Khuê, Ngân tạm dừng code/push; việc họ đã làm vẫn được giữ trong lịch sử Git. Không suy ra một người đang tiếp tục làm chỉ vì lane còn được ghi trong bảng phân công.

1. Huy chọn **một task frontend** trong `docs/TEAM_TASK_BOARD.md`, ưu tiên chốt visual FE-02/03/04 hoặc FE-05 làm nguồn sản phẩm cho các lane sau. Đọc Figma Final, đặc tả màn hình, Use Case và inventory trước khi giao code.
2. Từ `feat/fe-01-foundation` mới nhất, tạo branch ngắn `feat/team-huy-<task>` trong clone/worktree sạch. Không làm tiếp trên branch đã merge, không sửa ở worktree Preview.
3. Giao Antigravity đúng task, node Figma, viewport, Use Case, phạm vi file, mock/API gap và tiêu chí ảnh. Antigravity gửi `git diff`, `git status`, ảnh app cùng viewport và kết quả kiểm tra.
4. Codex review mã, luồng, quyền, Figma và đặc tả; ghi lỗi cần sửa. Chỉ sau khi đủ bằng chứng mới đổi `visual-approved` sang `YES`. Code merge không tự động có nghĩa đã nghiệm thu visual hoặc API.
5. Huy commit/push branch đã review, mở PR về `feat/fe-01-foundation`, xem CI rồi merge. Giữ `main` ở FE-00 cho đến FE-12. Nếu Vercel Hobby chặn commit của người khác, kiểm tra bằng local/GitHub CI; Huy tạo **merge commit thật** qua PR để Preview chạy, không đổi tên/email tác giả commit của thành viên.

Các bước này chỉ áp dụng cho frontend. Mọi endpoint tài khoản/danh mục còn mock tiếp tục ghi trong `docs/API_GAPS.md`; không sửa `apps/api/**` hoặc Prisma trong task FE.

## Khi cho thành viên quay lại

Huy giao một task đang mở kèm branch base, danh sách file, Figma node, Use Case và phụ thuộc. Thành viên dùng clone riêng, tạo branch mới từ `feat/fe-01-foundation`, gửi bằng chứng cho Codex review rồi mở PR. Huy là người merge theo thứ tự phụ thuộc trong `docs/TEAM_GIT_WORKFLOW.md`. Chỉ có một người sửa mỗi file dùng chung tại một thời điểm; việc cần đổi shell, route composition, CSS chung hoặc contract phải báo Huy trước.

Trước khi nhận task mới, mỗi agent đọc tài liệu này, `docs/TEAM_TASK_BOARD.md` và `git status`. Nếu chưa biết người đang dùng agent là ai thì hỏi tên. Huy có thể giao lại lane cho từng người; agent chỉ làm task được giao trong cuộc chat hiện tại.
