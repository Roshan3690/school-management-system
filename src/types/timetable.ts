import { AcademicStream } from "./student";

export interface TimetableEntry {
  id: string;
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
  startTime: string;
  endTime: string;
  subject: string;
  teacherId: string;
  classLevel: string;
  stream: AcademicStream;
  section: string;
}
