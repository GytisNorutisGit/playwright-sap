import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
  readonly sapLogo: Locator;
  readonly overviewTile: Locator;
  readonly financeTile: Locator;
  readonly ManufacturingandSupplyChainTile: Locator;
  readonly procurementTile: Locator;  

  constructor(page: Page) {
    super(page);
    this.sapLogo = page.getByRole('button', { name: 'SAP Logo' });
    this.overviewTile = page.locateUI5('//VerticalLayout[2]/WrapperItem[1]/GenericTile[1]/Text[1]');
    this.financeTile =page.locateUI5('//VerticalLayout[2]/WrapperItem[1]/GenericTile[2]/Text[1]');
    this.ManufacturingandSupplyChainTile = page.locateUI5('//VerticalLayout[2]/WrapperItem[1]/GenericTile[3]/Text[1]');
    this.procurementTile = page.locateUI5('//VerticalLayout[2]/WrapperItem[1]/GenericTile[4]/Text[1]');
  }

  async closeTour() {
    await expect(this.page.getByRole('button', { name: 'Leave Tour' })).toBeVisible({ timeout: 15000 });
    await this.page.getByRole('button', { name: 'Leave Tour' }).click();
  }
}
