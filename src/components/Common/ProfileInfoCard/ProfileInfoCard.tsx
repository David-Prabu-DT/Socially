import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import * as Unicons from "@iconscout/react-unicons";

import ProfileModal from "../../Modals/ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../../api/UserRequests";
import { logout } from "../../../actions/AuthActions";
import { AppDispatch, RootState } from "../../../store/ReduxStore";
import { Button, Paper, Typography } from "@mui/material";

const ProfileInfoCard = () => {
  const dispatch: AppDispatch = useDispatch();
  const params = useParams();
  const [modalOpened, setModalOpened] = useState(false);
  const profileUserId: number = Number(params.id);
  const [profileUser, setProfileUser] = useState<any>({});
  const user: any = useSelector((state: RootState) => state.auth.authData);

  const handleLogOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching");
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
        console.log(profileUser);
      }
    };
    fetchProfileUser();
  }, [profileUserId, user]);

  return (
    <div>
      <Paper elevation={2} style={{ padding: 5 }}>
        <Typography variant="subtitle1" gutterBottom>
          Profile Info
        </Typography>
        {user._id === profileUserId ? (
          <div>
            <Unicons.UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : (
          ""
        )}
        <Typography variant="subtitle2" gutterBottom>
          <strong>Status : </strong> {profileUser.relationship ?? "-"}
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          <strong>Lives In : </strong> {profileUser.livesIn ?? "-"}
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          <strong>Works At : </strong> {profileUser.worksAt ?? "-"}
        </Typography>
        <hr />
        <Button
          variant="contained"
          color="error"
          fullWidth
          onClick={handleLogOut}
        >
          Log Out
        </Button>
      </Paper>
    </div>
  );
};

export default ProfileInfoCard;
