const createaccountpagelocators = require('../testData/Locators/createAccountPageLocators')
class ElementUtil{
    clickOnElement(element){
        element.waitForDisplayed()
        element.click()
    }
    doSetValue(element,value){
        element.waitForDisplayed()
        element.setValue(value)
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
}
module.exports=new ElementUtil()