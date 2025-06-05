import { Binoculars, Trees, Car, Footprints } from "lucide-react";

const activities = [
  {
    icon: <Footprints className="w-4 h-4 text-orange-600" />,
    label: "Walking",
  },
  {
    icon: <Footprints className="w-4 h-4 text-blue-600" />,
  label: "Walking Safari",
  },
  {
    icon: <Trees className="w-4 h-4 text-emerald-600" />,
    label: "Nature Walks",
  },
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
