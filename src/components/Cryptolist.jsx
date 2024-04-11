import React, { useState, useEffect } from "react";
import { fetchCryptos } from "../api/cryptoapi";
import "../css/Cryptolist.css";

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const getCryptos = async () => {
      try {
        const cryptoData = await fetchCryptos();
        setCryptos(cryptoData);
      } catch (error) {
        console.error("Error fetching cryptocurrencies:", error);
      }
    };

    getCryptos();

    const intervalId = setInterval(getCryptos, 300);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="cryptoContainer">
      <div className="Cryptolistheader">
        <h3>Coins</h3>
      </div>
      {cryptos.map((crypto) => (
        <div key={crypto.symbol} className="cryptoRow">
          <div className="cryptoRank">{crypto.rank}</div>
          <div className="cryptoInfo">
            <img
              src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
              alt={crypto.name}
              className="cryptoIcon"
            />
            <div className="cryptoName">
              {crypto.name} ({crypto.symbol})
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
