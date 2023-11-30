import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./Searchbar.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

export function Searchbar() {
  const [input, setInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChatClick = () => {
    setShowDropdown(!showDropdown);
  };

  const redirectToMailbox = () => {
    window.location.pathname = '/Mailbox'; 
  };

  const Dropdown = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
        <h2>{props.message}</h2>
      </div>
    );
  };

  return (
    <div className="Searchbar">
      <div className="Search-side">
        <SearchIcon id="search-icon" />
        <input
          placeholder="Type to Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="dropdown-side">
        <ChatBubbleIcon id="chat-icon" onClick={handleChatClick} />
        <span className="notification-circle">2</span>
        <div
          className="dropdownItems"
          style={{ display: showDropdown ? "block" : "none" }}
        >
          <Dropdown name="Lucy Lavender" message="Hi,How are you doing?" />
          <Dropdown name="Alex Smith" message="Did you check my transaction?" />
          <div onClick={redirectToMailbox}>
            <Dropdown message="Show more" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Searchbar;
