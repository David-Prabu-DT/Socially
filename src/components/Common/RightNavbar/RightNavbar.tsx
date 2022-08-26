import React from "react";
import { Badge, Box, Button, IconButton, Tooltip } from "@mui/material";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import SpeakerNotesTwoToneIcon from "@mui/icons-material/SpeakerNotesTwoTone";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch, authActions } from "../../../store/ReduxStore";

const RightNavbar = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(authActions.LOG_OUT());
  };

  return (
    <div>
      <Box
        sx={{ display: { xs: "none", md: "flex" } }}
        justifyContent="space-between"
        m={1}
      >
        <Tooltip title="Home" arrow>
          <Link to="/home">
            <IconButton>
              <HomeTwoToneIcon color="warning" />
            </IconButton>
          </Link>
        </Tooltip>

        <Tooltip title="Settings" arrow>
          <IconButton>
            <SettingsTwoToneIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Notifications" arrow>
          <IconButton>
            <Badge color="error" badgeContent={17}>
              <NotificationsNoneTwoToneIcon />
            </Badge>
          </IconButton>
        </Tooltip>

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
    </div>
  );
};

export default RightNavbar;
