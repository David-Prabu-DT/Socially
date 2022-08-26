import React from "react";
import FollowersCard from "../../Common/FollowersCard/FollowersCard";
import ProfileCard from "../../Common/ProfileCard/ProfileCard";
import Search from "../../Common/Search/Search";

const ProfileSide = () => {
  return (
    <div>
      <Search />
      <ProfileCard location="homepage" />
      <FollowersCard location="homepage" />
    </div>
  );
};

export default ProfileSide;
