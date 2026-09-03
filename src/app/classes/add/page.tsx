import { ClassForm } from "@/components/classes/ClassForm";

export default function AddClassPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add New Class</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Configure a new class group, assign its stream, and define the number of sections.
        </p>
      </div>

      <ClassForm />
    </div>
  );
}
