# 08 · Đổi hàng và trả hàng

## Cách triển khai

Luồng triển khai đề xuất từ tên trạng thái: tra cứu hóa đơn → chọn hàng/số lượng → phê duyệt → thu thêm/hoàn/đổi ngang giá → hoàn tất. Phải kiểm tra điều kiện chuyển bước từ nội dung và yêu cầu nghiệp vụ; tên frame không thay thế đặc tả chuyển trạng thái. Có mẫu quá thời hạn 72 giờ nhưng cần xác nhận phạm vi chính sách. Section “Huy” giữ riêng như nguồn biến thể, không coi đã bỏ. Thu thêm, hoàn tiền và đổi ngang giá phải khác cách hiển thị. Không xác nhận thanh toán/lưu tồn kho thật từ dữ liệu mô phỏng.

## Cách đọc dữ liệu nguồn

Bản trích xuất cấu trúc và văn bản, KHÔNG phải ảnh hay đặc tả hành vi hoàn chỉnh. text giữ nguyên chuỗi theo thứ tự cây layer, không đảm bảo thứ tự đọc trực quan. topLevelLayout chỉ mô tả frame con trực tiếp bằng tọa độ tương đối. Loại text có visible=false ở bản thân hoặc tổ tiên; chưa phân tích lớp che/mask. Tên trạng thái gợi ý kịch bản nhưng không chứng minh trigger, điều kiện hoặc quyền. Chưa xuất ảnh/font/logo/SVG; cần ảnh nguồn để đối chiếu hình học. Xem tài liệu 01 cho baseline và 04 cho nghiệm thu. Không nạp toàn bộ tài liệu này vào một tác vụ; lấy đúng nhóm nguồn cần thực hiện.

## UC\_3.1 · Đổi hàng

### UC\_3.1 · 21 · 16b.b · Hủy đơn khi chờ tiền về — 1:45947

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-45947) · 1440 × 900

```json
{
  "sourceNodeId": "1:45947",
  "name": "UC_3.1 · 21 · 16b.b · Hủy đơn khi chờ tiền về",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:45948",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:45979",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Chi tiết đổi hàng",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Sản phẩm nhận đổi · Đế cao su",
    "DE-001",
    "1",
    "250.000đ",
    "250.000đ",
    "Sản phẩm thay thế · Keo Dán Giày Scotch",
    "KE-002",
    "1",
    "350.000đ",
    "350.000đ",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "250.000đ",
    "Tổng tiền sản phẩm thay thế",
    "350.000đ",
    "Số tiền chênh lệch",
    "+100.000đ",
    "Đã hủy đơn đổi hàng",
    "Giữ nguyên trạng thái kho ban đầu"
  ]
}
```

### UC\_3.1 · 20 · 16b.a · Thanh toán chuyển khoản không thành công — 1:46039

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-46039) · 1440 × 900

```json
{
  "sourceNodeId": "1:46039",
  "name": "UC_3.1 · 20 · 16b.a · Thanh toán chuyển khoản không thành công",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:46040",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:46071",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Chi tiết đổi hàng",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Sản phẩm nhận đổi · Đế cao su",
    "DE-001",
    "1",
    "250.000đ",
    "250.000đ",
    "Sản phẩm thay thế · Keo Dán Giày Scotch",
    "KE-002",
    "1",
    "350.000đ",
    "350.000đ",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "250.000đ",
    "Tổng tiền sản phẩm thay thế",
    "350.000đ",
    "Số tiền chênh lệch",
    "+100.000đ",
    "Giao dịch không thành công"
  ]
}
```

### UC\_3.1 · 19 · 14b · Chủ cửa hàng từ chối phê duyệt — 1:46130

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-46130) · 1440 × 900

```json
{
  "sourceNodeId": "1:46130",
  "name": "UC_3.1 · 19 · 14b · Chủ cửa hàng từ chối phê duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:46131",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:46162",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Chi tiết đổi hàng",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Sản phẩm nhận đổi · Đế cao su",
    "DE-001",
    "1",
    "250.000đ",
    "250.000đ",
    "Sản phẩm thay thế · Keo Dán Giày Scotch",
    "KE-002",
    "1",
    "350.000đ",
    "350.000đ",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "250.000đ",
    "Tổng tiền sản phẩm thay thế",
    "350.000đ",
    "Số tiền chênh lệch",
    "+100.000đ",
    "Yêu cầu đổi hàng đã bị Chủ cửa hàng từ chối"
  ]
}
```

### UC\_3.1 · 18 · 14a · Hủy yêu cầu khi chờ duyệt — 1:46221

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-46221) · 1440 × 900

```json
{
  "sourceNodeId": "1:46221",
  "name": "UC_3.1 · 18 · 14a · Hủy yêu cầu khi chờ duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:46222",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:46253",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Chi tiết đổi hàng",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Sản phẩm nhận đổi · Đế cao su",
    "DE-001",
    "1",
    "250.000đ",
    "250.000đ",
    "Sản phẩm thay thế · Keo Dán Giày Scotch",
    "KE-002",
    "1",
    "350.000đ",
    "350.000đ",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "250.000đ",
    "Tổng tiền sản phẩm thay thế",
    "350.000đ",
    "Số tiền chênh lệch",
    "+100.000đ",
    "Đã hủy yêu cầu"
  ]
}
```

### UC\_3.1 · 17 · 10a · Không đủ tồn kho sản phẩm thay thế — 1:46312

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-46312) · 1440 × 900

```json
{
  "sourceNodeId": "1:46312",
  "name": "UC_3.1 · 17 · 10a · Không đủ tồn kho sản phẩm thay thế",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:46313",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:46344",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Sản phẩm trong hóa đơn gốc",
    "Sản phẩm",
    "Đơn giá",
    "Đã mua",
    "Còn được đổi",
    "Số lượng",
    "✓",
    "Đế cao su",
    "DE-001",
    "250.000đ",
    "2",
    "2",
    "−",
    "1",
    "+",
    "Keo Dán Giày X2000",
    "KE-001",
    "450.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Dây giày thun dẹt",
    "DG-001",
    "150.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Sản phẩm thay thế",
    "Nhập tên hoặc mã sản phẩm",
    "Sản phẩm",
    "Đơn giá",
    "Tồn kho",
    "Số lượng",
    "Keo Dán Giày Scotch",
    "KE-002",
    "350.000đ",
    "0",
    "−",
    "1",
    "+",
    "Keo Dán Giày SeaGlue",
    "KE-003",
    "320.000đ",
    "5",
    "−",
    "0",
    "+",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "—",
    "Tổng tiền sản phẩm thay thế",
    "—",
    "Số tiền chênh lệch",
    "—",
    "Số lượng tồn kho của sản phẩm thay thế không đủ"
  ]
}
```

### UC\_3.1 · 16 · 7a · Vượt số lượng còn được đổi — 1:46454

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-46454) · 1440 × 900

```json
{
  "sourceNodeId": "1:46454",
  "name": "UC_3.1 · 16 · 7a · Vượt số lượng còn được đổi",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:46455",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:46486",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Sản phẩm trong hóa đơn gốc",
    "Sản phẩm",
    "Đơn giá",
    "Đã mua",
    "Còn được đổi",
    "Số lượng",
    "✓",
    "Đế cao su",
    "DE-001",
    "250.000đ",
    "2",
    "1",
    "−",
    "2",
    "+",
    "Keo Dán Giày X2000",
    "KE-001",
    "450.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Dây giày thun dẹt",
    "DG-001",
    "150.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Sản phẩm thay thế",
    "Nhập tên hoặc mã sản phẩm",
    "Sản phẩm",
    "Đơn giá",
    "Tồn kho",
    "Số lượng",
    "Keo Dán Giày Scotch",
    "KE-002",
    "350.000đ",
    "8",
    "−",
    "1",
    "+",
    "Keo Dán Giày SeaGlue",
    "KE-003",
    "320.000đ",
    "5",
    "−",
    "0",
    "+",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "—",
    "Tổng tiền sản phẩm thay thế",
    "—",
    "Số tiền chênh lệch",
    "—",
    "Số lượng đổi vượt quá số lượng còn được phép đổi. Tối đa: 1."
  ]
}
```

### UC\_3.1 · 15 · 7a · Số lượng đổi bằng 0 — 1:46596

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-46596) · 1440 × 900

```json
{
  "sourceNodeId": "1:46596",
  "name": "UC_3.1 · 15 · 7a · Số lượng đổi bằng 0",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:46597",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:46628",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Sản phẩm trong hóa đơn gốc",
    "Sản phẩm",
    "Đơn giá",
    "Đã mua",
    "Còn được đổi",
    "Số lượng",
    "✓",
    "Đế cao su",
    "DE-001",
    "250.000đ",
    "2",
    "2",
    "−",
    "0",
    "+",
    "Keo Dán Giày X2000",
    "KE-001",
    "450.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Dây giày thun dẹt",
    "DG-001",
    "150.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Sản phẩm thay thế",
    "Sản phẩm",
    "Đơn giá",
    "Tồn kho",
    "Số lượng",
    "Keo Dán Giày Scotch",
    "−",
    "1",
    "+",
    "350.000đ",
    "8",
    "KE-002",
    "Keo Dán Giày SeaGlue",
    "−",
    "0",
    "+",
    "320.000đ",
    "5",
    "KE-003",
    "Nhập tên hoặc mã sản phẩm",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "—",
    "Tổng tiền sản phẩm thay thế",
    "—",
    "Số tiền chênh lệch",
    "—",
    "Số lượng đổi phải lớn hơn 0."
  ]
}
```

### UC\_3.1 · 14 · 3a · Quá thời hạn 72 giờ — 1:46738

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-46738) · 1440 × 900

```json
{
  "sourceNodeId": "1:46738",
  "name": "UC_3.1 · 14 · 3a · Quá thời hạn 72 giờ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:46739",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:46770",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Mã hóa đơn",
    "HD-261101-0086",
    "Tra cứu hóa đơn",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Danh sách sản phẩm",
    "Sản phẩm",
    "Đơn giá",
    "Số lượng",
    "Thành tiền",
    "Đế cao su",
    "DE-001",
    "250.000đ",
    "2",
    "500.000đ",
    "Keo Dán Giày X2000",
    "KE-001",
    "450.000đ",
    "1",
    "450.000đ",
    "Dây giày thun dẹt",
    "DG-001",
    "150.000đ",
    "1",
    "150.000đ",
    "Hóa đơn đã quá thời hạn đổi hàng (72 giờ)"
  ]
}
```

