import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginPage from "./Login.page";
import RegisterPage from "./Register.page";
import ProductsPage from "./Products/AllProducts.page";
import AddProductPage from "./Products/AddProduct.page";
import ProductDetailsPage from "./Products/ProductDetails.page";
import AllProductsByUser from "./Products/AllProductsByUser";
import FilteredProductsByUser from "./Products/FilteredProductsByUser.page";
import NavBar from "../components/Navigation/NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet /> {/* Renders the content of the current route */}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/add",
        element: <AddProductPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/products/by/user",
        element: <AllProductsByUser />,
      },
      {
        path: "/products/filtered",
        element: <FilteredProductsByUser />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
