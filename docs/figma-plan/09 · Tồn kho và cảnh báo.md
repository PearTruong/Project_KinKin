# 09 · Tồn kho và cảnh báo

## Cách triển khai

Giữ riêng trạng thái tồn lâu, hết hàng, tra cứu và cảnh báo theo các tên nguồn. Không tự tính tồn khả dụng từ một bảng dữ liệu mẫu. Dùng dữ liệu cố định để tái hiện từng điều kiện; quyền và quy tắc tồn cần backend xác nhận. Không đồng nhất cảnh báo số lượng với cảnh báo số ngày tồn.

## Cách đọc dữ liệu nguồn

Bản trích xuất cấu trúc và văn bản, KHÔNG phải ảnh hay đặc tả hành vi hoàn chỉnh. text giữ nguyên chuỗi theo thứ tự cây layer, không đảm bảo thứ tự đọc trực quan. topLevelLayout chỉ mô tả frame con trực tiếp bằng tọa độ tương đối. Loại text có visible=false ở bản thân hoặc tổ tiên; chưa phân tích lớp che/mask. Tên trạng thái gợi ý kịch bản nhưng không chứng minh trigger, điều kiện hoặc quyền. Chưa xuất ảnh/font/logo/SVG; cần ảnh nguồn để đối chiếu hình học. Xem tài liệu 01 cho baseline và 04 cho nghiệm thu. Không nạp toàn bộ tài liệu này vào một tác vụ; lấy đúng nhóm nguồn cần thực hiện.

## Tồn kho

### Tra cứu tồn kho - Tồn lâu — 1:34108

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-34108) · 1440 × 900

```json
{
  "sourceNodeId": "1:34108",
  "name": "Tra cứu tồn kho - Tồn lâu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:34109",
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
      "id": "1:34155",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:34170",
      "name": "Inventory workspace",
      "x": 257,
      "y": 86,
      "width": 1150,
      "height": 608,
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
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Tra cứu tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu tồn kho",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm ",
    "Tất cả",
    "Tình trạng tồn:",
    "Tất cả",
    "Còn hàng",
    "Sắp hết",
    "Hết hàng",
    "Tồn lâu",
    "Đế giày",
    "1 mặt hàng",
    "Tổng tồn danh mục: 450",
    "MÃ SẢN PHẨM",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    "SỐ LƯỢNG TỒN",
    "MH004",
    "Đế TPU",
    "55.000 ₫",
    "15/03/2026",
    "Tồn lâu",
    "450",
    "Keo",
    "1 mặt hàng",
    "Tổng tồn danh mục: 490",
    "MÃ SẢN PHẨM",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    "SỐ LƯỢNG TỒN",
    "MH006",
    "Keo Dán Giày Scotch",
    "95.000 ₫",
    "09/02/2026",
    "Tồn lâu",
    "490",
    "Phụ kiện khác",
    "3 mặt hàng",
    "Tổng tồn danh mục: 1190",
    "MÃ SẢN PHẨM",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    "SỐ LƯỢNG TỒN",
    "MH008",
    "Pho định hình mũi giày",
    "25.000 đ",
    "09/01/2026",
    "Tồn lâu",
    "500",
    "MH009",
    "Lót cao su non 3mm",
    "15.000 ₫",
    "01/04/2026",
    "Tồn lâu",
    "240",
    "MH0011",
    "Dây giày dẹt",
    "55.000 ₫",
    "20/02/2026",
    "Tồn lâu",
    "450"
  ]
}
```

### Tra cứu tồn kho - Hết hàng — 1:34294

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-34294) · 1440 × 900

```json
{
  "sourceNodeId": "1:34294",
  "name": "Tra cứu tồn kho - Hết hàng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:34295",
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
      "id": "1:34341",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:34356",
      "name": "Inventory workspace",
      "x": 257,
      "y": 86,
      "width": 1150,
      "height": 608,
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
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Tra cứu tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu tồn kho",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm ",
    "Tất cả",
    "Tình trạng tồn:",
    "Tất cả",
    "Còn hàng",
    "Sắp hết",
    "Hết hàng",
    "Tồn lâu",
    "Đế giày",
    "1 mặt hàng",
    "Tổng tồn danh mục: 0",
    "MÃ SẢN PHẨM",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    "SỐ LƯỢNG TỒN",
    "MH004",
    "Đế TPU",
    "55.000 ₫",
    "30/05/2026",
    "Hết hàng",
    "0",
    "Keo",
    "1 mặt hàng",
    "Tổng tồn danh mục: 0",
    "MÃ SẢN PHẨM",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    "SỐ LƯỢNG TỒN",
    "MH006",
    "Keo Dán Giày Scotch",
    "95.000 ₫",
    "09/02/2026",
    "Hết hàng",
    "0",
    "Phụ kiện khác",
    "3 mặt hàng",
    "Tổng tồn danh mục: 0",
    "MÃ SẢN PHẨM",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    "SỐ LƯỢNG TỒN",
    "MH008",
    "Pho định hình mũi giày",
    "25.000 đ",
    "09/07/2026",
    "Hết hàng",
    "0",
    "MH009",
    "Lót cao su non 3mm",
    "15.000 ₫",
    "01/11/2026",
    "Hết hàng",
    "0",
    "MH0011",
    "Dây giày dẹt",
    "55.000 ₫",
    "30/05/2026",
    "Hết hàng",
    "0"
  ]
}
```

### Tra cứu tồn kho - Sắp hết — 1:34480

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-34480) · 1440 × 900

```json
{
  "sourceNodeId": "1:34480",
  "name": "Tra cứu tồn kho - Sắp hết",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:34481",
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
      "id": "1:34527",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:34542",
      "name": "Inventory workspace",
      "x": 257,
      "y": 86,
      "width": 1150,
      "height": 608,
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
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Tra cứu tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu tồn kho",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm ",
    "Tất cả",
    "Tình trạng tồn:",
    "Tất cả",
    "Còn hàng",
    "Sắp hết",
    "Hết hàng",
    "Tồn lâu",
    "Đế giày",
    "1 mặt hàng",
    "Tổng tồn danh mục: 8",
    "MÃ SẢN PHẨM",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    "SỐ LƯỢNG TỒN",
    "MH004",
    "Đế TPU",
    "55.000 ₫",
    "30/05/2026",
    "Sắp hết",
    "8",
    "Keo",
    "1 mặt hàng",
    "Tổng tồn danh mục: 5",
    "MÃ SẢN PHẨM",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    "SỐ LƯỢNG TỒN",
    "MH006",
    "Keo Dán Giày Scotch",
    "95.000 ₫",
    "09/02/2026",
    "Sắp hết",
    "5",
    "Phụ kiện khác",
    "3 mặt hàng",
    "Tổng tồn danh mục: 20",
    "MÃ SẢN PHẨM",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    "SỐ LƯỢNG TỒN",
    "MH008",
    "Pho định hình mũi giày",
    "25.000 đ",
    "09/07/2026",
    "Sắp hết",
    "10",
    "MH009",
    "Lót cao su non 3mm",
    "15.000 ₫",
    "01/11/2026",
    "Sắp hết",
    "4",
    "MH0011",
    "Dây giày dẹt",
    "55.000 ₫",
    "30/05/2026",
    "Sắp hết",
    "6"
  ]
}
```

### Tra cứu tồn kho - Main 1,2 — 1:34666

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-34666) · 1440 × 900

```json
{
  "sourceNodeId": "1:34666",
  "name": "Tra cứu tồn kho - Main 1,2",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:34669",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:34685",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1150,
      "height": 125,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:34703",
      "name": "Category",
      "x": 495,
      "y": 206,
      "width": 62,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:34705",
      "name": "Category",
      "x": 276,
      "y": 206,
      "width": 86,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:34709",
      "name": "Invoice results",
      "x": 257,
      "y": 272,
      "width": 1150,
      "height": 213,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:34775",
      "name": "Invoice results",
      "x": 257,
      "y": 509,
      "width": 1150,
      "height": 176,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:34828",
      "name": "Invoice results",
      "x": 258,
      "y": 709,
      "width": 1150,
      "height": 213,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:34894",
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
    }
  ],
  "text": [
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Tra cứu tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu tồn kho",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm ",
    "Còn hàng",
    "Sắp hết ",
    "Hết hàng",
    "Tồn lâu",
    "Tình trạng tồn:",
    "Tất cả",
    "Tất cả",
    "Đế giày",
    "4 mặt hàng",
    "Tổng tồn danh mục: 1320",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH001",
    "Đế cao su",
    "45.000 đ",
    "02/11/2026",
    "Tồn lâu",
    "750",
    "MH002",
    "Đế da",
    "120.000 ₫",
    "01/02/2026",
    "Sắp hết",
    "120",
    "MH003",
    "Đế PVC",
    "35.000 ₫",
    "12/06/2026",
    "Hết hàng",
    "0",
    "MH004",
    "Đế TPU",
    "55.000 ₫",
    "30/05/2026",
    "Còn hàng",
    "450",
    "Keo",
    "3 mặt hàng",
    "Tổng tồn danh mục: 585",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH005",
    "Keo Dán Giày x 2000",
    "85.000 đ",
    "02/09/2026",
    "Sắp hết",
    "80",
    "MH006",
    "Keo Dán Giày Scotch",
    "95.000 ₫",
    "09/02/2026",
    "Còn hàng",
    "490",
    "MH007",
    "Keo Dán Giày x SeaGlue",
    "70.000 ₫",
    "12/09/2026",
    "15",
    "Sắp hết",
    "Phụ kiện khác",
    "4 mặt hàng",
    "Tổng tồn danh mục: 905",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH008",
    "Pho định hình mũi giày",
    "25.000 đ",
    "09/07/2026",
    "500",
    "Còn hàng",
    "MH009",
    "Lót cao su non 3mm",
    "15.000 ₫",
    "01/11/2026",
    "240",
    "Còn hàng",
    "MH0010",
    "Dây giày dẹt 120cm",
    "30.000 ₫",
    "31/06/2026",
    "Sắp hết",
    "120",
    "MH0011",
    "Đế TPU",
    "55.000 ₫",
    "30/05/2026",
    "Còn hàng",
    "450",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất"
  ]
}
```

