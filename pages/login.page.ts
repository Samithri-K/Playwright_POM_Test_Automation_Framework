import { Page, expect } from '@playwright/test';

export class LoginPage {
  private usernameInput = '#username';
  private passwordInput = '#password';
  private loginButton = 'button[type="submit"]';

  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/login');
  }

  async enterUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/dashboard/);
  }
}

