import { StudentForm } from "@/components/students/StudentForm";

export default function AddStudentPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add New Student</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Enter the student's information below to register them in the system.
        </p>
      </div>

      <StudentForm />
    </div>
  );
}
