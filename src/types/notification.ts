export type NotificationCategory = "Attendance" | "Assignment" | "Exam" | "Fee" | "Announcement" | "Study Material" | "General";

export interface Notification {
  id: string;
  title: string;
  description: string;
  category: NotificationCategory;
  timestamp: string;
  isRead: boolean;
  link?: string;
}
