import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Login.page';
import RegisterPage from './Register.page';
import ProductsPage from './products.page';

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
]);

export function Router() {
  return <RouterProvider router={router} />;
}