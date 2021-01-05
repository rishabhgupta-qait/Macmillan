const elementUtil = require('../util/elementUtil')
const createaccountpagelocators = require('../testData/Locators/createAccountPageLocators')
class CreateAccountPage{
    //Page Locators:
    get firstname(){return $(createaccountpagelocators.firstname_id)}
    get lastname(){return $(createaccountpagelocators.lastname_id)}
    get email(){return $(createaccountpagelocators.email_id)}
    get emailConfirm(){return $(createaccountpagelocators.confirmmail_id)}
    get password(){return $(createaccountpagelocators.password_id)}
    verifyconditionOfPassword(value){
        return $(elementUtil.getDynamicXpath(value,createaccountpagelocators.verifyconditionOfPassword))}
    get passwordConfirm(){return $(createaccountpagelocators.confirm_password_id)}
    get institutionName(){return $(createaccountpagelocators.institution_id)}
    //click on check box
    get clickOnFirstCheckBox(){return $(createaccountpagelocators.clickOnFirstCheckBox_xpath)}
    get clickOnSecondCheckBox(){return $(createaccountpagelocators.clickOnSecondCheckBox_xpath)}
    //click on createAccount
    get createAccountBtn(){return $(createaccountpagelocators.createAccountBtn_id)}
    //choose first qustion and answer:
    get clickOnFirstSecurityQuestionBox(){
        return $(createaccountpagelocators.qus_1_id)
    }
    enterFirstQuestionFromList(value){
        return $(elementUtil.getDynamicXpath(value,createaccountpagelocators.enterFirstQuestionFromList_xpath))
    }
    get enterAnswerOfFirstQuestion(){return $(createaccountpagelocators.ans_1_id)}
    //choose second qustion and answer:
    get clickOnSecondSecurityQuestionBox(){
        return $(createaccountpagelocators.qus_2_id)
    }
    enterSecondQuestionFromList(value){
        return $(elementUtil.getDynamicXpath(value,createaccountpagelocators.enterSecondQuestionFromList_xpath))
    }
    get enterAnswerOfSecondQuestion(){return $(createaccountpagelocators.ans_2_id)}
    //choose third question and answer:
    get clickOnThirdSecurityQuestionBox(){
        return $(createaccountpagelocators.qus_3_id)
    }
    enterThirdQuestionFromList(value){
        return $(elementUtil.getDynamicXpath(value,createaccountpagelocators.enterThirdQuestionFromList_xpath))
    }
    get enterAnswerOfThirdQuestion(){return $(createaccountpagelocators.ans_3_id)}

    //Page Actions:
    enterFirstname(text){
        elementUtil.doSetValue(this.firstname,text)
       // this.firstname.setValue(text)
    }
    enterLastname(text){
        elementUtil.doSetValue(this.lastname,text)
    }
    enterEmail(text){
        elementUtil.doSetValue(this.email,text)
    }
    enterEmailConfirm(text){
        elementUtil.doSetValue(this.emailConfirm,text)
    }
    enterPassword(text){
        elementUtil.doSetValue(this.password,text)
    }
    enterConfirmPassword(text){
        elementUtil.doSetValue(this.passwordConfirm,text)
    }
    //Enter institution name
    enterInstitutionName(text){
        elementUtil.doSetValue(this.institutionName,text)
    }
    //Enter Answer 1
    enterFirstAnswer(text){
        elementUtil.doSetValue(this.enterAnswerOfFirstQuestion,text)
    }
    //Enter Answer 2
    enterSecondAnswer(text){
        elementUtil.doSetValue(this.enterAnswerOfSecondQuestion,text)
    }
    //Enter Answer 3
    enterThirdAnswer(text){
        elementUtil.doSetValue(this.enterAnswerOfThirdQuestion,text)
    }
    //moveToElement
    movetoElement(element){
        element.waitForDisplayed()
        element.moveTo()
    }
}
module.exports=new CreateAccountPage()