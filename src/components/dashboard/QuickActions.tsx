import Link from "next/link";
import { UserPlus, CalendarCheck, Megaphone, BookPlus } from "lucide-react";

export function QuickActions() {
  const actions = [
    { label: "Add Student", href: "/students", icon: UserPlus, color: "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" },
    { label: "Mark Attendance", href: "/attendance", icon: CalendarCheck, color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
    { label: "Create Announcement", href: "/announcements", icon: Megaphone, color: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
    { label: "Add Assignment", href: "/assignments", icon: BookPlus, color: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors group"
          >
            <div className={`p-3 rounded-full mb-3 ${action.color}`}>
              <action.icon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
