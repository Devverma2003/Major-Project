import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActivityList from "./Activities";


const Wildlifecards = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      image: "wild1.avif",
      title: "Jim Corbett National Park ",
      description: "Uttarakhand",
      price: "₹2000/person",
    },
    {
      image: "wild2.JPG",
      title: "Kaziranga National Park ",
      description: "Assam",
      price: "₹2500/person",
    },
    {
      image: "wild3.avif",
      title: "Sundarbans National Park",
      description: "West Bengal",
      price: "₹2500/person",
    },
    {
      image: "wild4.avif",
      title: "Gir National Park",
      description: "Gujrat",
      price: "₹2000/person",
    },
    {
      image: "wild5.webp",
      title: "Hemis National Park ",
      description: "Ladakh",
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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="relative z-10 mt-10 px-4">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg max-w-[350px] mx-auto">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                  <p className="text-black font-bold">{card.price}</p>

                  {/* 🧭 Activity Icons */}
                 <ActivityList/>

                  <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <img src="/clock.png" className="w-4 h-4" alt="duration" />
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
                      className="border px-4 py-1 rounded-lg text-sm hover:bg-cyan-400 transition-colors duration-300"
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
    </div>
  );
};

export default Wildlifecards;
