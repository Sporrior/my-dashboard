import React from "react";
import "../css/List.css"; // Import CSS file for styling

const List = () => {
  const generateRandomTransactionAmount = () => {
    return (Math.random() * 100).toFixed(2); // Generating a random amount between 0 and 100 with 2 decimal places
  };

  // Array of transaction names
  const transactionNames = [
    "Ikea",
    "Bol.com",
    "Playstation Network",
    "Amazon",
    "eBay",
    "Walmart",
    "Target",
    "Best Buy",
    "Apple Store",
    "Google Store"
  ];

  return (
    <div className="list-container">
      <div className="recent-transactions">
        <div className="recent-transactions-title">Recent Transactions</div>
        <ul className="transaction-list">
          {/* Generate 10 <li> elements with different names */}
          {transactionNames.slice(0, 10).map((name, index) => (
            <li key={index}>
              {name} € {generateRandomTransactionAmount()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
