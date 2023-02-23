import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

// import {homePage} from '@pages/BasePage'
const homePage = require('../../pages/basePage.js')
Given("Local host 4200", () => {
  cy.visit("/");
});
When("A user naviagte to local host 4200", () => {
  // cy.visit("/");
  
});

Then("Page title appears'Cypress-cucumber-UI'", () => {
  cy.get('title')
  .should('contain', 'Cypress-cucumber-UI');
  // homePage.webPageTitle()
});

When("A user navigate to local host 4200", () => {
  cy.visit("/");
});

Then("H4 page tag appears as 'Cypress-cucumber'", () => {
  cy.get('h4').should('contain', 'Cypress-cucumber');
  // homePage.webPageH4Tag()
});
Then('Should have input field', () => {
  cy.get('[data-cy="itemName"]').should('exist').and('be.visible');
})
Then('Should have Add items button', () => {
  cy.get('[data-cy="addItem"]').should('exist').and('be.visible');
})