### Tra cứu tồn kho - (Al 2b)- tra theo bộ lọc — 1:34940

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-34940) · 1440 × 900

```json
{
  "sourceNodeId": "1:34940",
  "name": "Tra cứu tồn kho - (Al 2b)- tra theo bộ lọc",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:34943",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:34959",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1150,
      "height": 125,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:34977",
      "name": "Category",
      "x": 495,
      "y": 206,
      "width": 62,
      "height": 31,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:34979",
      "name": "Category",
      "x": 276,
      "y": 206,
      "width": 86,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:34983",
      "name": "Invoice results",
      "x": 257,
      "y": 272,
      "width": 1150,
      "height": 101,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:35013",
      "name": "Invoice results",
      "x": 256,
      "y": 397,
      "width": 1150,
      "height": 101,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:35044",
      "name": "Invoice results",
      "x": 256,
      "y": 522,
      "width": 1150,
      "height": 176,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:35097",
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
    }
  ],
  "text": [
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Tra cứu tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu tồn kho",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm ",
    "Còn hàng",
    "Sắp hết ",
    "Hết hàng",
    "Tồn lâu",
    "Tình trạng tồn:",
    "Tất cả",
    "Tất cả",
    "Đế giày",
    "1 mặt hàng",
    "Tổng tồn danh mục: 450",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH004",
    "Đế TPU",
    "55.000 ₫",
    "30/05/2026",
    "Còn hàng",
    "450",
    "Keo",
    "1 mặt hàng",
    "Tổng tồn danh mục: 490",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH006",
    "Keo Dán Giày Scotch",
    "95.000 ₫",
    "09/02/2026",
    "Còn hàng",
    "490",
    "Phụ kiện khác",
    "3 mặt hàng",
    "Tổng tồn danh mục: 1190",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH008",
    "Pho định hình mũi giày",
    "25.000 đ",
    "09/07/2026",
    "500",
    "Còn hàng",
    "MH009",
    "Lót cao su non 3mm",
    "15.000 ₫",
    "01/11/2026",
    "240",
    "Còn hàng",
    "MH0011",
    "Dây giày dẹt",
    "55.000 ₫",
    "30/05/2026",
    "Còn hàng",
    "450",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất"
  ]
}
```

### Tra cứu tồn kho - (Ex 3a)danh mục trống sản phẩm — 1:35143

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-35143) · 1440 × 900

```json
{
  "sourceNodeId": "1:35143",
  "name": "Tra cứu tồn kho - (Ex 3a)danh mục trống sản phẩm",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:35146",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:35162",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1150,
      "height": 125,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:35180",
      "name": "Category",
      "x": 495,
      "y": 206,
      "width": 62,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:35182",
      "name": "Category",
      "x": 276,
      "y": 206,
      "width": 86,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:35186",
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
      "id": "1:35234",
      "name": "lucide:package-search",
      "x": 799,
      "y": 354,
      "width": 37,
      "height": 37,
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Tra cứu tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu tồn kho",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm ",
    "Còn hàng",
    "Sắp hết ",
    "Hết hàng",
    "Tồn lâu",
    "Tình trạng tồn:",
    "Tất cả",
    "Đinh",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Không có sản phẩm nào trong danh mục [Đinh]",
    "Vui lòng chọn danh mục khác "
  ]
}
```

### Tra cứu tồn kho - (Ex 2a.1a) đang nhập từ khoá — 1:35241

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-35241) · 1440 × 900

```json
{
  "sourceNodeId": "1:35241",
  "name": "Tra cứu tồn kho - (Ex 2a.1a) đang nhập từ khoá",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:35244",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:35260",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1150,
      "height": 125,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:35278",
      "name": "Category",
      "x": 495,
      "y": 206,
      "width": 62,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:35280",
      "name": "Category",
      "x": 276,
      "y": 206,
      "width": 86,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:35284",
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
      "id": "1:35332",
      "name": "lucide:package-search",
      "x": 799,
      "y": 354,
      "width": 37,
      "height": 37,
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Tra cứu tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu tồn kho",
    "Tìm sản phẩm",
    "Lro",
    "Còn hàng",
    "Sắp hết ",
    "Hết hàng",
    "Tồn lâu",
    "Tình trạng tồn:",
    "Tất cả",
    "Tất cả",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Không tìm thấy sản phẩm phù hợp",
    "Vui lòng thay đổi từ khoá hoặc bộ lọc tình trạng"
  ]
}
```

### Tra cứu tồn kho- (Ex 1a)chưa thiết lập danh mục — 1:35339

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-35339) · 1440 × 900

```json
{
  "sourceNodeId": "1:35339",
  "name": "Tra cứu tồn kho- (Ex 1a)chưa thiết lập danh mục",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:35342",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:35358",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1150,
      "height": 125,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:35376",
      "name": "Category",
      "x": 392,
      "y": 205,
      "width": 62,
      "height": 31,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:35378",
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
      "id": "1:35426",
      "name": "lucide:package-search",
      "x": 799,
      "y": 354,
      "width": 37,
      "height": 37,
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Tra cứu tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu tồn kho",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm ",
    "Còn hàng",
    "Sắp hết ",
    "Hết hàng",
    "Tồn lâu",
    "Tình trạng tồn:",
    "Tất cả",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Chưa có danh mục nào được thiết lập",
    "Vui lòng tạo danh mục trước"
  ]
}
```

### Tra cứu tồn kho - (Main 2) nhấn vào danh sách danh mục — 1:35433

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-35433) · 1440 × 900

```json
{
  "sourceNodeId": "1:35433",
  "name": "Tra cứu tồn kho - (Main 2) nhấn vào danh sách danh mục",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:35436",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:35452",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1150,
      "height": 125,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:35470",
      "name": "Category",
      "x": 495,
      "y": 206,
      "width": 62,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:35472",
      "name": "Category",
      "x": 276,
      "y": 206,
      "width": 86,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:35476",
      "name": "Invoice results",
      "x": 257,
      "y": 272,
      "width": 1150,
      "height": 213,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:35540",
      "name": "Invoice results",
      "x": 257,
      "y": 509,
      "width": 1150,
      "height": 176,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:35593",
      "name": "Invoice results",
      "x": 258,
      "y": 709,
      "width": 1150,
      "height": 213,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:35659",
      "name": "Frame 9",
      "x": 276,
      "y": 243,
      "width": 171,
      "height": 241,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:35669",
      "name": "Frame 10",
      "x": 290,
      "y": 260,
      "width": 140,
      "height": 30,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:35671",
      "name": "Frame 11",
      "x": 290,
      "y": 295,
      "width": 140,
      "height": 30,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:35679",
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
    }
  ],
  "text": [
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Tra cứu tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu tồn kho",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm ",
    "Còn hàng",
    "Sắp hết ",
    "Hết hàng",
    "Tồn lâu",
    "Tình trạng tồn:",
    "Tất cả",
    "Tất cả",
    "g",
    "Tổng tồn danh mục: 1320",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH001",
    "Đế cao su",
    "45.000 đ",
    "02/11/2026",
    "Tồn lâu",
    "750",
    "MH002",
    "Đế da",
    "120.000 ₫",
    "01/02/2026",
    "Sắp hết",
    "120",
    "MH003",
    "Đế PVC",
    "35.000 ₫",
    "12/06/2026",
    "Hết hàng",
    "0",
    "MH004",
    "Đế TPU",
    "55.000 ₫",
    "30/05/2026",
    "Còn hàng",
    "450",
    "Keo",
    "3 mặt hàng",
    "Tổng tồn danh mục: 585",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH005",
    "Keo Dán Giày x 2000",
    "85.000 đ",
    "02/09/2026",
    "Sắp hết",
    "80",
    "MH006",
    "Keo Dán Giày Scotch",
    "95.000 ₫",
    "09/02/2026",
    "Còn hàng",
    "490",
    "MH007",
    "Keo Dán Giày x SeaGlue",
    "70.000 ₫",
    "12/09/2026",
    "15",
    "Sắp hết",
    "Phụ kiện khác",
    "4 mặt hàng",
    "Tổng tồn danh mục: 905",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH008",
    "Pho định hình mũi giày",
    "25.000 đ",
    "09/07/2026",
    "500",
    "Còn hàng",
    "MH009",
    "Lót cao su non 3mm",
    "15.000 ₫",
    "01/11/2026",
    "240",
    "Còn hàng",
    "MH0010",
    "Dây giày dẹt 120cm",
    "30.000 ₫",
    "31/06/2026",
    "Sắp hết",
    "120",
    "MH0011",
    "Đế TPU",
    "55.000 ₫",
    "30/05/2026",
    "Còn hàng",
    "450",
    "Tất cả danh mục",
    "Đế giày",
    "Keo",
    "Pho",
    "Lót cao su non",
    "Đinh",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất"
  ]
}
```

