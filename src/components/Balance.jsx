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

  return (
    <div className="Balance">
      <h3>Total Balance</h3>
      <h3>${balance.toLocaleString()}</h3>
    </div>
  );
};

export default Balance;
