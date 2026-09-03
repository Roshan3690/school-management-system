"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, IndianRupee, Info } from "lucide-react";
import Link from "next/link";
import { mockFees, mockStudents } from "@/lib/mockData";

export default function RecordPaymentPage() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFeeId, setSelectedFeeId] = useState("");

  const selectedFee = mockFees.find(f => f.id === selectedFeeId);
  const selectedStudent = mockStudents.find(s => s.studentId === selectedFee?.studentId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center max-w-md mx-auto mt-10">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Payment Recorded!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The fee payment has been successfully recorded in the system.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
          >
            Record Another
          </button>
          <button
            onClick={() => router.push("/fees")}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Back to Fees
          </button>
        </div>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Record Fee Payment</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Record a new payment towards a student's pending fees.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex items-start">
        <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
        <p className="text-sm text-blue-700 dark:text-blue-300">
          This is a prototype UI. No actual financial transactions or payment gateway integrations are processed here.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 md:p-8 space-y-8">
          
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Student Details</h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label htmlFor="feeRecord" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Select Student (Fee Record)</label>
                <div className="mt-1">
                  <select 
                    required 
                    id="feeRecord" 
                    name="feeRecord" 
                    value={selectedFeeId}
                    onChange={(e) => setSelectedFeeId(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border"
                  >
                    <option value="">Select a student...</option>
                    {mockFees.filter(f => f.pendingAmount > 0).map(fee => {
                      const student = mockStudents.find(s => s.studentId === fee.studentId);
                      const name = student ? `${student.firstName} ${student.lastName}` : fee.studentId;
                      return (
                        <option key={fee.id} value={fee.id}>
                          {name} (Pending: {formatCurrency(fee.pendingAmount)})
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {selectedFee && selectedStudent && (
                <div className="sm:col-span-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{selectedStudent.firstName} {selectedStudent.lastName}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Class {selectedFee.classLevel} {selectedFee.stream} | ID: {selectedStudent.studentId}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Current Pending Amount</p>
                    <p className="text-lg font-bold text-red-600 dark:text-red-400">{formatCurrency(selectedFee.pendingAmount)}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700" />

          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">Payment Details</h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Payment Amount</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IndianRupee className="h-4 w-4 text-gray-400" />
                  </div>
                  <input 
                    required 
                    type="number" 
                    name="amount" 
                    id="amount"
                    min="1"
                    max={selectedFee?.pendingAmount || undefined}
                    placeholder="0"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" 
                  />
                </div>
                {selectedFee && (
                  <p className="mt-1 text-xs text-gray-500">Maximum: {formatCurrency(selectedFee.pendingAmount)}</p>
                )}
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="paymentDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Payment Date</label>
                <div className="mt-1">
                  <input 
                    required 
                    type="date" 
                    name="paymentDate" 
                    id="paymentDate"
                    defaultValue={new Date().toISOString().split('T')[0]}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 border" 
                  />
                </div>
              </div>
              
              <div className="sm:col-span-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Payment Method</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input required type="radio" name="method" value="Cash" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Cash</span>
                  </label>
                  <label className="flex items-center">
                    <input required type="radio" name="method" value="UPI" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">UPI</span>
                  </label>
                  <label className="flex items-center">
                    <input required type="radio" name="method" value="Bank Transfer" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Bank Transfer</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-right sm:px-6">
          <Link
            href="/fees"
            className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={!selectedFeeId}
            className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            Record Payment
          </button>
        </div>
      </form>
    </div>
  );
}
