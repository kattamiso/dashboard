import React, { useContext } from "react";
import "./Dashboard.css"
import { DataContext } from "./DashboardData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import DataContextProvider from "./DashboardData";

const DottedChart = () => {
  const { data } = useContext(DataContext);

  return (
    <DataContextProvider>
      <LineChart width={700} height={400} data={data} className="LineChart">
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    </DataContextProvider>
  );
};

export default DottedChart;
