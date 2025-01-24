import AlertComponent from '../pages/components/AlertComponent';
import GaragePage from '../pages/GaragePage';
import '../support/commands';

it('User can login', () => {
    cy.login("phpcarieer+1@gmail.com", "5ENM7.SttmBczLu", {sensitive: true});
    AlertComponent.alertMessage.should('have.text', 'You have been successfully logged in').should('be.visible');
    GaragePage.mainTitle.should('have.text', 'Garage').should('be.visible');
})