### UC\_3.1 · 13 · 2a · Không tìm thấy hóa đơn — 1:46834

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-46834) · 1440 × 900

```json
{
  "sourceNodeId": "1:46834",
  "name": "UC_3.1 · 13 · 2a · Không tìm thấy hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:46835",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:46866",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Mã hóa đơn",
    "HD-261101-0999",
    "Tra cứu hóa đơn",
    "Không tìm thấy hóa đơn"
  ]
}
```

### UC\_3.1 · 12 · 1a · Bỏ trống mã hóa đơn — 1:46894

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-46894) · 1440 × 900

```json
{
  "sourceNodeId": "1:46894",
  "name": "UC_3.1 · 12 · 1a · Bỏ trống mã hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:46895",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:46926",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Mã hóa đơn",
    "Nhập mã hóa đơn",
    "Vui lòng điền đầy đủ các thông tin bắt buộc",
    "Tra cứu hóa đơn"
  ]
}
```

### UC\_3.1 · 11 · 16c.4 + B17 · Đã hoàn tiền · Hoàn tất đổi hàng — 1:46953

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-46953) · 1440 × 900

```json
{
  "sourceNodeId": "1:46953",
  "name": "UC_3.1 · 11 · 16c.4 + B17 · Đã hoàn tiền · Hoàn tất đổi hàng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:46954",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:46985",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Chi tiết đổi hàng",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Sản phẩm nhận đổi · Đế cao su",
    "DE-001",
    "1",
    "250.000đ",
    "250.000đ",
    "Sản phẩm thay thế · Dây giày thun dẹt",
    "DG-001",
    "1",
    "150.000đ",
    "150.000đ",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "250.000đ",
    "Tổng tiền sản phẩm thay thế",
    "150.000đ",
    "Số tiền đã hoàn lại cho khách hàng",
    "100.000đ",
    "Đã ghi nhận hoàn tiền chênh lệch thành công",
    "Hoàn tất đổi hàng"
  ]
}
```

### UC\_3.1 · 10 · 16c.1–16c.3 · Hoàn tiền mặt — 1:47046

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-47046) · 1440 × 900

```json
{
  "sourceNodeId": "1:47046",
  "name": "UC_3.1 · 10 · 16c.1–16c.3 · Hoàn tiền mặt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:47047",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:47075",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Hoàn tiền mặt",
    "Đã được Chủ cửa hàng phê duyệt",
    "Tiền mặt",
    "Số tiền cần hoàn lại cho khách hàng",
    "100.000đ",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "250.000đ",
    "Tổng tiền sản phẩm thay thế",
    "150.000đ",
    "Số tiền cần hoàn lại cho khách hàng",
    "100.000đ",
    "Xác nhận đã hoàn tiền"
  ]
}
```

### UC\_3.1 · 09 · 16b.5 + B17 · Giao dịch hoàn tất · Hoàn tất đổi hàng — 1:47121

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-47121) · 1440 × 900

```json
{
  "sourceNodeId": "1:47121",
  "name": "UC_3.1 · 09 · 16b.5 + B17 · Giao dịch hoàn tất · Hoàn tất đổi hàng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:47122",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:47153",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Chi tiết đổi hàng",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Sản phẩm nhận đổi · Đế cao su",
    "DE-001",
    "1",
    "250.000đ",
    "250.000đ",
    "Sản phẩm thay thế · Keo Dán Giày Scotch",
    "KE-002",
    "1",
    "350.000đ",
    "350.000đ",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "250.000đ",
    "Tổng tiền sản phẩm thay thế",
    "350.000đ",
    "Số tiền chênh lệch",
    "+100.000đ",
    "Giao dịch hoàn tất",
    "Hoàn tất đổi hàng"
  ]
}
```

### UC\_3.1 · 08 · 16b.1–16b.4 · Chuyển khoản · Chờ tiền về — 1:47214

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-47214) · 1440 × 900

```json
{
  "sourceNodeId": "1:47214",
  "name": "UC_3.1 · 08 · 16b.1–16b.4 · Chuyển khoản · Chờ tiền về",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:47215",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:47246",
      "name": "Workspace",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Chuyển khoản",
    "Chờ tiền về",
    "Số tiền chênh lệch cần thu thêm",
    "100.000đ",
    "Nội dung chuyển khoản",
    "DH-261102-0001",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "250.000đ",
    "Tổng tiền sản phẩm thay thế",
    "350.000đ",
    "Số tiền chênh lệch",
    "+100.000đ",
    "Hủy"
  ]
}
```

### UC\_3.1 · 07 · 16a.4 + B17 · Đã thu tiền · Hoàn tất đổi hàng — 1:47304

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-47304) · 1440 × 900

```json
{
  "sourceNodeId": "1:47304",
  "name": "UC_3.1 · 07 · 16a.4 + B17 · Đã thu tiền · Hoàn tất đổi hàng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:47305",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:47336",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Chi tiết đổi hàng",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Sản phẩm nhận đổi · Đế cao su",
    "DE-001",
    "1",
    "250.000đ",
    "250.000đ",
    "Sản phẩm thay thế · Keo Dán Giày Scotch",
    "KE-002",
    "1",
    "350.000đ",
    "350.000đ",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "250.000đ",
    "Tổng tiền sản phẩm thay thế",
    "350.000đ",
    "Số tiền chênh lệch",
    "+100.000đ",
    "Đã ghi nhận thu tiền chênh lệch thành công",
    "Hoàn tất đổi hàng"
  ]
}
```

### UC\_3.1 · 06 · 16a.1–16a.3 · Thu thêm tiền mặt — 1:47397

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-47397) · 1440 × 900

```json
{
  "sourceNodeId": "1:47397",
  "name": "UC_3.1 · 06 · 16a.1–16a.3 · Thu thêm tiền mặt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:47398",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:47429",
      "name": "Thanh toán đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Phương thức thanh toán",
    "Đã được Chủ cửa hàng phê duyệt",
    "◉",
    "Tiền mặt",
    "○",
    "Chuyển khoản",
    "Số tiền chênh lệch cần thu thêm",
    "100.000đ",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "250.000đ",
    "Tổng tiền sản phẩm thay thế",
    "350.000đ",
    "Số tiền chênh lệch",
    "+100.000đ",
    "Xác nhận đã thu tiền"
  ]
}
```

### UC\_3.1 · 05 · B18–20 · Đổi hàng thành công — 1:47480

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-47480) · 1440 × 900

```json
{
  "sourceNodeId": "1:47480",
  "name": "UC_3.1 · 05 · B18–20 · Đổi hàng thành công",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:47481",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:47512",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Hóa đơn đổi hàng · DH-261102-0001",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Sản phẩm nhận đổi · Đế cao su",
    "DE-001",
    "1",
    "250.000đ",
    "250.000đ",
    "Sản phẩm thay thế · Keo Dán Giày Scotch",
    "KE-002",
    "1",
    "350.000đ",
    "350.000đ",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "250.000đ",
    "Tổng tiền sản phẩm thay thế",
    "350.000đ",
    "Số tiền chênh lệch",
    "+100.000đ",
    "Đổi hàng thành công",
    "Đã lưu và in hóa đơn đổi hàng"
  ]
}
```

### UC\_3.1 · 04 · B15–17 · Đổi ngang giá và hoàn tất — 1:47572

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-47572) · 1440 × 900

```json
{
  "sourceNodeId": "1:47572",
  "name": "UC_3.1 · 04 · B15–17 · Đổi ngang giá và hoàn tất",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:47573",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:47604",
      "name": "Workspace",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Chi tiết đổi hàng",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Sản phẩm nhận đổi · Đế cao su",
    "DE-001",
    "1",
    "250.000đ",
    "250.000đ",
    "Sản phẩm thay thế · Đế da",
    "DE-002",
    "1",
    "250.000đ",
    "250.000đ",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "250.000đ",
    "Tổng tiền sản phẩm thay thế",
    "250.000đ",
    "Số tiền chênh lệch",
    "0đ",
    "Không phát sinh khoản thu thêm hoặc hoàn tiền",
    "Hoàn tất đổi hàng"
  ]
}
```

### UC\_3.1 · 03 · B14 · Chờ duyệt — 1:47665

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-47665) · 1440 × 900

```json
{
  "sourceNodeId": "1:47665",
  "name": "UC_3.1 · 03 · B14 · Chờ duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:47666",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:47697",
      "name": "3. Phê duyệt yêu cầu",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Chi tiết đổi hàng",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Sản phẩm nhận đổi · Đế cao su",
    "DE-001",
    "1",
    "250.000đ",
    "250.000đ",
    "Sản phẩm thay thế · Keo Dán Giày Scotch",
    "KE-002",
    "1",
    "350.000đ",
    "350.000đ",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "250.000đ",
    "Tổng tiền sản phẩm thay thế",
    "350.000đ",
    "Số tiền chênh lệch",
    "+100.000đ",
    "Chờ duyệt",
    "Hủy yêu cầu"
  ]
}
```

### UC\_3.1 · 02 · B05–13 · Chọn sản phẩm và gửi yêu cầu duyệt — 1:47758

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-47758) · 1440 × 900

