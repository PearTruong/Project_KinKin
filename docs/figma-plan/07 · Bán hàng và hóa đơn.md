# 07 · Bán hàng và hóa đơn

## Cách triển khai

Phân biệt bán lẻ, bán sỉ, phê duyệt giảm giá, thanh toán tiền mặt, QR chờ tiền và thành công. Frame mô phỏng thông báo/cuộc trò chuyện Zalo là ngữ cảnh tích hợp, không mặc định là màn hình phải dựng trong ứng dụng POS. Những frame cùng tên có thể khác dữ liệu/trạng thái: dùng mã nguồn để đối chiếu. Thanh cuộn minh họa không cần dựng thành phần giả nếu dùng scroll trình duyệt.

## Cách đọc dữ liệu nguồn

Đây là bản trích xuất cấu trúc và văn bản, KHÔNG phải ảnh hoặc đặc tả hành vi đã được xác nhận. text là chuỗi giao diện theo thứ tự cây layer, không nhất thiết là thứ tự đọc trên màn hình. topLevelLayout là frame con trực tiếp với tọa độ tương đối, không phải toàn bộ CSS. Hidden text được loại theo trạng thái visible của chính nó và tổ tiên; chưa phân tích che phủ/mask. Không suy ra mọi chuỗi đều nhìn thấy được trên ảnh chỉ từ danh sách này. Mỗi trạng thái phải gắn đúng node ID. Giữ nguyên tên và số liệu nguồn; không tự sửa lỗi nội dung thiết kế.

Cần ảnh từng frame và assets gốc để kiểm tra pixel. Font/màu dùng chung xem tài liệu 01. Chi tiết hình học chưa trích xuất dùng truy vấn có mục tiêu, không đọc lại toàn module.

## Bán hàng

### Chi tiết đơn hàng cần phê duyệt — 1:7887

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-7887) · 393 × 852

```json
{
  "sourceNodeId": "1:7887",
  "name": "Chi tiết đơn hàng cần phê duyệt",
  "viewport": {
    "width": 393,
    "height": 852
  },
  "topLevelLayout": [
    {
      "id": "1:7888",
      "name": "Thanh trạng thái",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 44,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        24,
        0,
        24
      ],
      "gap": 0
    },
    {
      "id": "1:7897",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 44,
      "width": 393,
      "height": 64,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        16,
        0,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:7901",
      "name": "Nội dung chi tiết",
      "x": 0,
      "y": 108,
      "width": 393,
      "height": 645,
      "layout": "VERTICAL",
      "padding": [
        16,
        16,
        16,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:7945",
      "name": "Thao tác của chủ cửa hàng",
      "x": 0,
      "y": 753,
      "width": 393,
      "height": 72,
      "layout": "VERTICAL",
      "padding": [
        12,
        16,
        12,
        16
      ],
      "gap": 8
    },
    {
      "id": "1:7951",
      "name": "Thanh điều hướng hệ thống",
      "x": 0,
      "y": 825,
      "width": 393,
      "height": 34,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        0,
        8,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "9:41",
    "Chi tiết đơn hàng",
    "HD-0211-0049",
    "Thu Hà gửi yêu cầu • 09:41",
    "Sản phẩm",
    "3 mặt hàng • 27 sản phẩm",
    "Keo Dán Giày X2000",
    "KE001 • Lon",
    "10 × 78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 • Đôi",
    "12 × 35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 • Đôi",
    "5 × 160.000 ₫",
    "800.000 ₫",
    "Tổng trước giảm",
    "2.000.000 ₫",
    "Nhập số tiền muốn giảm",
    "Giảm trên hóa đơn (VND)",
    "100.000",
    "₫",
    "Thu Hà đề xuất giảm 100.000 ₫.",
    "Tổng sau giảm",
    "1.900.000 ₫",
    "Từ chối",
    "Phê duyệt"
  ]
}
```

### Đơn hàng chờ phê duyệt — 1:7953

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-7953) · 393 × 852

```json
{
  "sourceNodeId": "1:7953",
  "name": "Đơn hàng chờ phê duyệt",
  "viewport": {
    "width": 393,
    "height": 852
  },
  "topLevelLayout": [
    {
      "id": "1:7954",
      "name": "Thanh trạng thái",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 44,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        24,
        0,
        24
      ],
      "gap": 0
    },
    {
      "id": "1:7963",
      "name": "Thanh tiêu đề",
      "x": 0,
      "y": 44,
      "width": 393,
      "height": 64,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        16,
        0,
        16
      ],
      "gap": 0
    },
    {
      "id": "1:7971",
      "name": "Nội dung yêu cầu",
      "x": 0,
      "y": 108,
      "width": 393,
      "height": 710,
      "layout": "VERTICAL",
      "padding": [
        24,
        16,
        24,
        16
      ],
      "gap": 20
    },
    {
      "id": "1:8009",
      "name": "Thanh điều hướng hệ thống",
      "x": 0,
      "y": 818,
      "width": 393,
      "height": 34,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        0,
        8,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "9:41",
    "KinKin POS",
    "ML",
    "Xin chào, Mai Linh",
    "Chủ cửa hàng • Phê duyệt từ xa",
    "Có 1 đơn hàng cần phê duyệt",
    "Thu Hà vừa gửi yêu cầu giảm giá.",
    "HD-0211-0049",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng • 09:41",
    "Khách bán sỉ",
    "3 mặt hàng • 27 sản phẩm",
    "Tổng trước giảm",
    "2.000.000 ₫",
    "Đề xuất giảm",
    "100.000 ₫",
    "Sau giảm dự kiến",
    "1.900.000 ₫",
    "Xem chi tiết đơn hàng",
    "Mức giảm chưa được áp dụng. Vui lòng kiểm tra chi tiết đơn hàng trước khi phê duyệt."
  ]
}
```

### Đăng nhập KinKin POS — 1:8011

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-8011) · 393 × 852

```json
{
  "sourceNodeId": "1:8011",
  "name": "Đăng nhập KinKin POS",
  "viewport": {
    "width": 393,
    "height": 852
  },
  "topLevelLayout": [
    {
      "id": "1:8012",
      "name": "Thanh trạng thái",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 44,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        24,
        0,
        24
      ],
      "gap": 0
    },
    {
      "id": "1:8021",
      "name": "Nội dung đăng nhập",
      "x": 0,
      "y": 44,
      "width": 393,
      "height": 718,
      "layout": "VERTICAL",
      "padding": [
        40,
        20,
        24,
        20
      ],
      "gap": 28
    },
    {
      "id": "1:8053",
      "name": "Thanh điều hướng hệ thống",
      "x": 0,
      "y": 762,
      "width": 390,
      "height": 18,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        0,
        13,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "9:41",
    "KinKin POS",
    "Shoe Accessories Shop",
    "Đăng nhập",
    "Tài khoản chủ cửa hàng",
    "0909 123 456",
    "Mật khẩu",
    "••••••••••",
    "Đăng nhập",
    "Yêu cầu cho đơn HD-0211-0049",
    "Chỉ chủ cửa hàng được xem và phê duyệt mức giảm giá."
  ]
}
```

### Thông báo Zalo tới chủ cửa hàng — 1:8055

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-8055) · 393 × 852

```json
{
  "sourceNodeId": "1:8055",
  "name": "Thông báo Zalo tới chủ cửa hàng",
  "viewport": {
    "width": 393,
    "height": 852
  },
  "topLevelLayout": [
    {
      "id": "1:8056",
      "name": "Thanh trạng thái",
      "x": 0,
      "y": 0,
      "width": 393,
      "height": 44,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        24,
        0,
        24
      ],
      "gap": 0
    },
    {
      "id": "1:8065",
      "name": "Cuộc trò chuyện Zalo",
      "x": 0,
      "y": 44,
      "width": 393,
      "height": 64,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        16,
        0,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:8073",
      "name": "Nội dung hội thoại",
      "x": 0,
      "y": 108,
      "width": 393,
      "height": 650,
      "layout": "VERTICAL",
      "padding": [
        22,
        16,
        24,
        16
      ],
      "gap": 18
    },
    {
      "id": "1:8099",
      "name": "Soạn tin nhắn",
      "x": 0,
      "y": 758,
      "width": 393,
      "height": 60,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        16,
        0,
        16
      ],
      "gap": 12
    },
    {
      "id": "1:8107",
      "name": "Thanh điều hướng hệ thống",
      "x": 0,
      "y": 818,
      "width": 393,
      "height": 34,
      "layout": "HORIZONTAL",
      "padding": [
        0,
        0,
        8,
        0
      ],
      "gap": 0
    }
  ],
  "text": [
    "9:41",
    "KinKin POS",
    "Thông báo cửa hàng • Zalo",
    "Hôm nay, 09:41",
    "Gửi tới Mai Linh • Chủ cửa hàng",
    "KinKin POS",
    "Yêu cầu phê duyệt giảm giá",
    "Thu Hà gửi yêu cầu phê duyệt giảm giá cho đơn HD-0211-0049. Tổng 2.000.000 ₫, đề xuất giảm 100.000 ₫, dự kiến sau duyệt 1.900.000 ₫.",
    "Đơn hàng",
    "HD-0211-0049",
    "Khách bán sỉ • 3 mặt hàng • 27 sản phẩm",
    "Đăng nhập tài khoản chủ cửa hàng để xem chi tiết và phê duyệt yêu cầu.",
    "Đăng nhập KinKin POS",
    "Tin nhắn"
  ]
}
```

### Bán sỉ — Chuyển khoản thành công & in hóa đơn — 1:8109

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-8109) · 1440 × 900

