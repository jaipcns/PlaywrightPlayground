import { expect } from '@playwright/test'

export class HomePage {
  constructor(page) {
    this.page = page;
    this.basketButton = page.getByText(' Your Basket');
    this.applePomaceAddButton = page.locator('//div[contains(text(), "Apple Pomace")]/../../../div[2]/button');
    this.appleJuiceAddButton = page.locator('//div[contains(text(), "Apple Juice (1000ml)")]/../../../div[2]/button');
    this.applePomaceItem = page.locator('//div[contains(text(), "Apple Pomace")]');
    this.appleJuiceItem = page.locator('//div[contains(text(), "Apple Juice (1000ml)")]');
    this.bananaJuiceItem = page.locator('//div[contains(text(), "Banana Juice (1000ml)")]');
    this.checkoutButton = page.locator('#checkoutButton');
    this.addNewAddressButton = page.getByText('Add New Address');
    this.searchButton = page.locator('#searchQuery');
    this.searchInput = page.locator('#mat-input-1');
    this.dismissButton = page.getByText('Dismiss');
  }

  async gotoHomepage() {
    await this.page.goto('https://juice-shop.herokuapp.com/');
    await this.dismissButton.click();
  }

  async clickBasketButton() {
    await this.basketButton.click();
  }

  async checkBasketButton() {
    await expect(this.basketButton).toBeVisible();
  }

  async addApplePomace() {
    await this.applePomaceAddButton.click();
  }

  async addAppleJuice() {
    await this.appleJuiceAddButton.click();
  }

  async clickCheckoutButton() {
    if (await this.checkoutButton.isDisabled()) {   // Check if the basket is updated
      await this.page.reload();
    }
    await this.checkoutButton.click();
  }

  async clickAddNewAddressButton() {
    await this.addNewAddressButton.click();
  }

  async searchProduct(word) {
    await this.searchButton.click();
    await this.searchInput.fill(word);
  }

  async checkProductToBeVisible(productName) {
    await expect(this.page.locator(`//div[contains(text(), '${productName}')]`)).toBeVisible();
  }

  async checkProductNotToBeVisible(productName) {
    await expect(this.page.locator(`//div[contains(text(), '${productName}')]`)).not.toBeVisible();
  }

}