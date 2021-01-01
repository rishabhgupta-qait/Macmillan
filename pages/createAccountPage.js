class CreateAccountPage{

    get firstname(){return $('#firstName')}
    get lastname(){return $('#lastName')}
    get email(){return $('#email')}
    get emailConfirm(){return $('#emailConfirm')}
    get password(){return $('#password')}
    get passwordConfirm(){return $('#confirmPassword')}
    get institutionName(){return $('#institution')}

    enterFirstname(text){
        this.firstname.waitForDisplayed()
        this.firstname.setValue(text)
    }
    enterLastname(text){
        this.lastname.waitForDisplayed()
        this.lastname.setValue(text)
    }
    enterEmail(text){
        this.email.waitForDisplayed()
        this.email.setValue(text)
    }
    enterEmailConfirm(text){
        this.emailConfirm.waitForDisplayed()
        this.emailConfirm.setValue(text)
    }
    enterPassword(text){
        this.password.waitForDisplayed()
        this.password.setValue(text)
    }
    verifyconditionOfPassword(text){
        return $(`//label[contains(text(),'${text}')]//preceding-sibling::*[name()='svg']`)
    }
    enterConfirmPassword(text){
        this.passwordConfirm.waitForDisplayed()
        this.passwordConfirm.setValue(text)
    }
    //Enter institution name
    enterInstitutionName(text){
        this.institutionName.waitForDisplayed()
        this.institutionName.setValue('New York Botanical Garden')
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
        this.enterAnswerOfFirstQuestion.waitForDisplayed()
        this.enterAnswerOfFirstQuestion.setValue(text)
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
        this.enterAnswerOfSecondQuestion.waitForDisplayed()
        this.enterAnswerOfSecondQuestion.setValue(text)
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
        this.enterAnswerOfThirdQuestion.waitForDisplayed()
        this.enterAnswerOfThirdQuestion.setValue(text)
    }
    //moveToElement and click
    movetoElement(element){
        element.waitForDisplayed()
        element.moveTo()
    }
    clickOnElement(element){
        element.waitForDisplayed()
        element.click()
    }
    //click on check box
    get clickOnFirstCheckBox(){return $("//input[@id='OptIn__c']//parent::div")}
    get clickOnSecondCheckBox(){return $("//input[@id='Terms_of_Service__c']//parent::div")}
    //click on createAccount
    get createAccountBtn(){return $('#signup')}
    






}
module.exports=new CreateAccountPage()