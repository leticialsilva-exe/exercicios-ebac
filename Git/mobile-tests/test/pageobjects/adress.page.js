import { mobileAcceptAlert } from "appium-uiautomator2-driver/build/lib/commands/alert";

/*

name //XCUIElementTypeTextField[@value="Enter your name"]
mobile //XCUIElementTypeTextField[@value="Enter your mobile number"]
adress //XCUIElementTypeTextField[@value="Enter your address"]
city //XCUIElementTypeTextField[@value="City"]
state //XCUIElementTypeTextField[@value="State"]
zipcode //XCUIElementTypeTextField[@value="ZipCode"]
btn save ~save

btn payment ~selectAddressOrContinueToPayment

complete checkout ~completeCheckout

check its true ~transactionSuccessfulImage
if so go back home ~goBackHome

check if it turned back to home //XCUIElementTypeStaticText[@name="EBAC Store"]
*/

import { $ , driver } from '@wdio/globals'

class AdressPage {

        get btnAddAddress(){
            return $('~addNewAddress')
        }

        get inputName(){
            return $('//XCUIElementTypeTextField[@value="Enter your name"]')
        }

        get inputMobile(){
            return $('//XCUIElementTypeTextField[@value="Enter your mobile number"]')
        }

        get inputAdress(){
            return $('//XCUIElementTypeTextField[@value="Enter your address"]')
        }

        get inputCity(){
            return $('//XCUIElementTypeTextField[@value="City"]')
        }

        get inputState(){
            return $('//XCUIElementTypeTextField[@value="State"]')
        }

        get inputZipcode(){
            return $('//XCUIElementTypeTextField[@value="ZipCode"]')
        }

        get btnSave(){
            return $('~save')
        }
}

export default new AdressPage();