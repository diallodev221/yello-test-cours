import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseDetails from "./pages/CourseDetails.jsx";

// liste des routes pourlanavigation entre les pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cours/:id/details",
    element: <CourseDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
