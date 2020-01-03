import {OperationBase} from "../../CatalystOneAutomation/functionalUtilities/OperationBase";
import { browser, element, by, Key } from "../../GitHub/node_modules/protractor";
//import * as node_modules from "../../GitHub/node_modules";
import { HomePageElement } from "../../CatalystOneAutomation/applicationCommonPages/HomePage/functional/HomePage.po";
import { assert } from "../../GitHub/node_modules/chai/lib/chai";
import { HomePageHelper } from "../../CatalystOneAutomation/applicationCommonPages/HomePage/functional/HomePage.helper";
import { OperationBaseElement } from "../../CatalystOneAutomation/functionalUtilities/OperationBase.po";
import { EmployeeProfileTaskModel } from "./EmployeeProfileTaskModel";
import { EmpolyeeProfileElements } from "./EmployeeProfile.po";
import { EmployeeProfileSettingsElements } from "./EmployeeProfileSettings.po";


let operationBase: OperationBase = new OperationBase();
let homepage: HomePageHelper


export class EmployeeProfile {

    data: string[] = new Array();
    private taskModels: Array<EmployeeProfileTaskModel>;

    constructor() {
        this.taskModels = new Array<EmployeeProfileTaskModel>();
    }

    /**
     * This will add the action we want to perform after the user is clicked present in administration tab.
     * If we want to search a profile then it will open the searched profile
     * @param AdministrativeUser : string
     * @param SearchedUser : string
     */
    async administrativeUserDialogSelection(AdministrativeUser: string, SearchedUser: string) {
        browser.switchTo().defaultContent();
        await element(by.xpath("//button[text()='" + AdministrativeUser + "']")).click();
        if (AdministrativeUser.match("Open user")) {
            await operationBase.switchToFrame()
            await browser.manage().timeouts().implicitlyWait(5000);
            await HomePageElement.SearchBox.sendKeys(SearchedUser)
            await HomePageElement.SearchBox.sendKeys(Key.ENTER)
            await element(by.xpath("//span[text()='" + SearchedUser + "']")).click()
        }

    }

    /**
     * This will select the profile card for My employees
     * @param User : string
     */

    async selectMyEmployees(User: string) {
        await operationBase.switchToMain()
        await element(by.xpath("//span[@title= '" + User + "']")).click()
    }

    /**
     * This will open the field setting for the entered field name
     * @param FieldName 
     */
    protected async editFieldSettings(FieldName) {
        let FieldID = await operationBase.getFieldID(FieldName);
        await element(by.xpath("//i[@onclick = 'openEditFieldWindow(" + FieldID + ")']")).click()
    }

    /**
    * To check whether the field has editability rights or not
    * @param dataTable : This argument will fetch all field names of particular tab from feature file 
    */
    async toAssertEditabilityOfFields(dataTable) {
        for (let i = 0; i < dataTable.rawTable.length; i++) {
            this.data[i] = dataTable.rawTable[i]
        }
        for (let i = 0; i < this.data.length; i++) {
            if (await element(by.css("[id='edit_" + await operationBase.getFieldID((this.data[i])[0]) + "']")).isDisplayed() == true) {
                console.log('\u001b[' + 32 + 'm' + 'You have the editability rights for: ' + '\u001b[0m' + '"' + (this.data[i])[0] + '"')
            } else {
                console.log('\u001b[' + 31 + 'm' + 'You do not have the editability rights for: ' + '\u001b[0m' + '"' + (this.data[i])[0] + '"')
            }
        };
        this.data = []
    }

    /**
     * This will navigate to Manager's employee profile.
     * @param employee : {string}
     */
    async openMyEmployee(employee: string) {
        await element(by.css('[title="' + employee + '"]')).click()
    }

