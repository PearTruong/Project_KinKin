# Kế hoạch frontend KinKin POS — 6 người, 2 tuần

> **Bản triển khai hiện tại:** `docs/TEAM_START_HERE.md` và `docs/TEAM_TASK_BOARD.md`. Mốc `main` và các trạng thái trong kế hoạch gốc bên dưới là snapshot cũ; dùng bảng việc theo tên để biết task hiện tại.

## Điểm xuất phát (10/11/2026)

- `main` ở commit `fadf69b`. **Chỉ màn đăng nhập desktop đã được người dùng xác nhận đúng Figma.** App Shell, menu và toàn bộ nội dung sau đăng nhập vẫn là UI demo công nghệ, cần thay thế và nghiệm thu lại từ đầu. `apps/web/app/page.tsx` là nơi UI cũ tập trung.
- Typecheck, 11 unit test và build từng đạt ở lần kiểm tra trước; đó là kiểm tra kỹ thuật, không chứng minh giao diện đúng. Nhiều menu mới chỉ báo “đang phát triển”.
- Render từng fail do Build Command cũ dùng `prisma db push`; chưa xác minh deployment reset đã thành công. Do đó tách nghiệm thu frontend khỏi trạng thái deploy API.
- Nguồn chuẩn: nghiệp vụ từ báo cáo/`docs/CONTRACTS.md`, hình thức từ file Figma `5RdlpDu7V3VZLrJ9xWu3U8` (Final), mapping node trong `docs/REPORT_FIGMA_TRACEABILITY.md`. File mapping còn URL tên cũ nhưng cùng file key; cập nhật link khi chỉnh tài liệu.

## Mục tiêu và quy tắc chuyển đổi

Đích đến là frontend web thể hiện **toàn bộ màn hình và trạng thái được thiết kế trong Figma Final**, theo nghiệp vụ của báo cáo. Không giữ lại bố cục, màu xanh lá, card sản phẩm hay giỏ hàng từ bản demo chỉ vì chúng đang chạy được. Giữ màn đăng nhập đã được duyệt; mọi phần khác coi là chưa nghiệm thu.

Lập `FIGMA_SCREEN_INVENTORY.md` với mỗi frame: section, node ID, tên màn, viewport, role, Use Case, route, các trạng thái và lane. Đánh dấu `implemented`, `visual-approved`, `wired-to-api` riêng biệt. Một màn có thể hoàn tất phần Figma trước khi API tương ứng tồn tại, nhưng phải ghi rõ `API gap` và không gọi đó là hoàn tất nghiệp vụ.

Chuyển đổi theo nhánh mới với route và component mới. UI demo được tháo khỏi route chính sau khi cụm Figma thay thế qua review; không xóa API, schema hay logic giao dịch đang dùng. Không dùng màn demo làm chuẩn thiết kế. Figma là chuẩn cho pixel/layout, báo cáo là chuẩn cho hành vi và quyền.

## Cách vận hành chung

Ngày 1, cả nhóm cùng đọc `PROJECT_SCOPE.md`, `CONTRACTS.md`, `REPORT_FIGMA_TRACEABILITY.md`, đặc tả giao diện và các frame được giao. Chốt danh sách route, kiểu dữ liệu và mock fixture. Một người chỉ sở hữu một nhóm thư mục; thay đổi `page.tsx`, `globals.css`, `menu-config.ts`, `lib/api.ts` phải qua lane tích hợp.

Mỗi người tạo branch từ `main`: `feat/web-lane-<so>-<cum>`. Mỗi ngày đồng bộ `main`, mở PR nhỏ theo một cụm trạng thái. Không push trực tiếp `main`. Người khác review PR, kiểm tra ảnh 1440×900 và mobile khi có frame. Chỉ merge khi `pnpm typecheck`, `pnpm --filter web build`, E2E luồng chính và visual QA đạt. API chưa có endpoint thì dùng adapter/mock fixture rõ nhãn, không giả vờ là tính năng hoàn tất.

## Sáu lane sở hữu rõ ràng

