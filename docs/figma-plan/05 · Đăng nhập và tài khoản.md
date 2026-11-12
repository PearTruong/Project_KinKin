# 05 · Đăng nhập và tài khoản

## Cách triển khai

Phân biệt Chủ cửa hàng và Nhân viên. Hiện/ẩn mật khẩu, lỗi trường, xác nhận bỏ thay đổi và vô hiệu hóa là trạng thái, không tự tạo trang riêng. Có mobile đăng nhập. Không suy ra độ dài mật khẩu hoặc regex điện thoại từ tên frame; lấy câu thông báo nguồn, rồi xác nhận chính sách với backend.

## Cách đọc dữ liệu nguồn

Đây là bản trích xuất cấu trúc và văn bản, KHÔNG phải ảnh hoặc đặc tả hành vi đã được xác nhận. text là chuỗi giao diện theo thứ tự cây layer, không nhất thiết là thứ tự đọc trên màn hình. topLevelLayout là frame con trực tiếp với tọa độ tương đối, không phải toàn bộ CSS. Hidden text được loại theo trạng thái visible của chính nó và tổ tiên; chưa phân tích che phủ/mask. Không suy ra mọi chuỗi đều nhìn thấy được trên ảnh chỉ từ danh sách này. Mỗi trạng thái phải gắn đúng node ID. Giữ nguyên tên và số liệu nguồn; không tự sửa lỗi nội dung thiết kế.

Cần ảnh từng frame và assets gốc để kiểm tra pixel. Font/màu dùng chung xem tài liệu 01. Chi tiết hình học chưa trích xuất dùng truy vấn có mục tiêu, không đọc lại toàn module.

## 01 · Đăng nhập

### 02 · Đăng nhập · Hiện mật khẩu — 1:4287

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4287) · 1440 × 900

```json
{
  "sourceNodeId": "1:4287",
  "name": "02 · Đăng nhập · Hiện mật khẩu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:4288",
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
    "minhanh",
    "Mật khẩu",
    "ViDu2026",
    "Đăng nhập"
  ]
}
```

### 02 · Đăng nhập · Ẩn mật khẩu — 1:4308

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4308) · 1440 × 900

```json
{
  "sourceNodeId": "1:4308",
  "name": "02 · Đăng nhập · Ẩn mật khẩu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:4309",
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
    "minhanh",
    "Mật khẩu",
    "••••••••",
    "Đăng nhập"
  ]
}
```

### 03 · Đăng nhập · Trống cả hai trường — 1:4331

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4331) · 1440 × 900

```json
{
  "sourceNodeId": "1:4331",
  "name": "03 · Đăng nhập · Trống cả hai trường",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:4332",
      "name": "Frame",
      "x": 510,
      "y": 233,
      "width": 420,
      "height": 434,
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
    "Vui lòng nhập tên đăng nhập.",
    "Mật khẩu",
    "Nhập mật khẩu",
    "Vui lòng nhập mật khẩu.",
    "Đăng nhập"
  ]
}
```

### 04 · Đăng nhập · Trống tên đăng nhập — 1:4356

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4356) · 1440 × 900

```json
{
  "sourceNodeId": "1:4356",
  "name": "04 · Đăng nhập · Trống tên đăng nhập",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:4357",
      "name": "Frame",
      "x": 510,
      "y": 244.5,
      "width": 420,
      "height": 411,
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
    "Vui lòng nhập tên đăng nhập.",
    "Mật khẩu",
    "••••••••",
    "Đăng nhập"
  ]
}
```

### 05 · Đăng nhập · Trống mật khẩu — 1:4380

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4380) · 1440 × 900

```json
{
  "sourceNodeId": "1:4380",
  "name": "05 · Đăng nhập · Trống mật khẩu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:4381",
      "name": "Frame",
      "x": 510,
      "y": 244.5,
      "width": 420,
      "height": 411,
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
    "minhanh",
    "Mật khẩu",
    "Nhập mật khẩu",
    "Vui lòng nhập mật khẩu.",
    "Đăng nhập"
  ]
}
```

### 06 · Đăng nhập · Sai thông tin — 1:4404

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4404) · 1440 × 900

```json
{
  "sourceNodeId": "1:4404",
  "name": "06 · Đăng nhập · Sai thông tin",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:4405",
      "name": "Frame",
      "x": 510,
      "y": 222,
      "width": 420,
      "height": 456,
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
    "Tên đăng nhập hoặc mật khẩu không chính xác.",
    "Tên đăng nhập",
    "minhanh",
    "Mật khẩu",
    "••••••••",
    "Đăng nhập"
  ]
}
```

### 07 · Đăng nhập · Tài khoản vô hiệu hóa — 1:4431

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4431) · 1440 × 900

```json
{
  "sourceNodeId": "1:4431",
  "name": "07 · Đăng nhập · Tài khoản vô hiệu hóa",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:4432",
      "name": "Frame",
      "x": 510,
      "y": 222,
      "width": 420,
      "height": 456,
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
    "Tài khoản đã bị vô hiệu hóa.",
    "Tên đăng nhập",
    "ngocanh",
    "Mật khẩu",
    "••••••••",
    "Đăng nhập"
  ]
}
```

### 10 · Đăng nhập thành công · Chủ cửa hàng — 1:4458

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4458) · 1440 × 900

```json
{
  "sourceNodeId": "1:4458",
  "name": "10 · Đăng nhập thành công · Chủ cửa hàng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:4459",
      "name": "Frame",
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
      "id": "1:4487",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý bán hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Theo dõi hóa đơn, tra cứu giao dịch và quản lý doanh thu cửa hàng.",
    "Doanh thu hôm nay",
    "12.840.000 ₫",
    "↑ 8,2% so với hôm qua",
    "Hóa đơn hoàn tất",
    "42",
    "Giá trị trung bình 305.714 ₫",
    "Chờ tiền về",
    "3 hóa đơn",
    "Tổng cần đối soát 1.236.000 ₫",
    "Danh sách hóa đơn",
    "Ngày 02/11/2026",
    "MÃ HÓA ĐƠN",
    "NGÀY BÁN",
    "KHÁCH HÀNG",
    "TỔNG TIỀN",
    "THANH TOÁN",
    "TRẠNG THÁI",
    "THAO TÁC",
    "HD-0211-0048",
    "02/11/2026 09:42",
    "Khách lẻ",
    "386.000 ₫",
    "Chuyển khoản",
    "Chờ tiền về",
    "Xem chi tiết",
    "HD-0211-0049",
    "02/11/2026 09:35",
    "Nguyễn Minh Anh",
    "1.900.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "Xem chi tiết",
    "HD-0211-0047",
    "02/11/2026 09:28",
    "Khách lẻ",
    "245.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "Xem chi tiết"
  ]
}
```

### 11 · Đăng nhập thành công · Nhân viên — 1:4581

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4581) · 1440 × 900

```json
{
  "sourceNodeId": "1:4581",
  "name": "11 · Đăng nhập thành công · Nhân viên",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:4582",
      "name": "Frame",
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
      "id": "1:4600",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Hủy đơn chưa thanh toán",
    "Quản lý đổi trả",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý bán hàng",
    "NA",
    "Nguyễn Minh Anh",
    "Nhân viên",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Danh sách hóa đơn",
    "Ngày 02/11/2026",
    "MÃ HÓA ĐƠN",
    "NGÀY BÁN",
    "KHÁCH HÀNG",
    "TỔNG TIỀN",
    "THANH TOÁN",
    "TRẠNG THÁI",
    "THAO TÁC",
    "HD-0211-0050",
    "02/11/2026 09:45",
    "Khách lẻ",
    "128.000 ₫",
    "—",
    "Chưa thanh toán",
    "Chỉnh sửa",
    "HD-0211-0048",
    "02/11/2026 09:42",
    "Khách lẻ",
    "386.000 ₫",
    "Chuyển khoản",
    "Đang chờ chuyển khoản",
    "Đổi phương thức",
    "HD-0211-0047",
    "02/11/2026 09:28",
    "Khách lẻ",
    "245.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "—"
  ]
}
```