    /**
  * This is a protected function to de select all the checkbox of Change Control
  */
    protected async deSelectCbChangeControl() {
        await operationBase.disableCheckbox(element(by.css('#cbCCApprovalHLHRForHRA')));
        await operationBase.disableCheckbox(element(by.css('#cbCCApprovalHR')));
        await operationBase.disableCheckbox(element(by.css('#cbCCApprovalMan')));
        await operationBase.disableCheckbox(element(by.css('#cbCCApprovalHRForMan')));
        await operationBase.disableCheckbox(element(by.css('#cbCCApprovalSecondLevManForMan')));
        await operationBase.disableCheckbox(element(by.css('#cbCCApprovalHRForHR')));
        await operationBase.disableCheckbox(element(by.css('#cbCCApprovalHLHRForHRA')));
    }

    protected async enableChangeRequestSetting(taskModel: EmployeeProfileTaskModel) {
        await EmployeeProfileSettingsElements.tabPersonalData.click();
        await this.editFieldSettings(taskModel.FieldName);
        await operationBase.switchToFrame();
        var CC = await EmployeeProfileSettingsElements.ChangeControlSection.isDisplayed()
        if (CC) {
            await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
            await this.deSelectCbChangeControl();
            if (taskModel.Setting.match('ApprovalFromHRForEmployee')) {
                await EmployeeProfileSettingsElements.cbApprovalFromHRForEmp.click();
            }
            else if (taskModel.Setting.match('ApprovalFromHRForManager')) {
                await EmployeeProfileSettingsElements.cbApprovalFromHRForMan.click();
            }
            else if (taskModel.Setting.match('ApprovalFromSecondLevelManagerForManager')) {
                await EmployeeProfileSettingsElements.cbApprovalFromSecondLevelManForMan.click();
            }
            else if (taskModel.Setting.match('ApprovalFromManagerForEmployee')) {
                await EmployeeProfileSettingsElements.cbApprovalFromManforEmp.click();
            }
            else if (taskModel.Setting.match('ApprovalFromHROnHigherLeveForHR')) {
                await EmployeeProfileSettingsElements.cbApprovalFromHRForHR.click();
            }
            else if (taskModel.Setting.match('ApprovalFromHRForHRA')) {
                await EmployeeProfileSettingsElements.cbApprovalFromHRForHRA.click();
            }
            else if (taskModel.Setting.match('ApprovalHROnHigherLevelForHRA')) {
                await EmployeeProfileSettingsElements.cbApprovalFromHLHRForHA.click();
            }
        }
        else {
            assert.fail("This field does not have Change Control settings")
        }
        await browser.switchTo().defaultContent();
        await operationBase.clickOk();
        await operationBase.save();
    }


    /**
     * This will enable changerequest Settings
     */
    protected async generateChangeRequest(taskModel: EmployeeProfileTaskModel) {

        let FieldID = await operationBase.getFieldID(taskModel.FieldName);

        if (taskModel.Setting.match('ApprovalFromHRForEmployee')) {
            homepage = new HomePageHelper()
            await homepage.SwitchProfile(taskModel.Requester);
            await operationBase.goToPage("Myself", "My profile");
            await browser.switchTo().defaultContent();
            await operationBase.selectTab(taskModel.TabName)
            browser.sleep(500)
            await element(by.xpath("//span[@id='edit_" + FieldID + "']")).click();
            await element(by.xpath("//input[@id='data_" + FieldID + "']")).sendKeys(taskModel.Data);
        }
        else if (taskModel.Setting.match('ApprovalFromHRForManager' || 'ApprovalFromSecondLevelManagerForManager' || 'ApprovalFromManagerForEmployee' || 'ApprovalFromHROnHigherLeveForHR' || 'ApprovalFromHRForHRA' || 'ApprovalHROnHigherLevelForHRA')) {
            homepage = new HomePageHelper();
            await homepage.SwitchProfile(taskModel.Requester);
            await operationBase.goToPage("Myemployees", "My employees")
            await this.selectMyEmployees(taskModel.EmployeeName)
            await browser.sleep(1000)
            await browser.switchTo().defaultContent();
            await operationBase.selectTab(taskModel.TabName)
            let FieldID = await operationBase.getFieldID(taskModel.FieldName);
            browser.sleep(500)
            await element(by.xpath("//span[@id='edit_" + FieldID + "']")).click();
            await element(by.xpath("//input[@id='data_" + FieldID + "']")).sendKeys(taskModel.Data);
        }

        await EmpolyeeProfileElements.iconAccept.click();
        await OperationBaseElement.btnAllSave.click();
        await browser.sleep(1000);
        var visibleTooltip = await element(by.xpath("//i[@data-change='selectChange1_" + FieldID + "']")).isDisplayed();
        if (visibleTooltip) {
            await browser.actions().mouseMove(element(by.xpath("//i[@data-change='selectChange1_" + FieldID + "']"))).perform();
        }
        else {
            assert.fail("field does not have a change request")
        }

    }