```json
{
  "sourceNodeId": "1:8109",
  "name": "Bán sỉ — Chuyển khoản thành công & in hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:8110",
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
      "id": "1:8141",
      "name": "Không gian bán sỉ",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 767,
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Cấp hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Hoàn tất giao dịch bán sỉ",
    "Thanh toán hoàn tất",
    "Đã nhận chuyển khoản 1.900.000 ₫ · HD-0211-0049",
    "Cấp hóa đơn cho khách",
    "In hóa đơn giấy hoặc gửi qua Zalo theo lựa chọn của khách hàng.",
    "Hóa đơn giấy",
    "In 1 bản và giao cùng hàng hóa.",
    "In hóa đơn",
    "Zalo",
    "Gửi hóa đơn qua Zalo",
    "Số điện thoại nhận Zalo *",
    "0903 456 789",
    "Kiểm tra số điện thoại của Nguyễn Minh Anh trước khi gửi.",
    "Số điện thoại sẽ được lưu cùng hóa đơn.\nKhách chỉ nhận bản điện tử của giao dịch này.",
    "Gửi qua Zalo",
    "Hoàn tất",
    "Xem trước hóa đơn",
    "Bản gốc đã lưu",
    "Cửa hàng phụ kiện giày dép Kin Kin",
    "86/10 Hoàng Hoa Thám, Đà Nẵng\nĐiện thoại: 0123 456 789",
    "HÓA ĐƠN BÁN HÀNG",
    "HD-0211-0049",
    "Khách hàng",
    "Khách sỉ",
    "Điện thoại",
    "0903 456 789",
    "3 mặt hàng • 27 sản phẩm · Giá gốc",
    "Keo Dán Giày X2000",
    "780.000 ₫",
    "KE001 • Lon · 10 × 78.000 ₫",
    "Dây giày thun dẹt",
    "420.000 ₫",
    "DG002 • Đôi · 12 × 35.000 ₫",
    "Đế cao su",
    "800.000 ₫",
    "DE003 • Đôi · 5 × 160.000 ₫",
    "Tạm tính",
    "2.000.000 ₫",
    "Số tiền được giảm",
    "−100.000 ₫",
    "Tổng thanh toán",
    "1.900.000 ₫",
    "Chuyển khoản",
    "1.900.000 ₫",
    "Đã nhận chuyển khoản",
    "1.900.000 ₫"
  ]
}
```

### Bán sỉ — Thanh toán tiền mặt thành công & in hóa đơn — 1:8254

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-8254) · 1440 × 900

```json
{
  "sourceNodeId": "1:8254",
  "name": "Bán sỉ — Thanh toán tiền mặt thành công & in hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:8255",
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
      "id": "1:8286",
      "name": "Không gian bán sỉ",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 790,
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Cấp hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Hoàn tất giao dịch bán sỉ",
    "Thanh toán hoàn tất",
    "Đã thu tiền mặt · Khách đưa 2.000.000 ₫ · Đã trả lại 100.000 ₫",
    "Cấp hóa đơn cho khách",
    "In hóa đơn giấy hoặc gửi qua Zalo theo lựa chọn của khách hàng.",
    "Hóa đơn giấy",
    "In 1 bản và giao cùng hàng hóa.",
    "In hóa đơn",
    "Zalo",
    "Gửi hóa đơn qua Zalo",
    "Số điện thoại nhận Zalo *",
    "0903 456 789",
    "Kiểm tra số điện thoại của Nguyễn Minh Anh trước khi gửi.",
    "Số điện thoại sẽ được lưu cùng hóa đơn.\nKhách chỉ nhận bản điện tử của giao dịch này.",
    "Gửi qua Zalo",
    "Hoàn tất",
    "Xem trước hóa đơn",
    "Bản gốc đã lưu",
    "Cửa hàng phụ kiện giày dép Kin Kin",
    "86/10 Hoàng Hoa Thám, Đà Nẵng\nĐiện thoại: 0123 456 789",
    "HÓA ĐƠN BÁN HÀNG",
    "HD-0211-0049",
    "02/11/2026 • 09:35 • Thu Hà",
    "Khách hàng",
    "Khách sỉ",
    "Điện thoại",
    "0903 456 789",
    "3 mặt hàng • 27 sản phẩm · Giá gốc",
    "Keo Dán Giày X2000",
    "780.000 ₫",
    "KE001 • Lon · 10 × 78.000 ₫",
    "Dây giày thun dẹt",
    "420.000 ₫",
    "DG002 • Đôi · 12 × 35.000 ₫",
    "Đế cao su",
    "800.000 ₫",
    "DE003 • Đôi · 5 × 160.000 ₫",
    "Tạm tính",
    "2.000.000 ₫",
    "Số tiền được giảm",
    "−100.000 ₫",
    "Tổng thanh toán",
    "1.900.000 ₫",
    "Tiền khách đưa",
    "2.000.000 ₫",
    "Tiền thừa",
    "100.000 ₫"
  ]
}
```

### Bán sỉ — Chọn chuyển khoản QR — 1:8401

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-8401) · 1440 × 900

```json
{
  "sourceNodeId": "1:8401",
  "name": "Bán sỉ — Chọn chuyển khoản QR",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:8402",
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
      "id": "1:8433",
      "name": "Không gian bán sỉ",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 730,
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Thanh toán",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Thanh toán bán sỉ",
    "Quay lại Đơn hàng",
    "Phương thức thanh toán",
    "Tiền mặt",
    "Nhận tiền tại quầy",
    "Chuyển khoản QR",
    "Đối soát qua ngân hàng",
    "Nhận chuyển khoản QR",
    "Khách cần thanh toán",
    "1.900.000 ₫",
    "Nội dung chuyển khoản",
    "HD-0211-0049",
    "Tạo mã QR theo tổng sau giảm đã duyệt. Hệ thống chỉ xác nhận thanh toán khi ngân hàng báo có đủ 1.900.000 ₫.",
    "Tạo QR",
    "Tóm tắt hóa đơn",
    "HD-0211-0049",
    "Khách hàng",
    "Nguyễn Minh Anh",
    "Điện thoại",
    "0903 456 789",
    "Ngày bán",
    "02/11/2026 • 09:35",
    "3 mặt hàng • 27 sản phẩm",
    "Keo Dán Giày X2000",
    "780.000 ₫",
    "KE001 • Lon · 10 × 78.000 ₫",
    "Dây giày thun dẹt",
    "420.000 ₫",
    "DG002 • Đôi · 12 × 35.000 ₫",
    "Đế cao su",
    "800.000 ₫",
    "DE003 • Đôi · 5 × 160.000 ₫",
    "Tạm tính (giá gốc)",
    "2.000.000 ₫",
    "Số tiền được giảm ",
    "−100.000 ₫",
    "Tổng thanh toán",
    "1.900.000 ₫"
  ]
}
```

### Bán sỉ — Thanh toán tiền mặt — 1:8531

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-8531) · 1440 × 900

```json
{
  "sourceNodeId": "1:8531",
  "name": "Bán sỉ — Thanh toán tiền mặt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:8532",
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
      "id": "1:8563",
      "name": "Không gian bán sỉ",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 730,
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Thanh toán",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Thanh toán bán sỉ",
    "Quay lại Đơn hàng",
    "Phương thức thanh toán",
    "Tiền mặt",
    "Nhận tiền tại quầy",
    "Chuyển khoản QR",
    "Đối soát qua ngân hàng",
    "Nhận tiền mặt",
    "Kiểm đếm tiền khách đưa trước khi xác nhận thanh toán.",
    "Khách cần thanh toán",
    "1.900.000 ₫",
    "Tiền khách đưa *",
    "2.000.000 ₫",
    "Số tiền phải lớn hơn hoặc bằng 1.900.000 ₫.",
    "Tiền trả lại khách",
    "100.000 ₫",
    "Lưu và hoàn tất",
    "Tóm tắt hóa đơn",
    "HD-0211-0049",
    "Khách hàng",
    "Nguyễn Minh Anh",
    "Điện thoại",
    "0903 456 789",
    "Ngày bán",
    "02/11/2026 • 09:35",
    "3 mặt hàng • 27 sản phẩm",
    "Keo Dán Giày X2000",
    "780.000 ₫",
    "KE001 • Lon · 10 × 78.000 ₫",
    "Dây giày thun dẹt",
    "420.000 ₫",
    "DG002 • Đôi · 12 × 35.000 ₫",
    "Đế cao su",
    "800.000 ₫",
    "DE003 • Đôi · 5 × 160.000 ₫",
    "Tạm tính (giá gốc)",
    "2.000.000 ₫",
    "Số tiền được giảm",
    "−100.000 ₫",
    "Tổng thanh toán",
    "1.900.000 ₫"
  ]
}
```

### Tra cứu hóa đơn — Tìm kiếm — 1:8668

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-8668) · 1440 × 900

```json
{
  "sourceNodeId": "1:8668",
  "name": "Tra cứu hóa đơn — Tìm kiếm",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:8669",
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
      "id": "1:8700",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
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
    "Tra cứu hóa đơn",
    "Tìm và xem chi tiết hóa đơn",
    "Nhập ít nhất một trong hai trường: Mã đơn hàng hoặc Ngày trên hóa đơn.",
    "Mã đơn hàng",
    "Nhập mã đơn hàng",
    "Ngày trên hóa đơn",
    "dd/mm/yyyy",
    "Tra cứu hóa đơn",
    "Đặt lại",
    "Khi nhập cả hai tiêu chí, hóa đơn phải khớp cả mã đơn hàng và ngày trên hóa đơn."
  ]
}
```

### Tra cứu hóa đơn — Tìm kiếm — 1:8744

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-8744) · 1440 × 900

```json
{
  "sourceNodeId": "1:8744",
  "name": "Tra cứu hóa đơn — Tìm kiếm",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:8745",
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
      "id": "1:8776",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
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
    "Tra cứu hóa đơn",
    "Tra cứu chi tiết hóa đơn",
    "Nhập ít nhất một trong hai trường: Mã đơn hàng hoặc Ngày trên hóa đơn.",
    "Mã đơn hàng",
    "HD-0211-0049",
    "Ngày trên hóa đơn",
    "02/11/2026",
    "Tra cứu hóa đơn",
    "Đặt lại",
    "Hóa đơn tìm thấy",
    "HD-0211-0049",
    "Hoàn tất",
    "Khách Bán sỉ",
    "Ngày bán: 02/11/2026 • 09:35  |  Nhân viên: Thu Hà",
    "Tổng thanh toán",
    "1.900.000 ₫"
  ]
}
```

