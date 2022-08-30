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
          <Grid item xs={12} md={3} sm={12} order={{ md: 1, xs: 3, sm: 3 }}>
            {/* Profile Side */}
            <ProfileSide />
          </Grid>
          <Grid item xs={12} md={6} sm={12} order={{ md: 2, xs: 2, sm: 2 }}>
            {/* Posts Side */}
            <PostSide />
          </Grid>
          <Grid item xs={12} md={3} sm={12} order={{ md: 3, xs: 1, sm: 1 }}>
            {/* Right Side */}
            <RightSide />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
