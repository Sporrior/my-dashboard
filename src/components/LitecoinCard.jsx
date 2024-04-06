import React, { useState, useEffect } from "react";
import litecoinIcon from "../icons/litecoin.png";
import "../css/CryptoCards.css";

const LitecoinCard = ({ icon, price }) => {
  const [fluctuation, setFluctuation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomFluctuation = Math.random() * 2 - 1; // Random number between -1 and 1
      setFluctuation(randomFluctuation);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="crypto-card">
      <div className="crypto-icon">
        <img src={icon} alt="Bitcoin Icon" />
      </div>
      <div className="crypto-info">
        <div
          className={`crypto-price ${
            fluctuation > 0 ? "up-text" : "down-text"
          }`}>
          ${price}
        </div>
        <div className="crypto-fluctuation">
          {fluctuation > 0 ? (
            <span className="up-arrow">↑</span>
          ) : (
            <span className="down-arrow">↓</span>
          )}
          <span className={`${fluctuation > 0 ? "up-text" : "down-text"}`}>
            {fluctuation.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <LitecoinCard icon={litecoinIcon} price={54.97} />
    </div>
  );
};

export default App;
