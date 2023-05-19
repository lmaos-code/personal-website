import { expect, test } from '@playwright/test';

test('homepage contains 5 links to ', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'GitHub Logo' })).toBeVisible();
});
