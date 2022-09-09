import React, { useEffect, useState } from "react";
import "./ProfileCard.css";
import { Button, Paper } from "@mui/material";
import { RootState } from "../../../store/ReduxStore";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthDataType, PostsDataType } from "../../../types/Global";
import * as UserApi from "../../../api/UserRequests";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";

const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

const ProfileCard = ({ location }) => {
  const user: AuthDataType | null = useSelector(
    (state: RootState) => state["auth"]["authData"]["user"]
  );
  const posts: PostsDataType | null = useSelector(
    (state: RootState) => state["post"]["posts"]
  );

  const [profilePicture, setProfilePicture] = useState("");

  const ProfilePage = location === "profilePage";

  const userId: string | null = user && user._id!;
  const firstname = user && user["firstname"];
  const lastname = user && user["lastname"];
  const worksAt =
    user && user["worksAt"] ? user["worksAt"] : "Write about yourself";

  const followingCount: number | false | null =
    user &&
    (user["following"] as unknown as any[]).length !== 0 &&
    (user["following"] as unknown as any[]).length;

  const followersCount: number | false | null =
    user &&
    (user["followers"] as unknown as any[]).length !== 0 &&
    (user["followers"] as unknown as any[]).length;

  const postsCount =
    posts &&
    (posts as unknown as any[]).filter((post) => post["userId"] === userId)
      .length;

  const defaultPicture = serverPublic + "defaultProfile.png";

  const defaultCover = serverPublic + "defaultCover.jpg";

  useEffect(() => {
    const fetchProfileUser = async () => {
      const profileUser: object = await UserApi.getUser(userId);

      const profilePic =
        profileUser &&
        profileUser["data"]["profilePicture"] &&
        serverPublic + profileUser["data"]["profilePicture"];
      setProfilePicture(profilePic);
    };

    fetchProfileUser();
  }, [userId, user, profilePicture]);

  return (
    <div>
      <Paper elevation={0} style={{ padding: 5 }}>
        <div className="ProfileImages">
          <img src={defaultCover} alt="CoverImage" />
          <img
            src={profilePicture || defaultPicture}
            alt="Profile"
            style={{ width: "80px", padding: 10 }}
          />
        </div>

        <div className="ProfileName">
          <span>
            {firstname} {lastname}
          </span>
          <span>{worksAt}</span>
        </div>

        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>{followingCount || 0}</span>
              <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>{followersCount || 0}</span>
              <span>Followers</span>
            </div>

            {ProfilePage && (
              <>
                <div className="vl"></div>
                <div className="follow">
                  <span>{postsCount || 0}</span>
                  <span>Posts</span>
                </div>
              </>
            )}
          </div>
          <hr />
        </div>
        {ProfilePage || (
          <Link
            to={`/profile/${userId}`}
            style={{ textDecoration: "none", color: "inherit", paddingTop: 5 }}
          >
            <Button
              variant="contained"
              color="secondary"
              startIcon={<PersonOutlineTwoToneIcon />}
              fullWidth
            >
              My Profile
            </Button>
          </Link>
        )}
      </Paper>
    </div>
  );
};

export default ProfileCard;
