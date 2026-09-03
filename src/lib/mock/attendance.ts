import { AttendanceHistoryRecord } from "@/types/attendance";

export const mockAttendanceHistory: AttendanceHistoryRecord[] = [
  { id: "hist-1", date: "2026-09-02", classLevel: "9", section: "A", presentCount: 48, absentCount: 2, percentage: 96 },
  { id: "hist-2", date: "2026-09-02", classLevel: "10", section: "B", presentCount: 45, absentCount: 2, percentage: 95.7 },
  { id: "hist-3", date: "2026-09-02", classLevel: "11", section: "A", presentCount: 47, absentCount: 1, percentage: 97.9 },
  { id: "hist-4", date: "2026-09-02", classLevel: "12", section: "A", presentCount: 42, absentCount: 3, percentage: 93.3 },
  { id: "hist-5", date: "2026-09-01", classLevel: "9", section: "A", presentCount: 49, absentCount: 1, percentage: 98 },
  { id: "hist-6", date: "2026-09-01", classLevel: "10", section: "B", presentCount: 46, absentCount: 1, percentage: 97.8 },
  { id: "hist-7", date: "2026-09-01", classLevel: "11", section: "A", presentCount: 48, absentCount: 0, percentage: 100 },
  { id: "hist-8", date: "2026-09-01", classLevel: "12", section: "A", presentCount: 44, absentCount: 1, percentage: 97.7 },
];
