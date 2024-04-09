import React from "react";
import "../css/Purchases.css"; // Make sure to adjust the path if needed

const FinanceSection = () => {
  return (
    <div className="messages-section">
      <div className="projects-section-header">
        <p>Recent Purchases</p>
      </div>
      <div className="messages">
        <div className="message-box">
          <div className="message-content">
            <div className="message-header">
              <div className="name">$ 112,98</div>
            </div>
            <p className="message-line">Walmart</p>
            <p className="message-line time">feb, 2</p>
          </div>
        </div>
        <div className="message-box">
          <div className="message-content">
            <div className="message-header">
              <div className="name">$ 76,43</div>
            </div>
            <p className="message-line">Best Buy</p>
            <p className="message-line time">feb, 14</p>
          </div>
        </div>
        <div className="message-box">
          <div className="message-content">
            <div className="message-header">
              <div className="name">$ 1789,99</div>
            </div>
            <p className="message-line">Apple Store</p>
            <p className="message-line time">feb, 28</p>
          </div>
        </div>
        <div className="message-box">
          <div className="message-content">
            <div className="message-header">
              <div className="name">$ 219,76</div>
            </div>
            <p className="message-line">Walmart</p>
            <p className="message-line time">march, 9</p>
          </div>
        </div>
        <div className="message-box">
          <div className="message-content">
            <div className="message-header">
              <div className="name">$ 34,99</div>
            </div>
            <p className="message-line">Target</p>
            <p className="message-line time">march, 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceSection;
