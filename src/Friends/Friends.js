import React, { useState } from "react";
import "./Friends.css";
import { FriendsData } from "../Friends/FriendsData.js";

export function Friends() {
  const [newFriend, setNewFriend] = useState({
    name: "",
    surname: "",
    birthDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFriend({ ...newFriend, [name]: value });
  };

  const [friendsList, setFriendsList] = useState(FriendsData);
  const addFriend = () => {
    if (newFriend.name && newFriend.surname && newFriend.birthDate) {
      const updatedFriendsList = [...friendsList, { ...newFriend }];
      setFriendsList(updatedFriendsList);
      setNewFriend({ name: "", surname: "", birthDate: "" });

      localStorage.setItem("friendsList", JSON.stringify(updatedFriendsList));
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="Friends">
      <h1>Your Friends</h1>

      <form className="addFriendForm">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newFriend.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Surname"
          name="surname"
          value={newFriend.surname}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Birth Date"
          name="birthDate"
          value={newFriend.birthDate}
          onChange={handleInputChange}
          required
        />
        <button type="button" onClick={addFriend}>
          Add Friend
        </button>
      </form>

      <table className="friendsTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>BirthDate</th>
          </tr>
        </thead>
        <tbody>
          {friendsList.map((friend, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: friend.isActive
                  ? "rgb(181, 219, 181)"
                  : "white",
              }}
            >
              <td>{friend.name}</td>
              <td>{friend.surname}</td>
              <td>{friend.birthDate}</td>
              <td>{friend.isActive ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Friends;
