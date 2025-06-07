import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActivityList from "./Cruisesactivity";

const Wildlifecards = () => {
  const navigate = useNavigate();

 const cardData = [
    {
      image: "cruises1.jpg",
      title: "Goa Luxury Cruise",
      description: "Mumbai to Goa",
      price: "₹4500/person",
    },
    {
      image: "cruises2.jpg",
      title: "Sundarban River Cruise",
      description: "West Bengal",
      price: "₹4000/person",
    },
    {
      image: "cruises3.jpg",
      title: "Andaman Island Cruise",
      description: "Port Blair Round Trip",
      price: "₹6000/person",
    },
    {
      image: "cruises4.jpg",
      title: "Lakshadweep Cruise",
      description: "Cochin to Lakshadweep",
      price: "₹5500/person",
    },
    {
      image: "cruises5.jpg",
      title: "Backwater Houseboat",
      description: "Alleppey, Kerala",
      price: "₹3000/person",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
  { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
  { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false } }
]

  };

  return (
    <div className="relative z-10 mt-10 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="px-1 sm:px-3">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg max-w-xs sm:max-w-[350px] mx-auto">
                <img
                  src={`/${card.image}`}
                  alt={card.title}
                  className="h-48 sm:h-56 w-full object-cover"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.description}</p>
                  <p className="text-black font-bold">{card.price}</p>

                  <ActivityList />

                  <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-600 gap-2">
                    <span className="flex items-center gap-1">
                      <img
                        src="/clock.png"
                        className="w-4 h-4"
                        alt="duration"
                      />
                      5 days
                    </span>
                    <button
                      onClick={() =>
                        navigate("/book-now", {
                          state: {
                            title: card.title,
                            description: card.description,
                            image: card.image,
                            price: card.price,
                          },
                        })
                      }
                      className="border px-4 py-1 rounded-lg text-sm transition-colors duration-300"
                    >
                      Book Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Hide horizontal scroll bar and fix left animation space */}
      <style>{`
        .slick-slider {
          overflow: visible !important;
          margin-left: 0 !important;
        }
        .slick-list {
          overflow-x: hidden !important;
          margin-left: 0 !important;
        }
        .slick-slide {
          margin-left: 0 !important;
        }
        body {
          overflow-x: hidden !important;
        }
      `}</style>
    </div>
  );
};

export default Wildlifecards;