    /**
     * // This is a protected function which is used to approve a change request generated on the field
     * @param taskModel : EmployeeProfileTaskModel
     */
    protected async approveChangeRequest(taskModel: EmployeeProfileTaskModel) {
        await homepage.SwitchProfile(taskModel.Approver);
        await operationBase.goToPage("Administration", "User");
        await this.administrativeUserDialogSelection("Open user", taskModel.EmployeeName);
        await browser.sleep(1000);
        await operationBase.switchToDefault();
        await operationBase.selectTab(taskModel.TabName);
        let FieldID = await operationBase.getFieldID(taskModel.FieldName);
        var visibleTooltip = await element(by.xpath("//i[@data-change='selectChange1_" + FieldID + "']")).isDisplayed();
        if (visibleTooltip) {
            await browser.actions().mouseMove(element(by.xpath("//i[@data-change='selectChange1_" + FieldID + "']"))).perform();
            if (taskModel.Action.match('Accept changes')) {
                await EmpolyeeProfileElements.btnAcceptChange.click()
            }
            else if (taskModel.Action.match('Reject changes')) {
                await EmpolyeeProfileElements.btnRejectChange.click()
            }
        }
        else {
            assert.fail("field does not have a change request")
        }
        await OperationBaseElement.btnAllSave.click();
    }

    /**
     * This will be used to build the data given in feature file
     * @param dataTable 
     */
    BuildTaskModel(dataTable) {
        let taskModel: EmployeeProfileTaskModel;

        if (dataTable.rawTable.length > 0) {
            dataTable.rawTable.forEach(data => {
                taskModel = new EmployeeProfileTaskModel();
                taskModel.Setting = data[0]
                taskModel.EmployeeName = data[1]
                taskModel.FieldName = data[2]
                taskModel.TabName = data[3]
                taskModel.Data = data[4]
                taskModel.Requester = data[5]
                taskModel.Approver = data[6]
                taskModel.Action = data[7]

                this.taskModels.push(taskModel)
            });
        }
    }

    /**
     * This will enable a change request settings, apply change request on a field and will approve or reject the field
     */
    async performChangeControlOpertaion() {
        for (let i = 0; i < this.taskModels.length; i++) {
            let taskData = this.taskModels[i]
            await this.enableChangeRequestSetting(taskData)
            await this.generateChangeRequest(taskData);
            await this.approveChangeRequest(taskData)
        }
    }

    /**
     * This will enable the setting for change request
     */
    async performeCCSettingOpertaion() {
        for (let i = 0; i < this.taskModels.length; i++) {
            let taskData = this.taskModels[i]
            await this.enableChangeRequestSetting(taskData)
        }
    }

    /**
     * This will generate a change request on a field
     */
    async performGenerateChangeControlOpertaion() {
        for (let i = 0; i < this.taskModels.length; i++) {
            let taskData = this.taskModels[i]
            await this.enableChangeRequestSetting(taskData)
            await this.generateChangeRequest(taskData);
        }
    }
}
