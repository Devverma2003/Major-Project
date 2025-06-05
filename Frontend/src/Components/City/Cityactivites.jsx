import { Building, MapPin, Coffee } from "lucide-react";

const activities = [
  { icon: <Building className="w-4 h-4 text-gray-700" />, label: "City Tours" },
  { icon: <MapPin className="w-4 h-4 text-red-600" />, label: "Landmark Visits" },
  { icon: <Coffee className="w-4 h-4 text-yellow-600" />, label: "Cafe Hopping" },
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
