import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import SearchResultsPage from "../pages/SearchResultsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/items",
        element: <SearchResultsPage />,
      },
      {
        path: "/items/:id",
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

export default router;