```json
{
  "sourceNodeId": "1:47758",
  "name": "UC_3.1 · 02 · B05–13 · Chọn sản phẩm và gửi yêu cầu duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:47759",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:47790",
      "name": "2. Chọn sản phẩm đổi",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Sản phẩm trong hóa đơn gốc",
    "Sản phẩm",
    "Đơn giá",
    "Đã mua",
    "Còn được đổi",
    "Số lượng",
    "✓",
    "Đế cao su",
    "DE-001",
    "250.000đ",
    "2",
    "2",
    "−",
    "1",
    "+",
    "Keo Dán Giày X2000",
    "KE-001",
    "450.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Dây giày thun dẹt",
    "DG-001",
    "150.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Sản phẩm thay thế",
    "Sản phẩm",
    "Đơn giá",
    "Tồn kho",
    "Số lượng",
    "Keo Dán Giày Scotch",
    "KE-002",
    "350.000đ",
    "8",
    "−",
    "1",
    "+",
    "Keo Dán Giày SeaGlue",
    "KE-003",
    "320.000đ",
    "5",
    "−",
    "0",
    "+",
    "Nhập tên hoặc mã sản phẩm",
    "Chi tiết đổi hàng",
    "Tổng tiền sản phẩm nhận đổi",
    "250.000đ",
    "Tổng tiền sản phẩm thay thế",
    "350.000đ",
    "Số tiền chênh lệch",
    "+100.000đ",
    "Gửi yêu cầu duyệt"
  ]
}
```

### UC\_3.1 · 01 · B01–04 · Hóa đơn gốc — 1:47900

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-47900) · 1440 × 900

```json
{
  "sourceNodeId": "1:47900",
  "name": "UC_3.1 · 01 · B01–04 · Hóa đơn gốc",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:47901",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:47932",
      "name": "1. Tra cứu hóa đơn",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Mã hóa đơn",
    "HD-261101-0086",
    "Tra cứu hóa đơn",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Danh sách sản phẩm",
    "Sản phẩm",
    "Đơn giá",
    "Số lượng",
    "Thành tiền",
    "Đế cao su",
    "DE-001",
    "250.000đ",
    "2",
    "500.000đ",
    "Keo Dán Giày X2000",
    "KE-001",
    "450.000đ",
    "1",
    "450.000đ",
    "Dây giày thun dẹt",
    "DG-001",
    "150.000đ",
    "1",
    "150.000đ",
    "Đổi hàng"
  ]
}
```

## UC\_3.1 · 00 Nhập mã hóa đơn

### UC\_3.1 · 00 Nhập mã hóa đơn — 1:47995

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-47995) · 1440 × 900

```json
{
  "sourceNodeId": "1:47995",
  "name": "UC_3.1 · 00 Nhập mã hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:47996",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:48027",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi hàng",
    "Mã hóa đơn",
    "Nhập mã hóa đơn",
    "Tra cứu hóa đơn"
  ]
}
```

## UC\_3.2 · Trả hàng

### UC\_3.2 · 16 · 11b · Yêu cầu trả hàng không được phê duyệt — 1:44575

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-44575) · 1440 × 900

```json
{
  "sourceNodeId": "1:44575",
  "name": "UC_3.2 · 16 · 11b · Yêu cầu trả hàng không được phê duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:44576",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:44605",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Chi tiết trả hàng",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Đế cao su",
    "DE-001 · LO-DE-261001",
    "1",
    "250.000đ",
    "250.000đ",
    "Chi tiết trả hàng",
    "Sản phẩm trả",
    "Đế cao su",
    "Số lượng",
    "1",
    "Số tiền cần hoàn lại cho khách hàng",
    "250.000đ",
    "Yêu cầu trả hàng không được phê duyệt"
  ]
}
```

### UC\_3.2 · 15 · 11a · Hủy yêu cầu khi chờ duyệt — 1:44657

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-44657) · 1440 × 900

```json
{
  "sourceNodeId": "1:44657",
  "name": "UC_3.2 · 15 · 11a · Hủy yêu cầu khi chờ duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:44658",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:44687",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Chi tiết trả hàng",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Đế cao su",
    "DE-001 · LO-DE-261001",
    "1",
    "250.000đ",
    "250.000đ",
    "Chi tiết trả hàng",
    "Sản phẩm trả",
    "Đế cao su",
    "Số lượng",
    "1",
    "Số tiền cần hoàn lại cho khách hàng",
    "250.000đ",
    "Đã hủy yêu cầu"
  ]
}
```

### UC\_3.2 · 14 · 7a · Vượt số lượng còn được trả — 1:44739

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-44739) · 1440 × 900

```json
{
  "sourceNodeId": "1:44739",
  "name": "UC_3.2 · 14 · 7a · Vượt số lượng còn được trả",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:44740",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:44769",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Sản phẩm trong hóa đơn gốc",
    "Sản phẩm",
    "Đơn giá",
    "Đã mua",
    "Còn được trả",
    "Số lượng",
    "✓",
    "Đế cao su",
    "DE-001 · LO-DE-261001",
    "250.000đ",
    "2",
    "2",
    "−",
    "3",
    "+",
    "Keo Dán Giày X2000",
    "KE-001 · LO-KE-261015",
    "450.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Dây giày thun dẹt",
    "DG-001 · LO-DG-261020",
    "150.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Chi tiết trả hàng",
    "Sản phẩm trả",
    "Đế cao su",
    "Số lượng",
    "—",
    "Số tiền cần hoàn lại cho khách hàng",
    "—",
    "Số lượng trả vượt quá số lượng còn được phép trả của lô hàng. Tối đa: 2."
  ]
}
```

### UC\_3.2 · 13 · 7a · Số lượng trả âm — 1:44850

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-44850) · 1440 × 900

```json
{
  "sourceNodeId": "1:44850",
  "name": "UC_3.2 · 13 · 7a · Số lượng trả âm",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:44851",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:44880",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Sản phẩm trong hóa đơn gốc",
    "Sản phẩm",
    "Đơn giá",
    "Đã mua",
    "Còn được trả",
    "Số lượng",
    "✓",
    "Đế cao su",
    "DE-001 · LO-DE-261001",
    "250.000đ",
    "2",
    "2",
    "−",
    "-1",
    "+",
    "Keo Dán Giày X2000",
    "KE-001 · LO-KE-261015",
    "450.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Dây giày thun dẹt",
    "DG-001 · LO-DG-261020",
    "150.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Chi tiết trả hàng",
    "Sản phẩm trả",
    "Đế cao su",
    "Số lượng",
    "—",
    "Số tiền cần hoàn lại cho khách hàng",
    "—",
    "Số lượng trả phải lớn hơn 0."
  ]
}
```

### UC\_3.2 · 12 · 7a · Số lượng trả bằng 0 — 1:44961

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-44961) · 1440 × 900

```json
{
  "sourceNodeId": "1:44961",
  "name": "UC_3.2 · 12 · 7a · Số lượng trả bằng 0",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:44962",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:44991",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Sản phẩm trong hóa đơn gốc",
    "Sản phẩm",
    "Đơn giá",
    "Đã mua",
    "Còn được trả",
    "Số lượng",
    "✓",
    "Đế cao su",
    "DE-001 · LO-DE-261001",
    "250.000đ",
    "2",
    "2",
    "−",
    "0",
    "+",
    "Keo Dán Giày X2000",
    "KE-001 · LO-KE-261015",
    "450.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Dây giày thun dẹt",
    "DG-001 · LO-DG-261020",
    "150.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Chi tiết trả hàng",
    "Sản phẩm trả",
    "Đế cao su",
    "Số lượng",
    "—",
    "Số tiền cần hoàn lại cho khách hàng",
    "—",
    "Số lượng trả phải lớn hơn 0."
  ]
}
```

### UC\_3.2 · 11 · 3a · Quá thời hạn 72 giờ — 1:45072

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-45072) · 1440 × 900

```json
{
  "sourceNodeId": "1:45072",
  "name": "UC_3.2 · 11 · 3a · Quá thời hạn 72 giờ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:45073",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:45102",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Mã hóa đơn",
    "HD-261101-0086",
    "Tra cứu hóa đơn",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Danh sách sản phẩm",
    "Sản phẩm",
    "Đơn giá",
    "Số lượng",
    "Thành tiền",
    "Đế cao su",
    "DE-001 · LO-DE-261001",
    "250.000đ",
    "2",
    "500.000đ",
    "Keo Dán Giày X2000",
    "KE-001 · LO-KE-261015",
    "450.000đ",
    "1",
    "450.000đ",
    "Dây giày thun dẹt",
    "DG-001 · LO-DG-261020",
    "150.000đ",
    "1",
    "150.000đ",
    "Hóa đơn đã quá thời hạn trả hàng (72 giờ)"
  ]
}
```

### UC\_3.2 · 10 · 2a · Không tìm thấy hóa đơn — 1:45166

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-45166) · 1440 × 900

```json
{
  "sourceNodeId": "1:45166",
  "name": "UC_3.2 · 10 · 2a · Không tìm thấy hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:45167",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:45196",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Mã hóa đơn",
    "HD-261101-0999",
    "Tra cứu hóa đơn",
    "Không tìm thấy hóa đơn"
  ]
}
```

### UC\_3.2 · 09 · 1a · Bỏ trống mã hóa đơn — 1:45224

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-45224) · 1440 × 900

```json
{
  "sourceNodeId": "1:45224",
  "name": "UC_3.2 · 09 · 1a · Bỏ trống mã hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:45225",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:45254",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Mã hóa đơn",
    "Nhập mã hóa đơn",
    "Vui lòng điền đầy đủ các thông tin bắt buộc",
    "Tra cứu hóa đơn"
  ]
}
```

### UC\_3.2 · 08 · B17–19 · Xử lý trả hàng thành công — 1:45281

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-45281) · 1440 × 900

```json
{
  "sourceNodeId": "1:45281",
  "name": "UC_3.2 · 08 · B17–19 · Xử lý trả hàng thành công",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:45282",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:45311",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Hóa đơn trả hàng · TH-261102-0001",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Đế cao su",
    "DE-001 · LO-DE-261001",
    "1",
    "250.000đ",
    "250.000đ",
    "Chi tiết trả hàng",
    "Sản phẩm trả",
    "Đế cao su",
    "Số lượng",
    "1",
    "Số tiền đã hoàn lại cho khách hàng",
    "250.000đ",
    "Xử lý trả hàng thành công",
    "Đã lưu và in hóa đơn trả hàng"
  ]
}
```

### UC\_3.2 · 07 · B15–16 · Đã hoàn tiền · Hoàn tất — 1:45364

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-45364) · 1440 × 900

