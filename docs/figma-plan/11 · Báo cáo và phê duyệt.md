# 11 · Báo cáo và phê duyệt

## Cách triển khai

Section này chứa cả doanh thu, số lượng bán/trả, phê duyệt và đăng xuất; không chỉ báo cáo. Có nhiều frame cùng tên nằm trong section lồng nhau, đôi khi khác sidebar. Giữ cả nguồn để đối chiếu; chọn một bản chuẩn trước triển khai, không tạo hai route chỉ vì có hai bản. Bộ chọn ngày/tháng cần trạng thái riêng. Không phát sinh, kỳ chỉ hoàn trả, thiếu giá vốn, lỗi tải, không có quyền và yêu cầu đã hủy không được thay bằng cùng một màn trống.

## Cách đọc dữ liệu nguồn

Bản trích xuất cấu trúc và văn bản, KHÔNG phải ảnh hay đặc tả hành vi hoàn chỉnh. text giữ nguyên chuỗi theo thứ tự cây layer, không đảm bảo thứ tự đọc trực quan. topLevelLayout chỉ mô tả frame con trực tiếp bằng tọa độ tương đối. Loại text có visible=false ở bản thân hoặc tổ tiên; chưa phân tích lớp che/mask. Tên trạng thái gợi ý kịch bản nhưng không chứng minh trigger, điều kiện hoặc quyền. Chưa xuất ảnh/font/logo/SVG; cần ảnh nguồn để đối chiếu hình học. Xem tài liệu 01 cho baseline và 04 cho nghiệm thu. Không nạp toàn bộ tài liệu này vào một tác vụ; lấy đúng nhóm nguồn cần thực hiện.

## doanh thu và báo cáo

### 10-W05 · Đăng xuất thành công · Đăng nhập — 1:48058

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48058) · 1440 × 900

```json
{
  "sourceNodeId": "1:48058",
  "name": "10-W05 · Đăng xuất thành công · Đăng nhập",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:48059",
      "name": "Frame",
      "x": 510,
      "y": 256,
      "width": 420,
      "height": 388,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 24
    }
  ],
  "text": [
    "KinKin POS",
    "Cửa hàng phụ kiện giày",
    "Đăng nhập",
    "Tên đăng nhập",
    "Nhập tên đăng nhập",
    "Mật khẩu",
    "Nhập mật khẩu",
    "Đăng nhập"
  ]
}
```

### 10-W05 · Đăng xuất thành công · Đăng nhập — 1:48083

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48083) · 1440 × 900

```json
{
  "sourceNodeId": "1:48083",
  "name": "10-W05 · Đăng xuất thành công · Đăng nhập",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:48084",
      "name": "Frame",
      "x": 510,
      "y": 256,
      "width": 420,
      "height": 388,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 24
    }
  ],
  "text": [
    "KinKin POS",
    "Cửa hàng phụ kiện giày",
    "Đăng nhập",
    "Tên đăng nhập",
    "Nhập tên đăng nhập",
    "Mật khẩu",
    "Nhập mật khẩu",
    "Đăng nhập"
  ]
}
```

### 10-M01 · Trước đăng xuất — 1:48110

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48110) · 393 × 960

```json
{
  "sourceNodeId": "1:48110",
  "name": "10-M01 · Trước đăng xuất",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:48111",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:48117",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Đăng xuất",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Thời gian báo cáo: 07/11/2026",
    "Tổng tiền bán",
    "2.000.000 ₫",
    "Tổng tiền hoàn trả",
    "78.000 ₫",
    "Doanh thu",
    "1.922.000 ₫",
    "Tổng giá vốn",
    "1.190.000 ₫",
    "Lợi nhuận gộp",
    "732.000 ₫"
  ]
}
```

### 10-M01 · Trước đăng xuất — 1:48146

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48146) · 393 × 960

```json
{
  "sourceNodeId": "1:48146",
  "name": "10-M01 · Trước đăng xuất",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:48147",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:48153",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Đăng xuất",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Thời gian báo cáo: 07/11/2026",
    "Tổng tiền bán",
    "2.000.000 ₫",
    "Tổng tiền hoàn trả",
    "78.000 ₫",
    "Doanh thu",
    "1.922.000 ₫",
    "Tổng giá vốn",
    "1.190.000 ₫",
    "Lợi nhuận gộp",
    "732.000 ₫"
  ]
}
```

### 10-M05 · Đăng xuất thành công · Đăng nhập — 1:48184

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48184) · 393 × 960

```json
{
  "sourceNodeId": "1:48184",
  "name": "10-M05 · Đăng xuất thành công · Đăng nhập",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:48185",
      "name": "Frame",
      "x": 17.5,
      "y": 286,
      "width": 358,
      "height": 388,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 24
    }
  ],
  "text": [
    "KinKin POS",
    "Cửa hàng phụ kiện giày",
    "Đăng nhập",
    "Tên đăng nhập",
    "Nhập tên đăng nhập",
    "Mật khẩu",
    "Nhập mật khẩu",
    "Đăng nhập"
  ]
}
```

### 10-M05 · Đăng xuất thành công · Đăng nhập — 1:48209

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48209) · 393 × 960

```json
{
  "sourceNodeId": "1:48209",
  "name": "10-M05 · Đăng xuất thành công · Đăng nhập",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:48210",
      "name": "Frame",
      "x": 17.5,
      "y": 286,
      "width": 358,
      "height": 388,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 24
    }
  ],
  "text": [
    "KinKin POS",
    "Cửa hàng phụ kiện giày",
    "Đăng nhập",
    "Tên đăng nhập",
    "Nhập tên đăng nhập",
    "Mật khẩu",
    "Nhập mật khẩu",
    "Đăng nhập"
  ]
}
```

### 10-W01 · Trước đăng xuất — 1:48236

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48236) · 1440 × 900

```json
{
  "sourceNodeId": "1:48236",
  "name": "10-W01 · Trước đăng xuất",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:48238",
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
      "id": "1:48255",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Thời gian báo cáo: 07/11/2026",
    "Tổng tiền bán",
    "2.000.000 ₫",
    "Tổng tiền hoàn trả",
    "78.000 ₫",
    "Doanh thu",
    "1.922.000 ₫",
    "Tổng giá vốn",
    "1.190.000 ₫",
    "Lợi nhuận gộp",
    "732.000 ₫"
  ]
}
```

### 10-W01 · Trước đăng xuất — 1:48284

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48284) · 1440 × 900

```json
{
  "sourceNodeId": "1:48284",
  "name": "10-W01 · Trước đăng xuất",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:48285",
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
      "id": "1:48302",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
      "id": "1:48329",
      "name": "Sidebar · Theo mẫu nhỏ",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Thời gian báo cáo: 07/11/2026",
    "Tổng tiền bán",
    "2.000.000 ₫",
    "Tổng tiền hoàn trả",
    "78.000 ₫",
    "Doanh thu",
    "1.922.000 ₫",
    "Tổng giá vốn",
    "1.190.000 ₫",
    "Lợi nhuận gộp",
    "732.000 ₫",
    "KinKin POS",
    "Shoe Accessories Shop",
    "Đăng xuất",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Xem doanh thu",
    "Số lượng hàng bán/trả"
  ]
}
```

### 10-W02 · Hủy yêu cầu trước khi thoát — 1:48367

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48367) · 1440 × 900

```json
{
  "sourceNodeId": "1:48367",
  "name": "10-W02 · Hủy yêu cầu trước khi thoát",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:48369",
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
      "id": "1:48386",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Quản lý tài khoản",
    "Chức năng cá nhân",
    "Đặt lại mật khẩu",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy · Khóa",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đang chờ Chủ cửa hàng phản hồi",
    "Nội dung gửi qua Zalo",
    "Thu Hà gửi yêu cầu duyệt giảm giá sỉ\nHD-0211-0049 · Tổng: 2.000.000 ₫\nMở liên kết để đăng nhập KinKin POS và duyệt.",
    "Hủy yêu cầu",
    "Nhân viên thực hiện gửi trong Zalo.",
    "Tổng trước giảm: 2.000.000 ₫\nSố tiền giảm: —\nTổng sau giảm: —",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Đang hủy yêu cầu phê duyệt của phiên này trước khi đăng xuất…"
  ]
}
```

### 10-W02 · Hủy yêu cầu trước khi thoát — 1:48435

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48435) · 1440 × 900

```json
{
  "sourceNodeId": "1:48435",
  "name": "10-W02 · Hủy yêu cầu trước khi thoát",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:48436",
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
      "id": "1:48453",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy · Khóa",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đang chờ Chủ cửa hàng phản hồi",
    "Nội dung gửi qua Zalo",
    "Thu Hà gửi yêu cầu duyệt giảm giá sỉ\nHD-0211-0049 · Tổng: 2.000.000 ₫\nMở liên kết để đăng nhập KinKin POS và duyệt.",
    "Hủy yêu cầu",
    "Nhân viên thực hiện gửi trong Zalo.",
    "Tổng trước giảm: 2.000.000 ₫\nSố tiền giảm: —\nTổng sau giảm: —",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Đang hủy yêu cầu phê duyệt của phiên này trước khi đăng xuất…",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "Đăng xuất"
  ]
}
```

### 10-W03 · Không hủy được yêu cầu — 1:48505

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48505) · 1440 × 900

```json
{
  "sourceNodeId": "1:48505",
  "name": "10-W03 · Không hủy được yêu cầu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:48507",
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
      "id": "1:48524",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Quản lý tài khoản",
    "Chức năng cá nhân",
    "Đặt lại mật khẩu",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy · Khóa",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đang chờ Chủ cửa hàng phản hồi",
    "Nội dung gửi qua Zalo",
    "Thu Hà gửi yêu cầu duyệt giảm giá sỉ\nHD-0211-0049 · Tổng: 2.000.000 ₫\nMở liên kết để đăng nhập KinKin POS và duyệt.",
    "Hủy yêu cầu",
    "Nhân viên thực hiện gửi trong Zalo.",
    "Tổng trước giảm: 2.000.000 ₫\nSố tiền giảm: —\nTổng sau giảm: —",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Chưa thể đăng xuất vì không hủy được yêu cầu đang chờ. Vui lòng thử lại.",
    "Yêu cầu vẫn đang chờ duyệt. Nội dung và thao tác tiền/hàng tiếp tục bị khóa."
  ]
}
```

### 10-W03 · Không hủy được yêu cầu — 1:48574

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48574) · 1440 × 900

```json
{
  "sourceNodeId": "1:48574",
  "name": "10-W03 · Không hủy được yêu cầu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:48575",
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
      "id": "1:48592",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy · Khóa",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đang chờ Chủ cửa hàng phản hồi",
    "Nội dung gửi qua Zalo",
    "Thu Hà gửi yêu cầu duyệt giảm giá sỉ\nHD-0211-0049 · Tổng: 2.000.000 ₫\nMở liên kết để đăng nhập KinKin POS và duyệt.",
    "Hủy yêu cầu",
    "Nhân viên thực hiện gửi trong Zalo.",
    "Tổng trước giảm: 2.000.000 ₫\nSố tiền giảm: —\nTổng sau giảm: —",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Chưa thể đăng xuất vì không hủy được yêu cầu đang chờ. Vui lòng thử lại.",
    "Yêu cầu vẫn đang chờ duyệt. Nội dung và thao tác tiền/hàng tiếp tục bị khóa.",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "Đăng xuất"
  ]
}
```

### 10-W04 · Không thể đăng xuất — 1:48645

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48645) · 1440 × 900

```json
{
  "sourceNodeId": "1:48645",
  "name": "10-W04 · Không thể đăng xuất",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:48647",
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
      "id": "1:48664",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Thời gian báo cáo: 07/11/2026",
    "Tổng tiền bán",
    "2.000.000 ₫",
    "Tổng tiền hoàn trả",
    "78.000 ₫",
    "Doanh thu",
    "1.922.000 ₫",
    "Tổng giá vốn",
    "1.190.000 ₫",
    "Lợi nhuận gộp",
    "732.000 ₫",
    "Không thể đăng xuất do lỗi hệ thống. Vui lòng thử lại.",
    "Yêu cầu trước đó đã được hủy; liên kết Zalo không còn hiệu lực. Phiên này chưa kết thúc."
  ]
}
```

