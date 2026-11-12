# Kế hoạch frontend KinKin POS — Huy và Khánh

Mốc đối chiếu: `main` merge `ff925b5` ngày 11/11/2026; cây frontend tương ứng `e20d959`. Kế hoạch này thay cách phân công sáu người cho đợt tiếp theo. Huy và Khánh cùng làm frontend; Antigravity triển khai theo task, Codex review độc lập, Huy tích hợp. Các khung FE-02, FE-03 và FE-04 để Huy nghiệm thu sau theo yêu cầu; không tính là đã duyệt hình ảnh.

## 1. Đối chiếu FigmaPlan với mã hiện tại

| Nhóm | Mã đã có | Cần làm |
|---|---|---|
| Nền chung / đăng nhập | AppShell, sidebar, header, mobile drawer và login đã có; FE-02/03 đã merge | Giữ hiện trạng, sau đó đối chiếu ảnh Figma và trạng thái vai trò; không khẳng định đã giống hoàn toàn |
| Tài khoản | Danh sách, tạo/sửa/vô hiệu hóa, mật khẩu có component; adapter mock | Chờ nghiệm thu FE-03; xác nhận đúng trạng thái và báo rõ không tạo tài khoản đăng nhập thật |
| Danh mục | Component danh sách/thêm/sửa/xóa và adapter mock đã có | Chờ nghiệm thu FE-04; FE-05 không được phụ thuộc vào giả định chưa thống nhất |
| Sản phẩm | Có route products/pricing/thresholds nhưng đang placeholder | FE-05: tra cứu, thêm, sửa, xóa, giá và ngưỡng theo UC_7.4–7.9 |
| Bán hàng / hóa đơn | Có route placeholder và `components/demo/legacy-sales-demo.tsx` | FE-08/09: thay UI demo, tạo hóa đơn, thanh toán mô phỏng, danh sách và chi tiết hóa đơn |
| Tồn kho / nhập hàng | Route hiện là placeholder | FE-06/07: tra cứu/cảnh báo/điều chỉnh và phiếu nhập/lịch sử |
| Báo cáo / đổi trả / phê duyệt | Chưa có màn hoàn chỉnh; route báo cáo có placeholder | FE-10/11: báo cáo, đổi/trả và phê duyệt theo nguồn được chọn |

Inventory hiện có 195 dòng, còn FigmaPlan liệt kê 476 **ứng viên** frame bao gồm trạng thái và bản trùng; chưa thể trừ hai con số để kết luận thiếu 281 màn. FigmaPlan là trích xuất cây, văn bản và một số kích thước; cần ảnh nguồn đúng node để duyệt visual, còn nghiệp vụ phải đối chiếu báo cáo/đặc tả UC. Các route trong FigmaPlan chỉ là đề xuất. Giữ Next.js, cấu trúc và route hiện có khi phù hợp.

## 2. Cách chia hai người

| Người | Phạm vi ưu tiên | File sở hữu |
|---|---|---|
| Huy | Tích hợp, shared UI/shell, FE-05 sản phẩm, FE-08/09 bán hàng, FE-11 đổi trả, FE-12 | `components/ui`, `components/shell`, `globals.css`, layout/menu; module catalog sản phẩm, sales/orders/returns; tài liệu chung |
| Khánh | FE-06 tồn kho, FE-07 nhập hàng, FE-10 báo cáo; sau đó FE-03 và hỗ trợ QA | `components/inventory`, `components/purchases`, `components/reports` và route/module tương ứng; adapter riêng |

Mỗi người chỉ sửa vùng của mình trong từng task. Route composition, menu, UI chung, file mock dùng chung và inventory do Huy điều phối qua PR riêng. Nếu cần đổi file chung, Khánh ghi yêu cầu trong bàn giao; không đồng thời sửa file đó. Đổi phân công bằng task cụ thể do Huy giao; hai người không sửa chung một worktree.

## 3. Task và phụ thuộc