```json
{
  "sourceNodeId": "1:45364",
  "name": "UC_3.2 · 07 · B15–16 · Đã hoàn tiền · Hoàn tất",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:45365",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:45394",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Chi tiết trả hàng",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Đế cao su",
    "DE-001 · LO-DE-261001",
    "1",
    "250.000đ",
    "250.000đ",
    "Chi tiết trả hàng",
    "Sản phẩm trả",
    "Đế cao su",
    "Số lượng",
    "1",
    "Số tiền đã hoàn lại cho khách hàng",
    "250.000đ",
    "Đã ghi nhận hoàn tiền thành công",
    "Hoàn tất"
  ]
}
```

### UC\_3.2 · 06 · B13–14 · Hoàn tiền mặt — 1:45448

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-45448) · 1440 × 900

```json
{
  "sourceNodeId": "1:45448",
  "name": "UC_3.2 · 06 · B13–14 · Hoàn tiền mặt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:45449",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:45473",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Hoàn tiền mặt",
    "Đã được Chủ cửa hàng phê duyệt",
    "Tiền mặt",
    "Số tiền cần hoàn lại cho khách hàng",
    "250.000đ",
    "Chi tiết trả hàng",
    "Sản phẩm trả",
    "Đế cao su",
    "Số lượng",
    "1",
    "Số tiền cần hoàn lại cho khách hàng",
    "250.000đ",
    "Xác nhận đã hoàn tiền"
  ]
}
```

### UC\_3.2 · 05 · B12 · Được Chủ cửa hàng phê duyệt — 1:45519

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-45519) · 1440 × 900

```json
{
  "sourceNodeId": "1:45519",
  "name": "UC_3.2 · 05 · B12 · Được Chủ cửa hàng phê duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:45520",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:45549",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Tra cứu tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Ghi nhận nhập hàng mới",
    "Thiết lập ngưỡng cảnh báo",
    "Xem lịch sử nhập hàng",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Chi tiết trả hàng",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Đế cao su",
    "DE-001 · LO-DE-261001",
    "1",
    "250.000đ",
    "250.000đ",
    "Chi tiết trả hàng",
    "Sản phẩm trả",
    "Đế cao su",
    "Số lượng",
    "1",
    "Số tiền cần hoàn lại cho khách hàng",
    "250.000đ",
    "Đã được Chủ cửa hàng phê duyệt"
  ]
}
```

### UC\_3.2 · 04 · B11 · Chờ duyệt — 1:45601

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-45601) · 1440 × 900

```json
{
  "sourceNodeId": "1:45601",
  "name": "UC_3.2 · 04 · B11 · Chờ duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:45602",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:45631",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Chi tiết trả hàng",
    "Sản phẩm",
    "Số lượng",
    "Đơn giá",
    "Thành tiền",
    "Đế cao su",
    "DE-001 · LO-DE-261001",
    "1",
    "250.000đ",
    "250.000đ",
    "Chi tiết trả hàng",
    "Sản phẩm trả",
    "Đế cao su",
    "Số lượng",
    "1",
    "Số tiền cần hoàn lại cho khách hàng",
    "250.000đ",
    "Chờ duyệt",
    "Hủy yêu cầu"
  ]
}
```

### UC\_3.2 · 03 · B05–10 · Chọn sản phẩm và gửi yêu cầu duyệt — 1:45685

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-45685) · 1440 × 900

```json
{
  "sourceNodeId": "1:45685",
  "name": "UC_3.2 · 03 · B05–10 · Chọn sản phẩm và gửi yêu cầu duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:45686",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:45715",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Sản phẩm trong hóa đơn gốc",
    "Sản phẩm",
    "Đơn giá",
    "Đã mua",
    "Còn được trả",
    "Số lượng",
    "✓",
    "Đế cao su",
    "DE-001 · LO-DE-261001",
    "250.000đ",
    "2",
    "2",
    "−",
    "1",
    "+",
    "Keo Dán Giày X2000",
    "KE-001 · LO-KE-261015",
    "450.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Dây giày thun dẹt",
    "DG-001 · LO-DG-261020",
    "150.000đ",
    "1",
    "1",
    "−",
    "0",
    "+",
    "Chi tiết trả hàng",
    "Sản phẩm trả",
    "Đế cao su",
    "Số lượng",
    "1",
    "Số tiền cần hoàn lại cho khách hàng",
    "250.000đ",
    "Gửi yêu cầu duyệt"
  ]
}
```

### UC\_3.2 · 02 · B02–04 · Hóa đơn gốc — 1:45796

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-45796) · 1440 × 900

```json
{
  "sourceNodeId": "1:45796",
  "name": "UC_3.2 · 02 · B02–04 · Hóa đơn gốc",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:45797",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:45826",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Mã hóa đơn",
    "HD-261101-0086",
    "Tra cứu hóa đơn",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Phương thức thanh toán hóa đơn gốc",
    "Tiền mặt",
    "Danh sách sản phẩm",
    "Sản phẩm",
    "Đơn giá",
    "Số lượng",
    "Thành tiền",
    "Đế cao su",
    "DE-001 · LO-DE-261001",
    "250.000đ",
    "2",
    "500.000đ",
    "Keo Dán Giày X2000",
    "KE-001 · LO-KE-261015",
    "450.000đ",
    "1",
    "450.000đ",
    "Dây giày thun dẹt",
    "DG-001 · LO-DG-261020",
    "150.000đ",
    "1",
    "150.000đ",
    "Trả hàng"
  ]
}
```

### UC\_3.2 · 01 · B01 · Nhập mã hóa đơn — 1:45889

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-45889) · 1440 × 900

```json
{
  "sourceNodeId": "1:45889",
  "name": "UC_3.2 · 01 · B01 · Nhập mã hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:45890",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:45919",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng",
    "Mã hóa đơn",
    "Nhập mã hóa đơn",
    "Tra cứu hóa đơn"
  ]
}
```

## Huy

### 12 · Hoàn tất · Đổi hàng thành công — 1:4910

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4910) · 1440 × 900

```json
{
  "sourceNodeId": "1:4910",
  "name": "12 · Hoàn tất · Đổi hàng thành công",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:4911",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:4942",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Về tra cứu",
    "In lại",
    "Xem hóa đơn",
    "Giao dịch đã lưu · Hóa đơn DH-261102-0001 đã lưu và đã in thành công.",
    "Tồn kho đã cập nhật: +1 AT-001 / −1 AP-002",
    "Đã thu đủ 100.000đ · Tiền mặt · Kết quả thanh toán đã lưu",
    "+100.000đ",
    "Chênh lệch · Thu thêm",
    "350.000đ",
    "Tổng thay thế",
    "250.000đ",
    "Tổng nhận đổi",
    "350.000đ",
    "350.000đ",
    "1",
    "AP-002 · Xanh navy · M",
    "Áo polo classic",
    "Thay thế",
    "250.000đ",
    "250.000đ",
    "1",
    "AT-001 · Trắng · M",
    "Áo thun basic",
    "Nhận đổi",
    "Thành tiền",
    "Đơn giá",
    "Số lượng",
    "Sản phẩm / Phân loại",
    "Loại",
    "Tham chiếu hóa đơn gốc HD-261101-0086 · 02/11/2026 09:30",
    "Hóa đơn đổi hàng · DH-261102-0001",
    "Đã lưu · Đã in",
    "Đổi hàng thành công",
    "Hóa đơn đổi hàng đã lưu và đã in thành công",
    "Đã lưu giao dịch · Đã cập nhật tồn kho",
    "Mai Linh · Chủ cửa hàng (Admin) đã duyệt.",
    "Đổi hàng thành công",
    "Xử lý: 02/11/2026 09:30 · Đã qua 23/72 giờ",
    "Tiền mặt",
    "Thanh toán gốc",
    "1.100.000đ",
    "Tổng tiền hóa đơn",
    "01/11/2026 10:30",
    "Thời điểm bán",
    "Hóa đơn gốc · HD-261101-0086",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng"
  ]
}
```

### 11 · 16c · Đã hoàn tiền mặt — 1:5020

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-5020) · 1440 × 900

```json
{
  "sourceNodeId": "1:5020",
  "name": "11 · 16c · Đã hoàn tiền mặt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:5021",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:5052",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Xác nhận hoàn tất đổi hàng",
    "Đổi hàng chưa hoàn tất. Xác nhận để cập nhật tồn kho và lưu/in hóa đơn.",
    "Không còn khoản cần hoàn.",
    "Nhân viên đã xác nhận hoàn đủ. Kết quả hoàn tiền đã được lưu.",
    "Đã hoàn khách 100.000đ · Tiền mặt",
    "−100.000đ",
    "Chênh lệch · Hoàn khách",
    "150.000đ",
    "Tổng thay thế",
    "250.000đ",
    "Tổng nhận đổi",
    "Thay thế: 1 Túi tote canvas · TT-003 · Kem · 150.000đ",
    "Nhận đổi: 1 Áo thun basic · AT-001 · Trắng · M · 250.000đ",
    "Hoàn tiền · Tiền mặt · Đã hoàn đủ",
    "Chưa lưu tồn kho · Chưa lưu/in hóa đơn đổi",
    "Chờ xác nhận hoàn tất đổi hàng.",
    "Mai Linh đã duyệt · Đã hoàn đủ tiền mặt.",
    "Đã được chủ cửa hàng phê duyệt",
    "Xử lý: 02/11/2026 09:30 · Đã qua 23/72 giờ",
    "Tiền mặt",
    "Thanh toán gốc",
    "1.100.000đ",
    "Tổng tiền hóa đơn",
    "01/11/2026 10:30",
    "Thời điểm bán",
    "Hóa đơn gốc · HD-261101-0086",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng"
  ]
}
```

### 10 · 16a · Đã thu tiền mặt — 1:5106

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-5106) · 1440 × 900

