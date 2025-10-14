import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostDetail from "../pages/PostDetail";
import PostList from "../pages/PostList";
import ProductList from "../pages/ProductList";
import Profile from "../pages/Profile";
import CountIncrement from "../pages/CountPages/CountIncrement";
import CountDecrement from "../pages/CountPages/CountDecrement";
import CountView from "../pages/CountPages/CountView";

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
        path: "count-increment",
        Component: CountIncrement,
      },
      {
        path: "count-decrement",
        Component: CountDecrement,
      },
      {
        path: "count-view",
        Component: CountView,
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
        Component: ProductList,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
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
