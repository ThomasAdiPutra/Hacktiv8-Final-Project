/* eslint-disable react/jsx-filename-extension */
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts';
import Home from '../pages/home';
import Detail from '../pages/detail';
import NotFoundPage from '../pages/error/NotFoundPage';
import Category from '../pages/category';

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
      {
        path: 'now-playing',
        element: <Category />,
      },
      {
        path: 'popular',
        element: <Category />,
      },
      {
        path: 'top-rated',
        element: <Category />,
      },
      {
        path: 'upcoming',
        element: <Category />,
      },
      {
        path: 'trending',
        element: <Category />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