```json
{
  "sourceNodeId": "1:5106",
  "name": "10 · 16a · Đã thu tiền mặt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:5107",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:5138",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Xác nhận hoàn tất đổi hàng",
    "Đổi hàng chưa hoàn tất. Xác nhận để cập nhật tồn kho và lưu/in hóa đơn.",
    "Không còn khoản cần thu.",
    "Nhân viên đã xác nhận thu đủ. Kết quả thanh toán đã được lưu.",
    "Đã thu 100.000đ · Tiền mặt",
    "+100.000đ",
    "Chênh lệch · Thu thêm",
    "350.000đ",
    "Tổng thay thế",
    "250.000đ",
    "Tổng nhận đổi",
    "Thay thế: 1 Áo polo classic · AP-002 · Xanh navy · M · 350.000đ",
    "Nhận đổi: 1 Áo thun basic · AT-001 · Trắng · M · 250.000đ",
    "Thu thêm bằng tiền mặt · Đã thu đủ",
    "Chưa lưu tồn kho · Chưa lưu/in hóa đơn đổi",
    "Chờ xác nhận hoàn tất đổi hàng.",
    "Mai Linh đã duyệt · Đã thu đủ tiền mặt.",
    "Đã được chủ cửa hàng phê duyệt",
    "Xử lý: 02/11/2026 09:30 · Đã qua 23/72 giờ",
    "Tiền mặt",
    "Thanh toán gốc",
    "1.100.000đ",
    "Tổng tiền hóa đơn",
    "01/11/2026 10:30",
    "Thời điểm bán",
    "Hóa đơn gốc · HD-261101-0086",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng"
  ]
}
```

### 09 · 16b · Chuyển khoản được xác nhận — 1:5192

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-5192) · 1440 × 900

```json
{
  "sourceNodeId": "1:5192",
  "name": "09 · 16b · Chuyển khoản được xác nhận",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:5193",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:5224",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Xác nhận hoàn tất đổi hàng",
    "Đổi hàng chưa hoàn tất. Xác nhận để lưu giao dịch, cập nhật tồn kho và lưu/in hóa đơn.",
    "Thanh toán thành công · Kết quả đã lưu · Khách không cần chuyển thêm.",
    "Nội dung giao dịch: DH-HD2611010086",
    "Ngân hàng đã tự động xác nhận nhận 100.000đ.",
    "Giao dịch hoàn tất",
    "+100.000đ",
    "Chênh lệch · Thu thêm",
    "350.000đ",
    "Tổng thay thế",
    "250.000đ",
    "Tổng nhận đổi",
    "Thay thế: 1 Áo polo classic · AP-002 · Xanh navy · M · 350.000đ",
    "Nhận đổi: 1 Áo thun basic · AT-001 · Trắng · M · 250.000đ",
    "Thu thêm · Chuyển khoản",
    "Chưa lưu tồn kho · Chưa lưu/in hóa đơn đổi",
    "Chờ xác nhận hoàn tất đổi hàng.",
    "Mai Linh đã duyệt · Thanh toán thành công.",
    "Đã được chủ cửa hàng phê duyệt",
    "Xử lý: 02/11/2026 09:30 · Đã qua 23/72 giờ",
    "Tiền mặt",
    "Thanh toán gốc",
    "1.100.000đ",
    "Tổng tiền hóa đơn",
    "01/11/2026 10:30",
    "Thời điểm bán",
    "Hóa đơn gốc · HD-261101-0086",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng"
  ]
}
```

### 08 · 18a · Chờ xử lý do lỗi lưu tồn kho — 1:5279

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-5279) · 1440 × 900

```json
{
  "sourceNodeId": "1:5279",
  "name": "08 · 18a · Chờ xử lý do lỗi lưu tồn kho",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:5280",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:5311",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Về tra cứu",
    "Xem chi tiết",
    "Đổi hàng chưa hoàn tất · Chưa lưu/in hóa đơn đổi hàng",
    "Dự kiến: +1 AT-001 · Áo thun basic / −1 AP-002 · Áo polo classic",
    "Tồn kho chưa được lưu thành công",
    "Đã xác nhận và lưu kết quả thanh toán. Không thu tiền lại.",
    "Đã thu 100.000đ · Tiền mặt",
    "+100.000đ",
    "Chênh lệch · Thu thêm",
    "350.000đ",
    "Tổng thay thế",
    "250.000đ",
    "Tổng nhận đổi",
    "Thay thế: 1 Áo polo classic · AP-002 · Xanh navy · M · 350.000đ",
    "Nhận đổi: 1 Áo thun basic · AT-001 · Trắng · M · 250.000đ",
    "Không thể hoàn tất lưu tồn kho",
    "Kết quả thanh toán đã xác nhận và lưu",
    "Đã thu đủ 100.000đ tiền mặt.",
    "Mai Linh đã duyệt yêu cầu đổi hàng.",
    "Chờ xử lý",
    "Xử lý: 02/11/2026 09:30 · Đã qua 23/72 giờ",
    "Tiền mặt",
    "Thanh toán gốc",
    "1.100.000đ",
    "Tổng tiền hóa đơn",
    "01/11/2026 10:30",
    "Thời điểm bán",
    "Hóa đơn gốc · HD-261101-0086",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng"
  ]
}
```

### 07 · 15a · Yêu cầu bị từ chối — 1:5369

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-5369) · 1440 × 900

```json
{
  "sourceNodeId": "1:5369",
  "name": "07 · 15a · Yêu cầu bị từ chối",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:5370",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:5401",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Về tra cứu",
    "Sản phẩm và tồn kho chưa thay đổi.",
    "Không thể tiếp tục thanh toán",
    "Người duyệt: Mai Linh · Chủ cửa hàng (Admin)",
    "Kết quả phê duyệt đã được lưu",
    "Từ chối",
    "100.000đ",
    "Cần thu thêm",
    "1 × 350.000đ = 350.000đ",
    "Áo polo classic · AP-002 · Xanh navy · M",
    "SẢN PHẨM THAY THẾ",
    "1 × 250.000đ = 250.000đ",
    "Áo thun basic · AT-001 · Trắng · M",
    "SẢN PHẨM NHẬN ĐỔI",
    "Tóm tắt yêu cầu",
    "Yêu cầu đã kết thúc. Không thực hiện thanh toán hoặc cập nhật tồn kho.",
    "Yêu cầu đổi hàng không được phê duyệt",
    "Không thanh toán · Không cập nhật tồn kho",
    "Kết quả Từ chối đã được lưu.",
    "Mai Linh · Chủ cửa hàng (Admin)",
    "Yêu cầu bị từ chối",
    "Xử lý: 02/11/2026 09:30 · Đã qua 23/72 giờ",
    "Tiền mặt",
    "Thanh toán gốc",
    "1.100.000đ",
    "Tổng tiền hóa đơn",
    "01/11/2026 10:30",
    "Thời điểm bán",
    "Hóa đơn gốc · HD-261101-0086",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng"
  ]
}
```

### 06 · 11a · Không đủ tồn kho thay thế — 1:5460

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-5460) · 1440 × 900

```json
{
  "sourceNodeId": "1:5460",
  "name": "06 · 11a · Không đủ tồn kho thay thế",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:5461",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:5492",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Yêu cầu phải được Chủ cửa hàng phê duyệt trước khi thanh toán và hoàn tất.",
    "Gửi yêu cầu duyệt",
    "Quay lại",
    "Chưa thể tính tổng và chênh lệch",
    "Nhận đổi hợp lệ · AP-002 yêu cầu 1 / Tồn khả dụng 0",
    "Giảm số lượng hoặc chọn sản phẩm thay thế khác.",
    "+",
    "0",
    "−",
    "5",
    "320.000đ",
    "AS-004 · Trắng · L",
    "Áo sơ mi linen",
    "Sản phẩm thay thế không đủ tồn kho",
    "+",
    "1",
    "−",
    "0",
    "350.000đ",
    "AP-002 · Xanh navy · M",
    "Áo polo classic",
    "SL",
    "Tồn",
    "Đơn giá",
    "Sản phẩm",
    "Tìm theo tên hoặc mã sản phẩm",
    "Sản phẩm thay thế",
    "+",
    "0",
    "−",
    "1",
    "0",
    "1",
    "150.000đ",
    "TT-003 · Kem",
    "Túi tote canvas",
    "+",
    "0",
    "−",
    "1",
    "0",
    "1",
    "450.000đ",
    "QJ-012 · Xanh · 29",
    "Quần jean straight",
    "+",
    "1",
    "−",
    "2",
    "0",
    "2",
    "250.000đ",
    "AT-001 · Trắng · M",
    "Áo thun basic",
    "✓",
    "SL đổi",
    "Còn đổi",
    "Đã đổi",
    "Mua",
    "Đơn giá",
    "Sản phẩm",
    "Sản phẩm trong hóa đơn gốc",
    "Đã chọn 1 sản phẩm",
    "Chọn sản phẩm nhận đổi và sản phẩm thay thế",
    "Hóa đơn còn trong thời hạn đổi",
    "Đã qua 23/72 giờ · Còn 49 giờ",
    "Chọn số lượng hợp lệ và kiểm tra tồn kho trước khi gửi yêu cầu duyệt.",
    "Xử lý: 02/11/2026 09:30 · Đã qua 23/72 giờ",
    "Tiền mặt",
    "Thanh toán gốc",
    "1.100.000đ",
    "Tổng tiền hóa đơn",
    "01/11/2026 10:30",
    "Thời điểm bán",
    "Hóa đơn gốc · HD-261101-0086",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng"
  ]
}
```

### 05 · 8a · Vượt số lượng còn được đổi — 1:5610

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-5610) · 1440 × 900

