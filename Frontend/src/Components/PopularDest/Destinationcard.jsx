import React from 'react';
import { motion } from 'framer-motion';

const DestinationCard = ({ image, title, listings, isActive }) => {
  return (
    <motion.div
      className={`
        relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 shrink-0
        ${isActive ? 'scale-105 z-20 ring-2 ring-white/60' : 'scale-95 z-10'}
        w-64 h-96 mx-4
      `}
      whileHover={{ scale: 1.07 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="absolute bottom-4 left-4 text-white z-10">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">{listings} Listings</p>
      </div>

      <button
        className="
          absolute bottom-4 right-4 bg-white text-gray-700 px-4 py-1 rounded-full text-sm shadow
          hover:text-white transition-all duration-300
        "
      >
        View All →
      </button>
    </motion.div>
  );
};

export default DestinationCard;
