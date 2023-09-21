/* eslint-disable react/jsx-filename-extension */
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts';
import Home from '../pages/home';
import Detail from '../pages/detail';

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
]);

export default router;
