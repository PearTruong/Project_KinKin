# Bắt đầu làm KinKin POS cùng nhóm 6 người

> **Cập nhật:** Nhóm hiện gồm Huy và Khánh. Quy trình và phân công mới tại `docs/figma-plan/KE_HOACH_HUY_KHANH.md` và `docs/figma-plan/BAT_DAU_KHANH.md` thay thế phân công sáu người bên dưới.

Tài liệu này dành cho Huy, Khánh, Vân, Trường, Khuê và Ngân. **Giai đoạn này chỉ làm frontend.** Hiện Huy là người duy nhất nhận task triển khai; các thành viên khác chờ Huy giao lại task cụ thể. Đọc `docs/TEAM_RESTART_2026-11-11.md` trước khi làm theo hướng dẫn sáu người bên dưới. Antigravity viết code; Codex review; Huy tích hợp. Quy trình branch và PR ở `docs/TEAM_GIT_WORKFLOW.md`.

## 1. Project đang ở đâu?

Tại mốc 11/11/2026, branch frontend `feat/fe-01-foundation` đã gom FE-02 qua PR #2 và FE-03 của Khánh qua PR #3, ở commit `eb3652f`. `main` chưa chứa loạt task frontend này. FE-00 đã kiểm kê Figma; FE-01 có route và nền UI; FE-04 có màn danh mục với mock adapter. FE-05 đến FE-11 chưa hoàn thành. Chỉ frame đăng nhập desktop ban đầu được đánh dấu `visual-approved: YES`; merge code không đổi trạng thái này. Xem `docs/TEAM_RESTART_2026-11-11.md` và `docs/TEAM_TASK_BOARD.md`.

Nghiệp vụ lấy từ báo cáo và đặc tả. Hình thức lấy từ [Figma Final](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8/Final?node-id=0-1). `docs/FIGMA_SCREEN_INVENTORY.md` liệt kê frame; `docs/REPORT_FIGMA_TRACEABILITY.md` ánh xạ Use Case; `docs/API_GAPS.md` ghi endpoint còn thiếu. Code hiện có không đồng nghĩa đã đúng Figma hay đã nối API thật.

## 2. Cài lần đầu trên Windows

1. Cài Git và Node.js 22 trở lên. Đăng nhập GitHub trong Git Credential Manager nếu repo yêu cầu.
2. Mở Command Prompt hoặc PowerShell tại thư mục muốn chứa project rồi chạy:

```powershell
git clone --branch feat/fe-01-foundation https://github.com/0x27D/kinkin-pos-demo.git kinkin-pos-demo
cd kinkin-pos-demo
cmd /c scripts\setup-team.cmd
```

3. Git LFS cần được cài cùng Git để tải báo cáo và đặc tả gốc trong `docs/reference/`. Script sẽ tải các file này, cài `pnpm@11.25.0` nếu máy chưa có, cài dependencies, tạo Prisma Client cho API local và tạo file `.env` từ bản mẫu khi chưa tồn tại. File `.env` chỉ chứa cấu hình demo local; không commit file này.
4. Chạy project bằng `cmd /c scripts\start-team.cmd`. Mở `http://localhost:3000`. API ở `http://localhost:4000/api`.

PowerShell có thể chặn `pnpm.ps1`; các script dùng `pnpm.cmd` để tránh lỗi Execution Policy mà không đổi chính sách máy. Khi cần chạy lệnh thủ công trong PowerShell, dùng `pnpm.cmd`, ví dụ `pnpm.cmd typecheck`.

## 3. Mở agent lần đầu

Dán nguyên prompt này vào một chat mới của GPT/Codex hoặc Antigravity, trong thư mục repo đã clone:

```text
Đọc AGENTS.md, docs/TEAM_START_HERE.md, docs/TEAM_TASK_BOARD.md,
docs/ANTIGRAVITY_FRONTEND_TASKS.md, docs/REPORT_FIGMA_TRACEABILITY.md,
docs/FIGMA_SCREEN_INVENTORY.md và docs/API_GAPS.md.
Trước khi nhận task, hãy hỏi tôi là Huy, Khánh, Vân, Trường, Khuê hay Ngân
nếu tôi chưa nói tên trong chat này. Sau đó chỉ trình bày lane, task hiện tại,
phụ thuộc và phạm vi file của tôi. Kiểm tra git status và branch.
Chưa sửa code cho đến khi xác định được task được giao.
```

