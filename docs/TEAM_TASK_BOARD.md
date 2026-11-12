# Bảng việc frontend KinKin POS — 6 người

> **Lịch sử:** Phân công hiện hành là kế hoạch hai người tại `docs/figma-plan/KE_HOACH_HUY_KHANH.md`; bảng dưới giữ để tra cứu task FE cũ.

**Snapshot:** 11/11/2026, branch `feat/fe-01-foundation` đã gom FE-02 và FE-03 ở `eb3652f`. Trước mỗi buổi làm, agent phải đọc `git status`, `git log -1`, bảng này và `docs/TEAM_RESTART_2026-11-11.md`. Hiện chỉ Huy nhận task mới; tên trong bảng là chủ sở hữu lane khi Huy giao việc trở lại. Code đã viết, ảnh đã chụp, visual approved và API thật là các tiêu chí riêng.

## Phân công cố định

| Người | Lane | Sở hữu chính | Task |
|---|---:|---|---|
| **Huy** | 1 | `apps/web/components/shell/**`, `apps/web/components/ui/**`, `apps/web/app/globals.css`, route composition, docs tích hợp | FE-02, FE-12, review/merge các lane |
| **Khánh** | 2 | `apps/web/components/auth/**`, `apps/web/components/accounts/**`, `apps/web/app/(app)/accounts/**`, `apps/web/app/(auth)/**`, `apps/web/lib/accounts-adapter.ts` | FE-03 hoàn thiện và nghiệm thu |
| **Vân** | 3 | `apps/web/components/catalog/**`, `apps/web/app/(app)/catalog/**`, adapter catalog của lane | FE-04 nghiệm thu, FE-05 |
| **Trường** | 4 | `apps/web/components/sales/**`, `apps/web/components/orders/**`, `apps/web/app/(app)/sales/**`, `apps/web/app/(app)/orders/**` | FE-08, FE-09 |
| **Khuê** | 5 | `apps/web/components/inventory/**`, `apps/web/components/purchases/**`, `apps/web/app/(app)/inventory/**`, `apps/web/app/(app)/purchases/**` | FE-06, FE-07 |
| **Ngân** | 6 | `apps/web/components/reports/**`, `apps/web/components/returns/**`, `apps/web/app/(app)/reports/**`, route đổi/trả, `e2e/**` | FE-10, FE-11, hỗ trợ FE-12 QA |

Sprint 6 người chỉ làm frontend. Không sửa `apps/api/**` hoặc Prisma. `docs/CONTRACTS.md`, menu/shell, shared UI và biến môi trường do Huy điều phối. Người khác chỉ sửa sau khi Huy giao rõ file/task. Mỗi người có thể đọc toàn repo và góp ý cho người khác bằng review, nhưng không tự sửa lane của họ.

## Tình trạng thực tế

| Task | Người | Trạng thái tại snapshot | Việc tiếp theo |
|---|---|---|---|
| FE-00 | Huy | Đã có inventory và API gaps; tài liệu còn cần cập nhật theo tiến độ | Duy trì inventory, không làm lại từ đầu |
| FE-01 | Huy | Route foundation đã commit; nhiều route vẫn là placeholder | Giữ làm base cho 6 lane |
| FE-02 | Huy | Code đã merge qua PR #2 (`c1c2a8d`); chưa visual approved | So Figma OWNER/EMPLOYEE, mobile drawer, logout; sửa sai khác và chốt nghiệm thu hình ảnh |
| FE-03 | Khánh | Code bổ sung đã merge qua PR #3 (`eb3652f`); mock adapter; chưa visual approved | Review ảnh so Figma, sửa lỗi, xác nhận role và API gap; Huy nhận task nếu Khánh chưa thể làm |
| FE-04 | Vân | 17 state danh mục có component; mock adapter; build syntax đã sửa; chưa visual approved | Review ảnh so Figma, sửa lỗi và chốt FE-04 |
| FE-05 | Vân | Chưa triển khai; route sản phẩm là placeholder | Bắt đầu sau khi FE-04 được review đủ để ổn định catalog |
| FE-06 | Khuê | Chưa triển khai; route tồn kho là placeholder | Có thể bắt đầu sau khi Huy chốt contract shell; mock/fixture phải ghi rõ |
| FE-07 | Khuê | Chưa triển khai | Chờ FE-05 và FE-06 |
| FE-08 | Trường | Chưa triển khai; route bán hàng là placeholder, UI demo nằm ở `components/demo` | Chuẩn bị Figma/UC ngay; code phụ thuộc FE-05 |
| FE-09 | Trường | Chưa triển khai | Chờ FE-08 |
| FE-10 | Ngân | Chưa triển khai; route báo cáo là placeholder | Có thể bắt đầu dựng UI theo Figma và API gap |
| FE-11 | Ngân | Chưa triển khai | Chờ FE-08 và FE-09 |
| FE-12 | Huy + Ngân | Chưa bắt đầu | Tích hợp và visual QA sau FE-02..FE-11 |

Theo `docs/FIGMA_SCREEN_INVENTORY.md` tại mốc gom code có **195 frame/state**, **73 YES code, 1 PARTIAL, 121 NO**, và **chỉ 1 visual approved**. Đây là số liệu inventory, chưa được tự động kiểm chứng lại từng frame sau mỗi commit. FE-03/04 chủ yếu là frontend mock, chưa phải chức năng nghiệp vụ hoàn chỉnh.

## Task card theo người

### Huy — FE-02 và FE-12

