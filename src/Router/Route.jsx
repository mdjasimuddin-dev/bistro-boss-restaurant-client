import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "./../Pages/HomePage/HomePage";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import Carts from "../Pages/Dashboard/Carts/Carts";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItem/AddItems";
import AdminRoute from "./AdminRoute/AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ContactPage from "../Pages/ContactPage/ContactPage";
import OurShop from "../Pages/OurShop/OurShop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },

      {
        path: "/shop",
        element: <Order />,
      },

      {
        path: "/order/:category",
        element: <Order />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // normal user route
      {
        path: "cart",
        element: <Carts></Carts>,
      },

      // Admin user route
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);
