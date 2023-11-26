import React from "react";
import { getPersonPopular } from "../api/tmdb-api";
import PageTemplate from '../components/templatePersonListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const PersonPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discoverPerson', getPersonPopular)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const persons = data.results;

    return (
      <PageTemplate
        persons={persons}
      />
  );
  };
  export default PersonPage;