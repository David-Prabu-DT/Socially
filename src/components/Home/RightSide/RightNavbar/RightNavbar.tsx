import React from "react";
import { Badge, Box, IconButton } from "@mui/material";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import SpeakerNotesTwoToneIcon from "@mui/icons-material/SpeakerNotesTwoTone";
import { Link } from "react-router-dom";

const RightNavbar = () => {
  return (
    <div>
      <Box
        sx={{ display: { xs: "none", md: "flex" } }}
        justifyContent="space-between"
        m={1}
      >
        <Link to="/home">
          <IconButton>
            <HomeTwoToneIcon color="warning" />
          </IconButton>
        </Link>
        <IconButton>
          <SettingsTwoToneIcon />
        </IconButton>
        <IconButton>
          <Badge color="error" badgeContent={17}>
            <NotificationsNoneTwoToneIcon />
          </Badge>
        </IconButton>
        <Link to="/chat">
          <IconButton>
            <SpeakerNotesTwoToneIcon />
          </IconButton>
        </Link>
      </Box>
    </div>
  );
};

export default RightNavbar;
