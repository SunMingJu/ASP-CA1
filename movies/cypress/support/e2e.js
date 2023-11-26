// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
export const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

export const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

export const filterByLanguage = (movieList, language) =>
  movieList.filter((m) => m.original_language === language)

export const genderParseString = (genderNum) => {
  if (genderNum === 1) return "Female";
  else if (genderNum === 2) return "Male";
  else return "Others";
}

export const convertRating = (rating) => {
  if (rating === 1) return 5;
  else if (rating === 2) return 4;
  else if (rating === 4) return 2;
  else return 1;
}

export function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
  }

// export const filterByTitleandGenre = (movieList, string, genreId) =>
// (movieList.filter((m) => m.title.toLowerCase().search(string) !== -1)).filter((n) => n.genre_ids.includes(genreId));

// Alternatively you can use CommonJS syntax:
// require('./commands')