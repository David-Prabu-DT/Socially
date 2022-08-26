import * as React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import ProfileSide from "../../components/Home/ProfileSide";
import PostSide from "../../components/Home/PostSide";
import RightSide from "../../components/Home/RightSide";

const Home = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            {/* Profile Side */}
            <ProfileSide />
          </Grid>
          <Grid item xs={6}>
            {/* Posts Side */}
            <PostSide />
          </Grid>
          <Grid item xs={3}>
            {/* Right Side */}
            <RightSide />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
