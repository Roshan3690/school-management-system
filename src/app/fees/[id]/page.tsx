import Link from "next/link";
import { ArrowLeft, User, Banknote, Calendar, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { mockFees, mockStudents } from "@/lib/mockData";

export default async function FeeDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const fee = mockFees.find((f) => f.id === id);

  if (!fee) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Fee Record Not Found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">The fee record you are looking for does not exist.</p>
        <Link
          href="/fees"
          className="inline-flex items-center text-blue-600 hover:text-blue-500"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Fees
        </Link>
      </div>
    );
  }

  const student = mockStudents.find((s) => s.studentId === fee.studentId);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid": return <CheckCircle2 className="h-6 w-6 text-green-500" />;
      case "Partial": return <Clock className="h-6 w-6 text-yellow-500" />;
      case "Pending": return <AlertCircle className="h-6 w-6 text-gray-500" />;
      case "Overdue": return <AlertCircle className="h-6 w-6 text-red-500" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link
          href="/fees"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Fees
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${
          fee.status === 'Paid' ? 'bg-green-500' :
          fee.status === 'Partial' ? 'bg-yellow-500' :
          fee.status === 'Overdue' ? 'bg-red-500' : 'bg-gray-500'
        }`} />

        <div className="px-4 py-8 sm:px-10 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-sm">
                <User className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {student ? `${student.firstName} ${student.lastName}` : fee.studentId}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  ID: {fee.studentId} | Class {fee.classLevel} {fee.stream}
                </p>
              </div>
            </div>
            
            <div className="text-center md:text-right bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700 min-w-[200px]">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Status</p>
              <div className="flex items-center justify-center md:justify-end gap-2">
                {getStatusIcon(fee.status)}
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{fee.status}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-8 sm:px-10 bg-gray-50 dark:bg-gray-900/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Fee Details
                </h3>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Banknote className="h-5 w-5 mr-3" />
                      Total Fee
                    </div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {formatCurrency(fee.totalFee)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center text-green-600 dark:text-green-500">
                      Amount Paid
                    </div>
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">
                      {formatCurrency(fee.amountPaid)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center text-red-600 dark:text-red-500">
                      Pending Amount
                    </div>
                    <div className="text-lg font-bold text-red-600 dark:text-red-400">
                      {formatCurrency(fee.pendingAmount)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="h-5 w-5 mr-3" />
                      Due Date
                    </div>
                    <div className="text-base font-medium text-gray-900 dark:text-white">
                      {fee.dueDate}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Payment History
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  {fee.paymentHistory.length === 0 ? (
                    <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                      No payments recorded yet.
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-100 dark:divide-gray-700">
                      {fee.paymentHistory.map((payment) => (
                        <div key={payment.id} className="p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{payment.date}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-1">
                              Via {payment.method}
                            </p>
                          </div>
                          <div className="text-base font-bold text-green-600 dark:text-green-400">
                            +{formatCurrency(payment.amount)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {fee.pendingAmount > 0 && (
                  <div className="mt-6 flex justify-end">
                    <Link
                      href="/fees/record-payment"
                      className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Record New Payment
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
