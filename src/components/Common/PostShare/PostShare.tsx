import React, { FormEvent } from "react";
import { useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import "./PostShare.module.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/ReduxStore";
import { uploadImage, uploadPost } from "../../../actions/UploadAction";
import { AuthDataType, UploadPostType } from "../../../types/Global";

const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

const PostShare = () => {
  const [image, setImage] = useState<Blob | null>();
  const imageRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const dispatch: AppDispatch = useDispatch();
  const user: AuthDataType | null = useSelector(
    (state: RootState) => state["auth"]["authData"]["user"]
  );

  const userId: string | null = user && user._id!;

  const loading = useSelector((state: RootState) => state["post"]["uploading"]);
  const [desc, setDesc] = useState("");

  const onImageChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    if (_event.target.files && _event.target.files[0]) {
      let img: Blob | null = _event.target.files[0];
      setImage(img);
    }
  };

  // handle post upload
  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();

    //post data
    const newPost: UploadPostType = {
      userId: userId ?? "",
      desc: desc,
    };

    // if there is an image with post
    if (image) {
      const data:
        | { id?: string | null; name?: string; file?: Blob | null }
        | FormData = new FormData();
      const fileName = `${Date.now()} ${image["name"]}`;
      data.append("id", userId ?? "");
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;

      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }

    dispatch(uploadPost(newPost));
    resetShare();
  };

  // Reset Post Share
  const resetShare = () => {
    setImage(null);
    setDesc("");
  };

  return (
    <div>
      <Box>
        <Paper elevation={0} style={{ margin: 5 }}>
          <Grid container style={{ padding: 10 }}>
            <Grid
              item
              md={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <div className="ProfileImages">
                <img
                  src={
                    user && user["profilePicture"]
                      ? serverPublic + user["profilePicture"]
                      : serverPublic + "defaultProfile.png"
                  }
                  alt="Profile"
                  style={{ width: "55%" }}
                />
              </div>
            </Grid>
            <Grid
              item
              md={10}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                label="What's Happening"
                variant="filled"
                margin="dense"
                fullWidth
                required
                onChange={(e) => setDesc(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} pb={1}>
            <Grid item xs={2}></Grid>
            <Grid
              item
              xs={10}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                color="success"
                aria-haspopup="true"
                size="small"
                startIcon={<AddAPhotoIcon fontSize="small" />}
                onClick={() => imageRef.current.click()}
              >
                Photo
              </Button>

              {/* <Button
              color="secondary"
              aria-haspopup="true"
              size="small"
              startIcon={<VideoCallRoundedIcon fontSize="small" />}
            >
              Video
            </Button>

            <Button
              color="error"
              aria-haspopup="true"
              size="small"
              startIcon={<AddLocationRoundedIcon fontSize="small" />}
            >
              Location
            </Button>

            <Button
              color="warning"
              aria-haspopup="true"
              size="small"
              startIcon={<EventAvailableRoundedIcon fontSize="small" />}
            >
              Schedule
            </Button> */}

              <Button
                variant="contained"
                color="warning"
                size="small"
                endIcon={<SendIcon fontSize="small" />}
                onClick={handleUpload}
                disabled={loading}
              >
                {loading ? "Uploading" : "Post"}
              </Button>
              <div style={{ display: "none" }}>
                <input
                  type="file"
                  accept="image/*"
                  name="myImage"
                  ref={imageRef}
                  onChange={(e) => onImageChange(e)}
                />
              </div>
            </Grid>
          </Grid>

          {image && (
            <Card style={{ padding: 5 }}>
              <CardHeader
                action={
                  <CancelIcon
                    onClick={() => setImage(null)}
                    fontSize="medium"
                    color="error"
                  />
                }
                aria-label="settings"
                title=""
                subheader=""
              />
              <CardMedia
                component="img"
                image={URL.createObjectURL(image)}
                height="auto"
                width={400}
                alt="Paella dish"
              />
            </Card>
          )}
        </Paper>
      </Box>
    </div>
  );
};

export default PostShare;
