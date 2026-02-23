const dailyGraph = ({ value = 59, max = 100 }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / max) * circumference;

  return (
    <div className="relative flex justify-center m-auto flex-col items-center w-36 ">
      <svg
        className="w-28 h-28 transform -rotate-90"
        viewBox="0 0 100 100"
      >
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#E9EBF0"
          strokeWidth="11   "
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#00AEEF"
          strokeWidth="11"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
        />
      </svg>

      {/* Center Text (Number) */}
      <div className="absolute top-0 flex items-center justify-center w-28 h-28">
        <span className="text-[#00AEEF] text-3xl font-bold">{value}</span>
      </div>

      {/* Bottom Label */}
      <p className="mt-2 text-sm  text-white bg-[#00B4ED] p-2 rounded-lg"> 8 hrs 3 min / 8 hrs   </p>
    </div>
  );
};

export default dailyGraph;