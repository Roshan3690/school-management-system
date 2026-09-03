import Link from "next/link";
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  School, 
  CalendarCheck, 
  BookOpenCheck, 
  Library, 
  Megaphone, 
  Banknote, 
  Settings 
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Students", href: "/students", icon: Users },
  { name: "Teachers", href: "/teachers", icon: GraduationCap },
  { name: "Classes", href: "/classes", icon: School },
  { name: "Attendance", href: "/attendance", icon: CalendarCheck },
  { name: "Assignments", href: "/assignments", icon: BookOpenCheck },
  { name: "Study Materials", href: "/study-materials", icon: Library },
  { name: "Announcements", href: "/announcements", icon: Megaphone },
  { name: "Fees", href: "/fees", icon: Banknote },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4 mb-5">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">EduSphere</span>
        </div>
        <nav className="flex-1 px-3 space-y-1 pb-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              <item.icon className="text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 mr-3 flex-shrink-0 h-5 w-5" aria-hidden="true" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
