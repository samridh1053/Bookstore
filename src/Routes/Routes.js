import Signup from "../pages/signup.js";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";

export const Routers = () => {
  const AppRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/home",
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={AppRoutes}></RouterProvider>;
};
