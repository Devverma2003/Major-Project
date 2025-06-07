import React from "react";
import Footer from '../Footer'

const activities = [
  {
    title: "Jeep Safari",
    description: "Ride through dense forests and spot wildlife up close.",
    image: "jeep2.avif",
  },
  {
    title: "Bird Watching",
    description: "Observe rare and migratory birds in natural habitats.",
    image: "bird.avif",
  },
  {
    title: "Boat Safari",
    description: "Cruise through riverine landscapes and mangroves.",
    image: "boat.jpg",
  },
  {
    title: "Nature Walks",
    description: "Take guided or solo treks through scenic trails.",
    image: "walk.avif",
  },
  {
    title: "Night Safari",
    description: "Experience the jungle after dark and spot nocturnal animals.",
    image: "night.avif",
  },
  {
    title: "Camping",
    description: "Stay under the stars in jungle campsites.",
    image: "camp.avif",
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
