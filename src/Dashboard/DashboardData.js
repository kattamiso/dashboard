import React, { createContext, useState, useContext } from "react";
import DataContext from "./DataContext"

export const initialData = [
  {
    name: "Sales Today",
    amount: 2.532,
    percentage: "+26%",
    time: "Since last month",
  },
  {
    name: "Visitors",
    amount: 170.212,
    percentage: "-14%",
    time: "Since last month",
  },
  {
    name: "Total Earnings",
    amount: 24.3,
    percentage: "+18%",
    time: "Since last month",
  },
  {
    name: "Pending Orders",
    amount: 45,
    percentage: "-9%",
    time: "Since last month",
  },
];

export const DashboardData = ({ children }) => {
  const [data, setData] = useState(initialData);

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};


export default DashboardData;