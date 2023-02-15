
    export class basePage {
        elements = {
            title: "title",
            h4tag: "Cypress-cucumber",
        }

        webPageTitle() {
            cy.get(this.elements.title)
            .should("be.visible")
            .and
            .equal("Cypress-cucumber-UI")
            return this;
        }
         webPageH4Tag  () {
        cy.get(this.elements.h4tag)
           .should("be.visible")
           .and
           'contain.text',
            "Cypress-cucumber"
            return this;
    }
    }
   
    // exports.webPageTitle = function () {
    //     cy.get(elements.title)
    //         .should("be.visible")
    //         .and
    //         .equal("Cypress-cucumber-UI")
    //         return this;
    // }
   

// export const basePage = new BasePage();