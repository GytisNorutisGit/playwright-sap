import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';
import { NavigationHeader } from '../pages/navigation-header';
import { TrialCenterPage } from '../pages/trial-center-page';

type Pages = {
  loginPage: LoginPage;
  homePage: HomePage;
  navigationHeader: NavigationHeader;
  trialCenterPage: TrialCenterPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  navigationHeader: async ({ page }, use) => {
    await use(new NavigationHeader(page));
  },
  trialCenterPage: async ({ page }, use) => {
    await use(new TrialCenterPage(page));
  },
});

export { expect } from '@playwright/test';
