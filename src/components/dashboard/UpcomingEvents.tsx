import { CalendarDays } from "lucide-react";

export function UpcomingEvents() {
  const events = [
    { id: 1, title: "Parent Teacher Meeting", date: "Oct 15, 2026", info: "All classes", color: "border-blue-500" },
    { id: 2, title: "Mathematics Examination", date: "Oct 18, 2026", info: "Class 10", color: "border-purple-500" },
    { id: 3, title: "Assignment Submission Deadline", date: "Oct 20, 2026", info: "Science Project", color: "border-amber-500" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Events</h2>
        <CalendarDays className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className={`pl-4 border-l-4 ${event.color} py-1`}>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{event.title}</p>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs text-gray-500 dark:text-gray-400">{event.date}</span>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                {event.info}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
