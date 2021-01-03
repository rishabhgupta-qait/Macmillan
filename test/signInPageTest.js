const signinpage = require('../pages/signInPage')
const yopmailhomepage = require('../pages/yopmailHomePage')
const createaccountpage = require('../pages/createAccountPage')
const homepage = require('../pages/homePage')
const signinfromdata = require('../testData/signInFormData')
const { assert } = require('chai')
const elementUtil = require('../util/elementUtil')
const constant = require('../testData/constant')

describe('Handle sign in page functionality',function(){
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
    //open to new tab and launch the url of yopmail
    it('click on email box',function(){
        browser.newWindow(signinfromdata.yopmailUrl)
        yopmailhomepage.enterEmail(signinfromdata.email)
        elementUtil.clickOnElement(yopmailhomepage.checkBoxBtn)
        })
    it('Verify mail received from',function(){
        let id = yopmailhomepage.switchtoframeOnMail
        browser.switchToFrame(id)
        let FromText=elementUtil.doGetText(yopmailhomepage.verifyMailFrom)
        assert.equal(signinfromdata.FromTextdata,FromText)
    })
    it('Click on the mail received',function(){
        browser.switchToParentFrame()
        let id = yopmailhomepage.switchtoframeOnInbox
        browser.switchToFrame(id)
        elementUtil.clickOnElement(yopmailhomepage.MailRecieved)
    })
    it('click on complete regestration',function(){
        browser.switchToParentFrame()
        let id = yopmailhomepage.switchtoframeOnMail
        browser.switchToFrame(id)
        elementUtil.clickOnElement(yopmailhomepage.completeRegistrationBtn)
        browser.switchToParentFrame()
        console.log(browser.getWindowHandle())
    })
    it('verify after click on complete registration',function(){
        browser.switchWindow(signinfromdata.confirmUrl)
        let confirmationText = elementUtil.doGetText(yopmailhomepage.aftercompleteRegistration)
        console.log(confirmationText)
        assert.equal(constant.ACCOUNT_CREATED_TEXT,confirmationText)
        browser.closeWindow()
        browser.switchWindow(signinfromdata.yopmailUrl)
        browser.closeWindow()
    })
    it('click on back to email button',function(){
        browser.switchWindow(signinfromdata.registerConfirmUrl)
        elementUtil.clickOnElement(yopmailhomepage.backToEmailBtn)
        assert.equal(constant.SIGNIN_TEXT,elementUtil.doGetText(yopmailhomepage.afterbackToEmailBtn))
    }) 
    it('enter email id in the emailbox',function(){
        signinpage.enterEmailId(signinfromdata.email)
    })
    it('enter password in the passwordbox',function(){
        signinpage.enterPassword(signinfromdata.password)
    })
    it('click on sign in button',function(){
        elementUtil.clickOnElement(signinpage.signInBtn)
    })
    it('close the pop section',function(){
        signinpage.closePopUp.waitForDisplayed()
        elementUtil.clickOnElement(signinpage.closePopUp)
    })
    it('verify mycourse list text',function(){
        let mycoursetext=elementUtil.doGetText(signinpage.mycouseListText)
        assert.equal(constant.MY_COURSE_TEXT,mycoursetext)
    })
})