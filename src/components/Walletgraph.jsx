import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "../css/Walletgraph.css";

const WalletGraph = () => {
  const chartRef = useRef(null);

  const getMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber);
    return date.toLocaleString("default", { month: "long" });
  };

  const generateLabels = () => {
    const currentMonth = new Date().getMonth();
    return Array.from({ length: 7 }, (_, i) =>
      getMonthName(currentMonth - i)
    ).reverse();
  };

  const [data, setData] = useState({
    labels: generateLabels(), 
    datasets: [
      {
        label: "Wallet Balance (€)",
        data: [], // Data will be set using a useEffect hook
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
        pointBackgroundColor: "white",
        pointBorderColor: "rgb(75, 192, 192)",
        pointHoverBackgroundColor: "rgb(75, 192, 192)",
        pointHoverBorderColor: "white",
      },
    ],
  });

  const generateData = () => {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 50000));
  };

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
      gradientFill.addColorStop(0, "rgba(75, 192, 192, 0.8)");
      gradientFill.addColorStop(1, "rgba(75, 192, 192, 0.05)");

      setData((currentData) => ({
        ...currentData,
        datasets: currentData.datasets.map((dataset) => ({
          ...dataset,
          data: generateData(),
          backgroundColor: gradientFill,
        })),
      }));
    }
  }, []);

  const currentMonthBalance = data.datasets[0].data[6];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          padding: 20,
          color: "#ffffff",
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": €";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toFixed(2);
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
    elements: {
      point: {
        radius: 5,
        hoverRadius: 7,
        pointStyle: "circle",
      },
      line: {
        borderWidth: 2,
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
    },
  };

  return (
    <div className="walletGraphContainer">
      <h2>
        Balans: €
        {currentMonthBalance
          ? currentMonthBalance.toLocaleString()
          : "Loading..."}
      </h2>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default WalletGraph;
