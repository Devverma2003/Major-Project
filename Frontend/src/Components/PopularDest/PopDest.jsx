import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import DestinationCard from './Destinationcard';

const destinations = [
  { image: 'island.jpg', title: 'Island', listings: 22 },
  { image: 'Nepal.avif', title: 'Nepal', listings: 22 },
  { image: 'Thailand.webp', title: 'Thailand', listings: 22, isActive: true },
  { image: 'Maldvies.webp', title: 'Maldives', listings: 22 },
  { image: 'Krabi.avif', title: 'Krabi', listings: 22 },
  { image: 'bali.avif', title: 'Bali', listings: 22 },
  { image: 'jaipur.avif', title: 'Jaipur', listings: 22 },
];

const CARD_WIDTH = 300; // Ensure this includes margin/padding

const PopularDestinations = () => {
  const scrollRef = useRef(null);

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

  return (
    <div className="text-center mb-24 -mt-10">
      <p className="text-xl text-gray-600">Top Destination</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Destination</h2>

      <div ref={scrollRef} className="overflow-x-scroll scrollbar-hide">
        <div className="flex space-x-6 px-6 w-max">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <DestinationCard {...dest} isActive={dest.isActive} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
