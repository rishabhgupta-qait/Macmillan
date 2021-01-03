const elementUtil = require('../util/elementUtil')
const yopmailhomepagelocators = require('../testData/Locators/yopmailHomePageLocators')
class YopmailHomePage{
    //Page Locators:
    get emailbox(){return $(yopmailhomepagelocators.emailbox_id)}
    get checkBoxBtn(){return $(yopmailhomepagelocators.checkBoxBtn_xpath)}
    get verifyMailFrom(){return $(yopmailhomepagelocators.verifyMailFrom_xpath)}
    get MailRecieved(){return $(yopmailhomepagelocators.MailRecieved_xpath)}
    get completeRegistrationBtn(){return $(yopmailhomepagelocators.completeRegistrationBtn_xpath)}
    get aftercompleteRegistration(){return $(yopmailhomepagelocators.aftercompleteRegistration_xpath)}
    get backToEmailBtn(){return $(yopmailhomepagelocators.backToEmailBtn_id)}
    get afterbackToEmailBtn(){return $(yopmailhomepagelocators.afterbackToEmailBtn_header)}
    get username(){return $(yopmailhomepagelocators.username_id)}
    get switchtoframeOnMail(){return $(yopmailhomepagelocators.switchtoframeOnMail_id)}
    get switchtoframeOnInbox(){return $(yopmailhomepagelocators.switchtoframeOnInbox_id)}

    //Page Action:
    enterEmail(email){
        elementUtil.doSetValue(this.emailbox,email)
    }
    enterUsename(usenametext){
        elementUtil.doSetValue(this.username,usenametext)
    }  
}
module.exports=new YopmailHomePage()