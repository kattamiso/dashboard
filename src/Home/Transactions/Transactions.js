import React, { useState } from "react";
import "./Transactions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillAlt,
  faCalendarAlt,
  faHotel,
  faCoffee,
  faGasPump,
  faShoppingCart,
  faUtensils,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";

const Transactions = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const getTransactionColor = (name) => {
    if (hoveredItem === name) {
      if (name.includes("Hotel")) return "rgb(240, 179, 66)";
      if (name.includes("Coffee")) return "rgb(152, 63, 63)";
      if (name.includes("Station")) return "rgb(95, 95, 201)";
      if (name.includes("Store")) return "rgb(161, 176, 80)";
      if (name.includes("Dinner")) return "rgb(214, 214, 67)";
      if (name.includes("Movie")) return "rgb(223, 134, 223)";
    }
    return "";
  };

  const handleMouseEnter = (name) => {
    setHoveredItem(name);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const transactions = [
    {
      name: "Hilton Hotel",
      date: "11.08.2023",
      amount: "$200",
      icon: faHotel,
      backgroundColor: getTransactionColor,
    },
    {
      name: "Coffee",
      date: "9.08.2023",
      amount: "$5",
      icon: faCoffee,
      backgroundColor: getTransactionColor,

    },
    {
      name: "Gas Station",
      date: "15.08.2023",
      amount: "$40",
      icon: faGasPump,

    },
    {
      name: "Grocery Store",
      date: "13.08.2023",
      amount: "$80",
      icon: faShoppingCart,
      backgroundColor: getTransactionColor,

    },
    {
      name: "Restaurant Dinner",
      date: "10.08.2023",
      amount: "$60",
      icon: faUtensils,
      backgroundColor: getTransactionColor,

    },
    {
      name: "Movie Tickets",
      date: "8.08.2023",
      amount: "$25",
      icon: faFilm,
      backgroundColor: getTransactionColor,

    },
  ];
  return (
    <div className="transactions-card">
    <h2 className="card-title">Transactions</h2>
    <div className="transactions-table">
      <div className="table-header">
        <div className="header-item">
          <FontAwesomeIcon icon={faHotel} /><h3>
          Transaction Name</h3>
        </div>
        <div className="header-item">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <h3>Date</h3>
        </div>
        <div className="header-item">
          <FontAwesomeIcon icon={faMoneyBillAlt} />
          <h3>Amount</h3>
        </div>
      </div>
        {transactions.map((transaction, index) => (
          <div
            className="table-row"
            key={index}
            style={{
              backgroundColor: getTransactionColor(transaction.name),
            }}
            onMouseEnter={() => handleMouseEnter(transaction.name)}
            onMouseLeave={handleMouseLeave}
          > 
            <div>
              <FontAwesomeIcon icon={transaction.icon} />
              {transaction.name}
            </div>
            <div>{transaction.date}</div>
            <div>{transaction.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
