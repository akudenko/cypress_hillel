class GaragePage {
  get mainTitle() {
    return cy.get(".panel-page h1");
  }

  get carDropdown() {
    return cy.get("#carSelectDropdown");
  }

  get tableColumn() {
    return cy.get(".expenses_table th");
  }

  get tableRow() {
    return cy.get(".expenses_table td");
  }

  get mileageInput() {
    return cy.get("#addExpenseMileage");
  }

  get litersInput() {
    return cy.get("#addExpenseLiters");
  }

  get totalCostInput() {
    return cy.get("#addExpenseTotalCost");
  }

  get addAnExpenseBtn(){
    return cy.get('.btn-primary');
  }

  openAddAnExpensesToCar() {
    this.addAnExpenseBtn.click();
  }

  verifyURL() {
    cy.url().should("include", "/panel/expenses?carId=");
  }

  verifyCarIsSelected(carName) {
    this.carDropdown.should("have.text", carName);
  }

  verifyTableValue(columnName, expectedValue) {
    this.tableColumn
      .then((columns) => {
        const columnIndex = Array.from(columns).findIndex(
          (col) => col.textContent.trim() === columnName
        );

        if (columnIndex === -1) {
          throw new Error(`Column with name "${columnName}" not found`);
        }
        return columnIndex;
      })
      .then((columnIndex) => {
        cy.get(".expenses_table tbody tr").each(($row) => {
          cy.wrap($row)
            .find("td")
            .eq(columnIndex)
            .should("contain.text", expectedValue);
        });
      });
  }
}

export default new GaragePage();
