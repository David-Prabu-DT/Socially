import React from "react";
import FollowersCard from "./FollowersCard/FollowersCard";
import ProfileCard from "./ProfileCard/ProfileCard";
import Search from "./Search/Search";

const ProfileSide = () => {
  return (
    <div>
      <Search />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
