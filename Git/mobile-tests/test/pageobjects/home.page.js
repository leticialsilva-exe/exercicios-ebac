import { $ } from '@wdio/globals'

class HomePage {

        async openMenu(menu){
            await $(`id:tab-${menu}`).click()
            // await $('~Profile').click()
        }
}

export default new HomePage();
