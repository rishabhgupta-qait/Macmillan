const createaccountpagelocators = require('../testData/Locators/createAccountPageLocators')
const saplinglearning = require('../pages/saplingLearingPage')
//const elementUtil = require('../util/elementUtil')
class ElementUtil{
    clickOnElement(element){
        element.waitForDisplayed()
        element.click()
    }
    doClearValue(element){
        element.waitForDisplayed()
        element.clearValue()
    }
    doSetValue(element,value){
        element.waitForDisplayed()
        element.setValue(value)
    }
    doScrollIntoViewPort(element){
        element.waitForDisplayed()
        element.scrollIntoView()
    }
    doGetText(element){
        element.waitForDisplayed()
        return element.getText()
    }
    doGetValue(element){
        element.waitForDisplayed()
        return element.getValue()
    }
    doGetAttribute(element,value){
        element.waitForDisplayed()
        return element.getAttribute(value)
    }
    get enterTimestamp(){
        return new Date().getTime()
    }
    getDynamicXpath(text,xpath){
        var str1 = xpath.replace("${value}",text)
        return str1 
    }
    waitForElementToBeVisible(locator) {
        let ping_time = 500;
            browser.waitUntil(() => {
                let result = isVisible(locator)
                logger("waiting for element to be visible")
                logger(`${locator} is Visible`)
                return result;
            }, 50000 , `element is not visible ===> ${locator}`, ping_time)
    }
    //moveToElement
    movetoElement(element){
        element.waitForDisplayed()
        element.moveTo()
    }
    waitForTitleToBeVisible() {
        let ping_time = 500;
            browser.waitUntil(() => {
                console.log('waiting for element to be visible')
                    return browser.getTitle()                
            }, 50000 , `Title is not visible`, ping_time)
    }
}
module.exports=new ElementUtil()