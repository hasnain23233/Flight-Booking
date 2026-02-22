import React from "react";

const CircularGraph = ({ value = 2, max = 10 }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / max) * circumference;

  return (
    <div className="relative flex flex-col items-center w-32">
      <svg
        className="w-44 h-44 transform -rotate-90"
        viewBox="0 0 100 100"
      >
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#E9EBF0"
          strokeWidth="10"
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#00AEEF"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
        />
      </svg>

      {/* Center Text (Number) */}
      <div className="absolute top-0 flex items-center justify-center w-44 h-44">
        <span className="text-[#00AEEF] text-5xl font-bold">{value}</span>
      </div>

      {/* Bottom Label */}
      <p className="mt-2 text-sm text-gray-400">{`0/${max}`}</p>
    </div>
  );
};

export default CircularGraph;