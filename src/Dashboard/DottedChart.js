import React, { useContext } from "react";
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
      <LineChart width={400} height={300} data={data}>
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
