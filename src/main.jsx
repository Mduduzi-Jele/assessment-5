import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./reset.css";
import RegistrationForm from "./pages/RegistrationForm";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import View from "./pages/View";
import ViewQuestions from "./pages/ViewQuestions";
import Edit from "./pages/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <RegistrationForm />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/home/answer",
    element: <View />,
  },
  {
    path: "/home/viewquestions",
    element: <ViewQuestions />,
  },
  {
    path: "/home/viewquestions/edit",
    element: <Edit />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
