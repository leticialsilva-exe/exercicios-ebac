import { bsConf } from './bs.conf.js';
import { localConf } from './local.conf.js'
import { sauceConf } from './sauce.conf.js'
// const { bsConf } = require('./bs.conf.js');
// const { localConf } = require('./local.conf.js');
// const { sauceConf } = require('./sauce.conf.js');

import 'dotenv/config';

    // wdio.conf.js
    exports.config = {
        ...getConfig()
    };

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

// export const config = getConfig();
// module.exports = getConfig();