### Tra cứu tồn kho - Main 4 — 1:35725

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-35725) · 1440 × 900

```json
{
  "sourceNodeId": "1:35725",
  "name": "Tra cứu tồn kho - Main 4",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:35728",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:35744",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1150,
      "height": 125,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:35762",
      "name": "Category",
      "x": 495,
      "y": 206,
      "width": 62,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:35764",
      "name": "Category",
      "x": 276,
      "y": 206,
      "width": 86,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:35768",
      "name": "Invoice results",
      "x": 257,
      "y": 272,
      "width": 1150,
      "height": 213,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:35834",
      "name": "Invoice results",
      "x": 257,
      "y": 509,
      "width": 1150,
      "height": 176,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:35887",
      "name": "Invoice results",
      "x": 258,
      "y": 709,
      "width": 1150,
      "height": 213,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:35953",
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
    }
  ],
  "text": [
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Tra cứu tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu tồn kho",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm ",
    "Còn hàng",
    "Sắp hết ",
    "Hết hàng",
    "Tồn lâu",
    "Tình trạng tồn:",
    "Tất cả",
    "Tất cả",
    "Đế giày",
    "4 mặt hàng",
    "Tổng tồn danh mục: 1320",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH001",
    "Đế cao su",
    "45.000 đ",
    "02/11/2026",
    "Tồn lâu",
    "750",
    "MH002",
    "Đế da",
    "120.000 ₫",
    "01/02/2026",
    "Sắp hết",
    "120",
    "MH003",
    "Đế PVC",
    "35.000 ₫",
    "12/06/2026",
    "Hết hàng",
    "0",
    "MH004",
    "Đế TPU",
    "55.000 ₫",
    "30/05/2026",
    "Còn hàng",
    "450",
    "Keo",
    "3 mặt hàng",
    "Tổng tồn danh mục: 585",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH005",
    "Keo Dán Giày x 2000",
    "85.000 đ",
    "02/9/2026",
    "Sắp hết",
    "80",
    "MH006",
    "Keo Dán Giày Scotch",
    "95.000 ₫",
    "09/02/2026",
    "Còn hàng",
    "490",
    "MH007",
    "Keo Dán Giày x SeaGlue",
    "70.000 ₫",
    "12/09/2026",
    "15",
    "Sắp hết",
    "Phụ kiện khác",
    "4 mặt hàng",
    "Tổng tồn danh mục: 905",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH008",
    "Pho định hình mũi giày",
    "25.000 đ",
    "09/07/2026",
    "500",
    "Còn hàng",
    "MH009",
    "Lót cao su non 3mm",
    "15.000 ₫",
    "01/11/2026",
    "240",
    "Còn hàng",
    "MH0010",
    "Dây giày dẹt 120cm",
    "30.000 ₫",
    "31/06/2026",
    "Sắp hết",
    "120",
    "MH0011",
    "Đế TPU",
    "55.000 ₫",
    "30/05/2026",
    "Còn hàng",
    "450",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất"
  ]
}
```

### Frame — 1:35999

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-35999) · 1440 × 900

```json
{
  "sourceNodeId": "1:35999",
  "name": "Frame",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:36002",
      "name": "Customer",
      "x": 978,
      "y": 153,
      "width": 300,
      "height": 34,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 6
    },
    {
      "id": "1:36004",
      "name": "basil:cross-solid",
      "x": 1359,
      "y": 58,
      "width": 47,
      "height": 47,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:36006",
      "name": "Customer",
      "x": 949,
      "y": 64,
      "width": 200,
      "height": 34,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 6
    },
    {
      "id": "1:36008",
      "name": "tdesign:tree-catalog",
      "x": 953,
      "y": 161,
      "width": 19,
      "height": 19,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:36010",
      "name": "Invoice row",
      "x": 949,
      "y": 193,
      "width": 447,
      "height": 49,
      "layout": "HORIZONTAL",
      "padding": [
        2,
        20,
        2,
        20
      ],
      "gap": 16
    },
    {
      "id": "1:36019",
      "name": "Invoice row",
      "x": 949,
      "y": 242,
      "width": 447,
      "height": 49,
      "layout": "HORIZONTAL",
      "padding": [
        2,
        20,
        2,
        20
      ],
      "gap": 16
    },
    {
      "id": "1:36026",
      "name": "Invoice row",
      "x": 949,
      "y": 291,
      "width": 447,
      "height": 49,
      "layout": "HORIZONTAL",
      "padding": [
        2,
        20,
        2,
        20
      ],
      "gap": 16
    }
  ],
  "text": [
    "19 ngày",
    "Danh sách lô hàng còn tồn",
    "Đế cao su",
    "MÃ LÔ ",
    "SL NHẬP",
    "NGÀY NHẬP",
    "CÒN LẠI",
    "TUỔI TỒN",
    "750",
    "LH0011",
    "1.000",
    "02/11/2026",
    "650",
    "750",
    "LH0010",
    "800",
    "02/05/2026",
    "100",
    "750",
    "Tổng số lô: 2 Lô",
    "19 ngày",
    "94 ngày"
  ]
}
```

### Tra cứu tồn kho - (Ex 4a) không có lô — 1:36036

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-36036) · 1440 × 900

```json
{
  "sourceNodeId": "1:36036",
  "name": "Tra cứu tồn kho - (Ex 4a) không có lô",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:36039",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:36055",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1150,
      "height": 125,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:36073",
      "name": "Category",
      "x": 495,
      "y": 206,
      "width": 62,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:36075",
      "name": "Category",
      "x": 276,
      "y": 206,
      "width": 86,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:36079",
      "name": "Invoice results",
      "x": 257,
      "y": 272,
      "width": 1150,
      "height": 213,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:36145",
      "name": "Invoice results",
      "x": 257,
      "y": 509,
      "width": 1150,
      "height": 176,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:36198",
      "name": "Invoice results",
      "x": 258,
      "y": 709,
      "width": 1150,
      "height": 213,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:36264",
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
      "id": "1:36310",
      "name": "Frame",
      "x": -10,
      "y": -4,
      "width": 1440,
      "height": 900,
      "layout": "VERTICAL",
      "padding": [
        32,
        32,
        32,
        32
      ],
      "gap": 0
    }
  ],
  "text": [
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Tra cứu tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu tồn kho",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm ",
    "Còn hàng",
    "Sắp hết ",
    "Hết hàng",
    "Tồn lâu",
    "Tình trạng tồn:",
    "Tất cả",
    "Tất cả",
    "Đế giày",
    "4 mặt hàng",
    "Tổng tồn danh mục: 1320",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH001",
    "Đế cao su",
    "45.000 đ",
    "02/11/2026",
    "Tồn lâu",
    "750",
    "MH002",
    "Đế da",
    "120.000 ₫",
    "01/02/2026",
    "Sắp hết",
    "120",
    "MH003",
    "Đế PVC",
    "35.000 ₫",
    "12/06/2026",
    "Hết hàng",
    "0",
    "MH004",
    "Đế TPU",
    "55.000 ₫",
    "30/05/2026",
    "Còn hàng",
    "450",
    "Keo",
    "3 mặt hàng",
    "Tổng tồn danh mục: 585",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH005",
    "Keo Dán Giày x 2000",
    "85.000 đ",
    "02/9/2026",
    "Sắp hết",
    "80",
    "MH006",
    "Keo Dán Giày Scotch",
    "95.000 ₫",
    "09/02/2026",
    "Còn hàng",
    "490",
    "MH007",
    "Keo Dán Giày x SeaGlue",
    "70.000 ₫",
    "12/09/2026",
    "15",
    "Sắp hết",
    "Phụ kiện khác",
    "4 mặt hàng",
    "Tổng tồn danh mục: 905",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH008",
    "Pho định hình mũi giày",
    "25.000 đ",
    "09/07/2026",
    "500",
    "Còn hàng",
    "MH009",
    "Lót cao su non 3mm",
    "15.000 ₫",
    "01/11/2026",
    "240",
    "Còn hàng",
    "MH0010",
    "Dây giày dẹt 120cm",
    "30.000 ₫",
    "31/06/2026",
    "Sắp hết",
    "120",
    "MH0011",
    "Đế TPU",
    "55.000 ₫",
    "30/05/2026",
    "Còn hàng",
    "450",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Đế cao PVC",
    "Sản phẩm hiện chưa có lô hàng còn tồn"
  ]
}
```