Agent sẽ hỏi tên. Bạn trả lời tên của mình, rồi yêu cầu: `Bắt đầu task [mã task] trong bảng việc. Đọc Figma và báo cáo trước khi code.` Nếu agent không đọc được Figma hoặc file báo cáo, báo rõ nguồn thiếu; không tự đoán thiết kế/nghiệp vụ.

## 4. Một vòng làm việc

1. Đọc task của mình và phụ thuộc trong `docs/TEAM_TASK_BOARD.md`. Task bị chặn thì chỉ chuẩn bị ảnh Figma, mapping, API gap trong phạm vi lane; chưa sửa code phụ thuộc.
2. Tạo branch từ base frontend mới nhất bằng hướng dẫn trong bảng việc. Mỗi task một branch. Không cùng sửa trên branch của người khác.
3. Giao Antigravity đúng một task. Agent phải đọc frame Figma và Use Case, giới hạn file, báo API thật hay mock, chụp ảnh ở viewport tương ứng.
4. Gửi cho Codex: mã task, branch, `git status`, `git diff`, ảnh app và Figma, kết quả kiểm tra, API gap. Codex review cụ thể. Antigravity sửa các lỗi được chỉ ra.
5. Sau khi reviewer chấp nhận, commit và push branch; mở PR về base frontend. Huy kiểm tra CI, xung đột và hợp nhất theo `docs/TEAM_GIT_WORKFLOW.md`. Không push trực tiếp `main` hoặc `feat/fe-01-foundation`.

Prompt giao code mẫu:

```text
Tôi là [TÊN]. Thực hiện [TASK ID] trong docs/TEAM_TASK_BOARD.md.
Đọc AGENTS.md, Use Case tương ứng, docs/CONTRACTS.md, Figma node và
đặc tả giao diện trước. Chỉ sửa phạm vi file của lane tôi. Làm đủ trạng thái
được vẽ; phân biệt API thật và mock. Chụp ảnh app cùng viewport với Figma.
Chạy kiểm tra liên quan và git diff --check. Gửi diff, git status, ảnh,
các sai khác còn lại. Dừng để Codex review trước khi commit/push.
```

Prompt review mẫu:

```text
Tôi là [TÊN], cần review [TASK ID] trên branch [BRANCH].
Kiểm tra diff, AGENTS.md, docs/TEAM_TASK_BOARD.md, Use Case, Figma node,
ảnh cùng viewport, role, API thật/mock và lỗi. Chỉ ra lỗi theo file/dòng,
cho biết đạt hay chưa đạt. Chưa sửa code trừ khi tôi yêu cầu.
```

## 5. Khi gặp lỗi

- `pnpm` bị PowerShell chặn: dùng `pnpm.cmd` hoặc `cmd /c scripts\start-team.cmd`.
- Port 3000/4000 bận: đóng phiên dev cũ trước khi chạy lại.
- Login local chậm/lỗi: xem API local có chạy ở port 4000 và `.env.local` web trỏ `http://localhost:4000/api`.
- Trang có route nhưng chỉ là placeholder: xem trạng thái task; route tồn tại chưa có nghĩa màn đã triển khai.
- Cần sửa file chung (`globals.css`, shell, UI chung, API contract): báo Huy trước để tránh xung đột.

## 6. Tài liệu cần đọc theo thứ tự

`TEAM_TASK_BOARD.md` → task của mình trong `ANTIGRAVITY_FRONTEND_TASKS.md` → `REPORT_FIGMA_TRACEABILITY.md` → `FIGMA_SCREEN_INVENTORY.md` → file gốc tương ứng trong `docs/reference/` → Figma frame → source của lane. `FRONTEND_6_PERSON_PLAN.md` là kế hoạch tổng, còn `SOLO_EXECUTION_PLAN.md` là lịch sử giai đoạn một người.
