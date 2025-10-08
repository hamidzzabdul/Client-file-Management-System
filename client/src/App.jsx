import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard/dashboard";
import ManageClients from "./pages/dashboard/ManageClients";
import MyFiles from "./pages/dashboard/MyFiles";
import Profile from "./pages/dashboard/Profle";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/login", element: <Login /> }],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardLayout />,
      },
      {
        path: "manage-clients",
        element: <ManageClients />,
      },
      {
        path: "my-files", //clients can see their files and manage them
        element: <MyFiles />,
      },
      {
        path: "my-profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