- **FE-02:** đối chiếu shell OWNER `1:4458`, EMPLOYEE `1:4581`, desktop/mobile menu và logout `1:48236`, `1:48058`, `1:48110`, `1:48184`; kiểm tra không có menu sai route/trùng mục; chụp 1440×900 và 390×844. Chỉ sửa shell/UI chung và route composition. Sau review, cập nhật inventory.
- **FE-12:** sau khi các lane bàn giao, so toàn bộ inventory với Figma, kiểm tra OWNER/EMPLOYEE, responsive, loại demo khỏi đường điều hướng, tích hợp PR, rà API gaps và xác nhận frontend Preview/Production. Huy quyết định việc nào là frontend complete và việc nào còn backend.

### Khánh — FE-03

- So login desktop/mobile, danh sách/tạo/sửa/vô hiệu hóa tài khoản, đổi/đặt lại mật khẩu với các node trong inventory và Hình 53–58, 107–119. Đặc biệt giữ login desktop ban đầu đã được duyệt.
- Kiểm tra quyền OWNER/EMPLOYEE, validation, empty/loading/error/success. `accounts-adapter.ts` là mock: không tuyên bố tài khoản tạo trong UI có thể đăng nhập qua API thật.
- Bàn giao ảnh từng state còn lệch, diff, API gap và cập nhật inventory khi reviewer duyệt.

### Vân — FE-04 rồi FE-05

- **FE-04:** rà 17 state danh mục, add/edit/delete/search, validation và modal theo UC_7.1–7.3; so Figma cùng viewport; kiểm tra mock/role; chốt review.
- **FE-05:** sản phẩm list/search/add/edit/delete, giá vốn/giá bán, ngưỡng cảnh báo và các state UC_7.4–7.9; node bắt đầu `1:18585`, `1:20601`, `1:22475`, `1:23956`, `1:25733`, `1:27939`. Không sửa `globals.css`/shell. Giao contract/fixture sản phẩm cho Trường và Khuê qua Huy trước khi họ dùng.

### Trường — FE-08 rồi FE-09

- **Chuẩn bị ngay:** đọc UC_2.1/2.2, frame bán lẻ `1:10533` và chuỗi thanh toán/hóa đơn; liệt kê component, trạng thái và API gaps. Không sửa code phụ thuộc catalog trước khi FE-05 chốt contract.
- **FE-08:** thay màn bán hàng demo bằng Figma: chọn hàng, giỏ, số lượng, tiền mặt/chuyển khoản giả lập, QR chờ, thành công/lỗi thiếu tồn. Tiền và tồn phải dựa vào API theo báo cáo; nếu chưa có API, hiển thị mock rõ nhãn.
- **FE-09:** tra cứu/chi tiết/in hóa đơn và bán sỉ theo frame; bắt đầu sau FE-08.

### Khuê — FE-06 rồi FE-07

- **FE-06:** tra cứu tồn, điều chỉnh, cảnh báo, lịch sử theo UC_4.1–4.4, section `1:34107` và Hình 87–99. Phân quyền OWNER/EMPLOYEE, trạng thái loading/empty/error. Mọi thay đổi tồn cần API giao dịch và audit; UI mock không được giả là đã lưu thật.
- **FE-07:** nhập hàng mới và lịch sử/chi tiết theo UC_8.1–8.2, sections `1:40504`, `1:29003`. Bắt đầu sau FE-05/06 để dùng contract sản phẩm và tồn kho đã thống nhất.

### Ngân — FE-10 rồi FE-11; hỗ trợ FE-12

- **FE-10:** báo cáo doanh thu, lượng bán/trả theo UC_5.1–5.2, section `1:48053`; bộ lọc thời gian, bảng/biểu đồ, trạng thái empty/loading/error và role OWNER. Tổng số từ API hoặc mock có nhãn; không tính như số liệu thật khi backend thiếu.
- **FE-11:** đổi/trả và phê duyệt theo UC_3.1/3.2/9, sections `1:45946`, `1:44574`, Hình 153–155. Bắt đầu sau FE-08/09. Zalo/ngân hàng thật ngoài phạm vi demo; ghi gap rõ.
- **FE-12:** hỗ trợ Huy chụp ảnh, kiểm tra visual và luồng xuyên vai trò; chỉ sửa code lane 6 khi phát hiện lỗi.

## Cách tạo branch và bàn giao

Mỗi người clone project riêng. Từ base frontend mới nhất do Huy thông báo:

```powershell
git switch feat/fe-01-foundation
git pull --ff-only origin feat/fe-01-foundation
git switch -c feat/team-<ten-khong-dau>-<task-id>
```

Ví dụ `feat/team-van-fe-05`. Khi task đã được review, dùng `git add` đúng file lane, `git commit`, `git push -u origin <branch>` và mở PR vào `feat/fe-01-foundation`. Huy là người merge sau khi xử lý phụ thuộc. Trước khi giao review, gửi:

```text
Tên / task / branch / base commit:
Use Case + Figma node + viewport:
File đã sửa, API thật hay mock:
Ảnh Figma và ảnh app:
Kiểm tra đã chạy và kết quả:
git status + git diff --check:
Sai khác còn lại / cần Huy hỗ trợ:
```

Không đưa mật khẩu, token, `.env`, ảnh debug lớn hoặc file máy cá nhân vào commit. Khi cần thay đổi shared contract, gửi Huy trước; Huy cập nhật contract/base rồi các lane đồng bộ. Xem `docs/TEAM_GIT_WORKFLOW.md` để biết PR, CI, thứ tự merge và cách xử lý conflict.
