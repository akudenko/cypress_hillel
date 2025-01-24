const { should } = require("chai");
import SignInForm from "../pages/forms/SignInForm";
import RegistrationForm from "../pages/forms/RegistrationForm";
import HomePage from "../pages/HomePage";

describe("Registration tests - positive flow", () => {
  const user = {
    name: `Oleksii`,
    lastName: `Kud`,
    email: `phpcarieer+${Math.floor(Math.random() * 1000000)}@gmail.com`,
    password: `1234567Aa_`,
  };

  beforeEach(() => {
    HomePage.openPage();
    HomePage.openSignInPopup();
    SignInForm.openRegistrationFormPopup();
  });

  it("User can register an account", () => {
    RegistrationForm.setName(user.name);
    RegistrationForm.setLastName(user.lastName);
    RegistrationForm.setEmail(user.email);
    RegistrationForm.setPassword(user.password);
    RegistrationForm.setRepeatPassword(user.password);
    RegistrationForm.confirmRegister();

    cy.get(".h3").should("have.text", "You don’t have any cars in your garage");
    cy.visit("/panel/profile");
    cy.get(".display-4").should("have.text", `${user.name} ${user.lastName}`);
  });

  describe("User can't be registered - Negative flow", () => {
    const user = {
      name: `Oleksii`,
      lastName: `Kud`,
      email: `phpcarieer+${Math.floor(Math.random() * 1000000)}@gmail.com`,
      password: `1234567Aa_`,
    };

    beforeEach(() => {
      HomePage.openPage();
      HomePage.openSignInPopup();
      SignInForm.openRegistrationFormPopup();
    });

    it("Validation by required fields", () => {
      const validationMessages = [
        "Name required",
        "Last name required",
        "Email required",
        "Password required",
        "Re-enter password required",
      ];

      RegistrationForm.triggerErrorMessages(RegistrationForm.name);
      RegistrationForm.triggerErrorMessages(RegistrationForm.lastName);
      RegistrationForm.triggerErrorMessages(RegistrationForm.email);
      RegistrationForm.triggerErrorMessages(RegistrationForm.password);
      RegistrationForm.triggerErrorMessages(RegistrationForm.repeatPassword);

      RegistrationForm.errorMessage
        .should("have.length", 5)
        .each((element, index) => {
          cy.wrap(element)
            .should("have.text", validationMessages[index])
            .should("have.css", "color", "rgb(220, 53, 69)");
        });

      RegistrationForm.inputs
        .should("have.length", 5)
        .each((element, index) => {
          cy.wrap(element).should(
            "have.css",
            "border-color",
            "rgb(220, 53, 69)"
          );
        });

      RegistrationForm.registrationBtn.should("be.disabled");
    });

    it("Validation by wrong data", () => {
      const validationMessages = [
        "Name is invalid",
        "Last name is invalid",
        "Email is incorrect",
        "Passwords do not match",
      ];

      RegistrationForm.setName("123");
      RegistrationForm.setLastName("123");
      RegistrationForm.setEmail("okudenko@");
      RegistrationForm.triggerErrorMessages(RegistrationForm.email)
      RegistrationForm.setPassword(user.password);
      RegistrationForm.setRepeatPassword(`${user.password}1234`);
      RegistrationForm.triggerErrorMessages(RegistrationForm.repeatPassword);

      RegistrationForm.errorMessage
        .should("have.length", 4)
        .each((element, index) => {
          cy.wrap(element).should("have.text", validationMessages[index]);
        });

      RegistrationForm.registrationBtn.should("be.disabled");
    });

    it("Validation by wrong length", () => {
      const validationMessages = [
        "Name has to be from 2 to 20 characters long",
        "Last name has to be from 2 to 20 characters long",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ];

      RegistrationForm.setName("a");
      RegistrationForm.setLastName("K");
      RegistrationForm.setPassword("123");
      RegistrationForm.setRepeatPassword("123");

      RegistrationForm.errorMessage.each((element, index) => {
        cy.wrap(element).should("have.text", validationMessages[index]);
      });

      RegistrationForm.setName("Oleksiiiiiiiiiiiiiiii");
      RegistrationForm.setLastName("Kudenkooooooooooooooooooooo");
      RegistrationForm.setPassword("123456789101112131415");
      RegistrationForm.setRepeatPassword("123456789101112131415");

      RegistrationForm.errorMessage.each((element, index) => {
        cy.wrap(element).should("have.text", validationMessages[index]);
      });
    });
  });
});
