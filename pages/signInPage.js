class SignInPage{
    get emailTextBox(){return $('#username')}
    get passwordBox(){return $('#password')}
    get signInBtn(){return $('#signin')}

    enterEmailId(text){
        this.emailTextBox.waitForDisplayed()
        this.emailTextBox.setValue(text)
    }
    enterPassword(text){
        this.passwordBox.waitForDisplayed()
        this.passwordBox.setValue(text)
    }
    clickOnElement(element){
        element.waitForDisplayed()
        element.click()
    }
    get closePopUp(){return $("//button[@aria-label='Close']")}  

    get mycouseListText(){return $("//p[text()='My Course List']")}




}
module.exports=new SignInPage()