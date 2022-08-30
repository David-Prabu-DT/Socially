import { Box, CircularProgress } from "@mui/material";
import React, { Suspense } from "react";
import ProfileCard from "../../Common/ProfileCard/ProfileCard";

const Search = React.lazy(() => import("../../Common/Search/Search"));
const FollowersCard = React.lazy(
  () => import("../../Common/FollowersCard/FollowersCard")
);

const ProfileSide = () => {
  return (
    <div>
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <Suspense fallback={<CircularProgress />}>
          <Search />
        </Suspense>
        <ProfileCard location="homepage" />
        <Suspense fallback={<CircularProgress />}>
          <FollowersCard location="homepage" />
        </Suspense>
      </Box>
    </div>
  );
};

export default ProfileSide;
