# Assignment 1 - ReactJS app.

Name: MingJu Sun

## Overview.

This is a web application based on TMDB API, React, MUI, Firebase. New interfaces, features, etc. have been added to the original experiments. Presenting information about films, actors, TV episodes to the user through a web terminal. It is assignment 1 for Web Application Development 2.

### Video Demo 
[Youtube](https://youtu.be/OFlvi_9VgUM)
[bilibili](https://www.bilibili.com/video/BV1564y177zi/)

### Features.

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



## Setup requirements.

### Install dependence

`$ npm install`
`$ npm install firebase`
`$ npm install react-firebase-hooks`

### TMDB API  

In order to run cypress tests you must first create a `.env` file in the project base folder.  
The contents should include the following.  
```
REACT_APP_TMDB_KEY=<YOUR_TMDB_API_KEY>
FAST_REFRESH=false
```
### Build  

In order to install needed package,you need run `npm install` first.
After all done, you can use
`npm start`
to start the server, then you can access the web page by
```
http://localhost:3000/
```

## API endpoints.

+ Now playing list of movies - /movies/now_playing
+ Popular list of movies - /movies/popular
+ Top rated list of TV - /tv/top_rated
+ Production companies of a movie - /companies/:id
+ Credits(cast and crew) of a movie - display in movie detail page
+ Similar movies of a movie - display in movie detail page
+ Discover list of popular people (getPersonPopular) - person 
+ Get specific person's basic info (getPerson) - person/:id 
+ Get specific person's images (getPersonImages) - person/:id

## Routing.

+ /companies/:id - displays a production company.
+ /movies/now_playing - displays a list of now playing movies.
+ /movies/popular - displays a list of popular movies.
+ /tv/top_rated - displays a list of top rated tv.
+ /person - displays all popular people.
+ /person/:id - displays specific person's info.
+ /register - for user sign up.
+ /login - for user log in/sign in.
+ /reset - for user reset their password.

## Independent learning (If relevant).

### Pagination 
https://mui.com/zh/material-ui/react-pagination/

### Firebase Authentication
https://firebase.google.com/docs/auth/where-to-start?authuser=0