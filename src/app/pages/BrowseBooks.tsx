import { useState } from "react";
import { BookOpen, Search, CheckCircle } from "lucide-react";

export function BrowseBooks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  // Mock data for available books
  const allBooks = [
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      category: "Fiction",
      isbn: "978-0451524935",
      available: true,
    },
    {
      id: 2,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Fiction",
      isbn: "978-0141439518",
      available: true,
    },
    {
      id: 3,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      isbn: "978-0547928227",
      available: false,
    },
    {
      id: 4,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "Non-Fiction",
      isbn: "978-0062316097",
      available: true,
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category: "Fiction",
      isbn: "978-0316769174",
      available: true,
    },
    {
      id: 6,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Technology",
      isbn: "978-0132350884",
      available: true,
    },
  ];

  const filteredBooks = allBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || book.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...Array.from(new Set(allBooks.map((book) => book.category)))];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-gray-800">Browse Books</h1>
        <p className="text-gray-600">Search and request books from our collection</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title or author..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div key={book.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-[#1E3A8A]/10 p-3 rounded-lg">
                  <BookOpen className="size-8 text-[#1E3A8A]" />
                </div>
                {book.available ? (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    Available
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Borrowed
                  </span>
                )}
              </div>

              <h3 className="text-lg text-gray-800 mb-2">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-1">by {book.author}</p>
              <p className="text-xs text-gray-500 mb-3">{book.category}</p>
              <p className="text-xs text-gray-400 mb-4">ISBN: {book.isbn}</p>

              <button
                disabled={!book.available}
                className={`w-full py-2 rounded-lg transition-colors ${
                  book.available
                    ? "bg-[#1E3A8A] hover:bg-[#1E40AF] text-white"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                {book.available ? "Request to Borrow" : "Not Available"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-12 text-gray-600">
          <p>No books found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}
