import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // ✅ import navigate
import DestinationCard from './Destinationcard';

const destinations = [
  { image: 'island.jpg', title: 'Island', listings: 22 },
  { image: 'Nepal.avif', title: 'Nepal', listings: 22 },
  { image: 'Thailand.webp', title: 'Thailand', listings: 22 },
  { image: 'Maldvies.webp', title: 'Maldives', listings: 22 },
  { image: 'Krabi.avif', title: 'Krabi', listings: 22 },
  { image: 'bali.avif', title: 'Bali', listings: 22 },
  { image: 'jaipur.avif', title: 'Jaipur', listings: 22 },
];

const CARD_WIDTH = 300;

const PopularDestinations = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate(); // ✅

  useEffect(() => {
    const container = scrollRef.current;
    let scrollPos = 0;

    const interval = setInterval(() => {
      if (!container) return;

      scrollPos += CARD_WIDTH;

      if (scrollPos >= container.scrollWidth - container.clientWidth) {
        scrollPos = 0;
      }

      container.scrollTo({
        left: scrollPos,
        behavior: 'smooth',
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (title) => {
    navigate(`/destination`); // e.g. /destination/bali
  };

  return (
    <div className="text-center mb-24 -mt-10 ">
      <p className="text-xl text-gray-600">Top Destination</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Destination</h2>

      <div ref={scrollRef} className="overflow-x-scroll scrollbar-hide relative z-0">
        <div className="flex space-x-6 px-6 w-max relative z-0">
          {destinations.map((dest, index) => {
            const [zIndex, setZIndex] = React.useState(10);

            return (
              <motion.div
                key={index}
                className="relative cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ zIndex }}
                onHoverStart={() => setZIndex(30)}
                onHoverEnd={() => setZIndex(10)}
                onClick={() => handleCardClick(dest.title)} // ✅ click event
              >
                <DestinationCard {...dest} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
