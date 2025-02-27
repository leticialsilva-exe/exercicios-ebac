import { $ } from '@wdio/globals'

class loginPage {

        get email(){
            return $('id:email')
        }

        get password(){
            return $('android=new UiSelector().text("Password")')
        }

        get btnLogin(){
            return $('~Login') //~means acessability tagId
        }
        
        get btnSignUp (){
            return $('android=new UiSelector().text("Sign up")')
        }
        
        async login(email, password){
            await this.email.setValue(email)
            await this.password.setValue(password)
            await this.btnLogin.click()
        }


}

export default new loginPage();
