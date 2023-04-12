import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  Given("Local host 4200 homepage", () => {
    cy.visit("/");
  });
  When("I enter new items name in input field", () => {
    cy.get('[data-cy="itemName"]').type('Item Name 0001')
    
  });
  
  When("I click add item button", () => {
    cy.get('[data-cy="addItem"]')
    .click()
  });

  
  Then("I should able to see the new item", () => {
    cy.get('p').should('exist')
    .and('be.visible')
  });

  
  
  