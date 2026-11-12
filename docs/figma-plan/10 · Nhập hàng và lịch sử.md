# 10 · Nhập hàng và lịch sử

## Cách triển khai

Đối chiếu màn quản lý, tạo phiếu, dòng sản phẩm, xác nhận/lưu, lịch sử và chi tiết theo nguồn. Tách dữ liệu phiếu khỏi UI; giữ nhất quán đơn vị, giá vốn, số lượng và tổng. Bấm lưu nhiều lần không được giả lập tạo nhiều phiếu. Giao diện thành công không chứng minh đã cập nhật tồn kho thật. Không áp quy tắc một form sản phẩm sang phiếu nhập nếu nguồn khác.

## Cách đọc dữ liệu nguồn

Bản trích xuất cấu trúc và văn bản, KHÔNG phải ảnh hay đặc tả hành vi hoàn chỉnh. text giữ nguyên chuỗi theo thứ tự cây layer, không đảm bảo thứ tự đọc trực quan. topLevelLayout chỉ mô tả frame con trực tiếp bằng tọa độ tương đối. Loại text có visible=false ở bản thân hoặc tổ tiên; chưa phân tích lớp che/mask. Tên trạng thái gợi ý kịch bản nhưng không chứng minh trigger, điều kiện hoặc quyền. Chưa xuất ảnh/font/logo/SVG; cần ảnh nguồn để đối chiếu hình học. Xem tài liệu 01 cho baseline và 04 cho nghiệm thu. Không nạp toàn bộ tài liệu này vào một tác vụ; lấy đúng nhóm nguồn cần thực hiện.

## UC\_8.1 – Lưu nhập hàng mới

### UC\_8.1\_Main\_01\_Quan\_Ly\_Nhap\_Hang — 1:40505

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-40505) · 1440 × 900

```json
{
  "sourceNodeId": "1:40505",
  "name": "UC_8.1_Main_01_Quan_Ly_Nhap_Hang",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:40506",
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
      "id": "1:40536",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Quản lý nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Quản lý nhập hàng",
    "Theo dõi và quản lý các hoạt động nhập kho.",
    "Tạo phiếu nhập mới",
    "Lịch sử nhập hàng",
    "Tổng số phiếu",
    "3 phiếu",
    "Tổng tiền nhập",
    "4.670.000₫",
    "Tổng đơn vị nhập",
    "170 đơn vị",
    "Danh sách phiếu nhập gần đây",
    "3 phiếu nhập",
    "Mã phiếu",
    "Ngày",
    "Tổng số SP",
    "Tổng tiền",
    "Xem chi tiết",
    "PN-20261105-001",
    "05/11/2026",
    "1",
    "3.360.000₫",
    "Xem chi tiết",
    "PN-20261020-001",
    "20/10/2026",
    "1",
    "810.000₫",
    "Xem chi tiết",
    "PN-20260923-001",
    "23/09/2026",
    "1",
    "500.000₫",
    "Xem chi tiết",
    "Hiển thị 3 trên 3 phiếu nhập"
  ]
}
```

### UC\_8.1\_Main\_02\_Tao\_Phieu\_Nhap — 1:40624

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-40624) · 1440 × 900

```json
{
  "sourceNodeId": "1:40624",
  "name": "UC_8.1_Main_02_Tao_Phieu_Nhap",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:40625",
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
      "id": "1:40655",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "Chưa có sản phẩm trong phiếu",
    "Chọn Thêm sản phẩm để bắt đầu nhập hàng.",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "0",
    "Tổng số lượng nhập",
    "0",
    "Tổng tiền nhập tạm tính",
    "0₫",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng"
  ]
}
```

### UC\_8.1\_Main\_03\_Chon\_San\_Pham — 1:40729

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-40729) · 1440 × 900

```json
{
  "sourceNodeId": "1:40729",
  "name": "UC_8.1_Main_03_Chon_San_Pham",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:40730",
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
      "id": "1:40760",
      "name": "Không gian nhập hàng",
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
      "id": "1:40834",
      "name": "Overlay chọn sản phẩm",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "Chưa có sản phẩm trong phiếu",
    "Chọn Thêm sản phẩm để bắt đầu nhập hàng.",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "0",
    "Tổng số lượng nhập",
    "0",
    "Tổng tiền nhập tạm tính",
    "0₫",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng",
    "Chọn sản phẩm",
    "Tìm theo tên sản phẩm và chọn vào phiếu nhập.",
    "Tìm theo tên sản phẩm",
    "MH005",
    "Keo Dán Giày X2000",
    "Chọn",
    "MH001",
    "Đế cao su",
    "Thêm",
    "MH006",
    "Keo Dán Giày Scotch",
    "Thêm",
    "MH007",
    "Keo Dán Giày SeaGlue",
    "Thêm",
    "4 sản phẩm có sẵn",
    "Hủy",
    "Đóng"
  ]
}
```

### UC\_8.1\_Main\_03b\_Nhap\_So\_Luong\_Gia\_Von — 1:40888

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-40888) · 1440 × 900

```json
{
  "sourceNodeId": "1:40888",
  "name": "UC_8.1_Main_03b_Nhap_So_Luong_Gia_Von",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:40889",
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
      "id": "1:40919",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "20",
    "25.000₫",
    "500.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "60",
    "Tổng tiền nhập tạm tính",
    "1.620.000₫",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng"
  ]
}
```

### UC\_8.1\_Main\_04\_Chinh\_Sua\_San\_Pham — 1:41041

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-41041) · 1440 × 900

```json
{
  "sourceNodeId": "1:41041",
  "name": "UC_8.1_Main_04_Chinh_Sua_San_Pham",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:41042",
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
      "id": "1:41072",
      "name": "Không gian nhập hàng",
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
      "id": "1:41194",
      "name": "Overlay chỉnh sửa dòng SP-0005",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "20",
    "25.000₫",
    "500.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "60",
    "Tổng tiền nhập tạm tính",
    "1.620.000₫",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng",
    "Chỉnh sửa dòng MH005",
    "Mã SP/ Tên SP chỉ đọc. Sửa số lượng nhập và giá vốn đơn vị cho dòng Keo Dán Giày X2000.",
    "Mã sản phẩm",
    "MH005",
    "Tên sản phẩm",
    "Keo Dán Giày X2000",
    "Số lượng nhập",
    "20",
    "(hiện tại: 20)",
    "Nhập số nguyên lớn hơn 0.",
    "Giá vốn đơn vị",
    "25.000₫",
    "(hiện tại: 25.000)",
    "Giá vốn phải lớn hơn 0.",
    "Tổng hợp dòng",
    "Thành tiền hiện tại",
    "20 × 25.000 = 500.000",
    "500.000₫",
    "Hủy",
    "Cập nhật"
  ]
}
```

