import React from "react";
import {
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import SpeakerNotesTwoToneIcon from "@mui/icons-material/SpeakerNotesTwoTone";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, authActions, RootState } from "../../../store/ReduxStore";

const RightNavbar = () => {
  const user: any = useSelector((state: RootState) => state.auth.authData);
  const dispatch: AppDispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(authActions.LOG_OUT());
  };

  const imageSrc = `${window.location.origin}/images/`;

  return (
    <div>
      <Paper elevation={0} style={{ padding: 1 }}>
        <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
          <Grid container spacing={2} mb={2}>
            <Grid
              item
              xs={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={`${imageSrc}logo.png`} alt="" width={50} />
            </Grid>
            <Grid item xs={10} display="flex" alignItems="center">
              <Typography variant="h4" color="teal">
                Socially
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{ display: { xs: "flex", md: "flex" } }}
          justifyContent="space-between"
          m={1}
        >
          <Tooltip title="Home" arrow>
            <Link to="/home">
              <IconButton>
                <HomeTwoToneIcon />
              </IconButton>
            </Link>
          </Tooltip>

          <Tooltip title="Profile" arrow>
            <Link to={`/profile/${user._id}`}>
              <IconButton>
                <PersonOutlineTwoToneIcon />
              </IconButton>
            </Link>
          </Tooltip>

          {/* <Tooltip title="Notifications" arrow>
          <IconButton>
            <Badge color="error" badgeContent={17}>
              <NotificationsNoneTwoToneIcon />
            </Badge>
          </IconButton>
        </Tooltip> */}

          <Tooltip title="Message" arrow>
            <Link to="/chat">
              <IconButton>
                <SpeakerNotesTwoToneIcon />
              </IconButton>
            </Link>
          </Tooltip>

          <Tooltip title="Logout" arrow>
            <Button variant="contained" color="error" onClick={handleLogOut}>
              Logout
            </Button>
          </Tooltip>
        </Box>
      </Paper>
    </div>
  );
};

export default RightNavbar;
