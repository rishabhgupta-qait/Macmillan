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
        console.log('click on Create Account is successfully')
    })
    it('verify logo after clicked on create Account',function(){
        homepage.logoAfterClickOnCreateAccount.waitForDisplayed()
        const text = elementUtil.doGetText(homepage.logoAfterClickOnCreateAccount)
        assert.equal(constant.CREATE_ACCOUNT_TEXT,text)
    })
    it('enter firstname',function(){
        createaccountpage.enterFirstname(signinfromdata.firstname)
        assert.equal(signinfromdata.firstname,elementUtil.doGetValue(createaccountpage.firstname))
        console.log('Firstname is entered successfully')
    })
    it('enter lastname',function(){
        createaccountpage.enterLastname(signinfromdata.lastname)
        assert.equal(signinfromdata.lastname,elementUtil.doGetValue(createaccountpage.lastname))
        console.log('Lastname is entered successfully')
    })
    it('enter email',function(){
        createaccountpage.enterEmail(signinfromdata.email)
        let emailText=elementUtil.doGetValue(createaccountpage.email)
        assert.equal(signinfromdata.email,emailText)
        console.log('Email is entered successfully')
    })
    it('enter confirmEmail',function(){
        let emailText=elementUtil.doGetValue(createaccountpage.email)
        createaccountpage.enterEmailConfirm(emailText)
        assert.equal(emailText,createaccountpage.emailConfirm.getValue())
        console.log('ConfirmEmail is entered successfully')
    })
    it('enter password',function(){
        createaccountpage.enterPassword(signinfromdata.password)
        assert.equal(signinfromdata.password,elementUtil.doGetValue(createaccountpage.password))
        console.log('Password is entered successfully')
    })
    it('verify entered password is fullfilled all mandatory condition',function(){
        assert.equal(constant.PASSWORD_CHECKED_CONDITION_TEXT,elementUtil.doGetAttribute(createaccountpage.verifyconditionOfPassword(constant.passwordcondition1),'class'))
        assert.equal(constant.PASSWORD_CHECKED_CONDITION_TEXT,elementUtil.doGetAttribute(createaccountpage.verifyconditionOfPassword(constant.passwordcondition2),'class'))
        assert.equal(constant.PASSWORD_CHECKED_CONDITION_TEXT,elementUtil.doGetAttribute(createaccountpage.verifyconditionOfPassword(constant.passwordcondition3),'class'))
        assert.equal(constant.PASSWORD_CHECKED_CONDITION_TEXT,elementUtil.doGetAttribute(createaccountpage.verifyconditionOfPassword(constant.passwordcondition4),'class'))
        assert.equal(constant.PASSWORD_CHECKED_CONDITION_TEXT,elementUtil.doGetAttribute(createaccountpage.verifyconditionOfPassword(constant.passwordcondition5),'class'))
        console.log('All condition for password is checked successfully')
    })
    it('enter confirm password',function(){
        let password=elementUtil.doGetValue(createaccountpage.password)
        createaccountpage.enterConfirmPassword(password)
        assert.equal(password,elementUtil.doGetValue(createaccountpage.passwordConfirm))
        console.log('ConfirmPassword is entered successfully')
    })
    it('enter institution name',function(){
        createaccountpage.enterInstitutionName(signinfromdata.institutionName)
        assert.equal(signinfromdata.institutionName,elementUtil.doGetValue(createaccountpage.institutionName))
        console.log('Institution Name is entered successfully')
    })
    //choose first qustion and answer:
    it('enter first security question',function(){
        elementUtil.clickOnElement(createaccountpage.clickOnFirstSecurityQuestionBox)
        createaccountpage.movetoElement(createaccountpage.enterFirstQuestionFromList(signinfromdata.questionNoOne))
        elementUtil.clickOnElement(createaccountpage.enterFirstQuestionFromList(signinfromdata.questionNoOne))  
        console.log('First question is selected successfully')
    })
    it('enter answer of first qus',function(){
        createaccountpage.enterFirstAnswer(signinfromdata.AnswerOne)
        assert.equal(signinfromdata.AnswerOne,elementUtil.doGetValue(createaccountpage.enterAnswerOfFirstQuestion))
        console.log('First answer is entered successfully')
    })
    //choose second qustion and answer:
    it('enter second security question',function(){
        elementUtil.clickOnElement(createaccountpage.clickOnSecondSecurityQuestionBox)
        createaccountpage.movetoElement(createaccountpage.enterSecondQuestionFromList(signinfromdata.questionNoTwo))
        elementUtil.clickOnElement(createaccountpage.enterSecondQuestionFromList(signinfromdata.questionNoTwo))
        console.log('Second question is selected successfully')
    })
    it('enter answer of second qus',function(){
        createaccountpage.enterSecondAnswer(signinfromdata.AnswerTwo)
        assert.equal(signinfromdata.AnswerTwo,elementUtil.doGetValue(createaccountpage.enterAnswerOfSecondQuestion))
        console.log('Second answer is entered successfully')
    })
    //choose Third qustion and answer:
    it('enter Third security question',function(){
        elementUtil.clickOnElement(createaccountpage.clickOnThirdSecurityQuestionBox)
        createaccountpage.movetoElement(createaccountpage.enterThirdQuestionFromList(signinfromdata.questionNoThree))
        elementUtil.clickOnElement(createaccountpage.enterThirdQuestionFromList(signinfromdata.questionNoThree))
        console.log('Third question is selected successfully')
    })
    it('enter answer of Third qus',function(){
        createaccountpage.enterThirdAnswer(signinfromdata.AnswerThree)
        assert.equal(signinfromdata.AnswerThree,elementUtil.doGetValue( createaccountpage.enterAnswerOfThirdQuestion))
        console.log('Third answer is entered successfully')
    })
    //click on checkBox
    it('click on first checkBox',function(){
        elementUtil.clickOnElement(createaccountpage.clickOnFirstCheckBox)
        console.log('First checked box is clicked successfully')
    })
    it('click on second checkBox',function(){
        elementUtil.clickOnElement(createaccountpage.clickOnSecondCheckBox)
        console.log('Second checked box is clicked successfully')
    })
    it('click on create Account button',function(){
        elementUtil.clickOnElement(createaccountpage.createAccountBtn)
        console.log('Create Account button is clicked successfully')
    })
    //open to new tab and launch the url of yopmail
    it('click on email box',function(){
        browser.newWindow(signinfromdata.yopmailUrl)
        yopmailhomepage.enterEmail(signinfromdata.email)
        elementUtil.clickOnElement(yopmailhomepage.checkBoxBtn)
        console.log('Emailbox is clicked successfully')
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
        console.log('Click on the mail is successfully')
    })
    it('click on complete regestration',function(){
        browser.switchToParentFrame()
        let id = yopmailhomepage.switchtoframeOnMail
        browser.switchToFrame(id)
        elementUtil.clickOnElement(yopmailhomepage.completeRegistrationBtn)
        browser.switchToParentFrame()
        console.log(browser.getWindowHandle())
        console.log('Complete Regestration button is clicked successfully')
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
        console.log('Back To Email button is clicked successfully')
    }) 
    it('enter email id in the emailbox',function(){
        signinpage.enterEmailId(signinfromdata.email)
        console.log('Email is entered successfully')
    })
    it('enter password in the passwordbox',function(){
        signinpage.enterPassword(signinfromdata.password)
        console.log('Password is entered successfully')
    })
    it('click on sign in button',function(){
        elementUtil.clickOnElement(signinpage.signInBtn)
        console.log('signIn button is clicked successfully')
    })
    it('close the pop section',function(){
        signinpage.closePopUp.waitForDisplayed()
        elementUtil.clickOnElement(signinpage.closePopUp)
        console.log('Popup section is closed successfully')
    })
    it('verify mycourse list text',function(){
        let mycoursetext=elementUtil.doGetText(signinpage.mycouseListText)
        assert.equal(constant.MY_COURSE_TEXT,mycoursetext)
        console.log('MyCourse List text is matched successfully')
    })
})