### UC\_8.1\_Main\_05\_Xac\_Nhan\_Nhap\_Hang — 1:41242

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-41242) · 1440 × 900

```json
{
  "sourceNodeId": "1:41242",
  "name": "UC_8.1_Main_05_Xac_Nhan_Nhap_Hang",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:41243",
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
      "id": "1:41273",
      "name": "Không gian nhập hàng",
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
      "id": "1:41395",
      "name": "Overlay xác nhận nhập hàng",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "20",
    "25.000₫",
    "500.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "60",
    "Tổng tiền nhập tạm tính",
    "1.620.000₫",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng",
    "Xác nhận nhập hàng",
    "Bạn có chắc chắn muốn xác nhận phiếu nhập hàng này?",
    "Tóm tắt",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng",
    "60",
    "Tổng tiền",
    "1.620.000₫",
    "Chọn Quay lại để kiểm tra thông tin. Tồn kho chỉ được cập nhật khi nhập hàng hoàn tất.",
    "Quay lại",
    "Xác nhận"
  ]
}
```

### UC\_8.1\_Main\_06\_Dang\_Xu\_Ly — 1:41418

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-41418) · 1440 × 900

```json
{
  "sourceNodeId": "1:41418",
  "name": "UC_8.1_Main_06_Dang_Xu_Ly",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:41419",
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
      "id": "1:41449",
      "name": "Không gian nhập hàng",
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
      "id": "1:41571",
      "name": "Overlay đang xử lý",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "20",
    "25.000₫",
    "500.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "60",
    "Tổng tiền nhập tạm tính",
    "1.620.000₫",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng",
    "Đang xử lý nhập hàng",
    "Vui lòng chờ. Không xác nhận lại trong khi hệ thống đang xử lý.",
    "Các bước xử lý",
    "Đang kiểm tra dữ liệu nhập hàng",
    "…",
    "Đang tạo các lô hàng",
    "…",
    "Đang cập nhật tồn kho",
    "…",
    "Đang lưu giá vốn theo từng lô",
    "…",
    "Chỉ ghi nhận khi toàn bộ bước hoàn tất. Nếu có lỗi, toàn bộ giao dịch được hoàn tác.",
    "Quay lại",
    "Đang xử lý…"
  ]
}
```

### UC\_8.1\_AF\_3a\_01\_Chinh\_Sua\_Thong\_Tin — 1:41597

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-41597) · 1440 × 900

```json
{
  "sourceNodeId": "1:41597",
  "name": "UC_8.1_AF_3a_01_Chinh_Sua_Thong_Tin",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:41598",
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
      "id": "1:41628",
      "name": "Không gian nhập hàng",
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
      "id": "1:41750",
      "name": "Overlay chỉnh sửa dòng SP-0005",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "20",
    "25.000₫",
    "500.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "60",
    "Tổng tiền nhập tạm tính",
    "1.620.000₫",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng",
    "Chỉnh sửa dòng MH005",
    "Mã SP / Tên SP chỉ đọc. Sửa số lượng nhập và giá vốn đơn vị cho dòng Keo Dán Giày X2000.",
    "Mã sản phẩm",
    "MH005",
    "Tên sản phẩm",
    "Keo Dán Giày X2000",
    "Số lượng nhập",
    "20",
    "(hiện tại: 20)",
    "Nhập số nguyên lớn hơn 0.",
    "Giá vốn đơn vị",
    "25.000₫",
    "(hiện tại: 25.000)",
    "Giá vốn phải lớn hơn 0.",
    "Tổng hợp dòng",
    "Thành tiền hiện tại",
    "20 × 25.000 = 500.000",
    "500.000₫",
    "Hủy",
    "Cập nhật"
  ]
}
```

### UC\_8.1\_AF\_3a\_02\_Da\_Sua\_Thong\_Tin — 1:41798

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-41798) · 1440 × 900

```json
{
  "sourceNodeId": "1:41798",
  "name": "UC_8.1_AF_3a_02_Da_Sua_Thong_Tin",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:41799",
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
      "id": "1:41829",
      "name": "Không gian nhập hàng",
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
      "id": "1:41951",
      "name": "Overlay chỉnh sửa dòng SP-0005",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "20",
    "25.000₫",
    "500.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "60",
    "Tổng tiền nhập tạm tính",
    "1.620.000₫",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng",
    "Chỉnh sửa dòng MH005",
    "Mã SP / Tên SP chỉ đọc. Sửa số lượng nhập và giá vốn đơn vị cho dòng Keo Dán Giày X2000.",
    "Mã sản phẩm",
    "MH005",
    "Tên sản phẩm",
    "Keo Dán Giày X2000",
    "Số lượng nhập",
    "25",
    "(hiện tại: 20)",
    "Nhập số nguyên lớn hơn 0.",
    "Giá vốn đơn vị",
    "26.000₫",
    "(hiện tại: 25.000)",
    "Giá vốn phải lớn hơn 0.",
    "Tổng hợp dòng",
    "Thành tiền dự kiến",
    "25 × 26.000 = 650.000",
    "650.000₫",
    "Hủy",
    "Cập nhật"
  ]
}
```

### UC\_8.1\_AF\_3a\_03\_Cap\_Nhat\_Thanh\_Cong — 1:41999

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-41999) · 1440 × 900

```json
{
  "sourceNodeId": "1:41999",
  "name": "UC_8.1_AF_3a_03_Cap_Nhat_Thanh_Cong",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:42000",
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
      "id": "1:42030",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Đã cập nhật dòng sản phẩm",
    "Phiếu đang lập chưa được lưu; tồn kho và giá vốn các lô cũ giữ nguyên.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "25",
    "26.000₫",
    "650.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "65",
    "Tổng tiền nhập tạm tính",
    "1.770.000₫",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng"
  ]
}
```

