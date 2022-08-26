import React, { useState } from "react";
import Posts from "../../Common/Posts/Posts";
import ShareModal from "../../Modals/ShareModal/ShareModal";
import Button from "@mui/material/Button";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";

const PostSide = () => {
  const [modalOpened, setModalOpened] = useState<Boolean>(false);

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        startIcon={<AddCircleTwoToneIcon />}
        style={{ marginTop: 25, marginBottom: 25 }}
        fullWidth
        onClick={() => setModalOpened(true)}
      >
        New Post
      </Button>

      <Posts />
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default PostSide;