| Thứ tự | Người | Task | Phạm vi / kết quả bàn giao | Phụ thuộc |
|---|---|---|---|---|
| T0 | Huy | Chuẩn hóa điểm khởi hành | Đối chiếu `main`/branch, tạo danh sách FigmaPlan ↔ inventory theo module, ghi bản trùng/chưa rõ; lấy ảnh các frame chuẩn; thống nhất hợp đồng mock sản phẩm và hóa đơn với Khánh | Không |
| T1 | Huy | FE-05A sản phẩm | Danh sách/tra cứu, thêm/sửa, dữ liệu sản phẩm; dùng nguồn `06`, node `1:18585`, `1:22475`, `1:27939` và trạng thái liên quan | T0 |
| T2 | Khánh | FE-06A tồn kho | Danh sách, tra cứu, bộ lọc, hết hàng/tồn lâu và cảnh báo theo `09`; fixture độc lập và có nhãn mock | T0; nhận contract sản phẩm |
| T3 | Huy | FE-05B giá/ngưỡng/xóa | Giá vốn, giá bán, ngưỡng và xóa theo UC_7.5/7.7/7.8; kiểm tra validation theo UC | T1 |
| T4 | Khánh | FE-06B điều chỉnh/lịch sử | Form điều chỉnh, xác nhận, lịch sử, lỗi/empty theo nguồn và UC_4; ghi API gap | T2 |
| T5 | Huy | FE-08 bán lẻ | Thay UI demo: chọn hàng, giỏ, số lượng, tiền mặt, QR chờ, thành công/lỗi. Ảnh Figma `07`, node `1:10533` và các state được chọn | Contract sản phẩm T1; T3 nếu cần giá |
| T6 | Khánh | FE-07 nhập hàng | Tạo phiếu, dòng hàng, xác nhận/lưu mô phỏng, lịch sử/chi tiết; `10`, UC_8.1/8.2 | T1, T4 |
| T7 | Huy | FE-09 hóa đơn/bán sỉ | Danh sách/tra cứu/chi tiết/in mô phỏng và bán sỉ; ghi rõ phê duyệt/QR chỉ mô phỏng | T5 |
| T8 | Khánh | FE-10 báo cáo | Ngày/tháng, doanh thu và lượng bán/trả, empty/error/thiếu giá vốn; `11`, bản chuẩn được chọn, ví dụ `1:51275` | T0; fixture báo cáo đã thống nhất |
| T9 | Huy | FE-11 đổi/trả/phê duyệt | Tra cứu hóa đơn, chọn hàng, các bước và trạng thái; đối chiếu UC_3.1/3.2/9 và `08`, `11`; section Huy giữ là biến thể cần phân loại | T7; cần chốt bản chuẩn |
| T10 | Huy + Khánh | FE-02/03/04 và FE-12 | Huy so shell/danh mục, Khánh so tài khoản; chụp ảnh desktop/mobile có thiết kế, regression role và luồng, cập nhật bảng visual/API gaps | Làm sau theo lịch Huy quyết định |

Mỗi task trên tách tiếp thành PR nhỏ theo nhóm màn hình; không coi toàn bộ trạng thái trong một file dài là một task bắt buộc hoàn thành trong một lần. Cột phụ thuộc là yêu cầu dữ liệu/giao diện, không buộc chờ nghiệm thu visual FE-02/03/04 trước T0. Đánh giá lại giả định và lỗi đã biết trước khi tái sử dụng.

## 4. Lịch dự kiến 2 tuần

Đây là lịch mục tiêu cho hai người có thời gian làm việc thường xuyên, không phải cam kết hoàn thành toàn bộ 476 ứng viên. Chốt tiến độ mỗi ngày; nếu chậm, ưu tiên kết thúc luồng chạy được và có ảnh thay vì tuyên bố xong toàn bộ.

| Ngày | Huy | Khánh | Mốc |
|---|---|---|---|
| 1 | T0, contract, chia node và ảnh | T0, đọc UC tồn kho, chuẩn bị fixture T2 | Chốt phạm vi và ownership |
| 2–3 | T1/T3 sản phẩm | T2/T4 tồn kho | Sản phẩm và tồn kho có UI mock để review |
| 4–5 | T5 bán lẻ | T6 nhập hàng | Review hai PR nhỏ, đồng bộ contract |
| 6–7 | T7 hóa đơn/bán sỉ | T8 báo cáo | Review theo trạng thái và ảnh |
| 8–9 | T9 đổi/trả/phê duyệt | Hỗ trợ kiểm tra và sửa lỗi lane Khánh | Luồng xuyên màn hình mock |
| 10 | T10 tích hợp, QA | T10 QA tài khoản và các module đã làm | Danh sách đạt/chưa đạt, kế hoạch phần còn lại |

