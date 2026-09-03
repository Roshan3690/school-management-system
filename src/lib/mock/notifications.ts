import { Notification } from "@/types/notification";

export const mockNotifications: Notification[] = [
  {
    id: "notif-1",
    title: "New Assignment Submissions",
    description: "15 students have submitted the Physics assignment.",
    category: "Assignment",
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
    isRead: false,
    link: "/assignments"
  },
  {
    id: "notif-2",
    title: "Fee Payment Received",
    description: "Payment of ₹15,000 received from STU-001.",
    category: "Fee",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    isRead: false,
    link: "/fees/fee-1"
  },
  {
    id: "notif-3",
    title: "Low Attendance Alert",
    description: "Class 11 Science Section A attendance is below 75% today.",
    category: "Attendance",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    isRead: false,
    link: "/attendance"
  },
  {
    id: "notif-4",
    title: "Exam Results Published",
    description: "Mid-Term results for Class 10 have been published.",
    category: "Exam",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    isRead: true,
    link: "/results"
  },
  {
    id: "notif-5",
    title: "Staff Meeting",
    description: "Monthly staff meeting scheduled for tomorrow at 3 PM.",
    category: "Announcement",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
    isRead: true,
    link: "/announcements"
  },
  {
    id: "notif-6",
    title: "System Maintenance",
    description: "EduSphere will undergo maintenance on Sunday from 2 AM to 4 AM.",
    category: "General",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
    isRead: true,
  },
  {
    id: "notif-7",
    title: "New Study Material",
    description: "Chemistry Chapter 4 notes have been uploaded.",
    category: "Assignment",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(), // 4 days ago
    isRead: true,
    link: "/study-materials"
  },
  {
    id: "notif-8",
    title: "Overdue Fee Alert",
    description: "10 students have overdue fees. Please send reminders.",
    category: "Fee",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString(), // 5 days ago
    isRead: true,
    link: "/fees"
  },
  {
    id: "notif-9",
    title: "Timetable Updated",
    description: "Class 12 Commerce timetable has been updated for next week.",
    category: "General",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 144).toISOString(), // 6 days ago
    isRead: true,
    link: "/timetable"
  },
  {
    id: "notif-10",
    title: "Welcome to EduSphere",
    description: "Your administrator account has been successfully created.",
    category: "General",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(), // 30 days ago
    isRead: true,
  }
];
