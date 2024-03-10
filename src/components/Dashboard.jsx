import React from "react";
import "../css/Dashboard.css";
import CryptoList from "../components/Cryptolist";
import Exchangerate from "./Exchange";
import WalletGraph from "./Walletgraph";

const Dashboard = () => (
  <div className="dashboardContainer">
    <div className="view view1 largeView">{<WalletGraph />}</div>
    <div className="view view2">View 2</div>
    <div className="view view3">{<CryptoList />}</div>
    <div className="view view4">{<Exchangerate />}</div>
    <div className="view view6">View 6</div>
    <div className="view view7">View 7</div>
    <div className="view view8">View 8</div>
  </div>
);

export default Dashboard;
