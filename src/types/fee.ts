export type PaymentStatus = "Paid" | "Partial" | "Pending" | "Overdue";
export type PaymentMethod = "Cash" | "UPI" | "Bank Transfer";

export interface PaymentRecord {
  id: string;
  date: string;
  amount: number;
  method: PaymentMethod;
}

export interface FeeRecord {
  id: string;
  studentId: string;
  classLevel: string;
  stream: string;
  totalFee: number;
  amountPaid: number;
  pendingAmount: number;
  dueDate: string;
  status: PaymentStatus;
  paymentHistory: PaymentRecord[];
}
