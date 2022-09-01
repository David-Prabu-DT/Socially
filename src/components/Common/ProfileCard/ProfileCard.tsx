import React from "react";
import "./ProfileCard.css";
import { Button, Paper } from "@mui/material";
import { RootState } from "../../../store/ReduxStore";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import { authDataType, postsDataType } from "../../../types/Global";

const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

const ProfileCard = ({ location }) => {
  const user: /*authDataType | null */ any = useSelector(
    (state: RootState) => state.auth.authData
  );
  const posts: postsDataType | null = useSelector(
    (state: RootState) => state.post.posts
  );
  const ProfilePage = location === "profilePage";
  return (
    <div>
      <Paper elevation={0} style={{ padding: 5 }}>
        <div className="ProfileImages">
          <img
            src={
              user?.coverPicture
                ? serverPublic + user?.coverPicture
                : serverPublic + "defaultCover.jpg"
            }
            alt="CoverImage"
          />
          <img
            src={
              user?.profilePicture
                ? serverPublic + user?.profilePicture
                : serverPublic + "defaultProfile.png"
            }
            alt="Profile"
            style={{ width: "20%" }}
          />
        </div>

        <div className="ProfileName">
          <span>
            {user?.firstname} {user?.lastname}
          </span>
          <span>{user?.worksAt ? user?.worksAt : "Write about yourself"}</span>
        </div>

        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>{user?.following?.length}</span>
              <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>{user?.followers?.length}</span>
              <span>Followers</span>
            </div>

            {ProfilePage && (
              <>
                <div className="vl"></div>
                <div className="follow">
                  <span>
                    {posts &&
                      posts.filter(
                        (post: { userId?: string | number }) =>
                          void post.userId === user?._id
                      ).length}
                  </span>
                  <span>Posts</span>
                </div>
              </>
            )}
          </div>
          <hr />
        </div>
        {ProfilePage || (
          <Link
            to={`/profile/${user?._id}`}
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
