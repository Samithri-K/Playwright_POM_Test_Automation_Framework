import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import users from '../../test-data/users.json';

test.describe('Login Feature', () => {

  test('Valid user should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );
    await loginPage.verifyLoginSuccess();
  });

  test('Invalid user should see error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );
    await loginPage.verifyInvalidLoginError();
  });

});
