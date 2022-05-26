import React, { useState, useEffect } from "react";
import "./../css/Committee.css";
import UserData from "../components/UserData";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { CONSTANT, Loader } from "./../CONSTANT";
import KeyboardAltIcon from "@mui/icons-material/KeyboardAlt";
const axios = require("axios");

function Committee(props) {
  const { data, setData } = React.useContext(UserData);
  // User Data

  return (
    <div className="__Committee">
      <div className="row">
          --Hello Committee Here
        <div className="com_img"><img src="https://static6.depositphotos.com/1057263/632/i/600/depositphotos_6326016-stock-photo-concept-of-business-meeting.jpg" />
</div>
      </div>
    </div>
  );
}

export default Committee;