```json
{
  "sourceNodeId": "1:5610",
  "name": "05 · 8a · Vượt số lượng còn được đổi",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:5611",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:5642",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Yêu cầu phải được Chủ cửa hàng phê duyệt trước khi thanh toán và hoàn tất.",
    "Gửi yêu cầu duyệt",
    "Quay lại",
    "Chưa thể tính tổng và chênh lệch",
    "Đối chiếu AT-001: Mua 2 − Đã đổi 1 = Còn được đổi 1",
    "Giảm số lượng hoặc chọn sản phẩm thay thế khác.",
    "+",
    "0",
    "−",
    "5",
    "320.000đ",
    "AS-004 · Trắng · L",
    "Áo sơ mi linen",
    "+",
    "1",
    "−",
    "8",
    "350.000đ",
    "AP-002 · Xanh navy · M",
    "Áo polo classic",
    "SL",
    "Tồn",
    "Đơn giá",
    "Sản phẩm",
    "Tìm theo tên hoặc mã sản phẩm",
    "Sản phẩm thay thế",
    "+",
    "0",
    "−",
    "1",
    "0",
    "1",
    "150.000đ",
    "TT-003 · Kem",
    "Túi tote canvas",
    "+",
    "0",
    "−",
    "1",
    "0",
    "1",
    "450.000đ",
    "QJ-012 · Xanh · 29",
    "Quần jean straight",
    "Chỉ được đổi tối đa 1 sản phẩm theo hóa đơn gốc",
    "+",
    "2",
    "−",
    "1",
    "1",
    "2",
    "250.000đ",
    "AT-001 · Trắng · M",
    "Áo thun basic",
    "✓",
    "SL đổi",
    "Còn đổi",
    "Đã đổi",
    "Mua",
    "Đơn giá",
    "Sản phẩm",
    "Sản phẩm trong hóa đơn gốc",
    "Đã chọn 1 sản phẩm",
    "Chọn sản phẩm nhận đổi và sản phẩm thay thế",
    "Hóa đơn còn trong thời hạn đổi",
    "Đã qua 23/72 giờ · Còn 49 giờ",
    "Chọn số lượng hợp lệ và kiểm tra tồn kho trước khi gửi yêu cầu duyệt.",
    "Xử lý: 02/11/2026 09:30 · Đã qua 23/72 giờ",
    "Tiền mặt",
    "Thanh toán gốc",
    "1.100.000đ",
    "Tổng tiền hóa đơn",
    "01/11/2026 10:30",
    "Thời điểm bán",
    "Hóa đơn gốc · HD-261101-0086",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng"
  ]
}
```

### 04 · 8a · Số lượng bằng 0 — 1:5760

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-5760) · 1440 × 900

```json
{
  "sourceNodeId": "1:5760",
  "name": "04 · 8a · Số lượng bằng 0",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:5761",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:5792",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Yêu cầu phải được Chủ cửa hàng phê duyệt trước khi thanh toán và hoàn tất.",
    "Gửi yêu cầu duyệt",
    "Quay lại",
    "Chưa thể tính tổng và chênh lệch",
    "Kiểm tra số lượng của sản phẩm đã chọn",
    "Giảm số lượng hoặc chọn sản phẩm thay thế khác.",
    "+",
    "0",
    "−",
    "5",
    "320.000đ",
    "AS-004 · Trắng · L",
    "Áo sơ mi linen",
    "+",
    "1",
    "−",
    "8",
    "350.000đ",
    "AP-002 · Xanh navy · M",
    "Áo polo classic",
    "SL",
    "Tồn",
    "Đơn giá",
    "Sản phẩm",
    "Tìm theo tên hoặc mã sản phẩm",
    "Sản phẩm thay thế",
    "+",
    "0",
    "−",
    "1",
    "0",
    "1",
    "150.000đ",
    "TT-003 · Kem",
    "Túi tote canvas",
    "+",
    "0",
    "−",
    "1",
    "0",
    "1",
    "450.000đ",
    "QJ-012 · Xanh · 29",
    "Quần jean straight",
    "Số lượng đổi phải lớn hơn 0",
    "+",
    "0",
    "−",
    "2",
    "0",
    "2",
    "250.000đ",
    "AT-001 · Trắng · M",
    "Áo thun basic",
    "✓",
    "SL đổi",
    "Còn đổi",
    "Đã đổi",
    "Mua",
    "Đơn giá",
    "Sản phẩm",
    "Sản phẩm trong hóa đơn gốc",
    "Đã chọn 1 sản phẩm",
    "Chọn sản phẩm nhận đổi và sản phẩm thay thế",
    "Hóa đơn còn trong thời hạn đổi",
    "Đã qua 23/72 giờ · Còn 49 giờ",
    "Chọn số lượng hợp lệ và kiểm tra tồn kho trước khi gửi yêu cầu duyệt.",
    "Xử lý: 02/11/2026 09:30 · Đã qua 23/72 giờ",
    "Tiền mặt",
    "Thanh toán gốc",
    "1.100.000đ",
    "Tổng tiền hóa đơn",
    "01/11/2026 10:30",
    "Thời điểm bán",
    "Hóa đơn gốc · HD-261101-0086",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng"
  ]
}
```

### 03 · 4a · Quá thời hạn 72 giờ — 1:5910

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-5910) · 1440 × 900

```json
{
  "sourceNodeId": "1:5910",
  "name": "03 · 4a · Quá thời hạn 72 giờ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:5911",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:5942",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Đổi hàng →",
    "Về tra cứu",
    "Không còn trong thời hạn đổi hàng",
    "1.100.000đ",
    "Tổng tiền hóa đơn",
    "3 loại sản phẩm · 4 đơn vị",
    "150.000đ",
    "1",
    "150.000đ",
    "TT-003 · Kem",
    "Túi tote canvas",
    "450.000đ",
    "1",
    "450.000đ",
    "QJ-012 · Xanh · 29",
    "Quần jean straight",
    "500.000đ",
    "2",
    "250.000đ",
    "AT-001 · Trắng · M",
    "Áo thun basic",
    "Thành tiền",
    "Số lượng",
    "Đơn giá",
    "Sản phẩm / Phân loại",
    "Đến 04/11/2026 10:30",
    "Thời hạn đổi hàng",
    "Tiền mặt",
    "Phương thức thanh toán",
    "01/11/2026 10:30",
    "Thời điểm bán",
    "Đã quá thời hạn đổi",
    "HD-261101-0086",
    "Đã quá hạn 24 giờ · Không thể đổi hàng",
    "Xử lý: 05/11/2026 10:30 · Đã qua 96 giờ",
    "Không còn trong thời hạn đổi hàng",
    "Nhập mã hóa đơn để kiểm tra thông tin và thời hạn đổi hàng.",
    "Tra cứu",
    "HD-261101-0086",
    "Mã hóa đơn *",
    "Tra cứu hóa đơn",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng"
  ]
}
```

### 02 · 2a · Không tìm thấy hóa đơn — 1:6016

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-6016) · 1440 × 900

```json
{
  "sourceNodeId": "1:6016",
  "name": "02 · 2a · Không tìm thấy hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:6017",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:6048",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Mã hóa đơn bắt buộc. Chỉ đổi trong 72 giờ kể từ thời điểm mua.",
    "Điều kiện tra cứu",
    "Không tìm thấy hóa đơn",
    "Tra cứu",
    "HD-261101-0999",
    "Mã hóa đơn *",
    "Tra cứu hóa đơn",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng"
  ]
}
```

### 01 · 1a · Bỏ trống mã hóa đơn — 1:6080

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-6080) · 1440 × 900

```json
{
  "sourceNodeId": "1:6080",
  "name": "01 · 1a · Bỏ trống mã hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:6081",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:6112",
      "name": "Không gian đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Mã hóa đơn bắt buộc. Chỉ đổi trong 72 giờ kể từ thời điểm mua.",
    "Điều kiện tra cứu",
    "Không được để trống!",
    "Tra cứu",
    "Mã hóa đơn *",
    "Tra cứu hóa đơn",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng"
  ]
}
```

### Đổi ngang giá · Không thu/hoàn — 1:6143

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-6143) · 1440 × 900

```json
{
  "sourceNodeId": "1:6143",
  "name": "Đổi ngang giá · Không thu/hoàn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:6144",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:6175",
      "name": "Workspace",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Xác nhận đổi hàng",
    "Sau xác nhận: lưu giao dịch, cộng sản phẩm nhận đổi, trừ sản phẩm thay thế, rồi lưu/in hóa đơn.",
    "Yêu cầu đã được duyệt. Xác nhận để hoàn tất đổi sản phẩm cho khách.",
    "Không phát sinh khoản thu thêm hoặc hoàn tiền",
    "Đổi ngang giá",
    "0đ",
    "Chênh lệch · Số tiền phát sinh",
    "250.000đ",
    "Tổng thay thế",
    "250.000đ",
    "Tổng nhận đổi",
    "Thay thế: 1 Áo thun basic · AT-004 · Đen · M · 250.000đ",
    "Nhận đổi: 1 Áo thun basic · AT-001 · Trắng · M · 250.000đ",
    "Đổi ngang giá · Không thu/hoàn",
    "Chưa lưu giao dịch · Chưa cập nhật tồn kho",
    "Không phát sinh thanh toán · Sẵn sàng xác nhận.",
    "Mai Linh đã duyệt · Bước thanh toán đã mở khóa.",
    "Đã được chủ cửa hàng phê duyệt",
    "Xử lý: 02/11/2026 09:30 · Đã mua 23/72 giờ",
    "Tiền mặt",
    "Thanh toán gốc",
    "1.100.000đ",
    "Tổng tiền hóa đơn",
    "01/11/2026 10:30",
    "Thời điểm bán",
    "Hóa đơn gốc · HD-261101-0086",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng"
  ]
}
```

### Hoàn tiền · Tiền mặt — 1:6230

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-6230) · 1440 × 900

```json
{
  "sourceNodeId": "1:6230",
  "name": "Hoàn tiền · Tiền mặt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:6231",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:6262",
      "name": "Workspace",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Xác nhận hoàn tiền & hoàn tất",
    "Sau xác nhận: lưu kết quả hoàn tiền, lưu giao dịch, cộng nhận đổi / trừ thay thế và lưu/in hóa đơn.",
    "100.000đ",
    "Cần hoàn khách · Số tiền thực hoàn",
    "Tiền mặt · Cố định",
    "Phương thức hoàn tiền",
    "−100.000đ",
    "Chênh lệch",
    "150.000đ",
    "Tổng thay thế",
    "250.000đ",
    "Tổng nhận đổi",
    "Thay thế: 1 Túi tote canvas · TT-003 · Kem · 150.000đ",
    "Nhận đổi: 1 Áo thun basic · AT-001 · Trắng · M · 250.000đ",
    "Hoàn tiền · Tiền mặt",
    "Chưa lưu giao dịch · Chưa cập nhật tồn kho",
    "Chờ xác nhận hoàn tiền và hoàn tất.",
    "Mai Linh đã duyệt · Bước thanh toán đã mở khóa.",
    "Đã được chủ cửa hàng phê duyệt",
    "Xử lý: 02/11/2026 09:30 · Đã mua 23/72 giờ",
    "Tiền mặt",
    "Thanh toán gốc",
    "1.100.000đ",
    "Tổng tiền hóa đơn",
    "01/11/2026 10:30",
    "Thời điểm bán",
    "Hóa đơn gốc · HD-261101-0086",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng"
  ]
}
```

