import React, { useContext } from "react";
import  DataContext  from "./DataContext";
import { PieChart, Pie, Tooltip } from "recharts";
import "./Dashboard.css"


const RoundChart = () => {
  const { data } = useContext(DataContext);

  return (
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
  );
};

export default RoundChart;
