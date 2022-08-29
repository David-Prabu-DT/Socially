import React, { useState } from "react";
import { useSelector } from "react-redux";
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
import { RootState } from "../../../store/ReduxStore";
import { likePost } from "../../../api/PostsRequests";

interface PostData {
  _id: number | string;
  image?: string;
  profile?: string;
  name?: string;
  date?: string;
  desc?: string;
  likes?: string;
  liked?: boolean;
  createdAt?: string;
}

const Post: React.FC<{ data: PostData }> = ({ data }) => {
  const user: any = useSelector((state: RootState) => state.auth.authData);
  const [liked, setLiked] = useState(data?.likes?.includes(user._id));
  const [likes, setLikes] = useState(data?.likes?.length || 0);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  return (
    <div>
      <Paper elevation={2} style={{ margin: 5 }}>
        <Card>
          <CardHeader
            avatar={
              <Avatar
                src={
                  data.image
                    ? publicFolder + data.image
                    : publicFolder + "defaultProfile.png"
                }
              />
            }
            action={
              <IconButton aria-label="settings">
                {/* <MoreVertIcon /> */}
              </IconButton>
            }
            title={data.name ?? "User Name"}
            subheader={
              data?.createdAt
                ?.slice(0, data?.createdAt?.indexOf("T"))
                .split("-")
                .reverse()
                .join("-") 
                ?? ""
            }
          />
          {data.image && (
            <CardMedia
              component="img"
              height="300"
              image={publicFolder + data.image}
              alt={data.name}
            />
          )}

          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              {liked ? (
                <FavoriteIcon
                  style={{ cursor: "pointer" }}
                  onClick={handleLike}
                  color="error"
                />
              ) : (
                <FavoriteBorderIcon
                  style={{ cursor: "pointer" }}
                  onClick={handleLike}
                />
              )}
              &nbsp;
              <Typography variant="body2" color="text.secondary">
                {likes} likes
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
