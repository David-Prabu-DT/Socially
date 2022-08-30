import React from "react";
import ProfileCard from "../../components/Common/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/Common/ProfileLeft/ProfileLeft";
import RightSide from "../../components/Home/RightSide";
import "./Profile.css";
import { Box, Grid } from "@mui/material";
const Profile = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3} sm={12} order={{ md: 1, xs: 3, sm: 3 }}>
            {/* Profile Side */}
            <ProfileLeft />
          </Grid>
          <Grid item xs={12} md={6} sm={12} order={{ md: 2, xs: 2, sm: 2 }}>
            {/* Posts Side */}
            <ProfileCard location={"profilePage"} />
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

export default Profile;
