import React, { useState } from "react";
import RightNavbar from "./RightNavbar/RightNavbar";
import ShareModal from "./ShareModal/ShareModal";
import TrendCard from "./TrendCard/TrendCard";
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
