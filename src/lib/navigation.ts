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
  Settings,
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
  { name: "Attendance", href: "/attendance", icon: CalendarCheck },
  { name: "Assignments", href: "/assignments", icon: BookOpenCheck },
  { name: "Study Materials", href: "/study-materials", icon: Library },
  { name: "Announcements", href: "/announcements", icon: Megaphone },
  { name: "Fees", href: "/fees", icon: Banknote },
  { name: "Settings", href: "/settings", icon: Settings },
];
