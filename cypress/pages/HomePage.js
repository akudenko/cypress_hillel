class HomePage {
  get signInBtn() {
    return cy.get("button.header_signin");
  }

  openPage() {
    cy.visit("/");
  }

  openSignInPopup() {
    this.signInBtn.click();
  }
}

export default new HomePage();
