const { assert } = require('chai')
const createaccountpage = require('../pages/createAccountPage')
const homepage = require('../pages/homePage')
const signInFormData = require('../testData/signInFormData')
const signinfromdata = require('../testData/signInFormData')
const elementUtil = require('../util/elementUtil')
const constant = require('../testData/constant')
describe('handle application login',function(){
    it("clicked on create account button",function(){
        browser.url('/')
        browser.maximizeWindow()
        elementUtil.clickOnElement(homepage.clickOnCreateAccount)
    })
    it('verify logo after clicked on create Account',function(){
        homepage.logoAfterClickOnCreateAccount.waitForDisplayed()
        const text = elementUtil.doGetText(homepage.logoAfterClickOnCreateAccount)
        assert.equal(constant.CREATE_ACCOUNT_TEXT,text)
    })
    it('enter firstname',function(){
        createaccountpage.enterFirstname(signinfromdata.firstname)
        assert.equal(signinfromdata.firstname,elementUtil.doGetValue(createaccountpage.firstname))
    })
    it('enter lastname',function(){
        createaccountpage.enterLastname(signinfromdata.lastname)
        assert.equal(signinfromdata.lastname,elementUtil.doGetValue(createaccountpage.lastname))
    })
    it('enter email',function(){
        createaccountpage.enterEmail(signinfromdata.email)
        let emailText=elementUtil.doGetValue(createaccountpage.email)
        assert.equal(signinfromdata.email,emailText)
    })
    it('enter confirmEmail',function(){
        let emailText=elementUtil.doGetValue(createaccountpage.email)
        createaccountpage.enterEmailConfirm(emailText)
        assert.equal(emailText,createaccountpage.emailConfirm.getValue())
    })
    it('enter password',function(){
        createaccountpage.enterPassword(signinfromdata.password)
        assert.equal(signinfromdata.password,elementUtil.doGetValue(createaccountpage.password))
    })
    it('verify entered password is fullfilled all mandatory condition',function(){
        assert.equal(constant.PASSWORD_CHECKED_CONDITION_TEXT,elementUtil.doGetAttribute(createaccountpage.verifyconditionOfPassword(constant.passwordcondition1),'class'))
        assert.equal(constant.PASSWORD_CHECKED_CONDITION_TEXT,elementUtil.doGetAttribute(createaccountpage.verifyconditionOfPassword(constant.passwordcondition2),'class'))
        assert.equal(constant.PASSWORD_CHECKED_CONDITION_TEXT,elementUtil.doGetAttribute(createaccountpage.verifyconditionOfPassword(constant.passwordcondition3),'class'))
        assert.equal(constant.PASSWORD_CHECKED_CONDITION_TEXT,elementUtil.doGetAttribute(createaccountpage.verifyconditionOfPassword(constant.passwordcondition4),'class'))
        assert.equal(constant.PASSWORD_CHECKED_CONDITION_TEXT,elementUtil.doGetAttribute(createaccountpage.verifyconditionOfPassword(constant.passwordcondition5),'class'))
    })
    it('enter confirm password',function(){
        let password=elementUtil.doGetValue(createaccountpage.password)
        createaccountpage.enterConfirmPassword(password)
        assert.equal(password,elementUtil.doGetValue(createaccountpage.passwordConfirm))
    })
    it('enter institution name',function(){
        createaccountpage.enterInstitutionName(signinfromdata.institutionName)
        assert.equal(signinfromdata.institutionName,elementUtil.doGetValue(createaccountpage.institutionName))
    })
    //choose first qustion and answer:
    it('enter first security question',function(){
        elementUtil.clickOnElement(createaccountpage.clickOnFirstSecurityQuestionBox)
        createaccountpage.movetoElement(createaccountpage.enterFirstQuestionFromList(signinfromdata.questionNoOne))
        elementUtil.clickOnElement(createaccountpage.enterFirstQuestionFromList(signinfromdata.questionNoOne))  
     })
    it('enter answer of first qus',function(){
        createaccountpage.enterFirstAnswer(signinfromdata.AnswerOne)
        assert.equal(signinfromdata.AnswerOne,elementUtil.doGetValue(createaccountpage.enterAnswerOfFirstQuestion))
    })
    //choose second qustion and answer:
    it('enter second security question',function(){
        elementUtil.clickOnElement(createaccountpage.clickOnSecondSecurityQuestionBox)
        createaccountpage.movetoElement(createaccountpage.enterSecondQuestionFromList(signinfromdata.questionNoTwo))
        elementUtil.clickOnElement(createaccountpage.enterSecondQuestionFromList(signinfromdata.questionNoTwo))
    })
    it('enter answer of second qus',function(){
        createaccountpage.enterSecondAnswer(signinfromdata.AnswerTwo)
        assert.equal(signinfromdata.AnswerTwo,elementUtil.doGetValue(createaccountpage.enterAnswerOfSecondQuestion))
    })
    //choose Third qustion and answer:
    it('enter Third security question',function(){
        elementUtil.clickOnElement(createaccountpage.clickOnThirdSecurityQuestionBox)
        createaccountpage.movetoElement(createaccountpage.enterThirdQuestionFromList(signinfromdata.questionNoThree))
        elementUtil.clickOnElement(createaccountpage.enterThirdQuestionFromList(signinfromdata.questionNoThree))
    })
    it('enter answer of Third qus',function(){
        createaccountpage.enterThirdAnswer(signinfromdata.AnswerThree)
        assert.equal(signinfromdata.AnswerThree,elementUtil.doGetValue( createaccountpage.enterAnswerOfThirdQuestion))
    })
    //click on checkBox
    it('click on first checkBox',function(){
        elementUtil.clickOnElement(createaccountpage.clickOnFirstCheckBox)
    })
    it('click on second checkBox',function(){
        elementUtil.clickOnElement(createaccountpage.clickOnSecondCheckBox)
    })
    it('click on create Account button',function(){
        elementUtil.clickOnElement(createaccountpage.createAccountBtn)
    })
})