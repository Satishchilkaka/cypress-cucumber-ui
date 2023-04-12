
Feature: Load local host

    Background: Open local host
        Given Local host 4200
    Scenario: Should loadpage title
        When A user naviagte to local host 4200
        Then Page title appears'Cypress-cucumber-UI'

    Scenario: Should have h4 tag text
        When A user navigate to local host 4200
        Then H4 page tag appears as 'Cypress-cucumber'

    Scenario: Should have input field
        When A user navigate to local host 4200
        Then Should have input field

    Scenario: Should have add item button 
        When A user navigate to local host 4200
        Then Should have Add items button


