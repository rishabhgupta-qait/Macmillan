class YopmailHomePage{
    get emailbox(){return $('#login')}
    get checkBoxBtn(){return $("//input[@type='submit']")}
    
    enterEmail(email){
        this.emailbox.waitForDisplayed()
        this.emailbox.setValue(email)
    }
    clickOnElement(element){
        element.waitForDisplayed()
        element.click()
    }
    get verifyMailFrom(){return $("//div[text()='noreply@mldev.cloud']")}
    get MailRecieved(){return $("//span[contains(text(),'noreply@mldev.cloud')]")}
    get completeRegistrationBtn(){return $("//a[text()='Complete Registration']")}
    get aftercompleteRegistration(){return $("//div[@class='formContent']//h2")}
    get backToEmailBtn(){return $('#backButton')}
    get afterbackToEmailBtn(){return $('//h2')}
    get username(){return $('#username')}

    enterUsename(usenametext){
        this.username.waitForDisplayed()
        this.username.setValue()
    }
    get switchtoframeOnMail(){return $('#ifmail')}
    get switchtoframeOnInbox(){return $('#ifinbox')}
    


}
module.exports=new YopmailHomePage()