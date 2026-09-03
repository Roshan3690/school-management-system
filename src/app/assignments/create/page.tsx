import { AssignmentForm } from "@/components/assignments/AssignmentForm";

export default function CreateAssignmentPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Create Assignment</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Distribute a new assignment, homework, or project to a specific class.
        </p>
      </div>

      <AssignmentForm />
    </div>
  );
}