### 10-W04 · Không thể đăng xuất — 1:48696

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48696) · 1440 × 900

```json
{
  "sourceNodeId": "1:48696",
  "name": "10-W04 · Không thể đăng xuất",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:48697",
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
      "id": "1:48714",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Thời gian báo cáo: 07/11/2026",
    "Tổng tiền bán",
    "2.000.000 ₫",
    "Tổng tiền hoàn trả",
    "78.000 ₫",
    "Doanh thu",
    "1.922.000 ₫",
    "Tổng giá vốn",
    "1.190.000 ₫",
    "Lợi nhuận gộp",
    "732.000 ₫",
    "Không thể đăng xuất do lỗi hệ thống. Vui lòng thử lại.",
    "Yêu cầu trước đó đã được hủy; liên kết Zalo không còn hiệu lực. Phiên này chưa kết thúc."
  ]
}
```

### 10-M02 · Hủy yêu cầu trước khi thoát — 1:48783

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48783) · 393 × 960

```json
{
  "sourceNodeId": "1:48783",
  "name": "10-M02 · Hủy yêu cầu trước khi thoát",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:48784",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:48790",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Đăng xuất",
    "Xem doanh thu",
    "Đang hủy yêu cầu phê duyệt của phiên này trước khi đăng xuất…"
  ]
}
```

### 10-M02 · Hủy yêu cầu trước khi thoát — 1:48796

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48796) · 393 × 960

```json
{
  "sourceNodeId": "1:48796",
  "name": "10-M02 · Hủy yêu cầu trước khi thoát",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:48797",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:48803",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Đăng xuất",
    "Xem doanh thu",
    "Đang hủy yêu cầu phê duyệt của phiên này trước khi đăng xuất…"
  ]
}
```

### 10-M03 · Không hủy được yêu cầu — 1:48811

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48811) · 393 × 960

```json
{
  "sourceNodeId": "1:48811",
  "name": "10-M03 · Không hủy được yêu cầu",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:48812",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:48818",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Đăng xuất",
    "Xem doanh thu",
    "Chưa thể đăng xuất vì không hủy được yêu cầu đang chờ. Vui lòng thử lại.",
    "Yêu cầu vẫn đang chờ duyệt. Nội dung và thao tác tiền/hàng tiếp tục bị khóa."
  ]
}
```

### 10-M03 · Không hủy được yêu cầu — 1:48825

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48825) · 393 × 960

```json
{
  "sourceNodeId": "1:48825",
  "name": "10-M03 · Không hủy được yêu cầu",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:48826",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:48832",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Đăng xuất",
    "Xem doanh thu",
    "Chưa thể đăng xuất vì không hủy được yêu cầu đang chờ. Vui lòng thử lại.",
    "Yêu cầu vẫn đang chờ duyệt. Nội dung và thao tác tiền/hàng tiếp tục bị khóa."
  ]
}
```

### 10-M04 · Không thể đăng xuất — 1:48841

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48841) · 393 × 960

```json
{
  "sourceNodeId": "1:48841",
  "name": "10-M04 · Không thể đăng xuất",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:48842",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:48848",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Đăng xuất",
    "Xem doanh thu",
    "Không thể đăng xuất do lỗi hệ thống. Vui lòng thử lại.",
    "Yêu cầu trước đó đã được hủy; liên kết Zalo không còn hiệu lực. Phiên này chưa kết thúc."
  ]
}
```

### 10-M04 · Không thể đăng xuất — 1:48855

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48855) · 393 × 960

```json
{
  "sourceNodeId": "1:48855",
  "name": "10-M04 · Không thể đăng xuất",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:48856",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:48862",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Đăng xuất",
    "Xem doanh thu",
    "Không thể đăng xuất do lỗi hệ thống. Vui lòng thử lại.",
    "Yêu cầu trước đó đã được hủy; liên kết Zalo không còn hiệu lực. Phiên này chưa kết thúc."
  ]
}
```

### 51-M01 · Ban đầu — 1:48869

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48869) · 393 × 960

```json
{
  "sourceNodeId": "1:48869",
  "name": "51-M01 · Ban đầu",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:48870",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:48874",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo"
  ]
}
```

### 51-M01 · Ban đầu — 1:48887

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48887) · 393 × 960

```json
{
  "sourceNodeId": "1:48887",
  "name": "51-M01 · Ban đầu",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:48888",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:48892",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo"
  ]
}
```

### 51-M02 · Chọn ngày — 1:48907

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48907) · 393 × 960

```json
{
  "sourceNodeId": "1:48907",
  "name": "51-M02 · Chọn ngày",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:48908",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:48912",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Tháng 11, 2026",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "CN",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "T7",
    "‹",
    "›"
  ]
}
```

### 51-M02 · Chọn ngày — 1:48996

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-48996) · 393 × 960

```json
{
  "sourceNodeId": "1:48996",
  "name": "51-M02 · Chọn ngày",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:48997",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49001",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Tháng 11, 2026",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "CN",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "T7",
    "‹",
    "›"
  ]
}
```

### 51-M04 · Báo cáo ngày — 1:49087

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49087) · 393 × 960

```json
{
  "sourceNodeId": "1:49087",
  "name": "51-M04 · Báo cáo ngày",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49088",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49092",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Thời gian báo cáo: 07/11/2026",
    "Tổng tiền bán",
    "2.000.000 ₫",
    "Tổng tiền hoàn trả",
    "78.000 ₫",
    "Doanh thu",
    "1.922.000 ₫",
    "Tổng giá vốn",
    "1.190.000 ₫",
    "Lợi nhuận gộp",
    "732.000 ₫"
  ]
}
```

### 51-M04 · Báo cáo ngày — 1:49121

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49121) · 393 × 960

```json
{
  "sourceNodeId": "1:49121",
  "name": "51-M04 · Báo cáo ngày",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49122",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49126",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Thời gian báo cáo: 07/11/2026",
    "Tổng tiền bán",
    "2.000.000 ₫",
    "Tổng tiền hoàn trả",
    "78.000 ₫",
    "Doanh thu",
    "1.922.000 ₫",
    "Tổng giá vốn",
    "1.190.000 ₫",
    "Lợi nhuận gộp",
    "732.000 ₫"
  ]
}
```

### 51-M05 · Báo cáo tháng — 1:49157

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49157) · 393 × 960

```json
{
  "sourceNodeId": "1:49157",
  "name": "51-M05 · Báo cáo tháng",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49158",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49162",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem báo cáo",
    "Thời gian báo cáo: Tháng 11/2026",
    "Tổng tiền bán",
    "24.000.000 ₫",
    "Tổng tiền hoàn trả",
    "1.544.000 ₫",
    "Doanh thu",
    "22.456.000 ₫",
    "Tổng giá vốn",
    "13.920.000 ₫",
    "Lợi nhuận gộp",
    "8.536.000 ₫"
  ]
}
```

### 51-M05 · Báo cáo tháng — 1:49191

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49191) · 393 × 960

```json
{
  "sourceNodeId": "1:49191",
  "name": "51-M05 · Báo cáo tháng",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49192",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49196",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem báo cáo",
    "Thời gian báo cáo: Tháng 11/2026",
    "Tổng tiền bán",
    "24.000.000 ₫",
    "Tổng tiền hoàn trả",
    "1.544.000 ₫",
    "Doanh thu",
    "22.456.000 ₫",
    "Tổng giá vốn",
    "13.920.000 ₫",
    "Lợi nhuận gộp",
    "8.536.000 ₫"
  ]
}
```

### 51-M06 · Không phát sinh — 1:49227

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49227) · 393 × 960

```json
{
  "sourceNodeId": "1:49227",
  "name": "51-M06 · Không phát sinh",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49228",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49232",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Thời gian báo cáo: 07/11/2026",
    "Tổng tiền bán",
    "0 ₫",
    "Tổng tiền hoàn trả",
    "0 ₫",
    "Doanh thu",
    "0 ₫",
    "Tổng giá vốn",
    "0 ₫",
    "Lợi nhuận gộp",
    "0 ₫"
  ]
}
```

### 51-M06 · Không phát sinh — 1:49261

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49261) · 393 × 960

```json
{
  "sourceNodeId": "1:49261",
  "name": "51-M06 · Không phát sinh",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49262",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49266",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Thời gian báo cáo: 07/11/2026",
    "Tổng tiền bán",
    "0 ₫",
    "Tổng tiền hoàn trả",
    "0 ₫",
    "Doanh thu",
    "0 ₫",
    "Tổng giá vốn",
    "0 ₫",
    "Lợi nhuận gộp",
    "0 ₫"
  ]
}
```

### 51-M07 · Kỳ chỉ có hoàn trả — 1:49297

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49297) · 393 × 960

```json
{
  "sourceNodeId": "1:49297",
  "name": "51-M07 · Kỳ chỉ có hoàn trả",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49298",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49302",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "06/11/2026  ▦",
    "Xem báo cáo",
    "Thời gian báo cáo: 06/11/2026",
    "Tổng tiền bán",
    "0 ₫",
    "Tổng tiền hoàn trả",
    "78.000 ₫",
    "Doanh thu",
    "-78.000 ₫",
    "Tổng giá vốn",
    "-50.000 ₫",
    "Lợi nhuận gộp",
    "-28.000 ₫"
  ]
}
```

### 51-M07 · Kỳ chỉ có hoàn trả — 1:49331

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49331) · 393 × 960

```json
{
  "sourceNodeId": "1:49331",
  "name": "51-M07 · Kỳ chỉ có hoàn trả",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49332",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49336",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "06/11/2026  ▦",
    "Xem báo cáo",
    "Thời gian báo cáo: 06/11/2026",
    "Tổng tiền bán",
    "0 ₫",
    "Tổng tiền hoàn trả",
    "78.000 ₫",
    "Doanh thu",
    "-78.000 ₫",
    "Tổng giá vốn",
    "-50.000 ₫",
    "Lợi nhuận gộp",
    "-28.000 ₫"
  ]
}
```

### 51-M08 · Lỗi tải dữ liệu — 1:49367

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49367) · 393 × 960

```json
{
  "sourceNodeId": "1:49367",
  "name": "51-M08 · Lỗi tải dữ liệu",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49368",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49372",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Không thể tải dữ liệu do lỗi hệ thống. Vui lòng thử lại sau."
  ]
}
```

### 51-M08 · Lỗi tải dữ liệu — 1:49387

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49387) · 393 × 960

```json
{
  "sourceNodeId": "1:49387",
  "name": "51-M08 · Lỗi tải dữ liệu",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49388",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49392",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Không thể tải dữ liệu do lỗi hệ thống. Vui lòng thử lại sau."
  ]
}
```

### 51-M09 · Thiếu giá vốn — 1:49409

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49409) · 393 × 960

```json
{
  "sourceNodeId": "1:49409",
  "name": "51-M09 · Thiếu giá vốn",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49410",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49414",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Chưa thể tính báo cáo vì thiếu giá vốn.",
    "Dữ liệu giá vốn chưa đầy đủ. Không hiển thị kết quả tính toán."
  ]
}
```

### 51-M09 · Thiếu giá vốn — 1:49430

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49430) · 393 × 960

```json
{
  "sourceNodeId": "1:49430",
  "name": "51-M09 · Thiếu giá vốn",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49431",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49435",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Chưa thể tính báo cáo vì thiếu giá vốn.",
    "Dữ liệu giá vốn chưa đầy đủ. Không hiển thị kết quả tính toán."
  ]
}
```

### 52-M02 · Chọn ngày — 1:49453

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49453) · 393 × 960

```json
{
  "sourceNodeId": "1:49453",
  "name": "52-M02 · Chọn ngày",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49454",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49458",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Tháng 11, 2026",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "CN",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "T7",
    "‹",
    "›"
  ]
}
```

### 52-M02 · Chọn ngày — 1:49542

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49542) · 393 × 960

```json
{
  "sourceNodeId": "1:49542",
  "name": "52-M02 · Chọn ngày",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49543",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49547",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Tháng 11, 2026",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "CN",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "T7",
    "‹",
    "›"
  ]
}
```

