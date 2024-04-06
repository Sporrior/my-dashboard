import React from "react";
import "../css/Dashboard.css";
import WalletGraph from "./Walletgraph";
import BitcoinCard from "./BitcoinCard";
import RippleCard from "./RippleCard";
import LitecoinCard from "./LitecoinCard";
import EthereumCard from "./EthereumCard";

const Dashboard = () => (
  <div className="dashboardContainer">
    <div className="dashboardTitle">Dashboard</div>
    <div className="cardContainer">
      <BitcoinCard />
      <RippleCard />
      <EthereumCard />
      <LitecoinCard />

    </div>
      <div className="statsContainer"><WalletGraph /></div>
      <div className="test"></div>
    </div>
);

export default Dashboard;