### UC\_8.1\_AF\_3a\_04\_Huy\_Chinh\_Sua — 1:42155

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-42155) · 1440 × 900

```json
{
  "sourceNodeId": "1:42155",
  "name": "UC_8.1_AF_3a_04_Huy_Chinh_Sua",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:42156",
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
      "id": "1:42186",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Đã hủy chỉnh sửa dòng sản phẩm",
    "Số lượng 20 và giá vốn 25.000₫ của Keo Dán Giày X2000 được giữ nguyên trong phiếu.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "20",
    "25.000₫",
    "500.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "60",
    "Tổng tiền nhập tạm tính",
    "1.620.000₫",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng"
  ]
}
```

### UC\_8.1\_AF\_3a\_05\_Xoa\_Dong\_Khoi\_Phieu — 1:42311

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-42311) · 1440 × 900

```json
{
  "sourceNodeId": "1:42311",
  "name": "UC_8.1_AF_3a_05_Xoa_Dong_Khoi_Phieu",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:42312",
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
      "id": "1:42342",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "20",
    "25.000₫",
    "500.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "1",
    "Tổng số lượng nhập",
    "20",
    "Tổng tiền nhập tạm tính",
    "500.000₫",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng"
  ]
}
```

### UC\_8.1\_AF\_5a\_01\_Them\_San\_Pham\_Khac — 1:42446

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-42446) · 1440 × 900

```json
{
  "sourceNodeId": "1:42446",
  "name": "UC_8.1_AF_5a_01_Them_San_Pham_Khac",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:42447",
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
      "id": "1:42477",
      "name": "Không gian nhập hàng",
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
      "id": "1:42581",
      "name": "Overlay chọn sản phẩm",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "20",
    "25.000₫",
    "500.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "1",
    "Tổng số lượng nhập",
    "20",
    "Tổng tiền nhập tạm tính",
    "500.000₫",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng",
    "Chọn sản phẩm",
    "Tìm theo tên sản phẩm và chọn vào phiếu nhập.",
    "Đế cao su",
    "MH001",
    "Đế cao su",
    "Thêm",
    "1 sản phẩm phù hợp",
    "Hủy",
    "Đóng"
  ]
}
```

### UC\_8.1\_AF\_5a\_02\_Da\_Them\_San\_Pham — 1:42611

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-42611) · 1440 × 900

```json
{
  "sourceNodeId": "1:42611",
  "name": "UC_8.1_AF_5a_02_Da_Them_San_Pham",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:42612",
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
      "id": "1:42642",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Đã thêm Đế cao su vào phiếu",
    "Phiếu gồm 2 sản phẩm, 60 đơn vị. Tổng tiền tạm tính 1.620.000₫; chưa cập nhật tồn kho.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "20",
    "25.000₫",
    "500.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "60",
    "Tổng tiền nhập tạm tính",
    "1.620.000₫",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng"
  ]
}
```

### UC\_8.1\_AF\_5b\_01\_Xac\_Nhan\_Huy — 1:42767

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-42767) · 1440 × 900

```json
{
  "sourceNodeId": "1:42767",
  "name": "UC_8.1_AF_5b_01_Xac_Nhan_Huy",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:42768",
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
      "id": "1:42798",
      "name": "Không gian nhập hàng",
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
      "id": "1:42920",
      "name": "Overlay xác nhận nhập hàng",
      "x": 0,
      "y": 0,
      "width": 1440,
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "20",
    "25.000₫",
    "500.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "60",
    "Tổng tiền nhập tạm tính",
    "1.620.000₫",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng",
    "Hủy phiếu nhập đang lập",
    "Bạn có chắc chắn muốn hủy phiếu nhập hàng đang lập?",
    "Tóm tắt",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng",
    "60",
    "Tổng tiền",
    "1.620.000₫",
    "Phiếu chưa được lưu. Xác nhận hủy sẽ không tạo lô hàng hoặc thay đổi tồn kho và giá vốn.",
    "Tiếp tục nhập",
    "Xác nhận hủy"
  ]
}
```

### UC\_8.1\_AF\_5b\_02\_Tiep\_Tuc\_Nhap — 1:42943

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-42943) · 1440 × 900

```json
{
  "sourceNodeId": "1:42943",
  "name": "UC_8.1_AF_5b_02_Tiep_Tuc_Nhap",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:42944",
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
      "id": "1:42974",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Tiếp tục lập phiếu nhập",
    "Thông tin đã nhập được giữ nguyên.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "20",
    "25.000₫",
    "500.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "60",
    "Tổng tiền nhập tạm tính",
    "1.620.000₫",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng"
  ]
}
```

### UC\_8.1\_AF\_5b\_03\_Huy\_Thanh\_Cong — 1:43099

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-43099) · 1440 × 900

```json
{
  "sourceNodeId": "1:43099",
  "name": "UC_8.1_AF_5b_03_Huy_Thanh_Cong",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:43100",
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
      "id": "1:43130",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Quản lý nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Quản lý nhập hàng",
    "Theo dõi và quản lý các hoạt động nhập kho.",
    "Tạo phiếu nhập mới",
    "Lịch sử nhập hàng",
    "Đã hủy phiếu nhập đang lập",
    "Không lưu phiếu, không tạo lô hàng. Tồn kho và giá vốn được giữ nguyên.",
    "Tổng số phiếu",
    "3 phiếu",
    "Tổng tiền nhập",
    "4.670.000₫",
    "Tổng đơn vị nhập",
    "170 đơn vị",
    "Danh sách phiếu nhập gần đây",
    "3 phiếu nhập",
    "Mã phiếu",
    "Ngày",
    "Tổng số SP",
    "Tổng tiền",
    "Xem chi tiết",
    "PN-20261105-001",
    "05/11/2026",
    "1",
    "3.360.000₫",
    "Xem chi tiết",
    "PN-20261020-001",
    "20/10/2026",
    "1",
    "810.000₫",
    "Xem chi tiết",
    "PN-20260923-001",
    "23/09/2026",
    "1",
    "500.000₫",
    "Xem chi tiết",
    "Hiển thị 3 trên 3 phiếu nhập"
  ]
}
```

