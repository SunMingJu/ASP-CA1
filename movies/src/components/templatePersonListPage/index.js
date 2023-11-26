import React from "react";
import PersonList from "../personList";
import Grid from "@mui/material/Grid";

function PersonListPageTemplate({ persons }) {

  let displayedPersons = persons

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item container spacing={5}>
        <PersonList persons={displayedPersons}></PersonList>
      </Grid>
    </Grid>
  );
}
export default PersonListPageTemplate;