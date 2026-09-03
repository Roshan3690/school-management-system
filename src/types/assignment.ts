import { AcademicStream } from "./student";

export type AssignmentStatus = "Active" | "Upcoming" | "Completed" | "Overdue";

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  classLevel: string;
  stream: AcademicStream;
  section?: string;
  teacherId: string;
  assignedDate: string;
  dueDate: string;
  status: AssignmentStatus;
  description: string;
  totalStudents?: number;
  submittedCount?: number;
}
