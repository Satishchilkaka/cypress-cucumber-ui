class homePage {
    elements = {
        title: "title",
        h4tag: "h4",
    }
    webPageTitle() {
        cy.get('title')
            .should("be.visible")
            .and
            .equal("Cypress-cucumber-UI")
    }
     webPageH4Tag() {
        cy.get(this.elements.h4tag)
           .should("be.visible")
           .and
           'contain.text',
            "Cypress-cucumber"
    }
}
 module.exports = new homePage();