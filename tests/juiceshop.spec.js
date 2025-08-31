// @ts-check
import { test } from '@playwright/test'
import { LoginPage } from '../pages/login.page'
import { HomePage } from '../pages/home.page'
import { NewAddressPage } from '../pages/new-address.page'
import testData from '../data/test-data.json'

test('TC 1', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)
  const newAddressPage = new NewAddressPage(page)
  await loginPage.gotoLogin()
  await loginPage.login(testData.login.validUser, testData.login.validPass)
  await homePage.checkBasketButton()  // Verify user successfully logged in
  await homePage.addApplePomace()
  await homePage.clickBasketButton()
  await homePage.clickCheckoutButton()
  await homePage.clickAddNewAddressButton()
  await newAddressPage.fillNewAddressForm(testData.address1.country, testData.address1.name, testData.address1.mobileno, testData.address1.zipcode, testData.address1.address, testData.address1.city, testData.address1.state)
  await newAddressPage.submitAddress()
})

test('TC 2', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)
  const newAddressPage = new NewAddressPage(page)
  await loginPage.gotoLogin()
  await loginPage.login(testData.login.validUser, testData.login.validPass)
  await homePage.checkBasketButton()  // Verify user successfully logged in
  await homePage.addApplePomace()
  await homePage.addAppleJuice()
  await homePage.clickBasketButton()
  await homePage.clickCheckoutButton()
  await homePage.clickAddNewAddressButton()
  await newAddressPage.fillNewAddressForm(testData.address2.country, testData.address2.name, testData.address2.mobileno, testData.address2.zipcode, testData.address2.address, testData.address2.city, testData.address2.state)
  await newAddressPage.submitAddress()
})

test('TC 3', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.gotoHomepage()
  await homePage.searchProduct('apple')
  await page.keyboard.press('Enter');
  await homePage.checkProductToBeVisible('Apple Pomace')
  await homePage.checkProductToBeVisible('Apple Juice (1000ml)')
  await homePage.checkProductNotToBeVisible('Banana Juice (1000ml)')
})