### 45 · Đăng nhập điện thoại · Ban đầu — 1:4668

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4668) · 390 × 844

```json
{
  "sourceNodeId": "1:4668",
  "name": "45 · Đăng nhập điện thoại · Ban đầu",
  "viewport": {
    "width": 390,
    "height": 844
  },
  "topLevelLayout": [
    {
      "id": "1:4669",
      "name": "Frame",
      "x": 16,
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

### 46 · Đăng nhập điện thoại · Hiện mật khẩu — 1:4691

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4691) · 390 × 844

```json
{
  "sourceNodeId": "1:4691",
  "name": "46 · Đăng nhập điện thoại · Hiện mật khẩu",
  "viewport": {
    "width": 390,
    "height": 844
  },
  "topLevelLayout": [
    {
      "id": "1:4692",
      "name": "Frame",
      "x": 16,
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
    "minhanh",
    "Mật khẩu",
    "ViDu2026",
    "Đăng nhập"
  ]
}
```

### 47 · Đăng nhập điện thoại · Thiếu hai trường — 1:4714

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4714) · 390 × 844

```json
{
  "sourceNodeId": "1:4714",
  "name": "47 · Đăng nhập điện thoại · Thiếu hai trường",
  "viewport": {
    "width": 390,
    "height": 844
  },
  "topLevelLayout": [
    {
      "id": "1:4715",
      "name": "Frame",
      "x": 16,
      "y": 205,
      "width": 358,
      "height": 434,
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
    "Vui lòng nhập tên đăng nhập.",
    "Mật khẩu",
    "Nhập mật khẩu",
    "Vui lòng nhập mật khẩu.",
    "Đăng nhập"
  ]
}
```

### 48 · Đăng nhập điện thoại · Tài khoản vô hiệu hóa — 1:4739

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4739) · 390 × 844

```json
{
  "sourceNodeId": "1:4739",
  "name": "48 · Đăng nhập điện thoại · Tài khoản vô hiệu hóa",
  "viewport": {
    "width": 390,
    "height": 844
  },
  "topLevelLayout": [
    {
      "id": "1:4740",
      "name": "Frame",
      "x": 16,
      "y": 194,
      "width": 358,
      "height": 456,
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
    "Tài khoản đã bị vô hiệu hóa.",
    "Tên đăng nhập",
    "ngocanh",
    "Mật khẩu",
    "••••••••",
    "Đăng nhập"
  ]
}
```

### Đăng nhập điện thoại · Trống tên đăng nhập — 1:4766

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4766) · 390 × 844

```json
{
  "sourceNodeId": "1:4766",
  "name": "Đăng nhập điện thoại · Trống tên đăng nhập",
  "viewport": {
    "width": 390,
    "height": 844
  },
  "topLevelLayout": [
    {
      "id": "1:4767",
      "name": "Biểu mẫu đăng nhập",
      "x": 16,
      "y": 216.5,
      "width": 358,
      "height": 411,
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
    "Vui lòng nhập tên đăng nhập.",
    "Mật khẩu",
    "••••••••",
    "Đăng nhập"
  ]
}
```

### Đăng nhập điện thoại · Trống mật khẩu — 1:4790

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4790) · 390 × 844

```json
{
  "sourceNodeId": "1:4790",
  "name": "Đăng nhập điện thoại · Trống mật khẩu",
  "viewport": {
    "width": 390,
    "height": 844
  },
  "topLevelLayout": [
    {
      "id": "1:4791",
      "name": "Biểu mẫu đăng nhập",
      "x": 16,
      "y": 216.5,
      "width": 358,
      "height": 411,
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
    "minhanh",
    "Mật khẩu",
    "Nhập mật khẩu",
    "Vui lòng nhập mật khẩu.",
    "Đăng nhập"
  ]
}
```

### Đăng nhập điện thoại · Sai thông tin — 1:4814

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4814) · 390 × 844

```json
{
  "sourceNodeId": "1:4814",
  "name": "Đăng nhập điện thoại · Sai thông tin",
  "viewport": {
    "width": 390,
    "height": 844
  },
  "topLevelLayout": [
    {
      "id": "1:4815",
      "name": "Biểu mẫu đăng nhập",
      "x": 16,
      "y": 184,
      "width": 358,
      "height": 476,
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
    "Tên đăng nhập hoặc mật khẩu không chính xác.",
    "Tên đăng nhập",
    "minhanh",
    "Mật khẩu",
    "••••••••",
    "Đăng nhập"
  ]
}
```

### Đăng nhập thành công · Chủ cửa hàng · Điện thoại — 1:4841

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4841) · 390 × 844

```json
{
  "sourceNodeId": "1:4841",
  "name": "Đăng nhập thành công · Chủ cửa hàng · Điện thoại",
  "viewport": {
    "width": 390,
    "height": 844
  },
  "topLevelLayout": [
    {
      "id": "1:4842",
      "name": "Nhận diện cửa hàng",
      "x": 0,
      "y": 0,
      "width": 390,
      "height": 96,
      "layout": "HORIZONTAL",
      "padding": [
        24,
        24,
        24,
        24
      ],
      "gap": 0
    },
    {
      "id": "1:4849",
      "name": "Nội dung chính",
      "x": 0,
      "y": 96,
      "width": 390,
      "height": 521,
      "layout": "VERTICAL",
      "padding": [
        16,
        16,
        16,
        16
      ],
      "gap": 16
    }
  ],
  "text": [
    "KinKin POS",
    "Cửa hàng phụ kiện giày",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đặt lại mật khẩu",
    "Đăng xuất"
  ]
}
```

### 01 · Đăng nhập · Ban đầu — 1:4884

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4884) · 1440 × 900

```json
{
  "sourceNodeId": "1:4884",
  "name": "01 · Đăng nhập · Ban đầu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:4885",
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

## 02 · Tài khoản · Danh sách nhân viên

### 12 · Tài khoản · Danh sách nhân viên — 1:4196

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4196) · 1440 × 900

```json
{
  "sourceNodeId": "1:4196",
  "name": "12 · Tài khoản · Danh sách nhân viên",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:4197",
      "name": "Frame",
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
      "id": "1:4225",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Quản lý tài khoản",
    "Danh sách nhân viên",
    "HỌ TÊN",
    "TÊN ĐĂNG NHẬP",
    "SỐ ĐIỆN THOẠI",
    "VAI TRÒ",
    "TRẠNG THÁI",
    "THAO TÁC",
    "Nguyễn Minh Anh",
    "minhanh",
    "0901234567",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Trần Hoàng Nam",
    "hoangnam",
    "0912345678",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Lê Ngọc Anh",
    "ngocanh",
    "0987654321",
    "Nhân viên",
    "Đã vô hiệu hóa",
    "Chỉnh sửa"
  ]
}
```

## 03 · Tạo tài khoản

### 13 · Tạo tài khoản · Ban đầu — 1:3162

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-3162) · 1440 × 900

```json
{
  "sourceNodeId": "1:3162",
  "name": "13 · Tạo tài khoản · Ban đầu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:3163",
      "name": "Frame",
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
      "id": "1:3191",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Tạo tài khoản mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo tài khoản mới",
    "Thông tin nhân viên",
    "Tên đăng nhập *",
    "Nhập tên đăng nhập",
    "Họ tên *",
    "Nhập họ tên",
    "Số điện thoại *",
    "Nhập số điện thoại",
    "Mật khẩu *",
    "Nhập mật khẩu",
    "Ít nhất 8 ký tự, không chỉ gồm khoảng trắng.",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 14 · Tạo tài khoản · Đã nhập hợp lệ — 1:3252

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-3252) · 1440 × 900

```json
{
  "sourceNodeId": "1:3252",
  "name": "14 · Tạo tài khoản · Đã nhập hợp lệ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:3253",
      "name": "Frame",
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
      "id": "1:3281",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Tạo tài khoản mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo tài khoản mới",
    "Thông tin nhân viên",
    "Tên đăng nhập *",
    "thuha",
    "Họ tên *",
    "Phạm Thu Hà",
    "Số điện thoại *",
    "0934567890",
    "Mật khẩu *",
    "••••••••••",
    "Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng.",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 15 · Tạo tài khoản · Thiếu thông tin bắt buộc — 1:3342

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-3342) · 1440 × 900

```json
{
  "sourceNodeId": "1:3342",
  "name": "15 · Tạo tài khoản · Thiếu thông tin bắt buộc",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:3343",
      "name": "Frame",
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
      "id": "1:3371",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Tạo tài khoản mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo tài khoản mới",
    "Thông tin nhân viên",
    "Tên đăng nhập *",
    "Nhập tên đăng nhập",
    "Vui lòng nhập tên đăng nhập.",
    "Họ tên *",
    "Nhập họ tên",
    "Vui lòng nhập họ tên.",
    "Số điện thoại *",
    "Nhập số điện thoại",
    "Vui lòng nhập số điện thoại.",
    "Mật khẩu *",
    "Nhập mật khẩu",
    "Vui lòng nhập mật khẩu.",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 16 · Tạo tài khoản · Trùng tên đăng nhập — 1:3435

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-3435) · 1440 × 900

```json
{
  "sourceNodeId": "1:3435",
  "name": "16 · Tạo tài khoản · Trùng tên đăng nhập",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:3436",
      "name": "Frame",
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
      "id": "1:3464",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Tạo tài khoản mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo tài khoản mới",
    "Thông tin nhân viên",
    "Tên đăng nhập *",
    "hoangnam",
    "Tên đăng nhập đã tồn tại.",
    "Họ tên *",
    "Hoàng Nam",
    "Số điện thoại *",
    "0934567890",
    "Mật khẩu *",
    "••••••••••",
    "Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng.",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 17 · Tạo tài khoản · Trùng số điện thoại — 1:3526

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-3526) · 1440 × 900

```json
{
  "sourceNodeId": "1:3526",
  "name": "17 · Tạo tài khoản · Trùng số điện thoại",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:3527",
      "name": "Frame",
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
      "id": "1:3555",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Tạo tài khoản mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo tài khoản mới",
    "Thông tin nhân viên",
    "Tên đăng nhập *",
    "thuha",
    "Họ tên *",
    "Phạm Thu Hà",
    "Số điện thoại *",
    "0912345678",
    "Số điện thoại đã được sử dụng.",
    "Mật khẩu *",
    "••••••••••",
    "Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng.",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 18 · Tạo tài khoản · Sai số điện thoại và mật khẩu ngắn — 1:3617

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-3617) · 1440 × 900

```json
{
  "sourceNodeId": "1:3617",
  "name": "18 · Tạo tài khoản · Sai số điện thoại và mật khẩu ngắn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:3618",
      "name": "Frame",
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
      "id": "1:3646",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Tạo tài khoản mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo tài khoản mới",
    "Thông tin nhân viên",
    "Tên đăng nhập *",
    "thuha",
    "Họ tên *",
    "Phạm Thu Hà",
    "Số điện thoại *",
    "123456789",
    "Số điện thoại phải gồm 10 chữ số, bắt đầu bằng 0.",
    "Mật khẩu *",
    "•••••",
    "Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng.",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### Tạo tài khoản · Mật khẩu chỉ gồm khoảng trắng — 1:3708

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-3708) · 1440 × 900

```json
{
  "sourceNodeId": "1:3708",
  "name": "Tạo tài khoản · Mật khẩu chỉ gồm khoảng trắng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:3709",
      "name": "Frame",
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
      "id": "1:3737",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Tạo tài khoản mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo tài khoản mới",
    "Thông tin nhân viên",
    "Tên đăng nhập *",
    "thuha",
    "Họ tên *",
    "Phạm Thu Hà",
    "Số điện thoại *",
    "0934567890",
    "Mật khẩu *",
    "••••••••",
    "Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng.",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 19 · Tạo tài khoản · Lỗi hệ thống — 1:3798

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-3798) · 1440 × 900

```json
{
  "sourceNodeId": "1:3798",
  "name": "19 · Tạo tài khoản · Lỗi hệ thống",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:3799",
      "name": "Frame",
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
      "id": "1:3827",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Tạo tài khoản mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo tài khoản mới",
    "Thông tin nhân viên",
    "Tạo tài khoản thất bại do lỗi hệ thống. Vui lòng thử lại.",
    "Tên đăng nhập *",
    "thuha",
    "Họ tên *",
    "Phạm Thu Hà",
    "Số điện thoại *",
    "0934567890",
    "Mật khẩu *",
    "••••••••••",
    "Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng.",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 20 · Tạo tài khoản · Thành công — 1:3892

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-3892) · 1440 × 900

```json
{
  "sourceNodeId": "1:3892",
  "name": "20 · Tạo tài khoản · Thành công",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:3893",
      "name": "Frame",
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
      "id": "1:3921",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Danh sách nhân viên",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Quản lý tài khoản",
    "Tạo tài khoản thành công.",
    "Danh sách nhân viên",
    "HỌ TÊN",
    "TÊN ĐĂNG NHẬP",
    "SỐ ĐIỆN THOẠI",
    "VAI TRÒ",
    "TRẠNG THÁI",
    "THAO TÁC",
    "Nguyễn Minh Anh",
    "minhanh",
    "0901234567",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Trần Hoàng Nam",
    "hoangnam",
    "0912345678",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Lê Ngọc Anh",
    "ngocanh",
    "0987654321",
    "Nhân viên",
    "Đã vô hiệu hóa",
    "Chỉnh sửa",
    "Phạm Thu Hà",
    "thuha",
    "0934567890",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa"
  ]
}
```

### 21 · Tạo tài khoản · Xác nhận bỏ thay đổi — 1:3999

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-3999) · 1440 × 900

```json
{
  "sourceNodeId": "1:3999",
  "name": "21 · Tạo tài khoản · Xác nhận bỏ thay đổi",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:4000",
      "name": "Frame",
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
      "id": "1:4028",
      "name": "Frame",
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
    },
    {
      "id": "1:4089",
      "name": "Frame",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Tạo tài khoản mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo tài khoản mới",
    "Thông tin nhân viên",
    "Tên đăng nhập *",
    "thuha",
    "Họ tên *",
    "Phạm Thu Hà",
    "Số điện thoại *",
    "0934567890",
    "Mật khẩu *",
    "••••••••••",
    "Ít nhất 8 ký tự, không chỉ gồm khoảng trắng.",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu",
    "Bỏ thay đổi?",
    "Các thay đổi chưa được lưu. Bạn có muốn bỏ các thay đổi ?",
    "Tiếp tục chỉnh sửa",
    "Hủy bỏ"
  ]
}
```

### 20 · Tạo tài khoản · Xác nhận bỏ thay đổi — 1:4099

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-4099) · 1440 × 900

```json
{
  "sourceNodeId": "1:4099",
  "name": "20 · Tạo tài khoản · Xác nhận bỏ thay đổi",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:4100",
      "name": "Frame",
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
      "id": "1:4128",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Danh sách nhân viên",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Quản lý tài khoản",
    "Tạo tài khoản thành công.",
    "Danh sách nhân viên",
    "HỌ TÊN",
    "TÊN ĐĂNG NHẬP",
    "SỐ ĐIỆN THOẠI",
    "VAI TRÒ",
    "TRẠNG THÁI",
    "THAO TÁC",
    "Nguyễn Minh Anh",
    "minhanh",
    "0901234567",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Trần Hoàng Nam",
    "hoangnam",
    "0912345678",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Lê Ngọc Anh",
    "ngocanh",
    "0987654321",
    "Nhân viên",
    "Đã vô hiệu hóa",
    "Chỉnh sửa"
  ]
}
```

## 04 · Sửa tài khoản

### 22 · Sửa tài khoản · Nhân viên hoạt động — 1:2360

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-2360) · 1440 × 900

```json
{
  "sourceNodeId": "1:2360",
  "name": "22 · Sửa tài khoản · Nhân viên hoạt động",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:2361",
      "name": "Frame",
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
      "id": "1:2389",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Sửa thông tin tài khoản",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Sửa thông tin tài khoản",
    "Thông tin nhân viên",
    "Hoạt động",
    "Họ tên *",
    "Nguyễn Minh Anh",
    "Tên đăng nhập",
    "minhanh",
    "Số điện thoại *",
    "0901234567",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 23 · Sửa tài khoản · Nhân viên vô hiệu hóa — 1:2444

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-2444) · 1440 × 900

```json
{
  "sourceNodeId": "1:2444",
  "name": "23 · Sửa tài khoản · Nhân viên vô hiệu hóa",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:2445",
      "name": "Frame",
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
      "id": "1:2473",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Sửa thông tin tài khoản",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Sửa thông tin tài khoản",
    "Thông tin nhân viên",
    "Đã vô hiệu hóa",
    "Họ tên *",
    "Lê Ngọc Anh",
    "Tên đăng nhập",
    "ngocanh",
    "Số điện thoại *",
    "0987654321",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 24 · Sửa tài khoản · Số điện thoại không hợp lệ — 1:2528

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-2528) · 1440 × 900

```json
{
  "sourceNodeId": "1:2528",
  "name": "24 · Sửa tài khoản · Số điện thoại không hợp lệ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:2529",
      "name": "Frame",
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
      "id": "1:2557",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Sửa thông tin tài khoản",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Sửa thông tin tài khoản",
    "Thông tin nhân viên",
    "Hoạt động",
    "Họ tên *",
    "Nguyễn Minh Anh",
    "Tên đăng nhập",
    "minhanh",
    "Số điện thoại *",
    "Nhập số điện thoại",
    "Số điện thoại là bắt buộc và phải gồm 10 chữ số, bắt đầu bằng 0.",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### Sửa tài khoản · Số điện thoại sai định dạng — 1:2613

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-2613) · 1440 × 900

```json
{
  "sourceNodeId": "1:2613",
  "name": "Sửa tài khoản · Số điện thoại sai định dạng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:2614",
      "name": "Frame",
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
      "id": "1:2642",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Sửa thông tin tài khoản",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Sửa thông tin tài khoản",
    "Thông tin nhân viên",
    "Hoạt động",
    "Họ tên *",
    "Nguyễn Minh Anh",
    "Tên đăng nhập",
    "minhanh",
    "Số điện thoại *",
    "123456789",
    "Số điện thoại là bắt buộc và phải gồm 10 chữ số, bắt đầu bằng 0.",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 25 · Sửa tài khoản · Số điện thoại đã sử dụng — 1:2698

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-2698) · 1440 × 900

```json
{
  "sourceNodeId": "1:2698",
  "name": "25 · Sửa tài khoản · Số điện thoại đã sử dụng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:2699",
      "name": "Frame",
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
      "id": "1:2727",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Sửa thông tin tài khoản",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Sửa thông tin tài khoản",
    "Thông tin nhân viên",
    "Hoạt động",
    "Họ tên *",
    "Nguyễn Minh Anh",
    "Tên đăng nhập",
    "minhanh",
    "Số điện thoại *",
    "0912345678",
    "Số điện thoại đã được sử dụng.",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 26 · Sửa tài khoản · Lỗi lưu — 1:2783

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-2783) · 1440 × 900

```json
{
  "sourceNodeId": "1:2783",
  "name": "26 · Sửa tài khoản · Lỗi lưu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:2784",
      "name": "Frame",
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
      "id": "1:2812",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Sửa thông tin tài khoản",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Sửa thông tin tài khoản",
    "Thông tin nhân viên",
    "Hoạt động",
    "Không thể lưu dữ liệu do lỗi hệ thống. Vui lòng thử lại.",
    "Họ tên *",
    "Nguyễn Minh Anh",
    "Tên đăng nhập",
    "minhanh",
    "Số điện thoại *",
    "0901234568",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 28 · Sửa tài khoản · Thành công — 1:2871

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-2871) · 1440 × 900

```json
{
  "sourceNodeId": "1:2871",
  "name": "28 · Sửa tài khoản · Thành công",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:2872",
      "name": "Frame",
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
      "id": "1:2900",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Danh sách nhân viên",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Quản lý tài khoản",
    "Lưu tài khoản thành công.",
    "Danh sách nhân viên",
    "HỌ TÊN",
    "TÊN ĐĂNG NHẬP",
    "SỐ ĐIỆN THOẠI",
    "VAI TRÒ",
    "TRẠNG THÁI",
    "THAO TÁC",
    "Nguyễn Minh Anh",
    "minhanh",
    "0901234568",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Trần Hoàng Nam",
    "hoangnam",
    "0912345678",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Lê Ngọc Anh",
    "ngocanh",
    "0987654321",
    "Nhân viên",
    "Đã vô hiệu hóa",
    "Chỉnh sửa",
    "Phạm Thu Hà",
    "thuha",
    "0934567890",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa"
  ]
}
```

### 29 · Sửa tài khoản · Xác nhận bỏ thay đổi — 1:2980

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-2980) · 1440 × 900

```json
{
  "sourceNodeId": "1:2980",
  "name": "29 · Sửa tài khoản · Xác nhận bỏ thay đổi",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:2981",
      "name": "Frame",
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
      "id": "1:3009",
      "name": "Frame",
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
    },
    {
      "id": "1:3066",
      "name": "Frame",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Sửa thông tin tài khoản",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Sửa thông tin tài khoản",
    "Thông tin nhân viên",
    "Hoạt động",
    "Họ tên *",
    "Nguyễn Minh Anh",
    "Tên đăng nhập",
    "minhanh",
    "Số điện thoại *",
    "0901234568",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu",
    "Bỏ thay đổi?",
    "Các thay đổi chưa được lưu. Bạn có muốn bỏ các thay đổi ?",
    "Tiếp tục chỉnh sửa",
    "Hủy bỏ"
  ]
}
```

### 27 · Sửa tài khoản · Họ tên bị bỏ trống — 1:3076

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-3076) · 1440 × 900