### 52-M03 · Chọn tháng — 1:49633

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49633) · 393 × 960

```json
{
  "sourceNodeId": "1:49633",
  "name": "52-M03 · Chọn tháng",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49634",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49638",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem thống kê",
    "Năm 2026",
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
    "‹",
    "›"
  ]
}
```

### 52-M03 · Chọn tháng — 1:49679

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49679) · 393 × 960

```json
{
  "sourceNodeId": "1:49679",
  "name": "52-M03 · Chọn tháng",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49680",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49684",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem thống kê",
    "Năm 2026",
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
    "‹",
    "›"
  ]
}
```

### 52-M04 · Thống kê ngày — 1:49727

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49727) · 393 × 960

```json
{
  "sourceNodeId": "1:49727",
  "name": "52-M04 · Thống kê ngày",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49728",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49732",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Thời gian thống kê: 07/11/2026",
    "Mã sản phẩm: DE003",
    "Tên sản phẩm: Đế cao su",
    "Nhóm hàng: Đế giày",
    "Số lượng bán: 5     Số lượng trả: 0",
    "Mã sản phẩm: DG002",
    "Tên sản phẩm: Dây giày thun dẹt",
    "Nhóm hàng: Dây giày",
    "Số lượng bán: 12     Số lượng trả: 0",
    "Mã sản phẩm: KE001",
    "Tên sản phẩm: Keo Dán Giày X2000",
    "Nhóm hàng: Keo dán",
    "Số lượng bán: 10     Số lượng trả: 1"
  ]
}
```

### 52-M04 · Thống kê ngày — 1:49762

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49762) · 393 × 960

```json
{
  "sourceNodeId": "1:49762",
  "name": "52-M04 · Thống kê ngày",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49763",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49767",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Thời gian thống kê: 07/11/2026",
    "Mã sản phẩm: DE003",
    "Tên sản phẩm: Đế cao su",
    "Nhóm hàng: Đế giày",
    "Số lượng bán: 5     Số lượng trả: 0",
    "Mã sản phẩm: DG002",
    "Tên sản phẩm: Dây giày thun dẹt",
    "Nhóm hàng: Dây giày",
    "Số lượng bán: 12     Số lượng trả: 0",
    "Mã sản phẩm: KE001",
    "Tên sản phẩm: Keo Dán Giày X2000",
    "Nhóm hàng: Keo dán",
    "Số lượng bán: 10     Số lượng trả: 1"
  ]
}
```

### 52-M05 · Thống kê tháng — 1:49799

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49799) · 393 × 960

```json
{
  "sourceNodeId": "1:49799",
  "name": "52-M05 · Thống kê tháng",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49800",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49804",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem thống kê",
    "Thời gian thống kê: Tháng 11/2026",
    "Mã sản phẩm: DE003",
    "Tên sản phẩm: Đế cao su",
    "Nhóm hàng: Đế giày",
    "Số lượng bán: 60     Số lượng trả: 4",
    "Mã sản phẩm: DG002",
    "Tên sản phẩm: Dây giày thun dẹt",
    "Nhóm hàng: Dây giày",
    "Số lượng bán: 144     Số lượng trả: 8",
    "Mã sản phẩm: KE001",
    "Tên sản phẩm: Keo Dán Giày X2000",
    "Nhóm hàng: Keo dán",
    "Số lượng bán: 120     Số lượng trả: 8"
  ]
}
```

### 52-M05 · Thống kê tháng — 1:49834

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49834) · 393 × 960

```json
{
  "sourceNodeId": "1:49834",
  "name": "52-M05 · Thống kê tháng",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49835",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49839",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem thống kê",
    "Thời gian thống kê: Tháng 11/2026",
    "Mã sản phẩm: DE003",
    "Tên sản phẩm: Đế cao su",
    "Nhóm hàng: Đế giày",
    "Số lượng bán: 60     Số lượng trả: 4",
    "Mã sản phẩm: DG002",
    "Tên sản phẩm: Dây giày thun dẹt",
    "Nhóm hàng: Dây giày",
    "Số lượng bán: 144     Số lượng trả: 8",
    "Mã sản phẩm: KE001",
    "Tên sản phẩm: Keo Dán Giày X2000",
    "Nhóm hàng: Keo dán",
    "Số lượng bán: 120     Số lượng trả: 8"
  ]
}
```

### 52-M06 · Không có dữ liệu — 1:49871

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49871) · 393 × 960

```json
{
  "sourceNodeId": "1:49871",
  "name": "52-M06 · Không có dữ liệu",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49872",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49876",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Thời gian thống kê: 07/11/2026",
    "Mã sản phẩm · Tên sản phẩm · Nhóm hàng",
    "Số lượng bán · Số lượng trả",
    "Không có dữ liệu"
  ]
}
```

### 52-M06 · Không có dữ liệu — 1:49894

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49894) · 393 × 960

```json
{
  "sourceNodeId": "1:49894",
  "name": "52-M06 · Không có dữ liệu",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49895",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49899",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Thời gian thống kê: 07/11/2026",
    "Mã sản phẩm · Tên sản phẩm · Nhóm hàng",
    "Số lượng bán · Số lượng trả",
    "Không có dữ liệu"
  ]
}
```

### 52-M07 · Lỗi tải dữ liệu — 1:49919

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49919) · 393 × 960

```json
{
  "sourceNodeId": "1:49919",
  "name": "52-M07 · Lỗi tải dữ liệu",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49920",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49924",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Không thể tải dữ liệu, vui lòng thử lại"
  ]
}
```

### 52-M07 · Lỗi tải dữ liệu — 1:49939

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49939) · 393 × 960

```json
{
  "sourceNodeId": "1:49939",
  "name": "52-M07 · Lỗi tải dữ liệu",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49940",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:49944",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Không thể tải dữ liệu, vui lòng thử lại"
  ]
}
```

### 9-M01 · Đăng nhập từ liên kết — 1:49962

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49962) · 393 × 960

```json
{
  "sourceNodeId": "1:49962",
  "name": "9-M01 · Đăng nhập từ liên kết",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49963",
      "name": "Frame",
      "x": 17.5,
      "y": 228,
      "width": 358,
      "height": 388,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 24
    }
  ],
  "text": [
    "KinKin POS",
    "Cửa hàng phụ kiện giày",
    "Đăng nhập",
    "Tên đăng nhập",
    "Nhập tên đăng nhập",
    "Mật khẩu",
    "Nhập mật khẩu",
    "Đăng nhập"
  ]
}
```

### 9-M01 · Đăng nhập từ liên kết — 1:49986

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-49986) · 393 × 960

```json
{
  "sourceNodeId": "1:49986",
  "name": "9-M01 · Đăng nhập từ liên kết",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:49987",
      "name": "Frame",
      "x": 17.5,
      "y": 228,
      "width": 358,
      "height": 388,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 24
    }
  ],
  "text": [
    "KinKin POS",
    "Cửa hàng phụ kiện giày",
    "Đăng nhập",
    "Tên đăng nhập",
    "Nhập tên đăng nhập",
    "Mật khẩu",
    "Nhập mật khẩu",
    "Đăng nhập"
  ]
}
```

### 9-M02 · Duyệt giảm giá sỉ — 1:50012

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50012) · 393 × 960

```json
{
  "sourceNodeId": "1:50012",
  "name": "9-M02 · Duyệt giảm giá sỉ",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50013",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50017",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10 × 78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12 × 35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5 × 160.000 ₫",
    "800.000 ₫",
    "Tổng trước giảm: 2.000.000 ₫",
    "Giảm trên hóa đơn",
    "100.000",
    "₫",
    "%",
    "Tổng sau giảm: 1.900.000 ₫",
    "Số tiền giảm: 100.000 ₫",
    "Từ chối",
    "Phê duyệt"
  ]
}
```

### 9-M02 · Duyệt giảm giá sỉ — 1:50046

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50046) · 393 × 960

```json
{
  "sourceNodeId": "1:50046",
  "name": "9-M02 · Duyệt giảm giá sỉ",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50047",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50051",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10 × 78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12 × 35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5 × 160.000 ₫",
    "800.000 ₫",
    "Tổng trước giảm: 2.000.000 ₫",
    "Giảm trên hóa đơn",
    "100.000",
    "₫",
    "%",
    "Tổng sau giảm: 1.900.000 ₫",
    "Số tiền giảm: 100.000 ₫",
    "Từ chối",
    "Phê duyệt"
  ]
}
```

### 9-M03 · Giảm giá không hợp lệ — 1:50082

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50082) · 393 × 960

```json
{
  "sourceNodeId": "1:50082",
  "name": "9-M03 · Giảm giá không hợp lệ",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50083",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50087",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Giảm giá không hợp lệ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10 × 78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12 × 35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5 × 160.000 ₫",
    "800.000 ₫",
    "Tổng trước giảm: 2.000.000 ₫",
    "Giảm trên hóa đơn",
    "2.100.000",
    "₫",
    "%",
    "Không được vượt tổng tiền hóa đơn.",
    "Số tiền giảm: —",
    "Tổng sau giảm: —",
    "Từ chối",
    "Phê duyệt"
  ]
}
```

### 9-M03 · Giảm giá không hợp lệ — 1:50117

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50117) · 393 × 960

```json
{
  "sourceNodeId": "1:50117",
  "name": "9-M03 · Giảm giá không hợp lệ",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50118",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50122",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Giảm giá không hợp lệ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10 × 78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12 × 35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5 × 160.000 ₫",
    "800.000 ₫",
    "Tổng trước giảm: 2.000.000 ₫",
    "Giảm trên hóa đơn",
    "2.100.000",
    "₫",
    "%",
    "Không được vượt tổng tiền hóa đơn.",
    "Số tiền giảm: —",
    "Tổng sau giảm: —",
    "Từ chối",
    "Phê duyệt"
  ]
}
```

### 9-M04 · Duyệt đổi hàng · Thu thêm — 1:50154

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50154) · 393 × 960

```json
{
  "sourceNodeId": "1:50154",
  "name": "9-M04 · Duyệt đổi hàng · Thu thêm",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50155",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50159",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Duyệt đổi hàng · Thu thêm",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Đế cao su · DE003 · SL: 1",
    "Giá trị thay thế: 160.000 ₫",
    "Cần thu thêm: 82.000 ₫",
    "Chỉ phê duyệt yêu cầu. Việc thu/hoàn tiền và xử lý hàng thực hiện tại quầy.",
    "Từ chối",
    "Phê duyệt đổi hàng"
  ]
}
```

### 9-M04 · Duyệt đổi hàng · Thu thêm — 1:50180

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50180) · 393 × 960

```json
{
  "sourceNodeId": "1:50180",
  "name": "9-M04 · Duyệt đổi hàng · Thu thêm",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50181",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50185",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Duyệt đổi hàng · Thu thêm",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Đế cao su · DE003 · SL: 1",
    "Giá trị thay thế: 160.000 ₫",
    "Cần thu thêm: 82.000 ₫",
    "Chỉ phê duyệt yêu cầu. Việc thu/hoàn tiền và xử lý hàng thực hiện tại quầy.",
    "Từ chối",
    "Phê duyệt đổi hàng"
  ]
}
```

### 9-M05 · Duyệt đổi hàng · Hoàn lại — 1:50208

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50208) · 393 × 960

```json
{
  "sourceNodeId": "1:50208",
  "name": "9-M05 · Duyệt đổi hàng · Hoàn lại",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50209",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50213",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Duyệt đổi hàng · Hoàn lại",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Dây giày thun dẹt · DG002 · SL: 1",
    "Giá trị thay thế: 35.000 ₫",
    "Hoàn lại: 43.000 ₫",
    "Chỉ phê duyệt yêu cầu. Việc thu/hoàn tiền và xử lý hàng thực hiện tại quầy.",
    "Từ chối",
    "Phê duyệt đổi hàng"
  ]
}
```

### 9-M05 · Duyệt đổi hàng · Hoàn lại — 1:50234

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50234) · 393 × 960

