import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { Suspense } from "react";
import { GlobalProvider } from "../../../context/GlobalState";
import RightNavbar from "../../Common/RightNavbar/RightNavbar";

const TrendCard = React.lazy(() => import("../../Common/TrendCard/TrendCard"));

const RightSide = () => {
  return (
    <div>
      <RightNavbar />
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <Suspense fallback={<CircularProgress />}>
          <GlobalProvider>
            <TrendCard />
          </GlobalProvider>
        </Suspense>
      </Box>
    </div>
  );
};

export default RightSide;
