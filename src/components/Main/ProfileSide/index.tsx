import React from "react";
import FollowersCard from "./FollowersCard/FollowersCard";
import ProfileCard from "./ProfileCard";
import Search from "./Search";

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
