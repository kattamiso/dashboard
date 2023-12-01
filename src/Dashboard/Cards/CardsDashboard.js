import React, { useContext } from "react";
import { DataContext } from "../DashboardData";
import DataContextProvider from "../DashboardData";
import "./CardsDashboard.css"

export function CardsDashboard() {
    const { data } = useContext(DataContext);
    
    const redirectToHome = () => {
      window.location.pathname = '/Home'; 
    };

  return (
    <DataContextProvider>
    <div className="CardsDashboard">
      {data.map((item, index) => (
        <div key={index} className="window">
          <p className="name">{item.name}</p>
          <p className="amount">Amount: {item.amount}</p>
          <p className="percentage">Percentage: {item.percentage}</p>
          <p className="time" onClick={redirectToHome}> {item.time}</p>
        </div>
      ))}
    </div>
    </DataContextProvider>
    
  );
}

export default CardsDashboard;
