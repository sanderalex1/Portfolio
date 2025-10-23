import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.jsx";
import About from "./pages/About/About.jsx";
import Works from "./pages/Works/Works.jsx";
import Home from "./pages/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/Portfolio", element: <App /> },
  { path: "/Portfolio/home", element: <Home /> },
  { path: "/Portfolio/about", element: <About /> },
  { path: "/Portfolio/works", element: <Works /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
