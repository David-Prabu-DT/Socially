import React from "react";
import { Badge, Box, IconButton } from "@mui/material";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import SpeakerNotesTwoToneIcon from "@mui/icons-material/SpeakerNotesTwoTone";

const RightNavbar = () => {
  return (
    <div>
      <Box
        sx={{ display: { xs: "none", md: "flex" } }}
        justifyContent="space-between"
        m={1}
      >
        <IconButton>
          <HomeTwoToneIcon color="warning" />
        </IconButton>
        <IconButton>
          <SettingsTwoToneIcon />
        </IconButton>
        <IconButton>
          <Badge color="error" badgeContent={17}>
            <NotificationsNoneTwoToneIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <SpeakerNotesTwoToneIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default RightNavbar;
