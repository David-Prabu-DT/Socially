import React from "react";
import "./LogoSearch.css";
import { UilSearch } from "@iconscout/react-unicons";

const LogoSearch = () => {
  const imageSrc = process.env.REACT_APP_IMAGE_FOLDER;

  return (
    <div className="LogoSearch">
      <img src={`${imageSrc}logo.png`} alt="" width={50} />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
