import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./Layout";
import AnotherPage from "./pages/dashboard/AnotherPage";
import Students from "./pages/students/Students";
import Course from "./pages/course/Course";
import Task from "./pages/task/Task";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "another-page", element: <AnotherPage /> },
      { path: "students", element: <Students /> },
      { path: "course", element: <Course/> },
      { path: "task", element: <Task/> },

    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
