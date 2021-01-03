const elementUtil = require('../util/elementUtil')
const signinpagelocators = require('../testData/Locators/signInPageLocators')
class SignInPage{
    //page locators:
    get emailTextBox(){return $(signinpagelocators.emailTextBox_id)}
    get passwordBox(){return $(signinpagelocators.passwordBox_id)}
    get signInBtn(){return $(signinpagelocators.signInBtn_id)}
    get closePopUp(){return $(signinpagelocators.closePopUp_xpath)}  
    get mycouseListText(){return $(signinpagelocators.mycouseListText_xpath)}
    
    //page actions:
    enterEmailId(text){
        elementUtil.doSetValue(this.emailTextBox,text)
    }
    enterPassword(text){
        elementUtil.doSetValue(this.passwordBox,text)
    }  
}
module.exports=new SignInPage()