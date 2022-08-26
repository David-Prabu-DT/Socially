import React, { useState } from "react";
import RightNavbar from "../../Common/RightNavbar/RightNavbar";
import TrendCard from "../../Common/TrendCard/TrendCard";
import ShareModal from "../../Modals/ShareModal/ShareModal";
import Button from "@mui/material/Button";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState<Boolean>(false);
  return (
    <div>
      <RightNavbar />
      <TrendCard />

      <Button
        variant="contained"
        color="secondary"
        startIcon={<ShareTwoToneIcon />}
        style={{ marginTop: 25 }}
        fullWidth
        onClick={() => setModalOpened(true)}
      >
        Share
      </Button>

      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
