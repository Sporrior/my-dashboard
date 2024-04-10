import React from "react";
import "../css/Dashboard.css";
import CircleDiagram from "../components/Circlediagram";
import FinanceSection from "../components/Purchases";
import BitcoinCard from "../components/BitcoinCard";
import Profile from "../icons/jon-doe.png"

const Dashboard = () => {
  const generateRandomEuroAmount = () => {
    return (Math.random() * 10000).toFixed(2);
  };

  return (
    <div className="dashboardContainer">
      <header className="dashboardHeader">
        <div className="dashboardTitle">Dashboard</div>
        <div className="searchBarWrapper">
          <input type="text" className="searchBar" placeholder="Search..." />
        </div>
        <div className="profileDropdown">
          <img
            src={Profile}
            alt="Profile"
            className="profilePic"
          />
        </div>
        <div className="iconsContainer">
          <div className="icon">Messages</div>
          <div className="icon">Mail</div>
        </div>
      </header>

      <div className="dashboardBody">
        <div className="mainContent" style={{ flex: "80%", color: "white" }}>
          <div className="walletcontainer">
            <div>
              <h3>Total Income</h3>
              <div className="geld">€ {generateRandomEuroAmount()}</div>
            </div>
            <CircleDiagram percentage={44} />
            <div>
              <h3>Total Expenses</h3>
              <div className="geld">€ {generateRandomEuroAmount()}</div>
            </div>
            <CircleDiagram percentage={26} />
            <div>
              <h3>Total Bonus</h3>
              <div className="geld">€ {generateRandomEuroAmount()}</div>
            </div>
            <CircleDiagram percentage={30} />
          </div>
          <BitcoinCard />
        </div>
        <div className="sideContent" style={{ flex: "20%" }}>
          <FinanceSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
