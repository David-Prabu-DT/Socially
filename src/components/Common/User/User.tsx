import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unFollowUser } from "../../../actions/UserAction";
import { AppDispatch, RootState } from "../../../store/ReduxStore";
import { authDataType, personData } from "../../../types/Global";

const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

const User = ({ person }: personData) => {
  const user: authDataType | null = useSelector(
    (state: RootState) => state.auth.authData
  );
  const dispatch: AppDispatch = useDispatch();
  const [following, setFollowing] = useState<object>(
    person.followers.includes(user?._id)
  );

  const handleFollow = useCallback(async () => {
    dispatch(
      following ? unFollowUser(person._id, user) : followUser(person?._id, user)
    );

    setFollowing((prev) => !prev);
  }, [dispatch, following, person._id, user]);

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
