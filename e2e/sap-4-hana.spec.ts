import { test, expect } from '../fixtures/pages';

test('Test Login for SAP 4 Hana', { tag: ['@SAP', '@Login'] }, async ({ loginPage, homePage }) => {

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

test('Validate Home Page Tiles', { tag: ['@SAP', '@Home-Page'] }, async ({ loginPage, homePage, navigationHeader, trialCenterPage }) => {

  await test.step('Login to SAP', async () => {
    await loginPage.login();
    await homePage.closeTour();
    await expect(homePage.sapLogo).toBeVisible();
  });

  await test.step('Verify Home Page Tiles are correct', async () => {
    await expect(homePage.overviewTile).toContainText('Overview');
    await expect(homePage.financeTile).toContainText('Finance');
    await expect(homePage.ManufacturingandSupplyChainTile).toContainText('Manufacturing and Supply Chain');
    await expect(homePage.procurementTile).toContainText('Procurement');
  });
});


test('Validate Trial Center Cards', { tag: ['@SAP', '@Trial-Center'] }, async ({ loginPage, homePage, navigationHeader, trialCenterPage }) => {

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
