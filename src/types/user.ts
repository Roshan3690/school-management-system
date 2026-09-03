export type UserRole = "Admin" | "Teacher" | "Student";

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: UserRole;
  avatarUrl?: string;
  joiningDate: string;
  department?: string;
  status: "Active" | "Inactive";
}
