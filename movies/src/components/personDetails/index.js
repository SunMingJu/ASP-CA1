import React from "react";
import Typography from "@mui/material/Typography";
import PersonCredits from "../personCredits";

const PersonDetails = ({ person }) => {

  return (
    <>
      <Typography variant="h3" >
        {person.name}
      </Typography>
      <Typography variant="h5" sx={{marginTop: "23px"}}>
        Biography
      </Typography>
      <Typography variant="body1"  sx={{ color: "grey", marginTop: "10px" }}>
        {person.biography}
      </Typography>
      <PersonCredits person={person}/>
    </>
  );
};
export default PersonDetails;