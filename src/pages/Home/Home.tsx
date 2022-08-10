import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import ProfileSide from "../../components/Home/ProfileSide";
import PostSide from "../../components/Home/PostSide";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            {/* Profile Side */}
            {/* <Item> */}
            <ProfileSide />
            {/* </Item> */}
          </Grid>
          <Grid item xs={6}>
            {/* Posts Side */}
            <PostSide />
          </Grid>
          <Grid item xs={3}>
            {/* Right Side */}
            <Item>Right Side</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
