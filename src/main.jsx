import { createRoot } from "react-dom/client";
import { Router } from "./routes/Route";
import "./index.css";
import { RouterProvider } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