```json
{
  "sourceNodeId": "1:3076",
  "name": "27 · Sửa tài khoản · Họ tên bị bỏ trống",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:3077",
      "name": "Frame",
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
      "id": "1:3105",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Sửa thông tin tài khoản",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Sửa thông tin tài khoản",
    "Thông tin nhân viên",
    "Hoạt động",
    "Họ tên *",
    "",
    "Vui lòng nhập họ tên.",
    "Tên đăng nhập",
    "minhanh",
    "Số điện thoại *",
    "0901234567",
    "Vai trò",
    "Nhân viên",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

## 05 · Vô hiệu hóa tài khoản

### 30 · Vô hiệu hóa · Xác nhận — 1:1798

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-1798) · 1440 × 900

```json
{
  "sourceNodeId": "1:1798",
  "name": "30 · Vô hiệu hóa · Xác nhận",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:1799",
      "name": "Frame",
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
      "id": "1:1827",
      "name": "Frame",
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
    },
    {
      "id": "1:1903",
      "name": "Frame",
      "x": -2,
      "y": 0,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Vô hiệu hóa tài khoản",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Vô hiệu hóa tài khoản",
    "Danh sách nhân viên",
    "HỌ TÊN",
    "TÊN ĐĂNG NHẬP",
    "SỐ ĐIỆN THOẠI",
    "VAI TRÒ",
    "TRẠNG THÁI",
    "THAO TÁC",
    "Nguyễn Minh Anh",
    "minhanh",
    "0901234568",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Trần Hoàng Nam",
    "hoangnam",
    "0912345678",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Lê Ngọc Anh",
    "ngocanh",
    "0987654321",
    "Nhân viên",
    "Đã vô hiệu hóa",
    "Chỉnh sửa",
    "Phạm Thu Hà",
    "thuha",
    "0934567890",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Vô hiệu hóa tài khoản?",
    "Trần Hoàng Nam · hoangnam",
    "Tài khoản sẽ không thể đăng nhập. Tất cả phiên đăng nhập của tài khoản này sẽ bị thu hồi sau khi vô hiệu hóa thành công.",
    "Hủy bỏ",
    "Vô hiệu hóa"
  ]
}
```

### 31 · Vô hiệu hóa · Thành công — 1:1914

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-1914) · 1440 × 900

```json
{
  "sourceNodeId": "1:1914",
  "name": "31 · Vô hiệu hóa · Thành công",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:1915",
      "name": "Frame",
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
      "id": "1:1943",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Vô hiệu hóa tài khoản",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Vô hiệu hóa tài khoản",
    "Vô hiệu hóa tài khoản thành công.",
    "Danh sách nhân viên",
    "HỌ TÊN",
    "TÊN ĐĂNG NHẬP",
    "SỐ ĐIỆN THOẠI",
    "VAI TRÒ",
    "TRẠNG THÁI",
    "THAO TÁC",
    "Nguyễn Minh Anh",
    "minhanh",
    "0901234568",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Trần Hoàng Nam",
    "hoangnam",
    "0912345678",
    "Nhân viên",
    "Đã vô hiệu hóa",
    "Chỉnh sửa",
    "Lê Ngọc Anh",
    "ngocanh",
    "0987654321",
    "Nhân viên",
    "Đã vô hiệu hóa",
    "Chỉnh sửa",
    "Phạm Thu Hà",
    "thuha",
    "0934567890",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa"
  ]
}
```

### 32 · Vô hiệu hóa · Lỗi lưu — 1:2020

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-2020) · 1440 × 900

```json
{
  "sourceNodeId": "1:2020",
  "name": "32 · Vô hiệu hóa · Lỗi lưu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:2021",
      "name": "Frame",
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
      "id": "1:2049",
      "name": "Frame",
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
    },
    {
      "id": "1:2124",
      "name": "Frame",
      "x": -2,
      "y": 0,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Vô hiệu hóa tài khoản",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Vô hiệu hóa tài khoản",
    "Danh sách nhân viên",
    "HỌ TÊN",
    "TÊN ĐĂNG NHẬP",
    "SỐ ĐIỆN THOẠI",
    "VAI TRÒ",
    "TRẠNG THÁI",
    "THAO TÁC",
    "Nguyễn Minh Anh",
    "minhanh",
    "0901234568",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Trần Hoàng Nam",
    "hoangnam",
    "0912345678",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Lê Ngọc Anh",
    "ngocanh",
    "0987654321",
    "Nhân viên",
    "Đã vô hiệu hóa",
    "Chỉnh sửa",
    "Phạm Thu Hà",
    "thuha",
    "0934567890",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Vô hiệu hóa tài khoản?",
    "Trần Hoàng Nam · hoangnam",
    "Tài khoản sẽ không thể đăng nhập. Tất cả phiên đăng nhập của tài khoản này sẽ bị thu hồi sau khi vô hiệu hóa thành công.",
    "Không thể lưu dữ liệu do lỗi hệ thống. Vui lòng thử lại.",
    "Hủy bỏ",
    "Vô hiệu hóa"
  ]
}
```

### Vô hiệu hóa · Trước khi chọn Hủy bỏ — 1:2142

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-2142) · 1440 × 900

```json
{
  "sourceNodeId": "1:2142",
  "name": "Vô hiệu hóa · Trước khi chọn Hủy bỏ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:2143",
      "name": "Frame",
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
      "id": "1:2171",
      "name": "Frame",
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
    },
    {
      "id": "1:2245",
      "name": "Frame",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Vô hiệu hóa tài khoản",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Vô hiệu hóa tài khoản",
    "Danh sách nhân viên",
    "HỌ TÊN",
    "TÊN ĐĂNG NHẬP",
    "SỐ ĐIỆN THOẠI",
    "VAI TRÒ",
    "TRẠNG THÁI",
    "THAO TÁC",
    "Nguyễn Minh Anh",
    "minhanh",
    "0901234568",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Trần Hoàng Nam",
    "hoangnam",
    "0912345678",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Lê Ngọc Anh",
    "ngocanh",
    "0987654321",
    "Nhân viên",
    "Đã vô hiệu hóa",
    "Chỉnh sửa",
    "Phạm Thu Hà",
    "thuha",
    "0934567890",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Vô hiệu hóa tài khoản?",
    "Trần Hoàng Nam · hoangnam",
    "Tài khoản sẽ không thể đăng nhập. Tất cả phiên đăng nhập của tài khoản này sẽ bị thu hồi sau khi vô hiệu hóa thành công.",
    "Hủy bỏ",
    "Vô hiệu hóa"
  ]
}
```

### Vô hiệu hóa · Sau khi Hủy bỏ — 1:2256

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-2256) · 1440 × 900

```json
{
  "sourceNodeId": "1:2256",
  "name": "Vô hiệu hóa · Sau khi Hủy bỏ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:2257",
      "name": "Frame",
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
      "id": "1:2285",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý tài khoản",
    "/",
    "Vô hiệu hóa tài khoản",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Vô hiệu hóa tài khoản",
    "Danh sách nhân viên",
    "HỌ TÊN",
    "TÊN ĐĂNG NHẬP",
    "SỐ ĐIỆN THOẠI",
    "VAI TRÒ",
    "TRẠNG THÁI",
    "THAO TÁC",
    "Nguyễn Minh Anh",
    "minhanh",
    "0901234568",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Trần Hoàng Nam",
    "hoangnam",
    "0912345678",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa",
    "Lê Ngọc Anh",
    "ngocanh",
    "0987654321",
    "Nhân viên",
    "Đã vô hiệu hóa",
    "Chỉnh sửa",
    "Phạm Thu Hà",
    "thuha",
    "0934567890",
    "Nhân viên",
    "Hoạt động",
    "Chỉnh sửa",
    "Vô hiệu hóa"
  ]
}
```

## 06 · Đổi mật khẩu

### 33 · Đổi mật khẩu · Ban đầu — 1:310

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-310) · 1440 × 900

```json
{
  "sourceNodeId": "1:310",
  "name": "33 · Đổi mật khẩu · Ban đầu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:311",
      "name": "Frame",
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
      "id": "1:329",
      "name": "Frame",
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
    },
    {
      "id": "1:393",
      "name": "Frame",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Hủy đơn chưa thanh toán",
    "Quản lý đổi trả",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Đặt lại mật khẩu",
    "NA",
    "Nguyễn Minh Anh",
    "Nhân viên",
    "Quản lý bán hàng",
    "Danh sách hóa đơn",
    "Ngày 02/11/2026",
    "MÃ HÓA ĐƠN",
    "NGÀY BÁN",
    "KHÁCH HÀNG",
    "TỔNG TIỀN",
    "THANH TOÁN",
    "TRẠNG THÁI",
    "THAO TÁC",
    "HD-0211-0050",
    "02/11/2026 09:45",
    "Khách lẻ",
    "128.000 ₫",
    "—",
    "Chưa thanh toán",
    "Chỉnh sửa",
    "HD-0211-0048",
    "02/11/2026 09:42",
    "Khách lẻ",
    "386.000 ₫",
    "Chuyển khoản",
    "Đang chờ chuyển khoản",
    "Đổi phương thức",
    "HD-0211-0047",
    "02/11/2026 09:28",
    "Khách lẻ",
    "245.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "—",
    "Đặt lại mật khẩu",
    "Mật khẩu hiện tại *",
    "Nhập mật khẩu hiện tại",
    "Mật khẩu mới *",
    "Nhập mật khẩu mới",
    "Ít nhất 8 ký tự, không chỉ gồm khoảng trắng và khác mật khẩu hiện tại.",
    "Xác nhận mật khẩu mới *",
    "Nhập lại mật khẩu mới",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 34 · Đổi mật khẩu · Đã nhập — 1:422

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-422) · 1440 × 900

