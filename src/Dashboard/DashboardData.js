import { create } from "@mui/material/styles/createTransitions";
import React, { createContext, useState, useContext } from "react";

export const DataContext = createContext();

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

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  return (
    <DataContext.Provider value={{ data }}>
      {children}
      </DataContext.Provider>
  );
};

export function DashboardData() {
  const { data } = useContext(DataContext);

  return (
    <div className="DashboardData">
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>Name: {item.name}</p>
            <p>Amount:{item.amount}</p>
            <p>Percentage:{item.percentage}</p>
            <p>Time:{item.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardData;
