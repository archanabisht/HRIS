Feature: Execution of HRIS

        # Scenario: As a global HR, He/she able to give Editable by and Visible To permissions to a new user.

        #         Given GHR should be able to login into catalystone application
        #         When Manager navigates to "Administration" and "Employee profile settings"
        #         And Give permissions of editable by in Account settings tab
        #                 #FieldName               #Roles
        #                 | User account status | Manager,HR manager,Global HR administrator                   |
        #                 | Language            | User,Manager,HR manager,Global HR administrator,HR assistant |
        #                 | Date format         | User,Manager,HR manager,Global HR administrator,HR assistant |
        #                 | Primary profile     | Manager,HR manager,Global HR administrator,HR assistant      |
        #         And Give permissions of visible to in Account settings tab and
        #                 #FieldName               #Roles
        #                 | Primary profile     | visible to all users |
        #                 | User account status | visible to all users |
        #                 | Language            | visible to all users |
        #                 | Date format         | visible to all users |
        #                 | Primary profile     | visible to all users |
        #         And Give permissions of editable by in Personal data "Personal data" tab
        #                 #FieldName               #Roles
        #                 | Employee ID | HR manager,Global HR administrator,HR assistant         |
        #                 | Type of pay | Manager,HR manager,Global HR administrator,HR assistant |
        #         And Give permissions of editable by in Organisation "Organisation" tab
        #                 #FieldName               #Roles
        #                 | Percentage of FTE | Manager,HR manager,Global HR administrator,HR assistant |
        #         And Give permissions of editable to in Documents "Documents" tab
        #                 #FieldName               #Roles
        #                 | Employment contract | Manager,HR manager,Global HR administrator |
        #         And Give permissions of visible to in Documents tab and
        #                 #FieldName               #Roles
        #                 | Employment contract | User                 |
        #                 | Authorizations      | visible to all users |

        # Scenario: Verification of Editabality of Account Setting Tab by a user.

        #         Given User login into application as Amy Kelly "Akelly" and "x".
        #         When She navigates to her profile through "Myself" then "My profile".
        #         And She needs to verify the editability rights of the account settings "Account settings" tab
        #                 #Field Names
        #                 | Language    |
        #                 | Date format |
        #         And She needs to verify the editability rights of the personal data "Personal data" tab
        #                 #Field Names
        #                 | E-mail                 |
        #                 | Gender                 |
        #                 | Social security number |
        #                 | Nationality            |
        #                 | Country                |
        #                 | Last name              |
        #                 | Nickname               |
        #         And She needs to verify the editability rights of the Organisation "Organisation" tab
        #                 #Field Names
        #                 | Manager    |
        #                 | HR manager |
        #                 | Job location |
        #                 | Organization |
        #         And She needs to verify the editability rights of the Documents "Documents" tab
        #                 #Field Names
        #                 | Employment contract |
        #                 | Authorizations      |
        #                 | Code of Conduct     |

        Scenario: Verification of Editabality of Account Setting Tab by a manager.

                Given Manager login into application as Olivia Adams "OAdams" and "x".
                When She navigates to her employee "Amy Kelly" profile through "My employees" then "My employees".
                And She needs to verify the editability rights of the account settings "Account settings" tab
                        #Field Names
                        | Language    |
                        | Date format |
                And She needs to verify the editability rights of the personal data "Personal data" tab
                        #Field Names
                        | E-mail                 |
                        | Gender                 |
                        | Social security number |
                        | Nationality            |
                        | Country                |
                        | Last name              |
                        | Nickname               |
                And She needs to verify the editability rights of the Organisation "Organisation" tab
                        #Field Names
                        | Manager      |
                        | HR manager   |
                        | Job location |
                        | Organization |
                And She needs to verify the editability rights of the Documents "Documents" tab
                        #Field Names
                        | Employment contract |
                        | Authorizations      |
                        | Code of Conduct     |

# Scenario: As a global HR I want to select change Controll settings

#         Given The user is logged in as Global HR
#         When Global HR navigates to "Administration" and "Employee profile settings"
#         Then The user wants to generate and approve change request for the field

#                 #|        Setting                      |     EmployeeName    |  FieldName   |     TabName       |     Data           |      Requester             |       Approver     |          Action      |
#                 #|    ApprovalFromHRForEmployee        |     Amy Kelly       |  Title       |  Personal data    |      QA            |    Amy Kelly               |   UK HR            |      Accept changes  |
#                 | ApprovalFromHRForManager | Amy Kelly | Title | Personal data | QA Tech Lead | Olivia Adams | UK HR | Accept changes |

