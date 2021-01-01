const { assert } = require('chai')
const homepage = require('../pages/homePage')

describe("Launch url and clicked on create account",function(){

            it("clicked on create account button",function(){
                browser.url('/')
                browser.maximizeWindow()
                // browser.waitUntil(function(){
                // return browser.getTitle() === 'Macmillan Learning :: Register'
                // },6000, 'title is not displayed after given time')
                homepage.clickOnCreateAccount.waitForDisplayed()
                homepage.clickOnCreateAccount.click()
            })
            it('verify logo after clicked on create Account',function(){
                homepage.logoAfterClickOnCreateAccount.waitForDisplayed()
                const text = homepage.logoAfterClickOnCreateAccount.getText()
                assert.equal('Create an Account',text)
            })
})