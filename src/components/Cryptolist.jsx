import React, { useState, useEffect } from "react";
import { fetchCryptos } from "../api/cryptoapi";
import "../css/Cryptolist.css";

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const getCryptos = async () => {
      const cryptoData = await fetchCryptos();
      setCryptos(cryptoData.slice(0, 11));
    };

    getCryptos();
  }, []);

  return (
    <div className="cryptoContainer">
      {cryptos.map((crypto) => (
        <div key={crypto.id} className="cryptoRow">
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
          <div className="cryptoPrice">
            {crypto.priceUsd && `$${Number(crypto.priceUsd).toFixed(2)}`}
          </div>
          <div className="cryptoChange">
            {crypto.changePercent24Hr &&
              `${Number(crypto.changePercent24Hr).toFixed(2)}%`}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
