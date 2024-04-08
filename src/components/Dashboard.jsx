import React from "react";
import "../css/Dashboard.css";
import WalletGraph from "./Walletgraph";
import BitcoinCard from "./BitcoinCard";
import RippleCard from "./RippleCard";
import LitecoinCard from "./LitecoinCard";
import EthereumCard from "./EthereumCard";
import CircleDiagram from "./Circlediagram"; 
import CryptoList from "./Cryptolist";

const Dashboard = () => (
  <div className="dashboardContainer">
    <div className="dashboardTitle">Dashboard</div>
    <div className="cardContainer">
      <BitcoinCard />
      <RippleCard />
      <EthereumCard />
      <LitecoinCard />
    </div>
    <div className="statsContainer">
      <div className="left-side">
        <WalletGraph />
      </div>
      <div className="middle">
        <CircleDiagram />
      </div>
      <div className="right-side">
        <CryptoList />
      </div>
    </div>
  </div>
);

export default Dashboard;
