export const config = {

    runner: 'local',
    port: 4723,

    // user: 'oauth-leehslash-a1f95',
    // key: '7ceb9fcb-5acc-4e45-a757-525962f6f13e',
    // hostname: 'ondemand.us-west-1.saucelabs.com',
    // port: 443,
    // baseUrl: 'wd/hub',
      
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': 'ebac-android',
            'appium:platformVersion': '15.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app':`${process.cwd()}/app/ebacshop.apks`,
            'appium:appWaitActivity':'.MainActivity',
            'appium:disableIdLocatorAutocompletion': true 
        }
        // {
        //     platformName: 'Android',
        //     'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
        //     'appium:deviceName': 'Android GoogleAPI Emulator',
        //     'appium:platformVersion': '12.0',
        //     'appium:automationName': 'UiAutomator2',
        //     'appium:disableIdLocatorAutocompletion': true ,
        //     'sauce:options': {
        //        build: 'appium-build-teste-ebacshop',
        //        name: 'EBAC Shop Test',
        //        deviceOrientation: 'PORTRAIT',
        //        appiumVersion: '2.0.0'
        //      },
        // }
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec', 
        ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false}
        ]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
            await driver.takeScreenshot();
    }
}
