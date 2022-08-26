import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unFollowUser } from "../../../actions/UserAction";
import { AppDispatch, RootState } from "../../../store/ReduxStore";

const User = ({ person }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const user: any = useSelector((state: RootState) => state.auth.authData);
  const dispatch: AppDispatch = useDispatch();
  const [following, setFollowing] = useState<object>(
    person.followers.includes(user._id)
  );
  const handleFollow = () => {
    following
      ? dispatch(unFollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };
  return (
    <div>
      <Paper elevation={2} style={{ margin: 5, padding: 5 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              src={
                publicFolder + person.profilePicture
                  ? publicFolder + person.profilePicture
                  : publicFolder + "defaultProfile.png"
              }
            />
          </Grid>
          <Grid
            item
            xs={4}
            display="flex"
            justifyContent="left"
            alignItems="center"
          >
            <Typography variant="body2" gutterBottom>
              {person.firstname}
            </Typography>
            &nbsp;
            <Typography variant="caption" display="block" gutterBottom>
              @{person.username}
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            display="flex"
            justifyContent="end"
            alignItems="center"
          >
            <Button
              variant="contained"
              color={following ? "success" : "warning"}
              size="small"
              onClick={handleFollow}
            >
              {following ? "unFollow" : "Follow"}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default User;