```json
{
  "sourceNodeId": "1:50234",
  "name": "9-M05 · Duyệt đổi hàng · Hoàn lại",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50235",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50239",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Duyệt đổi hàng · Hoàn lại",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Dây giày thun dẹt · DG002 · SL: 1",
    "Giá trị thay thế: 35.000 ₫",
    "Hoàn lại: 43.000 ₫",
    "Chỉ phê duyệt yêu cầu. Việc thu/hoàn tiền và xử lý hàng thực hiện tại quầy.",
    "Từ chối",
    "Phê duyệt đổi hàng"
  ]
}
```

### 9-M06 · Duyệt đổi ngang giá — 1:50262

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50262) · 393 × 960

```json
{
  "sourceNodeId": "1:50262",
  "name": "9-M06 · Duyệt đổi ngang giá",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50263",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50267",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Duyệt đổi ngang giá",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị thay thế: 78.000 ₫",
    "Không thu / hoàn: 0 ₫",
    "Chỉ phê duyệt yêu cầu. Việc thu/hoàn tiền và xử lý hàng thực hiện tại quầy.",
    "Từ chối",
    "Phê duyệt đổi hàng"
  ]
}
```

### 9-M06 · Duyệt đổi ngang giá — 1:50288

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50288) · 393 × 960

```json
{
  "sourceNodeId": "1:50288",
  "name": "9-M06 · Duyệt đổi ngang giá",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50289",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50293",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Duyệt đổi ngang giá",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị thay thế: 78.000 ₫",
    "Không thu / hoàn: 0 ₫",
    "Chỉ phê duyệt yêu cầu. Việc thu/hoàn tiền và xử lý hàng thực hiện tại quầy.",
    "Từ chối",
    "Phê duyệt đổi hàng"
  ]
}
```

### 9-M07 · Duyệt trả hàng — 1:50316

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50316) · 393 × 960

```json
{
  "sourceNodeId": "1:50316",
  "name": "9-M07 · Duyệt trả hàng",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50317",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50321",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Duyệt trả hàng",
    "Yêu cầu trả hàng · YC-TR-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm trả",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Lý do trả: Keo không bám dính",
    "Tình trạng: Đã mở, kiểm tra tại quầy",
    "Hoàn tiền mặt cho khách: 78.000 ₫",
    "Chỉ phê duyệt yêu cầu. Việc thu/hoàn tiền và xử lý hàng thực hiện tại quầy.",
    "Từ chối",
    "Phê duyệt trả hàng"
  ]
}
```

### 9-M07 · Duyệt trả hàng — 1:50341

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50341) · 393 × 960

```json
{
  "sourceNodeId": "1:50341",
  "name": "9-M07 · Duyệt trả hàng",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50342",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50346",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Duyệt trả hàng",
    "Yêu cầu trả hàng · YC-TR-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm trả",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Lý do trả: Keo không bám dính",
    "Tình trạng: Đã mở, kiểm tra tại quầy",
    "Hoàn tiền mặt cho khách: 78.000 ₫",
    "Chỉ phê duyệt yêu cầu. Việc thu/hoàn tiền và xử lý hàng thực hiện tại quầy.",
    "Từ chối",
    "Phê duyệt trả hàng"
  ]
}
```

### 9-M09 · Đã từ chối — 1:50368

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50368) · 393 × 960

```json
{
  "sourceNodeId": "1:50368",
  "name": "9-M09 · Đã từ chối",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50369",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50373",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Kết quả yêu cầu",
    "Yêu cầu đã bị từ chối",
    "HD-0211-0049\nGiữ giá gốc: 2.000.000 ₫\nKhông thể quyết định lại yêu cầu này."
  ]
}
```

### 9-M09 · Đã từ chối — 1:50379

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50379) · 393 × 960

```json
{
  "sourceNodeId": "1:50379",
  "name": "9-M09 · Đã từ chối",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50380",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50384",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Kết quả yêu cầu",
    "Yêu cầu đã bị từ chối",
    "HD-0211-0049\nGiữ giá gốc: 2.000.000 ₫\nKhông thể quyết định lại yêu cầu này."
  ]
}
```

### 9-M10 · Yêu cầu đã hủy — 1:50392

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50392) · 393 × 960

```json
{
  "sourceNodeId": "1:50392",
  "name": "9-M10 · Yêu cầu đã hủy",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50393",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50397",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Kết quả yêu cầu",
    "Yêu cầu đã được hủy",
    "Liên kết này không còn hiệu lực phê duyệt. Nội dung nhập được giữ lại tại quầy."
  ]
}
```

### 9-M10 · Yêu cầu đã hủy — 1:50403

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50403) · 393 × 960

```json
{
  "sourceNodeId": "1:50403",
  "name": "9-M10 · Yêu cầu đã hủy",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50404",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50408",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Kết quả yêu cầu",
    "Yêu cầu đã được hủy",
    "Liên kết này không còn hiệu lực phê duyệt. Nội dung nhập được giữ lại tại quầy."
  ]
}
```

### 9-M11 · Không có quyền phê duyệt — 1:50416

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50416) · 393 × 960

```json
{
  "sourceNodeId": "1:50416",
  "name": "9-M11 · Không có quyền phê duyệt",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50417",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50421",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Thu Hà · Nhân viên",
    "Kết quả yêu cầu",
    "Bạn không có quyền phê duyệt",
    "Chỉ tài khoản Chủ cửa hàng mới được xem và quyết định yêu cầu này."
  ]
}
```

### 9-M11 · Không có quyền phê duyệt — 1:50427

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50427) · 393 × 960

```json
{
  "sourceNodeId": "1:50427",
  "name": "9-M11 · Không có quyền phê duyệt",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50428",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50432",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Thu Hà · Nhân viên",
    "Kết quả yêu cầu",
    "Bạn không có quyền phê duyệt",
    "Chỉ tài khoản Chủ cửa hàng mới được xem và quyết định yêu cầu này."
  ]
}
```

### 9-M12 · Mất kết nối khi duyệt — 1:50440

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50440) · 393 × 960

```json
{
  "sourceNodeId": "1:50440",
  "name": "9-M12 · Mất kết nối khi duyệt",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50441",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50445",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Kết quả yêu cầu",
    "Mất kết nối. Chưa xác nhận được kết quả.",
    "Nội dung tiếp tục được khóa tại quầy. Khi có kết nối, hệ thống kiểm tra lại kết quả của yêu cầu này."
  ]
}
```

### 9-M12 · Mất kết nối khi duyệt — 1:50451

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50451) · 393 × 960

```json
{
  "sourceNodeId": "1:50451",
  "name": "9-M12 · Mất kết nối khi duyệt",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50452",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50456",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Kết quả yêu cầu",
    "Mất kết nối. Chưa xác nhận được kết quả.",
    "Nội dung tiếp tục được khóa tại quầy. Khi có kết nối, hệ thống kiểm tra lại kết quả của yêu cầu này."
  ]
}
```

### 51-M03 · Chọn tháng — 1:50463

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50463) · 393 × 960

```json
{
  "sourceNodeId": "1:50463",
  "name": "51-M03 · Chọn tháng",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50464",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:50468",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem báo cáo",
    "Năm 2026",
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
    "‹",
    "›"
  ]
}
```

### 51-M03 · Chọn tháng — 1:50509

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50509) · 393 × 960

```json
{
  "sourceNodeId": "1:50509",
  "name": "51-M03 · Chọn tháng",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50510",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:50514",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem báo cáo",
    "Năm 2026",
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
    "‹",
    "›"
  ]
}
```

### 52-M01 · Ban đầu — 1:50557

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50557) · 393 × 960

```json
{
  "sourceNodeId": "1:50557",
  "name": "52-M01 · Ban đầu",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50558",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:50562",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê"
  ]
}
```

### 52-M01 · Ban đầu — 1:50575

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50575) · 393 × 960

```json
{
  "sourceNodeId": "1:50575",
  "name": "52-M01 · Ban đầu",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50576",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 104,
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
      "id": "1:50580",
      "name": "Nội dung",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 820,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê"
  ]
}
```

### 9-M08 · Đã phê duyệt — 1:50596

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50596) · 393 × 960

```json
{
  "sourceNodeId": "1:50596",
  "name": "9-M08 · Đã phê duyệt",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50597",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50601",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Kết quả yêu cầu",
    "Đã phê duyệt yêu cầu",
    "HD-0211-0049\nGiảm: 100.000 ₫\nTổng sau giảm: 1.900.000 ₫\n\nNhân viên có thể tiếp tục thanh toán tại quầy. Đây chưa phải xác nhận đã thanh toán."
  ]
}
```

### 9-M08 · Đã phê duyệt — 1:50607

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50607) · 393 × 960

```json
{
  "sourceNodeId": "1:50607",
  "name": "9-M08 · Đã phê duyệt",
  "viewport": {
    "width": 393,
    "height": 960
  },
  "topLevelLayout": [
    {
      "id": "1:50608",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 108,
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
      "id": "1:50612",
      "name": "Nội dung yêu cầu",
      "x": 16,
      "y": 124,
      "width": 361,
      "height": 828,
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
    "9:41",
    "KinKin POS",
    "Mai Linh · Chủ cửa hàng",
    "Kết quả yêu cầu",
    "Đã phê duyệt yêu cầu",
    "HD-0211-0049\nGiảm: 100.000 ₫\nTổng sau giảm: 1.900.000 ₫\n\nNhân viên có thể tiếp tục thanh toán tại quầy. Đây chưa phải xác nhận đã thanh toán."
  ]
}
```

### 51-W01 · Ban đầu — 1:50619

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50619) · 1440 × 900

```json
{
  "sourceNodeId": "1:50619",
  "name": "51-W01 · Ban đầu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:50621",
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
      "id": "1:50638",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo"
  ]
}
```

### 51-W01 · Ban đầu — 1:50655

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50655) · 1440 × 900

```json
{
  "sourceNodeId": "1:50655",
  "name": "51-W01 · Ban đầu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:50656",
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
      "id": "1:50673",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    },
    {
      "id": "1:50689",
      "name": "Sidebar · Theo mẫu nhỏ",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "KinKin POS",
    "Shoe Accessories Shop",
    "Đăng xuất",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Xem doanh thu",
    "Số lượng hàng bán/trả"
  ]
}
```

### 51-W02 · Chọn ngày — 1:50726

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50726) · 1440 × 900

```json
{
  "sourceNodeId": "1:50726",
  "name": "51-W02 · Chọn ngày",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:50728",
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
      "id": "1:50745",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Tháng 11, 2026",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "CN",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "T7",
    "‹",
    "›"
  ]
}
```

### 51-W02 · Chọn ngày — 1:50833

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-50833) · 1440 × 900

```json
{
  "sourceNodeId": "1:50833",
  "name": "51-W02 · Chọn ngày",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:50835",
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
      "id": "1:50852",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Tháng 11, 2026",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "CN",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "T7",
    "‹",
    "›"
  ]
}
```

### 51-W03 · Chọn tháng — 1:51112

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-51112) · 1440 × 900

```json
{
  "sourceNodeId": "1:51112",
  "name": "51-W03 · Chọn tháng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:51114",
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
      "id": "1:51131",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem báo cáo",
    "Năm 2026",
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
    "‹",
    "›"
  ]
}
```

### 51-W03 · Chọn tháng — 1:51176

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-51176) · 1440 × 900

```json
{
  "sourceNodeId": "1:51176",
  "name": "51-W03 · Chọn tháng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:51177",
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
      "id": "1:51194",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    },
    {
      "id": "1:51238",
      "name": "Sidebar · Theo mẫu nhỏ",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem báo cáo",
    "Năm 2026",
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
    "‹",
    "›",
    "KinKin POS",
    "Shoe Accessories Shop",
    "Đăng xuất",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Xem doanh thu",
    "Số lượng hàng bán/trả"
  ]
}
```

### 51-W04 · Báo cáo ngày — 1:51275

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-51275) · 1440 × 900

```json
{
  "sourceNodeId": "1:51275",
  "name": "51-W04 · Báo cáo ngày",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:51277",
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
      "id": "1:51294",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Thời gian báo cáo: 07/11/2026",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Tổng tiền bán",
    "2.000.000 ₫",
    "Tổng tiền hoàn trả",
    "78.000 ₫",
    "Doanh thu",
    "1.922.000 ₫",
    "Tổng giá vốn",
    "1.190.000 ₫",
    "Lợi nhuận gộp",
    "732.000 ₫"
  ]
}
```

