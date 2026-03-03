import { useState } from "react";
import { BookCheck, CheckCircle, Search } from "lucide-react";

interface BorrowedBook {
  id: number;
  studentId: string;
  borrowerName: string;
  bookTitle: string;
  dateBorrowed: string;
  dueDate: string;
  status: "borrowed" | "overdue";
}

export function ReturnBook() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [returnedBook, setReturnedBook] = useState<string>("");

  const [borrowedBooks, setBorrowedBooks] = useState<BorrowedBook[]>([
    {
      id: 1,
      studentId: "2024-0001",
      borrowerName: "Maria Santos",
      bookTitle: "Introduction to Programming",
      dateBorrowed: "2026-03-01",
      dueDate: "2026-03-15",
      status: "borrowed",
    },
    {
      id: 2,
      studentId: "2024-0002",
      borrowerName: "Juan Dela Cruz",
      bookTitle: "Database Management Systems",
      dateBorrowed: "2026-02-28",
      dueDate: "2026-03-14",
      status: "borrowed",
    },
    {
      id: 4,
      studentId: "2024-0004",
      borrowerName: "Pedro Martinez",
      bookTitle: "Data Structures and Algorithms",
      dateBorrowed: "2026-02-20",
      dueDate: "2026-03-06",
      status: "overdue",
    },
    {
      id: 5,
      studentId: "2024-0005",
      borrowerName: "Sofia Garcia",
      bookTitle: "Software Engineering Principles",
      dateBorrowed: "2026-02-26",
      dueDate: "2026-03-12",
      status: "borrowed",
    },
  ]);

  const filteredBooks = borrowedBooks.filter(
    (book) =>
      book.borrowerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReturnBook = (book: BorrowedBook) => {
    if (confirm(`Confirm return of "${book.bookTitle}" by ${book.borrowerName}?`)) {
      setBorrowedBooks(borrowedBooks.filter((b) => b.id !== book.id));
      setReturnedBook(book.bookTitle);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  const getStatusBadge = (status: string) => {
    return status === "overdue" ? (
      <span className="px-3 py-1 rounded-full text-xs bg-[#EF4444] text-white">Overdue</span>
    ) : (
      <span className="px-3 py-1 rounded-full text-xs bg-[#3B82F6] text-white">Borrowed</span>
    );
  };

  const getDaysRemaining = (dueDate: string) => {
    const today = new Date("2026-03-02"); // Current date
    const due = new Date(dueDate);
    const diff = Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diff < 0) {
      return (
        <span className="text-[#EF4444]">{Math.abs(diff)} days overdue</span>
      );
    } else if (diff === 0) {
      return <span className="text-[#F59E0B]">Due today</span>;
    } else {
      return <span className="text-gray-600">{diff} days remaining</span>;
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Return Book</h1>
        <p className="text-gray-600">Process book returns and update availability</p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="mb-6 p-4 bg-[#22C55E] text-white rounded-lg flex items-center gap-3 max-w-3xl">
          <CheckCircle className="size-6" />
          <p>"{returnedBook}" has been returned successfully! Book is now available.</p>
        </div>
      )}

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by borrower, ID, or book title..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
          />
        </div>
      </div>

      {/* Borrowed Books Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl">Currently Borrowed Books</h2>
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
                  Date Borrowed
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBooks.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                    No borrowed books found
                  </td>
                </tr>
              ) : (
                filteredBooks.map((book) => (
                  <tr key={book.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">{book.studentId}</td>
                    <td className="px-6 py-4 text-sm">{book.borrowerName}</td>
                    <td className="px-6 py-4 text-sm">{book.bookTitle}</td>
                    <td className="px-6 py-4 text-sm">{book.dateBorrowed}</td>
                    <td className="px-6 py-4 text-sm">
                      <div>{book.dueDate}</div>
                      <div className="text-xs mt-1">{getDaysRemaining(book.dueDate)}</div>
                    </td>
                    <td className="px-6 py-4 text-sm">{getStatusBadge(book.status)}</td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => handleReturnBook(book)}
                        className="flex items-center gap-2 px-4 py-2 bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-lg transition-colors"
                      >
                        <BookCheck className="size-4" />
                        Return
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
