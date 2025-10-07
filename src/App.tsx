import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./Layout";
import AnotherPage from "./pages/dashboard/AnotherPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "another-page", element: <AnotherPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
