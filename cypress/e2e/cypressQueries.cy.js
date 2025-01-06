describe("Find all buttons from the header", () => {
  const hederLogo = "a.header_logo";
  const homeBtn = "nav a";
  const aboutBtn = "[appscrollto=aboutSection]";
  const contactBtn = "[appscrollto=contactsSection]";
  const guestLoginBtn = "button.-guest";
  const signInBtn = "button.header_signin";
  const modalTitle = ".modal-content h4";
  const singUpBtn = ".hero-descriptor button";

  beforeEach(() => {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
  });

  it("All buttons from header should be displayed", () => {
    cy.get(hederLogo).should("be.visible");
    cy.get(homeBtn).should("be.visible");
    cy.get(aboutBtn).should("be.visible");
    cy.get(contactBtn).should("be.visible");
    cy.get(guestLoginBtn).should("be.visible");
    cy.get(signInBtn).should("be.visible");
    cy.get(singUpBtn).should("be.visible");
  });

  it("Sign In popup can be opened", () => {
    cy.get(signInBtn).click();
    cy.get(modalTitle).should("have.text", "Log in");
  });

  it("Sign Up popup can be opened", () => {
    cy.get(singUpBtn).click();
    cy.get(modalTitle).should("have.text", "Registration");
  });
});

describe("Find all buttons from the footer", () => {
  const contactsBlock = ".contacts_socials";
  const hillelLinkBottom = ".display-4";
  const supportHillelLinkBottom = "a.h4";

  beforeEach(() => {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
  });

  it("All buttons from footer should be displayed", () => {
    cy.get(contactsBlock)
      .children()
      .each((a) => {
        cy.wrap(a).should("be.visible");
      });
  });

  it("All links from bottom are displayed", () => {
    cy.get(hillelLinkBottom).should("be.visible");
    cy.get(supportHillelLinkBottom).should("be.visible");
  });
});