### UC\_8.1\_EF\_2a\_Chua\_Co\_San\_Pham — 1:43221

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-43221) · 1440 × 900

```json
{
  "sourceNodeId": "1:43221",
  "name": "UC_8.1_EF_2a_Chua_Co_San_Pham",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:43222",
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
      "id": "1:43252",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Tạo tài khoản mới",
    "Sửa thông tin tài khoản",
    "Đặt lại mật khẩu",
    "Vô hiệu hóa tài khoản",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "!",
    "Danh mục chưa có sản phẩm, vui lòng tạo sản phẩm trước",
    "Không thể tiếp tục lập phiếu khi chưa có sản phẩm trong danh mục.",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "0",
    "Tổng số lượng nhập",
    "0",
    "Tổng tiền nhập tạm tính",
    "0₫",
    "Quay về Quản lý nhập hàng",
    "Xác nhận nhập hàng"
  ]
}
```

### UC\_8.1\_EF\_6a\_Gia\_Von\_Bo\_Trong — 1:43328

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-43328) · 1440 × 900

```json
{
  "sourceNodeId": "1:43328",
  "name": "UC_8.1_EF_6a_Gia_Von_Bo_Trong",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:43329",
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
      "id": "1:43359",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "20",
    "",
    "Số lượng và giá vốn phải là số lớn hơn 0",
    "—",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "60",
    "Tổng tiền nhập tạm tính",
    "—",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng"
  ]
}
```

### UC\_8.1\_EF\_6a\_Gia\_Von\_Khong\_Hop\_Le — 1:43482

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-43482) · 1440 × 900

```json
{
  "sourceNodeId": "1:43482",
  "name": "UC_8.1_EF_6a_Gia_Von_Khong_Hop_Le",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:43483",
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
      "id": "1:43513",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "20",
    "-1",
    "Số lượng và giá vốn phải là số lớn hơn 0",
    "—",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "60",
    "Tổng tiền nhập tạm tính",
    "—",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng"
  ]
}
```

### UC\_8.1\_EF\_6a\_Gia\_Von\_Sai\_Dinh\_Dang — 1:43636

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-43636) · 1440 × 900

```json
{
  "sourceNodeId": "1:43636",
  "name": "UC_8.1_EF_6a_Gia_Von_Sai_Dinh_Dang",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:43637",
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
      "id": "1:43667",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "20",
    "abc",
    "Số lượng và giá vốn phải là số lớn hơn 0",
    "—",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "60",
    "Tổng tiền nhập tạm tính",
    "—",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng"
  ]
}
```

### UC\_8.1\_EF\_6a\_So\_Luong\_Bo\_Trong — 1:43790

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-43790) · 1440 × 900

```json
{
  "sourceNodeId": "1:43790",
  "name": "UC_8.1_EF_6a_So_Luong_Bo_Trong",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:43791",
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
      "id": "1:43821",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "",
    "Số lượng và giá vốn phải là số lớn hơn 0",
    "25.000₫",
    "—",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "—",
    "Tổng tiền nhập tạm tính",
    "—",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng"
  ]
}
```

### UC\_8.1\_EF\_6a\_So\_Luong\_Khong\_Hop\_Le — 1:43944

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-43944) · 1440 × 900

```json
{
  "sourceNodeId": "1:43944",
  "name": "UC_8.1_EF_6a_So_Luong_Khong_Hop_Le",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:43945",
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
      "id": "1:43975",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "0",
    "Số lượng và giá vốn phải là số lớn hơn 0",
    "25.000₫",
    "—",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "—",
    "Tổng tiền nhập tạm tính",
    "—",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng"
  ]
}
```

### UC\_8.1\_EF\_6a\_So\_Luong\_Khong\_Phai\_So\_Nguyen — 1:44098

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-44098) · 1440 × 900

```json
{
  "sourceNodeId": "1:44098",
  "name": "UC_8.1_EF_6a_So_Luong_Khong_Phai_So_Nguyen",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:44099",
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
      "id": "1:44129",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "Mã phiếu",
    "Tự động sinh khi hoàn tất",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026",
    "Người lập",
    "Mai Linh",
    "Danh sách sản phẩm",
    "Nhập tên sản phẩm cần tìm",
    "Thêm sản phẩm",
    "STT",
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Số lượng nhập",
    "Giá vốn đơn vị",
    "Thành tiền",
    "Thao tác",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "2,5",
    "Số lượng và giá vốn phải là số lớn hơn 0",
    "25.000₫",
    "—",
    "Chỉnh sửa",
    "Xóa dòng",
    "2",
    "MH001",
    "Đế cao su",
    "40",
    "28.000₫",
    "1.120.000₫",
    "Chỉnh sửa",
    "Xóa dòng",
    "Số lượng sản phẩm",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "—",
    "Tổng tiền nhập tạm tính",
    "—",
    "Hủy nhập hàng",
    "Xác nhận nhập hàng"
  ]
}
```

### UC\_8.1\_EF\_7a\_Loi\_He\_Thong — 1:44252

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-44252) · 1440 × 900

```json
{
  "sourceNodeId": "1:44252",
  "name": "UC_8.1_EF_7a_Loi_He_Thong",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:44253",
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
      "id": "1:44283",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Tạo phiếu nhập mới",
    "Kiểm tra sản phẩm, số lượng và giá vốn trước khi xác nhận nhập hàng.",
    "!",
    "Gặp sự cố hệ thống, chưa ghi nhận nhập hàng",
    "Giao dịch nhập hàng chưa được ghi nhận.\nKhông lưu phiếu, không tạo lô hàng, không cộng tồn kho và không thay đổi giá vốn.\nToàn bộ giao dịch đã được hoàn tác.",
    "Quay về Quản lý nhập hàng"
  ]
}
```

### UC\_8.1\_Success\_Nhap\_Hang\_Thanh\_Cong — 1:44312

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-44312) · 1440 × 900

