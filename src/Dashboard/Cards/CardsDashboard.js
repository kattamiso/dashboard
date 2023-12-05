import React, { useContext } from "react";
import  {DataContext}  from "../DataContext";
import "./CardsDashboard.css"

export function CardsDashboard() {    
  const { data } = useContext(DataContext);
  
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

    const redirectToHome = () => {
      window.location.pathname = '/Home'; 
    };

  return (
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
    
  );
}

export default CardsDashboard;
