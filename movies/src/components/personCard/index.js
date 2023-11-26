import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BoltIcon from '@mui/icons-material/Bolt';
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'

export default function PersonCard({ person }) {
  console.log(person.known_for)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={
          <Typography variant="h5" component="p">
            {person.name}{" "}
          </Typography>
        }
      />

      <CardMedia
        sx={{ height: 500 }}
        image={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
            : img
        }
      />

      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <BoltIcon fontSize="small" />
              {person.popularity}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body" color="text.secondary">
           { }
          {/* {person.known_for
            ? (person.known_for[0].original_title) 
            : {(person.known_for[0].original_name)}}
          {person.known_for[1].original_title 
            ? (", " + person.known_for[1].original_title) 
            : (person.known_for[1].original_name)} */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link style={{ textDecoration:'none'}} to={`/person/${person.id}` }>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}