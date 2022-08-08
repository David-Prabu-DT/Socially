import React from "react";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../../assets/img/logo.png";

const Search = () => {
  return (
    <div>
      <img src={Logo} alt="" />
      <TextField
        label="Search Here"
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

export default Search;
