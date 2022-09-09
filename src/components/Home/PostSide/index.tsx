import React, { Suspense, useState } from "react";
import ShareModal from "../../Modals/ShareModal/ShareModal";
import Button from "@mui/material/Button";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import { CircularProgress } from "@mui/material";

const Posts = React.lazy(() => import("../../Common/Posts/Posts"));

const PostSide = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  return (
    <div>
      <Button
        variant="contained"
        color="warning"
        startIcon={<AddCircleTwoToneIcon />}
        style={{ marginBottom: 10 }}
        fullWidth
        onClick={() => setModalOpened(true)}
      >
        New Post
      </Button>
      <Suspense fallback={<CircularProgress style={{ display: "flex" }} />}>
        <Posts />
      </Suspense>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default PostSide;
