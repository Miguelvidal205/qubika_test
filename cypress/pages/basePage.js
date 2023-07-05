export default class BasePage {

    setTypeOn(element, text) {
        cy.get(element).should('be.visible').type(text);
    }

    typeEnterOn(element) {
        cy.get(element).type('{enter}');
    }

    clickOnByContains(element, parent) {
        cy.contains(element, parent).should('be.visible').click();
    }
}
