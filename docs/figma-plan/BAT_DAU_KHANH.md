# Khánh bắt đầu làm frontend

Khánh phụ trách tồn kho, nhập hàng và báo cáo. Đầu tiên chuẩn bị **T2 / FE-06A tồn kho** theo `KE_HOACH_HUY_KHANH.md`. T0 là bước Huy chốt nguồn và hợp đồng dữ liệu sản phẩm; trong lúc chờ, Khánh có thể đọc Figma/UC, xác định trạng thái và đề xuất fixture. Chưa tự chốt cấu trúc dữ liệu chung hoặc báo UI đã nghiệm thu.

## Cập nhật máy đã clone

Mở PowerShell trong thư mục project của Khánh:

```powershell
git status
```

Nếu có file chưa commit, giữ lại và nhờ agent kiểm tra trước khi đổi branch. Nếu sạch, chạy từng dòng:

```powershell
git fetch origin
git switch main
git pull --ff-only origin main
git switch -c feat/khanh-t2-inventory
```

Nếu branch `feat/khanh-t2-inventory` đã tồn tại, dừng và nhờ agent kiểm tra, không xóa hoặc ghi đè. Kiểm tra `git status` và `git log -1 --oneline`; mốc phải chứa PR tài liệu kế hoạch hai người. Nếu chưa clone project, dùng hướng dẫn cài đặt trong `docs/TEAM_START_HERE.md`, sau đó cập nhật `main` như trên.

## Prompt đầu tiên cho Antigravity

```text
Tôi là Khánh. Đọc AGENTS.md, docs/figma-plan/KE_HOACH_HUY_KHANH.md,
docs/figma-plan/BAT_DAU_KHANH.md, docs/figma-plan/09 · Tồn kho và cảnh báo.md,
docs/REPORT_FIGMA_TRACEABILITY.md, docs/FIGMA_SCREEN_INVENTORY.md và
đặc tả UC_4 tương ứng trong docs/reference/.

Kiểm tra git status, branch, commit và source code hiện tại. Bắt đầu T2 / FE-06A
ở giai đoạn chuẩn bị: liệt kê trạng thái tồn kho/cảnh báo, Figma node, viewport,
Use Case, route, file dự kiến, ảnh nguồn cần lấy và mock/API gap. Đề xuất cấu trúc
fixture sản phẩm để Huy thống nhất. Không thay shell, global CSS hay module của Huy.
Khi chưa có contract sản phẩm từ Huy, dừng trước phần code phụ thuộc contract;
có thể chuẩn bị phần độc lập nếu phạm vi và dữ liệu đã rõ. Báo điểm chưa rõ,
git status và kết quả để Codex review.
```

Sau khi Huy chốt contract, giao Antigravity triển khai T2 theo plan, chụp ảnh app và Figma cùng viewport, chạy `pnpm.cmd --filter web typecheck`, `pnpm.cmd --filter web build`, `git diff --check`, rồi gửi Codex review. Sau review, commit/push branch và mở PR vào `main` để Huy tích hợp. Vercel Hobby có thể chặn Preview của commit Khánh; vẫn gửi kết quả local/CI và nhờ Huy xử lý Preview theo kế hoạch.
