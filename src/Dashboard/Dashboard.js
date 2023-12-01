import "./Dashboard.css";
import { DataContextProvider } from "./DashboardData";
import { CardsDashboard } from "./Cards/CardsDashboard";
import RoundChart from "./RoundChart";
import DottedChart from "./DottedChart";
import TinyLineChart from "./TinyLineChart";
import WorldMap from "./WorldMap";

export function Dashboard() {
  return (
    <DataContextProvider>
      <CardsDashboard />
      {/* <WorldMap /> */}
      <DottedChart />
      <RoundChart />
      <TinyLineChart />
    </DataContextProvider>
  );
}

export default Dashboard;