```json
{
  "sourceNodeId": "1:422",
  "name": "34 · Đổi mật khẩu · Đã nhập",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:423",
      "name": "Frame",
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
      "id": "1:441",
      "name": "Frame",
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
    },
    {
      "id": "1:505",
      "name": "Frame",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Hủy đơn chưa thanh toán",
    "Quản lý đổi trả",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Đặt lại mật khẩu",
    "NA",
    "Nguyễn Minh Anh",
    "Nhân viên",
    "Quản lý bán hàng",
    "Danh sách hóa đơn",
    "Ngày 02/11/2026",
    "MÃ HÓA ĐƠN",
    "NGÀY BÁN",
    "KHÁCH HÀNG",
    "TỔNG TIỀN",
    "THANH TOÁN",
    "TRẠNG THÁI",
    "THAO TÁC",
    "HD-0211-0050",
    "02/11/2026 09:45",
    "Khách lẻ",
    "128.000 ₫",
    "—",
    "Chưa thanh toán",
    "Chỉnh sửa",
    "HD-0211-0048",
    "02/11/2026 09:42",
    "Khách lẻ",
    "386.000 ₫",
    "Chuyển khoản",
    "Đang chờ chuyển khoản",
    "Đổi phương thức",
    "HD-0211-0047",
    "02/11/2026 09:28",
    "Khách lẻ",
    "245.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "—",
    "Đặt lại mật khẩu",
    "Mật khẩu hiện tại *",
    "••••••••••",
    "Mật khẩu mới *",
    "••••••••••",
    "Ít nhất 8 ký tự, không chỉ gồm khoảng trắng và khác mật khẩu hiện tại.",
    "Xác nhận mật khẩu mới *",
    "••••••••••",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 35 · Đổi mật khẩu · Thiếu thông tin — 1:534

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-534) · 1440 × 900

```json
{
  "sourceNodeId": "1:534",
  "name": "35 · Đổi mật khẩu · Thiếu thông tin",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:535",
      "name": "Frame",
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
      "id": "1:553",
      "name": "Frame",
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
    },
    {
      "id": "1:615",
      "name": "Frame",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Hủy đơn chưa thanh toán",
    "Quản lý đổi trả",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Đặt lại mật khẩu",
    "NA",
    "Nguyễn Minh Anh",
    "Nhân viên",
    "Quản lý bán hàng",
    "Danh sách hóa đơn",
    "Ngày 02/11/2026",
    "MÃ HÓA ĐƠN",
    "NGÀY BÁN",
    "KHÁCH HÀNG",
    "TỔNG TIỀN",
    "THANH TOÁN",
    "TRẠNG THÁI",
    "THAO TÁC",
    "HD-0211-0050",
    "02/11/2026 09:45",
    "Khách lẻ",
    "128.000 ₫",
    "—",
    "Chưa thanh toán",
    "Chỉnh sửa",
    "HD-0211-0048",
    "02/11/2026 09:42",
    "Khách lẻ",
    "386.000 ₫",
    "Chuyển khoản",
    "Đang chờ chuyển khoản",
    "Đổi phương thức",
    "HD-0211-0047",
    "02/11/2026 09:28",
    "Khách lẻ",
    "245.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "—",
    "Đặt lại mật khẩu",
    "Vui lòng điền đầy đủ các thông tin bắt buộc.",
    "Mật khẩu hiện tại *",
    "Nhập mật khẩu hiện tại",
    "Mật khẩu mới *",
    "Nhập mật khẩu mới",
    "Ít nhất 8 ký tự, không chỉ gồm khoảng trắng và khác mật khẩu hiện tại.",
    "Xác nhận mật khẩu mới *",
    "Nhập lại mật khẩu mới",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 36 · Đổi mật khẩu · Mật khẩu hiện tại sai — 1:649

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-649) · 1440 × 900

