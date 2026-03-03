import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { BookOpen, User, Clock, BookMarked, LogOut, Home } from "lucide-react";

export function StudentLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/student-login");
  };

  const navItems = [
    { path: "/student-portal", icon: Home, label: "Home" },
    { path: "/student-portal/my-books", icon: BookMarked, label: "My Books" },
    { path: "/student-portal/browse", icon: BookOpen, label: "Browse Books" },
    { path: "/student-portal/history", icon: Clock, label: "History" },
    { path: "/student-portal/profile", icon: User, label: "Profile" },
  ];

  const isActive = (path: string) => {
    if (path === "/student-portal") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-60 bg-[#1E3A8A] text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-blue-700">
          <div className="flex items-center gap-3">
            <BookOpen className="size-8" />
            <div>
              <h1 className="text-lg">CRT Library</h1>
              <p className="text-xs text-blue-200">Student Portal</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-white/10 text-white"
                    : "text-blue-100 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="size-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-blue-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-blue-100 hover:bg-white/5 hover:text-white transition-colors w-full"
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
