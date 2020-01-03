import { browser, element, by } from "../../GitHub/node_modules/protractor";

export class EmpolyeeProfileElements {

    static btnNewUser = 
    element(by.css("button[aut_name='New user']"));

    static tabJobDescription = 
    element(by.css("li[style='display: block;'] span[title='Job description']"));

    static iconEditJobDescription = 
    element(by.css("span[id='edit_17'] span"));

    static ibJobDescriptionFirst = 
    element(by.xpath("(//div[@class='textAreaDiv'])[1]//textarea"));

    static ibJobDescriptionSecond = 
    element(by.xpath("(//div[@class='textAreaDiv'])[2]//textarea"));

    static ibJobDescriptionThird = 
    element(by.xpath("(//div[@class='textAreaDiv'])[3]//textarea"));

    static tabOrganisation = 
    element(by.css("li[style='display: block;'] span[title='Organisation']"));

    static editIconOrganisation = 
    element(by.xpath("//span[@id='edit_8']/span"));

    static organisationSelectorIcon = 
    element(by.xpath("//span[@id='mainSpan']/span//a"));

    static ibOrganisationName =  
    element(by.xpath("//a[text()='ACME']"));
    
    static iconAccept = 
    element(by.css("a[title='Accept']"));

    static page = 
    element(by.css("div[class='clickToEditOverlay']"));

    static alertInnerText = 
    element(by.css("div[id='msgInnerTD']"));

    static iconEditmanagerField = 
    element(by.css("span[id='edit_9'] span"));

    static ibUserSelection = 
    element(by.css("input[id='userSelectionInput']"));

    static iconEditHrManager = 
    element(by.css("span[id='edit_11'] span"));

    static iconEditJobLocation = 
    element(by.css("span[id='edit_14'] span"));

    static ddJobLocation = 
    element(by.css("select[id='data_14']"));

    static iconEditJobRole = 
    element(by.css("span[id='edit_15'] span"));

    static ddJobRole = 
    element(by.css("select[id='data_15']"));

    static iconEditStartDate = 
    element(by.css("span[id='edit_37'] span"));

    static ibStartDate =  
    element(by.css("span[fieldname='Start date in ACME'] input"));

    static iconEditEndDate = 
    element(by.css("span[id='edit_38'] span"));

    static ibEndDate = 
    element(by.css("span[fieldname='End date in ACME'] input"));

    static iconEditFte = 
    element(by.css("span[id='edit_40'] span"));

    static ibFte = 
    element(by.css("span[fieldname='Percentage of FTE'] input"));

    // This is used to check if tooltip of change request is created 
    static tPChangeRequest = 
    element(by.xpath("//i[contains(@class,'change-req-tooltip')]"))

    static btnAcceptChange = 
    element(by.css('#btnAcceptChange'))

    static btnRejectChange = 
    element(by.css('#btnRejectChange'))

    
  
}