### 51-W04 · Báo cáo ngày — 1:51327

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-51327) · 1440 × 900

```json
{
  "sourceNodeId": "1:51327",
  "name": "51-W04 · Báo cáo ngày",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:51328",
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
      "id": "1:51345",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    },
    {
      "id": "1:51377",
      "name": "Sidebar · Theo mẫu nhỏ",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Thời gian báo cáo: 07/11/2026",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Tổng tiền bán",
    "2.000.000 ₫",
    "Tổng tiền hoàn trả",
    "78.000 ₫",
    "Doanh thu",
    "1.922.000 ₫",
    "Tổng giá vốn",
    "1.190.000 ₫",
    "Lợi nhuận gộp",
    "732.000 ₫",
    "KinKin POS",
    "Shoe Accessories Shop",
    "Đăng xuất",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Xem doanh thu",
    "Số lượng hàng bán/trả"
  ]
}
```

### 51-W06 · Không phát sinh — 1:51414

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-51414) · 1440 × 900

```json
{
  "sourceNodeId": "1:51414",
  "name": "51-W06 · Không phát sinh",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:51416",
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
      "id": "1:51433",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Thời gian báo cáo: 07/11/2026",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Tổng tiền bán",
    "0 ₫",
    "Tổng tiền hoàn trả",
    "0 ₫",
    "Doanh thu",
    "0 ₫",
    "Tổng giá vốn",
    "0 ₫",
    "Lợi nhuận gộp",
    "0 ₫"
  ]
}
```

### 51-W06 · Không phát sinh — 1:51466

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-51466) · 1440 × 900

```json
{
  "sourceNodeId": "1:51466",
  "name": "51-W06 · Không phát sinh",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:51467",
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
      "id": "1:51484",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    },
    {
      "id": "1:51516",
      "name": "Sidebar · Theo mẫu nhỏ",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Thời gian báo cáo: 07/11/2026",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Tổng tiền bán",
    "0 ₫",
    "Tổng tiền hoàn trả",
    "0 ₫",
    "Doanh thu",
    "0 ₫",
    "Tổng giá vốn",
    "0 ₫",
    "Lợi nhuận gộp",
    "0 ₫",
    "KinKin POS",
    "Shoe Accessories Shop",
    "Đăng xuất",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Xem doanh thu",
    "Số lượng hàng bán/trả"
  ]
}
```

### 51-W07 · Kỳ chỉ có hoàn trả — 1:51553

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-51553) · 1440 × 900

```json
{
  "sourceNodeId": "1:51553",
  "name": "51-W07 · Kỳ chỉ có hoàn trả",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:51555",
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
      "id": "1:51572",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Thời gian báo cáo: 06/11/2026",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "06/11/2026  ▦",
    "Xem báo cáo",
    "Tổng tiền bán",
    "0 ₫",
    "Tổng tiền hoàn trả",
    "78.000 ₫",
    "Doanh thu",
    "-78.000 ₫",
    "Tổng giá vốn",
    "-50.000 ₫",
    "Lợi nhuận gộp",
    "-28.000 ₫"
  ]
}
```

### 51-W07 · Kỳ chỉ có hoàn trả — 1:51605

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-51605) · 1440 × 900

```json
{
  "sourceNodeId": "1:51605",
  "name": "51-W07 · Kỳ chỉ có hoàn trả",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:51607",
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
      "id": "1:51624",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Thời gian báo cáo: 06/11/2026",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "06/11/2026  ▦",
    "Xem báo cáo",
    "Tổng tiền bán",
    "0 ₫",
    "Tổng tiền hoàn trả",
    "78.000 ₫",
    "Doanh thu",
    "-78.000 ₫",
    "Tổng giá vốn",
    "-50.000 ₫",
    "Lợi nhuận gộp",
    "-28.000 ₫"
  ]
}
```

### 51-W08 · Lỗi tải dữ liệu — 1:51693

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-51693) · 1440 × 900

```json
{
  "sourceNodeId": "1:51693",
  "name": "51-W08 · Lỗi tải dữ liệu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:51695",
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
      "id": "1:51712",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Không thể tải dữ liệu do lỗi hệ thống. Vui lòng thử lại sau.",
    "Không thể tải dữ liệu",
    "Hệ thống đang gặp lỗi khi tải dữ liệu báo cáo. Vui lòng thử lại sau hoặc liên hệ hỗ trợ.",
    "Thử lại",
    "Liên hệ hỗ trợ",
    "Bạn có thể thử lại sau vài phút hoặc liên hệ bộ phận hỗ trợ để được xử lý nhanh chóng."
  ]
}
```

### 51-W08 · Lỗi tải dữ liệu — 1:51750

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-51750) · 1440 × 900

```json
{
  "sourceNodeId": "1:51750",
  "name": "51-W08 · Lỗi tải dữ liệu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:51751",
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
      "id": "1:51768",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    },
    {
      "id": "1:51805",
      "name": "Sidebar · Theo mẫu nhỏ",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Không thể tải dữ liệu do lỗi hệ thống. Vui lòng thử lại sau.",
    "Không thể tải dữ liệu",
    "Hệ thống đang gặp lỗi khi tải dữ liệu báo cáo. Vui lòng thử lại sau hoặc liên hệ hỗ trợ.",
    "Thử lại",
    "Liên hệ hỗ trợ",
    "Bạn có thể thử lại sau vài phút hoặc liên hệ bộ phận hỗ trợ để được xử lý nhanh chóng.",
    "KinKin POS",
    "Shoe Accessories Shop",
    "Đăng xuất",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Xem doanh thu",
    "Số lượng hàng bán/trả"
  ]
}
```

### 51-W09 · Thiếu giá vốn — 1:51842

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-51842) · 1440 × 900

```json
{
  "sourceNodeId": "1:51842",
  "name": "51-W09 · Thiếu giá vốn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:51844",
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
      "id": "1:51861",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Chưa thể tính báo cáo vì thiếu giá vốn.",
    "Dữ liệu giá vốn chưa đầy đủ. Không hiển thị kết quả tính toán."
  ]
}
```

### 51-W09 · Thiếu giá vốn — 1:51881

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-51881) · 1440 × 900

```json
{
  "sourceNodeId": "1:51881",
  "name": "51-W09 · Thiếu giá vốn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:51882",
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
      "id": "1:51899",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    },
    {
      "id": "1:51918",
      "name": "Sidebar · Theo mẫu nhỏ",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Loại báo cáo",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem báo cáo",
    "Chưa thể tính báo cáo vì thiếu giá vốn.",
    "Dữ liệu giá vốn chưa đầy đủ. Không hiển thị kết quả tính toán.",
    "KinKin POS",
    "Shoe Accessories Shop",
    "Đăng xuất",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Xem doanh thu",
    "Số lượng hàng bán/trả"
  ]
}
```

### 52-W01 · Ban đầu — 1:51955

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-51955) · 1440 × 900

```json
{
  "sourceNodeId": "1:51955",
  "name": "52-W01 · Ban đầu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:51957",
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
      "id": "1:51974",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Số lượng hàng bán/trả",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê"
  ]
}
```

### 52-W01 · Ban đầu — 1:51987

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-51987) · 1440 × 900

```json
{
  "sourceNodeId": "1:51987",
  "name": "52-W01 · Ban đầu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:51988",
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
      "id": "1:52005",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
      "id": "1:52017",
      "name": "Sidebar · Theo mẫu nhỏ",
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
    "Thống kê và báo cáo / Số lượng hàng bán/trả",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "KinKin POS",
    "Shoe Accessories Shop",
    "Đăng xuất",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Xem doanh thu",
    "Số lượng hàng bán/trả"
  ]
}
```

### 52-W02 · Chọn ngày — 1:52055

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-52055) · 1440 × 900

```json
{
  "sourceNodeId": "1:52055",
  "name": "52-W02 · Chọn ngày",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:52057",
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
      "id": "1:52074",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Số lượng hàng bán/trả",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Tháng 11, 2026",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "CN",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "T7",
    "‹",
    "›"
  ]
}
```

### 52-W02 · Chọn ngày — 1:52158

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-52158) · 1440 × 900

```json
{
  "sourceNodeId": "1:52158",
  "name": "52-W02 · Chọn ngày",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:52159",
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
      "id": "1:52176",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Thống kê và báo cáo / Số lượng hàng bán/trả",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Tháng 11, 2026",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "CN",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "T7",
    "‹",
    "›"
  ]
}
```

### 52-W03 · Chọn tháng — 1:52292

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-52292) · 1440 × 900

```json
{
  "sourceNodeId": "1:52292",
  "name": "52-W03 · Chọn tháng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:52294",
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
      "id": "1:52311",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Số lượng hàng bán/trả",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem thống kê",
    "Năm 2026",
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
    "‹",
    "›"
  ]
}
```

### 52-W03 · Chọn tháng — 1:52352

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-52352) · 1440 × 900

```json
{
  "sourceNodeId": "1:52352",
  "name": "52-W03 · Chọn tháng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:52353",
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
      "id": "1:52370",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
      "id": "1:52409",
      "name": "Sidebar · Theo mẫu nhỏ",
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
    "Thống kê và báo cáo / Số lượng hàng bán/trả",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem thống kê",
    "Năm 2026",
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
    "‹",
    "›",
    "KinKin POS",
    "Shoe Accessories Shop",
    "Đăng xuất",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Doanh thu",
    "Số lượng hàng bán / trả"
  ]
}
```

### 52-W04 · Thống kê ngày — 1:52443

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-52443) · 1440 × 900

```json
{
  "sourceNodeId": "1:52443",
  "name": "52-W04 · Thống kê ngày",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:52445",
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
      "id": "1:52462",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Số lượng hàng bán/trả",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Thời gian thống kê: 07/11/2026",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Nhóm hàng",
    "Số lượng bán",
    "Số lượng trả",
    "DE003",
    "Đế cao su",
    "Đế giày",
    "5",
    "0",
    "DG002",
    "Dây giày thun dẹt",
    "Dây giày",
    "12",
    "0",
    "KE001",
    "Keo Dán Giày X2000",
    "Keo dán",
    "10",
    "1"
  ]
}
```

### 52-W04 · Thống kê ngày — 1:52501

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-52501) · 1440 × 900

```json
{
  "sourceNodeId": "1:52501",
  "name": "52-W04 · Thống kê ngày",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:52502",
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
      "id": "1:52519",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
      "id": "1:52556",
      "name": "Sidebar · Theo mẫu nhỏ",
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
    "Thống kê và báo cáo / Số lượng hàng bán/trả",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Thời gian thống kê: 07/11/2026",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Nhóm hàng",
    "Số lượng bán",
    "Số lượng trả",
    "DE003",
    "Đế cao su",
    "Đế giày",
    "5",
    "0",
    "DG002",
    "Dây giày thun dẹt",
    "Dây giày",
    "12",
    "0",
    "KE001",
    "Keo Dán Giày X2000",
    "Keo dán",
    "10",
    "1",
    "KinKin POS",
    "Shoe Accessories Shop",
    "Đăng xuất",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Doanh thu",
    "Số lượng hàng bán / trả"
  ]
}
```

### 52-W05 · Thống kê tháng — 1:52590

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-52590) · 1440 × 900

```json
{
  "sourceNodeId": "1:52590",
  "name": "52-W05 · Thống kê tháng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:52592",
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
      "id": "1:52609",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Số lượng hàng bán/trả",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem thống kê",
    "Thời gian thống kê: Tháng 11/2026",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Nhóm hàng",
    "Số lượng bán",
    "Số lượng trả",
    "DE003",
    "Đế cao su",
    "Đế giày",
    "60",
    "4",
    "DG002",
    "Dây giày thun dẹt",
    "Dây giày",
    "144",
    "8",
    "KE001",
    "Keo Dán Giày X2000",
    "Keo dán",
    "120",
    "8"
  ]
}
```

### 52-W05 · Thống kê tháng — 1:52648

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-52648) · 1440 × 900

