import { BookOpen, Clock, AlertCircle, CheckCircle } from "lucide-react";

export function StudentHome() {
  // Mock data for currently borrowed books
  const borrowedBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      borrowDate: "2026-02-15",
      dueDate: "2026-03-01",
      status: "active",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      borrowDate: "2026-02-20",
      dueDate: "2026-03-06",
      status: "due-soon",
    },
  ];

  const stats = [
    { label: "Books Borrowed", value: "2", icon: BookOpen, color: "bg-blue-500" },
    { label: "Books Returned", value: "15", icon: CheckCircle, color: "bg-green-500" },
    { label: "Due Soon", value: "1", icon: Clock, color: "bg-yellow-500" },
    { label: "Overdue", value: "0", icon: AlertCircle, color: "bg-red-500" },
  ];

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-gray-800">Welcome Back, Student!</h1>
        <p className="text-gray-600">Manage your borrowed books and explore the library</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="size-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl text-gray-800">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Currently Borrowed Books */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl text-gray-800">Currently Borrowed Books</h2>
        </div>
        <div className="p-6">
          {borrowedBooks.length === 0 ? (
            <p className="text-gray-600 text-center py-8">You have no borrowed books</p>
          ) : (
            <div className="space-y-4">
              {borrowedBooks.map((book) => {
                const daysUntilDue = getDaysUntilDue(book.dueDate);
                const isOverdue = daysUntilDue < 0;
                const isDueSoon = daysUntilDue >= 0 && daysUntilDue <= 3;

                return (
                  <div
                    key={book.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg text-gray-800 mb-1">{book.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">by {book.author}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-600">
                            Borrowed: {new Date(book.borrowDate).toLocaleDateString()}
                          </span>
                          <span className="text-gray-600">
                            Due: {new Date(book.dueDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        {isOverdue ? (
                          <div className="flex items-center gap-2 text-red-600">
                            <AlertCircle className="size-5" />
                            <span className="text-sm">Overdue by {Math.abs(daysUntilDue)} days</span>
                          </div>
                        ) : isDueSoon ? (
                          <div className="flex items-center gap-2 text-yellow-600">
                            <Clock className="size-5" />
                            <span className="text-sm">Due in {daysUntilDue} days</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="size-5" />
                            <span className="text-sm">Due in {daysUntilDue} days</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
