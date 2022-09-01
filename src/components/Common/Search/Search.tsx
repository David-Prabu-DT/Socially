import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Search = () => {
  const imageSrc = `${window.location.origin}/images/`;
  return (
    <div>
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
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
          <Grid item xs={10} display="flex" alignItems="center">
            <Typography variant="h4" color="teal">
              Socially
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Search;
