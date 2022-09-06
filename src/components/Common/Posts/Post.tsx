import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AddCommentIcon from "@mui/icons-material/AddComment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { RootState } from "../../../store/ReduxStore";
import { likePost } from "../../../api/PostsRequests";
import { authDataType, postDataType } from "../../../types/Global";

const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

const Post: React.FC<{ data: postDataType }> = ({ data }) => {
  const user: authDataType | null = useSelector(
    (state: RootState) => state["auth"]["authData"]
  );

  const userId: string | null = user && user._id!;

  const [liked, setLiked] = useState(data?.likes?.includes(userId ?? ""));
  const [likes, setLikes] = useState(data?.likes?.length || 0);

  const handleLike = () => {
    likePost(data._id, userId);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  return (
    <div>
      <div style={{ margin: 5 }}>
        <Card elevation={0}>
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
            action={<IconButton aria-label="settings"></IconButton>}
            title={data.name ?? "User Name"}
            subheader={
              data?.createdAt
                ?.slice(0, data?.createdAt?.indexOf("T"))
                .split("-")
                .reverse()
                .join("-") ?? ""
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
      </div>
    </div>
  );
};

export default Post;
