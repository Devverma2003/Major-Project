import React from "react";
import Footer from '../Footer'

const activities = [
  {
    title: "Sunset Cruise",
    description: "Enjoy stunning sunsets while sailing on calm waters.",
    image: "sunset_cruise.jpg",
  },
  {
    title: "Island Hopping",
    description: "Visit beautiful islands and explore pristine beaches.",
    image: "island_hopping.jpg",
  },
  {
    title: "Onboard Dining",
    description: "Savor gourmet meals and exotic cocktails on deck.",
    image: "dining.jpg",
  },
  {
    title: "Live Entertainment",
    description: "Experience live music, dance shows, and performances.",
    image: "entertainment.jpg",
  },
  {
    title: "Snorkeling",
    description: "Discover vibrant marine life in crystal-clear waters.",
    image: "snorkeling.jpg",
  },
  {
    title: "Spa & Relaxation",
    description: "Unwind with luxurious spa treatments on the cruise.",
    image: "spa.jpg",
  },
];

const WildlifeActivities = () => {
  return (
    <>
      <section className="pt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mt-24 sm:mt-10 mb-8 sm:mb-10 txt">
            Explore More With These Activities
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={`/${activity.image}`}
                  // Fixed: ensure leading slash
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WildlifeActivities;