```json
{
  "sourceNodeId": "1:52648",
  "name": "52-W05 · Thống kê tháng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:52649",
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
      "id": "1:52666",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
      "id": "1:52704",
      "name": "Sidebar · Theo mẫu nhỏ",
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
    "Thống kê và báo cáo / Số lượng hàng bán/trả",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem thống kê",
    "Thời gian thống kê: Tháng 11/2026",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Nhóm hàng",
    "Số lượng bán",
    "Số lượng trả",
    "DE003",
    "Đế cao su",
    "Đế giày",
    "60",
    "4",
    "DG002",
    "Dây giày thun dẹt",
    "Dây giày",
    "144",
    "8",
    "KE001",
    "Keo Dán Giày X2000",
    "Keo dán",
    "120",
    "8",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "KinKin POS",
    "Shoe Accessories Shop",
    "Đăng xuất",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Doanh thu",
    "Số lượng hàng bán / trả"
  ]
}
```

### 52-W06 · Không có dữ liệu — 1:52738

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-52738) · 1440 × 900

```json
{
  "sourceNodeId": "1:52738",
  "name": "52-W06 · Không có dữ liệu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:52740",
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
      "id": "1:52757",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Số lượng hàng bán/trả",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Thời gian thống kê: 07/11/2026",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Nhóm hàng",
    "Số lượng bán",
    "Số lượng trả",
    "Không có dữ liệu"
  ]
}
```

### 52-W06 · Không có dữ liệu — 1:52779

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-52779) · 1440 × 900

```json
{
  "sourceNodeId": "1:52779",
  "name": "52-W06 · Không có dữ liệu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:52780",
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
      "id": "1:52797",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
      "id": "1:52817",
      "name": "Sidebar · Theo mẫu nhỏ",
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
    "Thống kê và báo cáo / Số lượng hàng bán/trả",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Thời gian thống kê: 07/11/2026",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Nhóm hàng",
    "Số lượng bán",
    "Số lượng trả",
    "Không có dữ liệu",
    "KinKin POS",
    "Shoe Accessories Shop",
    "Đăng xuất",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Doanh thu",
    "Số lượng hàng bán / trả"
  ]
}
```

### 52-W07 · Lỗi tải dữ liệu — 1:52851

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-52851) · 1440 × 900

```json
{
  "sourceNodeId": "1:52851",
  "name": "52-W07 · Lỗi tải dữ liệu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:52853",
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
      "id": "1:52870",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Số lượng hàng bán/trả",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Không thể tải dữ liệu, vui lòng thử lại"
  ]
}
```

### 52-W07 · Lỗi tải dữ liệu — 1:52885

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-52885) · 1440 × 900

```json
{
  "sourceNodeId": "1:52885",
  "name": "52-W07 · Lỗi tải dữ liệu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:52887",
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
      "id": "1:52904",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Số lượng hàng bán/trả",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Số lượng hàng bán/trả",
    "Loại thống kê",
    "Theo ngày  ⌄",
    "Ngày",
    "07/11/2026  ▦",
    "Xem thống kê",
    "Không thể tải dữ liệu, vui lòng thử lại"
  ]
}
```

### 9-W02 · Bán sỉ · Chưa nhập mức giảm — 1:52952

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-52952) · 1440 × 900

```json
{
  "sourceNodeId": "1:52952",
  "name": "9-W02 · Bán sỉ · Chưa nhập mức giảm",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:52954",
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
      "id": "1:52971",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã xác thực Chủ cửa hàng",
    "Giảm trên hóa đơn",
    "",
    "₫",
    "%",
    "Chỉ Chủ cửa hàng quyết định số tiền giảm.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Tổng sau giảm: —",
    "Từ chối",
    "Phê duyệt",
    "Hủy yêu cầu",
    "Số tiền giảm: —",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng."
  ]
}
```

### 9-W02 · Bán sỉ · Chưa nhập mức giảm — 1:53021

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53021) · 1440 × 900

```json
{
  "sourceNodeId": "1:53021",
  "name": "9-W02 · Bán sỉ · Chưa nhập mức giảm",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53023",
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
      "id": "1:53040",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã xác thực Chủ cửa hàng",
    "Giảm trên hóa đơn",
    "",
    "₫",
    "%",
    "Chỉ Chủ cửa hàng quyết định số tiền giảm.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Tổng sau giảm: —",
    "Từ chối",
    "Phê duyệt",
    "Hủy yêu cầu",
    "Số tiền giảm: —",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng."
  ]
}
```

### 9-W03 · Bán sỉ · Mức giảm hợp lệ — 1:53092

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53092) · 1440 × 900

```json
{
  "sourceNodeId": "1:53092",
  "name": "9-W03 · Bán sỉ · Mức giảm hợp lệ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53094",
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
      "id": "1:53111",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã xác thực Chủ cửa hàng",
    "Giảm trên hóa đơn",
    "100.000",
    "₫",
    "%",
    "Chỉ Chủ cửa hàng nhập mức giảm.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Số tiền giảm: 100.000 ₫",
    "Tổng sau giảm: 1.900.000 ₫",
    "Từ chối",
    "Phê duyệt",
    "Hủy yêu cầu",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng."
  ]
}
```

### 9-W03 · Bán sỉ · Mức giảm hợp lệ — 1:53161

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53161) · 1440 × 900

```json
{
  "sourceNodeId": "1:53161",
  "name": "9-W03 · Bán sỉ · Mức giảm hợp lệ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53163",
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
      "id": "1:53180",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã xác thực Chủ cửa hàng",
    "Giảm trên hóa đơn",
    "100.000",
    "₫",
    "%",
    "Chỉ Chủ cửa hàng quyết định số tiền giảm.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Tổng sau giảm: 1.900.000 ₫",
    "Từ chối",
    "Phê duyệt",
    "Hủy yêu cầu",
    "Số tiền giảm: 100.000 ₫",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng."
  ]
}
```

### 9-W06 · Sai lần thứ ba · Chuyển Zalo — 1:53232

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53232) · 1440 × 900

```json
{
  "sourceNodeId": "1:53232",
  "name": "9-W06 · Sai lần thứ ba · Chuyển Zalo",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53234",
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
      "id": "1:53251",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy · Khóa",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã sai 3 lần. Xác thực tại quầy bị khóa cho yêu cầu này.",
    "Nội dung gửi qua Zalo",
    "Thu Hà gửi yêu cầu duyệt giảm giá sỉ\nHD-0211-0049 · Tổng: 2.000.000 ₫\nMở liên kết để đăng nhập KinKin POS và duyệt.",
    "Hủy yêu cầu",
    "Gửi yêu cầu qua Zalo",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Số tiền giảm: —",
    "Tổng sau giảm: —"
  ]
}
```

### 9-W06 · Sai lần thứ ba · Chuyển Zalo — 1:53302

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53302) · 1440 × 900

```json
{
  "sourceNodeId": "1:53302",
  "name": "9-W06 · Sai lần thứ ba · Chuyển Zalo",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53304",
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
      "id": "1:53321",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy · Khóa",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã sai 3 lần. Xác thực tại quầy bị khóa cho yêu cầu này.",
    "Nội dung gửi qua Zalo",
    "Thu Hà gửi yêu cầu duyệt giảm giá sỉ\nHD-0211-0049 · Tổng: 2.000.000 ₫\nMở liên kết để đăng nhập KinKin POS và duyệt.",
    "Hủy yêu cầu",
    "Gửi yêu cầu qua Zalo",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Số tiền giảm: —",
    "Tổng sau giảm: —"
  ]
}
```

### 9-W07 · Đổi hàng · Duyệt thu thêm — 1:53374

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53374) · 1440 × 900

```json
{
  "sourceNodeId": "1:53374",
  "name": "9-W07 · Đổi hàng · Duyệt thu thêm",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53376",
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
      "id": "1:53393",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt đổi hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt đổi hàng",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Đế cao su · DE003 · SL: 1",
    "Giá trị thay thế: 160.000 ₫",
    "Cần thu thêm: 82.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Mật khẩu xác thực",
    "••••••••",
    "Chủ cửa hàng trực tiếp nhập mật khẩu.",
    "Phê duyệt đổi hàng",
    "Từ chối",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục đổi hàng",
    "Đang khóa nội dung và thao tác tiền/hàng."
  ]
}
```

### 9-W07 · Đổi hàng · Duyệt thu thêm — 1:53427

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53427) · 1440 × 900

```json
{
  "sourceNodeId": "1:53427",
  "name": "9-W07 · Đổi hàng · Duyệt thu thêm",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53429",
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
      "id": "1:53446",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt đổi hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt đổi hàng",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Đế cao su · DE003 · SL: 1",
    "Giá trị thay thế: 160.000 ₫",
    "Cần thu thêm: 82.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Mật khẩu xác thực",
    "••••••••",
    "Chủ cửa hàng trực tiếp nhập mật khẩu.",
    "Phê duyệt đổi hàng",
    "Từ chối",
    "Hủy yêu cầu",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục đổi hàng",
    "Đang khóa nội dung và thao tác tiền/hàng."
  ]
}
```

### 9-W09 · Đổi ngang giá · Không thu hoàn — 1:53484

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53484) · 1440 × 900

```json
{
  "sourceNodeId": "1:53484",
  "name": "9-W09 · Đổi ngang giá · Không thu hoàn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53486",
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
      "id": "1:53503",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt đổi hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt đổi hàng",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị thay thế: 78.000 ₫",
    "Không thu / hoàn: 0 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Mật khẩu xác thực",
    "••••••••",
    "Chủ cửa hàng trực tiếp nhập mật khẩu.",
    "Phê duyệt đổi hàng",
    "Từ chối",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục đổi hàng",
    "Đang khóa nội dung và thao tác tiền/hàng."
  ]
}
```

### 9-W09 · Đổi ngang giá · Không thu hoàn — 1:53537

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53537) · 1440 × 900

```json
{
  "sourceNodeId": "1:53537",
  "name": "9-W09 · Đổi ngang giá · Không thu hoàn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53539",
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
      "id": "1:53556",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt đổi hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt đổi hàng",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị thay thế: 78.000 ₫",
    "Không thu / hoàn: 0 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Mật khẩu xác thực",
    "••••••••",
    "Chủ cửa hàng trực tiếp nhập mật khẩu.",
    "Phê duyệt đổi hàng",
    "Từ chối",
    "Hủy yêu cầu",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục đổi hàng",
    "Đang khóa nội dung và thao tác tiền/hàng."
  ]
}
```

### 9-W10 · Trả hàng · Duyệt hoàn tiền — 1:53594

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53594) · 1440 × 900

```json
{
  "sourceNodeId": "1:53594",
  "name": "9-W10 · Trả hàng · Duyệt hoàn tiền",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53596",
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
      "id": "1:53613",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt trả hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt trả hàng",
    "Yêu cầu trả hàng · YC-TR-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm trả",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Lý do trả: Keo không bám dính",
    "Tình trạng: Đã mở, kiểm tra tại quầy",
    "Hoàn tiền mặt cho khách: 78.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Mật khẩu xác thực",
    "••••••••",
    "Chủ cửa hàng trực tiếp nhập mật khẩu.",
    "Phê duyệt trả hàng",
    "Từ chối",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục hoàn tiền",
    "Đang khóa nội dung và thao tác tiền/hàng."
  ]
}
```

### 9-W10 · Trả hàng · Duyệt hoàn tiền — 1:53646

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53646) · 1440 × 900

```json
{
  "sourceNodeId": "1:53646",
  "name": "9-W10 · Trả hàng · Duyệt hoàn tiền",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53648",
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
      "id": "1:53665",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt trả hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt trả hàng",
    "Yêu cầu trả hàng · YC-TR-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm trả",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Lý do trả: Keo không bám dính",
    "Tình trạng: Đã mở, kiểm tra tại quầy",
    "Hoàn tiền mặt cho khách: 78.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Mật khẩu xác thực",
    "••••••••",
    "Chủ cửa hàng trực tiếp nhập mật khẩu.",
    "Phê duyệt trả hàng",
    "Từ chối",
    "Hủy yêu cầu",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục hoàn tiền",
    "Đang khóa nội dung và thao tác tiền/hàng."
  ]
}
```

