import React from "react";

const activities = [
  {
    title: "City Tours",
    description: "Explore famous neighborhoods and landmarks with guided tours.",
    image: "city-tour.jpg",
  },
  {
    title: "Museum Visits",
    description: "Discover art, history, and culture at renowned museums.",
    image: "museum.jpg",
  },
  {
    title: "Food Tasting",
    description: "Enjoy local cuisines and street food from popular eateries.",
    image: "food-tasting.jpg",
  },
  {
    title: "Shopping",
    description: "Visit bustling markets and luxury shopping districts.",
    image: "shopping.jpg",
  },
  {
    title: "Nightlife",
    description: "Experience the city’s vibrant nightlife, bars, and clubs.",
    image: "nightlife.jpg",
  },
  {
    title: "Walking Tours",
    description: "Stroll through historic districts and scenic urban parks.",
    image: "walking-tour.jpg",
  },
];

const CityActivities = () => {
  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 txt">
          Explore More With These Activities
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`/${activity.image}`} // Make sure these images are in your public folder
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
  );
};

export default CityActivities;
