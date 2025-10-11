import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard/dashboard";
import ManageClients from "./pages/dashboard/ManageClients";
import MyFiles from "./pages/dashboard/MyFiles";
import Profile from "./pages/dashboard/Profle";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import CreateClient from "./pages/dashboard/CreateClient";

import { Toaster } from "react-hot-toast";

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
        path: "create-clients",
        element: <CreateClient />,
      },
      {
        path: "my-files", //clients can see their files and manage them
        element: <MyFiles />,
        children: [{ path: "create-files", element: <div>Create files</div> }],
      },
      {
        path: "my-profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={Router} />;
    </>
  );
}

export default App;
