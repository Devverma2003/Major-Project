// src/components/ActivityList.jsx
import { Binoculars, Trees, Car } from "lucide-react";

const activities = [
  { icon: <Car className="w-4 h-4 text-green-600" />, label: "Safari" },
  { icon: <Binoculars className="w-4 h-4 text-blue-600" />, label: "Bird Watching" },
  { icon: <Trees className="w-4 h-4 text-emerald-600" />, label: "Nature Walks" },
 
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
