export type TeacherStatus = "Active" | "On Leave" | "Inactive";

export interface Teacher {
  id: string;
  teacherId: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  primarySubject: string;
  additionalSubject?: string;
  qualification: string;
  joiningDate: string;
  status: TeacherStatus;
  assignedClasses: string[];
}
