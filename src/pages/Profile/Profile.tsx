import React from "react";
import PostSide from "../../components/Home/PostSide/index";
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
          <Grid item xs={3}>
            {/* Profile Side */}
            <ProfileLeft />
          </Grid>
          <Grid item xs={6}>
            {/* Posts Side */}
            <ProfileCard location={"profilePage"} />
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

export default Profile;
