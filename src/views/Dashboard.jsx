import React from "react";
import "../css/Dashboard.css";
// import CircleDiagram from "../components/Circlediagram";
import FinanceSection from "../components/Purchases";
import Profile from "../icons/jon-doe.png";
import Balance from "../components/Balance";
import Percentagecard from "../components/Percentagecard";
import Expensescard from "../components/Expensescard";

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <header className="dashboardHeader">
        <div className="dashboardTitle">Dashboard</div>
        <div className="searchBarWrapper">
          <input type="text" className="searchBar" placeholder="Search..." />
        </div>
        <div className="profileDropdown">
          <img src={Profile} alt="Profile" className="profilePic" />
        </div>
        <div className="iconsContainer">
          <div className="icon">Messages</div>
          <div className="icon">Mail</div>
        </div>
      </header>

      <div className="dashboardBody">
        <div className="maincontentdashboard" style={{ flex: "80%" }}>
          <div className="balancecontainer">
            <Balance />
            <Percentagecard />
            <Expensescard />
          </div>
        </div>
        <div className="sidecontentdashboard" style={{ flex: "20%" }}>
          <FinanceSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
