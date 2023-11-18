import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData.js";


export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`Sidebar ${isSidebarOpen ? "" : "closed"}`}>
      <ul className="SidebarList">
        <div className="ToggleButton" onClick={toggleSidebar}>
          {isSidebarOpen ? "X" : "+"}
        </div>

        {SidebarData.map((val, key) => (
          <li
            key={key}
            className="row"
            onClick={() => {
              window.location.pathname = val.link;
            }}
          >
            <div>{val.icon}</div>
            <div className="title">{val.title}</div>
          </li>
        ))}
      </ul>{" "}
    </div>
  );
}
export default Sidebar;
