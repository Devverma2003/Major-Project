import React from "react";

const stats = [
  { value: "12", label: "Years Experience", dotPos: "bottom-[6px] right-[6px]", position: "translate-y-12" },
  { value: "97%", label: "Retention Rate", dotPos: "top-[6px] right-[6px]", position: "-translate-y-12" },
  { value: "8k", label: "Tour Completed", dotPos: "bottom-[6px] right-[6px]", position: "translate-y-12" },
  { value: "19k", label: "Happy Travellers", dotPos: "top-[6px] right-[6px]", position: "-translate-y-12" },
];

const StatCard = ({ value, label, dotPos, position }) => (
  <div
    className={`
      relative mt-20 w-[200px] h-[200px] rounded-full border-[3px] border-cyan-500 
      flex flex-col items-center justify-center text-center bg-cyan-50 shadow-inner
      transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg
      ${position}
    `}
  >
    <div className="text-3xl font-bold text-black">{value}</div>
    <div className="text-sm text-black mt-1">{label}</div>
    <div className={`absolute w-[15px] h-[15px] bg-cyan-500 rounded-full ${dotPos}`} />
  </div>
);

const StatsSection = () => {
  return (
    <div className="flex section3 justify-center items-center gap-10 flex-wrap px-8 py-12 bg-[#F9F9FB] font-semibold min-h-full relative overflow-hidden">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          value={stat.value}
          label={stat.label}
          dotPos={stat.dotPos}
          position={stat.position}
        />
      ))}
    </div>
  );
};

export default StatsSection;
