import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
  readonly sapLogo: Locator;

  constructor(page: Page) {
    super(page);
    this.sapLogo = page.getByRole('button', { name: 'SAP Logo' });
  }

  async closeTour() {
    await expect(this.page.getByRole('button', { name: 'Leave Tour' })).toBeVisible({ timeout: 15000 });
    await this.page.getByRole('button', { name: 'Leave Tour' }).click();
  }
}
