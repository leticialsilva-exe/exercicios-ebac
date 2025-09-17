import { generalConf } from './general.conf.js'
export let localConf = {
    runner: 'local',
    port: 4723,
    capabilities: process.env.PLATFORM === "android" ? [
        {
            'platformName': 'Android',
            'appium:deviceName': 'ebac-android',
            'appium:platformVersion': '15.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app':`${process.cwd()}/app/ebacshop.apks`,
            'appium:appWaitActivity':'.MainActivity',
            'appium:disableIdLocatorAutocompletion': true 
        }
    ] : [
        {
            "platformName": "iOS",
            "appium:platformVersion": "18.6",
            "appium:deviceName": "IPhone 15",
            "appium:automationName": "XCUITest",
            "appium:app": "/Users/leticia/Documents/EBAC/ebac-store-mobile-tests/app/LojaEBAC-sim.app",
            "appium:udid": "0C65B04D-D387-4D99-A317-DE374797C139",
            "appium:appWaitActivity": ".MainActivity",
            "appium:disableIdLocatorAutocompletion": true
        }
    ],
    ...generalConf
}