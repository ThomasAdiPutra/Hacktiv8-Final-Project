/* eslint-disable react/jsx-filename-extension */
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts';
import Home from '../pages/home';
import Detail from '../pages/detail';
import NotFoundPage from '../pages/error/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: ':id/:title',
        element: <Detail />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
