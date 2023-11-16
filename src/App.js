import React from "react";
import styles from "./App.module.css";
import Sidebar from "./Sidebar/Sidebar.js";
import { Home } from "./Home/Home.js";
import { User } from "./Home/User/User.js";
import { createContext } from "react";

const AppContext = createContext();

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Sidebar}>
        <Sidebar />
      </div>
      <div className="{styles.Home}">
        <Home />
      </div>
      <div>
        <User />
      </div>
    </div>
  );
}

export default App;
