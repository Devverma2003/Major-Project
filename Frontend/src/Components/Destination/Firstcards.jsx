import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Firstcards = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      image: "https://plus.unsplash.com/premium_photo-1661811412990-89e53022a6cc?q=80&w=2072&auto=format&fit=crop",
      title: "Ghorepani Poon Hill Trek",
      description: "Bhutan, Pokhara",
      price: "₹5600/person",
    },
    {
      image: "https://images.unsplash.com/photo-1668262121183-08bf7a35cc82?w=600&auto=format&fit=crop",
      title: "Goa Beach Escape",
      description: "Goa, India",
      price: "₹6000/person",
    },
    {
      image: "https://images.unsplash.com/photo-1625710338921-aae2ae99bbb8?w=600&auto=format&fit=crop",
      title: "Everest Base Camp Trek",
      description: "Manali, Himachal Pradesh",
      price: "₹2500/person",
    },
    {
      image: "https://images.unsplash.com/photo-1717323821798-8cee2f6826ff?w=600&auto=format&fit=crop",
      title: "Varanasi, Uttar Pradesh",
      description: "Spiritual city on the banks of the Ganges.",
      price: "₹2000/person",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661962404003-e0ca40da40ef?w=600&auto=format&fit=crop",
      title: "Jaipur, Rajasthan",
      description: "The Pink City with majestic forts.",
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
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative sm:mb-0 md:mb-0 lg:mb-0 mb-96 lg:-mt-48 py-20 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="px-3">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-2xl transition-shadow duration-300">
              <img src={card.image} alt={card.title} className="h-56 sm:h-64 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                <p className="text-gray-600 mt-1">{card.description}</p>
                <p className="text-black font-bold mt-2">{card.price}</p>
                <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <img src="/clock.png" alt="duration" className="w-4 h-4" />
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
                    className="border border-cyan-500 px-4 py-1 rounded-lg text-sm hover:bg-cyan-400 hover:text-white transition-colors duration-300"
                  >
                    Book Now!
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Firstcards;
