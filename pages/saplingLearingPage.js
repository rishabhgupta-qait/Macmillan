const saplingPageLocators = require('../testData/Locators/SaplingLearningPageLocators')
const elementUtil = require('../util/elementUtil')
class SaplingLearning{
    get registeredEmailTextBox(){return $(saplingPageLocators.RegisteredEmailTextBox_id)}
    get passwordTextBox(){return $(saplingPageLocators.passwordTextBox_id)}
    get loginBtn(){return $(saplingPageLocators.login_btn_id)}
    get text_SitePolicyAgreement(){return $(saplingPageLocators.text_SitePolicyAgreement)}
    get Yes_btn(){return $(saplingPageLocators.Yes_btn_xpath)}
    get institution_popup(){return $(saplingPageLocators.institution_popup_xpath)}
    get institution_box(){return $(saplingPageLocators.institution_box_xpath)}
    get ok_btn(){return $(saplingPageLocators.ok_btn_xpath)}
    get arrow_btn(){return $(saplingPageLocators.arrow_btn_xpath)}
    get logout(){return $(saplingPageLocators.logout_xpath)}
    get choose_fileName(){return $(saplingPageLocators.choose_fileName_xpath)}
    get popUpSection(){return $(saplingPageLocators.popUpSection_xpath)}
    get closePopUp(){return $(saplingPageLocators.closePopUp_xpath)}
    get seachbox(){return $(saplingPageLocators.searchbox_xpath)}
    get courseMenu_btn(){return $(saplingPageLocators.courseMenu_btn_xpath)}
    get manageInstructor(){return $(saplingPageLocators.manageInstructor_xpath)}
    get manageInstructorPopUpText(){return $(saplingPageLocators.manageInstructorPopUp_xpath)}
    get instructorTextbox(){return $(saplingPageLocators.instructorTextbox_xpath)}
    get Add_btn(){return $(saplingPageLocators.Add_btn_xpath)}
    get close_instPopup(){return $(saplingPageLocators.close_instPopup_xpath)}
    get course_Management(){return $(saplingPageLocators.course_Management_xpath)}
    get reference(){return $(saplingPageLocators.reference_xpath)}
    get assign_role(){return $(saplingPageLocators.assign_role_xpath)}
    get instrutor_Text(){return $(saplingPageLocators.instrutor_xpath)}
    get TargetSearchbox(){return $(saplingPageLocators.TargetSearchbox_xpath)}
    get TargetSearch_btn(){return $(saplingPageLocators.TargetSearch_btn_xpath)}
    get selectText(){return $(saplingPageLocators.selectText_xpath)}
    get AddFile_btn(){return $(saplingPageLocators.Add_btn_id)}
    get CopyTextLink(){return $(saplingPageLocators.CopyTextLink_xpath)}
    get MigratePopup(){return $(saplingPageLocators.MigratePopup_xpath)}
   // get StartNow_btn(){return $(saplingPageLocators.StartNow_btn_xpath)}
    get DoLater_btn(){return $(saplingPageLocators.DoLater_btn_xpath)}
    get MigrateToAchieve(){return $(saplingPageLocators.MigrateToAchieve_xpath)}
    get SaplingText(){return $(saplingPageLocators.SaplingText_xpath)}
    get GoToAchieveText(){return $(saplingPageLocators.GoToAchieveText_xpath)}

    enterEmailId(text){
        elementUtil.doSetValue(this.registeredEmailTextBox,text)
    }
    enterPassword(text){
        elementUtil.doSetValue(this.passwordTextBox,text)
    }
    enterInstitution(text){
        elementUtil.doSetValue(this.institution_box,text)
    }
    enterCourse(text){
        elementUtil.doSetValue(this.seachbox,text)
    }
    enterInstructor(text){
        elementUtil.doSetValue(this.instructorTextbox,text)
    }
    enterTargetEmail(text){
        elementUtil.doSetValue(this.TargetSearchbox,text)
    }

    textSitePolicyAgreementisVisible(locator1,locator2){
        let result= locator1.isDisplayed()
        if(result===true){
            elementUtil.clickOnElement(locator2)
            console.log('element is visible')
            return result;
        }
        else{
            console.log('element is not visible')
            return result;
        }   
    }
    VerifySaplingAssessmentText(locator1){
        if(locator1.isDisplayed()){
            return elementUtil.doGetText(locator1)
        }else console.log('Text is not Displayed')    
    }
    VerifyGoToAchieveText(locator1){
        if(locator1.isDisplayed()){
            return elementUtil.doGetAttribute(locator1,'value')
        }else console.log('Text is not Displayed')    
    }
    verifySelectedTextAdded(value){
        const removeText= $(elementUtil.getDynamicXpath(value,saplingPageLocators.removeText_xpath))
        elementUtil.doScrollIntoViewPort(removeText)
        return elementUtil.doGetText(removeText)
    }
    verifyPopUpComing(locator1,locator2){
        let result=false
        if(locator1.isDisplayed()){
            elementUtil.clickOnElement(locator2)
            result=true
            console.log('Popup is displayed and closed successfully')
        }else{
            console.log('Popup is not displayed')
        }
        return result
    }
    verifyMigrateToAchievePopupComing(locator1,locator2){
        let result=false
        if(locator1.isDisplayed()){
            let text=elementUtil.doGetText(locator1)
            assert.equal('Migrate to Achieve',text,'popup is not displayed')
            console.log('[Migrate to Achieve] Popup is displayed')
            elementUtil.clickOnElement(locator2)
            result=true
            console.log('Popup is displayed and closed successfully')
        }else{
            console.log('Popup is not displayed')
        }
        return result
    }
}
module.exports= new SaplingLearning()