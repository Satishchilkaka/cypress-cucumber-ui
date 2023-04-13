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

  
  Then("I should able to see the new Item Name 0001 item", () => {
    cy.get('p').should('exist')
    .and('be.visible')
  });

  
  Given("homepage", () => {
    cy.visit("/");
  });
  When("I enter a second new item name in input field", () => {
    cy.get('[data-cy="itemName"]').type('Item Name 0002')
    
  });
  
  When("I click add item button for second item", () => {
    cy.get('[data-cy="addItem"]')
    .click()
  });

  
  Then("I should able to see the new Item Name 0002 item", () => {
    cy.get('p').should('exist')
    .and('be.visible')
  });
  