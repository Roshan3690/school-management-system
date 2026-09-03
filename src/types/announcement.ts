export type AnnouncementPriority = "Normal" | "Important" | "Urgent";
export type TargetAudience = "All Students" | "All Teachers" | "Class 9" | "Class 10" | "Class 11 Science" | "Class 11 Commerce" | "Class 12 Science" | "Class 12 Commerce";

export interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  targetAudience: TargetAudience;
  priority: AnnouncementPriority;
}
