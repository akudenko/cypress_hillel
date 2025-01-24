class GaragePage {
  get mainTitle() {
    return cy.get(".panel-page h1");
  }

  get addNewCarBtn() {
    return cy.get(".panel-page_heading button");
  }

  get brandDropdown() {
    return cy.get("#addCarBrand");
  }

  get modelDropdown() {
    return cy.get("#addCarModel");
  }

  get mileageInput() {
    return cy.get("#addCarMileage");
  }

  get confirmAdding() {
    return cy.get(".modal-footer").contains("Add").click();
  }

  get addedCars() {
    return cy.get(".car-list li");
  }

  get modalPopup(){
    return cy.get('.modal-content');
  }

  openAddNewPopup(){
    this.addNewCarBtn.should('be.visible').click();
  }

  addNewCar(brand, model, mileage) {
    this.modalPopup.should('be.visible');
    this.brandDropdown.select(brand);
    this.modelDropdown.select(model);
    this.mileageInput.type(mileage);
    this.confirmAdding.should('be.visible').click();
    cy.get('.modal').should("not.be.visible");
    cy.wait(2000);
  }

  verifyLastAddedCar(brand, model, mileage){
    this.addedCars.eq(0).find(this.carNamesSelector).should('have.text', carName);
    this.brandDropdown.select(brand);
    this.modelDropdown.select(model);
    this.mileageInput.type(mileage);
  }

removeAllCars() {
  cy.get('body').then(($body) => {
    if ($body.find('.car-list li', {timeout: 5000 }).length > 0) {
      cy.get('.car-list li').each((car) => {
        cy.wrap(car).find(".icon-edit").click();
        cy.contains("Remove car").click();
        cy.get(".btn-danger").click();
        cy.wait(500); 
      });
    } else {
      cy.log('No cars to remove.');
    }
  });
}
  
}

export default new GaragePage();