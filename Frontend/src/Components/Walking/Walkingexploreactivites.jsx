import React from "react";
import Footer from '../Footer'

const activities = [
  {
    title: "Walking Safari",
    description: "Embark on foot to discover wildlife in its natural setting.",
    image: "jeep2.jpg",
  },
  {
    title: "Bird Watching Walk",
    description: "Enjoy serene trails while spotting colorful bird species.",
    image: "bird.jpg",
  },
  {
    title: "Riverside Walk",
    description: "Stroll alongside tranquil rivers and mangrove edges.",
    image: "boat2.jpg",
  },
  {
    title: "Nature Trail",
    description: "Explore scenic forest paths with guided walking tours.",
    image: "walk.jpg",
  },
  {
    title: "Night Walk",
    description: "Step into the wilderness after dark for a rare experience.",
    image: "night.jpg",
  },
  {
    title: "Camping Walk Prep",
    description: "Walk into your campsite for an immersive overnight stay.",
    image: "camp.jpg",
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