### Tra cứu hóa đơn Lỗi tìm kiếm — 1:8836

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-8836) · 1440 × 900

```json
{
  "sourceNodeId": "1:8836",
  "name": "Tra cứu hóa đơn Lỗi tìm kiếm",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:8837",
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
      "id": "1:8868",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
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
    "Tra cứu hóa đơn",
    "Tìm và xem chi tiết hóa đơn",
    "Nhập ít nhất một trong hai trường: Mã đơn hàng hoặc Ngày trên hóa đơn.",
    "Mã đơn hàng",
    "Nhập mã đơn hàng",
    "Ngày trên hóa đơn",
    "dd/mm/yyyy",
    "Tra cứu hóa đơn",
    "Đặt lại",
    "Tra cứu thất bại"
  ]
}
```

### Chi tiết hóa đơn — 1:8916

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-8916) · 1440 × 900

```json
{
  "sourceNodeId": "1:8916",
  "name": "Chi tiết hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:8917",
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
      "id": "1:8948",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý bán hàng / Chi tiết hóa đơn",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Chi tiết hóa đơn",
    "HD-0211-0049",
    "Hoàn tất",
    "Khách Bán sỉ",
    "Ngày bán: 02/11/2026 • 09:35  |  Nhân viên: Thu Hà",
    "Tổng thanh toán",
    "1.900.000 ₫",
    "KHÁCH HÀNG",
    "Nguyễn Minh Anh",
    "0903 456 789",
    "THÔNG TIN BÁN HÀNG",
    "Bán sỉ • Chi nhánh Nguyễn Trãi",
    "Chi tiết sản phẩm",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 • Lon",
    "10",
    "74.100 ₫",
    "741.000 ₫",
    "Dây giày thun dẹt",
    "DG002 • Đôi",
    "12",
    "33.250 ₫",
    "399.000 ₫",
    "Đế cao su",
    "DE003 • Đôi",
    "5",
    "152.000 ₫",
    "760.000 ₫",
    "Thông tin thanh toán",
    "Tổng giá gốc",
    "2.000.000 ₫",
    "Giảm giá đã duyệt (5%)",
    "−100.000 ₫",
    "Tổng thanh toán",
    "1.900.000 ₫",
    "Phương thức",
    "Tiền mặt",
    "Khách đưa",
    "2.000.000 ₫",
    "Đã trả lại",
    "100.000 ₫"
  ]
}
```

### Thanh toán thành công và cấp hóa đơn — 1:9054

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-9054) · 1440 × 900

```json
{
  "sourceNodeId": "1:9054",
  "name": "Thanh toán thành công và cấp hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:9055",
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
      "id": "1:9086",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Cấp hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Hoàn tất giao dịch",
    "Hoàn tất",
    "Thanh toán hoàn tất",
    "Cấp hóa đơn cho khách",
    "In hóa đơn giấy hoặc gửi qua Zalo theo lựa chọn của khách hàng.",
    "Hóa đơn giấy",
    "In 1 bản và giao cùng hàng hóa.",
    "In hóa đơn",
    "Zalo",
    "Gửi hóa đơn qua Zalo",
    "Số điện thoại nhận Zalo *",
    "Nhập số điện thoại của khách",
    "Vui lòng nhập số điện thoại để gửi hóa đơn qua Zalo.",
    "Số điện thoại sẽ được lưu cùng hóa đơn.\nKhách chỉ nhận bản điện tử của giao dịch này.",
    "Gửi qua Zalo",
    "Hoàn tất",
    "Xem trước hóa đơn",
    "Bản gốc đã lưu",
    "Cửa hàng phụ kiện giày dép Kin Kin",
    "86/10 Hoàng Hoa Thám, Đà Nẵng\nĐiện thoại: 0123 456 789",
    "HÓA ĐƠN BÁN HÀNG",
    "HD-0211-0048",
    "02/11/2026 • 09:42 • Thu Hà",
    "Khách hàng",
    "Khách lẻ",
    "Keo Dán Giày X2000",
    "2 × 78.000 ₫",
    "156.000 ₫",
    "Dây giày thun dẹt",
    "2 × 35.000 ₫",
    "70.000 ₫",
    "Đế cao su",
    "1 × 160.000 ₫",
    "160.000 ₫",
    "Tổng thanh toán",
    "386.000 ₫",
    "Tiền mặt",
    "500.000 ₫",
    "Tiền thừa",
    "114.000 ₫"
  ]
}
```

### Thanh toán thành công và cấp hóa đơn — 1:9202

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-9202) · 1440 × 900

```json
{
  "sourceNodeId": "1:9202",
  "name": "Thanh toán thành công và cấp hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:9203",
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
      "id": "1:9234",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Cấp hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Thanh toán chưa hoàn tất",
    "Thanh toán thất bại",
    "Cấp hóa đơn cho khách",
    "In hóa đơn giấy hoặc gửi qua Zalo theo lựa chọn của khách hàng.",
    "Hóa đơn giấy",
    "In 1 bản và giao cùng hàng hóa.",
    "In hóa đơn",
    "Zalo",
    "Gửi hóa đơn qua Zalo",
    "Số điện thoại nhận Zalo *",
    "Nhập số điện thoại của khách",
    "Vui lòng nhập số điện thoại để gửi hóa đơn qua Zalo.",
    "Số điện thoại sẽ được lưu cùng hóa đơn.\nKhách chỉ nhận bản điện tử của giao dịch này.",
    "Gửi qua Zalo",
    "Thử lại thanh toán",
    "Xem trước hóa đơn",
    "Bản xem trước",
    "Cửa hàng phụ kiện giày dép Kin Kin",
    "86/10 Hoàng Hoa Thám, Đà Nẵng\nĐiện thoại: 0123 456 789",
    "HÓA ĐƠN BÁN HÀNG",
    "HD-0211-0048",
    "02/11/2026 • 09:42 • Thu Hà",
    "Khách hàng",
    "Khách lẻ",
    "Keo Dán Giày X2000",
    "2 × 78.000 ₫",
    "156.000 ₫",
    "Dây giày thun dẹt",
    "2 × 35.000 ₫",
    "70.000 ₫",
    "Đế cao su",
    "1 × 160.000 ₫",
    "160.000 ₫",
    "Tổng thanh toán",
    "386.000 ₫",
    "Tiền mặt",
    "500.000 ₫",
    "Tiền thừa",
    "114.000 ₫"
  ]
}
```

### Thanh toán thành công và cấp hóa đơn — 1:9348

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-9348) · 1440 × 900

```json
{
  "sourceNodeId": "1:9348",
  "name": "Thanh toán thành công và cấp hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:9349",
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
      "id": "1:9380",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Cấp hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Thanh toán chưa hoàn tất",
    "Thanh toán thất bại",
    "Cấp hóa đơn cho khách",
    "In hóa đơn giấy hoặc gửi qua Zalo theo lựa chọn của khách hàng.",
    "Hóa đơn giấy",
    "In 1 bản và giao cùng hàng hóa.",
    "In hóa đơn",
    "Zalo",
    "Gửi hóa đơn qua Zalo",
    "Số điện thoại nhận Zalo *",
    "Nhập số điện thoại của khách",
    "Vui lòng nhập số điện thoại để gửi hóa đơn qua Zalo.",
    "Số điện thoại sẽ được lưu cùng hóa đơn.\nKhách chỉ nhận bản điện tử của giao dịch này.",
    "Gửi qua Zalo",
    "Thử lại thanh toán",
    "Xem trước hóa đơn",
    "Bản gốc đã lưu",
    "Cửa hàng phụ kiện giày dép Kin Kin",
    "86/10 Hoàng Hoa Thám, Đà Nẵng\nĐiện thoại: 0123 456 789",
    "HÓA ĐƠN BÁN HÀNG",
    "HD-0211-0049",
    "02/11/2026 • 09:35 • Thu Hà",
    "Khách hàng",
    "Khách sỉ",
    "Điện thoại",
    "0903 456 789",
    "3 mặt hàng • 27 sản phẩm · Giá gốc",
    "Keo Dán Giày X2000",
    "780.000 ₫",
    "KE001 • Lon · 10 × 78.000 ₫",
    "Dây giày thun dẹt",
    "420.000 ₫",
    "DG002 • Đôi · 12 × 35.000 ₫",
    "Đế cao su",
    "800.000 ₫",
    "DE003 • Đôi · 5 × 160.000 ₫",
    "Tạm tính",
    "2.000.000 ₫",
    "Số tiền được giảm",
    "−100.000 ₫",
    "Tổng thanh toán",
    "1.900.000 ₫",
    "Tiền khách đưa",
    "2.000.000 ₫",
    "Tiền thừa",
    "100.000 ₫"
  ]
}
```

### Thanh toán thành công và cấp hóa đơn — 1:9505

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-9505) · 1440 × 900

```json
{
  "sourceNodeId": "1:9505",
  "name": "Thanh toán thành công và cấp hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:9506",
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
      "id": "1:9537",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Cấp hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Thanh toán chưa hoàn tất",
    "Thất bại",
    "Thanh toán thất bại",
    "Cấp hóa đơn cho khách",
    "In hóa đơn giấy hoặc gửi qua Zalo theo lựa chọn của khách hàng.",
    "Hóa đơn giấy",
    "In 1 bản và giao cùng hàng hóa.",
    "In hóa đơn",
    "Zalo",
    "Gửi hóa đơn qua Zalo",
    "Số điện thoại nhận Zalo *",
    "Nhập số điện thoại của khách",
    "Vui lòng nhập số điện thoại để gửi hóa đơn qua Zalo.",
    "Số điện thoại sẽ được lưu cùng hóa đơn.\nKhách chỉ nhận bản điện tử của giao dịch này.",
    "Gửi qua Zalo",
    "Thử lại thanh toán",
    "Xem trước hóa đơn",
    "Bản xem trước",
    "Cửa hàng phụ kiện giày dép Kin Kin",
    "86/10 Hoàng Hoa Thám, Đà Nẵng\nĐiện thoại: 0123 456 789",
    "HÓA ĐƠN BÁN HÀNG",
    "HD-0211-0048",
    "02/11/2026 • 09:42 • Thu Hà",
    "Khách hàng",
    "Khách lẻ",
    "Keo Dán Giày X2000",
    "2 × 78.000 ₫",
    "156.000 ₫",
    "Dây giày thun dẹt",
    "2 × 35.000 ₫",
    "70.000 ₫",
    "Đế cao su",
    "1 × 160.000 ₫",
    "160.000 ₫",
    "Tổng thanh toán",
    "386.000 ₫",
    "Chuyển khoản",
    "386.000 ₫"
  ]
}
```

