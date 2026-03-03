import { AlertCircle, CheckCircle, Clock } from "lucide-react";

export function MyBooks() {
  // Mock data for borrowed books
  const myBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "978-0743273565",
      borrowDate: "2026-02-15",
      dueDate: "2026-03-01",
      status: "active",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "978-0061120084",
      borrowDate: "2026-02-20",
      dueDate: "2026-03-06",
      status: "due-soon",
    },
  ];

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getStatusInfo = (dueDate: string) => {
    const daysUntilDue = getDaysUntilDue(dueDate);
    
    if (daysUntilDue < 0) {
      return {
        label: `Overdue by ${Math.abs(daysUntilDue)} days`,
        color: "text-red-600",
        bgColor: "bg-red-50",
        icon: AlertCircle,
      };
    } else if (daysUntilDue <= 3) {
      return {
        label: `Due in ${daysUntilDue} days`,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        icon: Clock,
      };
    } else {
      return {
        label: `Due in ${daysUntilDue} days`,
        color: "text-green-600",
        bgColor: "bg-green-50",
        icon: CheckCircle,
      };
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-gray-800">My Books</h1>
        <p className="text-gray-600">View and manage your currently borrowed books</p>
      </div>

      {/* Books List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {myBooks.length === 0 ? (
          <div className="p-12 text-center text-gray-600">
            <p>You have no borrowed books at the moment.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Book Title</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Author</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">ISBN</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Borrow Date</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Due Date</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {myBooks.map((book) => {
                  const statusInfo = getStatusInfo(book.dueDate);
                  const StatusIcon = statusInfo.icon;

                  return (
                    <tr key={book.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <p className="text-gray-800">{book.title}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{book.author}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{book.isbn}</td>
                      <td className="px-6 py-4 text-gray-600">
                        {new Date(book.borrowDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {new Date(book.dueDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${statusInfo.bgColor}`}>
                          <StatusIcon className={`size-4 ${statusInfo.color}`} />
                          <span className={`text-sm ${statusInfo.color}`}>{statusInfo.label}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button className="px-4 py-2 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white rounded-lg text-sm transition-colors">
                          Request Renewal
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm text-blue-900 mb-2">Library Policies</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Books can be borrowed for up to 14 days</li>
          <li>• Renewal requests must be made at least 2 days before the due date</li>
          <li>• Overdue books may incur late fees</li>
          <li>• Contact the library for any questions or issues</li>
        </ul>
      </div>
    </div>
  );
}
