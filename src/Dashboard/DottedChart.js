import React, { useContext } from "react";
import "./Dashboard.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import DataContext from "./DataContext";
import DashboardData from "./DashboardData";

const DottedChart = () => {
  const { data } = useContext(DataContext);

  return (
    <LineChart width={700} height={400} data={data} className="LineChart">
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
    </LineChart>
  );
};

export default DottedChart;
