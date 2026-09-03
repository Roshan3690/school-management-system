import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  School, 
  CalendarCheck, 
  BookOpenCheck, 
  Library, 
  Megaphone,
  FileSignature,
  Award,
  CalendarDays,
  Banknote, 
  Settings,
  Book,
  LucideIcon
} from "lucide-react";

export interface NavigationItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

export const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Students", href: "/students", icon: Users },
  { name: "Teachers", href: "/teachers", icon: GraduationCap },
  { name: "Classes", href: "/classes", icon: School },
  { name: "Subjects", href: "/subjects", icon: Book },
  { name: "Attendance", href: "/attendance", icon: CalendarCheck },
  { name: "Timetable", href: "/timetable", icon: CalendarDays },
  { name: "Assignments", href: "/assignments", icon: BookOpenCheck },
  { name: "Exams", href: "/exams", icon: FileSignature },
  { name: "Results", href: "/results", icon: Award },
  { name: "Study Materials", href: "/study-materials", icon: Library },
  { name: "Announcements", href: "/announcements", icon: Megaphone },
  { name: "Fees", href: "/fees", icon: Banknote },
  { name: "Settings", href: "/settings", icon: Settings },
];
