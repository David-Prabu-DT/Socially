import { useRef, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import Avatar from "../../../../assets/img/avatar.png";
import "./PostShare.module.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";

interface ImgBlob {
  image?: Blob | string;
}

const PostShare = () => {
  const [image, setImage] = useState<ImgBlob | null>(null);
  const imageRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onImageChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    if (_event.target.files && _event.target.files[0]) {
      let img: Blob | string = _event.target.files[0];

      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div>
      <Paper elevation={2} style={{ margin: 5 }}>
        <Grid container style={{ padding: 10 }}>
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <div className="ProfileImages">
              <img style={{ width: "55%" }} src={Avatar} alt="" />
            </div>
          </Grid>
          <Grid
            item
            xs={10}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <TextField
              label="What's Happening"
              variant="filled"
              margin="dense"
              fullWidth
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

            <Button
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
            </Button>

            <Button
              variant="contained"
              color="warning"
              size="small"
              endIcon={<SendIcon fontSize="small" />}
            >
              Post
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
              image={String(image?.image)}
              height="auto"
              width={400}
              alt="Paella dish"
            />
          </Card>
        )}
      </Paper>
    </div>
  );
};

export default PostShare;
