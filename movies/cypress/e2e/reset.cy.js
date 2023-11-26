describe("Login tests", () => {
    beforeEach(() => {
      cy.visit("/reset");
    });

    it("displays the reset form", () => {
      cy.get("main h1").contains("Reset Password").should('be.visible');
      cy.get("#email").should('be.visible');
    });
  
    it("navigate to sign up page", () => {
        cy.get(".MuiGrid-root>a").contains("Don't have an account? Sign Up").click();
        cy.url().should("include", `/register`);
    });

    it("alerts when email is not right", () => {
      cy.resetSubmit("1.com")
      cy.on("window:alert", (text) => {
        expect(text).to.contains("invalid-email");
      });
    });
  
    it("alerts when email is not exist", () => {
      cy.resetSubmit("test@t.com")
      cy.on("window:alert", (text) => {
        expect(text).to.contains("user-not-found");
      });
    });

    it("alerts when reset email has been sent", () => {
      cy.resetSubmit("123@test.test")
      cy.on('window:alert', (text) => {
        expect(text).to.contains("Password reset link sent!");
      });
    });
  });