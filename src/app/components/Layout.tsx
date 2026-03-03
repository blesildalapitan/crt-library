import { Link, Outlet, useNavigate, useLocation } from "react-router";
import { BookOpen, Users, BookPlus, BookCheck, AlertCircle, FileText, LogOut, LayoutDashboard } from "lucide-react";

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/login");
  };

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/dashboard/books", label: "Books", icon: BookOpen },
    { path: "/dashboard/borrowers", label: "Borrowers", icon: Users },
    { path: "/dashboard/borrow", label: "Borrow Book", icon: BookPlus },
    { path: "/dashboard/return", label: "Return Book", icon: BookCheck },
    { path: "/dashboard/overdue", label: "Overdue Records", icon: AlertCircle },
    { path: "/dashboard/reports", label: "Reports", icon: FileText },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-60 bg-[#1E3A8A] text-white flex flex-col">
        {/* Logo/Header */}
        <div className="p-6 border-b border-[#1E40AF]">
          <div className="flex items-center gap-3">
            <BookOpen className="size-8" />
            <div>
              <h1 className="text-lg font-semibold">CRT Library</h1>
              <p className="text-xs text-blue-200">Management System</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#3B82F6] text-white"
                        : "text-blue-100 hover:bg-[#1E40AF]"
                    }`}
                  >
                    <Icon className="size-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-[#1E40AF]">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-blue-100 hover:bg-[#1E40AF] transition-colors"
          >
            <LogOut className="size-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}