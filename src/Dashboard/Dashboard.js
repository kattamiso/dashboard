import "./Dashboard.css";
import {useContext} from "react"
// import createContext from "react"
import {DataContext} from "./DataContext"
import { CardsDashboard } from "./Cards/CardsDashboard";
import RoundChart from "./RoundChart";
import DottedChart from "./DottedChart";
import TinyLineChart from "./TinyLineChart";
import WorldMap from "./WorldMap";
import { DashboardData } from "./DashboardData";

export function Dashboard() {
  const {data} = useContext(DataContext)

  return (
    <DashboardData value={{ data }}>
      <CardsDashboard />
      {/* <WorldMap /> */}
      <DottedChart />
      <RoundChart />
      <TinyLineChart />
      </DashboardData >
  );
}

export default Dashboard;
