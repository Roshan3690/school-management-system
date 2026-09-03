export type StudentStatus = "Active" | "Inactive";

export interface Student {
  id: string;
  studentId: string;
  firstName: string;
  lastName: string;
  class: string;
  section: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Other";
  contactNumber: string;
  parentName: string;
  parentContact: string;
  status: StudentStatus;
}