```json
{
  "sourceNodeId": "1:649",
  "name": "36 · Đổi mật khẩu · Mật khẩu hiện tại sai",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:650",
      "name": "Frame",
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
      "id": "1:668",
      "name": "Frame",
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
    },
    {
      "id": "1:730",
      "name": "Frame",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Hủy đơn chưa thanh toán",
    "Quản lý đổi trả",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Đặt lại mật khẩu",
    "NA",
    "Nguyễn Minh Anh",
    "Nhân viên",
    "Quản lý bán hàng",
    "Danh sách hóa đơn",
    "Ngày 02/11/2026",
    "MÃ HÓA ĐƠN",
    "NGÀY BÁN",
    "KHÁCH HÀNG",
    "TỔNG TIỀN",
    "THANH TOÁN",
    "TRẠNG THÁI",
    "THAO TÁC",
    "HD-0211-0050",
    "02/11/2026 09:45",
    "Khách lẻ",
    "128.000 ₫",
    "—",
    "Chưa thanh toán",
    "Chỉnh sửa",
    "HD-0211-0048",
    "02/11/2026 09:42",
    "Khách lẻ",
    "386.000 ₫",
    "Chuyển khoản",
    "Đang chờ chuyển khoản",
    "Đổi phương thức",
    "HD-0211-0047",
    "02/11/2026 09:28",
    "Khách lẻ",
    "245.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "—",
    "Đặt lại mật khẩu",
    "Mật khẩu hiện tại *",
    "••••••••••",
    "Mật khẩu hiện tại không đúng, vui lòng nhập lại.",
    "Mật khẩu mới *",
    "••••••••••",
    "Ít nhất 8 ký tự, không chỉ gồm khoảng trắng và khác mật khẩu hiện tại.",
    "Xác nhận mật khẩu mới *",
    "••••••••••",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 37 · Đổi mật khẩu · Xác nhận không khớp — 1:761

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-761) · 1440 × 900

```json
{
  "sourceNodeId": "1:761",
  "name": "37 · Đổi mật khẩu · Xác nhận không khớp",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:762",
      "name": "Frame",
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
      "id": "1:780",
      "name": "Frame",
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
    },
    {
      "id": "1:842",
      "name": "Frame",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Hủy đơn chưa thanh toán",
    "Quản lý đổi trả",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Đặt lại mật khẩu",
    "NA",
    "Nguyễn Minh Anh",
    "Nhân viên",
    "Quản lý bán hàng",
    "Danh sách hóa đơn",
    "Ngày 02/11/2026",
    "MÃ HÓA ĐƠN",
    "NGÀY BÁN",
    "KHÁCH HÀNG",
    "TỔNG TIỀN",
    "THANH TOÁN",
    "TRẠNG THÁI",
    "THAO TÁC",
    "HD-0211-0050",
    "02/11/2026 09:45",
    "Khách lẻ",
    "128.000 ₫",
    "—",
    "Chưa thanh toán",
    "Chỉnh sửa",
    "HD-0211-0048",
    "02/11/2026 09:42",
    "Khách lẻ",
    "386.000 ₫",
    "Chuyển khoản",
    "Đang chờ chuyển khoản",
    "Đổi phương thức",
    "HD-0211-0047",
    "02/11/2026 09:28",
    "Khách lẻ",
    "245.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "—",
    "Đặt lại mật khẩu",
    "Mật khẩu hiện tại *",
    "••••••••••",
    "Mật khẩu mới *",
    "••••••••••",
    "Ít nhất 8 ký tự, không chỉ gồm khoảng trắng và khác mật khẩu hiện tại.",
    "Xác nhận mật khẩu mới *",
    "••••••••••",
    "Mật khẩu mới không trùng khớp, vui lòng nhập lại.",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 38 · Đổi mật khẩu · Mật khẩu mới quá ngắn — 1:872

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-872) · 1440 × 900

