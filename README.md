# Assignment 1 - Agile Software Practice.

__Name:__ MingJu Sun

This repository contains the implementation of a React App, its associated Cypress tests and the GitLab CI pipeline.

## React App Features.

New Page
+ Now Playing
+ Popular
+ Top Rated TV
+ Peolple
+ Person Detail

New filtering
+ User can filter movies by languages

Update Movie Details
+ add company
+ add similar film
+ add actors

Update siteHeader
+ Change the style of the site header:  
  (Home/Favourites/Upcoming/Option4)  
  to  
  (Home/Movies[Favourites Upcoming NowPlaying Popular TV]/People/login)  
  [] is a drop-down menu.  

Pagination
+ User can switch different page by Material UI Pagination component

Firebase Authentication
+ User can register and log in with e-mail adress 
+ User can register and log in with GOOGLE
+ User can reset password by send email


## Automated Tests.


### Cypress Custom commands (if relevant).


+ [cypress/e2e/favourites.cy.js](cypress/e2e/favourites.cy.js)
+ [cypress/e2e/login.cy.js](cypress/e2e/login.cy.js)
+ [cypress/e2e/register.cy.js](cypress/e2e/register.cy.js)
+ [cypress/e2e/reset.cy.js](cypress/e2e/reset.cy.js)

## Code Splitting.

+ [src/pages/homePage.js](src/pages/homePage.js)
+ [src/pages/loginPage.js](src/pages/loginPage.js)
+ [src/pages/registerPage.js](src/pages/registerPage.js)
+ [src/pages/resetPage.js](src/pages/resetPage.js)
+ [src/pages/upComingMoviesPage.js](src/pages/upComingMoviesPage.js)
+ [src/components/siteHeader/index.js](src/components/siteHeader/index.js)
  

## Pull Requests.

(https://github.com/SunMingJu/ASP-CA1)

## Independent learning (If relevant).

### Component Tests  
Have tried to use the component [test](cypress/component/spinner.cy.js) from cypress for component [spinner](src/components/spinner/index.js), inspired by the document from [facebook](https://docs.cypress.io/guides/component-testing/react/quickstart).
