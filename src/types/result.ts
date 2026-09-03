export type ResultStatus = "Pass" | "Fail";

export interface Result {
  id: string;
  studentId: string;
  examId: string;
  marksObtained: number;
  totalMarks: number;
  percentage: number;
  grade: string;
  status: ResultStatus;
}
