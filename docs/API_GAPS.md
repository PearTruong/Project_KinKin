# Danh sách khoảng trống API (API Gaps) — KinKin POS (FE-00)

Tài liệu này xác định các endpoint backend NestJS còn thiếu so với thiết kế Figma Final và hợp đồng nghiệp vụ `docs/CONTRACTS.md`.

> **Nguyên tắc kỹ thuật:**
> 1. Frontend **không tự sửa backend/schema** trong phạm vi các task frontend FE-01 đến FE-11.
> 2. Các màn hình frontend chưa có API thật sẽ sử dụng Mock Fixture / Adapter riêng biệt có nhãn rõ ràng (`wired-to-api: MOCK`), không giả vờ là đã hoàn tất tích hợp thật.
> 3. Toàn bộ số tiền và số lượng là số nguyên (`integer`), đơn vị VNĐ không có phần thập phân.
> 4. Thông báo lỗi phải bằng tiếng Việt có nghĩa (`message`).

---

## 1. Hiện trạng Backend API hiện hữu (`apps/api`)

Hiện tại, mã nguồn backend `apps/api` mới chỉ cung cấp các endpoint cơ bản:

| Phương thức | Endpoint | Mô tả | Vai trò | Trạng thái |
|---|---|---|---|---|
| `POST` | `/api/auth/login` | Đăng nhập bằng username/password | Public | Hoạt động thật |
| `GET` | `/api/products` | Lấy danh sách sản phẩm | Authenticated | Hoạt động thật (chưa phân trang chuẩn) |
| `POST` | `/api/products` | Tạo sản phẩm đơn giản | OWNER | Hoạt động thật (chưa có ngưỡng/giá vốn) |
| `POST` | `/api/orders` | Tạo đơn hàng bán lẻ & trừ tồn kho | Authenticated | Hoạt động thật (chống bán âm nguyên tử) |
| `GET` | `/api/health` | Kiểm tra tình trạng server | Public | Hoạt động thật |

---

## 2. Chi tiết các API Gaps cần bổ sung

### GAP-00: Xác thực đăng nhập & Phân biệt tài khoản bị vô hiệu hóa (Lane 1 & 2 · UC_01)

#### 1. Phân biệt lỗi đăng nhập tài khoản vô hiệu hóa
- **Endpoint:** `POST /api/auth/login`
- **Vai trò:** Public
- **Màn hình phụ thuộc:** Đăng nhập desktop (Frame `1:4431`, Hình 58) và mobile.
- **Độ ưu tiên:** **P1**
- **Hiện trạng:** Backend NestJS (`apps/api/src/auth/auth.service.ts`) trả về HTTP 401 chung `{ "statusCode": 401, "message": "Tên đăng nhập hoặc mật khẩu không chính xác" }` cho cả hai trường hợp: sai mật khẩu và tài khoản đã bị vô hiệu hóa (`status === 'INACTIVE'`).
- **Khoảng trống so với đặc tả:** Theo Use Case UC_01 (Ngoại lệ 8a, Bảng đặc tả giao diện Hình 58 / Node `1:4431`), hệ thống phải hiển thị thông báo riêng biệt *"Tài khoản đã bị vô hiệu hóa."* khi người dùng thuộc trạng thái vô hiệu hóa đăng nhập.
- **Yêu cầu bổ sung Backend:**
  - Khi người dùng tồn tại nhưng `status === 'INACTIVE'`, backend cần trả về mã lỗi riêng:
    ```json
    {
      "statusCode": 403,
      "error": "ACCOUNT_DISABLED",
      "message": "Tài khoản đã bị vô hiệu hóa."
    }
    ```
- **Giải pháp Frontend:**
  - Không suy luận dựa trên username hardcode. Chỉ hiển thị thông báo vô hiệu hóa khi API trả về mã lỗi hoặc thông điệp chứa từ khóa liên quan (`vô hiệu`, `disabled`, `inactive`).
  - Hỗ trợ chế độ xem độc lập để kiểm tra và đối chiếu chuẩn hình ảnh Figma thông qua query parameter `?preview=disabled` tại route `/login` mà không làm sai lệch luồng xác thực thật.

