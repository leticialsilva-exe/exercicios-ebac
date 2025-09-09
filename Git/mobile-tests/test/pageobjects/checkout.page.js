import {$, driver} from '@wdio/globals'

class CheckoutPage {

    get addToCart(){
        return $('~addToCart')
    }

    get btnPayment(){
        return $('~selectAddressOrContinueToPayment')
    }

    get btnCompleteCheckout(){
        return $('~completeCheckout')
    }

    get checkTransactionSuccessful(){
        return $('~transactionSuccessfulImage')
    }

    get btnGoBackHome(){
        return $('~goBackHome')
    }


}

export default new CheckoutPage();