```json
{
  "sourceNodeId": "1:44312",
  "name": "UC_8.1_Success_Nhap_Hang_Thanh_Cong",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:44313",
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
      "id": "1:44343",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Kết quả nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Nhập hàng thành công",
    "Phiếu nhập đã được lưu thành công. Dưới đây là kết quả tổng hợp và chi tiết theo lô.",
    "Nhập hàng thành công",
    "Mã phiếu PN-20261107-001 đã được tạo và lưu thành công vào hệ thống.",
    "Mã phiếu PN-20261107-001",
    "07/11/2026 09:30",
    "Mai Linh – Chủ cửa hàng",
    "Tổng tiền nhập",
    "1.620.000₫",
    "2 sản phẩm • 60 số lượng",
    "Tồn kho đã được cập nhật và các lô hàng đã được tạo thành công.",
    "Giá vốn các lô cũ giữ nguyên. Cảnh báo tồn kho đã được tính lại theo ngưỡng riêng của từng sản phẩm.",
    "Chi tiết theo lô",
    "2 sản phẩm • 2 lô mới",
    "Keo Dán Giày X2000",
    "Mã sản phẩm MH005",
    "LOT-003",
    "Số lượng nhập / còn lại",
    "20 / 20",
    "Giá vốn",
    "25.000₫",
    "Thành tiền",
    "500.000₫",
    "Ngày nhập",
    "07/11/2026",
    "Tồn kho: 24 → 44",
    "Tăng 20",
    "Đế cao su",
    "Mã sản phẩm SP-0001",
    "LOT-004",
    "Số lượng nhập / còn lại",
    "40 / 40",
    "Giá vốn",
    "28.000₫",
    "Thành tiền",
    "1.120.000₫",
    "Ngày nhập",
    "07/11/2026",
    "Tồn kho: 120 → 160",
    "Tăng 40",
    "Quay về Quản lý nhập hàng",
    "Xem chi tiết phiếu nhập"
  ]
}
```

### UC\_8.1\_Success\_Quay\_Ve\_Quan\_Ly\_Nhap\_Hang — 1:44444

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-44444) · 1440 × 900

```json
{
  "sourceNodeId": "1:44444",
  "name": "UC_8.1_Success_Quay_Ve_Quan_Ly_Nhap_Hang",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:44445",
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
      "id": "1:44475",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
    "Quản lý danh mục sản phẩm và giá",
    "Thêm sản phẩm mới",
    "Sửa thông tin sản phẩm",
    "Cập nhật giá bán & giá gốc",
    "Thiết lập ngưỡng cảnh báo",
    "Tra cứu sản phẩm",
    "Quản lý nhập hàng",
    "Ghi nhận nhập hàng mới",
    "Lịch sử nhập hàng",
    "Xem thống kê và báo cáo",
    "Đăng xuất",
    "Cửa hàng",
    "/",
    "Quản lý nhập hàng",
    "/",
    "Quản lý nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Quản lý nhập hàng",
    "Theo dõi và quản lý các hoạt động nhập kho.",
    "Tạo phiếu nhập mới",
    "Lịch sử nhập hàng",
    "Tổng số phiếu",
    "4 phiếu",
    "Tổng tiền nhập",
    "6.290.000₫",
    "Tổng đơn vị nhập",
    "230 đơn vị",
    "Danh sách phiếu nhập gần đây",
    "4 phiếu nhập",
    "Mã phiếu",
    "Ngày",
    "Tổng số SP",
    "Tổng tiền",
    "Xem chi tiết",
    "PN-20261107-001",
    "07/11/2026 09:30",
    "2",
    "1.620.000₫",
    "Xem chi tiết",
    "PN-20261105-001",
    "05/11/2026",
    "1",
    "3.360.000₫",
    "Xem chi tiết",
    "PN-20261020-001",
    "20/10/2026",
    "1",
    "810.000₫",
    "Xem chi tiết",
    "PN-20260923-001",
    "23/09/2026",
    "1",
    "500.000₫",
    "Xem chi tiết",
    "Hiển thị 4 trên 4 phiếu nhập"
  ]
}
```

## UC\_8.2 – Xem lịch sử nhập hàng

### UC\_8.2\_Main\_01\_Danh\_Sach\_Phieu\_Nhap — 1:29004

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-29004) · 1440 × 900

```json
{
  "sourceNodeId": "1:29004",
  "name": "UC_8.2_Main_01_Danh_Sach_Phieu_Nhap",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:29005",
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
      "id": "1:29029",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
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
    "Quản lý nhập hàng",
    "/",
    "Lịch sử nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử nhập hàng",
    "Theo dõi các phiếu nhập và thông tin hàng hóa đã nhập kho.",
    "Quay lại",
    "Ngày bắt đầu",
    "dd/mm/yyyy",
    "Ngày kết thúc",
    "dd/mm/yyyy",
    "Áp dụng",
    "Đặt lại",
    "Nhập tên sản phẩm cần tìm",
    "Danh sách phiếu nhập",
    "4 phiếu nhập",
    "STT",
    "Mã phiếu nhập",
    "Ngày nhập",
    "Tổng tiền",
    "Thao tác",
    "1",
    "PN-20261107-001",
    "07/11/2026 09:30",
    "1.620.000₫",
    "Xem chi tiết",
    "2",
    "PN-20261105-001",
    "05/11/2026 10:15",
    "3.360.000₫",
    "Xem chi tiết",
    "3",
    "PN-20261020-001",
    "20/10/2026 14:00",
    "810.000₫",
    "Xem chi tiết",
    "4",
    "PN-20260923-001",
    "23/09/2026 08:45",
    "500.000₫",
    "Xem chi tiết",
    "Hiển thị 4 trên 4 phiếu nhập"
  ]
}
```

### UC\_8.2\_Main\_02\_Chi\_Tiet\_Phieu\_Nhap — 1:29137

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-29137) · 1440 × 900

