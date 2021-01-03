const elementUtil = require('../util/elementUtil')
class YopmailHomePage{
    get emailbox(){return $('#login')}
    get checkBoxBtn(){return $("//input[@type='submit']")}
    
    enterEmail(email){
        elementUtil.doSetValue(this.emailbox,email)
    }
    get verifyMailFrom(){return $("//div[text()='noreply@mldev.cloud']")}
    get MailRecieved(){return $("//span[contains(text(),'noreply@mldev.cloud')]")}
    get completeRegistrationBtn(){return $("//a[text()='Complete Registration']")}
    get aftercompleteRegistration(){return $("//div[@class='formContent']//h2")}
    get backToEmailBtn(){return $('#backButton')}
    get afterbackToEmailBtn(){return $('//h2')}
    get username(){return $('#username')}

    enterUsename(usenametext){
        elementUtil.doSetValue(this.username,usenametext)
    }
    get switchtoframeOnMail(){return $('#ifmail')}
    get switchtoframeOnInbox(){return $('#ifinbox')}  
}
module.exports=new YopmailHomePage()