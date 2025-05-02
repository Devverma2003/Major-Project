import React from "react";
import { NavLink } from "react-router-dom";
import './Hero.css'
const Hero = () => {
  return (
    <div className="w-full hero relative">
      
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1710915322794-150ce2f4aa9a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbCUyMG1vdW50YWluJTIwdmlld3N8ZW58MHx8MHx8fDA%3D)",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center pt-56 px-4 h-full">
        <h1 className="text-white text-3xl sm:text-5xl font-bold">
          Explore the Beauty of the Whole World
        </h1>
        <h2 className="text-white mt-4 text-lg sm:text-xl font-medium">
          "Get unforgettable pleasure with us!"
        </h2>

        {/* Form */}
        <div className="w-full max-w-5xl mt-80 px-4">
          <form className="flex flex-col sm:flex-row form border-4 rounded-xl flex-wrap gap-4 bg-white p-4">
            {/* From Input */}
            <div className="relative w-full sm:w-auto flex-1">
              <input
                type="text"
                placeholder="From"
                className="w-full border-2 text-xl text-center border-gray-200 p-2 rounded-lg text-black placeholder-black"
              />
            </div>

            {/* To Input */}
            <div className="relative w-full sm:w-auto flex-1">
              <input
                type="text"
                placeholder="To"
                className="w-full border-2 text-xl text-center border-gray-200 p-2 rounded-lg text-black placeholder-black"
              />
            </div>

            {/* Passengers Input */}
            <div className="relative w-full sm:w-auto flex-1">
              <input
                type="number"
                placeholder="Passengers"
                className="w-full border-2 text-xl text-center border-gray-200 p-2 rounded-lg text-black placeholder-black"
              />
            </div>

            {/* Date Input */}
            <div className="relative w-full sm:w-auto flex-1">
              <input
                type="date"
                className="w-full border-2 text-xl text-center border-gray-200 p-2 rounded-lg text-black"
              />
            </div>

            {/* Submit Button */}
            <div className="w-full sm:w-auto mt-2 sm:mt-6">
              <NavLink to="/Ride">
                <button
                  type="submit"
                  className="w-full frmbtn sm:w-auto flex items-center justify-center  text-white font-semibold px-6 -mt-5 rounded-full shadow transition-all duration-300"
                >
                  Search
                  <svg
                    className="w-5 h-6 ml-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