```json
{
  "sourceNodeId": "1:29137",
  "name": "UC_8.2_Main_02_Chi_Tiet_Phieu_Nhap",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:29138",
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
      "id": "1:29162",
      "name": "Không gian chi tiết phiếu nhập",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
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
    "Quản lý nhập hàng",
    "/",
    "Chi tiết phiếu nhập",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Chi tiết phiếu nhập",
    "Mã phiếu PN-20261107-001 • Ngày 07/11/2026 • Tổng 1.620.000₫",
    "Mã phiếu",
    "PN-20261107-001",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026 09:30",
    "Người lập",
    "Mai Linh",
    "Chi tiết sản phẩm và lô hàng",
    "STT",
    "Mã SP",
    "Tên SP",
    "Mã lô",
    "SL nhập",
    "SL còn lại",
    "Giá vốn",
    "Thành tiền",
    "Tuổi tồn",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "LOT-003",
    "20",
    "20",
    "25.000₫",
    "500.000₫",
    "0 ngày",
    "2",
    "MH001",
    "Đế cao su",
    "LOT-004",
    "40",
    "40",
    "28.000₫",
    "1.120.000₫",
    "0 ngày",
    "Thông tin lô hàng",
    "Giá vốn là giá thực tế của từng lô. Phiếu đã lưu chỉ dùng để tra cứu.",
    "Tổng số sản phẩm",
    "2",
    "Tổng số lượng nhập",
    "60",
    "Tổng tiền nhập",
    "1.620.000₫",
    "Quay lại danh sách",
    "Đóng chi tiết"
  ]
}
```

### UC\_8.2\_Main\_03\_Chi\_Tiet\_Nhieu\_Lo — 1:29282

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-29282) · 1440 × 900

```json
{
  "sourceNodeId": "1:29282",
  "name": "UC_8.2_Main_03_Chi_Tiet_Nhieu_Lo",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:29283",
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
      "id": "1:29307",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
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
    "Quản lý nhập hàng",
    "/",
    "Tạo phiếu nhập mới",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Chi tiết phiếu nhập PN-20261107-001",
    "Phiếu hiện tại: 2 sản phẩm · 60 đơn vị · Tổng 1.620.000₫. Các lô cũ được đối chiếu riêng, không cộng vào phiếu này.",
    "Mã phiếu",
    "PN-20261107-001",
    "Ngày nhập (hệ thống ghi nhận)",
    "07/11/2026 • 09:30",
    "Người lập",
    "Mai Linh • 2 SP • 60 đơn vị",
    "Chi tiết sản phẩm và lô hàng",
    "STT",
    "Mã SP",
    "Tên SP",
    "Mã lô",
    "SL nhập",
    "SL còn lại",
    "Giá vốn",
    "Thành tiền",
    "Tuổi tồn",
    "1",
    "MH005",
    "Keo Dán Giày X2000",
    "LOT-003",
    "20",
    "20",
    "25.000₫",
    "500.000₫",
    "0 ngày",
    "2",
    "MH001",
    "Đế cao su",
    "LOT-004",
    "40",
    "40",
    "28.000₫",
    "1.120.000₫",
    "0 ngày",
    "Các lô của Keo Dán Giày X2000 từ những lần nhập khác",
    "Không tính vào tổng phiếu hiện tại",
    "Mã phiếu",
    "Mã lô",
    "Ngày nhập",
    "Nhập / Còn lại",
    "Giá vốn",
    "Thành tiền",
    "Tuổi",
    "PN-20260923-005",
    "LH0012",
    "23/09/2026",
    "20 / 12",
    "25.000₫",
    "500.000₫",
    "45 ngày",
    "PN-20261020-001",
    "LH0056",
    "20/10/2026",
    "30 / 12",
    "27.000₫",
    "810.000₫",
    "18 ngày",
    "Hôm nay: 07/11/2026. Tuổi của từng lô được tính riêng theo ngày nhập.",
    "Quay lại danh sách",
    "Đóng chi tiết"
  ]
}
```

### UC\_8.2\_AF\_2a\_Chon\_Khoang\_Thoi\_Gian — 1:29464

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-29464) · 1440 × 900

```json
{
  "sourceNodeId": "1:29464",
  "name": "UC_8.2_AF_2a_Chon_Khoang_Thoi_Gian",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:29465",
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
      "id": "1:29489",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
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
    "Quản lý nhập hàng",
    "/",
    "Lịch sử nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử nhập hàng",
    "Theo dõi các phiếu nhập và thông tin hàng hóa đã nhập kho.",
    "Quay lại",
    "Ngày bắt đầu",
    "01/10/2026",
    "Ngày kết thúc",
    "31/10/2026",
    "Áp dụng",
    "Đặt lại",
    "Nhập tên sản phẩm cần tìm",
    "Danh sách phiếu nhập",
    "4 phiếu nhập",
    "STT",
    "Mã phiếu nhập",
    "Ngày nhập",
    "Tổng tiền",
    "Thao tác",
    "1",
    "PN-20261107-001",
    "07/11/2026 09:30",
    "1.620.000₫",
    "Xem chi tiết",
    "2",
    "PN-20261105-001",
    "05/11/2026 10:15",
    "3.360.000₫",
    "Xem chi tiết",
    "3",
    "PN-20261020-001",
    "20/10/2026 14:00",
    "810.000₫",
    "Xem chi tiết",
    "4",
    "PN-20260923-001",
    "23/09/2026 08:45",
    "500.000₫",
    "Xem chi tiết",
    "Hiển thị 4 trên 4 phiếu nhập"
  ]
}
```

### UC\_8.2\_AF\_2a\_Ket\_Qua\_Loc — 1:29597

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-29597) · 1440 × 900

```json
{
  "sourceNodeId": "1:29597",
  "name": "UC_8.2_AF_2a_Ket_Qua_Loc",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:29598",
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
      "id": "1:29622",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
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
    "Quản lý nhập hàng",
    "/",
    "Lịch sử nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử nhập hàng",
    "Theo dõi các phiếu nhập và thông tin hàng hóa đã nhập kho.",
    "Quay lại",
    "Ngày bắt đầu",
    "01/10/2026",
    "Ngày kết thúc",
    "31/10/2026",
    "Áp dụng",
    "Đặt lại",
    "Nhập tên sản phẩm cần tìm",
    "Danh sách phiếu nhập",
    "1 phiếu nhập",
    "STT",
    "Mã phiếu nhập",
    "Ngày nhập",
    "Tổng tiền",
    "Thao tác",
    "1",
    "PN-20261020-001",
    "20/10/2026 14:00",
    "810.000₫",
    "Xem chi tiết",
    "Hiển thị 1 trên 1 phiếu nhập"
  ]
}
```

### UC\_8.2\_AF\_2b\_Tim\_Kiem\_San\_Pham — 1:29697

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-29697) · 1440 × 900

