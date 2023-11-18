import "./Friends.css";
import { FriendsData } from "../Friends/FriendsData.js";

export function Friends() {
  return (
    <div className="Friends">
      <h1>Your Friends</h1>

      <table className="friendsTable">
        <thead>
          <th>Name</th>
          <th>Surname</th>
          <th>BirthDate</th>
        </thead>
        {FriendsData.map((friend, index) => (
          <tr key={index} style={{ backgroundColor: friend.isActive ? " rgb(181, 219, 181)"
            : "white" }}>
            <td>{friend.name}</td>
            <td>{friend.Surname}</td>
            <td>{friend.BirthDate}</td>
            <td>{friend.isActive ? "Active" : "Inactive"}</td>
          </tr>
        ))}
      </table>
    </div>
        
  );
}

export default Friends;
