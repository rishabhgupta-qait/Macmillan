const elementUtil = require('../util/elementUtil')
class SignInPage{
    //page locators:
    get emailTextBox(){return $('#username')}
    get passwordBox(){return $('#password')}
    get signInBtn(){return $('#signin')}
    get closePopUp(){return $("//button[@aria-label='Close']")}  
    get mycouseListText(){return $("//p[text()='My Course List']")}
    
    //page actions:
    enterEmailId(text){
        elementUtil.doSetValue(this.emailTextBox,text)
    }
    enterPassword(text){
        elementUtil.doSetValue(this.passwordBox,text)
    }  
}
module.exports=new SignInPage()