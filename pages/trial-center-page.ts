import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class TrialCenterPage extends BasePage {
  readonly introductionTile: Locator;
  readonly guidedToursTile: Locator;
  readonly trialInformationTile: Locator;

  constructor(page: Page) {
    super(page);
    this.introductionTile = page.locateUI5('//VizInstanceCdm[1]/ComponentContainer[1]/XMLView[1]/GenericTile[1]/Text[1]');
    this.guidedToursTile = page.locateUI5('//VizInstanceCdm[2]/ComponentContainer[1]/XMLView[1]/GenericTile[1]/Text[1]');
    this.trialInformationTile = page.locateUI5('//VizInstanceCdm[3]/ComponentContainer[1]/XMLView[1]/GenericTile[1]/Text[1]');
  }


}
