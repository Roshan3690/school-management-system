import { CalendarCheck, UserPlus, BookPlus, Megaphone } from "lucide-react";

export function RecentActivity() {
  const activities = [
    { id: 1, title: "Attendance marked for Class 10-A", time: "10 minutes ago", icon: CalendarCheck, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
    { id: 2, title: "New student added", time: "1 hour ago", icon: UserPlus, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
    { id: 3, title: "Assignment created", time: "2 hours ago", icon: BookPlus, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
    { id: 4, title: "Announcement published", time: "5 hours ago", icon: Megaphone, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-900/20" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start">
            <div className={`p-2 rounded-full mr-4 ${activity.bg}`}>
              <activity.icon className={`h-4 w-4 ${activity.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{activity.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