---

### GAP-01: Quản lý tài khoản & Đổi mật khẩu (Lane 2 · UC_6)

> [!IMPORTANT]
> **Hiện trạng tích hợp:** Backend `apps/api` hiện tại chưa có các endpoint quản lý tài khoản người dùng (`/api/users*`). Frontend đã xây dựng Mock Adapter tách biệt tại [`apps/web/lib/accounts-adapter.ts`](file:///E:/CongViec/PTTKHT2/Project/3.%20Source%20code/apps/web/lib/accounts-adapter.ts) với đầy đủ lưu trữ cục bộ (localStorage) và các phương thức mô phỏng validation, lỗi xung đột (trùng username, trùng SĐT), lỗi hệ thống và các fixture phân tách theo từng kịch bản để phục vụ đối soát giao diện trực quan theo Figma Final. Frontend ghi nhận `wired-to-api: MOCK` và không báo đã nối API thật khi backend chưa hoàn thiện.

#### 1. Đổi mật khẩu tài khoản (UC_6.3)
- **Endpoint:** `PATCH /api/users/:id/password` (hoặc `PATCH /api/users/me/password` với `:id` là chính tài khoản đang đăng nhập)
- **Vai trò:** `OWNER` hoặc `EMPLOYEE` (người dùng đổi mật khẩu của chính tài khoản đang đăng nhập; theo quy định BR6-04, không hỗ trợ đổi mật khẩu tài khoản nhân viên thay cho họ, Chủ cửa hàng cũng chỉ đổi mật khẩu của chính mình).
- **Màn hình phụ thuộc:** Modal Đặt lại mật khẩu (Hình 107, 109, 110; Bảng 132, 134, 135 trong tài liệu Đặc tả giao diện).
- **Độ ưu tiên:** **P1**
- **Quy tắc nghiệp vụ & Độ dài mật khẩu (Reconciliation):**
  - **Quy tắc phân quyền BR6-04:** *"Không đổi mật khẩu tài khoản nhân viên thay cho họ; Chủ cửa hàng cũng chỉ đổi mật khẩu của chính mình."*
  - **Quy tắc độ dài mật khẩu BR6-13:** *"Mật khẩu có tối thiểu 8 ký tự và không được chỉ gồm khoảng trắng."*
  - **Ánh xạ Use Case chuẩn:**
    - **UC_6.1:** Tạo tài khoản mới (Chủ cửa hàng thiết lập mật khẩu ban đầu cho tài khoản nhân viên).
    - **UC_6.3:** Người dùng đổi mật khẩu của chính tài khoản đang đăng nhập (Luồng ngoại lệ 6b: *"Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng."*).
  - **Kết luận:** Quy định tối thiểu 8 ký tự áp dụng nhất quán cho cả việc tạo tài khoản mới (UC_6.1) và người dùng đổi mật khẩu của chính tài khoản đang đăng nhập (UC_6.3). Toàn bộ người dùng (kể cả Chủ cửa hàng) bắt buộc phải nhập đúng mật khẩu hiện tại (`oldPassword`) để xác thực danh tính trước khi đổi mật khẩu; hệ thống không hỗ trợ cơ chế cho phép Chủ cửa hàng đổi mật khẩu thay cho nhân viên.
- **Request payload:**
  ```json
  {
    "oldPassword": "string (bắt buộc đối với mọi người dùng để xác nhận danh tính)",
    "newPassword": "string (tối thiểu 8 ký tự theo đặc tả gốc BR6-13)",
    "confirmPassword": "string"
  }
  ```
- **Response payload (200 OK):**
  ```json
  {
    "success": true,
    "message": "Đổi mật khẩu thành công"
  }
  ```
- **Hành vi Mock và Giới hạn triển khai Frontend (`apps/web/lib/accounts-adapter.ts`):**
  - Mật khẩu mặc định khởi tạo trong Mock storage cho các tài khoản seed ban đầu là `'123456'` (hoặc fallback `'12345678'`).
  - Khi tạo tài khoản mới qua `createAccount()` (UC_6.1), mật khẩu ban đầu được lưu trực tiếp vào `kinkin_mock_user_passwords_v1` gắn với ID/username của tài khoản mới để `changePassword()` (UC_6.3) xác minh đúng mật khẩu này thay vì nhận nhầm mật khẩu mặc định.
  - Khi người dùng tự đổi mật khẩu (`isSelf: true`), adapter kiểm tra mật khẩu hiện tại `oldPassword` với dữ liệu lưu trữ trong `localStorage` (`kinkin_mock_user_passwords_v1`). Nếu sai, trả về lỗi nghiệp vụ: `"Mật khẩu hiện tại không đúng, vui lòng nhập lại."` (khớp Node `1:649` / Hình 107).
  - Khi submit thành công mật khẩu mới (tối thiểu 8 ký tự, không toàn khoảng trắng, khác mật khẩu cũ, khớp mật khẩu xác nhận), adapter lưu mật khẩu mới vào mock storage để các lần submit tiếp theo kiểm tra đúng mật khẩu mới này.
  - Khi gọi `resetMockAccounts()`, toàn bộ tài khoản và mock password storage (`kinkin_mock_user_passwords_v1`) đều được làm sạch triệt để.
  - Preview props (`previewState`) chỉ dùng cho kịch bản chụp ảnh đối chiếu trạng thái tĩnh trên Figma; không thay thế việc kiểm thử luồng submit thật. Backend NestJS chưa có endpoint này nên frontend giữ nguyên mock adapter và không sửa backend.

#### 2. Danh sách nhân viên
- **Endpoint:** `GET /api/users`
- **Vai trò:** `OWNER`
- **Màn hình phụ thuộc:** Màn hình Quản lý tài khoản (Hình 113, 119; Bảng 138, 144 trong tài liệu Đặc tả giao diện).
- **Độ ưu tiên:** **P1**
- **Query params:** `?role=EMPLOYEE&status=ACTIVE&search=minhanh`
- **Response payload (200 OK):**
  ```json
  {
    "items": [
      {
        "id": "usr_emp_01",
        "username": "nhanvien",
        "name": "Nguyễn Văn A",
        "phone": "0901234567",
        "role": "EMPLOYEE",
        "status": "ACTIVE",
        "createdAt": "2026-11-10T08:00:00.000Z"
      }
    ],
    "total": 1
  }
  ```

#### 3. Tạo tài khoản nhân viên mới (UC_6.1)
- **Endpoint:** `POST /api/users`
- **Vai trò:** `OWNER`
- **Màn hình phụ thuộc:** Tạo tài khoản mới (Hình 114, Bảng 139 trong tài liệu Đặc tả giao diện).
- **Độ ưu tiên:** **P1**
- **Request payload:**
  ```json
  {
    "username": "nhanvien2",
    "password": "InitialPassword123",
    "name": "Trần Thị B",
    "phone": "0912345678",
    "role": "EMPLOYEE"
  }
  ```
- **Response payload (201 Created):**
  ```json
  {
    "id": "usr_emp_02",
    "username": "nhanvien2",
    "name": "Trần Thị B",
    "phone": "0912345678",
    "role": "EMPLOYEE",
    "status": "ACTIVE"
  }
  ```

#### 4. Vô hiệu hóa tài khoản nhân viên
- **Endpoint:** `PATCH /api/users/:id/status`
- **Vai trò:** `OWNER`
- **Màn hình phụ thuộc:** Vô hiệu hóa tài khoản (Hình 117, Bảng 142 trong tài liệu Đặc tả giao diện).
- **Độ ưu tiên:** **P1**
- **Request payload:**
  ```json
  {
    "status": "INACTIVE"
  }
  ```
- **Response payload (200 OK):**
  ```json
  {
    "id": "usr_emp_02",
    "status": "INACTIVE",
    "updatedAt": "2026-11-10T09:00:00.000Z"
  }
  ```

---

### GAP-02: Quản lý danh mục sản phẩm (Lane 3 · UC_7.1–7.3)

> [!IMPORTANT]
> **Hiện trạng tích hợp:** Backend `apps/api` hiện tại chưa có các endpoint quản lý danh mục sản phẩm (`/api/categories*`). Frontend đã xây dựng Mock Adapter tách biệt tại [`apps/web/lib/categories-adapter.ts`](../apps/web/lib/categories-adapter.ts) với đầy đủ lưu trữ cục bộ (localStorage) và các phương thức mô phỏng validation, lỗi xung đột (trùng tên không phân biệt hoa/thường), ràng buộc toàn vẹn khi xóa (chặn xóa danh mục đang có sản phẩm), lỗi hệ thống và các fixture phân tách theo từng kịch bản để phục vụ đối soát giao diện trực quan theo Figma Final (17 frames thuộc các Section `1:30675`, `1:30869`, `1:31907`, `1:32870`). Frontend ghi nhận `wired-to-api: MOCK` và không báo đã nối API thật khi backend chưa hoàn thiện.

#### 1. Lấy danh sách danh mục
- **Endpoint:** `GET /api/categories`
- **Vai trò:** Authenticated
- **Màn hình phụ thuộc:** Quản lý danh mục (Frame `1:30676`, Hình 120, Bảng 145); Bộ lọc danh mục màn Bán lẻ (`1:10533`).
- **Độ ưu tiên:** **P0** (Bắt buộc cho luồng tạo sản phẩm & bán lẻ)
- **Response payload (200 OK):**
  ```json
  {
    "items": [
      {
        "id": "cat_01",
        "code": "DAY_GIAY",
        "name": "Dây giày",
        "productCount": 12,
        "status": "ACTIVE",
        "createdAt": "2026-11-01T00:00:00.000Z"
      }
    ],
    "total": 1
  }
  ```

#### 2. Thêm danh mục mới
- **Endpoint:** `POST /api/categories`
- **Vai trò:** `OWNER`
- **Màn hình phụ thuộc:** Thêm danh mục modal (Frame `1:30870`, Hình 121, Bảng 146).
- **Độ ưu tiên:** **P0**
- **Request payload:**
  ```json
  {
    "code": "LOT_GIAY",
    "name": "Lót giày êm chân"
  }
  ```
- **Response payload (201 Created):**
  ```json
  {
    "id": "cat_02",
    "code": "LOT_GIAY",
    "name": "Lót giày êm chân",
    "status": "ACTIVE"
  }
  ```

#### 3. Chỉnh sửa & Xóa danh mục
- **Endpoint:** `PATCH /api/categories/:id` và `DELETE /api/categories/:id`
- **Vai trò:** `OWNER`
- **Màn hình phụ thuộc:** Sửa danh mục (`1:32871`), Xóa danh mục (`1:31908`).
- **Độ ưu tiên:** **P0**
- **Quy tắc nghiệp vụ:** Bị từ chối xóa khi `productCount > 0` (mã lỗi 400 kèm thông báo tiếng Việt "Danh mục đang có sản phẩm, không thể xóa").

---

### GAP-03: Cập nhật giá & Ngưỡng cảnh báo sản phẩm (Lane 3 · UC_7.5, UC_7.8)

#### 1. Cập nhật bảng giá bán & giá vốn
- **Endpoint:** `PATCH /api/products/:id/pricing` hoặc `PATCH /api/products/:id`
- **Vai trò:** `OWNER`
- **Màn hình phụ thuộc:** Cập nhật giá (Frame `1:20601`, `1:20875`, Hình 127–129).
- **Độ ưu tiên:** **P0**
- **Request payload:**
  ```json
  {
    "salePrice": 85000,
    "costPrice": 45000
  }
  ```

#### 2. Thiết lập ngưỡng cảnh báo tồn kho
- **Endpoint:** `PATCH /api/products/:id/thresholds`
- **Vai trò:** `OWNER`
- **Màn hình phụ thuộc:** Thiết lập ngưỡng cảnh báo (Frame `1:25733`, `1:26118`, Hình 135–140).
- **Độ ưu tiên:** **P0**
- **Request payload:**
  ```json
  {
    "alertThreshold": 10,
    "agedStockThresholdDays": 60
  }
  ```
- **Response payload (200 OK):**
  ```json
  {
    "id": "prd_01",
    "sku": "DG-TRANG-120",
    "name": "Dây giày tròn màu trắng 120cm",
    "stock": 18,
    "alertThreshold": 10,
    "agedStockThresholdDays": 60,
    "inventoryStatus": "IN_STOCK"
  }
  ```

---

### GAP-04: Tra cứu & Điều chỉnh tồn kho (Lane 5 · UC_4.1–4.4)

#### 1. Tra cứu tồn kho tổng quát (kèm tính trạng thái tồn động)
- **Endpoint:** `GET /api/inventory`
- **Vai trò:** Authenticated (`OWNER` xem đầy đủ giá vốn; `EMPLOYEE` chỉ xem giá bán và số tồn).
- **Màn hình phụ thuộc:** Tra cứu tồn kho (Frame `1:34666`, Hình 100, Bảng 125).
- **Độ ưu tiên:** **P0**
- **Query params:** `?status=OUT_OF_STOCK&categoryId=cat_01&search=day+giay`
- **Response payload (200 OK):**
  ```json
  {
    "items": [
      {
        "id": "prd_01",
        "sku": "DG-TRANG-120",
        "name": "Dây giày tròn màu trắng 120cm",
        "categoryName": "Dây giày",
        "stock": 0,
        "alertThreshold": 10,
        "agedStockThresholdDays": 60,
        "lastReceivedAt": "2026-10-01T00:00:00.000Z",
        "inventoryStatus": "OUT_OF_STOCK"
      }
    ],
    "total": 1
  }
  ```

#### 2. Điều chỉnh số tồn kho
- **Endpoint:** `POST /api/inventory/adjustments`
- **Vai trò:** `OWNER`
- **Màn hình phụ thuộc:** Màn hình điều chỉnh số tồn (Hình 87–91, Bảng 112–116).
- **Độ ưu tiên:** **P1**
- **Request payload:**
  ```json
  {
    "productId": "prd_01",
    "actualStock": 25,
    "reason": "Kiểm kê định kỳ phát hiện thừa 2 sản phẩm"
  }
  ```
- **Xử lý:** Atomic transaction: Cập nhật `product.stock`, sinh bản ghi `StockMovement` với type `ADJUSTMENT`.

#### 3. Lịch sử điều chỉnh tồn kho
- **Endpoint:** `GET /api/inventory/movements`
- **Vai trò:** `OWNER`
- **Màn hình phụ thuộc:** Lịch sử điều chỉnh (Hình 96–97, Bảng 121–122).
- **Độ ưu tiên:** **P1**

---

### GAP-05: Quản lý nhập hàng (Lane 5 · UC_8.1–8.2)

#### 1. Ghi nhận phiếu nhập hàng mới
- **Endpoint:** `POST /api/purchase-receipts`
- **Vai trò:** `OWNER`
- **Màn hình phụ thuộc:** Tạo phiếu nhập hàng (Frame `1:40624`, `1:41242`, Hình 145, 149).
- **Độ ưu tiên:** **P0**
- **Request payload:**
  ```json
  {
    "supplierName": "Công ty TNHH Phụ Kiện Giày Miền Trung",
    "items": [
      {
        "productId": "prd_01",
        "quantity": 50,
        "unitCost": 35000
      }
    ]
  }
  ```
- **Xử lý nghiệp vụ:** Chạy trong 1 Transaction nguyên tử duy nhất:
  - Tạo `PurchaseReceipt` với mã tự sinh `PN-YYYYMMDD-XXXX`.
  - Tạo các dòng `PurchaseItem`.
  - Tăng tồn kho sản phẩm: `stock = stock + quantity`.
  - Cập nhật ngày nhập mới nhất `lastReceivedAt = now`.
  - Ghi nhận `StockMovement` (type `RECEIPT`).

#### 2. Lịch sử & Chi tiết phiếu nhập
- **Endpoint:** `GET /api/purchase-receipts` và `GET /api/purchase-receipts/:id`
- **Vai trò:** `OWNER`
- **Màn hình phụ thuộc:** Lịch sử nhập hàng (Frame `1:29004`, `1:29137`).
- **Độ ưu tiên:** **P0**

---

### GAP-06: Tra cứu & Chi tiết hóa đơn (Lane 4 · UC_2.2)

#### 1. Danh sách hóa đơn đã lập
- **Endpoint:** `GET /api/orders`
- **Vai trò:** `OWNER` (hoặc Authenticated xem các hóa đơn trong ngày)
- **Màn hình phụ thuộc:** Tra cứu hóa đơn (Frame `1:8668`, Hình 68, Bảng 93).
- **Độ ưu tiên:** **P0**
- **Query params:** `?code=HD-20261110-001&from=2026-11-01&to=2026-11-10`

#### 2. Chi tiết hóa đơn
- **Endpoint:** `GET /api/orders/:id`
- **Vai trò:** Authenticated
- **Màn hình phụ thuộc:** Chi tiết hóa đơn (Frame `1:8916`, Hình 69, Bảng 94).
- **Độ ưu tiên:** **P0**
- **Response payload (200 OK):**
  ```json
  {
    "id": "ord_01",
    "code": "HD-20261110-001",
    "createdByName": "Nguyễn Văn A",
    "status": "COMPLETED",
    "subtotal": 170000,
    "discount": 0,
    "total": 170000,
    "createdAt": "2026-11-10T09:30:00.000Z",
    "items": [
      {
        "id": "item_01",
        "productName": "Dây giày tròn màu trắng 120cm",
        "quantity": 2,
        "unitPrice": 85000,
        "lineTotal": 170000
      }
    ],
    "payments": [
      {
        "method": "CASH",
        "amount": 200000,
        "status": "PAID"
      }
    ]
  }
  ```

---

### GAP-07: Thống kê & Báo cáo (Lane 6 · UC_5.1–5.2)

#### 1. Báo cáo doanh thu
- **Endpoint:** `GET /api/reports/revenue?from=2026-11-01&to=2026-11-10&period=day`
- **Vai trò:** `OWNER`
- **Màn hình phụ thuộc:** Báo cáo doanh thu (Frame `1:50619`, `1:51275`, Hình 104–105).
- **Độ ưu tiên:** **P0**
- **Response payload (200 OK):**
  ```json
  {
    "totalRevenue": 15450000,
    "totalOrders": 128,
    "timeline": [
      { "date": "2026-11-01", "revenue": 1500000, "orderCount": 12 },
      { "date": "2026-11-02", "revenue": 2100000, "orderCount": 18 }
    ]
  }
  ```

#### 2. Báo cáo số lượng hàng bán/trả
- **Endpoint:** `GET /api/reports/units?from=2026-11-01&to=2026-11-10`
- **Vai trò:** `OWNER`
- **Màn hình phụ thuộc:** Thống kê bán/trả (Frame `1:51955`, `1:52443`, Hình 106).
- **Độ ưu tiên:** **P0**

---

### GAP-08: Đổi hàng & Trả hàng (Lane 6 · UC_3.1–3.2)

- **Endpoint:** `POST /api/returns` (Trả hàng) và `POST /api/exchanges` (Đổi hàng)
- **Vai trò:** Authenticated
- **Màn hình phụ thuộc:** Đổi hàng (Hình 70–79), Trả hàng (Hình 80–86).
- **Độ ưu tiên:** **P1** (Sau mốc MVP 10 ngày; trước mắt dùng Mock Adapter).

---

### GAP-09: Xác thực & Phê duyệt di động / Zalo (Lane 4 & 6 · UC_9)

- **Endpoint:** `POST /api/approvals/request` và `POST /api/approvals/:id/verify`
- **Vai trò:** Authenticated & `OWNER`
- **Màn hình phụ thuộc:** Duyệt giá sỉ tại quầy/Zalo (Hình 61–62, 151–153), Duyệt đổi/trả (Hình 154–155).
- **Độ ưu tiên:** **P1** (Quy ước dùng Mock Adapter cho phê duyệt Zalo/tại quầy).

---

## 3. Bảng tổng hợp API Gaps theo thứ tự ưu tiên

| Mã Gap | Nhóm chức năng | Endpoint | Phương thức | Vai trò | Mức ưu tiên | Màn hình phụ thuộc | Giải pháp Frontend tạm thời |
|:---:|:---|:---|:---:|:---:|:---:|:---|:---|
| **GAP-02.1** | Danh mục | `/api/categories` | `GET` | Authenticated | **P0** | Quản lý danh mục `1:30676`, Bán hàng `1:10533` | Fixture danh mục chuẩn |
| **GAP-02.2** | Danh mục | `/api/categories` | `POST` | OWNER | **P0** | Thêm danh mục `1:30870` | Mock POST adapter |
| **GAP-02.3** | Danh mục | `/api/categories/:id` | `PATCH`/`DELETE` | OWNER | **P0** | Sửa/Xóa danh mục `1:32871`/`1:31908` | Mock mutate adapter |
| **GAP-03.1** | Sản phẩm & Giá | `/api/products/:id` | `PATCH` | OWNER | **P0** | Cập nhật giá `1:20601`, Sửa SP `1:22475` | Mock update adapter |
| **GAP-03.2** | Ngưỡng tồn | `/api/products/:id/thresholds` | `PATCH` | OWNER | **P0** | Thiết lập ngưỡng `1:25733` | Mock threshold adapter |
| **GAP-04.1** | Tồn kho | `/api/inventory` | `GET` | Authenticated | **P0** | Tra cứu tồn kho `1:34666` | Adapter tính động status |
| **GAP-05.1** | Nhập hàng | `/api/purchase-receipts` | `POST` | OWNER | **P0** | Tạo phiếu nhập `1:40624` | Mock receipt transaction |
| **GAP-05.2** | Lịch sử nhập | `/api/purchase-receipts` | `GET` | OWNER | **P0** | Lịch sử nhập hàng `1:29004` | Fixture lịch sử nhập |
| **GAP-06.1** | Hóa đơn | `/api/orders` | `GET` | Authenticated | **P0** | Tra cứu hóa đơn `1:8668` | Fixture đơn hàng |
| **GAP-06.2** | Hóa đơn | `/api/orders/:id` | `GET` | Authenticated | **P0** | Chi tiết hóa đơn `1:8916` | Fixture chi tiết hóa đơn |
| **GAP-07.1** | Báo cáo | `/api/reports/revenue` | `GET` | OWNER | **P0** | Báo cáo doanh thu `1:50619` | Fixture doanh thu |
| **GAP-07.2** | Báo cáo | `/api/reports/units` | `GET` | OWNER | **P0** | Hàng bán/trả `1:51955` | Fixture số lượng bán |
| **GAP-01.1** | Tài khoản | `/api/users/:id/password` | `PATCH` | ALL | **P1** | Đổi mật khẩu Hình 107 | Mock password adapter |
| **GAP-01.2** | Tài khoản | `/api/users` | `GET`/`POST` | OWNER | **P1** | Quản lý nhân viên Hình 113 | Fixture danh sách user |
| **GAP-01.3** | Tài khoản | `/api/users/:id/status` | `PATCH` | OWNER | **P1** | Vô hiệu hóa Hình 117 | Mock status adapter |
| **GAP-04.2** | Điều chỉnh tồn | `/api/inventory/adjustments` | `POST` | OWNER | **P1** | Điều chỉnh số tồn Hình 88 | Mock adjustment adapter |
| **GAP-08** | Đổi / Trả hàng | `/api/returns`, `/api/exchanges`| `POST` | Authenticated | **P1** | Đổi hàng Hình 70, Trả hàng Hình 80 | Mock return/exchange adapter |
| **GAP-09** | Phê duyệt | `/api/approvals/*` | `POST` | Authenticated | **P1** | Phê duyệt giá sỉ / Đổi trả | Mock Zalo/PIN verification |
