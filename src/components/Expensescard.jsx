import React from "react";
import "../css/Expensescard.css";

const Exspensescard = () => {
  const cardsData = [
    { title: "Weekly", value: "$2490", color: "green" },
    { title: "Monthly", value: "$9361", color: "red" },
    { title: "Yearly", value: "$125.763", color: "blue" }
  ];

  return (
    <div className="Expensescard">
      {cardsData.map((card, index) => (
        <div key={index} className={`custom-card ${card.color}`}>
          <div className="custom-header">
            <h3>{card.title}</h3>
          </div>
          <div className="custom-value">{card.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Exspensescard;
