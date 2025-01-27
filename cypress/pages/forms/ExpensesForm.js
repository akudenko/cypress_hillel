class ExpensesForm {
  get mileageInput() {
    return cy.get("#addExpenseMileage");
  }

  get litersInput() {
    return cy.get("#addExpenseLiters");
  }

  get totalCostInput() {
    return cy.get("#addExpenseTotalCost");
  }

  get confirmAdding() {
    return cy.get(".modal-footer").contains("Add");
  }

  addExpensiveToFirstCar(mileage, liters, totalCost) {
    this.mileageInput
        .clear()
        .type(mileage);
    this.litersInput.type(liters);
    this.totalCostInput.type(totalCost);
    this.confirmAdding.should("be.visible").click();
  }
}

export default new ExpensesForm();
