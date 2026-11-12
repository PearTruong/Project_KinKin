const rawUrl = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api').trim().replace(/\/+$/, '');
const API_URL = rawUrl.endsWith('/api') ? rawUrl : `${rawUrl}/api`;
const REQUEST_TIMEOUT_MS = 20_000;

export function warmApi(): void {
  // Đánh thức Render ngay khi trang đăng nhập được mở. Không chặn giao diện.
  void fetch(`${API_URL}/health`, { cache: 'no-store' }).catch(() => undefined);
}

export async function apiRequest<T>(path: string, options: RequestInit = {}, token?: string): Promise<T> {
  const timeoutController = new AbortController();
  const timeoutId = window.setTimeout(() => timeoutController.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(`${API_URL}${path}`, {
      ...options,
      signal: options.signal ?? timeoutController.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { message?: string | string[] } | null;
      const message = Array.isArray(body?.message) ? body.message.join(', ') : body?.message;
      throw new Error(message ?? `API error ${response.status}`);
    }

    return response.json() as Promise<T>;
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('Máy chủ phản hồi quá chậm. Vui lòng thử lại sau ít phút.');
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}
