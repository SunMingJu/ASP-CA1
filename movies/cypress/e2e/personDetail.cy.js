let popularityPeople;
let person;
let personActing;
let personCreits;
import { genderParseString } from "../support/e2e";

describe("Person details pgae tests", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        popularityPeople = response.results;
      });
  });

  describe("The person details page", () => {
    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/person/${
          popularityPeople[1].id
        }?api_key=${Cypress.env("TMDB_KEY")}`
      )
        .its("body")
        .then((response) => {
            person = response;
        });
    })

    beforeEach(() => {
      cy.visit(`/person/${popularityPeople[1].id}`)
    })

    it(" displays the person name, biography ", () => {
      cy.get("h3").contains(person.name);
      cy.get("h5").contains("Biography")
      cy.get("p").contains(person.biography.substring(0,50))
    });
  })

  describe("The person credits list and acting list", () => {
    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/person/${
          popularityPeople[1].id
        }/combined_credits?api_key=${Cypress.env("TMDB_KEY")}`
      )
        .its("body")
        .then((response) => {
          personCreits = response.cast.filter((movie) => movie.poster_path!==null && movie.title !== undefined);
          personActing = JSON.parse( JSON.stringify( personCreits  )).sort((a,b) => (a.release_date < b.release_date ? 1 : -1 ))
          .map((movie) => {
            return {
              id: movie.id,
              title: movie.title,
              year: movie.release_date,
              poster_path: movie.poster_path,
            }
          })
        });
    })

    beforeEach(() => {
      cy.visit(`/person/${popularityPeople[1].id}`)
    })

    it(" displays the person's credit list", () => {
      cy.get("a>.MuiImageListItem-root").should("have.length",personActing.length);
      cy.get(".MuiGrid-grid-xs-9>.MuiTypography-h5").eq(1).contains("Known For")
      cy.get("a>.MuiImageListItem-root").each(($card, index) => {
        cy.wrap($card).contains(personCreits[index].title);
      });
    })

    it(" displays the person's acting list", () => {
      cy.get(".MuiPaper-root>li").should("have.length",personActing.length);
      cy.get(".MuiPaper-root>li").each(($card, index) => {
        cy.wrap($card).contains(personActing[index].title);
      }); 
    })

    it(" navigate to the person credits movie details page ", () => {
      cy.get("a>.MuiImageListItem-root").eq(0).click()
      cy.url().should("include", `/movies/${personCreits[0].id}`);
    })

    it(" navigate to the person acting movie details page ", () => {
      cy.get(".MuiPaper-root>li").eq(0).click()
      cy.url().should("include", `/movies/${personActing[0].id}`);
    })
  })
});