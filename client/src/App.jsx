import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import Logout from "./pages/Logout";
import { Errorpages } from "./pages/ErrorPages";
import { AppLayout } from "./components/layout/AppLayout";
import Blogs from "./pages/Blogs";
import UserBlogs from "./pages/UserBlogs";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Errorpages />,
    children: [
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "my-blogs",
        element: <UserBlogs />,
      },
      {
        path: "blog-details/:id",
        element: <BlogDetails />,
      },
      {
        path: "create-blog",
        element: <CreateBlog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
