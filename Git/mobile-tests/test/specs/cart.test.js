import { expect , driver} from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import homePage from '../pageobjects/home.page.js'
import adressPage from '../pageobjects/adress.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('My Cart', () => {

    it('should add a product to the cart and finish the shopping', async () => {
        let profileMenu = driver.isAndroid ? 'profile' : 'Account'

        // Login
        await homePage.openMenu(profileMenu)
        await loginPage.login('lele@ebac.com','ebac123')
        // Add product to cart
        await homePage.openMenu('Browse')
        await $('(//XCUIElementTypeOther[@name="productDetails"])[3]').click() 
        await checkoutPage.addToCart.click() // selecting first product
        // Check if the address already exists
        if (!((await adressPage.btnPayment).isDisplayed()).toBeTruthy()) {
            await adressPage.btnAddAddress.click()
            await adressPage.inputName.setValue('Leticia')
            await adressPage.inputMobile.setValue('11999325252')
            await adressPage.inputAdress.setValue('Rua do Teste, 123')
            await adressPage.inputCity.setValue('Lisboa')
            await adressPage.inputState.setValue('Lisboa')
            await adressPage.inputZipcode.setValue('1234-567\n')
            await adressPage.btnSave.click()
        }
        // Proceed to checkout
        await checkoutPage.btnPayment.click()
        await checkoutPage.btnCompleteCheckout.click()
        expect((await checkoutPage.checkTransactionSuccessful).isDisplayed()).toBeTruthy()
        await checkoutPage.btnGoBackHome.click()
        expect((await homePage.ebacHomeLogo).isDisplayed()).toBeTruthy()
    });
});