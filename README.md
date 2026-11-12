# KinKin POS — frontend nhóm 6 người

**Thành viên mới:** bắt đầu tại [hướng dẫn nhóm](docs/TEAM_START_HERE.md), [bảng việc theo tên](docs/TEAM_TASK_BOARD.md) và [quy trình Git/PR](docs/TEAM_GIT_WORKFLOW.md). Base frontend hiện ở branch `feat/fe-01-foundation`; `main` còn là bản demo cũ. Sprint 6 người chỉ làm frontend. Các hướng dẫn bên dưới mô tả cách chạy demo local và không phản ánh đầy đủ trạng thái nghiệm thu Figma.

## Bối cảnh demo ban đầu

Ứng dụng nhỏ để nhóm làm quen với nền tảng trước khi phát triển hệ thống chính thức. Demo cố ý giữ nghiệp vụ đơn giản nhưng có đủ luồng: đăng nhập → đọc/thêm sản phẩm → giỏ hàng → tạo đơn → trừ tồn kho → hóa đơn.

## Công nghệ đã đưa vào

- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS.
- Dữ liệu giao diện: TanStack Query.
- Biểu mẫu: React Hook Form và Zod.
- Backend: NestJS 11, REST API, JWT, Swagger, class-validator.
- Cơ sở dữ liệu: PostgreSQL, Prisma 7 và Docker Compose.
- Trình duyệt: PWA manifest, service worker, Dexie/IndexedDB lưu đơn nháp.
- Kiểm thử: Jest unit test và Playwright E2E.

## Chạy nhanh — chưa cần Docker

Yêu cầu Node.js 22 trở lên và pnpm. Chế độ này lưu dữ liệu tạm trong RAM, phù hợp để học cách frontend gọi backend ngay lập tức.

```powershell
cd "E:\CongViec\PTTKHT2\Project\3. Source code"
pnpm install
Copy-Item apps/api/.env.example apps/api/.env
Copy-Item apps/web/.env.example apps/web/.env.local
pnpm dev
```

Mở <http://localhost:3000> và đăng nhập bằng `admin` / `123456`.

- Web: <http://localhost:3000>
- API: <http://localhost:4000/api>
- Swagger: <http://localhost:4000/docs>

Nếu hai file `.env` đã tồn tại thì bỏ qua hai lệnh `Copy-Item`.

## Chạy với PostgreSQL thật

Cài Docker Desktop, sau đó chạy:

```powershell
docker compose up -d db
pnpm db:generate
pnpm db:migrate
pnpm db:seed
```

Đổi `DATA_MODE=memory` thành `DATA_MODE=postgres` trong `apps/api/.env`, rồi khởi động lại `pnpm dev`.

## Tự kiểm tra dự án

```powershell
pnpm typecheck
pnpm test
pnpm build
```

Muốn chạy E2E lần đầu:

```powershell
pnpm --filter web exec playwright install chromium
pnpm dev
# Mở terminal thứ hai
pnpm --filter web test:e2e
```

## Thứ tự nên học

1. Chạy `pnpm dev`, đăng nhập và thử tạo đơn trên web.
2. Mở Swagger, quan sát request/response và JWT.
3. Đọc `apps/web/app/page.tsx` để hiểu giao diện gọi API.
4. Đọc `apps/api/src` để hiểu controller, guard và service.
5. Cài Docker rồi chuyển sang PostgreSQL để học migration và seed.

## Phạm vi demo

Đây là sandbox học tập, chưa phải mã production. Thanh toán và Zalo chỉ được mô phỏng cục bộ. Bản chính thức còn cần refresh token, phân quyền chi tiết, audit log, rate limit, khóa giao dịch tồn kho/FIFO, mã PIN phê duyệt và tích hợp dịch vụ thật.