### 9-W11 · Chủ cửa hàng tự thao tác — 1:53702

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53702) · 1440 × 900

```json
{
  "sourceNodeId": "1:53702",
  "name": "9-W11 · Chủ cửa hàng tự thao tác",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53704",
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
      "id": "1:53721",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã xác thực bằng phiên Chủ cửa hàng",
    "Giảm trên hóa đơn",
    "100.000",
    "₫",
    "%",
    "Chỉ Chủ cửa hàng quyết định số tiền giảm.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Tổng sau giảm: 1.900.000 ₫",
    "Từ chối",
    "Phê duyệt",
    "Hủy yêu cầu",
    "Số tiền giảm: 100.000 ₫",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng."
  ]
}
```

### 9-W11 · Chủ cửa hàng tự thao tác — 1:53771

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53771) · 1440 × 900

```json
{
  "sourceNodeId": "1:53771",
  "name": "9-W11 · Chủ cửa hàng tự thao tác",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53772",
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
      "id": "1:53789",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã xác thực bằng phiên Chủ cửa hàng",
    "Giảm trên hóa đơn",
    "100.000",
    "₫",
    "%",
    "Chỉ Chủ cửa hàng quyết định số tiền giảm.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Tổng sau giảm: 1.900.000 ₫",
    "Từ chối",
    "Phê duyệt",
    "Hủy yêu cầu",
    "Số tiền giảm: 100.000 ₫",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "Đăng xuất"
  ]
}
```

### 9-W15 · Đổi hàng · Đã được duyệt — 1:53842

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53842) · 1440 × 900

```json
{
  "sourceNodeId": "1:53842",
  "name": "9-W15 · Đổi hàng · Đã được duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53844",
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
      "id": "1:53861",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt đổi hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt đổi hàng",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Đế cao su · DE003 · SL: 1",
    "Giá trị thay thế: 160.000 ₫",
    "Cần thu thêm: 82.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã phê duyệt",
    "Đã mở quyền tiếp tục xử lý giao dịch.\nChưa ghi nhận thu/hoàn tiền hoặc hoàn tất.",
    "Quyết định đã được lưu. Nội dung giao dịch tiếp tục bị khóa.",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục đổi hàng"
  ]
}
```

### 9-W15 · Đổi hàng · Đã được duyệt — 1:53890

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53890) · 1440 × 900

```json
{
  "sourceNodeId": "1:53890",
  "name": "9-W15 · Đổi hàng · Đã được duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53892",
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
      "id": "1:53909",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt đổi hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt đổi hàng",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Đế cao su · DE003 · SL: 1",
    "Giá trị thay thế: 160.000 ₫",
    "Cần thu thêm: 82.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã phê duyệt",
    "Đã mở quyền tiếp tục xử lý giao dịch.\nChưa ghi nhận thu/hoàn tiền hoặc hoàn tất.",
    "Quyết định đã được lưu. Nội dung giao dịch tiếp tục bị khóa.",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục đổi hàng"
  ]
}
```

### 9-W16 · Trả hàng · Đã được duyệt — 1:53940

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53940) · 1440 × 900

```json
{
  "sourceNodeId": "1:53940",
  "name": "9-W16 · Trả hàng · Đã được duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53942",
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
      "id": "1:53959",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt trả hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt trả hàng",
    "Yêu cầu trả hàng · YC-TR-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm trả",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Lý do trả: Keo không bám dính",
    "Tình trạng: Đã mở, kiểm tra tại quầy",
    "Hoàn tiền mặt cho khách: 78.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã phê duyệt",
    "Đã mở quyền tiếp tục xử lý giao dịch.\nChưa ghi nhận thu/hoàn tiền hoặc hoàn tất.",
    "Quyết định đã được lưu. Nội dung giao dịch tiếp tục bị khóa.",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục hoàn tiền"
  ]
}
```

### 9-W16 · Trả hàng · Đã được duyệt — 1:53987

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-53987) · 1440 × 900

```json
{
  "sourceNodeId": "1:53987",
  "name": "9-W16 · Trả hàng · Đã được duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:53989",
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
      "id": "1:54006",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt trả hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt trả hàng",
    "Yêu cầu trả hàng · YC-TR-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm trả",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Lý do trả: Keo không bám dính",
    "Tình trạng: Đã mở, kiểm tra tại quầy",
    "Hoàn tiền mặt cho khách: 78.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã phê duyệt",
    "Đã mở quyền tiếp tục xử lý giao dịch.\nChưa ghi nhận thu/hoàn tiền hoặc hoàn tất.",
    "Quyết định đã được lưu. Nội dung giao dịch tiếp tục bị khóa.",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục hoàn tiền"
  ]
}
```

### 9-W17 · Bán sỉ · Bị từ chối — 1:54036

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54036) · 1440 × 900

```json
{
  "sourceNodeId": "1:54036",
  "name": "9-W17 · Bán sỉ · Bị từ chối",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54038",
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
      "id": "1:54055",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Yêu cầu đã bị từ chối",
    "Tổng trước giảm: 2.000.000 ₫\nSố tiền giảm: 0 ₫\nTổng sau giảm: 2.000.000 ₫",
    "Giữ nguyên giá niêm yết.",
    "Đơn vị giảm: ₫",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục với giá gốc"
  ]
}
```

### 9-W17 · Bán sỉ · Bị từ chối — 1:54097

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54097) · 1440 × 900

```json
{
  "sourceNodeId": "1:54097",
  "name": "9-W17 · Bán sỉ · Bị từ chối",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54099",
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
      "id": "1:54116",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Yêu cầu đã bị từ chối",
    "Tổng trước giảm: 2.000.000 ₫\nSố tiền giảm: 0 ₫\nTổng sau giảm: 2.000.000 ₫",
    "Giữ nguyên giá niêm yết.",
    "Đơn vị giảm: ₫",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục với giá gốc"
  ]
}
```

### 9-W18 · Đổi hàng · Bị từ chối — 1:54160

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54160) · 1440 × 900

```json
{
  "sourceNodeId": "1:54160",
  "name": "9-W18 · Đổi hàng · Bị từ chối",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54162",
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
      "id": "1:54179",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt đổi hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt đổi hàng",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Đế cao su · DE003 · SL: 1",
    "Giá trị thay thế: 160.000 ₫",
    "Cần thu thêm: 82.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Yêu cầu đã bị từ chối",
    "Giao dịch dừng lại.\nKhông xuất quỹ, không cập nhật tồn kho.",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục đổi hàng"
  ]
}
```

### 9-W18 · Đổi hàng · Bị từ chối — 1:54207

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54207) · 1440 × 900

```json
{
  "sourceNodeId": "1:54207",
  "name": "9-W18 · Đổi hàng · Bị từ chối",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54209",
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
      "id": "1:54226",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt đổi hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt đổi hàng",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Đế cao su · DE003 · SL: 1",
    "Giá trị thay thế: 160.000 ₫",
    "Cần thu thêm: 82.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Yêu cầu đã bị từ chối",
    "Giao dịch dừng lại.\nKhông xuất quỹ, không cập nhật tồn kho.",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục đổi hàng"
  ]
}
```

### 9-W19 · Trả hàng · Bị từ chối — 1:54256

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54256) · 1440 × 900

```json
{
  "sourceNodeId": "1:54256",
  "name": "9-W19 · Trả hàng · Bị từ chối",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54258",
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
      "id": "1:54275",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt trả hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt trả hàng",
    "Yêu cầu trả hàng · YC-TR-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm trả",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Lý do trả: Keo không bám dính",
    "Tình trạng: Đã mở, kiểm tra tại quầy",
    "Hoàn tiền mặt cho khách: 78.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Yêu cầu đã bị từ chối",
    "Giao dịch dừng lại.\nKhông xuất quỹ, không cập nhật tồn kho.",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục hoàn tiền"
  ]
}
```

### 9-W19 · Trả hàng · Bị từ chối — 1:54302

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54302) · 1440 × 900

```json
{
  "sourceNodeId": "1:54302",
  "name": "9-W19 · Trả hàng · Bị từ chối",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54304",
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
      "id": "1:54321",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt trả hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt trả hàng",
    "Yêu cầu trả hàng · YC-TR-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm trả",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Lý do trả: Keo không bám dính",
    "Tình trạng: Đã mở, kiểm tra tại quầy",
    "Hoàn tiền mặt cho khách: 78.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Yêu cầu đã bị từ chối",
    "Giao dịch dừng lại.\nKhông xuất quỹ, không cập nhật tồn kho.",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục hoàn tiền"
  ]
}
```

### 9-W20 · Đã hủy · Giữ nội dung đã nhập — 1:54350

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54350) · 1440 × 900

```json
{
  "sourceNodeId": "1:54350",
  "name": "9-W20 · Đã hủy · Giữ nội dung đã nhập",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54352",
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
      "id": "1:54369",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã hủy yêu cầu phê duyệt",
    "Liên kết Zalo không còn hiệu lực.\nNội dung đơn vẫn được giữ lại.",
    "Chỉnh sửa đơn hàng",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục với giá gốc",
    "Tổng trước giảm: 2.000.000 ₫",
    "Số tiền giảm: 0 ₫",
    "Tổng sau giảm: 2.000.000 ₫"
  ]
}
```

### 9-W20 · Đã hủy · Giữ nội dung đã nhập — 1:54415

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54415) · 1440 × 900

```json
{
  "sourceNodeId": "1:54415",
  "name": "9-W20 · Đã hủy · Giữ nội dung đã nhập",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54417",
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
      "id": "1:54434",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã hủy yêu cầu phê duyệt",
    "Liên kết Zalo không còn hiệu lực.\nNội dung đơn vẫn được giữ lại.",
    "Chỉnh sửa đơn hàng",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục với giá gốc",
    "Tổng trước giảm: 2.000.000 ₫",
    "Số tiền giảm: 0 ₫",
    "Tổng sau giảm: 2.000.000 ₫"
  ]
}
```

### 9-W21 · Zalo · Mất kết nối đồng bộ — 1:54482

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54482) · 1440 × 900

```json
{
  "sourceNodeId": "1:54482",
  "name": "9-W21 · Zalo · Mất kết nối đồng bộ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54484",
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
      "id": "1:54501",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy · Khóa",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Mất kết nối. Chưa xác nhận được kết quả phê duyệt.",
    "Hủy yêu cầu",
    "Tự đối chiếu lại khi có kết nối.",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Số tiền giảm: —",
    "Tổng sau giảm: —"
  ]
}
```

### 9-W21 · Zalo · Mất kết nối đồng bộ — 1:54548

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54548) · 1440 × 900

```json
{
  "sourceNodeId": "1:54548",
  "name": "9-W21 · Zalo · Mất kết nối đồng bộ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54550",
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
      "id": "1:54567",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy · Khóa",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Mất kết nối. Chưa xác nhận được kết quả phê duyệt.",
    "Hủy yêu cầu",
    "Tự đối chiếu lại khi có kết nối.",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Số tiền giảm: —",
    "Tổng sau giảm: —"
  ]
}
```

### 51-W05 · Báo cáo tháng — 1:54615

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54615) · 1440 × 900

```json
{
  "sourceNodeId": "1:54615",
  "name": "51-W05 · Báo cáo tháng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54617",
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
      "id": "1:54634",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    }
  ],
  "text": [
    "KinKin POS",
    "Shoe Accessories Shop",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Đơn lưu tạm",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Thời gian báo cáo: Tháng 11/2026",
    "Loại báo cáo",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem báo cáo",
    "Tổng tiền bán",
    "24.000.000 ₫",
    "Tổng tiền hoàn trả",
    "1.544.000 ₫",
    "Doanh thu",
    "22.456.000 ₫",
    "Tổng giá vốn",
    "13.920.000 ₫",
    "Lợi nhuận gộp",
    "8.536.000 ₫"
  ]
}
```

### 51-W05 · Báo cáo tháng — 1:54667

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54667) · 1440 × 900

