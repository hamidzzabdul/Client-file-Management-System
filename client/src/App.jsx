import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Login from "./pages/auth/login";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/login", element: <Login /> }],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
