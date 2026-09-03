import { TeacherStatus } from "@/types/teacher";

interface TeacherStatusBadgeProps {
  status: TeacherStatus;
}

export function TeacherStatusBadge({ status }: TeacherStatusBadgeProps) {
  let badgeClasses = "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";

  if (status === "Active") {
    badgeClasses = "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
  } else if (status === "On Leave") {
    badgeClasses = "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeClasses}`}
    >
      {status}
    </span>
  );
}
