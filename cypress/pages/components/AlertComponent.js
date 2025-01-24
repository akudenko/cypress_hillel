class AlertComponent {
    get alertMessage(){
        return cy.get('.alert p').last();
    }
}

export default new AlertComponent();