| Lane | Sở hữu file chính | Task đầy đủ | Figma/Use Case | Bàn giao |
|---|---|---|---|---|
| 1 — Nền UI & tích hợp | `app/layout.tsx`, `app/globals.css`, `components/ui/**`, `components/shell/**`, route composition | Chốt token font/màu/spacing; sửa sidebar, header, breadcrumb theo frame; responsive shell; route/role guards; hợp nhất các lane; xử lý xung đột; kiểm soát bundle và loading | UC_1, UC_10; `1:4458`, `1:4581`, `1:48236` | Shell đúng Figma, menu không dẫn tới placeholder sai, đăng xuất và role đúng |
| 2 — Tài khoản & trạng thái đăng nhập | `components/auth/**`, `app/(app)/accounts/**` | Giữ login desktop đã duyệt; làm mobile và rà regression; danh sách, tạo, sửa, vô hiệu hóa, đổi mật khẩu; validation, quyền OWNER, trạng thái empty/error/success | UC_1, UC_6; `1:4884`, `1:4668`, sections `1:4195`, `1:3161`, `1:2359`, `1:1797`, `1:309` | Login cũ không lệch; account screens có ảnh đối chiếu, API adapter hoặc mock rõ ràng |
| 3 — Danh mục & sản phẩm | `app/(app)/catalog/**`, `components/catalog/**` | Danh mục list/add/edit/delete; sản phẩm list/search/add/edit/delete; giá bán/giá vốn; ngưỡng cảnh báo; đủ modal và validation, trạng thái role | UC_7.1–7.9; `1:30676`, `1:18585`, `1:20601`, `1:22475`, `1:23956`, `1:25733`, `1:27939` | Golden flow tạo danh mục→sản phẩm→ngưỡng; không cho nhập tồn trực tiếp |
| 4 — Bán hàng & hóa đơn | `app/(app)/sales/**`, `components/sales/**` | Thay trang bán hàng demo bằng frame Figma; tìm/chọn sản phẩm, giỏ, quantity, tổng tiền, checkout tiền mặt/chuyển khoản, QR chờ, hóa đơn/tra cứu/in; loading và lỗi thiếu tồn; bỏ UI xanh lá cũ | UC_2.1–2.2; `1:10533`, `1:10075`, `1:9945`, `1:9797`, `1:9054`, `1:8668`, `1:8916` | Luồng bán 2 món, hóa đơn và giảm tồn hiển thị đúng; không tính tiền chỉ ở client |
| 5 — Nhập hàng & tồn kho | `app/(app)/inventory/**`, `app/(app)/purchases/**`, `components/inventory/**`, `components/purchases/**` | Tra cứu tồn, điều chỉnh, cảnh báo, lịch sử điều chỉnh; ghi nhận nhập hàng, xác nhận, lịch sử/chi tiết, lọc; đủ trạng thái empty/error/success | UC_8.1–8.2, UC_4.1–4.4; sections `1:40504`, `1:29003`, `1:34107` | Mọi frame thuộc các section được inventory và visual-approved; API gap ghi rõ |
| 6 — Báo cáo, đổi/trả & QA | `app/(app)/reports/**`, `app/(app)/returns/**`, `components/reports/**`, `components/returns/**`, `e2e/**` | Doanh thu và lượng bán/trả; đổi/trả và trạng thái phê duyệt theo Figma; tạo fixture; E2E xuyên vai trò; ảnh đối chiếu và bảng sai khác | UC_5.1–5.2, UC_3.1–3.2, UC_9; sections `1:48053`, `1:45946`, `1:44574`, các frame phê duyệt `9-W/9-M` | Toàn bộ màn được dựng, visual-approved; luồng thiếu API ghi gap, không mô phỏng là thật |

## Hợp đồng kỹ thuật trước khi chia việc

Lane 1 tạo route skeleton và export interface trong ngày 1. Quy ước `app/(app)/...` có thể điều chỉnh theo Next.js nhưng phải chốt một lần; `page.tsx` gốc hiện chứa nhiều nghiệp vụ, cần tách thành từng màn trước khi các lane cùng sửa. Lane 3/4/5/6 chỉ sửa thư mục của mình, dùng `lib/api.ts` qua hàm/adapter đã thống nhất. Mọi endpoint thiếu được ghi vào bảng `API_GAPS.md` với request/response mẫu và người xử lý; không tự thay schema/backend trong lane frontend.

Ưu tiên tích hợp: đăng nhập → shell → danh mục/sản phẩm → nhập/tồn → bán hàng → báo cáo/đổi trả/phê duyệt. Sáu người có thể dựng toàn bộ UI Figma song song trong hai tuần; **không cam kết toàn bộ nghiệp vụ hoạt động thật** khi backend hiện mới có các endpoint nền. Các màn thiếu API vẫn phải có thiết kế hoàn chỉnh và fixture tách biệt, chờ vòng tích hợp backend.

## Lịch 10 ngày làm việc

