import { AlertCircle, Phone, Mail } from "lucide-react";

interface OverdueRecord {
  id: number;
  studentId: string;
  borrowerName: string;
  bookTitle: string;
  dateBorrowed: string;
  dueDate: string;
  daysOverdue: number;
  contact: string;
  email: string;
}

export function OverdueRecords() {
  const overdueBooks: OverdueRecord[] = [
    {
      id: 1,
      studentId: "2024-0004",
      borrowerName: "Pedro Martinez",
      bookTitle: "Data Structures and Algorithms",
      dateBorrowed: "2026-02-10",
      dueDate: "2026-02-24",
      daysOverdue: 6,
      contact: "09456789012",
      email: "pedro.martinez@student.crt.edu",
    },
    {
      id: 2,
      studentId: "2024-0008",
      borrowerName: "Carlos Ramos",
      bookTitle: "Computer Networks",
      dateBorrowed: "2026-02-15",
      dueDate: "2026-03-01",
      daysOverdue: 1,
      contact: "09567890123",
      email: "carlos.ramos@student.crt.edu",
    },
    {
      id: 3,
      studentId: "2024-0012",
      borrowerName: "Elena Santos",
      bookTitle: "Operating Systems",
      dateBorrowed: "2026-02-05",
      dueDate: "2026-02-19",
      daysOverdue: 11,
      contact: "09678901234",
      email: "elena.santos@student.crt.edu",
    },
    {
      id: 4,
      studentId: "2024-0015",
      borrowerName: "Miguel Torres",
      bookTitle: "Artificial Intelligence",
      dateBorrowed: "2026-02-18",
      dueDate: "2026-03-04",
      daysOverdue: -2,
      contact: "09789012345",
      email: "miguel.torres@student.crt.edu",
    },
  ];

  // Filter only overdue books (daysOverdue > 0)
  const actualOverdue = overdueBooks.filter((book) => book.daysOverdue > 0);

  const getSeverityColor = (days: number) => {
    if (days >= 10) return "bg-[#DC2626] text-white"; // Dark red for 10+ days
    if (days >= 5) return "bg-[#EF4444] text-white"; // Red for 5-9 days
    return "bg-[#F59E0B] text-white"; // Orange for 1-4 days
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <AlertCircle className="size-8 text-[#EF4444]" />
          <h1 className="text-3xl">Overdue Records</h1>
        </div>
        <p className="text-gray-600">Monitor and manage overdue book returns</p>
      </div>

      {/* Summary Card */}
      <div className="bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white rounded-xl p-6 shadow-lg mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/90 mb-1">Total Overdue Books</p>
            <p className="text-4xl">{actualOverdue.length}</p>
          </div>
          <AlertCircle className="size-16 text-white/30" />
        </div>
      </div>

      {/* Overdue Books Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-red-50">
          <h2 className="text-xl text-[#DC2626]">Books Requiring Immediate Attention</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Student ID
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Borrower Name
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Book Title
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Days Overdue
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {actualOverdue.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                    <div className="flex flex-col items-center gap-2">
                      <AlertCircle className="size-12 text-gray-300" />
                      <p>No overdue books at the moment</p>
                    </div>
                  </td>
                </tr>
              ) : (
                actualOverdue
                  .sort((a, b) => b.daysOverdue - a.daysOverdue)
                  .map((book) => (
                    <tr key={book.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm">{book.studentId}</td>
                      <td className="px-6 py-4 text-sm">{book.borrowerName}</td>
                      <td className="px-6 py-4 text-sm">{book.bookTitle}</td>
                      <td className="px-6 py-4 text-sm">
                        <div>{book.dueDate}</div>
                        <div className="text-xs text-gray-500">
                          Borrowed: {book.dateBorrowed}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-4 py-2 rounded-full text-sm ${getSeverityColor(
                            book.daysOverdue
                          )}`}
                        >
                          {book.daysOverdue} days
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="text-xs text-gray-600">
                          <div className="flex items-center gap-1 mb-1">
                            <Phone className="size-3" />
                            {book.contact}
                          </div>
                          <div className="flex items-center gap-1">
                            <Mail className="size-3" />
                            {book.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex flex-col gap-2">
                          <button className="px-3 py-1 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded text-xs transition-colors">
                            Send Reminder
                          </button>
                          <button className="px-3 py-1 border border-gray-300 hover:bg-gray-50 rounded text-xs transition-colors">
                            Call Borrower
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Notice */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="size-5 text-[#3B82F6] mt-0.5" />
          <div className="text-sm text-gray-700">
            <p className="mb-1">
              <strong>Reminder Policy:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>First reminder: Sent on due date</li>
              <li>Second reminder: Sent 3 days after due date</li>
              <li>Final notice: Sent 7 days after due date</li>
              <li>Books overdue for 14+ days may result in borrowing privileges suspension</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
