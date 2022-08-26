import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unFollowUser } from "../../../actions/UserAction";
import { AppDispatch, RootState } from "../../../store/ReduxStore";

const User = ({ person }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const user: any = useSelector((state: RootState) => state.auth.authData);
  const dispatch: AppDispatch = useDispatch();
  const [following, setFollowing] = useState<object>(
    person.followers.includes(user._id)
  );
  const handleFollow = () => {
    following
      ? dispatch(unFollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };
  return (
    <div className="follower">
      <div>
        <img
          src={
            publicFolder + person.profilePicture
              ? publicFolder + person.profilePicture
              : publicFolder + "defaultProfile.png"
          }
          alt="profile"
          className="followerImage"
        />
        <div className="name">
          <span>{person.firstname}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button
        className={
          following ? "button fc-button unFollowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {following ? "unFollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
