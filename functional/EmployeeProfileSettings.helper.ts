import { OperationBase } from "../../CatalystOneAutomation/functionalUtilities/OperationBase";
import { element, by } from "../../GitHub/node_modules/protractor";
import { EmployeeProfileSettingsElements } from "./EmployeeProfileSettings.po";

let operationBase: OperationBase = new OperationBase();

export class EmployeeProfileSettings {

    data: string[] = new Array()

    /**
    * This function will de-select all the checkboxes of Visible to in Employee Profile Settings
    */
    async deSelectCbVisibleTo() {
        await operationBase.switchToFrame();
        await EmployeeProfileSettingsElements.visibleToRadioButton;
        await operationBase.disableCheckbox(operationBase.getLastElementByCss("[id='availability_visibleTo1']"));
        await operationBase.disableCheckbox(operationBase.getLastElementByCss("[id='availability_visibleTo2']"));
        await operationBase.disableCheckbox(operationBase.getLastElementByCss("[id='availability_visibleTo4']"));
        await operationBase.disableCheckbox(operationBase.getLastElementByCss("[id='availability_visibleTo8']"));
        await operationBase.disableCheckbox(operationBase.getLastElementByCss("[id='availability_visibleTo64']"));
    }
    /**
     * This function will de-select all the checkboxes of Editable By in Employee Profile Settings
     */
    async deSelectCbEditableBy() {
        await operationBase.switchToFrame();
        await operationBase.disableCheckbox(operationBase.getLastElementByCss("[id='availability_editableBy1']"));
        await operationBase.disableCheckbox(operationBase.getLastElementByCss("[id='availability_editableBy2']"));
        await operationBase.disableCheckbox(operationBase.getLastElementByCss("[id='availability_editableBy4']"));
        await operationBase.disableCheckbox(operationBase.getLastElementByCss("[id='availability_editableBy8']"));
        await operationBase.disableCheckbox(operationBase.getLastElementByCss("[id='availability_editableBy64']"));
    }
    /**
     * 
     * @param field: This argument takes @roles as string of array to whom VISIBLE TO permssion should by given.
     */
    async visiblityRights(field: string[]) {
        await this.deSelectCbVisibleTo()
        for (let i = 0; i < field.length; i++) {
            if (field[i].toUpperCase() == "USER") {
                await operationBase.clickLastElement(EmployeeProfileSettingsElements.visibleToUser);
            }
            else if (field[i].toUpperCase() == "MANAGER") {
                await operationBase.clickLastElement(EmployeeProfileSettingsElements.visibleToManager);
            }
            else if (field[i].toUpperCase() == 'GLOBAL HR ADMINISTRATOR') {
                await operationBase.clickLastElement(EmployeeProfileSettingsElements.visibleToGhr);
            }
            else if (field[i].toUpperCase() == 'HR ASSISTANT') {
                await operationBase.clickLastElement(EmployeeProfileSettingsElements.visibleToHrAssistant);
            }
            else if (field[i].toUpperCase() == 'HR MANAGER') {
                await operationBase.clickLastElement(EmployeeProfileSettingsElements.visibleToHrManager);
            }
            else if (field[i].toUpperCase() == 'VISIBLE TO ALL USERS') {
                await operationBase.clickLastElement(EmployeeProfileSettingsElements.visibleToAll);
            }
            else {
                throw new Error(field[i] + '\u001b[' + 31 + 'm' + 'INVALID VISIBLE PERMISSION' + '\u001b[0m');
            }
        }
        await operationBase.switchToDefault();
        await operationBase.clickLastElement(EmployeeProfileSettingsElements.doneButton);
        await operationBase.switchToMain();
    }
    /**
     * 
     * @param field: This argument takes @roles as string of array to whom EDITABLE BY permssion should by given.
     */
    async editabilityRights(field: string[]) {
        await this.deSelectCbEditableBy()
        for (let i = 0; i < field.length; i++) {
            if (field[i].toUpperCase() == "USER") {
                await operationBase.clickLastElement(EmployeeProfileSettingsElements.editableByUser);
            }
            else if (field[i].toUpperCase() == "MANAGER") {
                await operationBase.clickLastElement(EmployeeProfileSettingsElements.editableByManager);
            }
            else if (field[i].toUpperCase() == 'GLOBAL HR ADMINISTRATOR') {
                await operationBase.clickLastElement(EmployeeProfileSettingsElements.editableByGhr);
            }
            else if (field[i].toUpperCase() == 'HR ASSISTANT') {
                await operationBase.clickLastElement(EmployeeProfileSettingsElements.editableByHrAssistant);
            }
            else if (field[i].toUpperCase() == 'HR MANAGER') {
                await operationBase.clickLastElement(EmployeeProfileSettingsElements.editableByHrManager);
            }
            else {
                throw new Error(field[i] + '\u001b[' + 31 + 'm' + 'INVALID EDITABLE PERMISSION' + '\u001b[0m');
            }

        }
        await operationBase.switchToDefault();
        await operationBase.clickLastElement(EmployeeProfileSettingsElements.doneButton);
        await operationBase.switchToMain();
    }
    /**
    * 
    * @param tabName : This argument takes Tab name as string i.e @Personal_data , @Account_settings etc.
    */
    async employeeProfileSettingSelectTab(tabName: string) {
        await element(by.xpath("//div[contains(text(),'" + tabName + "')]")).click();
    }

    /**
     * 
     * @param dataTable : This argument will pick all field names along with roles from feature file and give appropriate roles to particular field for Editable By
     */
    async employeeProfileSettingsFieldEditablitltyRoles(dataTable) {
        for (let i = 0; i < dataTable.rawTable.length; i++) {
            this.data[i] = dataTable.rawTable[i]
        }
        for (let i = 0; i < dataTable.rawTable.length; i++) {
            let id = await operationBase.getFieldID((this.data[i])[0])
            await operationBase.scrollToElement(element(by.css("[id='editSettings" + id + "']")))
            await this.editabilityRights(await (this.data[i])[1].split(','));
        }
        await operationBase.save();
    }
    /**
    * 
    * @param dataTable :  This argument will pick all field names along with roles from feature file and give appropriate roles to particular field for VISIBLE TO
    */
    async employeeProfileSettingsFieldVisibilityRoles(dataTable) {
        for (let i = 0; i < dataTable.rawTable.length; i++) {
            this.data[i] = dataTable.rawTable[i]
        }
        for (let i = 0; i < dataTable.rawTable.length; i++) {
            let id = await operationBase.getFieldID((this.data[i])[0])
            await operationBase.scrollToElement(element(by.css("[id='visibilitySettings" + id + "']")))
            await this.visiblityRights(await (this.data[i])[1].split(','));
        }
        await operationBase.save();
    }
}