### Thanh toán thành công và cấp hóa đơn — 1:9651

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-9651) · 1440 × 900

```json
{
  "sourceNodeId": "1:9651",
  "name": "Thanh toán thành công và cấp hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:9652",
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
      "id": "1:9683",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Cấp hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Hoàn tất giao dịch",
    "Hoàn tất",
    "Thanh toán hoàn tất",
    "Cấp hóa đơn cho khách",
    "In hóa đơn giấy hoặc gửi qua Zalo theo lựa chọn của khách hàng.",
    "Hóa đơn giấy",
    "In 1 bản và giao cùng hàng hóa.",
    "In hóa đơn",
    "Zalo",
    "Gửi hóa đơn qua Zalo",
    "Số điện thoại nhận Zalo *",
    "Nhập số điện thoại của khách",
    "Vui lòng nhập số điện thoại để gửi hóa đơn qua Zalo.",
    "Số điện thoại sẽ được lưu cùng hóa đơn.\nKhách chỉ nhận bản điện tử của giao dịch này.",
    "Gửi qua Zalo",
    "Hoàn tất",
    "Xem trước hóa đơn",
    "Bản gốc đã lưu",
    "Cửa hàng phụ kiện giày dép Kin Kin",
    "86/10 Hoàng Hoa Thám, Đà Nẵng\nĐiện thoại: 0123 456 789",
    "HÓA ĐƠN BÁN HÀNG",
    "HD-0211-0048",
    "02/11/2026 • 09:42 • Thu Hà",
    "Khách hàng",
    "Khách lẻ",
    "Keo Dán Giày X2000",
    "2 × 78.000 ₫",
    "156.000 ₫",
    "Dây giày thun dẹt",
    "2 × 35.000 ₫",
    "70.000 ₫",
    "Đế cao su",
    "1 × 160.000 ₫",
    "160.000 ₫",
    "Tổng thanh toán",
    "386.000 ₫",
    "Chuyển khoản",
    "386.000 ₫"
  ]
}
```

### Chuyển khoản QR chờ tiền về — 1:9797

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-9797) · 1440 × 900

```json
{
  "sourceNodeId": "1:9797",
  "name": "Chuyển khoản QR chờ tiền về",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:9798",
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
      "id": "1:9831",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Thanh toán",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Thanh toán chuyển khoản",
    "Quét mã để thanh toán",
    "MÃ MẪU",
    "QR minh họa, không phải địa chỉ thanh toán thực tế.",
    "NGÂN HÀNG THỤ HƯỞNG",
    "Vietcombank",
    "Cửa hàng phụ kiện giày dép Kin Kin",
    "0123 456 789  ",
    "Số tiền chính xác",
    "386.000 ₫",
    "Nội dung chuyển khoản",
    "HD-0211-0048",
    "Đơn chờ thanh toán chuyển khoản",
    "Đang chờ tiền về · Chưa nhận 1.900.000 ₫",
    "Chưa hoàn tất thanh toán. Chỉ bàn giao hàng khi ngân hàng xác nhận đã nhận đủ tiền.",
    "Hoàn tất",
    "Chọn lại phương thức",
    "Tóm tắt hóa đơn",
    "HD-0211-0048",
    "Khách hàng",
    "Khách lẻ",
    "Ngày bán",
    "02/11/2026 • 09:42",
    "Keo Dán Giày X2000",
    "2 × 78.000 ₫",
    "156.000 ₫",
    "Dây giày thun dẹt",
    "2 × 35.000 ₫",
    "70.000 ₫",
    "Đế cao su",
    "1 × 160.000 ₫",
    "160.000 ₫",
    "Tạm tính (5 sản phẩm)",
    "386.000 ₫",
    "Giảm giá",
    "0 ₫",
    "Tổng thanh toán",
    "386.000 ₫"
  ]
}
```

### Thanh toán chuyển khoản — 1:9945

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-9945) · 1440 × 900

```json
{
  "sourceNodeId": "1:9945",
  "name": "Thanh toán chuyển khoản",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:9946",
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
      "id": "1:9977",
      "name": "Workspace",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 621,
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Thanh toán",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Thanh toán",
    "Quay lại Đơn hàng",
    "Phương thức thanh toán",
    "Tiền mặt",
    "Nhận tiền tại quầy",
    "Chuyển khoản QR",
    "Đối soát qua ngân hàng",
    "Nhận chuyển khoản QR",
    "Khách cần thanh toán",
    "386.000 ₫",
    "Tạo QR",
    "Tóm tắt hóa đơn",
    "HD-0211-0048",
    "Khách hàng",
    "Khách bán lẻ",
    "Ngày bán",
    "02/11/2026 • 09:42",
    "Keo Dán Giày X2000",
    "2 × 78.000 ₫",
    "156.000 ₫",
    "Dây giày thun dẹt",
    "2 × 35.000 ₫",
    "70.000 ₫",
    "Đế cao su",
    "1 × 160.000 ₫",
    "160.000 ₫",
    "Tạm tính (5 sản phẩm)",
    "386.000 ₫",
    "Giảm giá",
    "0 ₫",
    "Tổng thanh toán",
    "386.000 ₫"
  ]
}
```

### Thanh toán tiền mặt — 1:10075

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-10075) · 1440 × 900

```json
{
  "sourceNodeId": "1:10075",
  "name": "Thanh toán tiền mặt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:10076",
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
      "id": "1:10107",
      "name": "Workspace",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 622,
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Thanh toán",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Thanh toán",
    "Quay lại Đơn hàng",
    "Phương thức thanh toán",
    "Tiền mặt",
    "Nhận tiền tại quầy",
    "Chuyển khoản QR",
    "Đối soát qua ngân hàng",
    "Nhận tiền mặt",
    "Kiểm đếm tiền khách đưa trước khi xác nhận thanh toán.",
    "Khách cần thanh toán",
    "386.000 ₫",
    "Tiền khách đưa *",
    "500.000 ₫",
    "Số tiền phải lớn hơn hoặc bằng 386.000 ₫.",
    "Tiền trả lại khách",
    "114.000 ₫",
    "Lưu và hoàn tất",
    "Tóm tắt hóa đơn",
    "HD-0211-0048",
    "Khách hàng",
    "Khách bán lẻ",
    "Ngày bán",
    "02/11/2026 • 09:42",
    "Keo Dán Giày X2000",
    "2 × 78.000 ₫",
    "156.000 ₫",
    "Dây giày thun dẹt",
    "2 × 35.000 ₫",
    "70.000 ₫",
    "Đế cao su",
    "1 × 160.000 ₫",
    "160.000 ₫",
    "Tạm tính (5 sản phẩm)",
    "386.000 ₫",
    "Giảm giá",
    "0 ₫",
    "Tổng thanh toán",
    "386.000 ₫"
  ]
}
```

### Khách mua sỉ và duyệt giảm giá khi chủ cửa hàng ở quầy — 1:10215

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-10215) · 1440 × 900

```json
{
  "sourceNodeId": "1:10215",
  "name": "Khách mua sỉ và duyệt giảm giá khi chủ cửa hàng ở quầy",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:10216",
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
      "id": "1:10247",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Tạo hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Tạo hóa đơn bán sỉ",
    "Sản phẩm đã chọn",
    "3 mặt hàng • 27 sản phẩm",
    "Khách bán lẻ",
    "Khách bán sỉ",
    "Khách bán sỉ",
    "Thêm khách",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 • Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 • Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 • Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Chỉnh sửa đơn hàng",
    "Tổng thanh toán hiện tại",
    "2.000.000 ₫",
    "Tiếp tục với giá gốc",
    "Chọn cách duyệt giá sỉ",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Xác thực chủ cửa hàng",
    "Chỉ chủ cửa hàng được duyệt giá",
    "Tài khoản chủ cửa hàng",
    "Mai Linh • 0909 123 456",
    "Mật khẩu xác thực *",
    "••••••••••",
    "Xác thực chủ cửa hàng"
  ]
}
```

### Khách mua sỉ và duyệt giảm giá khi chủ cửa hàng ở quầy — 1:10362

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-10362) · 1440 × 900

```json
{
  "sourceNodeId": "1:10362",
  "name": "Khách mua sỉ và duyệt giảm giá khi chủ cửa hàng ở quầy",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:10363",
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
      "id": "1:10394",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Tạo hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Tạo hóa đơn bán sỉ",
    "Sản phẩm đã chọn",
    "3 mặt hàng • 27 sản phẩm",
    "Khách bán lẻ",
    "Khách bán sỉ",
    "Khách bán sỉ",
    "Thêm khách",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 • Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 • Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 • Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Chỉnh sửa đơn hàng",
    "Tổng thanh toán hiện tại",
    "2.000.000 ₫",
    "Tiếp tục với giá gốc",
    "Chọn cách duyệt giá sỉ",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Xác thực chủ cửa hàng",
    "Chỉ chủ cửa hàng được duyệt giá",
    "Tài khoản chủ cửa hàng",
    "Mai Linh • 0909 123 456",
    "Mật khẩu xác thực *",
    "••••••••••",
    "Nhập mức giá muốn giảm ",
    "Giảm trên hóa đơn ",
    "100.000",
    "Đơn vị",
    "₫  ",
    "Tổng theo giá gốc",
    "2.000.000 ₫",
    "Giảm giá đề xuất",
    "−100.000 ₫",
    "Tổng sau giảm",
    "1.900.000 ₫",
    "Từ chối",
    "Phê duyệt"
  ]
}
```

