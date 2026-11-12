# KinKin POS MVP contracts

## Shared conventions

- API prefix: `/api`.
- Authentication: `Authorization: Bearer <token>`.
- Dates: ISO 8601 strings.
- Money and quantities: integers.
- List endpoints return `{ items, total }` when pagination is used.
- Error responses use NestJS HTTP status codes và thông báo tiếng Việt có nghĩa (`message`).

## Roles

```text
OWNER
EMPLOYEE
```

## Planned database entities

```text
User(id, username, passwordHash, name, phone, role, status, createdAt, updatedAt)
Category(id, code, name, status, createdAt, updatedAt)
Product(id, sku, categoryId, name, salePrice, costPrice, unit, stock, alertThreshold, agedStockThresholdDays, lastReceivedAt, status, createdAt, updatedAt)
PurchaseReceipt(id, code, createdById, status, totalCost, completedAt, createdAt)
PurchaseItem(id, receiptId, productId, quantity, unitCost, lineTotal)
Order(id, code, createdById, status, subtotal, discount, total, createdAt)
OrderItem(id, orderId, productId, productName, quantity, unitPrice, lineTotal)
Payment(id, orderId, method, amount, status, paidAt)
StockMovement(id, productId, type, quantityDelta, stockBefore, stockAfter, referenceType, referenceId, createdById, reason, createdAt)
```

Recommended status values (8 Enums):

```text
UserRole: OWNER, EMPLOYEE
UserStatus: ACTIVE, INACTIVE
RecordStatus: ACTIVE, INACTIVE
PurchaseStatus: DRAFT, COMPLETED, CANCELLED
OrderStatus: COMPLETED, CANCELLED
PaymentMethod: CASH, BANK_TRANSFER
PaymentStatus: PAID, FAILED
StockMovementType: RECEIPT, SALE, ADJUSTMENT
```

## Quy tắc tính trạng thái tồn kho (Inventory Status Resolution)

Để tránh bất đồng bộ dữ liệu, trạng thái tồn kho không lưu enum cứng trong database mà được tính động từ `stock`, `alertThreshold`, `agedStockThresholdDays` và `lastReceivedAt` theo thứ tự ưu tiên nghiêm ngặt (quy tắc chỉ nhận 1 trạng thái duy nhất):

1. **`OUT_OF_STOCK` (Hết hàng):** Khi `stock === 0`.
2. **`LOW_STOCK` (Sắp hết):** Khi `0 < stock <= alertThreshold`.
3. **`AGED` (Tồn lâu):** Khi `stock > alertThreshold` và số ngày kể từ `lastReceivedAt` đến hiện tại đạt hoặc vượt quá `agedStockThresholdDays` (`Math.floor((now - lastReceivedAt) / 86400000) >= agedStockThresholdDays`).
4. **`IN_STOCK` (Còn hàng):** Các trường hợp còn lại.

*Ghi chú MVP:* Báo cáo tính tuổi tồn theo lô cũ nhất còn hàng. Trong phạm vi MVP 10 ngày (chưa có quản lý lô chi tiết), hệ thống sử dụng ngày nhập của phiếu nhập gần nhất (`lastReceivedAt`) ở mức sản phẩm làm giá trị tính toán xấp xỉ hợp lệ theo BR-UC4.4-08.

## P0 API surface

### Authentication

```text
POST /auth/login
GET  /auth/me
```

### Users

```text
GET   /users                 OWNER
POST  /users                 OWNER
PATCH /users/:id             OWNER
PATCH /users/:id/status      OWNER
```

### Categories

```text
GET   /categories            authenticated
POST  /categories            OWNER
PATCH /categories/:id        OWNER
PATCH /categories/:id/status OWNER
```

### Products

```text
GET   /products              authenticated
GET   /products/:id          authenticated
POST  /products              OWNER
PATCH /products/:id          OWNER
PATCH /products/:id/status   OWNER
```

Quy tắc audit tồn kho khi tạo sản phẩm:
- `POST /products` chỉ tạo thông tin sản phẩm, giá bán, giá vốn (nếu có) và ngưỡng cảnh báo.
- Sản phẩm mới luôn được khởi tạo với tồn kho `stock = 0`. Client không được phép truyền `stock` khi tạo sản phẩm mới. Tồn kho chỉ được gia tăng qua Phiếu nhập hàng (UC_8.1) hoặc Điều chỉnh tồn kho (UC_4.1) kèm bản ghi `StockMovement`.

### Purchasing

```text
GET  /purchase-receipts      OWNER
GET  /purchase-receipts/:id  OWNER
POST /purchase-receipts      OWNER
```

Creating a purchase receipt is an atomic command in the MVP. It creates the receipt and lines, increases product stock, cập nhật `lastReceivedAt`, và ghi các bản ghi `StockMovement` trong một transaction duy nhất.

### Orders and invoices

```text
GET  /orders                 authenticated
GET  /orders/:id             authenticated
POST /orders                 authenticated
```

Creating an order is an atomic command:
- Kiểm tra tính hợp lệ của số lượng (> 0).
- Gộp các dòng có cùng `productId` trong request trước khi xử lý tồn kho.
- Cập nhật tồn kho có điều kiện (conditional update `stock >= quantityDelta`). Nếu không thỏa mãn điều kiện, transaction bị hủy và rollback toàn bộ.
- Tạo order và snapshot order items (`productName`, `unitPrice`, `lineTotal`).
- Tạo payment (`amount`, `method`, `status`).
- Trừ tồn kho nguyên tử và ghi nhận các bản ghi `StockMovement` (type `SALE`).

### Reports

```text
GET /reports/summary?from=<iso>&to=<iso> OWNER
```

Response:

```json
{
  "revenue": 0,
  "orderCount": 0,
  "unitsSold": 0
}
```

## Contract change procedure

Before changing an entity field, endpoint, request DTO, or response shape:

1. Update this file.
2. Notify all team members.
3. Update backend DTOs and Swagger.
4. Update frontend types and calls in the same pull request or a coordinated pair of pull requests.
5. Add or update a test that locks the new behavior.
