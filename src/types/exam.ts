import { AcademicStream } from "./student";

export type ExamStatus = "Upcoming" | "Ongoing" | "Completed";

export interface Exam {
  id: string;
  name: string;
  subject: string;
  classLevel: string;
  stream: AcademicStream;
  section?: string;
  examDate: string;
  startTime: string;
  duration: string;
  totalMarks: number;
  status: ExamStatus;
  examinerId: string;
}
