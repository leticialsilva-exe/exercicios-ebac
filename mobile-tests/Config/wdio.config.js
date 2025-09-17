export const config = {

    // runner: 'local',
    // port: 4723,
    user: 'oauth-leehslash-903e6',
    key: '4cfce2c2-e2e6-4dbb-af5a-9557287e0d0f',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',      
    specs: [
        '../test/specs/**/login.test.js'
    ],
    suites: {
        login: [
            '../test/specs/login.test.js'
        ],
        signUp: [
            '../test/specs/signUp.test.js'
        ],
        cart: [
            '../test/specs/cart.test.js'
        ]
    },
    maxInstances: 1,
    capabilities: [
        {
            "platformName": "iOS",
            "appium:app": "storage:filename=LojaEBAC-sim.zip", // The filename of the mobile app
            "appium:deviceName": "iPhone Simulator",
            "appium:platformVersion": "15.0",
            "appium:automationName": "XCUITest",
            "appium:disableLocatorAutocompletion": true,
            "sauce:options": {
                "build": "appium-build-teste-ebacshop",
                "name": "EBAC Shop Test iOS",
                "deviceOrientation": "PORTRAIT",
            },
        },
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