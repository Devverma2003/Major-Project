import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookNow.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";

const BookNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, description, image, price, passengers, date: tripDate } = location.state || {};
  const today = new Date().toISOString().split("T")[0];

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    people: "",
    date: "",
  });

  const [total, setTotal] = useState(() => {
    if (passengers && price) {
      const priceValue = parseFloat(price.replace(/[^\d.-]/g, ""));
      return priceValue * passengers;
    }
    return 0;
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setErrors({
      name: "",
      email: "",
      phone: "",
      people: "",
      date: "",
    });

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const people = e.target.people.value;
    const date = e.target.date.value;

    let formValid = true;

    if (!name) {
      setErrors((prev) => ({ ...prev, name: "Name is required." }));
      formValid = false;
    }

    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email is required." }));
      formValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email." }));
      formValid = false;
    }

    if (!phone) {
      setErrors((prev) => ({ ...prev, phone: "Phone number is required." }));
      formValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid 10-digit phone number.",
      }));
      formValid = false;
    }

    if (!people || people <= 0) {
      setErrors((prev) => ({
        ...prev,
        people: "Please enter a valid number of people.",
      }));
      formValid = false;
    }

    if (!date) {
      setErrors((prev) => ({
        ...prev,
        date: "Please select a date.",
      }));
      formValid = false;
    }

    if (formValid) {
      alert("Booking Confirmed!");
      navigate("/");
    }
  };

  const handlePeopleChange = (e) => {
    const numberOfPeople = e.target.value;
    const priceValue = parseFloat(price?.replace(/[^\d.-]/g, ""));
    if (numberOfPeople > 0 && !isNaN(priceValue)) {
      setTotal(numberOfPeople * priceValue);
    } else {
      setTotal(0);
    }
  };

  return (
    <>
      <Navbar />
<div className="mybody bg-slate-100 min-h-screen flex items-center justify-center px-4 pt-16 sm:pt-8">
  <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 text-center">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl mb-4"
              />
            ) : (
              <p className="text-red-500">Image not available</p>
            )}
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-800">{title || "Trip Title"}</h2>
            <p className="text-sm sm:text-base text-zinc-700 mt-2">
              {description || "Trip description not available."}
            </p>
            <p className="text-lg font-semibold mt-2 text-zinc-800">{price || "₹0"}</p>
            <p className="text-base text-zinc-600">Duration: 5 days</p>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl sm:text-2xl text-zinc-800 font-bold mb-4 text-center">
              Complete Your Booking
            </h3>
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 rounded bg-white/90 text-black border border-gray-300"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="number"
                  name="people"
                  placeholder="Total Number of People"
                  defaultValue={passengers || ""}
                  onChange={handlePeopleChange}
                  className="w-full p-3 rounded bg-white/90 text-black border border-gray-300"
                />
                {errors.people && <p className="text-red-500 text-sm">{errors.people}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded bg-white/90 text-black border border-gray-300"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="w-full p-3 rounded bg-white/90 text-black border border-gray-300"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              <div>
                <input
                  type="date"
                  name="date"
                  defaultValue={tripDate || today}
                  className="w-full p-3 rounded bg-white/90 text-black border border-gray-300"
                />
                {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
              </div>

              <div className="text-center mt-4">
                <p className="text-lg sm:text-xl font-bold text-black">Total: ₹{total}</p>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 text-white text-center py-3 rounded hover:bg-cyan-600 transition-colors duration-300 flex justify-center items-center"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookNow;
