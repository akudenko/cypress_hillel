class RegistrationForm {
  get name() {
    return cy.get("#signupName");
  }

  get lastName() {
    return cy.get("#signupLastName");
  }

  get email() {
    return cy.get("#signupEmail");
  }

  get password() {
    return cy.get("#signupPassword");
  }

  get repeatPassword() {
    return cy.get("#signupRepeatPassword");
  }

  get inputs() {
    return cy.get("form input");
  }

  get registrationBtn() {
    return cy.get(".modal-footer").contains("Register");
  }

  get errorMessage() {
    return cy.get(".invalid-feedback p");
  }

  setName(name) {
    this.name.type(name);
  }

  setLastName(lastName) {
    this.lastName.type(lastName);
  }

  setEmail(email) {
    this.email.type(email);
  }

  setPassword(password) {
    this.password.type(password);
  }

  setRepeatPassword(password) {
    this.repeatPassword.type(password);
  }

  confirmRegister() {
    this.registrationBtn.click();
  }

  triggerErrorMessages(selector) {
    selector.focus();
    selector.blur();
  }
}

export default new RegistrationForm();
