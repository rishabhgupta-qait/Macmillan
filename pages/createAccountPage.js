const elementUtil = require('../util/elementUtil')
class CreateAccountPage{

    get firstname(){return $('#firstName')}
    get lastname(){return $('#lastName')}
    get email(){return $('#email')}
    get emailConfirm(){return $('#emailConfirm')}
    get password(){return $('#password')}
    get passwordConfirm(){return $('#confirmPassword')}
    get institutionName(){return $('#institution')}

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
    verifyconditionOfPassword(text){
        return $(`//label[contains(text(),'${text}')]//preceding-sibling::*[name()='svg']`)
    }
    enterConfirmPassword(text){
        elementUtil.doSetValue(this.passwordConfirm,text)
    }
    //Enter institution name
    enterInstitutionName(text){
        elementUtil.doSetValue(this.institutionName,text)
    }
    //choose first qustion and answer:
    get clickOnFirstSecurityQuestionBox(){
        return $('#Security_Question_1__c')
    }
    enterFirstQuestionFromList(index){
        return $(`(//select[@id='Security_Question_1__c']//child::option)[${index}]`)
    }
    get enterAnswerOfFirstQuestion(){return $('#Security_Question_1_Answer__c')}
    enterFirstAnswer(text){
        elementUtil.doSetValue(this.enterAnswerOfFirstQuestion,text)
    }
    //choose second qustion and answer:
    get clickOnSecondSecurityQuestionBox(){
        return $('#Security_Question_2__c')
    }
    enterSecondQuestionFromList(index){
        return $(`(//select[@id='Security_Question_2__c']//child::option)[${index}]`)
    }
    get enterAnswerOfSecondQuestion(){return $('#Security_Question_2_Answer__c')}
    enterSecondAnswer(text){
        elementUtil.doSetValue(this.enterAnswerOfSecondQuestion,text)
    }
    //choose third question and answer:
    get clickOnThirdSecurityQuestionBox(){
        return $('#Security_Question_3__c')
    }
    enterThirdQuestionFromList(index){
        return $(`(//select[@id='Security_Question_3__c']//child::option)[${index}]`)
    }
    get enterAnswerOfThirdQuestion(){return $('#Security_Question_3_Answer__c')}
    enterThirdAnswer(text){
        elementUtil.doSetValue(this.enterAnswerOfThirdQuestion,text)
    }
    //moveToElement
    movetoElement(element){
        element.waitForDisplayed()
        element.moveTo()
    }
    //click on check box
    get clickOnFirstCheckBox(){return $("//input[@id='OptIn__c']//parent::div")}
    get clickOnSecondCheckBox(){return $("//input[@id='Terms_of_Service__c']//parent::div")}
    //click on createAccount
    get createAccountBtn(){return $('#signup')}
    






}
module.exports=new CreateAccountPage()