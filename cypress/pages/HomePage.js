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

  loginWithAdminUser() {
    cy.fixture("users").then((credentials) => {
      const user = credentials.user;
      const password = credentials.password;

      cy.login(user, password, { sensitive: true });
    });
  }
}

export default new HomePage();
