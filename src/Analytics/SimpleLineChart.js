import "./Analytics.css"
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const transactions = [
  {
    name: "Hilton Hotel",
    date: "11.08.2023",
    amount: 200,
    icon: "faHotel",
  },
  {
    name: "Coffee",
    date: "9.08.2023",
    amount: 5,
    icon: "faCoffee",
  },
  {
    name: "Gas Station",
    date: "15.08.2023",
    amount: 40,
    icon: "faGasPump",
  },
  {
    name: "Grocery Store",
    date: "13.08.2023",
    amount: 80,
    icon: "faShoppingCart",
  },
  {
    name: "Restaurant Dinner",
    date: "10.08.2023",
    amount: 60,
    icon: "faUtensils",
  },
  {
    name: "Movie Tickets",
    date: "8.08.2023",
    amount: 25,
    icon: "faFilm",
  },
];

const renderChart = () => {
  const data = transactions.map((transaction) => ({
    name: transaction.name,
    amount: transaction.amount,
  }));

  return (
    <ResponsiveContainer width={500} height={500}>
      <BarChart data={data}  margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const TransactionsChart = () => {
  return (
    <div className="transactions-chart">
      <h2>Universal Card's Transactions Chart This Week</h2>
      {renderChart()}
    </div>
  );
};

export default TransactionsChart;
