import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class NavigationHeader extends BasePage {
  readonly sapLogo: Locator;

  constructor(page: Page) {
    super(page);
    this.sapLogo = page.getByRole('button', { name: 'SAP Logo' });
  }

  async clickSAPLogo() {
    await this.sapLogo.click();
  }

  async navigateToPage(option: 'Trial Center' | 'Finance' | 'Manufacturing and Supply Chain' | 'Procurement' | 'Project Management' | 'Sales' | 'Other') {
    await expect(this.sapLogo).toBeVisible();
    switch (option) {
      case 'Trial Center':
        await this.page.getByRoleUI5('IconTabFilter', { text: 'Trial Center' }).click();
        break;
      case 'Finance':
        await this.page.getByRoleUI5('IconTabFilter', { text: 'Finance' }).click();
        break;
      case 'Procurement':
        await this.page.getByRoleUI5('IconTabFilter', { text: 'Procurement' }).click();
        break;
      case 'Project Management':
        await this.page.getByRoleUI5('IconTabFilter', { text: 'Projet Management' }).click();
        break;
      case 'Sales':
        await this.page.getByRoleUI5('IconTabFilter', { text: 'Sales' }).click();
        break;
      case 'Other':
        await this.page.getByRoleUI5('IconTabFilter', { text: 'Other' }).click();
        break;
      default:
        throw new Error(`Unknown navigation option: ${option}`);
    }
  }
}
