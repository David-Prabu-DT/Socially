import React, { FormEvent, useEffect } from "react";
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
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/ReduxStore";
import { uploadImage, uploadPost } from "../../../actions/UploadAction";

interface ImgBlob {
  image?: string;
}

const PostShare = () => {
  const [image, setImage] = useState<ImgBlob | null | any>(null);
  const imageRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const dispatch: AppDispatch = useDispatch();
  const user: any = useSelector((state: RootState) => state.auth.authData);
  const loading = useSelector((state: RootState) => state.post.uploading);
  const [desc, setDesc] = useState("");
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const onImageChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    if (_event.target.files && _event.target.files[0]) {
      let img: Blob | string = _event.target.files[0];
      setImage(img);
    }
  };

  // handle post upload
  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();

    //post data
    const newPost: any = {
      userId: user._id,
      desc: desc,
    };

    // if there is an image with post
    if (image) {
      const data: HTMLFormElement | any = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    console.log(newPost);
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
                    user.profilePicture
                      ? serverPublic + user.profilePicture
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
                onChange={(e: any) => setDesc(e.target.value)}
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
