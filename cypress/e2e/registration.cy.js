const { should } = require("chai");

const signInBtn = "button.header_signin";
const registrationBtn = ".modal-footer";
const inputs = "form input";
const loginBtn = ".modal-footer";
const registrationName = "#signupName";
const registrationLastName = "#signupLastName";
const registrationEmail = "#signupEmail";
const registrationPassword = "#signupPassword";
const registrationRepeatPassword = "#signupRepeatPassword";
const errorMessage = ".invalid-feedback p";

describe("Registration tests - positive flow", () => {
  const user = {
    name: `Oleksii`,
    lastName: `Kud`,
    email: `phpcarieer+${Math.floor(Math.random() * 1000000)}@gmail.com`,
    password: `1234567Aa_`,
  };

  beforeEach(() => {
    cy.visit("/");
    cy.get(signInBtn).click();
    cy.get(loginBtn).contains("Registration").click();
  });

  it("User can register an account", () => {
    cy.get(registrationName).type(user.name);
    cy.get(registrationLastName).type(user.lastName);
    cy.get(registrationEmail).type(user.email);
    cy.get(registrationPassword).type(user.password);
    cy.get(registrationRepeatPassword).type(user.password);
    cy.get(registrationBtn).contains("Register").click();

    cy.get(".h3").should("have.text", "You don’t have any cars in your garage");
    cy.visit("/panel/profile");
    cy.get(".display-4").should("have.text", `${user.name} ${user.lastName}`);
  });

  describe("User can't be registered", () => {
    const user = {
      name: `Oleksii`,
      lastName: `Kud`,
      email: `phpcarieer+${Math.floor(Math.random() * 1000000)}@gmail.com`,
      password: `1234567Aa_`,
    };

    beforeEach(() => {
      cy.visit("/");
      cy.get(signInBtn).click();
      cy.get(registrationBtn).contains("Registration").click();
    });

    it("Validation by required fields", () => {
      const validationMessages = [
        "Name required",
        "Last name required",
        "Email required",
        "Password required",
        "Re-enter password required",
      ];

      cy.get(registrationName).focus();
      cy.get(registrationLastName).focus();
      cy.get(registrationEmail).focus();
      cy.get(registrationPassword).focus();
      cy.get(registrationRepeatPassword).focus();
      cy.get(registrationRepeatPassword).blur();

      cy.get(errorMessage)
        .should("have.length", 5)
        .each((element, index) => {
          cy.wrap(element)
            .should("have.text", validationMessages[index])
            .should("have.css", "color", "rgb(220, 53, 69)");
        });

      cy.get(inputs)
        .should("have.length", 5)
        .each((element, index) => {
          cy.wrap(element).should(
            "have.css",
            "border-color",
            "rgb(220, 53, 69)"
          );
        });

      cy.get(registrationBtn).contains("Register").should("be.disabled");
    });

    it("Validation by wrong data", () => {
      const validationMessages = [
        "Name is invalid",
        "Last name is invalid",
        "Email is incorrect",
        "Passwords do not match",
      ];

      cy.get(registrationName).type("123");
      cy.get(registrationLastName).type("123");
      cy.get(registrationEmail).type("okudenko@");
      cy.get(registrationEmail).blur();
      cy.get(registrationPassword).type(user.password);
      cy.get(registrationRepeatPassword).type(`${user.password}1234`);
      cy.get(registrationRepeatPassword).blur();

      cy.get(errorMessage)
        .should("have.length", 4)
        .each((element, index) => {
          cy.wrap(element).should("have.text", validationMessages[index]);
        });

      cy.get(registrationBtn).contains("Register").should("be.disabled");
    });

    it("Validation by wrong length", () => {
      const validationMessages = [
        "Name has to be from 2 to 20 characters long",
        "Last name has to be from 2 to 20 characters long",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ];

      cy.get(registrationName).type("a");
      cy.get(registrationLastName).type("K");
      cy.get(registrationPassword).type("123");
      cy.get(registrationRepeatPassword).type("123");

      cy.get(errorMessage).each((element, index) => {
        cy.wrap(element).should("have.text", validationMessages[index]);
      });

      cy.get(registrationName).clear().type("Oleksiiiiiiiiiiiiiiii");
      cy.get(registrationLastName).clear().type("Kudenkooooooooooooooooooooo");
      cy.get(registrationPassword).clear().type("123456789101112131415");
      cy.get(registrationRepeatPassword).clear().type("123456789101112131415");

      cy.get(errorMessage).each((element, index) => {
        cy.wrap(element).should("have.text", validationMessages[index]);
      });
    });
  });
});
