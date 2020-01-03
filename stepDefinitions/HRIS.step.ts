import { Given, When, Then } from "../../GitHub/node_modules/cucumber";
import { EmployeeProfileSettings } from "../functional/EmployeeProfileSettings.helper";
import { OperationBase } from "../../CatalystoneAutomation/functionalUtilities/OperationBase";
import { browser } from "../../GitHub/node_modules/protractor";
import { LoginPageHelper } from "../../CatalystoneAutomation/applicationCommonPages/LoginPage/functional/LoginPage.helper";
import { HomePageHelper } from "../../CatalystoneAutomation/applicationCommonPages/HomePage/functional/HomePage.helper";
import { EmployeeProfile } from "../functional/EmployeeProfile.helper";

let operationBase: OperationBase = new OperationBase();
let empProfileSettingsHelperObject: EmployeeProfileSettings = new EmployeeProfileSettings();
let homePageObject: HomePageHelper = new HomePageHelper();
let loginPageHelper: LoginPageHelper = new LoginPageHelper();
let employeeProfileHelper: EmployeeProfile = new EmployeeProfile();

/**
 * In this scenario we are giving the editablity rights to a user through global HR
 */
Given('GHR should be able to login into catalystone application', async function () {
  await loginPageHelper.loginAsDeputy("hrg", "x");
});

When('Manager navigates to {string} and {string}', async function (string, string2) {

  await homePageObject.isHomePageDisplayed();
  await operationBase.goToPage(string, string2);
});
When('Give permissions of editable by in Account settings tab', async function (dataTable) {
  await empProfileSettingsHelperObject.employeeProfileSettingsFieldEditablitltyRoles(dataTable)
});

Then('Give permissions of visible to in Account settings tab and', async function (dataTable) {
  await empProfileSettingsHelperObject.employeeProfileSettingsFieldVisibilityRoles(dataTable);
});

When('Give permissions of editable by in Personal data {string} tab', async function (string, dataTable) {
  await browser.sleep(2000);
  await empProfileSettingsHelperObject.employeeProfileSettingSelectTab(string);
  await empProfileSettingsHelperObject.employeeProfileSettingsFieldEditablitltyRoles(dataTable);
});
When('Give permissions of editable by in Organisation {string} tab', async function (string, dataTable) {
  await browser.sleep(2000);
  await empProfileSettingsHelperObject.employeeProfileSettingSelectTab(string)
  await empProfileSettingsHelperObject.employeeProfileSettingsFieldEditablitltyRoles(dataTable)
});
When('Give permissions of editable to in Documents {string} tab', async function (string, dataTable) {
  await browser.sleep(2000);
  await empProfileSettingsHelperObject.employeeProfileSettingSelectTab(string)
  await empProfileSettingsHelperObject.employeeProfileSettingsFieldEditablitltyRoles(dataTable)
});
When('Give permissions of visible to in Documents tab and', async function (dataTable) {
  await empProfileSettingsHelperObject.employeeProfileSettingsFieldVisibilityRoles(dataTable);
});

/**
 * In this scenario we are verifying the editablity rights to a user i.e Amy Kelly
 */
Given('User login into application as Amy Kelly {string} and {string}.', async function (string, string2) {
  await loginPageHelper.loginAsEmployee(string, string2);
});

When('She navigates to her profile through {string} then {string}.', async function (string, string2) {
  await operationBase.goToPage(string, string2);
});
When('She needs to verify the editability rights of the account settings {string} tab', async function (string, dataTable) {
  await operationBase.selectTab(string)
  await employeeProfileHelper.toAssertEditabilityOfFields(dataTable)
});
When('She needs to verify the editability rights of the personal data {string} tab', async function (string, dataTable) {
  await operationBase.selectTab(string)
  await employeeProfileHelper.toAssertEditabilityOfFields(dataTable)
});

When('She needs to verify the editability rights of the Organisation {string} tab', async function (string, dataTable) {
  await operationBase.selectTab(string)
  await employeeProfileHelper.toAssertEditabilityOfFields(dataTable)
});

When('She needs to verify the editability rights of the Documents {string} tab', async function (string, dataTable) {
  await operationBase.selectTab(string)
  await employeeProfileHelper.toAssertEditabilityOfFields(dataTable)
});


/**
 * In this scenario To verify Manager rights to edit his/her employee field-names.
 */
Given('Manager login into application as Olivia Adams {string} and {string}.', async function (string, string2) {
  await loginPageHelper.loginAsEmployee(string, string2);
});

When('She navigates to her employee {string} profile through {string} then {string}.', async function (string, string2, string3) {
  await operationBase.goToPage(string2, string3);
  await employeeProfileHelper.openMyEmployee(string);
});

When('She needs to verify the editability rights of the account settings {string} tab', async function (string, dataTable) {
  await operationBase.selectTab(string)
  await employeeProfileHelper.toAssertEditabilityOfFields(dataTable)
});

When('She needs to verify the editability rights of the personal data {string} tab', async function (string, dataTable) {
  await operationBase.selectTab(string)
  await employeeProfileHelper.toAssertEditabilityOfFields(dataTable)
});

When('She needs to verify the editability rights of the Organisation {string} tab', async function (string, dataTable) {
  await operationBase.selectTab(string)
  await employeeProfileHelper.toAssertEditabilityOfFields(dataTable)
});

When('She needs to verify the editability rights of the Documents {string} tab', async function (string, dataTable) {
  await operationBase.selectTab(string)
  await employeeProfileHelper.toAssertEditabilityOfFields(dataTable)
  await operationBase.logOff();
});

/** 
 *  Following steps will create a new user through Admin
 *
 */

Given('User login into application {string} and {string}.', async function (string, string2) {
  await loginPageHelper.loginAsEmployee(string, string2);
});

When('User navigates to his profile through {string} then {string}.', async function (string, string2) {
  await operationBase.goToPage(string, string2);
});
When('As a user she needs to verify the editability rights of the account settings {string} tab', async function (string, dataTable) {
  await operationBase.selectTab(string)
  await employeeProfileHelper.toAssertEditabilityOfFields(dataTable)
});

When('Global HR navigates to {string} and {string}', async function (Menu, SubMenu) {
  await operationBase.goToPage(Menu, SubMenu);
});
Then('The user wants to generate and approve change request for the field', async function (dataTable) {
  employeeProfileHelper.BuildTaskModel(dataTable)
  await employeeProfileHelper.performChangeControlOpertaion()
});
