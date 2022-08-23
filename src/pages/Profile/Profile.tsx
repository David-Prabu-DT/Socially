import React from "react";
import PostSide from "../../components/Home/PostSide/index";
import ProfileCard from "../../components/Home/ProfileSide/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/Home/RightSide";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        {/* <ProfileCard location="profilePage" /> */}
        <ProfileCard  />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
