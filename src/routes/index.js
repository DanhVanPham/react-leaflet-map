import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout";
import Home from "../features/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
