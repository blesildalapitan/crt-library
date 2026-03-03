import { FileText, Download, Calendar, TrendingUp, BookOpen, Users } from "lucide-react";

export function Reports() {
  const reportTypes = [
    {
      title: "Monthly Borrowing Report",
      description: "Summary of all borrowing activities for the current month",
      icon: Calendar,
      color: "bg-[#3B82F6]",
    },
    {
      title: "Most Borrowed Books",
      description: "List of books with highest borrowing frequency",
      icon: TrendingUp,
      color: "bg-[#22C55E]",
    },
    {
      title: "Book Inventory Report",
      description: "Complete list of all books with availability status",
      icon: BookOpen,
      color: "bg-[#F59E0B]",
    },
    {
      title: "Borrower Activity Report",
      description: "Detailed borrowing history by student",
      icon: Users,
      color: "bg-[#8B5CF6]",
    },
  ];

  const monthlyStats = {
    totalBorrowed: 124,
    totalReturned: 98,
    currentlyBorrowed: 156,
    overdue: 12,
    newBorrowers: 23,
    averageReturnTime: "12 days",
  };

  const topBooks = [
    { title: "Introduction to Programming", count: 45, category: "Computer Science" },
    { title: "Database Management Systems", count: 38, category: "Computer Science" },
    { title: "Web Development Fundamentals", count: 32, category: "Computer Science" },
    { title: "Data Structures and Algorithms", count: 29, category: "Computer Science" },
    { title: "Software Engineering Principles", count: 24, category: "Computer Science" },
  ];

  const handleGenerateReport = (reportTitle: string) => {
    alert(`Generating ${reportTitle}...\n\nIn a production system, this would generate a PDF or Excel report.`);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Reports</h1>
        <p className="text-gray-600">Generate and download library activity reports</p>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {reportTypes.map((report) => {
          const Icon = report.icon;
          return (
            <div key={report.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`${report.color} p-4 rounded-lg`}>
                  <Icon className="size-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-1">{report.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{report.description}</p>
                  <button
                    onClick={() => handleGenerateReport(report.title)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white rounded-lg transition-colors text-sm"
                  >
                    <Download className="size-4" />
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Monthly Statistics */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-200 bg-[#1E3A8A] text-white">
          <h2 className="text-xl">Monthly Statistics - March 2026</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Total Borrowed</p>
              <p className="text-3xl text-[#3B82F6]">{monthlyStats.totalBorrowed}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Total Returned</p>
              <p className="text-3xl text-[#22C55E]">{monthlyStats.totalReturned}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Currently Borrowed</p>
              <p className="text-3xl text-[#F59E0B]">{monthlyStats.currentlyBorrowed}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Overdue</p>
              <p className="text-3xl text-[#EF4444]">{monthlyStats.overdue}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">New Borrowers</p>
              <p className="text-3xl text-[#8B5CF6]">{monthlyStats.newBorrowers}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Avg. Return Time</p>
              <p className="text-2xl text-gray-700">{monthlyStats.averageReturnTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Borrowed Books */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl">Top Borrowed Books This Month</h2>
            <button
              onClick={() => handleGenerateReport("Top Borrowed Books")}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors text-sm"
            >
              <FileText className="size-4" />
              Export List
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Book Title
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Times Borrowed
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Popularity
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topBooks.map((book, index) => (
                <tr key={book.title} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">
                    <span className="flex items-center justify-center size-8 rounded-full bg-[#1E3A8A] text-white">
                      {index + 1}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">{book.title}</td>
                  <td className="px-6 py-4 text-sm">{book.category}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-3 py-1 rounded-full text-xs bg-[#3B82F6] text-white">
                      {book.count} times
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#22C55E] h-2 rounded-full"
                        style={{ width: `${(book.count / 45) * 100}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