### Tạo hóa đơn bán lẻ — 1:10533

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-10533) · 1440 × 900

```json
{
  "sourceNodeId": "1:10533",
  "name": "Tạo hóa đơn bán lẻ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:10534",
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
      "id": "1:10565",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Tạo hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Tạo hóa đơn bán lẻ",
    "Số lượng tồn kho không đủ để xuất bán!",
    "Chai xịt chống thấm nước hiện còn 0 chai. Sản phẩm chưa được thêm vào Đơn hàng.",
    "Tìm sản phẩm",
    "Nhập tên, mã sản phẩm ",
    "Tất cả",
    "Đế giày",
    "Keo",
    "Pho",
    "Vải lót",
    "Lót cao su non",
    "Dây giày",
    "Đinh",
    "Thun giày",
    "Chai xịt",
    "Đế cao su",
    "DE003 • Đôi",
    "160.000 ₫",
    "Còn 24",
    "Dây giày thun dẹt",
    "DG002 • Đôi",
    "35.000 ₫",
    "Còn 72",
    "Keo Dán Giày X2000",
    "KE001 • Lon",
    "78.000 ₫",
    "Còn 48",
    "Đinh giày",
    "DI004 • Gói",
    "4.500 ₫",
    "Còn 120",
    "Thun giày",
    "TG005 • Mét",
    "6.000 ₫",
    "Còn 96",
    "Chai xịt chống thấm nước",
    "CX006 • Chai",
    "62.000 ₫",
    "Hết hàng",
    "Đế da",
    "DE004 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đế PVC",
    "DE005 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đế TPU",
    "DE006 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Keo Dán Giày Scotch",
    "KE002 • Lon",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Keo Dán Giày SeaGlue",
    "KE003 • Lon",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho da thuộc thực vật",
    "PH001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho vải tẩm nhựa (thermoplastic)",
    "PH002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho sợi tổng hợp tẩm keo",
    "PH003 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho cao su/nhựa dẻo",
    "PH004 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải lưới",
    "VL001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải Tricot",
    "VL002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải Polyester (PE)",
    "VL003 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Lót da",
    "LT001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Lót cao su non",
    "LT002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Dây giày thun bản tròn",
    "DG003 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Chai xịt dưỡng và phục hồi da lộn",
    "CX007 • Chai",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Chai xịt khử mùi và kháng khuẩn cho giày",
    "CX008 • Chai",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đơn hàng",
    "3 mặt hàng • 5 sản phẩm",
    "Khách bán lẻ",
    "Khách bán sỉ",
    "Khách bán lẻ",
    "Keo Dán Giày X2000",
    "78.000 ₫",
    "−",
    "2",
    "+",
    "156.000 ₫",
    "✓ Đủ hàng • Tồn kho: 48",
    "Dây giày thun dẹt",
    "35.000 ₫",
    "−",
    "2",
    "+",
    "70.000 ₫",
    "✓ Đủ hàng • Tồn kho: 72",
    "Đế cao su",
    "160.000 ₫",
    "−",
    "1",
    "+",
    "160.000 ₫",
    "✓ Đủ hàng • Tồn kho: 24",
    "Tạm tính",
    "386.000 ₫",
    "Giảm giá",
    "0 ₫",
    "Tổng thanh toán",
    "386.000 ₫",
    "Thanh toán • 386.000 ₫",
    "Đơn bán lẻ không áp dụng đề xuất giảm giá."
  ]
}
```

### Tạo hóa đơn bán lẻ — 1:11007

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-11007) · 1440 × 900

```json
{
  "sourceNodeId": "1:11007",
  "name": "Tạo hóa đơn bán lẻ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:11008",
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
      "id": "1:11039",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Tạo hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Tạo hóa đơn bán lẻ",
    "Số lượng không hợp lệ!",
    "Keo Dán Giày X2000 hiện còn 0 chai. Sản phẩm chưa được thêm vào Đơn hàng.",
    "Tìm sản phẩm",
    "Nhập tên, mã sản phẩm ",
    "Tất cả",
    "Đế giày",
    "Keo",
    "Pho",
    "Vải lót",
    "Lót cao su non",
    "Dây giày",
    "Đinh",
    "Thun giày",
    "Chai xịt",
    "Đế cao su",
    "DE003 • Đôi",
    "160.000 ₫",
    "Còn 24",
    "Dây giày thun dẹt",
    "DG002 • Đôi",
    "35.000 ₫",
    "Còn 72",
    "Keo Dán Giày X2000",
    "KE001 • Lon",
    "78.000 ₫",
    "Còn 48",
    "Đinh giày",
    "DI004 • Gói",
    "4.500 ₫",
    "Còn 120",
    "Thun giày",
    "TG005 • Mét",
    "6.000 ₫",
    "Còn 96",
    "Chai xịt chống thấm nước",
    "CX006 • Chai",
    "62.000 ₫",
    "Hết hàng",
    "Đế da",
    "DE004 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đế PVC",
    "DE005 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đế TPU",
    "DE006 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Keo Dán Giày Scotch",
    "KE002 • Lon",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Keo Dán Giày SeaGlue",
    "KE003 • Lon",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho da thuộc thực vật",
    "PH001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho vải tẩm nhựa (thermoplastic)",
    "PH002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho sợi tổng hợp tẩm keo",
    "PH003 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho cao su/nhựa dẻo",
    "PH004 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải lưới",
    "VL001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải Tricot",
    "VL002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải Polyester (PE)",
    "VL003 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Lót da",
    "LT001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Lót cao su non",
    "LT002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Dây giày thun bản tròn",
    "DG003 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Chai xịt dưỡng và phục hồi da lộn",
    "CX007 • Chai",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Chai xịt khử mùi và kháng khuẩn cho giày",
    "CX008 • Chai",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đơn hàng",
    "3 mặt hàng • 5 sản phẩm",
    "Khách bán lẻ",
    "Khách bán sỉ",
    "Khách bán lẻ",
    "Keo Dán Giày X2000",
    "78.000 ₫",
    "−",
    "0",
    "+",
    "156.000 ₫",
    "✓ Đủ hàng • Tồn kho: 48",
    "Dây giày thun dẹt",
    "35.000 ₫",
    "−",
    "2",
    "+",
    "70.000 ₫",
    "✓ Đủ hàng • Tồn kho: 72",
    "Đế cao su",
    "160.000 ₫",
    "−",
    "1",
    "+",
    "160.000 ₫",
    "✓ Đủ hàng • Tồn kho: 24",
    "Tạm tính",
    "386.000 ₫",
    "Giảm giá",
    "0 ₫",
    "Tổng thanh toán",
    "386.000 ₫",
    "Thanh toán • 386.000 ₫",
    "Đơn bán lẻ không áp dụng đề xuất giảm giá."
  ]
}
```

### Tạo hóa đơn bán lẻ — 1:11481

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-11481) · 1440 × 900

```json
{
  "sourceNodeId": "1:11481",
  "name": "Tạo hóa đơn bán lẻ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:11482",
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
      "id": "1:11513",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Tạo hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Tạo hóa đơn bán lẻ",
    "Số lượng tồn kho không đủ để xuất bán!",
    "Chai xịt chống thấm nước hiện còn 0 chai. Sản phẩm chưa được thêm vào Đơn hàng.",
    "Tìm sản phẩm",
    "Nhập tên, mã sản phẩm ",
    "Tất cả",
    "Đế giày",
    "Keo",
    "Pho",
    "Vải lót",
    "Lót cao su non",
    "Dây giày",
    "Đinh",
    "Thun giày",
    "Chai xịt",
    "Đế cao su",
    "DE003 • Đôi",
    "160.000 ₫",
    "Còn 24",
    "Dây giày thun dẹt",
    "DG002 • Đôi",
    "35.000 ₫",
    "Còn 72",
    "Keo Dán Giày X2000",
    "KE001 • Lon",
    "78.000 ₫",
    "Còn 48",
    "Đinh giày",
    "DI004 • Gói",
    "4.500 ₫",
    "Còn 120",
    "Thun giày",
    "TG005 • Mét",
    "6.000 ₫",
    "Còn 96",
    "Chai xịt chống thấm nước",
    "CX006 • Chai",
    "62.000 ₫",
    "Hết hàng",
    "Đế da",
    "DE004 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đế PVC",
    "DE005 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đế TPU",
    "DE006 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Keo Dán Giày Scotch",
    "KE002 • Lon",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Keo Dán Giày SeaGlue",
    "KE003 • Lon",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho da thuộc thực vật",
    "PH001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho vải tẩm nhựa (thermoplastic)",
    "PH002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho sợi tổng hợp tẩm keo",
    "PH003 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho cao su/nhựa dẻo",
    "PH004 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải lưới",
    "VL001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải Tricot",
    "VL002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải Polyester (PE)",
    "VL003 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Lót da",
    "LT001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Lót cao su non",
    "LT002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Dây giày thun bản tròn",
    "DG003 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Chai xịt dưỡng và phục hồi da lộn",
    "CX007 • Chai",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Chai xịt khử mùi và kháng khuẩn cho giày",
    "CX008 • Chai",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đơn hàng",
    "3 mặt hàng • 5 sản phẩm",
    "Khách bán lẻ",
    "Khách bán sỉ",
    "Khách bán lẻ",
    "Keo Dán Giày X2000",
    "78.000 ₫",
    "−",
    "2",
    "+",
    "156.000 ₫",
    "✓ Đủ hàng • Tồn kho: 48",
    "Dây giày thun dẹt",
    "35.000 ₫",
    "−",
    "2",
    "+",
    "70.000 ₫",
    "✓ Đủ hàng • Tồn kho: 72",
    "Đế cao su",
    "160.000 ₫",
    "−",
    "1",
    "+",
    "160.000 ₫",
    "✓ Đủ hàng • Tồn kho: 24",
    "Tạm tính",
    "386.000 ₫",
    "Giảm giá",
    "0 ₫",
    "Tổng thanh toán",
    "386.000 ₫",
    "Thanh toán • 386.000 ₫",
    "Đơn bán lẻ không áp dụng đề xuất giảm giá."
  ]
}
```

