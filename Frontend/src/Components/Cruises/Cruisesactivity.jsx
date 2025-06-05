import React from "react";
import { Anchor, ShipWheel, } from "lucide-react";

const activities = [
  { icon: <Anchor className="w-4 h-4 text-orange-600" />, label: "Anchoring" },
  { icon: <ShipWheel className="w-4 h-4 text-indigo-600" />, label: "Deck Tours" },
  
];

const ActivityList = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-700">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center gap-1">
          {activity.icon}
          <span>{activity.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ActivityList;
