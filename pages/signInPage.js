const elementUtil = require('../util/elementUtil')
class SignInPage{
    get emailTextBox(){return $('#username')}
    get passwordBox(){return $('#password')}
    get signInBtn(){return $('#signin')}

    enterEmailId(text){
        elementUtil.doSetValue(this.emailTextBox,text)
    }
    enterPassword(text){
        elementUtil.doSetValue(this.passwordBox,text)
    }
    get closePopUp(){return $("//button[@aria-label='Close']")}  

    get mycouseListText(){return $("//p[text()='My Course List']")}
}
module.exports=new SignInPage()