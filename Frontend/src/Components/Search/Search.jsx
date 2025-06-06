import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Search.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";

const tripData = [
  {
    title: "Spectacular Krabi & Phuket Getaway",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    from: "Delhi",
    to: "Krabi",
    passengers: 2,
    date: "2025-06-15",
    price: "₹25000",
    description: "Enjoy the beaches and vibrant culture of Krabi and Phuket."
  },
  {
    title: "Bangkok & Pattaya Tour",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    from: "Mumbai",
    to: "Bangkok",
    passengers: 3,
    date: "2025-07-10",
    price: "₹22000",
    description: "Explore the bustling streets and nightlife of Thailand."
  },
  {
    title: "Bali Island Escape",
    image: "https://images.unsplash.com/photo-1619521457224-732ca794b37c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmFsaSUyMElzbGFuZCUyMEVzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
    from: "Chennai",
    to: "Bali",
    passengers: 2,
    date: "2025-08-01",
    price: "₹28000",
    description: "Relax on the serene beaches of Bali and explore the temples."
  },
  {
    title: "Explore the Maldives",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    from: "Kolkata",
    to: "Maldives",
    passengers: 4,
    date: "2025-06-20",
    price: "₹35000",
    description: "Luxury escape in overwater villas and turquoise lagoons."
  },
  {
    title: "Singapore Adventure",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126",
    from: "Hyderabad",
    to: "Singapore",
    passengers: 1,
    date: "2025-07-01",
    price: "₹30000",
    description: "Experience a blend of modern city life and culture."
  },
  {
    title: "Thailand Tropical Tour",
    image: "https://images.unsplash.com/photo-1532370184535-22cec5ca8480?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhhaWxhbmQlMjBUcm9waWNhbCUyMFRvdXJ8ZW58MHx8MHx8fDA%3D",
    from: "Pune",
    to: "Thailand",
    passengers: 2,
    date: "2025-07-15",
    price: "₹24000",
    description: "An exotic journey through Thai beaches and cities."
  }
];

const Search = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.error(
      "No matching trips were found. Please choose an alternative destination or travel date."
    );
  }, []);

  const handleCardClick = (trip) => {
    navigate("/book-now", { state: trip });
  };

  return (
    <>
      <Navbar />
      <div className="bg">
      <div className="card-container">
        {tripData.map((trip, index) => (
          <div
            className="card"
            key={index}
            onClick={() => handleCardClick(trip)}
            style={{ cursor: "pointer" }}
          >
            <img src={trip.image} alt={trip.to} className="card-img" />
            <div className="card-content">
              <h2>{trip.title}</h2>
              <p><strong>From:</strong> {trip.from}</p>
              <p><strong>To:</strong> {trip.to}</p>
              <p><strong>Passengers:</strong> {trip.passengers}</p>
              <p><strong>Date:</strong> {trip.date}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