### Tra cứu tồn kho - (Ex 2b.1a) bộ lọc trống — 1:36320

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-36320) · 1440 × 900

```json
{
  "sourceNodeId": "1:36320",
  "name": "Tra cứu tồn kho - (Ex 2b.1a) bộ lọc trống",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:36323",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:36339",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1150,
      "height": 125,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:36357",
      "name": "Category",
      "x": 496,
      "y": 205,
      "width": 62,
      "height": 31,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:36359",
      "name": "Category",
      "x": 276,
      "y": 206,
      "width": 86,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:36363",
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
      "id": "1:36411",
      "name": "lucide:package-search",
      "x": 799,
      "y": 354,
      "width": 37,
      "height": 37,
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Tra cứu tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu tồn kho",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm ",
    "Còn hàng",
    "Sắp hết ",
    "Hết hàng",
    "Tồn lâu",
    "Tình trạng tồn:",
    "Tất cả",
    "Tất cả",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Không có sản phẩm nào ở tình trạng [Tồn lâu]",
    "Vui lòng chọn bộ lọc hoặc danh mục khác"
  ]
}
```

### Xem cảnh báo  tồn kho - Alt\_a2a — 1:36418

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-36418) · 1440 × 900

```json
{
  "sourceNodeId": "1:36418",
  "name": "Xem cảnh báo  tồn kho - Alt_a2a",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:36421",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:36437",
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
      "id": "1:36483",
      "name": "Filters Bar (Alt Flow 2a)",
      "x": 258,
      "y": 133,
      "width": 1130,
      "height": 108,
      "layout": "HORIZONTAL",
      "padding": [
        14,
        14,
        14,
        14
      ],
      "gap": 184.22000122070312
    },
    {
      "id": "1:36506",
      "name": "akar-icons:chevron-down-small",
      "x": 647,
      "y": 199,
      "width": 16,
      "height": 16,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:36508",
      "name": "Main Alert Table View (Main Flow 1)",
      "x": 256,
      "y": 266,
      "width": 1130,
      "height": 174,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:36580",
      "name": "Frame 9",
      "x": 522,
      "y": 226,
      "width": 144,
      "height": 199,
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Xem cảnh báo tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Cảnh báo tồn kho",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Tình trạng :",
    "Tất cả",
    "Hết hàng",
    "Sắp hết",
    "Tồn lâu",
    "Trạng thái xử lý: ",
    "Chưa xử lý ",
    "Tất cả danh mục",
    "TÊN SẢN PHẨM",
    "DANH MỤC",
    "SỐ TỒN HT",
    "NGƯỠNG TỐI THIỂU",
    "TÌNH TRẠNG ",
    "TRẠNG THÁI XỬ LÝ ",
    "THỜI ĐIỂM BÁO",
    "Đế PVC chống trượt",
    "Đế giày",
    "0 cái",
    "50 cái",
    "Hết hàng",
    "Chưa xử lý ",
    "05/06/2026 08:30",
    "Đế da Ý cao cấp",
    "Đế giày",
    "120 cái",
    "200 cái",
    "Sắp hết",
    "Chưa xử lý ",
    "20/09/2026 14:15",
    "Đế cao su đúc nguyên khối",
    "Đế giày",
    "750 cái",
    "100 cái",
    "Tồn lâu",
    "Chưa xử lý ",
    "15/10/2026 09:00",
    "Keo",
    "Pho",
    "Lót cao su non",
    "Đinh",
    "Đế giày",
    "Tất cả danh mục"
  ]
}
```

### Xem cảnh báo tồn kho - Exp\_1a  — 1:36607

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-36607) · 1440 × 900

```json
{
  "sourceNodeId": "1:36607",
  "name": "Xem cảnh báo tồn kho - Exp_1a ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:36608",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:36624",
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
      "id": "1:36670",
      "name": "Filters Bar (Alt Flow 2a)",
      "x": 258,
      "y": 133,
      "width": 1130,
      "height": 108,
      "layout": "HORIZONTAL",
      "padding": [
        14,
        14,
        14,
        14
      ],
      "gap": 184.22000122070312
    },
    {
      "id": "1:36693",
      "name": "akar-icons:chevron-down-small",
      "x": 647,
      "y": 199,
      "width": 16,
      "height": 16,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:36695",
      "name": "Frame 17",
      "x": 265,
      "y": 284,
      "width": 1130,
      "height": 268,
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Xem cảnh báo tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Cảnh báo tồn kho",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Tình trạng :",
    "Tất cả",
    "Hết hàng",
    "Sắp hết",
    "Tồn lâu",
    "Trạng thái xử lý: ",
    "Chưa xử lý ",
    "Tất cả danh mục",
    "Hiện không có sản phẩm nào có cảnh báo chưa xử lý "
  ]
}
```

### Xem cảnh báo tồn kho - Exp\_2a.1a — 1:36706

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-36706) · 1440 × 900

```json
{
  "sourceNodeId": "1:36706",
  "name": "Xem cảnh báo tồn kho - Exp_2a.1a",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:36709",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:36725",
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
      "id": "1:36771",
      "name": "Filters Bar (Alt Flow 2a)",
      "x": 258,
      "y": 133,
      "width": 1130,
      "height": 108,
      "layout": "HORIZONTAL",
      "padding": [
        14,
        14,
        14,
        14
      ],
      "gap": 184.22000122070312
    },
    {
      "id": "1:36794",
      "name": "akar-icons:chevron-down-small",
      "x": 647,
      "y": 199,
      "width": 16,
      "height": 16,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:36796",
      "name": "Frame 17",
      "x": 265,
      "y": 284,
      "width": 1130,
      "height": 268,
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Xem cảnh báo tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Cảnh báo tồn kho",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Tình trạng :",
    "Tất cả",
    "Hết hàng",
    "Sắp hết",
    "Tồn lâu",
    "Trạng thái xử lý: ",
    "Chưa xử lý ",
    "Tất cả danh mục",
    "Không có sản phẩm nào thuộc lựa chọn này"
  ]
}
```

### Xem cảnh báo  tồn kho -Alt\_2a — 1:36807

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-36807) · 1440 × 900

```json
{
  "sourceNodeId": "1:36807",
  "name": "Xem cảnh báo  tồn kho -Alt_2a",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:36810",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:36826",
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
      "id": "1:36872",
      "name": "Filters Bar (Alt Flow 2a)",
      "x": 258,
      "y": 133,
      "width": 1130,
      "height": 108,
      "layout": "HORIZONTAL",
      "padding": [
        14,
        14,
        14,
        14
      ],
      "gap": 184.22000122070312
    },
    {
      "id": "1:36895",
      "name": "akar-icons:chevron-down-small",
      "x": 647,
      "y": 199,
      "width": 16,
      "height": 16,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:36897",
      "name": "Main Alert Table View (Main Flow 1)",
      "x": 256,
      "y": 266,
      "width": 1130,
      "height": 174,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:36969",
      "name": "Frame 9",
      "x": 367,
      "y": 224,
      "width": 144,
      "height": 109,
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Xem cảnh báo tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Cảnh báo tồn kho",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Tình trạng :",
    "Tất cả",
    "Hết hàng",
    "Sắp hết",
    "Tồn lâu",
    "Trạng thái xử lý: ",
    "Chưa xử lý ",
    "Tất cả danh mục",
    "TÊN SẢN PHẨM",
    "DANH MỤC",
    "SỐ TỒN HT",
    "NGƯỠNG TỐI THIỂU",
    "TÌNH TRẠNG ",
    "TRẠNG THÁI XỬ LÝ ",
    "THỜI ĐIỂM BÁO",
    "Đế PVC chống trượt",
    "Đế giày",
    "0 cái",
    "50 cái",
    "Hết hàng",
    "Chưa xử lý ",
    "05/06/2026 08:30",
    "Đế da Ý cao cấp",
    "Đế giày",
    "120 cái",
    "200 cái",
    "Sắp hết",
    "Chưa xử lý ",
    "20/09/2026 14:15",
    "Đế cao su đúc nguyên khối",
    "Đế giày",
    "750 cái",
    "100 cái",
    "Tồn lâu",
    "Chưa xử lý ",
    "15/10/2026 09:00",
    "Tất cả trạng thái",
    "Đã xử lý",
    "Chưa xử lý"
  ]
}
```

### Điều chỉnh số tồn Al 8b Huỷ thao tác — 1:36982

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-36982) · 1440 × 900

```json
{
  "sourceNodeId": "1:36982",
  "name": "Điều chỉnh số tồn Al 8b Huỷ thao tác",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:36983",
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
      "id": "1:37030",
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
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Điều chỉnh số tồn",
    "TH",
    "Thu Hà",
    "Chủ cửa hàng",
    "Điều chỉnh số tồn",
    "Đế cao su ",
    "Chọn lô hàng cần điều chỉnh",
    "Số tồn hiện tại",
    "Số lượng thực tế ",
    "100",
    "Chênh lệch",
    "--",
    "Lý do điều chỉnh ",
    "Diễn giải chi tiết",
    "LH0056",
    "06/11/2026",
    "650",
    "750",
    "Tổng số lô",
    "LH0012",
    "02/06/2026",
    "100",
    "750",
    "10 Ngày",
    "Chọn lý do",
    "2 ",
    "MÃ LÔ",
    "NGÀY NHẬP",
    "SỐ TỒN HIỆN TẠI",
    "TUỔI TỒN",
    "750",
    "CHỌN",
    "Lô cũ nhất",
    "94 Ngày",
    "Lưu",
    "Huỷ bỏ",
    "Nhập số lượng thực tế"
  ]
}
```

