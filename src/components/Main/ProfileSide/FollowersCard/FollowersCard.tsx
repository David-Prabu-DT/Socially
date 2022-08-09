import React from "react";
import { Followers } from "../../../../Data/FollowersData";

const FollowersCard = () => {
  return (
    <>
      <div>
        <h3>Who is following you</h3>
      </div>
      {Followers.map((follower, id) => {
        return <>
        
        </>;
      })}
    </>
  );
};

export default FollowersCard;
