import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Signup from "../modules/auth/pages/Signup";
import AuthLayout from "../layouts/AuthLayout";
import Profile from "../modules/profile/pages/Profile";
import User from "../modules/auth/pages/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Signup />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "profile",
        element: <AuthLayout />,
        children: [
          {
            path: "",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);