### Điều chỉnh số tồn Exp\_7a — 1:37155

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-37155) · 1440 × 900

```json
{
  "sourceNodeId": "1:37155",
  "name": "Điều chỉnh số tồn Exp_7a",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:37156",
      "name": "Điều chỉnh số tồn Exp_7a",
      "x": 0,
      "y": 0,
      "width": 1440,
      "height": 900,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:37325",
      "name": "Action",
      "x": 1135,
      "y": 738,
      "width": 100,
      "height": 42,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        16,
        0,
        16
      ],
      "gap": 8
    },
    {
      "id": "1:37327",
      "name": "Action",
      "x": 1268,
      "y": 738,
      "width": 100,
      "height": 42,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        16,
        0,
        16
      ],
      "gap": 8
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Điều chỉnh số tồn",
    "TH",
    "Thu Hà",
    "Chủ cửa hàng",
    "Điều chỉnh số tồn",
    "Đế cao su ",
    "Chọn lô hàng cần điều chỉnh",
    "Số tồn hiện tại",
    "Số lượng thực tế ",
    "100",
    "Chênh lệch",
    "0 Cái",
    "Lý do điều chỉnh ",
    "Số lượng thực tế trùng với số trên hệ thống, không cần điều chỉnh",
    "Diễn giải chi tiết",
    "LH0056",
    "06/11/2026",
    "650",
    "750",
    "Tổng số lô",
    "LH0012",
    "02/06/2026",
    "100",
    "750",
    "10 Ngày",
    "Chọn lý do",
    "2 ",
    "MÃ LÔ",
    "NGÀY NHẬP",
    "SỐ TỒN HIỆN TẠI",
    "TUỔI TỒN",
    "750",
    "CHỌN",
    "Lô cũ nhất",
    "94 Ngày",
    "100",
    "3",
    "5",
    "3",
    "750",
    "0",
    "120",
    "ĐẾ GIÀY",
    "PHO",
    "Đế PVC",
    "Đế da",
    "Đế cao su",
    "10",
    "KEO",
    "ĐINH",
    "Số lượng",
    "Nhập tên sản phẩm ",
    "DANH MỤC SẢN PHẨM",
    "Huỷ bỏ",
    "Lưu"
  ]
}
```

### Điều chỉnh số tồn - Al 8a — 1:37332

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-37332) · 1440 × 900

```json
{
  "sourceNodeId": "1:37332",
  "name": "Điều chỉnh số tồn - Al 8a",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:37333",
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
      "id": "1:37380",
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
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Điều chỉnh số tồn",
    "TH",
    "Thu Hà",
    "Chủ cửa hàng",
    "Điều chỉnh số tồn",
    "Đế cao su ",
    "Chọn lô hàng cần điều chỉnh",
    "Số tồn hiện tại",
    "Số lượng thực tế ",
    "100",
    "85 ",
    "Chênh lệch",
    "-15 Cái ",
    "Lý do điều chỉnh ",
    "Khác",
    "Diễn giải chi tiết",
    "Bắt buộc nhập diễn giải khi chọn lý do “Khác”",
    "LH0056",
    "06/11/2026",
    "650",
    "750",
    "Tổng số lô",
    "LH0012",
    "02/06/2026",
    "100",
    "750",
    "10 Ngày",
    "2 ",
    "MÃ LÔ",
    "NGÀY NHẬP",
    "SỐ TỒN HIỆN TẠI",
    "TUỔI TỒN",
    "750",
    "CHỌN",
    "Lô cũ nhất",
    "94 Ngày",
    "Huỷ bỏ",
    "Lưu",
    "Nhập diễn giải (bắt buộc)"
  ]
}
```

### Điều chỉnh số tồn - (Al a2)Tìm kiếm theo tên  — 1:37507

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-37507) · 1440 × 900

```json
{
  "sourceNodeId": "1:37507",
  "name": "Điều chỉnh số tồn - (Al a2)Tìm kiếm theo tên ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:37508",
      "name": "Điều chỉnh số tồn - (Al a2)Tìm kiếm theo tên ",
      "x": 0,
      "y": 0,
      "width": 1440,
      "height": 900,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:37642",
      "name": "Frame 28",
      "x": 258,
      "y": 127,
      "width": 388,
      "height": 677,
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
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Điều chỉnh số tồn",
    "TH",
    "Thu Hà",
    "Chủ cửa hàng",
    "Điều chỉnh số tồn",
    "Kết quả tìm kiếm",
    "Sản phẩm có tên chứ “đế”",
    "Nhập đầy đủ tên sản phẩm hoặc chọn một sản phẩm trong danh sách để xem các lô hàng cần điều chỉnh.",
    "MH002",
    "Đế da",
    "Đế giày",
    "750",
    "MH001",
    "Đế cao su",
    "Đế giày",
    "750",
    "120",
    "2",
    "1",
    "MH003",
    "Đế PVC",
    "Đế giày",
    "750",
    "MH0022",
    "Đinh đóng đế",
    "Đinh",
    "750",
    "0",
    "320",
    "0",
    "3",
    "MÃ SẢN PHẨM",
    "TÊN SẢN PHẨM ",
    "DANH MỤC",
    "SỐ LƯỢNG TỒN",
    "750",
    "SỐ LÔ",
    "750",
    " đế ",
    "ĐINH",
    "10",
    "PHO",
    "5",
    "KEO",
    "3",
    "ĐẾ GIÀY",
    "3",
    "Số lượng",
    "DANH MỤC SẢN PHẨM"
  ]
}
```

### Điều chỉnh số tồn - mainflow 12 — 1:37674

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-37674) · 1440 × 900

```json
{
  "sourceNodeId": "1:37674",
  "name": "Điều chỉnh số tồn - mainflow 12",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:37675",
      "name": "Điều chỉnh số tồn - mainflow 12 ",
      "x": 0,
      "y": 0,
      "width": 1440,
      "height": 900,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:37758",
      "name": "Tìm kiếm sản phẩm",
      "x": 269,
      "y": 158,
      "width": 361,
      "height": 44,
      "layout": "HORIZONTAL",
      "padding": [
        4,
        12,
        4,
        12
      ],
      "gap": 10
    },
    {
      "id": "1:37774",
      "name": "akar-icons:chevron-right-small",
      "x": 590,
      "y": 318,
      "width": 24,
      "height": 24,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:37778",
      "name": "akar-icons:chevron-right-small",
      "x": 590,
      "y": 257,
      "width": 24,
      "height": 24,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:37783",
      "name": "akar-icons:chevron-right-small",
      "x": 590,
      "y": 372,
      "width": 24,
      "height": 20,
      "layout": "VERTICAL",
      "padding": [
        5,
        9,
        5,
        9
      ],
      "gap": 10
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Điều chỉnh số tồn",
    "TH",
    "Thu Hà",
    "Chủ cửa hàng",
    "Điều chỉnh số tồn",
    "Điều chỉnh thành công",
    "Số lượng tồn của lô đã được cập nhật và lưu vào lịch sử điều chỉnh.",
    "Điều chỉnh sản phẩm khác",
    "Hoàn tất",
    "đế",
    "DANH MỤC SẢN PHẨM",
    "Số lượng",
    "3",
    "5",
    "3",
    "ĐẾ GIÀY",
    "PHO",
    "10",
    "ĐINH",
    "KEO"
  ]
}
```

### Điều chỉnh số tồn - (Al a2)Tìm kiếm theo đầy đủ  tên  — 1:37786

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-37786) · 1440 × 900

```json
{
  "sourceNodeId": "1:37786",
  "name": "Điều chỉnh số tồn - (Al a2)Tìm kiếm theo đầy đủ  tên ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:37787",
      "name": "Điều chỉnh số tồn - (Al a2)Tìm kiếm theo đầy đủ  tên ",
      "x": 0,
      "y": 0,
      "width": 1440,
      "height": 900,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:37952",
      "name": "Action",
      "x": 1269,
      "y": 707,
      "width": 100,
      "height": 42,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        16,
        0,
        16
      ],
      "gap": 8
    },
    {
      "id": "1:37954",
      "name": "Action",
      "x": 1135,
      "y": 707,
      "width": 100,
      "height": 42,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        16,
        0,
        16
      ],
      "gap": 8
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Đế cao su ",
    "Chọn lô hàng cần điều chỉnh",
    "Số tồn hiện tại",
    "Số lượng thực tế ",
    "100",
    "85 ",
    "Chênh lệch",
    "-15 Cái ",
    "Lý do điều chỉnh ",
    "Đếm nhầm trước đó",
    "Diễn giải chi tiết",
    "LH0056",
    "06/11/2026",
    "650",
    "750",
    "Tổng số lô",
    "LH0012",
    "02/06/2026",
    "100",
    "750",
    "10 Ngày",
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Điều chỉnh số tồn",
    "TH",
    "Thu Hà",
    "Chủ cửa hàng",
    "Điều chỉnh số tồn",
    "2 ",
    "MÃ LÔ",
    "NGÀY NHẬP ",
    "SỐ TỒN HIỆN TẠI",
    "TUỔI TỒN",
    "750",
    "CHỌN",
    "94 Ngày",
    " đế cao su",
    "ĐINH",
    "10",
    "PHO",
    "5",
    "KEO",
    "3",
    "ĐẾ GIÀY",
    "3",
    "Số lượng",
    "DANH MỤC SẢN PHẨM",
    "Lô cũ nhất",
    "Lưu",
    "Huỷ bỏ"
  ]
}
```