```json
{
  "sourceNodeId": "1:54667",
  "name": "51-W05 · Báo cáo tháng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54668",
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
      "id": "1:54685",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
      "layout": "VERTICAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 20
    },
    {
      "id": "1:54717",
      "name": "Sidebar · Theo mẫu nhỏ",
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
    "Thống kê và báo cáo / Xem doanh thu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Xem doanh thu",
    "Thời gian báo cáo: Tháng 11/2026",
    "Loại báo cáo",
    "Theo tháng  ⌄",
    "Tháng",
    "11/2026  ▦",
    "Xem báo cáo",
    "Tổng tiền bán",
    "24.000.000 ₫",
    "Tổng tiền hoàn trả",
    "1.544.000 ₫",
    "Doanh thu",
    "22.456.000 ₫",
    "Tổng giá vốn",
    "13.920.000 ₫",
    "Lợi nhuận gộp",
    "8.536.000 ₫",
    "KinKin POS",
    "Shoe Accessories Shop",
    "Đăng xuất",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Xem doanh thu",
    "Số lượng hàng bán/trả"
  ]
}
```

### 9-W01 · Bán sỉ · Xác thực tại quầy — 1:54755

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54755) · 1440 × 900

```json
{
  "sourceNodeId": "1:54755",
  "name": "9-W01 · Bán sỉ · Xác thực tại quầy",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54757",
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
      "id": "1:54774",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Mật khẩu xác thực",
    "Nhập mật khẩu Chủ cửa hàng",
    "Chủ cửa hàng trực tiếp nhập mật khẩu.",
    "Xác thực chủ cửa hàng",
    "Từ chối",
    "Hủy yêu cầu",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Số tiền giảm: —",
    "Tổng sau giảm: —"
  ]
}
```

### 9-W01 · Bán sỉ · Xác thực tại quầy — 1:54826

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54826) · 1440 × 900

```json
{
  "sourceNodeId": "1:54826",
  "name": "9-W01 · Bán sỉ · Xác thực tại quầy",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54828",
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
      "id": "1:54845",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Mật khẩu xác thực",
    "Nhập mật khẩu Chủ cửa hàng",
    "Chủ cửa hàng trực tiếp nhập mật khẩu.",
    "Xác thực chủ cửa hàng",
    "Từ chối",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Số tiền giảm: —",
    "Tổng sau giảm: —"
  ]
}
```

### 9-W04 · Bán sỉ · Mức giảm không hợp lệ — 1:54897

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54897) · 1440 × 900

```json
{
  "sourceNodeId": "1:54897",
  "name": "9-W04 · Bán sỉ · Mức giảm không hợp lệ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54899",
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
      "id": "1:54916",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã xác thực Chủ cửa hàng",
    "Giảm trên hóa đơn",
    "2.100.000",
    "₫",
    "%",
    "Số tiền giảm không được vượt 2.000.000 ₫.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Tổng sau giảm: —",
    "Từ chối",
    "Phê duyệt",
    "Hủy yêu cầu",
    "Số tiền giảm: —",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng."
  ]
}
```

### 9-W04 · Bán sỉ · Mức giảm không hợp lệ — 1:54966

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-54966) · 1440 × 900

```json
{
  "sourceNodeId": "1:54966",
  "name": "9-W04 · Bán sỉ · Mức giảm không hợp lệ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:54968",
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
      "id": "1:54985",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã xác thực Chủ cửa hàng",
    "Giảm trên hóa đơn",
    "2.100.000",
    "₫",
    "%",
    "Số tiền giảm không được vượt 2.000.000 ₫.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Tổng sau giảm: —",
    "Từ chối",
    "Phê duyệt",
    "Hủy yêu cầu",
    "Số tiền giảm: —",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng."
  ]
}
```

### 9-W05 · Mật khẩu sai · Còn một lần thử — 1:55037

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-55037) · 1440 × 900

```json
{
  "sourceNodeId": "1:55037",
  "name": "9-W05 · Mật khẩu sai · Còn một lần thử",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:55039",
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
      "id": "1:55056",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Mật khẩu xác thực",
    "••••••••",
    "Mật khẩu không đúng, vui lòng nhập lại.",
    "Đã sai 2 lần liên tiếp · Còn 1 lần thử.",
    "Xác thực chủ cửa hàng",
    "Từ chối",
    "Hủy yêu cầu",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Số tiền giảm: —",
    "Tổng sau giảm: —"
  ]
}
```

### 9-W05 · Mật khẩu sai · Còn một lần thử — 1:55109

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-55109) · 1440 × 900

```json
{
  "sourceNodeId": "1:55109",
  "name": "9-W05 · Mật khẩu sai · Còn một lần thử",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:55111",
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
      "id": "1:55128",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Mật khẩu xác thực",
    "••••••••",
    "Mật khẩu không đúng, vui lòng nhập lại.",
    "Đã sai 2 lần liên tiếp · Còn 1 lần thử.",
    "Xác thực chủ cửa hàng",
    "Từ chối",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Số tiền giảm: —",
    "Tổng sau giảm: —"
  ]
}
```

### 9-W08 · Đổi hàng · Duyệt hoàn lại — 1:55181

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-55181) · 1440 × 900

```json
{
  "sourceNodeId": "1:55181",
  "name": "9-W08 · Đổi hàng · Duyệt hoàn lại",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:55183",
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
      "id": "1:55200",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt đổi hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt đổi hàng",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Dây giày thun dẹt · DG002 · SL: 1",
    "Giá trị thay thế: 35.000 ₫",
    "Hoàn lại: 43.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Mật khẩu xác thực",
    "••••••••",
    "Chủ cửa hàng trực tiếp nhập mật khẩu.",
    "Phê duyệt đổi hàng",
    "Từ chối",
    "Hủy yêu cầu",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục đổi hàng",
    "Đang khóa nội dung và thao tác tiền/hàng."
  ]
}
```

### 9-W08 · Đổi hàng · Duyệt hoàn lại — 1:55236

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-55236) · 1440 × 900

```json
{
  "sourceNodeId": "1:55236",
  "name": "9-W08 · Đổi hàng · Duyệt hoàn lại",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:55238",
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
      "id": "1:55255",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt đổi hàng",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt đổi hàng",
    "Yêu cầu đổi hàng · YC-DH-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "Sản phẩm nhận lại",
    "Keo Dán Giày X2000 · KE001 · SL: 1",
    "Giá trị nhận lại: 78.000 ₫",
    "Sản phẩm thay thế",
    "Dây giày thun dẹt · DG002 · SL: 1",
    "Giá trị thay thế: 35.000 ₫",
    "Hoàn lại: 43.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Mật khẩu xác thực",
    "••••••••",
    "Chủ cửa hàng trực tiếp nhập mật khẩu.",
    "Phê duyệt đổi hàng",
    "Từ chối",
    "Thu/hoàn tiền và tồn kho chỉ xử lý sau khi được duyệt.",
    "Tiếp tục đổi hàng",
    "Đang khóa nội dung và thao tác tiền/hàng."
  ]
}
```

### 9-W12 · Zalo · Chuẩn bị gửi — 1:55291

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-55291) · 1440 × 900

```json
{
  "sourceNodeId": "1:55291",
  "name": "9-W12 · Zalo · Chuẩn bị gửi",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:55293",
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
      "id": "1:55310",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy · Khóa",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Gửi yêu cầu cho Chủ cửa hàng",
    "Nội dung gửi qua Zalo",
    "Thu Hà gửi yêu cầu duyệt giảm giá sỉ\nHD-0211-0049 · Tổng: 2.000.000 ₫\nMở liên kết để đăng nhập KinKin POS và duyệt.",
    "Hủy yêu cầu",
    "Gửi yêu cầu qua Zalo",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Số tiền giảm: —",
    "Tổng sau giảm: —"
  ]
}
```

### 9-W12 · Zalo · Chuẩn bị gửi — 1:55361

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-55361) · 1440 × 900

```json
{
  "sourceNodeId": "1:55361",
  "name": "9-W12 · Zalo · Chuẩn bị gửi",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:55363",
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
      "id": "1:55380",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy · Khóa",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Gửi yêu cầu cho Chủ cửa hàng",
    "Nội dung gửi qua Zalo",
    "Thu Hà gửi yêu cầu duyệt giảm giá sỉ\nHD-0211-0049 · Tổng: 2.000.000 ₫\nMở liên kết để đăng nhập KinKin POS và duyệt.",
    "Hủy yêu cầu",
    "Gửi yêu cầu qua Zalo",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Số tiền giảm: —",
    "Tổng sau giảm: —"
  ]
}
```

### 9-W13 · Zalo · Đang chờ phản hồi — 1:55433

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-55433) · 1440 × 900

```json
{
  "sourceNodeId": "1:55433",
  "name": "9-W13 · Zalo · Đang chờ phản hồi",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:55435",
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
      "id": "1:55452",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy · Khóa",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đang chờ Chủ cửa hàng phản hồi",
    "Nội dung gửi qua Zalo",
    "Thu Hà gửi yêu cầu duyệt giảm giá sỉ\nHD-0211-0049 · Tổng: 2.000.000 ₫\nMở liên kết để đăng nhập KinKin POS và duyệt.",
    "Hủy yêu cầu",
    "Nhân viên thực hiện gửi trong Zalo.",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Số tiền giảm: —",
    "Tổng sau giảm: —"
  ]
}
```

### 9-W13 · Zalo · Đang chờ phản hồi — 1:55502

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-55502) · 1440 × 900

```json
{
  "sourceNodeId": "1:55502",
  "name": "9-W13 · Zalo · Đang chờ phản hồi",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:55504",
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
      "id": "1:55521",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy · Khóa",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đang chờ Chủ cửa hàng phản hồi",
    "Nội dung gửi qua Zalo",
    "Thu Hà gửi yêu cầu duyệt giảm giá sỉ\nHD-0211-0049 · Tổng: 2.000.000 ₫\nMở liên kết để đăng nhập KinKin POS và duyệt.",
    "Hủy yêu cầu",
    "Nhân viên thực hiện gửi trong Zalo.",
    "Tổng thanh toán: 2.000.000 ₫",
    "Tiếp tục thanh toán",
    "Đang khóa nội dung và thao tác tiền/hàng.",
    "Tổng trước giảm: 2.000.000 ₫",
    "Số tiền giảm: —",
    "Tổng sau giảm: —"
  ]
}
```

### 9-W14 · Bán sỉ · Đã được duyệt — 1:55573

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-55573) · 1440 × 900

```json
{
  "sourceNodeId": "1:55573",
  "name": "9-W14 · Bán sỉ · Đã được duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:55575",
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
      "id": "1:55592",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã phê duyệt",
    "Tổng trước giảm: 2.000.000 ₫\nSố tiền giảm: 100.000 ₫\nTổng sau giảm: 1.900.000 ₫",
    "Quyết định đã được lưu. Nội dung giao dịch tiếp tục bị khóa.",
    "Đơn vị giảm: ₫",
    "Tổng thanh toán: 1.900.000 ₫",
    "Tiếp tục thanh toán"
  ]
}
```

### 9-W14 · Bán sỉ · Đã được duyệt — 1:55634

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-55634) · 1440 × 900

```json
{
  "sourceNodeId": "1:55634",
  "name": "9-W14 · Bán sỉ · Đã được duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:55636",
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
      "id": "1:55653",
      "name": "Page content",
      "x": 256,
      "y": 96,
      "width": 1152,
      "height": 788,
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
    "Đơn lưu tạm",
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
    "Xác thực và phê duyệt / Phê duyệt giảm giá sỉ",
    "TH",
    "Thu Hà",
    "Nhân viên",
    "Phê duyệt giảm giá sỉ",
    "Đơn bán sỉ · HD-0211-0049",
    "Thu Hà gửi yêu cầu · 02/11/2026 09:41",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 · Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 · Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 · Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Mai Linh · Chủ cửa hàng",
    "0909 123 456",
    "Đã phê duyệt",
    "Tổng trước giảm: 2.000.000 ₫\nSố tiền giảm: 100.000 ₫\nTổng sau giảm: 1.900.000 ₫",
    "Quyết định đã được lưu. Nội dung giao dịch tiếp tục bị khóa.",
    "Đơn vị giảm: ₫",
    "Tổng thanh toán: 1.900.000 ₫",
    "Tiếp tục thanh toán"
  ]
}
```
