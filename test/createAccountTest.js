const { assert } = require('chai')
const createaccountpage = require('../pages/createAccountPage')
const homepage = require('../pages/homePage')
const signInFormData = require('../testData/signInFormData')
const signinfromdata = require('../testData/signInFormData')
describe('handle application login',function(){
        it("clicked on create account button",function(){
            browser.url('/')
            browser.maximizeWindow()
            homepage.clickOnCreateAccount.waitForDisplayed()
            homepage.clickOnCreateAccount.click()
        })
        it('enter firstname',function(){
            createaccountpage.enterFirstname(signinfromdata.firstname)
            assert.equal(signinfromdata.firstname,createaccountpage.firstname.getValue())
        })
        it('enter lastname',function(){
            createaccountpage.enterLastname(signinfromdata.lastname)
            assert.equal(signinfromdata.lastname,createaccountpage.lastname.getValue())
        })
        it('enter email',function(){
            createaccountpage.enterEmail(signinfromdata.email)
            let emailText=createaccountpage.email.getValue()
            assert.equal(signinfromdata.email,emailText)
        })
        it('enter confirmEmail',function(){
            let emailText=createaccountpage.email.getValue()
            createaccountpage.enterEmailConfirm(emailText)
            assert.equal(emailText,createaccountpage.emailConfirm.getValue())
        })
        it('enter password',function(){
            createaccountpage.enterPassword(signinfromdata.password)
            assert.equal(signinfromdata.password,createaccountpage.password.getValue())
        })
        it('verify entered password is fullfilled all mandatory condition',function(){
            assert.equal('circle_check_outlineIcon',createaccountpage.verifyconditionOfPassword(signInFormData.passwordcondition1).getAttribute('class'))
            assert.equal('circle_check_outlineIcon',createaccountpage.verifyconditionOfPassword(signInFormData.passwordcondition2).getAttribute('class'))
            assert.equal('circle_check_outlineIcon',createaccountpage.verifyconditionOfPassword(signInFormData.passwordcondition3).getAttribute('class'))
            assert.equal('circle_check_outlineIcon',createaccountpage.verifyconditionOfPassword(signInFormData.passwordcondition4).getAttribute('class'))
            assert.equal('circle_check_outlineIcon',createaccountpage.verifyconditionOfPassword(signInFormData.passwordcondition5).getAttribute('class'))
        })
        it('enter confirm password',function(){
            let password=createaccountpage.password.getValue()
            createaccountpage.enterConfirmPassword(password)
            assert.equal(password,createaccountpage.passwordConfirm.getValue())
        })
        it('enter institution name',function(){
            createaccountpage.enterInstitutionName(signinfromdata.institutionName)
            assert.equal(signinfromdata.institutionName, createaccountpage.institutionName.getValue())
        })
        //choose first qustion and answer:
        it('enter first security question',function(){
            createaccountpage.clickOnFirstSecurityQuestionBox.click()
            createaccountpage.movetoElement(createaccountpage.enterFirstQuestionFromList(signinfromdata.questionNoOne))
            createaccountpage.clickOnElement(createaccountpage.enterFirstQuestionFromList(signinfromdata.questionNoOne))  
         })
        it('enter answer of first qus',function(){
            createaccountpage.enterFirstAnswer(signinfromdata.AnswerOne)
            assert.equal(signinfromdata.AnswerOne, createaccountpage.enterAnswerOfFirstQuestion.getValue())
        })
        //choose second qustion and answer:
        it('enter second security question',function(){
            createaccountpage.clickOnSecondSecurityQuestionBox.click()
            createaccountpage.movetoElement(createaccountpage.enterSecondQuestionFromList(signinfromdata.questionNoTwo))
            createaccountpage.clickOnElement(createaccountpage.enterSecondQuestionFromList(signinfromdata.questionNoTwo))
        })
        it('enter answer of second qus',function(){
            createaccountpage.enterSecondAnswer(signinfromdata.AnswerTwo)
            assert.equal(signinfromdata.AnswerTwo, createaccountpage.enterAnswerOfSecondQuestion.getValue())
        })
        //choose Third qustion and answer:
        it('enter Third security question',function(){
            createaccountpage.clickOnThirdSecurityQuestionBox.click()
            createaccountpage.movetoElement(createaccountpage.enterThirdQuestionFromList(signinfromdata.questionNoThree))
            createaccountpage.clickOnElement(createaccountpage.enterThirdQuestionFromList(signinfromdata.questionNoThree))
        })
        it('enter answer of Third qus',function(){
            createaccountpage.enterThirdAnswer(signinfromdata.AnswerThree)
            assert.equal(signinfromdata.AnswerThree, createaccountpage.enterAnswerOfThirdQuestion.getValue())
        })
        //click on checkBox
        it('click on first checkBox',function(){
            createaccountpage.clickOnElement(createaccountpage.clickOnFirstCheckBox)
        })
        it('click on second checkBox',function(){
            createaccountpage.clickOnElement(createaccountpage.clickOnSecondCheckBox)
        })
        it('click on create Account button',function(){
            createaccountpage.clickOnElement(createaccountpage.createAccountBtn)
        })
})