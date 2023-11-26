import React, { useState, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
// import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import CompanyPage from "./pages/companyPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import PopularPage from "./pages/popularPage";
import TopRatedTVPage from "./pages/topRatedTVPage";
import PersonPage from './pages/personPage';
import PersonDetailsPage from './pages/personDetailsPage';
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import ResetPage from "./pages/resetPage";

const HomePage = lazy(() => import("./pages/homePage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
     <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          {/* <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} /> */}
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/reviews/form" element={<AddMovieReviewPage />} />
          <Route path="/companies/:id" element={ <CompanyPage /> } />
          <Route path="/movies/now_playing" element={<NowPlayingPage />} />
          <Route path="/movies/popular" element={<PopularPage />} />
          <Route path="/tv/top_rated" element={ <TopRatedTVPage /> } />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/person/" element={ <PersonPage/> } />
          <Route path="/person/:id" element={<PersonDetailsPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/reset" element={<ResetPage />} />
          <Route path="/login" element={<LoginPage />} />
          </Routes>
          </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);