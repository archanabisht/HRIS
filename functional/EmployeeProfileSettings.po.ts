import { element, by, browser } from "../../GitHub/node_modules/protractor";
import { OperationBase } from "../../CatalystoneAutomation/functionalUtilities/OperationBase";

let operationBase: OperationBase = new OperationBase();
export class EmployeeProfileSettingsElements extends OperationBase {

    static userAccountStatusEditableBy = 
    element.all(by.css("[id='editSettings103']"));

    static lanaguageEditableBy =
     element.all(by.css("[id='editSettings104']"));

    static dateForamtEditableBy = 
    element.all(by.css("[id='editSettings105']"));

    static primaryProfileEditableBy = 
    element.all(by.css("[id='editSettings45']"));

    static userAccountStatusVisibleTo = 
    element.all(by.css("[id='visibilitySettings103']"));

    static lanaguageVisibleTo = 
    element.all(by.css("[id='visibilitySettings104']"));

    static dateFormatVisibleTo = 
    element.all(by.css("[id='visibilitySettings105']"));

    static primaryProfileVisibleTo = 
    element.all(by.css("[id='visibilitySettings45']"));

    static tabPersonalData = 
    element(by.css("[id='tab1']"));

    static empIdEditableBy = 
    element.all(by.css("[id='editSettings0']"));

    static typeOfPayEditableBy = 
    element.all(by.css("[id='editSettings50']"));

    static tabJobDescription = 
    element(by.css("[id='tab2']"));

    static tabOrganisation = 
    element.all(by.css("[id='tab3']"));

    static percentageFTEEditableBy = 
    element.all(by.css("[id='editSettings40']"));

    static tabCompensation = 
    element.all(by.css("[id='tab4']"));

    static tabDocuments =
     element.all(by.css("[id='tab5']"));

    static employeeContractVisibleTo = 
    element.all(by.css("[id='visibilitySettings1003']"));

    static AuthorizationsVisibleTo = 
    element.all(by.css("[id='visibilitySettings1012']"));

    static employeeContractEditableBy = 
    element.all(by.css("[id='editSettings1003']"));

    static visibleToRadioButton = 
    element.all(by.xpath("//span[contains(text(),' Visible to: ')]"));

    static visibleToUser = 
    element.all(by.css("[id='availability_visibleTo1']"));

    static visibleToManager =
     element.all(by.css("[id='availability_visibleTo2']"));

    static visibleToHrManager = 
    element.all(by.css("[id='availability_visibleTo4']"));

    static visibleToGhr = 
    element.all(by.css("[id='availability_visibleTo8']"));

    static visibleToHrAssistant = 
    element.all(by.css("[id='availability_visibleTo64']"));

    static editableByUser =
     element.all(by.css("[id='availability_editableBy1']"));

    static editableByManager = 
    element.all(by.css("[id='availability_editableBy2']"));

    static editableByHrManager =
     element.all(by.css("[id='availability_editableBy4']"));

    static editableByGhr = 
    element.all(by.css("[id='availability_editableBy8']"));

    static editableByHrAssistant = 
    element.all(by.css("[id='availability_editableBy64']"));

    static visibleToAll = 
    element.all(by.xpath('//td[@class="paddingAll5 paddingBottom0"]//input'));

    static doneButton = 
    element.all(by.css("[aut_name='Done']"));

    
    // These are the elements present in each field setting(Pencil icon along each field)
    static ChangeControlSection =
    element.all(by.xpath("//tr[@id='trChangeControl']"))
   
    static cbApprovalFromHRForEmp = 
    element(by.xpath("//label[contains(text(),'Require approval of change from HR manager if empl')]"))

    static cbApprovalFromManforEmp =
    element(by.xpath("//label[contains(text(),'Require approval from manager if employee makes ch')]"))

    static cbApprovalFromHRForMan =
    element(by.xpath("//label[contains(text(),'Require approval from HR manager if manager makes')]"))

    static cbApprovalFromSecondLevelManForMan =
    element(by.xpath("//label[contains(text(),'Require approval from second level manager if mana')]"))

    static cbApprovalFromHRForHR =
    element(by.xpath("//tbody[@id='tbCCApprovalHRForHR']//label[contains(text(),'Require approval from HR manager on a higher level')]"))

    static cbApprovalFromHRForHRA =
    element(by.xpath("//label[contains(text(),'Require approval from HR manager if HR assistant m')]"))

    static cbApprovalFromHLHRForHA =
    element(by.xpath("//tbody[@id='tbCCApprovalHLHRForHRA']//label[contains(text(),'Require approval from HR manager on a higher level')]"))

     

   
}


