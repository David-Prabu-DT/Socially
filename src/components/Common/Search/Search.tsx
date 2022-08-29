import React from "react";
import { Grid, Typography } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  // const imageSrc = process.env.REACT_APP_IMAGE_FOLDER;

  const imageSrc = `${window.location.origin}/images/`;
  return (
    <div>
      <Grid container spacing={2} mb={2}>
        <Grid
          item
          xs={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img src={`${imageSrc}logo.png`} alt="" width={50} />
        </Grid>
        <Grid
          item
          xs={10}
          display="flex"
          
          alignItems="center"
        >
          <Typography variant="h4" color="cadetblue">
            Socially
          </Typography>

          {/* <TextField
            label="Search Here"
            variant="standard"
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
