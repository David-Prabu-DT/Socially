import React from "react";
import "./ProfileCard.css";
import { Button, Paper } from "@mui/material";
import { RootState } from "../../../../store/ReduxStore";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";

const ProfileCard = ({ location }) => {
  const user: any = useSelector((state: RootState) => state.auth.authData);
  const posts: any = useSelector((state: RootState) => state.post.posts);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const ProfilePage = location === "profilePage";
  return (
    <div>
      <Paper elevation={2} style={{ margin: 5 }}>
        <div className="ProfileImages">
          <img
            src={
              user.coverPicture
                ? serverPublic + user.coverPicture
                : serverPublic + "defaultCover.jpg"
            }
            alt="CoverImage"
          />
        </div>

        <div className="ProfileName">
          <span>
            {user.firstname} {user.lastname}
          </span>
          <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
        </div>

        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>{user.following.length}</span>
              <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>{user.followers.length}</span>
              <span>Followers</span>
            </div>

            {ProfilePage && (
              <>
                <div className="vl"></div>
                <div className="follow">
                  <span>
                    {posts.filter((post) => post.userId === user._id).length}
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
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit", paddingTop: 5 }}
          >
            <Button
              variant="text"
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
