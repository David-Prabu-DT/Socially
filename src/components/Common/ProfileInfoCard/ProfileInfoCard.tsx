import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ProfileModal from "../../Modals/ProfileModal/ProfileModal";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../../api/UserRequests";
import { RootState } from "../../../store/ReduxStore";
import { IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { authDataType } from "../../../types/Global";

const ProfileInfoCard = () => {
  const params = useParams();
  const [modalOpened, setModalOpened] = useState(false);
  const profileUserId: string | null = String(params["id"]);
  const [profileUser, setProfileUser] = useState<
    authDataType | object[] | null
  >({});
  const user: authDataType | null = useSelector(
    (state: RootState) => state.auth.authData
  );
  const userId: string | null = user && user["_id"];
  const relationship: string | null =
    profileUser && profileUser["relationship"];
  const livesIn: string | null = profileUser && profileUser["livesIn"];
  const worksAt: string | null = profileUser && profileUser["worksAt"];

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === userId) {
        setProfileUser(user && user);
      } else {
        const profileUser: object = await UserApi.getUser(profileUserId);

        console.log(profileUser);

        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [profileUserId, user, userId]);

  return (
    <div>
      <Paper elevation={0} style={{ padding: 5 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" gutterBottom>
            Profile Info
          </Typography>
          {userId === profileUserId ? (
            <div>
              <Tooltip title="Home" arrow>
                <IconButton>
                  <DriveFileRenameOutlineIcon
                    onClick={() => setModalOpened(true)}
                  />
                </IconButton>
              </Tooltip>
              <ProfileModal
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
                data={user}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <Typography variant="subtitle2" gutterBottom>
          <strong>Status : </strong> {relationship ?? "-"}
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          <strong>Lives In : </strong> {livesIn ?? "-"}
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          <strong>Works At : </strong> {worksAt ?? "-"}
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
