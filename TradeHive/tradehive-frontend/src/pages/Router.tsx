import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },{
    path: '/register',
    element: <RegisterPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}