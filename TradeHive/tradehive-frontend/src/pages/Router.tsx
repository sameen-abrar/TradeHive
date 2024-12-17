import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Login.page';
import RegisterPage from './Register.page';
import ProductsPage from './Products/allProducts.page';
import AddProductPage from './Products/addProduct.page';

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
    path: '/products/all',
    element: <ProductsPage />,
  },
  {
    path: '/products/add',
    element: <AddProductPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}