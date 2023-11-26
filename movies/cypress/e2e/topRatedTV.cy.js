let movies;
let moviesTopRated;

describe("TopRated", () => {
    before(() => {
        cy.request(
                `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
            )
            .its("body")
            .then((response) => {
                movies = response.results;
            });
    });
    beforeEach(() => {
        cy.visit(`/`);
    });
    describe("The top rated tv movies are correct", () => {
        before(() => {
            cy.request(
                    `https://api.themoviedb.org/3/tv/top_rated?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=1`
                )
                .its("body")
                .then((top_rated) => {
                    moviesTopRated = top_rated.results;
                });
        })
        beforeEach(() => {
            cy.visit(`/tv/top_rated`);
        })
        it("The titles of movie card are top rated tv movie titles", () => {
            cy.get("p").contains(moviesTopRated[11].name)
        })
    })
});