import BasePage from "./basePage"

const basePage = new BasePage();
const mainSearchInputId = '#APjFqb'

export default class GoogleHomePage {

    setKeyOnMainSearchAndEnter(text) {
        this.setKeyOnSearchInput(text);
        basePage.typeEnterOn(mainSearchInputId)
    }

    setKeyOnSearchInput(text) {
        basePage.setTypeOn(mainSearchInputId, text);
    }

    verifyTitle() {
        cy.title().should('eq', 'Google');
    }

    verifyTopMenu() {
        cy.get('#gb [target="_top"]')
            .contains('Gmail')
            .should('exist');
        cy.get('#gb [target="_top"]')
            .contains('Imágenes')
            .should('exist');
    }

    verifySearchInput() {
        cy.get('#APjFqb').should('be.visible');
    }
}
