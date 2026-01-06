
import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import users from '../../test-data/users.json';

test.describe('Login Feature', () => {

  test('Valid user should be able to login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );
    await loginPage.verifyLoginSuccess();
  });

});
