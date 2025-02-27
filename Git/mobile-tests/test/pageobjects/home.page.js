import { $ } from '@wdio/globals'

class HomePage {

        async openMenu(menu){
            await $(`id:tab-${menu}`).click()
            // await $('~Profile').click()
        }

        get ebacHomeLogo(){
            return $('android=new UiSelector().text("EBAC Store")')
        }
}

export default new HomePage();
