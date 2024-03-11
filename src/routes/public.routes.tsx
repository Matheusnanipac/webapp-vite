import Home from "@/screens/public/Home";
import Products from "@/screens/public/Products";
import { createBrowserRouter } from "react-router-dom";

export const Public = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);
