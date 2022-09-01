import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import * as Unicons from "@iconscout/react-unicons";
import ProfileModal from "../../Modals/ProfileModal/ProfileModal";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../../api/UserRequests";
import { RootState } from "../../../store/ReduxStore";
import { Paper, Typography } from "@mui/material";
import { profileUserType, authDataType } from "../../../types/Global";

const ProfileInfoCard = () => {
  const params = useParams();
  const [modalOpened, setModalOpened] = useState(false);
  const profileUserId: number = Number(params.id);
  const [profileUser, setProfileUser] = useState<any>({});
  const user: authDataType | null = useSelector(
    (state: RootState) => state.auth.authData
  );
  const userId: string | null = user && user["_id"];

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === userId) {
        setProfileUser(user);
      } else {
        const profileUser: object = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
        console.log(profileUser);
      }
    };
    fetchProfileUser();
  }, [profileUserId, user, userId]);

  return (
    <div>
      <Paper elevation={0} style={{ padding: 5 }}>
        <Typography variant="subtitle1" gutterBottom>
          Profile Info
        </Typography>
        {userId === profileUserId ? (
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
          <strong>Status : </strong> {profileUser["relationship"] ?? "-"}
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          <strong>Lives In : </strong> {profileUser["livesIn"] ?? "-"}
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          <strong>Works At : </strong> {profileUser["worksAt"] ?? "-"}
        </Typography>
        {/* <hr /> */}
        {/* <Button
          variant="contained"
          color="error"
          fullWidth
          onClick={handleLogOut}
        >
          Log Out
        </Button> */}
      </Paper>
    </div>
  );
};

export default ProfileInfoCard;
