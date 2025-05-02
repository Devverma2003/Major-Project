import React, { useState } from 'react';

const NewsCard = ({ title, content, fullContent, img }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-blue-300">
      <img src={img} alt="News" className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">
          {expanded ? fullContent : content}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 mt-auto self-start transition-all duration-300"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

const Aboutpage = () => {
  const testimonials = [
    {
      name: "Angelina Rose",
      role: "Traveler",
      quote: "Solar panels adorn the roof, harnessing renewable energy to power the home and even feed excess electricity back into the grid.",
      image: "https://img.freepik.com/free-photo/stylish-girl-posing-with-travel-equipment-red-wall_1157-34334.jpg",
      profileTag: "Eco Enthusiast",
      rating: 5
    },
    {
      name: "Franklin Smith",
      role: "Traveler",
      quote: "A home that perfectly blends sustainability with luxury until discovered Ecoland Residence.",
      image: "https://img.freepik.com/free-photo/brunette-man-traveler-white-tee-sunglasses-smiles-near-airport_197531-23099.jpg",
      profileTag: "Adventure Seeker",
      rating: 4
    },
    {
      name: "Maria Doe",
      role: "Traveler",
      quote: "The home boasts sleek, contemporary architecture with clean lines and expansive windows.",
      image: "https://img.freepik.com/free-photo/front-view-young-female-red-shirt-with-hat-light-pink-background-human-color-woman_140725-70856.jpg",
      profileTag: "Modern Architect",
      rating: 5
    },
    {
      name: "Tom Cruise",
      role: "Traveler",
      quote: "Solar panels adorn the roof, harnessing renewable energy to power the home and even feed excess electricity back into the grid.",
      image: "https://img.freepik.com/free-photo/confident-young-handsome-curly-traveler-man-wearing-hat-taking-selfie-putting-hand-hat-with-suitcase-isolated-blue-space_141793-92032.jpg",
      profileTag: "Music Lover",
      rating: 4
    },
    {
      name: "Angellina Jolie",
      role: "Traveler",
      quote: "A home that perfectly blends sustainability with luxury until discovered Ecoland Residence.",
      image: "https://img.freepik.com/free-photo/happy-young-woman-sitting-rock-with-holding-binoculars_23-2147842487.jpg",
      profileTag: "Sustainable Design Advocate",
      rating: 3
    },
    {
      name: "Edward Smith",
      role: "Traveler",
      quote: "The home boasts sleek, contemporary architecture with clean lines and expansive windows.",
      image: "https://img.freepik.com/premium-photo/where-i-am-handsome-bearded-man-casual-wear-eyeglasses-pulling-his-luggage-holding-smartphone-while-walking-through-city-street-travel-concept-lifestyle_386167-2077.jpg",
      profileTag: "Architectural Visionary",
      rating: 5
    },
    {
      name: "Justin Bieber",
      role: "Traveler",
      quote: "Solar panels adorn the roof, harnessing renewable energy to power the home and even feed excess electricity back into the grid.",
      image: "https://img.freepik.com/free-photo/handsome-male-traveler-standing-near-sea-holding-map-hand-looking-away_23-2148148665.jpg",
      profileTag: "Global Traveler",
      rating: 4
    },
    {
      name: "Sarah Connor",
      role: "Traveler",
      quote: "A home that perfectly blends sustainability with luxury until discovered Ecoland Residence.",
      image: "https://img.freepik.com/free-photo/woman-looking-her-plane-tickets_23-2148521290.jpg",
      profileTag: "Sustainability Advocate",
      rating: 5
    },
    {
      name: "Natalie Portman",
      role: "Traveler",
      quote: "The home boasts sleek, contemporary architecture with clean lines and expansive windows.",
      image: "https://img.freepik.com/free-photo/female-tourists-spread-their-arms-held-their-wings_1150-7429.jpg",
      profileTag: "Luxury Enthusiast",
      rating: 4
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => setCurrentIndex(prev => (prev === 0 ? testimonials.length - 3 : prev - 3));
  const handleNext = () => setCurrentIndex(prev => (prev >= testimonials.length - 3 ? 0 : prev + 3));
  const totalPages = Math.ceil(testimonials.length / 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 text-gray-800">
      
      {/* Tagline above Clients Section */}
      <section className="py-16 text-center">
        <p className="italic text-xl mb-4">Your satisfaction is our top priority!</p>
        <h2 className="text-3xl font-bold mb-6 flex justify-center items-center">
          <i className="fas fa-plane-departure mr-2 text-blue-500"></i> What Clients Say About Us
        </h2>
        <div className="border-t-4 border-blue-500 w-24 mx-auto mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <div key={testimonial.name} className={`bg-white rounded-lg p-4 shadow-md max-w-sm mx-auto relative ${index % 2 === 0 ? 'min-h-[240px]' : 'min-h-[280px]'} transition-transform transform hover:scale-105 hover:shadow-xl hover:border-blue-300`}>
              <div className="flex justify-between items-start">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover transition-all duration-300 hover:scale-110" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" fill={i < testimonial.rating ? "yellow" : "gray"} viewBox="0 0 20 20" className="w-4 h-4 ml-1">
                      <path fillRule="evenodd" d="M10 15.27l5.18 3.73-1.64-6.91 5.06-4.73-6.91-.59L10 1 7.35 7.77 1.44 8.36l5.06 4.73-1.64 6.91L10 15.27z" />
                    </svg>
                  ))}
                </div>
              </div>
              <h3 className="font-semibold text-lg mt-4">{testimonial.name}</h3>
              <span className="text-blue-500 text-sm">{testimonial.role}</span>
              <p className="text-gray-500 mt-1 italic">{testimonial.profileTag}</p>
              <p className="italic text-gray-600 mt-2">“{testimonial.quote}”</p>
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-transparent to-blue-200" />
            </div>
          ))}
        </div>

        <div className="flex justify-between gap-4 mt-6 px-4">
          <button onClick={handlePrev} className="text-white bg-blue-500 px-4 py-1 rounded-full hover:bg-blue-600 transition-all">‹</button>
          <button onClick={handleNext} className="text-white bg-blue-500 px-4 py-1 rounded-full hover:bg-blue-600 transition-all">›</button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div key={index} onClick={() => setCurrentIndex(index * 3)}
              className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index * 3 ? "bg-blue-600" : "bg-gray-300"}`} />
          ))}
        </div>
      </section>

      {/* Tagline above News Section */}
      <section className="py-16 px-4 bg-blue-50 text-center">
        <p className="italic text-xl mb-4">Stay updated with the latest travel news!</p>
        <h2 className="text-3xl font-bold mb-10">News & Articles from Tourm</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {
            [
                {
                  id: 1,
                  title: "Eco-Conscious Travel Tips for 2025",
                  content: "Get inspired with sustainable travel tips that will help you reduce your environmental footprint...",
                  fullContent: "Discover essential tips for eco-conscious travelers in 2025. From choosing eco-friendly transportation to staying in green-certified accommodations, learn how you can make your travel adventures more sustainable.",
                  img: "https://images.unsplash.com/photo-1579340896087-a5c9d69e3226?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                  id: 2,
                  title: "Sustainable Travel: Reducing Your Carbon Footprint",
                  content: "The carbon footprint of travel is huge, but there are steps you can take to minimize it...",
                  fullContent: "Traveling sustainably doesn't mean giving up adventure. Learn how to reduce your carbon footprint by choosing eco-friendly transport, supporting green businesses, and offsetting your travel emissions.",
                  img: "https://images.unsplash.com/photo-1621328406204-01060d16bf24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                  id: 3,
                  title: "The Future of Travel: Green Hotels & Eco Resorts",
                  content: "Eco-friendly hotels and resorts are popping up everywhere, providing luxury with sustainability...",
                  fullContent: "The hotel industry is embracing sustainability, offering eco-conscious travelers the chance to stay at properties that are powered by renewable energy, have water-saving systems, and use local organic products.",
                  img: "https://images.unsplash.com/photo-1742161189633-2aa9f1f24a7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                  id: 4,
                  title: "The Rise of Electric Travel: Cars, Trains, and Planes",
                  content: "Electric vehicles are changing the way we travel, from electric cars to sustainable flights...",
                  fullContent: "Electric travel is gaining momentum, with electric cars and even electric planes emerging as viable alternatives to traditional carbon-emitting vehicles. Learn how these advancements are shaping the future of sustainable transportation.",
                  img: "https://images.unsplash.com/photo-1735852438557-24a86cce1f5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                  id: 5,
                  title: "Top Eco-Friendly Destinations for 2025",
                  content: "If you're planning your next eco-friendly getaway, here are the best destinations to consider...",
                  fullContent: "From sustainable beaches to eco-friendly urban escapes, discover the top destinations for environmentally conscious travelers in 2025. These locations offer pristine nature while helping to preserve the environment.",
                  img: "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                  id: 6,
                  title: "Green Transportation: The Future of Travel",
                  content: "Sustainable transport options are transforming the way we travel...",
                  fullContent: "Green transportation is evolving, with bicycles, electric vehicles, and even solar-powered boats and trains offering new, eco-friendly ways to get around. Learn about the latest green transportation trends and how they are changing the travel landscape.",
                  img: "https://images.unsplash.com/photo-1717944441514-f27c7ca191c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              ]
              
            .map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <footer className="bg-blue-100 py-10 px-4 mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-bold text-lg mb-2 flex items-center">
              <i className="fas fa-plane-departure mr-3 text-blue-500"></i> Tours
            </h3>
            <p>We help you travel the world effortlessly and sustainably.</p>
            <div className="flex gap-3 mt-3">
              <a href="#"><i className="fab fa-facebook" /></a>
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Tour Guide</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Get In Touch</h4>
            <ul>
              <li>+01 234 567 890</li>
              <li>mail@tours.com</li>
              <li>123 Tour St., City, Country</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-3 mt-3">
  <a href="#" className="text-blue-600"><i className="fab fa-facebook" /></a>
  <a href="#" className="text-pink-600"><i className="fab fa-instagram" /></a>
  <a href="#" className="text-blue-400"><i className="fab fa-twitter" /></a>
</div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Aboutpage;