```json
{
  "sourceNodeId": "1:29697",
  "name": "UC_8.2_AF_2b_Tim_Kiem_San_Pham",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:29698",
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
      "id": "1:29722",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
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
    "Quản lý nhập hàng",
    "/",
    "Lịch sử nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử nhập hàng",
    "Theo dõi các phiếu nhập và thông tin hàng hóa đã nhập kho.",
    "Quay lại",
    "Ngày bắt đầu",
    "dd/mm/yyyy",
    "Ngày kết thúc",
    "dd/mm/yyyy",
    "Áp dụng",
    "Đặt lại",
    "X2000",
    "Danh sách phiếu nhập",
    "3 phiếu nhập",
    "STT",
    "Mã phiếu nhập",
    "Ngày nhập",
    "Tổng tiền",
    "Thao tác",
    "1",
    "PN-20261107-001",
    "07/11/2026 09:30",
    "1.620.000₫",
    "Xem chi tiết",
    "2",
    "PN-20261020-001",
    "20/10/2026 14:00",
    "810.000₫",
    "Xem chi tiết",
    "3",
    "PN-20260923-001",
    "23/09/2026 08:45",
    "500.000₫",
    "Xem chi tiết",
    "Hiển thị 3 trên 3 phiếu nhập"
  ]
}
```

### UC\_8.2\_AF\_2b\_Ket\_Qua\_Tim\_Kiem — 1:29819

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-29819) · 1440 × 900

```json
{
  "sourceNodeId": "1:29819",
  "name": "UC_8.2_AF_2b_Ket_Qua_Tim_Kiem",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:29820",
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
      "id": "1:29844",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
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
    "Quản lý nhập hàng",
    "/",
    "Lịch sử nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử nhập hàng",
    "Theo dõi các phiếu nhập và thông tin hàng hóa đã nhập kho.",
    "Quay lại",
    "Ngày bắt đầu",
    "dd/mm/yyyy",
    "Ngày kết thúc",
    "dd/mm/yyyy",
    "Áp dụng",
    "Đặt lại",
    "X2000",
    "Danh sách phiếu nhập",
    "3 phiếu nhập",
    "STT",
    "Mã phiếu nhập",
    "Ngày nhập",
    "Tổng tiền",
    "Thao tác",
    "1",
    "PN-20261107-001",
    "07/11/2026 09:30",
    "1.620.000₫",
    "Xem chi tiết",
    "2",
    "PN-20261020-001",
    "20/10/2026 14:00",
    "810.000₫",
    "Xem chi tiết",
    "3",
    "PN-20260923-001",
    "23/09/2026 08:45",
    "500.000₫",
    "Xem chi tiết",
    "Hiển thị 3 trên 3 phiếu nhập"
  ]
}
```

### UC\_8.2\_AF\_3a\_Quay\_Lai\_Danh\_Sach\_Giu\_Bo\_Loc — 1:29941

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-29941) · 1440 × 900

```json
{
  "sourceNodeId": "1:29941",
  "name": "UC_8.2_AF_3a_Quay_Lai_Danh_Sach_Giu_Bo_Loc",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:29942",
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
      "id": "1:29966",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
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
    "Quản lý nhập hàng",
    "/",
    "Lịch sử nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử nhập hàng",
    "Theo dõi các phiếu nhập và thông tin hàng hóa đã nhập kho.",
    "Quay lại",
    "Ngày bắt đầu",
    "01/10/2026",
    "Ngày kết thúc",
    "31/10/2026",
    "Áp dụng",
    "Đặt lại",
    "Nhập tên sản phẩm cần tìm",
    "Danh sách phiếu nhập",
    "1 phiếu nhập",
    "STT",
    "Mã phiếu nhập",
    "Ngày nhập",
    "Tổng tiền",
    "Thao tác",
    "1",
    "PN-20261020-001",
    "20/10/2026 14:00",
    "810.000₫",
    "Xem chi tiết",
    "Hiển thị 1 trên 1 phiếu nhập"
  ]
}
```

### UC\_8.2\_AF\_3a\_Quay\_Lai\_Danh\_Sach\_Giu\_Tu\_Khoa — 1:30041

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-30041) · 1440 × 900

```json
{
  "sourceNodeId": "1:30041",
  "name": "UC_8.2_AF_3a_Quay_Lai_Danh_Sach_Giu_Tu_Khoa",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:30042",
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
      "id": "1:30066",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
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
    "Quản lý nhập hàng",
    "/",
    "Lịch sử nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử nhập hàng",
    "Theo dõi các phiếu nhập và thông tin hàng hóa đã nhập kho.",
    "Quay lại",
    "Ngày bắt đầu",
    "dd/mm/yyyy",
    "Ngày kết thúc",
    "dd/mm/yyyy",
    "Áp dụng",
    "Đặt lại",
    "X2000",
    "Danh sách phiếu nhập",
    "3 phiếu nhập",
    "STT",
    "Mã phiếu nhập",
    "Ngày nhập",
    "Tổng tiền",
    "Thao tác",
    "1",
    "PN-20261107-001",
    "07/11/2026 09:30",
    "1.620.000₫",
    "Xem chi tiết",
    "2",
    "PN-20261020-001",
    "20/10/2026 14:00",
    "810.000₫",
    "Xem chi tiết",
    "3",
    "PN-20260923-001",
    "23/09/2026 08:45",
    "500.000₫",
    "Xem chi tiết",
    "Hiển thị 3 trên 3 phiếu nhập"
  ]
}
```

### UC\_8.2\_EF\_1a\_Chua\_Co\_Phieu\_Nhap — 1:30163

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-30163) · 1440 × 900

```json
{
  "sourceNodeId": "1:30163",
  "name": "UC_8.2_EF_1a_Chua_Co_Phieu_Nhap",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:30164",
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
      "id": "1:30188",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
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
    "Quản lý nhập hàng",
    "/",
    "Lịch sử nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử nhập hàng",
    "Theo dõi các phiếu nhập và thông tin hàng hóa đã nhập kho.",
    "Quay lại",
    "Ngày bắt đầu",
    "dd/mm/yyyy",
    "Ngày kết thúc",
    "dd/mm/yyyy",
    "Áp dụng",
    "Đặt lại",
    "Nhập tên sản phẩm cần tìm",
    "!",
    "Chưa có phiếu nhập",
    "Quay về Quản lý nhập hàng để tiếp tục."
  ]
}
```

