import { AcademicStream } from "./student";

export interface Section {
  id: string;
  name: string;
  studentCount: number;
  classTeacher: string;
}

export interface SchoolClass {
  id: string;
  classLevel: string;
  stream: AcademicStream;
  sections: Section[];
  totalStudents: number;
}
