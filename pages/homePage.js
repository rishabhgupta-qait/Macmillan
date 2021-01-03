const homepagelocators = require('../testData/Locators/homePageLocator')
class HomePage{
    get clickOnCreateAccount(){return $(homepagelocators.CreateAccount_xpath)}
    get logoAfterClickOnCreateAccount(){return $(homepagelocators.logo_header)}
}
module.exports = new HomePage()