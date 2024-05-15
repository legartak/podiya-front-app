import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import ErrorPage from "./error-page";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Verification from "./components/Verification/Verification";
import MainPage from "./components/MainPage/MainPage";
import AllEvents from "./components/AllEvents/AllEvents";
import EventPage from "./components/EventPage/EventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/verify",
    element: <Verification />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/catalog/all",
    element: <AllEvents />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/catalog/event/:id",
    element: <EventPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
