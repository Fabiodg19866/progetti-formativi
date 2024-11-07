import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);


const RoutAddLinks = () => {
  return <RouterProvider router={router} />;
};

export default RoutAddLinks;
