import '../support/commands';

it('User can login', () => {
    cy.login("phpcarieer+1@gmail.com", "5ENM7.SttmBczLu", {sensitive: true});
    cy.get(".alert-wrap p").should('have.text', 'You have been successfully logged in').should('be.visible');
    cy.get(".panel-page h1").should('have.text', 'Garage').should('be.visible');
})