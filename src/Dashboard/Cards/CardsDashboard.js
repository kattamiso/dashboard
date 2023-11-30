import React from "react";
import DashboardData from "../DashboardData";

export function CardsDashboard() {
  const data = DashboardData();

  return (
    <div className="CardsDashboard">
      {data.map((item, index) => (
        <div key={index} className="card">
          <p>Name: {item.name}</p>
          <p>Amount: {item.amount}</p>
          <p>Percentage: {item.percentage}</p>
          <p>Time: {item.time}</p>
        </div>
      ))}
    </div>
  );
}

export default CardsDashboard;
