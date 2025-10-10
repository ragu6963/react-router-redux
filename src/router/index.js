import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";
import Products from "../pages/Products";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "posts",
        Component: PostList,
      },
      {
        path: "posts/:postId",
        Component: PostDetail,
      },
      {
        path: "products",
        Component: Products,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "",
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
