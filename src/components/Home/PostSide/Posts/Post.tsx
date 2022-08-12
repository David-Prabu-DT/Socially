import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AddCommentIcon from "@mui/icons-material/AddComment";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface PostData {
  img?: string;
  profile?: string;
  name?: string;
  date?: string;
  desc?: string;
  likes?: number;
  liked?: boolean;
}

const Post: React.FC<{ data: PostData }> = ({ data }) => {
  return (
    <div>
      <Paper elevation={2} style={{ margin: 5 }}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgColor: "red" }} aria-label="recipe">
                {data.profile !== "" ? (
                  <img src={data.profile} alt="" />
                ) : (
                  data.name?.charAt(0)
                )}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                {/* <MoreVertIcon /> */}
              </IconButton>
            }
            title={data.name}
            subheader={data.date}
          />
          <CardMedia
            component="img"
            height="300"
            image={data.img}
            alt={data.name}
          />

          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              {data.liked ? (
                <FavoriteBorderIcon />
              ) : (
                <FavoriteIcon color="error" />
              )}
              &nbsp;
              <Typography variant="body2" color="text.secondary">
                {data.likes}
              </Typography>
            </IconButton>
            <IconButton aria-label="add Comment">
              <AddCommentIcon />
            </IconButton>
            <IconButton aria-label="share">
              <SendRoundedIcon />
            </IconButton>
            &nbsp;&nbsp;&nbsp;
            <Typography
              variant="subtitle2"
              color="text.secondary"
              align="center"
            >
              {data.desc}
            </Typography>
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
};

export default Post;
