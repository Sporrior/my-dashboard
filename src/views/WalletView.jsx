import React from "react";
import Profile from "../icons/jon-doe.png";
import "../css/WalletView.css";
// import Balance from "../components/Balance";
import Cryptolist from "../components/Cryptolist";

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
        <div className="WalletBody">
          <div className="mainContent">
            <div>
            <Cryptolist />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletView;