```json
{
  "sourceNodeId": "1:872",
  "name": "38 · Đổi mật khẩu · Mật khẩu mới quá ngắn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:873",
      "name": "Frame",
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
      "id": "1:891",
      "name": "Frame",
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
    },
    {
      "id": "1:953",
      "name": "Frame",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Hủy đơn chưa thanh toán",
    "Quản lý đổi trả",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Đặt lại mật khẩu",
    "NA",
    "Nguyễn Minh Anh",
    "Nhân viên",
    "Quản lý bán hàng",
    "Danh sách hóa đơn",
    "Ngày 02/11/2026",
    "MÃ HÓA ĐƠN",
    "NGÀY BÁN",
    "KHÁCH HÀNG",
    "TỔNG TIỀN",
    "THANH TOÁN",
    "TRẠNG THÁI",
    "THAO TÁC",
    "HD-0211-0050",
    "02/11/2026 09:45",
    "Khách lẻ",
    "128.000 ₫",
    "—",
    "Chưa thanh toán",
    "Chỉnh sửa",
    "HD-0211-0048",
    "02/11/2026 09:42",
    "Khách lẻ",
    "386.000 ₫",
    "Chuyển khoản",
    "Đang chờ chuyển khoản",
    "Đổi phương thức",
    "HD-0211-0047",
    "02/11/2026 09:28",
    "Khách lẻ",
    "245.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "—",
    "Đặt lại mật khẩu",
    "Mật khẩu hiện tại *",
    "••••••••••",
    "Mật khẩu mới *",
    "•••••",
    "Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng.",
    "Xác nhận mật khẩu mới *",
    "••••••••••",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### Đổi mật khẩu · Mật khẩu mới chỉ gồm khoảng trắng — 1:982

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-982) · 1440 × 900

```json
{
  "sourceNodeId": "1:982",
  "name": "Đổi mật khẩu · Mật khẩu mới chỉ gồm khoảng trắng",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:983",
      "name": "Frame",
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
      "id": "1:1001",
      "name": "Frame",
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
    },
    {
      "id": "1:1063",
      "name": "Frame",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Hủy đơn chưa thanh toán",
    "Quản lý đổi trả",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Đặt lại mật khẩu",
    "NA",
    "Nguyễn Minh Anh",
    "Nhân viên",
    "Quản lý bán hàng",
    "Danh sách hóa đơn",
    "Ngày 02/11/2026",
    "MÃ HÓA ĐƠN",
    "NGÀY BÁN",
    "KHÁCH HÀNG",
    "TỔNG TIỀN",
    "THANH TOÁN",
    "TRẠNG THÁI",
    "THAO TÁC",
    "HD-0211-0050",
    "02/11/2026 09:45",
    "Khách lẻ",
    "128.000 ₫",
    "—",
    "Chưa thanh toán",
    "Chỉnh sửa",
    "HD-0211-0048",
    "02/11/2026 09:42",
    "Khách lẻ",
    "386.000 ₫",
    "Chuyển khoản",
    "Đang chờ chuyển khoản",
    "Đổi phương thức",
    "HD-0211-0047",
    "02/11/2026 09:28",
    "Khách lẻ",
    "245.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "—",
    "Đặt lại mật khẩu",
    "Vui lòng điền đầy đủ các thông tin bắt buộc.",
    "Mật khẩu hiện tại *",
    "••••••••••",
    "Mật khẩu mới *",
    "••••••••",
    "Ít nhất 8 ký tự, không chỉ gồm khoảng trắng và khác mật khẩu hiện tại.",
    "Xác nhận mật khẩu mới *",
    "••••••••",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 39 · Đổi mật khẩu · Mật khẩu mới trùng mật khẩu hiện tại — 1:1097

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-1097) · 1440 × 900

