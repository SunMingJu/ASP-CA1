describe("Login tests", () => {

    beforeEach(() => {

      cy.visit("/login");

    });




    it("displays the login form", () => {

      cy.get("main h1").contains("Log in").should('be.visible');

      cy.get("#email").should('be.visible');

      cy.get("#password").should('be.visible');

    });




    it("navigate to sign up page", () => {

        cy.get(".MuiGrid-root>a").contains("Don't have an account? Sign Up").click();

        cy.url().should("include", `/register`);

    });




    it("navigate to reset page", () => {

      cy.get(".MuiGrid-root>a").contains("Forgot password?").click();

      cy.url().should("include", `/reset`);

    });




    it("alerts when email is not right", () => {

      cy.loginSubmit("321@test.test", "123456")

      cy.on("window:alert", (text) => {

        expect(text).to.contains("user");

      });

    });




    it("alerts when password is not right", () => {

      cy.loginSubmit("123@test.test", "111111")

      cy.on('window:alert', (text) => {

        expect(text).to.contains("password");

      });

    });




    it("navigate to home page when logged in and after log out should not have welcome information in header", () => {

      cy.loginSubmit("testtest2233@gmail.com", "123456")

      cy.get("div").contains("Welcome!");

      cy.get("div").contains("testtest2233@gmail.com");

      cy.url().should("not.include", "movies");

      cy.get(".MuiButtonBase-root").eq(3).click();

      cy.get("div").should("not.have","Welcome!");

    });




  });