import React, { useState, useEffect } from "react";
import "../css/Balance.css";

const Balance = () => {
  const [balance, setBalance] = useState(1000000);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.random();
      const increaseProbability = 0.5;
      const shouldIncrease = randomNumber < increaseProbability;
      const amount = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
      setBalance((prevBalance) =>
        shouldIncrease ? prevBalance + amount : prevBalance - amount
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatBalance = (balance) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(balance);
  };

  return (
    <div className="balance-card">
      <div className="balance-header">
        <h3>Total Balance</h3>
      </div>
      <div className="balance-amount">{formatBalance(balance)}</div>
    </div>
  );
};

export default Balance;
