import "./Analytics.css";
import React, { PureComponent } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 600 },
  { name: "Group C", value: 100 },
  { name: "Group D", value: 200 },
];

class GoldenCardTransactionChart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-in-responsive-container-qyv6t";

  render() {
    return (
      <div className="GoldenChart">
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

const GoldenCardTransactionChartWrapper = ({title}) => {
  return (
    <div className="GoldenCardTransactionChart">
      <h1 className="heading">Golden Card Chart This Week</h1>
      <GoldenCardTransactionChart />
    </div>
  );
};

export default GoldenCardTransactionChartWrapper;
