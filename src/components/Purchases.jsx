import React from "react";
import "../css/Purchases.css"; // Make sure to adjust the path if needed

const FinanceSection = () => {
  return (
    <div className="messages-section">
      <div className="projects-section-header">
        <h4>Recent Purchases</h4>
      </div>
      <div className="messages">
        <div className="message-box">
          <div className="message-content">
            <div className="message-header">
              <div className="name">$ 112,98</div>
            </div>
            <p className="message-line">Solana</p>
            <p className="message-line time">feb, 2</p>
          </div>
        </div>
        <div className="message-box">
          <div className="message-content">
            <div className="message-header">
              <div className="name">$ 576,43</div>
            </div>
            <p className="message-line">Doge Coin</p>
            <p className="message-line time">feb, 14</p>
          </div>
        </div>
        <div className="message-box">
          <div className="message-content">
            <div className="message-header">
              <div className="name">$ 5789,99</div>
            </div>
            <p className="message-line">Ethereum</p>
            <p className="message-line time">feb, 28</p>
          </div>
        </div>
        <div className="message-box">
          <div className="message-content">
            <div className="message-header">
              <div className="name">$ 10219,76</div>
            </div>
            <p className="message-line">Bitcoin</p>
            <p className="message-line time">march, 9</p>
          </div>
        </div>
        <div className="message-box">
          <div className="message-content">
            <div className="message-header">
              <div className="name">$ 334,99</div>
            </div>
            <p className="message-line">Polkadot</p>
            <p className="message-line time">march, 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceSection;
