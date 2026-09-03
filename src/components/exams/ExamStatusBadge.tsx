import { ExamStatus } from "@/types/exam";

interface ExamStatusBadgeProps {
  status: ExamStatus;
}

export function ExamStatusBadge({ status }: ExamStatusBadgeProps) {
  let badgeClasses = "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";

  switch (status) {
    case "Upcoming":
      badgeClasses = "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      break;
    case "Ongoing":
      badgeClasses = "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      break;
    case "Completed":
      badgeClasses = "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      break;
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeClasses}`}
    >
      {status}
    </span>
  );
}
