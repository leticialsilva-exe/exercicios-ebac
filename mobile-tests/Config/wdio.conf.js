import { bsConf } from './bs.conf.js';
import { localConf } from './local.conf.js'
import { sauceConf } from './sauce.conf.js'

//import {} from '../node_modules/dotenv/config.js';

export const config = { 
    ...getConfig()
}

function getConfig() {
    switch (process.env.ENVIRONMENT) {
        case 'local':
            return localConf
        case 'saucelabs':
            return sauceConf
        case 'browserstack':
            return bsConf
    }
}

