import { useState } from "react";
import { Plus, Search, Edit, Trash2, X } from "lucide-react";

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  status: "available" | "borrowed";
  isbn: string;
}

export function Books() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: "Introduction to Programming",
      author: "John Smith",
      category: "Computer Science",
      status: "borrowed",
      isbn: "978-0-123456-78-9",
    },
    {
      id: 2,
      title: "Database Management Systems",
      author: "Sarah Johnson",
      category: "Computer Science",
      status: "available",
      isbn: "978-0-123456-79-6",
    },
    {
      id: 3,
      title: "Web Development Fundamentals",
      author: "Michael Brown",
      category: "Computer Science",
      status: "available",
      isbn: "978-0-123456-80-2",
    },
    {
      id: 4,
      title: "Data Structures and Algorithms",
      author: "Emily Davis",
      category: "Computer Science",
      status: "borrowed",
      isbn: "978-0-123456-81-9",
    },
    {
      id: 5,
      title: "Software Engineering Principles",
      author: "David Wilson",
      category: "Computer Science",
      status: "available",
      isbn: "978-0-123456-82-6",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    isbn: "",
  });

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddBook = () => {
    setEditingBook(null);
    setFormData({ title: "", author: "", category: "", isbn: "" });
    setShowModal(true);
  };

  const handleEditBook = (book: Book) => {
    setEditingBook(book);
    setFormData({
      title: book.title,
      author: book.author,
      category: book.category,
      isbn: book.isbn,
    });
    setShowModal(true);
  };

  const handleSaveBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBook) {
      // Update existing book
      setBooks(
        books.map((book) =>
          book.id === editingBook.id ? { ...book, ...formData } : book
        )
      );
    } else {
      // Add new book
      const newBook: Book = {
        id: books.length + 1,
        ...formData,
        status: "available",
      };
      setBooks([...books, newBook]);
    }
    setShowModal(false);
    setFormData({ title: "", author: "", category: "", isbn: "" });
  };

  const handleDeleteBook = (id: number) => {
    if (confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  const getStatusBadge = (status: string) => {
    return status === "available" ? (
      <span className="px-3 py-1 rounded-full text-xs bg-[#22C55E] text-white">Available</span>
    ) : (
      <span className="px-3 py-1 rounded-full text-xs bg-[#3B82F6] text-white">Borrowed</span>
    );
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2">Book Management</h1>
          <p className="text-gray-600">Manage your library collection</p>
        </div>
        <button
          onClick={handleAddBook}
          className="flex items-center gap-2 px-6 py-3 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white rounded-lg transition-colors"
        >
          <Plus className="size-5" />
          Add New Book
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title, author, or category..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
          />
        </div>
      </div>

      {/* Books Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Book Title
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  ISBN
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBooks.map((book) => (
                <tr key={book.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{book.title}</td>
                  <td className="px-6 py-4 text-sm">{book.author}</td>
                  <td className="px-6 py-4 text-sm">{book.category}</td>
                  <td className="px-6 py-4 text-sm">{book.isbn}</td>
                  <td className="px-6 py-4 text-sm">{getStatusBadge(book.status)}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditBook(book)}
                        className="p-2 text-[#3B82F6] hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit className="size-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteBook(book.id)}
                        className="p-2 text-[#EF4444] hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Book Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl">{editingBook ? "Edit Book" : "Add New Book"}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>
            <form onSubmit={handleSaveBook} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Book Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Author</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Category</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">ISBN</label>
                  <input
                    type="text"
                    value={formData.isbn}
                    onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white rounded-lg transition-colors"
                >
                  {editingBook ? "Update" : "Add"} Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
