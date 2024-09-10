import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Test from "../pages/Test";
import Result from "../pages/Result";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "test", element: <Test /> },
      { path: "result", element: <Result /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

export default router;
