import { AcademicStream } from "./student";

export type MaterialFileType = "PDF" | "DOCX" | "PPTX" | "Image";

export interface StudyMaterial {
  id: string;
  title: string;
  description: string;
  subject: string;
  classLevel: string;
  stream: AcademicStream;
  section?: string;
  teacherId: string;
  uploadDate: string;
  fileType: MaterialFileType;
  fileSize: string; // e.g. "2.4 MB"
}
