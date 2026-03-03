import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { BookOpen, Lock, User, ArrowLeft } from "lucide-react";

export function StudentLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in production, this would validate student credentials
    if (username && password) {
      navigate("/student-portal");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] p-4">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#1E3A8A] text-white p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 p-4 rounded-full">
                <BookOpen className="size-12" />
              </div>
            </div>
            <h1 className="text-2xl mb-2">CRT Library</h1>
            <p className="text-blue-200 text-sm">Student Portal Login</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="p-8">
            <div className="space-y-6">
              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-sm mb-2 text-gray-700">
                  Student ID or Email
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                    placeholder="Enter your student ID or email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm mb-2 text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                    placeholder="Enter password"
                    required
                  />
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white py-3 rounded-lg transition-colors"
              >
                Login
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-4 text-center text-sm">
            <p className="text-gray-600 mb-2">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#3B82F6] hover:underline">
                Register here
              </Link>
            </p>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#1E3A8A]"
            >
              <ArrowLeft className="size-4" />
              Admin/Librarian Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
