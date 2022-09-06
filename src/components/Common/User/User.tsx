import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unFollowUser } from "../../../actions/UserAction";
import { AppDispatch, RootState } from "../../../store/ReduxStore";
import { authDataType, personData } from "../../../types/Global";

const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

const User = ({ person }: personData) => {
  const user: authDataType | null = useSelector(
    (state: RootState) => state["auth"]["authData"]
  );

  const userId: string | null = user && user._id!;
  const dispatch: AppDispatch = useDispatch();
  const [following, setFollowing] = useState(
    person && person["followers"].includes(userId)
  );

  const personId = person && person["_id"];
  const profilePicture = person && person["profilePicture"];
  const firstname = person && person["firstname"];
  const username = person && person["username"];

  const handleFollow = useCallback(async () => {
    dispatch(
      following ? unFollowUser(personId, user) : followUser(personId, user)
    );

    setFollowing((prev: any) => !prev);
  }, [dispatch, following, personId, user]);

  return (
    <div>
      <Paper elevation={0} style={{ margin: 5, padding: 5 }}>
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
                publicFolder + profilePicture
                  ? publicFolder + profilePicture
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
              {firstname}
            </Typography>
            &nbsp;
            <Typography variant="caption" display="block" gutterBottom>
              @{username}
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
              variant={following ? "outlined" : "contained"}
              color="warning"
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
