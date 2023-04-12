Feature: Add items name As a add new item
    Background: Open local host
    Scenario: Add item name sucessfully
        Given Local host 4200 homepage
        When I enter new items name in input field
        And I click add item button
        Then I should able to see the new item