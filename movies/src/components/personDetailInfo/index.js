import React from "react";
import Box  from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from 'uuid';

const genderParseString = (genderNum) => {
  if (genderNum === 1) return "Female";
  else if (genderNum === 2) return "Male";
  else return "Others";
}

const PersonDetailInfo = ({ person }) => {

  return (
    <Box>
      <Typography variant="h4" sx={{fontSize: "35px"}}>
        Personal Info
      </Typography>
      <Box>
        <Typography variant="subtitle2" sx={{fontSize: "23px"}}>
          Known For
        </Typography>
        <Typography variant="body1" sx={{marginBottom: "20px"}}>
          {person.known_for_department}
        </Typography>
        <Typography variant="subtitle2" sx={{fontSize: "23px"}}>
          Known Credit
        </Typography>
        <Typography variant="body1" sx={{marginBottom: "20px"}}>
          {Math.round(person.popularity)}
        </Typography>
        <Typography variant="subtitle2" sx={{fontSize: "23px"}}>
          Gender
        </Typography>
        <Typography variant="body1" sx={{marginBottom: "20px"}}>
          {genderParseString(person.gender)}
        </Typography>
        <Typography variant="subtitle2" sx={{fontSize: "23px"}}>
          Birthday
        </Typography>
        <Typography variant="body1" sx={{marginBottom: "20px"}}>
          {person.birthday}
        </Typography>
        <Typography variant="subtitle2" sx={{fontSize: "23px"}}>
          Place of Birth
        </Typography>
        <Typography variant="body1" sx={{marginBottom: "20px"}}>
          {person.place_of_birth}
        </Typography>
        <Typography variant="subtitle2" sx={{fontSize: "23px"}}>
          Also Known As
        </Typography>
        {person.also_known_as.map((n) => (
          <Typography variant="body1" key={uuidv4()} >
            {n}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default PersonDetailInfo;