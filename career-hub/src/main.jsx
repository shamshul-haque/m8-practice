import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./components/appliedJobs/AppliedJobs";
import ErrorPage from "./components/errorPage/ErrorPage";
import Home from "./components/home/Home";
import JobDetails from "./components/jobs/JobDetails";
import Root from "./components/root/Root";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("/jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
