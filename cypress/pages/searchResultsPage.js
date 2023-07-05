import BasePage from "./basePage"

const basePage = new BasePage();

export default class SearchResultsPage {

    clickOnImageButton() {
        basePage.clickOnByContains('div', 'Imágenes');
    }

    verifyImageButtonActive() {
        cy.get('span.rQEFy.NZmxZe[aria-current="page"]')
            .should('exist')
            .should('contain', 'Images');
    }

    verifyTheFirstResult(text, searchText) {
        cy.get(`[data-async-context="query:${searchText}"] a`)
            .first()
            .invoke('text')
            .should('contain', text);
    }

    verifyResultByURL(text) {
        cy.url().should('include', `search?q=${text}`);
    }

    verifySearchInputText(text) {
        cy.get('#APjFqb').should('have.value', text);
    }
}
