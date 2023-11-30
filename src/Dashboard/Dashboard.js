import "./Dashboard.css";
import { useState, createContext, useContext } from "react";
import DataContextProvider from "./DashboardData";
import RoundChart from "./RoundChart";
import DottedChart from "./DottedChart";


export function Dashboard() {
  return (
    <DataContextProvider>
      <div >
        <RoundChart />
        <DottedChart/>
      </div>
    </DataContextProvider>
  );
}

export default Dashboard;
