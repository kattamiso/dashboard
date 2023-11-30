import React from "react";
import styles from "./App.module.css";
import Sidebar from "./Sidebar/Sidebar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home/Payment.js";
import { Friends } from "./Friends/Friends.js";
import { User } from "./Home/User/User.js";
// import  DashboardChart  from "./Dashboard/DashboardChart.js";
import  {Dashboard}  from "./Dashboard/Dashboard.js";
import { Searchbar } from "./Dashboard/Searchbar/Searchbar.js";
import { Analytics } from "./Analytics/Analytics.js";
import Transactions from "./Home/Transactions/Transactions";
import TransactionsChart from "./Analytics/SimpleLineChart.js";
import GoldenCardTransactionChartWrapper from "./Analytics/PieResponsiveContainer.js";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <div className={styles.Sidebar}>
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route path="/dashboard" element={<DashboardWithAllComponents />} />
            <Route path="/home" element={<HomeWithUser />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/analytics" element={<AnalyticsWithChart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function HomeWithUser() {
  return (
    <div>
      <Home />
      <User />
      <Transactions />
    </div>
  );
}

function AnalyticsWithChart() {
  return (
    <div>
      <Analytics />
      <TransactionsChart />
      <GoldenCardTransactionChartWrapper />
    </div>
  );
}

function DashboardWithAllComponents() {
  return (
    <div>
      <Searchbar />
      {/* <DashboardChart /> */}
      <Dashboard/>
    </div>
  );
}

export default App;