### Thu thêm · Chuyển khoản QR — 1:6317

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-6317) · 1440 × 900

```json
{
  "sourceNodeId": "1:6317",
  "name": "Thu thêm · Chuyển khoản QR",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:6318",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:6349",
      "name": "Workspace",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Hoàn tất đổi hàng",
    "Sau khi ngân hàng xác nhận, nhấn Hoàn tất để lưu giao dịch, cập nhật tồn kho và lưu/in hóa đơn.",
    "Ngân hàng tự động xác nhận thành công → “Giao dịch hoàn tất”, mở nút Hoàn tất đổi hàng.",
    "Khách quét QR và thanh toán đúng số tiền, nội dung giao dịch.",
    "Chờ ngân hàng xác nhận",
    "Nội dung giao dịch: DH-HD2611010086",
    "100.000đ",
    "Số tiền khách cần chuyển",
    "QR minh họa",
    "● Chuyển khoản",
    "○ Tiền mặt",
    "Phương thức thanh toán",
    "+100.000đ",
    "Chênh lệch · Cần thu thêm",
    "350.000đ",
    "Tổng thay thế",
    "250.000đ",
    "Tổng nhận đổi",
    "Thay thế: 1 Áo polo classic · AP-002 · Xanh navy · M · 350.000đ",
    "Nhận đổi: 1 Áo thun basic · AT-001 · Trắng · M · 250.000đ",
    "Thu thêm · Chuyển khoản QR",
    "Chưa lưu giao dịch · Chưa cập nhật tồn kho",
    "Chờ ngân hàng xác nhận khoản thu thêm.",
    "Mai Linh đã duyệt · Bước thanh toán đã mở khóa.",
    "Đã được chủ cửa hàng phê duyệt",
    "Xử lý: 02/11/2026 09:30 · Đã mua 23/72 giờ",
    "Tiền mặt",
    "Thanh toán gốc",
    "1.100.000đ",
    "Tổng tiền hóa đơn",
    "01/11/2026 10:30",
    "Thời điểm bán",
    "Hóa đơn gốc · HD-261101-0086",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng"
  ]
}
```

### Chi tiết hóa đơn — 1:6842

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-6842) · 1440 × 900

```json
{
  "sourceNodeId": "1:6842",
  "name": "Chi tiết hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:6843",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:6874",
      "name": "1. Tra cứu hóa đơn",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu hóa đơn",
    "Mã hóa đơn *",
    "HD-261101-0086",
    "Tra cứu",
    "Nhập mã hóa đơn để kiểm tra thông tin và thời hạn đổi hàng.",
    "HD-261101-0086",
    "Đã tìm thấy hóa đơn",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Phương thức thanh toán",
    "Tiền mặt",
    "Thời hạn đổi hàng",
    "Đến 04/11/2026 10:30",
    "Sản phẩm / Phân loại",
    "Đơn giá",
    "Số lượng",
    "Thành tiền",
    "Áo thun basic",
    "AT-001 · Trắng · M",
    "250.000đ",
    "2",
    "500.000đ",
    "Quần jean straight",
    "QJ-012 · Xanh · 29",
    "450.000đ",
    "1",
    "450.000đ",
    "Túi tote canvas",
    "TT-003 · Kem",
    "150.000đ",
    "1",
    "150.000đ",
    "3 loại sản phẩm · 4 đơn vị",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "✓",
    "Hóa đơn hợp lệ. Chọn “Đổi hàng” để chọn sản phẩm cần đổi.",
    "Đổi hàng →",
    "Điều kiện tra cứu",
    "Mã hóa đơn bắt buộc. Chỉ đổi trong 72 giờ kể từ thời điểm mua."
  ]
}
```

### Chi tiết hóa đơn — 1:6948

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-6948) · 1440 × 900

```json
{
  "sourceNodeId": "1:6948",
  "name": "Chi tiết hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:6949",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:6980",
      "name": "3. Phê duyệt yêu cầu",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Thanh toán gốc",
    "Tiền mặt",
    "Xử lý: 02/11/2026 09:30 · Đã mua 23 giờ trước",
    "Yêu cầu đổi hàng đã được gửi",
    "Thông báo đã được gửi đến chủ cửa hàng. Thanh toán chỉ được mở sau khi yêu cầu được duyệt.",
    "Tóm tắt yêu cầu",
    "SẢN PHẨM NHẬN ĐỔI",
    "Áo thun basic · AT-001 · Trắng · M",
    "1 × 250.000đ = 250.000đ",
    "SẢN PHẨM THAY THẾ",
    "Áo polo classic · AP-002 · Xanh navy · M",
    "1 × 350.000đ = 350.000đ",
    "Cần thu thêm",
    "100.000đ",
    "Chờ chủ cửa hàng phê duyệt",
    "Đã gửi thông báo đến chủ cửa hàng",
    "Nhân viên không cần nhập mật khẩu Admin hoặc thực hiện duyệt tại quầy.",
    "Bước thanh toán đang khóa",
    "Khi chủ cửa hàng duyệt thành công, hệ thống cập nhật trạng thái và mở nút tiếp tục.",
    "Tiếp tục thanh toán",
    "Chờ chủ cửa hàng phê duyệt",
    "Đã gửi thông báo đến chủ cửa hàng",
    "Đang chờ phản hồi · Bước thanh toán bị khóa",
    "Nhân viên bán hàng theo dõi trạng thái tại đây."
  ]
}
```

### Chi tiết hóa đơn — 1:7040

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-7040) · 1440 × 900

```json
{
  "sourceNodeId": "1:7040",
  "name": "Chi tiết hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:7041",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:7072",
      "name": "2. Chọn sản phẩm đổi",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Thanh toán gốc",
    "Tiền mặt",
    "Xử lý: 02/11/2026 09:30 · Đã mua 23 giờ trước",
    "Chọn sản phẩm nhận đổi và sản phẩm thay thế",
    "Đã chọn 1 sản phẩm",
    "Sản phẩm trong hóa đơn gốc",
    "Sản phẩm",
    "Đơn giá",
    "Mua",
    "Đã đổi",
    "Còn đổi",
    "SL đổi",
    "✓",
    "Áo thun basic",
    "AT-001 · Trắng · M",
    "250.000đ",
    "2",
    "0",
    "2",
    "−",
    "1",
    "+",
    "Quần jean straight",
    "QJ-012 · Xanh · 29",
    "450.000đ",
    "1",
    "0",
    "1",
    "−",
    "0",
    "+",
    "Túi tote canvas",
    "TT-003 · Kem",
    "150.000đ",
    "1",
    "0",
    "1",
    "−",
    "0",
    "+",
    "Sản phẩm thay thế",
    "Tìm theo tên hoặc mã sản phẩm",
    "Sản phẩm",
    "Đơn giá",
    "Tồn",
    "SL",
    "Áo polo classic",
    "AP-002 · Xanh navy · M",
    "350.000đ",
    "8",
    "−",
    "1",
    "+",
    "Áo sơ mi linen",
    "AS-004 · Trắng · L",
    "320.000đ",
    "5",
    "−",
    "0",
    "+",
    "Nếu không đủ tồn kho: giảm số lượng hoặc chọn sản phẩm thay thế khác.",
    "Tổng nhận đổi",
    "250.000đ",
    "Tổng thay thế",
    "350.000đ",
    "Cần thu thêm",
    "100.000đ",
    "Quay lại",
    "Gửi yêu cầu duyệt",
    "Yêu cầu phải được Chủ cửa hàng phê duyệt trước khi thanh toán và hoàn tất.",
    "Hóa đơn còn trong thời hạn đổi",
    "Đã qua 23/72 giờ · Còn 49 giờ",
    "Chọn số lượng hợp lệ và kiểm tra tồn kho trước khi gửi yêu cầu duyệt."
  ]
}
```

### Chi tiết hóa đơn — 1:7194

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-7194) · 1440 × 900

```json
{
  "sourceNodeId": "1:7194",
  "name": "Chi tiết hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:7195",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:7226",
      "name": "4. Thanh toán & hoàn tất",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Hóa đơn gốc · HD-261101-0086",
    "Thời điểm bán",
    "01/11/2026 10:30",
    "Tổng tiền hóa đơn",
    "1.100.000đ",
    "Thanh toán gốc",
    "Tiền mặt",
    "Xử lý: 02/11/2026 09:30 · Đã mua 23 giờ trước",
    "Thu thêm bằng tiền mặt",
    "Nhận đổi: AT-001 × 1 · 250.000đ   →   Thay thế: AP-002 × 1 · 350.000đ",
    "Tổng nhận đổi",
    "250.000đ",
    "Tổng thay thế",
    "350.000đ",
    "Cần thu thêm",
    "100.000đ",
    "Phương thức thanh toán",
    "● Tiền mặt",
    "○ Chuyển khoản",
    "Sau xác nhận: lưu giao dịch, cập nhật tồn kho và lưu/in hóa đơn đổi hàng.",
    "Xác nhận thu tiền & hoàn tất",
    "Đã được chủ cửa hàng phê duyệt",
    "Bước thanh toán đã được mở khóa.",
    "Chờ nhân viên xác nhận thu đủ tiền mặt.",
    "Chưa lưu giao dịch · Chưa cập nhật tồn kho"
  ]
}
```

### Trả hàng — Hoàn tiền chuyển khoản — 1:7280

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-7280) · 1440 × 900

