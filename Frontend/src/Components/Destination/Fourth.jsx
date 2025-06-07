import React from "react";
import Card from "./cards";

const fourth = () => {
  return (
    <>
      <div className="section4 relative mt-80 md:mt-0">
        {" "}
        <h1 className="font-script text-3xl md:text-4xl mt-10 text-center font-medium z-10">
          Meet with Guide
        </h1>
        <h1 className="text-4xl md:text-5xl text-center font-medium z-10">
          Tour Guide
        </h1>
        <div className="w-full px-4 py-10">
          <Card />
        </div>
      </div>
    </>
  );
};

export default fourth;