### Tạo hóa đơn bán lẻ — 1:11953

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-11953) · 1440 × 900

```json
{
  "sourceNodeId": "1:11953",
  "name": "Tạo hóa đơn bán lẻ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:11954",
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
      "id": "1:11985",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Tạo hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Tạo hóa đơn bán lẻ",
    "Số lượng không hợp lệ!",
    "Keo Dán Giày X2000 hiện còn 0 chai. Sản phẩm chưa được thêm vào Đơn hàng.",
    "Tìm sản phẩm",
    "Nhập tên, mã sản phẩm ",
    "Tất cả",
    "Đế giày",
    "Keo",
    "Pho",
    "Vải lót",
    "Lót cao su non",
    "Dây giày",
    "Đinh",
    "Thun giày",
    "Chai xịt",
    "Đế cao su",
    "DE003 • Đôi",
    "160.000 ₫",
    "Còn 24",
    "Dây giày thun dẹt",
    "DG002 • Đôi",
    "35.000 ₫",
    "Còn 72",
    "Keo Dán Giày X2000",
    "KE001 • Lon",
    "78.000 ₫",
    "Còn 48",
    "Đinh giày",
    "DI004 • Gói",
    "4.500 ₫",
    "Còn 120",
    "Thun giày",
    "TG005 • Mét",
    "6.000 ₫",
    "Còn 96",
    "Chai xịt chống thấm nước",
    "CX006 • Chai",
    "62.000 ₫",
    "Hết hàng",
    "Đế da",
    "DE004 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đế PVC",
    "DE005 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đế TPU",
    "DE006 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Keo Dán Giày Scotch",
    "KE002 • Lon",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Keo Dán Giày SeaGlue",
    "KE003 • Lon",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho da thuộc thực vật",
    "PH001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho vải tẩm nhựa (thermoplastic)",
    "PH002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho sợi tổng hợp tẩm keo",
    "PH003 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho cao su/nhựa dẻo",
    "PH004 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải lưới",
    "VL001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải Tricot",
    "VL002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải Polyester (PE)",
    "VL003 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Lót da",
    "LT001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Lót cao su non",
    "LT002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Dây giày thun bản tròn",
    "DG003 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Chai xịt dưỡng và phục hồi da lộn",
    "CX007 • Chai",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Chai xịt khử mùi và kháng khuẩn cho giày",
    "CX008 • Chai",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đơn hàng",
    "3 mặt hàng • 5 sản phẩm",
    "Khách bán lẻ",
    "Khách bán sỉ",
    "Khách bán lẻ",
    "Keo Dán Giày X2000",
    "78.000 ₫",
    "−",
    "0",
    "+",
    "156.000 ₫",
    "✓ Đủ hàng • Tồn kho: 48",
    "Dây giày thun dẹt",
    "35.000 ₫",
    "−",
    "2",
    "+",
    "70.000 ₫",
    "✓ Đủ hàng • Tồn kho: 72",
    "Đế cao su",
    "160.000 ₫",
    "−",
    "1",
    "+",
    "160.000 ₫",
    "✓ Đủ hàng • Tồn kho: 24",
    "Tạm tính",
    "386.000 ₫",
    "Giảm giá",
    "0 ₫",
    "Tổng thanh toán",
    "386.000 ₫",
    "Thanh toán • 386.000 ₫",
    "Đơn bán lẻ không áp dụng đề xuất giảm giá."
  ]
}
```

### Giảm giá — Đã phê duyệt — 1:12425

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-12425) · 1440 × 900

```json
{
  "sourceNodeId": "1:12425",
  "name": "Giảm giá — Đã phê duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:12426",
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
      "id": "1:12457",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Tạo hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Tạo hóa đơn bán sỉ",
    "Giảm giá đã được phê duyệt · 100.000 ₫",
    "Sản phẩm đã chọn",
    "3 mặt hàng • 27 sản phẩm",
    "Khách bán lẻ",
    "Khách bán sỉ",
    "Khách bán sỉ",
    "Thêm khách",
    "SẢN PHẨM",
    "SL",
    "GIÁ GỐC",
    "TẠM TÍNH",
    "Keo Dán Giày X2000",
    "KE001 • Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 • Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 • Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Chỉnh sửa đơn hàng",
    "Tổng thanh toán sau giảm",
    "1.900.000 ₫",
    "Tiếp tục thanh toán"
  ]
}
```

### Gửi hóa đơn qua Zalo — Thành công — 1:12543

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-12543) · 1440 × 900

```json
{
  "sourceNodeId": "1:12543",
  "name": "Gửi hóa đơn qua Zalo — Thành công",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:12544",
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
      "id": "1:12575",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Cấp hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Hoàn tất giao dịch",
    "Hoàn tất",
    "Cấp hóa đơn cho khách",
    "In hóa đơn giấy hoặc gửi qua Zalo theo lựa chọn của khách hàng.",
    "Hóa đơn giấy",
    "In 1 bản và giao cùng hàng hóa.",
    "In hóa đơn",
    "Zalo",
    "Đã gửi hóa đơn qua Zalo",
    "Số điện thoại đã nhận",
    "0903 456 789",
    "✓  Gửi thành công lúc 09:43 · 02/11/2026",
    "Hóa đơn điện tử đã được gửi cho khách.\nBản gốc vẫn được lưu an toàn trong hệ thống.",
    "Gửi lại",
    "Tạo hóa đơn thành công",
    "Hoàn tất",
    "Xem trước hóa đơn",
    "Bản gốc đã lưu",
    "Cửa hàng phụ kiện giày dép Kin Kin",
    "86/10 Hoàng Hoa Thám, Đà Nẵng\nĐiện thoại: 0123 456 789",
    "HÓA ĐƠN BÁN HÀNG",
    "HD-0211-0048",
    "02/11/2026 • 09:42 • Thu Hà",
    "Khách hàng",
    "Khách lẻ",
    "Keo Dán Giày X2000",
    "2 × 78.000 ₫",
    "156.000 ₫",
    "Dây giày thun dẹt",
    "2 × 35.000 ₫",
    "70.000 ₫",
    "Đế cao su",
    "1 × 160.000 ₫",
    "160.000 ₫",
    "Tổng thanh toán",
    "386.000 ₫",
    "Tiền mặt",
    "500.000 ₫",
    "Tiền thừa",
    "114.000 ₫"
  ]
}
```

### Gửi hóa đơn qua Zalo — Thành công — 1:12690

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-12690) · 1440 × 900

```json
{
  "sourceNodeId": "1:12690",
  "name": "Gửi hóa đơn qua Zalo — Thành công",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:12691",
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
      "id": "1:12722",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Cấp hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Hoàn tất giao dịch",
    "Hoàn tất",
    "Cấp hóa đơn cho khách",
    "In hóa đơn giấy hoặc gửi qua Zalo theo lựa chọn của khách hàng.",
    "Hóa đơn giấy",
    "In 1 bản và giao cùng hàng hóa.",
    "In hóa đơn",
    "Zalo",
    "Đã gửi hóa đơn qua Zalo",
    "Số điện thoại đã nhận",
    "0903 456 789",
    "✓  Gửi thành công lúc 09:43 · 02/11/2026",
    "Hóa đơn điện tử đã được gửi cho khách.\nBản gốc vẫn được lưu an toàn trong hệ thống.",
    "Gửi lại",
    "Tạo hóa đơn thành công",
    "Hoàn tất",
    "Xem trước hóa đơn",
    "Bản gốc đã lưu",
    "Cửa hàng phụ kiện giày dép Kin Kin",
    "86/10 Hoàng Hoa Thám, Đà Nẵng\nĐiện thoại: 0123 456 789",
    "HÓA ĐƠN BÁN HÀNG",
    "HD-0211-0048",
    "02/11/2026 • 09:42 • Thu Hà",
    "Khách hàng",
    "Khách lẻ",
    "Keo Dán Giày X2000",
    "2 × 78.000 ₫",
    "156.000 ₫",
    "Dây giày thun dẹt",
    "2 × 35.000 ₫",
    "70.000 ₫",
    "Đế cao su",
    "1 × 160.000 ₫",
    "160.000 ₫",
    "Tổng thanh toán",
    "386.000 ₫",
    "Chuyển khoản",
    "386.000 ₫"
  ]
}
```

### Gửi hóa đơn qua Zalo — Thành công — 1:12835

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-12835) · 1440 × 900

```json
{
  "sourceNodeId": "1:12835",
  "name": "Gửi hóa đơn qua Zalo — Thành công",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:12836",
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
      "id": "1:12867",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Cấp hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Hoàn tất giao dịch",
    "Cấp hóa đơn cho khách",
    "In hóa đơn giấy hoặc gửi qua Zalo theo lựa chọn của khách hàng.",
    "Hóa đơn giấy",
    "In 1 bản và giao cùng hàng hóa.",
    "In hóa đơn",
    "Zalo",
    "Đã gửi hóa đơn qua Zalo",
    "Số điện thoại đã nhận",
    "0903 456 789",
    "✓  Gửi thành công lúc 09:43 · 02/11/2026",
    "Hóa đơn điện tử đã được gửi cho khách.\nBản gốc vẫn được lưu an toàn trong hệ thống.",
    "Gửi lại",
    "Tạo hóa đơn thành công",
    "Hoàn tất",
    "Xem trước hóa đơn",
    "Bản gốc đã lưu",
    "Cửa hàng phụ kiện giày dép Kin Kin",
    "86/10 Hoàng Hoa Thám, Đà Nẵng\nĐiện thoại: 0123 456 789",
    "HÓA ĐƠN BÁN HÀNG",
    "HD-0211-0049",
    "02/11/2026 • 09:35 • Thu Hà",
    "Khách hàng",
    "Khách sỉ",
    "Điện thoại",
    "0903 456 789",
    "3 mặt hàng • 27 sản phẩm · Giá gốc",
    "Keo Dán Giày X2000",
    "780.000 ₫",
    "KE001 • Lon · 10 × 78.000 ₫",
    "Dây giày thun dẹt",
    "420.000 ₫",
    "DG002 • Đôi · 12 × 35.000 ₫",
    "Đế cao su",
    "800.000 ₫",
    "DE003 • Đôi · 5 × 160.000 ₫",
    "Tạm tính",
    "2.000.000 ₫",
    "Số tiền được giảm",
    "−100.000 ₫",
    "Tổng thanh toán",
    "1.900.000 ₫",
    "Tiền khách đưa",
    "2.000.000 ₫",
    "Tiền thừa",
    "100.000 ₫"
  ]
}
```