```json
{
  "sourceNodeId": "1:7280",
  "name": "Trả hàng — Hoàn tiền chuyển khoản",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:7281",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:7309",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 856,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng · Hoàn tiền chuyển khoản",
    "Quay lại Đơn trả hàng",
    "Phương thức hoàn tiền",
    "Tiền mặt",
    "Hoàn tiền tại quầy",
    "Chuyển khoản",
    "Hoàn vào tài khoản khách",
    "Thông tin nhận hoàn tiền",
    "Chưa chuyển tiền",
    "Cửa hàng chuyển trả cho khách",
    "250.000 ₫",
    "Ngân hàng nhận *",
    "Chọn ngân hàng",
    "Số tài khoản nhận *",
    "Nhập số tài khoản của khách",
    "Tên chủ tài khoản *",
    "Nhập tên chủ tài khoản theo ngân hàng",
    "Nội dung hoàn tiền",
    "Hoan tien tra hang HD-261101-0086",
    "Chưa chuyển 250.000 ₫ cho khách",
    "Kiểm tra người nhận trước khi chuyển. Chỉ hoàn tất sau khi đối soát hợp lệ.",
    "Tiếp tục hoàn tiền chuyển khoản",
    "Nhập đủ ngân hàng, số tài khoản và tên chủ tài khoản để tiếp tục.",
    "Sau khi chuyển khoản và đối soát hợp lệ, xác nhận hoàn tiền để lưu giao dịch, cập nhật tồn kho và lưu/in phiếu trả hàng.",
    "Tóm tắt trả hàng",
    "Chưa hoàn tiền",
    "HÓA ĐƠN GỐC",
    "HD-261101-0086",
    "Khách hàng",
    "—",
    "Điện thoại",
    "—",
    "Ngày bán",
    "01/11/2026 • 10:30",
    "Hàng trả lại • 1 mặt hàng • 1 sản phẩm",
    "Áo thun basic",
    "250.000 ₫",
    "AT-001 • Trắng • M",
    "1 × 250.000 ₫",
    "Tổng hóa đơn gốc",
    "1.100.000 ₫",
    "Thanh toán gốc",
    "Tiền mặt",
    "Hoàn tiền qua",
    "Chuyển khoản",
    "Tổng hoàn cho khách",
    "250.000 ₫",
    "Tình huống minh họa: chỉ trả lại 1 sản phẩm từ hóa đơn gốc, không phải giao dịch thực tế."
  ]
}
```

### Trả hàng — Hoàn tiền mặt — 1:7436

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-7436) · 1440 × 900

```json
{
  "sourceNodeId": "1:7436",
  "name": "Trả hàng — Hoàn tiền mặt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:7437",
      "name": "Điều hướng KinKin POS",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:7465",
      "name": "Không gian trả hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 814,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Trả hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Trả hàng · Hoàn tiền mặt",
    "Quay lại Đơn trả hàng",
    "Phương thức hoàn tiền",
    "Tiền mặt",
    "Hoàn tiền tại quầy",
    "Chuyển khoản",
    "Hoàn vào tài khoản khách",
    "Hoàn tiền mặt cho khách",
    "Kiểm đếm và đối chiếu số tiền trước khi bàn giao cho khách.",
    "Cửa hàng cần hoàn cho khách",
    "250.000 ₫",
    "Số tiền mặt bàn giao *",
    "250.000 ₫",
    "Số tiền bàn giao phải bằng đúng 250.000 ₫.",
    "Chênh lệch so với số tiền cần hoàn",
    "0 ₫",
    "Tôi xác nhận đã bàn giao đủ 250.000 ₫ tiền mặt cho khách.",
    "Xác nhận hoàn tiền & hoàn tất",
    "Chỉ mở xác nhận khi đã đối chiếu đúng số tiền và xác nhận bàn giao cho khách.",
    "Sau khi xác nhận hợp lệ, hệ thống mới lưu giao dịch, cập nhật tồn kho và lưu/in phiếu trả hàng.",
    "Tóm tắt trả hàng",
    "HÓA ĐƠN GỐC",
    "HD-261101-0086",
    "Khách hàng",
    "—",
    "Điện thoại",
    "—",
    "Ngày bán",
    "01/11/2026 • 10:30",
    "Hàng trả lại • 1 mặt hàng • 1 sản phẩm",
    "Áo thun basic",
    "250.000 ₫",
    "AT-001 • Trắng • M",
    "1 × 250.000 ₫",
    "Tổng hóa đơn gốc",
    "1.100.000 ₫",
    "Thanh toán gốc",
    "Tiền mặt",
    "Hoàn tiền qua",
    "Tiền mặt",
    "Tổng hoàn cho khách",
    "250.000 ₫",
    "Tình huống minh họa: chỉ trả lại 1 sản phẩm từ hóa đơn gốc, không phải giao dịch thực tế."
  ]
}
```

### Đổi hàng — Thu thêm QR chờ tiền — 1:7575

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-7575) · 1440 × 900

```json
{
  "sourceNodeId": "1:7575",
  "name": "Đổi hàng — Thu thêm QR chờ tiền",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:7576",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:7607",
      "name": "Workspace",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Thu thêm · Chuyển khoản QR",
    "Quay lại Đơn đổi hàng",
    "Đã được chủ cửa hàng phê duyệt",
    "Mai Linh đã duyệt · Bước thanh toán đã mở khóa.",
    "Chưa lưu giao dịch · Chưa cập nhật tồn kho",
    "Quét mã thanh toán khoản thu thêm",
    "MÃ MẪU",
    "QR minh họa, không phải địa chỉ thanh toán thực tế.",
    "NGÂN HÀNG THỤ HƯỞNG",
    "Ngân hàng cửa hàng",
    "Thông tin tài khoản minh họa",
    "—",
    "Số tiền chính xác",
    "100.000 ₫",
    "Nội dung chuyển khoản",
    "DH-HD2611010086",
    "Chờ ngân hàng xác nhận khoản thu thêm",
    "Chưa nhận khoản thu thêm 100.000 ₫",
    "Khách quét QR và chuyển đúng số tiền, nội dung giao dịch. Chỉ hoàn tất sau khi ngân hàng xác nhận.",
    "Chưa lưu giao dịch · Chưa cập nhật tồn kho.",
    "Ngân hàng xác nhận đủ 100.000 ₫ với nội dung DH-HD2611010086 mới mở nút Hoàn tất đổi hàng. Sau xác nhận: lưu giao dịch, cập nhật tồn kho và lưu/in hóa đơn.",
    "Hoàn tất đổi hàng",
    "Chọn lại phương thức",
    "Tóm tắt đổi hàng",
    "HD-261101-0086",
    "Ngày bán",
    "01/11/2026 • 10:30",
    "1 sản phẩm nhận đổi · 1 sản phẩm thay thế",
    "Nhận đổi · Áo thun basic • Trắng • M",
    "250.000 ₫",
    "AT-001 • 1 × 250.000 ₫",
    "Thay thế · Áo polo classic • Xanh navy • M",
    "350.000 ₫",
    "AP-002 • 1 × 350.000 ₫",
    "Tổng tiền hóa đơn gốc",
    "1.100.000 ₫",
    "Thanh toán gốc",
    "Tiền mặt",
    "Xử lý",
    "02/11/2026 • 09:30",
    "Đã mua",
    "23 giờ trước",
    "Nhận đổi",
    "AT-001 × 1 · 250.000 ₫",
    "Thay thế",
    "AP-002 × 1 · 350.000 ₫",
    "Cần thu thêm",
    "100.000 ₫",
    "Tổng cần thu thêm",
    "100.000 ₫"
  ]
}
```

### Đổi hàng — Thu thêm tiền mặt — 1:7734

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-7734) · 1440 × 900

```json
{
  "sourceNodeId": "1:7734",
  "name": "Đổi hàng — Thu thêm tiền mặt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:7735",
      "name": "Sidebar",
      "x": 0,
      "y": 0,
      "width": 224,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        20,
        16,
        20,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:7766",
      "name": "Thanh toán đổi hàng",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý nhập hàng",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý đổi trả",
    "/",
    "Đổi hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Thanh toán đổi hàng",
    "Quay lại Đơn đổi hàng",
    "Đã được chủ cửa hàng phê duyệt",
    "Bước thanh toán đã mở khóa · Chờ xác nhận thu đủ tiền mặt.",
    "Chưa lưu giao dịch · Chưa cập nhật tồn kho",
    "Phương thức thanh toán",
    "Tiền mặt",
    "Nhận tiền tại quầy",
    "Chuyển khoản QR",
    "Đối soát qua ngân hàng",
    "Nhận tiền mặt",
    "Kiểm đếm tiền khách đưa trước khi xác nhận thanh toán.",
    "Khách cần thanh toán thêm",
    "100.000 ₫",
    "Tiền khách đưa *",
    "100.000 ₫",
    "Số tiền phải lớn hơn hoặc bằng 100.000 ₫.",
    "Tiền trả lại khách",
    "0 ₫",
    "Xác nhận thu tiền & hoàn tất",
    "Sau xác nhận: lưu giao dịch, cập nhật tồn kho và lưu/in hóa đơn đổi hàng.",
    "Tóm tắt đổi hàng",
    "HD-261101-0086",
    "Ngày bán",
    "01/11/2026 • 10:30",
    "1 sản phẩm nhận đổi · 1 sản phẩm thay thế",
    "Nhận đổi · Áo thun basic • Trắng • M",
    "250.000 ₫",
    "AT-001 • 1 × 250.000 ₫",
    "Thay thế · Áo polo classic • Xanh navy • M",
    "350.000 ₫",
    "AP-002 • 1 × 350.000 ₫",
    "Tổng tiền hóa đơn gốc",
    "1.100.000 ₫",
    "Thanh toán gốc",
    "Tiền mặt",
    "Xử lý",
    "02/11/2026 • 09:30",
    "Đã mua",
    "23 giờ trước",
    "Nhận đổi",
    "AT-001 × 1 · 250.000 ₫",
    "Thay thế",
    "AP-002 × 1 · 350.000 ₫",
    "Cần thu thêm",
    "100.000 ₫",
    "Tổng cần thu thêm",
    "100.000 ₫"
  ]
}
```
