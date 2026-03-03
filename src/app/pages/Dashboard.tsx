import { BookOpen, BookCheck, BookX, AlertCircle, Search, Bell } from "lucide-react";

export function Dashboard() {
  const stats = [
    { label: "Total Books", value: "1,234", icon: BookOpen, color: "bg-[#3B82F6]" },
    { label: "Borrowed Books", value: "156", icon: BookCheck, color: "bg-[#3B82F6]" },
    { label: "Available Books", value: "1,078", icon: BookX, color: "bg-[#22C55E]" },
    { label: "Overdue Books", value: "12", icon: AlertCircle, color: "bg-[#EF4444]" },
  ];

  const recentTransactions = [
    {
      id: 1,
      borrower: "Maria Santos",
      studentId: "2024-0001",
      book: "Introduction to Programming",
      date: "2026-03-01",
      status: "borrowed",
      dueDate: "2026-03-15",
    },
    {
      id: 2,
      borrower: "Juan Dela Cruz",
      studentId: "2024-0002",
      book: "Database Management Systems",
      date: "2026-02-28",
      status: "borrowed",
      dueDate: "2026-03-14",
    },
    {
      id: 3,
      borrower: "Anna Reyes",
      studentId: "2024-0003",
      book: "Web Development Fundamentals",
      date: "2026-02-27",
      status: "returned",
      dueDate: "2026-03-13",
    },
    {
      id: 4,
      borrower: "Pedro Martinez",
      studentId: "2024-0004",
      book: "Data Structures and Algorithms",
      date: "2026-02-20",
      status: "overdue",
      dueDate: "2026-03-06",
    },
    {
      id: 5,
      borrower: "Sofia Garcia",
      studentId: "2024-0005",
      book: "Software Engineering Principles",
      date: "2026-02-26",
      status: "borrowed",
      dueDate: "2026-03-12",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "borrowed":
        return <span className="px-3 py-1 rounded-full text-xs bg-[#3B82F6] text-white">Borrowed</span>;
      case "returned":
        return <span className="px-3 py-1 rounded-full text-xs bg-[#22C55E] text-white">Returned</span>;
      case "overdue":
        return <span className="px-3 py-1 rounded-full text-xs bg-[#EF4444] text-white">Overdue</span>;
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome to CRT Library Management System</p>
        </div>
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search books or borrowers..."
              className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            />
          </div>
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-gray-200 transition-colors">
            <Bell className="size-6 text-gray-600" />
            <span className="absolute top-1 right-1 size-2 bg-[#EF4444] rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-4 rounded-lg`}>
                  <Icon className="size-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl">Recent Transactions</h2>
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
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{transaction.studentId}</td>
                  <td className="px-6 py-4 text-sm">{transaction.borrower}</td>
                  <td className="px-6 py-4 text-sm">{transaction.book}</td>
                  <td className="px-6 py-4 text-sm">{transaction.date}</td>
                  <td className="px-6 py-4 text-sm">{transaction.dueDate}</td>
                  <td className="px-6 py-4 text-sm">{getStatusBadge(transaction.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
