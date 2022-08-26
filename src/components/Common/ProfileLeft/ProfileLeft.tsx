import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import ProfileInfoCard from "../ProfileInfoCard/ProfileInfoCard";
import Search from "../Search/Search";

const ProfileLeft = () => {
  return (
    <div>
      <Search />
      <ProfileInfoCard />
      <FollowersCard location="profilePage" />
    </div>
  );
};

export default ProfileLeft;