### Frame 41 — 1:37956

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-37956) · 1446 × 887

```json
{
  "sourceNodeId": "1:37956",
  "name": "Frame 41",
  "viewport": {
    "width": 1446,
    "height": 887
  },
  "topLevelLayout": [
    {
      "id": "1:37958",
      "name": "điều chỉnh tồn ",
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
      "id": "1:38005",
      "name": "div.main",
      "x": 230,
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
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng  /  Quản lý tồn kho / Điều chỉnh số tồn",
    "TH",
    "Thu Hà",
    "Chủ cửa hàng",
    "Điều chỉnh số tồn",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm",
    "Danh mục sản phẩm",
    "Số lượng",
    "Chưa có danh mục nào được thiết lập",
    "Vui lòng tạo danh mục trước"
  ]
}
```

### Ex 2b- ko tìm thấy từ khoá — 1:38047

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-38047) · 1446 × 900

```json
{
  "sourceNodeId": "1:38047",
  "name": "Ex 2b- ko tìm thấy từ khoá",
  "viewport": {
    "width": 1446,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:38048",
      "name": "Frame 31",
      "x": 0,
      "y": 0,
      "width": 1446,
      "height": 901,
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
    "Cửa hàng  /  Quản lý tồn kho / Điều chỉnh số tồn",
    "TH",
    "Thu Hà",
    "Chủ cửa hàng",
    "Điều chỉnh số tồn",
    "Không tìm thấy sản phẩm phù hợp",
    "Vui lòng thay đổi từ khóa",
    " đế lsj",
    "ĐINH",
    "10",
    "PHO",
    "5",
    "KEO",
    "3",
    "ĐẾ GIÀY",
    "3",
    "Số lượng",
    "DANH MỤC SẢN PHẨM",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất"
  ]
}
```

### Điều chỉnh số tồn Ex 3a- chưa có lô — 1:38163

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-38163) · 1440 × 900

```json
{
  "sourceNodeId": "1:38163",
  "name": "Điều chỉnh số tồn Ex 3a- chưa có lô",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:38164",
      "name": "Điều chỉnh số tồn Ex 3a- chưa có lô",
      "x": 0,
      "y": 0,
      "width": 1440,
      "height": 900,
      "layout": "HORIZONTAL",
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
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Điều chỉnh số tồn",
    "TH",
    "Thu Hà",
    "Chủ cửa hàng",
    "Điều chỉnh số tồn",
    "Đế PVC ",
    "Chọn lô hàng cần điều chỉnh",
    "Sản phẩm chưa có lô nào để điều chỉnh",
    "Tổng số lô",
    "0 ",
    "MÃ LÔ",
    "NGÀY NHẬP",
    "SỐ TỒN HIỆN TẠI",
    "TUỔI TỒN",
    "750",
    "CHỌN",
    "Nhập tên sản phẩm ",
    "DANH MỤC SẢN PHẨM",
    "Số lượng",
    "3",
    "5",
    "3",
    "750",
    "0",
    "120",
    "ĐẾ GIÀY",
    "PHO",
    "Đế PVC",
    "Đế da",
    "Đế cao su",
    "10",
    "ĐINH",
    "KEO"
  ]
}
```

### Điều chỉnh số tồn Exp\_11a — 1:38291

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-38291) · 1440 × 900

```json
{
  "sourceNodeId": "1:38291",
  "name": "Điều chỉnh số tồn Exp_11a",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:38292",
      "name": "Điều chỉnh số tồn Exp_11a",
      "x": 0,
      "y": 0,
      "width": 1440,
      "height": 900,
      "layout": "HORIZONTAL",
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
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Điều chỉnh số tồn",
    "TH",
    "Thu Hà",
    "Chủ cửa hàng",
    "Điều chỉnh số tồn",
    "Đế cao su ",
    "Chọn lô hàng cần điều chỉnh",
    "Số tồn hiện tại",
    "Số lượng thực tế ",
    "100",
    "Chênh lệch",
    "--",
    "Lý do điều chỉnh ",
    "Diễn giải chi tiết",
    "LH0056",
    "06/11/2026",
    "650",
    "750",
    "Tổng số lô",
    "94 Ngày",
    "LH0012",
    "02/06/2026",
    "100",
    "750",
    "10 Ngày",
    "Chọn lý do",
    "2 ",
    "MÃ LÔ",
    "NGÀY NHẬP",
    "SỐ TỒN HIỆN TẠI",
    "TUỔI TỒN",
    "750",
    "CHỌN",
    "Lô cũ nhất",
    "Gặp sự cố, chưa lưu điều chỉnh",
    "Nhập số lượng thực tế",
    "Đóng",
    "Nhập tên sản phẩm ",
    "DANH MỤC SẢN PHẨM",
    "Số lượng",
    "3",
    "5",
    "3",
    "750",
    "0",
    "120",
    "ĐẾ GIÀY",
    "PHO",
    "Đế PVC",
    "Đế da",
    "Đế cao su",
    "10",
    "ĐINH",
    "KEO"
  ]
}
```

### Xem cảnh báo tồn kho - mainflow 3 tiếp — 1:38467

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-38467) · 1440 × 900

```json
{
  "sourceNodeId": "1:38467",
  "name": "Xem cảnh báo tồn kho - mainflow 3 tiếp",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:38468",
      "name": "Xem cảnh báo tồn kho - mainflow 3 tiếp",
      "x": 0,
      "y": 0,
      "width": 1440,
      "height": 900,
      "layout": "HORIZONTAL",
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Xem cảnh báo tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Cảnh báo tồn kho",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Chưa xử lý ",
    "Đế cao su đúc nguyên khối",
    "Tồn lâu",
    "Giá bán niêm yết",
    "45.000 đ",
    "Số tồn hiện tại",
    "750 cái",
    "Số tồn lúc báo",
    "800 cái",
    "Ngưỡng số ngày tồn",
    "90 ngày",
    "Thời điểm cảnh báo",
    "15/10/2026 09:00",
    "Thời điểm xử lý",
    "Chưa ghi nhận",
    "Trạng thái xử lý ",
    "Chưa xử lý",
    "Ngưỡng số lượng tồn kho tối thiểu",
    "100 cái",
    "Mã SP: MH007 | Danh mục: Đế giày",
    "",
    "Quay lại ",
    "",
    "Thông tin lô hàng cũ nhất còn tồn :",
    "Mã lô hàng: LH0064",
    "Ngày nhập: 10/05/2026",
    "Số ngày tồn của lô: 178 ngày"
  ]
}
```

### Xem cảnh báo tồn kho - mainflow 3 — 1:38600

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-38600) · 1440 × 900

```json
{
  "sourceNodeId": "1:38600",
  "name": "Xem cảnh báo tồn kho - mainflow 3",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:38601",
      "name": "Xem cảnh báo tồn kho - mainflow 3",
      "x": 0,
      "y": 0,
      "width": 1440,
      "height": 900,
      "layout": "HORIZONTAL",
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Xem cảnh báo tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Cảnh báo tồn kho",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Chưa xử lý ",
    "Hết hàng",
    "Đế PVC chống trượt",
    "Giá bán niêm yết",
    "35.000 đ",
    "Số tồn hiện tại",
    "0 cái",
    "Số tồn lúc báo",
    "0 cái",
    "Ngưỡng số ngày tồn",
    "90 ngày",
    "Thời điểm cảnh báo",
    "05/06/2026 08:30",
    "Thời điểm xử lý",
    "Chưa ghi nhận",
    "Trạng thái xử lý ",
    "Chưa xử lý",
    "Ngưỡng số lượng tồn kho tối thiểu",
    "50 cái",
    "Mã SP: MH006 | Danh mục: Đế giày",
    "",
    "Quay lại "
  ]
}
```

### Xem lịch sử điều chỉnh - mainflow 3 — 1:38722

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-38722) · 1440 × 900

