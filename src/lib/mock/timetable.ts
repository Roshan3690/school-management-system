import { TimetableEntry } from "@/types/timetable";

export const mockTimetable: TimetableEntry[] = [
  // Class 9, Section A, General
  { id: "tt-1", day: "Monday", startTime: "08:00 AM", endTime: "09:00 AM", subject: "English", teacherId: "TCH-102", classLevel: "9", stream: "General", section: "A" },
  { id: "tt-2", day: "Monday", startTime: "09:00 AM", endTime: "10:00 AM", subject: "Mathematics", teacherId: "TCH-109", classLevel: "9", stream: "General", section: "A" },
  { id: "tt-3", day: "Monday", startTime: "10:30 AM", endTime: "11:30 AM", subject: "Science", teacherId: "TCH-108", classLevel: "9", stream: "General", section: "A" },
  { id: "tt-4", day: "Tuesday", startTime: "08:00 AM", endTime: "09:00 AM", subject: "Mathematics", teacherId: "TCH-109", classLevel: "9", stream: "General", section: "A" },
  { id: "tt-5", day: "Tuesday", startTime: "09:00 AM", endTime: "10:00 AM", subject: "Computer Science", teacherId: "TCH-107", classLevel: "9", stream: "General", section: "A" },
  
  // Class 10, Section B, General
  { id: "tt-6", day: "Wednesday", startTime: "08:00 AM", endTime: "09:00 AM", subject: "Mathematics", teacherId: "TCH-101", classLevel: "10", stream: "General", section: "B" },
  { id: "tt-7", day: "Wednesday", startTime: "09:00 AM", endTime: "10:00 AM", subject: "English", teacherId: "TCH-102", classLevel: "10", stream: "General", section: "B" },
  
  // Class 11, Section A, Science
  { id: "tt-8", day: "Thursday", startTime: "08:00 AM", endTime: "09:00 AM", subject: "Physics", teacherId: "TCH-103", classLevel: "11", stream: "Science", section: "A" },
  { id: "tt-9", day: "Thursday", startTime: "09:00 AM", endTime: "10:30 AM", subject: "Chemistry Lab", teacherId: "TCH-104", classLevel: "11", stream: "Science", section: "A" },
  
  // Class 12, Section A, Commerce
  { id: "tt-10", day: "Friday", startTime: "08:00 AM", endTime: "09:00 AM", subject: "Accountancy", teacherId: "TCH-105", classLevel: "12", stream: "Commerce", section: "A" },
  { id: "tt-11", day: "Friday", startTime: "09:00 AM", endTime: "10:00 AM", subject: "Economics", teacherId: "TCH-106", classLevel: "12", stream: "Commerce", section: "A" }
];
