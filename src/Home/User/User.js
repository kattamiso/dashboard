import React from "react";
import "../User/User.css";
import UserImage from "../../img/user.jpg";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthWestIcon from "@mui/icons-material/NorthWest";

export function User() {
  return (
    <div className="User">
      <img src={UserImage} className="user" alt="User" />
      <div className="box">
        <SouthEastIcon className="icon-one" />
        <h3 className="title">Income</h3>
        <h2 className="amount">$62</h2>
      </div>
      <div className="box-second">
        <NorthWestIcon className="icon-second" />
        <h3 className="title">Outcome</h3>
        <h2 className="amount-second">$24</h2>
      </div>
    </div>
  );
}
