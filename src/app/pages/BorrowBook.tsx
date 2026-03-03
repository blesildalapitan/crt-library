import { useState } from "react";
import { BookPlus, CheckCircle } from "lucide-react";

export function BorrowBook() {
  const [formData, setFormData] = useState({
    bookTitle: "",
    borrowerName: "",
    studentId: "",
    course: "",
    contact: "",
    dateBorrowed: new Date().toISOString().split("T")[0],
    dueDate: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const availableBooks = [
    "Introduction to Programming",
    "Database Management Systems",
    "Web Development Fundamentals",
    "Data Structures and Algorithms",
    "Software Engineering Principles",
    "Computer Networks",
    "Operating Systems",
    "Artificial Intelligence",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would save to database
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        bookTitle: "",
        borrowerName: "",
        studentId: "",
        course: "",
        contact: "",
        dateBorrowed: new Date().toISOString().split("T")[0],
        dueDate: "",
      });
    }, 3000);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Borrow Book</h1>
        <p className="text-gray-600">Record a new book borrowing transaction</p>
      </div>

      <div className="max-w-3xl">
        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 p-4 bg-[#22C55E] text-white rounded-lg flex items-center gap-3">
            <CheckCircle className="size-6" />
            <p>Book borrowed successfully! Transaction recorded.</p>
          </div>
        )}

        {/* Borrow Form */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex items-center gap-3 mb-6">
            <BookPlus className="size-6 text-[#1E3A8A]" />
            <h2 className="text-xl">Borrowing Details</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Book Selection */}
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Book Title <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.bookTitle}
                  onChange={(e) => setFormData({ ...formData, bookTitle: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  required
                >
                  <option value="">Select a book</option>
                  {availableBooks.map((book) => (
                    <option key={book} value={book}>
                      {book}
                    </option>
                  ))}
                </select>
              </div>

              {/* Borrower Information */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Student ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.studentId}
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    placeholder="e.g., 2024-0001"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Borrower Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.borrowerName}
                    onChange={(e) => setFormData({ ...formData, borrowerName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Course/Section <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    placeholder="e.g., BS CS 4A"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="09XXXXXXXXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    required
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Date Borrowed <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.dateBorrowed}
                    onChange={(e) => setFormData({ ...formData, dateBorrowed: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Expected Return Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.dueDate}
                    onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <BookPlus className="size-5" />
                  Confirm Borrowing
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
