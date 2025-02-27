import { $ } from '@wdio/globals'

class signUpPage  {
    get firstName(){
        return $('id:firstName')
    }

    get lastName(){
        return $('id:lastName')
    }
 
    get phoneNumber(){
        return $('id:phone')
    }

    get emailAdress(){
        return $('id:email')
    }

    get password(){
        return $('id:password')
    }

    get reEnterPassword(){
        return $('id:repassword')
    }

    get btnCreate(){
        return $('android=new UiSelector().text("Create")')
    }

    
}

export default new signUpPage();
