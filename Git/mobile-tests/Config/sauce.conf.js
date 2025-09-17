import { generalConf } from './general.conf.js'
export let sauceConf = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
    capabilities: process.env.PLATFORM === "android" ? [
        {
            'platformName': 'Android',
            'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
            'appium:deviceName': 'Android GoogleAPI Emulator',
            'appium:platformVersion': '12.0',
            'appium:automationName': 'UiAutomator2',
            'appium:disableIdLocatorAutocompletion': true ,
            'sauce:options': {
                build: 'appium-build-teste-ebacshop-android',
                name: 'Ebac Shop Teste',
                deviceOrientation: 'PORTRAIT',
                appiumVersion: '2.0.0'
            },
        }
    ] : [
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
        }
        
    ],
    ...generalConf
}