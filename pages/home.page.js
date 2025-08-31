import { expect } from '@playwright/test'

export class HomePage {
        constructor(page) {
    this.page = page;
    this.basketButton = page.getByText(' Your Basket');
    this.applePomaceAddButton = page.locator('//div[contains(text(), "Apple Pomace")]/../../../div[2]/button');
    this.checkoutButton = page.locator('#checkoutButton');
    this.addNewAddressButton = page.getByText('Add New Address');
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

  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }

  async clickAddNewAddressButton() {
    await this.addNewAddressButton.click();
  }
}