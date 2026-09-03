export type StudentStatus = "Active" | "Inactive";
export type AcademicStream = "General" | "Science" | "Commerce";

export interface Student {
  id: string;
  studentId: string;
  firstName: string;
  lastName: string;
  class: string;
  section: string;
  stream: AcademicStream;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Other";
  contactNumber: string;
  parentName: string;
  parentContact: string;
  status: StudentStatus;
}
