import AlertComponent from "../pages/components/AlertComponent";
import GaragePage from "../pages/GaragePage";
import HomePage from "../pages/HomePage";

describe('Garage - positive flows', () => {
    beforeEach(() => {
        HomePage.openPage();
        HomePage.loginWithAdminUser();
        GaragePage.removeAllCars();
        cy.get('.car-list li', { timeout: 5000 }).should('have.length', 0);
    })

    it('User can add the new car', async() => {
        GaragePage.openAddNewPopup();
        GaragePage.addNewCar('BMW', '5', 200);

        cy.get('.car-list li').should('have.length', 1);
        cy.get('.car-list li').first().should('contain.text', 'BMW');
        AlertComponent.alertMessage.should('have.text', 'Car added');
    })
})