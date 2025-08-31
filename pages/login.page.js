export class LoginPage {
        constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#loginButton');
    this.dismissButton = page.getByText('Dismiss');
  }

  async goto() {
    await this.page.goto('https://juice-shop.herokuapp.com/#/login');
    await this.dismissButton.click();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}