import { AcademicStream } from "./student";

export interface Subject {
  id: string;
  name: string;
  code: string;
  classLevel: string;
  stream: AcademicStream;
  teacherId?: string;
  description?: string;
}
