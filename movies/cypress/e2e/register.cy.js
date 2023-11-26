import { makeid } from "../support/e2e";

describe("Register Tests", () => {
    beforeEach(() => {
      cy.visit("/register");
    });
    
    it("displays the register form", () => {
      cy.get("main h1").contains("Sign up").should('be.visible');
      cy.get("#fulltName").should('be.visible');
      cy.get("#email").should('be.visible');
      cy.get("#password").should('be.visible');
    });
  
    it("alerts when email is not right", () => {
      cy.signupSubmit("1.com", "123456", "ABC")
      cy.on("window:alert", (text) => {
        expect(text).to.contains("invalid-email");
      });
    });

    it("alerts when email alreay exists", () => {
      cy.signupSubmit("testtest2233@gmail.com", "111111", "fsdfsd")
      cy.on('window:alert', (text) => {
        expect(text).to.contains("already-in-use");
      });
    });

    it("alerts when password not fit", () => {
      cy.signupSubmit("test233@gmail.com", "123", "fsdfsd")
      cy.on('window:alert', (text) => {
        expect(text).to.contains("weak-password");
      });
    });

    it("navigate to log in page", () => {
      cy.get(".MuiGrid-root>a").contains("Already have an account? Sign in").click();
      cy.url().should("include", `/login`);
    });
  
    it("navigate to home page when registered and after log out should not have welcome information in header", () => {
      cy.signupSubmit(makeid(6) + "@test.com", "123456", "Test Name")
      cy.get("div").contains("Welcome!");
      cy.url().should("not.include", "movies");
      cy.get(".MuiButtonBase-root").eq(3).click();
      cy.get("div").should("not.have","Welcome!");
    });
  
  });