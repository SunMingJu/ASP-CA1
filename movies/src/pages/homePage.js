import React, { lazy, Suspense } from "react";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
const PageTemplate = lazy(() => import("../components/templateMovieListPage"));
const Spinner = lazy(() => import("../components/spinner"));
const AddToFavoritesIcon = lazy(() => import("../components/cardIcons/addToFavorites"));


const HomePage = (props) => {

  const { pagination } = useParams();

  const { data, error, isLoading, isError } = useQuery(
    ["discover", pagination],
    getMovies
  );

  if (isLoading) {
    return    <Suspense fallback={<h1>Loading Componment</h1>}>{<Spinner />}</Suspense>;
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

    // Redundant, but necessary to avoid app crashing.
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    // const addToFavorites = (movieId) => true 
  
    return (
      <Suspense fallback={<h1>Loading PageTemplate</h1>}>
        {
          <PageTemplate
          title="Discover Movies"
          movies={movies}
          action={(movie) => {
            return <AddToFavoritesIcon movie={movie} />
          }}
          page=""
          pagination={pagination}
          total_pages={data.total_pages}
        />
        }
      </Suspense>
  );
  };
  export default HomePage;