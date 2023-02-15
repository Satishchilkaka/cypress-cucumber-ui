
Feature: Load local host

    Background: Open local host
        Given Local host
    Scenario: Verify page title
        When A user naviagte to local host 4200
        Then Page title appears'Cypress-cucumber-UI'

    Scenario: Verify h4 tag text
        When A user navigate to local host 4200
        Then H4 page tag appears as 'Cypress-cucumber'


