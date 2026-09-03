export type AttendanceStatus = "Present" | "Absent" | "Late" | "Unmarked";

export interface AttendanceRecord {
  studentId: string;
  date: string;
  status: AttendanceStatus;
}

export interface AttendanceHistoryRecord {
  id: string;
  date: string;
  classLevel: string;
  section: string;
  presentCount: number;
  absentCount: number;
  percentage: number;
}
