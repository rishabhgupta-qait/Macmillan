class HomePage{
    get clickOnCreateAccount(){
        return $("//a[text()='Create Account']")
    }
    get logoAfterClickOnCreateAccount(){
        return $("//h2")
    }
}
module.exports = new HomePage()