### UC\_8.2\_EF\_1b\_Co\_Du\_Lieu\_Cuc\_Bo — 1:30241

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-30241) · 1440 × 900

```json
{
  "sourceNodeId": "1:30241",
  "name": "UC_8.2_EF_1b_Co_Du_Lieu_Cuc_Bo",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:30242",
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
      "id": "1:30266",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
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
    "Quản lý nhập hàng",
    "/",
    "Lịch sử nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử nhập hàng",
    "Theo dõi các phiếu nhập và thông tin hàng hóa đã nhập kho.",
    "Quay lại",
    "!",
    "Mất kết nối, đang hiển thị dữ liệu được đồng bộ gần nhất lúc 14:32",
    "Ngày bắt đầu",
    "dd/mm/yyyy",
    "Ngày kết thúc",
    "dd/mm/yyyy",
    "Áp dụng",
    "Đặt lại",
    "Nhập tên sản phẩm cần tìm",
    "Danh sách phiếu nhập",
    "4 phiếu nhập",
    "STT",
    "Mã phiếu nhập",
    "Ngày nhập",
    "Tổng tiền",
    "Thao tác",
    "1",
    "PN-20261107-001",
    "07/11/2026 09:30",
    "1.620.000₫",
    "Xem chi tiết",
    "2",
    "PN-20261105-001",
    "05/11/2026 10:15",
    "3.360.000₫",
    "Xem chi tiết",
    "3",
    "PN-20261020-001",
    "20/10/2026 14:00",
    "810.000₫",
    "Xem chi tiết",
    "4",
    "PN-20260923-001",
    "23/09/2026 08:45",
    "500.000₫",
    "Xem chi tiết",
    "Hiển thị 4 trên 4 phiếu nhập"
  ]
}
```

### UC\_8.2\_EF\_1b\_Khong\_Co\_Du\_Lieu\_Cuc\_Bo — 1:30377

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-30377) · 1440 × 900

```json
{
  "sourceNodeId": "1:30377",
  "name": "UC_8.2_EF_1b_Khong_Co_Du_Lieu_Cuc_Bo",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:30378",
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
      "id": "1:30402",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
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
    "Quản lý nhập hàng",
    "/",
    "Lịch sử nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử nhập hàng",
    "Theo dõi các phiếu nhập và thông tin hàng hóa đã nhập kho.",
    "Quay lại",
    "Ngày bắt đầu",
    "dd/mm/yyyy",
    "Ngày kết thúc",
    "dd/mm/yyyy",
    "Áp dụng",
    "Đặt lại",
    "Nhập tên sản phẩm cần tìm",
    "!",
    "Mất kết nối, không thể tải lịch sử nhập hàng",
    "Không có dữ liệu đã lưu trên máy để hiển thị.",
    "Thử lại"
  ]
}
```

### UC\_8.2\_EF\_2a\_Khong\_Tim\_Thay\_Theo\_Thoi\_Gian — 1:30458

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-30458) · 1440 × 900

```json
{
  "sourceNodeId": "1:30458",
  "name": "UC_8.2_EF_2a_Khong_Tim_Thay_Theo_Thoi_Gian",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:30459",
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
      "id": "1:30483",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
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
    "Quản lý nhập hàng",
    "/",
    "Lịch sử nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử nhập hàng",
    "Theo dõi các phiếu nhập và thông tin hàng hóa đã nhập kho.",
    "Quay lại",
    "Ngày bắt đầu",
    "01/08/2026",
    "Ngày kết thúc",
    "31/08/2026",
    "Áp dụng",
    "Đặt lại",
    "Nhập tên sản phẩm cần tìm",
    "Không tìm thấy phiếu nhập hàng trong khoảng thời gian đã chọn",
    "Thay đổi khoảng thời gian và chọn Áp dụng để xem lại."
  ]
}
```

### UC\_8.2\_EF\_2b\_Khong\_Tim\_Thay\_Theo\_Ten — 1:30537

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-30537) · 1440 × 900

```json
{
  "sourceNodeId": "1:30537",
  "name": "UC_8.2_EF_2b_Khong_Tim_Thay_Theo_Ten",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:30538",
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
      "id": "1:30562",
      "name": "Không gian nhập hàng",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
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
    "Quản lý nhập hàng",
    "/",
    "Lịch sử nhập hàng",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Lịch sử nhập hàng",
    "Theo dõi các phiếu nhập và thông tin hàng hóa đã nhập kho.",
    "Quay lại",
    "Ngày bắt đầu",
    "dd/mm/yyyy",
    "Ngày kết thúc",
    "dd/mm/yyyy",
    "Áp dụng",
    "Đặt lại",
    "Vải Tricot",
    "Không tìm thấy phiếu nhập hàng phù hợp",
    "Thay đổi tên sản phẩm trong ô tìm kiếm để thử lại."
  ]
}
```

### UC\_8.2\_EF\_3a\_Loi\_Tai\_Chi\_Tiet — 1:30616

[Nguồn Figma](https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8?node-id=1-30616) · 1440 × 900

```json
{
  "sourceNodeId": "1:30616",
  "name": "UC_8.2_EF_3a_Loi_Tai_Chi_Tiet",
  "viewport": {
    "width": 1440,
    "height": 900
  },
  "topLevelLayout": [
    {
      "id": "1:30617",
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
      "id": "1:30641",
      "name": "Không gian chi tiết phiếu nhập",
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
    "Đổi hàng",
    "Trả hàng",
    "Quản lý tồn kho",
    "Quản lý tài khoản",
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
    "Quản lý nhập hàng",
    "/",
    "Chi tiết phiếu nhập",
    "ML",
    "Mai Linh",
    "Chủ cửa hàng",
    "Chi tiết phiếu nhập",
    "Chưa tải được dữ liệu của phiếu nhập đã chọn.",
    "!",
    "Không thể tải chi tiết phiếu nhập, vui lòng thử lại",
    "Dữ liệu không thay đổi. Bạn có thể thử lại hoặc quay về danh sách.",
    "Thử lại",
    "Quay lại"
  ]
}
```
