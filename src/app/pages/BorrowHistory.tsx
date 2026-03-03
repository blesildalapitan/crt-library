import { CheckCircle, Clock, AlertCircle } from "lucide-react";

export function BorrowHistory() {
  // Mock data for borrow history
  const history = [
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      borrowDate: "2026-01-05",
      returnDate: "2026-01-19",
      status: "returned",
    },
    {
      id: 2,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      borrowDate: "2026-01-10",
      returnDate: "2026-01-25",
      status: "returned",
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      borrowDate: "2026-02-15",
      returnDate: null,
      status: "active",
      dueDate: "2026-03-01",
    },
    {
      id: 4,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      borrowDate: "2026-02-20",
      returnDate: null,
      status: "active",
      dueDate: "2026-03-06",
    },
    {
      id: 5,
      title: "1984",
      author: "George Orwell",
      borrowDate: "2025-12-01",
      returnDate: "2025-12-18",
      status: "returned-late",
      lateDays: 3,
    },
  ];

  const getStatusBadge = (record: typeof history[0]) => {
    if (record.status === "returned") {
      return (
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full">
          <CheckCircle className="size-4" />
          <span className="text-sm">Returned</span>
        </div>
      );
    } else if (record.status === "returned-late") {
      return (
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 rounded-full">
          <AlertCircle className="size-4" />
          <span className="text-sm">Returned Late ({record.lateDays} days)</span>
        </div>
      );
    } else {
      return (
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
          <Clock className="size-4" />
          <span className="text-sm">Currently Borrowed</span>
        </div>
      );
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-gray-800">Borrow History</h1>
        <p className="text-gray-600">View your complete borrowing history</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-500 p-3 rounded-lg">
              <CheckCircle className="size-6 text-white" />
            </div>
            <div>
              <p className="text-2xl text-gray-800">15</p>
              <p className="text-sm text-gray-600">Books Returned</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Clock className="size-6 text-white" />
            </div>
            <div>
              <p className="text-2xl text-gray-800">2</p>
              <p className="text-sm text-gray-600">Currently Borrowed</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="bg-red-500 p-3 rounded-lg">
              <AlertCircle className="size-6 text-white" />
            </div>
            <div>
              <p className="text-2xl text-gray-800">1</p>
              <p className="text-sm text-gray-600">Returned Late</p>
            </div>
          </div>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl text-gray-800">Complete History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm text-gray-700">Book Title</th>
                <th className="px-6 py-4 text-left text-sm text-gray-700">Author</th>
                <th className="px-6 py-4 text-left text-sm text-gray-700">Borrow Date</th>
                <th className="px-6 py-4 text-left text-sm text-gray-700">Return Date</th>
                <th className="px-6 py-4 text-left text-sm text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {history.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="text-gray-800">{record.title}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{record.author}</td>
                  <td className="px-6 py-4 text-gray-600">
                    {new Date(record.borrowDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {record.returnDate ? (
                      new Date(record.returnDate).toLocaleDateString()
                    ) : record.dueDate ? (
                      <span className="text-blue-600">Due: {new Date(record.dueDate).toLocaleDateString()}</span>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(record)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