```json
{
  "sourceNodeId": "1:38722",
  "name": "Xem lịch sử điều chỉnh - mainflow 3",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:38723",
      "name": "Xem lịch sử điều chỉnh - mainflow 3",
      "x": 0,
      "y": 0,
      "width": 1440,
      "height": 900,
      "layout": "HORIZONTAL",
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Xem lịch sử điều chỉnh",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử điều chỉnh tồn kho",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "",
    "Quay lại",
    "Đế cao su đúc nguyên khối",
    "-15 cái",
    "Mã lô: LH0064 | Danh mục: Đế giày | Ngày nhập lô: 10/05/2026",
    "Thời gian điều chỉnh",
    "28/10/2026 14:30:15",
    "Mã lô hàng",
    "LH0064",
    "Tên sản phẩm",
    "Đế cao su đúc nguyên khối",
    "Danh mục",
    "Đế giày",
    "Ngày nhập lô",
    "10/05/2026",
    "Số lượng tồn cũ",
    "150 cái",
    "Số lượng tồn mới",
    "135 cái",
    "Chênh lệch điều chỉnh",
    "-15 cái",
    "",
    "Lý do và diễn giải chi tiết:",
    " Phát hiện hư hỏng ẩm mốc do lưu kho lâu ngày nên hủy 15 sản phẩm."
  ]
}
```

### Xem lịch sử điều chỉnh - Exp\_1a — 1:38849

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-38849) · 1440 × 900

```json
{
  "sourceNodeId": "1:38849",
  "name": "Xem lịch sử điều chỉnh - Exp_1a",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:38850",
      "name": "Xem lịch sử điều chỉnh - Exp_1a",
      "x": 0,
      "y": 0,
      "width": 1440,
      "height": 900,
      "layout": "HORIZONTAL",
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Xem lịch sử điều chỉnh",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử điều chỉnh tồn kho",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Chưa có lịch sử điều chỉnh tồn kho"
  ]
}
```

### Xem cảnh báo tồn kho — 1:38919

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-38919) · 1440 × 900

```json
{
  "sourceNodeId": "1:38919",
  "name": "Xem cảnh báo tồn kho",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:38920",
      "name": "Xem cảnh báo tồn kho - Alt_2a ",
      "x": 0,
      "y": 0,
      "width": 1440,
      "height": 900,
      "layout": "HORIZONTAL",
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Xem cảnh báo tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Cảnh báo tồn kho",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Tình trạng :",
    "Tất cả",
    "Hết hàng",
    "Sắp hết",
    "Tồn lâu",
    "Trạng thái xử lý: ",
    "Đã xử lý ",
    "Tất cả danh mục",
    "TÊN SẢN PHẨM",
    "DANH MỤC",
    "SỐ TỒN HT",
    "NGƯỠNG TỐI THIỂU",
    "TÌNH TRẠNG ",
    "TRẠNG THÁI XỬ LÝ ",
    "THỜI ĐIỂM BÁO",
    "Keo dán giày x2000",
    "Keo",
    "100 cái",
    "50 cái",
    "Hết hàng",
    "Đã xử lý",
    "05/07/2026 08:30",
    "Đế da Ý cao cấp",
    "Đế giày",
    "300 cái",
    "200 cái",
    "Sắp hết",
    "Đã xử lý ",
    "20/01/2026 14:15"
  ]
}
```

### Xem lịch sử điều chỉnh — 1:39064

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-39064) · 1440 × 900

```json
{
  "sourceNodeId": "1:39064",
  "name": "Xem lịch sử điều chỉnh",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:39067",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:39083",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1087,
      "height": 572,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:39126",
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
      "id": "1:39172",
      "name": "History Log Table (Main Flow 1)",
      "x": 295,
      "y": 285,
      "width": 1006,
      "height": 169,
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Xem lịch sử điều chỉnh",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử điều chỉnh tồn kho",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm ",
    "mm / dd / yyyy",
    "dd / mm / yyyy",
    "dd / mm / yyyy",
    "đến",
    "Lọc theo thời gian: ",
    "Tất cả thời gian",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "THỜI GIAN ĐIỀU CHỈNH",
    "MÃ LÔ HÀNG",
    "TÊN SẢN PHẨM",
    "SỐ TỒN CŨ",
    "SỐ TỒN MỚI",
    "CHÊNH LỆCH",
    "04/11/2026 10:15",
    "LH0088",
    "Đế cao su đúc nguyên khối",
    "400 cái",
    "385 cái",
    "-15 cái",
    "28/10/2026 16:30",
    "LH0037",
    "Keo Dán Giày X2000",
    "80 cái",
    "100 cái",
    "+20 cái",
    "15/09/2026 09:20",
    "LH0076",
    "Đế PVC chống trượt",
    "10 cái",
    "0 cái",
    "-10 cái"
  ]
}
```

### Xem lịch sử điều chỉnh - Exp\_2a.1a  — 1:39230

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-39230) · 1440 × 900

```json
{
  "sourceNodeId": "1:39230",
  "name": "Xem lịch sử điều chỉnh - Exp_2a.1a ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:39233",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:39249",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1110,
      "height": 168,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:39292",
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
      "id": "1:39338",
      "name": "Frame 18",
      "x": 257,
      "y": 316,
      "width": 1110,
      "height": 268,
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Xem lịch sử điều chỉnh",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử điều chỉnh tồn kho",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm ",
    "mm / dd / yyyy",
    "mm / dd / yyyy",
    "mm / dd / yyyy",
    "đến",
    "Lọc theo thời gian: ",
    "Hôm nay",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Không tìm thấy lần điều chỉnh nào"
  ]
}
```

### Xem lịch sử điều chỉnh - Exp\_2b.1a  — 1:39344

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-39344) · 1440 × 900

```json
{
  "sourceNodeId": "1:39344",
  "name": "Xem lịch sử điều chỉnh - Exp_2b.1a ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:39347",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:39363",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1110,
      "height": 168,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:39406",
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
      "id": "1:39452",
      "name": "Frame 18",
      "x": 257,
      "y": 316,
      "width": 1110,
      "height": 268,
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Xem lịch sử điều chỉnh",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử điều chỉnh tồn kho",
    "Tìm sản phẩm",
    "đinh dja ",
    "mm / dd / yyyy",
    "mm / dd / yyyy",
    "mm / dd / yyyy",
    "đến",
    "Lọc theo thời gian: ",
    "Tất cả thời gian",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Không tìm thấy lần điều chỉnh nào"
  ]
}
```

### Xem lịch sử điều chỉnh - Exp\_2b.1a  — 1:39458

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-39458) · 1440 × 900

```json
{
  "sourceNodeId": "1:39458",
  "name": "Xem lịch sử điều chỉnh - Exp_2b.1a ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:39461",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:39477",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1110,
      "height": 168,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:39520",
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
      "id": "1:39566",
      "name": "Frame 18",
      "x": 257,
      "y": 316,
      "width": 1110,
      "height": 268,
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Xem lịch sử điều chỉnh",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử điều chỉnh tồn kho",
    "Tìm sản phẩm",
    "Tìm kiếm sản phẩm",
    "mm / dd / yyyy",
    "02 / 08 / 2026",
    "06 / 11 / 2026",
    "đến",
    "Lọc theo thời gian: ",
    "Tất cả thời gian",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Không tìm thấy lần điều chỉnh nào"
  ]
}
```

### Xem lịch sử điều chỉnh Alt\_2a — 1:39572

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-39572) · 1440 × 900

```json
{
  "sourceNodeId": "1:39572",
  "name": "Xem lịch sử điều chỉnh Alt_2a",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:39575",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:39591",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1087,
      "height": 572,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:39634",
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
      "id": "1:39680",
      "name": "History Log Table (Main Flow 1)",
      "x": 295,
      "y": 285,
      "width": 1006,
      "height": 169,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:39738",
      "name": "Frame 9",
      "x": 446,
      "y": 258,
      "width": 144,
      "height": 110,
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Xem lịch sử điều chỉnh",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử điều chỉnh tồn kho",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm ",
    "mm / dd / yyyy",
    "dd / mm / yyyy",
    "dd / mm / yyyy",
    "đến",
    "Lọc theo thời gian: ",
    "Tất cả thời gian",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "THỜI GIAN ĐIỀU CHỈNH",
    "MÃ LÔ HÀNG",
    "TÊN SẢN PHẨM",
    "SỐ TỒN CŨ",
    "SỐ TỒN MỚI",
    "CHÊNH LỆCH",
    "04/11/2026 10:15",
    "LH0088",
    "Đế cao su đúc nguyên khối",
    "400 cái",
    "385 cái",
    "-15 cái",
    "28/10/2026 16:30",
    "LH0037",
    "Keo Dán Giày X2000",
    "80 cái",
    "100 cái",
    "+20 cái",
    "15/09/2026 09:20",
    "LH0076",
    "Đế PVC chống trượt",
    "10 cái",
    "0 cái",
    "-10 cái",
    "7 ngày qua",
    "Hôm nay",
    "Tất cả thời gian"
  ]
}
```

### Tra cứu tồn kho - (Ex 2a.1a) đang nhập từ khoá — 1:39753

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-39753) · 1440 × 900