Ưu tiên demo nếu quá tải: login/shell hiện có → sản phẩm → tồn kho → bán lẻ → nhập hàng → hóa đơn. Báo cáo, bán sỉ, đổi/trả và phê duyệt chuyển giai đoạn sau nếu chưa đủ thời gian; ghi cụ thể task và trạng thái chưa làm. Nghiệm thu FE-02/03/04 thực hiện khi Huy sắp xếp, không tự đánh dấu đạt.

## 5. Git và review hằng ngày

1. Mỗi người kiểm tra `git status`. Trên clone sạch: `git fetch origin`, `git switch main`, `git pull --ff-only origin main`, sau đó `git switch -c feat/<ten>-<task>`. Nếu có thay đổi chưa commit, giữ nguyên và nhờ kiểm tra trước khi đổi branch. Khi tạo task sau, lấy `main` mới nhất; không tiếp tục trên branch đã merge.
2. Antigravity đọc `AGENTS.md`, kế hoạch này, đúng file FigmaPlan module, node Figma và UC liên quan; báo `node → route/component → scenario → viewport`, file sửa, API thật/mock và ảnh app so với Figma. Không dựng route riêng cho mọi trạng thái lỗi.
3. Chạy `pnpm.cmd --filter web typecheck`, `pnpm.cmd --filter web build`, `git diff --check` và kiểm tra tương tác liên quan. Codex review diff, quyền, luồng, Figma và bằng chứng. Người làm sửa lỗi review rồi commit/push PR vào `main`; Huy merge sau khi CI xanh và review đạt. `main` là production: cân nhắc các phần chưa nghiệm thu trước từng merge.
4. Vercel Hobby có thể chặn deploy commit của Khánh. Không thay tác giả; Khánh kiểm tra local và CI, Huy review/merge PR rồi kiểm tra Production theo commit. Khi cần Preview trước merge, Huy có thể tạo branch tích hợp tạm bằng merge commit thật, kiểm tra quyền truy cập và CORS theo cấu hình hiện hành.
5. Báo cáo mỗi task: branch/base, node/UC, ảnh nguồn và ảnh app đúng viewport, các trạng thái đã/chưa làm, mock/API, kết quả kiểm tra, diff/status và điểm cần quyết định. Không đưa secret vào tài liệu hoặc commit.

## 6. Nguyên tắc nghiệm thu và vấn đề cần quyết định

- Figma quyết định hình thức; báo cáo/đặc tả quyết định nghiệp vụ, quyền và luồng. Nếu mâu thuẫn, ghi nguồn và hỏi Huy; không suy diễn từ tên frame.
- Chọn bản chuẩn cho báo cáo/phê duyệt trùng và section `Huy` trước T8/T9. Không tự chọn điều kiện đổi/trả 72 giờ, quy tắc giá vốn, mobile hoặc quyền từ một ví dụ.
- Baseline quan sát: desktop 1440×900, sidebar 224 px, header 72 px; login mobile có 390×844. Viewport khác lấy theo node; dùng ảnh cùng viewport và đợi font tải. Không suy ra toàn bộ màn có cùng kích thước.
- Thành công frontend gồm màn và trạng thái trong task, mô phỏng tái hiện được, ảnh đối chiếu, kiểm tra tương tác/build và Codex review. Chỉ đổi `visual-approved` khi Huy đã duyệt; ghi riêng UI/mock/API thật. Không tự tuyên bố QR, Zalo, tồn kho, in hoặc tài khoản đã tích hợp thật.
- Tài liệu FigmaPlan được chia sẻ trong `docs/figma-plan/`. Bản ngoài repo chỉ là bản nguồn cục bộ; khi làm việc nhóm dùng bản trên branch `main` mới nhất.
