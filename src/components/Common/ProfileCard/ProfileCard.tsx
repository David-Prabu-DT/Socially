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
  const user: authDataType | null = useSelector(
    (state: RootState) => state.auth.authData
  );
  const posts: postsDataType | null = useSelector(
    (state: RootState) => state.post.posts
  );

  console.log(user);

  const ProfilePage = location === "profilePage";

  const userId: string | null = user && user["_id"];
  const firstname = user && user["firstname"];
  const lastname = user && user["lastname"];
  const worksAt =
    user && user["worksAt"] ? user["worksAt"] : "Write about yourself";
  const following: Array<Object> | null = user && user["following"];
  const followers: Array<Object> | null = user && user["followers"];
  return (
    <div>
      <Paper elevation={0} style={{ padding: 5 }}>
        <div className="ProfileImages">
          <img
            src={
              user && user["coverPicture"]
                ? serverPublic + user["coverPicture"]
                : serverPublic + "defaultCover.jpg"
            }
            alt="CoverImage"
          />
          <img
            src={
              user && user["profilePicture"]
                ? serverPublic + user["profilePicture"]
                : serverPublic + "defaultProfile.png"
            }
            alt="Profile"
            style={{ width: "20%" }}
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
              <span>{(following as unknown as any[]).length}</span>
              <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>{(followers as unknown as any[]).length}</span>
              <span>Followers</span>
            </div>

            {ProfilePage && (
              <>
                <div className="vl"></div>
                <div className="follow">
                  <span>
                    {posts &&
                      (posts as unknown as any[]).filter(
                        (post: { userId?: string | number }) =>
                          void post.userId === userId
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
