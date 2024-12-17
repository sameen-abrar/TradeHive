import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Login.page';
import RegisterPage from './Register.page';
import ProductsPage from './Products/AllProducts.page';
import AddProductPage from './Products/AddProduct.page';
import ProductDetailsPage from './Products/ProductDetails.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/products/add',
    element: <AddProductPage />,
  },
  {
    path: '/products/:id',
    element: <ProductDetailsPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}