```json
{
  "sourceNodeId": "1:1097",
  "name": "39 · Đổi mật khẩu · Mật khẩu mới trùng mật khẩu hiện tại",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:1098",
      "name": "Frame",
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
      "id": "1:1116",
      "name": "Frame",
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
    },
    {
      "id": "1:1178",
      "name": "Frame",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Hủy đơn chưa thanh toán",
    "Quản lý đổi trả",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Đặt lại mật khẩu",
    "NA",
    "Nguyễn Minh Anh",
    "Nhân viên",
    "Quản lý bán hàng",
    "Danh sách hóa đơn",
    "Ngày 02/11/2026",
    "MÃ HÓA ĐƠN",
    "NGÀY BÁN",
    "KHÁCH HÀNG",
    "TỔNG TIỀN",
    "THANH TOÁN",
    "TRẠNG THÁI",
    "THAO TÁC",
    "HD-0211-0050",
    "02/11/2026 09:45",
    "Khách lẻ",
    "128.000 ₫",
    "—",
    "Chưa thanh toán",
    "Chỉnh sửa",
    "HD-0211-0048",
    "02/11/2026 09:42",
    "Khách lẻ",
    "386.000 ₫",
    "Chuyển khoản",
    "Đang chờ chuyển khoản",
    "Đổi phương thức",
    "HD-0211-0047",
    "02/11/2026 09:28",
    "Khách lẻ",
    "245.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "—",
    "Đặt lại mật khẩu",
    "Mật khẩu hiện tại *",
    "••••••••••",
    "Mật khẩu mới *",
    "••••••••••",
    "Mật khẩu mới phải khác mật khẩu hiện tại.",
    "Xác nhận mật khẩu mới *",
    "••••••••••",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 40 · Đổi mật khẩu · Lỗi lưu — 1:1207

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-1207) · 1440 × 900

```json
{
  "sourceNodeId": "1:1207",
  "name": "40 · Đổi mật khẩu · Lỗi lưu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:1208",
      "name": "Frame",
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
      "id": "1:1226",
      "name": "Frame",
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
    },
    {
      "id": "1:1288",
      "name": "Frame",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Hủy đơn chưa thanh toán",
    "Quản lý đổi trả",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Đặt lại mật khẩu",
    "NA",
    "Nguyễn Minh Anh",
    "Nhân viên",
    "Quản lý bán hàng",
    "Danh sách hóa đơn",
    "Ngày 02/11/2026",
    "MÃ HÓA ĐƠN",
    "NGÀY BÁN",
    "KHÁCH HÀNG",
    "TỔNG TIỀN",
    "THANH TOÁN",
    "TRẠNG THÁI",
    "THAO TÁC",
    "HD-0211-0050",
    "02/11/2026 09:45",
    "Khách lẻ",
    "128.000 ₫",
    "—",
    "Chưa thanh toán",
    "Chỉnh sửa",
    "HD-0211-0048",
    "02/11/2026 09:42",
    "Khách lẻ",
    "386.000 ₫",
    "Chuyển khoản",
    "Đang chờ chuyển khoản",
    "Đổi phương thức",
    "HD-0211-0047",
    "02/11/2026 09:28",
    "Khách lẻ",
    "245.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "—",
    "Đặt lại mật khẩu",
    "Không thể lưu dữ liệu do lỗi hệ thống. Vui lòng thử lại.",
    "Mật khẩu hiện tại *",
    "••••••••••",
    "Mật khẩu mới *",
    "••••••••••",
    "Ít nhất 8 ký tự, không chỉ gồm khoảng trắng và khác mật khẩu hiện tại.",
    "Xác nhận mật khẩu mới *",
    "••••••••••",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### 41 · Đổi mật khẩu · Thành công — 1:1321

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-1321) · 1440 × 900