| Ngày | Việc chung và mốc |
|---|---|
| 1 | Kickoff, phân quyền repo/Figma, đọc tài liệu, route map, API gaps, token và fixture; PR skeleton của lane 1. |
| 2–3 | Lane 1 shell; lane 2 auth/accounts; lane 3 catalog; lane 4 sales; lane 5 inventory/purchases; lane 6 reports và khung E2E. Mỗi lane giao màn chính và screenshot đầu. |
| 4–5 | Hoàn thiện trạng thái validation/error/success và nối API sẵn có. Review chéo: 2↔3, 4↔5, 1↔6. Merge PR nhỏ hằng ngày. |
| 6 | Mốc tích hợp 1: OWNER tạo danh mục/sản phẩm, nhập hàng; EMPLOYEE thấy đúng menu. Chốt API gaps cần backend. |
| 7–8 | Hoàn thiện checkout/hóa đơn, báo cáo, tài khoản, đổi/trả, phê duyệt; xử lý responsive theo frame; lane 6 chạy E2E và visual diff. |
| 9 | Bug bash: sửa lệch Figma, role, loading, lỗi mạng; kiểm tra production build, accessibility cơ bản và mobile. Không mở feature mới. |
| 10 | Freeze, demo rehearsal, deploy staging/production sau khi API database ổn, smoke test cả hai role, ghi known limitations và bàn giao. |

## Task card mẫu cho mọi PR

```text
ID: FE-[LANE]-[SỐ]
Use Case/báo cáo: [mã + đoạn liên quan]
Figma: [link frame/node, viewport]
Route và role: [đường dẫn, OWNER/EMPLOYEE]
API: [endpoint/contract hoặc mock fixture + API gap]
Trạng thái: initial / loading / empty / validation / server error / success
Phạm vi file: [thư mục lane]
Nghiệm thu: [hành vi cụ thể + ảnh so với Figma]
Kiểm tra: typecheck / build / E2E phù hợp
Phụ thuộc: [task ID]
```

## Quy tắc prompt cho AI của từng người

```text
Triển khai duy nhất task [ID] trong lane [SỐ]. Đọc Use Case [MÃ], docs/CONTRACTS.md và Figma frame [NODE] trực tiếp. Bám screenshot tại [VIEWPORT]. Chỉ sửa thư mục sở hữu [PATH]. Dùng API contract đã chốt; endpoint thiếu thì tạo adapter/mock có nhãn và ghi API_GAPS.md. Triển khai đủ các trạng thái trong task card. Chạy typecheck, web build và test liên quan; cung cấp ảnh so sánh, danh sách file, điểm còn lệch và git diff. Dừng trước commit/push để reviewer kiểm tra.
```

## Definition of Done và release gate

- Figma: screenshot app và frame cùng viewport, reviewer xác nhận bố cục, màu, font, icon, text và trạng thái; không tự tuyên bố “khớp 100%”.
- Nghiệp vụ: đúng actor/Use Case; API trả dữ liệu thật hoặc phần mock được công khai; lỗi có thông báo rõ; tiền/tồn không tự quyết định ở frontend.
- Kỹ thuật: TypeScript/build sạch, E2E luồng chính đạt, không có file tạm/secret/URL asset Figma tạm/đường dẫn máy cá nhân.
- Tích hợp: merge theo thứ tự phụ thuộc, smoke test OWNER và EMPLOYEE sau mỗi mốc; PR lane 1 duyệt thay đổi file chung.
- Deploy: xác minh commit đang chạy trên Vercel và Render, Render build command mới và migration/seed thành công. Test cold và warm login riêng; Render Free ngủ sau idle nên không cam kết lần đầu dưới 1 giây.

## Hai mức nghiệm thu cần báo riêng

1. **Frontend Figma complete:** 100% frame trong inventory có route/state hoặc component tương ứng, ảnh cùng viewport và reviewer duyệt. Không còn UI demo trên đường điều hướng chính.
2. **End-to-end complete:** các màn bắt buộc nối API thật, dữ liệu và phân quyền đúng báo cáo, test golden flow đạt. Màn thiếu API không được gắn nhãn này.

## Việc đầu tiên cho nhóm

1. Lane 1 tách `apps/web/app/page.tsx` thành route/composition để tránh sáu người cùng sửa một file.
2. Lane 6 lập bảng screenshot baseline từ Figma và app hiện tại; ghi sai khác cụ thể.
3. Cả nhóm duyệt task card và API gaps trong ngày 1; sau đó mới code song song.
