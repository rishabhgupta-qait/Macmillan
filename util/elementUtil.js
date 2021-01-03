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
}
module.exports=new ElementUtil()