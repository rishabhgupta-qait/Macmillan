const { assert } = require('chai')
const homepage = require('../pages/homePage')
const elementUtil = require('../util/elementUtil')

describe("Launch url and clicked on create account",function(){

            it("clicked on create account button",function(){
                browser.url('/')
                browser.maximizeWindow()
                elementUtil.clickOnElement(homepage.clickOnCreateAccount)
            })
            it('verify logo after clicked on create Account',function(){
                homepage.logoAfterClickOnCreateAccount.waitForDisplayed()
                const text = elementUtil.doGetText(homepage.logoAfterClickOnCreateAccount)
                assert.equal('Create an Account',text)
            })
})