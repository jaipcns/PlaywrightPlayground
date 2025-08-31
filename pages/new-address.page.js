export class NewAddressPage {
        constructor(page) {
    this.page = page;
    this.countryInput = page.getByText('Country')
    this.nameInput = page.getByText('Name')
    this.mobilenoInput = page.getByText('Mobile Number')
    this.zipcodeInput = page.getByText('ZIP Code')
    this.addressInput = page.getByText('Address', { exact: true })
    this.cityInput = page.getByText('City')
    this.stateInput = page.getByRole('textbox', { name: 'State' })
    this.submitButton = page.locator('#submitButton')
  }

  async fillNewAddressForm(country, name, mobileno, zipcode, address, city, state) {
    await this.countryInput.fill(country);
    await this.nameInput.fill(name);
    await this.mobilenoInput.fill(mobileno);  
    await this.zipcodeInput.fill(zipcode);
    await this.addressInput.fill(address);
    await this.cityInput.fill(city);
    await this.stateInput.fill(state);
  }

  async submitAddress() {
    await this.submitButton.click();
  } 

}