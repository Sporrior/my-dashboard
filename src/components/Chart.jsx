import React from 'react';
import '../css/Chart.css';
import TradeViewChart from 'react-crypto-chart';

export default function Chart() {
  return (
    <div className="parent">
      <div className="chart-container">
        <div className="chart">
          <h3>BTC/USDT</h3>
          <TradeViewChart
            containerStyle={{
              minHeight: '300px',
              minWidth: '400px',
              marginBottom: '30px',
            }}
            pair="BTCUSDT"
          />
        </div>
        <div className="chart">
          <h3>ADA/USDT</h3>
          <TradeViewChart
            containerStyle={{
              minHeight: '300px',
              minWidth: '400px',
              marginBottom: '30px',
            }}
            pair="ADAUSDT"
          />
        </div>
        <div className="chart">
          <h3>ETH/USDT</h3>
          <TradeViewChart
            containerStyle={{
              minHeight: '300px',
              minWidth: '400px',
              marginBottom: '30px',
            }}
            pair="ETHUSDT"
          />
        </div>
      </div>
    </div>
  );
}