### Tạo hóa đơn bán lẻ — 1:12989

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-12989) · 1440 × 900

```json
{
  "sourceNodeId": "1:12989",
  "name": "Tạo hóa đơn bán lẻ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:12990",
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
      "id": "1:13021",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Tạo hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Tạo hóa đơn bán lẻ",
    "Tìm sản phẩm",
    "Nhập tên, mã sản phẩm ",
    "Tất cả",
    "Tất cả",
    "Đế giày",
    "Keo",
    "Pho",
    "Vải lót",
    "Lót cao su non",
    "Dây giày",
    "Đinh",
    "Thun giày",
    "Chai xịt",
    "Đế cao su",
    "DE003 • Đôi",
    "160.000 ₫",
    "Còn 24",
    "Dây giày thun dẹt",
    "DG002 • Đôi",
    "35.000 ₫",
    "Còn 72",
    "Keo Dán Giày X2000",
    "KE001 • Lon",
    "78.000 ₫",
    "Còn 48",
    "Đinh giày",
    "DI004 • Gói",
    "4.500 ₫",
    "Còn 120",
    "Thun giày",
    "TG005 • Mét",
    "6.000 ₫",
    "Còn 96",
    "Chai xịt chống thấm nước",
    "CX006 • Chai",
    "62.000 ₫",
    "Còn 120",
    "Đế da",
    "DE004 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đế PVC",
    "DE005 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đế TPU",
    "DE006 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Keo Dán Giày Scotch",
    "KE002 • Lon",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Keo Dán Giày SeaGlue",
    "KE003 • Lon",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho da thuộc thực vật",
    "PH001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho vải tẩm nhựa (thermoplastic)",
    "PH002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho sợi tổng hợp tẩm keo",
    "PH003 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho cao su/nhựa dẻo",
    "PH004 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải lưới",
    "VL001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải Tricot",
    "VL002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải Polyester (PE)",
    "VL003 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Lót da",
    "LT001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Lót cao su non",
    "LT002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Dây giày thun bản tròn",
    "DG003 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Chai xịt dưỡng và phục hồi da lộn",
    "CX007 • Chai",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Chai xịt khử mùi và kháng khuẩn cho giày",
    "CX008 • Chai",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đơn hàng",
    "3 mặt hàng • 5 sản phẩm",
    "Khách bán lẻ",
    "Khách bán sỉ",
    "Khách bán lẻ",
    "Thêm khách",
    "Keo Dán Giày X2000",
    "78.000 ₫",
    "−",
    "2",
    "+",
    "156.000 ₫",
    "✓ Đủ hàng • Tồn kho: 48",
    "Dây giày thun dẹt",
    "35.000 ₫",
    "−",
    "2",
    "+",
    "70.000 ₫",
    "✓ Đủ hàng • Tồn kho: 72",
    "Đế cao su",
    "160.000 ₫",
    "−",
    "1",
    "+",
    "160.000 ₫",
    "✓ Đủ hàng • Tồn kho: 24",
    "Tạm tính",
    "386.000 ₫",
    "Giảm giá",
    "0 ₫",
    "Tổng thanh toán",
    "386.000 ₫",
    "Thanh toán • 386.000 ₫",
    "Đơn bán lẻ không áp dụng đề xuất giảm giá."
  ]
}
```

### Tạo hóa đơn bán sỉ — 1:13461

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-13461) · 1440 × 900

```json
{
  "sourceNodeId": "1:13461",
  "name": "Tạo hóa đơn bán sỉ",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:13462",
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
      "id": "1:13493",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Tạo hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Tạo hóa đơn bán sỉ",
    "Tìm sản phẩm",
    "Nhập tên, mã sản phẩm ",
    "Tất cả",
    "Tất cả",
    "Đế giày",
    "Keo",
    "Pho",
    "Vải lót",
    "Lót cao su non",
    "Dây giày",
    "Đinh",
    "Thun giày",
    "Chai xịt",
    "Đế cao su",
    "DE003 • Đôi",
    "160.000 ₫",
    "Còn 24",
    "Dây giày thun dẹt",
    "DG002 • Đôi",
    "35.000 ₫",
    "Còn 72",
    "Keo Dán Giày X2000",
    "KE001 • Lon",
    "78.000 ₫",
    "Còn 48",
    "Đinh giày",
    "DI004 • Gói",
    "4.500 ₫",
    "Còn 120",
    "Thun giày",
    "TG005 • Mét",
    "6.000 ₫",
    "Còn 96",
    "Chai xịt chống thấm nước",
    "CX006 • Chai",
    "62.000 ₫",
    "Còn 120",
    "Đế da",
    "DE004 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đế PVC",
    "DE005 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đế TPU",
    "DE006 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Keo Dán Giày Scotch",
    "KE002 • Lon",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Keo Dán Giày SeaGlue",
    "KE003 • Lon",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho da thuộc thực vật",
    "PH001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho vải tẩm nhựa (thermoplastic)",
    "PH002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho sợi tổng hợp tẩm keo",
    "PH003 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Pho cao su/nhựa dẻo",
    "PH004 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải lưới",
    "VL001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải Tricot",
    "VL002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Vải Polyester (PE)",
    "VL003 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Lót da",
    "LT001 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Lót cao su non",
    "LT002 • Mét",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Dây giày thun bản tròn",
    "DG003 • Đôi",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Chai xịt dưỡng và phục hồi da lộn",
    "CX007 • Chai",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Chai xịt khử mùi và kháng khuẩn cho giày",
    "CX008 • Chai",
    "Chưa đặt giá",
    "Chưa nhập tồn",
    "Đơn hàng",
    "3 mặt hàng • 5 sản phẩm",
    "Khách bán lẻ",
    "Khách bán sỉ",
    "Khách bán lẻ",
    "Thêm khách",
    "Keo Dán Giày X2000",
    "78.000 ₫",
    "−",
    "2",
    "+",
    "156.000 ₫",
    "✓ Đủ hàng • Tồn kho: 48",
    "Dây giày thun dẹt",
    "35.000 ₫",
    "−",
    "2",
    "+",
    "70.000 ₫",
    "✓ Đủ hàng • Tồn kho: 72",
    "Đế cao su",
    "160.000 ₫",
    "−",
    "1",
    "+",
    "160.000 ₫",
    "✓ Đủ hàng • Tồn kho: 24",
    "Tạm tính",
    "386.000 ₫",
    "Giảm giá",
    "0 ₫",
    "Tổng thanh toán",
    "386.000 ₫",
    "Thanh toán • 386.000 ₫",
    "Đơn bán lẻ không áp dụng đề xuất giảm giá."
  ]
}
```

### Khách mua sỉ và duyệt giảm giá — 1:13904

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-13904) · 1440 × 900

```json
{
  "sourceNodeId": "1:13904",
  "name": "Khách mua sỉ và duyệt giảm giá",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:13905",
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
      "id": "1:13936",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Tạo hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Tạo hóa đơn bán sỉ",
    "Sản phẩm đã chọn",
    "3 mặt hàng • 27 sản phẩm",
    "Khách bán lẻ",
    "Khách bán sỉ",
    "Khách bán sỉ",
    "Thêm khách",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 • Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 • Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 • Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Đủ tồn kho: Keo 58 lon • Dây 84 cái • Đế 29 cái ",
    "Chỉnh sửa đơn hàng",
    "Yêu cầu giảm giá bị từ chối",
    "Mai Linh •  Giá cũ được giữ nguyên; bạn vẫn có thể tiếp tục bán với thông tin khách hàng đã nhập.",
    "Tổng thanh toán hiện tại",
    "2.000.000 ₫",
    "Lưu tạm",
    "Tiếp tục với giá gốc",
    "Chọn cách duyệt giá sỉ",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Xác thực chủ cửa hàng",
    "Chỉ chủ cửa hàng được duyệt giá",
    "Tài khoản chủ cửa hàng",
    "Mai Linh • 0909 123 456",
    "Mật khẩu xác thực *",
    "••••••••••",
    "Nhập mức giá muốn giảm ",
    "Giảm trên hóa đơn ",
    "100.000",
    "Đơn vị",
    "₫  ",
    "Tổng theo giá gốc",
    "2.000.000 ₫",
    "Giảm giá đề xuất",
    "−100.000 ₫",
    "Dự kiến sau khi duyệt",
    "1.900.000 ₫",
    "Từ chối",
    "Phê duyệt"
  ]
}
```

### Giảm giá — Đã phê duyệt — 1:14093

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-14093) · 1440 × 900

