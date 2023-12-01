import React, { useContext } from "react";
import { DataContext } from "./DashboardData";
import { PieChart, Pie, Tooltip } from "recharts";
import DataContextProvider from "./DashboardData";
import "./Dashboard.css"


const RoundChart = () => {
  const { data } = useContext(DataContext);

  return (
    <DataContextProvider>
      <PieChart width={600} height={500} className="PieChart">
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </DataContextProvider>
  );
};

export default RoundChart;
