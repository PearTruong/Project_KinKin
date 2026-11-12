# Làm Git cùng lúc mà dễ hợp nhất — chỉ frontend

> **Cập nhật:** Theo kế hoạch hai người, tạo branch mới từ `main` và mở PR về `main`; xem `docs/figma-plan/KE_HOACH_HUY_KHANH.md`. Các nhánh đích khác trong tài liệu này là quy trình cũ.

Áp dụng cho 6 lane ở `docs/TEAM_TASK_BOARD.md`. Hiện Huy là người duy nhất nhận task mới theo `docs/TEAM_RESTART_2026-11-11.md`; quy trình nhiều người bên dưới dùng lại khi Huy giao task. Một người = một clone riêng. Một task = một branch ngắn và một PR. Branch tích hợp chung là `feat/fe-01-foundation`; `main` chỉ nhận PR tổng sau khi frontend được nghiệm thu.

## Thành viên bắt đầu task

Mở PowerShell tại thư mục clone của mình:

```powershell
git status
git switch feat/fe-01-foundation
git pull --ff-only origin feat/fe-01-foundation
git switch -c feat/team-<ten-khong-dau>-<task-id>
```

Ví dụ `feat/team-van-fe-05`. Nếu `git status` có thay đổi chưa commit, dừng và nhờ agent kiểm tra trước khi đổi branch. Không dùng `git reset --hard` để xử lý vội.

## Trong lúc code

- Chỉ sửa thư mục lane. Nếu cần shared UI, shell, `globals.css`, `lib/api.ts`, API hoặc schema, ghi đề xuất cho Huy; Huy tạo thay đổi chung trước rồi mọi người cập nhật base.
- Commit nhỏ theo một chức năng hoặc cụm màn hình. Không trộn sửa format toàn repo, file cấu hình và tính năng của người khác.
- Chỉ dùng dữ liệu mock trong adapter có nhãn và ghi `docs/API_GAPS.md` qua Huy. Hoàn tất UI Figma không có nghĩa nghiệp vụ API đã xong.
- Trường hợp task phụ thuộc chưa merge: đọc Figma/đặc tả và chuẩn bị component độc lập; không đoán kiểu dữ liệu chung.

## Mở PR

Sau khi Antigravity làm xong và Codex đã review:

```powershell
pnpm.cmd --filter web typecheck
pnpm.cmd --filter web build
git diff --check
git status
git add <dung-file-cua-lane>
git commit -m "feat(fe-05): implement product views"
git push -u origin feat/team-van-fe-05
```

Mở PR trên GitHub: **base** `feat/fe-01-foundation`, **compare** branch của task. Điền mẫu PR, kèm ảnh Figma và ảnh app cùng viewport. `web-typecheck-build` sẽ chạy tự động. CI kiểm tra TypeScript và build web; Huy/Codex vẫn cần review hình ảnh, hành vi và quyền.

## Trước khi merge

1. Huy review đúng task, phạm vi file, screenshot và API gap. Chờ CI xanh trên commit mới nhất.
2. Nếu branch tích hợp đã thay đổi, bấm **Update branch** trong PR rồi chờ CI chạy lại. Nếu GitHub báo conflict, người sở hữu PR xử lý trên branch task với Huy hỗ trợ; không sửa trực tiếp branch tích hợp.
3. FE-02 và FE-03 đã merge qua PR #2 và #3; không merge lại các branch đó hoặc `preview/huy-khanh-fe-03`. Huy merge các PR tiếp theo theo phụ thuộc: FE-05 sau FE-04; FE-07 sau FE-05/06; FE-08 sau FE-05; FE-09 sau FE-08; FE-11 sau FE-08/09; FE-12 cuối cùng.
4. Sau merge, người tiếp theo kéo lại `feat/fe-01-foundation` rồi tạo branch mới. Không tiếp tục task mới trên branch PR đã merge.

## Thiết lập GitHub một lần bởi Huy

Nếu gói GitHub của repository cho phép, vào Settings → Rules → Rulesets (hoặc Branch protection), áp dụng cho `feat/fe-01-foundation` và `main`:

- Yêu cầu thay đổi qua Pull Request; ít nhất một review trước merge.
- Yêu cầu status check `web-typecheck-build` sau khi workflow đã chạy lần đầu.
- Không cho push trực tiếp hoặc force push vào hai branch này.
- Yêu cầu PR cập nhật với base mới nhất trước merge nếu tùy chọn có sẵn.

Chỉ bật **required status check** sau khi GitHub đã hiển thị check từ một PR thực tế. Repo hiện chưa có GitHub username của 6 người, nên chưa thêm `CODEOWNERS`; Huy phân reviewer thủ công cho từng PR.

Repo hiện là **private**. GitHub Free không cung cấp branch protection cho private repository; nếu Settings không cho bật ruleset, giữ repo private và áp dụng quy trình PR/CI bằng review thủ công của Huy. Không đổi repo thành public chỉ để bật rule vì `docs/reference/` chứa báo cáo gốc.

## Khi nào chuyển vào `main`?

Khi FE-12 xác nhận các màn/role đã tích hợp, Huy mở PR tổng từ `feat/fe-01-foundation` vào `main`. Kiểm tra frontend trên Vercel Preview theo đúng commit, rồi merge và xác nhận Production chạy commit mới. Backend Render và các API gap được theo dõi riêng; sprint này không sửa `apps/api/**` hay Prisma.
