import Signup from "../pages/signup.js";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";
import BookPage from "../pages/BookPage.jsx";
import Cart from "../pages/Cart.jsx";
import { Hurray } from "../pages/Hurray.jsx";

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
    {
      path: "/book/:bookId",
      element: <BookPage />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/hurray",
      element: <Hurray />,
    },
  ]);

  return <RouterProvider router={AppRoutes}></RouterProvider>;
};
