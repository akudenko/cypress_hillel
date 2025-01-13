Cypress.Commands.add("login", (name, password, sensitive) => {
  cy.visit("/");
  cy.get("button.header_signin").click();
  cy.get("#signinEmail").type(name);
  cy.get("#signinPassword").type(password, {sensitive: true});
  cy.get(".modal-footer").contains("Login").click();
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  })