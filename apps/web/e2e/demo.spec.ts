import { expect, test } from '@playwright/test';

test('logs in and displays products', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Tên đăng nhập').fill('admin');
  await page.getByLabel('Mật khẩu').fill('123456');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await expect(page.getByText('Bán hàng nhanh')).toBeVisible();
  await expect(page.getByText('Dây giày thể thao')).toBeVisible();
});
