import { expect , driver} from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import signUpPage from '../pageobjects/signUp.page.js'
import { faker } from '@faker-js/faker/locale/pt_PT'

describe('Sign Up', () => {
    it('should create a new credencial', async () => {
        let firstName = faker.person.firstName()
        let lastName = faker.person.lastName()
        let phone = faker.phone.number()
        let email = faker.internet.email()

        await homePage.openMenu('profile')
        await loginPage.btnSignUp.click()
        await signUpPage.firstName.setValue(firstName)
        await signUpPage.lastName.setValue(lastName)
        await signUpPage.phoneNumber.setValue(phone)
        await signUpPage.emailAdress.setValue(email)
        await signUpPage.password.setValue('T&st.12#')
        await signUpPage.reEnterPassword.setValue('T&st.12#')
        await signUpPage.btnCreate.click()
        //checking if has logged in
        expect((await homePage.ebacHomeLogo).isDisplayed()).toBeTruthy()
        //checking if the profile logged has same informations as inputed
        // await homePage.openMenu('profile')
        // expect((await profilePage.profileInfo(`${lastName} ${firstName}`)).isDisplayed()).toBeTruthy()
        // expect((await profilePage.profileInfo(`${phone}`)).isDisplayed()).toBeTruthy()
        // expect((await profilePage.profileInfo(`${email}`)).isDisplayed()).toBeTruthy()
    })
})

