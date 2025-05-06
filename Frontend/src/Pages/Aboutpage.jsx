import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";

const Aboutpage = () => {
  const testimonials = [
    {
      name: "Angelina Rose",
      role: "Traveler",
      quote: "Solar panels adorn the roof, harnessing renewable energy to power the home and even feed excess electricity back into the grid.",
      image: "C1.avif",
      profileTag: "Eco Enthusiast",
      rating: 5,
    },
    {
      name: "Franklin Smith",
      role: "Traveler",
      quote: "A home that perfectly blends sustainability with luxury until discovered Ecoland Residence.",
      image: "C2.avif",
      profileTag: "Adventure Seeker",
      rating: 4,
    },
    {
      name: "Maria Doe",
      role: "Traveler",
      quote: "The home boasts sleek, contemporary architecture with clean lines and expansive windows.",
      image: "C3.avif",
      profileTag: "Modern Architect",
      rating: 5,
    },
    {
      name: "John Doe",
      role: "Business Owner",
      quote: "A sustainable approach to design has made my home more energy-efficient while still maintaining a modern aesthetic.",
      image: "C4.avif",
      profileTag: "Sustainability Advocate",
      rating: 4,
    },
    {
      name: "Sophia Lee",
      role: "Traveler",
      quote: "The house not only blends perfectly with the environment but also offers top-notch luxury living.",
      image: "C5.avif",
      profileTag: "Nature Lover",
      rating: 5,
    },
    {
      name: "Liam Johnson",
      role: "Photographer",
      quote: "Every corner of this space inspires creativity – the blend of modern design with nature’s beauty is simply mesmerizing.",
      image: "C6.avif",
      profileTag: "Creative Mind",
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3) % testimonials.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <div className="transition-all duration-700 ease-in-out">
      <Navbar />
      <div className="bg-blue-50 text-black">

        {/* About Us Section */}
        <section
          className="relative h-[100vh] bg-cover bg-center flex items-center justify-center mt-16"
          style={{ backgroundImage: 'url(abbackground.jpg)' }}  
        >
          <div className="text-center">
            <h1 className="text-9xl font-bold text-white mb-4 font-serif">About Us</h1>
          </div>
        </section>

        {/* Our Popular Tour Plans Section */}
        <section
        
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left: Polaroid-style images */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
              <div className="absolute top-0 left-10 transform -rotate-6 shadow-lg z-10">
                <img
                  src="tourplanA.avif"
                  alt="Tour Plan 1"
                  className="w-56 h-72 object-cover rounded-lg border-4 border-white"
                />
              </div>
              <div className="left-28 transform rotate-3 shadow-xl z-0">
                <img
                  src="tourplanB.avif"
                  alt="Tour Plan 2"
                  className="w-56 h-72 object-cover rounded-lg border-4 border-white"
                />
              </div>
              <div className="invisible lg:visible w-0 h-0"></div>
            </div>

            {/* Right: Text and Circular Stats */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Popular Tour Plans</h2>
              <p className="text-gray-700 text-lg mb-8">
                Explore the most loved tour categories, chosen by thousands of happy travelers around the world.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-400 flex items-center justify-center text-blue-700 font-bold text-xl shadow-md">
                    78%
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Vacation</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-pink-400 flex items-center justify-center text-pink-600 font-bold text-xl shadow-md">
                    55%
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Honeymoon</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-purple-400 flex items-center justify-center text-purple-600 font-bold text-xl shadow-md">
                    30%
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Medical Visits</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-20 bg-blue-50 text-center">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-10">What Our Clients Say</h2>

          <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-blue-500"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-black">{testimonial.name}</h3>
                  <p className="text-blue-600 text-sm mt-1">{testimonial.role}</p>
                  <p className="italic text-sm text-gray-500 mt-1">{testimonial.profileTag}</p>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">“{testimonial.quote}”</p>

                  {/* Rating Section */}
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star text-sm ${
                          i < testimonial.rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-6 mt-8">
              <button
                onClick={prevSlide}
                className="bg-white border border-blue-300 text-blue-600 px-4 py-2 rounded-full shadow hover:bg-blue-100 transition"
              >
                Prev
              </button>
              <button
                onClick={nextSlide}
                className="bg-white border border-blue-300 text-blue-600 px-4 py-2 rounded-full shadow hover:bg-blue-100 transition"
              >
                Next
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Aboutpage;
