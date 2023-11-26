import React, { lazy, Suspense } from "react";
// import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
// import Spinner from '../components/spinner';
import { useQuery } from 'react-query';
// import PlaylistAddIcon from '../components/cardIcons/addToMustWatch'

const PageTemplate = lazy(() => import("../components/templateMovieListPage"));
const Spinner = lazy(() => import("../components/spinner"));
const AddToWatchIcon = lazy(() => import("../components/cardIcons/addToWatch"));

//have done it in exrecise1
const UpcomingMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('Upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Suspense fallback={<h1>Loading Componment</h1>}>{<Spinner />}</Suspense>;
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

//   const favorites = movies.filter(m => m.favorite)
//   localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <Suspense fallback={<h1>Loading PageTemplate</h1>}>
    <PageTemplate
      title="Upcoming Movies"
          movies={movies}
          action={(movie) => {
            return <AddToWatchIcon movie={movie} />
      }}    
    />
    </Suspense>
  );
};


export default UpcomingMoviesPage;