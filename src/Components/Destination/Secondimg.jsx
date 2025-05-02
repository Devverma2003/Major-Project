import React from "react";

const images = [
  "https://images.unsplash.com/photo-1571912104782-a7a79373e579?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZW50dXJlfGVufDB8fDB8fHww", // Col 1
  "https://plus.unsplash.com/premium_photo-1661902268742-7cfdaffdfe6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D", // Col 2 top
  "https://images.unsplash.com/photo-1619944798257-66ce8a9973e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D", // Col 2 bottom
  "https://plus.unsplash.com/premium_photo-1675484743424-288808877324?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWR2ZW50dXJlfGVufDB8fDB8fHww", // Col 3 tall
  "https://plus.unsplash.com/premium_photo-1676885540188-0044057cc684?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D", // Col 4 top
  "https://images.unsplash.com/photo-1627597689412-a318c3847d50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D", // Col 4 bottom
  "https://plus.unsplash.com/premium_photo-1728040952526-15abb99d2891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D"  // Col 5
];

export default function TravelGallery() {
  return (
    <>
    
    <div className="mt-10  section2 flex items-center justify-center 	flex-col p-4">
    <h1 className='font-script text-4xl mt-10 text-center font-medium '>Make Youn Town Mone Pleasure</h1>
      <h1 className=' text-5xl  text-center font-medium  '> 
      Recent Gallery
      </h1>
      <div className="grid grid-cols-5 gap-4 mt-32 max-w-7xl w-full">
        {/* Left Column */}
        <div className="col-span-1 row-span-2">
          <img src={images[0]} alt="img1" className="rounded-2xl shadow-md object-cover w-full h-36 mt-14 transition-transform duration-300 transform hover:scale-110 " />
        </div>

        {/* Right Column (Top and Bottom images) */}
        <div className="flex flex-col gap-4 col-span-1">
          <img src={images[1]} alt="img2" className="rounded-2xl shadow-md object-cover w-full h-36 transition-transform duration-300 transform hover:scale-110 " />
          <img src={images[2]} alt="img3" className="rounded-2xl shadow-md object-cover w-full h-36 transition-transform duration-300 transform hover:scale-110 " />
        </div>

        {/* Center Column (Tall Image) */}
        <div className="col-span-1 row-span-2">
          <img src={images[3]} alt="img4" className="rounded-2xl shadow-md object-cover w-full h-80 -mt-4 transition-transform duration-300 transform hover:scale-110" />
        </div>

        {/* Right Column (Top and Bottom images) */}
        <div className="flex flex-col gap-4 col-span-1">
          <img src={images[4]} alt="img5" className="rounded-2xl shadow-md object-cover w-full h-36 transition-transform duration-300 transform hover:scale-110 " />
          <img src={images[5]} alt="img6" className="rounded-2xl shadow-md object-cover w-full h-36 transition-transform duration-300 transform hover:scale-110 " />
        </div>

        {/* Right Column (Last Image) */}
        <div className="col-span-1 row-span-2">
          <img src={images[6]} alt="img7" className="rounded-2xl shadow-md object-cover transition-transform duration-300 transform hover:scale-110 w-full h-36 mt-14" />
        </div>
      </div>
    </div>
    </>
  );
}
