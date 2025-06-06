import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [passengers, setPassengers] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!from.trim()) {
      alert("Please enter a valid 'From' location.");
      return;
    }

    if (!to.trim()) {
      alert("Please enter a valid 'To' location.");
      return;
    }

    if (!passengers || Number(passengers) <= 0) {
      alert("Please enter a valid number of passengers greater than 0.");
      return;
    }

    if (!date) {
      alert("Please select a date.");
      return;
    }

    // Optional: check if date is not in the past
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // reset time to compare only dates

    if (selectedDate < today) {
      alert("Please select a valid date (not in the past).");
      return;
    }

    // If all validations pass, navigate
    navigate(
      `/destination?from=${encodeURIComponent(from)}&to=${encodeURIComponent(
        to
      )}&passengers=${passengers}&date=${date}`
    );
  };

  return (
    <div className="w-full hero relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1710915322794-150ce2f4aa9a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbCUyMG1vdW50YWluJTIwdmlld3N8ZW58MHx8MHx8fDA%3D)",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center pt-56 px-4 h-full">
        <h1 className="text-white text-3xl sm:text-5xl font-bold">
          Explore the Beauty of the Whole World
        </h1>
        <h2 className="text-white mt-4 text-lg sm:text-xl font-medium">
          "Get unforgettable pleasure with us!"
        </h2>

        {/* Form */}
        <div className="w-full max-w-6xl mt-80 px-4">
          <form
            onSubmit={handleSubmit}
            className="form flex flex-wrap sm:flex-nowrap items-center justify-between border-4 rounded-xl gap-4 bg-white p-4"
          >
            <input
              type="text"
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="flex-1 min-w-[160px] border-2 text-xl text-center border-gray-200 p-2 rounded-lg text-black placeholder-black"
            />

            <input
              type="text"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="flex-1 min-w-[160px] border-2 text-xl text-center border-gray-200 p-2 rounded-lg text-black placeholder-black"
            />

            <input
              type="number"
              placeholder="Passengers"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="flex-1 min-w-[160px] border-2 text-xl text-center border-gray-200 p-2 rounded-lg text-black placeholder-black"
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="flex-1 min-w-[160px] border-2 text-xl text-center border-gray-200 p-2 rounded-lg text-black"
            />

            <button
              type="submit"
              className="flex-shrink-0 frmbtn text-white font-semibold px-6 py-2 rounded-full shadow transition-all duration-300 flex items-center justify-center"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
