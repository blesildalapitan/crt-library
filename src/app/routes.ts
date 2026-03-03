import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { StudentLayout } from "./components/StudentLayout";
import { Login } from "./pages/Login";
import { StudentLogin } from "./pages/StudentLogin";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { Books } from "./pages/Books";
import { Borrowers } from "./pages/Borrowers";
import { BorrowBook } from "./pages/BorrowBook";
import { ReturnBook } from "./pages/ReturnBook";
import { OverdueRecords } from "./pages/OverdueRecords";
import { Reports } from "./pages/Reports";
import { StudentHome } from "./pages/StudentHome";
import { MyBooks } from "./pages/MyBooks";
import { BrowseBooks } from "./pages/BrowseBooks";
import { BorrowHistory } from "./pages/BorrowHistory";
import { StudentProfile } from "./pages/StudentProfile";
import { redirect } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/login"),
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/student-login",
    Component: StudentLogin,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/dashboard",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "books", Component: Books },
      { path: "borrowers", Component: Borrowers },
      { path: "borrow", Component: BorrowBook },
      { path: "return", Component: ReturnBook },
      { path: "overdue", Component: OverdueRecords },
      { path: "reports", Component: Reports },
    ],
  },
  {
    path: "/student-portal",
    Component: StudentLayout,
    children: [
      { index: true, Component: StudentHome },
      { path: "my-books", Component: MyBooks },
      { path: "browse", Component: BrowseBooks },
      { path: "history", Component: BorrowHistory },
      { path: "profile", Component: StudentProfile },
    ],
  },
]);