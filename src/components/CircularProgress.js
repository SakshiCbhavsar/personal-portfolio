import React from 'react';

const CircularProgress = ({ percentage, label }) => {
  const radius = 70; // Increased radius
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg
        height={radius * 2}
        width={radius * 2}
      >
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="url(#grad1)"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#AA367C', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#4A2FBD', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <text x="50%" y="50%" textAnchor="middle" stroke="#fff" strokeWidth="1px" dy=".3em" fontSize="20">
          {`${percentage}%`}
        </text>
      </svg>
      <h5>{label}</h5>
    </div>
  );
};

export default CircularProgress;
