import { useState } from "react";
import { Search, Eye } from "lucide-react";

interface Borrower {
  id: number;
  studentId: string;
  name: string;
  course: string;
  section: string;
  contact: string;
  email: string;
  totalBorrowed: number;
  activeLoans: number;
}

export function Borrowers() {
  const [searchTerm, setSearchTerm] = useState("");

  const borrowers: Borrower[] = [
    {
      id: 1,
      studentId: "2024-0001",
      name: "Maria Santos",
      course: "BS Computer Science",
      section: "4A",
      contact: "09123456789",
      email: "maria.santos@student.crt.edu",
      totalBorrowed: 12,
      activeLoans: 2,
    },
    {
      id: 2,
      studentId: "2024-0002",
      name: "Juan Dela Cruz",
      course: "BS Information Technology",
      section: "3B",
      contact: "09234567890",
      email: "juan.delacruz@student.crt.edu",
      totalBorrowed: 8,
      activeLoans: 1,
    },
    {
      id: 3,
      studentId: "2024-0003",
      name: "Anna Reyes",
      course: "BS Computer Science",
      section: "2A",
      contact: "09345678901",
      email: "anna.reyes@student.crt.edu",
      totalBorrowed: 15,
      activeLoans: 0,
    },
    {
      id: 4,
      studentId: "2024-0004",
      name: "Pedro Martinez",
      course: "BS Information Systems",
      section: "4C",
      contact: "09456789012",
      email: "pedro.martinez@student.crt.edu",
      totalBorrowed: 20,
      activeLoans: 3,
    },
    {
      id: 5,
      studentId: "2024-0005",
      name: "Sofia Garcia",
      course: "BS Computer Science",
      section: "3A",
      contact: "09567890123",
      email: "sofia.garcia@student.crt.edu",
      totalBorrowed: 10,
      activeLoans: 1,
    },
  ];

  const filteredBorrowers = borrowers.filter(
    (borrower) =>
      borrower.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      borrower.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      borrower.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Borrower Management</h1>
        <p className="text-gray-600">View and manage student borrowers</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, ID, or course..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
          />
        </div>
      </div>

      {/* Borrowers Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Student ID
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Course/Section
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Total Borrowed
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Active Loans
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBorrowers.map((borrower) => (
                <tr key={borrower.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{borrower.studentId}</td>
                  <td className="px-6 py-4 text-sm">{borrower.name}</td>
                  <td className="px-6 py-4 text-sm">
                    {borrower.course} - {borrower.section}
                  </td>
                  <td className="px-6 py-4 text-sm">{borrower.contact}</td>
                  <td className="px-6 py-4 text-sm">{borrower.email}</td>
                  <td className="px-6 py-4 text-sm">{borrower.totalBorrowed}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        borrower.activeLoans > 0
                          ? "bg-[#3B82F6] text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {borrower.activeLoans}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="p-2 text-[#3B82F6] hover:bg-blue-50 rounded-lg transition-colors">
                      <Eye className="size-4" />
                    </button>
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
