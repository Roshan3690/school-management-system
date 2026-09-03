import { TeacherForm } from "@/components/teachers/TeacherForm";

export default function AddTeacherPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add New Teacher</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Enter the teacher's information below to register them in the system.
        </p>
      </div>

      <TeacherForm />
    </div>
  );
}
