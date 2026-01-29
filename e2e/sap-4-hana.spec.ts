import { test, expect } from '../fixtures/pages';
import { TrialCenterPage } from '../pages/trial-center-page';

test('Test Login for SAP 4 Hana', { tag: '@Login' }, async ({ loginPage, homePage }) => {

  await test.step('Login to SAP', async () => {
    await loginPage.login();
  });

  await test.step('Close the tour', async () => {
    await homePage.closeTour();
  });

  await test.step('Verify I am successfully logged in to SAP and I can see the SAP Logo', async () => {
    await expect(homePage.sapLogo).toBeVisible();
  });
});


test('Validate Trial Center Cards', { tag: '@Trial-Center' }, async ({ loginPage, homePage, navigationHeader, trialCenterPage }) => {

  await test.step('Login to SAP', async () => {
    await loginPage.login();
    await homePage.closeTour();
    await expect(homePage.sapLogo).toBeVisible();
  });

  await test.step('Navigate to Trial Center from the Navigation Header', async () => {
    await navigationHeader.navigateToPage('Trial Center');
  });

  await test.step('Verify that Introduction, Guided Tours and Trial Information Tiles are visible', async () => {
    await expect(trialCenterPage.introductionTile).toContainText('Introduction');
    await expect(trialCenterPage.guidedToursTile).toContainText('Guided Tours');
    await expect(trialCenterPage.trialInformationTile).toContainText('Trial Information');
  });
  
});