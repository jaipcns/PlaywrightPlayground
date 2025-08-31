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
  await loginPage.goto()
  await loginPage.login(testData.login.validUser, testData.login.validPass)
  await homePage.checkBasketButton()
  await homePage.addApplePomace()
  await homePage.clickBasketButton()
  await homePage.clickCheckoutButton()
  await homePage.clickAddNewAddressButton()
  await newAddressPage.fillNewAddressForm(testData.address.country, testData.address.name, testData.address.mobileno, testData.address.zipcode, testData.address.address, testData.address.city, testData.address.state)
  await newAddressPage.submitAddress()
})



