import { createBrowserRouter } from "react-router-dom";
import { Home, Multiplayer, Computer } from "../page/pages";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/multiplayer",
    element: <Multiplayer />,
  },
  {
    path: "/computer",
    element: <Computer />,
  },
]);
export { Router };
