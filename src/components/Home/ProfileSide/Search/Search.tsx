import React from "react";
import { Grid, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../../../assets/img/logo.png";

const Search = () => {
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
          <img src={Logo} alt="" width={50} />
        </Grid>
        <Grid
          item
          xs={10}
          display="flex"
          justifyContent="end"
          alignItems="center"
        >
          <TextField
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
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
