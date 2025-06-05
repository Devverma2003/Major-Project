import React from 'react';

const DestinationCard = ({ image, title, listings }) => {
  return (
    <div
      className="
        relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 shrink-0
        w-64 h-96 mx-4
      "
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="absolute bottom-4 left-4 text-white z-10">
        <h3 className="text-xl  font-semibold">{title}</h3>
        
      </div>

    
    </div>
  );
};

export default DestinationCard;
