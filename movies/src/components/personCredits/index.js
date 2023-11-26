import React from "react";
import { getPersonCombinedCredit } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const PersonCredits = ({person}) => {
  const { data , error, isLoading, isError } = useQuery(
    ["personCredits", { id: person.id }],
    getPersonCombinedCredit
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const credits = data.cast.filter((credit) => credit.poster_path!==null).filter((credit) => credit.title !== undefined)
  const sortedMovies = JSON.parse( JSON.stringify( credits )).sort((a,b) => (a.release_date < b.release_date ? 1 : -1 ))

  .map((credit) => {
    return {
      id: credit.id,
      title: credit.title,
      year: credit.release_date,
    }
  }).filter((credit) => credit.title !== undefined)

  const handleEnter = (e) => {
    e.target.style.color = 'blue';
  } 

  const handleLeave = (e) => {
    e.target.style.color = 'black';
  } 

  return (
    <>
      <Typography variant="h5" sx={{marginTop: "23px"}}>
        Known For
      </Typography>
      <ImageList sx={{
        width: "100%", 
        height: 320,
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr)) !important",
        gridAutoColumns: "minmax(160px, 1fr)"
      }}>
        {credits.map((m) => (
          <Link to={`/movies/${m.id}`} key={m.id} style={{color: "black",textDecoration: "none"}} >
              <ImageListItem>
              <img
                src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                alt={m.poster_path}
              />
              <ImageListItemBar
                title={m.title}
                position="below"
              />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
      <Typography variant="h5" sx={{marginTop: "23px"}}>
        Acting
      </Typography>
      <Paper component="ul" >
        {sortedMovies.map((m) => (
          <li key={m.id}>
            <Link to={`/movies/${m.id}`} 
              key={m.id} 
              style={{color: "black",textDecoration: "none"}} 
              onMouseEnter={(e)=> handleEnter(e)}
              onMouseLeave={(e)=> handleLeave(e)}>
              <Typography sx={{marginTop: "5px"}}>
                {m.year + " " + m.title}
              </Typography>
            </Link>
          </li>
        ))}
      </Paper>
    </>
  )
};

export default PersonCredits;