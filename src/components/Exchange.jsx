import React, { useState, useEffect } from "react";
import "../css/Exchange.css";
import { fetchExchangeRates } from "../api/Exchangeapi";

const Exchangerate = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("");

  useEffect(() => {
    const getExchangeRates = async () => {
      const data = await fetchExchangeRates();
      const filteredRates = Object.keys(data.rates)
        .filter((key) => ["USD", "EUR", "GBP", "JPY"].includes(key))
        .reduce((obj, key) => {
          obj[key] = data.rates[key];
          return obj;
        }, {});
      setExchangeRates(filteredRates);
      setBaseCurrency(data.base);
    };

    getExchangeRates();
  }, []);

  return (
    <div className="exchangeRatesContainer">
      <h2>Exchange Rates</h2>
      <div>Standaard valuta: 1,00 {baseCurrency}</div>
      {Object.entries(exchangeRates).map(([currency, rate]) => (
        <div key={currency} className="exchangeRateRow">
          <span className="currency">{currency}: </span>
          <span className="rate">{rate}</span>
        </div>
      ))}
    </div>
  );
};

export default Exchangerate;
