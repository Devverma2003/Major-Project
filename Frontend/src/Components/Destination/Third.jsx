import React from "react";

const stats = [
  { value: "12", label: "Years Experience", dotPos: "bottom-[6px] left-[6px]", position: "translate-y-4 md:translate-y-8" },
  { value: "97%", label: "Retention Rate", dotPos: "top-[6px] left-[6px]", position: "-translate-y-4 md:-translate-y-8" },
  { value: "8k", label: "Tour Completed", dotPos: "bottom-[6px] left-[6px]", position: "translate-y-4 md:translate-y-8" },
  { value: "19k", label: "Happy Travellers", dotPos: "top-[6px] left-[6px]", position: "-translate-y-4 md:-translate-y-8" },
];

const StatCard = ({ value, label, dotPos, position }) => (
  <div
    className={`relative z-10
      w-24 sm:w-28 md:w-36 lg:w-44 
      aspect-square 
      rounded-full border-[3px] border-cyan-500 
      flex flex-col items-center justify-center text-center bg-cyan-50 shadow-inner
      transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg
      ${position}
    `}
  >
    <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
      {value}
    </div>
    <div className="text-[10px] sm:text-sm md:text-base text-black mt-1">{label}</div>
    <div
      className={`absolute bg-cyan-500 rounded-full 
        w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-[15px] lg:h-[15px] 
        ${dotPos}`}
    />
  </div>
);

const StatsSection = () => {
  return (
    <div className="section3 relative z-10 flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 py-10 sm:py-14 lg:py-20 bg-[#F9F9FB] font-semibold text-center lg:text-left mb-32">
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
