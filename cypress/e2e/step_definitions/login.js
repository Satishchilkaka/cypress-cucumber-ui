import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("./pages/LoginPage.js");

Given("I open Google page", () => {
  cy.visit("/");
});

When("A user naviagte to google", () => {
  cy.visit("/");
  
});

Then("I see 'Google' in the title", () => {
  cy.get('title').should('exist')
});
