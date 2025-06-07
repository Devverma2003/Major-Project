import React from "react";

const images = [
  "https://images.unsplash.com/photo-1571912104782-a7a79373e579?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1661902268742-7cfdaffdfe6b?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1619944798257-66ce8a9973e6?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1675484743424-288808877324?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1676885540188-0044057cc684?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1627597689412-a318c3847d50?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1728040952526-15abb99d2891?w=600&auto=format&fit=crop&q=60"
];

export default function TravelGallery() {
  return (
<div className="mt-20 section2 flex items-center justify-center flex-col px-4 relative z-20">
  <h1 className="font-script text-3xl sm:text-4xl text-center font-medium">
    Make Your Town More Pleasant
  </h1>
  <h1 className="text-4xl sm:text-5xl text-center font-medium mt-2">
    Recent Gallery
  </h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-20 max-w-7xl w-full mx-auto">
        {/* Image 1 */}
        <div className="w-full">
          <img
            src={images[0]}
            alt="img1"
            className="rounded-2xl shadow-md object-cover w-full h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 transition-transform duration-300 transform hover:scale-110"
          />
        </div>

        {/* Image 2 & 3 stacked */}
        <div className="flex flex-col gap-4">
          <img
            src={images[1]}
            alt="img2"
            className="rounded-2xl shadow-md object-cover w-full h-36 sm:h-40 md:h-44 lg:h-48 transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={images[2]}
            alt="img3"
            className="rounded-2xl shadow-md object-cover w-full h-36 sm:h-40 md:h-44 lg:h-48 transition-transform duration-300 transform hover:scale-110"
          />
        </div>

        {/* Tall Image */}
        <div className="w-full">
          <img
            src={images[3]}
            alt="img4"
            className="rounded-2xl shadow-md object-cover w-full h-72 sm:h-80 md:h-[22rem] transition-transform duration-300 transform hover:scale-110"
          />
        </div>

        {/* Image 5 & 6 stacked */}
        <div className="flex flex-col gap-4">
          <img
            src={images[4]}
            alt="img5"
            className="rounded-2xl shadow-md object-cover w-full h-36 sm:h-40 md:h-44 lg:h-48 transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={images[5]}
            alt="img6"
            className="rounded-2xl shadow-md object-cover w-full h-36 sm:h-40 md:h-44 lg:h-48 transition-transform duration-300 transform hover:scale-110"
          />
        </div>

        {/* Last Image */}
        <div className="w-full">
          <img
            src={images[6]}
            alt="img7"
            className="rounded-2xl shadow-md object-cover w-full h-36 sm:h-40 md:h-44 lg:h-48 transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