```json
{
  "sourceNodeId": "1:1321",
  "name": "41 · Đổi mật khẩu · Thành công",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:1322",
      "name": "Frame",
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
      "id": "1:1340",
      "name": "Frame",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Hủy đơn chưa thanh toán",
    "Quản lý đổi trả",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Đặt lại mật khẩu",
    "NA",
    "Nguyễn Minh Anh",
    "Nhân viên",
    "Đổi mật khẩu thành công.",
    "Quản lý bán hàng",
    "Danh sách hóa đơn",
    "Ngày 02/11/2026",
    "MÃ HÓA ĐƠN",
    "NGÀY BÁN",
    "KHÁCH HÀNG",
    "TỔNG TIỀN",
    "THANH TOÁN",
    "TRẠNG THÁI",
    "THAO TÁC",
    "HD-0211-0050",
    "02/11/2026 09:45",
    "Khách lẻ",
    "128.000 ₫",
    "—",
    "Chưa thanh toán",
    "Chỉnh sửa",
    "HD-0211-0048",
    "02/11/2026 09:42",
    "Khách lẻ",
    "386.000 ₫",
    "Chuyển khoản",
    "Đang chờ chuyển khoản",
    "Đổi phương thức",
    "HD-0211-0047",
    "02/11/2026 09:28",
    "Khách lẻ",
    "245.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "—"
  ]
}
```

### 42 · Đổi mật khẩu · Xác nhận bỏ thay đổi — 1:1406

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-1406) · 1440 × 900

```json
{
  "sourceNodeId": "1:1406",
  "name": "42 · Đổi mật khẩu · Xác nhận bỏ thay đổi",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:1407",
      "name": "Frame",
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
      "id": "1:1425",
      "name": "Frame",
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
    },
    {
      "id": "1:1487",
      "name": "Frame",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Tạo hóa đơn",
    "Hủy đơn chưa thanh toán",
    "Quản lý đổi trả",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Đặt lại mật khẩu",
    "NA",
    "Nguyễn Minh Anh",
    "Nhân viên",
    "Quản lý bán hàng",
    "Danh sách hóa đơn",
    "Ngày 02/11/2026",
    "MÃ HÓA ĐƠN",
    "NGÀY BÁN",
    "KHÁCH HÀNG",
    "TỔNG TIỀN",
    "THANH TOÁN",
    "TRẠNG THÁI",
    "THAO TÁC",
    "HD-0211-0050",
    "02/11/2026 09:45",
    "Khách lẻ",
    "128.000 ₫",
    "—",
    "Chưa thanh toán",
    "Chỉnh sửa",
    "HD-0211-0048",
    "02/11/2026 09:42",
    "Khách lẻ",
    "386.000 ₫",
    "Chuyển khoản",
    "Đang chờ chuyển khoản",
    "Đổi phương thức",
    "HD-0211-0047",
    "02/11/2026 09:28",
    "Khách lẻ",
    "245.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "—",
    "Đặt lại mật khẩu",
    "Mật khẩu hiện tại *",
    "••••••••••",
    "Mật khẩu mới *",
    "••••••••••",
    "Ít nhất 8 ký tự, không chỉ gồm khoảng trắng và khác mật khẩu hiện tại.",
    "Xác nhận mật khẩu mới *",
    "••••••••••",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### Đổi mật khẩu · Chủ cửa hàng · Ban đầu — 1:1517

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-1517) · 1440 × 900

```json
{
  "sourceNodeId": "1:1517",
  "name": "Đổi mật khẩu · Chủ cửa hàng · Ban đầu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:1518",
      "name": "Điều hướng chủ cửa hàng",
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
      "id": "1:1546",
      "name": "Không gian làm việc",
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
    },
    {
      "id": "1:1635",
      "name": "Đặt lại mật khẩu cá nhân",
      "x": 0,
      "y": 1,
      "width": 1440,
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Đặt lại mật khẩu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Quản lý bán hàng",
    "Theo dõi hóa đơn, tra cứu giao dịch và quản lý doanh thu cửa hàng.",
    "Doanh thu hôm nay",
    "12.840.000 ₫",
    "↑ 8,2% so với hôm qua",
    "Hóa đơn hoàn tất",
    "42",
    "Giá trị trung bình 305.714 ₫",
    "Chờ tiền về",
    "3 hóa đơn",
    "Tổng cần đối soát 1.236.000 ₫",
    "Danh sách hóa đơn",
    "Ngày 02/11/2026",
    "MÃ HÓA ĐƠN",
    "NGÀY BÁN",
    "KHÁCH HÀNG",
    "TỔNG TIỀN",
    "THANH TOÁN",
    "TRẠNG THÁI",
    "THAO TÁC",
    "HD-0211-0048",
    "02/11/2026 09:42",
    "Khách lẻ",
    "386.000 ₫",
    "Chuyển khoản",
    "Chờ tiền về",
    "Xem chi tiết",
    "HD-0211-0049",
    "02/11/2026 09:35",
    "Nguyễn Minh Anh",
    "1.900.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "Xem chi tiết",
    "HD-0211-0047",
    "02/11/2026 09:28",
    "Khách lẻ",
    "245.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "Xem chi tiết",
    "Đặt lại mật khẩu",
    "Mật khẩu hiện tại *",
    "Nhập mật khẩu hiện tại",
    "Mật khẩu mới *",
    "Nhập mật khẩu mới",
    "Ít nhất 8 ký tự, không chỉ gồm khoảng trắng và khác mật khẩu hiện tại.",
    "Xác nhận mật khẩu mới *",
    "Nhập lại mật khẩu mới",
    "Hủy bỏ",
    "Lưu"
  ]
}
```

### Đổi mật khẩu · Chủ cửa hàng · Thành công — 1:1664

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-1664) · 1440 × 900

```json
{
  "sourceNodeId": "1:1664",
  "name": "Đổi mật khẩu · Chủ cửa hàng · Thành công",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:1665",
      "name": "Điều hướng chủ cửa hàng",
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
      "id": "1:1693",
      "name": "Không gian làm việc",
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
    "Cửa hàng phụ kiện giày",
    "KHÔNG GIAN LÀM VIỆC",
    "Quản lý bán hàng",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Đặt lại mật khẩu",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Đổi mật khẩu thành công.",
    "Quản lý bán hàng",
    "Theo dõi hóa đơn, tra cứu giao dịch và quản lý doanh thu cửa hàng.",
    "Doanh thu hôm nay",
    "12.840.000 ₫",
    "↑ 8,2% so với hôm qua",
    "Hóa đơn hoàn tất",
    "42",
    "Giá trị trung bình 305.714 ₫",
    "Chờ tiền về",
    "3 hóa đơn",
    "Tổng cần đối soát 1.236.000 ₫",
    "Danh sách hóa đơn",
    "Ngày 02/11/2026",
    "MÃ HÓA ĐƠN",
    "NGÀY BÁN",
    "KHÁCH HÀNG",
    "TỔNG TIỀN",
    "THANH TOÁN",
    "TRẠNG THÁI",
    "THAO TÁC",
    "HD-0211-0048",
    "02/11/2026 09:42",
    "Khách lẻ",
    "386.000 ₫",
    "Chuyển khoản",
    "Chờ tiền về",
    "Xem chi tiết",
    "HD-0211-0049",
    "02/11/2026 09:35",
    "Nguyễn Minh Anh",
    "1.900.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "Xem chi tiết",
    "HD-0211-0047",
    "02/11/2026 09:28",
    "Khách lẻ",
    "245.000 ₫",
    "Tiền mặt",
    "Hoàn tất",
    "Xem chi tiết"
  ]
}
```

### Frame — 1:1787

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-1787) · 1422 × 900

```json
{
  "sourceNodeId": "1:1787",
  "name": "Frame",
  "viewport": {
    "width": 1422,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:1788",
      "name": "Frame",
      "x": 451,
      "y": 362,
      "width": 520,
      "height": 175,
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
    "Bỏ thay đổi?",
    "Các thay đổi chưa được lưu. Bạn có muốn bỏ các thay đổi ?",
    "Tiếp tục chỉnh sửa",
    "Bỏ thay đổi"
  ]
}
```
