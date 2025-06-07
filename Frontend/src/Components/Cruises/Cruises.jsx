import React from "react";
import "./Cruises.css"; // rename CSS file if needed
import CruiseCards from "./CruisesCards"; // cruise version of cards
import Navbar from "../Navbar/Navbar";
import CruiseActivities from "./Cruisesexploreactivities"; // cruise version of activities
import Footer from "../Footer";

const Cruises = () => {
  return (
    <>
      <Navbar />
      <div className="section1">
        <h1 className="font-script text-4xl mt-24 text-center font-medium ">
          "Top cruise experiences for unforgettable ocean adventures."
        </h1>
        <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
          Explore the most luxurious and scenic cruises, perfect for ocean lovers and adventure seekers. Sail through breathtaking coastlines, visit exotic islands, and enjoy world-class amenities onboard.
        </p>
        <CruiseCards />
      </div>
      <div className="h-screen w-full mt-80">
        <CruiseActivities />
      </div>
    </>
  );
};

export default Cruises;