```json
{
  "sourceNodeId": "1:39753",
  "name": "Tra cứu tồn kho - (Ex 2a.1a) đang nhập từ khoá",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:39756",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:39772",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1150,
      "height": 125,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:39790",
      "name": "Category",
      "x": 495,
      "y": 206,
      "width": 62,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:39792",
      "name": "Category",
      "x": 276,
      "y": 206,
      "width": 86,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:39796",
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
      "id": "1:39844",
      "name": "lucide:package-search",
      "x": 799,
      "y": 354,
      "width": 37,
      "height": 37,
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Tra cứu tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu tồn kho",
    "Tìm sản phẩm",
    "Lro",
    "Còn hàng",
    "Sắp hết ",
    "Hết hàng",
    "Tồn lâu",
    "Tình trạng tồn:",
    "Tất cả",
    "Tất cả",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Không tìm thấy sản phẩm phù hợp",
    "Vui lòng thay đổi từ khoá hoặc bộ lọc tình trạng"
  ]
}
```

### Điều chỉnh số tồn Exp\_6a — 1:39851

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-39851) · 1440 × 900

```json
{
  "sourceNodeId": "1:39851",
  "name": "Điều chỉnh số tồn Exp_6a",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:39852",
      "name": "Điều chỉnh số tồn Exp_11a",
      "x": 0,
      "y": 0,
      "width": 1440,
      "height": 900,
      "layout": "HORIZONTAL",
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
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Điều chỉnh số tồn",
    "TH",
    "Thu Hà",
    "Chủ cửa hàng",
    "Điều chỉnh số tồn",
    "Đế cao su ",
    "Chọn lô hàng cần điều chỉnh",
    "Số tồn hiện tại",
    "Số lượng thực tế ",
    "100",
    "Chênh lệch",
    "--",
    "Lý do điều chỉnh ",
    "Diễn giải chi tiết",
    "LH0056",
    "06/11/2026",
    "650",
    "750",
    "Tổng số lô",
    "94 Ngày",
    "LH0012",
    "02/06/2026",
    "100",
    "750",
    "10 Ngày",
    "Chọn lý do",
    "2 ",
    "MÃ LÔ",
    "NGÀY NHẬP",
    "SỐ TỒN HIỆN TẠI",
    "TUỔI TỒN",
    "750",
    "CHỌN",
    "Lô cũ nhất",
    "-23",
    "Đóng",
    "Nhập tên sản phẩm ",
    "DANH MỤC SẢN PHẨM",
    "Số lượng",
    "3",
    "5",
    "3",
    "750",
    "0",
    "120",
    "ĐẾ GIÀY",
    "PHO",
    "Đế PVC",
    "Đế da",
    "Đế cao su",
    "10",
    "ĐINH",
    "KEO",
    "Vui lòng nhập số nguyên không âm"
  ]
}
```

### Tra cứu tồn kho Alt\_2a — 1:40027

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-40027) · 1440 × 900

```json
{
  "sourceNodeId": "1:40027",
  "name": "Tra cứu tồn kho Alt_2a",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:40030",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:40046",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1150,
      "height": 125,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:40064",
      "name": "Category",
      "x": 495,
      "y": 206,
      "width": 62,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:40066",
      "name": "Category",
      "x": 276,
      "y": 206,
      "width": 86,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:40070",
      "name": "Invoice results",
      "x": 257,
      "y": 272,
      "width": 1150,
      "height": 213,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:40136",
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
    }
  ],
  "text": [
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Tra cứu tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu tồn kho",
    "Tìm sản phẩm",
    "đế",
    "Còn hàng",
    "Sắp hết ",
    "Hết hàng",
    "Tồn lâu",
    "Tình trạng tồn:",
    "Tất cả",
    "Tất cả",
    "Đế giày",
    "4 mặt hàng",
    "Tổng tồn danh mục: 1320",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH001",
    "Đế cao su",
    "45.000 đ",
    "02/11/2026",
    "Tồn lâu",
    "750",
    "MH002",
    "Đế da",
    "120.000 ₫",
    "01/02/2026",
    "Sắp hết",
    "120",
    "MH003",
    "Đế PVC",
    "35.000 ₫",
    "12/06/2026",
    "Hết hàng",
    "0",
    "MH004",
    "Đế TPU",
    "55.000 ₫",
    "30/05/2026",
    "Còn hàng",
    "450",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất"
  ]
}
```

### Tra cứu tồn kho Alt\_2c — 1:40182

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-40182) · 1440 × 900

```json
{
  "sourceNodeId": "1:40182",
  "name": "Tra cứu tồn kho Alt_2c",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:40185",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:40201",
      "name": "Panel",
      "x": 257,
      "y": 123,
      "width": 1150,
      "height": 125,
      "layout": "VERTICAL",
      "padding": [
        5,
        20,
        5,
        20
      ],
      "gap": 4
    },
    {
      "id": "1:40219",
      "name": "Category",
      "x": 495,
      "y": 206,
      "width": 62,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:40221",
      "name": "Category",
      "x": 276,
      "y": 206,
      "width": 86,
      "height": 32,
      "layout": "HORIZONTAL",
      "padding": [
        8,
        13,
        8,
        13
      ],
      "gap": 0
    },
    {
      "id": "1:40225",
      "name": "Invoice results",
      "x": 257,
      "y": 275,
      "width": 1150,
      "height": 192,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:40278",
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
    }
  ],
  "text": [
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Tra cứu tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tra cứu tồn kho",
    "Tìm sản phẩm",
    "Nhập tên sản phẩm ",
    "Còn hàng",
    "Sắp hết ",
    "Hết hàng",
    "Tồn lâu",
    "Tình trạng tồn:",
    "Tất cả",
    "Keo",
    "Keo",
    "3 mặt hàng",
    "Tổng tồn danh mục: 585",
    "MÃ SẢN PHẨM ",
    "TÊN SẢN PHẨM",
    "GIÁ BÁN",
    "NGÀY NHẬP GẦN NHẤT",
    "TRẠNG THÁI",
    " ",
    "SỐ LƯỢNG TỒN",
    "MH005",
    "Keo Dán Giày x 2000",
    "85.000 đ",
    "02/09/2026",
    "Sắp hết",
    "80",
    "MH006",
    "Keo Dán Giày Scotch",
    "95.000 ₫",
    "09/02/2026",
    "Còn hàng",
    "490",
    "MH007",
    "Keo Dán Giày x SeaGlue",
    "70.000 ₫",
    "12/09/2026",
    "15",
    "Sắp hết",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất"
  ]
}
```

### Xem cảnh báo tồn kho - mainflow 1,2  — 1:40324

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-40324) · 1440 × 900

```json
{
  "sourceNodeId": "1:40324",
  "name": "Xem cảnh báo tồn kho - mainflow 1,2 ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:40327",
      "name": "Top bar",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 72,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        32,
        0,
        32
      ],
      "gap": 0
    },
    {
      "id": "1:40343",
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
      "id": "1:40389",
      "name": "Filters Bar (Alt Flow 2a)",
      "x": 258,
      "y": 133,
      "width": 1130,
      "height": 108,
      "layout": "HORIZONTAL",
      "padding": [
        14,
        14,
        14,
        14
      ],
      "gap": 184.22000122070312
    },
    {
      "id": "1:40412",
      "name": "akar-icons:chevron-down-small",
      "x": 647,
      "y": 199,
      "width": 16,
      "height": 16,
      "layout": "NONE",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:40414",
      "name": "Main Alert Table View (Main Flow 1)",
      "x": 256,
      "y": 266,
      "width": 1130,
      "height": 219,
      "layout": "VERTICAL",
      "padding": [
        0,
        0,
        0,
        0
      ],
      "gap": 0
    },
    {
      "id": "1:40486",
      "name": "tr",
      "x": 212,
      "y": 440,
      "width": 1216,
      "height": 44,
      "layout": "HORIZONTAL",
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
    "Cửa hàng",
    "/",
    "Quản lý tồn kho / Xem cảnh báo tồn kho",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Cảnh báo tồn kho",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Điều chỉnh số tồn",
    "Xem cảnh báo tồn kho",
    "Xem lịch sử điều chỉnh",
    "Tra cứu tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Tình trạng :",
    "Tất cả",
    "Hết hàng",
    "Sắp hết",
    "Tồn lâu",
    "Trạng thái xử lý: ",
    "Tất cả trạng thái",
    "Tất cả danh mục",
    "TÊN SẢN PHẨM",
    "DANH MỤC",
    "SỐ TỒN HT",
    "NGƯỠNG TỐI THIỂU",
    "TÌNH TRẠNG ",
    "TRẠNG THÁI XỬ LÝ ",
    "THỜI ĐIỂM BÁO",
    "Đế PVC chống trượt",
    "Đế giày",
    "0 cái",
    "50 cái",
    "Hết hàng",
    "Chưa xử lý ",
    "05/06/2026 08:30",
    "Đế da Ý cao cấp",
    "Đế giày",
    "120 cái",
    "200 cái",
    "Sắp hết",
    "Chưa xử lý ",
    "20/09/2026 14:15",
    "Đế cao su đúc nguyên khối",
    "Đế giày",
    "750 cái",
    "100 cái",
    "Tồn lâu",
    "Chưa xử lý ",
    "15/10/2026 09:00",
    "Keo dán giày x2000",
    "Keo",
    "100 cái",
    "50 cái",
    "Hết hàng",
    "Đã xử lý",
    "05/07/2026 08:30"
  ]
}
```
