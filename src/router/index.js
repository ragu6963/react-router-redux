import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/RootPages/Home";
import Login from "../pages/AuthPages/Login";
import Signup from "../pages/AuthPages/Signup";
import Profile from "../pages/AuthPages/Profile";
import PostList from "../pages/SupaPages/PostList";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "posts", Component: PostList },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
]);

export default router;
