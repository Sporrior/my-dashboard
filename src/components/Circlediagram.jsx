import React, { useState, useEffect } from 'react';
import '../css/Circlediagram.css';

const CircleDiagram = () => {
  const radius = 40;
  const strokeWidth = 8;
  const [percentage, setPercentage] = useState(0);
  const [textColor, setTextColor] = useState('black');

  useEffect(() => {
    const randomPercentage = Math.floor(Math.random() * 201) - 100;
    setPercentage(randomPercentage);
    setTextColor(randomPercentage >= 0 ? 'green' : 'red');
  }, []);

  const dashOffset = 100 - percentage;

  return (
    <div className="circle-diagram-container">
      <svg viewBox="0 0 100 100" className="circle-diagram">
        <circle cx="50" cy="50" r={radius} fill="transparent" stroke="#ddd" strokeWidth={strokeWidth} />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="#0047AB"
          strokeWidth={strokeWidth}
          strokeDasharray={2 * Math.PI * radius}
          strokeDashoffset={(dashOffset * 2 * Math.PI * radius) / 100}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
        />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="percentage" fill={textColor}>
          {percentage >= 0 ? '+' : ''} {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircleDiagram;
