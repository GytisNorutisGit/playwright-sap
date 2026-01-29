import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async login() {
    await this.page.goto(process.env.SAP_URL!);
    await this.page.getByRole('textbox', { name: 'Email, User ID or Login Name' }).click();
    await this.page.getByRole('textbox', { name: 'Email, User ID or Login Name' }).fill(process.env.SAP_EMAIL!);
    await this.page.getByRole('button', { name: 'Continue' }).click();
    await this.page.getByRole('textbox', { name: 'Password' }).click();
    await this.page.getByRole('textbox', { name: 'Password' }).fill(process.env.SAP_PASSWORD!);
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }
}
