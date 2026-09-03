import { FeeRecord } from "@/types/fee";

export const mockFees: FeeRecord[] = [
  {
    id: "fee-1",
    studentId: "STU-001",
    classLevel: "10",
    stream: "General",
    totalFee: 25000,
    amountPaid: 25000,
    pendingAmount: 0,
    dueDate: "2026-08-01",
    status: "Paid",
    paymentHistory: [
      { id: "pay-1", date: "2026-07-15", amount: 15000, method: "Bank Transfer" },
      { id: "pay-2", date: "2026-08-01", amount: 10000, method: "UPI" }
    ]
  },
  {
    id: "fee-2",
    studentId: "STU-002",
    classLevel: "10",
    stream: "General",
    totalFee: 25000,
    amountPaid: 15000,
    pendingAmount: 10000,
    dueDate: "2026-08-01",
    status: "Overdue",
    paymentHistory: [
      { id: "pay-3", date: "2026-07-20", amount: 15000, method: "Cash" }
    ]
  },
  {
    id: "fee-3",
    studentId: "STU-003",
    classLevel: "11",
    stream: "Science",
    totalFee: 35000,
    amountPaid: 35000,
    pendingAmount: 0,
    dueDate: "2026-08-01",
    status: "Paid",
    paymentHistory: [
      { id: "pay-4", date: "2026-07-10", amount: 35000, method: "Bank Transfer" }
    ]
  },
  {
    id: "fee-4",
    studentId: "STU-004",
    classLevel: "11",
    stream: "Science",
    totalFee: 35000,
    amountPaid: 20000,
    pendingAmount: 15000,
    dueDate: "2026-08-01",
    status: "Partial",
    paymentHistory: [
      { id: "pay-5", date: "2026-07-25", amount: 20000, method: "UPI" }
    ]
  },
  {
    id: "fee-5",
    studentId: "STU-005",
    classLevel: "11",
    stream: "Commerce",
    totalFee: 30000,
    amountPaid: 0,
    pendingAmount: 30000,
    dueDate: "2026-10-01",
    status: "Pending",
    paymentHistory: []
  },
  {
    id: "fee-6",
    studentId: "STU-006",
    classLevel: "12",
    stream: "Commerce",
    totalFee: 30000,
    amountPaid: 15000,
    pendingAmount: 15000,
    dueDate: "2026-10-01",
    status: "Partial",
    paymentHistory: [
      { id: "pay-6", date: "2026-08-15", amount: 15000, method: "Cash" }
    ]
  },
  {
    id: "fee-7",
    studentId: "STU-007",
    classLevel: "9",
    stream: "General",
    totalFee: 22000,
    amountPaid: 22000,
    pendingAmount: 0,
    dueDate: "2026-08-01",
    status: "Paid",
    paymentHistory: [
      { id: "pay-7", date: "2026-07-05", amount: 22000, method: "UPI" }
    ]
  },
  {
    id: "fee-8",
    studentId: "STU-008",
    classLevel: "12",
    stream: "Science",
    totalFee: 35000,
    amountPaid: 10000,
    pendingAmount: 25000,
    dueDate: "2026-08-01",
    status: "Overdue",
    paymentHistory: [
      { id: "pay-8", date: "2026-07-28", amount: 10000, method: "Bank Transfer" }
    ]
  },
  {
    id: "fee-9",
    studentId: "STU-009",
    classLevel: "10",
    stream: "General",
    totalFee: 25000,
    amountPaid: 0,
    pendingAmount: 25000,
    dueDate: "2026-08-01",
    status: "Overdue",
    paymentHistory: []
  },
  {
    id: "fee-10",
    studentId: "STU-010",
    classLevel: "11",
    stream: "Science",
    totalFee: 35000,
    amountPaid: 25000,
    pendingAmount: 10000,
    dueDate: "2026-10-01",
    status: "Partial",
    paymentHistory: [
      { id: "pay-9", date: "2026-08-20", amount: 25000, method: "Cash" }
    ]
  },
  {
    id: "fee-11",
    studentId: "STU-011",
    classLevel: "9",
    stream: "General",
    totalFee: 22000,
    amountPaid: 0,
    pendingAmount: 22000,
    dueDate: "2026-10-01",
    status: "Pending",
    paymentHistory: []
  },
  {
    id: "fee-12",
    studentId: "STU-012",
    classLevel: "12",
    stream: "Commerce",
    totalFee: 30000,
    amountPaid: 30000,
    pendingAmount: 0,
    dueDate: "2026-08-01",
    status: "Paid",
    paymentHistory: [
      { id: "pay-10", date: "2026-07-22", amount: 30000, method: "Bank Transfer" }
    ]
  }
];