```json
{
  "sourceNodeId": "1:14093",
  "name": "Giảm giá — Đã phê duyệt",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:14094",
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
      "id": "1:14125",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Tạo hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Tạo hóa đơn bán sỉ",
    "Sản phẩm đã chọn",
    "3 mặt hàng • 27 sản phẩm",
    "Khách bán lẻ",
    "Khách bán sỉ",
    "Khách bán sỉ",
    "Thêm khách",
    "SẢN PHẨM",
    "SL",
    "GIÁ GỐC",
    "TẠM TÍNH",
    "Keo Dán Giày X2000",
    "KE001 • Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 • Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 • Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Chỉnh sửa đơn hàng",
    "Giảm giá đã được phê duyệt",
    "Tổng thanh toán sau giảm",
    "1.900.000 ₫",
    "Lưu tạm",
    "Tiếp tục thanh toán",
    "Đơn hàng",
    "HD-0211-0049",
    "Người phê duyệt",
    "Mai Linh",
    "Vai trò",
    "Chủ cửa hàng",
    "Số tiền được giảm",
    "100.000 ₫",
    "Thông tin phê duyệt đã được lưu cùng đơn hàng. Tiếp tục thanh toán với tổng tiền 1.900.000 ₫.",
    "Giảm giá đã áp dụng",
    "Mức giảm được phê duyệt",
    "100.000",
    "Đơn vị",
    " ₫",
    "Tổng theo giá gốc",
    "2.000.000 ₫",
    "Giảm giá đã duyệt",
    "−100.000 ₫",
    "Tổng sau giảm",
    "1.900.000 ₫"
  ]
}
```

### Thanh toán thành công và cấp hóa đơn — 1:14250

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-14250) · 1440 × 900

```json
{
  "sourceNodeId": "1:14250",
  "name": "Thanh toán thành công và cấp hóa đơn",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:14251",
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
      "id": "1:14282",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Cấp hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Thanh toán chưa hoàn tất",
    "Thanh toán thất bại",
    "Cấp hóa đơn cho khách",
    "In hóa đơn giấy hoặc gửi qua Zalo theo lựa chọn của khách hàng.",
    "Hóa đơn giấy",
    "In 1 bản và giao cùng hàng hóa.",
    "In hóa đơn",
    "Zalo",
    "Gửi hóa đơn qua Zalo",
    "Số điện thoại nhận Zalo *",
    "Nhập số điện thoại của khách",
    "Vui lòng nhập số điện thoại để gửi hóa đơn qua Zalo.",
    "Số điện thoại sẽ được lưu cùng hóa đơn.\nKhách chỉ nhận bản điện tử của giao dịch này.",
    "Gửi qua Zalo",
    "Thử lại thanh toán",
    "Xem trước hóa đơn",
    "Bản gốc đã lưu",
    "Cửa hàng phụ kiện giày dép Kin Kin",
    "86/10 Hoàng Hoa Thám, Đà Nẵng\nĐiện thoại: 0123 456 789",
    "HÓA ĐƠN BÁN HÀNG",
    "HD-0211-0049",
    "02/11/2026 • 09:35 • Thu Hà",
    "Khách hàng",
    "Khách sỉ",
    "Điện thoại",
    "0903 456 789",
    "3 mặt hàng • 27 sản phẩm · Giá gốc",
    "Keo Dán Giày X2000",
    "780.000 ₫",
    "KE001 • Lon · 10 × 78.000 ₫",
    "Dây giày thun dẹt",
    "420.000 ₫",
    "DG002 • Đôi · 12 × 35.000 ₫",
    "Đế cao su",
    "800.000 ₫",
    "DE003 • Đôi · 5 × 160.000 ₫",
    "Tạm tính",
    "2.000.000 ₫",
    "Số tiền được giảm",
    "−100.000 ₫",
    "Tổng thanh toán",
    "1.900.000 ₫",
    "Tiền khách đưa",
    "2.000.000 ₫",
    "Tiền thừa",
    "100.000 ₫"
  ]
}
```

### Gửi hóa đơn qua Zalo — Thành công — 1:14405

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-14405) · 1440 × 900

```json
{
  "sourceNodeId": "1:14405",
  "name": "Gửi hóa đơn qua Zalo — Thành công",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:14406",
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
      "id": "1:14437",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Cấp hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Hoàn tất giao dịch",
    "Cấp hóa đơn cho khách",
    "In hóa đơn giấy hoặc gửi qua Zalo theo lựa chọn của khách hàng.",
    "Hóa đơn giấy",
    "In 1 bản và giao cùng hàng hóa.",
    "In hóa đơn",
    "Zalo",
    "Đã gửi hóa đơn qua Zalo",
    "Số điện thoại đã nhận",
    "0903 456 789",
    "✓  Gửi thành công lúc 09:43 · 02/11/2026",
    "Hóa đơn điện tử đã được gửi cho khách.\nBản gốc vẫn được lưu an toàn trong hệ thống.",
    "Gửi lại",
    "Tạo hóa đơn thành công",
    "Hoàn tất",
    "Xem trước hóa đơn",
    "Bản gốc đã lưu",
    "Cửa hàng phụ kiện giày dép Kin Kin",
    "86/10 Hoàng Hoa Thám, Đà Nẵng\nĐiện thoại: 0123 456 789",
    "HÓA ĐƠN BÁN HÀNG",
    "HD-0211-0049",
    "02/11/2026 • 09:35 • Thu Hà",
    "Khách hàng",
    "Khách sỉ",
    "Điện thoại",
    "0903 456 789",
    "3 mặt hàng • 27 sản phẩm · Giá gốc",
    "Keo Dán Giày X2000",
    "780.000 ₫",
    "KE001 • Lon · 10 × 78.000 ₫",
    "Dây giày thun dẹt",
    "420.000 ₫",
    "DG002 • Đôi · 12 × 35.000 ₫",
    "Đế cao su",
    "800.000 ₫",
    "DE003 • Đôi · 5 × 160.000 ₫",
    "Tạm tính",
    "2.000.000 ₫",
    "Số tiền được giảm",
    "−100.000 ₫",
    "Tổng thanh toán",
    "1.900.000 ₫",
    "Tiền khách đưa",
    "2.000.000 ₫",
    "Tiền thừa",
    "100.000 ₫"
  ]
}
```

### Khách mua sỉ và duyệt giảm giá khi chủ cửa hàng đi vắng — gửi Zalo — 1:14559

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-14559) · 1440 × 900

```json
{
  "sourceNodeId": "1:14559",
  "name": "Khách mua sỉ và duyệt giảm giá khi chủ cửa hàng đi vắng — gửi Zalo",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:14560",
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
      "id": "1:14591",
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Tạo hóa đơn",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Tạo hóa đơn bán sỉ",
    "Sản phẩm đã chọn",
    "3 mặt hàng • 27 sản phẩm",
    "Khách bán lẻ",
    "Khách bán sỉ",
    "Khách bán sỉ",
    "Thêm khách",
    "SẢN PHẨM",
    "SL",
    "ĐƠN GIÁ",
    "THÀNH TIỀN",
    "Keo Dán Giày X2000",
    "KE001 • Lon",
    "10",
    "78.000 ₫",
    "780.000 ₫",
    "Dây giày thun dẹt",
    "DG002 • Đôi",
    "12",
    "35.000 ₫",
    "420.000 ₫",
    "Đế cao su",
    "DE003 • Đôi",
    "5",
    "160.000 ₫",
    "800.000 ₫",
    "Chỉnh sửa đơn hàng",
    "Tổng thanh toán hiện tại",
    "2.000.000 ₫",
    "Lưu tạm",
    "Tiếp tục với giá gốc",
    "Chọn cách duyệt giá sỉ",
    "Đang ở quầy",
    "Đi vắng (Zalo)",
    "Chủ cửa hàng đi vắng",
    "Gửi Zalo để chủ cửa hàng duyệt từ xa.",
    "Thông báo Zalo cho chủ cửa hàng",
    "Z",
    "“Thu Hà gửi yêu cầu phê duyệt giảm giá cho đơn HD-0211-0049.",
    "Hủy yêu cầu",
    "Gửi yêu cầu qua Zalo"
  ]
}
```

### Bán sỉ — QR chờ tiền về — 1:14707

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-14707) · 1440 × 900

```json
{
  "sourceNodeId": "1:14707",
  "name": "Bán sỉ — QR chờ tiền về",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:14708",
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
      "id": "1:14739",
      "name": "Không gian bán sỉ",
      "x": 224,
      "y": 0,
      "width": 1216,
      "height": 724,
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
    "Tạo hóa đơn",
    "Tra cứu hóa đơn",
    "Hủy hóa đơn",
    "Quản lý đổi trả",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Quản lý nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Bán hàng / Thanh toán",
    "TH",
    "Thu Hà",
    "Nhân viên bán hàng",
    "Thanh toán chuyển khoản bán sỉ",
    "Quét mã để thanh toán",
    "MÃ MẪU",
    "QR minh họa, không phải địa chỉ thanh toán thực tế.",
    "NGÂN HÀNG THỤ HƯỞNG",
    "Vietcombank",
    "Cửa hàng phụ kiện giày dép Kin Kin",
    "0123 456 789",
    "Số tiền chính xác",
    "1.900.000 ₫",
    "Nội dung chuyển khoản",
    "HD-0211-0049",
    "Đơn chờ thanh toán chuyển khoản",
    "Đang chờ tiền về · Chưa nhận 1.900.000 ₫",
    "Chưa hoàn tất thanh toán. Chỉ bàn giao hàng khi ngân hàng xác nhận đã nhận đủ tiền.",
    "Hoàn tất",
    "Chọn lại phương thức",
    "Tóm tắt hóa đơn",
    "HD-0211-0049",
    "Khách hàng",
    "Khách sỉ",
    "Ngày bán",
    "02/11/2026 • 09:35",
    "Thu Hà · Chi nhánh Nguyễn Trãi",
    "3 mặt hàng • 27 sản phẩm",
    "Keo Dán Giày X2000",
    "780.000 ₫",
    "KE001 • Lon · 10 × 78.000 ₫",
    "Dây giày thun dẹt",
    "420.000 ₫",
    "DG002 • Đôi · 12 × 35.000 ₫",
    "Đế cao su",
    "800.000 ₫",
    "DE003 • Đôi · 5 × 160.000 ₫",
    "Tạm tính (giá gốc)",
    "2.000.000 ₫",
    "Số tiền được giảm",
    "−100.000 ₫",
    "Tổng thanh toán",
    "1.900.000 ₫"
  ]
}
```
