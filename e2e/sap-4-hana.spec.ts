import { test, expect } from '@playwright/test';

test('Add Item to cart and then validate cart value', { tag: '@cart' }, async ({ page }) => {
  await page.goto(process.env.SAP_URL!);
  await page.getByRole('textbox', { name: 'Email, User ID or Login Name' }).click();
  await page.getByRole('textbox', { name: 'Email, User ID or Login Name' }).fill(process.env.SAP_EMAIL!);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.SAP_PASSWORD!);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRoleUI5('IconTabFilter', { text: ' Trial Center' }).click();
  await expect(page.locateUI5('//VizInstanceCdm[1]/ComponentContainer[1]/XMLView[1]/GenericTile[1]/Text[1]')).toContainText('Introduction');
  await expect(page.locateUI5('//VizInstanceCdm[2]/ComponentContainer[1]/XMLView[1]/GenericTile[1]/Text[1]')).toContainText('Guided Tours');
  await expect(page.locateUI5('//VizInstanceCdm[3]/ComponentContainer[1]/XMLView[1]/GenericTile[1]/Text[1]')).toContainText('Trial Information');
});