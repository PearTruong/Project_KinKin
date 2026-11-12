/**
 * Cấu hình và xử lý CORS cho API KinKin POS.
 * Hỗ trợ đa origin cho môi trường Production và Vercel Preview.
 */

export interface CorsEnv {
  FRONTEND_URLS?: string;
  FRONTEND_URL?: string;
  [key: string]: string | undefined;
}

/**
 * Trích xuất danh sách origins được phép từ biến môi trường.
 * - Ưu tiên `FRONTEND_URLS`: danh sách phân tách bằng dấu phẩy, trim khoảng trắng.
 * - Nếu `FRONTEND_URLS` chưa đặt hoặc rỗng, dùng `FRONTEND_URL`.
 * - Nếu cả hai chưa đặt, fallback về mặc định `http://localhost:3000`.
 * - Không cho phép wildcard '*', loại bỏ các phần tử rỗng.
 */
export function getAllowedOrigins(
  env: CorsEnv = process.env,
  defaultOrigin: string = 'http://localhost:3000',
): string[] {
  const parseList = (val?: string): string[] => {
    if (!val) return [];
    return val
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item.length > 0 && item !== '*');
  };

  const fromUrls = parseList(env.FRONTEND_URLS);
  if (fromUrls.length > 0) {
    return fromUrls;
  }

  const fromUrl = parseList(env.FRONTEND_URL);
  if (fromUrl.length > 0) {
    return fromUrl;
  }

  return [defaultOrigin];
}

/**
 * Callback kiểu chuẩn của Express/NestJS CORS origin delegate function.
 */
export type CorsOriginCallback = (err: Error | null, allow?: boolean) => void;

/**
 * Tạo hàm kiểm tra origin cho NestJS/Express CORS.
 * - So khớp chính xác origin trong allowlist.
 * - Cho phép request không có header Origin (như curl, Postman, health check nội bộ).
 * - Từ chối bất kỳ origin nào không nằm trong allowlist (callback(null, false)).
 */
export function createCorsOriginValidator(allowedOrigins: string[]) {
  return (requestOrigin: string | undefined, callback: CorsOriginCallback) => {
    // Cho phép request cùng origin hoặc tool server-to-server không gửi header Origin
    if (!requestOrigin) {
      return callback(null, true);
    }

    // So khớp chính xác từng ký tự trong danh sách allowlist
    if (allowedOrigins.includes(requestOrigin)) {
      return callback(null, true);
    }

    // Từ chối origin lạ, trình duyệt sẽ chặn phản hồi do thiếu Access-Control-Allow-Origin
    return callback(null, false);
  };
}
