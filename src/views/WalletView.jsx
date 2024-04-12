import React from "react";
import Profile from "../icons/jon-doe.png";
import "../css/WalletView.css";
import Cryptolist from "../components/Cryptolist";
import Chart from "../components/Chart";

const WalletView = () => {
  return (
    <div className="WalletContainer">
      <header className="WalletHeader">
        <div className="WalletTitle">Wallet</div>
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

      <div className="WalletBody">
        <div className="maincontentwallet" style={{ flex: "80%" }}>
          <h1>main content</h1>
        </div>
        <div className="sidecontentwallet" style={{ flex: "20%" }}>
          <Cryptolist />
        </div>
      </div>
      <div className="footercontentwallet">
        <Chart />
      </div>
    </div>
  );
};

export default WalletView;
