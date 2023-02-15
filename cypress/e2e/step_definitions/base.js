import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

// import {homePage} from '@pages/BasePage'
const homePage = require('../../pages/basePage.js')
describe('Home page', () => {
Given("Local host", () => {
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


})

