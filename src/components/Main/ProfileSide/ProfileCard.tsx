import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import "./ProfileCard.css";
import Avatar from "../../../assets/img/avatar.png";

const ProfileCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt="Cover"
      />
      <img className="profileImg" src={Avatar} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          Lizard
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
        >React Developer</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
